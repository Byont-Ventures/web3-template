import { faArrowRight } from '@fortawesome/pro-solid-svg-icons'
import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { Icon } from '../Icon'

describe('<Section />', () => {
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <Icon icon={faArrowRight} className="mycustomnonexistingclass" />
      )
      expect(getByTestId('icon')).toHaveClass('mycustomnonexistingclass')
    })
    it('contains fixed width and height', () => {
      const { getByTestId } = render(<Icon icon={faArrowRight} />)
      expect(getByTestId('icon')).toHaveClass('w-4 h-4')
    })
  })
})
