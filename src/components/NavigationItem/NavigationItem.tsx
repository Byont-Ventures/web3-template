import { PropsWithChildren } from 'react'

import { faArrowTurnDownRight } from '@fortawesome/pro-solid-svg-icons'
import { Icon } from '../Icon'

import { Link } from '../Link'
import classNames from 'classnames'

export interface NavigationItemProps {
  href: string
  active?: boolean
  showIndicator?: boolean
}

export const NavigationItem: React.FC<
  PropsWithChildren<JSX.IntrinsicElements['a'] & NavigationItemProps>
> = ({ href, active, showIndicator, children, ...props }) => {
  return (
    <Link
      href={href}
      className={classNames('relative flex items-center group transition-all', {
        'text-yellow-40': active,
      })}
      {...props}
    >
      {/* When active show arrow turn down right */}
      <Icon
        data-testid="active"
        icon={faArrowTurnDownRight}
        className={classNames('absolute transition-opacity', {
          'opacity-0': !active,
        })}
      />

      {/* Render children */}
      <span
        className={classNames('inline-block transition-all space-x-2', {
          'pl-6': active,
        })}
      >
        {children}
      </span>
      {/* Show the indicator */}
      {showIndicator ? (
        <span
          data-testid="indicator"
          className="w-1.5 h-1.5 ml-2 rounded-full bg-yellow-40 -translate-y-2"
          aria-hidden="true"
        />
      ) : null}
    </Link>
  )
}
