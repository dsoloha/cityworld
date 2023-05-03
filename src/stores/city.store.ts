import City from '$classes/City'
import { get, writable } from 'svelte/store'
import cities from './cities.store'

const city = writable(new City())

cities.update((state) => state.set(get(city).ID, city))

export default city
