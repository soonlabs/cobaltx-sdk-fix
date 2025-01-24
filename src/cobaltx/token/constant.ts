import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import { TokenInfo } from "./type";

export const SOL_INFO: TokenInfo = {
  chainId: 101,
  address: PublicKey.default.toBase58(),
  programId: TOKEN_PROGRAM_ID.toBase58(),
  decimals: 9,
  symbol: "ETH",
  name: "Ethereum",
  logoURI: `https://raw.githubusercontent.com/cobaltx-io/tokens/main/logo/So11111111111111111111111111111111111111112.png`,
  tags: [],
  priority: 2,
  type: "cobaltx",
  extensions: {
    coingeckoId: "solana",
  },
};

export const TOKEN_WSOL: TokenInfo = {
  chainId: 101,
  address: "So11111111111111111111111111111111111111112",
  programId: TOKEN_PROGRAM_ID.toBase58(),
  decimals: 9,
  symbol: "WETH",
  name: "Wrapped ETH",
  logoURI: `https://raw.githubusercontent.com/cobaltx-io/tokens/main/logo/So11111111111111111111111111111111111111112.png`,
  tags: [],
  priority: 2,
  type: "cobaltx",
  extensions: {
    coingeckoId: "solana",
  },
};
