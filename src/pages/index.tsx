import { ConnectButton } from '@app/components/ConnectButton'
import { NodeDataParameters } from '@app/components/NodeDataParameters'
import { StateRegistryData } from '@app/components/StateRegistryData'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <div className="space-y-4">
        <ConnectButton />
        <StateRegistryData />
        <NodeDataParameters />
      </div>
    </>
  )
}

export default Home
