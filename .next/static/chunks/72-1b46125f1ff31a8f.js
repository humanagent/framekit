(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72],{8898:e=>{e.exports={style:{fontFamily:"'GeistMono', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace"},className:"__className_c1e5c9",variable:"__variable_c1e5c9"}},6746:e=>{e.exports={style:{fontFamily:"'GeistSans', 'GeistSans Fallback'"},className:"__className_3a0388",variable:"__variable_3a0388"}},5886:(e,t,r)=>{"use strict";r.d(t,{h:()=>w});var i,n=r(7620),s=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))a.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>{var r={};for(var i in e)l.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&o)for(var i of o(e))0>t.indexOf(i)&&a.call(e,i)&&(r[i]=e[i]);return r};(e=>{let t=class t{constructor(e,r,i,s){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version value out of range");if(s<-1||s>7)throw RangeError("Mask value out of range");this.size=4*e+17;let o=[];for(let e=0;e<this.size;e++)o.push(!1);for(let e=0;e<this.size;e++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();let l=this.addEccAndInterleave(i);if(this.drawCodewords(l),-1==s){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let r=this.getPenaltyScore();r<e&&(s=t,e=r),this.applyMask(t)}}n(0<=s&&s<=7),this.mask=s,this.applyMask(s),this.drawFormatBits(s),this.isFunction=[]}static encodeText(r,i){let n=e.QrSegment.makeSegments(r);return t.encodeSegments(n,i)}static encodeBinary(r,i){let n=e.QrSegment.makeBytes(r);return t.encodeSegments([n],i)}static encodeSegments(e,i,s=1,l=40,a=-1,u=!0){let h,c;if(!(t.MIN_VERSION<=s&&s<=l&&l<=t.MAX_VERSION)||a<-1||a>7)throw RangeError("Invalid value");for(h=s;;h++){let r=8*t.getNumDataCodewords(h,i),n=o.getTotalBits(e,h);if(n<=r){c=n;break}if(h>=l)throw RangeError("Data too long")}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])u&&c<=8*t.getNumDataCodewords(h,e)&&(i=e);let d=[];for(let t of e)for(let e of(r(t.mode.modeBits,4,d),r(t.numChars,t.mode.numCharCountBits(h),d),t.getData()))d.push(e);n(d.length==c);let f=8*t.getNumDataCodewords(h,i);n(d.length<=f),r(0,Math.min(4,f-d.length),d),r(0,(8-d.length%8)%8,d),n(d.length%8==0);for(let e=236;d.length<f;e^=253)r(e,8,d);let m=[];for(;8*m.length<d.length;)m.push(0);return d.forEach((e,t)=>m[t>>>3]|=e<<7-(7&t)),new t(h,i,m,a)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let i=0;i<t;i++)0==r&&0==i||0==r&&i==t-1||r==t-1&&0==i||this.drawAlignmentPattern(e[r],e[i]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,r=t;for(let e=0;e<10;e++)r=r<<1^(r>>>9)*1335;let s=(t<<10|r)^21522;n(s>>>15==0);for(let e=0;e<=5;e++)this.setFunctionModule(8,e,i(s,e));this.setFunctionModule(8,7,i(s,6)),this.setFunctionModule(8,8,i(s,7)),this.setFunctionModule(7,8,i(s,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,i(s,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,i(s,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,i(s,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;n(t>>>18==0);for(let e=0;e<18;e++){let r=i(t,e),n=this.size-11+e%3,s=Math.floor(e/3);this.setFunctionModule(n,s,r),this.setFunctionModule(s,n,r)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let i=-4;i<=4;i++){let n=Math.max(Math.abs(i),Math.abs(r)),s=e+i,o=t+r;0<=s&&s<this.size&&0<=o&&o<this.size&&this.setFunctionModule(s,o,2!=n&&4!=n)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let i=-2;i<=2;i++)this.setFunctionModule(e+i,t+r,1!=Math.max(Math.abs(i),Math.abs(r)))}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){let r=this.version,i=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(r,i))throw RangeError("Invalid argument");let s=t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][r],o=t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][r],l=Math.floor(t.getNumRawDataModules(r)/8),a=s-l%s,u=Math.floor(l/s),h=[],c=t.reedSolomonComputeDivisor(o);for(let r=0,i=0;r<s;r++){let n=e.slice(i,i+u-o+(r<a?0:1));i+=n.length;let s=t.reedSolomonComputeRemainder(n,c);r<a&&n.push(0),h.push(n.concat(s))}let d=[];for(let e=0;e<h[0].length;e++)h.forEach((t,r)=>{(e!=u-o||r>=a)&&d.push(t[e])});return n(d.length==l),d}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError("Invalid argument");let r=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let n=0;n<this.size;n++)for(let s=0;s<2;s++){let o=t-s,l=(t+1&2)==0?this.size-1-n:n;!this.isFunction[l][o]&&r<8*e.length&&(this.modules[l][o]=i(e[r>>>3],7-(7&r)),r++)}}n(r==8*e.length)}applyMask(e){if(e<0||e>7)throw RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let i;switch(e){case 0:i=(r+t)%2==0;break;case 1:i=t%2==0;break;case 2:i=r%3==0;break;case 3:i=(r+t)%3==0;break;case 4:i=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:i=r*t%2+r*t%3==0;break;case 6:i=(r*t%2+r*t%3)%2==0;break;case 7:i=((r+t)%2+r*t%3)%2==0;break;default:throw Error("Unreachable")}!this.isFunction[t][r]&&i&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let r=0;r<this.size;r++){let i=!1,n=0,s=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[r][o]==i?5==++n?e+=t.PENALTY_N1:n>5&&e++:(this.finderPenaltyAddHistory(n,s),i||(e+=this.finderPenaltyCountPatterns(s)*t.PENALTY_N3),i=this.modules[r][o],n=1);e+=this.finderPenaltyTerminateAndCount(i,n,s)*t.PENALTY_N3}for(let r=0;r<this.size;r++){let i=!1,n=0,s=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[o][r]==i?5==++n?e+=t.PENALTY_N1:n>5&&e++:(this.finderPenaltyAddHistory(n,s),i||(e+=this.finderPenaltyCountPatterns(s)*t.PENALTY_N3),i=this.modules[o][r],n=1);e+=this.finderPenaltyTerminateAndCount(i,n,s)*t.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let i=0;i<this.size-1;i++){let n=this.modules[r][i];n==this.modules[r][i+1]&&n==this.modules[r+1][i]&&n==this.modules[r+1][i+1]&&(e+=t.PENALTY_N2)}let r=0;for(let e of this.modules)r=e.reduce((e,t)=>e+(t?1:0),r);let i=this.size*this.size,s=Math.ceil(Math.abs(20*r-10*i)/i)-1;return n(0<=s&&s<=9),n(0<=(e+=s*t.PENALTY_N4)&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{let e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),r=[6];for(let i=this.size-7;r.length<e;i-=t)r.splice(1,0,i);return r}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version number out of range");let r=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return n(208<=r&&r<=29648),r}static getNumDataCodewords(e,r){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError("Degree out of range");let r=[];for(let t=0;t<e-1;t++)r.push(0);r.push(1);let i=1;for(let n=0;n<e;n++){for(let e=0;e<r.length;e++)r[e]=t.reedSolomonMultiply(r[e],i),e+1<r.length&&(r[e]^=r[e+1]);i=t.reedSolomonMultiply(i,2)}return r}static reedSolomonComputeRemainder(e,r){let i=r.map(e=>0);for(let n of e){let e=n^i.shift();i.push(0),r.forEach((r,n)=>i[n]^=t.reedSolomonMultiply(r,e))}return i}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw RangeError("Byte out of range");let r=0;for(let i=7;i>=0;i--)r=r<<1^(r>>>7)*285^(t>>>i&1)*e;return n(r>>>8==0),r}finderPenaltyCountPatterns(e){let t=e[1];n(t<=3*this.size);let r=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(r&&e[0]>=4*t&&e[6]>=t?1:0)+(r&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};function r(e,t,r){if(t<0||t>31||e>>>t!=0)throw RangeError("Value out of range");for(let i=t-1;i>=0;i--)r.push(e>>>i&1)}function i(e,t){return(e>>>t&1)!=0}function n(e){if(!e)throw Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;let s=class e{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let i=[];for(let e of t)r(e,8,i);return new e(e.Mode.BYTE,t.length,i)}static makeNumeric(t){if(!e.isNumeric(t))throw RangeError("String contains non-numeric characters");let i=[];for(let e=0;e<t.length;){let n=Math.min(t.length-e,3);r(parseInt(t.substring(e,e+n),10),3*n+1,i),e+=n}return new e(e.Mode.NUMERIC,t.length,i)}static makeAlphanumeric(t){let i;if(!e.isAlphanumeric(t))throw RangeError("String contains unencodable characters in alphanumeric mode");let n=[];for(i=0;i+2<=t.length;i+=2){let s=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i));r(s+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i+1)),11,n)}return i<t.length&&r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i)),6,n),new e(e.Mode.ALPHANUMERIC,t.length,n)}static makeSegments(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let i=[];if(t<0)throw RangeError("ECI assignment value out of range");if(t<128)r(t,8,i);else if(t<16384)r(2,2,i),r(t,14,i);else if(t<1e6)r(6,3,i),r(t,21,i);else throw RangeError("ECI assignment value out of range");return new e(e.Mode.ECI,0,i)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(let i of e){let e=i.mode.numCharCountBits(t);if(i.numChars>=1<<e)return 1/0;r+=4+e+i.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)"%"!=e.charAt(r)?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t}};s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let o=s;e.QrSegment=s})(i||(i={})),(e=>{(e=>{let t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})(e.QrCode||(e.QrCode={}))})(i||(i={})),(e=>{(e=>{let t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})(e.QrSegment||(e.QrSegment={}))})(i||(i={}));var d=i,f={L:d.QrCode.Ecc.LOW,M:d.QrCode.Ecc.MEDIUM,Q:d.QrCode.Ecc.QUARTILE,H:d.QrCode.Ecc.HIGH},m="#FFFFFF",g="#000000";function E(e,t=0){let r=[];return e.forEach(function(e,i){let n=null;e.forEach(function(s,o){if(!s&&null!==n){r.push(`M${n+t} ${i+t}h${o-n}v1H${n+t}z`),n=null;return}if(o===e.length-1){if(!s)return;null===n?r.push(`M${o+t},${i+t} h1v1H${o+t}z`):r.push(`M${n+t},${i+t} h${o+1-n}v1H${n+t}z`);return}s&&null===n&&(n=o)})}),r.join("")}function M(e,t){return e.slice().map((e,r)=>r<t.y||r>=t.y+t.h?e:e.map((e,r)=>(r<t.x||r>=t.x+t.w)&&e))}function C({value:e,level:t,minVersion:r,includeMargin:i,marginSize:s,imageSettings:o,size:l,boostLevel:a}){let u=n.useMemo(()=>{let i=(Array.isArray(e)?e:[e]).reduce((e,t)=>(e.push(...d.QrSegment.makeSegments(t)),e),[]);return d.QrCode.encodeSegments(i,f[t],r,void 0,void 0,a)},[e,t,r,a]),{cells:h,margin:c,numCells:m,calculatedImageSettings:g}=n.useMemo(()=>{let e=u.getModules(),t=null!=s?Math.max(Math.floor(s),0):i?4:0,r=e.length+2*t,n=function(e,t,r,i){if(null==i)return null;let n=e.length+2*r,s=Math.floor(.1*t),o=n/t,l=(i.width||s)*o,a=(i.height||s)*o,u=null==i.x?e.length/2-l/2:i.x*o,h=null==i.y?e.length/2-a/2:i.y*o,c=null==i.opacity?1:i.opacity,d=null;if(i.excavate){let e=Math.floor(u),t=Math.floor(h),r=Math.ceil(l+u-e),i=Math.ceil(a+h-t);d={x:e,y:t,w:r,h:i}}return{x:u,y:h,h:a,w:l,excavation:d,opacity:c,crossOrigin:i.crossOrigin}}(e,l,t,o);return{cells:e,margin:t,numCells:r,calculatedImageSettings:n}},[u,l,o,i,s]);return{qrcode:u,margin:c,cells:h,numCells:m,calculatedImageSettings:g}}var p=function(){try{new Path2D().addPath(new Path2D)}catch(e){return!1}return!0}();n.forwardRef(function(e,t){let{value:r,size:i=128,level:s="L",bgColor:o=m,fgColor:l=g,includeMargin:a=!1,minVersion:u=1,boostLevel:d,marginSize:f,imageSettings:w}=e,R=c(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:v}=R,N=c(R,["style"]),y=null==w?void 0:w.src,b=n.useRef(null),A=n.useRef(null),P=n.useCallback(e=>{b.current=e,"function"==typeof t?t(e):t&&(t.current=e)},[t]),[_,I]=n.useState(!1),{margin:S,cells:O,numCells:F,calculatedImageSettings:L}=C({value:r,level:s,minVersion:u,boostLevel:d,includeMargin:a,marginSize:f,imageSettings:w,size:i});n.useEffect(()=>{if(null!=b.current){let e=b.current,t=e.getContext("2d");if(!t)return;let r=O,n=A.current,s=null!=L&&null!==n&&n.complete&&0!==n.naturalHeight&&0!==n.naturalWidth;s&&null!=L.excavation&&(r=M(O,L.excavation));let a=window.devicePixelRatio||1;e.height=e.width=i*a;let u=i/F*a;t.scale(u,u),t.fillStyle=o,t.fillRect(0,0,F,F),t.fillStyle=l,p?t.fill(new Path2D(E(r,S))):O.forEach(function(e,r){e.forEach(function(e,i){e&&t.fillRect(i+S,r+S,1,1)})}),L&&(t.globalAlpha=L.opacity),s&&t.drawImage(n,L.x+S,L.y+S,L.w,L.h)}}),n.useEffect(()=>{I(!1)},[y]);let $=h({height:i,width:i},v),z=null;return null!=y&&(z=n.createElement("img",{src:y,key:y,style:{display:"none"},onLoad:()=>{I(!0)},ref:A,crossOrigin:null==L?void 0:L.crossOrigin})),n.createElement(n.Fragment,null,n.createElement("canvas",h({style:$,height:i,width:i,ref:P,role:"img"},N)),z)}).displayName="QRCodeCanvas";var w=n.forwardRef(function(e,t){let{value:r,size:i=128,level:s="L",bgColor:o=m,fgColor:l=g,includeMargin:a=!1,minVersion:u=1,boostLevel:d,title:f,marginSize:p,imageSettings:w}=e,R=c(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:v,cells:N,numCells:y,calculatedImageSettings:b}=C({value:r,level:s,minVersion:u,boostLevel:d,includeMargin:a,marginSize:p,imageSettings:w,size:i}),A=N,P=null;null!=w&&null!=b&&(null!=b.excavation&&(A=M(N,b.excavation)),P=n.createElement("image",{href:w.src,height:b.h,width:b.w,x:b.x+v,y:b.y+v,preserveAspectRatio:"none",opacity:b.opacity,crossOrigin:b.crossOrigin}));let _=E(A,v);return n.createElement("svg",h({height:i,width:i,viewBox:`0 0 ${y} ${y}`,ref:t,role:"img"},R),!!f&&n.createElement("title",null,f),n.createElement("path",{fill:o,d:`M0,0 h${y}v${y}H0z`,shapeRendering:"crispEdges"}),n.createElement("path",{fill:l,d:_,shapeRendering:"crispEdges"}),P)});w.displayName="QRCodeSVG"},2569:(e,t,r)=>{"use strict";r.d(t,{X:()=>l});let i="2.21.48",n={getDocsUrl:({docsBaseUrl:e,docsPath:t="",docsSlug:r})=>t?`${e??"https://viem.sh"}${t}${r?`#${r}`:""}`:void 0,version:`viem@${i}`};class s extends Error{constructor(e,t={}){let r=t.cause instanceof s?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof s&&t.cause.docsPath||t.docsPath,l=n.getDocsUrl?.({...t,docsPath:o});super([e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...l?[`Docs: ${l}`]:[],...r?[`Details: ${r}`]:[],...n.version?[`Version: ${n.version}`]:[]].join("\n"),t.cause?{cause:t.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.name=t.name??this.name,this.shortMessage=e,this.version=i}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t&&void 0!==t.cause?e(t.cause,r):r?null:t}(this,e)}}class o extends s{constructor({value:e}){super(`Number \`${e}\` is not a valid decimal number.`,{name:"InvalidDecimalNumberError"})}}function l(e,t){if(!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))throw new o({value:e});let[r,i="0"]=e.split("."),n=r.startsWith("-");if(n&&(r=r.slice(1)),i=i.replace(/(0+)$/,""),0===t)1===Math.round(Number(`.${i}`))&&(r=`${BigInt(r)+1n}`),i="";else if(i.length>t){let[e,n,s]=[i.slice(0,t-1),i.slice(t-1,t),i.slice(t)],o=Math.round(Number(`${n}.${s}`));(i=o>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${o}`).length>t&&(i=i.slice(1),r=`${BigInt(r)+1n}`),i=i.slice(0,t)}else i=i.padEnd(t,"0");return BigInt(`${n?"-":""}${r}${i}`)}}}]);