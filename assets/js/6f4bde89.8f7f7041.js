"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38610:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(44996);const o=e=>a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,r.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},92908:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(39960);n(44996);const o=()=>a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),i=()=>a.createElement("p",{className:"in-blog-cta-link-container"},a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),a.createElement(o,null),a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(o,null),a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},32411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=(n(39960),n(44996));n(92908),n(70589),n(38610);const i={title:"Feature Announcement - Tailwind CSS support",authors:["shayneczyzewski"],image:"/img/tailwind-2.png",tags:["webdev","wasp","feature","css"]},l=void 0,c={permalink:"/blog/2022/11/16/tailwind-feature-announcement",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-11-16-tailwind-feature-announcement.md",source:"@site/blog/2022-11-16-tailwind-feature-announcement.md",title:"Feature Announcement - Tailwind CSS support",description:'<img alt="Full stack devs"',date:"2022-11-16T00:00:00.000Z",formattedDate:"November 16, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"},{label:"feature",permalink:"/blog/tags/feature"},{label:"css",permalink:"/blog/tags/css"}],readingTime:2.085,hasTruncateMarker:!0,authors:[{name:"Shayne Czyzewski",title:"Founding Engineer @ Wasp",url:"https://github.com/shayneczyzewski",imageURL:"https://github.com/shayneczyzewski.png",key:"shayneczyzewski"}],frontMatter:{title:"Feature Announcement - Tailwind CSS support",authors:["shayneczyzewski"],image:"/img/tailwind-2.png",tags:["webdev","wasp","feature","css"]},prevItem:{title:"Alpha Testing Program: post-mortem",permalink:"/blog/2022/11/16/alpha-testing-program-post-mortem"},nextItem:{title:"Feature Announcement - New auth method (Google)",permalink:"/blog/2022/11/15/auth-feature-announcement"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{alt:"Full stack devs",src:(0,o.Z)("img/tailwind-1.png"),width:"400px"})))}u.isMDXComponent=!0},70589:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}i.isMDXComponent=!0}}]);