import { writable } from 'svelte/store'

const actor = writable({ id: 0 })

export default actor
