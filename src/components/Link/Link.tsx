import React, { PropsWithChildren } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import classNames from 'classnames'

export interface LinkProps {
  className?: string
}

export const Link: React.FC<PropsWithChildren<NextLinkProps & LinkProps>> = ({
  href,
  className,
  ...props
}) => {
  return (
    <NextLink
      data-testid="Link"
      href={href}
      className={classNames(
        'font-pangea font-medium transition-colors duration-100 hover:text-yellow-40 focus:text-yellow-50 break-words',
        className
      )}
      {...props}
    />
  )
}
