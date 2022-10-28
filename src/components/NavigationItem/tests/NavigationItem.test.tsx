import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { NavigationItem } from '../NavigationItem'

describe('<NavigationItem />', () => {
  describe('children', () => {
    it('passes props', async () => {
      const childText = 'Blog'
      const { getByText } = render(
        <NavigationItem href="/">{childText}</NavigationItem>
      )
      expect(getByText(childText)).toBeInTheDocument()
    })
  })
  describe('showIndicator', () => {
    it('hides indicator by default', () => {
      const { queryByTestId } = render(<NavigationItem href="#" />)
      expect(queryByTestId('indicator')).not.toBeInTheDocument()
    })
    it('displays indicator when true', () => {
      const { queryByTestId } = render(
        <NavigationItem showIndicator={true} href="#" />
      )
      expect(queryByTestId('indicator')).toBeInTheDocument()
    })
  })
  describe('active', () => {
    it('hides icon by default', () => {
      const { queryByTestId } = render(<NavigationItem href="#" />)
      expect(queryByTestId('active')).toHaveClass('opacity-0')
    })
    it('displays indicator when true', () => {
      const { queryByTestId } = render(
        <NavigationItem active={true} href="#" />
      )
      expect(queryByTestId('active')).toBeInTheDocument()
    })
  })
})
