import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { Section } from '../Section'

describe('<Section />', () => {
  describe('children', () => {
    it('passes props', async () => {
      const childText = 'Get in touch!'
      const { getByText } = render(<Section>{childText}</Section>)
      expect(getByText(childText)).toBeInTheDocument()
    })
    it('passes intrinsic element props', () => {
      const describedByText = 'Get in touch!'
      const { getByTestId } = render(
        <Section aria-describedby={describedByText} />
      )
      expect(getByTestId('section')).toHaveAttribute(
        'aria-describedby',
        describedByText
      )
    })
  })
  describe('fullWidth', () => {
    it('renders container by default', () => {
      const { getByTestId } = render(<Section />)
      expect(getByTestId('section')).not.toHaveClass('w-full')
      expect(getByTestId('section')).toHaveClass('container')
    })
    it('renders full width when true', () => {
      const { getByTestId } = render(<Section fullWidth={true} />)
      expect(getByTestId('section')).toHaveClass('w-full')
    })
    it('renders child with container prop when true', () => {
      const { getByTestId } = render(<Section fullWidth={true} />)
      expect(getByTestId('section').firstChild).toHaveClass('container')
    })
  })
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <Section className="mycustomnonexistingclass" />
      )
      expect(getByTestId('section')).toHaveClass('mycustomnonexistingclass')
      expect(getByTestId('section').classList.length).toBeGreaterThan(1)
    })
  })
})
