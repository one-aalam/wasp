"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(44996);const i={id:"02-task-entity",title:"Task entity"},s=void 0,p={unversionedId:"tutorials/todo-app/02-task-entity",id:"tutorials/todo-app/02-task-entity",title:"Task entity",description:"Entities are one of the very central concepts in Wasp, and they mainly play the role of data models.",source:"@site/docs/tutorials/todo-app/02-task-entity.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/02-task-entity",permalink:"/docs/tutorials/todo-app/02-task-entity",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/tutorials/todo-app/02-task-entity.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"02-task-entity",title:"Task entity"},sidebar:"docs",previous:{title:"Creating a new project",permalink:"/docs/tutorials/todo-app/01-creating-new-project"},next:{title:"Listing tasks",permalink:"/docs/tutorials/todo-app/03-listing-tasks"}},l={},c=[],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/language/features#entity"},"Entities")," are one of the very central concepts in Wasp, and they mainly play the role of data models."),(0,r.kt)("p",null,"Since our TodoApp is all about tasks, we will define a Task entity in Wasp:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'},"// ...\n\nentity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n")),(0,r.kt)("p",null,"Since Wasp uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io"},"Prisma")," as a database, the definition of an entity comes down to defining a ",(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/data-model/"},"Prisma model"),", using PSL (Prisma Schema Language) inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"{=psl psl=}")," tags."),(0,r.kt)("p",null,"After this change and before running ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp start"),", we first need to run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp db migrate-dev\n")),(0,r.kt)("p",null,"This instructs Prisma to create a new database schema migration (you'll see a new directory ",(0,r.kt)("inlineCode",{parentName:"p"},"migrations/")," appeared in the root dir of our app) and apply it to the database."),(0,r.kt)("p",null,"To take a look at the database and the new ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," schema, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp db studio\n")),(0,r.kt)("img",{alt:"Todo App - Db studio showing Task schema",src:(0,o.Z)("img/todo-app-db-studio-task-entity.png"),style:{border:"1px solid black"}}),(0,r.kt)("p",null,"Click on the specific entity (we have only ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," for now) and check out its fields! We don't have any data yet in our database, but we are about to change that."))}u.isMDXComponent=!0}}]);