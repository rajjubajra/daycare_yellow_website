(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4088:function(e,i,l){Promise.resolve().then(l.bind(l,4619)),Promise.resolve().then(l.bind(l,1660)),Promise.resolve().then(l.bind(l,5747))},1552:function(e,i,l){"use strict";var d=l(7437);l(2265),i.Z=function(){return(0,d.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:(0,d.jsx)("div",{className:"text-3xl",children:"Loading..."})})}},4880:function(e,i,l){"use strict";var d=l(7437);i.Z=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"80px",height:"4px",viewBox:"0 0 80 4",children:(0,d.jsx)("path",{fill:"#EC8E35",d:"M1.8,2.2c0,0,0.7-0.2,4.9-0.3c1.4,0,9.7-0.4,13.1-0.6c3.3-0.2,13.6-0.8,19.4-0.8s22.9-0.2,23.9-0.1  c1,0,7,0,9.6,0s4.7,0,4.7,0s0.7,0.3-0.2,0.5C76.8,0.9,70,1.8,63.6,2.1c-7.4,0.5-8.4,0.6-24.4,1.2C35.3,3.5,27.6,3.5,18,3.6  C8.7,3.7,5.6,3.5,4.1,3.4c-1.1,0-1.4-0.2-1.7-0.3S1.8,2.2,1.8,2.2z"})})})}},1313:function(e,i,l){"use strict";l.d(i,{Z:function(){return s}});var d=l(7437),n=l(6691),t=l.n(n),a=l(4827);function s(e){var i,l,n,s,o,r,u,c,v,m,h,f,x,_,g;let{data:j,id:p}=e,b=null==j?void 0:null===(i=j.included)||void 0===i?void 0:i.findIndex(e=>e.id===p),N=null==j?void 0:null===(l=j.included[b])||void 0===l?void 0:l.relationships.field_media_image.data.id,w=null==j?void 0:null===(n=j.included)||void 0===n?void 0:n.findIndex(e=>e.id===N),{url:y}=null==j?void 0:null===(o=j.included[w])||void 0===o?void 0:null===(s=o.attributes)||void 0===s?void 0:s.uri;return null==j||null===(m=j.included[w])||void 0===m||null===(v=m.relationships)||void 0===v||null===(c=v.field_media_image)||void 0===c||null===(u=c.data)||void 0===u||null===(r=u.meta)||void 0===r||r.width,null==j||null===(g=j.included[w])||void 0===g||null===(_=g.relationships)||void 0===_||null===(x=_.field_media_image)||void 0===x||null===(f=x.data)||void 0===f||null===(h=f.meta)||void 0===h||h.height,(0,d.jsx)(t(),{className:"w-full h-auto rounded-3xl",src:a.g.URL+y,width:500,height:500,alt:"test"})}},1660:function(e,i,l){"use strict";l.r(i),l.d(i,{default:function(){return v}});var d=l(7437),n=l(2333),t=l(4827);l(2265);var a=function(e){let{text:i}=e;return(0,d.jsx)("div",{className:"my-5",children:(0,d.jsx)("div",{className:"md:text-4xl text-2xl tracking-wide leading-loose",dangerouslySetInnerHTML:{__html:i}})})},s=l(1552),o=l(1313),r=l(1396),u=l.n(r);let c=function(){for(var e=arguments.length,i=Array(e),l=0;l<e;l++)i[l]=arguments[l];return fetch(...i).then(e=>e.json())};var v=function(){var e;let i="".concat(t.g.URL,"/jsonapi/node/daycare_call_to_action?include=field_media_image,field_media_image.field_media_image"),{data:l,error:r,isLoading:v}=(0,n.ZP)(i,c);return r?(0,d.jsx)("div",{children:"failed to load"}):v?(0,d.jsx)(s.Z,{}):(0,d.jsx)("div",{children:l&&(null==l?void 0:null===(e=l.data)||void 0===e?void 0:e.length)&&l.data.map(e=>{var i,n,t;return(0,d.jsx)(u(),{href:e.attributes.field_page_link.uri,className:"flex h-screen w-full mb-20 justify-center items-center",children:(0,d.jsxs)("div",{className:"relative z-30 md:w-3/4 py-20 md:px-10 text-center",children:[(0,d.jsx)(a,{text:e.attributes.body.value}),(0,d.jsx)("div",{className:"w-52 p-8 m-auto",children:(0,d.jsx)(o.Z,{data:l,id:null===(t=e.relationships)||void 0===t?void 0:null===(n=t.field_media_image)||void 0===n?void 0:null===(i=n.data)||void 0===i?void 0:i.id})})]})},e.id)})})}},4827:function(e,i,l){"use strict";l.d(i,{g:function(){return d}});let d={URL:"https://cms.yellow-website.com"}},4619:function(e,i,l){"use strict";l.r(i),l.d(i,{default:function(){return g}});var d=l(7437),n=l(2333),t=l(4827),a=l(6691),s=l.n(a);function o(e){var i,l,n,a,o,r,u,c,v,m,h,f,x,_,g;let{data:j,id:p}=e,b=null==j?void 0:null===(i=j.included)||void 0===i?void 0:i.findIndex(e=>e.id===p),N=null==j?void 0:null===(l=j.included[b])||void 0===l?void 0:l.relationships.field_media_image.data.id,w=null==j?void 0:null===(n=j.included)||void 0===n?void 0:n.findIndex(e=>e.id===N);console.log("indexFile",w);let{url:y}=null==j?void 0:null===(o=j.included[w])||void 0===o?void 0:null===(a=o.attributes)||void 0===a?void 0:a.uri;return null==j||null===(m=j.included[w])||void 0===m||null===(v=m.relationships)||void 0===v||null===(c=v.field_media_image)||void 0===c||null===(u=c.data)||void 0===u||null===(r=u.meta)||void 0===r||r.width,null==j||null===(g=j.included[w])||void 0===g||null===(_=g.relationships)||void 0===_||null===(x=_.field_media_image)||void 0===x||null===(f=x.data)||void 0===f||null===(h=f.meta)||void 0===h||h.height,(0,d.jsx)(s(),{className:"w-full h-auto",src:t.g.URL+y,width:500,height:500,alt:"test"})}var r=l(1552),u=function(e){var i,l,n,a,s,o,r,u,c,v,m,h,f,x,_;let{data:g,id:j,children:p}=e,b=null==g?void 0:null===(i=g.included)||void 0===i?void 0:i.findIndex(e=>e.id===j),N=null==g?void 0:null===(l=g.included[b])||void 0===l?void 0:l.relationships.field_media_image.data.id,w=null==g?void 0:null===(n=g.included)||void 0===n?void 0:n.findIndex(e=>e.id===N),{url:y}=null==g?void 0:null===(s=g.included[w])||void 0===s?void 0:null===(a=s.attributes)||void 0===a?void 0:a.uri;return null==g||null===(v=g.included[w])||void 0===v||null===(c=v.relationships)||void 0===c||null===(u=c.field_media_image)||void 0===u||null===(r=u.data)||void 0===r||null===(o=r.meta)||void 0===o||o.width,null==g||null===(_=g.included[w])||void 0===_||null===(x=_.relationships)||void 0===x||null===(f=x.field_media_image)||void 0===f||null===(h=f.data)||void 0===h||null===(m=h.meta)||void 0===m||m.height,(0,d.jsx)("div",{style:{backgroundImage:"url(".concat(t.g.URL).concat(y,")"),backgroundSize:"cover",width:"100%",height:"100%"},children:p})},c=l(1396),v=l.n(c),m=l(4880),h=l(3527),f=l.n(h),x=function(e){let{title:i,uri:l}=e;return(0,d.jsx)("div",{className:f().className,children:(0,d.jsxs)(v(),{className:"py-2 px-4 group hover:tracking-widest duration-500 text-yellow-600",href:l,children:[i,(0,d.jsx)("div",{className:"group-hover:translate-x-8 duration-500",children:(0,d.jsx)(m.Z,{})})]})})};let _=function(){for(var e=arguments.length,i=Array(e),l=0;l<e;l++)i[l]=arguments[l];return fetch(...i).then(e=>e.json())};var g=function(){var e;let i="".concat(t.g.URL,"/jsonapi/node/daycare_frontpage_section?include=field_media_image,field_media_image.field_media_image"),{data:l,error:a,isLoading:s}=(0,n.ZP)(i,_);return(console.log("Front page section",l),a)?(0,d.jsx)("div",{children:"failed to load"}):s?(0,d.jsx)(r.Z,{}):(0,d.jsx)("div",{className:"w-full md:h-screen",children:l&&(null==l?void 0:null===(e=l.data)||void 0===e?void 0:e.length)&&l.data.map((e,i)=>{var n,t,a,s,r,c,v;return(0,d.jsxs)("div",{className:"w-full md:h-1/2 md:flex md:px-0  md:my-0 my-10",children:[(0,d.jsxs)("div",{className:"".concat(i%2==0?"order-1":"order-2"," md:w-1/2 overflow-hidden border"),children:[(0,d.jsx)(u,{data:l,id:null===(a=e.relationships)||void 0===a?void 0:null===(t=a.field_media_image)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.id}),(0,d.jsx)(o,{data:l,id:null===(c=e.relationships)||void 0===c?void 0:null===(r=c.field_media_image)||void 0===r?void 0:null===(s=r.data)||void 0===s?void 0:s.id})]}),(0,d.jsxs)("div",{className:"".concat(i%2==0?"order-2":"order-1"," md:w-1/2 md:p-20 px-10 py-5"),children:[(0,d.jsx)("h2",{className:"text-2xl my-2",children:e.attributes.title}),(0,d.jsx)("div",{className:"w-10 h-1 bg-yellow-600 my-3"}),(0,d.jsx)("div",{className:"font-light",dangerouslySetInnerHTML:{__html:e.attributes.body.value.substring(0,150)+"..."}}),(0,d.jsx)("div",{className:"my-10",children:(0,d.jsx)(x,{title:null===(v=e.attributes)||void 0===v?void 0:v.field_page_link.title,uri:e.attributes.field_page_link.uri})})]})]},e.id)})})}},5747:function(e,i,l){"use strict";l.r(i),l.d(i,{default:function(){return f}});var d=l(7437),n=l(2265),t=l(2333),a=l(4827),s=function(e){let{title:i}=e;return(0,d.jsx)("div",{className:"w-full",children:(0,d.jsx)("h1",{className:"md:text-[250%] md:leading-normal text-2xl",children:i&&i})})},o=function(e){let{text:i}=e;return(0,d.jsx)("div",{className:"my-5",children:(0,d.jsx)("div",{className:"font-light",dangerouslySetInnerHTML:{__html:i}})})},r=l(1396),u=l.n(r),c=function(e){let{title:i,uri:l}=e;return(0,d.jsx)("div",{className:"my-10",children:(0,d.jsx)(u(),{className:"md:p-4 p-2 bg-blue-950 text-center text-slate-50 uppercase text-xs tracking-[0.15em]",href:l,children:i})})},v=l(1552),m=l(1313);let h=function(){for(var e=arguments.length,i=Array(e),l=0;l<e;l++)i[l]=arguments[l];return fetch(...i).then(e=>e.json())};var f=function(){var e,i;let l="".concat(a.g.URL,"/jsonapi/node/daycare_slides?include=field_media_image,field_media_image.field_media_image"),{data:r,error:u,isLoading:f}=(0,t.ZP)(l,h),[x,_]=(0,n.useState)(0);console.log(x);let[g,j]=(0,n.useState)(""),[p,b]=(0,n.useState)(""),N=(0,n.useRef)();return((0,n.useEffect)(()=>{let e=setInterval(()=>{var e;x===(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.length)-1?_(0):_(x+1),"animate-[fadeIn_6s]"===g?j("animate-[fadeOut_6s]"):j("animate-[fadeIn_6s]"),"animate-[slideIn_3s]"===p?b("animate-[slideOut_3s]"):b("animate-[slideIn_3s]")},8e3);return()=>clearInterval(e)},[r,g,p,x]),u)?(0,d.jsx)("div",{children:"failed to load"}):f?(0,d.jsx)(v.Z,{}):(0,d.jsxs)("div",{className:"relative",ref:N,children:[r&&(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.length)&&r.data.map((e,i)=>{var l,n,t;return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"w-96 h-[48rem] absolute -top-28 right-0\n          ".concat(g," bg-slate-300\n          rounded-l-full")}),(0,d.jsxs)("div",{className:"w-full md:flex-row flex-col justify-center\n          ".concat(x===i?"flex":"hidden","\n          relative z-10"),children:[(0,d.jsxs)("div",{className:"relative z-30 md:w-2/5 md:py-20 md:px-20 px-5 md:order-1 order-2",children:[(0,d.jsx)("div",{className:"".concat(g),children:(0,d.jsx)(s,{title:e.attributes.title})}),(0,d.jsxs)("div",{className:"".concat(g),children:[(0,d.jsx)(o,{text:e.attributes.body.value}),(0,d.jsx)(c,{title:e.attributes.field_page_link.title,uri:e.attributes.field_page_link.uri})]})]}),(0,d.jsx)("div",{className:"".concat(p," relative z-30 md:w-3/5 md:p-8 p-4 md:order-2 order-1"),children:(0,d.jsx)(m.Z,{data:r,id:null===(t=e.relationships)||void 0===t?void 0:null===(n=t.field_media_image)||void 0===n?void 0:null===(l=n.data)||void 0===l?void 0:l.id})})]})]},e.id)}),(0,d.jsx)("div",{className:"absolute right-0 top-1/3  z-50 w-full",children:(0,d.jsx)("div",{className:"flex flex-col float-right",children:r&&(null==r?void 0:null===(i=r.data)||void 0===i?void 0:i.map((e,i)=>(0,d.jsx)("div",{className:"".concat(x===i?"bg-slate-50":"bg-slate-300/30"," w-5 h-5 shadow-md border bg-slate-400 m-1 cursor-pointer relative z-50 block"),children:(0,d.jsx)("span",{onClick:()=>_(i)})},i)))})})]})}},3527:function(e){e.exports={style:{fontFamily:"'__Architects_Daughter_228ab5', '__Architects_Daughter_Fallback_228ab5'",fontWeight:400,fontStyle:"normal"},className:"__className_228ab5"}}},function(e){e.O(0,[392,971,596,744],function(){return e(e.s=4088)}),_N_E=e.O()}]);