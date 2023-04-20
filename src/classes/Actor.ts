import common from '$stores/common.store'
import { get } from 'svelte/store'

export default class Actor {
  /** How tall the actor is, in cm. */
  height: number
  /** The actor's ID. */
  id: number
  /** The actor's name. */
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
    this.id = get(common).id
    this.name = name ?? {
      first: '',
      middle: '',
      last: '',
    }
    this.occupation = ''
    this.sex = ''
    this.weight = 70

    common.set({ id: this.id++ })
  }

  get full() {
    let name = this.name.first

    if (this.name.middle) name += ` ${this.name.middle}`
    if (this.name.last) name += ` ${this.name.last}`

    return name
  }
}
