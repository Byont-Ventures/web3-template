# Contracts

Check the [cheat sheet below](#cheat-sheet) for some useful commands to get started quickly.

## Getting Started

Make sure you follow the [Foundry installation instructions](https://book.getfoundry.sh/getting-started/installation.html) before proceeding.

### Running locally

You can run this application by following the instructions in the root folder or running the following command in this folder.

```sh
$ FONTAWESOME_NPM_AUTH_TOKEN=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX yarn install

$ yarn test
```

## Deployments

To get started, you need the following data:

- Your private key, a Ledger, or a file with a mnemonic.
- [Alchemy RPC](https://dashboard.alchemy.com/)
- [Etherscan API key](https://etherscan.io/myaccount) or [Polygonscan API key](https://polygonscan.com/myaccount)

Now you can run the following commands to deploy and verify the smart contract:

```sh
# Using a mnemonic file
forge create --rpc-url $ALCHEMY_RPC src/Contract.sol:Contract --mnemonic-path $MNEMONIC_PATH --etherscan-api-key $ETHERSCAN_API_KEY --verify

# Using a private key
forge create --rpc-url $ALCHEMY_RPC src/Contract.sol:Contract --private-key $PRIVATE_KEY --etherscan-api-key $ETHERSCAN_API_KEY --verify

# Using a ledger
forge create --rpc-url $ALCHEMY_RPC src/Contract.sol:Contract --ledger --etherscan-api-key $ETHERSCAN_API_KEY --verify
```

## Style guide

For solidity smart code, solidity.org has published its [standard](https://docs.soliditylang.org/en/develop/style-guide.html), similar to python’s [pep8](https://www.python.org/dev/peps/pep-0008/#a-foolish-consistency-is-the-hobgoblin-of-little-minds).

Also, the project has configured an automatic formatter for [visual code](https://code.visualstudio.com/), which enables the auto-format in `.vscode/settings.json`.

Solhint is enabled with the plugin [prettier](https://github.com/prettier-solidity/prettier-plugin-solidity) to alert possible coding style mistakes.

To configure/exclude certain rules reported by solhint, `.solhint.json` should be edited. for more details, please refer Solhint config documentation [here](https://github.com/protofire/solhint/blob/master/docs/rules.md#best-practise-rules).

## A few Highlights

### Error messages for `requires()`

```solidity
require(<statement>, "<contract name> (<function name>): <error message>");
```

### Implementing an interface

When a contract implements an interface, add the interface you are implementing above the set of functions.

Additionally, all functions in an interface should have [natspec](https://docs.soliditylang.org/en/develop/natspec-format.html) comments. When implementing the functions from the interface, make sure to inherit the comments.

```solidity
interface IMyInterface {
  /// @notice Does the important thing
  /// @dev Should only be called on Tuesdays
  /// @param value The value to process
  function a(uint256 value) external;
}

contract MyContract is IMyInterface, IOtherInterface {
  //--------------------------------------------------
  // IMyInterface
  //--------------------------------------------------

  /// @inheritdoc IMyInterface
  function a(uint256 value) external override {
    uint256 b = value * 2;
  }

  //--------------------------------------------------
  // IOtherInterface
  //--------------------------------------------------
  ...
}
```

## Cheat Sheet

### Environments

We use profiles to differentiate between environments. See the [configuration](../../foundry.toml) for all available profiles.

`FOUNDRY_PROFILE`=ci forge test -vvv --gas-report

### Commands

Pure commands are below. Alternatively, you can look in package.json for shortcuts.

Build:
`forge build --optimize`

Run tests:
`forge test -vvv --gas-report`

Run tests continuously whilst developing (recommended)
`forge test -vvv --watch`

Get a gas report
`forge test --gas-report`

View coverage:
`forge coverage`

Lint with solhint:
`solhint ./apps/{projectname}/*.sol"`
