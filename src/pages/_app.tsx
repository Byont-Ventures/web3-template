import '@rainbow-me/rainbowkit/styles.css'
import '@app/styles/globals.css'

import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { WagmiConfig } from 'wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { client, chains } from '@app/lib/wagmi'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <DefaultSeo
        defaultTitle={process.env.NEXT_PUBLIC_APP_NAME}
        titleTemplate={`%s | ${process.env.NEXT_PUBLIC_APP_NAME}`}
        canonical={process.env.NEXT_PUBLIC_APP_URL}
      />

      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}

export default App
