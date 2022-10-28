# DucataStableCoin

[![Coverage Status](https://coveralls.io/repos/github/DUCATA-private/DUCATA_StableCoin/badge.svg?branch=main&t=Zu6AiO)](https://coveralls.io/github/DUCATA-private/DUCATA_StableCoin?branch=main)

For some useful commands to get started quickly, check the cheatsheet.

## 1. Install packages

```
npm install --global yarn@1.22.19
```

Then in the root of this repo:

```
yarn install
```

## 2. Install foundry

See the [docs](https://book.getfoundry.sh/getting-started/installation.html).

## 3. Smart contract style guide

For solidity smart code, solidity.org has published its [standard](https://docs.soliditylang.org/en/develop/style-guide.html) which is similar to python’s [pep8](https://www.python.org/dev/peps/pep-0008/#a-foolish-consistency-is-the-hobgoblin-of-little-minds).

Also, the project has configured automatic formatter for [visual code](https://code.visualstudio.com/), which enables the auto-format in `.vscode/settings.json`.

Solhint is enabled with plugin [prettier](https://github.com/prettier-solidity/prettier-plugin-solidity) to alert possible coding style mistake.

To configure/exclude certain rules reported by solhint, `.solhint.json` should be edited. for more details please refer solhint config documentation [here](https://github.com/protofire/solhint/blob/master/docs/rules.md#best-practise-rules).

### A few highlights

#### Error messages for `requires()`

```solidity
require(<statement>, "<contract name> (<function name>): <error message>");
```

#### Implementing an interface

When a contract implements an interface add the interface which you are implementing above the set of function.

Additionally, all functions in an interface should have [natspec](https://docs.soliditylang.org/en/develop/natspec-format.html) comments. When implementing the function from the interface make sure to inherit the comments.

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

#### Development

Changing the used solc version can be done in [foundry.toml](./foundry.toml).

#### Add a smart contract to the project

A new smart contract can be created in this project by simply making a new file in the `/src` and `/test` folder corresponding to the project located in `projects/{PROJECT}/`

#### Deploy and verify

Because of the early stages of forge it is not possible yet to verify deployed contract using forge (see our [issue](https://github.com/foundry-rs/foundry/issues/1664)). Therefore hardhat will be used to deployment and verification.

First fill the `secrets.json`:

```
cp secrets.json.example secrets.json
```

Fill in the required fields.

Then in the `scripts` folder create a file with for example the name `deploymentData_MyContract_aNetwork.json`

```json
{
  "deploymentConfig": {
    "contractToDeploy": "PeriodicTaskManager",
    "arguments": [
      "0x0000000000000000000000000000000000000001",
      "0x0000000000000000000000000000000000000002",
      "0x0000000000000000000000000000000000000003",
      "0x0000000000000000000000000000000000000004",
      0,
      0,
      0
    ]
  },
  "deploymentOutput": {
    "deployedTo": "<Will be filled automatically by the script>"
  }
}
```

The arguments should be in the same order as they are in the `initialize()` function of the contract.
To deploy, verify and upgrade a smart contract you can use the commands noted in cheatsheet.md

#### Slither

Install slither and solc-select:

```
pip3 install -r requirements.txt
brew install graphviz
brew install jq
```

Then run the following command to run slither on the contract.

```
yarn run slither
```

The output will be written to:

```
project/{projectname}/test/slither-scan
```

To see detected vulnerabilities in the smart contract search in `projects/{projectname}/test/slither-scan/slither-<contract name>-human-summary-output.json` for:

```
"description": "<contract name>
```

The `"check"`, `"impact"` and `"confidence"` fields say which slither detecter was used for this. More information about the checks can be found [here](https://github.com/crytic/slither/wiki/Detector-Documentation).

To update the slither configuration you should update `projects/{projectname}/slither.config.json`. Info can be found [here](https://github.com/crytic/slither/wiki/Usage#configuration-file) and [here](https://github.com/crytic/slither/blob/master/README.md). Make sure that there are no spaces between, for example, the list of printers in `"printers_to_run": "inheritance-graph,human-summary",`

## Test report generation

Run:

```
yarn run generateTestReport
```

A report will be generated in `test/testReport.md`. Additional reports are found in `project/{projectname}/test/slither-scan`
