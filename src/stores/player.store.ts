import { writable } from 'svelte/store'

const player = writable({
  height: 180,
  name: { first: '', middle: '', last: '' },
  occupation: '',
  sex: '',
  weight: 70,
})

export default player
