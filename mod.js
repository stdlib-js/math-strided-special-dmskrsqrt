// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__;var l=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,l){var c,_,f,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((_="value"in l)&&(u.call(r,e)||i.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=l.value,r.__proto__=c):r[e]=l.value),f="get"in l,p="set"in l,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(r,e,l.get),p&&a&&a.call(r,e,l.set),r};function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function _(r,e,t,n,o,a,u,i){var l,c,_,f;if(r<=0)return a;for(l=t<0?(1-r)*t:0,c=o<0?(1-r)*o:0,_=u<0?(1-r)*u:0,f=0;f<r;f++)0===n[c]&&(a[_]=i(e[l])),l+=t,c+=o,_+=u;return a}function f(r,e,t,n,o,a,u,i,l,c,_){var f,p,y,b;if(r<=0)return i;for(f=n,p=u,y=c,b=0;b<r;b++)0===o[p]&&(i[y]=_(e[f])),f+=t,p+=a,y+=l;return i}c(_,"ndarray",f);var p=Math.sqrt;function y(r){return 1/p(r)}function b(r,e,t,n,o,a,u){return _(r,e,t,n,o,a,u,y)}function d(r,e,t,n,o,a,u,i,l,c){return f(r,e,t,n,o,a,u,i,l,c,y)}c(b,"ndarray",d);export{b as default,d as ndarray};
//# sourceMappingURL=mod.js.map
