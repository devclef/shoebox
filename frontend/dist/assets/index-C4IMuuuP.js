var EE=Object.defineProperty;var _E=Object.getPrototypeOf;var bE=Reflect.get;var bh=t=>{throw TypeError(t)};var gE=(t,e,i)=>e in t?EE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var gh=(t,e,i)=>gE(t,typeof e!="symbol"?e+"":e,i),Fl=(t,e,i)=>e.has(t)||bh("Cannot "+i);var A=(t,e,i)=>(Fl(t,e,"read from private field"),i?i.call(t):e.get(t)),We=(t,e,i)=>e.has(t)?bh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),je=(t,e,i,a)=>(Fl(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),dt=(t,e,i)=>(Fl(t,e,"access private method"),i);var rs=(t,e,i)=>bE(_E(t),i,e);import{R as $n,r as Hn}from"./index-BwqVgpH4.js";import{H as yE,C as TE}from"./hls-MmTFPL5i.js";import{C as ns,M as AE}from"./mixin-DIQKSja0.js";var kE=Object.create,ap=Object.defineProperty,SE=Object.getOwnPropertyDescriptor,wE=Object.getOwnPropertyNames,IE=Object.getPrototypeOf,RE=Object.prototype.hasOwnProperty,rp=function(t,e){return function(){return t&&(e=t(t=0)),e}},tt=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}},LE=function(t,e,i,a){if(e&&typeof e=="object"||typeof e=="function")for(var r=wE(e),n=0,s=r.length,o;n<s;n++)o=r[n],!RE.call(t,o)&&o!==i&&ap(t,o,{get:(function(l){return e[l]}).bind(null,o),enumerable:!(a=SE(e,o))||a.enumerable});return t},_t=function(t,e,i){return i=t!=null?kE(IE(t)):{},LE(!t||!t.__esModule?ap(i,"default",{value:t,enumerable:!0}):i,t)},li=tt(function(t,e){var i;typeof window<"u"?i=window:typeof global<"u"?i=global:typeof self<"u"?i=self:i={},e.exports=i});function La(t,e){return e!=null&&typeof Symbol<"u"&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):La(t,e)}var Ca=rp(function(){Ca()});function np(t){"@swc/helpers - typeof";return t&&typeof Symbol<"u"&&t.constructor===Symbol?"symbol":typeof t}var sp=rp(function(){}),op=tt(function(t,e){var i=Array.prototype.slice;e.exports=a;function a(r,n){for(("length"in r)||(r=[r]),r=i.call(r);r.length;){var s=r.shift(),o=n(s);if(o)return o;s.childNodes&&s.childNodes.length&&(r=i.call(s.childNodes).concat(r))}}}),CE=tt(function(t,e){Ca(),e.exports=i;function i(a,r){if(!La(this,i))return new i(a,r);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=r||null}i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),DE=tt(function(t,e){Ca(),e.exports=i;function i(a,r){if(!La(this,i))return new i(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=r||null}i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(a,r,n){var s=this.data,o=s.substring(0,a),l=s.substring(a+r,s.length);this.data=o+n+l,this.length=this.data.length}}),lp=tt(function(t,e){e.exports=i;function i(a){var r=this,n=a.type;a.target||(a.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(o){a.currentTarget=r,typeof o=="function"?o(a):o.handleEvent(a)});r.parentNode&&r.parentNode.dispatchEvent(a)}}),dp=tt(function(t,e){e.exports=i;function i(a,r){var n=this;n.listeners||(n.listeners={}),n.listeners[a]||(n.listeners[a]=[]),n.listeners[a].indexOf(r)===-1&&n.listeners[a].push(r)}}),up=tt(function(t,e){e.exports=i;function i(a,r){var n=this;if(n.listeners&&n.listeners[a]){var s=n.listeners[a],o=s.indexOf(r);o!==-1&&s.splice(o,1)}}}),ME=tt(function(t,e){sp(),e.exports=a;var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(c){switch(c.nodeType){case 3:return p(c.data);case 8:return"<!--"+c.data+"-->";default:return r(c)}}function r(c){var d=[],v=c.tagName;return c.namespaceURI==="http://www.w3.org/1999/xhtml"&&(v=v.toLowerCase()),d.push("<"+v+u(c)+o(c)),i.indexOf(v)>-1?d.push(" />"):(d.push(">"),c.childNodes.length?d.push.apply(d,c.childNodes.map(a)):c.textContent||c.innerText?d.push(p(c.textContent||c.innerText)):c.innerHTML&&d.push(c.innerHTML),d.push("</"+v+">")),d.join("")}function n(c,d){var v=np(c[d]);return d==="style"&&Object.keys(c.style).length>0?!0:c.hasOwnProperty(d)&&(v==="string"||v==="boolean"||v==="number")&&d!=="nodeName"&&d!=="className"&&d!=="tagName"&&d!=="textContent"&&d!=="innerText"&&d!=="namespaceURI"&&d!=="innerHTML"}function s(c){if(typeof c=="string")return c;var d="";return Object.keys(c).forEach(function(v){var f=c[v];v=v.replace(/[A-Z]/g,function(b){return"-"+b.toLowerCase()}),d+=v+":"+f+";"}),d}function o(c){var d=c.dataset,v=[];for(var f in d)v.push({name:"data-"+f,value:d[f]});return v.length?l(v):""}function l(c){var d=[];return c.forEach(function(v){var f=v.name,b=v.value;f==="style"&&(b=s(b)),d.push(f+'="'+m(b)+'"')}),d.length?" "+d.join(" "):""}function u(c){var d=[];for(var v in c)n(c,v)&&d.push({name:v,value:c[v]});for(var f in c._attributes)for(var b in c._attributes[f]){var g=c._attributes[f][b],y=(g.prefix?g.prefix+":":"")+b;d.push({name:y,value:g.value})}return c.className&&d.push({name:"class",value:c.className}),d.length?l(d):""}function p(c){var d="";return typeof c=="string"?d=c:c&&(d=c.toString()),d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m(c){return p(c).replace(/"/g,"&quot;")}}),cp=tt(function(t,e){Ca();var i=op(),a=lp(),r=dp(),n=up(),s=ME(),o="http://www.w3.org/1999/xhtml";e.exports=l;function l(u,p,m){if(!La(this,l))return new l(u);var c=m===void 0?o:m||null;this.tagName=c===o?String(u).toUpperCase():u,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=p||null,this.namespaceURI=c,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(u){return u.parentNode&&u.parentNode.removeChild(u),this.childNodes.push(u),u.parentNode=this,u},l.prototype.replaceChild=function(u,p){u.parentNode&&u.parentNode.removeChild(u);var m=this.childNodes.indexOf(p);return p.parentNode=null,this.childNodes[m]=u,u.parentNode=this,p},l.prototype.removeChild=function(u){var p=this.childNodes.indexOf(u);return this.childNodes.splice(p,1),u.parentNode=null,u},l.prototype.insertBefore=function(u,p){u.parentNode&&u.parentNode.removeChild(u);var m=p==null?-1:this.childNodes.indexOf(p);return m>-1?this.childNodes.splice(m,0,u):this.childNodes.push(u),u.parentNode=this,u},l.prototype.setAttributeNS=function(u,p,m){var c=null,d=p,v=p.indexOf(":");if(v>-1&&(c=p.substr(0,v),d=p.substr(v+1)),this.tagName==="INPUT"&&p==="type")this.type=m;else{var f=this._attributes[u]||(this._attributes[u]={});f[d]={value:m,prefix:c}}},l.prototype.getAttributeNS=function(u,p){var m=this._attributes[u],c=m&&m[p]&&m[p].value;return this.tagName==="INPUT"&&p==="type"?this.type:typeof c!="string"?null:c},l.prototype.removeAttributeNS=function(u,p){var m=this._attributes[u];m&&delete m[p]},l.prototype.hasAttributeNS=function(u,p){var m=this._attributes[u];return!!m&&p in m},l.prototype.setAttribute=function(u,p){return this.setAttributeNS(null,u,p)},l.prototype.getAttribute=function(u){return this.getAttributeNS(null,u)},l.prototype.removeAttribute=function(u){return this.removeAttributeNS(null,u)},l.prototype.hasAttribute=function(u){return this.hasAttributeNS(null,u)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(u){var p=u.split(" "),m=[];return i(this,function(c){if(c.nodeType===1){var d=c.className||"",v=d.split(" ");p.every(function(f){return v.indexOf(f)!==-1})&&m.push(c)}}),m},l.prototype.getElementsByTagName=function(u){u=u.toLowerCase();var p=[];return i(this.childNodes,function(m){m.nodeType===1&&(u==="*"||m.tagName.toLowerCase()===u)&&p.push(m)}),p},l.prototype.contains=function(u){return i(this,function(p){return u===p})||!1}}),xE=tt(function(t,e){Ca();var i=cp();e.exports=a;function a(r){if(!La(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),OE=tt(function(t,e){e.exports=i;function i(a){}i.prototype.initEvent=function(a,r,n){this.type=a,this.bubbles=r,this.cancelable=n},i.prototype.preventDefault=function(){}}),NE=tt(function(t,e){Ca();var i=op(),a=CE(),r=DE(),n=cp(),s=xE(),o=OE(),l=lp(),u=dp(),p=up();e.exports=m;function m(){if(!La(this,m))return new m;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var c=m.prototype;c.createTextNode=function(d){return new r(d,this)},c.createElementNS=function(d,v){var f=d===null?null:String(d);return new n(v,this,f)},c.createElement=function(d){return new n(d,this)},c.createDocumentFragment=function(){return new s(this)},c.createEvent=function(d){return new o(d)},c.createComment=function(d){return new a(d,this)},c.getElementById=function(d){d=String(d);var v=i(this.childNodes,function(f){if(String(f.id)===d)return f});return v||null},c.getElementsByClassName=n.prototype.getElementsByClassName,c.getElementsByTagName=n.prototype.getElementsByTagName,c.contains=n.prototype.contains,c.removeEventListener=p,c.addEventListener=u,c.dispatchEvent=l}),PE=tt(function(t,e){var i=NE();e.exports=new i}),hp=tt(function(t,e){var i=typeof global<"u"?global:typeof window<"u"?window:{},a=PE(),r;typeof document<"u"?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=a)),e.exports=r});function UE(t){if(Array.isArray(t))return t}function $E(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var a=[],r=!0,n=!1,s,o;try{for(i=i.call(t);!(r=(s=i.next()).done)&&(a.push(s.value),!(e&&a.length===e));r=!0);}catch(l){n=!0,o=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw o}}return a}}function HE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cd(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function mp(t,e){if(t){if(typeof t=="string")return cd(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return cd(t,e)}}function wi(t,e){return UE(t)||$E(t,e)||mp(t,e)||HE()}var kn=_t(li()),yh=_t(li()),BE=_t(li()),WE={now:function(){var t=BE.default.performance,e=t&&t.timing,i=e&&e.navigationStart,a=typeof i=="number"&&typeof t.now=="function"?i+t.now():Date.now();return Math.round(a)}},Ne=WE,Bn=function(){var t,e,i;if(typeof((t=yh.default.crypto)===null||t===void 0?void 0:t.getRandomValues)=="function"){i=new Uint8Array(32),yh.default.crypto.getRandomValues(i);for(var a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=Math.random()*16|0}var n=0;e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){var u=l==="x"?i[n]:i[n]&3|8;return n++,u.toString(16)});var s=Ne.now(),o=s==null?void 0:s.toString(16).substring(3);return o?e.substring(0,28)+o:e},pp=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},kt=function(t){if(t&&typeof t.nodeName<"u")return t.muxId||(t.muxId=pp()),t.muxId;var e;try{e=document.querySelector(t)}catch{}return e&&!e.muxId&&(e.muxId=t),(e==null?void 0:e.muxId)||t},Uo=function(t){var e;t&&typeof t.nodeName<"u"?(e=t,t=kt(e)):e=document.querySelector(t);var i=e&&e.nodeName?e.nodeName.toLowerCase():"";return[e,t,i]};function FE(t){if(Array.isArray(t))return cd(t)}function KE(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function VE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function St(t){return FE(t)||KE(t)||mp(t)||VE()}var va={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},qE=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,i,a,r,n,s,o=[console,t],l=(i=console.trace).bind.apply(i,St(o)),u=(a=console.info).bind.apply(a,St(o)),p=(r=console.debug).bind.apply(r,St(o)),m=(n=console.warn).bind.apply(n,St(o)),c=(s=console.error).bind.apply(s,St(o)),d=e;return{trace:function(){for(var v=arguments.length,f=new Array(v),b=0;b<v;b++)f[b]=arguments[b];if(!(d>va.TRACE))return l.apply(void 0,St(f))},debug:function(){for(var v=arguments.length,f=new Array(v),b=0;b<v;b++)f[b]=arguments[b];if(!(d>va.DEBUG))return p.apply(void 0,St(f))},info:function(){for(var v=arguments.length,f=new Array(v),b=0;b<v;b++)f[b]=arguments[b];if(!(d>va.INFO))return u.apply(void 0,St(f))},warn:function(){for(var v=arguments.length,f=new Array(v),b=0;b<v;b++)f[b]=arguments[b];if(!(d>va.WARN))return m.apply(void 0,St(f))},error:function(){for(var v=arguments.length,f=new Array(v),b=0;b<v;b++)f[b]=arguments[b];if(!(d>va.ERROR))return c.apply(void 0,St(f))},get level(){return d},set level(v){v!==this.level&&(d=v??e)}}},re=qE("[mux]"),Kl=_t(li());function hd(){var t=Kl.default.doNotTrack||Kl.default.navigator&&Kl.default.navigator.doNotTrack;return t==="1"}function $(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}Ca();function be(t,e){if(!La(t,e))throw new TypeError("Cannot call a class as a function")}function Th(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function bt(t,e,i){return e&&Th(t.prototype,e),i&&Th(t,i),t}function R(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Sr(t){return Sr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Sr(t)}function YE(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&(t=Sr(t),t!==null););return t}function Ss(t,e,i){return typeof Reflect<"u"&&Reflect.get?Ss=Reflect.get:Ss=function(a,r,n){var s=YE(a,r);if(s){var o=Object.getOwnPropertyDescriptor(s,r);return o.get?o.get.call(n||a):o.value}},Ss(t,e,i||t)}function md(t,e){return md=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},md(t,e)}function GE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&md(t,e)}function zE(t,e){if(t==null)return{};var i={},a=Object.keys(t),r,n;for(n=0;n<a.length;n++)r=a[n],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function QE(t,e){if(t==null)return{};var i=zE(t,e),a,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}function jE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}sp();function ZE(t,e){return e&&(np(e)==="object"||typeof e=="function")?e:$(t)}function XE(t){var e=jE();return function(){var i=Sr(t),a;if(e){var r=Sr(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return ZE(this,a)}}var xt=function(t){return Wn(t)[0]},Wn=function(t){if(typeof t!="string"||t==="")return["localhost"];var e=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,i=t.match(e)||[],a=i[4],r;return a&&(r=(a.match(/[^\.]+\.[^\.]+$/)||[])[0]),[a,r]},Vl=_t(li()),JE={exists:function(){var t=Vl.default.performance,e=t&&t.timing;return e!==void 0},domContentLoadedEventEnd:function(){var t=Vl.default.performance,e=t&&t.timing;return e&&e.domContentLoadedEventEnd},navigationStart:function(){var t=Vl.default.performance,e=t&&t.timing;return e&&e.navigationStart}},$o=JE;function Ce(t,e,i){i=i===void 0?1:i,t[e]=t[e]||0,t[e]+=i}function Fn(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable}))),a.forEach(function(r){R(t,r,i[r])})}return t}function e_(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i.push.apply(i,a)}return i}function xu(t,e){return e=e??{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):e_(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}),t}var t_=["x-cdn","content-type"],vp=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],i_=t_.concat(vp);function Ou(t){t=t||"";var e={},i=t.trim().split(/[\r\n]+/);return i.forEach(function(a){if(a){var r=a.split(": "),n=r.shift();n&&(i_.indexOf(n.toLowerCase())>=0||n.toLowerCase().indexOf("x-litix-")===0)&&(e[n]=r.join(": "))}}),e}function Ho(t){if(t){var e=vp.find(function(i){return t[i]!==void 0});return e?t[e]:void 0}}var a_=function(t){var e={};for(var i in t){var a=t[i],r=a["DATA-ID"].search("io.litix.data.");if(r!==-1){var n=a["DATA-ID"].replace("io.litix.data.","");e[n]=a.VALUE}}return e},fp=a_,ss=function(t){if(!t)return{};var e=$o.navigationStart(),i=t.loading,a=i?i.start:t.trequest,r=i?i.first:t.tfirst,n=i?i.end:t.tload;return{bytesLoaded:t.total,requestStart:Math.round(e+a),responseStart:Math.round(e+r),responseEnd:Math.round(e+n)}},Hr=function(t){if(!(!t||typeof t.getAllResponseHeaders!="function"))return Ou(t.getAllResponseHeaders())},r_=function(t,e,i){var a=arguments.length>4?arguments[4]:void 0,r=t.log,n=t.utils.secondsToMs,s=function(b){var g=parseInt(a.version),y;return g===1&&b.programDateTime!==null&&(y=b.programDateTime),g===0&&b.pdt!==null&&(y=b.pdt),y};if(!$o.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(b,g){return t.emit(e,b,g)},l=function(b,g){var y=g.levels,E=g.audioTracks,S=g.url,M=g.stats,C=g.networkDetails,I=g.sessionData,H={},q={};y.forEach(function(ge,Ve){H[Ve]={width:ge.width,height:ge.height,bitrate:ge.bitrate,attrs:ge.attrs}}),E.forEach(function(ge,Ve){q[Ve]={name:ge.name,language:ge.lang,bitrate:ge.bitrate}});var F=ss(M),W=F.bytesLoaded,He=F.requestStart,it=F.responseStart,at=F.responseEnd;o("requestcompleted",xu(Fn({},fp(I)),{request_event_type:b,request_bytes_loaded:W,request_start:He,request_response_start:it,request_response_end:at,request_type:"manifest",request_hostname:xt(S),request_response_headers:Hr(C),request_rendition_lists:{media:H,audio:q,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var u=function(b,g){var y=g.details,E=g.level,S=g.networkDetails,M=g.stats,C=ss(M),I=C.bytesLoaded,H=C.requestStart,q=C.responseStart,F=C.responseEnd,W=y.fragments[y.fragments.length-1],He=s(W)+n(W.duration);o("requestcompleted",{request_event_type:b,request_bytes_loaded:I,request_start:H,request_response_start:q,request_response_end:F,request_current_level:E,request_type:"manifest",request_hostname:xt(y.url),request_response_headers:Hr(S),video_holdback:y.holdBack&&n(y.holdBack),video_part_holdback:y.partHoldBack&&n(y.partHoldBack),video_part_target_duration:y.partTarget&&n(y.partTarget),video_target_duration:y.targetduration&&n(y.targetduration),video_source_is_live:y.live,player_manifest_newest_program_time:isNaN(He)?void 0:He})};i.on(a.Events.LEVEL_LOADED,u);var p=function(b,g){var y=g.details,E=g.networkDetails,S=g.stats,M=ss(S),C=M.bytesLoaded,I=M.requestStart,H=M.responseStart,q=M.responseEnd;o("requestcompleted",{request_event_type:b,request_bytes_loaded:C,request_start:I,request_response_start:H,request_response_end:q,request_type:"manifest",request_hostname:xt(y.url),request_response_headers:Hr(E)})};i.on(a.Events.AUDIO_TRACK_LOADED,p);var m=function(b,g){var y=g.stats,E=g.networkDetails,S=g.frag;y=y||S.stats;var M=ss(y),C=M.bytesLoaded,I=M.requestStart,H=M.responseStart,q=M.responseEnd,F=E?Hr(E):void 0,W={request_event_type:b,request_bytes_loaded:C,request_start:I,request_response_start:H,request_response_end:q,request_hostname:E?xt(E.responseURL):void 0,request_id:F?Ho(F):void 0,request_response_headers:F,request_media_duration:S.duration,request_url:E==null?void 0:E.responseURL};S.type==="main"?(W.request_type="media",W.request_current_level=S.level,W.request_video_width=(i.levels[S.level]||{}).width,W.request_video_height=(i.levels[S.level]||{}).height,W.request_labeled_bitrate=(i.levels[S.level]||{}).bitrate):W.request_type=S.type,o("requestcompleted",W)};i.on(a.Events.FRAG_LOADED,m);var c=function(b,g){var y=g.frag,E=y.start,S=s(y),M={currentFragmentPDT:S,currentFragmentStart:n(E)};o("fragmentchange",M)};i.on(a.Events.FRAG_CHANGED,c);var d=function(b,g){var y=g.type,E=g.details,S=g.response,M=g.fatal,C=g.frag,I=g.networkDetails,H=(C==null?void 0:C.url)||g.url||"",q=I?Hr(I):void 0;if((E===a.ErrorDetails.MANIFEST_LOAD_ERROR||E===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||E===a.ErrorDetails.FRAG_LOAD_ERROR||E===a.ErrorDetails.FRAG_LOAD_TIMEOUT||E===a.ErrorDetails.LEVEL_LOAD_ERROR||E===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||E===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||E===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||E===a.ErrorDetails.SUBTITLE_LOAD_ERROR||E===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||E===a.ErrorDetails.KEY_LOAD_ERROR||E===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:E,request_url:H,request_hostname:xt(H),request_id:q?Ho(q):void 0,request_type:E===a.ErrorDetails.FRAG_LOAD_ERROR||E===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":E===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||E===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":E===a.ErrorDetails.SUBTITLE_LOAD_ERROR||E===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":E===a.ErrorDetails.KEY_LOAD_ERROR||E===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:S==null?void 0:S.code,request_error_text:S==null?void 0:S.text}),M){var F,W="".concat(H?"url: ".concat(H,`
`):"")+"".concat(S&&(S.code||S.text)?"response: ".concat(S.code,", ").concat(S.text,`
`):"")+"".concat(g.reason?"failure reason: ".concat(g.reason,`
`):"")+"".concat(g.level?"level: ".concat(g.level,`
`):"")+"".concat(g.parent?"parent stream controller: ".concat(g.parent,`
`):"")+"".concat(g.buffer?"buffer length: ".concat(g.buffer,`
`):"")+"".concat(g.error?"error: ".concat(g.error,`
`):"")+"".concat(g.event?"event: ".concat(g.event,`
`):"")+"".concat(g.err?"error message: ".concat((F=g.err)===null||F===void 0?void 0:F.message,`
`):"");o("error",{player_error_code:y,player_error_message:E,player_error_context:W})}};i.on(a.Events.ERROR,d);var v=function(b,g){var y=g.frag,E=y&&y._url||"";o("requestcanceled",{request_event_type:b,request_url:E,request_type:"media",request_hostname:xt(E)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v);var f=function(b,g){var y=g.level,E=i.levels[y];if(E&&E.attrs&&E.attrs.BANDWIDTH){var S=E.attrs.BANDWIDTH,M,C=parseFloat(E.attrs["FRAME-RATE"]);isNaN(C)||(M=C),S?o("renditionchange",{video_source_fps:M,video_source_bitrate:S,video_source_width:E.width,video_source_height:E.height,video_source_rendition_name:E.name,video_source_codec:E==null?void 0:E.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,f),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,u),i.off(a.Events.AUDIO_TRACK_LOADED,p),i.off(a.Events.FRAG_LOADED,m),i.off(a.Events.FRAG_CHANGED,c),i.off(a.Events.ERROR,d),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v),i.off(a.Events.LEVEL_SWITCHED,f),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},n_=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},Ah=function(t,e){if(!t||!t.requestEndDate)return{};var i=xt(t.url),a=t.url,r=t.bytesLoaded,n=new Date(t.requestStartDate).getTime(),s=new Date(t.firstByteDate).getTime(),o=new Date(t.requestEndDate).getTime(),l=isNaN(t.duration)?0:t.duration,u=typeof e.getMetricsFor=="function"?e.getMetricsFor(t.mediaType).HttpList:e.getDashMetrics().getHttpRequests(t.mediaType),p;u.length>0&&(p=Ou(u[u.length-1]._responseHeaders||""));var m=p?Ho(p):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:o,requestBytesLoaded:r,requestResponseHeaders:p,requestMediaDuration:l,requestHostname:i,requestUrl:a,requestId:m}},s_=function(t,e){if(typeof e.getCurrentRepresentationForType=="function"){var i=e.getCurrentRepresentationForType(t);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=e.getQualityFor(t),r=e.getCurrentTrackFor(t).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},o_=function(t){var e;return(e=t.match(/.*codecs\*?="(.*)"/))===null||e===void 0?void 0:e[1]},l_=function(t){try{var e,i,a=(i=t.getVersion)===null||i===void 0||(e=i.call(t))===null||e===void 0?void 0:e.split(".").map(function(r){return parseInt(r)})[0];return a}catch{return!1}},d_=function(t,e,i){var a=t.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=l_(i),n=function(y,E){return t.emit(e,y,E)},s=function(y){var E=y.type,S=y.data,M=(S||{}).url;n("requestcompleted",{request_event_type:E,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:xt(M),request_url:M})};i.on("manifestLoaded",s);var o={},l=function(y){if(typeof y.getRequests!="function")return null;var E=y.getRequests({state:"executed"});return E.length===0?null:E[E.length-1]},u=function(y){var E=y.type,S=y.fragmentModel,M=y.chunk,C=l(S);p({type:E,request:C,chunk:M})},p=function(y){var E=y.type,S=y.chunk,M=y.request,C=(S||{}).mediaInfo,I=C||{},H=I.type,q=I.bitrateList;q=q||[];var F={};q.forEach(function(rt,De){F[De]={},F[De].width=rt.width,F[De].height=rt.height,F[De].bitrate=rt.bandwidth,F[De].attrs={}}),H==="video"?o.video=F:H==="audio"?o.audio=F:o.media=F;var W=Ah(M,i),He=W.requestStart,it=W.requestResponseStart,at=W.requestResponseEnd,ge=W.requestResponseHeaders,Ve=W.requestMediaDuration,Ut=W.requestHostname,qe=W.requestUrl,yt=W.requestId;n("requestcompleted",{request_event_type:E,request_start:He,request_response_start:it,request_response_end:at,request_bytes_loaded:-1,request_type:H+"_init",request_response_headers:ge,request_hostname:Ut,request_id:yt,request_url:qe,request_media_duration:Ve,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",p):i.on("initFragmentLoaded",u);var m=function(y){var E=y.type,S=y.fragmentModel,M=y.chunk,C=l(S);c({type:E,request:C,chunk:M})},c=function(y){var E=y.type,S=y.chunk,M=y.request,C=S||{},I=C.mediaInfo,H=C.start,q=I||{},F=q.type,W=Ah(M,i),He=W.requestStart,it=W.requestResponseStart,at=W.requestResponseEnd,ge=W.requestBytesLoaded,Ve=W.requestResponseHeaders,Ut=W.requestMediaDuration,qe=W.requestHostname,yt=W.requestUrl,rt=W.requestId,De=s_(F,i),Be=De.currentLevel,Ye=De.renditionWidth,di=De.renditionHeight,ea=De.renditionBitrate;n("requestcompleted",{request_event_type:E,request_start:He,request_response_start:it,request_response_end:at,request_bytes_loaded:ge,request_type:F,request_response_headers:Ve,request_hostname:qe,request_id:rt,request_url:yt,request_media_start_time:H,request_media_duration:Ut,request_current_level:Be,request_labeled_bitrate:ea,request_video_width:Ye,request_video_height:di})};r>=4?i.on("mediaFragmentLoaded",c):i.on("mediaFragmentLoaded",m);var d={video:void 0,audio:void 0,totalBitrate:void 0},v=function(){if(d.video&&typeof d.video.bitrate=="number"){if(!(d.video.width&&d.video.height)){a.warn("have bitrate info for video but missing width/height");return}var y=d.video.bitrate;if(d.audio&&typeof d.audio.bitrate=="number"&&(y+=d.audio.bitrate),y!==d.totalBitrate)return d.totalBitrate=y,{video_source_bitrate:y,video_source_height:d.video.height,video_source_width:d.video.width,video_source_codec:o_(d.video.codec)}}},f=function(y,E,S){var M=y.mediaType;if(M==="audio"||M==="video"){var C;if(typeof i.getRepresentationsByType=="function")if(y.newRepresentation)C={bitrate:y.newRepresentation.bandwidth,width:y.newRepresentation.width,height:y.newRepresentation.height,qualityIndex:y.newRepresentation.absoluteIndex};else{var I=i.getRepresentationsByType(M);if(I&&typeof y.newQuality=="number"){var H=I.find(function(F){return F.absoluteIndex===y.newQuality||F.index===y.newQuality});H&&(C={bitrate:H.bandwidth,width:H.width,height:H.height,qualityIndex:y.newQuality})}}else{if(typeof y.newQuality!="number"){a.warn("missing evt.newQuality in qualityChangeRendered event",y);return}C=i.getBitrateInfoListFor(M).find(function(F){var W=F.qualityIndex;return W===y.newQuality})}if(!(C&&typeof C.bitrate=="number")){a.warn("missing bitrate info for ".concat(M));return}d[M]=xu(Fn({},C),{codec:i.getCurrentTrackFor(M).codec});var q=v();q&&n("renditionchange",q)}};i.on("qualityChangeRendered",f);var b=function(y){var E=y.request,S=y.mediaType;E=E||{},n("requestcanceled",{request_event_type:E.type+"_"+E.action,request_url:E.url,request_type:S,request_hostname:xt(E.url)})};i.on("fragmentLoadingAbandoned",b);var g=function(y){var E=y.error,S,M,C=(E==null||(S=E.data)===null||S===void 0?void 0:S.request)||{},I=(E==null||(M=E.data)===null||M===void 0?void 0:M.response)||{};(E==null?void 0:E.code)===27&&n("requestfailed",{request_error:C.type+"_"+C.action,request_url:C.url,request_hostname:xt(C.url),request_type:C.mediaType,request_error_code:I.status,request_error_text:I.statusText});var H="".concat(C!=null&&C.url?"url: ".concat(C.url,`
`):"")+"".concat(I!=null&&I.status||I!=null&&I.statusText?"response: ".concat(I==null?void 0:I.status,", ").concat(I==null?void 0:I.statusText,`
`):"");n("error",{player_error_code:E==null?void 0:E.code,player_error_message:E==null?void 0:E.message,player_error_context:H})};i.on("error",g),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",p),i.off("mediaFragmentLoaded",c),i.off("qualityChangeRendered",f),i.off("error",g),i.off("fragmentLoadingAbandoned",b),delete i._stopMuxMonitor}},u_=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},kh=0,c_=(function(){function t(){be(this,t),R(this,"_listeners",void 0)}return bt(t,[{key:"on",value:function(e,i,a){return i._eventEmitterGuid=i._eventEmitterGuid||++kh,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],a&&(i=i.bind(a)),this._listeners[e].push(i),i}},{key:"off",value:function(e,i){var a=this._listeners&&this._listeners[e];a&&a.forEach(function(r,n){r._eventEmitterGuid===i._eventEmitterGuid&&a.splice(n,1)})}},{key:"one",value:function(e,i,a){var r=this;i._eventEmitterGuid=i._eventEmitterGuid||++kh;var n=function(){r.off(e,n),i.apply(a||this,arguments)};n._eventEmitterGuid=i._eventEmitterGuid,this.on(e,n)}},{key:"emit",value:function(e,i){var a=this;if(this._listeners){i=i||{};var r=this._listeners["before"+e]||[],n=this._listeners["before*"]||[],s=this._listeners[e]||[],o=this._listeners["after"+e]||[],l=function(u,p){u=u.slice(),u.forEach(function(m){m.call(a,{type:e},p)})};l(r,i),l(n,i),l(s,i),l(o,i)}}}]),t})(),h_=c_,ql=_t(li()),m_=(function(){function t(e){var i=this;be(this,t),R(this,"_playbackHeartbeatInterval",void 0),R(this,"_playheadShouldBeProgressing",void 0),R(this,"pm",void 0),this.pm=e,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,e.on("playing",function(){i._playheadShouldBeProgressing=!0}),e.on("play",this._startPlaybackHeartbeatInterval.bind(this)),e.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),e.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),e.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("seeked",function(){e.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),e.on("timeupdate",function(){i._playbackHeartbeatInterval!==null&&e.emit("playbackheartbeat")}),e.on("devicesleep",function(a,r){i._playbackHeartbeatInterval!==null&&(ql.default.clearInterval(i._playbackHeartbeatInterval),e.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),i._playbackHeartbeatInterval=null)})}return bt(t,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=ql.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(ql.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),t})(),p_=m_,v_=function t(e){var i=this;be(this,t),R(this,"viewErrored",void 0),e.on("viewinit",function(){i.viewErrored=!1}),e.on("error",function(a,r){try{var n=e.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(e.data.player_error_code=n.player_error_code||r.player_error_code,e.data.player_error_message=n.player_error_message||r.player_error_message,e.data.player_error_context=n.player_error_context||r.player_error_context,e.data.player_error_severity=n.player_error_severity||r.player_error_severity,e.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,i.viewErrored=!0)}catch(s){e.mux.log.warn("Exception in error translator callback.",s),i.viewErrored=!0}}),e.on("aftererror",function(){var a,r,n,s,o;(a=e.data)===null||a===void 0||delete a.player_error_code,(r=e.data)===null||r===void 0||delete r.player_error_message,(n=e.data)===null||n===void 0||delete n.player_error_context,(s=e.data)===null||s===void 0||delete s.player_error_severity,(o=e.data)===null||o===void 0||delete o.player_error_business_exception})},f_=v_,E_=(function(){function t(e){be(this,t),R(this,"_watchTimeTrackerLastCheckedTime",void 0),R(this,"pm",void 0),this.pm=e,this._watchTimeTrackerLastCheckedTime=null,e.on("playbackheartbeat",this._updateWatchTime.bind(this)),e.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return bt(t,[{key:"_updateWatchTime",value:function(e,i){var a=i.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=a),Ce(this.pm.data,"view_watch_time",a-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=a}},{key:"_clearWatchTimeState",value:function(e,i){this._updateWatchTime(e,i),this._watchTimeTrackerLastCheckedTime=null}}]),t})(),__=E_,b_=(function(){function t(e){var i=this;be(this,t),R(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),R(this,"_lastTime",void 0),R(this,"_isAdPlaying",void 0),R(this,"_callbackUpdatePlaybackTime",void 0),R(this,"pm",void 0),this.pm=e,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=Ne.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,e.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);e.on("playing",a),e.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};e.on("seeked",r),e.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);e.on("playbackheartbeatend",n),e.on("seeking",n),e.on("rebufferstart",n),e.on("adplaying",function(){i._isAdPlaying=!0}),e.on("adended",function(){i._isAdPlaying=!1}),e.on("adpause",function(){i._isAdPlaying=!1}),e.on("adbreakstart",function(){i._isAdPlaying=!1}),e.on("adbreakend",function(){i._isAdPlaying=!1}),e.on("adplay",function(){i._isAdPlaying=!1}),e.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=Ne.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return bt(t,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=Ne.now(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,i=Ne.now(),a=i-this._lastTime,r=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?r=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(r=a),r>0&&r<=1e3&&Ce(this.pm.data,"view_content_playback_time",r),this._callbackUpdatePlaybackTime!==null&&a>0&&a<=1e3&&(this._isAdPlaying&&Ce(this.pm.data,"ad_playing_time_ms_cumulative",a),Ce(this.pm.data,"view_playing_time_ms_cumulative",a)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=i}}]),t})(),g_=b_,y_=(function(){function t(e){be(this,t),R(this,"pm",void 0),this.pm=e;var i=this._updatePlayheadTime.bind(this);e.on("playbackheartbeat",i),e.on("playbackheartbeatend",i),e.on("timeupdate",i),e.on("destroy",function(){e.off("timeupdate",i)})}return bt(t,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,i){var a=this,r=function(){a.pm.currentFragmentPDT&&a.pm.currentFragmentStart&&(a.pm.data.player_program_time=a.pm.currentFragmentPDT+a.pm.data.player_playhead_time-a.pm.currentFragmentStart)};if(i&&i.player_playhead_time)this.pm.data.player_playhead_time=i.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),t})(),T_=y_,Sh=300*1e3,A_=function t(e){if(be(this,t),!e.disableRebufferTracking){var i,a=function(n,s){r(s),i=void 0},r=function(n){if(i){var s=n.viewer_time-i;Ce(e.data,"view_rebuffer_duration",s),i=n.viewer_time,e.data.view_rebuffer_duration>Sh&&(e.emit("viewend"),e.send("viewend"),e.mux.log.warn("Ending view after rebuffering for longer than ".concat(Sh,"ms, future events will be ignored unless a programchange or videochange occurs.")))}e.data.view_watch_time>=0&&e.data.view_rebuffer_count>0&&(e.data.view_rebuffer_frequency=e.data.view_rebuffer_count/e.data.view_watch_time,e.data.view_rebuffer_percentage=e.data.view_rebuffer_duration/e.data.view_watch_time)};e.on("playbackheartbeat",function(n,s){return r(s)}),e.on("rebufferstart",function(n,s){i||(Ce(e.data,"view_rebuffer_count",1),i=s.viewer_time,e.one("rebufferend",a))}),e.on("viewinit",function(){i=void 0,e.off("rebufferend",a)})}},k_=A_,S_=(function(){function t(e){var i=this;be(this,t),R(this,"_lastCheckedTime",void 0),R(this,"_lastPlayheadTime",void 0),R(this,"_lastPlayheadTimeUpdatedTime",void 0),R(this,"_rebuffering",void 0),R(this,"pm",void 0),this.pm=e,!(e.disableRebufferTracking||e.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,e.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),e.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),e.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:Ne.now()})}))}return bt(t,[{key:"_checkIfRebuffering",value:function(e,i){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,i);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(i.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,i,!0);return}var a=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&a>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=i.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:i.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}a?this._prepareRebufferTrackerState(i.viewer_time):this._clearRebufferTrackerState()}}]),t})(),w_=S_,I_=(function(){function t(e){var i=this;be(this,t),R(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){var a=e.data,r=a.view_id;if(!a.view_program_changed){var n=function(s,o){var l=o.viewer_time;(s.type==="playing"&&typeof e.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof e.data.view_time_to_first_frame>"u"||i._inPrerollPosition()))&&i.calculateTimeToFirstFrame(l||Ne.now(),r)};e.one("playing",n),e.one("adplaying",n),e.one("viewend",function(){e.off("playing",n),e.off("adplaying",n)})}})}return bt(t,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,i){i===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),t})(),R_=I_,L_=function t(e){var i=this;be(this,t),R(this,"_lastPlayerHeight",void 0),R(this,"_lastPlayerWidth",void 0),R(this,"_lastPlayheadPosition",void 0),R(this,"_lastSourceHeight",void 0),R(this,"_lastSourceWidth",void 0),e.on("viewinit",function(){i._lastPlayheadPosition=-1});var a=["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"],r=["playing","hb","renditionchange","orientationchange","playbackmodechange"];a.forEach(function(n){e.on(n,function(){if(i._lastPlayheadPosition>=0&&e.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var s=e.data.player_playhead_time-i._lastPlayheadPosition;if(s<0){i._lastPlayheadPosition=-1;return}var o=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),l=Math.max(0,o-1),u=Math.max(0,1-o);e.data.view_max_upscale_percentage=Math.max(e.data.view_max_upscale_percentage||0,l),e.data.view_max_downscale_percentage=Math.max(e.data.view_max_downscale_percentage||0,u),Ce(e.data,"view_total_content_playback_time",s),Ce(e.data,"view_total_upscaling",l*s),Ce(e.data,"view_total_downscaling",u*s)}i._lastPlayheadPosition=-1})}),r.forEach(function(n){e.on(n,function(){i._lastPlayheadPosition=e.data.player_playhead_time,i._lastPlayerWidth=e.data.player_width,i._lastPlayerHeight=e.data.player_height,i._lastSourceWidth=e.data.video_source_width,i._lastSourceHeight=e.data.video_source_height})})},C_=L_,D_=2e3,M_=function t(e){var i=this;be(this,t),R(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var n=Ne.now(),s=(e.data.viewer_time||n)-(a||n);Ce(e.data,"view_seek_duration",s),e.data.view_max_seek_time=Math.max(e.data.view_max_seek_time||0,s),i.isSeeking=!1,a=-1};e.on("seeking",function(n,s){if(Object.assign(e.data,s),i.isSeeking&&s.viewer_time-a<=D_){a=s.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=s.viewer_time,Ce(e.data,"view_seek_count",1),e.send("seeking")}),e.on("seeked",function(){r()}),e.on("viewend",function(){i.isSeeking&&(r(),e.send("seeked")),i.isSeeking=!1,a=-1})},x_=M_,wh=function(t,e){t.push(e),t.sort(function(i,a){return i.viewer_time-a.viewer_time})},O_=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],N_=(function(){function t(e){var i=this;be(this,t),R(this,"_adHasPlayed",void 0),R(this,"_adRequests",void 0),R(this,"_adResponses",void 0),R(this,"_currentAdRequestNumber",void 0),R(this,"_currentAdResponseNumber",void 0),R(this,"_prerollPlayTime",void 0),R(this,"_wouldBeNewAdPlay",void 0),R(this,"isAdBreak",void 0),R(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),O_.forEach(function(r){return e.on(r,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};e.on("adbreakstart",function(){i.isAdBreak=!0}),e.on("play",a),e.on("playing",a),e.on("viewend",a),e.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},n),wh(i._adRequests,n),Ce(e.data,"view_ad_request_count"),i.inPrerollPosition()&&(e.data.view_preroll_requested=!0,i._adHasPlayed||Ce(e.data,"view_preroll_request_count"))}),e.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},n),wh(i._adResponses,n);var s=i.findAdRequest(n.ad_request_id);s&&Ce(e.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),e.on("adplay",function(r,n){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,Ce(e.data,"view_ad_played_count")),i.inPrerollPosition()&&!e.data.view_preroll_played&&(e.data.view_preroll_played=!0,i._adRequests.length>0&&(e.data.view_preroll_request_time=Math.max(0,n.viewer_time-i._adRequests[0].viewer_time)),e.data.view_start&&(e.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-e.data.view_start)),i._prerollPlayTime=n.viewer_time)}),e.on("adplaying",function(r,n){i.inPrerollPosition()&&typeof e.data.view_preroll_load_time>"u"&&typeof i._prerollPlayTime<"u"&&(e.data.view_preroll_load_time=n.viewer_time-i._prerollPlayTime,e.data.view_startup_preroll_load_time=n.viewer_time-i._prerollPlayTime)}),e.on("adclicked",function(r,n){i._wouldBeNewAdPlay||Ce(e.data,"view_ad_clicked_count")}),e.on("adskipped",function(r,n){i._wouldBeNewAdPlay||Ce(e.data,"view_ad_skipped_count")}),e.on("adended",function(){i._wouldBeNewAdPlay=!0}),e.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return bt(t,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var i=0;i<this._adRequests.length;i++)if(this._adRequests[i].ad_request_id===e)return this._adRequests[i]}},{key:"_updateAdData",value:function(e,i){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&i.ad_tag_url){var a=wi(Wn(i.ad_tag_url),2),r=a[0],n=a[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&i.ad_asset_url){var s=wi(Wn(i.ad_asset_url),2),o=s[0],l=s[1];this.pm.data.view_preroll_ad_asset_domain=l,this.pm.data.view_preroll_ad_asset_hostname=o}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=i==null?void 0:i.ad_asset_url,this.pm.data.ad_tag_url=i==null?void 0:i.ad_tag_url,this.pm.data.ad_creative_id=i==null?void 0:i.ad_creative_id,this.pm.data.ad_id=i==null?void 0:i.ad_id,this.pm.data.ad_universal_id=i==null?void 0:i.ad_universal_id,i!=null&&i.ad_type&&(this.pm.data.ad_type=i==null?void 0:i.ad_type)}}]),t})(),P_=N_,U_=function t(e){var i=this;be(this,t),R(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=Ne.now(),e.on("before*",r)},r=function(n){var s=Ne.now(),o=i.lastWallClockTime;i.lastWallClockTime=s,s-o>3e4&&(e.emit("devicesleep",{viewer_time:o}),Object.assign(e.data,{viewer_time:o}),e.send("devicesleep"),e.emit("devicewake",{viewer_time:s}),Object.assign(e.data,{viewer_time:s}),e.send("devicewake"))};e.one("playbackheartbeat",a),e.on("playbackheartbeatend",function(){e.off("before*",r),e.one("playbackheartbeat",a)})},$_=U_,Yl=_t(li()),Ep=(function(t){return t()})(function(){var t=function(){for(var i=0,a={};i<arguments.length;i++){var r=arguments[i];for(var n in r)a[n]=r[n]}return a};function e(i){function a(r,n,s){var o;if(typeof document<"u"){if(arguments.length>1){if(s=t({path:"/"},a.defaults,s),typeof s.expires=="number"){var l=new Date;l.setMilliseconds(l.getMilliseconds()+s.expires*864e5),s.expires=l}try{o=JSON.stringify(n),/^[\{\[]/.test(o)&&(n=o)}catch{}return i.write?n=i.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(o={});for(var u=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,m=0;m<u.length;m++){var c=u[m].split("="),d=c.slice(1).join("=");d.charAt(0)==='"'&&(d=d.slice(1,-1));try{var v=c[0].replace(p,decodeURIComponent);if(d=i.read?i.read(d,v):i(d,v)||d.replace(p,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch{}if(r===v){o=d;break}r||(o[v]=d)}catch{}}return o}}return a.set=a,a.get=function(r){return a.call(a,r)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(r,n){a(r,"",t(n,{expires:-1}))},a.withConverter=e,a}return e(function(){})}),_p="muxData",H_=function(t){return Object.entries(t).map(function(e){var i=wi(e,2),a=i[0],r=i[1];return"".concat(a,"=").concat(r)}).join("&")},B_=function(t){return t.split("&").reduce(function(e,i){var a=wi(i.split("="),2),r=a[0],n=a[1],s=+n,o=n&&s==n?s:n;return e[r]=o,e},{})},bp=function(){var t;try{t=B_(Ep.get(_p)||"")}catch{t={}}return t},gp=function(t){try{Ep.set(_p,H_(t),{expires:365})}catch{}},W_=function(){var t=bp();return t.mux_viewer_id=t.mux_viewer_id||Bn(),t.msn=t.msn||Math.random(),gp(t),{mux_viewer_id:t.mux_viewer_id,mux_sample_number:t.msn}},F_=function(){var t=bp(),e=Ne.now();return t.session_start&&(t.sst=t.session_start,delete t.session_start),t.session_id&&(t.sid=t.session_id,delete t.session_id),t.session_expires&&(t.sex=t.session_expires,delete t.session_expires),(!t.sex||t.sex<e)&&(t.sid=Bn(),t.sst=e),t.sex=e+1500*1e3,gp(t),{session_id:t.sid,session_start:t.sst,session_expires:t.sex}};function K_(t,e){var i=e.beaconCollectionDomain,a=e.beaconDomain;if(i){var r=/localhost(?::\d+)?$/.test(i)?"http://":"https://";return r+i}t=t||"inferred";var n=a||"litix.io";return t.match(/^[a-z0-9]+$/)?"https://"+t+"."+n:"https://img.litix.io/a.gif"}var V_={a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},q_=yp(V_),Y_={ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},Ih=yp(Y_);function yp(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[t[i]]=i);return e}function pd(t){var e={},i={};return Object.keys(t).forEach(function(a){var r=!1;if(t.hasOwnProperty(a)&&t[a]!==void 0){var n=a.split("_"),s=n[0],o=q_[s];o||(re.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(l){l==="url"&&(r=!0),Ih[l]?o+=Ih[l]:Number.isInteger(Number(l))?o+=l:(re.info("Data key word `"+l+"` not expected in "+a),o+="_"+l+"_")}),r?i[o]=t[a]:e[o]=t[a]}}),Object.assign(e,i)}var Ea=_t(li()),G_=_t(hp()),z_={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},Q_=56*1024,j_=["hb","requestcompleted","requestfailed","requestcanceled"],Z_="https://img.litix.io",Ii=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=t||Z_,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},z_,e)};Ii.prototype.queueEvent=function(t,e){var i=Object.assign({},e);return this._eventQueue.length<=this._options.maxQueueLength||t==="eventrateexceeded"?(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};Ii.prototype.flushEvents=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(t&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};Ii.prototype.destroy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,t?this._clearBeaconQueue():this.flushEvents(),Ea.default.clearTimeout(this._sendTimeout)};Ii.prototype._clearBeaconQueue=function(){var t=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,e=this._eventQueue.slice(t);t>0&&Object.assign(e[e.length-1],pd({mux_view_message:"event queue truncated"}));var i=this._createPayload(e);Tp(this._beaconUrl,i,!0,function(){})};Ii.prototype._sendBeaconQueue=function(){var t=this;if(this._postInFlight){this._resendAfterPost=!0;return}var e=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(e),a=Ne.now();Tp(this._beaconUrl,i,!1,function(r,n){n?(t._eventQueue=e.concat(t._eventQueue),t._failureCount+=1,re.info("Error sending beacon: "+n)):t._failureCount=0,t._roundTripTime=Ne.now()-a,t._postInFlight=!1,t._resendAfterPost&&(t._resendAfterPost=!1,t._eventQueue.length>0&&t._sendBeaconQueue())})};Ii.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var t=Math.pow(2,this._failureCount-1);return t=t*Math.random(),(1+t)*this._options.baseTimeBetweenBeacons};Ii.prototype._startBeaconSending=function(){var t=this;Ea.default.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=Ea.default.setTimeout(function(){t._eventQueue.length&&t._sendBeaconQueue(),t._startBeaconSending()},this._getNextBeaconTime()))};Ii.prototype._createPayload=function(t){var e=this,i={transmission_timestamp:Math.round(Ne.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){a=JSON.stringify({metadata:i,events:r||t}),n=a.length/1024},o=function(){return n<=e._options.maxPayloadKBSize};return s(),o()||(re.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=t.filter(function(l){return j_.indexOf(l.e)===-1}),s()),o()||(re.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(l){for(var u in l){var p=l[u],m=50*1024;typeof p=="string"&&p.length>m&&(l[u]=p.substring(0,m))}}),s()),a};var X_=typeof G_.default.exitPictureInPicture=="function"?function(t){return t.length<=Q_}:function(t){return!1},Tp=function(t,e,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(t,e)){a();return}if(Ea.default.fetch){Ea.default.fetch(t,{method:"POST",body:e,headers:{"Content-Type":"text/plain"},keepalive:X_(e)}).then(function(n){return a(null,n.ok?null:"Error")}).catch(function(n){return a(null,n)});return}if(Ea.default.XMLHttpRequest){var r=new Ea.default.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return a(null,r.status!==200?"error":void 0)},r.open("POST",t),r.setRequestHeader("Content-Type","text/plain"),r.send(e);return}a()},J_=Ii,eb=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],tb=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],ib=["ad_id","ad_creative_id","ad_universal_id"],ab=["viewstart","error","ended","viewend"],rb=600*1e3,nb=(function(){function t(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};be(this,t);var r,n,s,o,l,u,p,m,c,d,v,f;R(this,"mux",void 0),R(this,"envKey",void 0),R(this,"options",void 0),R(this,"eventQueue",void 0),R(this,"sampleRate",void 0),R(this,"disableCookies",void 0),R(this,"respectDoNotTrack",void 0),R(this,"previousBeaconData",void 0),R(this,"lastEventTime",void 0),R(this,"rateLimited",void 0),R(this,"pageLevelData",void 0),R(this,"viewerData",void 0),this.mux=e,this.envKey=i,this.options=a,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new J_(K_(this.envKey,this.options));var b;this.sampleRate=(b=this.options.sampleRate)!==null&&b!==void 0?b:1;var g;this.disableCookies=(g=this.options.disableCookies)!==null&&g!==void 0?g:!1;var y;this.respectDoNotTrack=(y=this.options.respectDoNotTrack)!==null&&y!==void 0?y:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(o=this.options.platform)===null||o===void 0?void 0:o.product,viewer_device_category:"",viewer_device_manufacturer:(l=this.options.platform)===null||l===void 0?void 0:l.manufacturer,viewer_os_family:(p=this.options.platform)===null||p===void 0||(u=p.os)===null||u===void 0?void 0:u.family,viewer_os_architecture:(c=this.options.platform)===null||c===void 0||(m=c.os)===null||m===void 0?void 0:m.architecture,viewer_os_version:(v=this.options.platform)===null||v===void 0||(d=v.os)===null||d===void 0?void 0:d.version,page_url:Yl.default===null||Yl.default===void 0||(f=Yl.default.location)===null||f===void 0?void 0:f.href},this.viewerData=this.disableCookies?{}:W_()}return bt(t,[{key:"send",value:function(e,i){if(!(!e||!(i!=null&&i.view_id))){if(this.respectDoNotTrack&&hd())return re.info("Not sending `"+e+"` because Do Not Track is enabled");if(!i||typeof i!="object")return re.error("A data object was expected in send() but was not provided");var a=this.disableCookies?{}:F_(),r=xu(Fn({},this.pageLevelData,i,a,this.viewerData),{event:e,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,o=this._deduplicateBeaconData(e,r),l=pd(o);if(this.lastEventTime=this.mux.utils.now(),s)return re.info("Not sending event due to sample rate restriction",e,r,l);if(this.envKey||re.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,r,l),!this.rateLimited)if(re.info("Sending event",e,r,l),this.rateLimited=!this.eventQueue.queueEvent(e,l),this.mux.WINDOW_UNLOADING&&e==="viewend")this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&e==="hb")this.eventQueue.flushEvents(!0);else if(ab.indexOf(e)>=0){if(e==="error"&&i.player_error_severity==="warning")return;this.eventQueue.flushEvents()}if(this.rateLimited)return r.event="eventrateexceeded",l=pd(r),this.eventQueue.queueEvent(r.event,l),re.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,i){var a=this,r={},n=i.view_id;if(n==="-1"||e==="viewstart"||e==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=rb)r=Fn({},i),n&&(this.previousBeaconData=r),n&&e==="viewend"&&(this.previousBeaconData=null);else{var s=e.indexOf("request")===0;Object.entries(i).forEach(function(o){var l=wi(o,2),u=l[0],p=l[1];a.previousBeaconData&&(p!==a.previousBeaconData[u]||eb.indexOf(u)>-1||a.objectHasChanged(s,u,p,a.previousBeaconData[u])||a.eventRequiresKey(e,u))&&(r[u]=p,a.previousBeaconData[u]=p)})}return r}},{key:"objectHasChanged",value:function(e,i,a,r){return!e||i.indexOf("request_")!==0?!1:i==="request_response_headers"||typeof a!="object"||typeof r!="object"?!0:Object.keys(a||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(e,i){return!!(e==="renditionchange"&&i.indexOf("video_source_")===0||ib.includes(i)&&tb.includes(e)||e==="playbackmodechange"&&i.indexOf("player_playback_mode")===0)}}]),t})(),sb=function t(e){be(this,t);var i=0,a=0,r=0,n=0,s=0,o=0,l=0,u=function(c,d){var v=d.request_start,f=d.request_response_start,b=d.request_response_end,g=d.request_bytes_loaded;n++;var y,E;if(f?(y=f-(v??0),E=(b??0)-f):E=(b??0)-(v??0),E>0&&g&&g>0){var S=g/E*8e3;s++,a+=g,r+=E,e.data.view_min_request_throughput=Math.min(e.data.view_min_request_throughput||1/0,S),e.data.view_average_request_throughput=a/r*8e3,e.data.view_request_count=n,y>0&&(i+=y,e.data.view_max_request_latency=Math.max(e.data.view_max_request_latency||0,y),e.data.view_average_request_latency=i/s)}},p=function(c,d){n++,o++,e.data.view_request_count=n,e.data.view_request_failed_count=o},m=function(c,d){n++,l++,e.data.view_request_count=n,e.data.view_request_canceled_count=l};e.on("requestcompleted",u),e.on("requestfailed",p),e.on("requestcanceled",m)},ob=sb,lb=3600*1e3,db=function t(e){var i=this;be(this,t),R(this,"_lastEventTime",void 0),e.on("before*",function(a,r){var n=r.viewer_time,s=Ne.now(),o=i._lastEventTime;if(i._lastEventTime=s,o&&s-o>lb){var l=Object.keys(e.data).reduce(function(p,m){return m.indexOf("video_")===0?Object.assign(p,R({},m,e.data[m])):p},{});e.mux.log.info("Received event after at least an hour inactivity, creating a new view");var u=e.playbackHeartbeat._playheadShouldBeProgressing;e._resetView(Object.assign({viewer_time:n},l)),e.playbackHeartbeat._playheadShouldBeProgressing=u,e.playbackHeartbeat._playheadShouldBeProgressing&&a.type!=="play"&&a.type!=="adbreakstart"&&(e.emit("play",{viewer_time:n}),a.type!=="playing"&&e.emit("playing",{viewer_time:n}))}})},ub=db,cb=function t(e){be(this,t);var i=function(o){var l=hb(o),u=mb(o);if(l!=null&&!Rh(l,n)&&s<=u){n=l,s=u;var p={video_cdn:l};e.emit("cdnchange",p)}},a=null,r=null,n=null,s=0;e.on("viewinit",function(){a=null,r=null,n=null,s=0}),e.on("beforecdnchange",function(o,l){var u=l==null?void 0:l.video_cdn;u&&(typeof l.video_previous_cdn>"u"||l.video_previous_cdn===null)&&(Rh(u,r)?l.video_previous_cdn=a??void 0:(l.video_previous_cdn=r??void 0,a=r,r=u))}),e.on("requestcompleted",function(o,l){i(l)})};function Rh(t,e){return(t==null?void 0:t.toLowerCase())===(e==null?void 0:e.toLowerCase())}function hb(t){var e;return t!=null&&t.request_type&&(t.request_type==="media"||t.request_type==="video")&&!((e=t.request_response_headers)===null||e===void 0)&&e["x-cdn"]?t.request_response_headers["x-cdn"]:t!=null&&t.video_cdn?t.video_cdn:null}function mb(t){return t!=null&&t.request_start?t.request_start:t!=null&&t.viewer_time?t.viewer_time:Date.now()}var pb=cb,vb=function(t){try{return JSON.parse(t),!0}catch{return!1}},fb=function t(e){var i=this;be(this,t),R(this,"_emittingAutomaticEvent",!1),R(this,"_hasInitialized",!1),R(this,"_currentMode","standard"),e.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=e.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,e.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),e.on("viewend",function(){i._hasInitialized=!1}),e.on("playbackmodechange",function(a,r){i._emittingAutomaticEvent||(r.player_playback_mode_data?vb(r.player_playback_mode_data)||(e.mux.log.warn("Invalid JSON string for player_playback_mode_data"),r.player_playback_mode_data="{}"):r.player_playback_mode_data="{}",e.data.player_playback_mode_data=r.player_playback_mode_data,e.data.player_playback_mode=r.player_playback_mode,i._currentMode=r.player_playback_mode)})},Eb=fb,_b=(function(){function t(e){be(this,t),R(this,"pm",void 0),R(this,"_currentRangeStart",void 0),R(this,"_lastPlayheadTime",void 0),this.pm=e,this._currentRangeStart=null,this._lastPlayheadTime=null,e.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),e.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return bt(t,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var i=this.pm.data.player_playhead_time||0;e[e.length-1][1]=i}}},{key:"_updatePlaybackRange",value:function(){var e,i=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&!((e=this.pm.adTracker)===null||e===void 0)&&e.isAdBreak&&this._lastPlayheadTime!==null&&i<this._lastPlayheadTime)){if(this._lastPlayheadTime!==null&&this._currentRangeStart!==null){var a=Math.abs(i-this._lastPlayheadTime);if(a>1e3){var r=this.pm.data.video_playback_ranges;r&&r.length>0&&(r[r.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}}if(this._currentRangeStart===null){var n=this.pm.data.video_playback_ranges||[];n.length>0&&n[n.length-1][1]===i?this._currentRangeStart=n[n.length-1][0]:(this._currentRangeStart=i,n.push([i,i])),this.pm.data.video_playback_ranges=n}else this._updateLastRangeEnd();this._lastPlayheadTime=i}}},{key:"_endPlaybackRange",value:function(){this._currentRangeStart!==null&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),t})(),bb=_b,Zt=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),gb=function(t){if(!t)return Zt.UNKNOWN;switch(t){case"cellular":case"wimax":return Zt.CELLULAR;case"wifi":return Zt.WIFI;case"ethernet":return Zt.WIRED;case"none":return Zt.NO_CONNECTION;case"bluetooth":case"other":return Zt.OTHER;case"unknown":return Zt.UNKNOWN;default:return Zt.OTHER}},yb=function(t){return typeof t=="object"&&"connection"in t&&typeof t.connection=="object"},ta=_t(li()),Tb=(function(){function t(e){var i=this;be(this,t),R(this,"pm",void 0),R(this,"lastType",void 0),R(this,"lastLowDataMode",void 0),this.pm=e,this.pm.one("viewinit",function(){var a,r=i.emit.bind(i);r(),ta.default.addEventListener("online",r),ta.default.addEventListener("offline",r),(a=t.connection)===null||a===void 0||a.addEventListener("change",r),i.pm.on("destroy",function(){var n;(n=t.connection)===null||n===void 0||n.removeEventListener("change",r),ta.default.removeEventListener("online",r),ta.default.removeEventListener("offline",r)})})}return bt(t,[{key:"type",get:function(){var e,i;return((e=ta.default.navigator)===null||e===void 0?void 0:e.onLine)===!1?Zt.NO_CONNECTION:!((i=t.connection)===null||i===void 0)&&i.type?gb(t.connection.type):Zt.UNKNOWN}},{key:"lowDataMode",get:function(){var e;return(e=t.connection)===null||e===void 0?void 0:e.saveData}},{key:"emit",value:function(){var e=this.type,i=this.lowDataMode;e===this.lastType&&i===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=i,this.pm.emit("networkchange",Fn({viewer_connection_type:e},i!==void 0&&{viewer_connection_low_data_mode:i})))}}],[{key:"connection",get:function(){return yb(ta.default.navigator)?ta.default.navigator.connection:null}}]),t})(),Ab=Tb,kb=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],Sb=new Set(["requestcompleted","requestfailed","requestcanceled"]),wb=(function(t){GE(i,t);var e=XE(i);function i(a,r,n){be(this,i);var s;s=e.call(this),R($(s),"pageLoadEndTime",void 0),R($(s),"pageLoadInitTime",void 0),R($(s),"_destroyed",void 0),R($(s),"_heartBeatTimeout",void 0),R($(s),"adTracker",void 0),R($(s),"dashjs",void 0),R($(s),"data",void 0),R($(s),"disablePlayheadRebufferTracking",void 0),R($(s),"disableRebufferTracking",void 0),R($(s),"disableAdPlaybackRangeFiltering",void 0),R($(s),"errorTracker",void 0),R($(s),"errorTranslator",void 0),R($(s),"emitTranslator",void 0),R($(s),"getAdData",void 0),R($(s),"getPlayheadTime",void 0),R($(s),"getStateData",void 0),R($(s),"stateDataTranslator",void 0),R($(s),"hlsjs",void 0),R($(s),"id",void 0),R($(s),"longResumeTracker",void 0),R($(s),"minimumRebufferDuration",void 0),R($(s),"mux",void 0),R($(s),"playbackEventDispatcher",void 0),R($(s),"playbackHeartbeat",void 0),R($(s),"playbackHeartbeatTime",void 0),R($(s),"playheadTime",void 0),R($(s),"seekingTracker",void 0),R($(s),"sustainedRebufferThreshold",void 0),R($(s),"watchTimeTracker",void 0),R($(s),"currentFragmentPDT",void 0),R($(s),"currentFragmentStart",void 0),s.pageLoadInitTime=$o.navigationStart(),s.pageLoadEndTime=$o.domContentLoadedEventEnd();var o={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(c){return c},emitTranslator:function(){for(var c=arguments.length,d=new Array(c),v=0;v<c;v++)d[v]=arguments[v];return d},stateDataTranslator:function(c){return c}};s.mux=a,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign(o,n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),re.level=n.debug?va.DEBUG:va.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.disableAdPlaybackRangeFiltering=n.disableAdPlaybackRangeFiltering,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new nb(a,n.data.env_key,n),s.data={player_instance_id:Bn(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var l=(function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind($(s));if(s.on("viewinit",function(c,d){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,d),this._initializeViewData(),this.one("play",l),this.one("adbreakstart",l)}),s.on("videochange",function(c,d){this._resetView(d)}),s.on("programchange",function(c,d){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(d,{view_program_changed:!0})),l(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(c,d){this.currentFragmentPDT=d.currentFragmentPDT,this.currentFragmentStart=d.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var u=function(){var c=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",c&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",u,!1);var p=function(c){c.persisted||s.destroy()};window.addEventListener("pagehide",p,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",u),window.removeEventListener("pagehide",p)})}s.on("playerready",function(c,d){Object.assign(this.data,d)}),kb.forEach(function(c){s.on(c,function(d,v){c.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,v),this._sanitizeData()}),s.on("after"+c,function(){(c!=="error"||this.errorTracker.viewErrored)&&this.send(c)})}),s.on("viewend",function(c,d){Object.assign(s.data,d)});var m=function(c){var d=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=d-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",m),s.longResumeTracker=new ub($(s)),s.errorTracker=new f_($(s)),new $_($(s)),s.seekingTracker=new x_($(s)),s.playheadTime=new T_($(s)),s.playbackHeartbeat=new p_($(s)),new C_($(s)),s.watchTimeTracker=new __($(s)),new g_($(s)),new bb($(s)),s.adTracker=new P_($(s)),new w_($(s)),new k_($(s)),new R_($(s)),new ob($(s)),new pb($(s)),new Eb($(s)),new Ab($(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return bt(i,[{key:"emit",value:function(a,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),o=[a,s];if(this.emitTranslator)try{o=this.emitTranslator(a,s)}catch(l){this.mux.log.warn("Exception in emit translator callback.",l)}o!=null&&o.length&&(n=Ss(Sr(i.prototype),"emit",this)).call.apply(n,[this].concat(St(o)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var r=Object.assign({},this.data),n=["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"];if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||n.forEach(function(u){r[u]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var s=wi(Wn(r.video_source_url),2),o=s[0],l=s[1];r.video_source_domain=l,r.video_source_hostname=o}delete r.ad_request_id,r.video_playback_ranges&&(r.video_playback_range=JSON.stringify(r.video_playback_ranges.filter(function(u){return u[0]!==u[1]}).map(function(u){return"".concat(u[0],":").concat(u[1])})),delete r.video_playback_ranges),this.playbackEventDispatcher.send(a,r),this.data.view_sequence_number++,this.data.player_sequence_number++,Sb.has(a)||this._restartHeartBeat(),a==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a,r=this.getStateData();if(typeof this.stateDataTranslator=="function")try{r=this.stateDataTranslator(r)}catch(s){this.mux.log.warn("Exception in stateDataTranslator translator callback.",s)}if(!((a=this.data)===null||a===void 0)&&a.video_cdn&&r!=null&&r.video_cdn){r.video_cdn;var n=QE(r,["video_cdn"]);r=n}Object.assign(this.data,r),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this,r=["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"];r.forEach(function(s){var o=parseInt(a.data[s],10);a.data[s]=isNaN(o)?void 0:o});var n=["player_source_url","video_source_url"];n.forEach(function(s){if(a.data[s]){var o=a.data[s].toLowerCase();(o.indexOf("data:")===0||o.indexOf("blob:")===0)&&(a.data[s]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete a.data[r]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete a.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,r=this.data.view_id=Bn(),n=function(){r===a.data.view_id&&Ce(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){if(!a.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=a.hlsjs,r_(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(n_(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){if(!a.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=a.dashjs,d_(this.mux,this.id,a.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(u_(this.dashjs),this.dashjs=void 0)}}]),i})(h_),Ib=wb,Br=_t(hp());function Gl(){return Br.default&&!!(Br.default.fullscreenElement||Br.default.webkitFullscreenElement||Br.default.mozFullScreenElement||Br.default.msFullscreenElement)}var Rb=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],Lb={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function Cb(t,e,i){var a=wi(Uo(e),3),r=a[0],n=a[1],s=a[2],o=t.log,l=t.utils.getComputedStyle,u=t.utils.secondsToMs,p={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return o.error("The element of `"+n+"` was not a media element.")}else return o.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners"));var m={getPlayheadTime:function(){return u(r.currentTime)},getStateData:function(){var d,v,f,b=((d=(v=this).getPlayheadTime)===null||d===void 0?void 0:d.call(v))||u(r.currentTime),g=this.hlsjs&&this.hlsjs.url,y=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),E={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:Gl(),video_poster_url:r.poster,video_source_url:g||y||r.currentSrc,video_source_duration:u(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(f=r.getVideoPlaybackQuality)===null||f===void 0?void 0:f.call(r).droppedVideoFrames};if(r.getStartDate&&b>0){var S=r.getStartDate();if(S&&typeof S.getTime=="function"&&S.getTime()){var M=S.getTime();if(E.player_program_time=M+b,r.seekable.length>0){var C=M+r.seekable.end(r.seekable.length-1);E.player_live_edge_program_time=C}}}return E}};i=Object.assign(p,i,m),i.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:t.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(d,v){t.emit(n,d,v)},r.mux.updateData=function(d){r.mux.emit("hb",d)};var c=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(d){r.removeEventListener(d,r.mux.listeners[d],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=c,r.mux.swapElement=c,r.mux.emit=c,r.mux.addHLSJS=c,r.mux.addDashJS=c,r.mux.removeHLSJS=c,r.mux.removeDashJS=c,r.mux.updateData=c,r.mux.setEmitTranslator=c,r.mux.setStateDataTranslator=c,r.mux.setGetPlayheadTime=c,r.mux.deleted=!0,t.emit(n,"destroy")},r.mux.swapElement=function(d){var v=wi(Uo(d),3),f=v[0],b=v[1],g=v[2];if(f){if(g!=="video"&&g!=="audio")return t.log.error("The element of `"+b+"` was not a media element.")}else return t.log.error("No element was found with the `"+b+"` query selector.");f.muxId=r.muxId,delete r.muxId,f.mux=f.mux||{},f.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(f.mux.listeners).forEach(function(y){r.removeEventListener(y,f.mux.listeners[y],!1),f.addEventListener(y,f.mux.listeners[y],!1)}),f.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,f.mux.swapElement=r.mux.swapElement,f.mux.destroy=r.mux.destroy,delete r.mux,r=f},r.mux.addHLSJS=function(d){t.addHLSJS(n,d)},r.mux.addDashJS=function(d){t.addDashJS(n,d)},r.mux.removeHLSJS=function(){t.removeHLSJS(n)},r.mux.removeDashJS=function(){t.removeDashJS(n)},r.mux.setEmitTranslator=function(d){t.setEmitTranslator(n,d)},r.mux.setStateDataTranslator=function(d){t.setStateDataTranslator(n,d)},r.mux.setGetPlayheadTime=function(d){d||(d=i.getPlayheadTime),t.setGetPlayheadTime(n,d)},t.init(n,i),t.emit(n,"playerready"),r.paused||(t.emit(n,"play"),r.readyState>2&&t.emit(n,"playing")),r.mux.listeners={},Rb.forEach(function(d){d==="error"&&!i.automaticErrorTracking||(r.mux.listeners[d]=function(){var v={};if(d==="error"){if(!r.error||r.error.code===1)return;v.player_error_code=r.error.code,v.player_error_message=Lb[r.error.code]||r.error.message}t.emit(n,d,v)},r.addEventListener(d,r.mux.listeners[d],!1))}),r.mux.listeners.enterpictureinpicture=function(){t.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var d=Gl()?"fullscreen":"standard";t.emit(n,"playbackmodechange",{player_playback_mode:d,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var d=Gl(),v=document.fullscreenElement;if(d&&(v===r||v!=null&&v.contains(r)))t.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!d){var f=document.pictureInPictureElement===r,b=f?"pip":"standard";t.emit(n,"playbackmodechange",{player_playback_mode:b,player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}function Db(t,e,i,a){var r=a;if(t&&typeof t[e]=="function")try{r=t[e].apply(t,i)}catch(n){re.info("safeCall error",n)}return r}var Sn=_t(li()),Ha;Sn.default&&Sn.default.WeakMap&&(Ha=new WeakMap);function Mb(t,e){if(!t||!e||!Sn.default||typeof Sn.default.getComputedStyle!="function")return"";var i;return Ha&&Ha.has(t)&&(i=Ha.get(t)),i||(i=Sn.default.getComputedStyle(t,null),Ha&&Ha.set(t,i)),i.getPropertyValue(e)}function xb(t){return Math.floor(t*1e3)}var ia={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},gl=function(t){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(t),this.manifest};gl.prototype.process=function(t){var e;for(this.buffer+=t,e=this.buffer.indexOf(`
`);e>-1;e=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)};gl.prototype.processLine=function(t){var e=t.indexOf(":"),i=Ub(t,e),a=i[0],r=i.length===2?Nu(i[1]):void 0;if(a[0]!=="#")this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case ia.TARGET_DURATION:{if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break}case ia.PART_INF:{zl(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break}case ia.SERVER_CONTROL:{zl(this.manifest,i),this.setHoldBack();break}case ia.INF:{r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break}case ia.PROGRAM_DATE_TIME:{var n=r,s=new Date(n);this.manifest.dateTimeString||(this.manifest.dateTimeString=n,this.manifest.dateTimeObject=s),this.currentUri.dateTimeString=n,this.currentUri.dateTimeObject=s;break}case ia.VERSION:{zl(this.manifest,i);break}case ia.SESSION_DATA:{var o=$b(i[1]),l=fp(o);Object.assign(this.manifest.sessionData,l)}}};gl.prototype.setHoldBack=function(){var t=this.manifest,e=t.serverControl,i=t.targetDuration,a=t.partTargetDuration;if(e){var r="holdBack",n="partHoldBack",s=i&&i*3,o=a&&a*2;i&&!e.hasOwnProperty(r)&&(e[r]=s),s&&e[r]<s&&(e[r]=s),a&&!e.hasOwnProperty(n)&&(e[n]=a*3),a&&e[n]<o&&(e[n]=o)}};var zl=function(t,e){var i=Ap(e[0].replace("#EXT-X-","")),a;Pb(e[1])?(a={},a=Object.assign(Nb(e[1]),a)):a=Nu(e[1]),t[i]=a},Ap=function(t){return t.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},Nu=function(t){if(t.toLowerCase()==="yes"||t.toLowerCase()==="no")return t.toLowerCase()==="yes";var e=t.indexOf(":")!==-1?t:parseFloat(t);return isNaN(e)?t:e},Ob=function(t){var e={},i=t.split("=");if(i.length>1){var a=Ap(i[0]);e[a]=Nu(i[1])}return e},Nb=function(t){for(var e=t.split(","),i={},a=0;e.length>a;a++){var r=e[a],n=Ob(r);i=Object.assign(n,i)}return i},Pb=function(t){return t.indexOf("=")>-1},Ub=function(t,e){return e===-1?[t]:[t.substring(0,e),t.substring(e+1)]},$b=function(t){var e={};if(t){var i=t.search(","),a=t.slice(0,i),r=t.slice(i+1),n=[a,r];return n.forEach(function(s,o){for(var l=s.replace(/['"]+/g,"").split("="),u=0;u<l.length;u++)l[u]==="DATA-ID"&&(e["DATA-ID"]=l[1-u]),l[u]==="VALUE"&&(e.VALUE=l[1-u])}),{data:e}}},Hb=gl,Bb={safeCall:Db,safeIncrement:Ce,getComputedStyle:Mb,secondsToMs:xb,assign:Object.assign,headersStringToObject:Ou,cdnHeadersToRequestId:Ho,extractHostnameAndDomain:Wn,extractHostname:xt,manifestParser:Hb,generateShortID:pp,generateUUID:Bn,now:Ne.now,findMediaElement:Uo},Wb=Bb,Fb={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},Kb=Fb,Vb="mux-embed",qb="5.18.1",Yb="2.1",Te={},zi=function(t){var e=arguments;typeof t=="string"?zi.hasOwnProperty(t)?kn.default.setTimeout(function(){e=Array.prototype.splice.call(e,1),zi[t].apply(null,e)},0):re.warn("`"+t+"` is an unknown task"):typeof t=="function"?kn.default.setTimeout(function(){t(zi)},0):re.warn("`"+t+"` is invalid.")},Gb={loaded:Ne.now(),NAME:Vb,VERSION:qb,API_VERSION:Yb,PLAYER_TRACKED:!1,monitor:function(t,e){return Cb(zi,t,e)},destroyMonitor:function(t){var e=wi(Uo(t),1),i=e[0];i&&i.mux&&typeof i.mux.destroy=="function"?i.mux.destroy():re.error("A video element monitor for `"+t+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(t,e){var i=kt(t);Te[i]?Te[i].addHLSJS(e):re.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(t,e){var i=kt(t);Te[i]?Te[i].addDashJS(e):re.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(t){var e=kt(t);Te[e]?Te[e].removeHLSJS():re.error("A monitor for `"+e+"` has not been initialized.")},removeDashJS:function(t){var e=kt(t);Te[e]?Te[e].removeDashJS():re.error("A monitor for `"+e+"` has not been initialized.")},init:function(t,e){hd()&&e&&e.respectDoNotTrack&&re.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=kt(t);Te[i]=new Ib(zi,i,e)},emit:function(t,e,i){var a=kt(t);Te[a]?(Te[a].emit(e,i),e==="destroy"&&delete Te[a]):re.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(t,e){var i=kt(t);Te[i]?Te[i].emit("hb",e):re.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(t,e){var i=kt(t);Te[i]?Te[i].emitTranslator=e:re.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(t,e){var i=kt(t);Te[i]?Te[i].stateDataTranslator=e:re.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(t,e){var i=kt(t);Te[i]?Te[i].getPlayheadTime=e:re.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:hd,log:re,utils:Wb,events:Kb,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(zi,Gb);typeof kn.default<"u"&&typeof kn.default.addEventListener=="function"&&kn.default.addEventListener("pagehide",function(t){t.persisted||(zi.WINDOW_UNLOADING=!0)},!1);var Pu=zi;/*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/var K=yE,J={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},P={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_RECONNECTING:2000003,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},yl=t=>t===J.VIDEO?"playback":t,Di=class Zr extends Error{constructor(e,i=Zr.MEDIA_ERR_CUSTOM,a,r){var n;super(e),this.name="MediaError",this.code=i,this.context=r,this.fatal=a??(i>=Zr.MEDIA_ERR_NETWORK&&i<=Zr.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=Zr.defaultMessages[this.code])!=null?n:"")}};Di.MEDIA_ERR_ABORTED=1,Di.MEDIA_ERR_NETWORK=2,Di.MEDIA_ERR_DECODE=3,Di.MEDIA_ERR_SRC_NOT_SUPPORTED=4,Di.MEDIA_ERR_ENCRYPTED=5,Di.MEDIA_ERR_CUSTOM=100,Di.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var L=Di,zb=t=>t==null,Uu=(t,e)=>zb(e)?!1:t in e,vd={ANY:"any",MUTED:"muted"},ee={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},ii={MSE:"mse",NATIVE:"native"},Xr={HEADER:"header",QUERY:"query",NONE:"none"},Bo=Object.values(Xr),Ai={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},Lh={HLS:Ai.M3U8};[...Object.values(Ai)];var rS={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},nS={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},sS={DESCENDING:"desc"},Qb="en",fd={code:Qb},fe=(t,e,i,a,r=t)=>{r.addEventListener(e,i,a),t.addEventListener("teardown",()=>{r.removeEventListener(e,i)},{once:!0})};function jb(t,e,i){e&&i>e&&(i=e);for(let a=0;a<t.length;a++)if(t.start(a)<=i&&t.end(a)>=i)return!0;return!1}var $u=t=>{let e=t.indexOf("?");if(e<0)return[t];let i=t.slice(0,e),a=t.slice(e);return[i,a]},Tl=t=>{let{type:e}=t;if(e){let i=e.toUpperCase();return Uu(i,Lh)?Lh[i]:e}return Zb(t)},kp=t=>t==="VOD"?ee.ON_DEMAND:ee.LIVE,Sp=t=>t==="EVENT"?Number.POSITIVE_INFINITY:t==="VOD"?Number.NaN:0,Zb=t=>{let{src:e}=t;if(!e)return"";let i="";try{i=Hu(e).pathname}catch{console.error("Invalid url when trying to infer mime type",e)}let a=i.lastIndexOf(".");if(a<0)return eg(t)?Ai.M3U8:"";let r=i.slice(a+1).toUpperCase();return Uu(r,Ai)?Ai[r]:""},Ed=t=>{try{return new URL(t),!1}catch{return!0}},Xb=t=>t.split(`
`).find((e,i,a)=>i>0&&a[i-1].startsWith("#EXT-X-STREAM-INF")),Hu=(t,e)=>{var i;if(!Ed(t))return new URL(t);let a=(i=window==null?void 0:window.location)==null?void 0:i.href,r=e??a;return e&&Ed(e.toString())&&(r=new URL(e,a)),new URL(t,r)},Jb="mux.com",eg=({src:t,customDomain:e=Jb})=>{let i;try{i=new URL(`${t}`)}catch{return!1}let a=i.protocol==="https:",r=i.hostname===`stream.${e}`.toLowerCase(),n=i.pathname.split("/"),s=n.length===2,o=!(n!=null&&n[1].includes("."));return a&&r&&s&&o},pr=t=>{let e=(t??"").split(".")[1];if(e)try{let i=e.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(i).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}},tg=({exp:t},e=Date.now())=>!t||t*1e3<e,ig=({sub:t},e)=>t!==e,ag=({aud:t},e)=>!t,rg=({aud:t},e)=>t!==e,wp="en";function O(t,e=!0){var i,a;let r=e&&(a=(i=fd)==null?void 0:i[t])!=null?a:t,n=e?fd.code:wp;return new ng(r,n)}var ng=class{constructor(e,i=(a=>(a=fd)!=null?a:wp)()){this.message=e,this.locale=i}format(e){return this.message.replace(/\{(\w+)\}/g,(i,a)=>{var r;return(r=e[a])!=null?r:""})}toString(){return this.message}},sg=Object.values(vd),Ch=t=>typeof t=="boolean"||typeof t=="string"&&sg.includes(t),og=(t,e,i)=>{let{autoplay:a}=t,r=!1,n=!1,s=Ch(a)?a:!!a,o=()=>{r||fe(e,"playing",()=>{r=!0},{once:!0})};if(o(),fe(e,"loadstart",()=>{r=!1,o(),Ql(e,s)},{once:!0}),fe(e,"loadstart",()=>{i||(t.streamType&&t.streamType!==ee.UNKNOWN?n=t.streamType===ee.LIVE:n=!Number.isFinite(e.duration)),Ql(e,s)},{once:!0}),i&&i.once(K.Events.LEVEL_LOADED,(l,u)=>{var p;t.streamType&&t.streamType!==ee.UNKNOWN?n=t.streamType===ee.LIVE:n=(p=u.details.live)!=null?p:!1}),!s){let l=()=>{!n||Number.isFinite(t.startTime)||(i!=null&&i.liveSyncPosition?e.currentTime=i.liveSyncPosition:Number.isFinite(e.seekable.end(0))&&(e.currentTime=e.seekable.end(0)))};i&&fe(e,"play",()=>{e.preload==="metadata"?i.once(K.Events.LEVEL_UPDATED,l):l()},{once:!0})}return l=>{r||(s=Ch(l)?l:!!l,Ql(e,s))}},Ql=(t,e)=>{if(!e)return;let i=t.muted,a=()=>t.muted=i;switch(e){case vd.ANY:t.play().catch(()=>{t.muted=!0,t.play().catch(a)});break;case vd.MUTED:t.muted=!0,t.play().catch(a);break;default:t.play().catch(()=>{});break}},lg=({preload:t,src:e},i,a)=>{let r=m=>{m!=null&&["","none","metadata","auto"].includes(m)?i.setAttribute("preload",m):i.removeAttribute("preload")};if(!a)return r(t),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,u=m=>{r(m);let c=m??i.preload;s||c==="none"||(c==="metadata"?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),p())},p=()=>{!n&&e&&(n=!0,a.loadSource(e))};return fe(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,p()},{once:!0}),u(t),u},dg=(t,e,i)=>{let{minPreloadSegments:a}=t;if(a==null||a<=0||!i)return;let r=0,n=!1,s=e.playbackRate||1,o=()=>{e.playbackRate!==0&&(s=e.playbackRate,e.playbackRate=0)};e.playbackRate=0,fe(e,"ratechange",o);let l=(u,{frag:p})=>{n||p.type!=="main"||(r++,r>=a&&(n=!0,e.removeEventListener("ratechange",o),e.playbackRate=s))};i.on(K.Events.FRAG_BUFFERED,l),e.addEventListener("teardown",()=>{n||(n=!0,i.off(K.Events.FRAG_BUFFERED,l),e.playbackRate=s)},{once:!0})},ug=(t,e,i)=>{let{initialEstimateSegments:a}=t;if(a==null||a<=0||!i)return;let r=0;i.on(K.Events.FRAG_BUFFERED,(n,{frag:s})=>{s.type==="main"&&(r++,r<a&&i.abrController.resetEstimator(i.config.abrEwmaDefaultEstimate))})};function cg(t,e){var i;if(!("videoTracks"in t))return;let a=new WeakMap;e.on(K.Events.MANIFEST_PARSED,function(u,p){l();let m=t.addVideoTrack("main");m.selected=!0;for(let[c,d]of p.levels.entries()){let v=m.addRendition(d.url[0],d.width,d.height,d.videoCodec,d.bitrate);a.set(d,`${c}`),v.id=`${c}`}}),e.on(K.Events.AUDIO_TRACKS_UPDATED,function(u,p){o();for(let m of p.audioTracks){let c=m.default?"main":"alternative",d=t.addAudioTrack(c,m.name,m.lang);d.id=`${m.id}`,m.default&&(d.enabled=!0)}});let r=()=>{var u;let p=+((u=[...t.audioTracks].find(c=>c.enabled))==null?void 0:u.id),m=e.audioTracks.map(c=>c.id);p!=e.audioTrack&&m.includes(p)&&(e.audioTrack=p)};t.audioTracks.addEventListener("change",r),e.on(K.Events.LEVELS_UPDATED,function(u,p){var m;let c=t.videoTracks[(m=t.videoTracks.selectedIndex)!=null?m:0];if(!c)return;let d=p.levels.map(v=>a.get(v));for(let v of t.videoRenditions)v.id&&!d.includes(v.id)&&c.removeRendition(v)});let n=u=>{let p=u.target.selectedIndex;p!=e.nextLevel&&(e.nextLevel=p)};(i=t.videoRenditions)==null||i.addEventListener("change",n);let s=()=>{for(let u of t.videoTracks)t.removeVideoTrack(u)},o=()=>{for(let u of t.audioTracks)t.removeAudioTrack(u)},l=()=>{s(),o()};e.once(K.Events.DESTROYING,()=>{var u,p;l(),(u=t.audioTracks)==null||u.removeEventListener("change",r),(p=t.videoRenditions)==null||p.removeEventListener("change",n)})}var jl=t=>"time"in t?t.time:t.startTime;function hg(t,e){e.on(K.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var o,l;let u=(o=s.subtitleTrack)!=null?o:s.closedCaptions,p=e.subtitleTracks.findIndex(({lang:c,name:d,type:v})=>c==(u==null?void 0:u.lang)&&d===s.label&&v.toLowerCase()===s.kind),m=((l=s._id)!=null?l:s.default)?"default":`${s.kind}${p}`;Bu(t,s.kind,s.label,u==null?void 0:u.lang,m,s.default)})});let i=()=>{if(!e.subtitleTracks.length)return;let r=Array.from(t.textTracks).find(o=>o.id&&o.mode==="showing"&&["subtitles","captions"].includes(o.kind));if(!r)return;let n=e.subtitleTracks[e.subtitleTrack],s=n?n.default?"default":`${e.subtitleTracks[e.subtitleTrack].type.toLowerCase()}${e.subtitleTrack}`:void 0;if(e.subtitleTrack<0||(r==null?void 0:r.id)!==s){let o=e.subtitleTracks.findIndex(({lang:l,name:u,type:p,default:m})=>r.id==="default"&&m||l==r.language&&u===r.label&&p.toLowerCase()===r.kind);e.subtitleTrack=o}(r==null?void 0:r.id)===s&&r.cues&&Array.from(r.cues).forEach(o=>{r.addCue(o)})};t.textTracks.addEventListener("change",i),e.on(K.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let o=t.textTracks.getTrackById(n);if(!o)return;let l=o.mode==="disabled";l&&(o.mode="hidden"),s.forEach(u=>{var p;(p=o.cues)!=null&&p.getCueById(u.id)||o.addCue(u)}),l&&(o.mode="disabled")}),e.once(K.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",i),t.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let a=()=>{Array.from(t.textTracks).forEach(r=>{var n,s;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let o="track";r.kind&&(o+=`[kind="${r.kind}"]`),r.label&&(o+=`[label="${r.label}"]`);let l=t.querySelector(o),u=(s=l==null?void 0:l.getAttribute("src"))!=null?s:"";l==null||l.removeAttribute("src"),setTimeout(()=>{l==null||l.setAttribute("src",u)},0)}r.mode!=="hidden"&&(r.mode="hidden")}})};e.once(K.Events.MANIFEST_LOADED,a),e.once(K.Events.MEDIA_ATTACHED,a)}function Bu(t,e,i,a,r,n){let s=document.createElement("track");return s.kind=e,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(e)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),t.append(s),s.track}function mg(t,e){let i=Array.prototype.find.call(t.querySelectorAll("track"),a=>a.track===e);i==null||i.remove()}function is(t,e,i){var a;return(a=Array.from(t.querySelectorAll("track")).find(r=>r.track.label===e&&r.track.kind===i))==null?void 0:a.track}async function Ip(t,e,i,a){let r=is(t,i,a);return r||(r=Bu(t,a,i),r.mode="hidden",await new Promise(n=>setTimeout(()=>n(void 0),0))),r.mode!=="hidden"&&(r.mode="hidden"),[...e].sort((n,s)=>jl(s)-jl(n)).forEach(n=>{var s,o;let l=n.value,u=jl(n);if("endTime"in n&&n.endTime!=null)r==null||r.addCue(new VTTCue(u,n.endTime,a==="chapters"?l:JSON.stringify(l??null)));else{let p=Array.prototype.findIndex.call(r==null?void 0:r.cues,v=>v.startTime>=u),m=(s=r==null?void 0:r.cues)==null?void 0:s[p],c=m?m.startTime:Number.isFinite(t.duration)?t.duration:Number.MAX_SAFE_INTEGER,d=(o=r==null?void 0:r.cues)==null?void 0:o[p-1];d&&(d.endTime=u),r==null||r.addCue(new VTTCue(u,c,a==="chapters"?l:JSON.stringify(l??null)))}}),t.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var Wu="cuepoints",Rp=Object.freeze({label:Wu});async function Lp(t,e,i=Rp){return Ip(t,e,i.label,"metadata")}var _d=t=>({time:t.startTime,value:JSON.parse(t.text)});function pg(t,e={label:Wu}){let i=is(t,e.label,"metadata");return i!=null&&i.cues?Array.from(i.cues,a=>_d(a)):[]}function Cp(t,e={label:Wu}){var i,a;let r=is(t,e.label,"metadata");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return _d(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return _d(s||r.activeCues[0])}async function vg(t,e=Rp){return new Promise(i=>{fe(t,"loadstart",async()=>{let a=await Lp(t,[],e);fe(t,"cuechange",()=>{let r=Cp(t);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}var Fu="chapters",Dp=Object.freeze({label:Fu}),bd=t=>({startTime:t.startTime,endTime:t.endTime,value:t.text});async function Mp(t,e,i=Dp){return Ip(t,e,i.label,"chapters")}function fg(t,e={label:Fu}){var i;let a=is(t,e.label,"chapters");return(i=a==null?void 0:a.cues)!=null&&i.length?Array.from(a.cues,r=>bd(r)):[]}function xp(t,e={label:Fu}){var i,a;let r=is(t,e.label,"chapters");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return bd(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return bd(s||r.activeCues[0])}async function Eg(t,e=Dp){return new Promise(i=>{fe(t,"loadstart",async()=>{let a=await Mp(t,[],e);fe(t,"cuechange",()=>{let r=xp(t);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}function _g(t,e){if(e){let i=e.playingDate;if(i!=null)return new Date(i.getTime()-t.currentTime*1e3)}return typeof t.getStartDate=="function"?t.getStartDate():new Date(NaN)}function bg(t,e){if(e&&e.playingDate)return e.playingDate;if(typeof t.getStartDate=="function"){let i=t.getStartDate();return new Date(i.getTime()+t.currentTime*1e3)}return new Date(NaN)}var wn={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},gg=t=>{if(t===J.VIDEO)return wn.VIDEO;if(t===J.DRM)return wn.DRM},yg=(t,e)=>{var i,a;let r=yl(t),n=`${r}Token`;return(i=e.tokens)!=null&&i[r]?(a=e.tokens)==null?void 0:a[r]:Uu(n,e)?e[n]:void 0},Wo=(t,e,i,a,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s,o;if(n){let g=O("Your device appears to be offline",r),y,E=L.MEDIA_ERR_NETWORK,S=new L(g,E,!1,y);return S.errorCategory=e,S.muxCode=P.NETWORK_OFFLINE,S.data=t,S}let l="status"in t?t.status:t.code,u=Date.now(),p=L.MEDIA_ERR_NETWORK;if(l===200)return;let m=yl(e),c=yg(e,i),d=gg(e),[v]=$u((s=i.playbackId)!=null?s:"");if(!l||!v)return;let f=pr(c);if(c&&!f){let g=O("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:m}),y=O("Compact JWT string: {token}",r).format({token:c}),E=new L(g,p,!0,y);return E.errorCategory=e,E.muxCode=P.NETWORK_TOKEN_MALFORMED,E.data=t,E}if(l>=500){let g=new L("",p,a??!0);return g.errorCategory=e,g.muxCode=P.NETWORK_UNKNOWN_ERROR,g}if(l===403)if(f){if(tg(f,u)){let g={timeStyle:"medium",dateStyle:"medium"},y=O("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:m}),E=O("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",g).format((o=f.exp)!=null?o:0*1e3),currentDate:new Intl.DateTimeFormat("en",g).format(u)}),S=new L(y,p,!0,E);return S.errorCategory=e,S.muxCode=P.NETWORK_TOKEN_EXPIRED,S.data=t,S}if(ig(f,v)){let g=O("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:m}),y=O("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:m,playbackId:v,tokenPlaybackId:f.sub}),E=new L(g,p,!0,y);return E.errorCategory=e,E.muxCode=P.NETWORK_TOKEN_SUB_MISMATCH,E.data=t,E}if(ag(f)){let g=O("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:m}),y=O("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:m,expectedAud:d}),E=new L(g,p,!0,y);return E.errorCategory=e,E.muxCode=P.NETWORK_TOKEN_AUD_MISSING,E.data=t,E}if(rg(f,d)){let g=O("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:m}),y=O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:m,expectedAud:d,aud:f.aud}),E=new L(g,p,!0,y);return E.errorCategory=e,E.muxCode=P.NETWORK_TOKEN_AUD_MISMATCH,E.data=t,E}}else{let g=O("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:m,category:e}),y=O("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new L(g,p,a??!0,y);return E.errorCategory=e,E.muxCode=P.NETWORK_TOKEN_MISSING,E.data=t,E}if(l===412){let g=O("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),y=O("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new L(g,p,a??!0,y);return E.errorCategory=e,E.muxCode=P.NETWORK_NOT_READY,E.streamType=i.streamType===ee.LIVE?"live":i.streamType===ee.ON_DEMAND?"on-demand":"unknown",E.data=t,E}if(l===404){let g=O("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),y=O("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new L(g,p,a??!0,y);return E.errorCategory=e,E.muxCode=P.NETWORK_NOT_FOUND,E.data=t,E}if(l===400){let g=O("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),y=O("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new L(g,p,a??!0,y);return E.errorCategory=e,E.muxCode=P.NETWORK_INVALID_URL,E.data=t,E}let b=new L("",p,a??!0);return b.errorCategory=e,b.muxCode=P.NETWORK_UNKNOWN_ERROR,b.data=t,b},Dh=K.DefaultConfig.capLevelController,Tg={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400};function Ag(t){let e=t.toLowerCase().trim();return Tg[e]}var gd=class Jr extends Dh{constructor(e){super(e)}static setMaxAutoResolution(e,i){i?Jr.maxAutoResolution.set(e,i):Jr.maxAutoResolution.delete(e)}getMaxAutoResolution(){var e;let i=this.hls;return(e=Jr.maxAutoResolution.get(i))!=null?e:void 0}get levels(){var e;return(e=this.hls.levels)!=null?e:[]}getValidLevels(e){return this.levels.filter((i,a)=>this.isLevelAllowed(i)&&a<=e)}getMaxLevelCapped(e){let i=this.getValidLevels(e),a=this.getMaxAutoResolution();if(!a)return super.getMaxLevel(e);let r=Ag(a);if(!r)return super.getMaxLevel(e);let n=i.filter(l=>l.width*l.height<=r),s=n.findIndex(l=>l.width*l.height===r);if(s!==-1){let l=n[s];return i.findIndex(u=>u===l)}if(n.length===0)return 0;let o=n[n.length-1];return i.findIndex(l=>l===o)}getMaxLevel(e){if(this.getMaxAutoResolution()!==void 0)return this.getMaxLevelCapped(e);let i=super.getMaxLevel(e),a=this.getValidLevels(e);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=Jr.minMaxResolution;return r>=n?i:Dh.getMaxLevelByMediaSize(a,n*(16/9),n)}};gd.minMaxResolution=720,gd.maxAutoResolution=new WeakMap;var kg=gd,yd=kg,Sg="com.apple.fps.1_0",wg="application/vnd.apple.mpegurl",Ig=({mediaEl:t,getAppCertificate:e,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in t)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let c=O("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),d=new L(c,L.MEDIA_ERR_ENCRYPTED,!0);return d.errorCategory=J.DRM,d.muxCode=P.ENCRYPTED_CDM_ERROR,a(t,d),()=>{}}let n=t,s=e(),o=null,l=c=>{(async()=>{try{n.webkitKeys||u();let d=await s;if(c.initData===null||d==null)return;let v=Rg(c.initData,d);p(v)}catch(d){console.error("Could not start encrypted playback due to exception",d),a(n,d)}})()},u=()=>{try{let c=new WebKitMediaKeys(Sg);n.webkitSetMediaKeys(c),r()}catch{let c="Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",d=new L(c,L.MEDIA_ERR_ENCRYPTED,!0);throw d.errorCategory=J.DRM,d.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,d}},p=c=>{let d=n.webkitKeys.createSession(wg,c),v=async g=>{try{let y=g.message,E=await i(y);d.update(E)}catch(y){console.error("Error on FairPlay session message",y),a(t,y)}},f=g=>{let y=g.target.error;if(!y)return;console.error(`Internal Webkit Key Session Error - sysCode: ${y.systemCode} code: ${y.code}`);let E=O("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),S=new L(E,L.MEDIA_ERR_ENCRYPTED,!0);S.errorCategory=J.DRM,S.muxCode=P.ENCRYPTED_CDM_ERROR,a(t,S)},b=()=>{d.removeEventListener("webkitkeymessage",v),d.removeEventListener("webkitkeyerror",f),t.removeEventListener("teardown",b),"webkitCurrentPlaybackTargetIsWireless"in t&&t.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",b),o=null;try{d.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in t&&t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",b,{once:!0}),d.addEventListener("webkitkeymessage",v),d.addEventListener("webkitkeyerror",f),t.addEventListener("teardown",b),o=b},m=()=>{t.removeEventListener("webkitneedkey",l),t.removeEventListener("teardown",m),o==null||o();try{n.webkitSetMediaKeys(null)}catch{}};return t.addEventListener("webkitneedkey",l),t.addEventListener("teardown",m,{once:!0}),m},Rg=(t,e)=>{let i=Cg(Lg(t)),a=new Uint8Array(t),r=new Uint8Array(i),n=new Uint8Array(e),s=a.byteLength+4+n.byteLength+4+r.byteLength,o=new Uint8Array(s),l=0,u=m=>{o.set(m,l),l+=m.byteLength},p=m=>{let c=new DataView(o.buffer),d=m.byteLength;c.setUint32(l,d,!0),l+=4,u(m)};return u(a),p(r),p(n),o},Lg=t=>new TextDecoder("utf-16le").decode(t).replace("skd://","").slice(1);function Cg(t){let e=new ArrayBuffer(t.length*2),i=new DataView(e);for(let a=0;a<t.length;a++)i.setUint16(a*2,t.charCodeAt(a),!0);return e}var Dg=({mediaEl:t,getAppCertificate:e,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async m=>{try{let c=m.initDataType;if(c!=="skd"){console.error(`Received unexpected initialization data type "${c}"`);return}t.mediaKeys||await l(c);let d=m.initData;if(d==null){console.error(`Could not start encrypted playback due to missing initData in ${m.type} event`);return}await u(c,d)}catch(c){a(t,c);return}},l=async m=>{let c=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[m],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(v=>(r(),v)).catch(()=>{let v=O("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),f=new L(v,L.MEDIA_ERR_ENCRYPTED,!0);f.errorCategory=J.DRM,f.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,a(t,f)});if(!c)return;let d=await c.createMediaKeys();try{let v=await e();await d.setServerCertificate(v).catch(()=>{let f=O("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),b=new L(f,L.MEDIA_ERR_ENCRYPTED,!0);return b.errorCategory=J.DRM,b.muxCode=P.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(b)})}catch(v){a(t,v);return}await t.setMediaKeys(d)},u=async(m,c)=>{let d=t.mediaKeys.createSession(),v=async g=>{let y=g.message,E=await i(y);try{await d.update(E)}catch{let S=O("Failed to update DRM license. This may be an issue with the player or your protected content."),M=new L(S,L.MEDIA_ERR_ENCRYPTED,!0);M.errorCategory=J.DRM,M.muxCode=P.ENCRYPTED_UPDATE_LICENSE_FAILED,a(t,M)}},f=()=>{let g=y=>{let E;if(y==="internal-error"){let S=O("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser.");E=new L(S,L.MEDIA_ERR_ENCRYPTED,!0),E.errorCategory=J.DRM,E.muxCode=P.ENCRYPTED_CDM_ERROR}else if(y==="output-restricted"||y==="output-downscaled"){let S=O("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");E=new L(S,L.MEDIA_ERR_ENCRYPTED,!1),E.errorCategory=J.DRM,E.muxCode=P.ENCRYPTED_OUTPUT_RESTRICTED}E&&a(t,E)};d.keyStatuses.forEach(y=>g(y))};d.addEventListener("keystatuseschange",f),d.addEventListener("message",v);let b=async()=>{d.removeEventListener("keystatuseschange",f),d.removeEventListener("message",v),"webkitCurrentPlaybackTargetIsWireless"in t&&t.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",b),t.removeEventListener("teardown",b),await d.close().catch(g=>{console.warn("There was an error when closing EME session",g)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in t&&t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",b,{once:!0}),t.addEventListener("teardown",b,{once:!0}),s=b,await d.generateRequest(m,c).catch(async g=>{if(g.name==="NotSupportedError"&&"webkitCurrentPlaybackTargetIsWireless"in t&&t.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),n==null||n();else{let y=O("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),E=new L(y,L.MEDIA_ERR_ENCRYPTED,!0);return E.errorCategory=J.DRM,E.muxCode=P.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error("Failed to generate license request",g),Promise.reject(E)}})},p=async()=>{t.removeEventListener("encrypted",o),t.removeEventListener("teardown",p),s&&await s(),await t.setMediaKeys(null).catch(()=>{})};return t.addEventListener("encrypted",o),t.addEventListener("teardown",p,{once:!0}),p},Mg=({hls:t,mediaEl:e,src:i,muxMediaState:a,saveAndDispatchError:r,maxRetries:n})=>{var s;let o,l=0,u=!1,p=!1,m=!1,c=()=>{o!=null&&(clearTimeout(o),o=void 0)},d=I=>(I==null?void 0:I.muxCode)===P.NETWORK_RECONNECTING,v=()=>!e.paused&&e.readyState<HTMLMediaElement.HAVE_FUTURE_DATA,f=()=>{let I=a.get(e);if(d(I==null?void 0:I.error))return;let H=new L(O("Attempting to reconnect..."),L.MEDIA_ERR_NETWORK,!1);H.errorCategory=J.VIDEO,H.muxCode=P.NETWORK_RECONNECTING,I&&(I.error=H),e.dispatchEvent(new CustomEvent("error",{detail:H}))},b=()=>{if(!m&&i){t.loadSource(i);return}t.startLoad(e.currentTime)},g=()=>{u=!1,p=!0,c();let I=new L(O("Network error, try reloading."),L.MEDIA_ERR_NETWORK,!0);I.errorCategory=J.VIDEO,I.reload=!0,r(e,I)},y=()=>{if(o!=null||u)return;if(l>=n){g();return}u=!0;let I=Math.min(1e3*2**l,3e4);o=setTimeout(()=>{o=void 0,l+=1,b()},I)},E=()=>{let I=a.get(e);!(I!=null&&I.networkError)||p||v()&&(f(),y())},S=()=>{let I=a.get(e);I&&(I.networkError=!0),u=!1,E()},M=()=>{let I=a.get(e);I!=null&&I.networkError&&(l=0,p=!1,c(),u=!0,b())};(s=globalThis.addEventListener)==null||s.call(globalThis,"online",M);let C=()=>{let I=a.get(e);I&&(!I.networkError&&!d(I.error)||(I.networkError=!1,u=!1,l=0,p=!1,c(),I.error&&(I.error=null,e.dispatchEvent(new Event("emptied")))))};return t.on(K.Events.FRAG_BUFFERED,C),fe(e,"playing",()=>{let I=a.get(e);I!=null&&I.networkError&&(u=!1,l=0,p=!1,c(),I.error&&(I.error=null))}),fe(e,"waiting",E),e.addEventListener("teardown",()=>{var I;(I=globalThis.removeEventListener)==null||I.call(globalThis,"online",M),c()},{once:!0}),{handleHlsError:(I,H)=>{var q,F;if(I.type!==K.ErrorTypes.NETWORK_ERROR)return!1;let W=(F=(q=I.response)==null?void 0:q.code)!=null?F:0;return(H.muxCode===P.NETWORK_OFFLINE||W===0||W>=500)&&I.fatal?(S(),!0):!1},onManifestLoaded:()=>{m=!0,u=!1,c()}}},ws={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},xg=t=>{if(t.includes("fps"))return ws.FAIRPLAY;if(t.includes("playready"))return ws.PLAYREADY;if(t.includes("widevine"))return ws.WIDEVINE},Og=(t,e)=>{let i=Xb(t);if(!i)return Promise.reject(new Error("No media playlist URL found in multivariant playlist"));if(Ed(i)&&!e)return Promise.reject(new Error("masterPlaylistUrl is required to resolve relative media playlist URL"));let a;try{a=Hu(i,e)}catch(r){return Promise.reject(r)}return fetch(a).then(r=>r.status!==200?Promise.reject(r):r.text())},Ng=t=>{let e=t.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!e.length)return{};let i={};for(let a of e){let r=Ug(a),n=r["DATA-ID"];n&&(i[n]={...r})}return{sessionData:i}},Pg=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function Ug(t){let e=[...t.matchAll(Pg)];return Object.fromEntries(e.map(([,i,a])=>[i,a]))}var $g=t=>{var e,i,a;let r=t.split(`
`),n=(i=((e=r.find(u=>u.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?e:"").split(":")[1])==null?void 0:i.trim(),s=kp(n),o=Sp(n),l;if(s===ee.LIVE){let u=r.find(p=>p.startsWith("#EXT-X-PART-INF"));if(u)l=+u.split(":")[1].split("=")[1]*2;else{let p=r.find(c=>c.startsWith("#EXT-X-TARGETDURATION")),m=(a=p==null?void 0:p.split(":"))==null?void 0:a[1];l=+(m??6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},Hg=async(t,e)=>{if(e===Ai.MP4)return{streamType:ee.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(e===Ai.M3U8){let i=await fetch(t);if(!i.ok)return Promise.reject(i);let a=await i.text(),r=await Og(a,i.url);return{...Ng(a),...$g(r)}}return console.error(`Media type ${e} is an unrecognized or unsupported type for src ${t}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},Bg=async(t,e,i=Tl({src:t}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:u,sessionData:p}=await Hg(t,i),m=p==null?void 0:p["com.apple.hls.chapters"];(m!=null&&m.URI||m!=null&&m.VALUE.toLocaleLowerCase().startsWith("http"))&&Ku((a=m.URI)!=null?a:m.VALUE,e),((r=oe.get(e))!=null?r:{}).liveEdgeStartOffset=u,((n=oe.get(e))!=null?n:{}).targetLiveWindow=l,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=oe.get(e))!=null?s:{}).streamType=o,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},Ku=async(t,e)=>{var i,a;try{let r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!((i=n==null?void 0:n[0])!=null&&i.metadata))return;for(let l of n[0].metadata)l.key&&l.value&&(s[l.key]=l.value);((a=oe.get(e))!=null?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");e.dispatchEvent(o)}catch(r){console.error(r)}},Wg=t=>{var e;let i=t.type,a=kp(i),r=Sp(i),n,s=!!((e=t.partList)!=null&&e.length);return a===ee.LIVE&&(n=s?t.partTarget*2:t.targetduration*3),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},Fg=(t,e,i)=>{var a,r,n,s,o,l,u,p;let{streamType:m,targetLiveWindow:c,liveEdgeStartOffset:d,lowLatency:v}=Wg(t);if(m===ee.LIVE){v?(i.config.backBufferLength=(a=i.userConfig.backBufferLength)!=null?a:4,i.config.maxFragLookUpTolerance=(r=i.userConfig.maxFragLookUpTolerance)!=null?r:.001,i.config.abrBandWidthUpFactor=(n=i.userConfig.abrBandWidthUpFactor)!=null?n:i.config.abrBandWidthFactor):i.config.backBufferLength=(s=i.userConfig.backBufferLength)!=null?s:8;let f=Object.freeze({get length(){return e.seekable.length},start(b){return e.seekable.start(b)},end(b){var g;return b>this.length||b<0||Number.isFinite(e.duration)?e.seekable.end(b):(g=i.liveSyncPosition)!=null?g:e.seekable.end(b)}});((o=oe.get(e))!=null?o:{}).seekable=f}((l=oe.get(e))!=null?l:{}).liveEdgeStartOffset=d,((u=oe.get(e))!=null?u:{}).targetLiveWindow=c,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((p=oe.get(e))!=null?p:{}).streamType=m,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},Mh,xh,Op=(xh=(Mh=globalThis==null?void 0:globalThis.navigator)==null?void 0:Mh.userAgent)!=null?xh:"",Oh,Nh,Ph,Kg=(Ph=(Nh=(Oh=globalThis==null?void 0:globalThis.navigator)==null?void 0:Oh.userAgentData)==null?void 0:Nh.platform)!=null?Ph:"",Vg=Op.toLowerCase().includes("android")||["x11","android"].some(t=>Kg.toLowerCase().includes(t)),qg=t=>/^((?!chrome|android).)*safari/i.test(Op)&&!!t.canPlayType("application/vnd.apple.mpegurl"),oe=new WeakMap,ki="mux.com",Uh,$h,Np=($h=(Uh=K).isSupported)==null?void 0:$h.call(Uh),Yg=t=>Vg||!qg(t),Vu=()=>{if(typeof window<"u")return Pu.utils.now()},Gg=Pu.utils.generateUUID,Td=({playbackId:t,customDomain:e=ki,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:u,tokens:{playback:p=u}={},extraSourceParams:m={}}={})=>{if(!t)return;let[c,d=""]=$u(t),v=new URL(`https://stream.${e}/${c}.m3u8${d}`);return p||v.searchParams.has("token")?(v.searchParams.forEach((f,b)=>{b!="token"&&v.searchParams.delete(b)}),p&&v.searchParams.set("token",p)):(i&&v.searchParams.set("max_resolution",i),a&&(v.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&v.searchParams.set("rendition_order",r),n&&v.searchParams.set("program_start_time",`${n}`),s&&v.searchParams.set("program_end_time",`${s}`),o&&v.searchParams.set("asset_start_time",`${o}`),l&&v.searchParams.set("asset_end_time",`${l}`),Object.entries(m).forEach(([f,b])=>{b!=null&&v.searchParams.set(f,b)})),v.toString()},Al=t=>{if(!t)return;let[e]=t.split("?");return e||void 0},qu=t=>{if(!t||!t.startsWith("https://stream."))return;let[e]=new URL(t).pathname.slice(1).split(/\.m3u8|\//);return e||void 0},zg=t=>{var e,i,a;return(e=t==null?void 0:t.metadata)!=null&&e.video_id?t.metadata.video_id:Vp(t)&&(a=(i=Al(t.playbackId))!=null?i:qu(t.src))!=null?a:t.src},Pp=t=>{var e;return(e=oe.get(t))==null?void 0:e.error},Qg=t=>{var e;return(e=oe.get(t))==null?void 0:e.metadata},Ad=t=>{var e,i;return(i=(e=oe.get(t))==null?void 0:e.streamType)!=null?i:ee.UNKNOWN},jg=t=>{var e,i;return(i=(e=oe.get(t))==null?void 0:e.targetLiveWindow)!=null?i:Number.NaN},Yu=t=>{var e,i;return(i=(e=oe.get(t))==null?void 0:e.seekable)!=null?i:t.seekable},Zg=t=>{var e;let i=(e=oe.get(t))==null?void 0:e.liveEdgeStartOffset;if(typeof i!="number")return Number.NaN;let a=Yu(t);return a.length?a.end(a.length-1)-i:Number.NaN},Xg=t=>{var e;return(e=oe.get(t))==null?void 0:e.coreReference},Gu=.034,Jg=(t,e,i=Gu)=>Math.abs(t-e)<=i,Up=(t,e,i=Gu)=>t>e||Jg(t,e,i),e0=(t,e=Gu)=>t.paused&&Up(t.currentTime,t.duration,e),$p=(t,e)=>{var i,a,r;if(!e||!t.buffered.length)return;if(t.readyState>2)return!1;let n=e.currentLevel>=0?(a=(i=e.levels)==null?void 0:i[e.currentLevel])==null?void 0:a.details:(r=e.levels.find(m=>!!m.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(t.currentTime<t.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(t.currentTime<=o.start)return!1;let l=o.start+o.duration/2,u=t.buffered.start(t.buffered.length-1),p=t.buffered.end(t.buffered.length-1);return l>u&&l<p},Hp=(t,e)=>t.ended||t.loop?t.ended:e&&$p(t,e)?!0:e0(t),Bp=(t,e,i)=>{Wp(e,i,t);let{metadata:a={}}=t,{view_session_id:r=Gg()}=a,n=zg(t);a.view_session_id=r,a.video_id=n,t.metadata=a;let s=c=>{var d;(d=e.mux)==null||d.emit("hb",{view_drm_type:c})};t.drmTypeCb=s,t.fallbackToWebkitFairplay=async()=>{var c;let d=!e.paused,v=e.currentTime;t.useWebkitFairplay=!0;let f=t.muxDataKeepSession;t.muxDataKeepSession=!0;let b=(c=oe.get(e))==null?void 0:c.coreReference;Bp(t,e,b),t.muxDataKeepSession=f,t.useWebkitFairplay=!1,d&&await e.play().then(()=>{e.currentTime=v}).catch(()=>{}),e.currentTime=v},oe.set(e,{retryCount:0});let o=t0(t,e),l=lg(t,e,o);t!=null&&t.muxDataKeepSession&&e!=null&&e.mux&&!e.mux.deleted?o&&e.mux.addHLSJS({hlsjs:o,Hls:o?K:void 0}):l0(t,e,o),d0(t,e,o),vg(e),Eg(e);let u=og(t,e,o);dg(t,e,o),ug(t,e,o);let p={engine:o,setAutoplay:u,setPreload:l},m=oe.get(e);return m&&(m.coreReference=p),p},Wp=(t,e,i)=>{let a=e==null?void 0:e.engine;t!=null&&t.mux&&!t.mux.deleted&&(i!=null&&i.muxDataKeepSession?a&&t.mux.removeHLSJS():(t.mux.destroy(),delete t.mux)),a&&(a.detachMedia(),a.destroy()),t&&(t.hasAttribute("src")&&(t.removeAttribute("src"),t.load()),t.removeEventListener("error",Yp),t.removeEventListener("error",kd),t.removeEventListener("durationchange",qp),oe.delete(t),t.dispatchEvent(new Event("teardown")))};function Fp(t,e){var i;let a=Tl(t);if(a!==Ai.M3U8)return!0;let r=!a||((i=e.canPlayType(a))!=null?i:!0),{preferPlayback:n}=t,s=n===ii.MSE,o=n===ii.NATIVE,l=Np&&(s||Yg(e));return r&&(o||!l)}var t0=(t,e)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:u}=t,p=Tl(t)===Ai.M3U8,m=Fp(t,e);if(p&&!m&&Np){let c={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...u!=null?{abrEwmaDefaultEstimate:u*1e3}:{}},d=i0(a),v=a0(t),f=[Xr.QUERY,Xr.HEADER].includes(s)?{useHeaders:s===Xr.HEADER,sessionId:n==null?void 0:n.view_session_id,contentId:n==null?void 0:n.video_id}:void 0,b=o0(t),g=new K({debug:i,startPosition:r,cmcd:f,xhrSetup:(y,E)=>{var S,M;if(s&&s!==Xr.QUERY)return;let C=Hu(E);if(!C.searchParams.has("CMCD"))return;let I=((M=(S=C.searchParams.get("CMCD"))==null?void 0:S.split(","))!=null?M:[]).filter(H=>H.startsWith("sid")||H.startsWith("cid")).join(",");C.searchParams.set("CMCD",I),y.open("GET",C)},...c,...b,...d,...v,...o});return b.capLevelController===yd&&l!==void 0&&yd.setMaxAutoResolution(g,l),g.on(K.Events.MANIFEST_PARSED,async function(y,E){var S,M;let C=(S=E.sessionData)==null?void 0:S["com.apple.hls.chapters"];(C!=null&&C.URI||C!=null&&C.VALUE.toLocaleLowerCase().startsWith("http"))&&Ku((M=C==null?void 0:C.URI)!=null?M:C==null?void 0:C.VALUE,e)}),g}},i0=t=>t===ee.LIVE?{backBufferLength:8}:{},a0=t=>{let{tokens:{drm:e}={},playbackId:i,drmTypeCb:a}=t,r=Al(i);return!e||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:Is(t,"fairplay"),serverCertificateUrl:Kp(t,"fairplay")},"com.widevine.alpha":{licenseUrl:Is(t,"widevine")},"com.microsoft.playready":{licenseUrl:Is(t,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(o=>{var l;let u=(l=o.videoCapabilities)==null?void 0:l.map(p=>({...p,robustness:"HW_SECURE_ALL"}));return{...o,videoCapabilities:u}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(o=>{let l=xg(n);return a==null||a(l),o}))}},r0=async t=>{let e=await fetch(t);return e.status!==200?Promise.reject(e):await e.arrayBuffer()},n0=async(t,e)=>{let i=await fetch(e,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:t});if(i.status!==200)return Promise.reject(i);let a=await i.arrayBuffer();return new Uint8Array(a)},s0=(t,e)=>{let i={mediaEl:e,getAppCertificate:()=>r0(Kp(t,"fairplay")).catch(a=>{if(a instanceof Response){let r=Wo(a,J.DRM,t);return console.error("mediaError",r==null?void 0:r.message,r==null?void 0:r.context),r?Promise.reject(r):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(a)}),getLicenseKey:a=>n0(a,Is(t,"fairplay")).catch(r=>{if(r instanceof Response){let n=Wo(r,J.DRM,t);return console.error("mediaError",n==null?void 0:n.message,n==null?void 0:n.context),n?Promise.reject(n):Promise.reject(new Error("Unexpected error in license key request"))}return Promise.reject(r)}),saveAndDispatchError:bi,drmTypeCb:()=>{var a;(a=t.drmTypeCb)==null||a.call(t,ws.FAIRPLAY)}};if(t.useWebkitFairplay)Ig(i);else{let a={fallbackToWebkitFairplay:async()=>{var n;await r(),(n=t.fallbackToWebkitFairplay)==null||n.call(t)},...i},r=Dg(a)}},Is=({playbackId:t,tokens:{drm:e}={},customDomain:i=ki},a)=>{let r=Al(t);return`https://license.${i.toLocaleLowerCase().endsWith(ki)?i:ki}/license/${a}/${r}?token=${e}`},Kp=({playbackId:t,tokens:{drm:e}={},customDomain:i=ki},a)=>{let r=Al(t);return`https://license.${i.toLocaleLowerCase().endsWith(ki)?i:ki}/appcert/${a}/${r}?token=${e}`},Vp=({playbackId:t,src:e,customDomain:i})=>{if(t)return!0;if(typeof e!="string")return!1;let a=window==null?void 0:window.location.href,r=new URL(e,a).hostname.toLocaleLowerCase();return r.includes(ki)||!!i&&r.includes(i.toLocaleLowerCase())},o0=(t,e)=>{let i={};return i.capLevelToPlayerSize=t.capRenditionToPlayerSize,i.capLevelToPlayerSize==null?(i.capLevelController=yd,i.capLevelToPlayerSize=!0):i.capLevelController=TE,i},l0=(t,e,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=Pu,muxDataSDKOptions:o={}}=t,l=Vp(t);if(!n&&(r||l)){let{playerInitTime:u,playerSoftwareName:p,playerSoftwareVersion:m,beaconCollectionDomain:c,debug:d,disableCookies:v}=t,f={...t.metadata,video_title:((a=t==null?void 0:t.metadata)==null?void 0:a.video_title)||void 0},b=g=>typeof g.player_error_code=="string"?!1:typeof t.errorTranslator=="function"?t.errorTranslator(g):g;s.monitor(e,{debug:d,beaconCollectionDomain:c,hlsjs:i,Hls:i?K:void 0,automaticErrorTracking:!1,errorTranslator:b,disableCookies:v,...o,data:{...r?{env_key:r}:{},player_software_name:p,player_software:p,player_software_version:m,player_init_time:u,...f}})}},d0=(t,e,i)=>{var a,r,n;let s=Fp(t,e),{src:o,customDomain:l=ki}=t,u=()=>{e.ended||t.disablePseudoEnded||!Hp(e,i)||($p(e,i)?e.currentTime=e.buffered.end(e.buffered.length-1):e.dispatchEvent(new Event("ended")))},p,m,c=()=>{let d=Yu(e),v,f;d.length>0&&(v=d.start(0),f=d.end(0)),(m!==f||p!==v)&&e.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),p=v,m=f};if(fe(e,"durationchange",c),e&&s){let d=Tl(t);if(typeof o=="string"){if(o.endsWith(".mp4")&&o.includes(l)){let b=qu(o),g=new URL(`https://stream.${l}/${b}/metadata.json`);Ku(g.toString(),e)}let v=()=>{if(Ad(e)!==ee.LIVE||Number.isFinite(e.duration))return;let b=setInterval(c,1e3);e.addEventListener("teardown",()=>{clearInterval(b)},{once:!0}),fe(e,"durationchange",()=>{Number.isFinite(e.duration)&&clearInterval(b)})},f=async()=>Bg(o,e,d).then(v).catch(b=>{if(b instanceof Response){let g=Wo(b,J.VIDEO,t);if(g){bi(e,g);return}}});if(e.preload==="none"){let b=()=>{f(),e.removeEventListener("loadedmetadata",g)},g=()=>{f(),e.removeEventListener("play",b)};fe(e,"play",b,{once:!0}),fe(e,"loadedmetadata",g,{once:!0})}else f();(a=t.tokens)!=null&&a.drm?s0(t,e):fe(e,"encrypted",()=>{let b=O("Attempting to play DRM-protected content without providing a DRM token."),g=new L(b,L.MEDIA_ERR_ENCRYPTED,!0);g.errorCategory=J.DRM,g.muxCode=P.ENCRYPTED_MISSING_TOKEN,bi(e,g)},{once:!0}),e.setAttribute("src",o),t.startTime&&(((r=oe.get(e))!=null?r:{}).startTime=t.startTime,e.addEventListener("durationchange",qp,{once:!0}))}else e.removeAttribute("src");e.addEventListener("error",Yp),e.addEventListener("error",kd),e.addEventListener("emptied",()=>{e.querySelectorAll("track[data-removeondestroy]").forEach(v=>{v.remove()})},{once:!0}),fe(e,"pause",u),fe(e,"seeked",u),fe(e,"play",()=>{e.ended||Up(e.currentTime,e.duration)&&(e.currentTime=e.seekable.length?e.seekable.start(0):0)})}else if(i&&o){i.once(K.Events.LEVEL_LOADED,(f,b)=>{Fg(b.details,e,i),c(),Ad(e)===ee.LIVE&&!Number.isFinite(e.duration)&&(i.on(K.Events.LEVEL_UPDATED,c),fe(e,"durationchange",()=>{Number.isFinite(e.duration)&&i.off(K.Events.LEVELS_UPDATED,c)}))});let d=(n=t.maxReconnectRetries)!=null?n:0,v=d>0?Mg({hls:i,mediaEl:e,src:o,muxMediaState:oe,saveAndDispatchError:bi,maxRetries:d}):void 0;i.on(K.Events.ERROR,(f,b)=>{var g,y;let E=u0(b,t);if(E.muxCode===P.NETWORK_NOT_READY){let S=(g=oe.get(e))!=null?g:{},M=(y=S.retryCount)!=null?y:0;if(M<6){let C=M===0?5e3:6e4,I=new L(`Retrying in ${C/1e3} seconds...`,E.code,E.fatal);Object.assign(I,E),bi(e,I);let H=setTimeout(()=>{S.retryCount=M+1,b.details==="manifestLoadError"&&b.url&&i.loadSource(b.url)},C);e.addEventListener("teardown",()=>clearTimeout(H),{once:!0});return}else{S.retryCount=0;let C=new L("Network error, try reloading.",E.code,E.fatal);Object.assign(C,E),C.reload=!0,bi(e,C);return}}v!=null&&v.handleHlsError(b,E)||bi(e,E)}),i.on(K.Events.MANIFEST_LOADED,()=>{v==null||v.onManifestLoaded();let f=oe.get(e);f!=null&&f.networkError||f&&f.error&&(f.error=null,f.retryCount=0,e.dispatchEvent(new Event("emptied")),e.dispatchEvent(new Event("loadstart")))}),e.addEventListener("error",kd),fe(e,"waiting",u),cg(t,i),hg(e,i),i.attachMedia(e)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function qp(t){var e;let i=t.target,a=(e=oe.get(i))==null?void 0:e.startTime;if(a&&jb(i.seekable,i.duration,a)){let r=i.preload==="auto";r&&(i.preload="none"),i.currentTime=a,r&&(i.preload="auto")}}async function Yp(t){if(!t.isTrusted)return;t.stopImmediatePropagation();let e=t.target;if(!(e!=null&&e.error))return;let{message:i,code:a}=e.error,r=new L(i,a);if(e.src&&a===L.MEDIA_ERR_SRC_NOT_SUPPORTED&&e.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=Pp(e))!=null?n:e.error;(s==null?void 0:s.code)===L.MEDIA_ERR_SRC_NOT_SUPPORTED&&bi(e,r)},500);return}if(e.src&&(a!==L.MEDIA_ERR_DECODE||a!==void 0))try{let{status:n}=await fetch(e.src);r.data={response:{code:n}}}catch{}bi(e,r)}function bi(t,e){var i;e.fatal&&(((i=oe.get(t))!=null?i:{}).error=e,t.dispatchEvent(new CustomEvent("error",{detail:e})))}function kd(t){var e,i;if(!(t instanceof CustomEvent)||!(t.detail instanceof L))return;let a=t.target,r=t.detail;!r||!r.fatal||(((e=oe.get(a))!=null?e:{}).error=r,(i=a.mux)==null||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var u0=(t,e)=>{var i,a,r;t.fatal?console.error("getErrorFromHlsErrorData()",t):e.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",t);let n={[K.ErrorTypes.NETWORK_ERROR]:L.MEDIA_ERR_NETWORK,[K.ErrorTypes.MEDIA_ERROR]:L.MEDIA_ERR_DECODE,[K.ErrorTypes.KEY_SYSTEM_ERROR]:L.MEDIA_ERR_ENCRYPTED},s=p=>[K.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,K.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(p.details)?L.MEDIA_ERR_NETWORK:n[p.type],o=p=>{if(p.type===K.ErrorTypes.KEY_SYSTEM_ERROR)return J.DRM;if(p.type===K.ErrorTypes.NETWORK_ERROR)return J.VIDEO},l,u=s(t);if(u===L.MEDIA_ERR_NETWORK&&t.response){let p=(i=o(t))!=null?i:J.VIDEO;l=(a=Wo(t.response,p,e,t.fatal))!=null?a:new L("",u,t.fatal)}else if(u===L.MEDIA_ERR_ENCRYPTED)if(t.details===K.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let p=O("Attempting to play DRM-protected content without providing a DRM token.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_MISSING_TOKEN}else if(t.details===K.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let p=O("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(t.details===K.ErrorDetails.KEY_SYSTEM_NO_SESSION){let p=O("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,!0),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(t.details===K.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let p=O("Failed to update DRM license. This may be an issue with the player or your protected content.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(t.details===K.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let p=O("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(t.details===K.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let p=O("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_CDM_ERROR}else if(t.details===K.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let p=O("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,!1),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_OUTPUT_RESTRICTED}else l=new L(t.error.message,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_ERROR;else l=new L("",u,t.fatal);return l.context||(l.context=`${t.url?`url: ${t.url}
`:""}${t.response&&(t.response.code||t.response.text)?`response: ${t.response.code}, ${t.response.text}
`:""}${t.reason?`failure reason: ${t.reason}
`:""}${t.level?`level: ${t.level}
`:""}${t.parent?`parent stream controller: ${t.parent}
`:""}${t.buffer?`buffer length: ${t.buffer}
`:""}${t.error?`error: ${t.error}
`:""}${t.event?`event: ${t.event}
`:""}${t.err?`error message: ${(r=t.err)==null?void 0:r.message}
`:""}`),l.data=t,l},Gp=t=>{throw TypeError(t)},zu=(t,e,i)=>e.has(t)||Gp("Cannot "+i),Ae=(t,e,i)=>(zu(t,e,"read from private field"),i?i.call(t):e.get(t)),ut=(t,e,i)=>e.has(t)?Gp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Lt=(t,e,i,a)=>(zu(t,e,"write to private field"),e.set(t,i),i),os=(t,e,i)=>(zu(t,e,"access private method"),i),c0=()=>{try{return"0.31.2"}catch{}return"UNKNOWN"},h0=c0(),m0=()=>h0,p0=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,_={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},v0=Object.values(_),Hh=m0(),Bh="mux-video",en,Rs,tn,Ls,Cs,Ds,Ms,xs,an,Os,mt,oa,Ns,rn,f0=class extends ns{constructor(){super(),ut(this,mt),ut(this,en),ut(this,Rs),ut(this,tn,{}),ut(this,Ls,{}),ut(this,Cs),ut(this,Ds),ut(this,Ms),ut(this,xs),ut(this,an,""),ut(this,Os,e=>{var i;let a=Qg(this.nativeEl),r=(i=this.metadata)!=null?i:{};this.metadata={...a,...r},(a==null?void 0:a["com.mux.video.branding"])==="mux-free-plan"&&(Lt(this,an,"default"),this.updateLogo())}),ut(this,Ns),Lt(this,Rs,Vu())}static get NAME(){return Bh}static get VERSION(){return Hh}static get observedAttributes(){var e;return[...v0,...(e=ns.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?p0:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){var i;return`
      ${ns.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((i=e[_.LOGO])!=null?i:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(_.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Bo.includes(e)?this.setAttribute(_.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${Bo.join()}`):this.removeAttribute(_.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(_.PLAYER_INIT_TIME)?+this.getAttribute(_.PLAYER_INIT_TIME):Ae(this,Rs)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(_.PLAYER_INIT_TIME):this.setAttribute(_.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=Ae(this,Ms))!=null?e:Bh}set playerSoftwareName(e){Lt(this,Ms,e)}get playerSoftwareVersion(){var e;return(e=Ae(this,Ds))!=null?e:Hh}set playerSoftwareVersion(e){Lt(this,Ds,e)}get _hls(){var e;return(e=Ae(this,mt,oa))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=Pp(this.nativeEl))!=null?e:null}get errorTranslator(){return Ae(this,xs)}set errorTranslator(e){Lt(this,xs,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(_.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(_.TYPE,e):this.removeAttribute(_.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(_.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(_.DEBUG,""):this.removeAttribute(_.DEBUG))}get disableTracking(){return this.hasAttribute(_.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(_.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(_.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(_.DISABLE_COOKIES,""):this.removeAttribute(_.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(_.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(_.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(_.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let e=this.getAttribute(_.MAX_RECONNECT_RETRIES);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set maxReconnectRetries(e){e!==this.maxReconnectRetries&&(e==null?this.removeAttribute(_.MAX_RECONNECT_RETRIES):this.setAttribute(_.MAX_RECONNECT_RETRIES,`${e}`))}get startTime(){let e=this.getAttribute(_.START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(_.START_TIME):this.setAttribute(_.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(e==null?this.removeAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(_.INITIAL_ESTIMATE_SEGMENTS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(e==null?this.removeAttribute(_.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(_.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(_.MIN_PRELOAD_SEGMENTS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set minPreloadSegments(e){e!==this.minPreloadSegments&&(e==null?this.removeAttribute(_.MIN_PRELOAD_SEGMENTS):this.setAttribute(_.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(_.PLAYBACK_ID)?this.getAttribute(_.PLAYBACK_ID):(e=qu(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(_.PLAYBACK_ID,e):this.removeAttribute(_.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(_.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(_.MAX_RESOLUTION,e):this.removeAttribute(_.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(_.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(_.MIN_RESOLUTION,e):this.removeAttribute(_.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(_.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(_.MAX_AUTO_RESOLUTION):this.setAttribute(_.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(_.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(_.RENDITION_ORDER,e):this.removeAttribute(_.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(_.PROGRAM_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programStartTime(e){e==null?this.removeAttribute(_.PROGRAM_START_TIME):this.setAttribute(_.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(_.PROGRAM_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programEndTime(e){e==null?this.removeAttribute(_.PROGRAM_END_TIME):this.setAttribute(_.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(_.ASSET_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetStartTime(e){e==null?this.removeAttribute(_.ASSET_START_TIME):this.setAttribute(_.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(_.ASSET_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetEndTime(e){e==null?this.removeAttribute(_.ASSET_END_TIME):this.setAttribute(_.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(_.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(_.CUSTOM_DOMAIN,e):this.removeAttribute(_.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return((e=this._hlsConfig)==null?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:Ae(this,Ns)}set capRenditionToPlayerSize(e){Lt(this,Ns,e)}get drmToken(){var e;return(e=this.getAttribute(_.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(_.DRM_TOKEN,e):this.removeAttribute(_.DRM_TOKEN))}get playbackToken(){var e,i,a,r;if(this.hasAttribute(_.PLAYBACK_TOKEN))return(e=this.getAttribute(_.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(_.PLAYBACK_ID)){let[,n]=$u((i=this.playbackId)!=null?i:"");return(a=new URLSearchParams(n).get("token"))!=null?a:void 0}if(this.src)return(r=new URLSearchParams(this.src).get("token"))!=null?r:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(_.PLAYBACK_TOKEN,e):this.removeAttribute(_.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(_.PLAYBACK_TOKEN),i=this.getAttribute(_.DRM_TOKEN);return{...Ae(this,Ls),...e!=null?{playback:e}:{},...i!=null?{drm:i}:{}}}set tokens(e){Lt(this,Ls,e??{})}get ended(){return Hp(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(_.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(_.ENV_KEY,e):this.removeAttribute(_.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(_.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(_.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(_.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(_.STREAM_TYPE))!=null?e:Ad(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(_.STREAM_TYPE,e):this.removeAttribute(_.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(_.TARGET_LIVE_WINDOW)?+this.getAttribute(_.TARGET_LIVE_WINDOW):jg(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(_.TARGET_LIVE_WINDOW):this.setAttribute(_.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,i;if(this.hasAttribute(_.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,r=(e=this.nativeEl.seekable.end(0))!=null?e:0,n=(i=this.nativeEl.seekable.start(0))!=null?i:0;return Math.max(n,r-a)}return Zg(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(_.LIVE_EDGE_OFFSET))return+this.getAttribute(_.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(_.LIVE_EDGE_OFFSET):this.setAttribute(_.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return Yu(this.nativeEl)}async addCuePoints(e){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),Lp(this.nativeEl,e)}get activeCuePoint(){return Cp(this.nativeEl)}get cuePoints(){return pg(this.nativeEl)}async addChapters(e){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),Mp(this.nativeEl,e)}get activeChapter(){return xp(this.nativeEl)}get chapters(){return fg(this.nativeEl)}getStartDate(){return _g(this.nativeEl,this._hls)}get currentPdt(){return bg(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(_.PREFER_PLAYBACK);if(e===ii.MSE||e===ii.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===ii.MSE||e===ii.NATIVE?this.setAttribute(_.PREFER_PLAYBACK,e):this.removeAttribute(_.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![_.METADATA_URL].includes(e)).reduce((e,i)=>{let a=this.getAttribute(i);return a!=null&&(e[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...Ae(this,tn)}}set metadata(e){Lt(this,tn,e??{}),this.mux&&this.mux.emit("hb",Ae(this,tn))}get _hlsConfig(){return Ae(this,Cs)}set _hlsConfig(e){Lt(this,Cs,e)}get logo(){var e;return(e=this.getAttribute(_.LOGO))!=null?e:Ae(this,an)}set logo(e){e?this.setAttribute(_.LOGO,e):this.removeAttribute(_.LOGO)}load(){Bp(this,this.nativeEl,Ae(this,mt,oa))}unload(){Wp(this.nativeEl,Ae(this,mt,oa),this)}attributeChangedCallback(e,i,a){var r,n;switch(ns.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,i,a),e){case _.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=a??void 0;break;case _.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=a??void 0;break;case"src":{let s=!!i,o=!!a;!s&&o?os(this,mt,rn).call(this):s&&!o?this.unload():s&&o&&(this.unload(),os(this,mt,rn).call(this));break}case"autoplay":if(a===i)break;(r=Ae(this,mt,oa))==null||r.setAutoplay(this.autoplay);break;case"preload":if(a===i)break;(n=Ae(this,mt,oa))==null||n.setPreload(a);break;case _.PLAYBACK_ID:case _.CUSTOM_DOMAIN:case _.MAX_RESOLUTION:case _.MIN_RESOLUTION:case _.RENDITION_ORDER:case _.PROGRAM_START_TIME:case _.PROGRAM_END_TIME:case _.ASSET_START_TIME:case _.ASSET_END_TIME:case _.PLAYBACK_TOKEN:this.src=Td(this);break;case _.DEBUG:{let s=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=s);break}case _.METADATA_URL:a&&fetch(a).then(s=>s.json()).then(s=>this.metadata=s).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case _.STREAM_TYPE:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case _.TARGET_LIVE_WINDOW:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case _.LOGO:(a==null||a!==i)&&this.updateLogo();break;case _.DISABLE_TRACKING:{if(a==null||a!==i){let s=this.currentTime,o=this.paused;this.unload(),os(this,mt,rn).call(this).then(()=>{this.currentTime=s,o||this.play()})}break}case _.DISABLE_COOKIES:{(a==null||a!==i)&&this.disableCookies&&document.cookie.split(";").forEach(s=>{s.trim().startsWith("muxData")&&(document.cookie=s.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break}case _.CAP_RENDITION_TO_PLAYER_SIZE:(a==null||a!==i)&&(this.capRenditionToPlayerSize=a!=null?!0:void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let i=this.constructor.getLogoHTML(Ae(this,an)||this.logo);e.innerHTML=i}connectedCallback(){var e,i;(e=super.connectedCallback)==null||e.call(this),(i=this.nativeEl)==null||i.addEventListener("muxmetadata",Ae(this,Os)),this.nativeEl&&this.src&&!Ae(this,mt,oa)&&os(this,mt,rn).call(this)}disconnectedCallback(){var e,i;(e=this.nativeEl)==null||e.removeEventListener("muxmetadata",Ae(this,Os)),this.unload(),(i=super.disconnectedCallback)==null||i.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};en=new WeakMap,Rs=new WeakMap,tn=new WeakMap,Ls=new WeakMap,Cs=new WeakMap,Ds=new WeakMap,Ms=new WeakMap,xs=new WeakMap,an=new WeakMap,Os=new WeakMap,mt=new WeakSet,oa=function(){return Xg(this.nativeEl)},Ns=new WeakMap,rn=async function(){Ae(this,en)||(await Lt(this,en,Promise.resolve()),Lt(this,en,null),this.load())};const Qi=new WeakMap;class Zl extends Error{}class E0 extends Error{}const _0=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],b0=globalThis.WeakRef?class extends Set{add(t){super.add(new WeakRef(t))}forEach(t){super.forEach(e=>{const i=e.deref();i&&t(i)})}}:Set;function g0(t){var e,i,a;(i=(e=globalThis.chrome)==null?void 0:e.cast)!=null&&i.isAvailable?(a=globalThis.cast)!=null&&a.framework?t():customElements.whenDefined("google-cast-button").then(t):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(t)}}function y0(){return globalThis.chrome}function T0(){var i;const t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if((i=globalThis.chrome)!=null&&i.cast||document.querySelector(`script[src="${t}"]`))return;const e=document.createElement("script");e.src=t,document.head.append(e)}function Yi(){var t,e;return(e=(t=globalThis.cast)==null?void 0:t.framework)==null?void 0:e.CastContext.getInstance()}function Qu(){var t;return(t=Yi())==null?void 0:t.getCurrentSession()}function ju(){var t;return(t=Qu())==null?void 0:t.getSessionObj().media[0]}function A0(t){return new Promise((e,i)=>{ju().editTracksInfo(t,e,i)})}function k0(t){return new Promise((e,i)=>{ju().getStatus(t,e,i)})}function Wh(t){return Yi().setOptions({...zp(),...t})}function zp(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function Fh(t){if(!t)return;const e=/\.([a-zA-Z0-9]+)(?:\?.*)?$/,i=t.match(e);return i?i[1]:null}function S0(t){for(const e of t.split(`
`)){const i=e.trim();if(i.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(i)){const a=i.match(/URI="([^"]+)"/i);if(a)return a[1]}}}function w0(t){const e=t.split(`
`),i=[];for(let a=0;a<e.length;a++)if(e[a].trim().startsWith("#EXT-X-STREAM-INF")){const n=e[a+1]?e[a+1].trim():"";n&&!n.startsWith("#")&&i.push(n)}return i}function Kh(t){const i=t.split(`
`).find(a=>!a.trim().startsWith("#")&&a.trim()!=="");return i==null?void 0:i.trim()}async function I0(t){if(!t)return!1;if(/\.m3u8?(\?.*)?$/i.test(t))return!0;if(t.startsWith("blob:"))return!1;try{const i=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return _0.some(a=>i===a)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function R0(t){if(!t||t.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{const e=await(await fetch(t)).text();let i=e;const a=w0(e);if(a.length>0){const l=new URL(a[0],t).toString();i=await(await fetch(l)).text()}const r=Kh(i),n=Fh(r),s=S0(e);let o=n;if(s)try{const l=new URL(s,t).toString(),u=await(await fetch(l)).text(),p=Kh(u);o=Fh(p)??n}catch(l){console.error("Error while trying to parse the audio rendition playlist",l)}return{videoFormat:n,audioFormat:o}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}const Ps=new b0,ui=new WeakSet;let Re;g0(()=>{var t,e,i,a;if(!((e=(t=globalThis.chrome)==null?void 0:t.cast)!=null&&e.isAvailable)){console.debug("chrome.cast.isAvailable",(a=(i=globalThis.chrome)==null?void 0:i.cast)==null?void 0:a.isAvailable);return}Re||(Re=cast.framework,Yi().addEventListener(Re.CastContextEventType.CAST_STATE_CHANGED,r=>{Ps.forEach(n=>{var s,o;return(o=(s=Qi.get(n)).onCastStateChanged)==null?void 0:o.call(s,r)})}),Yi().addEventListener(Re.CastContextEventType.SESSION_STATE_CHANGED,r=>{Ps.forEach(n=>{var s,o;return(o=(s=Qi.get(n)).onSessionStateChanged)==null?void 0:o.call(s,r)})}),Ps.forEach(r=>{var n,s;return(s=(n=Qi.get(r)).init)==null?void 0:s.call(n)}))});let Vh=0;var Q,kr,ze,Mt,Ta,Aa,qi,bl,ts,se,la,Qp,jp,Sd,Zp,wd,Xp,Id;class L0 extends EventTarget{constructor(i){super();We(this,se);We(this,Q);We(this,kr);We(this,ze);We(this,Mt);We(this,Ta,"disconnected");We(this,Aa,!1);We(this,qi,new Set);We(this,bl,new WeakMap);We(this,ts,()=>dt(this,se,Id).call(this));je(this,Q,i),Ps.add(this),Qi.set(this,{init:()=>dt(this,se,wd).call(this),onCastStateChanged:()=>dt(this,se,Sd).call(this),onSessionStateChanged:()=>dt(this,se,Zp).call(this),getCastPlayer:()=>A(this,se,la)}),dt(this,se,wd).call(this)}destroy(){var i,a,r;(a=(i=A(this,Q))==null?void 0:i.textTracks)==null||a.removeEventListener("change",A(this,ts)),A(this,Mt)&&((r=A(this,ze))!=null&&r.controller)&&Object.entries(A(this,Mt)).forEach(([n,s])=>{A(this,ze).controller.removeEventListener(n,s)}),A(this,Q)&&ui.delete(A(this,Q)),je(this,kr,!1)}get state(){return A(this,Ta)}async watchAvailability(i){if(A(this,Q).disableRemotePlayback)throw new Zl("disableRemotePlayback attribute is present.");return A(this,bl).set(i,++Vh),A(this,qi).add(i),queueMicrotask(()=>i(dt(this,se,jp).call(this))),Vh}async cancelWatchAvailability(i){if(A(this,Q).disableRemotePlayback)throw new Zl("disableRemotePlayback attribute is present.");i?A(this,qi).delete(i):A(this,qi).clear()}async prompt(){var a,r,n,s;if(A(this,Q).disableRemotePlayback)throw new Zl("disableRemotePlayback attribute is present.");if(!((r=(a=globalThis.chrome)==null?void 0:a.cast)!=null&&r.isAvailable))throw new E0("The RemotePlayback API is disabled on this platform.");const i=ui.has(A(this,Q));ui.add(A(this,Q)),Wh(A(this,Q).castOptions),Object.entries(A(this,Mt)).forEach(([o,l])=>{A(this,ze).controller.addEventListener(o,l)});try{await Yi().requestSession()}catch(o){if(i||ui.delete(A(this,Q)),o==="cancel")return;throw new Error(o)}(s=(n=Qi.get(A(this,Q)))==null?void 0:n.loadOnPrompt)==null||s.call(n)}}Q=new WeakMap,kr=new WeakMap,ze=new WeakMap,Mt=new WeakMap,Ta=new WeakMap,Aa=new WeakMap,qi=new WeakMap,bl=new WeakMap,ts=new WeakMap,se=new WeakSet,la=function(){if(ui.has(A(this,Q)))return A(this,ze)},Qp=function(){ui.has(A(this,Q))&&(Object.entries(A(this,Mt)).forEach(([i,a])=>{A(this,ze).controller.removeEventListener(i,a)}),ui.delete(A(this,Q)),A(this,Q).muted=A(this,ze).isMuted,A(this,Q).currentTime=A(this,ze).savedPlayerState.currentTime,A(this,ze).savedPlayerState.isPaused===!1&&A(this,Q).play())},jp=function(){var a;const i=(a=Yi())==null?void 0:a.getCastState();return i&&i!=="NO_DEVICES_AVAILABLE"},Sd=function(){const i=Yi().getCastState();if(ui.has(A(this,Q))&&i==="CONNECTING"&&(je(this,Ta,"connecting"),this.dispatchEvent(new Event("connecting"))),!A(this,Aa)&&(i!=null&&i.includes("CONNECT"))){je(this,Aa,!0);for(let a of A(this,qi))a(!0)}else if(A(this,Aa)&&(!i||i==="NO_DEVICES_AVAILABLE")){je(this,Aa,!1);for(let a of A(this,qi))a(!1)}},Zp=async function(){var a;const{SESSION_RESUMED:i}=Re.SessionState;if(Yi().getSessionState()===i&&A(this,Q).castSrc===((a=ju())==null?void 0:a.media.contentId)){ui.add(A(this,Q)),Object.entries(A(this,Mt)).forEach(([r,n])=>{A(this,ze).controller.addEventListener(r,n)});try{await k0(new chrome.cast.media.GetStatusRequest)}catch(r){console.error(r)}A(this,Mt)[Re.RemotePlayerEventType.IS_PAUSED_CHANGED](),A(this,Mt)[Re.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},wd=function(){!Re||A(this,kr)||(je(this,kr,!0),Wh(A(this,Q).castOptions),A(this,Q).textTracks.addEventListener("change",A(this,ts)),dt(this,se,Sd).call(this),je(this,ze,new Re.RemotePlayer),new Re.RemotePlayerController(A(this,ze)),je(this,Mt,{[Re.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:i})=>{i===!0?(je(this,Ta,"connected"),this.dispatchEvent(new Event("connect"))):(dt(this,se,Qp).call(this),je(this,Ta,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[Re.RemotePlayerEventType.DURATION_CHANGED]:()=>{A(this,Q).dispatchEvent(new Event("durationchange"))},[Re.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{A(this,Q).dispatchEvent(new Event("volumechange"))},[Re.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{A(this,Q).dispatchEvent(new Event("volumechange"))},[Re.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var i;(i=A(this,se,la))!=null&&i.isMediaLoaded&&A(this,Q).dispatchEvent(new Event("timeupdate"))},[Re.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{A(this,Q).dispatchEvent(new Event("resize"))},[Re.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{A(this,Q).dispatchEvent(new Event(this.paused?"pause":"play"))},[Re.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var i,a;((i=A(this,se,la))==null?void 0:i.playerState)!==chrome.cast.media.PlayerState.PAUSED&&A(this,Q).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[(a=A(this,se,la))==null?void 0:a.playerState]))},[Re.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var i;(i=A(this,se,la))!=null&&i.isMediaLoaded&&(await Promise.resolve(),dt(this,se,Xp).call(this))}}))},Xp=function(){dt(this,se,Id).call(this)},Id=async function(){var c,d,v;if(!A(this,se,la))return;const a=(((c=A(this,ze).mediaInfo)==null?void 0:c.tracks)??[]).filter(({type:f})=>f===chrome.cast.media.TrackType.TEXT),r=[...A(this,Q).textTracks].filter(({kind:f})=>f==="subtitles"||f==="captions"),n=a.map(({language:f,name:b,trackId:g})=>{const{mode:y}=r.find(E=>E.language===f&&E.label===b)??{};return y?{mode:y,trackId:g}:!1}).filter(Boolean),o=n.filter(({mode:f})=>f!=="showing").map(({trackId:f})=>f),l=n.find(({mode:f})=>f==="showing"),u=((v=(d=Qu())==null?void 0:d.getSessionObj().media[0])==null?void 0:v.activeTrackIds)??[];let p=u;if(u.length&&(p=p.filter(f=>!o.includes(f))),l!=null&&l.trackId&&(p=[...p,l.trackId]),p=[...new Set(p)],!((f,b)=>f.length===b.length&&f.every(g=>b.includes(g)))(u,p))try{const f=new chrome.cast.media.EditTracksInfoRequest(p);await A0(f)}catch(f){console.error(f)}};const C0=t=>{var e,i,a,r,n,s,j,Jp;return e=class extends t{constructor(){super(...arguments);We(this,s);We(this,i,{paused:!1});We(this,a,zp());We(this,r);We(this,n)}get remote(){return A(this,n)?A(this,n):y0()?this.isConnected?(this.disableRemotePlayback||T0(),Qi.set(this,{loadOnPrompt:()=>dt(this,s,Jp).call(this)}),je(this,n,new L0(this))):void 0:super.remote}disconnectedCallback(){var m,c;(m=A(this,n))==null||m.destroy(),je(this,n,null),Qi.delete(this),(c=super.disconnectedCallback)==null||c.call(this)}attributeChangedCallback(m,c,d){if(super.attributeChangedCallback(m,c,d),m==="cast-receiver"&&d){A(this,a).receiverApplicationId=d;return}if(A(this,s,j))switch(m){case"cast-stream-type":case"cast-src":this.load();break}}async load(){var g;if(!A(this,s,j))return super.load();const m=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);m.customData=this.castCustomData;const c=[...this.querySelectorAll("track")].filter(({kind:y,src:E})=>E&&(y==="subtitles"||y==="captions")),d=[];let v=0;if(c.length&&(m.tracks=c.map(y=>{const E=++v;d.length===0&&y.track.mode==="showing"&&d.push(E);const S=new chrome.cast.media.Track(E,chrome.cast.media.TrackType.TEXT);return S.trackContentId=y.src,S.trackContentType="text/vtt",S.subtype=y.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,S.name=y.label,S.language=y.srclang,S})),this.castStreamType==="live"?m.streamType=chrome.cast.media.StreamType.LIVE:m.streamType=chrome.cast.media.StreamType.BUFFERED,m.metadata=new chrome.cast.media.GenericMediaMetadata,m.metadata.title=this.title,m.metadata.images=[{url:this.poster}],await I0(this.castSrc)){m.contentType||(m.contentType="application/x-mpegURL");const{videoFormat:y,audioFormat:E}=await R0(this.castSrc);(y==null?void 0:y.includes("m4s"))||(y==null?void 0:y.includes("mp4"))||(y==null?void 0:y.includes("m4a"))?(m.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,m.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):E!=null&&E.includes("aac")?(m.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,m.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(y!=null&&y.includes("ts")||E!=null&&E.includes("ts"))&&(m.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,m.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}const b=new chrome.cast.media.LoadRequest(m);b.currentTime=super.currentTime??0,b.autoplay=!A(this,i).paused,b.activeTrackIds=d,await((g=Qu())==null?void 0:g.loadMedia(b)),this.dispatchEvent(new Event("volumechange"))}play(){var m;if(A(this,s,j)){A(this,s,j).isPaused&&((m=A(this,s,j).controller)==null||m.playOrPause());return}return super.play()}pause(){var m;if(A(this,s,j)){A(this,s,j).isPaused||(m=A(this,s,j).controller)==null||m.playOrPause();return}super.pause()}get castOptions(){return A(this,a)}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(m){this.castReceiver!=m&&this.setAttribute("cast-receiver",`${m}`)}get castSrc(){var d;const m=this.currentSrc,c=m!=null&&m.startsWith("blob:")?void 0:m;return this.getAttribute("cast-src")??((d=this.querySelector("source"))==null?void 0:d.src)??c??this.getAttribute("src")??void 0}set castSrc(m){this.castSrc!=m&&this.setAttribute("cast-src",`${m}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(m){this.setAttribute("cast-content-type",`${m}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(m){this.setAttribute("cast-stream-type",`${m}`)}get castCustomData(){return A(this,r)}set castCustomData(m){const c=typeof m;if(!["object","undefined"].includes(c)){console.error(`castCustomData must be nullish or an object but value was of type ${c}`);return}je(this,r,m)}get readyState(){if(A(this,s,j))switch(A(this,s,j).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return A(this,s,j)?A(this,s,j).isPaused:super.paused}get muted(){var m;return A(this,s,j)?(m=A(this,s,j))==null?void 0:m.isMuted:super.muted}set muted(m){var c;if(A(this,s,j)){(m&&!A(this,s,j).isMuted||!m&&A(this,s,j).isMuted)&&((c=A(this,s,j).controller)==null||c.muteOrUnmute());return}super.muted=m}get volume(){var m;return A(this,s,j)?((m=A(this,s,j))==null?void 0:m.volumeLevel)??1:super.volume}set volume(m){var c;if(A(this,s,j)){A(this,s,j).volumeLevel=+m,(c=A(this,s,j).controller)==null||c.setVolumeLevel();return}super.volume=m}get duration(){var m,c;return A(this,s,j)&&((m=A(this,s,j))!=null&&m.isMediaLoaded)?((c=A(this,s,j))==null?void 0:c.duration)??NaN:super.duration}get currentTime(){var m,c;return A(this,s,j)&&((m=A(this,s,j))!=null&&m.isMediaLoaded)?((c=A(this,s,j))==null?void 0:c.currentTime)??0:super.currentTime}set currentTime(m){var c;if(A(this,s,j)){A(this,s,j).currentTime=m,(c=A(this,s,j).controller)==null||c.seek();return}super.currentTime=m}},i=new WeakMap,a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakSet,j=function(){var m,c;return(c=(m=Qi.get(A(this,n)))==null?void 0:m.getCastPlayer)==null?void 0:c.call(m)},Jp=async function(){A(this,i).paused=rs(e.prototype,this,"paused"),rs(e.prototype,this,"pause").call(this),this.muted=rs(e.prototype,this,"muted");try{await this.load()}catch(m){console.error(m)}},gh(e,"observedAttributes",[...t.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),e};var ev=t=>{throw TypeError(t)},tv=(t,e,i)=>e.has(t)||ev("Cannot "+i),D0=(t,e,i)=>(tv(t,e,"read from private field"),i?i.call(t):e.get(t)),M0=(t,e,i)=>e.has(t)?ev("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),x0=(t,e,i,a)=>(tv(t,e,"write to private field"),e.set(t,i),i),iv=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class t extends iv{}globalThis.DocumentFragment=t}var O0=class extends iv{},N0={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(O0)}},P0={customElements:N0},U0=typeof window>"u"||typeof globalThis.customElements>"u",Xl=U0?P0:globalThis,Us,qh=class extends C0(AE(f0)){constructor(){super(...arguments),M0(this,Us)}get autoplay(){let t=this.getAttribute("autoplay");return t===null?!1:t===""?!0:t}set autoplay(t){let e=this.autoplay;t!==e&&(t?this.setAttribute("autoplay",typeof t=="string"?t:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var t;return(t=D0(this,Us))!=null?t:this.muxCastCustomData}set castCustomData(t){x0(this,Us,t)}};Us=new WeakMap;Xl.customElements.get("mux-video")||(Xl.customElements.define("mux-video",qh),Xl.MuxVideoElement=qh);const x={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},X={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},av={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},rv=Object.entries(av),h=rv.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),$0={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},oi=rv.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...$0});Object.entries(oi).reduce((t,[e,i])=>{const a=h[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const H0=Object.entries(h).reduce((t,[e,i])=>{const a=oi[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),ni={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},vr={DISABLED:"disabled",SHOWING:"showing"},Jl={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},st={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},_i={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},B0={FULLSCREEN:"fullscreen"};function W0(t){return t==null?void 0:t.map(K0).join(" ")}function F0(t){return t==null?void 0:t.split(/\s+/).map(V0)}function K0(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function V0(t){if(t){const[e,i,a]=t.split(":");return{id:e,width:+i,height:+a}}}function q0(t){return t==null?void 0:t.map(G0).join(" ")}function Y0(t){return t==null?void 0:t.split(/\s+/).map(z0)}function G0(t){if(t){const{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(n=>n!=null).join(":")}}function z0(t){if(t){const[e,i,a,r]=t.split(":");return{id:e,kind:i,language:a,label:r}}}function Q0(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Zu(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}function nv(t){return typeof t!="string"?!1:!isNaN(t)&&!isNaN(parseFloat(t))}const sv=t=>new Promise(e=>setTimeout(e,t)),j0={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."};var Yh;const In={en:j0};let fr=((Yh=globalThis.navigator)==null?void 0:Yh.language)||"en";const Z0=t=>{fr=t},X0=t=>{var e,i,a;const[r]=fr.split("-");return((e=In[fr])==null?void 0:e[t])||((i=In[r])==null?void 0:i[t])||((a=In.en)==null?void 0:a[t])||t},J0=()=>{const[t]=fr.split("-");return In[fr]?fr:In[t]?t:"en"},D=(t,e={})=>X0(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`),Gh=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],e1=(t,e)=>{const i=D(t===1?Gh[e].singular:Gh[e].plural);return`${t} ${i}`},Rn=t=>{if(!Zu(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0),n=[a.getHours(),a.getMinutes(),a.getSeconds()].map((s,o)=>s&&e1(s,o)).filter(s=>s).join(", ");return i?D("{time} remaining",{time:n}):n};function ji(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600);const s=Math.floor(e/60%60),o=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=a="0"),n=n>0||o>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}let ov=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}};class lv extends ov{}let zh=class extends lv{constructor(){super(...arguments),this.role=null}};class t1{observe(){}unobserve(){}disconnect(){}}const dv={createElement:function(){return new Kn.HTMLElement},createElementNS:function(){return new Kn.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},Kn={ResizeObserver:t1,document:dv,Node:lv,Element:zh,HTMLElement:class extends zh{constructor(){super(...arguments),this.innerHTML=""}get content(){return new Kn.DocumentFragment}},DocumentFragment:class extends ov{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},uv="global"in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window>"u"||typeof window.customElements>"u",cv=Object.keys(Kn).every(t=>t in globalThis),T=uv&&!cv?Kn:globalThis,we=uv&&!cv?dv:globalThis.document,Qh=new WeakMap,Xu=t=>{let e=Qh.get(t);return e||Qh.set(t,e=new Set),e},hv=new T.ResizeObserver(t=>{for(const e of t)for(const i of Xu(e.target))i(e)});function wr(t,e){Xu(t).add(e),hv.observe(t)}function Ir(t,e){const i=Xu(t);i.delete(e),i.size||hv.unobserve(t)}function lt(t){const e={};for(const i of t)e[i.name]=i.value;return e}function et(t){var e;return(e=Rd(t))!=null?e:Mr(t,"media-controller")}function Rd(t){var e;const{MEDIA_CONTROLLER:i}=X,a=t.getAttribute(i);if(a)return(e=kl(t))==null?void 0:e.getElementById(a)}const mv=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},i1=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},pv=(t,e)=>i1(t,e)[0],Ri=(t,e)=>!t||!e?!1:t!=null&&t.contains(e)?!0:Ri(t,e.getRootNode().host),Mr=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||Mr(t.getRootNode().host,e)};function Ju(t=document){var e;const i=t==null?void 0:t.activeElement;return i?(e=Ju(i.shadowRoot))!=null?e:i:null}function kl(t){var e;const i=(e=t==null?void 0:t.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function vv(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,e--}return!0}function a1(t,e,i,a){const r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;if(s===0)return 0;const o=((t-i.x)*r+(e-i.y)*n)/s;return Math.max(0,Math.min(1,o))}function Le(t,e){const i=r1(t,a=>a===e);return i||ec(t,e)}function r1(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const s of n??[])if(e(s.selectorText))return s}}function ec(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],n=r==null?void 0:r[r.length-1];if(!(n!=null&&n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};const s=n==null?void 0:n.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length);return(a=n.sheet.cssRules)==null?void 0:a[s]}function ne(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function ve(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}ne(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function G(t,e){return t.hasAttribute(e)}function z(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}G(t,e)!=i&&t.toggleAttribute(e,i)}function ce(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function le(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;ce(t,e,void 0)!==a&&t.setAttribute(e,a)}var fv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},At=(t,e,i)=>(fv(t,e,"read from private field"),i?i.call(t):e.get(t)),n1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ls=(t,e,i,a)=>(fv(t,e,"write to private field"),e.set(t,i),i),$e;function s1(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class Sl extends T.HTMLElement{constructor(){if(super(),n1(this,$e,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=lt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[X.MEDIA_CONTROLLER,h.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===X.MEDIA_CONTROLLER&&(i&&((n=(r=At(this,$e))==null?void 0:r.unassociateElement)==null||n.call(r,this),ls(this,$e,null)),a&&this.isConnected&&(ls(this,$e,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=At(this,$e))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),ls(this,$e,o1(this)),this.getAttribute(X.MEDIA_CONTROLLER)&&((i=(e=At(this,$e))==null?void 0:e.associateElement)==null||i.call(e,this)),At(this,$e)&&(At(this,$e).addEventListener("pointerdown",this),At(this,$e).addEventListener("click",this),At(this,$e).hasAttribute("tabindex")||(At(this,$e).tabIndex=0))}disconnectedCallback(){var e,i,a,r;this.getAttribute(X.MEDIA_CONTROLLER)&&((i=(e=At(this,$e))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=At(this,$e))==null||a.removeEventListener("pointerdown",this),(r=At(this,$e))==null||r.removeEventListener("click",this),ls(this,$e,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a==null?void 0:a.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:n,clientY:s}=e,{left:o,top:l,width:u,height:p}=this.getBoundingClientRect(),m=n-o,c=s-l;if(m<0||c<0||m>u||c>p||u===0&&p===0)return;const d=this._pointerType||"mouse";if(this._pointerType=void 0,d===Jl.TOUCH){this.handleTap(e);return}else if(d===Jl.MOUSE||d===Jl.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return G(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?x.MEDIA_PLAY_REQUEST:x.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new T.CustomEvent(i,{composed:!0,bubbles:!0}))}}$e=new WeakMap;Sl.shadowRootOptions={mode:"open"};Sl.getTemplateHTML=s1;function o1(t){var e;const i=t.getAttribute(X.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):Mr(t,"media-controller")}T.customElements.get("media-gesture-receiver")||T.customElements.define("media-gesture-receiver",Sl);var jh=Sl,tc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ee=(t,e,i)=>(tc(t,e,"read from private field"),i?i.call(t):e.get(t)),Ge=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},wt=(t,e,i,a)=>(tc(t,e,"write to private field"),e.set(t,i),i),Nt=(t,e,i)=>(tc(t,e,"access private method"),i),nn,Fo,Ba,Rr,dr,Ld,Wa,$s,Cd,Ev,Dd,_v,Vn,wl,Il,ic,Lr,qn,Mi,Hs;const U={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function l1(t){return`
    <style>
      
      :host([${h.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${U.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${U.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${U.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${U.AUDIO}])[${U.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${U.AUDIO}])[${U.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${U.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${U.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${U.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${U.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${U.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${U.USER_INACTIVE}]:not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_AIRPLAYING}]):not([${h.MEDIA_IS_CASTING}]):not([${U.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${U.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${U.USER_INACTIVE}]:not([${U.NO_AUTOHIDE}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${U.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${U.USER_INACTIVE}][${U.AUTOHIDE_OVER_CONTROLS}]:not([${U.NO_AUTOHIDE}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${U.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${U.AUDIO}])[${h.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${jh.shadowRootOptions.mode}">
          ${jh.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}const d1=Object.values(h),u1="sm:384 md:576 lg:768 xl:960";function c1(t){bv(t.target,t.contentRect.width)}function bv(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute(U.BREAKPOINTS))!=null?i:u1,r=h1(a),n=m1(r,e);let s=!1;if(Object.keys(r).forEach(o=>{if(n.includes(o)){t.hasAttribute(`breakpoint${o}`)||(t.setAttribute(`breakpoint${o}`,""),s=!0);return}t.hasAttribute(`breakpoint${o}`)&&(t.removeAttribute(`breakpoint${o}`),s=!0)}),s){const o=new CustomEvent(oi.BREAKPOINTS_CHANGE,{detail:n});t.dispatchEvent(o)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(oi.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function h1(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function m1(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class Rl extends T.HTMLElement{constructor(){if(super(),Ge(this,Cd),Ge(this,Dd),Ge(this,Vn),Ge(this,Il),Ge(this,Lr),Ge(this,nn,void 0),Ge(this,Fo,0),Ge(this,Ba,null),Ge(this,Rr,null),Ge(this,dr,void 0),this.breakpointsComputed=!1,Ge(this,Ld,e=>{const i=this.media;for(const a of e){if(a.type!=="childList")continue;const r=a.removedNodes;for(const n of r){if(n.slot!="media"||a.target!=this)continue;let s=a.previousSibling&&a.previousSibling.previousElementSibling;if(!s||!i)this.mediaUnsetCallback(n);else{let o=s.slot!=="media";for(;(s=s.previousSibling)!==null;)s.slot=="media"&&(o=!1);o&&this.mediaUnsetCallback(n)}}if(i)for(const n of a.addedNodes)n===i&&this.handleMediaUpdated(i)}}),Ge(this,Wa,!1),Ge(this,$s,e=>{Ee(this,Wa)||(setTimeout(()=>{c1(e),wt(this,Wa,!1)},0),wt(this,Wa,!0))}),Ge(this,Mi,void 0),Ge(this,Hs,()=>{if(!Ee(this,Mi).assignedElements({flatten:!0}).length){Ee(this,Ba)&&this.mediaUnsetCallback(Ee(this,Ba));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=lt(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}wt(this,nn,new MutationObserver(Ee(this,Ld)))}static get observedAttributes(){return[U.AUTOHIDE,U.GESTURES_DISABLED].concat(d1).filter(e=>![h.MEDIA_RENDITION_LIST,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_CHAPTERS_CUES,h.MEDIA_WIDTH,h.MEDIA_HEIGHT,h.MEDIA_ERROR,h.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==U.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(wt(this,Ba,e),e.localName.includes("-")&&await T.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;Ee(this,nn).observe(this,{childList:!0,subtree:!0}),wr(this,Ee(this,$s));const i=this.getAttribute(U.AUDIO)!=null,a=D(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(U.USER_INACTIVE,""),bv(this,this.getBoundingClientRect().width);const r=this.querySelector(":scope > slot[slot=media]");r&&(wt(this,Mi,r),Ee(this,Mi).addEventListener("slotchange",Ee(this,Hs))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=T.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;Ir(this,Ee(this,$s)),clearTimeout(Ee(this,Rr)),Ee(this,nn).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=T.window)==null||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),Ee(this,Mi)&&(Ee(this,Mi).removeEventListener("slotchange",Ee(this,Hs)),wt(this,Mi,null)),wt(this,Wa,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){wt(this,Ba,null)}handleEvent(e){switch(e.type){case"pointerdown":wt(this,Fo,e.timeStamp);break;case"pointermove":Nt(this,Cd,Ev).call(this,e);break;case"pointerup":Nt(this,Dd,_v).call(this,e);break;case"mouseleave":Nt(this,Vn,wl).call(this);break;case"mouseup":this.removeAttribute(U.KEYBOARD_CONTROL);break;case"keyup":Nt(this,Lr,qn).call(this),this.setAttribute(U.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);wt(this,dr,isNaN(i)?0:i)}get autohide(){return(Ee(this,dr)===void 0?2:Ee(this,dr)).toString()}get breakpoints(){return ce(this,U.BREAKPOINTS)}set breakpoints(e){le(this,U.BREAKPOINTS,e)}get audio(){return G(this,U.AUDIO)}set audio(e){z(this,U.AUDIO,e)}get gesturesDisabled(){return G(this,U.GESTURES_DISABLED)}set gesturesDisabled(e){z(this,U.GESTURES_DISABLED,e)}get keyboardControl(){return G(this,U.KEYBOARD_CONTROL)}set keyboardControl(e){z(this,U.KEYBOARD_CONTROL,e)}get noAutohide(){return G(this,U.NO_AUTOHIDE)}set noAutohide(e){z(this,U.NO_AUTOHIDE,e)}get autohideOverControls(){return G(this,U.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){z(this,U.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return G(this,U.USER_INACTIVE)}set userInteractive(e){z(this,U.USER_INACTIVE,e)}}nn=new WeakMap;Fo=new WeakMap;Ba=new WeakMap;Rr=new WeakMap;dr=new WeakMap;Ld=new WeakMap;Wa=new WeakMap;$s=new WeakMap;Cd=new WeakSet;Ev=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-Ee(this,Fo)<250)return;Nt(this,Il,ic).call(this),clearTimeout(Ee(this,Rr));const e=this.hasAttribute(U.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&Nt(this,Lr,qn).call(this)};Dd=new WeakSet;_v=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute(U.USER_INACTIVE);[this,this.media].includes(t.target)&&e?Nt(this,Vn,wl).call(this):Nt(this,Lr,qn).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e==null?void 0:e.localName))&&Nt(this,Lr,qn).call(this)};Vn=new WeakSet;wl=function(){if(Ee(this,dr)<0||this.hasAttribute(U.USER_INACTIVE))return;this.setAttribute(U.USER_INACTIVE,"");const t=new T.CustomEvent(oi.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};Il=new WeakSet;ic=function(){if(!this.hasAttribute(U.USER_INACTIVE))return;this.removeAttribute(U.USER_INACTIVE);const t=new T.CustomEvent(oi.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};Lr=new WeakSet;qn=function(){Nt(this,Il,ic).call(this),clearTimeout(Ee(this,Rr));const t=parseInt(this.autohide);t<0||wt(this,Rr,setTimeout(()=>{Nt(this,Vn,wl).call(this)},t*1e3))};Mi=new WeakMap;Hs=new WeakMap;Rl.shadowRootOptions={mode:"open"};Rl.getTemplateHTML=l1;T.customElements.get("media-container")||T.customElements.define("media-container",Rl);var gv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Oe=(t,e,i)=>(gv(t,e,"read from private field"),i?i.call(t):e.get(t)),Wr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ds=(t,e,i,a)=>(gv(t,e,"write to private field"),e.set(t,i),i),Fa,Ka,Ko,_a,mi,xi;class ac{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){Wr(this,mi),Wr(this,Fa,void 0),Wr(this,Ka,void 0),Wr(this,Ko,void 0),Wr(this,_a,new Set),ds(this,Fa,e),ds(this,Ka,i),ds(this,Ko,new Set(a))}[Symbol.iterator](){return Oe(this,mi,xi).values()}get length(){return Oe(this,mi,xi).size}get value(){var e;return(e=[...Oe(this,mi,xi)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(ds(this,_a,new Set),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...Oe(this,mi,xi)][e]}values(){return Oe(this,mi,xi).values()}forEach(e,i){Oe(this,mi,xi).forEach(e,i)}add(...e){var i,a;e.forEach(r=>Oe(this,_a).add(r)),!(this.value===""&&!((i=Oe(this,Fa))!=null&&i.hasAttribute(`${Oe(this,Ka)}`)))&&((a=Oe(this,Fa))==null||a.setAttribute(`${Oe(this,Ka)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>Oe(this,_a).delete(a)),(i=Oe(this,Fa))==null||i.setAttribute(`${Oe(this,Ka)}`,`${this.value}`)}contains(e){return Oe(this,mi,xi).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}Fa=new WeakMap;Ka=new WeakMap;Ko=new WeakMap;_a=new WeakMap;mi=new WeakSet;xi=function(){return Oe(this,_a).size?Oe(this,_a):Oe(this,Ko)};const p1=(t="")=>t.split(/\s+/),yv=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?ni.CAPTIONS:ni.SUBTITLES,language:i,label:r}},Ll=(t="",e={})=>p1(t).map(i=>{const a=yv(i);return{...e,...a}}),Tv=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?yv(e):e):typeof t=="string"?Ll(t):[t]:[],Md=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,Yn=(t=[])=>Array.prototype.map.call(t,Md).join(" "),v1=(t,e)=>i=>i[t]===e,Av=t=>{const e=Object.entries(t).map(([i,a])=>v1(i,a));return i=>e.every(a=>a(i))},Ln=(t,e=[],i=[])=>{const a=Tv(i).map(Av),r=n=>a.some(s=>s(n));Array.from(e).filter(r).forEach(n=>{n.mode=t})},Cl=(t,e=()=>!0)=>{if(!(t!=null&&t.textTracks))return[];const i=typeof e=="function"?e:Av(e);return Array.from(t.textTracks).filter(i)},kv=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(h.MEDIA_SUBTITLES_SHOWING)},f1=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(e=a[r])==null?void 0:e.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i!=null&&i.webkitEnterFullscreen?i.webkitEnterFullscreen():i!=null&&i.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},Zh="exitFullscreen"in we?"exitFullscreen":"webkitExitFullscreen"in we?"webkitExitFullscreen":"webkitCancelFullScreen"in we?"webkitCancelFullScreen":void 0,E1=t=>{var e;const{documentElement:i}=t;if(Zh){const a=(e=i==null?void 0:i[Zh])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},sn="fullscreenElement"in we?"fullscreenElement":"webkitFullscreenElement"in we?"webkitFullscreenElement":void 0,_1=t=>{const{documentElement:e,media:i}=t,a=e==null?void 0:e[sn];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===B0.FULLSCREEN?i:a},b1=t=>{var e;const{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;const n=_1(t);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(sn in s))return Ri(n,r);for(;s!=null&&s[sn];){if(s[sn]===r)return!0;s=(e=s[sn])==null?void 0:e.shadowRoot}}return!1},g1="fullscreenEnabled"in we?"fullscreenEnabled":"webkitFullscreenEnabled"in we?"webkitFullscreenEnabled":void 0,y1=t=>{const{documentElement:e,media:i}=t;return!!(e!=null&&e[g1])||i&&"webkitSupportsFullscreen"in i};let us;const rc=()=>{var t,e;return us||(us=(e=(t=we)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),us)},T1=async(t=rc())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([A1(t,i.signal),k1(t,e)]);return i.abort(),a},A1=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),k1=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await sv(10)}return t.volume!==e},S1=/.*Version\/.*Safari\/.*/.test(T.navigator.userAgent),Sv=(t=rc())=>T.matchMedia("(display-mode: standalone)").matches&&S1?!1:typeof(t==null?void 0:t.requestPictureInPicture)=="function",wv=(t=rc())=>y1({documentElement:we,media:t}),w1=wv(),I1=Sv(),R1=!!T.WebKitPlaybackTargetAvailabilityEvent,L1=!!T.chrome,Vo=t=>Cl(t.media,e=>[ni.SUBTITLES,ni.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),Iv=t=>Cl(t.media,e=>e.mode===vr.SHOWING&&[ni.SUBTITLES,ni.CAPTIONS].includes(e.kind)),Rv=(t,e)=>{const i=Vo(t),a=Iv(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)Ln(vr.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let n=i[0];const{options:s}=t;if(!(s!=null&&s.noSubtitlesLangPref)){const p=T.localStorage.getItem("media-chrome-pref-subtitles-lang"),m=p?[p,...T.navigator.languages]:T.navigator.languages,c=i.filter(d=>m.some(v=>d.language.toLowerCase().startsWith(v.split("-")[0]))).sort((d,v)=>{const f=m.findIndex(g=>d.language.toLowerCase().startsWith(g.split("-")[0])),b=m.findIndex(g=>v.language.toLowerCase().startsWith(g.split("-")[0]));return f-b});c[0]&&(n=c[0])}const{language:o,label:l,kind:u}=n;Ln(vr.DISABLED,i,a),Ln(vr.SHOWING,i,[{language:o,label:l,kind:u}])}}},nc=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?C1(t,e):Object.entries(t).every(([i,a])=>i in e&&nc(a,e[i])),C1=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,n)=>nc(r,e[n])):!0},D1=Object.values(_i);let qo;const M1=T1().then(t=>(qo=t,qo)),x1=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof T.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=T.customElements.get(i);a&&e instanceof a||(await T.customElements.whenDefined(i),T.customElements.upgrade(e))}))},O1=new T.DOMParser,N1=t=>t&&(O1.parseFromString(t,"text/html").body.textContent||t),on={mediaError:{get(t,e){const{media:i}=t;if((e==null?void 0:e.type)!=="playing")return i==null?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if((e==null?void 0:e.type)!=="playing")return(i=a==null?void 0:a.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:r}=t;if((e==null?void 0:e.type)!=="playing")return(a=(i=r==null?void 0:r.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.muted)!=null?e:!1},set(t,e){const{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{const r=T.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&T.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;T.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const r=T.localStorage.getItem("media-chrome-pref-muted")==="true";on.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(t){const{media:e}=t;return e==null?void 0:e.loop},set(t,e){const{media:i}=e;i&&(i.loop=t)},mediaEvents:["medialooprequest"]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.volume)!=null?e:1},set(t,e){const{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?T.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&T.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const r=T.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;on.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof(e==null?void 0:e.volume)>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!Zu(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e==null?void 0:e.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return(e==null?void 0:e.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i==null?void 0:i.seekable)!=null&&e.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i==null?void 0:i.buffered)!=null?e:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[_i.LIVE,_i.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:r}=e;if(D1.includes(r))return r===_i.UNKNOWN?a:r;const n=e.duration;return n===1/0?_i.LIVE:Number.isFinite(n)?_i.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=on.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===_i.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(on.mediaStreamType.get(t)===_i.LIVE))return!1;const r=e.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return e.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return Vo(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return Iv(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:r,options:n}=e;if(!r)return;const s=o=>{var l;!n.defaultSubtitles||o&&![ni.CAPTIONS,ni.SUBTITLES].includes((l=o==null?void 0:o.track)==null?void 0:l.kind)||Rv(e,!0)};return r.addEventListener("loadstart",s),(i=r.textTracks)==null||i.addEventListener("addtrack",s),(a=r.textTracks)==null||a.addEventListener("removetrack",s),()=>{var o,l;r.removeEventListener("loadstart",s),(o=r.textTracks)==null||o.removeEventListener("addtrack",s),(l=r.textTracks)==null||l.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=Cl(i,{kind:ni.CHAPTERS});return Array.from((e=a==null?void 0:a.cues)!=null?e:[]).map(({text:r,startTime:n,endTime:s})=>({text:N1(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r==null||r.addEventListener("load",t),n==null||n.addEventListener("load",t),()=>{r==null||r.removeEventListener("load",t),n==null||n.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?Ri(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n!=null&&n.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!we.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else we.pictureInPictureElement&&we.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:r}=t;return(a=(i=r==null?void 0:r.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a==null?void 0:a.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return b1(t)},set(t,e,i){var a,r;t?(f1(e),i.detail&&!((a=e.media)!=null&&a.inert)&&((r=e.media)==null||r.focus())):E1(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!(i!=null&&i.remote)||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:i.remote.state==="connected"},set(t,e){var i,a;const{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&T.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!w1||!wv(e))return st.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!I1||!Sv(e))return st.UNSUPPORTED;if(e!=null&&e.disablePictureInPicture)return st.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(qo===!1||(e==null?void 0:e.volume)==null)return st.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{qo==null&&M1.then(e=>t(e?void 0:st.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!L1||!((i=a==null?void 0:a.remote)!=null&&i.state))return st.UNSUPPORTED;if(!(e==null||e==="available"))return st.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!R1)return st.UNSUPPORTED;if((e==null?void 0:e.availability)==="not-available")return st.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!(i!=null&&i.videoRenditions))return st.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return st.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!(a!=null&&a.audioTracks))return st.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return st.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},P1={[x.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,n;const{media:s}=e,o=i??void 0;let l,u;if(s&&o!=null){const[d]=Cl(s,{kind:ni.METADATA,label:"thumbnails"}),v=Array.prototype.find.call((a=d==null?void 0:d.cues)!=null?a:[],(f,b,g)=>b===0?f.endTime>o:b===g.length-1?f.startTime<=o:f.startTime<=o&&f.endTime>o);if(v){const f=/'^(?:[a-z]+:)?\/\//i.test(v.text)||(r=s==null?void 0:s.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,b=new URL(v.text,f);u=new URLSearchParams(b.hash).get("#xywh").split(",").map(y=>+y),l=b.href}}const p=t.mediaDuration.get(e);let c=(n=t.mediaChaptersCues.get(e).find((d,v,f)=>v===f.length-1&&p===d.endTime?d.startTime<=o&&d.endTime>=o:d.startTime<=o&&d.endTime>o))==null?void 0:n.text;return i!=null&&c==null&&(c=""),{mediaPreviewTime:o,mediaPreviewImage:l,mediaPreviewCoords:u,mediaPreviewChapter:c}},[x.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[x.MEDIA_PLAY_REQUEST](t,e){var i,a,r,n;const s="mediaPaused",l=t.mediaStreamType.get(e)===_i.LIVE,u=!((i=e.options)!=null&&i.noAutoSeekToLive),p=t.mediaTargetLiveWindow.get(e)>0;if(l&&u&&!p){const m=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(m){const c=(n=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,d=m-c;t.mediaCurrentTime.set(d,e)}}t[s].set(!1,e)},[x.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",r=i;t[a].set(r,e)},[x.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[x.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[x.MEDIA_LOOP_REQUEST](t,e,{detail:i}){const a="mediaLoop",r=!!i;return t[a].set(r,e),{mediaLoop:r}},[x.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[x.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",r=i;t[a].set(r,e)},[x.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;const n="mediaCurrentTime",s=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(s)))return;const o=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,l=s-o;t[n].set(l,e)},[x.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:r}=e,n=Vo(e),s=Tv(i),o=(a=s[0])==null?void 0:a.language;o&&!r.noSubtitlesLangPref&&T.localStorage.setItem("media-chrome-pref-subtitles-lang",o),Ln(vr.SHOWING,n,s)},[x.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=Vo(e),r=i??[];Ln(vr.DISABLED,a,r)},[x.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){Rv(e,i)},[x.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",r=i;t[a].set(r,e)},[x.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[x.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[x.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[x.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){const a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[x.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[x.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[x.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[x.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},U1=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=on,requestMap:r=P1,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const o=[],l={options:{...n}};let u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const p=f=>{f!=null&&(nc(f,u)||(u=Object.freeze({...u,...f}),o.forEach(b=>b(u))))},m=()=>{const f=Object.entries(a).reduce((b,[g,{get:y}])=>(b[g]=y(l),b),{});p(f)},c={};let d;const v=async(f,b)=>{var g,y,E,S,M,C,I,H,q,F,W,He,it,at,ge,Ve;const Ut=!!d;if(d={...l,...d??{},...f},Ut)return;await x1(...Object.values(f));const qe=o.length>0&&b===0&&s,yt=l.media!==d.media,rt=((g=l.media)==null?void 0:g.textTracks)!==((y=d.media)==null?void 0:y.textTracks),De=((E=l.media)==null?void 0:E.videoRenditions)!==((S=d.media)==null?void 0:S.videoRenditions),Be=((M=l.media)==null?void 0:M.audioTracks)!==((C=d.media)==null?void 0:C.audioTracks),Ye=((I=l.media)==null?void 0:I.remote)!==((H=d.media)==null?void 0:H.remote),di=l.documentElement!==d.documentElement,ea=!!l.media&&(yt||qe),Ur=!!((q=l.media)!=null&&q.textTracks)&&(rt||qe),lh=!!((F=l.media)!=null&&F.videoRenditions)&&(De||qe),dh=!!((W=l.media)!=null&&W.audioTracks)&&(Be||qe),uh=!!((He=l.media)!=null&&He.remote)&&(Ye||qe),ch=!!l.documentElement&&(di||qe),Wl=ea||Ur||lh||dh||uh||ch,Da=o.length===0&&b===1&&s,hh=!!d.media&&(yt||Da),mh=!!((it=d.media)!=null&&it.textTracks)&&(rt||Da),ph=!!((at=d.media)!=null&&at.videoRenditions)&&(De||Da),vh=!!((ge=d.media)!=null&&ge.audioTracks)&&(Be||Da),fh=!!((Ve=d.media)!=null&&Ve.remote)&&(Ye||Da),Eh=!!d.documentElement&&(di||Da),_h=hh||mh||ph||vh||fh||Eh;if(!(Wl||_h)){Object.entries(d).forEach(([te,$r])=>{l[te]=$r}),m(),d=void 0;return}Object.entries(a).forEach(([te,{get:$r,mediaEvents:uE=[],textTracksEvents:cE=[],videoRenditionsEvents:hE=[],audioTracksEvents:mE=[],remoteEvents:pE=[],rootEvents:vE=[],stateOwnersUpdateHandlers:fE=[]}])=>{c[te]||(c[te]={});const nt=he=>{const ye=$r(l,he);p({[te]:ye})};let Me;Me=c[te].mediaEvents,uE.forEach(he=>{Me&&ea&&(l.media.removeEventListener(he,Me),c[te].mediaEvents=void 0),hh&&(d.media.addEventListener(he,nt),c[te].mediaEvents=nt)}),Me=c[te].textTracksEvents,cE.forEach(he=>{var ye,Tt;Me&&Ur&&((ye=l.media.textTracks)==null||ye.removeEventListener(he,Me),c[te].textTracksEvents=void 0),mh&&((Tt=d.media.textTracks)==null||Tt.addEventListener(he,nt),c[te].textTracksEvents=nt)}),Me=c[te].videoRenditionsEvents,hE.forEach(he=>{var ye,Tt;Me&&lh&&((ye=l.media.videoRenditions)==null||ye.removeEventListener(he,Me),c[te].videoRenditionsEvents=void 0),ph&&((Tt=d.media.videoRenditions)==null||Tt.addEventListener(he,nt),c[te].videoRenditionsEvents=nt)}),Me=c[te].audioTracksEvents,mE.forEach(he=>{var ye,Tt;Me&&dh&&((ye=l.media.audioTracks)==null||ye.removeEventListener(he,Me),c[te].audioTracksEvents=void 0),vh&&((Tt=d.media.audioTracks)==null||Tt.addEventListener(he,nt),c[te].audioTracksEvents=nt)}),Me=c[te].remoteEvents,pE.forEach(he=>{var ye,Tt;Me&&uh&&((ye=l.media.remote)==null||ye.removeEventListener(he,Me),c[te].remoteEvents=void 0),fh&&((Tt=d.media.remote)==null||Tt.addEventListener(he,nt),c[te].remoteEvents=nt)}),Me=c[te].rootEvents,vE.forEach(he=>{Me&&ch&&(l.documentElement.removeEventListener(he,Me),c[te].rootEvents=void 0),Eh&&(d.documentElement.addEventListener(he,nt),c[te].rootEvents=nt)});const as=c[te].stateOwnersUpdateHandlers;if(as&&Wl&&(Array.isArray(as)?as:[as]).forEach(ye=>{typeof ye=="function"&&ye()}),_h){const he=fE.map(ye=>ye(nt,d)).filter(ye=>typeof ye=="function");c[te].stateOwnersUpdateHandlers=he.length===1?he[0]:he}else Wl&&(c[te].stateOwnersUpdateHandlers=void 0)}),Object.entries(d).forEach(([te,$r])=>{l[te]=$r}),m(),d=void 0};return v({media:t,fullscreenElement:e,documentElement:i,options:n}),{dispatch(f){const{type:b,detail:g}=f;if(r[b]&&u.mediaErrorCode==null){p(r[b](a,l,f));return}b==="mediaelementchangerequest"?v({media:g}):b==="fullscreenelementchangerequest"?v({fullscreenElement:g}):b==="documentelementchangerequest"?v({documentElement:g}):b==="optionschangerequest"&&(Object.entries(g??{}).forEach(([y,E])=>{l.options[y]=E}),m())},getState(){return u},subscribe(f){return v({},o.length+1),o.push(f),f(u),()=>{const b=o.indexOf(f);b>=0&&(v({},o.length-1),o.splice(b,1))}}}};var sc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},N=(t,e,i)=>(sc(t,e,"read from private field"),i?i.call(t):e.get(t)),ct=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},It=(t,e,i,a)=>(sc(t,e,"write to private field"),e.set(t,i),i),Fr=(t,e,i)=>(sc(t,e,"access private method"),i),gi,ln,Y,ai,dn,Kt,Bs,un,Ws,xd,ka,Fs,Od,Nd,Lv;const Cv=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],Xh=10,Jh=.025,em=.25,$1=.25,H1=2,w={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class Dv extends Rl{constructor(){super(),ct(this,Ws),ct(this,Fs),ct(this,Nd),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,ct(this,gi,new ac(this,w.HOTKEYS)),ct(this,ln,void 0),ct(this,Y,void 0),ct(this,ai,null),ct(this,dn,void 0),ct(this,Kt,void 0),ct(this,Bs,i=>{var a;(a=N(this,Y))==null||a.dispatch(i)}),ct(this,un,void 0),ct(this,ka,i=>{const{key:a,shiftKey:r}=i;if(!(r&&(a==="/"||a==="?")||Cv.includes(a))){this.removeEventListener("keyup",N(this,ka));return}this.keyboardShortcutHandler(i)}),this.associateElement(this);let e={};It(this,dn,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);const n=a.toLowerCase(),s=new T.CustomEvent(H0[n],{composed:!0,detail:r});this.dispatchEvent(s)}),e=i})}static get observedAttributes(){return super.observedAttributes.concat(w.NO_HOTKEYS,w.HOTKEYS,w.DEFAULT_STREAM_TYPE,w.DEFAULT_SUBTITLES,w.DEFAULT_DURATION,w.NO_MUTED_PREF,w.NO_VOLUME_PREF,w.LANG,w.LOOP,w.LIVE_EDGE_OFFSET,w.SEEK_TO_LIVE_OFFSET,w.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return N(this,Y)}set mediaStore(e){var i,a;if(N(this,Y)&&((i=N(this,Kt))==null||i.call(this),It(this,Kt,void 0)),It(this,Y,e),!N(this,Y)&&!this.hasAttribute(w.NO_DEFAULT_STORE)){Fr(this,Ws,xd).call(this);return}It(this,Kt,(a=N(this,Y))==null?void 0:a.subscribe(N(this,dn)))}get fullscreenElement(){var e;return(e=N(this,ln))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(w.FULLSCREEN_ELEMENT)&&this.removeAttribute(w.FULLSCREEN_ELEMENT),It(this,ln,e),(i=N(this,Y))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return G(this,w.DEFAULT_SUBTITLES)}set defaultSubtitles(e){z(this,w.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return ce(this,w.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){le(this,w.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return ne(this,w.DEFAULT_DURATION)}set defaultDuration(e){ve(this,w.DEFAULT_DURATION,e)}get noHotkeys(){return G(this,w.NO_HOTKEYS)}set noHotkeys(e){z(this,w.NO_HOTKEYS,e)}get keysUsed(){return ce(this,w.KEYS_USED)}set keysUsed(e){le(this,w.KEYS_USED,e)}get liveEdgeOffset(){return ne(this,w.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){ve(this,w.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return G(this,w.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){z(this,w.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return G(this,w.NO_VOLUME_PREF)}set noVolumePref(e){z(this,w.NO_VOLUME_PREF,e)}get noMutedPref(){return G(this,w.NO_MUTED_PREF)}set noMutedPref(e){z(this,w.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return G(this,w.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){z(this,w.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return G(this,w.NO_DEFAULT_STORE)}set noDefaultStore(e){z(this,w.NO_DEFAULT_STORE,e)}get resolvedLang(){return J0()}attributeChangedCallback(e,i,a){var r,n,s,o,l,u,p,m,c,d,v,f;if(super.attributeChangedCallback(e,i,a),e===w.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(w.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(e===w.HOTKEYS)N(this,gi).value=a;else if(e===w.DEFAULT_SUBTITLES&&a!==i)(r=N(this,Y))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(w.DEFAULT_SUBTITLES)}});else if(e===w.DEFAULT_STREAM_TYPE)(s=N(this,Y))==null||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(w.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(e===w.LIVE_EDGE_OFFSET&&a!==i)(o=N(this,Y))==null||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(w.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(w.SEEK_TO_LIVE_OFFSET):this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0}});else if(e===w.SEEK_TO_LIVE_OFFSET&&a!==i)(l=N(this,Y))==null||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(w.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(w.SEEK_TO_LIVE_OFFSET):this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0}});else if(e===w.NO_AUTO_SEEK_TO_LIVE)(u=N(this,Y))==null||u.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(w.NO_AUTO_SEEK_TO_LIVE)}});else if(e===w.FULLSCREEN_ELEMENT){const b=a?(p=this.getRootNode())==null?void 0:p.getElementById(a):void 0;It(this,ln,b),(m=N(this,Y))==null||m.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===w.LANG&&a!==i?(Z0(a),(c=N(this,Y))==null||c.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===w.LOOP&&a!==i?(d=N(this,Y))==null||d.dispatch({type:x.MEDIA_LOOP_REQUEST,detail:a!=null}):e===w.NO_VOLUME_PREF&&a!==i?(v=N(this,Y))==null||v.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(w.NO_VOLUME_PREF)}}):e===w.NO_MUTED_PREF&&a!==i&&((f=N(this,Y))==null||f.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(w.NO_MUTED_PREF)}}))}connectedCallback(){var e,i,a;this.associateElement(this),!N(this,Y)&&!this.hasAttribute(w.NO_DEFAULT_STORE)&&Fr(this,Ws,xd).call(this),(e=N(this,Y))==null||e.dispatch({type:"documentelementchangerequest",detail:we}),(i=N(this,Y))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),N(this,Y)&&!N(this,Kt)&&It(this,Kt,(a=N(this,Y))==null?void 0:a.subscribe(N(this,dn))),N(this,un)!==void 0&&N(this,Y)&&this.media&&setTimeout(()=>{var r,n,s;(n=(r=this.media)==null?void 0:r.textTracks)!=null&&n.length&&((s=N(this,Y))==null||s.dispatch({type:x.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:N(this,un)}))},0),this.hasAttribute(w.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,r,n,s;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),N(this,Y)){const o=N(this,Y).getState();It(this,un,!!((i=o.mediaSubtitlesShowing)!=null&&i.length)),(a=N(this,Y))==null||a.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),(r=N(this,Y))==null||r.dispatch({type:"documentelementchangerequest",detail:void 0}),(n=N(this,Y))==null||n.dispatch({type:x.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}N(this,Kt)&&((s=N(this,Kt))==null||s.call(this),It(this,Kt,void 0)),this.unassociateElement(this),N(this,ai)&&(N(this,ai).remove(),It(this,ai,null))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=N(this,Y))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=N(this,Y))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){am(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=q1(e,a,r);Object.values(x).forEach(s=>{e.addEventListener(s,N(this,Bs))}),i.set(e,n)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(x).forEach(r=>{e.removeEventListener(r,N(this,Bs))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),N(this,Y)&&Object.entries(N(this,Y).getState()).forEach(([r,n])=>{am([e],r,n)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",Fr(this,Fs,Od))}disableHotkeys(){this.removeEventListener("keydown",Fr(this,Fs,Od)),this.removeEventListener("keyup",N(this,ka))}get hotkeys(){return N(this,gi)}set hotkeys(e){le(this,w.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,n,s,o,l,u,p;const m=e.target;if(((r=(a=(i=m.getAttribute(w.KEYS_USED))==null?void 0:i.split(" "))!=null?a:m==null?void 0:m.keysUsed)!=null?r:[]).map(g=>g==="Space"?" ":g).filter(Boolean).includes(e.key))return;let d,v,f;if(!(N(this,gi).contains(`no${e.key.toLowerCase()}`)||e.key===" "&&N(this,gi).contains("nospace")||e.shiftKey&&(e.key==="/"||e.key==="?")&&N(this,gi).contains("noshift+/")))switch(e.key){case" ":case"k":d=N(this,Y).getState().mediaPaused?x.MEDIA_PLAY_REQUEST:x.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new T.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"m":d=this.mediaStore.getState().mediaVolumeLevel==="off"?x.MEDIA_UNMUTE_REQUEST:x.MEDIA_MUTE_REQUEST,this.dispatchEvent(new T.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"f":d=this.mediaStore.getState().mediaIsFullscreen?x.MEDIA_EXIT_FULLSCREEN_REQUEST:x.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new T.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new T.CustomEvent(x.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const g=this.hasAttribute(w.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(w.KEYBOARD_BACKWARD_SEEK_OFFSET):Xh;v=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-g,0),f=new T.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"ArrowRight":case"l":{const g=this.hasAttribute(w.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(w.KEYBOARD_FORWARD_SEEK_OFFSET):Xh;v=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)+g,0),f=new T.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"ArrowUp":{const g=this.hasAttribute(w.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(w.KEYBOARD_UP_VOLUME_STEP):Jh;v=Math.min(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)+g,1),f=new T.CustomEvent(x.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"ArrowDown":{const g=this.hasAttribute(w.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(w.KEYBOARD_DOWN_VOLUME_STEP):Jh;v=Math.max(((l=this.mediaStore.getState().mediaVolume)!=null?l:1)-g,0),f=new T.CustomEvent(x.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"<":{const g=(u=this.mediaStore.getState().mediaPlaybackRate)!=null?u:1;v=Math.max(g-em,$1).toFixed(2),f=new T.CustomEvent(x.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case">":{const g=(p=this.mediaStore.getState().mediaPlaybackRate)!=null?p:1;v=Math.min(g+em,H1).toFixed(2),f=new T.CustomEvent(x.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"/":case"?":{e.shiftKey&&Fr(this,Nd,Lv).call(this);break}case"p":{d=this.mediaStore.getState().mediaIsPip?x.MEDIA_EXIT_PIP_REQUEST:x.MEDIA_ENTER_PIP_REQUEST,f=new T.CustomEvent(d,{composed:!0,bubbles:!0}),this.dispatchEvent(f);break}}}}gi=new WeakMap;ln=new WeakMap;Y=new WeakMap;ai=new WeakMap;dn=new WeakMap;Kt=new WeakMap;Bs=new WeakMap;un=new WeakMap;Ws=new WeakSet;xd=function(){var t;this.mediaStore=U1({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(w.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(w.DEFAULT_DURATION)?+this.getAttribute(w.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(w.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(w.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(w.SEEK_TO_LIVE_OFFSET):this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(w.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(w.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(w.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(w.NO_SUBTITLES_LANG_PREF)}})};ka=new WeakMap;Fs=new WeakSet;Od=function(t){var e;const{metaKey:i,altKey:a,key:r,shiftKey:n}=t,s=n&&(r==="/"||r==="?");if(s&&((e=N(this,ai))!=null&&e.open)){this.removeEventListener("keyup",N(this,ka));return}if(i||a||!s&&!Cv.includes(r)){this.removeEventListener("keyup",N(this,ka));return}const o=t.target,l=o instanceof HTMLElement&&(o.tagName.toLowerCase()==="media-volume-range"||o.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!(N(this,gi).contains(`no${r.toLowerCase()}`)||r===" "&&N(this,gi).contains("nospace"))&&!l&&t.preventDefault(),this.addEventListener("keyup",N(this,ka),{once:!0})};Nd=new WeakSet;Lv=function(){N(this,ai)||(It(this,ai,we.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(N(this,ai))),N(this,ai).open=!0};const B1=Object.values(h),W1=Object.values(av),Mv=t=>{var e,i,a,r;let{observedAttributes:n}=t.constructor;!n&&((e=t.nodeName)!=null&&e.includes("-"))&&(T.customElements.upgrade(t),{observedAttributes:n}=t.constructor);const s=(r=(a=(i=t==null?void 0:t.getAttribute)==null?void 0:i.call(t,X.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(o=>B1.includes(o)):[]},F1=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&T.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof T.customElements.get(t.nodeName.toLowerCase()))&&T.customElements.upgrade(t),W1.some(a=>a in t)},Pd=t=>F1(t)||!!Mv(t).length,tm=t=>{var e;return(e=t==null?void 0:t.join)==null?void 0:e.call(t,":")},im={[h.MEDIA_SUBTITLES_LIST]:Yn,[h.MEDIA_SUBTITLES_SHOWING]:Yn,[h.MEDIA_SEEKABLE]:tm,[h.MEDIA_BUFFERED]:t=>t==null?void 0:t.map(tm).join(" "),[h.MEDIA_PREVIEW_COORDS]:t=>t==null?void 0:t.join(" "),[h.MEDIA_RENDITION_LIST]:W0,[h.MEDIA_AUDIO_TRACK_LIST]:q0},K1=async(t,e,i)=>{var a,r;if(t.isConnected||await sv(0),typeof i=="boolean"||i==null)return z(t,e,i);if(typeof i=="number")return ve(t,e,i);if(typeof i=="string")return le(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const n=(r=(a=im[e])==null?void 0:a.call(im,i))!=null?r:i;return t.setAttribute(e,n)},V1=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},da=(t,e)=>{if(V1(t))return;const i=(r,n)=>{var s,o;Pd(r)&&n(r);const{children:l=[]}=r??{},u=(o=(s=r==null?void 0:r.shadowRoot)==null?void 0:s.children)!=null?o:[];[...l,...u].forEach(m=>da(m,n))},a=t==null?void 0:t.nodeName.toLowerCase();if(a.includes("-")&&!Pd(t)){T.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},am=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const r=Mv(a),n=e.toLowerCase();r.includes(n)&&K1(a,n,i)})},q1=(t,e,i)=>{da(t,e);const a=p=>{var m;const c=(m=p==null?void 0:p.composedPath()[0])!=null?m:p.target;e(c)},r=p=>{var m;const c=(m=p==null?void 0:p.composedPath()[0])!=null?m:p.target;i(c)};t.addEventListener(x.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(x.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=p=>{p.forEach(m=>{const{addedNodes:c=[],removedNodes:d=[],type:v,target:f,attributeName:b}=m;v==="childList"?(Array.prototype.forEach.call(c,g=>da(g,e)),Array.prototype.forEach.call(d,g=>da(g,i))):v==="attributes"&&b===X.MEDIA_CHROME_ATTRIBUTES&&(Pd(f)?e(f):i(f))})};let s=[];const o=p=>{const m=p.target;m.name!=="media"&&(s.forEach(c=>da(c,i)),s=[...m.assignedElements({flatten:!0})],s.forEach(c=>da(c,e)))};t.addEventListener("slotchange",o);const l=new MutationObserver(n);return l.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{da(t,i),t.removeEventListener("slotchange",o),l.disconnect(),t.removeEventListener(x.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(x.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};T.customElements.get("media-controller")||T.customElements.define("media-controller",Dv);var Y1=Dv;const Ma={PLACEMENT:"placement",BOUNDS:"bounds"};function G1(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}class Dl extends T.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!vv(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(e=Mr(this,"#"+this.bounds))!=null?e:et(this);if(!r)return;const{x:n,width:s}=r.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),u=o+l,p=n+s,m=a.getPropertyValue("--media-tooltip-offset-x"),c=m?parseFloat(m.replace("px","")):0,d=a.getPropertyValue("--media-tooltip-container-margin"),v=d?parseFloat(d.replace("px","")):0,f=o-n+c-v,b=u-p+c+v;if(f<0){this.style.setProperty("--media-tooltip-offset-x",`${f}px`);return}if(b>0){this.style.setProperty("--media-tooltip-offset-x",`${b}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=lt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[Ma.PLACEMENT,Ma.BOUNDS]}get placement(){return ce(this,Ma.PLACEMENT)}set placement(e){le(this,Ma.PLACEMENT,e)}get bounds(){return ce(this,Ma.BOUNDS)}set bounds(e){le(this,Ma.BOUNDS,e)}}Dl.shadowRootOptions={mode:"open"};Dl.getTemplateHTML=G1;T.customElements.get("media-tooltip")||T.customElements.define("media-tooltip",Dl);var rm=Dl,oc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ke=(t,e,i)=>(oc(t,e,"read from private field"),i?i.call(t):e.get(t)),xa=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},cs=(t,e,i,a)=>(oc(t,e,"write to private field"),e.set(t,i),i),z1=(t,e,i)=>(oc(t,e,"access private method"),i),Vt,ur,Vi,Va,Ks,Ud,xv;const Li={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function Q1(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${rm.shadowRootOptions.mode}">
          ${rm.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function j1(t,e){return`
    <slot></slot>
  `}function Z1(){return""}class Pe extends T.HTMLElement{constructor(){if(super(),xa(this,Ud),xa(this,Vt,void 0),this.preventClick=!1,this.tooltipEl=null,xa(this,ur,e=>{this.preventClick||this.handleClick(e),setTimeout(ke(this,Vi),0)}),xa(this,Vi,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),xa(this,Va,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",ke(this,Va));return}this.preventClick||this.handleClick(e)}),xa(this,Ks,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",ke(this,Va));return}this.addEventListener("keyup",ke(this,Va),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=lt(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",Li.TOOLTIP_PLACEMENT,X.MEDIA_CONTROLLER,h.MEDIA_LANG]}enable(){this.addEventListener("click",ke(this,ur)),this.addEventListener("keydown",ke(this,Ks)),this.tabIndex=0}disable(){this.removeEventListener("click",ke(this,ur)),this.removeEventListener("keydown",ke(this,Ks)),this.removeEventListener("keyup",ke(this,Va)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===X.MEDIA_CONTROLLER?(i&&((n=(r=ke(this,Vt))==null?void 0:r.unassociateElement)==null||n.call(r,this),cs(this,Vt,null)),a&&this.isConnected&&(cs(this,Vt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=ke(this,Vt))==null?void 0:o.associateElement)==null||l.call(o,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===Li.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===h.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),ke(this,Vi).call(this)}connectedCallback(){var e,i,a;const{style:r}=Le(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(X.MEDIA_CONTROLLER);n&&(cs(this,Vt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=ke(this,Vt))==null?void 0:i.associateElement)==null||a.call(i,this)),T.customElements.whenDefined("media-tooltip").then(()=>z1(this,Ud,xv).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=ke(this,Vt))==null?void 0:e.unassociateElement)==null||i.call(e,this),cs(this,Vt,null),this.removeEventListener("mouseenter",ke(this,Vi)),this.removeEventListener("focus",ke(this,Vi)),this.removeEventListener("click",ke(this,ur))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return ce(this,Li.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){le(this,Li.TOOLTIP_PLACEMENT,e)}get mediaController(){return ce(this,X.MEDIA_CONTROLLER)}set mediaController(e){le(this,X.MEDIA_CONTROLLER,e)}get disabled(){return G(this,Li.DISABLED)}set disabled(e){z(this,Li.DISABLED,e)}get noTooltip(){return G(this,Li.NO_TOOLTIP)}set noTooltip(e){z(this,Li.NO_TOOLTIP,e)}handleClick(e){}}Vt=new WeakMap;ur=new WeakMap;Vi=new WeakMap;Va=new WeakMap;Ks=new WeakMap;Ud=new WeakSet;xv=function(){this.addEventListener("mouseenter",ke(this,Vi)),this.addEventListener("focus",ke(this,Vi)),this.addEventListener("click",ke(this,ur));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};Pe.shadowRootOptions={mode:"open"};Pe.getTemplateHTML=Q1;Pe.getSlotTemplateHTML=j1;Pe.getTooltipContentHTML=Z1;T.customElements.get("media-chrome-button")||T.customElements.define("media-chrome-button",Pe);const nm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function X1(t){return`
    <style>
      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${nm}</slot>
      <slot name="exit">${nm}</slot>
    </slot>
  `}function J1(){return`
    <slot name="tooltip-enter">${D("start airplay")}</slot>
    <slot name="tooltip-exit">${D("stop airplay")}</slot>
  `}const sm=t=>{const e=t.mediaIsAirplaying?D("stop airplay"):D("start airplay");t.setAttribute("aria-label",e)};class lc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_AIRPLAYING,h.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_AIRPLAYING&&sm(this)}get mediaIsAirplaying(){return G(this,h.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){z(this,h.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return ce(this,h.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){le(this,h.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new T.CustomEvent(x.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}lc.getSlotTemplateHTML=X1;lc.getTooltipContentHTML=J1;T.customElements.get("media-airplay-button")||T.customElements.define("media-airplay-button",lc);const ey=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,ty=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function iy(t){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${ey}</slot>
      <slot name="off">${ty}</slot>
    </slot>
  `}function ay(){return`
    <slot name="tooltip-enable">${D("Enable captions")}</slot>
    <slot name="tooltip-disable">${D("Disable captions")}</slot>
  `}const om=t=>{t.setAttribute("aria-checked",kv(t).toString())};class dc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",D("closed captions")),om(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_SHOWING&&om(this)}get mediaSubtitlesList(){return lm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dm(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return lm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dm(this,h.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new T.CustomEvent(x.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}dc.getSlotTemplateHTML=iy;dc.getTooltipContentHTML=ay;const lm=(t,e)=>{const i=t.getAttribute(e);return i?Ll(i):[]},dm=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=Yn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};T.customElements.get("media-captions-button")||T.customElements.define("media-captions-button",dc);const ry='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',ny='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function sy(t){return`
    <style>
      :host([${h.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ry}</slot>
      <slot name="exit">${ny}</slot>
    </slot>
  `}function oy(){return`
    <slot name="tooltip-enter">${D("Start casting")}</slot>
    <slot name="tooltip-exit">${D("Stop casting")}</slot>
  `}const um=t=>{const e=t.mediaIsCasting?D("stop casting"):D("start casting");t.setAttribute("aria-label",e)};class uc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_CASTING,h.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),um(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_CASTING&&um(this)}get mediaIsCasting(){return G(this,h.MEDIA_IS_CASTING)}set mediaIsCasting(e){z(this,h.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return ce(this,h.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){le(this,h.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?x.MEDIA_EXIT_CAST_REQUEST:x.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new T.CustomEvent(e,{composed:!0,bubbles:!0}))}}uc.getSlotTemplateHTML=sy;uc.getTooltipContentHTML=oy;T.customElements.get("media-cast-button")||T.customElements.define("media-cast-button",uc);var cc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Sa=(t,e,i)=>(cc(t,e,"read from private field"),e.get(t)),ci=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},hc=(t,e,i,a)=>(cc(t,e,"write to private field"),e.set(t,i),i),aa=(t,e,i)=>(cc(t,e,"access private method"),i),Yo,Gn,Ra,Vs,$d,Hd,Ov,Bd,Nv,Wd,Pv,Fd,Uv,Kd,$v;function ly(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function dy(t){return`
    <slot id="content"></slot>
  `}const Kr={OPEN:"open",ANCHOR:"anchor"};class xr extends T.HTMLElement{constructor(){super(),ci(this,Vs),ci(this,Hd),ci(this,Bd),ci(this,Wd),ci(this,Fd),ci(this,Kd),ci(this,Yo,!1),ci(this,Gn,null),ci(this,Ra,null)}static get observedAttributes(){return[Kr.OPEN,Kr.ANCHOR]}get open(){return G(this,Kr.OPEN)}set open(e){z(this,Kr.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":aa(this,Wd,Pv).call(this,e);break;case"focusout":aa(this,Fd,Uv).call(this,e);break;case"keydown":aa(this,Kd,$v).call(this,e);break}}connectedCallback(){aa(this,Vs,$d).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,i,a){aa(this,Vs,$d).call(this),e===Kr.OPEN&&a!==i&&(this.open?aa(this,Hd,Ov).call(this):aa(this,Bd,Nv).call(this))}focus(){hc(this,Gn,Ju());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a==null||a.focus()}get keysUsed(){return["Escape","Tab"]}}Yo=new WeakMap;Gn=new WeakMap;Ra=new WeakMap;Vs=new WeakSet;$d=function(){if(!Sa(this,Yo)&&(hc(this,Yo,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=lt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=Le(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};Hd=new WeakSet;Ov=function(){var t;(t=Sa(this,Ra))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};Bd=new WeakSet;Nv=function(){var t;(t=Sa(this,Ra))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};Wd=new WeakSet;Pv=function(t){hc(this,Ra,t.relatedTarget),Ri(this,t.relatedTarget)||(this.open=!this.open)};Fd=new WeakSet;Uv=function(t){var e;Ri(this,t.relatedTarget)||((e=Sa(this,Gn))==null||e.focus(),Sa(this,Ra)&&Sa(this,Ra)!==t.relatedTarget&&this.open&&(this.open=!1))};Kd=new WeakSet;$v=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:u}=t;o||l||u||this.keysUsed.includes(s)&&(t.preventDefault(),t.stopPropagation(),s==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):s==="Escape"&&((n=Sa(this,Gn))==null||n.focus(),this.open=!1))};xr.shadowRootOptions={mode:"open"};xr.getTemplateHTML=ly;xr.getSlotTemplateHTML=dy;T.customElements.get("media-chrome-dialog")||T.customElements.define("media-chrome-dialog",xr);var mc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},me=(t,e,i)=>(mc(t,e,"read from private field"),i?i.call(t):e.get(t)),Ue=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Oi=(t,e,i,a)=>(mc(t,e,"write to private field"),e.set(t,i),i),Ct=(t,e,i)=>(mc(t,e,"access private method"),i),qt,Ml,qs,Ys,Dt,Go,Gs,zs,Qs,pc,Hv,js,Vd,Zs,qd,zo,vc,Yd,Bv,Gd,Wv,zd,Fv,Qd,Kv;function uy(t){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(t)}
    </div>
    <div id="rightgap"></div>
  `}function cy(t){return""}class Or extends T.HTMLElement{constructor(){if(super(),Ue(this,pc),Ue(this,js),Ue(this,Zs),Ue(this,zo),Ue(this,Yd),Ue(this,Gd),Ue(this,zd),Ue(this,Qd),Ue(this,qt,void 0),Ue(this,Ml,void 0),Ue(this,qs,void 0),Ue(this,Ys,void 0),Ue(this,Dt,{}),Ue(this,Go,[]),Ue(this,Gs,()=>{if(this.range.matches(":focus-visible")){const{style:e}=Le(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Ue(this,zs,()=>{const{style:e}=Le(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),Ue(this,Qs,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=lt(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),Oi(this,qs,this.shadowRoot.querySelector("#startpoint")),Oi(this,Ys,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",X.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===X.MEDIA_CONTROLLER?(i&&((n=(r=me(this,qt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Oi(this,qt,null)),a&&this.isConnected&&(Oi(this,qt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=me(this,qt))==null?void 0:o.associateElement)==null||l.call(o,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),Ct(this,js,Vd).call(this)):(this.range.setAttribute(e,a),Ct(this,Zs,qd).call(this)))}connectedCallback(){var e,i,a;const{style:r}=Le(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),me(this,Dt).pointer=Le(this.shadowRoot,"#pointer"),me(this,Dt).progress=Le(this.shadowRoot,"#progress"),me(this,Dt).thumb=Le(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),me(this,Dt).activeSegment=Le(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(X.MEDIA_CONTROLLER);n&&(Oi(this,qt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=me(this,qt))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",me(this,Gs)),this.shadowRoot.addEventListener("focusout",me(this,zs)),Ct(this,js,Vd).call(this),wr(this.container,me(this,Qs))}disconnectedCallback(){var e,i;Ct(this,Zs,qd).call(this),(i=(e=me(this,qt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Oi(this,qt,null),this.shadowRoot.removeEventListener("focusin",me(this,Gs)),this.shadowRoot.removeEventListener("focusout",me(this,zs)),Ir(this.container,me(this,Qs))}updatePointerBar(e){var i;(i=me(this,Dt).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=me(this,Dt).progress)==null||e.style.setProperty("width",`${a}%`),(i=me(this,Dt).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!(e!=null&&e.length)),!(e!=null&&e.length))return;const a=[...new Set([+this.range.min,...e.flatMap(n=>[n.start,n.end]),+this.range.max])];Oi(this,Go,[...a]);const r=a.pop();for(const[n,s]of a.entries()){const[o,l]=[n===0,n===a.length-1],u=o?"calc(var(--segments-gap) / -1)":`${s*100}%`,m=`calc(${((l?r:a[n+1])-s)*100}%${o||l?"":" - var(--segments-gap)"})`,c=we.createElementNS("http://www.w3.org/2000/svg","rect"),d=ec(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);d.style.setProperty("x",u),d.style.setProperty("width",m),i.append(c)}}getPointerRatio(e){return a1(e.clientX,e.clientY,me(this,qs).getBoundingClientRect(),me(this,Ys).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":Ct(this,Qd,Kv).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":Ct(this,Yd,Bv).call(this,e);break;case"pointerdown":Ct(this,zo,vc).call(this,e);break;case"pointerup":Ct(this,Gd,Wv).call(this);break;case"pointerleave":Ct(this,zd,Fv).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}qt=new WeakMap;Ml=new WeakMap;qs=new WeakMap;Ys=new WeakMap;Dt=new WeakMap;Go=new WeakMap;Gs=new WeakMap;zs=new WeakMap;Qs=new WeakMap;pc=new WeakSet;Hv=function(t){const e=me(this,Dt).activeSegment;if(!e)return;const i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${me(this,Go).findIndex((n,s,o)=>{const l=o[s+1];return l!=null&&i>=n&&i<=l})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};js=new WeakSet;Vd=function(){this.hasAttribute("disabled")||!this.isConnected||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Zs=new WeakSet;qd=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),(t=T.window)==null||t.removeEventListener("pointerup",this),(e=T.window)==null||e.removeEventListener("pointermove",this)};zo=new WeakSet;vc=function(t){var e;Oi(this,Ml,t.composedPath().includes(this.range)),(e=T.window)==null||e.addEventListener("pointerup",this,{once:!0})};Yd=new WeakSet;Bv=function(t){var e;t.pointerType!=="mouse"&&Ct(this,zo,vc).call(this,t),this.addEventListener("pointerleave",this,{once:!0}),(e=T.window)==null||e.addEventListener("pointermove",this)};Gd=new WeakSet;Wv=function(){var t;(t=T.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};zd=new WeakSet;Fv=function(){var t,e;this.removeEventListener("pointerleave",this),(t=T.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=me(this,Dt).activeSegment)==null||e.style.removeProperty("transform")};Qd=new WeakSet;Kv=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),Ct(this,pc,Hv).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!me(this,Ml))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};Or.shadowRootOptions={mode:"open"};Or.getTemplateHTML=uy;Or.getContainerTemplateHTML=cy;T.customElements.get("media-chrome-range")||T.customElements.define("media-chrome-range",Or);var Vv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},hs=(t,e,i)=>(Vv(t,e,"read from private field"),i?i.call(t):e.get(t)),hy=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ms=(t,e,i,a)=>(Vv(t,e,"write to private field"),e.set(t,i),i),Yt;function my(t){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}class fc extends T.HTMLElement{constructor(){if(super(),hy(this,Yt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=lt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[X.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===X.MEDIA_CONTROLLER&&(i&&((n=(r=hs(this,Yt))==null?void 0:r.unassociateElement)==null||n.call(r,this),ms(this,Yt,null)),a&&this.isConnected&&(ms(this,Yt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=hs(this,Yt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(X.MEDIA_CONTROLLER);r&&(ms(this,Yt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=hs(this,Yt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=hs(this,Yt))==null?void 0:e.unassociateElement)==null||i.call(e,this),ms(this,Yt,null)}}Yt=new WeakMap;fc.shadowRootOptions={mode:"open"};fc.getTemplateHTML=my;T.customElements.get("media-control-bar")||T.customElements.define("media-control-bar",fc);var qv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ps=(t,e,i)=>(qv(t,e,"read from private field"),i?i.call(t):e.get(t)),py=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},vs=(t,e,i,a)=>(qv(t,e,"write to private field"),e.set(t,i),i),Gt;function vy(t,e={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}
  `}function fy(t,e){return`
    <slot></slot>
  `}class Xi extends T.HTMLElement{constructor(){if(super(),py(this,Gt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=lt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[X.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===X.MEDIA_CONTROLLER&&(i&&((n=(r=ps(this,Gt))==null?void 0:r.unassociateElement)==null||n.call(r,this),vs(this,Gt,null)),a&&this.isConnected&&(vs(this,Gt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=ps(this,Gt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const{style:r}=Le(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(X.MEDIA_CONTROLLER);n&&(vs(this,Gt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=ps(this,Gt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=ps(this,Gt))==null?void 0:e.unassociateElement)==null||i.call(e,this),vs(this,Gt,null)}}Gt=new WeakMap;Xi.shadowRootOptions={mode:"open"};Xi.getTemplateHTML=vy;Xi.getSlotTemplateHTML=fy;T.customElements.get("media-text-display")||T.customElements.define("media-text-display",Xi);var Yv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},cm=(t,e,i)=>(Yv(t,e,"read from private field"),i?i.call(t):e.get(t)),Ey=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_y=(t,e,i,a)=>(Yv(t,e,"write to private field"),e.set(t,i),i),cn;function by(t,e){return`
    <slot>${ji(e.mediaDuration)}</slot>
  `}class Gv extends Xi{constructor(){var e;super(),Ey(this,cn,void 0),_y(this,cn,this.shadowRoot.querySelector("slot")),cm(this,cn).textContent=ji((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===h.MEDIA_DURATION&&(cm(this,cn).textContent=ji(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return ne(this,h.MEDIA_DURATION)}set mediaDuration(e){ve(this,h.MEDIA_DURATION,e)}}cn=new WeakMap;Gv.getSlotTemplateHTML=by;T.customElements.get("media-duration-display")||T.customElements.define("media-duration-display",Gv);const gy={2:D("Network Error"),3:D("Decode Error"),4:D("Source Not Supported"),5:D("Encryption Error")},yy={2:D("A network error caused the media download to fail."),3:D("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:D("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:D("The media is encrypted and there are no keys to decrypt it.")},Ec=t=>{var e,i;return t.code===1?null:{title:(e=gy[t.code])!=null?e:`Error ${t.code}`,message:(i=yy[t.code])!=null?i:t.message}};var zv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ty=(t,e,i)=>(zv(t,e,"read from private field"),i?i.call(t):e.get(t)),Ay=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ky=(t,e,i,a)=>(zv(t,e,"write to private field"),e.set(t,i),i),Xs;function Sy(t){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t.mediaerrorcode}" id="content">
      ${Qv({code:+t.mediaerrorcode,message:t.mediaerrormessage})}
    </slot>
  `}function wy(t){return t.code&&Ec(t)!==null}function Qv(t){var e;const{title:i,message:a}=(e=Ec(t))!=null?e:{};let r="";return i&&(r+=`<slot name="error-${t.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${t.code}-message"><p>${a}</p></slot>`),r}const hm=[h.MEDIA_ERROR_CODE,h.MEDIA_ERROR_MESSAGE];class xl extends xr{constructor(){super(...arguments),Ay(this,Xs,null)}static get observedAttributes(){return[...super.observedAttributes,...hm]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!hm.includes(e))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=wy(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n),!this.hasAttribute("aria-label"))){const{title:s}=Ec(n);s&&this.setAttribute("aria-label",s)}}get mediaError(){return Ty(this,Xs)}set mediaError(e){ky(this,Xs,e)}get mediaErrorCode(){return ne(this,"mediaerrorcode")}set mediaErrorCode(e){ve(this,"mediaerrorcode",e)}get mediaErrorMessage(){return ce(this,"mediaerrormessage")}set mediaErrorMessage(e){le(this,"mediaerrormessage",e)}}Xs=new WeakMap;xl.getSlotTemplateHTML=Sy;xl.formatErrorMessage=Qv;T.customElements.get("media-error-dialog")||T.customElements.define("media-error-dialog",xl);var jv=xl,Iy=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ci=(t,e,i)=>(Iy(t,e,"read from private field"),i?i.call(t):e.get(t)),mm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qa,Ya;function Ry(t){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${Ly()}
    </slot>
  `}function Ly(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:i,description:a})=>`
      <tr>
        <td>
          <div class="key-combo">${i.map((n,s)=>s>0?`<span class="key-separator">or</span><span class="key">${n}</span>`:`<span class="key">${n}</span>`).join("")}</div>
        </td>
        <td class="description">${a}</td>
      </tr>
    `).join("")}</table>
  `}class Zv extends xr{constructor(){super(...arguments),mm(this,qa,e=>{var i;if(!this.open)return;const a=(i=this.shadowRoot)==null?void 0:i.querySelector("#content");if(!a)return;const r=e.composedPath(),n=r[0]===this||r.includes(this),s=r.includes(a);n&&!s&&(this.open=!1)}),mm(this,Ya,e=>{if(!this.open)return;const i=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||i)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",Ci(this,qa)),document.addEventListener("keydown",Ci(this,Ya)))}disconnectedCallback(){this.removeEventListener("click",Ci(this,qa)),document.removeEventListener("keydown",Ci(this,Ya))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e==="open"&&(this.open?(this.addEventListener("click",Ci(this,qa)),document.addEventListener("keydown",Ci(this,Ya))):(this.removeEventListener("click",Ci(this,qa)),document.removeEventListener("keydown",Ci(this,Ya))))}}qa=new WeakMap;Ya=new WeakMap;Zv.getSlotTemplateHTML=Ry;T.customElements.get("media-keyboard-shortcuts-dialog")||T.customElements.define("media-keyboard-shortcuts-dialog",Zv);var Xv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Cy=(t,e,i)=>(Xv(t,e,"read from private field"),e.get(t)),Dy=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},My=(t,e,i,a)=>(Xv(t,e,"write to private field"),e.set(t,i),i),Js;const xy=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Oy=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function Ny(t){return`
    <style>
      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${xy}</slot>
      <slot name="exit">${Oy}</slot>
    </slot>
  `}function Py(){return`
    <slot name="tooltip-enter">${D("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${D("Exit fullscreen mode")}</slot>
  `}const pm=t=>{const e=t.mediaIsFullscreen?D("exit fullscreen mode"):D("enter fullscreen mode");t.setAttribute("aria-label",e)};class _c extends Pe{constructor(){super(...arguments),Dy(this,Js,null)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_FULLSCREEN,h.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),pm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_FULLSCREEN&&pm(this)}get mediaFullscreenUnavailable(){return ce(this,h.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){le(this,h.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return G(this,h.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){z(this,h.MEDIA_IS_FULLSCREEN,e)}handleClick(e){My(this,Js,e);const i=Cy(this,Js)instanceof PointerEvent,a=this.mediaIsFullscreen?new T.CustomEvent(x.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new T.CustomEvent(x.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}}Js=new WeakMap;_c.getSlotTemplateHTML=Ny;_c.getTooltipContentHTML=Py;T.customElements.get("media-fullscreen-button")||T.customElements.define("media-fullscreen-button",_c);const{MEDIA_TIME_IS_LIVE:eo,MEDIA_PAUSED:Cn}=h,{MEDIA_SEEK_TO_LIVE_REQUEST:Uy,MEDIA_PLAY_REQUEST:$y}=x,Hy='<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>';function By(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${eo}]:not([${Cn}])) slot[name=indicator] > *,
      :host([${eo}]:not([${Cn}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${eo}]:not([${Cn}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${Hy}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${D("live")}</slot>
  `}const vm=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=D(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const r=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');r&&(r.textContent=D("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class Jv extends Pe{static get observedAttributes(){return[...super.observedAttributes,eo,Cn]}connectedCallback(){super.connectedCallback(),vm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),vm(this)}get mediaPaused(){return G(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return G(this,h.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){z(this,h.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new T.CustomEvent(Uy,{composed:!0,bubbles:!0})),this.hasAttribute(Cn)&&this.dispatchEvent(new T.CustomEvent($y,{composed:!0,bubbles:!0})))}}Jv.getSlotTemplateHTML=By;T.customElements.get("media-live-button")||T.customElements.define("media-live-button",Jv);var ef=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Vr=(t,e,i)=>(ef(t,e,"read from private field"),i?i.call(t):e.get(t)),fm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qr=(t,e,i,a)=>(ef(t,e,"write to private field"),e.set(t,i),i),zt,to;const fs={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},tf=500,Wy=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function Fy(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${tf}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${Wy}</slot>
    <div id="status" role="status" aria-live="polite">${D("media loading")}</div>
  `}class bc extends T.HTMLElement{constructor(){if(super(),fm(this,zt,void 0),fm(this,to,tf),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=lt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[X.MEDIA_CONTROLLER,h.MEDIA_PAUSED,h.MEDIA_LOADING,fs.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===fs.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===X.MEDIA_CONTROLLER&&(i&&((n=(r=Vr(this,zt))==null?void 0:r.unassociateElement)==null||n.call(r,this),qr(this,zt,null)),a&&this.isConnected&&(qr(this,zt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Vr(this,zt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(X.MEDIA_CONTROLLER);r&&(qr(this,zt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Vr(this,zt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Vr(this,zt))==null?void 0:e.unassociateElement)==null||i.call(e,this),qr(this,zt,null)}get loadingDelay(){return Vr(this,to)}set loadingDelay(e){qr(this,to,e);const{style:i}=Le(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return G(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return G(this,h.MEDIA_LOADING)}set mediaLoading(e){z(this,h.MEDIA_LOADING,e)}get mediaController(){return ce(this,X.MEDIA_CONTROLLER)}set mediaController(e){le(this,X.MEDIA_CONTROLLER,e)}get noAutohide(){return G(this,fs.NO_AUTOHIDE)}set noAutohide(e){z(this,fs.NO_AUTOHIDE,e)}}zt=new WeakMap;to=new WeakMap;bc.shadowRootOptions={mode:"open"};bc.getTemplateHTML=Fy;T.customElements.get("media-loading-indicator")||T.customElements.define("media-loading-indicator",bc);const Ky=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Em=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Vy=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function qy(t){return`
    <style>
      :host(:not([${h.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${h.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${Ky}</slot>
      <slot name="low">${Em}</slot>
      <slot name="medium">${Em}</slot>
      <slot name="high">${Vy}</slot>
    </slot>
  `}function Yy(){return`
    <slot name="tooltip-mute">${D("Mute")}</slot>
    <slot name="tooltip-unmute">${D("Unmute")}</slot>
  `}const _m=t=>{const e=t.mediaVolumeLevel==="off",i=D(e?"unmute":"mute");t.setAttribute("aria-label",i)};class gc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),_m(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_VOLUME_LEVEL&&_m(this)}get mediaVolumeLevel(){return ce(this,h.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){le(this,h.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?x.MEDIA_UNMUTE_REQUEST:x.MEDIA_MUTE_REQUEST;this.dispatchEvent(new T.CustomEvent(e,{composed:!0,bubbles:!0}))}}gc.getSlotTemplateHTML=qy;gc.getTooltipContentHTML=Yy;T.customElements.get("media-mute-button")||T.customElements.define("media-mute-button",gc);const bm=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function Gy(t){return`
    <style>
      :host([${h.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${bm}</slot>
      <slot name="exit">${bm}</slot>
    </slot>
  `}function zy(){return`
    <slot name="tooltip-enter">${D("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${D("Exit picture in picture mode")}</slot>
  `}const gm=t=>{const e=t.mediaIsPip?D("exit picture in picture mode"):D("enter picture in picture mode");t.setAttribute("aria-label",e)};class yc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_PIP,h.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),gm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_PIP&&gm(this)}get mediaPipUnavailable(){return ce(this,h.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){le(this,h.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return G(this,h.MEDIA_IS_PIP)}set mediaIsPip(e){z(this,h.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?x.MEDIA_EXIT_PIP_REQUEST:x.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new T.CustomEvent(e,{composed:!0,bubbles:!0}))}}yc.getSlotTemplateHTML=Gy;yc.getTooltipContentHTML=zy;T.customElements.get("media-pip-button")||T.customElements.define("media-pip-button",yc);var Qy=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Oa=(t,e,i)=>(Qy(t,e,"read from private field"),i?i.call(t):e.get(t)),jy=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ni;const ed={RATES:"rates"},af=[1,1.2,1.5,1.7,2],cr=1;function Zi(t){return Math.round(t*100)/100}function Zy(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?Zi(+t.mediaplaybackrate):cr}x</slot>
  `}function Xy(){return D("Playback rate")}class Tc extends Pe{constructor(){var e;super(),jy(this,Ni,new ac(this,ed.RATES,{defaultValue:af})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Zi((e=this.mediaPlaybackRate)!=null?e:cr)}x`}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,ed.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===ed.RATES&&(Oa(this,Ni).value=a),e===h.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Zi(Number.isNaN(r)?cr:r);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return Oa(this,Ni)}set rates(e){e?Array.isArray(e)?Oa(this,Ni).value=e.join(" "):typeof e=="string"&&(Oa(this,Ni).value=e):Oa(this,Ni).value=""}get mediaPlaybackRate(){return ne(this,h.MEDIA_PLAYBACK_RATE,cr)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(Oa(this,Ni).values(),s=>+s).sort((s,o)=>s-o),r=(i=(e=a.find(s=>s>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:cr,n=new T.CustomEvent(x.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}Ni=new WeakMap;Tc.getSlotTemplateHTML=Zy;Tc.getTooltipContentHTML=Xy;T.customElements.get("media-playback-rate-button")||T.customElements.define("media-playback-rate-button",Tc);const Jy=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,eT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function tT(t){return`
    <style>
      :host([${h.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${h.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${Jy}</slot>
      <slot name="pause">${eT}</slot>
    </slot>
  `}function iT(){return`
    <slot name="tooltip-play">${D("Play")}</slot>
    <slot name="tooltip-pause">${D("Pause")}</slot>
  `}const ym=t=>{const e=t.mediaPaused?D("play"):D("pause");t.setAttribute("aria-label",e)};class Ac extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),ym(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===h.MEDIA_PAUSED||e===h.MEDIA_LANG)&&ym(this)}get mediaPaused(){return G(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?x.MEDIA_PLAY_REQUEST:x.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new T.CustomEvent(e,{composed:!0,bubbles:!0}))}}Ac.getSlotTemplateHTML=tT;Ac.getTooltipContentHTML=iT;T.customElements.get("media-play-button")||T.customElements.define("media-play-button",Ac);const $t={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function aT(t){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}const rT=t=>{t.style.removeProperty("background-image")},nT=(t,e)=>{t.style["background-image"]=`url('${e}')`};class kc extends T.HTMLElement{static get observedAttributes(){return[$t.PLACEHOLDER_SRC,$t.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=lt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===$t.SRC&&(a==null?this.image.removeAttribute($t.SRC):this.image.setAttribute($t.SRC,a)),e===$t.PLACEHOLDER_SRC&&(a==null?rT(this.image):nT(this.image,a))}get placeholderSrc(){return ce(this,$t.PLACEHOLDER_SRC)}set placeholderSrc(e){le(this,$t.SRC,e)}get src(){return ce(this,$t.SRC)}set src(e){le(this,$t.SRC,e)}}kc.shadowRootOptions={mode:"open"};kc.getTemplateHTML=aT;T.customElements.get("media-poster-image")||T.customElements.define("media-poster-image",kc);var rf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},sT=(t,e,i)=>(rf(t,e,"read from private field"),i?i.call(t):e.get(t)),oT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},lT=(t,e,i,a)=>(rf(t,e,"write to private field"),e.set(t,i),i),io;class dT extends Xi{constructor(){super(),oT(this,io,void 0),lT(this,io,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===h.MEDIA_PREVIEW_CHAPTER||e===h.MEDIA_LANG)&&a!==i&&a!=null)if(sT(this,io).textContent=a,a!==""){const r=D("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return ce(this,h.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){le(this,h.MEDIA_PREVIEW_CHAPTER,e)}}io=new WeakMap;T.customElements.get("media-preview-chapter-display")||T.customElements.define("media-preview-chapter-display",dT);var nf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Es=(t,e,i)=>(nf(t,e,"read from private field"),i?i.call(t):e.get(t)),uT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_s=(t,e,i,a)=>(nf(t,e,"write to private field"),e.set(t,i),i),Qt;function cT(t){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}class Ol extends T.HTMLElement{constructor(){if(super(),uT(this,Qt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=lt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[X.MEDIA_CONTROLLER,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const r=this.getAttribute(X.MEDIA_CONTROLLER);r&&(_s(this,Qt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Es(this,Qt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Es(this,Qt))==null?void 0:e.unassociateElement)==null||i.call(e,this),_s(this,Qt,null)}attributeChangedCallback(e,i,a){var r,n,s,o,l;[h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===X.MEDIA_CONTROLLER&&(i&&((n=(r=Es(this,Qt))==null?void 0:r.unassociateElement)==null||n.call(r,this),_s(this,Qt,null)),a&&this.isConnected&&(_s(this,Qt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Es(this,Qt))==null?void 0:o.associateElement)==null||l.call(o,this)))}get mediaPreviewImage(){return ce(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){le(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(h.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(h.MEDIA_PREVIEW_COORDS);return}this.setAttribute(h.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,r,n,s]=e,o=i.split("#")[0],l=getComputedStyle(this),{maxWidth:u,maxHeight:p,minWidth:m,minHeight:c}=l,d=l.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain";let v,f;if(d==="fill"){const C=parseInt(u)/n,I=parseInt(p)/s,H=parseInt(m)/n,q=parseInt(c)/s;v=C<1?C:Math.max(C,H),f=I<1?I:Math.max(I,q)}else{const C=Math.min(parseInt(u)/n,parseInt(p)/s),I=Math.max(parseInt(m)/n,parseInt(c)/s),q=C<1?C:I>1?I:1;v=q,f=q}const{style:b}=Le(this.shadowRoot,":host"),g=Le(this.shadowRoot,"img").style,y=this.shadowRoot.querySelector("img"),S=Math.min(v,f)<1?"min":"max";b.setProperty(`${S}-width`,"initial","important"),b.setProperty(`${S}-height`,"initial","important"),b.width=`${n*v}px`,b.height=`${s*f}px`;const M=()=>{g.width=`${this.imgWidth*v}px`,g.height=`${this.imgHeight*f}px`,g.display="block"};y.src!==o&&(y.onload=()=>{this.imgWidth=y.naturalWidth,this.imgHeight=y.naturalHeight,M(),y.onload=null},y.src=o,M()),M(),g.transform=`translate(-${a*v}px, -${r*f}px)`}}Qt=new WeakMap;Ol.shadowRootOptions={mode:"open"};Ol.getTemplateHTML=cT;T.customElements.get("media-preview-thumbnail")||T.customElements.define("media-preview-thumbnail",Ol);var Tm=Ol,sf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Am=(t,e,i)=>(sf(t,e,"read from private field"),i?i.call(t):e.get(t)),hT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},mT=(t,e,i,a)=>(sf(t,e,"write to private field"),e.set(t,i),i),hn;class pT extends Xi{constructor(){super(),hT(this,hn,void 0),mT(this,hn,this.shadowRoot.querySelector("slot")),Am(this,hn).textContent=ji(0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_PREVIEW_TIME&&a!=null&&(Am(this,hn).textContent=ji(parseFloat(a)))}get mediaPreviewTime(){return ne(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ve(this,h.MEDIA_PREVIEW_TIME,e)}}hn=new WeakMap;T.customElements.get("media-preview-time-display")||T.customElements.define("media-preview-time-display",pT);const Na={SEEK_OFFSET:"seekoffset"},td=30,vT=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function fT(t,e){return`
    <slot name="icon">${vT(e.seekOffset)}</slot>
  `}const ET=(t,e)=>{t.setAttribute("aria-label",D("seek back {seekOffset} seconds",{seekOffset:e}))};function _T(){return D("Seek backward")}const bT=0;class Sc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,Na.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=ne(this,Na.SEEK_OFFSET,td)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),ET(this,this.seekOffset),e===Na.SEEK_OFFSET&&(this.seekOffset=ne(this,Na.SEEK_OFFSET,td))}get seekOffset(){return ne(this,Na.SEEK_OFFSET,td)}set seekOffset(e){ve(this,Na.SEEK_OFFSET,e),this.setAttribute("aria-label",D("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),mv(pv(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ne(this,h.MEDIA_CURRENT_TIME,bT)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new T.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Sc.getSlotTemplateHTML=fT;Sc.getTooltipContentHTML=_T;T.customElements.get("media-seek-backward-button")||T.customElements.define("media-seek-backward-button",Sc);const Pa={SEEK_OFFSET:"seekoffset"},id=30,gT=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function yT(t,e){return`
    <slot name="icon">${gT(e.seekOffset)}</slot>
  `}const TT=(t,e)=>{t.setAttribute("aria-label",D("seek forward {seekOffset} seconds",{seekOffset:e}))};function AT(){return D("Seek forward")}const kT=0;class wc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,Pa.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=ne(this,Pa.SEEK_OFFSET,id)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),TT(this,this.seekOffset),e===Pa.SEEK_OFFSET&&(this.seekOffset=ne(this,Pa.SEEK_OFFSET,id))}get seekOffset(){return ne(this,Pa.SEEK_OFFSET,id)}set seekOffset(e){ve(this,Pa.SEEK_OFFSET,e),this.setAttribute("aria-label",D("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),mv(pv(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ne(this,h.MEDIA_CURRENT_TIME,kT)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new T.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}wc.getSlotTemplateHTML=yT;wc.getTooltipContentHTML=AT;T.customElements.get("media-seek-forward-button")||T.customElements.define("media-seek-forward-button",wc);var Ic=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ot=(t,e,i)=>(Ic(t,e,"read from private field"),i?i.call(t):e.get(t)),ra=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Rc=(t,e,i,a)=>(Ic(t,e,"write to private field"),e.set(t,i),i),Wi=(t,e,i)=>(Ic(t,e,"access private method"),i),Ga,si,Nl,Lc,of,Qo,Cc,mn,ao,ro,jd;const Pi={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},km=[...Object.values(Pi),h.MEDIA_CURRENT_TIME,h.MEDIA_DURATION,h.MEDIA_SEEKABLE],lf=["Enter"," "],ST="&nbsp;/&nbsp;",Zd=(t,{timesSep:e=ST}={})=>{var i,a;const r=(i=t.mediaCurrentTime)!=null?i:0,[,n]=(a=t.mediaSeekable)!=null?a:[];let s=0;Number.isFinite(t.mediaDuration)?s=t.mediaDuration:Number.isFinite(n)&&(s=n);const o=t.remaining?ji(0-(s-r)):ji(r);return t.showDuration?`${o}${e}${ji(s)}`:o},wT=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-description",D("video not loaded, unknown time."));return}const n=t.remaining?Rn(0-(r-i)):Rn(i);if(!t.showDuration){t.setAttribute("aria-description",n);return}const s=Rn(r),o=D("{currentTime} of {totalTime}",{currentTime:n,totalTime:s});t.setAttribute("aria-description",o)};function IT(t,e){return`
    <slot>${Zd(e)}</slot>
  `}const RT=t=>{t.setAttribute("aria-label",D("playback time"))};class df extends Xi{constructor(){super(),ra(this,Lc),ra(this,Qo),ra(this,mn),ra(this,ro),ra(this,Ga,void 0),ra(this,si,null),ra(this,Nl,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!lf.includes(r)){this.removeEventListener("keyup",Ot(this,si));return}this.addEventListener("keyup",Ot(this,si))}),Rc(this,Ga,this.shadowRoot.querySelector("slot")),Ot(this,Ga).innerHTML=`${Zd(this)}`}static get observedAttributes(){return[...super.observedAttributes,...km,"disabled"]}connectedCallback(){const{style:e}=Le(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",D("playback time")),Wi(this,mn,ao).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),Wi(this,Qo,Cc).call(this),super.disconnectedCallback()}attributeChangedCallback(e,i,a){RT(this),km.includes(e)?this.update():e==="disabled"&&a!==i?a==null?Wi(this,mn,ao).call(this):Wi(this,ro,jd).call(this):e===Pi.NO_TOGGLE&&a!==i&&(this.noToggle?Wi(this,ro,jd).call(this):Wi(this,mn,ao).call(this)),super.attributeChangedCallback(e,i,a)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return G(this,Pi.REMAINING)}set remaining(e){z(this,Pi.REMAINING,e)}get showDuration(){return G(this,Pi.SHOW_DURATION)}set showDuration(e){z(this,Pi.SHOW_DURATION,e)}get noToggle(){return G(this,Pi.NO_TOGGLE)}set noToggle(e){z(this,Pi.NO_TOGGLE,e)}get mediaDuration(){return ne(this,h.MEDIA_DURATION)}set mediaDuration(e){ve(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return ne(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(h.MEDIA_SEEKABLE);return}this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}update(){const e=Zd(this);wT(this),e!==Ot(this,Ga).innerHTML&&(Ot(this,Ga).innerHTML=e)}}Ga=new WeakMap;si=new WeakMap;Nl=new WeakMap;Lc=new WeakSet;of=function(){Ot(this,si)||(Rc(this,si,t=>{const{key:e}=t;if(!lf.includes(e)){this.removeEventListener("keyup",Ot(this,si));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",Ot(this,Nl)),this.addEventListener("click",this.toggleTimeDisplay))};Qo=new WeakSet;Cc=function(){Ot(this,si)&&(this.removeEventListener("keyup",Ot(this,si)),this.removeEventListener("keydown",Ot(this,Nl)),this.removeEventListener("click",this.toggleTimeDisplay),Rc(this,si,null))};mn=new WeakSet;ao=function(){!this.noToggle&&!this.hasAttribute("disabled")&&(this.setAttribute("role","button"),this.enable(),Wi(this,Lc,of).call(this))};ro=new WeakSet;jd=function(){this.removeAttribute("role"),this.disable(),Wi(this,Qo,Cc).call(this)};df.getSlotTemplateHTML=IT;T.customElements.get("media-time-display")||T.customElements.define("media-time-display",df);var uf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},xe=(t,e,i)=>(uf(t,e,"read from private field"),e.get(t)),Ht=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ot=(t,e,i,a)=>(uf(t,e,"write to private field"),e.set(t,i),i),LT=(t,e,i,a)=>({set _(r){ot(t,e,r)},get _(){return xe(t,e)}}),za,no,Qa,pn,so,oo,lo,ja,ua,uo;class CT{constructor(e,i,a){Ht(this,za,void 0),Ht(this,no,void 0),Ht(this,Qa,void 0),Ht(this,pn,void 0),Ht(this,so,void 0),Ht(this,oo,void 0),Ht(this,lo,void 0),Ht(this,ja,void 0),Ht(this,ua,0),Ht(this,uo,(r=performance.now())=>{ot(this,ua,requestAnimationFrame(xe(this,uo))),ot(this,pn,performance.now()-xe(this,Qa));const n=1e3/this.fps;if(xe(this,pn)>n){ot(this,Qa,r-xe(this,pn)%n);const s=1e3/((r-xe(this,no))/++LT(this,so)._),o=(r-xe(this,oo))/1e3/this.duration;let l=xe(this,lo)+o*this.playbackRate;l-xe(this,za).valueAsNumber>0?ot(this,ja,this.playbackRate/this.duration/s):(ot(this,ja,.995*xe(this,ja)),l=xe(this,za).valueAsNumber+xe(this,ja)),this.callback(l)}}),ot(this,za,e),this.callback=i,this.fps=a}start(){xe(this,ua)===0&&(ot(this,Qa,performance.now()),ot(this,no,xe(this,Qa)),ot(this,so,0),xe(this,uo).call(this))}stop(){xe(this,ua)!==0&&(cancelAnimationFrame(xe(this,ua)),ot(this,ua,0))}update({start:e,duration:i,playbackRate:a}){const r=e-xe(this,za).valueAsNumber,n=Math.abs(i-this.duration);(r>0||r<-.03||n>=.5)&&this.callback(e),ot(this,lo,e),ot(this,oo,performance.now()),this.duration=i,this.playbackRate=a}}za=new WeakMap;no=new WeakMap;Qa=new WeakMap;pn=new WeakMap;so=new WeakMap;oo=new WeakMap;lo=new WeakMap;ja=new WeakMap;ua=new WeakMap;uo=new WeakMap;var Dc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ue=(t,e,i)=>(Dc(t,e,"read from private field"),i?i.call(t):e.get(t)),Ie=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},pt=(t,e,i,a)=>(Dc(t,e,"write to private field"),e.set(t,i),i),Et=(t,e,i)=>(Dc(t,e,"access private method"),i),Za,Fi,jo,Dn,Zo,co,zn,Qn,Xa,Ja,vn,Xd,cf,Jd,Xo,Mc,Jo,xc,el,Oc,eu,hf,jn,tl,tu,mf;const DT=t=>{const e=t.range,i=Rn(+pf(t)),a=Rn(+t.mediaSeekableEnd),r=i&&a?D("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):D("video not loaded, unknown time.");e.setAttribute("aria-valuetext",r)};function MT(t){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${Tm.shadowRootOptions.mode}">
            ${Tm.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}const bs=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},pf=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};class Nc extends Or{constructor(){super(),Ie(this,Xd),Ie(this,Xo),Ie(this,Jo),Ie(this,el),Ie(this,eu),Ie(this,jn),Ie(this,tu),Ie(this,Za,null),Ie(this,Fi,void 0),Ie(this,jo,void 0),Ie(this,Dn,void 0),Ie(this,Zo,void 0),Ie(this,co,void 0),Ie(this,zn,void 0),Ie(this,Qn,void 0),Ie(this,Xa,void 0),Ie(this,Ja,void 0),Ie(this,vn,()=>{Et(this,Xd,cf).call(this)?ue(this,Fi).start():ue(this,Fi).stop()}),Ie(this,Jd,a=>{this.dragging||(Zu(a)&&(this.range.valueAsNumber=a),ue(this,Ja)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),pt(this,jo,this.shadowRoot.querySelectorAll('[part~="box"]')),pt(this,Zo,this.shadowRoot.querySelector('[part~="preview-box"]')),pt(this,co,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);pt(this,zn,parseInt(i.getPropertyValue("--media-box-padding-left"))),pt(this,Qn,parseInt(i.getPropertyValue("--media-box-padding-right"))),pt(this,Fi,new CT(this.range,ue(this,Jd),60))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_DURATION,h.MEDIA_SEEKABLE,h.MEDIA_CURRENT_TIME,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_TIME,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_BUFFERED,h.MEDIA_PLAYBACK_RATE,h.MEDIA_LOADING,h.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",D("seek")),ue(this,vn).call(this),pt(this,Za,this.getRootNode()),(e=ue(this,Za))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),ue(this,Fi).stop(),(e=ue(this,Za))==null||e.removeEventListener("transitionstart",this),pt(this,Za,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===h.MEDIA_CURRENT_TIME||e===h.MEDIA_PAUSED||e===h.MEDIA_ENDED||e===h.MEDIA_LOADING||e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE?(ue(this,Fi).update({start:bs(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),ue(this,vn).call(this),DT(this)):e===h.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=ue(this,Xa),this.updateBar()))}get mediaChaptersCues(){return ue(this,Xa)}set mediaChaptersCues(e){var i;pt(this,Xa,e),this.updateSegments((i=ue(this,Xa))==null?void 0:i.map(a=>({start:bs(this,a.startTime),end:bs(this,a.endTime)})))}get mediaPaused(){return G(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return G(this,h.MEDIA_LOADING)}set mediaLoading(e){z(this,h.MEDIA_LOADING,e)}get mediaDuration(){return ne(this,h.MEDIA_DURATION)}set mediaDuration(e){ve(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return ne(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return ne(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(h.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(h.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(h.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(h.MEDIA_SEEKABLE);return}this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return ce(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){le(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return ne(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ve(this,h.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return G(this,h.MEDIA_ENDED)}set mediaEnded(e){z(this,h.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=(e=i.find(([o,l])=>o<=n&&n<=l))!=null?e:[];a=bs(this,s)}const{style:r}=Le(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=Le(this.shadowRoot,"#current-rail"),a=Le(this.shadowRoot,'[part~="current-box"]'),r=Et(this,Xo,Mc).call(this,ue(this,co)),n=Et(this,Jo,xc).call(this,r,this.range.valueAsNumber),s=Et(this,el,Oc).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${s}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":Et(this,tu,mf).call(this);break;case"pointermove":Et(this,eu,hf).call(this,e);break;case"pointerup":ue(this,Ja)&&pt(this,Ja,!1);break;case"pointerdown":pt(this,Ja,!0);break;case"pointerleave":Et(this,jn,tl).call(this,null);break;case"transitionstart":Ri(e.target,this)&&setTimeout(()=>ue(this,vn).call(this),0);break}}}Za=new WeakMap;Fi=new WeakMap;jo=new WeakMap;Dn=new WeakMap;Zo=new WeakMap;co=new WeakMap;zn=new WeakMap;Qn=new WeakMap;Xa=new WeakMap;Ja=new WeakMap;vn=new WeakMap;Xd=new WeakSet;cf=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&vv(this)};Jd=new WeakMap;Xo=new WeakSet;Mc=function(t){var e;const a=((e=this.getAttribute("bounds")?Mr(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=t.offsetWidth,s=-(r.left-a.left-n/2),o=a.right-r.left-n/2;return{box:{width:n,min:s,max:o},bounds:a,range:r}};Jo=new WeakSet;xc=function(t,e){let i=`${e*100}%`;const{width:a,min:r,max:n}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const o=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${o})`}return i};el=new WeakSet;Oc=function(t,e){const{width:i,min:a,max:r}=t.box,n=e*t.range.width;if(n<a+ue(this,zn)){const s=t.range.left-t.bounds.left-ue(this,zn);return`${n-i/2+s}px`}if(n>r-ue(this,Qn)){const s=t.bounds.right-t.range.right-ue(this,Qn);return`${n+i/2-s-t.range.width}px`}return 0};eu=new WeakSet;hf=function(t){const e=[...ue(this,jo)].some(p=>t.composedPath().includes(p));if(!this.dragging&&(e||!t.composedPath().includes(this))){Et(this,jn,tl).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=Le(this.shadowRoot,"#preview-rail"),r=Le(this.shadowRoot,'[part~="preview-box"]'),n=Et(this,Xo,Mc).call(this,ue(this,Zo));let s=(t.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const o=Et(this,Jo,xc).call(this,n,s),l=Et(this,el,Oc).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const u=Math.round(ue(this,Dn))-Math.round(s*i);Math.abs(u)<1&&s>.01&&s<.99||(pt(this,Dn,s*i),Et(this,jn,tl).call(this,ue(this,Dn)))};jn=new WeakSet;tl=function(t){this.dispatchEvent(new T.CustomEvent(x.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};tu=new WeakSet;mf=function(){ue(this,Fi).stop();const t=pf(this);this.dispatchEvent(new T.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Nc.shadowRootOptions={mode:"open"};Nc.getContainerTemplateHTML=MT;T.customElements.get("media-time-range")||T.customElements.define("media-time-range",Nc);var xT=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Sm=(t,e,i)=>(xT(t,e,"read from private field"),i?i.call(t):e.get(t)),OT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ho;const NT=1,PT=t=>t.mediaMuted?0:t.mediaVolume,UT=t=>`${Math.round(t*100)}%`;class $T extends Or{constructor(){super(...arguments),OT(this,ho,()=>{const e=this.range.value,i=new T.CustomEvent(x.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME,h.MEDIA_MUTED,h.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",D("volume")),this.range.addEventListener("input",Sm(this,ho))}disconnectedCallback(){this.range.removeEventListener("input",Sm(this,ho)),super.disconnectedCallback()}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===h.MEDIA_VOLUME||e===h.MEDIA_MUTED)&&(this.range.valueAsNumber=PT(this),this.range.setAttribute("aria-valuetext",UT(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return ne(this,h.MEDIA_VOLUME,NT)}set mediaVolume(e){ve(this,h.MEDIA_VOLUME,e)}get mediaMuted(){return G(this,h.MEDIA_MUTED)}set mediaMuted(e){z(this,h.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return ce(this,h.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){le(this,h.MEDIA_VOLUME_UNAVAILABLE,e)}}ho=new WeakMap;T.customElements.get("media-volume-range")||T.customElements.define("media-volume-range",$T);function HT(t){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${h.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function BT(){return D("Loop")}class Pc extends Pe{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=D("Loop"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return G(this,h.MEDIA_LOOP)}set mediaLoop(e){z(this,h.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,i=new T.CustomEvent(x.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Pc.getSlotTemplateHTML=HT;Pc.getTooltipContentHTML=BT;T.customElements.get("media-loop-button")||T.customElements.define("media-loop-button",Pc);var vf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},V=(t,e,i)=>(vf(t,e,"read from private field"),i?i.call(t):e.get(t)),ei=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ti=(t,e,i,a)=>(vf(t,e,"write to private field"),e.set(t,i),i),er,mo,ca,fn,Ui,$i,Hi,ha,tr,po,Rt;const wm=1,Im=0,WT=1,FT={processCallback(t,e,i){if(i){for(const[a,r]of e)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof Pt&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof Pt?r.element[r.attributeName]=n:r.value=n}}}};class Pl extends T.DocumentFragment{constructor(e,i,a=FT){var r;super(),ei(this,er,void 0),ei(this,mo,void 0),this.append(e.content.cloneNode(!0)),Ti(this,er,ff(this)),Ti(this,mo,a),(r=a.createCallback)==null||r.call(a,this,V(this,er),i),a.processCallback(this,V(this,er),i)}update(e){V(this,mo).processCallback(this,V(this,er),e)}}er=new WeakMap;mo=new WeakMap;const ff=(t,e=[])=>{let i,a;for(const r of t.attributes||[])if(r.value.includes("{{")){const n=new VT;for([i,a]of Lm(r.value))if(!i)n.append(a);else{const s=new Pt(t,r.name,r.namespaceURI);n.append(s),e.push([a,s])}r.value=n.toString()}for(const r of t.childNodes)if(r.nodeType===wm&&!(r instanceof HTMLTemplateElement))ff(r,e);else{const n=r.data;if(r.nodeType===wm||n.includes("{{")){const s=[];if(n)for([i,a]of Lm(n))if(!i)s.push(new Text(a));else{const o=new Nr(t);s.push(o),e.push([a,o])}else if(r instanceof HTMLTemplateElement){const o=new bf(t,r);s.push(o),e.push([o.expression,o])}r.replaceWith(...s.flatMap(o=>o.replacementNodes||[o]))}}return e},Rm={},Lm=t=>{let e="",i=0,a=Rm[t],r=0,n;if(a)return a;for(a=[];n=t[r];r++)n==="{"&&t[r+1]==="{"&&t[r-1]!=="\\"&&t[r+2]&&++i==1?(e&&a.push([Im,e]),e="",r++):n==="}"&&t[r+1]==="}"&&t[r-1]!=="\\"&&!--i?(a.push([WT,e.trim()]),e="",r++):e+=n||"";return e&&a.push([Im,(i>0?"{{":"")+e]),Rm[t]=a},KT=11;class Ef{get value(){return""}set value(e){}toString(){return this.value}}const _f=new WeakMap;class VT{constructor(){ei(this,ca,[])}[Symbol.iterator](){return V(this,ca).values()}get length(){return V(this,ca).length}item(e){return V(this,ca)[e]}append(...e){for(const i of e)i instanceof Pt&&_f.set(i,this),V(this,ca).push(i)}toString(){return V(this,ca).join("")}}ca=new WeakMap;class Pt extends Ef{constructor(e,i,a){super(),ei(this,ha),ei(this,fn,""),ei(this,Ui,void 0),ei(this,$i,void 0),ei(this,Hi,void 0),Ti(this,Ui,e),Ti(this,$i,i),Ti(this,Hi,a)}get attributeName(){return V(this,$i)}get attributeNamespace(){return V(this,Hi)}get element(){return V(this,Ui)}get value(){return V(this,fn)}set value(e){V(this,fn)!==e&&(Ti(this,fn,e),!V(this,ha,tr)||V(this,ha,tr).length===1?e==null?V(this,Ui).removeAttributeNS(V(this,Hi),V(this,$i)):V(this,Ui).setAttributeNS(V(this,Hi),V(this,$i),e):V(this,Ui).setAttributeNS(V(this,Hi),V(this,$i),V(this,ha,tr).toString()))}get booleanValue(){return V(this,Ui).hasAttributeNS(V(this,Hi),V(this,$i))}set booleanValue(e){if(!V(this,ha,tr)||V(this,ha,tr).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}}fn=new WeakMap;Ui=new WeakMap;$i=new WeakMap;Hi=new WeakMap;ha=new WeakSet;tr=function(){return _f.get(this)};class Nr extends Ef{constructor(e,i){super(),ei(this,po,void 0),ei(this,Rt,void 0),Ti(this,po,e),Ti(this,Rt,i?[...i]:[new Text])}get replacementNodes(){return V(this,Rt)}get parentNode(){return V(this,po)}get nextSibling(){return V(this,Rt)[V(this,Rt).length-1].nextSibling}get previousSibling(){return V(this,Rt)[0].previousSibling}get value(){return V(this,Rt).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const i=e.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===KT?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);i.length||i.push(new Text),Ti(this,Rt,qT(V(this,Rt)[0].parentNode,V(this,Rt),i,this.nextSibling))}}po=new WeakMap;Rt=new WeakMap;class bf extends Nr{constructor(e,i){const a=i.getAttribute("directive")||i.getAttribute("type");let r=i.getAttribute("expression")||i.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(e),this.expression=r,this.template=i,this.directive=a}}function qT(t,e,i,a=null){let r=0,n,s,o,l=i.length,u=e.length;for(;r<l&&r<u&&e[r]==i[r];)r++;for(;r<l&&r<u&&i[l-1]==e[u-1];)a=i[--u,--l];if(r==u)for(;r<l;)t.insertBefore(i[r++],a);if(r==l)for(;r<u;)t.removeChild(e[r++]);else{for(n=e[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(t.replaceChild(o,n),n=s):t.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,t.removeChild(n),n=s}return i}const Cm={string:t=>String(t)};class gf{constructor(e){this.template=e,this.state=void 0}}const ba=new WeakMap,ga=new WeakMap,iu={partial:(t,e)=>{e[t.expression]=new gf(t.template)},if:(t,e)=>{var i;if(yf(t.expression,e))if(ba.get(t)!==t.template){ba.set(t,t.template);const a=new Pl(t.template,e,Uc);t.replace(a),ga.set(t,a)}else(i=ga.get(t))==null||i.update(e);else t.replace(""),ba.delete(t),ga.delete(t)}},YT=Object.keys(iu),Uc={processCallback(t,e,i){var a,r;if(i)for(const[n,s]of e){if(s instanceof bf){if(!s.directive){const l=YT.find(u=>s.template.hasAttribute(u));l&&(s.directive=l,s.expression=s.template.getAttribute(l))}(a=iu[s.directive])==null||a.call(iu,s,i);continue}let o=yf(n,i);if(o instanceof gf){ba.get(s)!==o.template?(ba.set(s,o.template),o=new Pl(o.template,o.state,Uc),s.value=o,ga.set(s,o)):(r=ga.get(s))==null||r.update(o.state);continue}o?(s instanceof Pt&&s.attributeName.startsWith("aria-")&&(o=String(o)),s instanceof Pt?typeof o=="boolean"?s.booleanValue=o:typeof o=="function"?s.element[s.attributeName]=o:s.value=o:(s.value=o,ba.delete(s),ga.delete(s))):s instanceof Pt?s.value=void 0:(s.value=void 0,ba.delete(s),ga.delete(s))}}},Dm={"!":t=>!t,"!!":t=>!!t,"==":(t,e)=>t==e,"!=":(t,e)=>t!=e,">":(t,e)=>t>e,">=":(t,e)=>t>=e,"<":(t,e)=>t<e,"<=":(t,e)=>t<=e,"??":(t,e)=>t??e,"|":(t,e)=>{var i;return(i=Cm[e])==null?void 0:i.call(Cm,t)}};function GT(t){return zT(t,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!=="ws")}function yf(t,e={}){var i,a,r,n,s,o,l;const u=GT(t);if(u.length===0||u.some(({type:p})=>!p))return Yr(t);if(((i=u[0])==null?void 0:i.token)===">"){const p=e[(a=u[1])==null?void 0:a.token];if(!p)return Yr(t);const m={...e};p.state=m;const c=u.slice(2);for(let d=0;d<c.length;d+=3){const v=(r=c[d])==null?void 0:r.token,f=(n=c[d+1])==null?void 0:n.token,b=(s=c[d+2])==null?void 0:s.token;v&&f==="="&&(m[v]=Gr(b,e))}return p}if(u.length===1)return gs(u[0])?Gr(u[0].token,e):Yr(t);if(u.length===2){const p=(o=u[0])==null?void 0:o.token,m=Dm[p];if(!m||!gs(u[1]))return Yr(t);const c=Gr(u[1].token,e);return m(c)}if(u.length===3){const p=(l=u[1])==null?void 0:l.token,m=Dm[p];if(!m||!gs(u[0])||!gs(u[2]))return Yr(t);const c=Gr(u[0].token,e);if(p==="|")return m(c,u[2].token);const d=Gr(u[2].token,e);return m(c,d)}}function Yr(t){return console.warn(`Warning: invalid expression \`${t}\``),!1}function gs({type:t}){return["number","boolean","string","param"].includes(t)}function Gr(t,e){const i=t[0],a=t.slice(-1);return t==="true"||t==="false"?t==="true":i===a&&["'",'"'].includes(i)?t.slice(1,-1):nv(t)?parseFloat(t):e[t]}function zT(t,e){let i,a,r;const n=[];for(;t;){r=null,i=t.length;for(const s in e)a=e[s].exec(t),a&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&n.push({token:t.substr(0,i),type:void 0}),r&&n.push(r),t=t.substr(i+(r?r.token.length:0))}return n}var $c=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Bi=(t,e,i)=>($c(t,e,"read from private field"),i?i.call(t):e.get(t)),na=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},yi=(t,e,i,a)=>($c(t,e,"write to private field"),e.set(t,i),i),ad=(t,e,i)=>($c(t,e,"access private method"),i),Er,vo,_r,ir,au,Tf,fo,ru,En;const rd={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},Af=we.createElement("template");Af.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class Ul extends T.HTMLElement{constructor(){super(),na(this,au),na(this,fo),na(this,Er,void 0),na(this,vo,void 0),na(this,_r,void 0),na(this,ir,void 0),na(this,En,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),yi(this,ir,new MutationObserver(e=>{var i;this.mediaController&&!((i=this.mediaController)!=null&&i.breakpointsComputed)||e.some(a=>{const r=a.target;return r===this?!0:r.localName!=="media-controller"?!1:!!(rd[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()})),yi(this,En,this.render.bind(this)),ad(this,au,Tf).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Bi(this,Er))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(yi(this,Er,e),yi(this,_r,null),this.createRenderer())}get props(){var e,i,a;const r=[...Array.from((i=(e=this.mediaController)==null?void 0:e.attributes)!=null?i:[]).filter(({name:s})=>rd[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const o=(a=rd[s.name])!=null?a:Q0(s.name);let{value:l}=s;l!=null?(nv(l)&&(l=parseFloat(l)),n[o]=l===""?!0:l):n[o]=!1}return n}attributeChangedCallback(e,i,a){e==="template"&&i!=a&&ad(this,fo,ru).call(this)}connectedCallback(){this.addEventListener(oi.BREAKPOINTS_COMPUTED,Bi(this,En)),Bi(this,ir).observe(this,{attributes:!0}),Bi(this,ir).observe(this.renderRoot,{attributes:!0,subtree:!0}),ad(this,fo,ru).call(this)}disconnectedCallback(){this.removeEventListener(oi.BREAKPOINTS_COMPUTED,Bi(this,En)),Bi(this,ir).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Bi(this,vo)&&(yi(this,vo,this.template),this.renderer=new Pl(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(Af.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}}Er=new WeakMap;vo=new WeakMap;_r=new WeakMap;ir=new WeakMap;au=new WeakSet;Tf=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}};fo=new WeakSet;ru=function(){var t;const e=this.getAttribute("template");if(!e||e===Bi(this,_r))return;const i=this.getRootNode(),a=(t=i==null?void 0:i.getElementById)==null?void 0:t.call(i,e);if(a){yi(this,_r,e),yi(this,Er,a),this.createRenderer();return}QT(e)&&(yi(this,_r,e),jT(e).then(r=>{const n=we.createElement("template");n.innerHTML=r,yi(this,Er,n),this.createRenderer()}).catch(console.error))};En=new WeakMap;Ul.observedAttributes=["template"];Ul.processor=Uc;function QT(t){if(!/^(\/|\.\/|https?:\/\/)/.test(t))return!1;const e=/^https?:\/\//.test(t)?void 0:location.origin;try{new URL(t,e)}catch{return!1}return!0}async function jT(t){const e=await fetch(t);if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);return e.text()}T.customElements.get("media-theme")||T.customElements.define("media-theme",Ul);function ZT({anchor:t,floating:e,placement:i}){const a=XT({anchor:t,floating:e}),{x:r,y:n}=eA(a,i);return{x:r,y:n}}function XT({anchor:t,floating:e}){return{anchor:JT(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function JT(t,e){var i;const a=t.getBoundingClientRect(),r=(i=e==null?void 0:e.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function eA({anchor:t,floating:e},i){const a=tA(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=kf(i),s=t.x+t.width/2-e.width/2,o=t.y+t.height/2-e.height/2,l=t[r]/2-e[r]/2;let u;switch(n){case"top":u={x:s,y:t.y-e.height};break;case"bottom":u={x:s,y:t.y+t.height};break;case"right":u={x:t.x+t.width,y:o};break;case"left":u={x:t.x-e.width,y:o};break;default:u={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":u[a]-=l;break;case"end":u[a]+=l;break}return u}function kf(t){return t.split("-")[0]}function tA(t){return["top","bottom"].includes(kf(t))?"y":"x"}class Hc extends Event{constructor({action:e="auto",relatedTarget:i,...a}){super("invoke",a),this.action=e,this.relatedTarget=i}}class iA extends Event{constructor({newState:e,oldState:i,...a}){super("toggle",a),this.newState=e,this.oldState=i}}var Bc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Z=(t,e,i)=>(Bc(t,e,"read from private field"),i?i.call(t):e.get(t)),ie=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},vt=(t,e,i,a)=>(Bc(t,e,"write to private field"),e.set(t,i),i),ae=(t,e,i)=>(Bc(t,e,"access private method"),i),jt,Gi,Si,Eo,_n,wa,Zn,nu,Sf,il,Wc,al,_o,su,ou,wf,lu,If,du,Rf,br,gr,yr,Xn,rl,Fc,uu,Lf,Kc,Cf,cu,Df,Vc,Mf,hu,xf,mu,Of,Mn,nl,pu,Nf,xn,sl,bo,vu;function Cr({type:t,text:e,value:i,checked:a}){const r=we.createElement("media-chrome-menu-item");r.type=t,r.part.add("menu-item"),r.part.add(t),r.value=i,r.checked=a;const n=we.createElement("span");return n.textContent=e,r.append(n),r}function Ia(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if((i==null?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return a?a.cloneNode(!0):""}function aA(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}const sa={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class gt extends T.HTMLElement{constructor(){if(super(),ie(this,nu),ie(this,il),ie(this,_o),ie(this,ou),ie(this,lu),ie(this,du),ie(this,yr),ie(this,rl),ie(this,uu),ie(this,Kc),ie(this,cu),ie(this,Vc),ie(this,hu),ie(this,mu),ie(this,Mn),ie(this,pu),ie(this,xn),ie(this,bo),ie(this,jt,null),ie(this,Gi,null),ie(this,Si,null),ie(this,Eo,new Set),ie(this,_n,void 0),ie(this,wa,!1),ie(this,Zn,null),ie(this,al,()=>{const e=Z(this,Eo),i=new Set(this.items);for(const a of e)i.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(const a of i)e.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));vt(this,Eo,i)}),ie(this,br,()=>{ae(this,yr,Xn).call(this),ae(this,rl,Fc).call(this,!1)}),ie(this,gr,()=>{ae(this,yr,Xn).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=lt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),vt(this,_n,new MutationObserver(Z(this,al)))}static get observedAttributes(){return[sa.DISABLED,sa.HIDDEN,sa.STYLE,sa.ANCHOR,X.MEDIA_CONTROLLER]}static formatMenuItemText(e,i){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":ae(this,nu,Sf).call(this,e);break;case"invoke":ae(this,ou,wf).call(this,e);break;case"click":ae(this,uu,Lf).call(this,e);break;case"toggle":ae(this,cu,Df).call(this,e);break;case"focusout":ae(this,hu,xf).call(this,e);break;case"keydown":ae(this,mu,Of).call(this,e);break}}connectedCallback(){var e,i;Z(this,_n).observe(this.defaultSlot,{childList:!0}),vt(this,Zn,ec(this.shadowRoot,":host")),ae(this,_o,su).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),vt(this,jt,Rd(this)),(i=(e=Z(this,jt))==null?void 0:e.associateElement)==null||i.call(e,this),this.hidden||(wr(Jn(this),Z(this,br)),wr(this,Z(this,gr))),ae(this,il,Wc).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,i;Z(this,_n).disconnect(),Ir(Jn(this),Z(this,br)),Ir(this,Z(this,gr)),this.disable(),(i=(e=Z(this,jt))==null?void 0:e.unassociateElement)==null||i.call(e,this),vt(this,jt,null),vt(this,Gi,null),vt(this,Si,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,i,a){var r,n,s,o;e===sa.HIDDEN&&a!==i?(Z(this,wa)||vt(this,wa,!0),this.hidden?ae(this,du,Rf).call(this):ae(this,lu,If).call(this),this.dispatchEvent(new iA({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===X.MEDIA_CONTROLLER?(i&&((n=(r=Z(this,jt))==null?void 0:r.unassociateElement)==null||n.call(r,this),vt(this,jt,null)),a&&this.isConnected&&(vt(this,jt,Rd(this)),(o=(s=Z(this,jt))==null?void 0:s.associateElement)==null||o.call(s,this))):e===sa.DISABLED&&a!==i?a==null?this.enable():this.disable():e===sa.STYLE&&a!==i&&ae(this,_o,su).call(this)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=kl(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(rA)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,i;return(i=(e=this.checkedItems[0])==null?void 0:e.value)!=null?i:""}set value(e){const i=this.items.find(a=>a.value===e);i&&ae(this,bo,vu).call(this,i)}focus(){if(vt(this,Gi,Ju()),this.items.length){ae(this,xn,sl).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e==null||e.focus()}handleSelect(e){var i;const a=ae(this,Mn,nl).call(this,e);a&&(ae(this,bo,vu).call(this,a,a.type==="checkbox"),Z(this,Si)&&!this.hidden&&((i=Z(this,Gi))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var i,a;const{key:r}=e,n=this.items,s=(a=(i=ae(this,Mn,nl).call(this,e))!=null?i:ae(this,pu,Nf).call(this))!=null?a:n[0],o=n.indexOf(s);let l=Math.max(0,o);r==="ArrowDown"?l++:r==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=n.length-1),l<0&&(l=n.length-1),l>n.length-1&&(l=0),ae(this,xn,sl).call(this,n[l]),n[l].focus()}}jt=new WeakMap;Gi=new WeakMap;Si=new WeakMap;Eo=new WeakMap;_n=new WeakMap;wa=new WeakMap;Zn=new WeakMap;nu=new WeakSet;Sf=function(t){const e=t.target;for(const i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(e.name)&&ae(this,il,Wc).call(this),e.name||Z(this,al).call(this)};il=new WeakSet;Wc=function(){const t=this.shadowRoot.querySelector('slot[name="header"]'),e=this.shadowRoot.querySelector('slot[name="title"]');t.hidden=e.assignedNodes().length===0&&t.assignedNodes().length===0};al=new WeakMap;_o=new WeakSet;su=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};ou=new WeakSet;wf=function(t){vt(this,Si,t.relatedTarget),Ri(this,t.relatedTarget)||(this.hidden=!this.hidden)};lu=new WeakSet;If=function(){var t;(t=Z(this,Si))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),wr(Jn(this),Z(this,br)),wr(this,Z(this,gr))};du=new WeakSet;Rf=function(){var t;(t=Z(this,Si))==null||t.setAttribute("aria-expanded","false"),Ir(Jn(this),Z(this,br)),Ir(this,Z(this,gr))};br=new WeakMap;gr=new WeakMap;yr=new WeakSet;Xn=function(t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:e,y:i}=ZT({anchor:this.anchorElement,floating:this,placement:"top-start"});t??(t=this.offsetWidth);const r=Jn(this).getBoundingClientRect(),n=r.width-e-t,s=r.height-i-this.offsetHeight,{style:o}=Z(this,Zn);o.setProperty("position","absolute"),o.setProperty("right",`${Math.max(0,n)}px`),o.setProperty("--_menu-bottom",`${s}px`);const l=getComputedStyle(this),p=o.getPropertyValue("--_menu-bottom")===l.bottom?s:parseFloat(l.bottom),m=r.height-p-parseFloat(l.marginBottom);this.style.setProperty("--_menu-max-height",`${m}px`)};rl=new WeakSet;Fc=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e==null?void 0:e.querySelector('[role="menu"]'),{style:a}=Z(this,Zn);if(t||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),ae(this,yr,Xn).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),ae(this,yr,Xn).call(this);a.removeProperty("--media-menu-transition-in")};uu=new WeakSet;Lf=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(Z(this,Kc,Cf))){(e=Z(this,Gi))==null||e.focus(),this.hidden=!0;return}const i=ae(this,Mn,nl).call(this,t);!i||i.hasAttribute("disabled")||(ae(this,xn,sl).call(this,i),this.handleSelect(t))};Kc=new WeakSet;Cf=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.matches('button[part~="back"]'))};cu=new WeakSet;Df=function(t){if(t.target===this)return;ae(this,Vc,Mf).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new Hc({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);ae(this,rl,Fc).call(this,!0)};Vc=new WeakSet;Mf=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};hu=new WeakSet;xf=function(t){var e;Ri(this,t.relatedTarget)||(Z(this,wa)&&((e=Z(this,Gi))==null||e.focus()),Z(this,Si)&&Z(this,Si)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};mu=new WeakSet;Of=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:u}=t;if(!(o||l||u)&&this.keysUsed.includes(s))if(t.preventDefault(),t.stopPropagation(),s==="Tab"){if(Z(this,wa)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else s==="Escape"?((n=Z(this,Gi))==null||n.focus(),Z(this,wa)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(t):this.handleMove(t)};Mn=new WeakSet;nl=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};pu=new WeakSet;Nf=function(){return this.items.find(t=>t.tabIndex===0)};xn=new WeakSet;sl=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};bo=new WeakSet;vu=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};gt.shadowRootOptions={mode:"open"};gt.getTemplateHTML=aA;function rA(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t==null?void 0:t.role)}function Jn(t){var e;return(e=t.getAttribute("bounds")?Mr(t,`#${t.getAttribute("bounds")}`):et(t)||t.parentElement)!=null?e:t}T.customElements.get("media-chrome-menu")||T.customElements.define("media-chrome-menu",gt);var qc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Qe=(t,e,i)=>(qc(t,e,"read from private field"),i?i.call(t):e.get(t)),hi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},nd=(t,e,i,a)=>(qc(t,e,"write to private field"),e.set(t,i),i),hr=(t,e,i)=>(qc(t,e,"access private method"),i),go,On,fu,Pf,ol,Yc,Gc,Uf,ri,ar,Eu,yo,_u;function nA(t){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(t)}
    </slot>
    <slot name="submenu"></slot>
  `}function sA(t){return""}const ht={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class Ji extends T.HTMLElement{constructor(){if(super(),hi(this,fu),hi(this,ol),hi(this,Gc),hi(this,yo),hi(this,go,!1),hi(this,On,void 0),hi(this,ri,()=>{var e,i;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const a=this.shadowRoot.querySelector('slot[name="description"]'),r=(e=this.submenuElement.checkedItems)==null?void 0:e[0],n=(i=r==null?void 0:r.dataset.description)!=null?i:r==null?void 0:r.text,s=we.createElement("span");s.textContent=n??"",a.replaceChildren(s)}),hi(this,ar,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",Qe(this,ar));return}this.handleClick(e)}),hi(this,Eu,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",Qe(this,ar));return}this.addEventListener("keyup",Qe(this,ar),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=lt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ht.TYPE,ht.DISABLED,ht.CHECKED,ht.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),zr(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":hr(this,fu,Pf).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":Qe(this,Eu).call(this,e);break;case"keyup":Qe(this,ar).call(this,e);break}}attributeChangedCallback(e,i,a){e===ht.CHECKED&&zr(this)&&!Qe(this,go)?this.setAttribute("aria-checked",a!=null?"true":"false"):e===ht.TYPE&&a!==i?this.role="menuitem"+a:e===ht.DISABLED&&a!==i&&(a==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(ht.DISABLED)||this.enable(),this.role="menuitem"+this.type,nd(this,On,bu(this,this.parentNode)),hr(this,yo,_u).call(this),this.submenuElement&&hr(this,ol,Yc).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),hr(this,yo,_u).call(this),nd(this,On,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=kl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(ht.TYPE))!=null?e:""}set type(e){this.setAttribute(ht.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(ht.VALUE))!=null?e:this.text}set value(e){this.setAttribute(ht.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(zr(this))return this.getAttribute("aria-checked")==="true"}set checked(e){zr(this)&&(nd(this,go,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){zr(this)||this.invokeTargetElement&&Ri(this,e.target)&&this.invokeTargetElement.dispatchEvent(new Hc({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}go=new WeakMap;On=new WeakMap;fu=new WeakSet;Pf=function(t){const e=t.target;if(!(e!=null&&e.name))for(const a of e.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();e.name==="submenu"&&(this.submenuElement?hr(this,ol,Yc).call(this):hr(this,Gc,Uf).call(this))};ol=new WeakSet;Yc=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Qe(this,ri)),this.submenuElement.addEventListener("addmenuitem",Qe(this,ri)),this.submenuElement.addEventListener("removemenuitem",Qe(this,ri)),Qe(this,ri).call(this)};Gc=new WeakSet;Uf=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Qe(this,ri)),this.submenuElement.removeEventListener("addmenuitem",Qe(this,ri)),this.submenuElement.removeEventListener("removemenuitem",Qe(this,ri)),Qe(this,ri).call(this)};ri=new WeakMap;ar=new WeakMap;Eu=new WeakMap;yo=new WeakSet;_u=function(){var t;const e=(t=Qe(this,On))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const a of e)a.setAttribute("aria-checked","false");i==null||i.setAttribute("aria-checked","true")};Ji.shadowRootOptions={mode:"open"};Ji.getTemplateHTML=nA;Ji.getSuffixSlotInnerHTML=sA;function zr(t){return t.type==="radio"||t.type==="checkbox"}function bu(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?bu(t,i):e!=null&&e.items?e:bu(e,e==null?void 0:e.parentNode)}T.customElements.get("media-chrome-menu-item")||T.customElements.define("media-chrome-menu-item",Ji);function oA(t){return`
    ${gt.getTemplateHTML(t)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}class $f extends gt{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:et(this).querySelector("media-settings-menu-button")}}$f.getTemplateHTML=oA;T.customElements.get("media-settings-menu")||T.customElements.define("media-settings-menu",$f);function lA(t){return`
    ${Ji.getTemplateHTML.call(this,t)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function dA(t){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class $l extends Ji{}$l.shadowRootOptions={mode:"open"};$l.getTemplateHTML=lA;$l.getSuffixSlotInnerHTML=dA;T.customElements.get("media-settings-menu-item")||T.customElements.define("media-settings-menu-item",$l);class Pr extends Pe{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=kl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new Hc({relatedTarget:this}))}}T.customElements.get("media-chrome-menu-button")||T.customElements.define("media-chrome-menu-button",Pr);function uA(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function cA(){return D("Settings")}class zc extends Pr{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:et(this).querySelector("media-settings-menu")}}zc.getSlotTemplateHTML=uA;zc.getTooltipContentHTML=cA;T.customElements.get("media-settings-menu-button")||T.customElements.define("media-settings-menu-button",zc);var Qc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Hf=(t,e,i)=>(Qc(t,e,"read from private field"),i?i.call(t):e.get(t)),ys=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},gu=(t,e,i,a)=>(Qc(t,e,"write to private field"),e.set(t,i),i),Ts=(t,e,i)=>(Qc(t,e,"access private method"),i),bn,ll,To,yu,Ao,Tu;class hA extends gt{constructor(){super(...arguments),ys(this,To),ys(this,Ao),ys(this,bn,[]),ys(this,ll,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_AUDIO_TRACK_ENABLED&&i!==a?this.value=a:e===h.MEDIA_AUDIO_TRACK_LIST&&i!==a&&(gu(this,bn,Y0(a??"")),Ts(this,To,yu).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ts(this,Ao,Tu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ts(this,Ao,Tu))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=et(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return Hf(this,bn)}set mediaAudioTrackList(e){gu(this,bn,e),Ts(this,To,yu).call(this)}get mediaAudioTrackEnabled(){var e;return(e=ce(this,h.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){le(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}bn=new WeakMap;ll=new WeakMap;To=new WeakSet;yu=function(){if(Hf(this,ll)===JSON.stringify(this.mediaAudioTrackList))return;gu(this,ll,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="",t.sort((e,i)=>e.id.localeCompare(i.id,void 0,{numeric:!0}));for(const e of t){const i=this.formatMenuItemText(e.label,e),a=Cr({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});a.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(a)}};Ao=new WeakSet;Tu=function(){if(this.value==null)return;const t=new T.CustomEvent(x.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};T.customElements.get("media-audio-track-menu")||T.customElements.define("media-audio-track-menu",hA);const mA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function pA(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${mA}</slot>
  `}function vA(){return D("Audio")}const Mm=t=>{const e=D("Audio");t.setAttribute("aria-label",e)};class jc extends Pr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Mm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_LANG&&Mm(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=et(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=ce(this,h.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){le(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}jc.getSlotTemplateHTML=pA;jc.getTooltipContentHTML=vA;T.customElements.get("media-audio-track-menu-button")||T.customElements.define("media-audio-track-menu-button",jc);var Zc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},fA=(t,e,i)=>(Zc(t,e,"read from private field"),e.get(t)),sd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},EA=(t,e,i,a)=>(Zc(t,e,"write to private field"),e.set(t,i),i),As=(t,e,i)=>(Zc(t,e,"access private method"),i),dl,ko,Au,So,ku;const _A=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function bA(t){return`
    ${gt.getTemplateHTML(t)}
    <slot name="captions-indicator" hidden>${_A}</slot>
  `}class Bf extends gt{constructor(){super(...arguments),sd(this,ko),sd(this,So),sd(this,dl,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_LIST&&i!==a?As(this,ko,Au).call(this):e===h.MEDIA_SUBTITLES_SHOWING&&i!==a&&(this.value=a||"",As(this,ko,Au).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",As(this,So,ku))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",As(this,So,ku))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:et(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return xm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Om(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return xm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Om(this,h.MEDIA_SUBTITLES_SHOWING,e)}}dl=new WeakMap;ko=new WeakSet;Au=function(){var t;const e=fA(this,dl)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(h.MEDIA_SUBTITLES_SHOWING);if(!e&&!i)return;EA(this,dl,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,r=Cr({type:"radio",text:this.formatMenuItemText(D("Off")),value:"off",checked:a});r.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(r);const n=this.mediaSubtitlesList;for(const s of n){const o=Cr({type:"radio",text:this.formatMenuItemText(s.label,s),value:Md(s),checked:this.value==Md(s)});o.prepend(Ia(this,"checked-indicator")),((t=s.kind)!=null?t:"subs")==="captions"&&o.append(Ia(this,"captions-indicator")),this.defaultSlot.append(o)}};So=new WeakSet;ku=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(h.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t!=null&&t.length&&i&&this.dispatchEvent(new T.CustomEvent(x.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const a=new T.CustomEvent(x.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};Bf.getTemplateHTML=bA;const xm=(t,e)=>{const i=t.getAttribute(e);return i?Ll(i):[]},Om=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=Yn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};T.customElements.get("media-captions-menu")||T.customElements.define("media-captions-menu",Bf);const gA=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,yA=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function TA(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${gA}</slot>
      <slot name="off">${yA}</slot>
    </slot>
  `}function AA(){return D("Captions")}const Nm=t=>{t.setAttribute("data-captions-enabled",kv(t).toString())},Pm=t=>{t.setAttribute("aria-label",D("closed captions"))};class Xc extends Pr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING,h.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),Pm(this),Nm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_SHOWING?Nm(this):e===h.MEDIA_LANG&&Pm(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=et(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return Um(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){$m(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Um(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){$m(this,h.MEDIA_SUBTITLES_SHOWING,e)}}Xc.getSlotTemplateHTML=TA;Xc.getTooltipContentHTML=AA;const Um=(t,e)=>{const i=t.getAttribute(e);return i?Ll(i):[]},$m=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=Yn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};T.customElements.get("media-captions-menu-button")||T.customElements.define("media-captions-menu-button",Xc);var Wf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},rr=(t,e,i)=>(Wf(t,e,"read from private field"),i?i.call(t):e.get(t)),od=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ua=(t,e,i)=>(Wf(t,e,"access private method"),i),Ki,nr,gn,wo,Su;const ld={RATES:"rates"};class kA extends gt{constructor(){super(),od(this,nr),od(this,wo),od(this,Ki,new ac(this,ld.RATES,{defaultValue:af})),Ua(this,nr,gn).call(this)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,ld.RATES]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_PLAYBACK_RATE&&i!=a?(this.value=a,Ua(this,nr,gn).call(this)):e===ld.RATES&&i!=a&&(rr(this,Ki).value=a,Ua(this,nr,gn).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ua(this,wo,Su))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ua(this,wo,Su))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:et(this).querySelector("media-playback-rate-menu-button")}get rates(){return rr(this,Ki)}set rates(e){e?Array.isArray(e)?rr(this,Ki).value=e.join(" "):typeof e=="string"&&(rr(this,Ki).value=e):rr(this,Ki).value="",Ua(this,nr,gn).call(this)}get mediaPlaybackRate(){return ne(this,h.MEDIA_PLAYBACK_RATE,cr)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}}Ki=new WeakMap;nr=new WeakSet;gn=function(){this.defaultSlot.textContent="";const t=Zi(this.mediaPlaybackRate),e=new Set(Array.from(rr(this,Ki)).map(a=>Zi(Number(a))));t>0&&!e.has(t)&&e.add(t);const i=Array.from(e).sort((a,r)=>a-r);for(const a of i){const r=Cr({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:t===a});r.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(r)}};wo=new WeakSet;Su=function(){if(!this.value)return;const t=new T.CustomEvent(x.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};T.customElements.get("media-playback-rate-menu")||T.customElements.define("media-playback-rate-menu",kA);const Io=1;function SA(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }

      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?Zi(+t.mediaplaybackrate):Io}x</slot>
  `}function wA(){return D("Playback rate")}class Jc extends Pr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Zi((e=this.mediaPlaybackRate)!=null?e:Io)}x`}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===h.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Zi(Number.isNaN(r)?Io:r);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:et(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return ne(this,h.MEDIA_PLAYBACK_RATE,Io)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}}Jc.getSlotTemplateHTML=SA;Jc.getTooltipContentHTML=wA;T.customElements.get("media-playback-rate-menu-button")||T.customElements.define("media-playback-rate-menu-button",Jc);var eh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},pi=(t,e,i)=>(eh(t,e,"read from private field"),i?i.call(t):e.get(t)),ks=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Hm=(t,e,i,a)=>(eh(t,e,"write to private field"),e.set(t,i),i),$a=(t,e,i)=>(eh(t,e,"access private method"),i),yn,Xt,sr,Tn,Ro,wu;class IA extends gt{constructor(){super(...arguments),ks(this,sr),ks(this,Ro),ks(this,yn,[]),ks(this,Xt,{})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_LIST,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT,h.MEDIA_WIDTH]}static formatMenuItemText(e,i){return super.formatMenuItemText(e,i)}static formatRendition(e,{showBitrate:i=!1}={}){const a=`${Math.min(e.width,e.height)}p`;if(i&&e.bitrate){const r=e.bitrate/1e6,n=`${r.toFixed(r<1?1:0)} Mbps`;return`${a} (${n})`}return this.formatMenuItemText(a,e)}static compareRendition(e,i){var a,r;return i.height===e.height?((a=i.bitrate)!=null?a:0)-((r=e.bitrate)!=null?r:0):i.height-e.height}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),i!==a)switch(e){case h.MEDIA_RENDITION_SELECTED:this.value=a??"auto",$a(this,sr,Tn).call(this);break;case h.MEDIA_RENDITION_LIST:Hm(this,yn,F0(a)),$a(this,sr,Tn).call(this);break;case h.MEDIA_HEIGHT:case h.MEDIA_WIDTH:$a(this,sr,Tn).call(this);break}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",$a(this,Ro,wu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",$a(this,Ro,wu))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:et(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return pi(this,yn)}set mediaRenditionList(e){Hm(this,yn,e),$a(this,sr,Tn).call(this)}get mediaRenditionSelected(){return ce(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){le(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ne(this,h.MEDIA_HEIGHT)}set mediaHeight(e){ve(this,h.MEDIA_HEIGHT,e)}get mediaWidth(){return ne(this,h.MEDIA_WIDTH)}set mediaWidth(e){ve(this,h.MEDIA_WIDTH,e)}compareRendition(e,i){return this.constructor.compareRendition(e,i)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}formatRendition(e,i){return this.constructor.formatRendition(e,i)}showRenditionBitrate(e){return this.mediaRenditionList.some(i=>i!==e&&i.height===e.height&&i.bitrate!==e.bitrate)}}yn=new WeakMap;Xt=new WeakMap;sr=new WeakSet;Tn=function(){const t=!this.mediaRenditionSelected;if(pi(this,Xt).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&pi(this,Xt).mediaHeight===this.mediaHeight&&pi(this,Xt).mediaWidth===this.mediaWidth&&pi(this,Xt).isAuto===t)return;pi(this,Xt).mediaRenditionList=JSON.stringify(this.mediaRenditionList),pi(this,Xt).mediaHeight=this.mediaHeight,pi(this,Xt).mediaWidth=this.mediaWidth,pi(this,Xt).isAuto=t;const e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),i=e.find(s=>s.id===this.mediaRenditionSelected);for(const s of e)s.selected=s===i;this.defaultSlot.textContent="";for(const s of e){const o=this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),l=Cr({type:"radio",text:o,value:`${s.id}`,checked:s.selected&&!t});l.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(l)}const a=i&&this.showRenditionBitrate(i);let r;t&&(i?r=this.formatMenuItemText(`${D("Auto")} • ${this.formatRendition(i,{showBitrate:a})}`,i):this.mediaHeight>0&&this.mediaWidth>0&&(r=this.formatMenuItemText(`${D("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),r||(r=this.formatMenuItemText(D("Auto")));const n=Cr({type:"radio",text:r,value:"auto",checked:t});n.dataset.description=r,n.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(n)};Ro=new WeakSet;wu=function(){if(this.value==null)return;const t=new T.CustomEvent(x.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};T.customElements.get("media-rendition-menu")||T.customElements.define("media-rendition-menu",IA);const RA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function LA(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${RA}</slot>
  `}function CA(){return D("Quality")}class th extends Pr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:et(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return ce(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){le(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ne(this,h.MEDIA_HEIGHT)}set mediaHeight(e){ve(this,h.MEDIA_HEIGHT,e)}}th.getSlotTemplateHTML=LA;th.getTooltipContentHTML=CA;T.customElements.get("media-rendition-menu-button")||T.customElements.define("media-rendition-menu-button",th);var ih=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Jt=(t,e,i)=>(ih(t,e,"read from private field"),i?i.call(t):e.get(t)),Bt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ff=(t,e,i,a)=>(ih(t,e,"write to private field"),e.set(t,i),i),ft=(t,e,i)=>(ih(t,e,"access private method"),i),Dr,es,Hl,fa,mr,ah,Kf,Lo,Iu,Co,Ru,Vf,ul,cl,Do;function DA(t){return`
      ${gt.getTemplateHTML(t)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `}class qf extends gt{constructor(){super(),Bt(this,es),Bt(this,fa),Bt(this,ah),Bt(this,Lo),Bt(this,Ru),Bt(this,Dr,!1),Bt(this,Co,e=>{const i=e.target,a=(i==null?void 0:i.nodeName)==="VIDEO",r=ft(this,Lo,Iu).call(this,i);(a||r)&&(Jt(this,Dr)?ft(this,fa,mr).call(this):ft(this,Ru,Vf).call(this,e))}),Bt(this,ul,e=>{const i=e.target,a=this.contains(i),r=e.button===2,n=(i==null?void 0:i.nodeName)==="VIDEO",s=ft(this,Lo,Iu).call(this,i);a||r&&(n||s)||ft(this,fa,mr).call(this)}),Bt(this,cl,e=>{e.key==="Escape"&&ft(this,fa,mr).call(this)}),Bt(this,Do,e=>{var i,a;const r=e.target;if((i=r.matches)!=null&&i.call(r,'button[invoke="copy"]')){const n=(a=r.closest("media-context-menu-item"))==null?void 0:a.querySelector('input[slot="copy"]');n&&navigator.clipboard.writeText(n.value)}ft(this,fa,mr).call(this)}),this.setAttribute("noautohide",""),ft(this,es,Hl).call(this)}connectedCallback(){super.connectedCallback(),et(this).addEventListener("contextmenu",Jt(this,Co)),this.addEventListener("click",Jt(this,Do))}disconnectedCallback(){super.disconnectedCallback(),et(this).removeEventListener("contextmenu",Jt(this,Co)),this.removeEventListener("click",Jt(this,Do)),document.removeEventListener("mousedown",Jt(this,ul)),document.removeEventListener("keydown",Jt(this,cl))}}Dr=new WeakMap;es=new WeakSet;Hl=function(){this.hidden=!Jt(this,Dr)};fa=new WeakSet;mr=function(){Ff(this,Dr,!1),ft(this,es,Hl).call(this)};ah=new WeakSet;Kf=function(){document.querySelectorAll("media-context-menu").forEach(e=>{var i;e!==this&&ft(i=e,fa,mr).call(i)})};Lo=new WeakSet;Iu=function(t){return t?t.hasAttribute("slot")&&t.getAttribute("slot")==="media"?!0:t.nodeName.includes("-")&&t.tagName.includes("-")?t.hasAttribute("src")||t.hasAttribute("poster")||t.hasAttribute("preload")||t.hasAttribute("playsinline"):!1:!1};Co=new WeakMap;Ru=new WeakSet;Vf=function(t){t.preventDefault(),ft(this,ah,Kf).call(this),Ff(this,Dr,!0),this.style.position="fixed",this.style.left=`${t.clientX}px`,this.style.top=`${t.clientY}px`,ft(this,es,Hl).call(this),document.addEventListener("mousedown",Jt(this,ul),{once:!0}),document.addEventListener("keydown",Jt(this,cl),{once:!0})};ul=new WeakMap;cl=new WeakMap;Do=new WeakMap;qf.getTemplateHTML=DA;T.customElements.get("media-context-menu")||T.customElements.define("media-context-menu",qf);function MA(t){return`
    ${Ji.getTemplateHTML.call(this,t)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `}class rh extends Ji{}rh.shadowRootOptions={mode:"open"};rh.getTemplateHTML=MA;T.customElements.get("media-context-menu-item")||T.customElements.define("media-context-menu-item",rh);var Yf=t=>{throw TypeError(t)},nh=(t,e,i)=>e.has(t)||Yf("Cannot "+i),B=(t,e,i)=>(nh(t,e,"read from private field"),i?i.call(t):e.get(t)),Se=(t,e,i)=>e.has(t)?Yf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Je=(t,e,i,a)=>(nh(t,e,"write to private field"),e.set(t,i),i),_e=(t,e,i)=>(nh(t,e,"access private method"),i),Bl=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends Bl{}globalThis.DocumentFragment=t}var sh=class extends Bl{},xA=class extends Bl{},OA={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(sh)}},Mo,NA=class{constructor(t,e={}){Se(this,Mo),Je(this,Mo,e==null?void 0:e.detail)}get detail(){return B(this,Mo)}initCustomEvent(){}};Mo=new WeakMap;function PA(t,e){return new sh}var Gf={document:{createElement:PA},DocumentFragment,customElements:OA,CustomEvent:NA,EventTarget:Bl,HTMLElement:sh,HTMLVideoElement:xA},zf=typeof window>"u"||typeof globalThis.customElements>"u",ti=zf?Gf:globalThis,hl=zf?Gf.document:globalThis.document;function UA(t){let e="";return Object.entries(t).forEach(([i,a])=>{a!=null&&(e+=`${Lu(i)}: ${a}; `)}),e?e.trim():void 0}function Lu(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Qf(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Ke(t){if(t==null)return;let e=+t;return Number.isNaN(e)?void 0:e}function jf(t){let e=$A(t).toString();return e?"?"+e:""}function $A(t){let e={};for(let i in t)t[i]!=null&&(e[i]=t[i]);return new URLSearchParams(e)}var Zf=(t,e)=>!t||!e?!1:t.contains(e)?!0:Zf(t,e.getRootNode().host),Xf="mux.com",HA=()=>{try{return"3.13.2"}catch{}return"UNKNOWN"},BA=HA(),Jf=()=>BA,WA=(t,{token:e,customDomain:i=Xf,thumbnailTime:a,programTime:r}={})=>{var n;let s=e==null?a:void 0,{aud:o}=(n=pr(e))!=null?n:{};if(!(e&&o!=="t"))return`https://image.${i}/${t}/thumbnail.webp${jf({token:e,time:s,program_time:r})}`},FA=(t,{token:e,customDomain:i=Xf,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=(n=pr(e))!=null?n:{};if(!(e&&s!=="s"))return`https://image.${i}/${t}/storyboard.vtt${jf({token:e,format:"webp",program_start_time:a,program_end_time:r})}`},oh=t=>{if(t){if([ee.LIVE,ee.ON_DEMAND].includes(t))return t;if(t!=null&&t.includes("live"))return ee.LIVE}},KA={crossorigin:"crossOrigin",playsinline:"playsInline"};function VA(t){var e;return(e=KA[t])!=null?e:Qf(t)}var or,lr,Ze,qA=class{constructor(e,i){Se(this,or),Se(this,lr),Se(this,Ze,[]),Je(this,or,e),Je(this,lr,i)}[Symbol.iterator](){return B(this,Ze).values()}get length(){return B(this,Ze).length}get value(){var e;return(e=B(this,Ze).join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Je(this,Ze,[]),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return B(this,Ze)[e]}values(){return B(this,Ze).values()}keys(){return B(this,Ze).keys()}forEach(e){B(this,Ze).forEach(e)}add(...e){var i,a;e.forEach(r=>{this.contains(r)||B(this,Ze).push(r)}),!(this.value===""&&!((i=B(this,or))!=null&&i.hasAttribute(`${B(this,lr)}`)))&&((a=B(this,or))==null||a.setAttribute(`${B(this,lr)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>{B(this,Ze).splice(B(this,Ze).indexOf(a),1)}),(i=B(this,or))==null||i.setAttribute(`${B(this,lr)}`,`${this.value}`)}contains(e){return B(this,Ze).includes(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){this.remove(e),this.add(i)}};or=new WeakMap,lr=new WeakMap,Ze=new WeakMap;var eE=`[mux-player ${Jf()}]`;function vi(...t){console.warn(eE,...t)}function Xe(...t){console.error(eE,...t)}function Bm(t){var e;let i=(e=t.message)!=null?e:"";t.context&&(i+=` ${t.context}`),t.file&&(i+=` ${O("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${t.file}`),vi(i)}var Fe={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},ma={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},Wm=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),YA=Object.values(Fe).filter(t=>Fe.PLAYSINLINE!==t),GA=Object.values(ma),zA=[...YA,...GA],QA=class extends ti.HTMLElement{static get observedAttributes(){return zA}constructor(){super()}attributeChangedCallback(t,e,i){var a,r;switch(t){case ma.MUTED:{this.media&&(this.media.muted=i!=null,this.media.defaultMuted=i!=null);return}case ma.VOLUME:{let n=(a=Ke(i))!=null?a:1;this.media&&(this.media.volume=n);return}case ma.PLAYBACKRATE:{let n=(r=Ke(i))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var t,e;return(e=(t=this.media)==null?void 0:t.play())!=null?e:Promise.reject()}pause(){var t;(t=this.media)==null||t.pause()}load(){var t;(t=this.media)==null||t.load()}get media(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var t,e;return(e=(t=this.media)==null?void 0:t.paused)!=null?e:!0}get duration(){var t,e;return(e=(t=this.media)==null?void 0:t.duration)!=null?e:NaN}get ended(){var t,e;return(e=(t=this.media)==null?void 0:t.ended)!=null?e:!1}get buffered(){var t,e;return(e=(t=this.media)==null?void 0:t.buffered)!=null?e:Wm}get seekable(){var t,e;return(e=(t=this.media)==null?void 0:t.seekable)!=null?e:Wm}get readyState(){var t,e;return(e=(t=this.media)==null?void 0:t.readyState)!=null?e:0}get videoWidth(){var t,e;return(e=(t=this.media)==null?void 0:t.videoWidth)!=null?e:0}get videoHeight(){var t,e;return(e=(t=this.media)==null?void 0:t.videoHeight)!=null?e:0}get currentSrc(){var t,e;return(e=(t=this.media)==null?void 0:t.currentSrc)!=null?e:""}get currentTime(){var t,e;return(e=(t=this.media)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.media&&(this.media.currentTime=Number(t))}get volume(){var t,e;return(e=(t=this.media)==null?void 0:t.volume)!=null?e:1}set volume(t){this.media&&(this.media.volume=Number(t))}get playbackRate(){var t,e;return(e=(t=this.media)==null?void 0:t.playbackRate)!=null?e:1}set playbackRate(t){this.media&&(this.media.playbackRate=Number(t))}get defaultPlaybackRate(){var t;return(t=Ke(this.getAttribute(ma.PLAYBACKRATE)))!=null?t:1}set defaultPlaybackRate(t){t!=null?this.setAttribute(ma.PLAYBACKRATE,`${t}`):this.removeAttribute(ma.PLAYBACKRATE)}get crossOrigin(){return Qr(this,Fe.CROSSORIGIN)}set crossOrigin(t){this.setAttribute(Fe.CROSSORIGIN,`${t}`)}get autoplay(){return Qr(this,Fe.AUTOPLAY)!=null}set autoplay(t){t?this.setAttribute(Fe.AUTOPLAY,typeof t=="string"?t:""):this.removeAttribute(Fe.AUTOPLAY)}get loop(){return Qr(this,Fe.LOOP)!=null}set loop(t){t?this.setAttribute(Fe.LOOP,""):this.removeAttribute(Fe.LOOP)}get muted(){var t,e;return(e=(t=this.media)==null?void 0:t.muted)!=null?e:!1}set muted(t){this.media&&(this.media.muted=!!t)}get defaultMuted(){return Qr(this,Fe.MUTED)!=null}set defaultMuted(t){t?this.setAttribute(Fe.MUTED,""):this.removeAttribute(Fe.MUTED)}get playsInline(){return Qr(this,Fe.PLAYSINLINE)!=null}set playsInline(t){Xe("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(t){["","none","metadata","auto"].includes(t)?this.setAttribute(Fe.PRELOAD,t):this.removeAttribute(Fe.PRELOAD)}};function Qr(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var Fm=QA,jA=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,jr=new WeakMap,ZA=class tE{constructor(e,i){this.element=e,this.type=i,this.element.addEventListener(this.type,this);let a=jr.get(this.element);a&&a.set(this.type,this)}set(e){if(typeof e=="function")this.handleEvent=e.bind(this.element);else if(typeof e=="object"&&typeof e.handleEvent=="function")this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let i=jr.get(this.element);i&&i.delete(this.type)}}static for(e){jr.has(e.element)||jr.set(e.element,new Map);let i=e.attributeName.slice(2),a=jr.get(e.element);return a&&a.has(i)?a.get(i):new tE(e.element,i)}};function XA(t,e){return t instanceof Pt&&t.attributeName.startsWith("on")?(ZA.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0):!1}function JA(t,e){return e instanceof iE&&t instanceof Nr?(e.renderInto(t),!0):!1}function ek(t,e){return e instanceof DocumentFragment&&t instanceof Nr?(e.childNodes.length&&t.replace(...e.childNodes),!0):!1}function tk(t,e){if(t instanceof Pt){let i=t.attributeNamespace,a=t.element.getAttributeNS(i,t.attributeName);return String(e)!==a&&(t.value=String(e)),!0}return t.value=String(e),!0}function ik(t,e){if(t instanceof Pt&&e instanceof Element){let i=t.element;return i[t.attributeName]!==e&&(t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),i[t.attributeName]=e),!0}return!1}function ak(t,e){if(typeof e=="boolean"&&t instanceof Pt){let i=t.attributeNamespace,a=t.element.hasAttributeNS(i,t.attributeName);return e!==a&&(t.booleanValue=e),!0}return!1}function rk(t,e){return e===!1&&t instanceof Nr?(t.replace(""),!0):!1}function nk(t,e){ik(t,e)||ak(t,e)||XA(t,e)||rk(t,e)||JA(t,e)||ek(t,e)||tk(t,e)}var dd=new Map,Km=new WeakMap,Vm=new WeakMap,iE=class{constructor(t,e,i){this.strings=t,this.values=e,this.processor=i,this.stringsKey=this.strings.join("")}get template(){if(dd.has(this.stringsKey))return dd.get(this.stringsKey);{let t=hl.createElement("template"),e=this.strings.length-1;return t.innerHTML=this.strings.reduce((i,a,r)=>i+a+(r<e?`{{ ${r} }}`:""),""),dd.set(this.stringsKey,t),t}}renderInto(t){var e;let i=this.template;if(Km.get(t)!==i){Km.set(t,i);let r=new Pl(i,this.values,this.processor);Vm.set(t,r),t instanceof Nr?t.replace(...r.children):t.appendChild(r);return}let a=Vm.get(t);(e=a==null?void 0:a.update)==null||e.call(a,this.values)}},sk={processCallback(t,e,i){var a;if(i){for(let[r,n]of e)if(r in i){let s=(a=i[r])!=null?a:"";nk(n,s)}}}};function xo(t,...e){return new iE(t,e,sk)}function ok(t,e){t.renderInto(e)}var lk=t=>{let{tokens:e}=t;return e.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},dk=t=>xo`
  <style>
    ${lk(t)}
    ${jA}
  </style>
  ${mk(t)}
`,uk=t=>{let e=t.hotKeys?`${t.hotKeys}`:"";return oh(t.streamType)==="live"&&(e+=" noarrowleft noarrowright"),e},ck={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},hk=Object.values(ck).join(", "),mk=t=>{var e,i,a,r,n,s,o,l,u,p,m,c,d,v,f,b,g,y,E,S,M,C,I,H,q,F,W,He,it,at,ge,Ve,Ut,qe,yt,rt,De,Be,Ye,di,ea,Ur;return xo`
  <media-theme
    template="${t.themeTemplate||!1}"
    defaultstreamtype="${(e=t.defaultStreamType)!=null?e:!1}"
    hotkeys="${uk(t)||!1}"
    nohotkeys="${t.noHotKeys||!t.hasSrc||!1}"
    noautoseektolive="${!!((i=t.streamType)!=null&&i.includes(ee.LIVE))&&t.targetLiveWindow!==0}"
    novolumepref="${t.novolumepref||!1}"
    nomutedpref="${t.nomutedpref||!1}"
    disabled="${!t.hasSrc||t.isDialogOpen}"
    audio="${(a=t.audio)!=null?a:!1}"
    style="${(r=UA({"--media-primary-color":t.primaryColor,"--media-secondary-color":t.secondaryColor,"--media-accent-color":t.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!t.defaultHiddenCaptions}"
    forwardseekoffset="${(n=t.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=t.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(o=t.playbackRates)!=null?o:!1}"
    defaultshowremainingtime="${(l=t.defaultShowRemainingTime)!=null?l:!1}"
    defaultduration="${(u=t.defaultDuration)!=null?u:!1}"
    hideduration="${(p=t.hideDuration)!=null?p:!1}"
    title="${(m=t.title)!=null?m:!1}"
    videotitle="${(c=t.videoTitle)!=null?c:!1}"
    proudlydisplaymuxbadge="${(d=t.proudlyDisplayMuxBadge)!=null?d:!1}"
    exportparts="${hk}"
  >
    <mux-video
      slot="media"
      inert="${(v=t.noHotKeys)!=null?v:!1}"
      target-live-window="${(f=t.targetLiveWindow)!=null?f:!1}"
      stream-type="${(b=oh(t.streamType))!=null?b:!1}"
      crossorigin="${(g=t.crossOrigin)!=null?g:""}"
      playsinline
      autoplay="${(y=t.autoplay)!=null?y:!1}"
      muted="${(E=t.muted)!=null?E:!1}"
      loop="${(S=t.loop)!=null?S:!1}"
      preload="${(M=t.preload)!=null?M:!1}"
      debug="${(C=t.debug)!=null?C:!1}"
      prefer-cmcd="${(I=t.preferCmcd)!=null?I:!1}"
      disable-tracking="${(H=t.disableTracking)!=null?H:!1}"
      disable-cookies="${(q=t.disableCookies)!=null?q:!1}"
      prefer-playback="${(F=t.preferPlayback)!=null?F:!1}"
      start-time="${t.startTime!=null?t.startTime:!1}"
      initial-bandwidth-estimate-kbps="${t.initialBandwidthEstimateKbps!=null?t.initialBandwidthEstimateKbps:!1}"
      initial-estimate-segments="${t.initialEstimateSegments!=null?t.initialEstimateSegments:!1}"
      min-preload-segments="${t.minPreloadSegments!=null?t.minPreloadSegments:!1}"
      beacon-collection-domain="${(W=t.beaconCollectionDomain)!=null?W:!1}"
      player-init-time="${(He=t.playerInitTime)!=null?He:!1}"
      player-software-name="${(it=t.playerSoftwareName)!=null?it:!1}"
      player-software-version="${(at=t.playerSoftwareVersion)!=null?at:!1}"
      env-key="${(ge=t.envKey)!=null?ge:!1}"
      custom-domain="${(Ve=t.customDomain)!=null?Ve:!1}"
      src="${t.src?t.src:t.playbackId?Td(t):!1}"
      cast-src="${t.src?t.src:t.playbackId?Td(t):!1}"
      cast-receiver="${(Ut=t.castReceiver)!=null?Ut:!1}"
      drm-token="${(yt=(qe=t.tokens)==null?void 0:qe.drm)!=null?yt:!1}"
      playback-token="${(De=(rt=t.tokens)==null?void 0:rt.playback)!=null?De:!1}"
      exportparts="video"
      disable-pseudo-ended="${(Be=t.disablePseudoEnded)!=null?Be:!1}"
      max-reconnect-retries="${(Ye=t.maxReconnectRetries)!=null?Ye:!1}"
      max-auto-resolution="${(di=t.maxAutoResolution)!=null?di:!1}"
      cap-rendition-to-player-size="${(ea=t.capRenditionToPlayerSize)!=null?ea:!1}"
    >
      ${t.storyboard?xo`<track label="thumbnails" default kind="metadata" src="${t.storyboard}" />`:xo``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${t.poster?t.poster:!1}"
        placeholdersrc="${(Ur=t.placeholder)!=null?Ur:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},aE=t=>t.charAt(0).toUpperCase()+t.slice(1),pk=(t,e=!1)=>{var i,a;if(t.muxCode){let r=aE((i=t.errorCategory)!=null?i:"video"),n=yl((a=t.errorCategory)!=null?a:J.VIDEO);if(t.muxCode===P.NETWORK_OFFLINE)return O("Your device appears to be offline",e);if(t.muxCode===P.NETWORK_RECONNECTING)return O("Reconnecting...",e);if(t.muxCode===P.NETWORK_TOKEN_EXPIRED)return O("{category} URL has expired",e).format({category:r});if([P.NETWORK_TOKEN_SUB_MISMATCH,P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING,P.NETWORK_TOKEN_MALFORMED].includes(t.muxCode))return O("{category} URL is formatted incorrectly",e).format({category:r});if(t.muxCode===P.NETWORK_TOKEN_MISSING)return O("Invalid {categoryName} URL",e).format({categoryName:n});if(t.muxCode===P.NETWORK_NOT_FOUND)return O("{category} does not exist",e).format({category:r});if(t.muxCode===P.NETWORK_NOT_READY){let s=t.streamType==="live"?"Live stream":"Video";return O("{mediaType} is not currently available",e).format({mediaType:s})}}if(t.code){if(t.code===L.MEDIA_ERR_NETWORK)return O("Network Error",e);if(t.code===L.MEDIA_ERR_DECODE)return O("Media Error",e);if(t.code===L.MEDIA_ERR_SRC_NOT_SUPPORTED)return O("Source Not Supported",e)}return O("Error",e)},vk=(t,e=!1)=>{var i,a;if(t.reload)return'Try again later or <a href="#" data-mux-reload style="color: #4a90e2;">click here to retry</a>';if(t.muxCode){let r=aE((i=t.errorCategory)!=null?i:"video"),n=yl((a=t.errorCategory)!=null?a:J.VIDEO);return t.muxCode===P.NETWORK_OFFLINE?O("Check your internet connection and try reloading this video.",e):t.muxCode===P.NETWORK_RECONNECTING?O("Your connection was interrupted. Attempting to resume playback...",e):t.muxCode===P.NETWORK_TOKEN_EXPIRED?O("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_TOKEN_SUB_MISMATCH?O("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_TOKEN_MALFORMED?O("{category} URL is formatted incorrectly",e).format({category:r}):[P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode)?O("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:n}):[P.NETWORK_TOKEN_MISSING,P.NETWORK_INVALID_URL].includes(t.muxCode)?O("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_NOT_FOUND?"":t.message}return t.code&&(t.code===L.MEDIA_ERR_NETWORK||t.code===L.MEDIA_ERR_DECODE||(t.code,L.MEDIA_ERR_SRC_NOT_SUPPORTED)),t.message},fk=(t,e=!1)=>{let i=pk(t,e).toString(),a=vk(t,e).toString();return{title:i,message:a}},Ek=t=>{if(t.muxCode){if(t.muxCode===P.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(t.muxCode===P.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode))return"403-incorrect-aud-value.md";if(t.muxCode===P.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(t.muxCode===P.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(t.muxCode===P.NETWORK_NOT_FOUND)return"404-not-found.md";if(t.muxCode===P.NETWORK_NOT_READY)return"412-not-playable.md"}if(t.code){if(t.code===L.MEDIA_ERR_NETWORK)return"";if(t.code===L.MEDIA_ERR_DECODE)return"media-decode-error.md";if(t.code===L.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},rE=(t,e)=>{let i=Ek(t);return{message:t.message,context:t.context,file:i}},_k=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,Cu=hl.createElement("template");"innerHTML"in Cu&&(Cu.innerHTML=_k);var qm,Ym,nE=class extends Ul{};nE.template=(Ym=(qm=Cu.content)==null?void 0:qm.children)==null?void 0:Ym[0];ti.customElements.get("media-theme-gerwig")||ti.customElements.define("media-theme-gerwig",nE);var bk="gerwig",fi={SRC:"src",POSTER:"poster"},k={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},Du=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"];function gk(t,e){var i,a,r;return{src:!t.playbackId&&t.src,playbackId:t.playbackId,hasSrc:!!t.playbackId||!!t.src||!!t.currentSrc,poster:t.poster,storyboard:((i=t.media)==null?void 0:i.currentSrc)&&t.storyboard,storyboardSrc:t.getAttribute(k.STORYBOARD_SRC),fullscreenElement:t.getAttribute(k.FULLSCREEN_ELEMENT),placeholder:t.getAttribute("placeholder"),themeTemplate:Tk(t),thumbnailTime:!t.tokens.thumbnail&&t.thumbnailTime,autoplay:t.autoplay,crossOrigin:t.crossOrigin,loop:t.loop,noHotKeys:t.hasAttribute(k.NOHOTKEYS),hotKeys:t.getAttribute(k.HOTKEYS),muted:t.muted,paused:t.paused,preload:t.preload,envKey:t.envKey,preferCmcd:t.preferCmcd,debug:t.debug,disableTracking:t.disableTracking,disableCookies:t.disableCookies,tokens:t.tokens,beaconCollectionDomain:t.beaconCollectionDomain,maxResolution:t.maxResolution,minResolution:t.minResolution,maxAutoResolution:t.maxAutoResolution,programStartTime:t.programStartTime,programEndTime:t.programEndTime,assetStartTime:t.assetStartTime,assetEndTime:t.assetEndTime,renditionOrder:t.renditionOrder,metadata:t.metadata,playerInitTime:t.playerInitTime,playerSoftwareName:t.playerSoftwareName,playerSoftwareVersion:t.playerSoftwareVersion,startTime:t.startTime,initialBandwidthEstimateKbps:t.initialBandwidthEstimateKbps,initialEstimateSegments:t.initialEstimateSegments,minPreloadSegments:t.minPreloadSegments,preferPlayback:t.preferPlayback,audio:t.audio,defaultStreamType:t.defaultStreamType,targetLiveWindow:t.getAttribute(_.TARGET_LIVE_WINDOW),streamType:oh(t.getAttribute(_.STREAM_TYPE)),primaryColor:t.getAttribute(k.PRIMARY_COLOR),secondaryColor:t.getAttribute(k.SECONDARY_COLOR),accentColor:t.getAttribute(k.ACCENT_COLOR),forwardSeekOffset:t.forwardSeekOffset,backwardSeekOffset:t.backwardSeekOffset,defaultHiddenCaptions:t.defaultHiddenCaptions,defaultDuration:t.defaultDuration,defaultShowRemainingTime:t.defaultShowRemainingTime,hideDuration:Ak(t),playbackRates:t.getAttribute(k.PLAYBACK_RATES),customDomain:(a=t.getAttribute(_.CUSTOM_DOMAIN))!=null?a:void 0,title:t.getAttribute(k.TITLE),videoTitle:(r=t.getAttribute(k.VIDEO_TITLE))!=null?r:t.getAttribute(k.TITLE),novolumepref:t.hasAttribute(k.NO_VOLUME_PREF),nomutedpref:t.hasAttribute(k.NO_MUTED_PREF),proudlyDisplayMuxBadge:t.hasAttribute(k.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:t.castReceiver,disablePseudoEnded:t.hasAttribute(k.DISABLE_PSEUDO_ENDED),maxReconnectRetries:t.maxReconnectRetries,capRenditionToPlayerSize:t.capRenditionToPlayerSize,...e,extraSourceParams:t.extraSourceParams}}var yk=jv.formatErrorMessage;jv.formatErrorMessage=t=>{var e,i;if(t instanceof L){let a=fk(t,!1);return`
      ${a!=null&&a.title?`<h3>${a.title}</h3>`:""}
      ${a!=null&&a.message||a!=null&&a.linkUrl?`<p>
        ${a==null?void 0:a.message}
        ${a!=null&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(e=a.linkText)!=null?e:""} ${O("(opens in a new window)")}"
              >${(i=a.linkText)!=null?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return yk(t)};function Tk(t){var e,i;let a=t.theme;if(a){let r=(i=(e=t.getRootNode())==null?void 0:e.getElementById)==null?void 0:i.call(e,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=ti.customElements.get(a);if(n!=null&&n.template)return n.template}}function Ak(t){var e;let i=(e=t.mediaController)==null?void 0:e.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function An(t){let e=t.videoTitle?{video_title:t.videoTitle}:{};return t.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=t.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},e)}var kk=Object.values(_),Sk=Object.values(fi),wk=Object.values(k),Gm=Jf(),zm="mux-player",Qm={isDialogOpen:!1},Ik={redundant_streams:!0},Oo,Nn,No,pa,Po,Pn,ml,pl,Tr,vl,fl,El,Un,Ar,_l,pe,Ei,sE,Mu,ya,jm,Zm,Xm,Jm,Rk=class extends Fm{constructor(){super(),Se(this,pe),Se(this,Oo),Se(this,Nn,!1),Se(this,No,{}),Se(this,pa,!0),Se(this,Po,new qA(this,"hotkeys")),Se(this,Pn),Se(this,ml,()=>_e(this,pe,ya).call(this)),Se(this,pl,()=>_e(this,pe,ya).call(this)),Se(this,Tr,()=>_e(this,pe,ya).call(this)),Se(this,vl,t=>{t.composedPath().find(e=>{var i;return(i=e==null?void 0:e.hasAttribute)==null?void 0:i.call(e,"data-mux-reload")})&&(t.preventDefault(),window.location.reload())}),Se(this,fl,t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&_e(this,pe,Mu).call(this,{isDialogOpen:!1})}),Se(this,El,t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&(Zf(this,hl.activeElement)||t.preventDefault())}),Se(this,Un),Se(this,Ar,{...Qm}),Se(this,_l,t=>{var e;let i=(e=this.media)==null?void 0:e.error;if(!(i instanceof L)){let{message:r,code:n}=i??{};i=new L(r,n)}if(!(i!=null&&i.fatal)){vi(i),i.data&&vi(`${i.name} data:`,i.data);return}let a=rE(i);a.message&&Bm(a),Xe(i),i.data&&Xe(`${i.name} data:`,i.data),_e(this,pe,Mu).call(this,{isDialogOpen:!0})}),Je(this,Oo,Vu()),this.attachShadow({mode:"open"}),_e(this,pe,sE).call(this),this.isConnected&&_e(this,pe,Ei).call(this)}static get NAME(){return zm}static get VERSION(){return Gm}static get observedAttributes(){var t;return[...(t=Fm.observedAttributes)!=null?t:[],...Sk,...kk,...wk]}setAttribute(t,e){super.setAttribute(t,e),t.startsWith("metadata-")&&this.media&&(this.media.metadata=An(this))}removeAttribute(t){super.removeAttribute(t),t.startsWith("metadata-")&&this.media&&(this.media.metadata=An(this))}get mediaTheme(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("media-theme")}get mediaController(){var t,e;return(e=(t=this.mediaTheme)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("media-controller")}connectedCallback(){_e(this,pe,Ei).call(this);let t=this.media;t&&(t.metadata=An(this))}disconnectedCallback(){var t,e,i,a,r,n,s,o,l,u;(t=B(this,Pn))==null||t.disconnect(),(e=this.media)==null||e.removeEventListener("streamtypechange",B(this,ml)),(i=this.media)==null||i.removeEventListener("loadstart",B(this,pl)),this.removeEventListener("error",B(this,_l)),this.removeEventListener("click",B(this,vl)),(a=this.mediaTheme)==null||a.removeEventListener("close",B(this,fl)),(r=this.mediaTheme)==null||r.removeEventListener("focusin",B(this,El)),this.media&&(this.media.errorTranslator=void 0),(s=(n=this.media)==null?void 0:n.textTracks)==null||s.removeEventListener("addtrack",B(this,Tr)),(l=(o=this.media)==null?void 0:o.textTracks)==null||l.removeEventListener("removetrack",B(this,Tr)),(u=B(this,Un))==null||u.call(this),Je(this,Un,void 0),Je(this,Nn,!1)}attributeChangedCallback(t,e,i){switch(_e(this,pe,Ei).call(this),super.attributeChangedCallback(t,e,i),t){case k.HOTKEYS:B(this,Po).value=i;break;case k.THUMBNAIL_TIME:{i!=null&&this.tokens.thumbnail&&vi(O("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case k.THUMBNAIL_TOKEN:{if(i){let a=pr(i);if(a){let{aud:r}=a,n=wn.THUMBNAIL;r!==n&&vi(O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case k.STORYBOARD_TOKEN:{if(i){let a=pr(i);if(a){let{aud:r}=a,n=wn.STORYBOARD;r!==n&&vi(O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case k.DRM_TOKEN:{if(i){let a=pr(i);if(a){let{aud:r}=a,n=wn.DRM;r!==n&&vi(O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case _.PLAYBACK_ID:{i!=null&&i.includes("?token")&&Xe(O("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break}case _.STREAM_TYPE:{i&&![ee.LIVE,ee.ON_DEMAND,ee.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:Bm({file:"invalid-stream-type.md",message:O("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===ee.LIVE?this.getAttribute(k.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break}case k.FULLSCREEN_ELEMENT:{if(i!=null||i!==e){let a=hl.getElementById(i),r=a==null?void 0:a.querySelector("mux-player");this.mediaController&&a&&r&&(this.mediaController.fullscreenElement=a)}break}case _.CAP_RENDITION_TO_PLAYER_SIZE:{(i==null||i!==e)&&(this.capRenditionToPlayerSize=i!=null?!0:void 0);break}case _.MAX_RECONNECT_RETRIES:{(i==null||i!==e)&&(this.maxReconnectRetries=Number(i));break}}[_.PLAYBACK_ID,fi.SRC,k.PLAYBACK_TOKEN].includes(t)&&e!==i&&Je(this,Ar,{...B(this,Ar),...Qm}),_e(this,pe,ya).call(this,{[VA(t)]:i})}async requestFullscreen(t){var e;if(!(!this.mediaController||this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new ti.CustomEvent(x.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((i,a)=>{var r;(r=this.mediaController)==null||r.addEventListener(oi.MEDIA_IS_FULLSCREEN,()=>i(),{once:!0})})}async exitFullscreen(){var t;if(!(!this.mediaController||!this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new ti.CustomEvent(x.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,i)=>{var a;(a=this.mediaController)==null||a.addEventListener(oi.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var t;return(t=this.getAttribute(_.PREFER_CMCD))!=null?t:void 0}set preferCmcd(t){t!==this.preferCmcd&&(t?Bo.includes(t)?this.setAttribute(_.PREFER_CMCD,t):vi(`Invalid value for preferCmcd. Must be one of ${Bo.join()}`):this.removeAttribute(_.PREFER_CMCD))}get hasPlayed(){var t,e;return(e=(t=this.mediaController)==null?void 0:t.hasAttribute(h.MEDIA_HAS_PLAYED))!=null?e:!1}get inLiveWindow(){var t;return(t=this.mediaController)==null?void 0:t.hasAttribute(h.MEDIA_TIME_IS_LIVE)}get _hls(){var t;return(t=this.media)==null?void 0:t._hls}get mux(){var t;return(t=this.media)==null?void 0:t.mux}get theme(){var t;return(t=this.getAttribute(k.THEME))!=null?t:bk}set theme(t){this.setAttribute(k.THEME,`${t}`)}get themeProps(){let t=this.mediaTheme;if(!t)return;let e={};for(let i of t.getAttributeNames()){if(Du.includes(i))continue;let a=t.getAttribute(i);e[Qf(i)]=a===""?!0:a}return e}set themeProps(t){var e,i;_e(this,pe,Ei).call(this);let a={...this.themeProps,...t};for(let r in a){if(Du.includes(r))continue;let n=t==null?void 0:t[r];typeof n=="boolean"||n==null?(e=this.mediaTheme)==null||e.toggleAttribute(Lu(r),!!n):(i=this.mediaTheme)==null||i.setAttribute(Lu(r),n)}}get playbackId(){var t;return(t=this.getAttribute(_.PLAYBACK_ID))!=null?t:void 0}set playbackId(t){t?this.setAttribute(_.PLAYBACK_ID,t):this.removeAttribute(_.PLAYBACK_ID)}get src(){var t,e;return this.playbackId?(t=Wt(this,fi.SRC))!=null?t:void 0:(e=this.getAttribute(fi.SRC))!=null?e:void 0}set src(t){t?this.setAttribute(fi.SRC,t):this.removeAttribute(fi.SRC)}get poster(){var t;let e=this.getAttribute(fi.POSTER);if(e!=null)return e;let{tokens:i}=this;if(i.playback&&!i.thumbnail){vi("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return WA(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(t=this.thumbnailTime)!=null?t:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(t){t||t===""?this.setAttribute(fi.POSTER,t):this.removeAttribute(fi.POSTER)}get storyboardSrc(){var t;return(t=this.getAttribute(k.STORYBOARD_SRC))!=null?t:void 0}set storyboardSrc(t){t?this.setAttribute(k.STORYBOARD_SRC,t):this.removeAttribute(k.STORYBOARD_SRC)}get storyboard(){let{tokens:t}=this;if(this.storyboardSrc&&!t.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[ee.LIVE,ee.UNKNOWN].includes(this.streamType)||t.playback&&!t.storyboard))return FA(this.playbackId,{customDomain:this.customDomain,token:t.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(k.AUDIO)}set audio(t){if(!t){this.removeAttribute(k.AUDIO);return}this.setAttribute(k.AUDIO,"")}get hotkeys(){return B(this,Po)}get nohotkeys(){return this.hasAttribute(k.NOHOTKEYS)}set nohotkeys(t){if(!t){this.removeAttribute(k.NOHOTKEYS);return}this.setAttribute(k.NOHOTKEYS,"")}get thumbnailTime(){return Ke(this.getAttribute(k.THUMBNAIL_TIME))}set thumbnailTime(t){this.setAttribute(k.THUMBNAIL_TIME,`${t}`)}get videoTitle(){var t,e;return(e=(t=this.getAttribute(k.VIDEO_TITLE))!=null?t:this.getAttribute(k.TITLE))!=null?e:""}set videoTitle(t){t!==this.videoTitle&&(t?this.setAttribute(k.VIDEO_TITLE,t):this.removeAttribute(k.VIDEO_TITLE))}get placeholder(){var t;return(t=Wt(this,k.PLACEHOLDER))!=null?t:""}set placeholder(t){this.setAttribute(k.PLACEHOLDER,`${t}`)}get primaryColor(){var t,e;let i=this.getAttribute(k.PRIMARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=ti.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_primary-color"))==null?void 0:e.trim(),i))return i}set primaryColor(t){this.setAttribute(k.PRIMARY_COLOR,`${t}`)}get secondaryColor(){var t,e;let i=this.getAttribute(k.SECONDARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=ti.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_secondary-color"))==null?void 0:e.trim(),i))return i}set secondaryColor(t){this.setAttribute(k.SECONDARY_COLOR,`${t}`)}get accentColor(){var t,e;let i=this.getAttribute(k.ACCENT_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=ti.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_accent-color"))==null?void 0:e.trim(),i))return i}set accentColor(t){this.setAttribute(k.ACCENT_COLOR,`${t}`)}get defaultShowRemainingTime(){return this.hasAttribute(k.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(t){t?this.setAttribute(k.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(k.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(k.PLAYBACK_RATES))return this.getAttribute(k.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(t=>Number(t)).filter(t=>!Number.isNaN(t)).sort((t,e)=>t-e)}set playbackRates(t){if(!t){this.removeAttribute(k.PLAYBACK_RATES);return}this.setAttribute(k.PLAYBACK_RATES,t.join(" "))}get forwardSeekOffset(){var t;return(t=Ke(this.getAttribute(k.FORWARD_SEEK_OFFSET)))!=null?t:10}set forwardSeekOffset(t){this.setAttribute(k.FORWARD_SEEK_OFFSET,`${t}`)}get backwardSeekOffset(){var t;return(t=Ke(this.getAttribute(k.BACKWARD_SEEK_OFFSET)))!=null?t:10}set backwardSeekOffset(t){this.setAttribute(k.BACKWARD_SEEK_OFFSET,`${t}`)}get defaultHiddenCaptions(){return this.hasAttribute(k.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(t){t?this.setAttribute(k.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(k.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return Ke(this.getAttribute(k.DEFAULT_DURATION))}set defaultDuration(t){t==null?this.removeAttribute(k.DEFAULT_DURATION):this.setAttribute(k.DEFAULT_DURATION,`${t}`)}get playerInitTime(){return this.hasAttribute(_.PLAYER_INIT_TIME)?Ke(this.getAttribute(_.PLAYER_INIT_TIME)):B(this,Oo)}set playerInitTime(t){t!=this.playerInitTime&&(t==null?this.removeAttribute(_.PLAYER_INIT_TIME):this.setAttribute(_.PLAYER_INIT_TIME,`${+t}`))}get playerSoftwareName(){var t;return(t=this.getAttribute(_.PLAYER_SOFTWARE_NAME))!=null?t:zm}get playerSoftwareVersion(){var t;return(t=this.getAttribute(_.PLAYER_SOFTWARE_VERSION))!=null?t:Gm}get beaconCollectionDomain(){var t;return(t=this.getAttribute(_.BEACON_COLLECTION_DOMAIN))!=null?t:void 0}set beaconCollectionDomain(t){t!==this.beaconCollectionDomain&&(t?this.setAttribute(_.BEACON_COLLECTION_DOMAIN,t):this.removeAttribute(_.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var t;return(t=this.getAttribute(_.MAX_RESOLUTION))!=null?t:void 0}set maxResolution(t){t!==this.maxResolution&&(t?this.setAttribute(_.MAX_RESOLUTION,t):this.removeAttribute(_.MAX_RESOLUTION))}get minResolution(){var t;return(t=this.getAttribute(_.MIN_RESOLUTION))!=null?t:void 0}set minResolution(t){t!==this.minResolution&&(t?this.setAttribute(_.MIN_RESOLUTION,t):this.removeAttribute(_.MIN_RESOLUTION))}get maxAutoResolution(){var t;return(t=this.getAttribute(_.MAX_AUTO_RESOLUTION))!=null?t:void 0}set maxAutoResolution(t){t==null?this.removeAttribute(_.MAX_AUTO_RESOLUTION):this.setAttribute(_.MAX_AUTO_RESOLUTION,t)}get renditionOrder(){var t;return(t=this.getAttribute(_.RENDITION_ORDER))!=null?t:void 0}set renditionOrder(t){t!==this.renditionOrder&&(t?this.setAttribute(_.RENDITION_ORDER,t):this.removeAttribute(_.RENDITION_ORDER))}get programStartTime(){return Ke(this.getAttribute(_.PROGRAM_START_TIME))}set programStartTime(t){t==null?this.removeAttribute(_.PROGRAM_START_TIME):this.setAttribute(_.PROGRAM_START_TIME,`${t}`)}get programEndTime(){return Ke(this.getAttribute(_.PROGRAM_END_TIME))}set programEndTime(t){t==null?this.removeAttribute(_.PROGRAM_END_TIME):this.setAttribute(_.PROGRAM_END_TIME,`${t}`)}get assetStartTime(){return Ke(this.getAttribute(_.ASSET_START_TIME))}set assetStartTime(t){t==null?this.removeAttribute(_.ASSET_START_TIME):this.setAttribute(_.ASSET_START_TIME,`${t}`)}get assetEndTime(){return Ke(this.getAttribute(_.ASSET_END_TIME))}set assetEndTime(t){t==null?this.removeAttribute(_.ASSET_END_TIME):this.setAttribute(_.ASSET_END_TIME,`${t}`)}get extraSourceParams(){return this.hasAttribute(k.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(k.EXTRA_SOURCE_PARAMS)).entries()].reduce((t,[e,i])=>(t[e]=i,t),{}):Ik}set extraSourceParams(t){t==null?this.removeAttribute(k.EXTRA_SOURCE_PARAMS):this.setAttribute(k.EXTRA_SOURCE_PARAMS,new URLSearchParams(t).toString())}get customDomain(){var t;return(t=this.getAttribute(_.CUSTOM_DOMAIN))!=null?t:void 0}set customDomain(t){t!==this.customDomain&&(t?this.setAttribute(_.CUSTOM_DOMAIN,t):this.removeAttribute(_.CUSTOM_DOMAIN))}get envKey(){var t;return(t=Wt(this,_.ENV_KEY))!=null?t:void 0}set envKey(t){this.setAttribute(_.ENV_KEY,`${t}`)}get noVolumePref(){return this.hasAttribute(k.NO_VOLUME_PREF)}set noVolumePref(t){t?this.setAttribute(k.NO_VOLUME_PREF,""):this.removeAttribute(k.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(k.NO_MUTED_PREF)}set noMutedPref(t){t?this.setAttribute(k.NO_MUTED_PREF,""):this.removeAttribute(k.NO_MUTED_PREF)}get debug(){return Wt(this,_.DEBUG)!=null}set debug(t){t?this.setAttribute(_.DEBUG,""):this.removeAttribute(_.DEBUG)}get disableTracking(){return Wt(this,_.DISABLE_TRACKING)!=null}set disableTracking(t){this.toggleAttribute(_.DISABLE_TRACKING,!!t)}get disableCookies(){return Wt(this,_.DISABLE_COOKIES)!=null}set disableCookies(t){t?this.setAttribute(_.DISABLE_COOKIES,""):this.removeAttribute(_.DISABLE_COOKIES)}get streamType(){var t,e,i;return(i=(e=this.getAttribute(_.STREAM_TYPE))!=null?e:(t=this.media)==null?void 0:t.streamType)!=null?i:ee.UNKNOWN}set streamType(t){this.setAttribute(_.STREAM_TYPE,`${t}`)}get defaultStreamType(){var t,e,i;return(i=(e=this.getAttribute(k.DEFAULT_STREAM_TYPE))!=null?e:(t=this.mediaController)==null?void 0:t.getAttribute(k.DEFAULT_STREAM_TYPE))!=null?i:ee.ON_DEMAND}set defaultStreamType(t){t?this.setAttribute(k.DEFAULT_STREAM_TYPE,t):this.removeAttribute(k.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var t,e;return this.hasAttribute(k.TARGET_LIVE_WINDOW)?+this.getAttribute(k.TARGET_LIVE_WINDOW):(e=(t=this.media)==null?void 0:t.targetLiveWindow)!=null?e:Number.NaN}set targetLiveWindow(t){t==this.targetLiveWindow||Number.isNaN(t)&&Number.isNaN(this.targetLiveWindow)||(t==null?this.removeAttribute(k.TARGET_LIVE_WINDOW):this.setAttribute(k.TARGET_LIVE_WINDOW,`${+t}`))}get liveEdgeStart(){var t;return(t=this.media)==null?void 0:t.liveEdgeStart}get startTime(){return Ke(Wt(this,_.START_TIME))}set startTime(t){this.setAttribute(_.START_TIME,`${t}`)}get initialBandwidthEstimateKbps(){return Ke(Wt(this,_.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(t){t==null?this.removeAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${t}`)}get initialEstimateSegments(){return Ke(Wt(this,_.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(t){t==null?this.removeAttribute(_.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(_.INITIAL_ESTIMATE_SEGMENTS,`${t}`)}get minPreloadSegments(){return Ke(Wt(this,_.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(t){t==null?this.removeAttribute(_.MIN_PRELOAD_SEGMENTS):this.setAttribute(_.MIN_PRELOAD_SEGMENTS,`${t}`)}get preferPlayback(){let t=this.getAttribute(_.PREFER_PLAYBACK);if(t===ii.MSE||t===ii.NATIVE)return t}set preferPlayback(t){t!==this.preferPlayback&&(t===ii.MSE||t===ii.NATIVE?this.setAttribute(_.PREFER_PLAYBACK,t):this.removeAttribute(_.PREFER_PLAYBACK))}get metadata(){var t;return(t=this.media)==null?void 0:t.metadata}set metadata(t){if(_e(this,pe,Ei).call(this),!this.media){Xe("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...An(this),...t}}get _hlsConfig(){var t;return(t=this.media)==null?void 0:t._hlsConfig}set _hlsConfig(t){if(_e(this,pe,Ei).call(this),!this.media){Xe("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=t}async addCuePoints(t){var e;if(_e(this,pe,Ei).call(this),!this.media){Xe("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(e=this.media)==null?void 0:e.addCuePoints(t)}get activeCuePoint(){var t;return(t=this.media)==null?void 0:t.activeCuePoint}get cuePoints(){var t,e;return(e=(t=this.media)==null?void 0:t.cuePoints)!=null?e:[]}addChapters(t){var e;if(_e(this,pe,Ei).call(this),!this.media){Xe("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(e=this.media)==null?void 0:e.addChapters(t)}get activeChapter(){var t;return(t=this.media)==null?void 0:t.activeChapter}get chapters(){var t,e;return(e=(t=this.media)==null?void 0:t.chapters)!=null?e:[]}getStartDate(){var t;return(t=this.media)==null?void 0:t.getStartDate()}get currentPdt(){var t;return(t=this.media)==null?void 0:t.currentPdt}get tokens(){let t=this.getAttribute(k.PLAYBACK_TOKEN),e=this.getAttribute(k.DRM_TOKEN),i=this.getAttribute(k.THUMBNAIL_TOKEN),a=this.getAttribute(k.STORYBOARD_TOKEN);return{...B(this,No),...t!=null?{playback:t}:{},...e!=null?{drm:e}:{},...i!=null?{thumbnail:i}:{},...a!=null?{storyboard:a}:{}}}set tokens(t){Je(this,No,t??{})}get playbackToken(){var t;return(t=this.getAttribute(k.PLAYBACK_TOKEN))!=null?t:void 0}set playbackToken(t){this.setAttribute(k.PLAYBACK_TOKEN,`${t}`)}get drmToken(){var t;return(t=this.getAttribute(k.DRM_TOKEN))!=null?t:void 0}set drmToken(t){this.setAttribute(k.DRM_TOKEN,`${t}`)}get thumbnailToken(){var t;return(t=this.getAttribute(k.THUMBNAIL_TOKEN))!=null?t:void 0}set thumbnailToken(t){this.setAttribute(k.THUMBNAIL_TOKEN,`${t}`)}get storyboardToken(){var t;return(t=this.getAttribute(k.STORYBOARD_TOKEN))!=null?t:void 0}set storyboardToken(t){this.setAttribute(k.STORYBOARD_TOKEN,`${t}`)}addTextTrack(t,e,i,a){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return Bu(n,t,e,i,a)}removeTextTrack(t){var e;let i=(e=this.media)==null?void 0:e.nativeEl;if(i)return mg(i,t)}get textTracks(){var t;return(t=this.media)==null?void 0:t.textTracks}get castReceiver(){var t;return(t=this.getAttribute(k.CAST_RECEIVER))!=null?t:void 0}set castReceiver(t){t!==this.castReceiver&&(t?this.setAttribute(k.CAST_RECEIVER,t):this.removeAttribute(k.CAST_RECEIVER))}get castCustomData(){var t;return(t=this.media)==null?void 0:t.castCustomData}set castCustomData(t){if(!this.media){Xe("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=t}get noTooltips(){return this.hasAttribute(k.NO_TOOLTIPS)}set noTooltips(t){if(!t){this.removeAttribute(k.NO_TOOLTIPS);return}this.setAttribute(k.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(k.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(t){t?this.setAttribute(k.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(k.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var t;return(t=this.media)==null?void 0:t.capRenditionToPlayerSize}set capRenditionToPlayerSize(t){if(!this.media){Xe("underlying media element missing when trying to set capRenditionToPlayerSize");return}this.media.capRenditionToPlayerSize=t}get maxReconnectRetries(){var t;return(t=this.media)==null?void 0:t.maxReconnectRetries}set maxReconnectRetries(t){if(!this.media){Xe("underlying media element missing when trying to set maxReconnectRetries");return}this.media.maxReconnectRetries=t}};Oo=new WeakMap,Nn=new WeakMap,No=new WeakMap,pa=new WeakMap,Po=new WeakMap,Pn=new WeakMap,ml=new WeakMap,pl=new WeakMap,Tr=new WeakMap,vl=new WeakMap,fl=new WeakMap,El=new WeakMap,Un=new WeakMap,Ar=new WeakMap,_l=new WeakMap,pe=new WeakSet,Ei=function(){var t,e,i,a;if(!B(this,Nn)){Je(this,Nn,!0),_e(this,pe,ya).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof ti.HTMLElement))throw""}catch{Xe("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{Xe("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof Y1))throw""}catch{Xe("<media-controller> failed to upgrade!")}_e(this,pe,jm).call(this),_e(this,pe,Zm).call(this),_e(this,pe,Xm).call(this),Je(this,pa,(e=(t=this.mediaController)==null?void 0:t.hasAttribute(U.USER_INACTIVE))!=null?e:!0),_e(this,pe,Jm).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",B(this,ml)),(a=this.media)==null||a.addEventListener("loadstart",B(this,pl)),this.media&&(this.media.metadata=An(this))}},sE=function(){var t,e;try{(t=window==null?void 0:window.CSS)==null||t.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(e=window==null?void 0:window.CSS)==null||e.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},Mu=function(t){Object.assign(B(this,Ar),t),_e(this,pe,ya).call(this)},ya=function(t={}){ok(dk(gk(this,{...B(this,Ar),...t})),this.shadowRoot)},jm=function(){let t=e=>{var i,a;if(!(e!=null&&e.startsWith("theme-")))return;let r=e.replace(/^theme-/,"");if(Du.includes(r))return;let n=this.getAttribute(e);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};Je(this,Pn,new MutationObserver(e=>{for(let{attributeName:i}of e)t(i)})),B(this,Pn).observe(this,{attributes:!0}),this.getAttributeNames().forEach(t)},Zm=function(){var t,e;this.addEventListener("error",B(this,_l)),this.addEventListener("click",B(this,vl)),(t=this.mediaTheme)==null||t.addEventListener("close",B(this,fl)),(e=this.mediaTheme)==null||e.addEventListener("focusin",B(this,El)),this.media&&(this.media.errorTranslator=(i={})=>{var a,r,n;if(!(((a=this.media)==null?void 0:a.error)instanceof L))return i;let s=rE((r=this.media)==null?void 0:r.error);return{player_error_code:(n=this.media)==null?void 0:n.error.code,player_error_message:s.message?String(s.message):i.player_error_message,player_error_context:s.context?String(s.context):i.player_error_context}})},Xm=function(){var t,e,i,a;(e=(t=this.media)==null?void 0:t.textTracks)==null||e.addEventListener("addtrack",B(this,Tr)),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",B(this,Tr))},Jm=function(){var t,e;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===ee.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(u,p,m=!1)=>{r()||Array.from(u&&u.activeCues||[]).forEach(c=>{if(!(!c.snapToLines||c.line<-5||c.line>=0&&c.line<10))if(!p||this.paused){let d=c.text.split(`
`).length,v=-3;this.streamType===ee.LIVE&&(v=-2);let f=v-d;if(c.line===f&&!m)return;a.has(c)||a.set(c,c.line),c.line=f}else setTimeout(()=>{c.line=a.get(c)||"auto"},500)})},s=()=>{var u,p;n(i,(p=(u=this.mediaController)==null?void 0:u.hasAttribute(U.USER_INACTIVE))!=null?p:!1)},o=()=>{var u,p;let m=Array.from(((p=(u=this.mediaController)==null?void 0:u.media)==null?void 0:p.textTracks)||[]).filter(c=>["subtitles","captions"].includes(c.kind)&&c.mode==="showing")[0];m!==i&&(i==null||i.removeEventListener("cuechange",s)),i=m,i==null||i.addEventListener("cuechange",s),n(i,B(this,pa))};o(),(t=this.textTracks)==null||t.addEventListener("change",o),(e=this.textTracks)==null||e.addEventListener("addtrack",o);let l=()=>{var u,p;let m=(p=(u=this.mediaController)==null?void 0:u.hasAttribute(U.USER_INACTIVE))!=null?p:!0;B(this,pa)!==m&&(Je(this,pa,m),n(i,B(this,pa)))};this.addEventListener("userinactivechange",l),Je(this,Un,()=>{var u,p;i==null||i.removeEventListener("cuechange",s),(u=this.textTracks)==null||u.removeEventListener("change",o),(p=this.textTracks)==null||p.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};function Wt(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var ep=Rk,oE=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends oE{}globalThis.DocumentFragment=t}var Lk=class extends oE{},Ck={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Lk)}},Dk={customElements:Ck},Mk=typeof window>"u"||typeof globalThis.customElements>"u",ud=Mk?Dk:globalThis;ud.customElements.get("mux-player")||(ud.customElements.define("mux-player",ep),ud.MuxPlayerElement=ep);var lE=parseInt($n.version)>=19,tp={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},xk=t=>t==null,Ok=(t,e)=>xk(e)?!1:t in e,Nk=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),Pk=(t,e)=>{if(!(!lE&&typeof e=="boolean"&&!e)){if(Ok(t,tp))return tp[t];if(typeof e<"u")return/[A-Z]/.test(t)?Nk(t):t}},Uk=(t,e)=>!lE&&typeof t=="boolean"?"":t,$k=(t={})=>{let{ref:e,...i}=t;return Object.entries(i).reduce((a,[r,n])=>{let s=Pk(r,n);if(!s)return a;let o=Uk(n);return a[s]=o,a},{})};function ip(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Hk(...t){return e=>{let i=!1,a=t.map(r=>{let n=ip(r,e);return!i&&typeof n=="function"&&(i=!0),n});if(i)return()=>{for(let r=0;r<a.length;r++){let n=a[r];typeof n=="function"?n():ip(t[r],null)}}}}function Bk(...t){return Hn.useCallback(Hk(...t),t)}var Wk=Object.prototype.hasOwnProperty,Fk=(t,e)=>{if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(Array.isArray(t))return!Array.isArray(e)||t.length!==e.length?!1:t.some((r,n)=>e[n]===r);let i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(let r=0;r<i.length;r++)if(!Wk.call(e,i[r])||!Object.is(t[i[r]],e[i[r]]))return!1;return!0},dE=(t,e,i)=>!Fk(e,t[i]),Kk=(t,e,i)=>{t[i]=e},Vk=(t,e,i,a=Kk,r=dE)=>Hn.useEffect(()=>{let n=i==null?void 0:i.current;n&&r(n,e,t)&&a(n,e,t)},[i==null?void 0:i.current,e]),Ft=Vk,qk=()=>{try{return"3.13.2"}catch{}return"UNKNOWN"},Yk=qk(),Gk=()=>Yk,de=(t,e,i)=>Hn.useEffect(()=>{let a=e==null?void 0:e.current;if(!a||!i)return;let r=t,n=i;return a.addEventListener(r,n),()=>{a.removeEventListener(r,n)}},[e==null?void 0:e.current,i,t]),zk=$n.forwardRef(({children:t,...e},i)=>$n.createElement("mux-player",{suppressHydrationWarning:!0,...$k(e),ref:i},t)),Qk=(t,e)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:u,onDurationChange:p,onVolumeChange:m,onRateChange:c,onResize:d,onWaiting:v,onPlay:f,onPlaying:b,onTimeUpdate:g,onPause:y,onSeeking:E,onSeeked:S,onStalled:M,onSuspend:C,onEnded:I,onError:H,onCuePointChange:q,onChapterChange:F,metadata:W,tokens:He,paused:it,playbackId:at,playbackRates:ge,currentTime:Ve,themeProps:Ut,extraSourceParams:qe,castCustomData:yt,_hlsConfig:rt,...De}=e;return Ft("tokens",He,t),Ft("playbackId",at,t),Ft("playbackRates",ge,t),Ft("metadata",W,t),Ft("extraSourceParams",qe,t),Ft("_hlsConfig",rt,t),Ft("themeProps",Ut,t),Ft("castCustomData",yt,t),Ft("paused",it,t,(Be,Ye)=>{Ye!=null&&(Ye?Be.pause():Be.play())},(Be,Ye,di)=>Be.hasAttribute("autoplay")&&!Be.hasPlayed?!1:dE(Be,Ye,di)),Ft("currentTime",Ve,t,(Be,Ye)=>{Ye!=null&&(Be.currentTime=Ye)}),de("abort",t,i),de("canplay",t,a),de("canplaythrough",t,r),de("emptied",t,n),de("loadstart",t,s),de("loadeddata",t,o),de("loadedmetadata",t,l),de("progress",t,u),de("durationchange",t,p),de("volumechange",t,m),de("ratechange",t,c),de("resize",t,d),de("waiting",t,v),de("play",t,f),de("playing",t,b),de("timeupdate",t,g),de("pause",t,y),de("seeking",t,E),de("seeked",t,S),de("stalled",t,M),de("suspend",t,C),de("ended",t,I),de("error",t,H),de("cuepointchange",t,q),de("chapterchange",t,F),[De]},jk=Gk(),Zk="mux-player-react",Xk=$n.forwardRef((t,e)=>{var i;let a=Hn.useRef(null),r=Bk(a,e),[n]=Qk(a,t),[s]=Hn.useState((i=t.playerInitTime)!=null?i:Vu());return $n.createElement(zk,{ref:r,defaultHiddenCaptions:t.defaultHiddenCaptions,playerSoftwareName:Zk,playerSoftwareVersion:jk,playerInitTime:s,...n})}),_S=Xk;export{rS as MaxResolution,L as MediaError,nS as MinResolution,sS as RenditionOrder,_S as default,Vu as generatePlayerInitTime,Zk as playerSoftwareName,jk as playerSoftwareVersion};
