import { writable } from 'svelte/store'

const see = writable({
  setup: {
    intro: true,
    player: false,
  },
})

export default see
