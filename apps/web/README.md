# Web

This Next.js application interfaces with on-chain smart contracts using [Wagmi](https://wagmi.sh/) and [RainbowKit](rainbowkit.com)

## Getting Started

### Environment Variables

You can set up the environment by copying the [`.env.example`](/apps/web/.env.example) file to `.env.local` and filling in the required information. You will find annotations about what these variables do in the [`.env.example`](/apps/web/.env.example) file.

```sh
# See .env.example for more information
$ cp .env.example .env.local
```

### Running locally

You can run this application by following the instructions in the root folder or running the following command in this folder.

```sh
$ FONTAWESOME_NPM_AUTH_TOKEN=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX yarn install

$ yarn dev
```

### Testing

We use [Jest](https://jestjs.io/) to test the application. You can run the tests using `yarn test`. Alternatively, you can run Jest in watch mode using `yarn test:watch`.

```sh
# Run all tests
yarn test

# Run all tests and watch for changes
yarn test:watch
```
