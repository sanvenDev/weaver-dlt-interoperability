"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[2136],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),h=i,p=m["".concat(c,".").concat(h)]||m[h]||d[h]||o;return r?n.createElement(p,a(a({ref:t},u),{},{components:r})):n.createElement(p,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2895:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={id:"overview",title:"Overview"},c=void 0,l={unversionedId:"external/architecture-and-design/overview",id:"external/architecture-and-design/overview",isDocsHomePage:!1,title:"Overview",description:"\x3c!--",source:"@site/docs/external/architecture-and-design/overview.md",sourceDirName:"external/architecture-and-design",slug:"/external/architecture-and-design/overview",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/overview",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/architecture-and-design/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview"},sidebar:"Documentation",previous:{title:"Legacy Integration",permalink:"/weaver-dlt-interoperability/docs/external/user-stories/legacy-integration"},next:{title:"Relay",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/relay"}},u=[{value:"Network",id:"network",children:[],level:2},{value:"Relay",id:"relay",children:[],level:2},{value:"Synchronous vs Asynchronous message communication",id:"synchronous-vs-asynchronous-message-communication",children:[],level:2},{value:"Message vs connection oriented communication",id:"message-vs-connection-oriented-communication",children:[],level:2}],d={toc:u};function m(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The below diagram shows a high level architecture diagram of the Weaver framework."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(1330).Z})),(0,o.kt)("h2",{id:"network"},"Network"),(0,o.kt)("p",null,"The networks in the system can be made up of various heterogenious technologies, including Hyperledger Fabric and Corda. Each network in the system needs to contain an interoperability (IOP) module that enables them to communicate with the relays."),(0,o.kt)("h2",{id:"relay"},"Relay"),(0,o.kt)("p",null,"The relays act as a conduit to facilitate communication of protocols between networks (e.g. data transfer, asset exchange etc). The roles of the relays are described in more detail in ",(0,o.kt)("a",{parentName:"p",href:"/weaver-dlt-interoperability/docs/external/architecture-and-design/relay"},"relay"),"."),(0,o.kt)("h1",{id:"design-decisions"},"Design Decisions"),(0,o.kt)("p",null,"The high level design decisions that were made for the system are outlined here."),(0,o.kt)("h2",{id:"synchronous-vs-asynchronous-message-communication"},"Synchronous vs Asynchronous message communication"),(0,o.kt)("p",null,"We decided to go with an asynchronous message architecture. The primary reason for this is because requests can take an arbitary amount of time to respond, it is not practical for a synchronous message to wait that long for a reply. For example, obtaining a 12 block confirmation on the Bitcoin network can take about 2 hours."),(0,o.kt)("h2",{id:"message-vs-connection-oriented-communication"},"Message vs connection oriented communication"),(0,o.kt)("p",null,"We decided to go with a message oriented architecture. The primary reason for this is because it makes the system more fault tolerant. With a message oriented architecture the requester and responder don't need to be alive at the same time. For example, if the requestor crashes while the responder is processing the request, the communication is not interrupted since the responder will just send a message when it has finished processing the request. The design choice also enables the systen to be made more fault tolerant in the future by implementing message queues between components in the system."))}m.isMDXComponent=!0},1330:function(e,t,r){t.Z=r.p+"assets/images/architecture_overview-7b33025d4ef4bce5161426ac77ec512a.png"}}]);