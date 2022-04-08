import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

/*export enum ChainId {
  MAINNET = 1,
  TESTNET = 2
}*/

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// Testnet address: local: 0x0bFBe6255ef2f329e6E6400a01172413E69682c6 - deployed 2020-10-30 16:10 UTC
// Mainnet address: 0x7e4187406BF18eB6Bf479f33fb99bC7c22c0A0Fc - final Mainnet deployment
export const FACTORY_ADDRESS = '0x7e4187406BF18eB6Bf479f33fb99bC7c22c0A0Fc'

// Original Uniswap code hash: 0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f
// INIT_CODE_HASH derived from @swoop-exchange/core/build/contracts/UniswapV2Pair.json bytecode -> keccak256(['bytes'], [`0x${bytecode}`])
// Updated 2020-10-23 11:09 UTC due to changing swoop-core -> UniswapV2ERC20.sol to use Swoop / SWP token name & Symbol
export const INIT_CODE_HASH = '0xe9574de88b7d368ba596b539348788fc220a090ef49838cd2004164f36680c18'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
