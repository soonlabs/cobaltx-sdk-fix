# CobaltX SDK

[npm-image]: https://img.shields.io/npm/v/@cobaltx/sdk-v2.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@cobaltx/sdk-v2

[![npm][npm-image]][npm-url]

An SDK for building applications on top of CobaltX.

## Usage Guide

### Installation

```
$ yarn add @cobaltx/sdk-v2
```

## SDK method Demo

[SDK V2 Demo Repo](https://github.com/cobaltx-io/cobaltx-sdk-V2-demo)

## SDK local test

```
$ yarn dev {directory}

e.g. yarn dev test/init.ts
```

## Features

### Initialization

```
import { CobaltX } from '@cobaltx-io/cobaltx-sdk'
const cobaltx = await CobaltX.load({
  connection,
  owner, // key pair or publicKey, if you run a node process, provide keyPair
  signAllTransactions, // optional - provide sign functions provided by @solana/wallet-adapter-react
  tokenAccounts, // optional, if dapp handle it by self can provide to sdk
  tokenAccountRowInfos, // optional, if dapp handle it by self can provide to sdk
  disableLoadToken: false // default is false, if you don't need token info, set to true
})
```

#### how to transform token account data

```
import { parseTokenAccountResp } from '@cobaltx-io/cobaltx-sdk'

const solAccountResp = await connection.getAccountInfo(owner.publicKey)
const tokenAccountResp = await connection.getTokenAccountsByOwner(owner.publicKey, { programId: TOKEN_PROGRAM_ID })
const token2022Req = await connection.getTokenAccountsByOwner(owner.publicKey, { programId: TOKEN_2022_PROGRAM_ID })
const tokenAccountData = parseTokenAccountResp({
  owner: owner.publicKey,
  solAccountResp,
  tokenAccountResp: {
    context: tokenAccountResp.context,
    value: [...tokenAccountResp.value, ...token2022Req.value],
  },
})
```

#### data after initialization

```
# token
cobaltx.token.tokenList
cobaltx.token.tokenMap
cobaltx.token.mintGroup


# token account
cobaltx.account.tokenAccounts
cobaltx.account.tokenAccountRawInfos
```

#### Api methods (https://github.com/cobaltx-io/cobaltx-sdk-V2/blob/master/src/api/api.ts)

- fetch cobaltx default mint list

```
const data = await cobaltx.api.getTokenList()
```

- fetch mints recognizable by cobaltx

```
const data = await cobaltx.api.getTokenInfo(['So11111111111111111111111111111111111111112', '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R'])
```

- fetch pool list
  available fetch params defined here: https://github.com/cobaltx-io/cobaltx-sdk-V2/blob/master/src/api/type.ts#L249

```
const data = await cobaltx.api.getPoolList({})
```

- fetch poolInfo by id

```
// ids: join pool ids by comma(,)
const data = await cobaltx.api.fetchPoolById({ ids: 'AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA,8sLbNZoA1cfnvMJLPfp98ZLAnFSYCFApfJKMbiXNLwxj' })
```

- fetch pool list by mints

```
const data = await cobaltx.api.fetchPoolByMints({
  mint1: 'So11111111111111111111111111111111111111112',
  mint2: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R' // optional,
  // extra params: https://github.com/cobaltx-io/cobaltx-sdk-V2/blob/master/src/api/type.ts#L249
})
```

- fetch farmInfo by id

```
// ids: join farm ids by comma(,)
const data = await cobaltx.api.fetchFarmInfoById({ ids: '4EwbZo8BZXP5313z5A2H11MRBP15M5n6YxfmkjXESKAW,HUDr9BDaAGqi37xbQHzxCyXvfMCKPTPNF8g9c9bPu1Fu' })
```
