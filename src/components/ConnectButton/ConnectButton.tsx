import { ConnectButton as RainbowKitConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

export const ConnectButton: React.FC = () => {
  const { address, isConnected } = useAccount()

  return (
    <>
      <div>
        <h1 className="text-xl font-bold">Connect Button</h1>
        <RainbowKitConnectButton />
        <p data-testid="ConnectButton_IsConnected">
          {isConnected ? address : null}
        </p>
      </div>
    </>
  )
}
