import {
  faArrowTurnDown,
  faArrowTurnUp,
  faArrowUpRight,
} from '@fortawesome/pro-solid-svg-icons'

import { Button } from '../Button'
import { Logo } from '../Logo'
import { NavigationItem } from '../NavigationItem'
import { Link } from '../Link'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export interface HeaderProps {
  showBackgroundScrollPosition?: number
}

export const Header: React.FC<
  JSX.IntrinsicElements['header'] & HeaderProps
> = ({ showBackgroundScrollPosition = 1, className, ...props }) => {
  const router = useRouter()

  const [scrollDown, setScrollDown] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [addHiddenClass, setAddHiddenClass] = useState(true)

  let timer: ReturnType<typeof setTimeout>

  const handleScroll: EventListener = () => {
    window.scrollY >= showBackgroundScrollPosition
      ? setScrollDown(true)
      : setScrollDown(false)
  }

  const toggleMenu = (newMenuOpen: boolean) => {
    if (timer) {
      setAddHiddenClass(!newMenuOpen)
      clearTimeout(timer)
    }

    if (newMenuOpen) {
      setAddHiddenClass(false)
    } else {
      timer = setTimeout(() => {
        setAddHiddenClass(true)
      }, 300)
    }

    setMenuOpen(newMenuOpen)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <header
      data-testid="header"
      className={classNames(
        'sticky top-0 z-50 py-6 transition-all bg-blue-100 border-b border-blue-95',
        scrollDown
          ? 'bg-opacity-100 border-opacity-100'
          : 'bg-opacity-0 border-opacity-0',
        className
      )}
      {...props}
    >
      <div
        data-testid="menuOpenBackground"
        className={classNames(
          'fixed md:hidden transition-all top-0 z-0 w-full h-full bg-blue-85',
          { hidden: addHiddenClass },
          menuOpen ? 'bg-opacity-50' : 'bg-opacity-0 opacity-0'
        )}
        onClick={() => toggleMenu(false)}
      />
      <div className="container space-y-8 md:flex md:justify-between md:space-y-0">
        <div className="relative z-50 flex justify-between">
          <Link href="/" aria-label="Home">
            <Logo variant="primary" />
          </Link>

          <Button
            data-testid="openMenuButton"
            className="md:hidden"
            variant="tertiary"
            icon={menuOpen ? faArrowTurnUp : faArrowTurnDown}
            onClick={() => toggleMenu(!menuOpen)}
          >
            Menu
          </Button>
        </div>

        <div
          data-testid="navigation"
          className={classNames(
            { hidden: addHiddenClass },
            menuOpen ? 'bg-opacity-100' : 'bg-opacity-0 opacity-0',
            'absolute left-0 z-0 w-full pt-24 md:pt-0 md:pb-0 pb-8 transition-all -translate-y-24 bg-blue-100 md:bg-opacity-0 md:relative md:translate-y-0 md:opacity-100 md:flex md:w-auto'
          )}
        >
          <nav className="container flex flex-col items-start space-y-6 md:items-center md:px-0 md:max-w-none md:w-auto md:mx-0 md:space-x-6 md:space-y-0 md:flex-row">
            <NavigationItem
              data-testid="blogNavigationItem"
              href="/blog"
              active={router.pathname === '/blog'}
            >
              Blog
            </NavigationItem>
            <NavigationItem href="/about" active={router.pathname === '/about'}>
              About us
            </NavigationItem>
            <NavigationItem
              href="/careers"
              active={router.pathname === '/careers'}
              showIndicator={true}
            >
              Join us
            </NavigationItem>
            <Button
              variant="primary"
              icon={faArrowUpRight}
              href="https://c0l6c6ui608.typeform.com/to/BxvFmNX7"
              target="_blank"
              rel="noopener nofollow"
            >
              Get in touch
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
