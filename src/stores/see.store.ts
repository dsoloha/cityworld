import { writable } from 'svelte/store'

const see = writable({
  setup: {
    city: false,
    intro: true,
    login: false,
    player: false,
  },
  ui: false,
})

export default see
