import { writable } from 'svelte/store'

const city = writable({ name: '' })

export default city
