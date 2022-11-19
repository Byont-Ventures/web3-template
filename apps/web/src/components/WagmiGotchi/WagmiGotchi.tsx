import { WagmiGotchiAbi } from '../../abis/WagmiGotchi';
import { useContractRead } from 'wagmi';

export const WagmiGotchi: React.FC = () => {
  const { data, isSuccess, isLoading, isError } = useContractRead({
    abi: WagmiGotchiAbi,
    address: '0x0000000000000000000000000000000000000000',
    functionName: 'getAlive',
  });

  return (
    <>
      <div>
        <h1 className="text-xl font-bold">State Registry</h1>
        <div data-testid="WagmiGotchi_CurrentState">
          {isSuccess && data !== undefined ? `isAlive: ${data}` : null}
        </div>
        {isError ? <div>Could not fetch state registry data</div> : null}
        {isLoading ? <div>Loading...</div> : null}
      </div>
    </>
  );
};
