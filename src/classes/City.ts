import global from '$stores/global.store'
import { get } from 'svelte/store'

export default class City {
  id: number
  name: string

  constructor(name?: string) {
    this.id = get(global).id
    this.name = name ?? ''

    global.set({ id: this.id++ })
  }
}
