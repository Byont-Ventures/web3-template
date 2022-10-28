import { Provider } from '@wagmi/core'

import {
  RenderOptions,
  render as testingLibraryRender,
} from '@testing-library/react'
import React, { PropsWithChildren, ReactElement } from 'react'

import {
  CreateClientConfig,
  WagmiConfigProps,
  WagmiConfig,
  createClient,
  defaultChains,
} from 'wagmi'
import { MockConnector } from 'wagmi/connectors/mock'
import { getProvider } from './providers'
import { getSigners } from './signers'
import { getMockedProvider } from './mocked-providers'

/** Setup a Wagmi client based on a custom provider */
export const setupClient = (
  providerFunc: (
    ...args: Omit<Parameters<typeof getProvider>, 'url'>
  ) => Provider,
  config: Partial<CreateClientConfig> = {}
) => {
  const signer = getSigners(providerFunc())[0]

  return createClient({
    connectors: [new MockConnector({ options: { signer, flags: {} } })],
    provider: ({ chainId }) => providerFunc(defaultChains, chainId),
    ...config,
  })
}

/**
 * Implementation of a testing library render wrapper with a Wagmi provider. It
 * accepts a custom client that can either use MockedProvider or Provider that
 * points to an
 * [Anvil]([Anvil](https://github.com/foundry-rs/foundry/tree/master/anvil)
 * instance) instance.
 *
 * @see https://testing-library.com/docs/react-testing-library/api/#wrapper
 * @see https://github.com/wagmi-dev/wagmi/blob/main/packages/core/test/index.ts
 */
export const wrapper: React.FC<
  PropsWithChildren<{ client?: WagmiConfigProps['client'] }>
> = ({ children, client = setupClient(getMockedProvider) }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>
}

export const render = (ui: ReactElement, options?: RenderOptions) =>
  testingLibraryRender(ui, { wrapper, ...options })
