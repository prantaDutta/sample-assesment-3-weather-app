import { render, screen } from '@testing-library/react'
import { ShowErrorMessage } from './index'

it('should show the error msg passed as prop', () => {
  render(<ShowErrorMessage errorMsg={'No Country Found'} />)
  expect(screen.getByText('No Country Found')).toBeInTheDocument()
})

it('should show the default error msg if no props was passed', () => {
  render(<ShowErrorMessage />)
  expect(screen.getByText('Something Went Wrong')).toBeInTheDocument()
})
