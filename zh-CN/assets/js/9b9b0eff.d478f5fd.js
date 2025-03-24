"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[274],{732:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"zh-CN/rpc/tokenpocket/connecting-to-rpc-url","title":"\u79fb\u52a8\u8bbe\u5907 \u6dfb\u52a0RPC URL","description":"\u6253\u5f00TokenPocket\u5e94\u7528","source":"@site/docs/zh-CN/rpc/tokenpocket/connecting-to-rpc-url.md","sourceDirName":"zh-CN/rpc/tokenpocket","slug":"/zh-CN/rpc/tokenpocket/connecting-to-rpc-url","permalink":"/BNBKING-DOCS/zh-CN/zh-CN/rpc/tokenpocket/connecting-to-rpc-url","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"connecting-to-rpc-url","title":"\u79fb\u52a8\u8bbe\u5907 \u6dfb\u52a0RPC URL","sidebar_label":"\u79fb\u52a8\u8bbe\u5907 \u6dfb\u52a0RPC URL"}}');var c=s(4848),i=s(8453);const r={id:"connecting-to-rpc-url",title:"\u79fb\u52a8\u8bbe\u5907 \u6dfb\u52a0RPC URL",sidebar_label:"\u79fb\u52a8\u8bbe\u5907 \u6dfb\u52a0RPC URL"},l="\u79fb\u52a8\u8bbe\u5907 \u6dfb\u52a0RPC URL",o={},d=[{value:"\u6253\u5f00TokenPocket\u5e94\u7528",id:"\u6253\u5f00tokenpocket\u5e94\u7528",level:2},{value:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u7f51\u7edc",id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u7f51\u7edc",level:2},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e\u4fe1\u606f\uff1a",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e\u4fe1\u606f",level:2},{value:"\u5207\u6362\u5230\u81ea\u5b9a\u4e49\u7f51\u7edc",id:"\u5207\u6362\u5230\u81ea\u5b9a\u4e49\u7f51\u7edc",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u79fb\u52a8\u8bbe\u5907-\u6dfb\u52a0rpc-url",children:"\u79fb\u52a8\u8bbe\u5907 \u6dfb\u52a0RPC URL"})}),"\n",(0,c.jsx)(n.h2,{id:"\u6253\u5f00tokenpocket\u5e94\u7528",children:"\u6253\u5f00TokenPocket\u5e94\u7528"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5728\u4e3b\u754c\u9762\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u94b1\u5305\u56fe\u6807"}),"\n",(0,c.jsx)(n.li,{children:"\u8fdb\u5165\u7f51\u7edc\u9009\u62e9\u754c\u9762\u540e\uff0c\u5f80\u4e0b\u62c9\u81f3\u5e95\u90e8"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"MetaMask Main Interface",src:s(7998).A+"",width:"1000",height:"1003"})}),"\n",(0,c.jsx)(n.h2,{id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u7f51\u7edc",children:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u7f51\u7edc"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5728\u9009\u62e9\u7f51\u7edc\u9875\u9762\u6700\u5e95\u90e8\uff0c\u70b9\u51fb ",(0,c.jsx)(n.strong,{children:"\u201c\u6dfb\u52a0\u81ea\u5b9a\u4e49\u7f51\u7edc\u201d"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u8fdb\u5165 ",(0,c.jsx)(n.strong,{children:'"Custom Network"'})," \u754c\u9762\u540e\uff0c\u6839\u636e\u8981\u6c42\u586b\u5199\u5bf9\u5e94\u914d\u7f6e\u5185\u5bb9"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e\u4fe1\u606f",children:"\u81ea\u5b9a\u4e49\u914d\u7f6e\u4fe1\u606f\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u7f51\u7edc\u540d\u79f0: \u6839\u636e\u81ea\u5df1\u559c\u597d\u586b\u5199\u6216\u7cfb\u7edf\u81ea\u52a8\u751f\u6210\u3002"}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u8282\u70b9\u94fe\u63a5 RPC"}),":  ",(0,c.jsx)(n.code,{children:"https://bnb-king.com:8545"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u94feID"}),": ",(0,c.jsx)(n.code,{children:"56"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u9ed8\u8ba4\u4ee3\u5e01\u7b26\u53f7"}),": ",(0,c.jsx)(n.code,{children:"BNB"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u533a\u5757\u6d4f\u89c8\u5668"}),":"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"MetaMask Main Interface",src:s(746).A+"",width:"1000",height:"1003"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5207\u6362\u5230\u81ea\u5b9a\u4e49\u7f51\u7edc",children:"\u5207\u6362\u5230\u81ea\u5b9a\u4e49\u7f51\u7edc"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49\u7f51\u7edc\u6dfb\u52a0\u5b8c\u6210\u540e\uff0c\u5728\u7f51\u7edc\u9009\u62e9\u754c\u9762\u6700\u4e0b\u65b9\u70b9\u51fb\u8be5\u7f51\u7edc\u8fdb\u884c\u5207\u6362"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5728\u5f39\u51fa\u83dc\u5355\u4e2d\u9009\u62e9 ",(0,c.jsx)(n.strong,{children:"\u201c\u65b0\u5efa\u94b1\u5305\u201d"})," \u6216 ",(0,c.jsx)(n.strong,{children:"\u201c\u5bfc\u5165\u94b1\u5305\u201d"}),"\n",(0,c.jsx)(n.img,{alt:"MetaMask Main Interface",src:s(7758).A+"",width:"1000",height:"1003"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6839\u636e\u5185\u5bb9\u9009\u62e9\u9002\u5408\u4f60\u7684\u9009\u9879\u540e\u5373\u53ef\u4f7f\u7528\u8be5\u7f51\u7edc"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"MetaMask Main Interface",src:s(5314).A+"",width:"1000",height:"1003"})}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7\u8fd9\u4e9b\u6b65\u9aa4\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728TokenPocket\u4e2d\u6210\u529f\u6dfb\u52a0\u81ea\u5b9a\u4e49\u7684RPC URL\uff0c\u5e76\u4e0e\u65b0\u7f51\u7edc\u8fdb\u884c\u4ea4\u4e92\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},746:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/mobile-custom-networks-CN-b0bdc9778ebebbfe314e85c3ca7058b1.webp"},5314:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/mobile-finish-CN-6b51ac062579b6f21d39ac0e7b7d20f7.webp"},7758:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/mobile-switch-network-CN-7f4a24ba97482541c1cb6e1f0f5170b6.webp"},7998:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/mobile-main-interface-CN-e7f01b64e7ed422ac170804d653e747a.webp"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(6540);const c={},i=t.createContext(c);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);