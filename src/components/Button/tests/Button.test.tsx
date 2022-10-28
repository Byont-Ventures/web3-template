import '@testing-library/jest-dom'

import { faArrowRight } from '@fortawesome/pro-solid-svg-icons'

import { render } from '@testing-library/react'

import { Button } from '../Button'

describe('<Button />', () => {
  describe('children', () => {
    it('passes props', () => {
      const childText = 'Get in touch!'
      const { getByText } = render(<Button>{childText}</Button>)
      expect(getByText(childText)).toBeInTheDocument()
    })
    it('passes props when icon passed', () => {
      const childText = 'Get in touch!'
      const { getByText } = render(
        <Button icon={faArrowRight}>{childText}</Button>
      )
      expect(getByText(childText)).toBeInTheDocument()
    })
    it('passes intrinsic element props', () => {
      const describedByText = 'Get in touch!'
      const { getByTestId } = render(
        <Button aria-describedby={describedByText} />
      )
      expect(getByTestId('Button')).toHaveAttribute(
        'aria-describedby',
        describedByText
      )
    })
  })
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <Button className="mycustomnonexistingclass" />
      )
      expect(getByTestId('Button')).toHaveClass('mycustomnonexistingclass')
      expect(getByTestId('Button').classList.length).toBeGreaterThan(1)
    })
  })
  describe('variant', () => {
    it('renders primary button by default', () => {
      const { getByTestId } = render(<Button variant={undefined} />)
      expect(getByTestId('Button')).toHaveClass('bg-blue-5')
    })

    it('renders primary button when variant passed', () => {
      const { getByTestId } = render(<Button variant="primary" />)
      expect(getByTestId('Button')).toHaveClass('bg-blue-5')
    })

    it('renders secondary button when variant passed', () => {
      const { getByTestId } = render(<Button variant="secondary" />)
      expect(getByTestId('Button')).toHaveClass('bg-purple-40')
    })

    it('renders tertiary button when variant passed', () => {
      const { getByTestId } = render(<Button variant="tertiary" />)
      expect(getByTestId('Button').className).not.toContain('bg-blue')
    })
  })
  describe('icon', () => {
    it('renders without icon by default', () => {
      const { queryByTestId } = render(<Button />)
      expect(queryByTestId('Icon')).not.toBeInTheDocument()
    })
    it('renders icon when passed', () => {
      const { getByTestId } = render(<Button icon={faArrowRight} />)
      expect(getByTestId('Icon')).toBeInTheDocument()
    })
  })
})
