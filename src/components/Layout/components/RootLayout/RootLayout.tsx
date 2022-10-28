import { PropsWithChildren } from 'react'
import { SkipToMain } from '../../../SkipToMain'

export const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SkipToMain />
      {children}
    </>
  )
}
