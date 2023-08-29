var Xe=(u,l,y)=>{if(!l.has(u))throw TypeError("Cannot "+y)};var K=(u,l,y)=>(Xe(u,l,"read from private field"),y?y.call(u):l.get(u)),le=(u,l,y)=>{if(l.has(u))throw TypeError("Cannot add the same private member more than once");l instanceof WeakSet?l.add(u):l.set(u,y)},j=(u,l,y,g)=>(Xe(u,l,"write to private field"),g?g.call(u,y):l.set(u,y),y);var Ae=(u,l,y,g)=>({set _(S){j(u,l,S,y)},get _(){return K(u,l,g)}});import{aq as rr,bT as Ke,at as nr,r as or,e as ar,bS as ir}from"./index-6aa4f11f.js";var de=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sr(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}function ve(u){throw new Error('Could not dynamically require "'+u+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}class ur{value;next;constructor(l){this.value=l}}var H,Z,ee;class fr{constructor(){le(this,H,void 0);le(this,Z,void 0);le(this,ee,void 0);this.clear()}enqueue(l){const y=new ur(l);K(this,H)?(K(this,Z).next=y,j(this,Z,y)):(j(this,H,y),j(this,Z,y)),Ae(this,ee)._++}dequeue(){const l=K(this,H);if(l)return j(this,H,K(this,H).next),Ae(this,ee)._--,l.value}clear(){j(this,H,void 0),j(this,Z,void 0),j(this,ee,0)}get size(){return K(this,ee)}*[Symbol.iterator](){let l=K(this,H);for(;l;)yield l.value,l=l.next}}H=new WeakMap,Z=new WeakMap,ee=new WeakMap;function Rr(u){if(!((Number.isInteger(u)||u===Number.POSITIVE_INFINITY)&&u>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");const l=new fr;let y=0;const g=()=>{y--,l.size>0&&l.dequeue()()},S=async(b,w,T)=>{y++;const F=(async()=>b(...T))();w(F);try{await F}catch{}g()},E=(b,w,T)=>{l.enqueue(S.bind(void 0,b,w,T)),(async()=>(await Promise.resolve(),y<u&&l.size>0&&l.dequeue()()))()},R=(b,...w)=>new Promise(T=>{E(b,T,w)});return Object.defineProperties(R,{activeCount:{get:()=>y},pendingCount:{get:()=>l.size},clearQueue:{value:()=>{l.clear()}}}),R}const Tr=(...u)=>{const l=new FormData;return u.forEach(y=>{for(const g in y){const S=y[g];S!==void 0&&(S instanceof Blob?l.append(g,S,S.name):l.append(g,String(S)))}}),l},cr=u=>{const l={};return u.forEach((y,g)=>{l[g]=y}),l},ie=async(u=0)=>new Promise(l=>{setTimeout(l,u)}),Ar=(()=>{let u;return async(l="")=>{u!==l&&(u=l,ie(1e4).then(()=>{u=void 0}),await navigator.clipboard.writeText(l),rr.success("复制成功"))}})(),lr=u=>(...l)=>u()(...l),dr=lr(()=>{var u;return(u=window.__NetworkExtension__)==null?void 0:u.GM_xmlhttpRequest}),vr=()=>{var u;return!!((u=window.__NetworkExtension__)!=null&&u.GM_xmlhttpRequest)},hr=(u="")=>{const l=new Headers;return u.replace(/\r?\n[\t ]+/g," ").split("\r").map(function(g){return g.startsWith(`
`)?g.substring(1):g}).forEach(function(g){var R;let S=g.split(":"),E=(R=S.shift())==null?void 0:R.trim();if(E){let b=S.join(":").trim();l.append(E,b)}}),l},mr=(u="")=>{try{return u===""&&location.href?location.href:u}catch{return u}},yr=async(u,l={},y={})=>{var T;const g=new Request(u,l).clone();if((T=g.signal)!=null&&T.aborted)throw new DOMException("Aborted","AbortError");const S=g.method.toUpperCase(),E=mr(g.url),R=new Headers(g.headers);new Headers(l.headers).forEach((F,v)=>{R.set(v,F)});let b=!1,w;return S!="GET"&&l.body&&(typeof l.body=="string"||l.body instanceof URLSearchParams?w=l.body:l.body instanceof FormData?(w=l.body,R.delete("content-type")):(b=!0,w=await g.blob())),new Promise((F,v)=>{var z;let p={method:S,url:E,headers:cr(R),data:w,binary:b,responseType:"blob",async onload(A){let Y;A.response instanceof Blob&&A.response.size==0||(Y=A.response??A.responseText),await ie();const O=new Response(Y,{status:A.status,statusText:A.statusText,headers:hr(A.responseHeaders)});Object.defineProperty(O,"url",{value:A.finalUrl}),F(O)},async onerror(){await ie(),v(new TypeError("Network request onerror failed"))},async ontimeout(){await ie(),v(new TypeError("Network request ontimeout failed"))},async onabort(){await ie(),v(new DOMException("Aborted","AbortError"))},async onreadystatechange(A){var Y;A.readyState===4&&((Y=g.signal)==null||Y.removeEventListener("abort",C))}};typeof y=="function"?p=y(p):p={...p,...y};const P=dr(p);function C(){P.abort()}(z=g.signal)==null||z.addEventListener("abort",C)})},pr=new Set([location.origin,"https://cdn.jsdelivr.net","https://fastly.jsdelivr.net","https://raw.githubusercontent.com","https://raw.githubusercontents.com","https://raw.gitmirror.com"]),gr=u=>pr.has(new URL(u).origin),Je="https://github.com/gkd-kit/inspect/assets/",Ze="https://github.com/gkd-kit/inspect/files/",Nr=u=>{u=u.toString();let l;if(u.startsWith(Je))l=Ke.resolve({path:"/import/"+u.substring(Je.length)}).href;else if(u.startsWith(Ze))l=Ke.resolve({path:"/import/"+u.substring(Ze.length).split("/")[0]}).href;else throw new Error(`github url ${u} should come from gkd-kit/inspect files/assets`);return location.origin+l},xr=async(u,l,y)=>{const g=new Request(u),S=new URL(g.url);if(gr(S))return fetch(u,l);if(vr())return yr(u,l);if(y!=null&&y.proxy){const E=new URL("https://proxy-workers.lisonge.workers.dev/");E.searchParams.set("proxyUrl",S.href);const R=new Request(u,l);return fetch(E,{method:R.method,headers:R.headers,body:R.body})}else throw nr.networkErrorDlgVisible=!0,new Error("gm is not supported")};var et={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(u,l){(function(y){u.exports=y()})(function(){return function y(g,S,E){function R(T,F){if(!S[T]){if(!g[T]){var v=typeof ve=="function"&&ve;if(!F&&v)return v(T,!0);if(b)return b(T,!0);var p=new Error("Cannot find module '"+T+"'");throw p.code="MODULE_NOT_FOUND",p}var P=S[T]={exports:{}};g[T][0].call(P.exports,function(C){var z=g[T][1][C];return R(z||C)},P,P.exports,y,g,S,E)}return S[T].exports}for(var b=typeof ve=="function"&&ve,w=0;w<E.length;w++)R(E[w]);return R}({1:[function(y,g,S){(function(E){var R=E.MutationObserver||E.WebKitMutationObserver,b;if(R){var w=0,T=new R(C),F=E.document.createTextNode("");T.observe(F,{characterData:!0}),b=function(){F.data=w=++w%2}}else if(!E.setImmediate&&typeof E.MessageChannel<"u"){var v=new E.MessageChannel;v.port1.onmessage=C,b=function(){v.port2.postMessage(0)}}else"document"in E&&"onreadystatechange"in E.document.createElement("script")?b=function(){var A=E.document.createElement("script");A.onreadystatechange=function(){C(),A.onreadystatechange=null,A.parentNode.removeChild(A),A=null},E.document.documentElement.appendChild(A)}:b=function(){setTimeout(C,0)};var p,P=[];function C(){p=!0;for(var A,Y,O=P.length;O;){for(Y=P,P=[],A=-1;++A<O;)Y[A]();O=P.length}p=!1}g.exports=z;function z(A){P.push(A)===1&&!p&&b()}}).call(this,typeof de<"u"?de:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(y,g,S){var E=y(1);function R(){}var b={},w=["REJECTED"],T=["FULFILLED"],F=["PENDING"];g.exports=v;function v(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=F,this.queue=[],this.outcome=void 0,h!==R&&z(this,h)}v.prototype.catch=function(h){return this.then(null,h)},v.prototype.then=function(h,N){if(typeof h!="function"&&this.state===T||typeof N!="function"&&this.state===w)return this;var I=new this.constructor(R);if(this.state!==F){var B=this.state===T?h:N;P(I,B,this.outcome)}else this.queue.push(new p(I,h,N));return I};function p(h,N,I){this.promise=h,typeof N=="function"&&(this.onFulfilled=N,this.callFulfilled=this.otherCallFulfilled),typeof I=="function"&&(this.onRejected=I,this.callRejected=this.otherCallRejected)}p.prototype.callFulfilled=function(h){b.resolve(this.promise,h)},p.prototype.otherCallFulfilled=function(h){P(this.promise,this.onFulfilled,h)},p.prototype.callRejected=function(h){b.reject(this.promise,h)},p.prototype.otherCallRejected=function(h){P(this.promise,this.onRejected,h)};function P(h,N,I){E(function(){var B;try{B=N(I)}catch(M){return b.reject(h,M)}B===h?b.reject(h,new TypeError("Cannot resolve promise with itself")):b.resolve(h,B)})}b.resolve=function(h,N){var I=A(C,N);if(I.status==="error")return b.reject(h,I.value);var B=I.value;if(B)z(h,B);else{h.state=T,h.outcome=N;for(var M=-1,W=h.queue.length;++M<W;)h.queue[M].callFulfilled(N)}return h},b.reject=function(h,N){h.state=w,h.outcome=N;for(var I=-1,B=h.queue.length;++I<B;)h.queue[I].callRejected(N);return h};function C(h){var N=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof N=="function")return function(){N.apply(h,arguments)}}function z(h,N){var I=!1;function B(q){I||(I=!0,b.reject(h,q))}function M(q){I||(I=!0,b.resolve(h,q))}function W(){N(M,B)}var $=A(W);$.status==="error"&&B($.value)}function A(h,N){var I={};try{I.value=h(N),I.status="success"}catch(B){I.status="error",I.value=B}return I}v.resolve=Y;function Y(h){return h instanceof this?h:b.resolve(new this(R),h)}v.reject=O;function O(h){var N=new this(R);return b.reject(N,h)}v.all=ye;function ye(h){var N=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=h.length,B=!1;if(!I)return this.resolve([]);for(var M=new Array(I),W=0,$=-1,q=new this(R);++$<I;)G(h[$],$);return q;function G(ne,ue){N.resolve(ne).then(pe,function(te){B||(B=!0,b.reject(q,te))});function pe(te){M[ue]=te,++W===I&&!B&&(B=!0,b.resolve(q,M))}}}v.race=J;function J(h){var N=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=h.length,B=!1;if(!I)return this.resolve([]);for(var M=-1,W=new this(R);++M<I;)$(h[M]);return W;function $(q){N.resolve(q).then(function(G){B||(B=!0,b.resolve(W,G))},function(G){B||(B=!0,b.reject(W,G))})}}},{1:1}],3:[function(y,g,S){(function(E){typeof E.Promise!="function"&&(E.Promise=y(2))}).call(this,typeof de<"u"?de:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(y,g,S){var E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function R(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function b(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var w=b();function T(){try{if(!w||!w.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),r=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||r)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function F(e,r){e=e||[],r=r||{};try{return new Blob(e,r)}catch(n){if(n.name!=="TypeError")throw n;for(var t=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,o=new t,a=0;a<e.length;a+=1)o.append(e[a]);return o.getBlob(r.type)}}typeof Promise>"u"&&y(3);var v=Promise;function p(e,r){r&&e.then(function(t){r(null,t)},function(t){r(t)})}function P(e,r,t){typeof r=="function"&&e.then(r),typeof t=="function"&&e.catch(t)}function C(e){return typeof e!="string"&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function z(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var A="local-forage-detect-blob-support",Y=void 0,O={},ye=Object.prototype.toString,J="readonly",h="readwrite";function N(e){for(var r=e.length,t=new ArrayBuffer(r),o=new Uint8Array(t),a=0;a<r;a++)o[a]=e.charCodeAt(a);return t}function I(e){return new v(function(r){var t=e.transaction(A,h),o=F([""]);t.objectStore(A).put(o,"key"),t.onabort=function(a){a.preventDefault(),a.stopPropagation(),r(!1)},t.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);r(n||!a||parseInt(a[1],10)>=43)}}).catch(function(){return!1})}function B(e){return typeof Y=="boolean"?v.resolve(Y):I(e).then(function(r){return Y=r,Y})}function M(e){var r=O[e.name],t={};t.promise=new v(function(o,a){t.resolve=o,t.reject=a}),r.deferredOperations.push(t),r.dbReady?r.dbReady=r.dbReady.then(function(){return t.promise}):r.dbReady=t.promise}function W(e){var r=O[e.name],t=r.deferredOperations.pop();if(t)return t.resolve(),t.promise}function $(e,r){var t=O[e.name],o=t.deferredOperations.pop();if(o)return o.reject(r),o.promise}function q(e,r){return new v(function(t,o){if(O[e.name]=O[e.name]||De(),e.db)if(r)M(e),e.db.close();else return t(e.db);var a=[e.name];r&&a.push(e.version);var n=w.open.apply(w,a);r&&(n.onupgradeneeded=function(i){var s=n.result;try{s.createObjectStore(e.storeName),i.oldVersion<=1&&s.createObjectStore(A)}catch(f){if(f.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+i.oldVersion+" to version "+i.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw f}}),n.onerror=function(i){i.preventDefault(),o(n.error)},n.onsuccess=function(){var i=n.result;i.onversionchange=function(s){s.target.close()},t(i),W(e)}})}function G(e){return q(e,!1)}function ne(e){return q(e,!0)}function ue(e,r){if(!e.db)return!0;var t=!e.db.objectStoreNames.contains(e.storeName),o=e.version<e.db.version,a=e.version>e.db.version;if(o&&(e.version!==r&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),a||t){if(t){var n=e.db.version+1;n>e.version&&(e.version=n)}return!0}return!1}function pe(e){return new v(function(r,t){var o=new FileReader;o.onerror=t,o.onloadend=function(a){var n=btoa(a.target.result||"");r({__local_forage_encoded_blob:!0,data:n,type:e.type})},o.readAsBinaryString(e)})}function te(e){var r=N(atob(e.data));return F([r],{type:e.type})}function xe(e){return e&&e.__local_forage_encoded_blob}function nt(e){var r=this,t=r._initReady().then(function(){var o=O[r._dbInfo.name];if(o&&o.dbReady)return o.dbReady});return P(t,e,e),t}function ot(e){M(e);for(var r=O[e.name],t=r.forages,o=0;o<t.length;o++){var a=t[o];a._dbInfo.db&&(a._dbInfo.db.close(),a._dbInfo.db=null)}return e.db=null,G(e).then(function(n){return e.db=n,ue(e)?ne(e):n}).then(function(n){e.db=r.db=n;for(var i=0;i<t.length;i++)t[i]._dbInfo.db=n}).catch(function(n){throw $(e,n),n})}function V(e,r,t,o){o===void 0&&(o=1);try{var a=e.db.transaction(e.storeName,r);t(null,a)}catch(n){if(o>0&&(!e.db||n.name==="InvalidStateError"||n.name==="NotFoundError"))return v.resolve().then(function(){if(!e.db||n.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),ne(e)}).then(function(){return ot(e).then(function(){V(e,r,t,o-1)})}).catch(t);t(n)}}function De(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function at(e){var r=this,t={db:null};if(e)for(var o in e)t[o]=e[o];var a=O[t.name];a||(a=De(),O[t.name]=a),a.forages.push(r),r._initReady||(r._initReady=r.ready,r.ready=nt);var n=[];function i(){return v.resolve()}for(var s=0;s<a.forages.length;s++){var f=a.forages[s];f!==r&&n.push(f._initReady().catch(i))}var c=a.forages.slice(0);return v.all(n).then(function(){return t.db=a.db,G(t)}).then(function(d){return t.db=d,ue(t,r._defaultConfig.version)?ne(t):d}).then(function(d){t.db=a.db=d,r._dbInfo=t;for(var m=0;m<c.length;m++){var _=c[m];_!==r&&(_._dbInfo.db=t.db,_._dbInfo.version=t.version)}})}function it(e,r){var t=this;e=C(e);var o=new v(function(a,n){t.ready().then(function(){V(t._dbInfo,J,function(i,s){if(i)return n(i);try{var f=s.objectStore(t._dbInfo.storeName),c=f.get(e);c.onsuccess=function(){var d=c.result;d===void 0&&(d=null),xe(d)&&(d=te(d)),a(d)},c.onerror=function(){n(c.error)}}catch(d){n(d)}})}).catch(n)});return p(o,r),o}function st(e,r){var t=this,o=new v(function(a,n){t.ready().then(function(){V(t._dbInfo,J,function(i,s){if(i)return n(i);try{var f=s.objectStore(t._dbInfo.storeName),c=f.openCursor(),d=1;c.onsuccess=function(){var m=c.result;if(m){var _=m.value;xe(_)&&(_=te(_));var x=e(_,m.key,d++);x!==void 0?a(x):m.continue()}else a()},c.onerror=function(){n(c.error)}}catch(m){n(m)}})}).catch(n)});return p(o,r),o}function ut(e,r,t){var o=this;e=C(e);var a=new v(function(n,i){var s;o.ready().then(function(){return s=o._dbInfo,ye.call(r)==="[object Blob]"?B(s.db).then(function(f){return f?r:pe(r)}):r}).then(function(f){V(o._dbInfo,h,function(c,d){if(c)return i(c);try{var m=d.objectStore(o._dbInfo.storeName);f===null&&(f=void 0);var _=m.put(f,e);d.oncomplete=function(){f===void 0&&(f=null),n(f)},d.onabort=d.onerror=function(){var x=_.error?_.error:_.transaction.error;i(x)}}catch(x){i(x)}})}).catch(i)});return p(a,t),a}function ft(e,r){var t=this;e=C(e);var o=new v(function(a,n){t.ready().then(function(){V(t._dbInfo,h,function(i,s){if(i)return n(i);try{var f=s.objectStore(t._dbInfo.storeName),c=f.delete(e);s.oncomplete=function(){a()},s.onerror=function(){n(c.error)},s.onabort=function(){var d=c.error?c.error:c.transaction.error;n(d)}}catch(d){n(d)}})}).catch(n)});return p(o,r),o}function ct(e){var r=this,t=new v(function(o,a){r.ready().then(function(){V(r._dbInfo,h,function(n,i){if(n)return a(n);try{var s=i.objectStore(r._dbInfo.storeName),f=s.clear();i.oncomplete=function(){o()},i.onabort=i.onerror=function(){var c=f.error?f.error:f.transaction.error;a(c)}}catch(c){a(c)}})}).catch(a)});return p(t,e),t}function lt(e){var r=this,t=new v(function(o,a){r.ready().then(function(){V(r._dbInfo,J,function(n,i){if(n)return a(n);try{var s=i.objectStore(r._dbInfo.storeName),f=s.count();f.onsuccess=function(){o(f.result)},f.onerror=function(){a(f.error)}}catch(c){a(c)}})}).catch(a)});return p(t,e),t}function dt(e,r){var t=this,o=new v(function(a,n){if(e<0){a(null);return}t.ready().then(function(){V(t._dbInfo,J,function(i,s){if(i)return n(i);try{var f=s.objectStore(t._dbInfo.storeName),c=!1,d=f.openKeyCursor();d.onsuccess=function(){var m=d.result;if(!m){a(null);return}e===0||c?a(m.key):(c=!0,m.advance(e))},d.onerror=function(){n(d.error)}}catch(m){n(m)}})}).catch(n)});return p(o,r),o}function vt(e){var r=this,t=new v(function(o,a){r.ready().then(function(){V(r._dbInfo,J,function(n,i){if(n)return a(n);try{var s=i.objectStore(r._dbInfo.storeName),f=s.openKeyCursor(),c=[];f.onsuccess=function(){var d=f.result;if(!d){o(c);return}c.push(d.key),d.continue()},f.onerror=function(){a(f.error)}}catch(d){a(d)}})}).catch(a)});return p(t,e),t}function ht(e,r){r=z.apply(this,arguments);var t=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||t.name,e.storeName=e.storeName||t.storeName);var o=this,a;if(!e.name)a=v.reject("Invalid arguments");else{var n=e.name===t.name&&o._dbInfo.db,i=n?v.resolve(o._dbInfo.db):G(e).then(function(s){var f=O[e.name],c=f.forages;f.db=s;for(var d=0;d<c.length;d++)c[d]._dbInfo.db=s;return s});e.storeName?a=i.then(function(s){if(s.objectStoreNames.contains(e.storeName)){var f=s.version+1;M(e);var c=O[e.name],d=c.forages;s.close();for(var m=0;m<d.length;m++){var _=d[m];_._dbInfo.db=null,_._dbInfo.version=f}var x=new v(function(D,U){var L=w.open(e.name,f);L.onerror=function(k){var ae=L.result;ae.close(),U(k)},L.onupgradeneeded=function(){var k=L.result;k.deleteObjectStore(e.storeName)},L.onsuccess=function(){var k=L.result;k.close(),D(k)}});return x.then(function(D){c.db=D;for(var U=0;U<d.length;U++){var L=d[U];L._dbInfo.db=D,W(L._dbInfo)}}).catch(function(D){throw($(e,D)||v.resolve()).catch(function(){}),D})}}):a=i.then(function(s){M(e);var f=O[e.name],c=f.forages;s.close();for(var d=0;d<c.length;d++){var m=c[d];m._dbInfo.db=null}var _=new v(function(x,D){var U=w.deleteDatabase(e.name);U.onerror=function(){var L=U.result;L&&L.close(),D(U.error)},U.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},U.onsuccess=function(){var L=U.result;L&&L.close(),x(L)}});return _.then(function(x){f.db=x;for(var D=0;D<c.length;D++){var U=c[D];W(U._dbInfo)}}).catch(function(x){throw($(e,x)||v.resolve()).catch(function(){}),x})})}return p(a,r),a}var mt={_driver:"asyncStorage",_initStorage:at,_support:T(),iterate:st,getItem:it,setItem:ut,removeItem:ft,clear:ct,length:lt,key:dt,keys:vt,dropInstance:ht};function yt(){return typeof openDatabase=="function"}var Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",pt="~~local_forage_type~",Be=/^~~local_forage_type~([^~]+)~/,fe="__lfsc__:",ge=fe.length,be="arbf",_e="blob",Pe="si08",Ce="ui08",Oe="uic8",Le="si16",Fe="si32",Ue="ur16",Me="ui32",Ye="fl32",ze="fl64",We=ge+be.length,$e=Object.prototype.toString;function qe(e){var r=e.length*.75,t=e.length,o,a=0,n,i,s,f;e[e.length-1]==="="&&(r--,e[e.length-2]==="="&&r--);var c=new ArrayBuffer(r),d=new Uint8Array(c);for(o=0;o<t;o+=4)n=Q.indexOf(e[o]),i=Q.indexOf(e[o+1]),s=Q.indexOf(e[o+2]),f=Q.indexOf(e[o+3]),d[a++]=n<<2|i>>4,d[a++]=(i&15)<<4|s>>2,d[a++]=(s&3)<<6|f&63;return c}function we(e){var r=new Uint8Array(e),t="",o;for(o=0;o<r.length;o+=3)t+=Q[r[o]>>2],t+=Q[(r[o]&3)<<4|r[o+1]>>4],t+=Q[(r[o+1]&15)<<2|r[o+2]>>6],t+=Q[r[o+2]&63];return r.length%3===2?t=t.substring(0,t.length-1)+"=":r.length%3===1&&(t=t.substring(0,t.length-2)+"=="),t}function gt(e,r){var t="";if(e&&(t=$e.call(e)),e&&(t==="[object ArrayBuffer]"||e.buffer&&$e.call(e.buffer)==="[object ArrayBuffer]")){var o,a=fe;e instanceof ArrayBuffer?(o=e,a+=be):(o=e.buffer,t==="[object Int8Array]"?a+=Pe:t==="[object Uint8Array]"?a+=Ce:t==="[object Uint8ClampedArray]"?a+=Oe:t==="[object Int16Array]"?a+=Le:t==="[object Uint16Array]"?a+=Ue:t==="[object Int32Array]"?a+=Fe:t==="[object Uint32Array]"?a+=Me:t==="[object Float32Array]"?a+=Ye:t==="[object Float64Array]"?a+=ze:r(new Error("Failed to get type for BinaryArray"))),r(a+we(o))}else if(t==="[object Blob]"){var n=new FileReader;n.onload=function(){var i=pt+e.type+"~"+we(this.result);r(fe+_e+i)},n.readAsArrayBuffer(e)}else try{r(JSON.stringify(e))}catch(i){console.error("Couldn't convert value into a JSON string: ",e),r(null,i)}}function bt(e){if(e.substring(0,ge)!==fe)return JSON.parse(e);var r=e.substring(We),t=e.substring(ge,We),o;if(t===_e&&Be.test(r)){var a=r.match(Be);o=a[1],r=r.substring(a[0].length)}var n=qe(r);switch(t){case be:return n;case _e:return F([n],{type:o});case Pe:return new Int8Array(n);case Ce:return new Uint8Array(n);case Oe:return new Uint8ClampedArray(n);case Le:return new Int16Array(n);case Ue:return new Uint16Array(n);case Fe:return new Int32Array(n);case Me:return new Uint32Array(n);case Ye:return new Float32Array(n);case ze:return new Float64Array(n);default:throw new Error("Unkown type: "+t)}}var Ie={serialize:gt,deserialize:bt,stringToBuffer:qe,bufferToString:we};function ke(e,r,t,o){e.executeSql("CREATE TABLE IF NOT EXISTS "+r.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],t,o)}function _t(e){var r=this,t={db:null};if(e)for(var o in e)t[o]=typeof e[o]!="string"?e[o].toString():e[o];var a=new v(function(n,i){try{t.db=openDatabase(t.name,String(t.version),t.description,t.size)}catch(s){return i(s)}t.db.transaction(function(s){ke(s,t,function(){r._dbInfo=t,n()},function(f,c){i(c)})},i)});return t.serializer=Ie,a}function X(e,r,t,o,a,n){e.executeSql(t,o,a,function(i,s){s.code===s.SYNTAX_ERR?i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[r.storeName],function(f,c){c.rows.length?n(f,s):ke(f,r,function(){f.executeSql(t,o,a,n)},n)},n):n(i,s)},n)}function wt(e,r){var t=this;e=C(e);var o=new v(function(a,n){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(s){X(s,i,"SELECT * FROM "+i.storeName+" WHERE key = ? LIMIT 1",[e],function(f,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=i.serializer.deserialize(d)),a(d)},function(f,c){n(c)})})}).catch(n)});return p(o,r),o}function It(e,r){var t=this,o=new v(function(a,n){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(s){X(s,i,"SELECT * FROM "+i.storeName,[],function(f,c){for(var d=c.rows,m=d.length,_=0;_<m;_++){var x=d.item(_),D=x.value;if(D&&(D=i.serializer.deserialize(D)),D=e(D,x.key,_+1),D!==void 0){a(D);return}}a()},function(f,c){n(c)})})}).catch(n)});return p(o,r),o}function He(e,r,t,o){var a=this;e=C(e);var n=new v(function(i,s){a.ready().then(function(){r===void 0&&(r=null);var f=r,c=a._dbInfo;c.serializer.serialize(r,function(d,m){m?s(m):c.db.transaction(function(_){X(_,c,"INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,d],function(){i(f)},function(x,D){s(D)})},function(_){if(_.code===_.QUOTA_ERR){if(o>0){i(He.apply(a,[e,f,t,o-1]));return}s(_)}})})}).catch(s)});return p(n,t),n}function Et(e,r,t){return He.apply(this,[e,r,t,1])}function St(e,r){var t=this;e=C(e);var o=new v(function(a,n){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(s){X(s,i,"DELETE FROM "+i.storeName+" WHERE key = ?",[e],function(){a()},function(f,c){n(c)})})}).catch(n)});return p(o,r),o}function Rt(e){var r=this,t=new v(function(o,a){r.ready().then(function(){var n=r._dbInfo;n.db.transaction(function(i){X(i,n,"DELETE FROM "+n.storeName,[],function(){o()},function(s,f){a(f)})})}).catch(a)});return p(t,e),t}function Tt(e){var r=this,t=new v(function(o,a){r.ready().then(function(){var n=r._dbInfo;n.db.transaction(function(i){X(i,n,"SELECT COUNT(key) as c FROM "+n.storeName,[],function(s,f){var c=f.rows.item(0).c;o(c)},function(s,f){a(f)})})}).catch(a)});return p(t,e),t}function At(e,r){var t=this,o=new v(function(a,n){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(s){X(s,i,"SELECT key FROM "+i.storeName+" WHERE id = ? LIMIT 1",[e+1],function(f,c){var d=c.rows.length?c.rows.item(0).key:null;a(d)},function(f,c){n(c)})})}).catch(n)});return p(o,r),o}function Nt(e){var r=this,t=new v(function(o,a){r.ready().then(function(){var n=r._dbInfo;n.db.transaction(function(i){X(i,n,"SELECT key FROM "+n.storeName,[],function(s,f){for(var c=[],d=0;d<f.rows.length;d++)c.push(f.rows.item(d).key);o(c)},function(s,f){a(f)})})}).catch(a)});return p(t,e),t}function xt(e){return new v(function(r,t){e.transaction(function(o){o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(a,n){for(var i=[],s=0;s<n.rows.length;s++)i.push(n.rows.item(s).name);r({db:e,storeNames:i})},function(a,n){t(n)})},function(o){t(o)})})}function Dt(e,r){r=z.apply(this,arguments);var t=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||t.name,e.storeName=e.storeName||t.storeName);var o=this,a;return e.name?a=new v(function(n){var i;e.name===t.name?i=o._dbInfo.db:i=openDatabase(e.name,"","",0),e.storeName?n({db:i,storeNames:[e.storeName]}):n(xt(i))}).then(function(n){return new v(function(i,s){n.db.transaction(function(f){function c(x){return new v(function(D,U){f.executeSql("DROP TABLE IF EXISTS "+x,[],function(){D()},function(L,k){U(k)})})}for(var d=[],m=0,_=n.storeNames.length;m<_;m++)d.push(c(n.storeNames[m]));v.all(d).then(function(){i()}).catch(function(x){s(x)})},function(f){s(f)})})}):a=v.reject("Invalid arguments"),p(a,r),a}var Bt={_driver:"webSQLStorage",_initStorage:_t,_support:yt(),iterate:It,getItem:wt,setItem:Et,removeItem:St,clear:Rt,length:Tt,key:At,keys:Nt,dropInstance:Dt};function Pt(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Ge(e,r){var t=e.name+"/";return e.storeName!==r.storeName&&(t+=e.storeName+"/"),t}function Ct(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Ot(){return!Ct()||localStorage.length>0}function Lt(e){var r=this,t={};if(e)for(var o in e)t[o]=e[o];return t.keyPrefix=Ge(e,r._defaultConfig),Ot()?(r._dbInfo=t,t.serializer=Ie,v.resolve()):v.reject()}function Ft(e){var r=this,t=r.ready().then(function(){for(var o=r._dbInfo.keyPrefix,a=localStorage.length-1;a>=0;a--){var n=localStorage.key(a);n.indexOf(o)===0&&localStorage.removeItem(n)}});return p(t,e),t}function Ut(e,r){var t=this;e=C(e);var o=t.ready().then(function(){var a=t._dbInfo,n=localStorage.getItem(a.keyPrefix+e);return n&&(n=a.serializer.deserialize(n)),n});return p(o,r),o}function Mt(e,r){var t=this,o=t.ready().then(function(){for(var a=t._dbInfo,n=a.keyPrefix,i=n.length,s=localStorage.length,f=1,c=0;c<s;c++){var d=localStorage.key(c);if(d.indexOf(n)===0){var m=localStorage.getItem(d);if(m&&(m=a.serializer.deserialize(m)),m=e(m,d.substring(i),f++),m!==void 0)return m}}});return p(o,r),o}function Yt(e,r){var t=this,o=t.ready().then(function(){var a=t._dbInfo,n;try{n=localStorage.key(e)}catch{n=null}return n&&(n=n.substring(a.keyPrefix.length)),n});return p(o,r),o}function zt(e){var r=this,t=r.ready().then(function(){for(var o=r._dbInfo,a=localStorage.length,n=[],i=0;i<a;i++){var s=localStorage.key(i);s.indexOf(o.keyPrefix)===0&&n.push(s.substring(o.keyPrefix.length))}return n});return p(t,e),t}function Wt(e){var r=this,t=r.keys().then(function(o){return o.length});return p(t,e),t}function $t(e,r){var t=this;e=C(e);var o=t.ready().then(function(){var a=t._dbInfo;localStorage.removeItem(a.keyPrefix+e)});return p(o,r),o}function qt(e,r,t){var o=this;e=C(e);var a=o.ready().then(function(){r===void 0&&(r=null);var n=r;return new v(function(i,s){var f=o._dbInfo;f.serializer.serialize(r,function(c,d){if(d)s(d);else try{localStorage.setItem(f.keyPrefix+e,c),i(n)}catch(m){(m.name==="QuotaExceededError"||m.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(m),s(m)}})})});return p(a,t),a}function kt(e,r){if(r=z.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var t=this.config();e.name=e.name||t.name,e.storeName=e.storeName||t.storeName}var o=this,a;return e.name?a=new v(function(n){e.storeName?n(Ge(e,o._defaultConfig)):n(e.name+"/")}).then(function(n){for(var i=localStorage.length-1;i>=0;i--){var s=localStorage.key(i);s.indexOf(n)===0&&localStorage.removeItem(s)}}):a=v.reject("Invalid arguments"),p(a,r),a}var Ht={_driver:"localStorageWrapper",_initStorage:Lt,_support:Pt(),iterate:Mt,getItem:Ut,setItem:qt,removeItem:$t,clear:Ft,length:Wt,key:Yt,keys:zt,dropInstance:kt},Gt=function(r,t){return r===t||typeof r=="number"&&typeof t=="number"&&isNaN(r)&&isNaN(t)},Vt=function(r,t){for(var o=r.length,a=0;a<o;){if(Gt(r[a],t))return!0;a++}return!1},Ve=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},oe={},je={},re={INDEXEDDB:mt,WEBSQL:Bt,LOCALSTORAGE:Ht},jt=[re.INDEXEDDB._driver,re.WEBSQL._driver,re.LOCALSTORAGE._driver],ce=["dropInstance"],Ee=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(ce),Qt={description:"",driver:jt.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Xt(e,r){e[r]=function(){var t=arguments;return e.ready().then(function(){return e[r].apply(e,t)})}}function Se(){for(var e=1;e<arguments.length;e++){var r=arguments[e];if(r)for(var t in r)r.hasOwnProperty(t)&&(Ve(r[t])?arguments[0][t]=r[t].slice():arguments[0][t]=r[t])}return arguments[0]}var Kt=function(){function e(r){R(this,e);for(var t in re)if(re.hasOwnProperty(t)){var o=re[t],a=o._driver;this[t]=a,oe[a]||this.defineDriver(o)}this._defaultConfig=Se({},Qt),this._config=Se({},this._defaultConfig,r),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(t){if((typeof t>"u"?"undefined":E(t))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var o in t){if(o==="storeName"&&(t[o]=t[o].replace(/\W/g,"_")),o==="version"&&typeof t[o]!="number")return new Error("Database version must be a number.");this._config[o]=t[o]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config},e.prototype.defineDriver=function(t,o,a){var n=new v(function(i,s){try{var f=t._driver,c=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){s(c);return}for(var d=Ee.concat("_initStorage"),m=0,_=d.length;m<_;m++){var x=d[m],D=!Vt(ce,x);if((D||t[x])&&typeof t[x]!="function"){s(c);return}}var U=function(){for(var ae=function(er){return function(){var tr=new Error("Method "+er+" is not implemented by the current driver"),Qe=v.reject(tr);return p(Qe,arguments[arguments.length-1]),Qe}},Re=0,Zt=ce.length;Re<Zt;Re++){var Te=ce[Re];t[Te]||(t[Te]=ae(Te))}};U();var L=function(ae){oe[f]&&console.info("Redefining LocalForage driver: "+f),oe[f]=t,je[f]=ae,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(L,s):L(!!t._support):L(!0)}catch(k){s(k)}});return P(n,o,a),n},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(t,o,a){var n=oe[t]?v.resolve(oe[t]):v.reject(new Error("Driver not found."));return P(n,o,a),n},e.prototype.getSerializer=function(t){var o=v.resolve(Ie);return P(o,t),o},e.prototype.ready=function(t){var o=this,a=o._driverSet.then(function(){return o._ready===null&&(o._ready=o._initDriver()),o._ready});return P(a,t,t),a},e.prototype.setDriver=function(t,o,a){var n=this;Ve(t)||(t=[t]);var i=this._getSupportedDrivers(t);function s(){n._config.driver=n.driver()}function f(m){return n._extend(m),s(),n._ready=n._initStorage(n._config),n._ready}function c(m){return function(){var _=0;function x(){for(;_<m.length;){var D=m[_];return _++,n._dbInfo=null,n._ready=null,n.getDriver(D).then(f).catch(x)}s();var U=new Error("No available storage method found.");return n._driverSet=v.reject(U),n._driverSet}return x()}}var d=this._driverSet!==null?this._driverSet.catch(function(){return v.resolve()}):v.resolve();return this._driverSet=d.then(function(){var m=i[0];return n._dbInfo=null,n._ready=null,n.getDriver(m).then(function(_){n._driver=_._driver,s(),n._wrapLibraryMethodsWithReady(),n._initDriver=c(i)})}).catch(function(){s();var m=new Error("No available storage method found.");return n._driverSet=v.reject(m),n._driverSet}),P(this._driverSet,o,a),this._driverSet},e.prototype.supports=function(t){return!!je[t]},e.prototype._extend=function(t){Se(this,t)},e.prototype._getSupportedDrivers=function(t){for(var o=[],a=0,n=t.length;a<n;a++){var i=t[a];this.supports(i)&&o.push(i)}return o},e.prototype._wrapLibraryMethodsWithReady=function(){for(var t=0,o=Ee.length;t<o;t++)Xt(this,Ee[t])},e.prototype.createInstance=function(t){return new e(t)},e}(),Jt=new Kt;g.exports=Jt},{3:3}]},{},[4])(4)})})(et);var br=et.exports;const he=sr(br),me=(u={})=>{u.driver??(u.driver=he.INDEXEDDB);const l=he.createInstance(u);return{keys:async()=>l.keys(),hasItem:async w=>{const T=w.toString();return l.keys().then(F=>F.includes(T))},getItem:async w=>l.getItem(w.toString()),setItem:async(w,T)=>l.setItem(w.toString(),T),removeItem:async w=>l.removeItem(w.toString()),getAllItems:async()=>Promise.all((await l.keys()).map(w=>l.getItem(w)))}},Ne=(u,l)=>{const y=or(typeof l=="function"?l():l);let g=!1;return ar(y,async()=>{g&&await he.setItem(u,ir(y))}),he.getItem(u).then(S=>{S&&Object.assign(y,S),g=!0}),y},se=me({name:"snapshot",version:1}),_r=se.setItem;se.setItem=async(u,l)=>{const y={...l,nodes:[]};return await tt.setItem(u,y),_r(u,l)};const wr=se.removeItem;se.removeItem=async u=>{await Promise.all([wr(u),tt.removeItem(u),rt.removeItem(u)])};const tt=me({name:"shallowSnapshot",version:1}),rt=me({name:"screenshot",version:1}),Dr=async(u,l)=>{await se.setItem(u.id,u),await rt.setItem(u.id,l)};me({name:"cache",version:1});const Br=Ne("url",{}),Pr=Ne("githubPng",{}),Cr=Ne("githubZip",{});export{se as a,de as b,Ar as c,sr as d,rt as e,ie as f,Nr as g,xr as h,Pr as i,Cr as j,Dr as k,ve as l,Tr as o,Rr as p,tt as s,Br as u};
//# sourceMappingURL=storage-501850b1.js.map