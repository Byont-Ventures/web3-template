import '@testing-library/jest-dom'
import { waitFor } from '@testing-library/react'

import { EthereumMock, render } from '../../../../tests'
import { StateRegistryData } from '../StateRegistryData'

describe('<StateRegistryData />', () => {
  beforeEach(async () => {
    // Resests mocked state between tests
    await EthereumMock.start()
  })

  afterEach(async () => await EthereumMock.stop())

  describe('getCurrentState', () => {
    it('is renders mocked values', async () => {
      await EthereumMock.forCall(
        process.env.NEXT_PUBLIC_STATE_REGISTRY_ADDRESS as `0x${string}`
      )
        .forFunction(
          'function getCurrentState() public view returns (uint256, uint256, uint256, uint256, uint256, uint256, uint256)'
        )
        .thenReturn([1, 2, 3, 4, 5, 6, 7])

      const { queryByTestId } = render(<StateRegistryData />)

      await waitFor(() => {
        expect(
          queryByTestId('StateRegistryData_CurrentState')
        ).toHaveTextContent(
          'ducaSupply: 6, mDucaCirculatingSupply: 5, lpDucaSupply: 7, reserveMDucaBalance: 4, stabilityPoolDucaBalance: 2, stabilityPoolMDucaBalance: 3, timestamp: 1'
        )
      })
    })
  })
})
