import logRocket from 'logrocket'

export const useNotesStore = defineStore('useNotesStore', () => {
  const currentStore = useCurrentCampaignStore()
  const supabase = useSupabaseClient()
  const toast = useToastStore()

  const loading = ref<boolean>(true)
  const data = ref<Note[]>([])
  const noteCount = ref<number>(0)
  const maxAmount = ref<number>(50)
  const search = ref<string>('')

  const visibleItems = computed<Note[]>(() => {
    return searchArray<Note>(data.value, 'title', search.value)
  })

  const noItems = computed<boolean>(() => visibleItems.value.length === 0 && !loading.value)

  async function fetch (eq?: SupabaseEq): Promise<void> {
    loading.value = true

    try {
      let query = supabase.from('notes').select('*', { count: 'exact' })

      if (eq) {
        query = query.eq(eq.field, eq.value)
      }

      const { data: notes, error: err, count } = await query

      noteCount.value = count || 0

      if (err) {
        throw err
      }
      if (notes) {
        data.value = notes
      }
    } catch (err) {
      logRocket.captureException(err as Error)
    } finally {
      loading.value = false
    }
  }

  async function addNote (note: Note): Promise<void> {
    try {
      const { data: newNote, error } = await supabase
        .from('notes')
        .insert([note as never])
        .select('*')

      if (error) {
        throw error
      } else {
        data.value = [newNote[0], ...data.value]
        noteCount.value++
      }
    } catch (err) {
      logRocket.captureException(err as Error)
      toast.error()
    }
  }

  async function deleteNote (id: number|number[]): Promise<void> {
    try {
      let query = supabase.from('notes').delete()

      query = Array.isArray(id)
        ? query.in('id', id)
        : query.eq('id', id)

      const { error: err } = await query

      if (err) {
        throw err
      } else {
        fetch({ field: 'campaign', value: currentStore.campaign!.id })
      }
    } catch (err) {
      logRocket.captureException(err as Error)
      toast.error()
    }
  }

  async function updateNote (note: Note, id: number): Promise<void> {
    try {
      const { data: updatedNote, error } = await supabase
        .from('notes')
        .update(note as never)
        .eq('id', id)
        .select('*')

      if (error) {
        throw error
      } else {
        const index = data.value.findIndex(e => e.id === id)
        data.value[index] = {
          ...data.value[index],
          ...updatedNote[0] as Note
        }
      }
    } catch (err) {
      logRocket.captureException(err as Error)
      toast.error()
    }
  }

  return {
    noteCount,
    maxAmount,
    search,
    data,
    loading,
    visibleItems,
    noItems,
    fetch,
    addNote,
    deleteNote,
    updateNote
  }
})
