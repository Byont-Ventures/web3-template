import { BigNumber } from 'ethers';

// https://stackoverflow.com/a/51438474
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type PickAndFlatten<T, K extends keyof T> = UnionToIntersection<T[K]>;

/** @see https://github.com/wagmi-dev/abitype/#configuration */
declare module 'abitype' {
  export interface Config {
    BigIntType: BigNumber;
  }
}
