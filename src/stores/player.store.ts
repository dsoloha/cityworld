import { writable } from 'svelte/store'

const player = writable({ name: '', occupation: '' })

export default player
