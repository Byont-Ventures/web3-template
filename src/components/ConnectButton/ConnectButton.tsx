import { ConnectButton as RainbowKitConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { Text } from '@/components/Text'

export const ConnectButton: React.FC = () => {
  const { address, isConnected } = useAccount()

  return (
    <>
      <div className="flex space-x-4">
        <RainbowKitConnectButton />
        <Text data-testid="ConnectButton_IsConnected">
          {isConnected ? address : null}
        </Text>
      </div>
    </>
  )
}
