import '@testing-library/jest-dom'
import { waitFor } from '@testing-library/react'

import { render, setupClient, getWrapper } from '../../../tests'
import { ConnectButton } from '../ConnectButton'
import { EthereumMock, getMockedProvider } from '@/tests/utils/mocked-providers'
import { getProvider } from '@/tests/utils/providers'

/**
 * Mocking entire module, see
 * https://github.com/rainbow-me/rainbowkit/issues/461#issuecomment-1228952973
 */
jest.mock('@rainbow-me/rainbowkit', () => ({
  ConnectButton: jest.fn(),
}))

describe('<ConnectButton />', () => {
  beforeEach(async () => {
    await EthereumMock.start()
  })

  afterEach(async () => {
    await EthereumMock.stop()
  })

  describe('address', () => {
    it('is visible when user is connected', async () => {
      const { queryByTestId } = render(<ConnectButton />, {
        wrapper: ({ children }) =>
          getWrapper(getProvider)({
            children,
            // Auto connecting to a MockConnector to reduce test complexity while connecting usin the [RainbowKit](https://github.com/rainbow-me/rainbowkit/tree/main/packages/rainbowkit/src) modals.
            client: setupClient(getMockedProvider, { autoConnect: true }),
          }),
      })
      const addressRegex = /^0x[a-fA-F0-9]{40}/
      await waitFor(() => {
        expect(queryByTestId('ConnectButton_IsConnected')).toHaveTextContent(
          addressRegex
        )
      })
    })
  })
})
