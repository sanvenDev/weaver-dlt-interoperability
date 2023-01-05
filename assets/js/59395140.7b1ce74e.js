"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[8298],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,b=d["".concat(s,".").concat(u)]||d[u]||g[u]||i;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8456:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"overview",title:"Asset Exchange",sidebar_label:"Overview",pagination_label:"Asset Exchange",pagination_prev:"external/getting-started/interop/overview"},o=void 0,l={unversionedId:"external/getting-started/interop/asset-exchange/overview",id:"external/getting-started/interop/asset-exchange/overview",isDocsHomePage:!1,title:"Asset Exchange",description:"\x3c!--",source:"@site/docs/external/getting-started/interop/asset-exchange/overview.md",sourceDirName:"external/getting-started/interop/asset-exchange",slug:"/external/getting-started/interop/asset-exchange/overview",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/overview",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/getting-started/interop/asset-exchange/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Asset Exchange",sidebar_label:"Overview",pagination_label:"Asset Exchange",pagination_prev:"external/getting-started/interop/overview"},sidebar:"Documentation",previous:{title:"Testing Interoperation Modes",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/overview"},next:{title:"Fabric with Fabric",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/fabric-fabric"}},s=[],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document lists sample ways in which you can exercise the asset-exchange interoperation protocol on the test network ",(0,a.kt)("a",{parentName:"p",href:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/overview"},"launched earlier"),"."),(0,a.kt)("p",null,"For this scenario, you only need the networks to be running with the appropriate contracts deployed and the ledgers bootstrapped. You do not need to run relays, drivers and IIN agents. You can run the following combinations of exchanges (",(0,a.kt)("em",{parentName:"p"},"other combinations of DLTs will be supported soon"),")."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/fabric-fabric"},"Fabric with Fabric")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/fabric-corda"},"Fabric with Corda")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/fabric-besu"},"Fabric with Besu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/corda-corda"},"Corda with Corda")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/corda-besu"},"Corda with Besu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/besu-besu"},"Besu with Besu"))))}p.isMDXComponent=!0}}]);