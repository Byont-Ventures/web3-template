import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { Link } from '../Link'

describe('<Link />', () => {
  describe('children', () => {
    it('passes props', () => {
      const childText = 'Get in touch!'
      const { getByTestId } = render(<Link href="#">{childText}</Link>)
      expect(getByTestId('link')).toHaveTextContent(childText)
    })
    it('passes href', () => {
      const href = '/#my-internal-link'
      const { getByTestId } = render(<Link href={href} />)
      expect(getByTestId('link')).toHaveAttribute('href', href)
    })
  })
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <Link href="#" className="mycustomnonexistingclass" />
      )
      expect(getByTestId('link')).toHaveClass('mycustomnonexistingclass')
      expect(getByTestId('link').classList.length).toBeGreaterThan(1)
    })
  })
})
