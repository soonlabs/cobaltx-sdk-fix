import{PublicKey as w}from"@solana/web3.js";import m,{isBN as ke}from"bn.js";import{bits as k,BitStructure as I,blob as h,Blob as A,cstr as N,f32 as C,f32be as D,f64 as E,f64be as V,greedy as v,Layout as T,ns64 as K,ns64be as q,nu64 as R,nu64be as z,offset as M,s16 as O,s16be as F,s24 as G,s24be as j,s32 as Y,s32be as H,s40 as J,s40be as Q,s48 as X,s48be as Z,s8 as $,seq as W,struct as ee,Structure as S,u16 as te,u16be as ne,u24 as re,u24be as oe,u32 as se,u32be as ue,u40 as ae,u40be as ie,u48 as ye,u48be as ce,u8 as pe,UInt as _,union as Pe,Union as de,unionLayoutDiscriminator as xe,utf8 as fe}from"@solana/buffer-layout";var s=T,b=S;var u=_;var a=h;var i=class extends s{constructor(e,t,r){super(e,r);this.blob=a(e),this.signed=t}decode(e,t=0){let r=new m(this.blob.decode(e,t),10,"le");return this.signed?r.fromTwos(this.span*8).clone():r}encode(e,t,r=0){return typeof e=="number"&&(e=new m(e)),this.signed&&(e=e.toTwos(this.span*8)),this.blob.encode(e.toArrayLike(Buffer,"le",this.span),t,r)}};function p(n){return new u(1,n)}function P(n){return new u(4,n)}function l(n){return new i(8,!1,n)}var y=class extends s{constructor(e,t,r,L){super(e.span,L);this.layout=e,this.decoder=t,this.encoder=r}decode(e,t){return this.decoder(this.layout.decode(e,t))}encode(e,t,r){return this.layout.encode(this.encoder(e),t,r)}getSpan(e,t){return this.layout.getSpan(e,t)}};function d(n){return new y(a(32),o=>new w(o),o=>o.toBuffer(),n)}var c=class extends b{decode(o,e){return super.decode(o,e)}};function g(n,o,e){return new c(n,o,e)}var De=g([P("mintAuthorityOption"),d("mintAuthority"),l("supply"),p("decimals"),p("isInitialized"),P("freezeAuthorityOption"),d("freezeAuthority")]);export{De as SPL_MINT_LAYOUT};
//# sourceMappingURL=layout.mjs.map