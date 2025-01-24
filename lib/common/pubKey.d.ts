import { AccountMeta, PublicKey } from '@solana/web3.js';

interface AccountMetaProps {
    pubkey: PublicKey;
    isSigner?: boolean;
    isWritable?: boolean;
}
declare function accountMeta({ pubkey, isSigner, isWritable }: AccountMetaProps): AccountMeta;
declare const commonSystemAccountMeta: AccountMeta[];
declare type PublicKeyish = PublicKey | string;
declare function validateAndParsePublicKey({ publicKey: orgPubKey, transformSol, }: {
    publicKey: PublicKeyish;
    transformSol?: boolean;
}): PublicKey;
declare function tryParsePublicKey(v: string): PublicKey | string;
declare const MEMO_PROGRAM_ID: PublicKey;
declare const MEMO_PROGRAM_ID2: PublicKey;
declare const RENT_PROGRAM_ID: PublicKey;
declare const CLOCK_PROGRAM_ID: PublicKey;
declare const METADATA_PROGRAM_ID: PublicKey;
declare const INSTRUCTION_PROGRAM_ID: PublicKey;
declare const SYSTEM_PROGRAM_ID: PublicKey;
declare const USDCMint: PublicKey;
declare const USDTMint: PublicKey;
declare const WSOLMint: PublicKey;
declare const SOLMint: PublicKey;
declare const BONKMint: PublicKey;
declare const SOL_Mint: PublicKey;
declare function solToWSol(mint: PublicKeyish): PublicKey;

export { BONKMint, CLOCK_PROGRAM_ID, INSTRUCTION_PROGRAM_ID, MEMO_PROGRAM_ID, MEMO_PROGRAM_ID2, METADATA_PROGRAM_ID, PublicKeyish, RENT_PROGRAM_ID, SOLMint, SOL_Mint, SYSTEM_PROGRAM_ID, USDCMint, USDTMint, WSOLMint, accountMeta, commonSystemAccountMeta, solToWSol, tryParsePublicKey, validateAndParsePublicKey };
