import{aq as y}from"./index-f1e88277.js";import{i as S,a as E,j as v}from"./file_type-8d8703c5.js";import{p as L,u as j,a as B,f as F,j as b}from"./storage-b2ff840d.js";const P=(()=>{if(typeof self>"u")return!1;if("top"in self&&self!==top)try{}catch{return!1}return"showOpenFilePicker"in self})(),O=P?Promise.resolve().then(function(){return R}):Promise.resolve().then(function(){return J});async function T(...e){return(await O).default(...e)}P?Promise.resolve().then(function(){return W}):Promise.resolve().then(function(){return M});P?Promise.resolve().then(function(){return z}):Promise.resolve().then(function(){return q});const I=async e=>{const r=await e.getFile();return r.handle=e,r};var N=async(e=[{}])=>{Array.isArray(e)||(e=[e]);const r=[];e.forEach((i,a)=>{r[a]={description:i.description||"Files",accept:{}},i.mimeTypes?i.mimeTypes.map(o=>{r[a].accept[o]=i.extensions||[]}):r[a].accept["*/*"]=i.extensions||[]});const n=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:r,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),t=await Promise.all(n.map(I));return e[0].multiple?t:t[0]},R={__proto__:null,default:N};function w(e){function r(n){if(Object(n)!==n)return Promise.reject(new TypeError(n+" is not an object."));var t=n.done;return Promise.resolve(n.value).then(function(i){return{value:i,done:t}})}return w=function(n){this.s=n,this.n=n.next},w.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var t=this.s.return;return t===void 0?Promise.resolve({value:n,done:!0}):r(t.apply(this.s,arguments))},throw:function(n){var t=this.s.return;return t===void 0?Promise.reject(n):r(t.apply(this.s,arguments))}},new w(e)}const A=async(e,r,n=e.name,t)=>{const i=[],a=[];var o,s=!1,l=!1;try{for(var u,c=function(p){var d,f,m,g=2;for(typeof Symbol<"u"&&(f=Symbol.asyncIterator,m=Symbol.iterator);g--;){if(f&&(d=p[f])!=null)return d.call(p);if(m&&(d=p[m])!=null)return new w(d.call(p));f="@@asyncIterator",m="@@iterator"}throw new TypeError("Object is not async iterable")}(e.values());s=!(u=await c.next()).done;s=!1){const p=u.value,d=`${n}/${p.name}`;p.kind==="file"?a.push(p.getFile().then(f=>(f.directoryHandle=e,f.handle=p,Object.defineProperty(f,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>d})))):p.kind!=="directory"||!r||t&&t(p)||i.push(A(p,r,d,t))}}catch(p){l=!0,o=p}finally{try{s&&c.return!=null&&await c.return()}finally{if(l)throw o}}return[...(await Promise.all(i)).flat(),...await Promise.all(a)]};var U=async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";const r=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await r.values()).next()).done?[r]:A(r,e.recursive,void 0,e.skipDirectory)},W={__proto__:null,default:U},$=async(e,r=[{}],n=null,t=!1,i=null)=>{Array.isArray(r)||(r=[r]),r[0].fileName=r[0].fileName||"Untitled";const a=[];let o=null;if(e instanceof Blob&&e.type?o=e.type:e.headers&&e.headers.get("content-type")&&(o=e.headers.get("content-type")),r.forEach((u,c)=>{a[c]={description:u.description||"Files",accept:{}},u.mimeTypes?(c===0&&o&&u.mimeTypes.push(o),u.mimeTypes.map(p=>{a[c].accept[p]=u.extensions||[]})):o?a[c].accept[o]=u.extensions||[]:a[c].accept["*/*"]=u.extensions||[]}),n)try{await n.getFile()}catch(u){if(n=null,t)throw u}const s=n||await window.showSaveFilePicker({suggestedName:r[0].fileName,id:r[0].id,startIn:r[0].startIn,types:a,excludeAcceptAllOption:r[0].excludeAcceptAllOption||!1});!n&&i&&i(s);const l=await s.createWritable();return"stream"in e?(await e.stream().pipeTo(l),s):"body"in e?(await e.body.pipeTo(l),s):(await l.write(await e),await l.close(),s)},z={__proto__:null,default:$},D=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((r,n)=>{const t=document.createElement("input");t.type="file";const i=[...e.map(l=>l.mimeTypes||[]),...e.map(l=>l.extensions||[])].join();t.multiple=e[0].multiple||!1,t.accept=i||"",t.style.display="none",document.body.append(t);const a=l=>{typeof o=="function"&&o(),r(l)},o=e[0].legacySetup&&e[0].legacySetup(a,()=>o(n),t),s=()=>{window.removeEventListener("focus",s),t.remove()};t.addEventListener("click",()=>{window.addEventListener("focus",s)}),t.addEventListener("change",()=>{window.removeEventListener("focus",s),t.remove(),a(t.multiple?Array.from(t.files):t.files[0])}),"showPicker"in HTMLInputElement.prototype?t.showPicker():t.click()})),J={__proto__:null,default:D},H=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((r,n)=>{const t=document.createElement("input");t.type="file",t.webkitdirectory=!0;const i=o=>{typeof a=="function"&&a(),r(o)},a=e[0].legacySetup&&e[0].legacySetup(i,()=>a(n),t);t.addEventListener("change",()=>{let o=Array.from(t.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(o=o.filter(s=>s.webkitRelativePath.split("/").every(l=>!e[0].skipDirectory({name:l,kind:"directory"})))):o=o.filter(s=>s.webkitRelativePath.split("/").length===2),i(o)}),"showPicker"in HTMLInputElement.prototype?t.showPicker():t.click()})),M={__proto__:null,default:H},Z=async(e,r={})=>{Array.isArray(r)&&(r=r[0]);const n=document.createElement("a");let t=e;"body"in e&&(t=await async function(o,s){const l=o.getReader(),u=new ReadableStream({start:d=>async function f(){return l.read().then(({done:m,value:g})=>{if(!m)return d.enqueue(g),f();d.close()})}()}),c=new Response(u),p=await c.blob();return l.releaseLock(),new Blob([p],{type:s})}(e.body,e.headers.get("content-type"))),n.download=r.fileName||"Untitled",n.href=URL.createObjectURL(await t);const i=()=>{typeof a=="function"&&a()},a=r.legacySetup&&r.legacySetup(i,()=>a(),n);return n.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(n.href),3e4),i()}),n.click(),null},q={__proto__:null,default:Z};function _(e,r,n){const t=new Uint8Array(e),i=new Uint8Array(r),a=i.length,o=[];let s=0,l=-1,u=0;for(let c=0;c<t.length;c++)if(t[c]===i[0]){l=0;for(let p=1;p<a;p++)if(t[c+p]!==i[p]){l=-1;break}if(l===0){const p=e.slice(s,c);if(o.push(p),s=c+a,c+=a-1,u++,n&&u===Math.abs(n))break}}if(s<t.length){const c=e.slice(s);o.push(c)}return o}const h=new Uint8Array([0,0,0,0,73,69,78,68,174,66,96,130]).buffer,x=new TextDecoder,k=async e=>{const r=e.filter(a=>a.endsWith(".json"))[0],n=e.filter(a=>a.endsWith(".png"))[0];if(!r||!n)return!1;const t=JSON.parse(await r.async("string")),i=await n.async("arraybuffer");return await b(t,i),!0},K=async()=>{const e=await T({multiple:!0,mimeTypes:["image/png","application/zip"]}),r=e.filter(i=>i.name.endsWith(".zip")),n=e.filter(i=>i.name.endsWith(".png"));if(r.length==0&&n.length==0){y.warning("没有发现可导入文件");return}let t=0;r.length>0&&await Promise.any(r.map(async i=>{const a=await v.loadAsync(i);await k(a)&&t++;const o=a.filter(s=>s.endsWith(".zip"));await Promise.any(o.map(async s=>{const l=await v.loadAsync(s.async("blob"));await k(l)&&t++}))})),n.length>0&&await Promise.any(n.map(async i=>{const a=await i.arrayBuffer(),[o,s]=_(a,h,2);if(!s)return;const l=await new Blob([o,h]).arrayBuffer(),u=JSON.parse(x.decode(s));await b(u,l),t++})),t>0?y.success(`导入${t}条记录`):y.warning("没有发现可导入记录")},Q=async(e=[])=>{if(typeof e=="string"&&(e=[e]),e.length==0)return;e=[...new Set(e)];const r=L(2);let n=0;const t=await Promise.allSettled(e.map(i=>r(async()=>{const a=j[i];if(a){const c=await B.getItem(a);if(c)return n++,c}const s=await(await F(i,void 0,{proxy:!0}).catch(c=>{throw y.error(`网络异常: ${new URL(i).host}/${c.message||""}`),console.warn(["download failed",i,c]),c})).arrayBuffer();let l,u;if(S(s)){const[c,p]=_(s,h,2);if(!p)return;u=await new Blob([c,h]).arrayBuffer(),l=JSON.parse(x.decode(p))}else if(E(s)){const c=await v.loadAsync(s),[p]=c.filter(f=>f.endsWith(".json")),[d]=c.filter(f=>f.endsWith(".png"));if(!p||!d)return;u=await d.async("arraybuffer"),l=JSON.parse(await p.async("string"))}else throw new Error("file must be png or zip");return await b(l,u),n++,l})));return n==0?y.warning("没有发现可导入记录"):n==e.length?y.success(`导入${n}条快照`):n<e.length&&y.success(`导入${n}条快照，失败${e.length-n}`),t};export{Q as a,K as i};
//# sourceMappingURL=import-7d550d4a.js.map