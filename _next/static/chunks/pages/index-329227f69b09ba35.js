(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2962)}])},2962:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return pe}});var n=r(5893),o=r(4441),i=r(7751),a=r(7294),s=r(2019),c=r(5543),l=r(3735);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=(0,c.ZP)("div")({position:"relative",overflow:"hidden"}),h=(0,c.ZP)("div")({position:"absolute",height:"100%",width:"100%"}),f=(0,c.ZP)("div")({position:"relative",width:"100%",height:"100%"}),b=(0,c.ZP)("div")({width:"100%",marginTop:"10px",textAlign:"center"}),p=(0,c.ZP)(s.Z)({fontSize:"15px"}),g=(0,c.ZP)(l.Z,{shouldForwardProp:function(e){return!e.startsWith("$")}})((function(e){var t=e.$active;return{cursor:"pointer",transition:"200ms",padding:0,color:t?"#494949":"#afafaf","&:hover":{color:t?"#494949":"#1f1f1f"},"&:active":{color:t?"#494949":"#1f1f1f"}}})),v=(0,c.ZP)(l.Z,{shouldForwardProp:function(e){return!e.startsWith("$")}})((function(e){return{margin:"0 10px",position:"relative",backgroundColor:"#494949",top:"calc(50% - 20px) !important",color:"white",fontSize:"30px",transition:"200ms",cursor:"pointer",opacity:e.$alwaysVisible?"1":"0","&:hover":{opacity:"0.6 !important"}}})),j=(0,c.ZP)("div",{shouldForwardProp:function(e){return!e.startsWith("$")}})((function(e){var t=e.$next,r=e.$prev;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}({position:"absolute",height:"100px",backgroundColor:"transparent",zIndex:1,top:"calc(50% - 70px)","&:hover":{"& button":{backgroundColor:"black",filter:"brightness(120%)",opacity:"0.4"}}},e.$fullHeightHover?{height:"100%",top:"0"}:void 0,t?{right:0}:void 0,r?{left:0}:void 0)}));function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}var y=function(e){var t=e.animation,r=e.next,s=e.prev,c=e.swipe,l=e.state,u=e.index,d=e.maxIndex,f=e.duration,b=e.child,p=e.height,g=e.setHeight,v="slide"===t,j="fade"===t,m={drag:"x",layout:!0,onDragEnd:function(e,t){c&&(console.log(t),t.offset.x>0?s&&s():t.offset.x<0&&r&&r(),e.stopPropagation())},dragElastic:0,dragConstraints:{left:0,right:0}},y=(0,a.useRef)(null);(0,a.useEffect)((function(){y.current&&g(y.current.offsetHeight)}),[y,g]);var _={leftwardExit:{x:v?"-100%":void 0,opacity:j?0:void 0,zIndex:0},leftOut:{x:v?"-100%":void 0,opacity:j?0:void 0,display:"none",zIndex:0},rightwardExit:{x:v?"100%":void 0,opacity:j?0:void 0,zIndex:0},rightOut:{x:v?"100%":void 0,opacity:j?0:void 0,display:"none",zIndex:0},center:{x:0,opacity:1,zIndex:1}},w=l.active,P=l.next,O=l.prevActive,k="center";return u===w?k="center":u===O?(k=P?"leftwardExit":"rightwardExit",w===d&&0===u&&(k="rightwardExit"),0===w&&u===d&&(k="leftwardExit")):(k=u<w?"leftOut":"rightOut",w===d&&0===u&&(k="rightOut"),0===w&&u===d&&(k="leftOut")),f/=1e3,(0,n.jsx)(h,{children:(0,n.jsx)(o.M,{custom:P,children:(0,n.jsx)(i.E.div,x({},c&&m,{style:{height:"100%"},children:(0,n.jsx)(i.E.div,{custom:P,variants:_,animate:k,transition:{x:{type:"tween",duration:f,delay:0},opacity:{duration:f}},style:{position:"relative",height:"100%"},children:(0,n.jsx)("div",{ref:y,style:{height:p},children:b})})}))})})};function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){_(e,t,r[t])}))}return e}function P(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var O=function(e){for(var t=function(t){var i=t===e.active?"".concat(s," ").concat(d):"".concat(s),a=t===e.active?Object.assign({},c,h):c,u=t===e.active?Object.assign({},l,f):l;void 0===u["aria-label"]&&(u["aria-label"]="carousel indicator");var b=function(r){return(0,n.jsx)(g,w({$active:t===e.active,className:i,style:a,onClick:function(){e.press(t)}},u,{"aria-label":"".concat(u["aria-label"]," ").concat(t+1),children:r}),t)};Array.isArray(r)?v.push(b(r[t]))&&o(r):v.push(b(r))},r=(0,a.useMemo)((function(){return void 0!==e.IndicatorIcon?e.IndicatorIcon:(0,n.jsx)(p,{})}),[e.IndicatorIcon]),o=(0,a.useCallback)((function(t){for(;t.length<e.length;){var r=0;t.push(t[r]),r+=1}}),[e.length]),i=e.indicatorIconButtonProps,s=i.className,c=i.style,l=P(i,["className","style"]),u=e.activeIndicatorIconButtonProps,d=u.className,h=u.style,f=P(u,["className","style"]),v=[],j=0;j<e.length;j++)t(j);var m=e.indicatorContainerProps,x=m.className,y=m.style,_=P(m,["className","style"]);return(0,n.jsx)(b,w({className:x,style:y},_,{children:v}))},k=r(1659),I=r(7958);function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){N(e,t,r[t])}))}return e}function C(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var H=function(e){var t=e||{},r=(t.className,t.style,C(t,["className","style"]));return A(void 0!==e?{style:void 0!==e.style?e.style:{},className:void 0!==e.className?e.className:""}:{style:{},className:""},r)};function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){S(e,t,r[t])}))}return e}var B=function(e){var t=(0,a.useState)({active:0,prevActive:0,next:!0}),r=t[0],o=t[1],i=(0,a.useState)(0),s=i[0],c=i[1],l=(0,a.useState)(!1),u=l[0],h=l[1],b=function(e){var t=void 0!==e.animation?e.animation:"fade",r=void 0!==e.duration?e.duration:"fade"===t?500:200;return{sx:void 0!==e.sx?e.sx:{},className:void 0!==e.className?e.className:"",children:e.children?e.children:[],height:e.height,index:void 0!==e.index?e.index:0,strictIndexing:void 0===e.strictIndexing||e.strictIndexing,autoPlay:void 0===e.autoPlay||e.autoPlay,stopAutoPlayOnHover:void 0===e.stopAutoPlayOnHover||e.stopAutoPlayOnHover,interval:void 0!==e.interval?e.interval:4e3,animation:t,duration:r,swipe:void 0===e.swipe||e.swipe,navButtonsAlwaysInvisible:void 0!==e.navButtonsAlwaysInvisible&&e.navButtonsAlwaysInvisible,navButtonsAlwaysVisible:void 0!==e.navButtonsAlwaysVisible&&e.navButtonsAlwaysVisible,cycleNavigation:void 0===e.cycleNavigation||e.cycleNavigation,fullHeightHover:void 0===e.fullHeightHover||e.fullHeightHover,navButtonsWrapperProps:H(e.navButtonsWrapperProps),navButtonsProps:H(e.navButtonsProps),NavButton:e.NavButton,NextIcon:void 0!==e.NextIcon?e.NextIcon:(0,n.jsx)(I.Z,{}),PrevIcon:void 0!==e.PrevIcon?e.PrevIcon:(0,n.jsx)(k.Z,{}),indicators:void 0===e.indicators||e.indicators,indicatorContainerProps:H(e.indicatorContainerProps),indicatorIconButtonProps:H(e.indicatorIconButtonProps),activeIndicatorIconButtonProps:H(e.activeIndicatorIconButtonProps),IndicatorIcon:e.IndicatorIcon,onChange:void 0!==e.onChange?e.onChange:function(){},changeOnFirstRender:void 0!==e.changeOnFirstRender&&e.changeOnFirstRender,next:void 0!==e.next?e.next:function(){},prev:void 0!==e.prev?e.prev:function(){}}}(e);(0,a.useEffect)((function(){var e=b.index,t=b.changeOnFirstRender;m(e,!0,t)}),[]),function(e,t){var r=(0,a.useRef)((function(){}));(0,a.useEffect)((function(){r.current=e}),[e]),(0,a.useEffect)((function(){if(null!==t){var e=setInterval((function(){r.current()}),t);return function(){return clearInterval(e)}}return function(){}}),[t])}((function(){b.autoPlay&&!u&&p(void 0)}),b.interval),(0,a.useEffect)((function(){m(b.index,!0)}),[]);var p=function(e){var t=b.children,n=b.cycleNavigation,o=Array.isArray(t)?t.length-1:0,i=r.active+1>o?n?0:r.active:r.active+1;m(i,!0),e&&e.stopPropagation()},g=function(e){var t=b.children,n=b.cycleNavigation,o=Array.isArray(t)?t.length-1:0,i=r.active-1<0?n?o:r.active:r.active-1;m(i,!1),e&&e.stopPropagation()},m=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=b.onChange,a=b.children,s=b.strictIndexing;Array.isArray(a)?(s&&e>a.length-1&&(e=a.length-1),s&&e<0&&(e=0)):e=0,n&&(void 0!==t&&(t?b.next(e,r.active):b.prev(e,r.active)),i(e,r.active)),void 0===t&&(t=e>r.active),o({active:e,prevActive:r.active,next:t})},x=b.children,_=b.sx,w=b.className,P=b.height,N=b.stopAutoPlayOnHover,A=b.animation,C=b.duration,S=b.swipe,B=b.navButtonsAlwaysInvisible,E=b.navButtonsAlwaysVisible,F=b.cycleNavigation,G=b.fullHeightHover,M=b.navButtonsProps,D=b.navButtonsWrapperProps,U=b.NavButton,L=b.NextIcon,z=b.PrevIcon,$=b.indicators,R=b.indicatorContainerProps,Z=b.indicatorIconButtonProps,W=b.activeIndicatorIconButtonProps,V=b.IndicatorIcon,q=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(F)return!0;var t=Array.isArray(x)?x.length-1:0;return(!e||r.active!==t)&&!(!e&&0===r.active)};return(0,n.jsxs)(d,{sx:_,className:w,onMouseOver:function(){N&&h(!0)},onMouseOut:function(){N&&h(!1)},onFocus:function(){N&&h(!0)},onBlur:function(){N&&h(!1)},style:{height:P},children:[(0,n.jsx)(f,{style:{height:P?void 0:s},children:Array.isArray(x)?x.map((function(e,t){return(0,n.jsx)(y,{state:r,index:t,maxIndex:x.length-1,child:e,animation:A,duration:C,swipe:S,next:p,prev:g,height:P,setHeight:c},"carousel-item".concat(t))})):(0,n.jsx)(y,{state:r,index:0,maxIndex:0,child:x,animation:A,duration:C,height:P,setHeight:c},"carousel-item0")}),!B&&q(!0)&&(0,n.jsx)(j,T({$next:!0,$prev:!1,$fullHeightHover:G},D,{children:void 0!==U?U(T({onClick:p,next:!0,prev:!1},M)):(0,n.jsx)(v,T({$alwaysVisible:E,$fullHeightHover:G,onClick:p,"aria-label":"Next"},M,{children:L}))})),!B&&q(!1)&&(0,n.jsx)(j,T({$next:!1,$prev:!0,$fullHeightHover:G},D,{children:void 0!==U?U(T({onClick:g,next:!1,prev:!0},M)):(0,n.jsx)(v,T({$alwaysVisible:E,$fullHeightHover:G,onClick:g,"aria-label":"Previous"},M,{children:z}))})),$?(0,n.jsx)(O,{length:Array.isArray(x)?x.length:0,active:r.active,press:m,indicatorContainerProps:R,indicatorIconButtonProps:Z,activeIndicatorIconButtonProps:W,IndicatorIcon:V}):null]})},E=B,F=r(9008),G=r(1664),M=r(1673),D=r.n(M),U=r(1436),L=r(2814),z=r(9986),$=r.n(z);function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function W(e){var t=e.activeKey,r=e.onSelect,o=e.children,i=a.Children.map(o,(function(e){return a.isValidElement(e)?a.cloneElement(e,{active:t===e.props.eventkey,style:{minWidth:100},onClick:r}):null}));return(0,n.jsx)("div",{className:$().Tabs,children:i})}function V(e){var t=e.children,r=e.onClick,o=e.active,i=e.color,s=Z(e,["children","onClick","active","color"]),c="".concat($().Tab," ").concat($()[i]," ").concat(o?$().Active:""),l=(0,a.useRef)(null);return(0,n.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){R(e,t,r[t])}))}return e}({className:c},s,{onClick:function(e){r&&r(s.eventkey),l.current&&l.current.scrollIntoView({behavior:"smooth"})},ref:l,children:[t,o&&(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)(L.G,{icon:U.acZ,style:{marginLeft:10}})]})]}))}var q=r(1417),Q=r(739),J=r.n(Q);function K(e){var t=e.image,r=e.subtitle,o=e.description,i=e.title,a=e.technology,s=(e.color,e.link),c=e.footer,l=e.position,u=void 0===l?"left":l;return(0,n.jsxs)("div",{className:"".concat(J().Project," ").concat(J().black),children:[(0,n.jsx)("div",{className:J().Images,style:{backgroundImage:"url(".concat(t,")"),backgroundSize:"cover"}}),(0,n.jsx)("div",{className:J().ContentWrapper,children:(0,n.jsxs)("div",{className:J().Content,style:{float:u},children:[(0,n.jsxs)("div",{className:J().Title,children:[(0,n.jsx)("h1",{children:i}),(0,n.jsx)("p",{className:J().Subtitle,children:r}),(0,n.jsx)("p",{className:J().Technology,children:a.map((function(e,t,r){return(0,n.jsxs)("span",{children:[e,t!==r.length-1&&(0,n.jsx)("span",{className:J().divider,children:" | "})]},"".concat(i,"-technology-").concat(t))}))})]}),(0,n.jsx)("div",{className:J().Body,children:(0,n.jsx)("div",{className:J().Description,children:o})}),(0,n.jsx)("div",{className:J().Footer,children:c||(0,n.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:(0,n.jsx)("button",{children:"Check it out!"})})})]})})]})}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Y(e,t,r[t])}))}return e}var ee="#e48257",te="#3a6351",re=function(e){return(0,n.jsx)("span",X({style:{color:ee}},e))},ne=[{title:"React Material UI Carousel",subtitle:"October 2019 - Maintained until present day",technology:["ReactJS","Material UI","Typescript"],description:(0,n.jsxs)(n.Fragment,{children:["An open-source, extendible, and easy-to-use ",(0,n.jsx)(re,{children:"Carousel UI component"})," for React using Material UI.",(0,n.jsx)("br",{})," ",(0,n.jsx)("br",{}),"It switches between given children using smooth animations.",(0,n.jsx)("br",{}),"Provides next and previous buttons, and interactible bullet indicators."]}),image:"/projects/carousel3.jpg",color:"black",footer:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{href:"https://github.com/Learus/react-material-ui-carousel",rel:"noreferrer",target:"_blank",children:(0,n.jsxs)("button",{style:{backgroundColor:"#2b2b2b"},children:[(0,n.jsx)(L.G,{icon:q.zhw})," Github"]})}),(0,n.jsx)("a",{href:"https://www.npmjs.com/package/react-material-ui-carousel",rel:"noreferrer",target:"_blank",children:(0,n.jsxs)("button",{style:{backgroundColor:ee},children:[(0,n.jsx)(L.G,{icon:U.W9K})," NPM"]})})]}),position:"right"},{title:"GeoQA Interface",subtitle:"Bachelor Thesis | February 2020 - August 2020",technology:["Node.js","Express","ReactJS","Material UI"],description:(0,n.jsxs)(n.Fragment,{children:["The NKUA has built a system that answers more specific, ",(0,n.jsx)(re,{children:"geospatial questions"}),", using a set of knowledge bases. ",(0,n.jsx)(re,{children:"The GeoQA system."}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"The purpose of this project is to create an extendible and versatile ",(0,n.jsx)(re,{children:"user interface"})," for GeoQA."]}),image:"projects/geoqa3.jpg",color:"black",position:"left",footer:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{href:"https://pergamos.lib.uoa.gr/uoa/dl/frontend/file/lib/default/data/2937389/theFile",rel:"noreferrer",target:"_blank",children:(0,n.jsxs)("button",{style:{backgroundColor:"#2e5870"},children:[(0,n.jsx)(L.G,{icon:U.Mdf})," Paper"]})}),(0,n.jsx)("a",{href:"http://teleios4.di.uoa.gr:15434/",rel:"noreferrer",target:"_blank",children:(0,n.jsxs)("button",{style:{backgroundColor:ee},children:[(0,n.jsx)(L.G,{icon:U.Psp})," Ask a Question"]})})]})},{title:"Maliaras Meetings",subtitle:"October 2020 - November 2020",technology:["ReactJS","Typescript","Node.js","MariaDB"],description:(0,n.jsxs)(n.Fragment,{children:["A full-stack application built to ",(0,n.jsx)(re,{children:"help parents meet with school teachers"})," during the pandemic.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Creates rooms and handles a ",(0,n.jsx)(re,{children:"waiting queue"})," for each teacher. The teacher can then call the parents and converse ",(0,n.jsx)(re,{children:"through the application itself."}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Used with ~60 concurrent teachers & ~700 concurrent parents."]}),image:"projects/meetings2.jpg",color:"black",position:"left",footer:(0,n.jsx)(n.Fragment,{})},{title:"Athens Philharmonia Orchestra Website",subtitle:"May 2020 - July 2020",technology:["ReactJS","Typescript","jQuery","Bootstrap"],description:(0,n.jsxs)(n.Fragment,{children:["The Athens Philharmonia Orchestra is an orchestra based in Greece, dedicated to ",(0,n.jsx)(re,{children:"Greek Art Music"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Its mission is to systematically explore the ",(0,n.jsx)(re,{children:"cultural and intellectual treasure"})," of the Modern Greek art music creation"]}),image:"projects/apho2.jpg",color:"black",position:"right",footer:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{href:"https://apho.gr",rel:"noreferrer",target:"_blank",children:(0,n.jsxs)("button",{children:[(0,n.jsx)(L.G,{icon:U.Mdf})," Take a look"]})}),(0,n.jsx)("a",{href:"https://open.spotify.com/artist/0gGmjio2Tcb4R8UttIQimZ?si=2A8-vbkTQO6FN1TqvSsrbw",rel:"noreferrer",target:"_blank",children:(0,n.jsxs)("button",{style:{backgroundColor:te},children:[(0,n.jsx)(L.G,{icon:q.Ha7})," Listen"]})})]})}];function oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ie="#e48257",ae="#2e5870",se=function(e){return(0,n.jsx)("span",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){oe(e,t,r[t])}))}return e}({style:{color:ie}},e))},ce=[{title:"Viva La Revolution!",subtitle:"Ludum Dare #46 - April 2020",technology:["Unity","C#","Piskel"],description:(0,n.jsxs)(n.Fragment,{children:["Play As ",(0,n.jsx)(se,{children:"Maximilien Robespierre"}),", rouse the populous, gather precious resources, ",(0,n.jsx)(se,{children:"indoctrinate"})," influencers to your cause, or ",(0,n.jsx)(se,{children:"execute"})," them when they become a hindrance!",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Keep the revolution alive and bring the Monarchy to its knees.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"A game for the ",(0,n.jsx)(se,{children:"Ludum Dare #46"})]}),image:"/projects/viva.png",color:"black",footer:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{href:"https://learus.itch.io/viva-la-revolution",target:"_blank",rel:"noreferrer",children:(0,n.jsxs)("button",{style:{backgroundColor:ie},children:[(0,n.jsx)(L.G,{icon:U.q7m})," Play Now!"]})}),(0,n.jsx)("a",{href:"https://ldjam.com/events/ludum-dare/46/viva-la-revolution-1",target:"_blank",rel:"noreferrer",children:(0,n.jsxs)("button",{style:{backgroundColor:ae},children:[(0,n.jsx)(L.G,{icon:U.kWN})," Submission"]})})]}),position:"left"},{title:"Terrio",subtitle:"June 2017 - August 2020",technology:["Unity","C#","Adobe Illustrator","Piskel"],description:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se,{children:"Terrio"})," is a simple mobile game built on the Unity Engine.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"It rethinks the idea of ",(0,n.jsx)(se,{children:"territory control/conquering games"}),", creating an endless arcade mode with a variety of enemies to destroy while conquering the board.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"You are a tiny pixel that tries to expand its territory whlist avoiding enemies."]}),image:"/projects/terrio.png",color:"black",footer:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.Brewery.Terrio&hl=en&gl=US",target:"_blank",rel:"noreferrer",children:(0,n.jsxs)("button",{style:{backgroundColor:ie},children:[(0,n.jsx)(L.G,{icon:q.YUQ})," ",(0,n.jsx)("span",{children:"Play Now!"})]})})}),position:"right"},{title:"Boring in the deep",subtitle:"Ludum Dare #48 - April 2021",technology:["Unity","C#","Piskel"],description:(0,n.jsxs)(n.Fragment,{children:["Get into the shoes of the brave adventurer, writer, and gambler, ",(0,n.jsx)(se,{children:"Phileas Fogg."}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"This time our shrewd protagonist has made another ludicrous bet. To reach the ",(0,n.jsx)(se,{children:"center of the earth"})," and return to tell the tale.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"And all bets are off!",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"A game for the ",(0,n.jsx)(se,{children:"Ludum Dare #48"})]}),image:"/projects/boring2.jpg",color:"black",footer:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{href:"https://learus.itch.io/boring-in-the-deep",target:"_blank",rel:"noreferrer",children:(0,n.jsxs)("button",{style:{backgroundColor:ie},children:[(0,n.jsx)(L.G,{icon:U.q7m})," ",(0,n.jsx)("span",{children:"Play Now!"})]})}),(0,n.jsx)("a",{href:"https://github.com/Learus/Boring-in-the-Deep",target:"_blank",rel:"noreferrer",children:(0,n.jsxs)("button",{style:{backgroundColor:"#2b2b2b"},children:[(0,n.jsx)(L.G,{icon:q.zhw})," ",(0,n.jsx)("span",{children:"Source"})]})}),(0,n.jsx)("a",{href:"https://ldjam.com/events/ludum-dare/48/$240281",target:"_blank",rel:"noreferrer",children:(0,n.jsxs)("button",{style:{backgroundColor:ae},children:[(0,n.jsx)(L.G,{icon:U.kWN})," ",(0,n.jsx)("span",{children:"Submission"})]})})]}),position:"left"}];var le=[{title:"HashCode 2018",subtitle:"March 1 2018",technology:["Python"],description:(0,n.jsx)(n.Fragment,{children:"A greedy algorithm for the HashCode 2019 slideshow problem."}),image:"/projects/hashcode2.jpg",color:"black",footer:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{href:"https://github.com/Learus/HashCode2019",rel:"noreferrer",target:"_blank",children:(0,n.jsxs)("button",{children:[(0,n.jsx)(L.G,{icon:q.zhw})," Solution"]})}),(0,n.jsx)("a",{href:"https://storage.googleapis.com/coding-competitions.appspot.com/HC/2019/hashcode2019_qualification_task.pdf",rel:"noreferrer",target:"_blank",children:(0,n.jsxs)("button",{style:{backgroundColor:"#2e5870"},children:[(0,n.jsx)(L.G,{icon:U.Psp})," Problem"]})})]}),position:"right"}];function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function de(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){de(e,t,r[t])}))}return e}function fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return ue(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ue(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var be={web:{text:"Web Projects",color:"green",icon:U.tc$},game:{text:"Games",color:"orange",icon:U.l9D},contests:{text:"Contests",color:"blue",icon:U.kWN}},pe=function(){var e=(0,a.useState)("web"),t=e[0],r=e[1];return(0,n.jsxs)("div",{children:[(0,n.jsxs)(F.default,{children:[(0,n.jsx)("title",{children:"Yannis Maliaras - Learus"}),(0,n.jsx)("meta",{name:"description",content:"Yannis Maliaras - Learus Portfolio"})]}),(0,n.jsx)("div",{className:D().banner,children:(0,n.jsx)("img",{src:"banner.jpeg",alt:"background"})}),(0,n.jsx)("div",{className:D().container,children:(0,n.jsxs)("main",{className:"".concat(D().main),children:[(0,n.jsxs)("section",{className:D().mainSection,children:[(0,n.jsxs)("header",{className:D().header,children:[(0,n.jsx)(G.default,{href:"/",children:(0,n.jsx)("a",{className:D().logo,children:(0,n.jsx)("h2",{children:"Learus"})})}),(0,n.jsx)(G.default,{href:"mailto:jmaliaras@gmail.com",children:(0,n.jsx)("a",{className:D().mailLink,title:"E-mail",children:"jmaliaras@gmail.com"})}),(0,n.jsx)(G.default,{href:"https://www.linkedin.com/in/ioannis-maliaras/",children:(0,n.jsx)("a",{target:"_blank",title:"LinkedIn",children:(0,n.jsx)(L.G,{icon:q.D9H,size:"2x"})})}),(0,n.jsx)(G.default,{href:"https://github.com/Learus",children:(0,n.jsx)("a",{target:"_blank",title:"Github",children:(0,n.jsx)(L.G,{icon:q.zhw,size:"2x"})})}),(0,n.jsx)(G.default,{href:"https://www.buymeacoffee.com/Learus",children:(0,n.jsx)("a",{target:"_blank",title:"Buy me a coffee!",children:(0,n.jsx)(L.G,{icon:U.SvR,size:"2x"})})})]}),(0,n.jsxs)("div",{className:D().name,children:[(0,n.jsx)("h1",{children:"Yannis Maliaras"}),(0,n.jsx)("h1",{children:"Learus"}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:D().description,children:(0,n.jsxs)("p",{children:["I am a ",(0,n.jsx)("span",{className:D().orange,children:"Computer Science Bachelor"})," from the National and Kapodistrian University of Athens.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I specialize on ",(0,n.jsx)("span",{className:D().orange,children:"Full-Stack Web Development"})," using ReactJS and Node.js.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I am a hobbyist ",(0,n.jsx)("span",{className:D().orange,children:"Game Developer"}),", having years of experience in Unity and C#.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I am an active advocate of ",(0,n.jsx)("span",{className:D().orange,children:"minimalism"})," in design and always strive to create beautifully looking work, while also maintaing quality User Experience.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I bring a ",(0,n.jsx)("span",{className:D().orange,children:"strong sense of aesthetics"}),", attention to detail and a perfectionist attitude towards my work.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I am an efficient learner with an ",(0,n.jsx)("span",{className:D().orange,children:"open-mind"})," for new technologies and ways to create."]})})]})]}),(0,n.jsx)("section",{className:D().carouselSection,children:(0,n.jsxs)("div",{className:D().carousel,children:[(0,n.jsx)(W,{activeKey:t,onSelect:r,children:Object.entries(be).map((function(e){var t=fe(e,2),r=t[0],o=t[1];return(0,n.jsx)(V,{eventkey:r,color:o.color,children:(0,n.jsx)(L.G,{icon:o.icon,className:D().Icon})},r)}))}),(0,n.jsxs)("div",{className:"".concat(D().activeTab," ").concat(D()[be[t].color]),children:["web"===t&&(0,n.jsx)(E,{animation:"slide",duration:1e3,height:"100%",indicators:!1,autoPlay:!1,navButtonsAlwaysVisible:!0,fullHeightHover:!1,children:ne.map((function(e,t){return(0,n.jsx)(K,he({},e),"webProject-".concat(t))}))}),"game"===t&&(0,n.jsx)(E,{animation:"slide",duration:1e3,height:"100%",indicators:!1,autoPlay:!1,navButtonsAlwaysVisible:!0,fullHeightHover:!1,children:ce.map((function(e,t){return(0,n.jsx)(K,he({},e),"gameProject-".concat(t))}))}),"contests"===t&&(0,n.jsx)(E,{animation:"slide",duration:1e3,height:"100%",indicators:!1,autoPlay:!1,navButtonsAlwaysVisible:!0,fullHeightHover:!1,children:le.map((function(e,t){return(0,n.jsx)(K,he({},e),"gameProject-".concat(t))}))})]})]})})]})})]})}},739:function(e){e.exports={Title:"Project_Title__iCki4",Subtitle:"Project_Subtitle__U7K1u",Technology:"Project_Technology__6SzPf",Body:"Project_Body__W3RSo",Description:"Project_Description__dSWgq",Footer:"Project_Footer__vzZAU",Content:"Project_Content__OQZCb",Project:"Project_Project__LoHJQ",ContentWrapper:"Project_ContentWrapper__ozgLA",divider:"Project_divider__QuApI",Images:"Project_Images__Y2aqR",green:"Project_green__HcTpD",orange:"Project_orange__DA_E0",blue:"Project_blue__infNp",white:"Project_white__UqmsK",brown:"Project_brown__sIlUp",black:"Project_black__M03jv"}},9986:function(e){e.exports={Tabs:"Tabs_Tabs__Rt2_f",Tab:"Tabs_Tab__dKjtB",brown:"Tabs_brown__41Zrl",green:"Tabs_green__NqcLt",white:"Tabs_white__vm_xb",orange:"Tabs_orange__0p0kX",blue:"Tabs_blue__p4xxU",black:"Tabs_black__IlFOc"}},1673:function(e){e.exports={container:"Home_container__97eC3",banner:"Home_banner__F5GOV",header:"Home_header__CyQ_T",mailLink:"Home_mailLink__Iiaid",logo:"Home_logo__FLQOc",main:"Home_main__OVLM4",name:"Home_name__t5JJd",description:"Home_description__JhekB",mainSection:"Home_mainSection__CZZsf",carousel:"Home_carousel__mZQjq",Icon:"Home_Icon__Ur6cC",carouselSection:"Home_carouselSection__lK4Ed",buttons:"Home_buttons__kEItN",orange:"Home_orange__1_Tpz",fullHeight:"Home_fullHeight__6JOf9",activeTab:"Home_activeTab__vf0bm",brown:"Home_brown__ACIQf",green:"Home_green__P9PWg",white:"Home_white__Drsv5",blue:"Home_blue__H_BUf",black:"Home_black__GozVU"}}},function(e){e.O(0,[523,112,378,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);