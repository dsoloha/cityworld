import { writable } from 'svelte/store'

const common = writable({ id: 0, units: { weight: 'kg', height: 'cm' } })

export default common
