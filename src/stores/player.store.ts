import { writable } from 'svelte/store'
import Actor from '$classes/Actor'

const player = writable(new Actor())

export default player
