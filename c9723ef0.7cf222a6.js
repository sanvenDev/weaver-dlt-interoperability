(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(133)),o={id:"setup-packages-docker",title:"Setup with Imported Dockerized Weaver Components"},l={unversionedId:"external/getting-started/test-network/setup-packages-docker",id:"external/getting-started/test-network/setup-packages-docker",isDocsHomePage:!1,title:"Setup with Imported Dockerized Weaver Components",description:"\x3c!--",source:"@site/docs/external/getting-started/test-network/setup-packages-docker.md",slug:"/external/getting-started/test-network/setup-packages-docker",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/setup-packages-docker",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/getting-started/test-network/setup-packages-docker.md",version:"current",sidebar:"Documentation",previous:{title:"Setup with Imported Weaver Components",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/setup-packages"},next:{title:"Ledger Initialization",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/ledger-initialization"}},c=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Software",id:"software",children:[]},{value:"Credentials",id:"credentials",children:[]}]},{value:"Getting the Code and Documentation",id:"getting-the-code-and-documentation",children:[]},{value:"Hyperledger Fabric Components",id:"hyperledger-fabric-components",children:[{value:"Fabric Network",id:"fabric-network",children:[]},{value:"Fabric Relay",id:"fabric-relay",children:[]},{value:"Fabric Driver",id:"fabric-driver",children:[]},{value:"Fabric Client (Application)",id:"fabric-client-application",children:[]}]},{value:"Corda Components",id:"corda-components",children:[{value:"Corda Network",id:"corda-network",children:[]},{value:"Corda Relay",id:"corda-relay",children:[]},{value:"Corda Driver",id:"corda-driver",children:[]}]},{value:"Tear Down the Setup",id:"tear-down-the-setup",children:[{value:"Relay",id:"relay",children:[]},{value:"Fabric Driver",id:"fabric-driver-1",children:[]},{value:"Corda Driver",id:"corda-driver-1",children:[]},{value:"Corda Network",id:"corda-network-1",children:[]},{value:"Fabric Network",id:"fabric-network-1",children:[]}]}],s={toc:c};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null," In this document, we detail the steps using which you can bring up networks using the default configuration settings and by fetching pre-built Weaver interoperation modules, SDK libraries, and relay docker image, drivers docker images from Github Package repositories. To customize these settings (e.g., hostnames, ports), refer to the ",Object(i.b)("a",{parentName:"p",href:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/advanced-configuration"},"Advanced Configuration page"),"."),Object(i.b)("p",null," ",Object(i.b)("em",{parentName:"p"},"Note"),": All components are run within Docker containers, except client applications."),Object(i.b)("p",null," Follow the instructions below to build and run components followed by interoperation flows. These instructions have been tested on Ubuntu Linux (bash shell) and Mac OS. In general, they should work on any system and shell as long as the various dependencies have been installed and configured."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("h3",{id:"software"},"Software"),Object(i.b)("p",null,"Before starting, make sure you have the following software installed on your host machine:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Curl: ",Object(i.b)("em",{parentName:"li"},"install using package manager, like ",Object(i.b)("inlineCode",{parentName:"em"},"apt")," on Debian/Ubuntu Linux")),Object(i.b)("li",{parentName:"ul"},"Git: ",Object(i.b)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"sample instructions")),Object(i.b)("li",{parentName:"ul"},"Docker: ",Object(i.b)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"sample instructions")," (Latest version)"),Object(i.b)("li",{parentName:"ul"},"Docker-Compose: ",Object(i.b)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"sample instructions")," (Latest version)"),Object(i.b)("li",{parentName:"ul"},"Golang: ",Object(i.b)("a",{parentName:"li",href:"https://golang.org/dl/"},"sample instructions")," (Version 1.15 or above)"),Object(i.b)("li",{parentName:"ul"},"Java (JDK and JRE): ",Object(i.b)("a",{parentName:"li",href:"https://openjdk.java.net/install/"},"sample instructions")," (Version 8)"),Object(i.b)("li",{parentName:"ul"},"Node.js and NPM: ",Object(i.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"sample instructions")," (Version 11 to Version 14 Supported)"),Object(i.b)("li",{parentName:"ul"},"Yarn: ",Object(i.b)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/docs/install/"},"sample instructions"))),Object(i.b)("h3",{id:"credentials"},"Credentials"),Object(i.b)("p",null,"Make sure you have an SSH or GPG key registered in ",Object(i.b)("a",{parentName:"p",href:"https://github.com"},"https://github.com")," to allow seamless cloning of repositories (at present, various setup scripts clone repositories using the ",Object(i.b)("inlineCode",{parentName:"p"},"https://")," prefix but this may change to ",Object(i.b)("inlineCode",{parentName:"p"},"git@")," in the future)."),Object(i.b)("h4",{id:"package-access-token"},"Package Access Token:"),Object(i.b)("p",null,"Create a personal access token with ",Object(i.b)("inlineCode",{parentName:"p"},"read:packages")," access in github in order to use modules published in github packages. Refer ",Object(i.b)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Creating a Personal Access Token")," for help."),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"docker login ghcr.io"),",  and provide github email id as username and personal access token created above as password. This will allow the docker to fetch images of ",Object(i.b)("inlineCode",{parentName:"p"},"relay"),", ",Object(i.b)("inlineCode",{parentName:"p"},"fabric-driver")," and ",Object(i.b)("inlineCode",{parentName:"p"},"corda-driver")," from ",Object(i.b)("inlineCode",{parentName:"p"},"hyperledger-labs/weaver-dlt-interoperability"),"."),Object(i.b)("h2",{id:"getting-the-code-and-documentation"},"Getting the Code and Documentation"),Object(i.b)("p",null,"Clone the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability"},"weaver-dlt-interoperability")," repository. The code to get a basic test network up and running and test data-sharing interoperation flows lies in the subfolder ",Object(i.b)("inlineCode",{parentName:"p"},"tests/network-setups"),", which should be your starting point, though the setups will rely on other parts of the repository, as you will find out in the instructions given on this page."),Object(i.b)("h2",{id:"hyperledger-fabric-components"},"Hyperledger Fabric Components"),Object(i.b)("p",null,"Using the sequence of instructions below, you can start two separate Fabric networks, each with a single channel and application contract (chaincode). You can also start an interoperation contract, a relay and a ",Object(i.b)("em",{parentName:"p"},"driver")," acting on behalf of each network. You can build a Fabric CLI tool with which you can initialize both networks' ledgers with access control policies, foreign networks' security groups (i.e., membership providers' certificate chains), and some sample key-value pairs that can be shared during subsequent interoperation flows."),Object(i.b)("h3",{id:"fabric-network"},"Fabric Network"),Object(i.b)("p",null,"The code for this lies in the ",Object(i.b)("inlineCode",{parentName:"p"},"tests/network-setups")," folder."),Object(i.b)("p",null,"This folder contains code to create and launch networks ",Object(i.b)("inlineCode",{parentName:"p"},"network1")," and ",Object(i.b)("inlineCode",{parentName:"p"},"network2")," of identical specifications:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Network: 1 peer, 1 peer CA, 1 ordering service node, 1 ordering service CA"),Object(i.b)("li",{parentName:"ul"},"Single channel named ",Object(i.b)("inlineCode",{parentName:"li"},"mychannel")),Object(i.b)("li",{parentName:"ul"},"Single contract named ",Object(i.b)("inlineCode",{parentName:"li"},"simplestate")," (deployed on ",Object(i.b)("inlineCode",{parentName:"li"},"mychannel"),") that supports simple transactions (",Object(i.b)("inlineCode",{parentName:"li"},"Create"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Read"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Update"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Delete"),") involving storage and lookup of <key, value> pairs.")),Object(i.b)("p",null,"Follow the instructions below to build and launch the networks:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"tests/network-setups/fabric/dev")," folder."),Object(i.b)("li",{parentName:"ul"},"To spin up both network1 and network2 with interoperation chaincode installed, run:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"make start-interop\n"))),Object(i.b)("li",{parentName:"ul"},"(",Object(i.b)("em",{parentName:"li"},"Note"),": If you do not wish to test Fabric-Fabric interoperation, you can choose to install only one of the two networks along with its interoperation chaincode. For ",Object(i.b)("inlineCode",{parentName:"li"},"network1"),", run ",Object(i.b)("inlineCode",{parentName:"li"},"make start-interop-network1"),", and for ",Object(i.b)("inlineCode",{parentName:"li"},"network2"),", run ",Object(i.b)("inlineCode",{parentName:"li"},"make start-interop-network2"),".)")),Object(i.b)("p",null,"For more information, refer to the associated ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/tests/network-setups/fabric/dev"},"README"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Troubleshooting Tips"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you see any errors during the launches, re-check the prerequisites (software installations and credentials). Ensure your network connection is working. As a safe bet, you can retry after cleanup: kill and remove all Docker containers and associated volumes.")),Object(i.b)("h3",{id:"fabric-relay"},"Fabric Relay"),Object(i.b)("p",null,"The relay is a module acting on behalf of a network, enabling interoperation flows with other networks by communicating with their relays.\nThe code for this lies in the ",Object(i.b)("inlineCode",{parentName:"p"},"core/relay")," folder."),Object(i.b)("p",null,"Navigate to the ",Object(i.b)("inlineCode",{parentName:"p"},"core/relay")," folder and run a relay as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run: ",Object(i.b)("inlineCode",{parentName:"li"},"make convert-compose-method2")," to uncomment and comment some lines in ",Object(i.b)("inlineCode",{parentName:"li"},"docker-compose.yaml"),"."),Object(i.b)("li",{parentName:"ul"},"For ",Object(i.b)("inlineCode",{parentName:"li"},"network1"),", there's ",Object(i.b)("inlineCode",{parentName:"li"},".env.n1")," file in ",Object(i.b)("inlineCode",{parentName:"li"},"docker/testnet-envs")," directory, that will be used to start a relay server in docker. To deploy, run:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make start-server COMPOSE_ARG='--env-file docker/testnet-envs/.env.n1'\n"))),Object(i.b)("li",{parentName:"ul"},"For ",Object(i.b)("inlineCode",{parentName:"li"},"network2"),", there's ",Object(i.b)("inlineCode",{parentName:"li"},".env.n2")," file in ",Object(i.b)("inlineCode",{parentName:"li"},"docker/testnet-envs")," directory, that will be used to start a relay server in docker. To deploy, run:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make start-server COMPOSE_ARG='--env-file docker/testnet-envs/.env.n2'\n")))),Object(i.b)("p",null,"For more information, see the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/core/relay/relay-docker.md"},"relay-docker README"),"."),Object(i.b)("h3",{id:"fabric-driver"},"Fabric Driver"),Object(i.b)("p",null,"A driver is a DLT-specific plugin invoked by the relay while channelling external data queries to the local peer network and collecting a response with proofs. The Fabric driver is built as a Fabric client application on the ",Object(i.b)("inlineCode",{parentName:"p"},"fabric-network")," NPM package.\nThe code for this lies in the ",Object(i.b)("inlineCode",{parentName:"p"},"core/drivers/fabric-driver")," folder."),Object(i.b)("p",null,"Following steps demonstrate how to run a fabric driver in docker container (",Object(i.b)("em",{parentName:"p"},"replace ",Object(i.b)("inlineCode",{parentName:"em"},"<PATH-TO-WEAVER>")," with location of the clone of your weaver"),")."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"core/drivers/fabric-driver")," folder."),Object(i.b)("li",{parentName:"ul"},"For ",Object(i.b)("inlineCode",{parentName:"li"},"network1"),", there's ",Object(i.b)("inlineCode",{parentName:"li"},".env.n1")," file in ",Object(i.b)("inlineCode",{parentName:"li"},"docker-testnet-envs")," directory, that will be used to start a fabric driver in docker. Edit that file and replace ",Object(i.b)("inlineCode",{parentName:"li"},"<PATH-TO-WEAVER>")," with the absolute path of the ",Object(i.b)("inlineCode",{parentName:"li"},"weaver-dlt-interoperability")," clone folder."),Object(i.b)("li",{parentName:"ul"},"Repeat above step for ",Object(i.b)("inlineCode",{parentName:"li"},".env.n2")," file in ",Object(i.b)("inlineCode",{parentName:"li"},"docker-testnet-envs")," directory, that will be used to start fabric driver for ",Object(i.b)("inlineCode",{parentName:"li"},"network2")," in docker."),Object(i.b)("li",{parentName:"ul"},"To deploy fabric driver for ",Object(i.b)("inlineCode",{parentName:"li"},"network1"),", run:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make deploy COMPOSE_ARG='--env-file docker-testnet-envs/.env.n1'\n"))),Object(i.b)("li",{parentName:"ul"},"To deploy fabric driver for ",Object(i.b)("inlineCode",{parentName:"li"},"network2"),", run:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make deploy COMPOSE_ARG='--env-file docker-testnet-envs/.env.n2'\n")))),Object(i.b)("h3",{id:"fabric-client-application"},"Fabric Client (Application)"),Object(i.b)("p",null,"The CLI is used to interact with a Fabric network, configure it and run chaincode transactions to record data on the channel ledger or query data. It is also used to interact with remote networks through the relay in order to trigger an interoperation flow for data request and acceptance."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"fabric-cli")," source code is located in the ",Object(i.b)("inlineCode",{parentName:"p"},"samples/fabric/fabric-cli")," folder."),Object(i.b)("h4",{id:"prerequisites-1"},"Prerequisites"),Object(i.b)("p",null,"If you are using a Linux system, make sure that lib64 is installed."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note"),": The setup and running instructions below were tested with all Node.js versions from v11.14.0 to v14.17.3."),Object(i.b)("h4",{id:"installation"},"Installation"),Object(i.b)("p",null,"You can install ",Object(i.b)("inlineCode",{parentName:"p"},"fabric-cli")," as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"samples/fabric/fabric-cli")," folder."),Object(i.b)("li",{parentName:"ul"},"Create ",Object(i.b)("inlineCode",{parentName:"li"},".npmrc")," from template ",Object(i.b)("inlineCode",{parentName:"li"},".npmrc.template"),", by replacing ",Object(i.b)("inlineCode",{parentName:"li"},"<personal-access-token>")," with yours created ",Object(i.b)("a",{parentName:"li",href:"#package-access-token"},"above"),".."),Object(i.b)("li",{parentName:"ul"},"Run the following to install dependencies:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make build\n"))),Object(i.b)("li",{parentName:"ul"},"Use the ",Object(i.b)("inlineCode",{parentName:"li"},"fabric-cli")," executable in the ",Object(i.b)("inlineCode",{parentName:"li"},"bin")," folder for ",Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/ledger-initialization"},"subsequent actions"),".")),Object(i.b)("h2",{id:"corda-components"},"Corda Components"),Object(i.b)("p",null,"Using the sequence of instructions below, you can start a Corda network and run an application Cordapp on it. You can also run an interoperation Cordapp, a relay and a ",Object(i.b)("em",{parentName:"p"},"driver")," acting on behalf of the network. You can initialize the network's vault with access control policies, foreign networks' security groups (i.e., membership providers' certificate chains), and some sample state values that can be shared during subsequent interoperation flows."),Object(i.b)("h3",{id:"corda-network"},"Corda Network"),Object(i.b)("p",null,"The Corda network code lies in the ",Object(i.b)("inlineCode",{parentName:"p"},"tests/network-setups/corda")," folder. You can launch a network consisting of one node (",Object(i.b)("inlineCode",{parentName:"p"},"PartyA"),") and one notary. This network uses ",Object(i.b)("inlineCode",{parentName:"p"},"samples/corda/corda-simple-application")," which maintains a state of type ",Object(i.b)("inlineCode",{parentName:"p"},"SimpleState"),", which is a set of key-value pairs (of strings).\nFollowing steps will build above cordapp and a corda-client as well in ",Object(i.b)("inlineCode",{parentName:"p"},"samples/corda/client"),"."),Object(i.b)("h4",{id:"running-with-interoperation-cordapp-from-github-packages"},"Running with Interoperation Cordapp from Github Packages"),Object(i.b)("p",null,"Follow the instructions below to build and launch the network:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"tests/network-setups/corda")," folder."),Object(i.b)("li",{parentName:"ul"},"Create copy of ",Object(i.b)("inlineCode",{parentName:"li"},"github.properties.template")," as ",Object(i.b)("inlineCode",{parentName:"li"},"github.properties"),"."),Object(i.b)("li",{parentName:"ul"},"Replace ",Object(i.b)("inlineCode",{parentName:"li"},"<GITHUB email>")," with your github email, and ",Object(i.b)("inlineCode",{parentName:"li"},"<GITHUB Personal Access Token>")," with the access token created ",Object(i.b)("a",{parentName:"li",href:"#package-access-token"},"above"),"."),Object(i.b)("li",{parentName:"ul"},"To spin up the Corda network with the interoperation Cordapp, run:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make start\n")))),Object(i.b)("p",null,"If the Corda node and notary start up successfully, you should something like the following:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Corda network startup screenshot",src:n(141).default})),Object(i.b)("p",null,"It's safe to press ",Object(i.b)("inlineCode",{parentName:"p"},"Ctrl-C")," here, as what you are seeing are the container logs."),Object(i.b)("h3",{id:"corda-relay"},"Corda Relay"),Object(i.b)("p",null,"Navigate to the ",Object(i.b)("inlineCode",{parentName:"p"},"core/relay")," folder and run a relay for ",Object(i.b)("inlineCode",{parentName:"p"},"Corda_Network")," in docker as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run: ",Object(i.b)("inlineCode",{parentName:"li"},"make convert-compose-method2")," to uncomment and comment some lines in ",Object(i.b)("inlineCode",{parentName:"li"},"docker-compose.yaml"),"."),Object(i.b)("li",{parentName:"ul"},"There's ",Object(i.b)("inlineCode",{parentName:"li"},".env.corda")," file in ",Object(i.b)("inlineCode",{parentName:"li"},"docker/testnet-envs")," directory, that will be used to start a relay server in docker. To deploy, run:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make start-server COMPOSE_ARG='--env-file docker/testnet-envs/.env.corda'\n")))),Object(i.b)("h3",{id:"corda-driver"},"Corda Driver"),Object(i.b)("p",null,"Run a Corda driver as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"core/drivers/corda-driver")," folder."),Object(i.b)("li",{parentName:"ul"},"There's a ",Object(i.b)("inlineCode",{parentName:"li"},".env.corda")," file in ",Object(i.b)("inlineCode",{parentName:"li"},"docker-testnet-envs")," directory, that will be used to start a corda driver in docker. To deploy, run:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make deploy COMPOSE_ARG='--env-file docker-testnet-envs/.env.corda'\n")))),Object(i.b)("p",null,"If the driver starts successfully, it should log the following message, when you run ",Object(i.b)("inlineCode",{parentName:"p"},"docker logs corda-driver-Corda_Network"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Corda driver gRPC server started. Listening on port 9099\n")),Object(i.b)("h2",{id:"tear-down-the-setup"},"Tear Down the Setup"),Object(i.b)("p",null,"Bring down the various components as follows (",Object(i.b)("em",{parentName:"p"},"Navigate to the root folder of weaver"),"):"),Object(i.b)("h3",{id:"relay"},"Relay"),Object(i.b)("p",null,"To bring down the relays (for all 3 networks), run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd core/relay\nmake stop COMPOSE_ARG='--env-file docker/testnet-envs/.env.n1'\nmake stop COMPOSE_ARG='--env-file docker/testnet-envs/.env.n2'\nmake stop COMPOSE_ARG='--env-file docker/testnet-envs/.env.corda'\ncd -\n")),Object(i.b)("h3",{id:"fabric-driver-1"},"Fabric Driver"),Object(i.b)("p",null,"To bring down the fabric drivers (for both networks), run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd core/drivers/fabric-driver\nmake stop COMPOSE_ARG='--env-file docker-testnet-envs/.env.n1'\nmake stop COMPOSE_ARG='--env-file docker-testnet-envs/.env.n2'\ncd -\n")),Object(i.b)("h3",{id:"corda-driver-1"},"Corda Driver"),Object(i.b)("p",null,"To bring down the corda driver, run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd core/drivers/corda-driver\nmake stop '--env-file docker-testnet-envs/.env.corda'\ncd -\n")),Object(i.b)("h3",{id:"corda-network-1"},"Corda Network"),Object(i.b)("p",null,"To bring down the Corda network:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd tests/network-setups/corda\nmake clean\ncd -\n")),Object(i.b)("h3",{id:"fabric-network-1"},"Fabric Network"),Object(i.b)("p",null,"To bring down both of the Fabric networks along with weaver components:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd tests/network-setups/fabric/dev\nmake clean\ncd -\n")))}b.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},141:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Corda_network-b0e1d4960223c4783250302edcaca3d4.jpg"}}]);