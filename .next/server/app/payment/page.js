(()=>{var e={};e.id=407,e.ids=[407],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},6408:e=>{e.exports={style:{fontFamily:"'GeistMono', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace"},className:"__className_c1e5c9",variable:"__variable_c1e5c9"}},4400:e=>{e.exports={style:{fontFamily:"'GeistSans', 'GeistSans Fallback'"},className:"__className_3a0388",variable:"__variable_3a0388"}},1213:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>d,pages:()=>c,routeModule:()=>h,tree:()=>u});var s=r(260),n=r(8203),i=r(5155),a=r.n(i),o=r(7292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let u=["",{children:["payment",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8996)),"/Users/fabrizioguespe/DevRel/framekit/src/app/payment/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"/Users/fabrizioguespe/DevRel/framekit/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/fabrizioguespe/DevRel/framekit/src/app/payment/page.tsx"],d={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/payment/page",pathname:"/payment",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},9876:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,6313,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},6260:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,6013,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},2689:()=>{},9137:()=>{},3533:(e,t,r)=>{Promise.resolve().then(r.bind(r,1279))},8445:(e,t,r)=>{Promise.resolve().then(r.bind(r,7516))},7516:(e,t,r)=>{"use strict";r.d(t,{default:()=>I});var s,n=r(5512),i=r(8009),a=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&c(e,r,t[r]);return e},h=(e,t)=>{var r={};for(var s in e)l.call(e,s)&&0>t.indexOf(s)&&(r[s]=e[s]);if(null!=e&&o)for(var s of o(e))0>t.indexOf(s)&&u.call(e,s)&&(r[s]=e[s]);return r};(e=>{let t=class t{constructor(e,r,s,i){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version value out of range");if(i<-1||i>7)throw RangeError("Mask value out of range");this.size=4*e+17;let a=[];for(let e=0;e<this.size;e++)a.push(!1);for(let e=0;e<this.size;e++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();let o=this.addEccAndInterleave(s);if(this.drawCodewords(o),-1==i){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let r=this.getPenaltyScore();r<e&&(i=t,e=r),this.applyMask(t)}}n(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}static encodeText(r,s){let n=e.QrSegment.makeSegments(r);return t.encodeSegments(n,s)}static encodeBinary(r,s){let n=e.QrSegment.makeBytes(r);return t.encodeSegments([n],s)}static encodeSegments(e,s,i=1,o=40,l=-1,u=!0){let c,d;if(!(t.MIN_VERSION<=i&&i<=o&&o<=t.MAX_VERSION)||l<-1||l>7)throw RangeError("Invalid value");for(c=i;;c++){let r=8*t.getNumDataCodewords(c,s),n=a.getTotalBits(e,c);if(n<=r){d=n;break}if(c>=o)throw RangeError("Data too long")}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])u&&d<=8*t.getNumDataCodewords(c,e)&&(s=e);let h=[];for(let t of e)for(let e of(r(t.mode.modeBits,4,h),r(t.numChars,t.mode.numCharCountBits(c),h),t.getData()))h.push(e);n(h.length==d);let m=8*t.getNumDataCodewords(c,s);n(h.length<=m),r(0,Math.min(4,m-h.length),h),r(0,(8-h.length%8)%8,h),n(h.length%8==0);for(let e=236;h.length<m;e^=253)r(e,8,h);let f=[];for(;8*f.length<h.length;)f.push(0);return h.forEach((e,t)=>f[t>>>3]|=e<<7-(7&t)),new t(c,s,f,l)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let s=0;s<t;s++)0==r&&0==s||0==r&&s==t-1||r==t-1&&0==s||this.drawAlignmentPattern(e[r],e[s]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,r=t;for(let e=0;e<10;e++)r=r<<1^(r>>>9)*1335;let i=(t<<10|r)^21522;n(i>>>15==0);for(let e=0;e<=5;e++)this.setFunctionModule(8,e,s(i,e));this.setFunctionModule(8,7,s(i,6)),this.setFunctionModule(8,8,s(i,7)),this.setFunctionModule(7,8,s(i,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,s(i,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,s(i,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,s(i,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;n(t>>>18==0);for(let e=0;e<18;e++){let r=s(t,e),n=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(n,i,r),this.setFunctionModule(i,n,r)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let s=-4;s<=4;s++){let n=Math.max(Math.abs(s),Math.abs(r)),i=e+s,a=t+r;0<=i&&i<this.size&&0<=a&&a<this.size&&this.setFunctionModule(i,a,2!=n&&4!=n)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let s=-2;s<=2;s++)this.setFunctionModule(e+s,t+r,1!=Math.max(Math.abs(s),Math.abs(r)))}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){let r=this.version,s=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(r,s))throw RangeError("Invalid argument");let i=t.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][r],a=t.ECC_CODEWORDS_PER_BLOCK[s.ordinal][r],o=Math.floor(t.getNumRawDataModules(r)/8),l=i-o%i,u=Math.floor(o/i),c=[],d=t.reedSolomonComputeDivisor(a);for(let r=0,s=0;r<i;r++){let n=e.slice(s,s+u-a+(r<l?0:1));s+=n.length;let i=t.reedSolomonComputeRemainder(n,d);r<l&&n.push(0),c.push(n.concat(i))}let h=[];for(let e=0;e<c[0].length;e++)c.forEach((t,r)=>{(e!=u-a||r>=l)&&h.push(t[e])});return n(h.length==o),h}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError("Invalid argument");let r=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let n=0;n<this.size;n++)for(let i=0;i<2;i++){let a=t-i,o=(t+1&2)==0?this.size-1-n:n;!this.isFunction[o][a]&&r<8*e.length&&(this.modules[o][a]=s(e[r>>>3],7-(7&r)),r++)}}n(r==8*e.length)}applyMask(e){if(e<0||e>7)throw RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let s;switch(e){case 0:s=(r+t)%2==0;break;case 1:s=t%2==0;break;case 2:s=r%3==0;break;case 3:s=(r+t)%3==0;break;case 4:s=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:s=r*t%2+r*t%3==0;break;case 6:s=(r*t%2+r*t%3)%2==0;break;case 7:s=((r+t)%2+r*t%3)%2==0;break;default:throw Error("Unreachable")}!this.isFunction[t][r]&&s&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let r=0;r<this.size;r++){let s=!1,n=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[r][a]==s?5==++n?e+=t.PENALTY_N1:n>5&&e++:(this.finderPenaltyAddHistory(n,i),s||(e+=this.finderPenaltyCountPatterns(i)*t.PENALTY_N3),s=this.modules[r][a],n=1);e+=this.finderPenaltyTerminateAndCount(s,n,i)*t.PENALTY_N3}for(let r=0;r<this.size;r++){let s=!1,n=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][r]==s?5==++n?e+=t.PENALTY_N1:n>5&&e++:(this.finderPenaltyAddHistory(n,i),s||(e+=this.finderPenaltyCountPatterns(i)*t.PENALTY_N3),s=this.modules[a][r],n=1);e+=this.finderPenaltyTerminateAndCount(s,n,i)*t.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let s=0;s<this.size-1;s++){let n=this.modules[r][s];n==this.modules[r][s+1]&&n==this.modules[r+1][s]&&n==this.modules[r+1][s+1]&&(e+=t.PENALTY_N2)}let r=0;for(let e of this.modules)r=e.reduce((e,t)=>e+(t?1:0),r);let s=this.size*this.size,i=Math.ceil(Math.abs(20*r-10*s)/s)-1;return n(0<=i&&i<=9),n(0<=(e+=i*t.PENALTY_N4)&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{let e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),r=[6];for(let s=this.size-7;r.length<e;s-=t)r.splice(1,0,s);return r}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version number out of range");let r=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return n(208<=r&&r<=29648),r}static getNumDataCodewords(e,r){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError("Degree out of range");let r=[];for(let t=0;t<e-1;t++)r.push(0);r.push(1);let s=1;for(let n=0;n<e;n++){for(let e=0;e<r.length;e++)r[e]=t.reedSolomonMultiply(r[e],s),e+1<r.length&&(r[e]^=r[e+1]);s=t.reedSolomonMultiply(s,2)}return r}static reedSolomonComputeRemainder(e,r){let s=r.map(e=>0);for(let n of e){let e=n^s.shift();s.push(0),r.forEach((r,n)=>s[n]^=t.reedSolomonMultiply(r,e))}return s}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw RangeError("Byte out of range");let r=0;for(let s=7;s>=0;s--)r=r<<1^(r>>>7)*285^(t>>>s&1)*e;return n(r>>>8==0),r}finderPenaltyCountPatterns(e){let t=e[1];n(t<=3*this.size);let r=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(r&&e[0]>=4*t&&e[6]>=t?1:0)+(r&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};function r(e,t,r){if(t<0||t>31||e>>>t!=0)throw RangeError("Value out of range");for(let s=t-1;s>=0;s--)r.push(e>>>s&1)}function s(e,t){return(e>>>t&1)!=0}function n(e){if(!e)throw Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;let i=class e{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let s=[];for(let e of t)r(e,8,s);return new e(e.Mode.BYTE,t.length,s)}static makeNumeric(t){if(!e.isNumeric(t))throw RangeError("String contains non-numeric characters");let s=[];for(let e=0;e<t.length;){let n=Math.min(t.length-e,3);r(parseInt(t.substring(e,e+n),10),3*n+1,s),e+=n}return new e(e.Mode.NUMERIC,t.length,s)}static makeAlphanumeric(t){let s;if(!e.isAlphanumeric(t))throw RangeError("String contains unencodable characters in alphanumeric mode");let n=[];for(s=0;s+2<=t.length;s+=2){let i=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(s));r(i+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(s+1)),11,n)}return s<t.length&&r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(s)),6,n),new e(e.Mode.ALPHANUMERIC,t.length,n)}static makeSegments(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let s=[];if(t<0)throw RangeError("ECI assignment value out of range");if(t<128)r(t,8,s);else if(t<16384)r(2,2,s),r(t,14,s);else if(t<1e6)r(6,3,s),r(t,21,s);else throw RangeError("ECI assignment value out of range");return new e(e.Mode.ECI,0,s)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(let s of e){let e=s.mode.numCharCountBits(t);if(s.numChars>=1<<e)return 1/0;r+=4+e+s.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)"%"!=e.charAt(r)?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t}};i.NUMERIC_REGEX=/^[0-9]*$/,i.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,i.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let a=i;e.QrSegment=i})(s||(s={})),(e=>{(e=>{let t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})(e.QrCode||(e.QrCode={}))})(s||(s={})),(e=>{(e=>{let t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})(e.QrSegment||(e.QrSegment={}))})(s||(s={}));var m=s,f={L:m.QrCode.Ecc.LOW,M:m.QrCode.Ecc.MEDIUM,Q:m.QrCode.Ecc.QUARTILE,H:m.QrCode.Ecc.HIGH},p="#FFFFFF",g="#000000";function v(e,t=0){let r=[];return e.forEach(function(e,s){let n=null;e.forEach(function(i,a){if(!i&&null!==n){r.push(`M${n+t} ${s+t}h${a-n}v1H${n+t}z`),n=null;return}if(a===e.length-1){if(!i)return;null===n?r.push(`M${a+t},${s+t} h1v1H${a+t}z`):r.push(`M${n+t},${s+t} h${a+1-n}v1H${n+t}z`);return}i&&null===n&&(n=a)})}),r.join("")}function b(e,t){return e.slice().map((e,r)=>r<t.y||r>=t.y+t.h?e:e.map((e,r)=>(r<t.x||r>=t.x+t.w)&&e))}function y({value:e,level:t,minVersion:r,includeMargin:s,marginSize:n,imageSettings:a,size:o,boostLevel:l}){let u=i.useMemo(()=>{let s=(Array.isArray(e)?e:[e]).reduce((e,t)=>(e.push(...m.QrSegment.makeSegments(t)),e),[]);return m.QrCode.encodeSegments(s,f[t],r,void 0,void 0,l)},[e,t,r,l]),{cells:c,margin:d,numCells:h,calculatedImageSettings:p}=i.useMemo(()=>{let e=u.getModules(),t=null!=n?Math.max(Math.floor(n),0):s?4:0,r=e.length+2*t,i=function(e,t,r,s){if(null==s)return null;let n=e.length+2*r,i=Math.floor(.1*t),a=n/t,o=(s.width||i)*a,l=(s.height||i)*a,u=null==s.x?e.length/2-o/2:s.x*a,c=null==s.y?e.length/2-l/2:s.y*a,d=null==s.opacity?1:s.opacity,h=null;if(s.excavate){let e=Math.floor(u),t=Math.floor(c),r=Math.ceil(o+u-e),s=Math.ceil(l+c-t);h={x:e,y:t,w:r,h:s}}return{x:u,y:c,h:l,w:o,excavation:h,opacity:d,crossOrigin:s.crossOrigin}}(e,o,t,a);return{cells:e,margin:t,numCells:r,calculatedImageSettings:i}},[u,o,a,s,n]);return{qrcode:u,margin:d,cells:c,numCells:h,calculatedImageSettings:p}}var E=function(){try{new Path2D().addPath(new Path2D)}catch(e){return!1}return!0}();i.forwardRef(function(e,t){let{value:r,size:s=128,level:n="L",bgColor:a=p,fgColor:o=g,includeMargin:l=!1,minVersion:u=1,boostLevel:c,marginSize:m,imageSettings:f}=e,M=h(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:w}=M,x=h(M,["style"]),P=null==f?void 0:f.src,N=i.useRef(null),C=i.useRef(null),R=i.useCallback(e=>{N.current=e,"function"==typeof t?t(e):t&&(t.current=e)},[t]),[A,$]=i.useState(!1),{margin:I,cells:_,numCells:j,calculatedImageSettings:S}=y({value:r,level:n,minVersion:u,boostLevel:c,includeMargin:l,marginSize:m,imageSettings:f,size:s});i.useEffect(()=>{if(null!=N.current){let e=N.current,t=e.getContext("2d");if(!t)return;let r=_,n=C.current,i=null!=S&&null!==n&&n.complete&&0!==n.naturalHeight&&0!==n.naturalWidth;i&&null!=S.excavation&&(r=b(_,S.excavation));let l=window.devicePixelRatio||1;e.height=e.width=s*l;let u=s/j*l;t.scale(u,u),t.fillStyle=a,t.fillRect(0,0,j,j),t.fillStyle=o,E?t.fill(new Path2D(v(r,I))):_.forEach(function(e,r){e.forEach(function(e,s){e&&t.fillRect(s+I,r+I,1,1)})}),S&&(t.globalAlpha=S.opacity),i&&t.drawImage(n,S.x+I,S.y+I,S.w,S.h)}}),i.useEffect(()=>{$(!1)},[P]);let k=d({height:s,width:s},w),O=null;return null!=P&&(O=i.createElement("img",{src:P,key:P,style:{display:"none"},onLoad:()=>{$(!0)},ref:C,crossOrigin:null==S?void 0:S.crossOrigin})),i.createElement(i.Fragment,null,i.createElement("canvas",d({style:k,height:s,width:s,ref:R,role:"img"},x)),O)}).displayName="QRCodeCanvas";var M=i.forwardRef(function(e,t){let{value:r,size:s=128,level:n="L",bgColor:a=p,fgColor:o=g,includeMargin:l=!1,minVersion:u=1,boostLevel:c,title:m,marginSize:f,imageSettings:E}=e,M=h(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:w,cells:x,numCells:P,calculatedImageSettings:N}=y({value:r,level:n,minVersion:u,boostLevel:c,includeMargin:l,marginSize:f,imageSettings:E,size:s}),C=x,R=null;null!=E&&null!=N&&(null!=N.excavation&&(C=b(x,N.excavation)),R=i.createElement("image",{href:E.src,height:N.h,width:N.w,x:N.x+w,y:N.y+w,preserveAspectRatio:"none",opacity:N.opacity,crossOrigin:N.crossOrigin}));let A=v(C,w);return i.createElement("svg",d({height:s,width:s,viewBox:`0 0 ${P} ${P}`,ref:t,role:"img"},M),!!m&&i.createElement("title",null,m),i.createElement("path",{fill:a,d:`M0,0 h${P}v${P}H0z`,shapeRendering:"crispEdges"}),i.createElement("path",{fill:o,d:A,shapeRendering:"crispEdges"}),R)});M.displayName="QRCodeSVG";let w="2.21.49",x={getDocsUrl:({docsBaseUrl:e,docsPath:t="",docsSlug:r})=>t?`${e??"https://viem.sh"}${t}${r?`#${r}`:""}`:void 0,version:`viem@${w}`};class P extends Error{constructor(e,t={}){let r=t.cause instanceof P?t.cause.details:t.cause?.message?t.cause.message:t.details,s=t.cause instanceof P&&t.cause.docsPath||t.docsPath,n=x.getDocsUrl?.({...t,docsPath:s});super([e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...n?[`Docs: ${n}`]:[],...r?[`Details: ${r}`]:[],...x.version?[`Version: ${x.version}`]:[]].join("\n"),t.cause?{cause:t.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=r,this.docsPath=s,this.metaMessages=t.metaMessages,this.name=t.name??this.name,this.shortMessage=e,this.version=w}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t&&void 0!==t.cause?e(t.cause,r):r?null:t}(this,e)}}class N extends P{constructor({value:e}){super(`Number \`${e}\` is not a valid decimal number.`,{name:"InvalidDecimalNumberError"})}}var C=r(6408),R=r.n(C),A=r(4400),$=r.n(A);function I({params:e}){let[t,r]=(0,i.useState)(e),[s,a]=(0,i.useState)(""),o=function(e,t){if(!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))throw new N({value:e});let[r,s="0"]=e.split("."),n=r.startsWith("-");if(n&&(r=r.slice(1)),(s=s.replace(/(0+)$/,"")).length>6){let[e,n,i]=[s.slice(0,5),s.slice(t-1,t),s.slice(t)],a=Math.round(Number(`${n}.${i}`));(s=a>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${a}`).length>t&&(s=s.slice(1),r=`${BigInt(r)+1n}`),s=s.slice(0,t)}else s=s.padEnd(t,"0");return BigInt(`${n?"-":""}${r}${s}`)}(t.amount.toString(),6),l=`ethereum:${t.tokenAddress}@${t.chainId}/transfer?address=${t.recipientAddress}&uint256=${o}`;return(0,n.jsx)("div",{className:`container ${$().variable} ${R().variable}`,children:(0,n.jsxs)("div",{className:"wrapper",children:[(0,n.jsx)("h1",{className:`title ${$().className}`,children:"Payment Generator"}),(0,n.jsxs)("div",{className:"form-container",children:[(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault();let r=new URLSearchParams({recipientAddress:t.recipientAddress,amount:t.amount,chainId:t.chainId});a(`https://918b-186-153-188-227.ngrok-free.app?${r.toString()}`)},className:"form-group",children:[(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{className:"label",children:"Recipient Address"}),(0,n.jsx)("input",{type:"text",value:t.recipientAddress,onChange:e=>r({...t,recipientAddress:e.target.value}),className:"input",placeholder:"0x..."})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{className:"label",children:"Amount (USDC)"}),(0,n.jsx)("input",{type:"number",value:t.amount,onChange:e=>r({...t,amount:e.target.value}),className:"input",placeholder:"1.0"})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{className:"label",children:"Network"}),(0,n.jsxs)("select",{value:t.chainId,onChange:e=>r({...t,chainId:e.target.value}),className:"select",children:[(0,n.jsx)("option",{value:"8453",children:"Base"}),(0,n.jsx)("option",{value:"1",children:"Ethereum"}),(0,n.jsx)("option",{value:"137",children:"Polygon"})]})]}),(0,n.jsx)("button",{type:"submit",className:"submit-button",children:"Generate Frame URL"})]}),s&&(0,n.jsxs)("div",{className:"url-container",children:[(0,n.jsx)("label",{className:"label",children:"Generated URL"}),(0,n.jsx)("div",{style:{backgroundColor:"yellow",padding:"10px",borderRadius:"5px",marginBottom:"10px"},children:"This frame can be sent through Converse and includes a button that deeplinks to the wallet transaction. It only works on mobile devices and EVM wallets."}),(0,n.jsxs)("div",{className:"url-group",children:[(0,n.jsx)("input",{readOnly:!0,value:s,className:"input"}),(0,n.jsx)("button",{onClick:()=>navigator.clipboard.writeText(s),className:"copy-button",children:"Copy"})]}),(0,n.jsx)("div",{className:"qr-code",style:{display:"flex",justifyContent:"center",padding:"20px"},children:(0,n.jsx)(M,{value:l,size:128})}),(0,n.jsx)("div",{style:{backgroundColor:"yellow",padding:"10px",borderRadius:"5px",marginBottom:"10px"},children:"This QR works in Mobile, scan this qr code with your mobile camera"})]})]}),(0,n.jsxs)("div",{className:"powered-by",style:{marginTop:"3rem",width:"100%",marginBottom:"1rem"},children:["Powered by"," ",(0,n.jsx)("a",{href:"https://github.com/ephemeraHQ/message-kit",target:"_blank",rel:"noopener noreferrer",children:"MessageKit"})]})]})})}},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>s}),r(1135);let s={title:"Tx Pay",description:"TxPay by humanagent.eth"};function n({children:e}){return e}},8996:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(2740),n=r(8366),i=r(1279);async function a({searchParams:e}){let t=await e,r={url:"https://918b-186-153-188-227.ngrok-free.app",recipientAddress:t?.recipientAddress||"0x277C0dd35520dB4aaDDB45d4690aB79353D3368b",tokenAddress:t?.tokenAddress||"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",chainId:parseInt(t?.chainId)||8453,amount:parseFloat(t?.amount)||1,baseLogo:"https://avatars.githubusercontent.com/u/108554348?s=280&v=4",networkName:"base",tokenName:"usdc"},a=(0,n.X)(r.amount.toString(),6),o=`ethereum:${r.tokenAddress}@${r.chainId}/transfer?address=${r.recipientAddress}&uint256=${a}`,l=`${r.url}/api/image?s=1&networkLogo=${r.baseLogo}&amount=${r.amount}&networkName=${r.networkName}&tokenName=${r.tokenName}&recipientAddress=${r.recipientAddress}&tokenAddress=${r.tokenAddress}&chainId=${r.chainId}&networkId=${r.chainId}`;return(0,s.jsxs)("html",{children:[(0,s.jsxs)("head",{children:[(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{property:"og:title",content:"Ethereum Payment"}),(0,s.jsx)("meta",{property:"fc:frame",content:"vNext"}),(0,s.jsx)("meta",{property:"of:version",content:"vNext"}),(0,s.jsx)("meta",{property:"of:accepts:xmtp",content:"vNext"}),(0,s.jsx)("meta",{property:"of:image",content:l}),(0,s.jsx)("meta",{property:"og:image",content:l}),(0,s.jsx)("meta",{property:"fc:frame:image",content:l}),(0,s.jsx)("meta",{property:"fc:frame:ratio",content:"1.91:1"}),(0,s.jsx)("meta",{property:"fc:frame:button:1",content:`Pay $${r.amount} (Mobile)`}),(0,s.jsx)("meta",{property:"fc:frame:button:1:action",content:"link"}),(0,s.jsx)("meta",{property:"fc:frame:button:1:target",content:o})]}),(0,s.jsx)("body",{children:(0,s.jsx)(i.default,{params:r})})]})}},1279:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/fabrizioguespe/DevRel/framekit/src/components/UrlGenerator.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/fabrizioguespe/DevRel/framekit/src/components/UrlGenerator.tsx","default")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(8077);let n=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{},8366:(e,t,r)=>{"use strict";r.d(t,{X:()=>o});let s="2.21.49",n={getDocsUrl:({docsBaseUrl:e,docsPath:t="",docsSlug:r})=>t?`${e??"https://viem.sh"}${t}${r?`#${r}`:""}`:void 0,version:`viem@${s}`};class i extends Error{constructor(e,t={}){let r=t.cause instanceof i?t.cause.details:t.cause?.message?t.cause.message:t.details,a=t.cause instanceof i&&t.cause.docsPath||t.docsPath,o=n.getDocsUrl?.({...t,docsPath:a});super([e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: ${o}`]:[],...r?[`Details: ${r}`]:[],...n.version?[`Version: ${n.version}`]:[]].join("\n"),t.cause?{cause:t.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=r,this.docsPath=a,this.metaMessages=t.metaMessages,this.name=t.name??this.name,this.shortMessage=e,this.version=s}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t&&void 0!==t.cause?e(t.cause,r):r?null:t}(this,e)}}class a extends i{constructor({value:e}){super(`Number \`${e}\` is not a valid decimal number.`,{name:"InvalidDecimalNumberError"})}}function o(e,t){if(!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))throw new a({value:e});let[r,s="0"]=e.split("."),n=r.startsWith("-");if(n&&(r=r.slice(1)),s=s.replace(/(0+)$/,""),0===t)1===Math.round(Number(`.${s}`))&&(r=`${BigInt(r)+1n}`),s="";else if(s.length>t){let[e,n,i]=[s.slice(0,t-1),s.slice(t-1,t),s.slice(t)],a=Math.round(Number(`${n}.${i}`));(s=a>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${a}`).length>t&&(s=s.slice(1),r=`${BigInt(r)+1n}`),s=s.slice(0,t)}else s=s.padEnd(t,"0");return BigInt(`${n?"-":""}${r}${s}`)}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[994,112,77],()=>r(1213));module.exports=s})();