import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SkipToMain } from '../SkipToMain'

describe('<SkipToMain />', () => {
  describe('accessibility', () => {
    it('focuses button on first tab press', async () => {
      const { queryAllByTestId } = render(<SkipToMain />)

      await userEvent.keyboard('[Tab]')
      expect(queryAllByTestId('skipToMain')[0]).toHaveFocus()
    })
  })
  describe('href', () => {
    it('is #maincontent', () => {
      const { queryAllByTestId } = render(<SkipToMain />)

      expect(queryAllByTestId('skipToMain')[0]).toHaveAttribute(
        'href',
        '/#maincontent'
      )
    })
  })
})
