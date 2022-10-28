import NextImage, { ImageProps as NextImageProps } from 'next/future/image'

export interface ImageProps {
  sizes?: Partial<SizeMap>
}

export type TailwindBreakpoint =
  | 'default'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'

export type SizeMap = Record<TailwindBreakpoint, string>

export const TailwindBreakPointSizeMap: Omit<SizeMap, 'default'> = {
  '2xl': '(min-width: 1536px)',
  xl: '(min-width: 1280px)',
  lg: '(min-width: 1024px)',
  md: '(min-width: 768px)',
  sm: '(min-width: 640px)',
  xs: '(min-width: 390px)',
}

export const DefaultSizeMap: SizeMap = {
  '2xl': '1536px',
  xl: '1280px',
  lg: '1024px',
  md: '768px',
  sm: '640px',
  xs: '390px',
  default: '100vw',
}

export const Image: React.FC<Omit<NextImageProps, 'sizes'> & ImageProps> = ({
  sizes = DefaultSizeMap,
  ...props
}) => {
  // Constructs the sizes property according to https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes
  // next/future/image will srcSet based on this attribute and sizes in next.config.js
  // https://nextjs.org/docs/api-reference/next/future/image#sizes
  const sizesStr = Object.keys(sizes)
    // Most browsers take the first size that "matches" and not the smallest size that matches, so we have to sort from small to large.
    .sort(
      (a, b) =>
        Object.keys(DefaultSizeMap).indexOf(a) -
        Object.keys(DefaultSizeMap).indexOf(b)
    )
    .map((key) =>
      // Map default key as the value only
      key === 'default'
        ? sizes[key]
        : // Map all other keys as sizes[key]: value => (min-width: 390px) 390px
          `${
            TailwindBreakPointSizeMap[key as keyof Omit<SizeMap, 'default'>]
          } ${sizes[key as keyof Omit<SizeMap, 'default'>]}`
    )
    // Yield a string: "(min-width: 1280px) 1000px, (min-width: 640px) 500px, 100px"
    .join(', ')

  return (
    <NextImage
      data-testid="image"
      placeholder="blur"
      sizes={sizesStr}
      {...props}
    />
  )
}
