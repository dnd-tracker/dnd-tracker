::changelog-timeline
---
changelog: [
  {
    version: "v1.0.13",
    date: "2023-09-08",
    features: [
      {
        title: "New",
        items: [
          { text: "Configuration options for displaying specific columns and preferred column spacing in encounters" },
          { text: "Add actions to Homebrew" },
          { text: "Override HP and AC" },
          { text: "Add player name to Homebrew when of type player" },
          { text: "Google SSO" },
          { text: "Integrated Umami analytics (Doesn't collect personal information)" }
        ]
      },
      {
        title: "Improvements",
        items: [
          { text: "Changed 'Monster manual' to 'Bestiary'" },
          { text: "Bestiary is now full screen modal" },
          { text: "Info search cards can now be opened, allowing more content to fit on the screen" },
          { text: "Add initiative campaign modal updated functionality" },
          { text: "Accessibility updated for screen-readers" },
          { text: "Updated the column label from 'Actions' to 'Manage' to reduce confusion with attack actions" },
          { text: "Added extra 'DEX' label to the initiative modal for more clarity" }
        ]
      },
      {
        title: "Bug fixes",
        items: [
          { text: "Homebrew table not updating after updating row" },
          { text: "Could not update or delete encounters on campaign detail page" },
          { text: "Sometimes campaigns could not be created" }
        ]
      }
    ]
  },
  {
    version: "v1.0.12",
    date: "2023-08-15",
    features: [
      {
        title: "New",
        items: [
          { text: "Added bug logging tool for the users" },
          { text: "New styling of the website" }
        ]
      },
      {
        title: "Improvements",
        items: [
          { text: "Bulk deleting of campaigns/encounters" },
          { text: "Rich text editor for encounter notes" },
          { text: "Restyled and updated the profile page" },
          { text: "Skeleton loaders for UI components for better UX" },
          { text: "Updated error page" },
          { text: Improved the animations" },
          { text: "When creating an encounter on the campaign page, it automatically links it to the campaign" },
          { text: "Created utility functions for generating page URLs" },
          { text: "Possibility to add the initiative modifier to the rolled value" }
        ]
      },
      {
        title: "Bug fixes",
        items: [
          { text: "After creating an encounter, you couldn't create another one without refreshing" },
          { text: "Error when logging out on the profile page" },
          { text: "LogRocket created an error when trying to catch an error" },
          { text: "Every time you updated an encounter row that had 3 failed death saves, you got a notification" },
          { text: "When loading the website, sometimes you could see 'Register/Login' in the navigation component when you're already logged in" },
          { text: "Cookie banner gets shown too many times" },
          { text: "Indexes of initiative items not updating after adding new initiative items" },
          { text: "Couldn't add all homebrew items to an encounter without selecting one" },
          { text: "After 1 hour of using the site, you needed to refresh before you could do something again (expired JWT token)" },
          { text: "After creating a campaign, the modal doesn't reset for using it the next time" }
        ]
      }
    ]
  },
  {
    version: "v1.0.11",
    date: "2023-07-24",
    features: [
      {
        title: "New",
        items: [
          { text: "Ability to use arrow keys + shift for changing initiative" },
          { text: "Ability to use pageUp and PageDown for changing initiative" },
          { text: "Search component for querying open5e data" },
          { text: "Pin info cards to the bottom of an encounter" },
          { text: "New logo" }
        ]
      },
      {
        title: "Improvements",
        items: [
          { text: "Updated translation files" },
          { text: "Ability to search in the add homebrew to initiative modal" },
          { text: "Ability to sort the homebrew table on the campaign page" },
          { text: "Extra notifications troughout the application" },
          { text: "Changed social media share image to include the new logo" },
          { text: "Pop up to show all the hotkeys on the encounter page" }
        ]
      },
      {
        title: "Bug fixes",
        items: [
          { text: "can't copy a encounter without a campaign attached to it" }
        ]
      }
    ]
  },
  {
    version: "v1.0.10",
    date: "2023-07-09",
    features: [
      {
        title: "New",
        items: [
          { text: "Beta label in the navigation bar so that new user know it’s not a finished product" },
          { text: "New notification component with loading bar" }
        ]
      },
      {
        title: "Improvements",
        items: [
          { text: "Better dice rolling notification" },
          { text: "Dice roller is now in the encounter options bar instead of the floating button" },
          { text: "When on 0HP and you get healed your death saves reset" },
          { text: "When on 0HP and you get attack you get 2 death saves" },
          { text: "When 3 failed deathsaves you get a notification" },
          { text: "When 3 saved deathsaves you get a notification and stabelized tag positioned left from the death saves" }
        ]
      },
      {
        title: "Bug fixes",
        items: [
          { text: "Bad styling for dropdown on windows" },
          { text: "Name of the app was to long to fit on your phone (PWA)" }
        ]
      }
    ]
  },
  {
    version: "v1.0.9",
    date: "2023-04-31",
    features: [
      {
        title: "New",
        items: [
          { text: "You can now add DnD Tracker to your mobile/tablet as a pwa app" },
          { text: "Toggle dice roller" }
        ]
      },
      {
        title: "Improvements",
        items: [
          { text: "Styling updates" },
          { text: "Accessibility updates for screen readers" }
        ]
      },
      {
        title: "Bug fixes",
        items: [
          { text: "Memory error" }
        ]
      }
    ]
  },
  {
    version: "v1.0.8",
    date: "2023-03-11",
    features: [
      {
        title: "Improvements",
        items: [
          { text: "Changed error logging library for better error messages for debuging" },
          { text: "Updated the code responsible for index checking in encounters" },
          { text: "Updated color picking component" },
          { text: "Changed the code from javascript to typescript for stability and type checking" }
        ]
      },
      {
        title: "Bug fixes",
        items: [
          { text: "Couldn’t select conditions on encounters" },
          { text: "Couldn’t set base ac when its empty" },
          { text: "Couldn’t set base hp when its empty" },
          { text: "Random color generator sometimes generated invalid color strings" },
          { text: "When logging out the navigation bar did not update" },
          { text: "Sometimes the initiative buttons wouldn’t work" }
        ]
      }
    ]
  }
]
---
::