# Web3 template

[![CI](https://github.com/Byont-Ventures/web3-template/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Byont-Ventures/web3-template/actions/workflows/ci.yml)

Web3 Template is a boilerplate for developing Ethereum based projects. This repository uses [Turborepo](https://turbo.build/) to manage multiple projects and packages in a single repo, and currently consists of two parts:

- A [Foundry](https://github.com/foundry-rs/foundry) smart contract project
- A [Next.js](https://nextjs.org/) frontend that lets the user interact with the smart contracts

## Getting Started

Before getting started, we suggest reading our [Contributing Guidelines](/CONTRIBUTING.md).

### Prerequisites

You'll need the following tools to run the entire application locally.

- [Yarn](https://yarnpkg.com/)
- [Foundry](https://github.com/foundry-rs/foundry#installation)
- [Node >= 16.x.x](https://nodejs.org/en/download/)

```
FONTAWESOME_NPM_AUTH_TOKEN=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX yarn install
```

### Installation

You can now run the install command to download all dependencies and run the application locally. **Warning:** you might have to change some variables in the env files for the applications to work fully.

```sh
$ yarn install

# Copy the environment variables
$ cp ./apps/web/.env.example ./apps/web/.env.local
```

### Running

Running the application can be done using the following commands.

```sh
# Run the entire website locally (requires Docker)
$ yarn dev

# Run the web and all its dependency jobs
$ yarn turbo run dev --filter=web...
```

Tests can be executed using the following commands:

```sh
# Run all tests
$ yarn test

# Only run the tests for contracts project
$ yarn turbo run test --filter=contracts...
```

## Contributing

Pull requests are welcome. See the [contribution guidelines](/CONTRIBUTING.md) for more information.
