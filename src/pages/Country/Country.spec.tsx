import { screen } from '@testing-library/react'
import { Country } from './index'
import { useLocation } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'

jest.mock('../../hooks/useAxios')
jest.mock('react-router-dom')

describe('when country component does not receive the state', () => {
  it('should render error', () => {
    // @ts-ignore
    useLocation.mockReturnValue({
      state: {
        country: null,
      },
    })
    // @ts-ignore
    renderWithRouter(<Country />)
    expect(
      screen.getByText(/Something Went Wrong. Please Try again/i)
    ).toBeInTheDocument()
  })
})

describe('when country component receives the state', () => {
  beforeEach(() => {
    // @ts-ignore
    useLocation.mockReturnValue({
      state: {
        country: 'Bangladesh',
      },
    })
  })

  describe('When data is loading', () => {
    beforeEach(() => {
      // @ts-ignore
      useAxios.mockReturnValue({
        data: null,
        loading: true,
      })

      // @ts-ignore
      renderWithRouter(<Country />)
    })

    it('should render the loader', () => {
      expect(screen.getByRole('Loader')).toBeInTheDocument()
    })
  })

  describe('When the data has errors', () => {
    beforeEach(() => {
      // @ts-ignore
      useAxios.mockReturnValue({
        error: {
          someError: true,
        },
        loading: false,
      })

      // @ts-ignore
      renderWithRouter(<Country />)
    })

    it('should render the error', () => {
      expect(screen.getByRole('ErrorMessage')).toBeInTheDocument()
    })
  })

  describe('When the data is valid', () => {
    beforeEach(() => {
      // @ts-ignore
      useAxios.mockReturnValue({
        data: [
          {
            name: { common: 'Bangladesh' },
            capital: 'Dhaka',
            population: 164689383,
            latlng: [24, 90],
            flags: {
              svg: 'https://flagcdn.com/bd.svg',
            },
          },
        ],
        loading: false,
      })
      // @ts-ignore
      renderWithRouter(<Country />)
    })

    it('should render the passed dummy data', () => {
      expect(screen.getByRole('CountryData')).toBeInTheDocument()
      expect(screen.getByText('Country Name: Bangladesh')).toBeInTheDocument()
      expect(screen.getByText('Capital: Dhaka')).toBeInTheDocument()
    })
  })
})
