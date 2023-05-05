import { nanoid } from 'nanoid'

export type Continent =
  | 'Africa'
  | 'Antarctica'
  | 'Asia'
  | 'Australia'
  | 'Europe'
  | 'North America'
  | 'South America'

export type Terrain =
  | 'canyon'
  | 'desert'
  | 'forest'
  | 'hill'
  | 'jungle'
  | 'marsh'
  | 'mesa'
  | 'mountain'
  | 'oasis'
  | 'ocean'
  | 'plain'
  | 'plateau'
  | 'playa'
  | 'river'
  | 'tundra'
  | 'valley'

export default class City {
  /** The continent on which the city is located. */
  continent: Continent
  /** The country in which the city is located. */
  country: string
  /** The city's ID. */
  ID: string
  /** The city's name. */
  name: string
  /** The type of terrain in which the city is located. */
  terrain: Terrain

  constructor(name?: string) {
    this.continent = 'Africa'
    this.country = ''
    this.ID = nanoid()
    this.name = name ?? ''
    this.terrain = 'canyon'
  }
}
