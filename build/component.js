/*! (C) WebReflection Mit Style License */
(function(e,t,n,r){"use strict";function q(e,t){for(var n=0,r=e.length;n<r;n++)J(e[n],t)}function R(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],$(r,c[z(r)])}function U(e){return function(t){g.call(L,t)&&(J(t,e),q(t.querySelectorAll(h),e))}}function z(e){var t=e.getAttribute("is");return d.call(l,t?t.toUpperCase():e.nodeName)}function W(e){var t=e.currentTarget,n=e.attrChange,r=e.prevValue,i=e.newValue;t.attributeChangedCallback&&e.attrName!=="style"&&t.attributeChangedCallback(e.attrName,n===e.ADDITION?null:r,n===e.REMOVAL?null:i)}function X(e){var t=U(e);return function(e){t(e.target)}}function V(e,t){var n=this;O.call(n,e,t),B.call(n,{target:n})}function $(e,t){N(e,t),I?I.observe(e,_):(H&&(e.setAttribute=V,e[i]=F(e),e.addEventListener(u,B)),e.addEventListener(o,W)),e.createdCallback&&(e.created=!0,e.createdCallback(),e.created=!1)}function J(e,t){var n,r=z(e),i="attached",s="detached";-1<r&&(C(e,c[r]),r=0,t===i&&!e[i]?(e[s]=!1,e[i]=!0,r=1):t===s&&!e[s]&&(e[i]=!1,e[s]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="extends",o="DOMAttrModified",u="DOMSubtreeModified",a=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,f=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],l=[],c=[],h="",p=t.documentElement,d=l.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},v=n.prototype,m=v.hasOwnProperty,g=v.isPrototypeOf,y=n.defineProperty,b=n.getOwnPropertyDescriptor,w=n.getOwnPropertyNames,E=n.getPrototypeOf,S=n.setPrototypeOf,x=!!n.__proto__,T=n.create||function K(e){return e?(K.prototype=e,new K):this},N=S||(x?function(e,t){return e.__proto__=t,e}:w&&b?function(){function e(e,t){for(var n,r=w(t),i=0,s=r.length;i<s;i++)n=r[i],m.call(e,n)||y(e,n,b(t,n))}return function(t,n){do e(t,n);while(n=E(n));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),C=S||x?function(e,t){g.call(t,e)||$(e,t)}:function(e,t){e[i]||(e[i]=n(!0),$(e,t))},k=e.MutationObserver||e.WebKitMutationObserver,L=(e.HTMLElement||e.Element||e.Node).prototype,A=L.cloneNode,O=L.setAttribute,M=t.createElement,_=k&&{attributes:!0,characterData:!0,attributeOldValue:!0},D=k||function(e){H=!1,p.removeEventListener(o,D)},P=!1,H=!0,B,j,F,I;k||(p.addEventListener(o,D),p.setAttribute(i,1),p.removeAttribute(i),H&&(B=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=F(t);for(s in r){if(!(s in n))return j(0,t,s,n[s],r[s],"ADDITION");if(r[s]!==n[s])return j(1,t,s,n[s],r[s],"MODIFICATION")}for(s in n)if(!(s in r))return j(2,t,s,n[s],r[s],"REMOVAL")}},j=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,W(o)},F=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){y=n.toUpperCase(),P||(P=!0,k?(I=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new k(function(r){for(var i,s,o=0,u=r.length;o<u;o++)i=r[o],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,s.attributeChangedCallback&&i.attributeName!=="style"&&s.attributeChangedCallback(i.attributeName,i.oldValue,s.getAttribute(i.attributeName)))})}(U("attached"),U("detached")),I.observe(t,{childList:!0,subtree:!0})):(t.addEventListener("DOMNodeInserted",X("attached")),t.addEventListener("DOMNodeRemoved",X("detached"))),t.createElement=function(e,n){var r,i=M.apply(t,arguments);return n&&i.setAttribute("is",e=n.toLowerCase()),r=d.call(l,e.toUpperCase()),-1<r&&$(i,c[r]),i},L.cloneNode=function(e){var t=A.call(this,!!e),n=z(t);return-1<n&&$(t,c[n]),e&&R(t.querySelectorAll(h)),t});if(-1<d.call(l,y))throw new Error("A "+n+" type is already registered");if(!a.test(y)||-1<d.call(f,y))throw new Error("The type "+n+" is invalid");var i=function(){return t.createElement(p,u&&y)},o=r||v,u=m.call(o,s),p=u?r[s]:y,g=l.push(y)-1,y;return h=h.concat(h.length?",":"",u?p+'[is="'+n.toLowerCase()+'"]':p),i.prototype=c[g]=m.call(o,"prototype")?o.prototype:T(L),q(t.querySelectorAll(h),"attached"),i}})(window,document,Object,"registerElement");
(function(){var h,l=this;function aa(a,b){var c=a.split("."),d=l;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function n(a){return"array"==m(a)}function ba(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var da="closure_uid_"+(1E9*Math.random()>>>0),ea=0;function fa(a,b,c){return a.call.apply(a.bind,arguments)}
function ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ga;return q.apply(null,arguments)}
function r(a,b){function c(){}c.prototype=b.prototype;a.b=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.X=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function s(){0!=ha&&(this[da]||(this[da]=++ea));this.J=this.J;this.W=this.W}var ha=0;s.prototype.J=!1;var ia;function t(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.g=!1;this.P=!0}t.prototype.stopPropagation=function(){this.g=!0};t.prototype.preventDefault=function(){this.defaultPrevented=!0;this.P=!1};var u="closure_listenable_"+(1E6*Math.random()|0),ja=0;function ka(a,b,c,d,e){this.f=a;this.w=null;this.src=b;this.type=c;this.s=!!d;this.u=e;this.key=++ja;this.l=this.r=!1}function v(a){a.l=!0;a.f=null;a.w=null;a.src=null;a.u=null};function w(a){w[" "](a);return a}w[" "]=function(){};function la(a){if(!ma.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(na,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(oa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(pa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(qa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ra,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(sa,"&#0;"));return a}var na=/&/g,oa=/</g,pa=/>/g,qa=/"/g,ra=/'/g,sa=/\x00/g,ma=/[\x00&<>"']/;function x(a,b){return a<b?-1:a>b?1:0};var y=Array.prototype,A=y.indexOf?function(a,b,c){return y.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ta=y.forEach?function(a,b,c){y.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ua=y.filter?function(a,b,c){return y.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in g){var z=g[k];b.call(c,z,k,a)&&(e[f++]=z)}return e};function B(a,b){var c=A(a,b),d;(d=0<=c)&&y.splice.call(a,c,1);return d}function va(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function wa(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}function xa(a,b){var c;a.classList?c=a.classList.contains(b):(c=wa(a),c=0<=A(c,b));return c}function C(a,b){a.classList?a.classList.add(b):xa(a,b)||(a.className+=0<a.className.length?" "+b:b)}function ya(a,b){a.classList?a.classList.remove(b):xa(a,b)&&(a.className=ua(wa(a),function(a){return a!=b}).join(" "))};function za(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var Aa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ba(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Aa.length;f++)c=Aa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function D(a){this.src=a;this.a={};this.q=0}D.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.q++);var g=E(a,b,d,e);-1<g?(b=a[g],c||(b.r=!1)):(b=new ka(b,this.src,f,!!d,e),b.r=c,a.push(b));return b};D.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=E(e,b,c,d);return-1<b?(v(e[b]),y.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.q--),!0):!1};
function F(a,b){var c=b.type;if(!(c in a.a))return!1;var d=B(a.a[c],b);d&&(v(b),0==a.a[c].length&&(delete a.a[c],a.q--));return d}D.prototype.O=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,v(d[e]);delete this.a[c];this.q--}return b};D.prototype.o=function(a,b,c,d){a=this.a[a.toString()];var e=-1;a&&(e=E(a,b,c,d));return-1<e?a[e]:null};
function E(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.l&&f.f==b&&f.s==!!c&&f.u==d)return e}return-1};function G(){}G.S=function(){return G.N?G.N:G.N=new G};G.prototype.V=0;var H;a:{var Ca=l.navigator;if(Ca){var Da=Ca.userAgent;if(Da){H=Da;break a}}H=""}function K(a){return-1!=H.indexOf(a)};var Ea=K("Opera")||K("OPR"),L=K("Trident")||K("MSIE"),M=K("Gecko")&&-1==H.toLowerCase().indexOf("webkit")&&!(K("Trident")||K("MSIE")),N=-1!=H.toLowerCase().indexOf("webkit");function Fa(){var a=l.document;return a?a.documentMode:void 0}var Ga=function(){var a="",b;if(Ea&&l.opera)return a=l.opera.version,"function"==m(a)?a():a;M?b=/rv\:([^\);]+)(\)|;)/:L?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:N&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(H))?a[1]:"");return L&&(b=Fa(),b>parseFloat(a))?String(b):a}(),Ha={};
function O(a){var b;if(!(b=Ha[a])){b=0;for(var c=String(Ga).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",z=RegExp("(\\d*)(\\D*)","g"),bb=RegExp("(\\d*)(\\D*)","g");do{var I=z.exec(g)||["","",""],J=bb.exec(k)||["","",""];if(0==I[0].length&&0==J[0].length)break;b=x(0==I[1].length?0:parseInt(I[1],10),0==J[1].length?0:parseInt(J[1],10))||x(0==I[2].length,0==J[2].length)||
x(I[2],J[2])}while(0==b)}b=Ha[a]=0<=b}return b}var Ia=l.document,P=Ia&&L?Fa()||("CSS1Compat"==Ia.compatMode?parseInt(Ga,10):5):void 0;var Ja=!L||L&&9<=P;!M&&!L||L&&L&&9<=P||M&&O("1.9.1");L&&O("9");function Ka(a,b){za(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in La?a.setAttribute(La[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var La={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Ma(a,b,c,d){function e(c){c&&b.appendChild(p(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var f=c[d];if(!ba(f)||ca(f)&&0<f.nodeType)e(f);else{var g;a:{if(f&&"number"==typeof f.length){if(ca(f)){g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"==m(f)){g="function"==typeof f.item;break a}}g=!1}ta(g?va(f):f,e)}}}function Na(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}function Oa(a){this.m=a||l.document||document}h=Oa.prototype;
h.d=function(a){return p(a)?this.m.getElementById(a):a};h.h=function(a,b,c){var d=this.m,e=arguments,f=e[0],g=e[1];if(!Ja&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',la(g.name),'"');if(g.type){f.push(' type="',la(g.type),'"');var k={};Ba(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=d.createElement(f);g&&(p(g)?f.className=g:n(g)?f.className=g.join(" "):Ka(f,g));2<e.length&&Ma(d,f,e,2);return f};h.createElement=function(a){return this.m.createElement(a)};h.createTextNode=function(a){return this.m.createTextNode(String(a))};
h.appendChild=function(a,b){a.appendChild(b)};h.append=function(a,b){Ma(9==a.nodeType?a:a.ownerDocument||a.document,a,arguments,1)};h.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
h.removeNode=Na;h.contains=function(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Pa=!L||L&&9<=P,Qa=L&&!O("9");!N||O("528");M&&O("1.9b")||L&&O("8")||Ea&&O("9.5")||N&&O("528");M&&!O("8")||L&&O("9");function Q(a,b){t.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.n=this.state=null;if(a){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(M){var e;a:{try{w(d.nodeName);e=!0;break a}catch(f){}e=!1}e||(d=null)}}else"mouseover"==c?d=
a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=N||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=N||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.state=a.state;this.n=a;a.defaultPrevented&&this.preventDefault()}}r(Q,t);Q.prototype.stopPropagation=function(){Q.b.stopPropagation.call(this);this.n.stopPropagation?this.n.stopPropagation():this.n.cancelBubble=!0};Q.prototype.preventDefault=function(){Q.b.preventDefault.call(this);var a=this.n;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Qa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var R="closure_lm_"+(1E6*Math.random()|0),Ra={},Sa=0;function Ta(a,b,c,d,e){if(n(b)){for(var f=0;f<b.length;f++)Ta(a,b[f],c,d,e);return null}c=Ua(c);if(a&&a[u])a=a.D(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=S(a);g||(a[R]=g=new D(a));c=g.add(b,c,!1,d,e);c.w||(d=Va(),c.w=d,d.src=a,d.f=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(Wa(b.toString()),d),Sa++);a=c}return a}
function Va(){var a=Xa,b=Pa?function(c){return a.call(b.src,b.f,c)}:function(c){c=a.call(b.src,b.f,c);if(!c)return c};return b}function Ya(a,b,c,d,e){if(n(b))for(var f=0;f<b.length;f++)Ya(a,b[f],c,d,e);else c=Ua(c),a&&a[u]?a.H(b,c,d,e):a&&(a=S(a))&&(b=a.o(b,c,!!d,e))&&T(b)}
function T(a){if("number"==typeof a||!a||a.l)return!1;var b=a.src;if(b&&b[u])return F(b.i,a);var c=a.type,d=a.w;b.removeEventListener?b.removeEventListener(c,d,a.s):b.detachEvent&&b.detachEvent(Wa(c),d);Sa--;(c=S(b))?(F(c,a),0==c.q&&(c.src=null,b[R]=null)):v(a);return!0}function Wa(a){return a in Ra?Ra[a]:Ra[a]="on"+a}function Za(a,b,c,d){var e=1;if(a=S(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.s==c&&!f.l&&(e&=!1!==$a(f,d))}return Boolean(e)}
function $a(a,b){var c=a.f,d=a.u||a.src;a.r&&T(a);return c.call(d,b)}
function Xa(a,b){if(a.l)return!0;if(!Pa){var c;if(!(c=b))a:{c=["window","event"];for(var d=l,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new Q(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,k=e.length-1;!c.g&&0<=k;k--)c.currentTarget=e[k],d&=Za(e[k],f,!0,c);for(k=0;!c.g&&k<e.length;k++)c.currentTarget=
e[k],d&=Za(e[k],f,!1,c)}return d}return $a(a,new Q(b,this))}function S(a){a=a[R];return a instanceof D?a:null}var ab="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ua(a){if("function"==m(a))return a;a[ab]||(a[ab]=function(b){return a.handleEvent(b)});return a[ab]};function U(a){s.call(this);this.L=a;this.v={}}r(U,s);var cb=[];U.prototype.D=function(a,b,c,d){n(b)||(b&&(cb[0]=b.toString()),b=cb);for(var e=0;e<b.length;e++){var f=Ta(a,b[e],c||this.handleEvent,d||!1,this.L||this);if(!f)break;this.v[f.key]=f}return this};U.prototype.H=function(a,b,c,d,e){if(n(b))for(var f=0;f<b.length;f++)this.H(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.L||this,c=Ua(c),d=!!d,b=a&&a[u]?a.o(b,c,d,e):a?(a=S(a))?a.o(b,c,d,e):null:null,b&&(T(b),delete this.v[b.key]);return this};
U.prototype.O=function(){za(this.v,T);this.v={}};U.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function V(){s.call(this);this.i=new D(this);this.R=this;this.F=null}r(V,s);V.prototype[u]=!0;h=V.prototype;h.G=function(a){this.F=a};h.addEventListener=function(a,b,c,d){Ta(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){Ya(this,a,b,c,d)};
h.dispatchEvent=function(a){var b,c=this.F;if(c)for(b=[];c;c=c.F)b.push(c);var c=this.R,d=a.type||a;if(p(a))a=new t(a,c);else if(a instanceof t)a.target=a.target||c;else{var e=a;a=new t(d,c);Ba(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.g&&0<=g;g--)f=a.currentTarget=b[g],e=W(f,d,!0,a)&&e;a.g||(f=a.currentTarget=c,e=W(f,d,!0,a)&&e,a.g||(e=W(f,d,!1,a)&&e));if(b)for(g=0;!a.g&&g<b.length;g++)f=a.currentTarget=b[g],e=W(f,d,!1,a)&&e;return e};h.D=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
h.H=function(a,b,c,d){return this.i.remove(String(a),b,c,d)};function W(a,b,c,d){b=a.i.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.l&&g.s==c){var k=g.f,z=g.u||g.src;g.r&&F(a.i,g);e=!1!==k.call(z,d)&&e}}return e&&0!=d.P}h.o=function(a,b,c,d){return this.i.o(String(a),b,c,d)};function X(a){V.call(this);a||(a=ia||(ia=new Oa));this.K=a;this.M=null;this.j=!1;this.c=null;this.p=void 0;this.A=this.B=this.k=null}r(X,V);h=X.prototype;h.U=G.S();h.d=function(){return this.c};h.getParent=function(){return this.k};h.G=function(a){if(this.k&&this.k!=a)throw Error("Method not supported");X.b.G.call(this,a)};h.h=function(){this.c=this.K.createElement("div")};h.C=function(a){this.c=a};h.t=function(){this.j=!0;db(this,function(a){!a.j&&a.d()&&a.t()})};
function eb(a){db(a,function(a){a.j&&eb(a)});a.p&&a.p.O();a.j=!1}function db(a,b){a.B&&ta(a.B,b,void 0)}h.removeChild=function(a,b){if(a){var c=p(a)?a:a.M||(a.M=":"+(a.U.V++).toString(36)),d;this.A&&c?(d=this.A,d=(c in d?d[c]:void 0)||null):d=null;a=d;if(c&&a){d=this.A;c in d&&delete d[c];B(this.B,a);b&&(eb(a),a.c&&Na(a.c));c=a;if(null==c)throw Error("Unable to set parent component");c.k=null;X.b.G.call(c,null)}}if(!a)throw Error("Child is not in parent component");return a};function Y(a,b){null==a&&(a=null);Y.b.constructor.call(this,a);this.e=null!=b?[b]:[]}r(Y,X);h=Y.prototype;h.Q="an-component-disabled";h.enabled=!0;h.e=null;h.h=function(){Y.b.h.apply(this,arguments);var a,b,c,d,e;null==a&&(a=this.d());if(a&&null!=this.e&&0!=this.e.length)for(e=this.e,c=0,d=e.length;c<d;c++)b=e[c],C(a,b)};h.isEnabled=function(){return this.enabled};function Z(a,b,c){this.content=a;Z.b.constructor.call(this,c);this.I=!0}r(Z,Y);Z.prototype.h=function(){Z.b.h.apply(this,arguments);return this.C(this.d())};Z.prototype.C=function(a){Z.b.C.call(this,a);C(a,"an-btn");var b=this.enabled;this.enabled=b;a=this.Q;var b=!b,c,d,e;"string"===typeof a&&(a=[a]);d=0;for(e=a.length;d<e;d++)if(c=a[d],b?0<=A(this.e,c)||this.e.push(c):B(this.e,c),this.d()){var f=this.d();b?C(f,c):ya(f,c)}fb(this,this.content)};
function fb(a,b,c){a.content=b;null==c&&(c=null);null!=c&&(a.I=c);if(b=a.d())if(a.I)b.innerHTML=a.content;else if(a=a.content,"textContent"in b)b.textContent=a;else if(3==b.nodeType)b.data=a;else if(b.firstChild&&3==b.firstChild.nodeType){for(;b.lastChild!=b.firstChild;)b.removeChild(b.lastChild);b.firstChild.data=a}else{for(;c=b.firstChild;)b.removeChild(c);b.appendChild((9==b.nodeType?b:b.ownerDocument||b.document).createTextNode(String(a)))}}
Z.prototype.t=function(){Z.b.t.apply(this,arguments);this.p||(this.p=new U(this));this.p.D(this.d(),"click",this.T)};Z.prototype.T=function(){this.isEnabled()&&console.log("clicked")};var gb;function $(){this.detachedCallback=q(this.detachedCallback,this);this.attachedCallback=q(this.attachedCallback,this);$.b.constructor.apply(this,arguments)}r($,HTMLElement);aa("an.ui.Button.WebComponent",$);$.prototype.createdCallback=function(){this.button=new Z("")};$.prototype.createdCallback=$.prototype.createdCallback;
$.prototype.attachedCallback=function(){var a;(a=this.getAttribute("content"))?fb(this.button,a,!0):fb(this.button,this.innerHTML,!0);this.innerHTML="";a=this.button;if(a.j)throw Error("Component already rendered");a.c||a.h();this?this.insertBefore(a.c,null):a.K.m.body.appendChild(a.c);a.k&&!a.k.j||a.t()};$.prototype.attachedCallback=$.prototype.attachedCallback;$.prototype.detachedCallback=function(){eb(this.button)};$.prototype.detachedCallback=$.prototype.detachedCallback;
gb=document.registerElement("sbks-button",{prototype:$.prototype});aa("SBKSButton",gb);})();
