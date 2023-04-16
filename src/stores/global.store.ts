import { writable } from 'svelte/store'

const global = writable({ id: 0 })

export default global
