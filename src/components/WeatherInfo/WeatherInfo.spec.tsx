import useAxios from '../../hooks/useAxios'
import { render, screen } from '@testing-library/react'
import { WeatherInfo } from './index'

jest.mock('../../hooks/useAxios')

describe('When data is loading', () => {
  beforeEach(() => {
    // @ts-ignore
    useAxios.mockReturnValue({
      data: null,
      loading: true,
    })

    render(<WeatherInfo capital={'New York'} />)
  })

  it('should render the loader', () => {
    expect(screen.getByRole('Loader')).toBeInTheDocument()
  })
})

describe('When the data has errors', () => {
  beforeEach(() => {
    // @ts-ignore
    useAxios.mockReturnValue({
      data: {
        error: { code: 500 },
      },
      loading: false,
    })

    render(<WeatherInfo capital={'city that does not exist'} />)
  })

  it('should render the error', () => {
    expect(screen.getByRole('ErrorMessage')).toBeInTheDocument()
  })
})

describe('When the data is valid', () => {
  beforeEach(() => {
    // @ts-ignore
    useAxios.mockReturnValue({
      data: {
        current: {
          temperature: 4,
          weather_icons: [
            'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png',
          ],
          wind_speed: 30,
          precip: 0,
        },
      },
      loading: false,
    })

    render(<WeatherInfo capital={'Dhaka'} />)
  })

  it('should render the passed dummy data', () => {
    expect(screen.getByRole('WeatherData')).toBeInTheDocument()
    expect(screen.getByText('Temperature: 4')).toBeInTheDocument()
    expect(screen.getByText('Wind Speed: 30')).toBeInTheDocument()
  })
})
