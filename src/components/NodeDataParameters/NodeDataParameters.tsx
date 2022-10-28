import { useNodeDataStream } from '@app/hooks/useNodeDataStream'

export const NodeDataParameters: React.FC = () => {
  const { data, error, isError, isLoading, isSuccess } = useNodeDataStream({
    interval: 1000,
  })

  return (
    <>
      <div>
        <h1 className="text-xl font-bold">Node Data</h1>
        {isSuccess && data !== undefined ? (
          <div>{JSON.stringify(data)}</div>
        ) : null}

        {isLoading ? <div>Loading...</div> : null}

        {isError && error !== undefined ? (
          <div>Could not fetch node data</div>
        ) : null}
      </div>
    </>
  )
}
