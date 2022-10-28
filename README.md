# DUCATA.io

[![Production](https://github.com/DUCATA-private/DUCATA.io/actions/workflows/production.yml/badge.svg?branch=main)](https://github.com/DUCATA-private/DUCATA.io/actions/workflows/production.yml)

The Ducata website repository holds all the source code for the website. This repository is largely based on the [Shopify Polaris (`polaris-react`)](https://github.com/Shopify/polaris/tree/main/polaris-react).

## Installation

**Prerequisites**: `yarn > 1.22.x`, and `node > 16.x.x`.

```sh
cp .env.example .env.local

yarn install

# Generate boilerplate code for gRPC
yarn buf:generate
```

## Development

Before getting started we suggest reading our [Contributing Guidelines](/CONTRIBUTING.md).

### Running locally

```sh
# Run the entire website locally
yarn dev
```

### Running a server

We've included a small webserver that implements the gRPC services for local testing. See the [server documentation](/.server/README.md) for more information.

### Testing

We use [Jest](https://jestjs.io/) to test all components of our application. You can test these components using `yarn test`. Alternatively you can run Jest in watch mode using `yarn test:watch`. Watch mode also enables to specify the name or path to a file to focus on a specific set of tests.

```sh
# Run all tests
yarn test

# Run all tests and watch for changes
yarn test:watch
```

## Contributing

Pull requests are welcome. See the [contribution guidelines](/CONTRIBUTING.md) for more information.

- https://github.com/tmm/testing-wagmi
- https://github.com/rainbow-me/rainbowkit/issues/461
- https://github.com/httptoolkit/mockthereum
