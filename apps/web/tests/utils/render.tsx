import {
  RenderOptions,
  render as testingLibraryRender,
} from '@testing-library/react';
import { MockedProvider } from '@byont/mocketh';
import { providers, Wallet } from 'ethers';
import React, { PropsWithChildren, ReactElement } from 'react';

import { MockConnector } from 'wagmi/connectors/mock';
import {
  CreateClientConfig,
  WagmiConfigProps,
  WagmiConfig,
  createClient,
  chain,
} from 'wagmi';
import { accounts } from './constants';

/** Setup a Wagmi client based on a custom provider */
export const setupClient = (
  config: Partial<CreateClientConfig> = {},
  provider: providers.BaseProvider
) => {
  return createClient({
    connectors: [
      new MockConnector({
        options: {
          signer: new Wallet(accounts[0].privateKey, provider),
          flags: {},
        },
      }),
    ],
    provider,
    ...config,
  });
};

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
export const getWrapper = (
  client = setupClient(
    {},
    new MockedProvider({
      chainId: chain.mainnet.id,
      name: chain.mainnet.name,
    })
  )
) => {
  const wrapper: React.FC<
    PropsWithChildren<{ client?: WagmiConfigProps['client'] }>
  > = ({ children }) => {
    return <WagmiConfig client={client}>{children}</WagmiConfig>;
  };

  return wrapper;
};

export const render = (ui: ReactElement, options?: RenderOptions) =>
  testingLibraryRender(ui, options);
