import classNames from 'classnames'
import { ReactNode } from 'react'

import { Footer, FooterProps } from '../Footer'
import { Header } from '../Header'
import { RootLayout } from './components/RootLayout'

export interface LayoutProps {
  callToAction?: ReactNode
  footerVariant?: FooterProps['variant']
}

export const Layout: React.FC<JSX.IntrinsicElements['main'] & LayoutProps> = ({
  className,
  callToAction,
  footerVariant,
  ...props
}) => (
  <RootLayout>
    <Header />
    <main
      data-testid="layout"
      id="maincontent"
      className={classNames(
        'relative flex flex-col flex-grow mt-4 mb-8 space-y-8 md:space-y-16 md:mt-8 md:mb-16',
        className
      )}
      {...props}
    />

    {callToAction ? (
      <div data-testid="callToAction">
        {callToAction}
        <Footer variant={footerVariant} />
      </div>
    ) : (
      <Footer variant={footerVariant} />
    )}
  </RootLayout>
)
