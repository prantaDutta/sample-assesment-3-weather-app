import { render, screen } from '@testing-library/react'
import { CenteredCircularProgress } from './index'

it('should not show anything if loading is false', () => {
  render(<CenteredCircularProgress loading={false} />)
  expect(screen.queryByRole('Loader')).toBeNull()
})

it('should show the loader if loading is true', () => {
  render(<CenteredCircularProgress loading={true} />)
  expect(screen.queryByRole('Loader')).toBeTruthy()
})

it('should show the loader if loading is not passed', () => {
  render(<CenteredCircularProgress />)
  expect(screen.queryByRole('Loader')).toBeTruthy()
})
