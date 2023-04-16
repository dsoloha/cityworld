import { writable } from 'svelte/store'
import City from '../classes/City'

const city = writable(new City())

export default city
