import '@testing-library/jest-dom'

import * as NextRouter from 'next/router'

import { fireEvent, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Header } from '../Header'
import { NavigationItem } from '../../NavigationItem'

jest.mock('../../NavigationItem')

describe('<Header />', () => {
  const mockUseRouter = jest.spyOn(NextRouter, 'useRouter')

  beforeEach(() => {
    mockUseRouter.mockImplementation(
      () =>
        ({
          pathname: '/',
        } as NextRouter.NextRouter)
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('render', () => {
    const addEventListenerSpy = jest.spyOn(global, 'addEventListener')
    const removeEventListenerSpy = jest.spyOn(global, 'removeEventListener')

    it('registers event listener on mount', () => {
      render(<Header />)

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function)
      )
    })
    it('unregisters event listener on unmount', () => {
      const { unmount } = render(<Header />)

      unmount()

      expect(removeEventListenerSpy).toBeCalledWith(
        'scroll',
        expect.any(Function)
      )
    })
  })
  describe('showBackgroundScrollPosition', () => {
    it('adds background when scrolling down', async () => {
      const expectBackgroundVisible = 23

      const { getByTestId } = render(
        <Header showBackgroundScrollPosition={expectBackgroundVisible} />
      )

      expect(getByTestId('header')).toHaveClass('bg-opacity-0')

      fireEvent.scroll(window, { target: { scrollY: expectBackgroundVisible } })

      expect(getByTestId('header')).toHaveClass('bg-opacity-100')
    })
    it('removes background when scrolling up', async () => {
      const expectBackgroundVisible = 23
      const { getByTestId } = render(
        <Header showBackgroundScrollPosition={expectBackgroundVisible} />
      )

      fireEvent.scroll(window, { target: { scrollY: expectBackgroundVisible } })
      expect(getByTestId('header')).toHaveClass('bg-opacity-100')

      fireEvent.scroll(window, { target: { scrollY: 0 } })
      expect(getByTestId('header')).toHaveClass('bg-opacity-0')
    })
    it('defaults to 50', () => {
      const { getByTestId } = render(<Header />)

      fireEvent.scroll(window, { target: { scrollY: 50 } })
      expect(getByTestId('header')).toHaveClass('bg-opacity-100')
    })
  })
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <Header className="mycustomnonexistingclass" />
      )
      expect(getByTestId('header')).toHaveClass('mycustomnonexistingclass')
      expect(getByTestId('header').classList.length).toBeGreaterThan(1)
    })
  })
  describe('menuButton', () => {
    const clearTimeOutSpy = jest.spyOn(global, 'clearTimeout')

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('is hidden by default', () => {
      const { getByTestId } = render(<Header />)
      expect(getByTestId('navigation')).toHaveClass('hidden')
    })
    it('appears on menu button click', async () => {
      const { getByTestId } = render(<Header />)

      await userEvent.click(getByTestId('openMenuButton'))

      expect(getByTestId('navigation')).not.toHaveClass('hidden')
    })
    it('disappears on second menu button click', async () => {
      const { getByTestId } = render(<Header />)

      await userEvent.click(getByTestId('openMenuButton'))
      expect(getByTestId('navigation')).not.toHaveClass('hidden')

      await userEvent.click(getByTestId('openMenuButton'))

      await waitFor(() =>
        expect(getByTestId('navigation')).toHaveClass('hidden')
      )
    })
    it('clears initial timeout when pressing button twice', async () => {
      const { getByTestId } = render(<Header />)

      await userEvent.click(getByTestId('openMenuButton'))

      expect(clearTimeOutSpy).toBeCalled()
    })
  })
  describe('menuBackground', () => {
    it('is hidden by default', () => {
      const { getByTestId } = render(<Header />)

      expect(getByTestId('menuOpenBackground')).toHaveClass('hidden')
    })
    it('is visible on menu open', async () => {
      const { getByTestId } = render(<Header />)

      await userEvent.click(getByTestId('openMenuButton'))

      expect(getByTestId('menuOpenBackground')).not.toHaveClass('hidden')
    })
    it('disappears on click', async () => {
      const { getByTestId } = render(<Header />)

      await userEvent.click(getByTestId('openMenuButton'))

      await userEvent.click(getByTestId('menuOpenBackground'))

      await waitFor(() =>
        expect(getByTestId('menuOpenBackground')).toHaveClass('hidden')
      )
    })
    it('closes menu on click', async () => {
      const { getByTestId } = render(<Header />)

      await userEvent.click(getByTestId('openMenuButton'))

      await userEvent.click(getByTestId('menuOpenBackground'))

      await waitFor(() =>
        expect(getByTestId('navigation')).toHaveClass('hidden')
      )
    })
  })
  describe('navigationItem', () => {
    const mockNavigationItem = NavigationItem as jest.MockedFunction<
      typeof NavigationItem
    >
    beforeEach(() => {
      mockUseRouter.mockImplementation(
        () =>
          ({
            pathname: '/careers',
          } as NextRouter.NextRouter)
      )
      mockNavigationItem.mockImplementation(() => <></>)
    })
    it('passes active attribute to current navigation item', () => {
      render(<Header />)

      expect(mockNavigationItem).toBeCalledTimes(3)

      expect(mockNavigationItem).toHaveBeenLastCalledWith(
        expect.objectContaining({ active: true }),
        {}
      )
    })
  })
})
