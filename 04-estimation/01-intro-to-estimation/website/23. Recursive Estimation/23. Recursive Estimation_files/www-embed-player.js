(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function ea(){ea=function(){};
da.Symbol||(da.Symbol=fa)}
function ha(a,b){this.f=a;ba(this,"description",{configurable:!0,writable:!0,value:b})}
ha.prototype.toString=function(){return this.f};
var fa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ha("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ia(){ea();var a=da.Symbol.iterator;a||(a=da.Symbol.iterator=da.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(aa(this))}});
ia=function(){}}
function ja(a){ia();a={next:a};a[da.Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ka(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}ma=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=ma;
function t(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.L=b.prototype}
function u(a,b){if(b){for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
function sa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=sa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=sa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function w(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)w(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ta});
u("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=p(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!w(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!w(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&w(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&w(k,g)&&w(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&w(k,g)&&w(k[g],this.f)?delete k[g][this.f]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ja(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&w(h.g,l))for(var q=0;q<m.length;q++){var v=m[q];if(k!==k&&v.key!==v.key||k===v.key)return{id:l,list:m,index:q,u:v}}return{id:l,list:m,index:-1,u:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
ia();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.u&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.u.previous.next=h.u.next,h.u.next.previous=h.u.previous,h.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).u};
e.prototype.get=function(h){return(h=d(this,h).u)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)w(b,d)&&c.push([d,b[d]]);return c}});
u("Set",function(a){function b(c){this.f=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ia();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==sa(this,b,"includes").indexOf(b,c||0)}});
u("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.A),reject:g(this.j)}};
b.prototype.A=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.D(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.w(g):this.l(g)}};
b.prototype.w=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.F(h,g):this.l(g)};
b.prototype.j=function(g){this.m(2,g)};
b.prototype.l=function(g){this.m(1,g)};
b.prototype.m=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.B()};
b.prototype.B=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.D=function(g){var h=this.i();g.aa(h.resolve,h.reject)};
b.prototype.F=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(v,r){return"function"==typeof v?function(B){try{l(v(B))}catch(K){m(K)}}:r}
var l,m,q=new b(function(v,r){l=v;m=r});
this.aa(k(g,l),k(h,m));return q};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.aa=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=p(g),m=l.next();!m.done;m=l.next())d(m.value).aa(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(l,m){function q(B){return function(K){v[B]=K;r--;0==r&&l(v)}}
var v=[],r=0;do v.push(void 0),r++,d(k.value).aa(q(v.length-1),m),k=h.next();while(!k.done)})};
return b});
var ua=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=la(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
u("Reflect.construct",function(){return ua});
var x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var va=/^[\w+/_-]+[=]{0,2}$/,wa=null;function z(a,b){for(var c=a.split("."),d=b||x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function xa(){}
function ya(a){a.ia=void 0;a.getInstance=function(){return a.ia?a.ia:a.ia=new a}}
function za(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Aa(a){return"array"==za(a)}
function Ba(a){var b=za(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==za(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ea(a){return Object.prototype.hasOwnProperty.call(a,Fa)&&a[Fa]||(a[Fa]=++Ga)}
var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)}
function Ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function A(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A=Ha:A=Ja;return A.apply(null,arguments)}
function Ka(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var C=Date.now||function(){return+new Date};
function La(a,b){y(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function Ma(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;var d=b?c.index:a.length;try{return{xa:a.slice(0,d)+"&act=1"+a.slice(d),za:decodeURIComponent(c[1])}}catch(f){return null}}if(/[?&]ae=2(&|$)/.test(a)){c=a;d="";if(b){var e=a.indexOf("&adurl=");0<e&&(c=a.slice(0,e),d=a.slice(e))}return{xa:c+"&act=1"+d,za:c+"&dct=1"+d}}return null}
;function E(a){if(Error.captureStackTrace)Error.captureStackTrace(this,E);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
D(E,Error);E.prototype.name="CustomError";function Na(a){var b=a.url,c=a.vb;this.j=!!a.bb;this.g=Ma(b,c);a=/[?&]dsh=1(&|$)/.test(b);this.h=!a&&/[?&]ae=1(&|$)/.test(b);this.i=!a&&/[?&]ae=2(&|$)/.test(b);this.f=/[?&]adurl=([^&]*)/.exec(b)}
;var Oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Pa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Qa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ra=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Sa(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Ta(a,b){var c=Oa(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Va(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Wa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Xa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ya(a,b){var c=Ba(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Za(a){var b=$a,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ab(a){for(var b in a)return!1;return!0}
function bb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function cb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function db(a){var b={},c;for(c in a)b[c]=a[c];return b}
function eb(a){var b=za(a);if("object"==b||"array"==b){if(Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=eb(a[c]);return b}return a}
var fb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<fb.length;f++)c=fb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function hb(a,b){this.f=a===ib&&b||"";this.g=jb}
hb.prototype.J=!0;hb.prototype.I=function(){return this.f};
function kb(){var a=lb;return a instanceof hb&&a.constructor===hb&&a.g===jb?a.f:"type_error:Const"}
var jb={},ib={},lb=new hb(ib,"");function mb(a,b){this.f=a===nb&&b||"";this.g=ob}
mb.prototype.J=!0;mb.prototype.I=function(){return this.f.toString()};
mb.prototype.ha=!0;mb.prototype.ea=function(){return 1};
function pb(a){if(a instanceof mb&&a.constructor===mb&&a.g===ob)return a.f;za(a);return"type_error:TrustedResourceUrl"}
var ob={},nb={};var qb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function rb(a,b){if(b)a=a.replace(sb,"&amp;").replace(tb,"&lt;").replace(ub,"&gt;").replace(vb,"&quot;").replace(wb,"&#39;").replace(xb,"&#0;");else{if(!yb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(sb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(tb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ub,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(vb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(wb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(xb,"&#0;"))}return a}
var sb=/&/g,tb=/</g,ub=/>/g,vb=/"/g,wb=/'/g,xb=/\x00/g,yb=/[\x00&<>"']/;function G(a,b){this.f=a===zb&&b||"";this.g=Ab}
G.prototype.J=!0;G.prototype.I=function(){return this.f.toString()};
G.prototype.ha=!0;G.prototype.ea=function(){return 1};
function Bb(a){if(a instanceof G&&a.constructor===G&&a.g===Ab)return a.f;za(a);return"type_error:SafeUrl"}
var Cb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Db(a){if(a instanceof G)return a;a="object"==typeof a&&a.J?a.I():String(a);Cb.test(a)||(a="about:invalid#zClosurez");return new G(zb,a)}
var Ab={},zb={};var Eb;a:{var Fb=x.navigator;if(Fb){var Gb=Fb.userAgent;if(Gb){Eb=Gb;break a}}Eb=""}function H(a){return-1!=Eb.indexOf(a)}
;function Hb(){this.f="";this.h=Ib;this.g=null}
Hb.prototype.ha=!0;Hb.prototype.ea=function(){return this.g};
Hb.prototype.J=!0;Hb.prototype.I=function(){return this.f.toString()};
function Jb(a){if(a instanceof Hb&&a.constructor===Hb&&a.h===Ib)return a.f;za(a);return"type_error:SafeHtml"}
var Ib={};function Lb(a,b){var c=new Hb;c.f=a;c.g=b;return c}
Lb("<!DOCTYPE html>",0);var Mb=Lb("",0);Lb("<br>",0);function Nb(a,b){var c=b instanceof G?b:Db(b);a.href=Bb(c)}
function Ob(a,b){a.src=pb(b);if(null===wa)b:{var c=x.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&va.test(c)){wa=c;break b}wa=""}c=wa;c&&a.setAttribute("nonce",c)}
;function Pb(a){return a=rb(a,void 0)}
function Qb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Rb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I(a){return a?decodeURI(a):a}
function J(a,b){return b.match(Rb)[a]||null}
function Sb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Sb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Tb(a){var b=[],c;for(c in a)Sb(c,a[c],b);return b.join("&")}
function Ub(a,b){var c=Tb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var Vb=/#|$/;function Wb(a,b){var c=a.search(Vb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;var Xb=H("Opera"),Yb=H("Trident")||H("MSIE"),Zb=H("Edge"),$b=H("Gecko")&&!(-1!=Eb.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),ac=-1!=Eb.toLowerCase().indexOf("webkit")&&!H("Edge");function bc(){var a=x.document;return a?a.documentMode:void 0}
var cc;a:{var dc="",ec=function(){var a=Eb;if($b)return/rv:([^\);]+)(\)|;)/.exec(a);if(Zb)return/Edge\/([\d\.]+)/.exec(a);if(Yb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ac)return/WebKit\/(\S+)/.exec(a);if(Xb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ec&&(dc=ec?ec[1]:"");if(Yb){var fc=bc();if(null!=fc&&fc>parseFloat(dc)){cc=String(fc);break a}}cc=dc}var gc=cc,hc;if(x.document&&Yb){var ic=bc();hc=ic?ic:parseInt(gc,10)||void 0}else hc=void 0;var jc=hc;var kc={},lc=null;var L=window;function mc(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,nc[b]?b=nc[b]:(b=String(b),nc[b]||(c=/function\s+([^\(]+)/m.exec(b),nc[b]=c?c[1]:"[Anonymous]"),b=nc[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var nc={};function oc(a){this.f=a||{cookie:""}}
n=oc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.xb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ma}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(C()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=qb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ma:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=qb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var pc=new oc("undefined"==typeof document?null:document);var qc=!Yb||9<=Number(jc);function rc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=rc.prototype;n.clone=function(){return new rc(this.x,this.y)};
n.equals=function(a){return a instanceof rc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function sc(a,b){this.width=a;this.height=b}
n=sc.prototype;n.clone=function(){return new sc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function tc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function uc(a,b){Xa(b,function(c,d){c&&"object"==typeof c&&c.J&&(c=c.I());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:vc.hasOwnProperty(d)?a.setAttribute(vc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var vc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function wc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!qc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Pb(g.name),'"');if(g.type){f.push(' type="',Pb(g.type),'"');var h={};gb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=xc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):uc(f,g));2<d.length&&yc(e,f,d);return f}
function yc(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Ba(f)||Da(f)&&0<f.nodeType?d(f):F(zc(f)?Ua(f):f,d)}}
function xc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function zc(a){if(a&&"number"==typeof a.length){if(Da(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ca(a))return"function"==typeof a.item}return!1}
function Ac(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Bc(a){Cc();return new mb(nb,a)}
var Cc=xa;function Dc(a){var b=Ec;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Fc(){var a=[];Dc(function(b){a.push(b)});
return a}
var Ec={cb:"allow-forms",eb:"allow-modals",fb:"allow-orientation-lock",gb:"allow-pointer-lock",hb:"allow-popups",ib:"allow-popups-to-escape-sandbox",jb:"allow-presentation",kb:"allow-same-origin",lb:"allow-scripts",mb:"allow-top-navigation",nb:"allow-top-navigation-by-user-activation"},Gc=Wa(function(){return Fc()});
function Hc(){var a=xc(document,"IFRAME"),b={};F(Gc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Ic(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Jc=(new Date).getTime();function Kc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");
if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Lc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(q){for(var v=g,r=0;64>r;r+=4)v[r/4]=q[r]<<24|q[r+1]<<16|q[r+2]<<8|q[r+3];for(r=16;80>r;r++)q=v[r-3]^v[r-8]^v[r-14]^v[r-16],v[r]=(q<<1|q>>>31)&4294967295;q=e[0];var B=e[1],K=e[2],na=e[3],Vc=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var Ia=na^B&(K^na);var Kb=1518500249}else Ia=B^K^na,Kb=1859775393;else 60>r?(Ia=B&K|na&(B|K),Kb=2400959708):(Ia=B^K^na,Kb=3395469782);Ia=((q<<5|q>>>27)&4294967295)+Ia+Vc+Kb+v[r]&4294967295;Vc=na;na=K;K=(B<<30|B>>>2)&4294967295;B=q;q=Ia}e[0]=e[0]+q&4294967295;e[1]=
e[1]+B&4294967295;e[2]=e[2]+K&4294967295;e[3]=e[3]+na&4294967295;e[4]=e[4]+Vc&4294967295}
function c(q,v){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var r=[],B=0,K=q.length;B<K;++B)r.push(q.charCodeAt(B));q=r}v||(v=q.length);r=0;if(0==l)for(;r+64<v;)b(q.slice(r,r+64)),r+=64,m+=64;for(;r<v;)if(f[l++]=q[r++],m++,64==l)for(l=0,b(f);r+64<v;)b(q.slice(r,r+64)),r+=64,m+=64}
function d(){var q=[],v=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=v&255,v>>>=8;b(f);for(r=v=0;5>r;r++)for(var B=24;0<=B;B-=8)q[v++]=e[r]>>B&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ya:function(){for(var q=d(),v="",r=0;r<q.length;r++)v+="0123456789ABCDEF".charAt(Math.floor(q[r]/16))+"0123456789ABCDEF".charAt(q[r]%16);return v}}}
;function Mc(a,b,c){var d=[],e=[];if(1==(Aa(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),Nc(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=Nc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Nc(a){var b=Lc();b.update(a);return b.ya().toLowerCase()}
;function Oc(a){var b=Kc(String(x.location.href)),c;(c=x.__SAPISID||x.__APISID||x.__OVERRIDE_SID)?c=!0:(c=new oc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?x.__SAPISID:x.__APISID,c||(c=new oc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(x.location.href);return d&&c&&b?[b,Mc(Kc(d),c,a||null)].join(" "):null}return null}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
function Pc(){this.g=[];this.f=-1}
Pc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Pc.prototype.get=function(a){return!!this.g[a]};
function Qc(a){-1==a.f&&(a.f=Ra(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Rc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Rc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Sc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Tc(a){x.setTimeout(function(){throw a;},0)}
var Uc;
function Wc(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=xc(document,"IFRAME");e.style.display="none";e.src=pb(new mb(nb,kb())).toString();document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Jb(Mb));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=A(function(k){if(("*"==h||
k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.la;c.la=null;e()}};
return function(e){d.next={la:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Xc(){this.g=this.f=null}
var Zc=new Rc(function(){return new Yc},function(a){a.reset()});
Xc.prototype.add=function(a,b){var c=Zc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Xc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Yc(){this.next=this.scope=this.f=null}
Yc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Yc.prototype.reset=function(){this.next=this.scope=this.f=null};function $c(a,b){ad||bd();cd||(ad(),cd=!0);dd.add(a,b)}
var ad;function bd(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);ad=function(){a.then(ed)}}else ad=function(){var b=ed;
!Ca(x.setImmediate)||x.Window&&x.Window.prototype&&!H("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(Uc||(Uc=Wc()),Uc(b)):x.setImmediate(b)}}
var cd=!1,dd=new Xc;function ed(){for(var a;a=dd.remove();){try{a.f.call(a.scope)}catch(b){Tc(b)}Sc(Zc,a)}cd=!1}
;function fd(){this.g=-1}
;function gd(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
D(gd,fd);gd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function hd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
gd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)hd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){hd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){hd(this,e);f=0;break}}this.h=f;this.j+=b}};
gd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;hd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function M(){this.g=this.g;this.B=this.B}
M.prototype.g=!1;M.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function id(a,b){a.g?b():(a.B||(a.B=[]),a.B.push(b))}
M.prototype.o=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function jd(a){a&&"function"==typeof a.dispose&&a.dispose()}
function kd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ba(d)?kd.apply(null,d):jd(d)}}
;function ld(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function md(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function nd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:ld(a).match(/\S+/g)||[],c=0<=Oa(c,b);return c}
function od(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):nd(a,"inverted-hdpi")&&md(a,Pa(a.classList?a.classList:ld(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var pd="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function qd(){}
qd.prototype.next=function(){throw pd;};
qd.prototype.G=function(){return this};
function rd(a){if(a instanceof qd)return a;if("function"==typeof a.G)return a.G(!1);if(Ba(a)){var b=0,c=new qd;c.next=function(){for(;;){if(b>=a.length)throw pd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function sd(a,b){if(Ba(a))try{F(a,b,void 0)}catch(c){if(c!==pd)throw c;}else{a=rd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==pd)throw c;}}}
function td(a){if(Ba(a))return Ua(a);a=rd(a);var b=[];sd(a,function(c){b.push(c)});
return b}
;function ud(a,b){this.h={};this.f=[];this.H=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ud)for(c=vd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function vd(a){wd(a);return a.f.concat()}
n=ud.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||xd;wd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function xd(a,b){return a===b}
n.isEmpty=function(){return 0==this.g};
n.clear=function(){this.h={};this.H=this.g=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.H++,this.f.length>2*this.g&&wd(this),!0):!1};
function wd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.H++);this.h[a]=b};
n.forEach=function(a,b){for(var c=vd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new ud(this)};
n.G=function(a){wd(this);var b=0,c=this.H,d=this,e=new qd;e.next=function(){if(c!=d.H)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw pd;var f=d.f[b++];return a?f:d.h[f]};
return e};function yd(a){var b=[];zd(new Ad,a,b);return b.join("")}
function Ad(){}
function zd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),zd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Bd(d,c),c.push(":"),zd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Bd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Cd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Dd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Bd(a,b){b.push('"',a.replace(Dd,function(c){var d=Cd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Cd[c]=d);return d}),'"')}
;function Ed(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function N(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=xa)try{var b=this;a.call(void 0,function(c){Fd(b,2,c)},function(c){Fd(b,3,c)})}catch(c){Fd(this,3,c)}}
function Gd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Gd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Hd=new Rc(function(){return new Gd},function(a){a.reset()});
function Id(a,b,c){var d=Hd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Jd(a){return new N(function(b,c){c(a)})}
N.prototype.then=function(a,b,c){return Kd(this,Ca(a)?a:null,Ca(b)?b:null,c)};
N.prototype.$goog_Thenable=!0;function Ld(a,b){return Kd(a,null,b,void 0)}
N.prototype.cancel=function(a){if(0==this.f){var b=new Md(a);$c(function(){Nd(this,b)},this)}};
function Nd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Nd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Od(c),Pd(c,e,3,b)))}a.h=null}else Fd(a,3,b)}
function Qd(a,b){a.g||2!=a.f&&3!=a.f||Rd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Kd(a,b,c,d){var e=Id(null,null,null);e.f=new N(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Md?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Qd(a,e);return e.f}
N.prototype.w=function(a){this.f=0;Fd(this,2,a)};
N.prototype.A=function(a){this.f=0;Fd(this,3,a)};
function Fd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.w,f=a.A;if(d instanceof N){Qd(d,Id(e||xa,f||null,a));var g=!0}else if(Ed(d))d.then(e,f,a),g=!0;else{if(Da(d))try{var h=d.then;if(Ca(h)){Sd(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.m=c,a.f=b,a.h=null,Rd(a),3!=b||c instanceof Md||Td(a,c))}}
function Sd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Rd(a){a.l||(a.l=!0,$c(a.B,a))}
function Od(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
N.prototype.B=function(){for(var a;a=Od(this);)Pd(this,a,this.f,this.m);this.l=!1};
function Pd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Ud(b,c,d);else try{b.h?b.g.call(b.context):Ud(b,c,d)}catch(e){Vd.call(null,e)}Sc(Hd,b)}
function Ud(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Td(a,b){a.j=!0;$c(function(){a.j&&Vd.call(null,b)})}
var Vd=Tc;function Md(a){E.call(this,a)}
D(Md,E);Md.prototype.name="cancel";function O(a){M.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
D(O,M);n=O.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Wd(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Sa(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.N(b)}}
n.N=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=xa):(c&&Ta(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.M=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Xd(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.N(c)}}return 0!=e}return!1};
function Xd(a,b,c){$c(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(F(b,this.N,this),delete this.h[a])}else this.f.length=0,this.h={}};
n.o=function(){O.L.o.call(this);this.clear();this.i.length=0};function Yd(a){this.f=a}
Yd.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,yd(b))};
Yd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Yd.prototype.remove=function(a){this.f.remove(a)};function Zd(a){this.f=a}
D(Zd,Yd);function $d(a){this.data=a}
function ae(a){return void 0===a||a instanceof $d?a:new $d(a)}
Zd.prototype.set=function(a,b){Zd.L.set.call(this,a,ae(b))};
Zd.prototype.g=function(a){a=Zd.L.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Zd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function be(a){this.f=a}
D(be,Zd);be.prototype.set=function(a,b,c){if(b=ae(b)){if(c){if(c<C()){be.prototype.remove.call(this,a);return}b.expiration=c}b.creation=C()}be.L.set.call(this,a,b)};
be.prototype.g=function(a){var b=be.L.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<C()||c&&c>C())be.prototype.remove.call(this,a);else return b}};function ce(){}
;function de(){}
D(de,ce);de.prototype.clear=function(){var a=td(this.G(!0)),b=this;F(a,function(c){b.remove(c)})};function ee(a){this.f=a}
D(ee,de);n=ee.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.G=function(a){var b=0,c=this.f,d=new qd;d.next=function(){if(b>=c.length)throw pd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function fe(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
D(fe,ee);function ge(a,b){this.g=a;this.f=null;if(Yb&&!(9<=Number(jc))){he||(he=new ud);this.f=he.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),he.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
D(ge,de);var ie={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},he=null;function je(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ie[b]})}
n=ge.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(je(a),b);ke(this)};
n.get=function(a){a=this.f.getAttribute(je(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(je(a));ke(this)};
n.G=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new qd;d.next=function(){if(b>=c.length)throw pd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ke(this)};
function ke(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function le(a,b){this.g=a;this.f=b+"::"}
D(le,de);le.prototype.set=function(a,b){this.g.set(this.f+a,b)};
le.prototype.get=function(a){return this.g.get(this.f+a)};
le.prototype.remove=function(a){this.g.remove(this.f+a)};
le.prototype.G=function(a){var b=this.g.G(!0),c=this,d=new qd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function me(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var ne=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",ne,void 0);function P(a){me(ne,arguments)}
function Q(a,b){return a in ne?ne[a]:b}
function oe(){return Q("PLAYER_CONFIG",{})}
function pe(a){var b=ne.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;function qe(){var a=re;z("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a,void 0)}
function se(a){y("yt.ads.biscotti.lastId_",a,void 0)}
;var te=[];function ue(a){te.forEach(function(b){return b(a)})}
function ve(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){we(b),ue(b)}}:a}
function we(a){var b=z("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),P("ERRORS",b))}
function xe(a){var b=z("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),P("ERRORS",b))}
;function ye(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Aa(b[f])?Va(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};we(h)}}}return b}
function ze(a){var b=[];Xa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Aa(c)?f=c:f=[c];F(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ae(a){"?"==a.charAt(0)&&(a=a.substr(1));return ye(a)}
function Be(a,b){return Ce(a,b||{},!0)}
function Ce(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ae(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Ub(a,e)+d}
;function De(a){var b=Ee;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Fe(b),Ge(b));b.ca_type="image";a&&(b.bid=a);return b}
function Fe(a){var b={};b.dt=Jc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function Ge(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(q){}try{var e=b.outerWidth;var f=b.outerHeight}catch(q){}try{var g=b.innerWidth;var h=b.innerHeight}catch(q){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new sc(l.clientWidth,l.clientHeight)).round()}catch(q){m=new sc(-12245933,-12245933)}k=m;m={};l=new Pc;x.SVGElement&&
x.document.createElementNS&&l.set(0);c=Hc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);x.crypto&&x.crypto.subtle&&l.set(3);x.TextDecoder&&x.TextEncoder&&l.set(4);l=Qc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!L.WebGLRenderingContext,m}
var Ee=new function(){var a=window.document;this.f=window;this.g=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return ze(De(a))},void 0);C();function R(a){a=He(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Ie(a,b){var c=He(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function He(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
;var Je=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Ke(){if(!Je)return null;var a=Je();return"open"in a?a:null}
function Le(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function S(a,b){Ca(a)&&(a=ve(a));return window.setTimeout(a,b)}
function T(a){window.clearTimeout(a)}
;var Me={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ne="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Oe=!1;
function Pe(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(1,a),e=I(J(3,a));d&&e?(d=c,c=a.match(Rb),d=d.match(Rb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?I(J(3,c))==e&&(Number(J(4,c))||null)==(Number(J(4,a))||null):!0;d=R("web_ajax_ignore_global_headers_if_set");for(var f in Me)e=Q(Me[f]),!e||!c&&!Qe(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Qe(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Qe(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Qe(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=ze(De(void 0));return b}
function Re(a){var b=window.location.search,c=I(J(3,a)),d=I(J(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ae(b),f={};F(Ne,function(g){e[g]&&(f[g]=e[g])});
return Ce(a,f||{},!1)}
function Qe(a,b){var c=Q("CORS_HEADER_WHITELIST")||{},d=I(J(3,a));return d?(c=c[d])?0<=Oa(c,b):!1:!0}
function Se(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Te(a,b);var d=Ue(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&T(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||x;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ja&&b.ja.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.qa&&0<b.timeout&&(f=S(function(){e||(e=!0,T(f),b.qa.call(b.context||x))},b.timeout))}else Ve(a,b)}
function Ve(a,b){var c=b.format||"JSON";a=Te(a,b);var d=Ue(a,b),e=!1,f,g=We(a,function(h){if(!e){e=!0;f&&T(f);var k=Le(h),l=null,m=400<=h.status&&500>h.status,q=500<=h.status&&600>h.status;if(k||m||q)l=Xe(c,h,b.rb);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};m=b.context||x;k?b.onSuccess&&b.onSuccess.call(m,h,l):b.onError&&b.onError.call(m,h,l);b.ja&&b.ja.call(m,h,l)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.O&&0<b.timeout&&(f=S(function(){e||(e=!0,g.abort(),T(f),b.O.call(b.context||x,g))},b.timeout));
return g}
function Te(a,b){b.ub&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.ab;d&&(d[c]&&delete d[c],a=Be(a,d));return a}
function Ue(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=Q("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.tb||I(J(3,a))&&!b.withCredentials&&I(J(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ae(e),gb(e,f),e=b.ra&&"JSON"==b.ra?JSON.stringify(e):Tb(e));f=e||f&&!ab(f);!Oe&&f&&"POST"!=b.method&&(Oe=!0,we(Error("AJAX request with postData should use POST")));
return e}
function Xe(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ye(b):null)d={},F(b.getElementsByTagName("*"),function(e){d[e.tagName]=Ze(e)})}c&&$e(d);
return d}
function $e(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Lb(a[b],null);a[c]=d}else $e(a[b])}}
function Ye(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ze(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function We(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ve(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ke();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=Re(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Pe(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var af={},bf=0;
function cf(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Eb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof G||(a="object"==typeof a&&a.J?a.I():String(a),Cb.test(a)||(a="about:invalid#zClosurez"),a=new G(zb,a)),b=Bb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Hb?a=b:(d="object"==typeof b,a=null,d&&b.ha&&(a=b.ea()),b=rb(d&&b.J?b.I():String(b)),a=Lb(b,a)),a=Jb(a).toString(),a=encodeURIComponent(String(yd(a)))),/^[\s\xa0]*$/.test(a)||(a=wc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?We(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?We(a,b,"GET","",d):df(a,b)||ef(a,b))}
function df(a,b){if(!pe("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(pe("use_sonic_js_library_for_v4_support")){a:{try{var c=new Na({url:a,bb:!0});if(c.j?c.h&&c.f&&c.f[1]||c.i:c.g){var d=I(J(5,a));var e=!(!d||!d.endsWith("/aclk")||"1"!==Wb(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=I(J(5,a)),!e||-1==e.indexOf("/aclk")||"1"!==Wb(a,"ae")||"1"!==Wb(a,"act"))return!1;return ff(a)?(b&&b(),!0):!1}
function ff(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function ef(a,b){var c=new Image,d=""+bf++;af[d]=c;c.onload=c.onerror=function(){b&&af[d]&&b();delete af[d]};
c.src=a}
;var gf=z("ytPubsubPubsubInstance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.N;O.prototype.publish=O.prototype.M;O.prototype.clear=O.prototype.clear;y("ytPubsubPubsubInstance",gf,void 0);var hf=z("ytPubsubPubsubSubscribedKeys")||{};y("ytPubsubPubsubSubscribedKeys",hf,void 0);var jf=z("ytPubsubPubsubTopicToKeys")||{};y("ytPubsubPubsubTopicToKeys",jf,void 0);var kf=z("ytPubsubPubsubIsSynchronous")||{};y("ytPubsubPubsubIsSynchronous",kf,void 0);
function lf(a,b){var c=mf();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){hf[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{kf[a]?f():S(f,0)}catch(g){we(g)}},void 0);
hf[d]=!0;jf[a]||(jf[a]=[]);jf[a].push(d);return d}return 0}
function nf(a){var b=mf();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),F(a,function(c){b.unsubscribeByKey(c);delete hf[c]}))}
function of(a,b){var c=mf();c&&c.publish.apply(c,arguments)}
function pf(a){var b=mf();if(b)if(b.clear(a),a)qf(a);else for(var c in jf)qf(c)}
function mf(){return z("ytPubsubPubsubInstance")}
function qf(a){jf[a]&&(a=jf[a],F(a,function(b){hf[b]&&delete hf[b]}),a.length=0)}
;var rf=window,U=rf.ytcsi&&rf.ytcsi.now?rf.ytcsi.now:rf.performance&&rf.performance.timing&&rf.performance.now&&rf.performance.timing.navigationStart?function(){return rf.performance.timing.navigationStart+rf.performance.now()}:function(){return(new Date).getTime()};var sf=Ie("initial_gel_batch_timeout",1E3),tf=Math.pow(2,16)-1,uf=null,vf=0,wf=void 0,xf=0,yf=0,zf=0,Af=!0,Bf=z("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",Bf,void 0);var Cf=z("ytLoggingTransportGELQueue_")||new Map;y("ytLoggingTransportGELQueue_",Cf,void 0);var Df=z("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",Df,void 0);
function Ef(){T(xf);T(yf);yf=0;wf&&wf.isReady()?(Ff(Cf),"log_event"in Bf&&Ff(Object.entries(Bf.log_event)),Cf.clear(),delete Bf.log_event):Gf()}
function Gf(){R("web_gel_timeout_cap")&&!yf&&(yf=S(Ef,6E4));T(xf);var a=Q("LOGGING_BATCH_TIMEOUT",Ie("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Af&&(a=sf);xf=S(Ef,a)}
function Ff(a){var b=wf,c=Math.round(U());a=p(a);for(var d=a.next();!d.done;d=a.next()){var e=p(d.value);d=e.next().value;var f=e.next().value;e=eb({context:Hf(b.f||If())});e.events=f;(f=Df[d])&&Jf(e,d,f);delete Df[d];Kf(e,c);Lf(b,"log_event",e,{retry:!0,onSuccess:function(){vf=Math.round(U()-c)}});
Af=!1}}
function Kf(a,b){a.requestTimeMs=String(b);R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=Q("EVENT_ID",void 0);if(c){var d=Q("BATCH_CLIENT_COUNTER",void 0)||0;!d&&R("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*tf/2));d++;d>tf&&(d=1);P("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;uf&&vf&&R("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:uf,roundtripMs:String(vf)});uf=c;vf=0}}
function Jf(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Mf=Ie("initial_gel_batch_timeout",1E3),Nf=Math.pow(2,16)-1,Of=null,Pf=0,Qf={log_event:"events",log_interaction:"interactions"},Rf=new Set(["log_event"]),Sf={},Tf=0,Uf=0,Vf=0,Wf=!0,V=z("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",V,void 0);var Xf=z("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",Xf,void 0);
function Yf(){if(R("use_typescript_transport"))Ef();else if(T(Tf),T(Uf),Uf=0,!ab(V)){for(var a in V){var b=Sf[a];if(b&&b.isReady()){var c=void 0,d=a,e=Qf[d],f=Math.round(U());for(c in V[d]){var g=eb({context:Hf(b.f||If())});g[e]=Zf(d,c);var h=Xf[c];if(h)a:{var k=g,l=c;if(h.videoId)var m="VIDEO";else if(h.playlistId)m="PLAYLIST";else break a;k.credentialTransferTokenTargetId=h;k.context=k.context||{};k.context.user=k.context.user||{};k.context.user.credentialTransferTokens=[{token:l,scope:m}]}delete Xf[c];
h=g;h.requestTimeMs=f;R("unsplit_gel_payloads_in_logs")&&(h.unsplitGelPayloadsInLogs=!0);if(m=Q("EVENT_ID",void 0))k=Q("BATCH_CLIENT_COUNTER",void 0)||0,!k&&R("web_client_counter_random_seed")&&(k=Math.floor(Math.random()*Nf/2)),k++,k>Nf&&(k=1),P("BATCH_CLIENT_COUNTER",k),m={serializedEventId:m,clientCounter:k},h.serializedClientEventId=m,Of&&Pf&&R("log_gel_rtt_web")&&(h.previousBatchInfo={serializedClientEventId:Of,roundtripMs:Pf}),Of=m,Pf=0;Lf(b,d,g,{retry:Rf.has(d),onSuccess:Ka($f,U())})}delete V[a];
Wf=!1}}ab(V)||ag()}}
function ag(){R("web_gel_timeout_cap")&&!Uf&&(Uf=S(Yf,6E4));T(Tf);var a=Q("LOGGING_BATCH_TIMEOUT",Ie("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Wf&&(a=Mf);Tf=S(Yf,a)}
function Zf(a,b){b=void 0===b?"":b;V[a]=V[a]||{};V[a][b]=V[a][b]||[];return V[a][b]}
function $f(a){Pf=Math.round(U()-a)}
;var bg=0;y("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++bg},void 0);var cg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function dg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in cg||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function eg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
dg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
dg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
dg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var $a=z("ytEventsEventsListeners")||{};y("ytEventsEventsListeners",$a,void 0);var fg=z("ytEventsEventsCounter")||{count:0};y("ytEventsEventsCounter",fg,void 0);
function gg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Za(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Da(e[4])&&Da(d)&&cb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var hg=Wa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function W(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=gg(a,b,c,d);if(e)return e;e=++fg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new dg(h);if(!Ac(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new dg(h);
h.currentTarget=a;return c.call(a,h)};
g=ve(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),hg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);$a[e]=[a,b,c,g,d];return e}
function ig(a){a&&("string"==typeof a&&(a=[a]),F(a,function(b){if(b in $a){var c=$a[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?hg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete $a[b]}}))}
;var jg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function kg(a){this.w=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.D=W(window,"mousemove",A(this.F,this));a=A(this.A,this);Ca(a)&&(a=ve(a));this.K=window.setInterval(a,25)}
D(kg,M);kg.prototype.F=function(a){void 0===a.f&&eg(a);var b=a.f;void 0===a.g&&eg(a);this.f=new rc(b,a.g)};
kg.prototype.A=function(){if(this.f){var a=jg();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.w();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
kg.prototype.o=function(){window.clearInterval(this.K);ig(this.D)};function lg(){}
function mg(a,b){return ng(a,1,b)}
;function og(){}
t(og,lg);function ng(a,b,c){isNaN(c)&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
og.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
og.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};
ya(og);og.getInstance();var pg={};
function qg(a){var b=void 0===a?{}:a;a=void 0===b.Ea?!0:b.Ea;b=void 0===b.Pa?!1:b.Pa;if(null==z("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?C()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&rg();W(document,"keydown",rg);W(document,"keyup",rg);W(document,"mousedown",rg);W(document,"mouseup",rg);a&&(b?W(window,"touchmove",function(){sg("touchmove",200)},{passive:!0}):(W(window,"resize",function(){sg("resize",200)}),W(window,"scroll",function(){sg("scroll",200)})));
new kg(function(){sg("mouse",100)});
W(document,"touchstart",rg,{passive:!0});W(document,"touchend",rg,{passive:!0})}}
function sg(a,b){pg[a]||(pg[a]=!0,mg(function(){rg();pg[a]=!1},b))}
function rg(){null==z("_lact",window)&&qg();var a=C();y("_lact",a,window);-1==z("_fact",window)&&y("_fact",a,window);(a=z("ytglobal.ytUtilActivityCallback_"))&&a()}
function tg(){var a=z("_lact",window);return null==a?-1:Math.max(C()-a,0)}
;var ug=z("ytLoggingGelSequenceIdObj_")||{};y("ytLoggingGelSequenceIdObj_",ug,void 0);
function vg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||U());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:tg())};R("log_sequence_info_on_gel_web")&&d.P&&(a=e.context,b=d.P,ug[b]=b in ug?ug[b]+1:0,a.sequence={index:ug[b],groupKey:b},d.sb&&delete ug[d.P]);d=d.da;R("use_typescript_transport")?(a="",d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Df[d.token]=a,a=d.token),d=Cf.get(a)||[],Cf.set(a,d),d.push(e),c&&(wf=new c),c=Ie("web_logging_max_batch")||
100,e=U(),d.length>=c?Ef():10<=e-zf&&(Gf(),zf=e)):(d?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Xf[d.token]=a,d=Zf("log_event",d.token)):d=Zf("log_event"),d.push(e),c&&(Sf.log_event=new c),c=Ie("web_logging_max_batch")||100,e=U(),d.length>=c?Yf():10<=e-Vf&&(ag(),Vf=e))}
;function wg(){for(var a={},b=p(Object.entries(Ae(Q("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=p(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function xg(){return"INNERTUBE_API_KEY"in ne&&"INNERTUBE_API_VERSION"in ne}
function If(){return{innertubeApiKey:Q("INNERTUBE_API_KEY",void 0),innertubeApiVersion:Q("INNERTUBE_API_VERSION",void 0),Fa:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ga:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ia:Q("INNERTUBE_CONTEXT_HL",void 0),Ha:Q("INNERTUBE_CONTEXT_GL",void 0),Ja:Q("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ka:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function Hf(a){a={client:{hl:a.Ia,gl:a.Ha,clientName:a.Ga,clientVersion:a.innertubeContextClientVersion,configInfo:a.Fa}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=Q("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=Q("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=Q("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});R("enable_device_forwarding_from_xhr_client")&&(a.client=Object.assign(a.client,wg()));return a}
function yg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.pb||Q("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().ob:b=Oc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
function zg(a){a=Object.assign({},a);delete a.Authorization;var b=Oc();if(b){var c=new gd;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ba(b);void 0===c&&(c=0);if(!lc){lc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));kc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===lc[k]&&(lc[k]=h)}}}c=kc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Ag(a,b,c,d){pc.set(""+a,b,{ma:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Bg(){var a=new fe;(a=a.isAvailable()?new le(a,"yt.innertube"):null)||(a=new ge("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new be(a):null;this.g=document.domain||window.location.hostname}
Bg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,C()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(yd(b))}catch(f){return}else e=escape(b);Ag(a,e,c,this.g)};
Bg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=pc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Bg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;pc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Cg=new Bg;function Dg(a,b,c,d){if(d)return null;d=Cg.get("nextId",!0)||1;var e=Cg.get("requests",!0)||{};e[d]={method:a,request:b,authState:zg(c),requestTime:Math.round(U())};Cg.set("nextId",d+1,86400,!0);Cg.set("requests",e,86400,!0);return d}
function Eg(a){var b=Cg.get("requests",!0)||{};delete b[a];Cg.set("requests",b,86400,!0)}
function Fg(a){var b=Cg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=zg(yg(!1));cb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),Lf(a,d.method,e,{}));delete b[c]}}Cg.set("requests",b,86400,!0)}}
;function Gg(a){var b=this;this.f=null;a?this.f=a:xg()&&(this.f=If());ng(function(){Fg(b)},0,5E3)}
Gg.prototype.isReady=function(){!this.f&&xg()&&(this.f=If());return!!this.f};
function Lf(a,b,c,d){!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&xe(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,ra:"JSON",O:function(){d.O()},
qa:d.O,onSuccess:function(v,r){if(d.onSuccess)d.onSuccess(r)},
oa:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,r){if(d.onError)d.onError(r)},
wb:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Ja;g&&(f=g);g=a.f.Ka||!1;var h=yg(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=Be(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Dg(b,c,h,g))){var m=e.onSuccess,q=e.oa;e.onSuccess=function(v,r){Eg(l);m(v,r)};
c.oa=function(v,r){Eg(l);q(v,r)}}try{R("use_fetch_for_op_xhr")?Se(k,e):(e.method="POST",e.C||(e.C={}),Ve(k,e))}catch(v){if("InvalidAccessError"==v)l&&(Eg(l),l=0),xe(Error("An extension is blocking network request."));
else throw v;}l&&ng(function(){Fg(a)},0,5E3)}
;function Hg(a,b,c){c=void 0===c?{}:c;var d=Gg;Q("ytLoggingEventsDefaultDisabled",!1)&&Gg==Gg&&(d=null);vg(a,b,d,c)}
;function Ig(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ka(p(c)))}
t(Ig,Error);var Jg=new Set,Kg=0;function Lg(a){Mg(a,"WARNING")}
function Mg(a,b,c,d,e){e=void 0===e?{}:e;e.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=e||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;d=window&&window.yterr||!1;if(a&&d&&!(5<=Kg)&&(R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),
a)),0!==a.f)){d=a.g;e=a.columnNumber;if(a.args&&a.args.length)for(var f=0,g=0;g<a.args.length;g++){var h=a.args[g],k="params."+g;f+=k.length;if(h)if(Array.isArray(h))for(var l=c,m=0;m<h.length&&!(h[m]&&(f+=Ng(m,h[m],k,l),500<f));m++);else if("object"===typeof h)for(l in l=void 0,m=c,h){if(h[l]&&(f+=Ng(l,h[l],k,m),500<f))break}else c[k]=String(JSON.stringify(h)).substring(0,500),f+=c[k].length;else c[k]=String(JSON.stringify(h)).substring(0,500),f+=c[k].length;if(500<=f)break}else if(a.hasOwnProperty("params"))if(h=
a.params,"object"===typeof a.params)for(g in k=0,h){if(h[g]&&(f="params."+g,l=String(JSON.stringify(h[g])).substr(0,500),c[f]=l,k+=f.length+l.length,500<k))break}else c.params=String(JSON.stringify(h)).substr(0,500);a=mc(a);(d=d||a.stack)||(d="Not available");h={stackTrace:d};a.fileName&&(h.filename=a.fileName);g=a.lineNumber.toString();isNaN(g)||!e||isNaN(e)||(h.lineNumber=Number(g),h.columnNumber=Number(e),g=g+":"+e);window.yterr&&Ca(window.yterr)&&(a.params=c,window.yterr(a));if(!(Jg.has(a.message)||
0<=d.indexOf("/YouTubeCenter.js")||0<=d.indexOf("/mytube.js"))){if(R("kevlar_gel_error_routing")){k=b;e={level:"ERROR_LEVEL_UNKNOWN",message:a.message};"ERROR"===k?e.level="ERROR_LEVEL_ERROR":"WARNING"===k&&(e.level="ERROR_LEVEL_WARNNING");h={isObfuscated:!0,browserStackInfo:h};k={pageUrl:window.location.href,kvPairs:[]};f=p(Object.keys(c));for(l=f.next();!l.done;l=f.next())l=l.value,k.kvPairs.push({key:"client."+l,value:String(c[l])});Hg("clientError",{errorMetadata:k,stackTrace:h,logMessage:e});
Yf()}b={ab:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:g,level:b,"client.name":c.name},C:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};c.version&&(b["client.version"]=c.version);if(b.C){d&&(b.C.stack=d);d=p(Object.keys(c));for(e=d.next();!e.done;e=d.next())e=e.value,b.C["client."+e]=c[e];if(c=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=p(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,b.C[e]=c[e]}Ve(Q("ECATCHER_REPORT_HOST",
"")+"/error_204",b);Jg.add(a.message);Kg++}}}
function Ng(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Og(a,b,c,d,e,f){Mg(a,void 0===b?"ERROR":b,c,d,f)}
;var Pg=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",Pg,void 0);function Qg(a){me(Pg,arguments)}
;function Rg(a){a&&(a.dataset?a.dataset[Sg("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Tg(a,b){return a?a.dataset?a.dataset[Sg(b)]:a.getAttribute("data-"+b):null}
var Ug={};function Sg(a){return Ug[a]||(Ug[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Vg=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Wg=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Xg(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Vg,""),c=c.replace(Wg,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Yg(a,b,c)}
function Yg(a,b,c){c=void 0===c?null:c;var d=Zg(a),e=document.getElementById(d),f=e&&Tg(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=lf(d,b),b=""+Ea(b),$g[b]=f),g||(e=ah(a,d,function(){Tg(e,"loaded")||(Rg(e),of(d),S(Ka(pf,d),0))},c)))}
function ah(a,b,c,d){d=void 0===d?null:d;var e=xc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ob(e,Bc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function bh(a){a=Zg(a);var b=document.getElementById(a);b&&(pf(a),b.parentNode.removeChild(b))}
function ch(a,b){if(a&&b){var c=""+Ea(b);(c=$g[c])&&nf(c)}}
function Zg(a){var b=document.createElement("a");Nb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Qb(a)}
var $g={};var dh=[],eh=!1;function fh(){if("1"!=Ya(oe(),"args","privembed")){var a=function(){eh=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
Xg("//static.doubleclick.net/instream/ad_status.js",a);dh.push(mg(function(){eh||"google_ad_status"in window||(ch("//static.doubleclick.net/instream/ad_status.js",a),eh=!0,P("DCLKSTAT",3))},5E3))}}
function gh(){return parseInt(Q("DCLKSTAT",0),10)}
;function hh(){this.g=!1;this.f=null}
hh.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,Xg(b,function(){g.g=!1;window.botguard?ih(g,c,d,f):(bh(b),Lg(new Ig("Unable to load Botguard","from "+b)))},e)):a&&(eval(a),window.botguard?ih(this,c,d,f):Lg(Error("Unable to load Botguard from JS")))};
function ih(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:xa)}catch(e){Lg(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){Lg(e)}c&&c(b)}}
hh.prototype.dispose=function(){this.f=null};var jh=new hh,kh=!1,lh=0,mh="";function nh(a){R("botguard_periodic_refresh")?lh=U():R("botguard_always_refresh")&&(mh=a)}
function oh(a){if(a){if(jh.g)return!1;if(R("botguard_periodic_refresh"))return 72E5<U()-lh;if(R("botguard_always_refresh"))return mh!=a}else return!1;return!kh}
function ph(){return!!jh.f}
function qh(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return jh.f?jh.f.invoke(void 0,void 0,a):null}
;var rh=C().toString();
function sh(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=C();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(rh)for(a=1,b=0;b<rh.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^rh.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var th=z("ytLoggingDocDocumentNonce_")||sh();y("ytLoggingDocDocumentNonce_",th,void 0);var uh=1;function vh(a){this.f=a}
function wh(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,void 0!==a.f.veCounter&&(b.veCounter=a.f.veCounter),void 0!==a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=wh(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
vh.prototype.toString=function(){return JSON.stringify(wh(this))};function xh(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function yh(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function zh(a){return Q(yh(void 0===a?0:a),void 0)}
y("yt_logging_screen.getRootVeType",zh,void 0);function Ah(){var a=zh(0),b;a?b=new vh({veType:a,youtubeData:void 0}):b=null;return b}
function Bh(){var a=Q("csn-to-ctt-auth-info");a||(a={},P("csn-to-ctt-auth-info",a));return a}
function Ch(a){a=void 0===a?0:a;var b=Q(xh(a));if(!b&&!Q("USE_CSN_FALLBACK",!0))return null;b||0!=a||(R("kevlar_client_side_screens")||R("c3_client_side_screens")?b="UNDEFINED_CSN":b=Q("EVENT_ID"));return b?b:null}
y("yt_logging_screen.getCurrentCsn",Ch,void 0);function Dh(a,b,c){var d=Bh();(c=Ch(c))&&delete d[c];b&&(d[a]=b)}
function Eh(a){return Bh()[a]}
y("yt_logging_screen.getCttAuthInfo",Eh,void 0);function Fh(a,b,c,d){c=void 0===c?0:c;if(a!==Q(xh(c))||b!==Q(yh(c)))if(Dh(a,d,c),P(xh(c),a),P(yh(c),b),0==c||R("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&vg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:th,clientScreenNonce:a},Gg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
y("yt_logging_screen.setCurrentScreen",Fh,void 0);function Gh(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=I(J(3,window.location.href));g&&f.push(g);g=I(J(3,d));if(0<=Oa(f,g)||!g&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(f=document.createElement("a"),Nb(f,d),d=f.href),d){g=d.match(Rb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||
b.ved)&&(b=Object.assign({csn:Ch()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Qb(d).toString(36),e=e?Tb(e):"",Ag(b,e,k||5))}else k=b,e="ST-"+Qb(d).toString(36),k=k?Tb(k):"",Ag(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=Ub(a,l)+m;a=a instanceof G?a:Db(a);c.href=Bb(a)}return!0}
;function Hh(a,b){this.version=a;this.args=b}
;function Ih(a,b){this.topic=a;this.f=b}
Ih.prototype.toString=function(){return this.topic};var Jh=z("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.N;O.prototype.publish=O.prototype.M;O.prototype.clear=O.prototype.clear;y("ytPubsub2Pubsub2Instance",Jh,void 0);var Kh=z("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",Kh,void 0);var Lh=z("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",Lh,void 0);var Mh=z("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",Mh,void 0);
y("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Nh(a,b){var c=Oh();c&&c.publish.call(c,a.toString(),a,b)}
function Ph(a){var b=Qh,c=Oh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=z("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Kh[d])try{if(f&&b instanceof Ih&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.H){var l=new h;h.H=l.version}var m=h.H}catch(q){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Ua(k.args))}catch(q){throw q.message="yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+q.message,q;}a.call(window,f)}catch(q){we(q)}},Mh[b.toString()]?z("yt.scheduler.instance")?mg(g):S(g,0):g())});
Kh[d]=!0;Lh[b.toString()]||(Lh[b.toString()]=[]);Lh[b.toString()].push(d);return d}
function Rh(){var a=Sh,b=Ph(function(c){a.apply(void 0,arguments);Th(b)});
return b}
function Th(a){var b=Oh();b&&("number"===typeof a&&(a=[a]),F(a,function(c){b.unsubscribeByKey(c);delete Kh[c]}))}
function Oh(){return z("ytPubsub2Pubsub2Instance")}
;function Uh(a){Hh.call(this,1,arguments);this.csn=a}
t(Uh,Hh);var Qh=new Ih("screen-created",Uh),Vh=[],Wh=0;function Xh(a,b,c){var d=R("use_default_events_client")?void 0:Gg;b={csn:a,parentVe:wh(b),childVes:Qa(c,function(f){return wh(f)})};
c=p(c);for(var e=c.next();!e.done;e=c.next())e=wh(e.value),(ab(e)||!e.trackingParams&&!e.veType)&&Og(Error("Child VE logged with no data"),"WARNING");c={da:Eh(a),P:a};"UNDEFINED_CSN"==a?Yh("visualElementAttached",b,c):d?vg("visualElementAttached",b,d,c):Hg("visualElementAttached",b,c)}
function Yh(a,b,c){Vh.push({payloadName:a,payload:b,options:c});Wh||(Wh=Rh())}
function Sh(a){if(Vh){for(var b=p(Vh),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,vg(c.payloadName,c.payload,null,c.options));Vh.length=0}Wh=0}
;function Zh(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||db(b);this.assets=a.assets||{};this.attrs=a.attrs||db(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Zh.prototype.clone=function(){var a=new Zh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==za(c)?a[b]=db(c):a[b]=c}return a};function $h(){M.call(this);this.f=[]}
t($h,M);$h.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.qb)}M.prototype.o.call(this)};var ai=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function bi(a){a=a||"";if(window.spf){var b=a.match(ai);spf.style.load(a,b?b[1]:"",void 0)}else ci(a)}
function ci(a){var b=di(a),c=document.getElementById(b),d=c&&Tg(c,"loaded");d||c&&!d||(c=ei(a,b,function(){Tg(c,"loaded")||(Rg(c),of(b),S(Ka(pf,b),0))}))}
function ei(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Bc(a);d.rel="stylesheet";d.href=pb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function di(a){var b=xc(document,"A");Nb(b,new G(zb,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Qb(a)}
;function fi(a,b,c,d){M.call(this);var e=this;this.m=this.X=a;this.U=b;this.w=!1;this.api={};this.V=this.D=null;this.F=new O;id(this,Ka(jd,this.F));this.j={};this.R=this.W=this.h=this.ca=this.f=null;this.K=!1;this.l=this.A=null;this.Y={};this.ua=["onReady"];this.ba=null;this.ka=NaN;this.S={};this.i=d;gi(this);this.Z("WATCH_LATER_VIDEO_ADDED",this.Ma.bind(this));this.Z("WATCH_LATER_VIDEO_REMOVED",this.Na.bind(this));this.Z("onAdAnnounce",this.wa.bind(this));this.va=new $h(this);id(this,Ka(jd,this.va));
this.T=0;c?this.T=S(function(){e.loadNewVideoConfig(c)},0):d&&(hi(this),ii(this))}
t(fi,M);n=fi.prototype;n.getId=function(){return this.U};
n.loadNewVideoConfig=function(a){if(!this.g){this.T&&(T(this.T),this.T=0);a instanceof Zh||(a=new Zh(a));this.ca=a;this.f=a.clone();hi(this);this.W||(this.W=ji(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.m.style.width=Ic(Number(a)||a);if(a=this.f.attrs.height)this.m.style.height=Ic(Number(a)||a);ii(this);this.w&&ki(this)}};
function hi(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.U,a.f.attrs.id=a.U);a.m.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
n.Ba=function(){return this.ca};
function ki(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function li(a){var b=!0,c=mi(a);c&&a.f&&(a=ni(a),b=Tg(c,"version")===a);return b&&!!z("yt.player.Application.create")}
function ii(a){if(!a.g&&!a.K){var b=li(a);if(b&&"html5"==(mi(a)?"html5":null))a.R="html5",a.w||oi(a);else if(pi(a),a.R="html5",b&&a.l)a.X.appendChild(a.l),oi(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.A=function(){c=!0;if(a.i)var d=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(d=a.f.args.fflags);d="true"==ye(d||"").player_bootstrap_method?z("yt.player.Application.createAlternate")||z("yt.player.Application.create"):z("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.X,e,a.i);oi(a)};
a.K=!0;b?a.A():(Xg(ni(a),a.A),(b=a.i?a.i.cssUrl:a.f.assets.css)&&bi(b),qi(a)&&!c&&y("yt.player.Application.create",null,void 0))}}}
function mi(a){var b=tc(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
function oi(a){if(!a.g){var b=mi(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||ri(a)):a.ka=S(function(){oi(a)},50)}}
function ri(a){gi(a);a.w=!0;var b=mi(a);b.addEventListener&&(a.D=si(a,b,"addEventListener"));b.removeEventListener&&(a.V=si(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=si(a,b,e))}for(var f in a.j)a.D(f,a.j[f]);ki(a);a.W&&a.W(a.api);a.F.M("onReady",a.api)}
function si(a,b,c){var d=b[c];return function(){try{return a.ba=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ba=e,xe(e))}}}
function gi(a){a.w=!1;if(a.V)for(var b in a.j)a.V(b,a.j[b]);for(var c in a.S)T(parseInt(c,10));a.S={};a.D=null;a.V=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Z.bind(a);a.api.removeEventListener=a.Ra.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ca.bind(a);a.api.getPlayerType=a.Da.bind(a);a.api.getCurrentVideoConfig=a.Ba.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.La.bind(a)}
n.La=function(){return this.w};
n.Z=function(a,b){var c=this,d=ji(this,b);if(d){if(!(0<=Oa(this.ua,a)||this.j[a])){var e=ti(this,a);this.D&&this.D(a,e)}this.F.subscribe(a,d);"onReady"==a&&this.w&&S(function(){d(c.api)},0)}};
n.Ra=function(a,b){if(!this.g){var c=ji(this,b);c&&Wd(this.F,a,c)}};
function ji(a,b){var c=b;if("string"==typeof b){if(a.Y[b])return a.Y[b];c=function(){var d=z(b);d&&d.apply(x,arguments)};
a.Y[b]=c}return c?c:null}
function ti(a,b){var c="ytPlayer"+b+a.U;a.j[b]=c;x[c]=function(d){var e=S(function(){if(!a.g){a.F.M(b,d);var f=a.S,g=String(e);g in f&&delete f[g]}},0);
bb(a.S,String(e))};
return c}
n.wa=function(a){of("a11y-announce",a)};
n.Ma=function(a){of("WATCH_LATER_VIDEO_ADDED",a)};
n.Na=function(a){of("WATCH_LATER_VIDEO_REMOVED",a)};
n.Da=function(){return this.R||(mi(this)?"html5":null)};
n.Ca=function(){return this.ba};
function pi(a){a.cancel();gi(a);a.R=null;a.f&&(a.f.loaded=!1);var b=mi(a);b&&(li(a)||!qi(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));for(a=a.X;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){this.A&&ch(ni(this),this.A);T(this.ka);this.K=!1};
n.o=function(){pi(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){we(b)}this.Y=null;for(var a in this.j)x[this.j[a]]=null;this.ca=this.f=this.api=null;delete this.X;delete this.m;M.prototype.o.call(this)};
function qi(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function ni(a){return a.i?a.i.jsUrl:a.f.assets.js}
;var ui={},vi="player_uid_"+(1E9*Math.random()>>>0);function wi(a){delete ui[a.getId()]}
;function xi(a,b){Hh.call(this,1,arguments)}
t(xi,Hh);function yi(a,b){Hh.call(this,1,arguments)}
t(yi,Hh);var zi=new Ih("aft-recorded",xi),Ai=new Ih("timing-sent",yi);var Bi=window;function Ci(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var X=Bi.performance||Bi.mozPerformance||Bi.msPerformance||Bi.webkitPerformance||new Ci;var Di=!1;function Ei(a){var b=Fi(a);if(b.aft)return b.aft;a=Q((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Gi(a){var b;(b=z("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},La("ytcsi."+(a||"")+"data_",b));return b}
function Hi(a){a=Gi(a);a.info||(a.info={});return a.info}
function Fi(a){a=Gi(a);a.tick||(a.tick={});return a.tick}
function Ii(a){var b=Gi(a).nonce;b||(b=sh(),Gi(a).nonce=b);return b}
function Ji(a){var b=Fi(a||""),c=Ei(a);c&&!Di&&(Nh(zi,new xi(Math.round(c-b._start),a)),Di=!0)}
;function Ki(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Li(a)||c.some(function(e){return!Li(e)}))throw Error("Only objects may be merged.");
c=p(c);for(d=c.next();!d.done;d=c.next())Mi(a,d.value);return a}
function Mi(a,b){for(var c in b)if(Li(b[c])){if(c in a&&!Li(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Mi(a[c],b[c])}else if(Ni(b[c])){if(c in a&&!Ni(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Oi(a[c],b[c])}else a[c]=b[c];return a}
function Oi(a,b){for(var c=p(b),d=c.next();!d.done;d=c.next())d=d.value,Li(d)?a.push(Mi({},d)):Ni(d)?a.push(Oi([],d)):a.push(d);return a}
function Li(a){return"object"===typeof a&&!Array.isArray(a)}
function Ni(a){return"object"===typeof a&&Array.isArray(a)}
;function Pi(){var a=z("ytcsi.debug");a||(a=[],y("ytcsi.debug",a,void 0),y("ytcsi.reference",{},void 0));return a}
function Qi(a){a=a||"";var b=z("ytcsi.reference");b||(Pi(),b=z("ytcsi.reference"));if(b[a])return b[a];var c=Pi(),d={timerName:a,info:{},tick:{}};c.push(d);return b[a]=d}
;var Ri=z("ytLoggingLatencyUsageStats_")||{};y("ytLoggingLatencyUsageStats_",Ri,void 0);function Si(){this.f=0}
function Ti(){Si.instance||(Si.instance=new Si);return Si.instance}
Si.prototype.tick=function(a,b,c){Ui(this,"tick_"+a+"_"+b)||Hg("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Si.prototype.info=function(a,b){var c=Object.keys(a).join("");Ui(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,Hg("latencyActionInfo",a))};
function Ui(a,b){Ri[b]=Ri[b]||{count:0};var c=Ri[b];c.count++;c.time=U();a.f||(a.f=ng(function(){var d=U(),e;for(e in Ri)Ri[e]&&6E4<d-Ri[e].time&&delete Ri[e];a&&(a.f=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Ig("CSI data exceeded logging limit with key",b),0===b.indexOf("info")?Lg(c):Mg(c)),!0):!1}
;var Y={},Vi=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid=
"requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",
Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",
Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid="requestIds",Y.GetTrending_rid=
"requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),Wi="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Xi={},Yi=(Xi.ccs="CANARY_STATE_",Xi.mver="MEASUREMENT_VERSION_",Xi.pis="PLAYER_INITIALIZED_STATE_",
Xi.yt_pt="LATENCY_PLAYER_",Xi.pa="LATENCY_ACTION_",Xi.yt_vst="VIDEO_STREAM_TYPE_",Xi),Zi="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");function $i(a){return!!Q("FORCE_CSI_ON_GEL",!1)||R("csi_on_gel")||!!Gi(a).useGel}
function aj(a){a=Gi(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function bj(a,b,c){if(null!==b)if(Hi(c)[a]=b,$i(c)){var d=b;b=aj(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a in Vi){if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}b=Vi[a];0<=Oa(Wi,b)&&(d=!!d);a in Yi&&"string"===typeof d&&(d=Yi[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Ki({},e)}else 0<=Oa(Zi,a)||Lg(new Ig("Unknown label logged with GEL CSI",
a)),f=void 0;f&&$i(c)&&(b=Qi(c||""),Ki(b.info,f),b=aj(c),"gelInfos"in b||(b.gelInfos={}),Ki(b.gelInfos,f),c=Ii(c),Ti().info(f,c))}else Qi(c||"").info[a]=b}
if(R("overwrite_polyfill_on_logging_lib_loaded")){var cj=window;cj.ytcsi&&(cj.ytcsi.info=bj)};function dj(a,b,c){var d=Fi(c),e;if(e=R("use_first_tick"))e=Fi(c),e=a in e;if(e)return d[a];b||"_"==a[0]||(e=a,X.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),X.mark(e)));e=b||U();d[a]=e;e=aj(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||U();if($i(c)){Qi(c||"").tick[a]=b||U();e=Ii(c);if("_start"===a){var f=Ti();Ui(f,"baseline_"+e)||Hg("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Ti().tick(a,e,b);Ji(c);e=!0}else e=!1;if(!e){if(!z("yt.timing."+(c||"")+
"pingSent_")&&(f=Q((c||"")+"TIMING_ACTION",void 0),e=Fi(c),z("ytglobal.timing"+(c||"")+"ready_")&&f&&e._start&&Ei(c)))if(Ji(c),c)ej(c);else{f=!0;var g=Q("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&ej(c)}Qi(c||"").tick[a]=b||U()}return d[a]}
function ej(a){if(!$i(a)){var b=Fi(a),c=Hi(a),d=b._start,e=Q("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:Q((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var h=window.location.protocol+z("ytplayer.config.assets.js");(h=X.getEntriesByName?X.getEntriesByName(h)[0]:void 0)?c.h5jse=Math.round(c.h5jse-h.responseEnd):delete c.h5jse}b.aft=Ei(a);var k=Fi(a);h=k.pbr;var l=k.vc;k=k.pbs;h&&l&&k&&h<l&&l<k&&Hi(a).yt_pvis&&"youtube"==e&&(bj("yt_lt","hot_bg",a),e=b.vc,h=b.pbs,
delete b.aft,c.aft=Math.round(h-e));for(var m in c)"_"!=m.charAt(0)&&(f[m]=c[m]);b.ps=U();m={};e=[];for(var q in b)"_"!=q.charAt(0)&&(h=Math.round(b[q]-d),m[q]=h,e.push(q+"."+h));f.rt=e.join(",");(b=z("ytdebug.logTiming"))&&b(f,m);c=!!c.ap;R("debug_csi_data")&&(b=z("yt.timing.csiData"),b||(b=[],La("yt.timing.csiData",b)),b.push({page:location.href,time:new Date,args:f}));b="";for(var v in f)f.hasOwnProperty(v)&&(b+="&"+v+"="+f[v]);f="/csi_204?"+b.substring(1);if(window.navigator&&window.navigator.sendBeacon&&
c){var r=void 0===r?"":r;ff(f,r)||cf(f,void 0,void 0,void 0,r)}else cf(f);y("yt.timing."+(a||"")+"pingSent_",!0,void 0);Nh(Ai,new yi(m.aft+(g||0),a))}}
A(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||xa,X);var fj=window;R("csi_on_gel")&&fj.ytcsi&&(fj.ytcsi.tick=dj);function gj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function hj(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return ij(a)}
function ij(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function jj(a,b,c,d){if(Da(a)&&!Aa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function kj(a){a=void 0===a?!1:a;M.call(this);this.f=new O(a);id(this,Ka(jd,this.f))}
D(kj,M);kj.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
kj.prototype.j=function(a,b){this.g||this.f.M.apply(this.f,arguments)};function lj(a,b,c){kj.call(this);this.h=a;this.i=b;this.l=c}
t(lj,kj);function mj(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(yd(a),d.i))}}
lj.prototype.o=function(){this.i=this.h=null;kj.prototype.o.call(this)};function nj(a){M.call(this);this.f=a;this.f.subscribe("command",this.sa,this);this.h={};this.j=!1}
t(nj,M);n=nj.prototype;n.start=function(){this.j||this.g||(this.j=!0,mj(this.f,"RECEIVING"))};
n.sa=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=A(this.Ta,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&oj(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=pj(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=qj(a,c))&&this.j&&!this.g&&mj(this.f,a,c))}}};
n.Ta=function(a,b){this.j&&!this.g&&mj(this.f,a,this.fa(a,b))};
n.fa=function(a,b){if(null!=b)return{value:b}};
function oj(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
n.o=function(){var a=this.f;a.g||Wd(a.f,"command",this.sa,this);this.f=null;for(var b in this.h)oj(this,b);M.prototype.o.call(this)};function rj(a,b){nj.call(this,b);this.i=a;this.start()}
t(rj,nj);rj.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
rj.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function pj(a,b){switch(a){case "loadVideoById":return b=ij(b),[b];case "cueVideoById":return b=ij(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=jj(b),[b];case "cuePlaylist":return b=jj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function qj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
rj.prototype.fa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return nj.prototype.fa.call(this,a,b)};
rj.prototype.o=function(){nj.prototype.o.call(this);delete this.i};function sj(a,b,c){M.call(this);var d=this;c=c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.w="*";this.i=c;this.sessionId=null;this.channel="widget";this.A=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.A&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.w=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Oa(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
t(sj,M);sj.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.w)}catch(e){xe(e)}}};
sj.prototype.o=function(){window.removeEventListener("message",this.m);M.prototype.o.call(this)};function tj(){var a=this.g=new sj(!!Q("WIDGET_ID_ENFORCE")),b=A(this.Qa,this);a.j=b;a.l=null;this.g.channel="widget";if(a=Q("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
n=tj.prototype;n.Qa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,uj(this,a)),this.j[a]=!0)):this.na(a,b,c)};
n.na=function(){};
function uj(a,b){return A(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Aa=function(){this.l=!0;this.sendMessage("initialDelivery",this.ga());this.sendMessage("onReady");F(this.i,this.ta,this);this.i=[]};
n.ga=function(){return null};
function vj(a,b){a.sendMessage("infoDelivery",b)}
n.ta=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
n.sendMessage=function(a,b){this.ta({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.g=null};function wj(a){tj.call(this);this.f=a;this.h=[];this.addEventListener("onReady",A(this.Oa,this));this.addEventListener("onVideoProgress",A(this.Xa,this));this.addEventListener("onVolumeChange",A(this.Ya,this));this.addEventListener("onApiChange",A(this.Sa,this));this.addEventListener("onPlaybackQualityChange",A(this.Ua,this));this.addEventListener("onPlaybackRateChange",A(this.Va,this));this.addEventListener("onStateChange",A(this.Wa,this));this.addEventListener("onWebglSettingsChanged",A(this.Za,
this))}
t(wj,tj);n=wj.prototype;n.na=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&gj(a)){var d=b;if(Da(d[0])&&!Aa(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=ij.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=hj.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=jj.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);gj(a)&&vj(this,this.ga())}};
n.Oa=function(){var a=A(this.Aa,this);this.g.f=a};
n.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.ga=function(){if(!this.f)return null;var a=this.f.getApiInterface();Ta(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=C()/1E3;return b};
n.Wa=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:C()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());vj(this,a)};
n.Ua=function(a){vj(this,{playbackQuality:a})};
n.Va=function(a){vj(this,{playbackRate:a})};
n.Sa=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.Ya=function(){vj(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.Xa=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:C()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());vj(this,a)};
n.Za=function(){var a={sphericalProperties:this.f.getSphericalProperties()};vj(this,a)};
n.dispose=function(){tj.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function xj(a,b,c){M.call(this);this.f=a;this.i=c;this.j=W(window,"message",A(this.l,this));this.h=new lj(this,a,b);id(this,Ka(jd,this.h))}
t(xj,M);xj.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
xj.prototype.o=function(){ig(this.j);this.f=null;M.prototype.o.call(this)};function yj(){var a=db(zj),b;return Ld(new N(function(c,d){a.onSuccess=function(e){Le(e)?c(e):d(new Aj("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Aj("Unknown request error","net.unknown",e))};
a.O=function(e){d(new Aj("Request timed out","net.timeout",e))};
b=Ve("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Md&&b.abort();
return Jd(c)})}
function Aj(a,b){E.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
t(Aj,E);function Bj(){this.g=0;this.f=null}
Bj.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),Ed(a)?a:Cj(a)):2===this.g&&b?(a=b.call(c,this.f),Ed(a)?a:Dj(a)):this};
Bj.prototype.getValue=function(){return this.f};
Bj.prototype.$goog_Thenable=!0;function Dj(a){var b=new Bj;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function Cj(a){var b=new Bj;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function Ej(a){E.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Fj;this.isTimeout=a instanceof Aj&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Md}
t(Ej,E);Ej.prototype.name="BiscottiError";function Fj(){E.call(this,"Biscotti ID is missing from server")}
t(Fj,E);Fj.prototype.name="BiscottiMissingError";var zj={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Gj=null;function re(){if("1"===Ya(oe(),"args","privembed"))return Jd(Error("Biscotti ID is not available in private embed mode"));Gj||(Gj=Ld(yj().then(Hj),function(a){return Ij(2,a)}));
return Gj}
function Hj(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Fj;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Fj;a=a.id;se(a);Gj=Cj(a);Jj(18E5,2);return a}
function Ij(a,b){var c=new Ej(b);se("");Gj=Dj(c);0<a&&Jj(12E4,a-1);throw c;}
function Jj(a,b){S(function(){Ld(yj().then(Hj,function(c){return Ij(b,c)}),xa)},a)}
function Kj(){try{var a=z("yt.ads.biscotti.getId_");return a?a():re()}catch(b){return Jd(b)}}
;function Lj(a){if("1"!==Ya(oe(),"args","privembed")){a&&qe();try{Kj().then(function(){},function(){}),S(Lj,18E5)}catch(b){we(b)}}}
;var Z=z("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Mj(){this.f=Q("ALT_PREF_COOKIE_NAME","PREF");var a=pc.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
n=Mj.prototype;n.get=function(a,b){Nj(a);Oj(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){Nj(a);Oj(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
n.remove=function(a){Nj(a);Oj(a);delete Z[a]};
n.save=function(){Ag(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in Z)delete Z[a]};
n.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Oj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Nj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Pj(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ya(Mj);var Qj=null,Rj=null,Sj=null,Tj={};function Uj(a){var b=a.id;a=a.ve_type;var c=uh++;a=new vh({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Tj[b]=a;b=Ch();c=Ah();b&&c&&Xh(b,c,[a])}
function Vj(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Fh(b,a),a=Ah()))for(var c in Tj){var d=Tj[c];d&&Xh(b,a,[d])}}
function Wj(a){Tj[a.id]=new vh({trackingParams:a.tracking_params})}
function Xj(a){var b=Ch(),c=Tj[a.id];if(b&&c){a=R("use_default_events_client")?void 0:Gg;c={csn:b,ve:wh(c),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};var d={da:Eh(b),P:b};"UNDEFINED_CSN"==b?Yh("visualElementGestured",c,d):a?vg("visualElementGestured",c,a,d):Hg("visualElementGestured",c,d)}}
function Yj(a){a=a.ids;var b=Ch();if(b)for(var c=0;c<a.length;c++){var d=Tj[a[c]];if(d){var e=b,f=R("use_default_events_client")?void 0:Gg;d={csn:e,ve:wh(d),eventType:1};var g={da:Eh(e),P:e};"UNDEFINED_CSN"==e?Yh("visualElementShown",d,g):f?vg("visualElementShown",d,f,g):Hg("visualElementShown",d,g)}}}
;y("yt.setConfig",P,void 0);y("yt.config.set",P,void 0);y("yt.setMsg",Qg,void 0);y("yt.msgs.set",Qg,void 0);y("yt.logging.errors.log",Og,void 0);
y("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);Lj(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");b="player";var d=void 0===d?!0:d;b="string"===typeof b?tc(b):b;var e=vi+"_"+Ea(b),f=ui[e];f&&d?a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true")?f.api.loadVideoByPlayerVars(a.args||
null):f.loadNewVideoConfig(a):(f=new fi(b,e,a,void 0),ui[e]=f,of("player-added",f.api),id(f,Ka(wi,f)));a=f.api;Qj=a;a.addEventListener("onScreenChanged",Vj);a.addEventListener("onLogClientVeCreated",Uj);a.addEventListener("onLogServerVeCreated",Wj);a.addEventListener("onLogVeClicked",Xj);a.addEventListener("onLogVesShown",Yj);d=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?Sj=new wj(a):Q("ENABLE_POST_API")&&"string"===typeof d&&"string"===typeof c&&(Rj=new xj(window.parent,d,c),Sj=new rj(a,Rj.h));
c=Q("BG_P",void 0);oh(c)&&(Q("BG_I")||Q("BG_IU"))&&(kh=!0,jh.initialize(Q("BG_I",null),Q("BG_IU",null),c,nh,void 0,!!Q("BG_CE",!1)));fh()},void 0);
y("yt.www.watch.ads.restrictioncookie.spr",function(a){cf(a+"mac_204?action_fcts=1");return!0},void 0);
var Zj=ve(function(){dj("ol");var a=Mj.getInstance(),b=!!((Pj("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&nd(document.body,"exp-invert-logo"))if(c&&!nd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!nd(d,"inverted-hdpi")){var e=ld(d);md(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&nd(document.body,"inverted-hdpi")&&od();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Pj(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete Z[b]:(c=d.toString(16),Z[b]=c.toString()),a.save())}),ak=ve(function(){var a=Qj;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&jh.dispose();a=0;for(var b=dh.length;a<b;a++){var c=dh[a];if(!isNaN(c)){var d=z("yt.scheduler.instance.cancelJob");d?d(c):T(c)}}dh.length=0;bh("//static.doubleclick.net/instream/ad_status.js");eh=!1;P("DCLKSTAT",0);kd(Sj,Rj);if(a=Qj)a.removeEventListener("onScreenChanged",Vj),a.removeEventListener("onLogClientVeCreated",Uj),a.removeEventListener("onLogServerVeCreated",Wj),a.removeEventListener("onLogVeClicked",Xj),a.removeEventListener("onLogVesShown",
Yj),a.destroy();Tj={}});
window.addEventListener?(window.addEventListener("load",Zj),window.addEventListener("unload",ak)):window.attachEvent&&(window.attachEvent("onload",Zj),window.attachEvent("onunload",ak));La("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||ph);La("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||qh);La("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||gh);
La("yt.player.exports.navigate",z("yt.player.exports.navigate")||Gh);La("yt.util.activity.init",z("yt.util.activity.init")||qg);La("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||tg);La("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||rg);}).call(this);
