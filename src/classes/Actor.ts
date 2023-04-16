import actor from '$stores/actor.store'
import { get } from 'svelte/store'

export default class Actor {
  height: number
  id: number
  name: {
    first: string
    middle: string
    last: string
  }
  occupation: string
  sex: string
  weight: number

  constructor(name?: { first: string; middle: string; last: string }) {
    this.height = 180
    this.id = get(actor).id
    this.name = name ?? {
      first: '',
      middle: '',
      last: '',
    }
    this.occupation = ''
    this.sex = ''
    this.weight = 70

    actor.set({ id: this.id })
  }
}
