(()=>{var e={};e.id=246,e.ids=[246],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9021:e=>{"use strict";e.exports=require("fs")},3873:e=>{"use strict";e.exports=require("path")},3725:e=>{"use strict";e.exports=import("next/dist/compiled/@vercel/og/index.node.js")},5010:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>j,routeModule:()=>h,serverHooks:()=>v,workAsyncStorage:()=>y,workUnitAsyncStorage:()=>w});var n={};r.r(n),r.d(n,{GET:()=>g});var s=r(1271),i=r(1232),a=r(8079),o=r(1069),l=r(9380),c=r(9021),d=r.n(c),p=r(3873);let u=(0,p.join)(process.cwd(),"public/fonts/Inter-Regular.ttf"),x=d().readFileSync(u),m=(0,p.join)(process.cwd(),"public/fonts/Inter-SemiBold.ttf"),f=d().readFileSync(m);async function g(e){try{let t=e.nextUrl.searchParams.get("collectionId"),r=e.nextUrl.searchParams.get("tokenId"),n="Collection: "+t?.slice(0,4)+"..."+t?.slice(-4);if(console.log({collectionId:t,tokenId:r,toComponent:n}),!t||!r)return new l.f((0,o.jsx)("div",{style:{alignItems:"center",background:"black",display:"flex",flexDirection:"column",flexWrap:"nowrap",height:"100%",justifyContent:"center",textAlign:"center",width:"100%"},children:(0,o.jsx)("div",{style:{color:"white",fontSize:60,fontStyle:"normal",letterSpacing:"-0.025em",lineHeight:1.4,marginTop:30,padding:"0 120px",whiteSpace:"pre-wrap"},children:"Invalid network!"})}),{width:500,height:500,fonts:[{data:x,name:"Inter-SemiBold.ttf",style:"normal",weight:400}]});return new l.f((0,o.jsx)("div",{style:{alignItems:"center",background:"white",justifyContent:"center",display:"flex",flexDirection:"column",flexWrap:"nowrap",height:"100%",width:"100%",padding:"48px"},children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px"},children:[(0,o.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"16px"}}),(0,o.jsxs)("div",{style:{fontSize:"48px",display:"flex"},children:["Mint NFT id:",(0,o.jsx)("div",{style:{fontFamily:"Inter-SemiBold",display:"flex",marginLeft:"8px"},children:r})]}),(0,o.jsx)("div",{style:{fontSize:"30px"},children:n})]})}),{width:955,height:500,fonts:[{data:x,name:"Inter-Regular"},{data:f,name:"Inter-SemiBold"}]})}catch(e){return console.error("Error generating image response:",e),new Response("Internal Server Error",{status:500})}}let h=new s.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/mint/route",pathname:"/api/mint",filename:"route",bundlePath:"app/api/mint/route"},resolvedPagePath:"/Users/fabrizioguespe/DevRel/message-kit/packages/framekit/src/app/api/mint/route.tsx",nextConfigOutput:"",userland:n}),{workAsyncStorage:y,workUnitAsyncStorage:w,serverHooks:v}=h;function j(){return(0,a.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:w})}},7032:()=>{},408:()=>{},9380:(e,t,r)=>{"use strict";Object.defineProperty(t,"f",{enumerable:!0,get:function(){return n}});class n extends Response{static #e=this.displayName="ImageResponse";constructor(...e){let t=new ReadableStream({async start(t){let n=new(await Promise.resolve().then(r.bind(r,3725))).ImageResponse(...e);if(!n.body)return t.close();let s=n.body.getReader();for(;;){let{done:e,value:r}=await s.read();if(e)return t.close();t.enqueue(r)}}}),n=e[1]||{},s=new Headers({"content-type":"image/png","cache-control":"public, immutable, no-transform, max-age=31536000"});n.headers&&new Headers(n.headers).forEach((e,t)=>s.set(t,e)),super(t,{headers:s,status:n.status,statusText:n.statusText})}}},1069:(e,t,r)=>{"use strict";e.exports=r(735).vendored["react-rsc"].ReactJsxRuntime},1271:(e,t,r)=>{"use strict";e.exports=r(4870)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[79],()=>r(5010));module.exports=n})();