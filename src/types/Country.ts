export interface ICountry {
  name: {
    common: string
  }
  capital: string
  population: number
  latlng: string[]
  flags: {
    png: string
    svg: string
  }
}
