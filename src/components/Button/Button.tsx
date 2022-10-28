import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Icon } from '../Icon'
import classNames from 'classnames'
import Link from 'next/link'

export interface ButtonProps {
  /**
   * Color style of the element
   *
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary'

  icon?: IconProp
}

const isAnchor = (
  props: (JSX.IntrinsicElements['button'] | JSX.IntrinsicElements['a']) &
    ButtonProps
): props is JSX.IntrinsicElements['a'] => {
  return 'href' in props && props.href !== undefined && props.href !== null
}

export const Button: React.FC<
  (JSX.IntrinsicElements['button'] | JSX.IntrinsicElements['a']) & ButtonProps
> = ({ variant = 'primary', icon, className, children, ...props }) => {
  const classList = classNames(
    'no-underline font-medium leading-6 transition-colors duration-100 font-pangea space-x-1.5 flex items-center selection:bg-opacity-50 group',
    {
      'bg-blue-5 text-blue-100 hover:bg-blue-10 active:bg-blue-20 py-1 px-3 rounded-full':
        variant === 'primary',
      'bg-purple-40 text-blue-5 hover:bg-purple-50 active:bg-purple-60 py-1 px-3 rounded-full':
        variant === 'secondary',
      'text-blue-10 hover:text-yellow-40 active:text-yellow-50':
        variant === 'tertiary',
    },
    className
  )

  if (isAnchor(props)) {
    const { href, ...anchorProps } = props
    return (
      <Link data-testid="Anchor" href={href ?? '/'}>
        <a className={classList} {...anchorProps}>
          {icon ? (
            <>
              <span>{children}</span>
              <Icon icon={icon} />
            </>
          ) : (
            children
          )}
        </a>
      </Link>
    )
  }

  return (
    <button
      data-testid="Button"
      className={classList}
      {...(props as JSX.IntrinsicElements['button'])}
    >
      {icon ? (
        <>
          <span>{children}</span>
          <Icon icon={icon} />
        </>
      ) : (
        children
      )}
    </button>
  )
}
