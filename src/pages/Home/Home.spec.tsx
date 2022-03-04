import React from 'react'
import { screen } from '@testing-library/react'
import { Home } from './index'
import userEvent from '@testing-library/user-event'

describe('renders "Home"', () => {
  beforeEach(() => {
    // @ts-ignore
    renderWithRouter(<Home />)
  })

  it('should render "Weather App in Home', () => {
    expect(screen.getByText(/Weather App/)).toBeInTheDocument()
  })

  it('InputField Should Work Properly', () => {
    const el = screen.getByRole('TextField').children[0] as any
    userEvent.type(el, 'Bangladesh')
    expect(el).toHaveValue('Bangladesh')
  })

  it('button should be disabled if country does not have a value', async () => {
    expect(screen.getByText(/Submit/i).closest('button')).toBeDisabled()
  })
})
