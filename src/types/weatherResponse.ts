export interface IWeatherResponse {
  current: {
    temperature: number
    weather_icons: string[]
    wind_speed: number
    precip: 0
  }
  success?: boolean
  error?: {
    code: number
  }
}
