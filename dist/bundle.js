!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],s=n.base?i[0]+n.base:i[0],d=t[s]||0,u="".concat(s," ").concat(d);t[s]=d+1;var l=c(u),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(m)):a.push({identifier:u,updater:h(m,n),references:1}),r.push(u)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,l=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function m(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,b=0;function h(e,n){var t,r,o;if(n.singleton){var i=b++;t=f||(f=d(n)),r=m.bind(null,t,i,!1),o=m.bind(null,t,i,!0)}else t=d(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=s(e,n),d=0;d<t.length;d++){var u=c(t[d]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"html { box-sizing: border-box; }\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Used for Debugging purposes */\r\n* {\r\n  -webkit-transition-duration: 0.25s;\r\n  -moz-transition-duration: 0.25s;\r\n  transition-duration: 0.25s;\r\n}\r\n\r\nh1{\r\n  font-weight: bolder;  \r\n}\r\n\r\n.main-img{\r\n  display: block;\r\n  max-width: 800px;\r\n  height: auto;\r\n  text-align: center;\r\n  margin: auto;\r\n  border: 2px solid white;\r\n  border-radius: 1em;\r\n}\r\n\r\n.text-small{\r\n  font-size: 12px;\r\n  color: #CCC;\r\n  text-align: center;\r\n}\r\n\r\n.text-smile{\r\n  font-size: 32px;\r\n  color: #CCC;\r\n  text-align: center;\r\n}\r\n\r\nnav{\r\n  list-style-type: none;\r\n  font-size: 26px;\r\n  color: #DDD;\r\n  border-bottom: 2px solid #888;\r\n  margin-bottom: 1em;\r\n}\r\n\r\nul{\r\n  margin: 0;\r\n  overflow: hidden;\r\n}\r\nnav{\r\n  height: 60px;  \r\n}\r\n\r\n.mynav-item{\r\n  display: inline-block;\r\n  padding: 8px 8px 2px 8px;\r\n  cursor: pointer;\r\n}\r\n.mynav-item:hover{\r\n  color: darkgoldenrod;\r\n}\r\n\r\n.active{\r\n  color: royalblue;\r\n  font-weight: bold;\r\n  border: 2px solid #666;\r\n  border-bottom: 0;\r\n  margin-bottom: 8px;\r\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";t.r(n);t(0);var r=(()=>{let e,n,t,r,o;return{init:()=>{e=document.createElement("nav"),e.setAttribute("id","navbar"),n=document.createElement("ul"),t=document.createElement("li"),t.setAttribute("id","home"),t.classList.add("mynav-item","active"),t.innerHTML="Home",r=document.createElement("li"),r.setAttribute("id","about"),r.classList.add("mynav-item"),r.innerHTML="About",o=document.createElement("li"),o.setAttribute("id","contact"),o.classList.add("mynav-item"),o.innerHTML="Contact",e.appendChild(n),n.appendChild(t),n.appendChild(r),n.appendChild(o)},setTab:(e="home")=>{t.className="mynav-item",r.className="mynav-item",o.className="mynav-item","home"===e&&t.classList.add("active"),"about"===e&&r.classList.add("active"),"contact"===e&&o.classList.add("active")},getContent:()=>e,homeTab:()=>document.querySelector("#home"),aboutTab:()=>document.querySelector("#about"),contactTab:()=>document.querySelector("#contact")}})(),o=t.p+"7337fa9c76142377cc7704fb54ca0cd1.jpg";var i=function(){const e=document.createElement("div");e.setAttribute("id","content");const n=document.createElement("h1");n.classList.add("text-center"),n.innerHTML="Welcome To Ron De La McDons";const t=document.createElement("div");t.setAttribute("id","desc");const r=new Image;return r.src=o,r.classList.add("main-img"),e.appendChild(n),e.appendChild(t),t.appendChild(r),t.innerHTML+="<p class='text-center mt-2'>Welcome Ron de la McDonalds, fancy huh?</p>",e},a=t.p+"23cd666750447248ae449f3c02b6d507.jpg";var c=function(){const e=document.createElement("div");e.setAttribute("id","content");const n=document.createElement("h1");n.classList.add("text-center"),n.innerHTML="About Us";const t=document.createElement("div");t.setAttribute("id","desc");const r=new Image;return r.src=a,r.classList.add("main-img"),e.appendChild(n),e.appendChild(t),t.appendChild(r),t.innerHTML+='\n    <p class="text-small">Bah duhp bup bup baahh, I\'m Loving It!</p>\n    <p class="text-smile">O__.__O</p>\n    <p class="text-smile">\\_____/</p>',e};var s=function(){const e=document.createElement("div");e.setAttribute("id","content");const n=document.createElement("h1");n.classList.add("text-center"),n.innerHTML="Contact Us";const t=document.createElement("div");return t.setAttribute("id","desc"),t.innerHTML+="\n  <p class='mt-2'>Need to Reach US?</p>",e.appendChild(n),e.appendChild(t),e};function d(){const e=document.querySelector("#content");e&&e.parentNode.removeChild(e)}function u(){d(),r.setTab(),document.body.appendChild(i())}function l(){d(),r.setTab("about"),document.body.appendChild(c())}function m(){d(),r.setTab("contact"),document.body.appendChild(s())}r.init(),document.body.appendChild(r.getContent()),document.body.appendChild(i()),document.querySelector("#home").onclick=u,document.querySelector("#about").onclick=l,document.querySelector("#contact").onclick=m}]);