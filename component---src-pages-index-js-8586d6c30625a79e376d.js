(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+g+W":function(e,t,n){var r=n("q0Rj"),o=n("s9h0");function c(t,n,a){return o()?(e.exports=c=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=c=function(e,t,n){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return n&&r(c,n.prototype),c},e.exports.default=e.exports,e.exports.__esModule=!0),c.apply(null,arguments)}e.exports=c,e.exports.default=e.exports,e.exports.__esModule=!0},"0j+7":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},"3uoI":function(e,t,n){},"6us9":function(e,t,n){"use strict";var r=n("q1tI");n("3uoI");t.a=function(e){var t=e.nav.map((function(e){var t=e[0],n=e[1];return r.createElement("a",{href:n,key:t},t)}));return r.createElement("header",{id:"navbar"},t)}},"7pJ2":function(e,t,n){e.exports=n.p+"static/avatar-229f5cc4e2375e4bf3e5cc91722bfb4c.jpg"},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},JCRO:function(e,t,n){},LyAD:function(e,t,n){"use strict";t.a={navLinks:[["Portfolio","/#portfolio"],["Contact","/#contact"]],contact:["email: saindanijela@gmail.com","GitHub: danijels"]}},"O/e6":function(e,t,n){},OS2g:function(e,t,n){},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n("A2+M"),c=(n("pxef"),n("LyAD")),a=n("6us9"),i=(n("JCRO"),function(e){return r.createElement("div",{id:"card-wrapper"},r.createElement("div",{id:"card"},r.createElement("div",{id:"front"},r.createElement("div",{id:"text"},r.createElement("h1",{id:"card-title"},e.title),r.createElement("p",{id:"card-text"},e.text)),r.createElement("img",{id:"avatar",src:e.img,alt:e.alt})),r.createElement("div",{id:"about"},e.back)))}),l=(n("sugA"),function(e){var t=e.categories.map((function(e){var t=e[0],n=e[1],o=e[2];return r.createElement("li",{key:n},r.createElement("button",{id:n,onClick:o},t))}));return r.createElement("section",{id:"portfolio"},r.createElement("h2",{id:"portf-title"},e.title),r.createElement("div",{id:"portf-content"},r.createElement("ul",{id:"categories"},t),e.children))}),u=(n("O/e6"),function(e){return r.createElement("div",{id:"board"},r.createElement("div",{id:"board-info"},r.createElement("h3",null,e.text.title),r.createElement("p",null,e.text.description)),e.children)}),s=(n("OS2g"),function(e){var t=e.links.map((function(e){var t=e[0],n=e[1];return r.createElement("a",{href:n,key:t},t)}));return r.createElement("div",{className:"pin",style:{backgroundImage:"url("+e.photo+")"}},r.createElement("div",{className:"top"},r.createElement("h3",{className:"pin-title"},e.title),r.createElement("div",{className:"overlay",style:{}},t)),r.createElement("p",null,e.description),r.createElement("div",{className:"stack"},e.logos))}),f=n("fItr"),p=n("7pJ2"),d=n.n(p),m=r.useState;t.default=function(e){var t=e.data,n=t.about,p=t.categories.nodes,v=p.find((function(e){return"all"===e.title})),E=m(v),b=E[0],y=E[1],x=function(e){var t=p.find((function(t){return t.title===e.target.id}));y(t)},h=p.map((function(e){return[e.buttonTitle,e.title,x]})),g={title:b.buttonTitle,description:b.description},O=b.projects.map((function(e){var t=e.title,n=e.shortDescription,c=e.pinPhoto,a=e.stack,i=e.queryParam,l=[["See More","/project?name="+i],["See Live",e.url],["See Code","https://github.com/danijels/"+i]];return r.createElement(s,{key:t,links:l,photo:c.url,title:t,description:n,logos:r.createElement(o.MDXRenderer,null,a.markdownNode.childMdx.body)})}));return r.createElement(r.Fragment,null,r.createElement(a.a,{nav:c.a.navLinks}),r.createElement(i,{text:"WEB DEVELOPER",title:"Danijela Sain",img:d.a,alt:"a portrait of me sitting on a ruined wall with a river in hills in the background",back:r.createElement(o.MDXRenderer,null,n.content.markdownNode.childMdx.body)}),r.createElement(l,{title:"Portfolio",categories:h},r.createElement(u,{text:g},O)),r.createElement(f.a,{fields:c.a.contact,title:"Contact"}))}},X8hv:function(e,t,n){var r=n("+g+W"),o=n("ZGFM"),c=n("0j+7"),a=n("u0WH");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n("q1tI"),s=n("7ljp").mdx,f=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,c=a(e,["scope","children"]),i=f(t),p=u.useMemo((function(){if(!n)return null;var e=l({React:u,mdx:s},i),t=Object.keys(e),c=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(c)))}),[n,t]);return u.createElement(p,l({},c))}},fItr:function(e,t,n){"use strict";var r=n("q1tI");n("ky7P");t.a=function(e){var t=e.fields.map((function(e,t){return r.createElement("div",{key:t,className:"contact-field"},e)}));return r.createElement("footer",{id:"contact"},r.createElement("h2",null,e.title),r.createElement("div",{id:"fields"},t))}},ky7P:function(e,t,n){},pxef:function(e,t,n){},s9h0:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},sugA:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-8586d6c30625a79e376d.js.map