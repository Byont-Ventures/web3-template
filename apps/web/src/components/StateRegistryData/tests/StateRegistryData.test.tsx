import { waitFor } from '@testing-library/react';

import { getWrapper, render, setupClient } from '../../../../tests';
import { StateRegistryData } from '../StateRegistryData';
import { MockedProvider } from '@byont/mocketh';
import { StateRegistryAbi } from '../../../abis/StateRegistryAbi';
import { BigNumber } from 'ethers';

describe('<StateRegistryData />', () => {
  describe('getCurrentState', () => {
    it('is renders mocked values', async () => {
      const mockProvider = new MockedProvider('mainnet');

      mockProvider.mockContractFunction({
        abi: StateRegistryAbi,
        functionName: 'getTokenState',
        returnValue: [
          {
            timestamp: BigNumber.from('1'),
            stabilityPoolDucaBalance: BigNumber.from('2'),
            stabilityPoolMDucaBalance: BigNumber.from('3'),
            reserveMDucaBalance: BigNumber.from('4'),
            mDucaCirculatingSupply: BigNumber.from('5'),
            ducaSupply: BigNumber.from('6'),
            lpDucaSupply: BigNumber.from('7'),
          },
        ],
      });

      const { queryByTestId } = render(<StateRegistryData />, {
        wrapper: getWrapper(setupClient({}, mockProvider)),
      });

      await waitFor(() => {
        expect(
          queryByTestId('StateRegistryData_CurrentState')
        ).toHaveTextContent(
          'ducaSupply: 6, mDucaCirculatingSupply: 5, lpDucaSupply: 7, reserveMDucaBalance: 4, stabilityPoolDucaBalance: 2, stabilityPoolMDucaBalance: 3, timestamp: 1'
        );
      });
    });
  });
});
