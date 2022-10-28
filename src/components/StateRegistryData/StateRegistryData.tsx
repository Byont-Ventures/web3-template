import { StateRegistryAbi } from '../../abis/StateRegistryAbi'
import { useContractRead } from 'wagmi'

export const StateRegistryData: React.FC = () => {
  const { data, isSuccess, isLoading, isError } = useContractRead({
    abi: StateRegistryAbi,
    address: process.env.NEXT_PUBLIC_STATE_REGISTRY_ADDRESS,
    functionName: 'getCurrentState',
  })

  return (
    <>
      <div>
        <h1 className="text-xl font-bold">State Registry</h1>
        {isSuccess && data !== undefined ? (
          <div data-testid="StateRegistryData_CurrentState">
            {`ducaSupply: ${data.ducaSupply.toString()}, mDucaCirculatingSupply: ${data.mDucaCirculatingSupply.toString()}, lpDucaSupply: ${data.lpDucaSupply.toString()}, reserveMDucaBalance: ${data.reserveMDucaBalance.toString()}, stabilityPoolDucaBalance: ${data.stabilityPoolDucaBalance.toString()}, stabilityPoolMDucaBalance: ${data.stabilityPoolMDucaBalance.toString()}, timestamp: ${data.timestamp.toString()}`}
          </div>
        ) : null}
        {isError ? <div>Could not fetch state registry data</div> : null}
        {isLoading ? <div>Loading...</div> : null}
      </div>
    </>
  )
}
