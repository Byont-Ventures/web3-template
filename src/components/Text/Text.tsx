import classNames from 'classnames'

type Variant =
  | 'bodySm'
  | 'bodyMd'
  | 'bodyLg'
  | 'headingSm'
  | 'headingMd'
  | 'headingLg'
  | 'headingXl'
  | 'heading2Xl'

type ElementTag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4'

export interface TextProps {
  /**
   * Typographic style of text
   * @default 'bodyMd'
   */
  variant?: Variant

  /**
   * The element type
   * @default 'p'
   */
  as?: keyof Pick<JSX.IntrinsicElements, ElementTag>
}

const variantStyles: { [V in Variant]: string } = {
  bodySm: 'text-sm',
  bodyMd: '',
  bodyLg: 'text-lg',
  headingSm: 'font-pangea font-medium text-lg xl:text-xl',
  headingMd: 'font-pangea font-medium text-lg md:text-xl xl:text-2xl',
  headingLg: 'font-pangea font-medium text-xl md:text-2xl xl:text-3xl',
  headingXl:
    'font-pangea font-medium text-2xl md:text-3xl xl:text-4xl max-w-4xl',
  heading2Xl:
    'font-pangea font-medium text-3xl md:text-4xl xl:text-5xl max-w-5xl',
}

export const Text: React.FC<
  TextProps & PickAndFlatten<JSX.IntrinsicElements, ElementTag>
> = ({ as = 'p', variant = 'bodyMd', className, ...props }) => {
  const Tag = as
  const elementClassname = classNames(variantStyles[variant], className)

  return (
    <Tag
      data-testid="text"
      className={elementClassname !== '' ? elementClassname : undefined}
      {...props}
    />
  )
}
