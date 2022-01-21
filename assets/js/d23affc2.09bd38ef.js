"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[1602],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7781:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={sidebar_position:7},c="\u8d1f\u8f7d\u5747\u8861",p={unversionedId:"component/balance",id:"component/balance",title:"\u8d1f\u8f7d\u5747\u8861",description:"\u80cc\u666f",source:"@site/docs/component/balance.md",sourceDirName:"component",slug:"/component/balance",permalink:"/zero-doc/docs/component/balance",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u964d\u8f7d",permalink:"/zero-doc/docs/component/load"},next:{title:"\u670d\u52a1\u53d1\u73b0",permalink:"/zero-doc/docs/component/discovery"}},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[],level:3},{value:"\u7b97\u6cd5\u7684\u6838\u5fc3\u601d\u60f3",id:"\u7b97\u6cd5\u7684\u6838\u5fc3\u601d\u60f3",children:[{value:"p2c",id:"p2c",children:[],level:4},{value:"EWMA",id:"ewma",children:[],level:4},{value:"EWMA \u7b97\u6cd5\u7684\u4f18\u52bf",id:"ewma-\u7b97\u6cd5\u7684\u4f18\u52bf",children:[],level:4},{value:"\u03b2\u8ba1\u7b97",id:"\u03b2\u8ba1\u7b97",children:[],level:4}],level:3},{value:"gRPC \u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u5668",id:"grpc-\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u5668",children:[],level:3},{value:"go-zero \u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u7684\u4e3b\u8981\u903b\u8f91",id:"go-zero-\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u7684\u4e3b\u8981\u903b\u8f91",children:[],level:3},{value:"\u8d1f\u8f7d\u5747\u8861\u4ee3\u7801\u5206\u6790",id:"\u8d1f\u8f7d\u5747\u8861\u4ee3\u7801\u5206\u6790",children:[{value:"\u4fdd\u5b58\u670d\u52a1\u7684\u6240\u6709\u8282\u70b9\u4fe1\u606f",id:"\u4fdd\u5b58\u670d\u52a1\u7684\u6240\u6709\u8282\u70b9\u4fe1\u606f",children:[],level:4},{value:"<code>p2cPicker</code> \u5b9e\u73b0\u4e86 <code>balancer.Picker</code> \u63a5\u53e3\uff0c<code>conns</code> \u4fdd\u5b58\u4e86\u670d\u52a1\u7684\u6240\u6709\u8282\u70b9\u4fe1\u606f",id:"p2cpicker-\u5b9e\u73b0\u4e86-balancerpicker-\u63a5\u53e3conns-\u4fdd\u5b58\u4e86\u670d\u52a1\u7684\u6240\u6709\u8282\u70b9\u4fe1\u606f",children:[],level:4},{value:"<code>gRPC</code> \u5728\u8282\u70b9\u6709\u66f4\u65b0\u7684\u65f6\u5019\u4f1a\u8c03\u7528 <code>Build</code> \u65b9\u6cd5\uff0c\u4f20\u5165\u6240\u6709\u8282\u70b9\u4fe1\u606f\uff0c\u6211\u4eec\u5728\u8fd9\u91cc\u628a\u6bcf\u4e2a\u8282\u70b9\u4fe1\u606f\u7528 subConn \u7ed3\u6784\u4fdd\u5b58\u8d77\u6765\u3002\u5e76\u5f52\u5e76\u5230\u4e00\u8d77\u7528 <code>p2cPicker</code> \u7ed3\u6784\u4fdd\u5b58\u8d77\u6765",id:"grpc-\u5728\u8282\u70b9\u6709\u66f4\u65b0\u7684\u65f6\u5019\u4f1a\u8c03\u7528-build-\u65b9\u6cd5\u4f20\u5165\u6240\u6709\u8282\u70b9\u4fe1\u606f\u6211\u4eec\u5728\u8fd9\u91cc\u628a\u6bcf\u4e2a\u8282\u70b9\u4fe1\u606f\u7528-subconn-\u7ed3\u6784\u4fdd\u5b58\u8d77\u6765\u5e76\u5f52\u5e76\u5230\u4e00\u8d77\u7528-p2cpicker-\u7ed3\u6784\u4fdd\u5b58\u8d77\u6765",children:[],level:4},{value:"\u968f\u673a\u6311\u9009\u8282\u70b9\u4fe1\u606f\uff0c\u5728\u8fd9\u91cc\u5206\u4e86\u4e09\u79cd\u60c5\u51b5:",id:"\u968f\u673a\u6311\u9009\u8282\u70b9\u4fe1\u606f\u5728\u8fd9\u91cc\u5206\u4e86\u4e09\u79cd\u60c5\u51b5",children:[],level:4},{value:"<code>load</code>\u8ba1\u7b97\u8282\u70b9\u7684\u8d1f\u8f7d\u60c5\u51b5",id:"load\u8ba1\u7b97\u8282\u70b9\u7684\u8d1f\u8f7d\u60c5\u51b5",children:[],level:4},{value:"\u8bf7\u6c42\u7ed3\u675f\uff0c\u66f4\u65b0\u8282\u70b9\u7684 <code>EWMA</code> \u7b49\u4fe1\u606f",id:"\u8bf7\u6c42\u7ed3\u675f\u66f4\u65b0\u8282\u70b9\u7684-ewma-\u7b49\u4fe1\u606f",children:[],level:4}],level:3}],d={toc:u};function s(e){var n=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8d1f\u8f7d\u5747\u8861"},"\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("h3",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.kt)("p",null,"\u5728\u9009\u62e9\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\u65f6\uff0c\u6211\u4eec\u5e0c\u671b\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5177\u5907\u5206\u533a\u548c\u673a\u623f\u8c03\u5ea6\u4eb2\u548c\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u9009\u62e9\u7684\u8282\u70b9\u5c3d\u91cf\u662f\u8d1f\u8f7d\u6700\u4f4e\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u5c3d\u53ef\u80fd\u9009\u62e9\u54cd\u5e94\u6700\u5feb\u7684\u8282\u70b9"))),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u9700\u4eba\u5de5\u5e72\u9884\u6545\u969c\u8282\u70b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53\u4e00\u4e2a\u8282\u70b9\u6709\u6545\u969c\u65f6\uff0c\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\u53ef\u4ee5\u81ea\u52a8\u9694\u79bb\u8be5\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u6545\u969c\u8282\u70b9\u6062\u590d\u65f6\uff0c\u80fd\u591f\u81ea\u52a8\u6062\u590d\u5bf9\u8be5\u8282\u70b9\u7684\u6d41\u91cf\u5206\u53d1")))),(0,l.kt)("h3",{id:"\u7b97\u6cd5\u7684\u6838\u5fc3\u601d\u60f3"},"\u7b97\u6cd5\u7684\u6838\u5fc3\u601d\u60f3"),(0,l.kt)("h4",{id:"p2c"},"p2c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"p2c")," (Pick Of 2 Choices) \u4e8c\u9009\u4e00: \u5728\u591a\u4e2a\u8282\u70b9\u4e2d\u968f\u673a\u9009\u62e9\u4e24\u4e2a\u8282\u70b9\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"go-zero")," \u4e2d\u7684\u4f1a\u968f\u673a\u7684\u9009\u62e93\u6b21\uff0c\u5982\u679c\u5176\u4e2d\u4e00\u6b21\u9009\u62e9\u7684\u8282\u70b9\u7684\u5065\u5eb7\u6761\u4ef6\u6ee1\u8db3\u8981\u6c42\uff0c\u5c31\u4e2d\u65ad\u9009\u62e9\uff0c\u91c7\u7528\u8fd9\u4e24\u4e2a\u8282\u70b9\u3002"),(0,l.kt)("h4",{id:"ewma"},"EWMA"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"EWMA")," (Exponentially Weighted Moving-Average) \u6307\u6570\u79fb\u52a8\u52a0\u6743\u5e73\u5747\u6cd5: \u662f\u6307\u5404\u6570\u503c\u7684\u52a0\u6743\u7cfb\u6570\u968f\u65f6\u95f4\u5448\u6307\u6570\u9012\u51cf\uff0c\u8d8a\u9760\u8fd1\u5f53\u524d\u65f6\u523b\u7684\u6570\u503c\u52a0\u6743\u7cfb\u6570\u5c31\u8d8a\u5927\uff0c\u4f53\u73b0\u4e86\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u5e73\u5747\u503c\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u516c\u5f0f\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ewma",src:t(446).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u89e3\u91ca\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Vt: \u4ee3\u8868\u7684\u662f\u7b2c t \u6b21\u8bf7\u6c42\u7684 EWMA\u503c"),(0,l.kt)("li",{parentName:"ul"},"Vt-1: \u4ee3\u8868\u7684\u662f\u7b2c t-1 \u6b21\u8bf7\u6c42\u7684 EWMA\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u03b2: \u662f\u4e00\u4e2a\u5e38\u91cf")))),(0,l.kt)("h4",{id:"ewma-\u7b97\u6cd5\u7684\u4f18\u52bf"},"EWMA \u7b97\u6cd5\u7684\u4f18\u52bf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u76f8\u8f83\u4e8e\u666e\u901a\u7684\u8ba1\u7b97\u5e73\u5747\u503c\u7b97\u6cd5\uff0cEWMA \u4e0d\u9700\u8981\u4fdd\u5b58\u8fc7\u53bb\u6240\u6709\u7684\u6570\u503c\uff0c\u8ba1\u7b97\u91cf\u663e\u8457\u51cf\u5c11\uff0c\u540c\u65f6\u4e5f\u51cf\u5c0f\u4e86\u5b58\u50a8\u8d44\u6e90\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f20\u7edf\u7684\u8ba1\u7b97\u5e73\u5747\u503c\u7b97\u6cd5\u5bf9\u7f51\u7edc\u8017\u65f6\u4e0d\u654f\u611f, \u800c EWMA \u53ef\u4ee5\u901a\u8fc7\u8bf7\u6c42\u9891\u7e41\u6765\u8c03\u8282 \u03b2\uff0c\u8fdb\u800c\u8fc5\u901f\u76d1\u63a7\u5230\u7f51\u7edc\u6bdb\u523a\u6216\u66f4\u591a\u7684\u4f53\u73b0\u6574\u4f53\u5e73\u5747\u503c\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53\u8bf7\u6c42\u8f83\u4e3a\u9891\u7e41\u65f6, \u8bf4\u660e\u8282\u70b9\u7f51\u7edc\u8d1f\u8f7d\u5347\u9ad8\u4e86, \u6211\u4eec\u60f3\u76d1\u6d4b\u5230\u6b64\u65f6\u8282\u70b9\u5904\u7406\u8bf7\u6c42\u7684\u8017\u65f6(\u4fa7\u9762\u53cd\u6620\u4e86\u8282\u70b9\u7684\u8d1f\u8f7d\u60c5\u51b5), \u6211\u4eec\u5c31\u76f8\u5e94\u7684\u8c03\u5c0f\u03b2\u3002\u03b2\u8d8a\u5c0f\uff0cEWMA\u503c \u5c31\u8d8a\u63a5\u8fd1\u672c\u6b21\u8017\u65f6\uff0c\u8fdb\u800c\u8fc5\u901f\u76d1\u6d4b\u5230\u7f51\u7edc\u6bdb\u523a;"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u8bf7\u6c42\u8f83\u4e3a\u4e0d\u9891\u7e41\u65f6, \u6211\u4eec\u5c31\u76f8\u5bf9\u7684\u8c03\u5927\u03b2\u503c\u3002\u8fd9\u6837\u8ba1\u7b97\u51fa\u6765\u7684 EWMA\u503c \u8d8a\u63a5\u8fd1\u5e73\u5747\u503c")))),(0,l.kt)("h4",{id:"\u03b2\u8ba1\u7b97"},"\u03b2\u8ba1\u7b97"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"go-zero")," \u91c7\u7528\u7684\u662f\u725b\u987f\u51b7\u5374\u5b9a\u5f8b\u4e2d\u7684\u8870\u51cf\u51fd\u6570\u6a21\u578b\u8ba1\u7b97 ",(0,l.kt)("inlineCode",{parentName:"p"},"EWMA")," \u7b97\u6cd5\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u03b2")," \u503c:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ewma",src:t(8701).Z})),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"\u0394t")," \u4e3a\u4e24\u6b21\u8bf7\u6c42\u7684\u95f4\u9694\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"e"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u4e3a\u5e38\u6570"),(0,l.kt)("h3",{id:"grpc-\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u5668"},"gRPC \u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u5668"),(0,l.kt)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u5b9e\u73b0 google.golang.org/grpc/balancer/base/base.go/PickerBuilder \u63a5\u53e3, \u8fd9\u4e2a\u63a5\u53e3\u662f\u6709\u670d\u52a1\u8282\u70b9\u66f4\u65b0\u7684\u65f6\u5019\u4f1a\u8c03\u7528\u63a5\u53e3\u91cc\u7684Build\u65b9\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="grpc-go/balancer/base/base.go"',title:'"grpc-go/balancer/base/base.go"'},"\ntype PickerBuilder interface {\n    // Build returns a picker that will be used by gRPC to pick a SubConn.\n    Build(info PickerBuildInfo) balancer.Picker\n}\n\n")),(0,l.kt)("p",null,"\u8fd8\u8981\u5b9e\u73b0 google.golang.org/grpc/balancer/balancer.go/Picker \u63a5\u53e3\u3002\u8fd9\u4e2a\u63a5\u53e3\u4e3b\u8981\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\uff0c\u6311\u9009\u4e00\u4e2a\u8282\u70b9\u4f9b\u8bf7\u6c42\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="grpc-go/balancer/balancer.go"',title:'"grpc-go/balancer/balancer.go"'},"\ntype Picker interface {\n  Pick(info PickInfo) (PickResult, error)\n}\n\n")),(0,l.kt)("p",null,"\u6700\u540e\u5411\u8d1f\u8f7d\u5747\u8861 map \u4e2d\u6ce8\u518c\u6211\u4eec\u5b9e\u73b0\u7684\u8d1f\u8f7d\u5747\u8861\u5668"),(0,l.kt)("h3",{id:"go-zero-\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u7684\u4e3b\u8981\u903b\u8f91"},"go-zero \u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u7684\u4e3b\u8981\u903b\u8f91"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u6bcf\u6b21\u8282\u70b9\u66f4\u65b0\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"gRPC")," \u4f1a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Build")," \u65b9\u6cd5\uff0c\u6b64\u65f6\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Build")," \u91cc\u5b9e\u73b0\u4fdd\u5b58\u6240\u6709\u7684\u8282\u70b9\u4fe1\u606f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"gRPC")," \u5728\u83b7\u53d6\u8282\u70b9\u5904\u7406\u8bf7\u6c42\u65f6\uff0c\u4f1a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Pick")," \u65b9\u6cd5\u4ee5\u83b7\u53d6\u8282\u70b9\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"go-zero")," \u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Pick")," \u65b9\u6cd5\u91cc\u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"p2c")," \u7b97\u6cd5\uff0c\u6311\u9009\u8282\u70b9\uff0c\u5e76\u901a\u8fc7\u8282\u70b9\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"EWMA")," \u503c \u8ba1\u7b97\u8d1f\u8f7d\u60c5\u51b5\uff0c\u8fd4\u56de\u8d1f\u8f7d\u4f4e\u7684\u8282\u70b9\u4f9b gRPC \u4f7f\u7528\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u8bf7\u6c42\u7ed3\u675f\u7684\u65f6\u5019 ",(0,l.kt)("inlineCode",{parentName:"p"},"gRPC")," \u4f1a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"PickResult.Done")," \u65b9\u6cd5\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"go-zero")," \u5728\u8fd9\u4e2a\u65b9\u6cd5\u91cc\u5b9e\u73b0\u4e86\u672c\u6b21\u8bf7\u6c42\u8017\u65f6\u7b49\u4fe1\u606f\u7684\u5b58\u50a8\uff0c\u5e76\u8ba1\u7b97\u51fa\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"EWMA")," \u503c \u4fdd\u5b58\u4e86\u8d77\u6765\uff0c\u4f9b\u4e0b\u6b21\u8bf7\u6c42\u65f6\u8ba1\u7b97\u8d1f\u8f7d\u7b49\u60c5\u51b5\u7684\u4f7f\u7528\u3002"))),(0,l.kt)("h3",{id:"\u8d1f\u8f7d\u5747\u8861\u4ee3\u7801\u5206\u6790"},"\u8d1f\u8f7d\u5747\u8861\u4ee3\u7801\u5206\u6790"),(0,l.kt)("h4",{id:"\u4fdd\u5b58\u670d\u52a1\u7684\u6240\u6709\u8282\u70b9\u4fe1\u606f"},"\u4fdd\u5b58\u670d\u52a1\u7684\u6240\u6709\u8282\u70b9\u4fe1\u606f"),(0,l.kt)("p",null,"\u6211\u4eec\u9700\u8981\u4fdd\u5b58\u8282\u70b9\u5904\u7406\u672c\u6b21\u8bf7\u6c42\u7684\u8017\u65f6\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"EWMA")," \u7b49\u4fe1\u606f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"go-zero")," \u7ed9\u6bcf\u4e2a\u8282\u70b9\u8bbe\u8ba1\u4e86\u5982\u4e0b\u7ed3\u6784\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="go-zero/zrpc/internal/balancer/p2c/p2c.go"',title:'"go-zero/zrpc/internal/balancer/p2c/p2c.go"'},"\ntype subConn struct {\n    addr     resolver.Address\n    conn     balancer.SubConn\n    lag      uint64 // \u7528\u6765\u4fdd\u5b58 ewma \u503c\n    inflight int64  // \u7528\u5728\u4fdd\u5b58\u5f53\u524d\u8282\u70b9\u6b63\u5728\u5904\u7406\u7684\u8bf7\u6c42\u603b\u6570\n    success  uint64 // \u7528\u6765\u6807\u8bc6\u4e00\u6bb5\u65f6\u95f4\u5185\u6b64\u8fde\u63a5\u7684\u5065\u5eb7\u72b6\u6001\n    requests int64  // \u7528\u6765\u4fdd\u5b58\u8bf7\u6c42\u603b\u6570\n    last     int64  // \u7528\u6765\u4fdd\u5b58\u4e0a\u4e00\u6b21\u8bf7\u6c42\u8017\u65f6, \u7528\u4e8e\u8ba1\u7b97 ewma \u503c\n    pick     int64  // \u4fdd\u5b58\u4e0a\u4e00\u6b21\u88ab\u9009\u4e2d\u7684\u65f6\u95f4\u70b9\n}\n\n")),(0,l.kt)("h4",{id:"p2cpicker-\u5b9e\u73b0\u4e86-balancerpicker-\u63a5\u53e3conns-\u4fdd\u5b58\u4e86\u670d\u52a1\u7684\u6240\u6709\u8282\u70b9\u4fe1\u606f"},(0,l.kt)("inlineCode",{parentName:"h4"},"p2cPicker")," \u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"h4"},"balancer.Picker")," \u63a5\u53e3\uff0c",(0,l.kt)("inlineCode",{parentName:"h4"},"conns")," \u4fdd\u5b58\u4e86\u670d\u52a1\u7684\u6240\u6709\u8282\u70b9\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="go-zero/zrpc/internal/balancer/p2c/p2c.go"',title:'"go-zero/zrpc/internal/balancer/p2c/p2c.go"'},"\ntype p2cPicker struct {\n  conns []*subConn  // \u4fdd\u5b58\u6240\u6709\u8282\u70b9\u7684\u4fe1\u606f \n  r     *rand.Rand\n  stamp *syncx.AtomicDuration\n  lock  sync.Mutex\n}\n\n")),(0,l.kt)("h4",{id:"grpc-\u5728\u8282\u70b9\u6709\u66f4\u65b0\u7684\u65f6\u5019\u4f1a\u8c03\u7528-build-\u65b9\u6cd5\u4f20\u5165\u6240\u6709\u8282\u70b9\u4fe1\u606f\u6211\u4eec\u5728\u8fd9\u91cc\u628a\u6bcf\u4e2a\u8282\u70b9\u4fe1\u606f\u7528-subconn-\u7ed3\u6784\u4fdd\u5b58\u8d77\u6765\u5e76\u5f52\u5e76\u5230\u4e00\u8d77\u7528-p2cpicker-\u7ed3\u6784\u4fdd\u5b58\u8d77\u6765"},(0,l.kt)("inlineCode",{parentName:"h4"},"gRPC")," \u5728\u8282\u70b9\u6709\u66f4\u65b0\u7684\u65f6\u5019\u4f1a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"h4"},"Build")," \u65b9\u6cd5\uff0c\u4f20\u5165\u6240\u6709\u8282\u70b9\u4fe1\u606f\uff0c\u6211\u4eec\u5728\u8fd9\u91cc\u628a\u6bcf\u4e2a\u8282\u70b9\u4fe1\u606f\u7528 subConn \u7ed3\u6784\u4fdd\u5b58\u8d77\u6765\u3002\u5e76\u5f52\u5e76\u5230\u4e00\u8d77\u7528 ",(0,l.kt)("inlineCode",{parentName:"h4"},"p2cPicker")," \u7ed3\u6784\u4fdd\u5b58\u8d77\u6765"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="go-zero/zrpc/internal/balancer/p2c/p2c.go:42"',title:'"go-zero/zrpc/internal/balancer/p2c/p2c.go:42"'},"\nfunc (b *p2cPickerBuilder) Build(info base.PickerBuildInfo) balancer.Picker {\n  ......\n  var conns []*subConn\n  for conn, connInfo := range readySCs {\n    conns = append(conns, &subConn{\n      addr:    connInfo.Address,\n      conn:    conn,\n      success: initSuccess,\n    })\n  }\n  return &p2cPicker{\n    conns: conns,\n    r:     rand.New(rand.NewSource(time.Now().UnixNano())),\n    stamp: syncx.NewAtomicDuration(),\n  }\n}\n\n")),(0,l.kt)("h4",{id:"\u968f\u673a\u6311\u9009\u8282\u70b9\u4fe1\u606f\u5728\u8fd9\u91cc\u5206\u4e86\u4e09\u79cd\u60c5\u51b5"},"\u968f\u673a\u6311\u9009\u8282\u70b9\u4fe1\u606f\uff0c\u5728\u8fd9\u91cc\u5206\u4e86\u4e09\u79cd\u60c5\u51b5:"),(0,l.kt)("p",null,"\u4e3b\u8981\u5b9e\u73b0\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="go-zero/zrpc/internal/balancer/p2c/p2c.go:80"',title:'"go-zero/zrpc/internal/balancer/p2c/p2c.go:80"'},"\nswitch len(p.conns) {\n  case 0: // \u6ca1\u6709\u8282\u70b9\uff0c\u8fd4\u56de\u9519\u8bef\n    return emptyPickResult, balancer.ErrNoSubConnAvailable\n  case 1: // \u6709\u4e00\u4e2a\u8282\u70b9\uff0c\u76f4\u63a5\u8fd4\u56de\u8fd9\u4e2a\u8282\u70b9\n    chosen = p.choose(p.conns[0], nil)\n  case 2: // \u6709\u4e24\u4e2a\u8282\u70b9\uff0c\u8ba1\u7b97\u8d1f\u8f7d\uff0c\u8fd4\u56de\u8d1f\u8f7d\u4f4e\u7684\u8282\u70b9\n    chosen = p.choose(p.conns[0], p.conns[1])\n  default: // \u6709\u591a\u4e2a\u8282\u70b9\uff0cp2c \u6311\u9009\u4e24\u4e2a\u8282\u70b9\uff0c\u6bd4\u8f83\u8fd9\u4e24\u4e2a\u8282\u70b9\u7684\u8d1f\u8f7d\uff0c\u8fd4\u56de\u8d1f\u8f7d\u4f4e\u7684\u8282\u70b9\n    var node1, node2 *subConn\n    // 3\u6b21\u968f\u673a\u9009\u62e9\u4e24\u4e2a\u8282\u70b9\n    for i := 0; i < pickTimes; i++ {\n      a := p.r.Intn(len(p.conns))\n      b := p.r.Intn(len(p.conns) - 1)\n      if b >= a {\n        b++\n      }\n      node1 = p.conns[a]\n      node2 = p.conns[b]\n      // \u5982\u679c\u8fd9\u6b21\u9009\u62e9\u7684\u8282\u70b9\u8fbe\u5230\u4e86\u5065\u5eb7\u8981\u6c42, \u5c31\u4e2d\u65ad\u9009\u62e9\n      if node1.healthy() && node2.healthy() {\n        break\n      }\n    }\n    // \u6bd4\u8f83\u4e24\u4e2a\u8282\u70b9\u7684\u8d1f\u8f7d\u60c5\u51b5\uff0c\u9009\u62e9\u8d1f\u8f7d\u4f4e\u7684\n    chosen = p.choose(node1, node2)\n  }\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ea\u6709\u4e00\u4e2a\u670d\u52a1\u8282\u70b9\uff0c\u6b64\u65f6\u76f4\u63a5\u8fd4\u56de\u4f9b gRPC \u4f7f\u7528\u5373\u53ef")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6709\u4e24\u4e2a\u670d\u52a1\u8282\u70b9\uff0c\u901a\u8fc7 EWMA\u503c \u8ba1\u7b97\u8d1f\u8f7d\uff0c\u5e76\u8fd4\u56de\u8d1f\u8f7d\u4f4e\u7684\u8282\u70b9\u8fd4\u56de\u4f9b gRPC \u4f7f\u7528")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6709\u591a\u4e2a\u670d\u52a1\u8282\u70b9\uff0c\u6b64\u65f6\u901a\u8fc7 p2c \u7b97\u6cd5\u9009\u51fa\u4e24\u4e2a\u8282\u70b9\uff0c\u6bd4\u8f83\u8d1f\u8f7d\u60c5\u51b5\uff0c\u8fd4\u56de\u8d1f\u8f7d\u4f4e\u7684\u8282\u70b9\u4f9b gRPC \u4f7f\u7528"))),(0,l.kt)("h4",{id:"load\u8ba1\u7b97\u8282\u70b9\u7684\u8d1f\u8f7d\u60c5\u51b5"},(0,l.kt)("inlineCode",{parentName:"h4"},"load"),"\u8ba1\u7b97\u8282\u70b9\u7684\u8d1f\u8f7d\u60c5\u51b5"),(0,l.kt)("p",null,"\u4e0a\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"choose")," \u65b9\u6cd5\u4f1a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"load")," \u65b9\u6cd5\u6765\u8ba1\u7b97\u8282\u70b9\u8d1f\u8f7d\u3002"),(0,l.kt)("p",null,"\u8ba1\u7b97\u8d1f\u8f7d\u7684\u516c\u5f0f\u662f: ",(0,l.kt)("inlineCode",{parentName:"p"},"load = ewma * inflight")),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\u7b80\u5355\u89e3\u91ca\u4e0b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"ewma")," \u76f8\u5f53\u4e8e\u5e73\u5747\u8bf7\u6c42\u8017\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"inflight")," \u662f\u5f53\u524d\u8282\u70b9\u6b63\u5728\u5904\u7406\u8bf7\u6c42\u7684\u6570\u91cf\uff0c\u76f8\u4e58\u5927\u81f4\u8ba1\u7b97\u51fa\u4e86\u5f53\u524d\u8282\u70b9\u7684\u7f51\u7edc\u8d1f\u8f7d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nfunc (c *subConn) load() int64 {\n  // \u901a\u8fc7 EWMA \u8ba1\u7b97\u8282\u70b9\u7684\u8d1f\u8f7d\u60c5\u51b5\uff1b \u52a0 1 \u662f\u4e3a\u4e86\u907f\u514d\u4e3a 0 \u7684\u60c5\u51b5\n  lag := int64(math.Sqrt(float64(atomic.LoadUint64(&c.lag) + 1)))\n  load := lag * (atomic.LoadInt64(&c.inflight) + 1)\n  if load == 0 {\n    return penalty\n  }\n  return load\n}\n\n")),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u7ed3\u675f\u66f4\u65b0\u8282\u70b9\u7684-ewma-\u7b49\u4fe1\u606f"},"\u8bf7\u6c42\u7ed3\u675f\uff0c\u66f4\u65b0\u8282\u70b9\u7684 ",(0,l.kt)("inlineCode",{parentName:"h4"},"EWMA")," \u7b49\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"\nfunc (p *p2cPicker) buildDoneFunc(c *subConn) func(info balancer.DoneInfo) {\n  start := int64(timex.Now())\n  return func(info balancer.DoneInfo) {\n    // \u6b63\u5728\u5904\u7406\u7684\u8bf7\u6c42\u6570\u51cf 1\n    atomic.AddInt64(&c.inflight, -1)\n    now := timex.Now()\n    // \u4fdd\u5b58\u672c\u6b21\u8bf7\u6c42\u7ed3\u675f\u65f6\u7684\u65f6\u95f4\u70b9\uff0c\u5e76\u53d6\u51fa\u4e0a\u6b21\u8bf7\u6c42\u65f6\u7684\u65f6\u95f4\u70b9\n    last := atomic.SwapInt64(&c.last, int64(now))\n    td := int64(now) - last\n    if td < 0 {\n      td = 0\n    }\n    // \u7528\u725b\u987f\u51b7\u5374\u5b9a\u5f8b\u4e2d\u7684\u8870\u51cf\u51fd\u6570\u6a21\u578b\u8ba1\u7b97EWMA\u7b97\u6cd5\u4e2d\u7684\u03b2\u503c\n    w := math.Exp(float64(-td) / float64(decayTime))\n    // \u4fdd\u5b58\u672c\u6b21\u8bf7\u6c42\u7684\u8017\u65f6\n    lag := int64(now) - start\n    if lag < 0 {\n      lag = 0\n    }\n    olag := atomic.LoadUint64(&c.lag)\n    if olag == 0 {\n      w = 0\n    }\n    // \u8ba1\u7b97 EWMA \u503c\n    atomic.StoreUint64(&c.lag, uint64(float64(olag)*w+float64(lag)*(1-w)))\n    success := initSuccess\n    if info.Err != nil && !codes.Acceptable(info.Err) {\n      success = 0\n    }\n    osucc := atomic.LoadUint64(&c.success)\n    atomic.StoreUint64(&c.success, uint64(float64(osucc)*w+float64(success)*(1-w)))\n\n    stamp := p.stamp.Load()\n    if now-stamp >= logInterval {\n      if p.stamp.CompareAndSwap(stamp, now) {\n        p.logStats()\n      }\n    }\n  }\n}\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u628a\u8282\u70b9\u6b63\u5728\u5904\u7406\u8bf7\u6c42\u7684\u603b\u6570\u51cf1"),(0,l.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u5904\u7406\u8bf7\u6c42\u7ed3\u675f\u7684\u65f6\u95f4\u70b9\uff0c\u7528\u4e8e\u8ba1\u7b97\u8ddd\u79bb\u4e0a\u6b21\u8282\u70b9\u5904\u7406\u8bf7\u6c42\u7684\u5dee\u503c\uff0c\u5e76\u7b97\u51fa EWMA \u4e2d\u7684 \u03b2\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u672c\u6b21\u8bf7\u6c42\u8017\u65f6\uff0c\u5e76\u8ba1\u7b97\u51fa EWMA\u503c \u4fdd\u5b58\u5230\u8282\u70b9\u7684 lag \u5c5e\u6027\u91cc"),(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u8282\u70b9\u7684\u5065\u5eb7\u72b6\u6001\u4fdd\u5b58\u5230\u8282\u70b9\u7684 success \u5c5e\u6027\u4e2d")))}s.isMDXComponent=!0},446:function(e,n,t){n.Z=t.p+"assets/images/ewma-e7d58d4396f07ed4b07dae5f88b6912f.png"},8701:function(e,n,t){n.Z=t.p+"assets/images/\u03b2-c79d184dbc37ca4b6e6c69132a3fcf5f.png"}}]);