import classNames from 'classnames'

export const TextContainer: React.FC<JSX.IntrinsicElements['div']> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="textContainer"
      className={classNames('prose', className)}
      {...props}
    >
      {children}
    </div>
  )
}
