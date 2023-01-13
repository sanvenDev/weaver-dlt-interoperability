"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[6664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=s(n),u=i,m=k["".concat(c,".").concat(u)]||k[u]||d[u]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[k]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={id:"besu-besu",title:"Asset Exchange: Besu with Besu",sidebar_label:"Besu with Besu",pagination_label:"Besu with Besu",pagination_prev:"external/getting-started/interop/asset-exchange/overview"},r=void 0,l={unversionedId:"external/getting-started/interop/asset-exchange/besu-besu",id:"external/getting-started/interop/asset-exchange/besu-besu",title:"Asset Exchange: Besu with Besu",description:"We divide this page into two sections, if you used default configuration in ledger initialization step, then go to section AliceERC721 with BobERC20, otherwise if you used hybrid tokens in network, then go to section AliceERC1155 with BobERC20",source:"@site/docs/external/getting-started/interop/asset-exchange/besu-besu.md",sourceDirName:"external/getting-started/interop/asset-exchange",slug:"/external/getting-started/interop/asset-exchange/besu-besu",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/besu-besu",draft:!1,editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/getting-started/interop/asset-exchange/besu-besu.md",tags:[],version:"current",frontMatter:{id:"besu-besu",title:"Asset Exchange: Besu with Besu",sidebar_label:"Besu with Besu",pagination_label:"Besu with Besu",pagination_prev:"external/getting-started/interop/asset-exchange/overview"},sidebar:"Documentation",previous:{title:"Asset Exchange",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/overview"},next:{title:"Asset Transfer",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-transfer"}},c={},s=[{value:"AliceERC721 with BobERC20",id:"aliceerc721-with-boberc20",level:2},{value:"AliceERC1155 with BobERC20",id:"aliceerc1155-with-boberc20",level:2}],p={toc:s};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We divide this page into two sections, if you used default configuration in ledger initialization step, then go to section ",(0,i.kt)("a",{parentName:"p",href:"#aliceerc721-with-boberc20"},"AliceERC721 with BobERC20"),", otherwise if you used hybrid tokens in ",(0,i.kt)("inlineCode",{parentName:"p"},"network"),", then go to section ",(0,i.kt)("a",{parentName:"p",href:"#aliceerc1155-with-boberc20"},"AliceERC1155 with BobERC20")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"The hash used in following steps can be replaced by any valid ",(0,i.kt)("inlineCode",{parentName:"td"},"SHA256")," hash.")))),(0,i.kt)("h2",{id:"aliceerc721-with-boberc20"},"AliceERC721 with BobERC20"),(0,i.kt)("p",null,"One Besu network transfers an non-fungible ",(0,i.kt)("inlineCode",{parentName:"p"},"AliceERC721")," token with id ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," from Alice to Bob in exchange for a transfer of ",(0,i.kt)("inlineCode",{parentName:"p"},"10 BobERC20")," tokens from Bob to Alice in the other network. We will use account ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," for Alice and account ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," for Bob in both networks."),(0,i.kt)("p",null,"Run the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to either the ",(0,i.kt)("inlineCode",{parentName:"li"},"samples/besu/besu-cli")," folder in your clone of the Weaver repository."),(0,i.kt)("li",{parentName:"ol"},"Run the following to verify the status of the assets owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in the two networks:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset get-balance --network=network1 --account=1\n./bin/besu-cli asset get-balance --network=network1 --account=2\n./bin/besu-cli asset get-balance --network=network2 --account=1\n./bin/besu-cli asset get-balance --network=network2 --account=2\n"))),(0,i.kt)("li",{parentName:"ol"},"Complete the asset exchange in either of the two different ways:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate Secret-Hash Pair using following command (prints hash in base64):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"./bin/besu-cli hash --hash_fn=SHA256 secrettext\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," locking ",(0,i.kt)("inlineCode",{parentName:"li"},"AliceERC721")," token with id ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," for 1 hour",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset lock --network=network1 --sender_account=1 --recipient_account=2 --token_id=0 --asset_type=ERC721 --timeout=3600 --hash_base64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs=\n")),"Note the ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," printed as output in above command. The output line containing ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," (text in base64 after ",(0,i.kt)("inlineCode",{parentName:"li"},"Lock contract ID:"),") would like this:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Lock contract ID: 48f59da2ac632117bf79b4aa986f5ece8a2439dc143d576965c17bc8275b0925\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"'s lock, replacing ",(0,i.kt)("inlineCode",{parentName:"li"},"<contract-id>")," with actual ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset is-locked --network=network1 --lock_contract_id=<contract-id>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," locking ",(0,i.kt)("inlineCode",{parentName:"li"},"10")," units of ",(0,i.kt)("inlineCode",{parentName:"li"},"BobERC20")," tokens for ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," for 30 mins:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset lock --network=network1 --sender_account=1 --recipient_account=2 --amount=10 --timeout=1800 --hash_base64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs=\n")),"Note the ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," again for this lock printed as output in above command. Let's refer it ",(0,i.kt)("inlineCode",{parentName:"li"},"<contract-id-2>")," for this demonstration."),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,i.kt)("inlineCode",{parentName:"li"},"bob"),"'s lock:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset is-locked --network=network1 --lock_contract_id=<contract-id-2>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"'s claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"10")," units of ",(0,i.kt)("inlineCode",{parentName:"li"},"BobERC20")," tokens locked by ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset claim --network=network1 --recipient_account=2 --preimage=secrettext --lock_contract_id=<contract-id-2>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"bob"),"'s claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"AliceERC721")," NFT with id ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," locked by ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset claim --network=network1 --recipient_account=2 --preimage=secrettext --token_id=0 --lock_contract_id=<contract-id>\n")),"The above steps complete a successful asset exchange between two Besu networks.\nIn addition to the above commands, following commands can be run if specified timeout has expired and the locked asset remains unclaimed."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," wants to unlock the asset, run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"'s re-claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"AliceERC721")," NFT with id ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," locked in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset unlock --network=network1 --lock_contract_id=<contract-id> --sender_account=1 --token_id=0\n"))),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," wants to unlock the token asset, run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"bob"),"'s re-claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"10 BobERC20")," tokens locked in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset unlock --network=network1 --lock_contract_id=<contract-id-2> --sender_account=1\n")))),(0,i.kt)("h2",{id:"aliceerc1155-with-boberc20"},"AliceERC1155 with BobERC20"),(0,i.kt)("p",null,"One Besu network transfers an non-fungible ",(0,i.kt)("inlineCode",{parentName:"p"},"5 AliceERC1155")," tokens with id ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," from Alice to Bob in exchange for a transfer of ",(0,i.kt)("inlineCode",{parentName:"p"},"50 BobERC20")," tokens from Bob to Alice in the other network. We will use account ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," for Alice and account ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," for Bob in both networks."),(0,i.kt)("p",null,"Run the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to either the ",(0,i.kt)("inlineCode",{parentName:"li"},"samples/besu/besu-cli")," folder in your clone of the Weaver repository."),(0,i.kt)("li",{parentName:"ol"},"Run the following to verify the status of the assets owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in the two networks:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset get-balance --network=network1 --account=1\n./bin/besu-cli asset get-balance --network=network1 --account=2\n./bin/besu-cli asset get-balance --network=network2 --account=1\n./bin/besu-cli asset get-balance --network=network2 --account=2\n"))),(0,i.kt)("li",{parentName:"ol"},"Complete the asset exchange in either of the two different ways:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate Secret-Hash Pair using following command (prints hash in base64):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"./bin/besu-cli hash --hash_fn=SHA256 secrettext\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," locking ",(0,i.kt)("inlineCode",{parentName:"li"},"5 AliceERC1155")," token with id ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," for 1 hour",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset lock --network=network1 --sender_account=1 --recipient_account=2 --amount=5 --token_id=0 --asset_type=ERC1155 --timeout=3600 --hash_base64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs=\n")),"Note the ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," printed as output in above command. The output line containing ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," (text in base64 after ",(0,i.kt)("inlineCode",{parentName:"li"},"Lock contract ID:"),") would like this:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Lock contract ID: 48f59da2ac632117bf79b4aa986f5ece8a2439dc143d576965c17bc8275b0925\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"'s lock, replacing ",(0,i.kt)("inlineCode",{parentName:"li"},"<contract-id>")," with actual ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset is-locked --network=network1 --lock_contract_id=<contract-id>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," locking ",(0,i.kt)("inlineCode",{parentName:"li"},"50")," units of ",(0,i.kt)("inlineCode",{parentName:"li"},"BobERC20")," tokens for ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset lock --network=network1 --sender_account=1 --recipient_account=2 --amount=50 --timeout=3600 --hash_base64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs=\n")),"Note the ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," again for this lock printed as output in above command. Let's refer it ",(0,i.kt)("inlineCode",{parentName:"li"},"<contract-id-2>")," for this demonstration."),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,i.kt)("inlineCode",{parentName:"li"},"bob"),"'s lock:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset is-locked --network=network1 --lock_contract_id=<contract-id-2>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"'s claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"50")," units of ",(0,i.kt)("inlineCode",{parentName:"li"},"BobERC20")," tokens locked by ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset claim --network=network1 --recipient_account=2 --preimage=secrettext --lock_contract_id=<contract-id-2>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"bob"),"'s claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"5 AliceERC1155")," tokens with id ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," locked by ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset claim --network=network1 --recipient_account=2 --preimage=secrettext --token_id=0 --lock_contract_id=<contract-id>\n")),"The above steps complete a successful asset exchange between two Besu networks.\nIn addition to the above commands, following commands can be run if specified timeout has expired and the locked asset remains unclaimed."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," wants to unlock the asset, run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"'s re-claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"5 AliceERC1155")," tokens with id ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," locked in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset unlock --network=network1 --lock_contract_id=<contract-id> --sender_account=1 --token_id=0\n"))),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," wants to unlock the token asset, run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"bob"),"'s re-claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"50 BobERC20")," tokens locked in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset unlock --network=network1 --lock_contract_id=<contract-id-2> --sender_account=1\n")))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Run the following to verify the status of the assets owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in the two networks:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset get-balance --network=network1 --account=1\n./bin/besu-cli asset get-balance --network=network1 --account=2\n./bin/besu-cli asset get-balance --network=network2 --account=1\n./bin/besu-cli asset get-balance --network=network2 --account=2\n")))))}k.isMDXComponent=!0}}]);