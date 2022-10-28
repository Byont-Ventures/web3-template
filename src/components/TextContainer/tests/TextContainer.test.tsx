import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { TextContainer } from '../TextContainer'

describe('<TextContainer />', () => {
  describe('children', () => {
    it('passes props', () => {
      const childText = 'Get in touch!'
      const { getByTestId } = render(<TextContainer>{childText}</TextContainer>)
      expect(getByTestId('textContainer')).toHaveTextContent(childText)
    })
    it('passes intrinsic element props', () => {
      const describedByText = 'Get in touch!'
      const { getByTestId } = render(
        <TextContainer aria-describedby={describedByText} />
      )
      expect(getByTestId('textContainer')).toHaveAttribute(
        'aria-describedby',
        describedByText
      )
    })
  })
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <TextContainer className="mycustomnonexistingclass" />
      )
      expect(getByTestId('textContainer')).toHaveClass(
        'mycustomnonexistingclass'
      )
    })
  })
})
