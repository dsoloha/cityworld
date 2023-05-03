import { nanoid } from 'nanoid'

type Continent =
  | 'Africa'
  | 'Antarctica'
  | 'Asia'
  | 'Australia'
  | 'Europe'
  | 'North America'
  | 'South America'

export default class City {
  /** The continent on which the city is located. */
  continent: Continent
  /** The country in which the city is located. */
  country: string
  /** The city's ID. */
  ID: string
  /** The city's name. */
  name: string

  constructor(name?: string) {
    this.continent = 'Africa'
    this.country = ''
    this.ID = nanoid()
    this.name = name ?? ''
  }
}
