(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,n,t){e.exports=t(3)},function(e,n,t){},function(e,n){document.body.addEventListener("mousemove",function(e){var n=e.clientX/window.innerWidth*100,t=e.clientY/window.innerHeight*100;document.body.style.background="radial-gradient(1200.00px at "+n+"% "+t+"%, rgba(196, 196, 196, 0) 0%, #000000 100%), linear-gradient(149.35deg, #00FFA3 24.09%, #00BD79 40.54%, #FF4D00 88.23%)"})},function(e,n,t){"use strict";function r(e,n){for(var t=[],r=[],o=arguments.length;o-- >2;)t.push(arguments[o]);for(;t.length;){var i=t.pop();if(i&&i.pop)for(o=i.length;o--;)t.push(i[o]);else null!=i&&!0!==i&&!1!==i&&r.push(i)}return"function"===typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}}t.r(n);t(1),t(2);var o=function(e){return r("header",{class:"flex-row"},r("img",{class:"ambigram",src:e.logo,alt:"logo lea sharon harabagiu",style:{height:"197px",marginLeft:"10px",marginRight:"10px"}}),r("div",{class:"flex-column",style:{alignItems:"flex-end",justifyContent:"flex-end"}},r("h1",{class:"no-margin"},"Sharon Harabagiu"),r("h2",{class:"no-margin"},"creative engineer")))},i=function(){return r("div",null,r("button",null,"Resume"),"-",r("button",null,"About"),"-",r("button",null,"Contact"))},l=function(){return r("div",{id:"works",class:"flex-row",style:{alignItems:"center"}},r("button",null,r("img",{class:"ambigram img-button",src:"img/graphic-design.png",alt:"graphic design logo"})),"-",r("button",null,r("img",{class:"ambigram img-button",src:"img/audiovisual.png",alt:"audiovisual logo"})))},u=function(e){return r("div",{class:"page"},[i(),o(e.header),l()])};!function(e,n,t,r){var o,i=[].map,l=r&&r.children[0]||null,u=l&&function e(n){return{nodeName:n.nodeName.toLowerCase(),attributes:{},children:i.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n)})}}(l),a=[],s=!0,c=h(e),f=function e(n,t,r){for(var o in r)"function"===typeof r[o]?function(e,o){r[e]=function(e){var i=o(e);return"function"===typeof i&&(i=i(p(n,c),r)),i&&i!==(t=p(n,c))&&!i.then&&v(c=m(n,h(t,i),c)),i}}(o,r[o]):e(n.concat(o),t[o]=h(t[o]),r[o]=h(r[o]));return r}([],c,h(n));return v(),f;function d(e){return"function"===typeof e?d(e(c,f)):null!=e?e:""}function g(){o=!o;var e=d(t);for(r&&!o&&(l=function e(n,t,r,o,i){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var l=function e(n,t){var r="string"===typeof n||"number"===typeof n?document.createTextNode(n):(t=t||"svg"===n.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",n.nodeName):document.createElement(n.nodeName),o=n.attributes;if(o){o.oncreate&&a.push(function(){o.oncreate(r)});for(var i=0;i<n.children.length;i++)r.appendChild(e(n.children[i]=d(n.children[i]),t));for(var l in o)w(r,l,o[l],null,t)}return r}(o,i);n.insertBefore(l,t),null!=r&&N(n,t,r),t=l}else if(null==r.nodeName)t.nodeValue=o;else{!function(e,n,t,r){for(var o in h(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&w(e,o,t[o],n[o],r);var i=s?t.oncreate:t.onupdate;i&&a.push(function(){i(e,n)})}(t,r.attributes,o.attributes,i=i||"svg"===o.nodeName);for(var u={},c={},f=[],g=r.children,v=o.children,m=0;m<g.length;m++){f[m]=t.childNodes[m];var p=b(g[m]);null!=p&&(u[p]=[f[m],g[m]])}for(var m=0,y=0;y<v.length;){var p=b(g[m]),x=b(v[y]=d(v[y]));if(c[p])m++;else if(null==x||x!==b(g[m+1]))if(null==x||s)null==p&&(e(t,f[m],g[m],v[y],i),y++),m++;else{var k=u[x]||[];p===x?(e(t,k[0],k[1],v[y],i),m++):k[0]?e(t,t.insertBefore(k[0],f[m]),k[1],v[y],i):e(t,f[m],null,v[y],i),c[x]=v[y],y++}else null==p&&N(t,f[m],g[m]),m++}for(;m<g.length;)null==b(g[m])&&N(t,f[m],g[m]),m++;for(var m in u)c[m]||N(t,u[m][0],u[m][1])}return t}(r,l,u,u=e)),s=!1;a.length;)a.pop()()}function v(){o||(o=!0,setTimeout(g))}function h(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function m(e,n,t){var r={};return e.length?(r[e[0]]=e.length>1?m(e.slice(1),n,t[e[0]]):n,h(t,r)):n}function p(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function b(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function w(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"===typeof t)e.style.cssText=t;else for(var i in"string"===typeof r&&(r=e.style.cssText=""),h(r,t)){var l=null==t||null==t[i]?"":t[i];"-"===i[0]?e.style.setProperty(i,l):e.style[i]=l}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},e.events[n]=t,t?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function N(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}({header:{logo:"img/white-logo.png"}},{},function(e){return u(e)},document.body)}],[[0,1]]]);
//# sourceMappingURL=main.f9a518f1.chunk.js.map