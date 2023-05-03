import type City from '$classes/City'
import { writable, type Writable } from 'svelte/store'

const cities: Writable<Map<string, Writable<City>>> = writable(new Map([]))

export default cities
