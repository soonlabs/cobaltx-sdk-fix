import u from"big.js";import S from"bn.js";import y from"decimal.js-light";import{get as h,set as B}from"lodash";var g=class{constructor(r){this.logLevel=r.logLevel!==void 0?r.logLevel:0,this.name=r.name}set level(r){this.logLevel=r}get time(){return Date.now().toString()}get moduleName(){return this.name}isLogLevel(r){return r<=this.logLevel}error(...r){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...r),this):this}logWithError(...r){let e=r.map(t=>typeof t=="object"?JSON.stringify(t):t).join(", ");throw new Error(e)}warning(...r){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...r),this):this}info(...r){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...r),this):this}debug(...r){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...r),this):this}},W={},N={};function p(i){let r=h(W,i);if(!r){let e=h(N,i);r=new g({name:i,logLevel:e}),B(W,i,r)}return r}import m from"bn.js";var D=9007199254740991;function n(i){let r=p("CobaltX_parseBigNumberish");if(i instanceof m)return i;if(typeof i=="string"){if(i.match(/^-?[0-9]+$/))return new m(i);r.logWithError(`invalid BigNumberish string: ${i}`)}return typeof i=="number"?(i%1&&r.logWithError(`BigNumberish number underflow: ${i}`),(i>=D||i<=-D)&&r.logWithError(`BigNumberish number overflow: ${i}`),new m(String(i))):typeof i=="bigint"?new m(i.toString()):(r.error(`invalid BigNumberish value: ${i}`),new m(0))}import L from"toformat";var w=L,l=w;var s=p("module/fraction"),f=l(u),a=l(y),U={[0]:a.ROUND_DOWN,[1]:a.ROUND_HALF_UP,[2]:a.ROUND_UP},O={[0]:u.roundDown,[1]:u.roundHalfUp,[2]:u.roundUp},o=class{constructor(r,e=new S(1)){this.numerator=n(r),this.denominator=n(e)}get quotient(){return this.numerator.div(this.denominator)}invert(){return new o(this.denominator,this.numerator)}add(r){let e=r instanceof o?r:new o(n(r));return this.denominator.eq(e.denominator)?new o(this.numerator.add(e.numerator),this.denominator):new o(this.numerator.mul(e.denominator).add(e.numerator.mul(this.denominator)),this.denominator.mul(e.denominator))}sub(r){let e=r instanceof o?r:new o(n(r));return this.denominator.eq(e.denominator)?new o(this.numerator.sub(e.numerator),this.denominator):new o(this.numerator.mul(e.denominator).sub(e.numerator.mul(this.denominator)),this.denominator.mul(e.denominator))}mul(r){let e=r instanceof o?r:new o(n(r));return new o(this.numerator.mul(e.numerator),this.denominator.mul(e.denominator))}div(r){let e=r instanceof o?r:new o(n(r));return new o(this.numerator.mul(e.denominator),this.denominator.mul(e.numerator))}toSignificant(r,e={groupSeparator:""},t=1){Number.isInteger(r)||s.logWithError(`${r} is not an integer.`),r<=0&&s.logWithError(`${r} is not positive.`),a.set({precision:r+1,rounding:U[t]});let b=new a(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(r);return b.toFormat(b.decimalPlaces(),e)}toFixed(r,e={groupSeparator:""},t=1){return Number.isInteger(r)||s.logWithError(`${r} is not an integer.`),r<0&&s.logWithError(`${r} is negative.`),f.DP=r,f.RM=O[t]||1,new f(this.numerator.toString()).div(this.denominator.toString()).toFormat(r,e)}isZero(){return this.numerator.isZero()}};export{o as Fraction};
//# sourceMappingURL=fraction.mjs.map