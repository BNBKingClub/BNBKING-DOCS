(()=>{"use strict";var e,a,f,c,t,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=r,b.c=d,e=[],b.O=(a,f,c,t)=>{if(!f){var r=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],t=e[i][2];for(var d=!0,o=0;o<f.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(d=!1,t<r&&(r=t));if(d){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[f,c,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,f({}),f([]),f(f)];for(var d=2&c&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({274:"9b9b0eff",535:"f6368fd9",748:"af2fff59",769:"32dcc443",867:"33fc5bb8",966:"28744bc1",1235:"a7456010",1368:"acff4289",1724:"dff1c289",1903:"acecf23e",1953:"1e4232ab",1972:"73664a40",1974:"5c868d36",2264:"5c6e777c",2577:"dcd325f3",2711:"9e4087bc",2748:"822bd8ab",3098:"533a09ca",3249:"ccc49370",3377:"264891b6",3590:"ff128a0a",3637:"f4f34a3a",3680:"9c809c32",3694:"8717b14a",3976:"0e384e19",4102:"98f1bded",4134:"393be207",4191:"d54f0344",4212:"621db11d",4457:"f35afe3c",4464:"3552fca8",4564:"f15ea25d",4736:"e44a2883",4813:"6875c492",5537:"1f2f993d",5557:"d9f32620",5742:"aba21aa0",6061:"1f391b9e",6188:"adf328a4",6293:"b2df1dc6",6889:"77a6689d",7098:"a7bd4aaa",7472:"814f3328",7514:"8dd95cbb",7643:"a6aa9e1f",8209:"01a85c17",8352:"c5740b75",8401:"17896441",8609:"925b3f96",8737:"7661071f",8857:"e3130679",8863:"f55d3e7a",9048:"a94703ab",9227:"90766bac",9262:"18c41134",9325:"59362658",9328:"e273c56f",9647:"5e95c892",9680:"e2051710",9858:"36994c47"}[e]||e)+"."+{274:"9a6340c0",535:"ed28d037",748:"ba6c9732",769:"b147b0b7",867:"6f452373",966:"33b164a2",1235:"83df9366",1368:"c0f0a296",1724:"825e1796",1903:"4124714c",1953:"1c9c9de8",1972:"86c0e4d2",1974:"b59af4ac",2264:"2bd144fd",2577:"99c95b4a",2711:"ab250681",2748:"3ccb2591",3042:"95e3af07",3098:"65b2bbc7",3249:"232dbdd2",3377:"940de0f7",3590:"9f989408",3637:"1bd76be4",3680:"004b9122",3694:"c65c4c85",3976:"fc7c296b",4102:"772a6f44",4134:"f1f8467f",4191:"f0682049",4212:"5678bc86",4457:"186dba78",4464:"74350d6e",4564:"a63a8a33",4622:"9c15a96e",4736:"6728aa91",4813:"222ed4eb",5537:"92808f46",5557:"4c1be806",5742:"3b8e8465",6061:"38d6bd6a",6188:"d874b55a",6293:"340a2f03",6889:"70a43d76",7098:"faf8cf06",7472:"447822ab",7514:"d4ea1a12",7643:"2ef6bfd4",8209:"a89b864e",8352:"980119b0",8401:"51541aad",8609:"db4841e4",8737:"1abf639a",8857:"0716533e",8863:"f840ab55",9048:"6f4b5690",9227:"ffe0e65f",9262:"e2f4ba96",9325:"8589e445",9328:"12e78d9e",9392:"5e7a2c4f",9647:"96f8b740",9680:"a38be561",9858:"07e6f881"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},t="my-docs:",b.l=(e,a,f,r)=>{if(c[e])c[e].push(a);else{var d,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+f){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",t+f),d.src=e),c[e]=[a];var l=(a,f)=>{d.onerror=d.onload=null,clearTimeout(s);var t=c[e];if(delete c[e],d.parentNode&&d.parentNode.removeChild(d),t&&t.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/BNBKING-DOCS/en/",b.gca=function(e){return e={17896441:"8401",59362658:"9325","9b9b0eff":"274",f6368fd9:"535",af2fff59:"748","32dcc443":"769","33fc5bb8":"867","28744bc1":"966",a7456010:"1235",acff4289:"1368",dff1c289:"1724",acecf23e:"1903","1e4232ab":"1953","73664a40":"1972","5c868d36":"1974","5c6e777c":"2264",dcd325f3:"2577","9e4087bc":"2711","822bd8ab":"2748","533a09ca":"3098",ccc49370:"3249","264891b6":"3377",ff128a0a:"3590",f4f34a3a:"3637","9c809c32":"3680","8717b14a":"3694","0e384e19":"3976","98f1bded":"4102","393be207":"4134",d54f0344:"4191","621db11d":"4212",f35afe3c:"4457","3552fca8":"4464",f15ea25d:"4564",e44a2883:"4736","6875c492":"4813","1f2f993d":"5537",d9f32620:"5557",aba21aa0:"5742","1f391b9e":"6061",adf328a4:"6188",b2df1dc6:"6293","77a6689d":"6889",a7bd4aaa:"7098","814f3328":"7472","8dd95cbb":"7514",a6aa9e1f:"7643","01a85c17":"8209",c5740b75:"8352","925b3f96":"8609","7661071f":"8737",e3130679:"8857",f55d3e7a:"8863",a94703ab:"9048","90766bac":"9227","18c41134":"9262",e273c56f:"9328","5e95c892":"9647",e2051710:"9680","36994c47":"9858"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,f)=>{var c=b.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var t=new Promise(((f,t)=>c=e[a]=[f,t]));f.push(c[2]=t);var r=b.p+b.u(a),d=new Error;b.l(r,(f=>{if(b.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var t=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,c[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var c,t,r=f[0],d=f[1],o=f[2],n=0;if(r.some((a=>0!==e[a]))){for(c in d)b.o(d,c)&&(b.m[c]=d[c]);if(o)var i=o(b)}for(a&&a(f);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},f=self.webpackChunkmy_docs=self.webpackChunkmy_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();