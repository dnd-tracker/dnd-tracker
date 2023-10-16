import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const body = await readBody(event)

  if (!correctWebhookType(body.type)) {
    return
  }

  const subscription = body.data.object

  const { data } = await client
    .from('profiles')
    .select('stripe_last_event')
    .eq('stripe_id', subscription.customer)
    .single()

  if (!data) {
    return
  } else if (data?.stripe_last_event > body.created) {
    return `Did not handle ${body.type} because it was an old event`
  }

  let cancel = cancelSubscription(body.type)

  if (subscription.status === 'incomplete') {
    cancel = true
  }

  const stripeData: Partial<Stripe> = {
    stripe_last_event: body.created,
    stripe_status: subscription.status,
    stripe_trail_ends_at: subscription.trail_end,
    stripe_ends_at: subscription.ended_at,
    stripe_started_at: subscription.start_date,
    subscription_type: 'free',
    paid_subscription_active: !cancel,
    subscription_id: cancel ? null : subscription.id
  }

  if (!cancel) {
    const products = await $fetch('/api/stripe/products')
    const subType = getSubscriptionType(products, subscription.items?.data[0].plan.id)

    stripeData.subscription_type = subType
  }

  await client
    .from('profiles')
    .update(stripeData as never)
    .eq('stripe_id', subscription.customer)

  return `handled ${body.type}`
})

function getSubscriptionType (products: StripeProduct[], id?: string): StripeSubscriptionType {
  if (!id) {
    return 'free'
  }
  let sub: StripeSubscriptionType = 'free'

  products.forEach((product) => {
    if (product.monthId === id || product.yearId === id) {
      sub = product.name.replace(' plan', '').toLowerCase() as StripeSubscriptionType
    }
  })

  return sub
}

function correctWebhookType (type: StripeWebhookType): boolean {
  return (
    type === 'customer.subscription.created' ||
    type === 'customer.subscription.resumed' ||
    type === 'customer.subscription.updated' ||
    type === 'customer.subscription.deleted' ||
    type === 'customer.subscription.paused' ||
    type === 'invoice.payment_failed'
  )
}

function cancelSubscription (type: StripeWebhookType): boolean {
  return (
    type === 'customer.subscription.deleted' ||
    type === 'customer.subscription.paused' ||
    type === 'invoice.payment_failed'
  )
}
