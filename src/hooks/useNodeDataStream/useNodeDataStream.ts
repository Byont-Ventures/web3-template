import { useCallback, useEffect, useMemo, useState } from 'react'
import { NodeService } from '@app/lib/gen/io/byont/node/v1/node_connectweb'
import { useGrpcClient } from '../useGrpcClient'
import { PartialMessage } from '@bufbuild/protobuf'
import { DataParametersStreamRequest } from '@app/lib/gen/io/byont/node/v1/node_pb'

export interface DataParametersStreamData {
  ducaExchangeValue: string
  ducaMarketValue: string
  mDucaMarketValue: string
}

/**
 * Custom hook for interacting with GRPC data stream. The return api is very
 * similar to the react-query api but that is not used under the hood.
 *
 * @returns
 */
export const useNodeDataStream = (
  request: PartialMessage<DataParametersStreamRequest> = { interval: 1000 }
) => {
  const client = useGrpcClient(NodeService)

  const [isRegistred, setIsRegistred] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error>()
  const [data, setData] = useState<DataParametersStreamData>()

  const isError = useMemo(
    () => !isLoading && error !== undefined,
    [error, isLoading]
  )
  const isSuccess = useMemo(
    () => !isLoading && error === undefined && data !== undefined,
    [data, error, isLoading]
  )

  useEffect(() => {
    if (isRegistred) return

    client.dataParametersStream(
      request,
      (res) => {
        setIsLoading(false)
        setError(undefined)
        setData(res.toJson() as unknown as DataParametersStreamData)
      },
      (err) => {
        setIsLoading(false)
        if (err !== undefined) {
          setError(err)
        } else {
          setError(new Error('Unknown error'))
        }
      }
    )

    setIsRegistred(true)
  }, [client, isRegistred, request])

  return { data, isSuccess, isLoading, isError, error }
}
