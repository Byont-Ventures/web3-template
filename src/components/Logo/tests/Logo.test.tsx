import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { Logo } from '../Logo'

describe('<Logo />', () => {
  describe('variant', () => {
    it('renders primary by default', () => {
      const { getByTestId } = render(<Logo />)
      expect(getByTestId('logo')).toHaveClass('fill-yellow-40')
    })
    it('renders passed variant', () => {
      const { getByTestId } = render(<Logo variant="secondary" />)
      expect(getByTestId('logo')).toHaveClass('fill-blue-5')
    })
  })
})
