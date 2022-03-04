import React from 'react'
import { screen } from '@testing-library/react'
import { Home } from './index'

it('should render "Hello world" in Home', () => {
  // @ts-ignore
  renderWithRouter(<Home />)
  expect(screen.getByText(/Weather App/)).toBeInTheDocument()
})
