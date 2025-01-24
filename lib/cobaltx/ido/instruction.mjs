import{SYSVAR_CLOCK_PUBKEY as K,TransactionInstruction as x}from"@solana/web3.js";import{TOKEN_PROGRAM_ID as m}from"@solana/spl-token";import{PublicKey as r,SystemProgram as g,SYSVAR_RENT_PUBKEY as B}from"@solana/web3.js";import{TOKEN_PROGRAM_ID as k}from"@solana/spl-token";function p({pubkey:n,isSigner:e=!1,isWritable:t=!0}){return{pubkey:n,isWritable:t,isSigner:e}}var E=[p({pubkey:k,isWritable:!1}),p({pubkey:g.programId,isWritable:!1}),p({pubkey:B,isWritable:!1})];var N=new r("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),O=new r("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),L=new r("SysvarRent111111111111111111111111111111111"),P=new r("SysvarC1ock11111111111111111111111111111111"),W=new r("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),q=new r("Sysvar1nstructions1111111111111111111111111"),S=g.programId,G=new r("a2Gt18uJC8puJT9JRYQLU6rPi6okxQb4WqCjwtYshZB"),V=new r("bXSKiFqYrALF9gJy1KqHm8tv4QXk8nCgbLN8WRsGEbh"),v=new r("So11111111111111111111111111111111111111112"),Y=r.default,X=new r("71kRXzJMvSeArtXYNEWa8KAjpRJosdMQ7Dpgy5Jt5zfd"),j=new r("ERFzpDteGNo8LTDKW1WwVGrkRMmA2y9WZHXNHxMA6BSV");import{PublicKey as Qe}from"@solana/web3.js";import $e,{isBN as et}from"bn.js";import{bits as z,BitStructure as F,blob as Q,Blob as Z,cstr as $,f32 as ee,f32be as te,f64 as ne,f64be as re,greedy as oe,Layout as se,ns64 as ue,ns64be as ae,nu64 as I,nu64be as ie,offset as ce,s16 as ye,s16be as pe,s24 as Pe,s24be as de,s32 as be,s32be as le,s40 as fe,s40be as xe,s48 as me,s48be as ge,s8 as Le,seq as Se,struct as Te,Structure as A,u16 as he,u16be as _e,u24 as we,u24be as Be,u32 as ke,u32be as Ie,u40 as Ae,u40be as Ue,u48 as Ke,u48be as Re,u8 as Me,UInt as U,union as Ce,Union as De,unionLayoutDiscriminator as Ee,utf8 as Ne}from"@solana/buffer-layout";var T=A;var h=U;var _=I;function b(n){return new h(1,n)}var d=class extends T{decode(e,t){return super.decode(e,t)}};function l(n,e,t){return new d(n,e,t)}var f=l([b("instruction"),_("amount")]),a=l([b("instruction")]);function pt({programId:n,amount:e,instructionKeys:t}){let o=[{pubkey:S,isSigner:!1,isWritable:!1},{pubkey:m,isSigner:!1,isWritable:!1},{pubkey:L,isSigner:!1,isWritable:!1},{pubkey:P,isSigner:!1,isWritable:!1},...Object.entries(t).map(([u,i])=>({pubkey:i,isSigner:u==="userOwner",isWritable:!["authority","userOwner","userIdoCheck","userStakeInfo"].includes(u)}))],s=Buffer.alloc(f.span);return f.encode({instruction:1,amount:Number(e)},s),new x({keys:o,programId:n,data:s})}function Pt({programId:n},e){let t=[{pubkey:m,isSigner:!1,isWritable:!1},{pubkey:P,isSigner:!1,isWritable:!1},...Object.entries(e).map(([s,u])=>({pubkey:u,isSigner:s==="userOwner",isWritable:!["authority","userOwner"].includes(s)}))],o=Buffer.alloc(a.span);return a.encode({instruction:2},o),new x({keys:t,programId:n,data:o})}function dt(n){let{poolConfig:e,userKeys:t,side:o}=n,s=o==="base"?t.baseTokenAccount:t.quoteTokenAccount,u=o==="base"?e.baseVault:e.quoteVault,i=Buffer.alloc(a.span);a.encode({instruction:2},i);let w=[{pubkey:m,isWritable:!1,isSigner:!1},{pubkey:K,isWritable:!1,isSigner:!1},{pubkey:e.id,isWritable:!0,isSigner:!1},{pubkey:e.authority,isWritable:!1,isSigner:!1},{pubkey:u,isWritable:!0,isSigner:!1},{pubkey:s,isWritable:!0,isSigner:!1},{pubkey:t.ledgerAccount,isWritable:!0,isSigner:!1},{pubkey:t.owner,isWritable:!1,isSigner:!0}];return new x({programId:e.programId,keys:w,data:i})}export{Pt as makeClaimInstruction,dt as makeClaimInstructionV4,pt as makePurchaseInstruction};
//# sourceMappingURL=instruction.mjs.map