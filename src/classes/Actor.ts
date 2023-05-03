import { nanoid } from 'nanoid'

export default class Actor {
  /** The actor's height, in cm. */
  height: number
  /** The actor's ID. */
  ID: string
  /** The actor's name. */
  name: {
    /** The actor's first name. */
    first: string
    /** The actor's middle name. */
    middle: string
    /** The actor's last name. */
    last: string
  }
  /** The actor's occupation or previous occupation. */
  occupation: string
  /** The actor's biological sex. */
  sex: string
  /** The actor's weight, in kg. */
  weight: number

  constructor(name?: { first: string; middle: string; last: string }) {
    this.height = 180
    this.ID = nanoid()
    this.name = name ?? {
      first: '',
      middle: '',
      last: '',
    }
    this.occupation = ''
    this.sex = ''
    this.weight = 70
  }

  /** Returns the actor's full name. */
  get full() {
    let name = this.name.first

    if (this.name.middle) name += ` ${this.name.middle}`
    if (this.name.last) name += ` ${this.name.last}`

    return name
  }
}
