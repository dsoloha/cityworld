import { writable } from 'svelte/store'

const units = writable({ weight: 'kg', height: 'cm' })

export default units
