import { AccountMeta, PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

interface AccountMetaProps {
  pubkey: PublicKey;
  isSigner?: boolean;
  isWritable?: boolean;
}

export function accountMeta({ pubkey, isSigner = false, isWritable = true }: AccountMetaProps): AccountMeta {
  return {
    pubkey,
    isWritable,
    isSigner,
  };
}

export const commonSystemAccountMeta = [
  accountMeta({ pubkey: TOKEN_PROGRAM_ID, isWritable: false }),
  accountMeta({ pubkey: SystemProgram.programId, isWritable: false }),
  accountMeta({ pubkey: SYSVAR_RENT_PUBKEY, isWritable: false }),
];

export type PublicKeyish = PublicKey | string;

export function validateAndParsePublicKey({
  publicKey: orgPubKey,
  transformSol,
}: {
  publicKey: PublicKeyish;
  transformSol?: boolean;
}): PublicKey {
  const publicKey = tryParsePublicKey(orgPubKey.toString());

  if (publicKey instanceof PublicKey) {
    if (transformSol && publicKey.equals(SOLMint)) return WSOLMint;
    return publicKey;
  }

  if (transformSol && publicKey.toString() === SOLMint.toBase58()) return WSOLMint;

  if (typeof publicKey === "string") {
    if (publicKey === PublicKey.default.toBase58()) return PublicKey.default;
    try {
      const key = new PublicKey(publicKey);
      return key;
    } catch {
      throw new Error("invalid public key");
    }
  }

  throw new Error("invalid public key");
}

export function tryParsePublicKey(v: string): PublicKey | string {
  try {
    return new PublicKey(v);
  } catch (e) {
    return v;
  }
}

export const MEMO_PROGRAM_ID = new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
export const MEMO_PROGRAM_ID2 = new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
export const RENT_PROGRAM_ID = new PublicKey("SysvarRent111111111111111111111111111111111");
export const CLOCK_PROGRAM_ID = new PublicKey("SysvarC1ock11111111111111111111111111111111");
export const METADATA_PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
export const INSTRUCTION_PROGRAM_ID = new PublicKey("Sysvar1nstructions1111111111111111111111111");
export const SYSTEM_PROGRAM_ID = SystemProgram.programId;

export const USDCMint = new PublicKey("a2Gt18uJC8puJT9JRYQLU6rPi6okxQb4WqCjwtYshZB");
export const USDTMint = new PublicKey("bXSKiFqYrALF9gJy1KqHm8tv4QXk8nCgbLN8WRsGEbh");
export const WSOLMint = new PublicKey("So11111111111111111111111111111111111111112");
export const SOLMint = PublicKey.default;
export const BONKMint = new PublicKey("71kRXzJMvSeArtXYNEWa8KAjpRJosdMQ7Dpgy5Jt5zfd");
export const SOL_Mint = new PublicKey("ERFzpDteGNo8LTDKW1WwVGrkRMmA2y9WZHXNHxMA6BSV");

export function solToWSol(mint: PublicKeyish): PublicKey {
  return validateAndParsePublicKey({ publicKey: mint, transformSol: true });
}
