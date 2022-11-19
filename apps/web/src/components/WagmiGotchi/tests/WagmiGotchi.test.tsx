import { waitFor } from '@testing-library/react';

import { getWrapper, render, setupClient } from '../../../../tests';
import { WagmiGotchi } from '../WagmiGotchi';
import { MockedProvider } from '@byont/mocketh';
import { WagmiGotchiAbi } from '../../../abis/WagmiGotchi';

describe('<WagmiGotchi />', () => {
  describe('getCurrentState', () => {
    it('is renders mocked values', async () => {
      const mockProvider = new MockedProvider('mainnet');

      mockProvider.mockContractFunction({
        abi: WagmiGotchiAbi,
        functionName: 'getAlive',
        returnValue: [true],
      });

      const { queryByTestId } = render(<WagmiGotchi />, {
        wrapper: getWrapper(setupClient({}, mockProvider)),
      });

      await waitFor(() => {
        expect(queryByTestId('WagmiGotchi_CurrentState')).toHaveTextContent(
          'isAlive: true'
        );
      });
    });
  });
});
