import { nanoid } from 'nanoid'

export type Continent =
  | 'Africa'
  | 'Antarctica'
  | 'Asia'
  | 'Australia'
  | 'Europe'
  | 'North America'
  | 'South America'

export type Region =
  | 'Australasia'
  | 'Caribbean'
  | 'Central America'
  | 'Central Asia'
  | 'Channel Islands'
  | 'Eastern Africa'
  | 'Eastern Asia'
  | 'Eastern Europe'
  | 'Melanesia'
  | 'Micronesia'
  | 'Middle Africa'
  | 'Northern Africa'
  | 'Northern America'
  | 'Northern Asia'
  | 'Northern Europe'
  | 'Oceania'
  | 'Polynesia'
  | 'South America'
  | 'Southeastern Asia'
  | 'Southern Africa'
  | 'Southern Asia'
  | 'Southern Europe'
  | 'Western Africa'
  | 'Western Asia'
  | 'Western Europe'

export type Terrain =
  | 'canyon'
  | 'coastal'
  | 'desert'
  | 'forest'
  | 'hill'
  | 'island'
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
  /** The region of the world in which the city is located. */
  region: Region
  /** The type of terrain in which the city is located. */
  terrain: Terrain

  constructor(name?: string) {
    this.continent = 'Africa'
    this.country = ''
    this.ID = nanoid()
    this.name = name ?? ''
    this.region = 'Australasia'
    this.terrain = 'canyon'
  }
}
