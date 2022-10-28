import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { Image } from '../Image'

import TeamPhoto from './__images__/team-photo.jpg'

describe('<Image />', () => {
  describe('props', () => {
    it('passes intrinsic attributes', () => {
      const altText = 'Get in touch!'
      const { getByTestId } = render(<Image src={TeamPhoto} alt={altText} />)
      expect(getByTestId('image')).toHaveAttribute('alt', altText)
    })
  })
  describe('sizes', () => {
    it('uses tailwind container sizes by default', async () => {
      const { getByTestId } = render(
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image src={TeamPhoto} />
      )

      expect(getByTestId('image')).toHaveAttribute(
        'sizes',
        '(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, (min-width: 390px) 390px, 100vw'
      )
    })
    it('generates sizes from sizes property', () => {
      const { getByTestId } = render(
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          src={TeamPhoto}
          // Breakpoints placed in the order they're supposed to render
          sizes={{ xl: '1000px', sm: '500px', default: '500px' }}
        />
      )

      expect(getByTestId('image')).toHaveAttribute(
        'sizes',
        // Renders in order supplied in sizes map
        '(min-width: 1280px) 1000px, (min-width: 640px) 500px, 500px'
      )
    })
    it('generates sizes from sizes property sorted ƒrom large to small', () => {
      const { getByTestId } = render(
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          src={TeamPhoto}
          // Breakpoints placed in the REVERSED order they're supposed to render
          sizes={{ default: '500px', sm: '500px', xl: '1000px' }}
        />
      )

      expect(getByTestId('image')).toHaveAttribute(
        'sizes',
        // Renders in order from large to small
        '(min-width: 1280px) 1000px, (min-width: 640px) 500px, 500px'
      )
    })
  })
})
