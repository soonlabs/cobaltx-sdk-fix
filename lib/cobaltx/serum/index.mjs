import{PublicKey as t}from"@solana/web3.js";var j=new t("EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q"),Q=new t("CBuCnLe26faBpcBP2fktp4rp8abpcAnTWft6ZrP5Q4T"),W=new t("9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z"),z=new t("FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG"),J=new t("CLaimxFqjHzgTJtAGHU47NPhg6qrc5sCnpC4tBLyABQS"),Y=new t("srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX"),x=new t("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"),X=new t("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"),Z=new t("5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h"),$=new t("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"),ee=new t("2TnjBuwqyBB9to5jURagDT7jLmBPefGRiKL2yh1zPZ4V"),te=new t("LockrWmn6K5twhz3y9w1dQERbmgSaRkfnTeTKbpofwE"),re=new t("kN1kEznaF5Xbd8LYuqtEFcxzWSBk5Fv6ygX6SqEGJVy"),ne=new t("routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS"),oe=new t("7YttLkHDoNj9wyDur5pM1ejNaAvT9X4eqaYcHQqtj2G5"),se=new t("6FJon3QE27qgPVggARueB22hLvoh22VzJpXv4rBEoSLF"),ue=new t("CC12se5To1CdEuw7fDS27B7Geo5jJyL7t5UK2B44NgiH"),ae=new t("9HzJyW1qZsEiSfMUf6L2jo3CcTKAyBmSyKdwQeYisHrC"),ie=new t("DropEU8AvevN3UrXWXTMuz3rqnMczQVNjq3kcSdW2SQi"),ce=new t("CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C"),pe=new t("GpMZbSM2GgvTKHJirzeGfMFoaZ8UR2X7F4v8vHTvxFbL"),ye=new t("DNXgeM9EiiaAbaWvwjHj9fQQLAX5ZsfHyvmYUNRAdNC8"),U=new t("CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"),C=new t("7rQ1QFNosMkUCuh7Z7fPbTHvh73b68sQYdirycEzJVuw"),O=new t("G11FKBRaAkHAKuLCgLM6K6NUc9rTjPAznRCjZifrTQe2"),Pe=new t("LockrWmn6K5twhz3y9w1dQERbmgSaRkfnTeTKbpofwE"),D=new t("DLockwT7X7sxtLmGH9g5kmfcjaBtncdbUmi738m5bvQC"),de=new t("3f7GcQFG397GAaEnv51zR6tsTVihYRydnydDD1cXekxH"),V=new t("7AFUeLVRjBfzqK3tTGw8hN48KLQWSk6DTE8xprWdPqix");var xe={SERUM_MARKET:t.default,OPENBOOK_MARKET:new t("EoTcMgcDRTJVZDMZWBoU6rhYHZfkNTVEAfz3uUJRcYGj"),UTIL1216:t.default,FarmV3:new t("85BFyr98MbCUU9MVTEgzx1nbhWACbJqLzho6zd6DZcWL"),FarmV5:new t("EcLzTrNg9V7qhcdyXDe2qjtPkiGzDM2UbdRaeaadU5r2"),FarmV6:new t("Farm2hJLcqPtPg8M4rR6DMrsRNc5TPm5Cs4bVQrMe2T7"),AmmV4:new t("HWy1jotHpo6UqeQxx49dpYYdQB8wj9Qk9MdxwjLvDHB8"),AmmStable:new t("DDg4VmQaJV9ogWce7LpcjBA9bv22wRp5uaTPa5pGjijF"),CLMM:new t("devi51mZmdwUJGU9hjN27vEz64Gps7uUefqxg27EAtH"),CLMM_LOCK_PROGRAM_ID:new t("DLockwT7X7sxtLmGH9g5kmfcjaBtncdbUmi738m5bvQC"),CLMM_LOCK_AUTH_ID:new t("8qmHNvu2Kr2C7U8mJL4Vz1vTDxMhVuXKREwU7TNoaVEo"),Router:new t("BVChZ3XFEwTMUk1o9i3HAf91H6mFxSwa5X2wFAWhYPhU"),CREATE_CPMM_POOL_PROGRAM:U,CREATE_CPMM_POOL_AUTH:C,CREATE_CPMM_POOL_FEE_ACC:O,FEE_DESTINATION_ID:new t("3XMrhbv989VxAMi3DErLV9eJht1pHppW5LbKxe9fkEFR"),LOCK_CPMM_PROGRAM:D,LCOK_CPMM_AUTH:V};var l={[x.toBase58()]:3},_={3:x};import{PublicKey as K}from"@solana/web3.js";import h,{isBN as _t}from"bn.js";import{bits as me,BitStructure as le,blob as v,Blob as _e,cstr as Te,f32 as he,f32be as Me,f64 as we,f64be as Se,greedy as Re,Layout as k,ns64 as Ae,ns64be as Ee,nu64 as Be,nu64be as Ue,offset as Ce,s16 as Oe,s16be as De,s24 as Ve,s24be as ve,s32 as ke,s32be as Ie,s40 as Ke,s40be as Ge,s48 as Ne,s48be as qe,s8 as Fe,seq as He,struct as je,Structure as I,u16 as Qe,u16be as We,u24 as ze,u24be as Je,u32 as Ye,u32be as Xe,u40 as Ze,u40be as $e,u48 as et,u48be as tt,u8 as rt,UInt as nt,union as ot,Union as st,unionLayoutDiscriminator as ut,utf8 as at}from"@solana/buffer-layout";var f=k,T=I;var p=v;var L=class extends f{constructor(r,n,o){super(r,o);this.blob=p(r),this.signed=n}decode(r,n=0){let o=new h(this.blob.decode(r,n),10,"le");return this.signed?o.fromTwos(this.span*8).clone():o}encode(r,n,o=0){return typeof r=="number"&&(r=new h(r)),this.signed&&(r=r.toTwos(this.span*8)),this.blob.encode(r.toArrayLike(Buffer,"le",this.span),n,o)}};function u(s){return new L(8,!1,s)}var b=class extends f{constructor(r,n,o,y){super(r.span,y);this.layout=r,this.decoder=n,this.encoder=o}decode(r,n){return this.decoder(this.layout.decode(r,n))}encode(r,n,o){return this.layout.encode(this.encoder(r),n,o)}getSpan(r,n){return this.layout.getSpan(r,n)}};function a(s){return new b(p(32),e=>new K(e),e=>e.toBuffer(),s)}var g=class extends T{decode(e,r){return super.decode(e,r)}};function M(s,e,r){return new g(s,e,r)}var G=M([p(5),p(8),a("ownAddress"),u("vaultSignerNonce"),a("baseMint"),a("quoteMint"),a("baseVault"),u("baseDepositsTotal"),u("baseFeesAccrued"),a("quoteVault"),u("quoteDepositsTotal"),u("quoteFeesAccrued"),u("quoteDustThreshold"),a("requestQueue"),a("eventQueue"),a("bids"),a("asks"),u("baseLotSize"),u("quoteLotSize"),u("feeRateBps"),u("referrerRebatesAccrued"),p(7)]),w={3:G};import{PublicKey as E}from"@solana/web3.js";import{get as S,set as N}from"lodash";var m=class{constructor(e){this.logLevel=e.logLevel!==void 0?e.logLevel:0,this.name=e.name}set level(e){this.logLevel=e}get time(){return Date.now().toString()}get moduleName(){return this.name}isLogLevel(e){return e<=this.logLevel}error(...e){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...e),this):this}logWithError(...e){let r=e.map(n=>typeof n=="object"?JSON.stringify(n):n).join(", ");throw new Error(r)}warning(...e){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...e),this):this}info(...e){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...e),this):this}debug(...e){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...e),this):this}},R={},q={};function A(s){let e=S(R,s);if(!e){let r=S(q,s);e=new m({name:s,logLevel:r}),N(R,s,e)}return e}var d=A("Serum"),B=class{static getProgramId(e){let r=_[e];return r||d.logWithError("invalid version","version",e),r}static getVersion(e){let r=e.toBase58(),n=l[r];return n||d.logWithError("invalid program id","programId",r),n}static getStateLayout(e){let r=w[e];return r||d.logWithError(!!r,"invalid version","version",e),r}static getLayouts(e){return{state:this.getStateLayout(e)}}static getAssociatedAuthority({programId:e,marketId:r}){let n=[r.toBuffer()],o=0,y;for(;o<100;){try{let P=n.concat(Buffer.from([o]),Buffer.alloc(7));y=E.createProgramAddressSync(P,e)}catch(P){if(P instanceof TypeError)throw P;o++;continue}return{publicKey:y,nonce:o}}return d.logWithError("unable to find a viable program address nonce","params",{programId:e,marketId:r}),{publicKey:E.default,nonce:o}}};export{G as MARKET_STATE_LAYOUT_V3,w as MARKET_VERSION_TO_STATE_LAYOUT,B as Market,l as SERUM_PROGRAMID_TO_VERSION,_ as SERUM_VERSION_TO_PROGRAMID};
//# sourceMappingURL=index.mjs.map