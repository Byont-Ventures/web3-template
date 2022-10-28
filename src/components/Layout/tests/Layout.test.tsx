import '@testing-library/jest-dom'

import { render, within } from '@testing-library/react'
import { Footer } from '../../Footer'

import { Layout } from '../Layout'

jest.mock('../../Header')
jest.mock('../../Footer')

describe('<Layout />', () => {
  describe('children', () => {
    it('passes props', async () => {
      const childText = 'Get in touch!'
      const { getByTestId } = render(<Layout>{childText}</Layout>)

      expect(
        within(getByTestId('layout')).getByText(childText)
      ).toBeInTheDocument()
    })
    it('passes intrinsic element props', () => {
      const describedByText = 'Get in touch!'
      const { getByTestId } = render(
        <Layout aria-describedby={describedByText} />
      )
      expect(getByTestId('layout')).toHaveAttribute(
        'aria-describedby',
        describedByText
      )
    })
  })
  describe('skipToMain', () => {
    it('matches it href with main elements id', async () => {
      const { getByTestId, queryAllByTestId } = render(<Layout />)

      expect(queryAllByTestId('skipToMain')[0]).toHaveAttribute(
        'href',
        '/#maincontent'
      )

      expect(getByTestId('layout')).toHaveAttribute('id', 'maincontent')
    })
  })
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <Layout className="mycustomnonexistingclass" />
      )
      expect(getByTestId('layout')).toHaveClass('mycustomnonexistingclass')
    })
  })
  describe('callToAction', () => {
    it('renders empty by default', () => {
      const { queryByTestId } = render(<Layout callToAction={undefined} />)
      expect(queryByTestId('callToAction')).toBeNull()
    })
    it('renders parent div when supplied', () => {
      const { getByTestId } = render(
        <Layout callToAction={<div>Test Container</div>} />
      )
      expect(getByTestId('callToAction')).toBeInTheDocument()
    })
  })
  describe('footerVariant', () => {
    const mockFooter = Footer as jest.MockedFunction<typeof Footer>

    afterEach(() => {
      jest.clearAllMocks()
    })
    it('passes undefined by default', () => {
      render(<Layout />)
      expect(mockFooter).toBeCalledWith(
        expect.objectContaining({ variant: undefined }),
        {}
      )
    })
    it('passes variant when supplied', () => {
      render(<Layout footerVariant="dark" />)
      expect(mockFooter).toBeCalledWith(
        expect.objectContaining({ variant: 'dark' }),
        {}
      )
    })
    it('passes footer variant to footer with call to action', () => {
      render(
        <Layout footerVariant="dark" callToAction={<div>Test Container</div>} />
      )
      expect(mockFooter).toBeCalledWith(
        expect.objectContaining({ variant: 'dark' }),
        {}
      )
    })
  })
})
