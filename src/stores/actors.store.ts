import type Actor from '$classes/Actor'
import { writable, type Writable } from 'svelte/store'

const actors: Writable<Map<number, Actor>> = writable(new Map([]))

export default actors
