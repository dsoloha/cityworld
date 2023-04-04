import { writable } from 'svelte/store'

const player = writable({ name: { first: '', middle: '', last: '' }, occupation: '' })

export default player
