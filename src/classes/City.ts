import common from '$stores/common.store'
import { get } from 'svelte/store'

export default class City {
  continent: string
  country: string
  id: number
  name: string

  constructor(name?: string) {
    this.continent = ''
    this.country = ''
    this.id = get(common).id
    this.name = name ?? ''

    common.set({ id: this.id++ })
  }
}
