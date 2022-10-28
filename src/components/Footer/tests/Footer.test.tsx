import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { Footer } from '../Footer'

describe('<Footer />', () => {
  describe('children', () => {
    it('passes intrinsic element props', () => {
      const describedByText = 'Get in touch!'
      const { getByTestId } = render(
        <Footer aria-describedby={describedByText} />
      )
      expect(getByTestId('footer')).toHaveAttribute(
        'aria-describedby',
        describedByText
      )
    })
  })
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <Footer className="mycustomnonexistingclass" />
      )
      expect(getByTestId('footer')).toHaveClass('mycustomnonexistingclass')
    })
  })
})
