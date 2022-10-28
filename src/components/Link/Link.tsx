import React, { PropsWithChildren } from 'react'
import NextLink from 'next/link'
import classNames from 'classnames'

export interface LinkProps {
  className?: string
  href: string
}

export const Link: React.FC<
  PropsWithChildren<JSX.IntrinsicElements['a'] & LinkProps>
> = ({ className, href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <a
        data-testid="link"
        className={classNames(
          'font-pangea font-medium transition-colors duration-100 hover:text-yellow-40 focus:text-yellow-50 break-words',
          className
        )}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  )
}
