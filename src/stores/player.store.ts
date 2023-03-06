import { writable } from 'svelte/store'

const player = writable({ name: '' })

export default player
