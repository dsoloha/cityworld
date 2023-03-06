import { writable } from 'svelte/store'

const city = writable({ name: 'city name' })

export default city
