import '@testing-library/jest-dom'

import { screen, render } from '@testing-library/react'

import { RootLayout } from '../RootLayout'

describe('<RootLayout />', () => {
  describe('children', () => {
    it('passes props', async () => {
      const childText = 'Get in touch!'

      render(<RootLayout>{childText}</RootLayout>)

      expect(screen.getByText(childText)).toBeInTheDocument()
    })
    it('contains skip to main link', async () => {
      render(<RootLayout />)

      expect(screen.getByTestId('skipToMain')).toHaveAttribute(
        'href',
        '/#maincontent'
      )
    })
  })
})
