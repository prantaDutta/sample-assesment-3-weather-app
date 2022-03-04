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

// describe('When the data has errors', () => {
//   beforeEach(() => {
//     // @ts-ignore
//     useAxios.mockReturnValue({
//       data: {
//         error: { code: 500 },
//       },
//       loading: false,
//     })
//
//     render(<WeatherInfo capital={'city that does not exist'} />)
//   })
//
//   it('should render the error', () => {
//     expect(screen.getByRole('ErrorMessage')).toBeInTheDocument()
//   })
// })
