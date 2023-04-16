import { writable } from 'svelte/store'
import City from '../classes/City'

const city = writable({ name: '' })

export default city
