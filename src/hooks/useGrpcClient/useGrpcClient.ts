import { useMemo } from 'react'
import { ServiceType } from '@bufbuild/protobuf'
import {
  CallbackClient,
  createCallbackClient,
  createGrpcWebTransport,
} from '@bufbuild/connect-web'

// This transport is going to be used throughout the app
const transport = createGrpcWebTransport({
  baseUrl: 'http://localhost:8080',
})

/** Get a promise client for the given service. */
export function useGrpcClient<T extends ServiceType>(
  service: T
): CallbackClient<T> {
  // We memoize the client, so that we only create one instance per service.
  return useMemo(() => createCallbackClient(service, transport), [service])
}
