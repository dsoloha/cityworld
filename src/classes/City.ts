<<<<<<< HEAD
import common from '$stores/common.store.ts'
=======
import global from '$stores/global.store'
>>>>>>> 19b3735 (Added City class)
import { get } from 'svelte/store'

export default class City {
  id: number
  name: string

  constructor(name?: string) {
<<<<<<< HEAD
    this.id = get(common).id
    this.name = name ?? ''

    common.set({ id: this.id++ })
=======
    this.id = get(global).id
    this.name = name ?? ''

    global.set({ id: this.id++ })
>>>>>>> 19b3735 (Added City class)
  }
}
