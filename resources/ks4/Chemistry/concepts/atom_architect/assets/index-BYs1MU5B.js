(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function kg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var dd={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lx;function wS(){if(Lx)return Po;Lx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Po.Fragment=t,Po.jsx=i,Po.jsxs=i,Po}var Ox;function DS(){return Ox||(Ox=1,dd.exports=wS()),dd.exports}var K=DS(),hd={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px;function US(){if(Px)return de;Px=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(L,tt,yt){this.props=L,this.context=tt,this.refs=M,this.updater=yt||b}x.prototype.isReactComponent={},x.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function O(){}O.prototype=x.prototype;function N(L,tt,yt){this.props=L,this.context=tt,this.refs=M,this.updater=yt||b}var P=N.prototype=new O;P.constructor=N,T(P,x.prototype),P.isPureReactComponent=!0;var F=Array.isArray;function D(){}var I={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function w(L,tt,yt){var bt=yt.ref;return{$$typeof:o,type:L,key:tt,ref:bt!==void 0?bt:null,props:yt}}function C(L,tt){return w(L.type,tt,L.props)}function G(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function Q(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return tt[yt]})}var lt=/\/+/g;function pt(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?Q(""+L.key):tt.toString(36)}function ht(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(D,D):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function B(L,tt,yt,bt,zt){var at=typeof L;(at==="undefined"||at==="boolean")&&(L=null);var dt=!1;if(L===null)dt=!0;else switch(at){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(L.$$typeof){case o:case t:dt=!0;break;case g:return dt=L._init,B(dt(L._payload),tt,yt,bt,zt)}}if(dt)return zt=zt(L),dt=bt===""?"."+pt(L,0):bt,F(zt)?(yt="",dt!=null&&(yt=dt.replace(lt,"$&/")+"/"),B(zt,tt,yt,"",function(Ht){return Ht})):zt!=null&&(G(zt)&&(zt=C(zt,yt+(zt.key==null||L&&L.key===zt.key?"":(""+zt.key).replace(lt,"$&/")+"/")+dt)),tt.push(zt)),1;dt=0;var At=bt===""?".":bt+":";if(F(L))for(var Ut=0;Ut<L.length;Ut++)bt=L[Ut],at=At+pt(bt,Ut),dt+=B(bt,tt,yt,at,zt);else if(Ut=y(L),typeof Ut=="function")for(L=Ut.call(L),Ut=0;!(bt=L.next()).done;)bt=bt.value,at=At+pt(bt,Ut++),dt+=B(bt,tt,yt,at,zt);else if(at==="object"){if(typeof L.then=="function")return B(ht(L),tt,yt,bt,zt);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return dt}function W(L,tt,yt){if(L==null)return L;var bt=[],zt=0;return B(L,bt,"","",function(at){return tt.call(yt,at,zt++)}),bt}function k(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var ut=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},ft={map:W,forEach:function(L,tt,yt){W(L,function(){tt.apply(this,arguments)},yt)},count:function(L){var tt=0;return W(L,function(){tt++}),tt},toArray:function(L){return W(L,function(tt){return tt})||[]},only:function(L){if(!G(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return de.Activity=_,de.Children=ft,de.Component=x,de.Fragment=i,de.Profiler=l,de.PureComponent=N,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,de.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},de.cache=function(L){return function(){return L.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(L,tt,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var bt=T({},L.props),zt=L.key;if(tt!=null)for(at in tt.key!==void 0&&(zt=""+tt.key),tt)!j.call(tt,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&tt.ref===void 0||(bt[at]=tt[at]);var at=arguments.length-2;if(at===1)bt.children=yt;else if(1<at){for(var dt=Array(at),At=0;At<at;At++)dt[At]=arguments[At+2];bt.children=dt}return w(L.type,zt,bt)},de.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},de.createElement=function(L,tt,yt){var bt,zt={},at=null;if(tt!=null)for(bt in tt.key!==void 0&&(at=""+tt.key),tt)j.call(tt,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(zt[bt]=tt[bt]);var dt=arguments.length-2;if(dt===1)zt.children=yt;else if(1<dt){for(var At=Array(dt),Ut=0;Ut<dt;Ut++)At[Ut]=arguments[Ut+2];zt.children=At}if(L&&L.defaultProps)for(bt in dt=L.defaultProps,dt)zt[bt]===void 0&&(zt[bt]=dt[bt]);return w(L,at,zt)},de.createRef=function(){return{current:null}},de.forwardRef=function(L){return{$$typeof:h,render:L}},de.isValidElement=G,de.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:k}},de.memo=function(L,tt){return{$$typeof:p,type:L,compare:tt===void 0?null:tt}},de.startTransition=function(L){var tt=I.T,yt={};I.T=yt;try{var bt=L(),zt=I.S;zt!==null&&zt(yt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(D,ut)}catch(at){ut(at)}finally{tt!==null&&yt.types!==null&&(tt.types=yt.types),I.T=tt}},de.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},de.use=function(L){return I.H.use(L)},de.useActionState=function(L,tt,yt){return I.H.useActionState(L,tt,yt)},de.useCallback=function(L,tt){return I.H.useCallback(L,tt)},de.useContext=function(L){return I.H.useContext(L)},de.useDebugValue=function(){},de.useDeferredValue=function(L,tt){return I.H.useDeferredValue(L,tt)},de.useEffect=function(L,tt){return I.H.useEffect(L,tt)},de.useEffectEvent=function(L){return I.H.useEffectEvent(L)},de.useId=function(){return I.H.useId()},de.useImperativeHandle=function(L,tt,yt){return I.H.useImperativeHandle(L,tt,yt)},de.useInsertionEffect=function(L,tt){return I.H.useInsertionEffect(L,tt)},de.useLayoutEffect=function(L,tt){return I.H.useLayoutEffect(L,tt)},de.useMemo=function(L,tt){return I.H.useMemo(L,tt)},de.useOptimistic=function(L,tt){return I.H.useOptimistic(L,tt)},de.useReducer=function(L,tt,yt){return I.H.useReducer(L,tt,yt)},de.useRef=function(L){return I.H.useRef(L)},de.useState=function(L){return I.H.useState(L)},de.useSyncExternalStore=function(L,tt,yt){return I.H.useSyncExternalStore(L,tt,yt)},de.useTransition=function(){return I.H.useTransition()},de.version="19.2.1",de}var zx;function Hh(){return zx||(zx=1,hd.exports=US()),hd.exports}var he=Hh();const NS=kg(he);var pd={exports:{}},zo={},md={exports:{}},xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix;function LS(){return Ix||(Ix=1,(function(o){function t(B,W){var k=B.length;B.push(W);t:for(;0<k;){var ut=k-1>>>1,ft=B[ut];if(0<l(ft,W))B[ut]=W,B[k]=ft,k=ut;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var W=B[0],k=B.pop();if(k!==W){B[0]=k;t:for(var ut=0,ft=B.length,L=ft>>>1;ut<L;){var tt=2*(ut+1)-1,yt=B[tt],bt=tt+1,zt=B[bt];if(0>l(yt,k))bt<ft&&0>l(zt,yt)?(B[ut]=zt,B[bt]=k,ut=bt):(B[ut]=yt,B[tt]=k,ut=tt);else if(bt<ft&&0>l(zt,k))B[ut]=zt,B[bt]=k,ut=bt;else break t}}return W}function l(B,W){var k=B.sortIndex-W.sortIndex;return k!==0?k:B.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,_=null,S=3,y=!1,b=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function P(B){for(var W=i(p);W!==null;){if(W.callback===null)s(p);else if(W.startTime<=B)s(p),W.sortIndex=W.expirationTime,t(m,W);else break;W=i(p)}}function F(B){if(T=!1,P(B),!b)if(i(m)!==null)b=!0,D||(D=!0,Q());else{var W=i(p);W!==null&&ht(F,W.startTime-B)}}var D=!1,I=-1,j=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<j)}function G(){if(M=!1,D){var B=o.unstable_now();w=B;var W=!0;try{t:{b=!1,T&&(T=!1,O(I),I=-1),y=!0;var k=S;try{e:{for(P(B),_=i(m);_!==null&&!(_.expirationTime>B&&C());){var ut=_.callback;if(typeof ut=="function"){_.callback=null,S=_.priorityLevel;var ft=ut(_.expirationTime<=B);if(B=o.unstable_now(),typeof ft=="function"){_.callback=ft,P(B),W=!0;break e}_===i(m)&&s(m),P(B)}else s(m);_=i(m)}if(_!==null)W=!0;else{var L=i(p);L!==null&&ht(F,L.startTime-B),W=!1}}break t}finally{_=null,S=k,y=!1}W=void 0}}finally{W?Q():D=!1}}}var Q;if(typeof N=="function")Q=function(){N(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,pt=lt.port2;lt.port1.onmessage=G,Q=function(){pt.postMessage(null)}}else Q=function(){x(G,0)};function ht(B,W){I=x(function(){B(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(B){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var k=S;S=W;try{return B()}finally{S=k}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var k=S;S=B;try{return W()}finally{S=k}},o.unstable_scheduleCallback=function(B,W,k){var ut=o.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?ut+k:ut):k=ut,B){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=k+ft,B={id:g++,callback:W,priorityLevel:B,startTime:k,expirationTime:ft,sortIndex:-1},k>ut?(B.sortIndex=k,t(p,B),i(m)===null&&B===i(p)&&(T?(O(I),I=-1):T=!0,ht(F,k-ut))):(B.sortIndex=ft,t(m,B),b||y||(b=!0,D||(D=!0,Q()))),B},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(B){var W=S;return function(){var k=S;S=W;try{return B.apply(this,arguments)}finally{S=k}}}})(xd)),xd}var Bx;function OS(){return Bx||(Bx=1,md.exports=LS()),md.exports}var gd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx;function PS(){if(Fx)return Ln;Fx=1;var o=Hh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Ln.flushSync=function(m){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=g,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.2.1",Ln}var Hx;function zS(){if(Hx)return gd.exports;Hx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),gd.exports=PS(),gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gx;function IS(){if(Gx)return zo;Gx=1;var o=OS(),t=Hh(),i=zS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,r=f;break}if(A===r){v=!0,r=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,r=u;break}if(A===r){v=!0,r=f,a=u;break}A=A.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case D:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:pt(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return pt(e(n))}catch{}}return null}var ht=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},ut=[],ft=-1;function L(e){return{current:e}}function tt(e){0>ft||(e.current=ut[ft],ut[ft]=null,ft--)}function yt(e,n){ft++,ut[ft]=e.current,e.current=n}var bt=L(null),zt=L(null),at=L(null),dt=L(null);function At(e,n){switch(yt(at,n),yt(zt,e),yt(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?nx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=nx(n),e=ix(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(bt),yt(bt,e)}function Ut(){tt(bt),tt(zt),tt(at)}function Ht(e){e.memoizedState!==null&&yt(dt,e);var n=bt.current,a=ix(n,e.type);n!==a&&(yt(zt,e),yt(bt,a))}function oe(e){zt.current===e&&(tt(bt),tt(zt)),dt.current===e&&(tt(dt),Uo._currentValue=k)}var ie,Gt;function Pt(e){if(ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ie=n&&n[1]||"",Gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ie+e+Gt}var z=!1;function Yt(e,n){if(!e||z)return"";z=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var st=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){st=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){st=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&st&&typeof ct.stack=="string")return[ct.stack,st.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var H=v.split(`
`),nt=A.split(`
`);for(u=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(r===H.length||u===nt.length)for(r=H.length-1,u=nt.length-1;1<=r&&0<=u&&H[r]!==nt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(H[r]!==nt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||H[r]!==nt[u]){var mt=`
`+H[r].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=r&&0<=u);break}}}finally{z=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Pt(a):""}function $t(e,n){switch(e.tag){case 26:case 27:case 5:return Pt(e.type);case 16:return Pt("Lazy");case 13:return e.child!==n&&n!==null?Pt("Suspense Fallback"):Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 15:return Yt(e.type,!1);case 11:return Yt(e.type.render,!1);case 1:return Yt(e.type,!0);case 31:return Pt("Activity");default:return""}}function ye(e){try{var n="",a=null;do n+=$t(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Lt=Object.prototype.hasOwnProperty,Me=o.unstable_scheduleCallback,kt=o.unstable_cancelCallback,ae=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,$=o.unstable_getCurrentPriorityLevel,xt=o.unstable_ImmediatePriority,gt=o.unstable_UserBlockingPriority,rt=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Kt=o.log,Wt=o.unstable_setDisableYieldValue,Mt=null,Tt=null;function Jt(e){if(typeof Kt=="function"&&Wt(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Mt,e)}catch{}}var jt=Math.clz32?Math.clz32:V,Bt=Math.log,ce=Math.LN2;function V(e){return e>>>=0,e===0?32:31-(Bt(e)/ce|0)|0}var Nt=256,wt=262144,Dt=4194304;function Et(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function St(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=Et(r):(v&=A,v!==0?u=Et(v):a||(a=A&~e,a!==0&&(u=Et(a))))):(A=r&~f,A!==0?u=Et(A):v!==0?u=Et(v):a||(a=r&~e,a!==0&&(u=Et(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Vt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ue(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var e=Dt;return Dt<<=1,(Dt&62914560)===0&&(Dt=4194304),e}function Le(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zn(e,n,a,r,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,nt=e.hiddenUpdates;for(a=v&~a;0<a;){var mt=31-jt(a),vt=1<<mt;A[mt]=0,H[mt]=-1;var st=nt[mt];if(st!==null)for(nt[mt]=null,mt=0;mt<st.length;mt++){var ct=st[mt];ct!==null&&(ct.lane&=-536870913)}a&=~vt}r!==0&&sl(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function sl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-jt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Vr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-jt(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Xr(e,n){var a=n&-n;return a=(a&42)!==0?1:Mi(a),(a&(e.suspendedLanes|n))!==0?0:a}function Mi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function as(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kr(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:Ax(e.type))}function Wr(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var Kn=Math.random().toString(36).slice(2),un="__reactFiber$"+Kn,xn="__reactProps$"+Kn,Vi="__reactContainer$"+Kn,zs="__reactEvents$"+Kn,su="__reactListeners$"+Kn,ru="__reactHandles$"+Kn,rl="__reactResources$"+Kn,ss="__reactMarker$"+Kn;function qr(e){delete e[un],delete e[xn],delete e[zs],delete e[su],delete e[ru]}function Ma(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Vi]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=ux(e);e!==null;){if(a=e[un])return a;e=ux(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[un]||e[Vi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ot(e){var n=e[rl];return n||(n=e[rl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function it(e){e[ss]=!0}var Z=new Set,Rt={};function Ot(e,n){Ft(e,n),Ft(e+"Capture",n)}function Ft(e,n){for(Rt[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Xt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},le={};function te(e){return Lt.call(le,e)?!0:Lt.call(se,e)?!1:Xt.test(e)?le[e]=!0:(se[e]=!0,!1)}function xe(e,n,a){if(te(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ne(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Oe(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Re(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ne(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ze(e){if(!e._valueTracker){var n=Fe(e)?"checked":"value";e._valueTracker=ne(e,n,""+e[n])}}function Ce(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Fe(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function yn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ba=/[\n"\\]/g;function Qe(e){return e.replace(ba,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xi(e,n,a,r,u,f,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Re(n)):e.value!==""+Re(n)&&(e.value=""+Re(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,v,Re(n)):a!=null?Mn(e,v,Re(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Re(A):e.removeAttribute("name")}function Je(e,n,a,r,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ze(e);return}a=a!=null?""+Re(a):"",n=n!=null?""+Re(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ze(e)}function Mn(e,n,a){n==="number"&&yn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function gn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Re(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function bn(e,n,a){if(n!=null&&(n=""+Re(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Re(a):""}function An(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ht(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Re(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ze(e)}function Ni(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ki=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $h(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||ki.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function tp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&$h(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&$h(e,f,n[f])}function ou(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var T_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),A_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(e){return A_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var lu=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Is=null,Bs=null;function ep(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Xi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Qe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[xn]||null;if(!u)throw Error(s(90));Xi(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ce(r)}break t;case"textarea":bn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&gn(e,!!a.multiple,n,!1)}}}var uu=!1;function np(e,n,a){if(uu)return e(n,a);uu=!0;try{var r=e(n);return r}finally{if(uu=!1,(Is!==null||Bs!==null)&&(jl(),Is&&(n=Is,e=Bs,Bs=Is=null,ep(n),e)))for(n=0;n<e.length;n++)ep(e[n])}}function Yr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(qi)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){fu=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{fu=!1}var Ea=null,du=null,ll=null;function ip(){if(ll)return ll;var e,n=du,a=n.length,r,u="value"in Ea?Ea.value:Ea.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return ll=u.slice(e,1<r?1-r:void 0)}function cl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function ap(){return!1}function Vn(e){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ul:ap,this.isPropagationStopped=ap,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Vn(rs),Zr=_({},rs,{view:0,detail:0}),R_=Vn(Zr),hu,pu,Kr,dl=_({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(hu=e.screenX-Kr.screenX,pu=e.screenY-Kr.screenY):pu=hu=0,Kr=e),hu)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),sp=Vn(dl),C_=_({},dl,{dataTransfer:0}),w_=Vn(C_),D_=_({},Zr,{relatedTarget:0}),mu=Vn(D_),U_=_({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),N_=Vn(U_),L_=_({},rs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),O_=Vn(L_),P_=_({},rs,{data:0}),rp=Vn(P_),z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=B_[e])?!!n[e]:!1}function xu(){return F_}var H_=_({},Zr,{key:function(e){if(e.key){var n=z_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?I_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),G_=Vn(H_),V_=_({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Vn(V_),X_=_({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),k_=Vn(X_),W_=_({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),q_=Vn(W_),Y_=_({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j_=Vn(Y_),Z_=_({},rs,{newState:0,oldState:0}),K_=Vn(Z_),Q_=[9,13,27,32],gu=qi&&"CompositionEvent"in window,Qr=null;qi&&"documentMode"in document&&(Qr=document.documentMode);var J_=qi&&"TextEvent"in window&&!Qr,lp=qi&&(!gu||Qr&&8<Qr&&11>=Qr),cp=" ",up=!1;function fp(e,n){switch(e){case"keyup":return Q_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fs=!1;function $_(e,n){switch(e){case"compositionend":return dp(n);case"keypress":return n.which!==32?null:(up=!0,cp);case"textInput":return e=n.data,e===cp&&up?null:e;default:return null}}function tv(e,n){if(Fs)return e==="compositionend"||!gu&&fp(e,n)?(e=ip(),ll=du=Ea=null,Fs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lp&&n.locale!=="ko"?null:n.data;default:return null}}var ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ev[e.type]:n==="textarea"}function pp(e,n,a,r){Is?Bs?Bs.push(r):Bs=[r]:Is=r,n=ec(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Jr=null,$r=null;function nv(e){Km(e,0)}function hl(e){var n=q(e);if(Ce(n))return e}function mp(e,n){if(e==="change")return n}var xp=!1;if(qi){var _u;if(qi){var vu="oninput"in document;if(!vu){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),vu=typeof gp.oninput=="function"}_u=vu}else _u=!1;xp=_u&&(!document.documentMode||9<document.documentMode)}function _p(){Jr&&(Jr.detachEvent("onpropertychange",vp),$r=Jr=null)}function vp(e){if(e.propertyName==="value"&&hl($r)){var n=[];pp(n,$r,e,cu(e)),np(nv,n)}}function iv(e,n,a){e==="focusin"?(_p(),Jr=n,$r=a,Jr.attachEvent("onpropertychange",vp)):e==="focusout"&&_p()}function av(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl($r)}function sv(e,n){if(e==="click")return hl(n)}function rv(e,n){if(e==="input"||e==="change")return hl(n)}function ov(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:ov;function to(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Lt.call(n,u)||!Qn(e[u],n[u]))return!1}return!0}function Sp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yp(e,n){var a=Sp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Sp(a)}}function Mp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Mp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function bp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yn(e.document)}return n}function Su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var lv=qi&&"documentMode"in document&&11>=document.documentMode,Hs=null,yu=null,eo=null,Mu=!1;function Ep(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||Hs==null||Hs!==yn(r)||(r=Hs,"selectionStart"in r&&Su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),eo&&to(eo,r)||(eo=r,r=ec(yu,"onSelect"),0<r.length&&(n=new fl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Hs)))}function os(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Gs={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},bu={},Tp={};qi&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function ls(e){if(bu[e])return bu[e];if(!Gs[e])return e;var n=Gs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Tp)return bu[e]=n[a];return e}var Ap=ls("animationend"),Rp=ls("animationiteration"),Cp=ls("animationstart"),cv=ls("transitionrun"),uv=ls("transitionstart"),fv=ls("transitioncancel"),wp=ls("transitionend"),Dp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function bi(e,n){Dp.set(e,n),Ot(n,[e])}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Vs=0,Tu=0;function ml(){for(var e=Vs,n=Tu=Vs=0;n<e;){var a=ci[n];ci[n++]=null;var r=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&Up(a,u,f)}}function xl(e,n,a,r){ci[Vs++]=e,ci[Vs++]=n,ci[Vs++]=a,ci[Vs++]=r,Tu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Au(e,n,a,r){return xl(e,n,a,r),gl(e)}function cs(e,n){return xl(e,null,null,n),gl(e)}function Up(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-jt(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function gl(e){if(50<Eo)throw Eo=0,zf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xs={};function dv(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,r){return new dv(e,n,a,r)}function Ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Np(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function _l(e,n,a,r,u,f){var v=0;if(r=e,typeof e=="function")Ru(e)&&(v=1);else if(typeof e=="string")v=gS(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Jn(31,a,n,u),e.elementType=w,e.lanes=f,e;case T:return us(a.children,u,f,n);case M:v=8,u|=24;break;case x:return e=Jn(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case F:return e=Jn(13,a,n,u),e.elementType=F,e.lanes=f,e;case D:return e=Jn(19,a,n,u),e.elementType=D,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break t;case O:v=9;break t;case P:v=11;break t;case I:v=14;break t;case j:v=16,r=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Jn(v,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function us(e,n,a,r){return e=Jn(7,e,r,n),e.lanes=a,e}function Cu(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function Lp(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function wu(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Op=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=Op.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ye(n)},Op.set(e,n),n)}return{value:e,source:n,stack:ye(n)}}var ks=[],Ws=0,vl=null,no=0,fi=[],di=0,Ta=null,Li=1,Oi="";function ji(e,n){ks[Ws++]=no,ks[Ws++]=vl,vl=e,no=n}function Pp(e,n,a){fi[di++]=Li,fi[di++]=Oi,fi[di++]=Ta,Ta=e;var r=Li;e=Oi;var u=32-jt(r)-1;r&=~(1<<u),a+=1;var f=32-jt(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Li=1<<32-jt(n)+u|a<<u|r,Oi=f+e}else Li=1<<f|a<<u|r,Oi=e}function Du(e){e.return!==null&&(ji(e,1),Pp(e,1,0))}function Uu(e){for(;e===vl;)vl=ks[--Ws],ks[Ws]=null,no=ks[--Ws],ks[Ws]=null;for(;e===Ta;)Ta=fi[--di],fi[di]=null,Oi=fi[--di],fi[di]=null,Li=fi[--di],fi[di]=null}function zp(e,n){fi[di++]=Li,fi[di++]=Oi,fi[di++]=Ta,Li=n.id,Oi=n.overflow,Ta=e}var Rn=null,$e=null,we=!1,Aa=null,hi=!1,Nu=Error(s(519));function Ra(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(ui(n,e)),Nu}function Ip(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[un]=e,n[xn]=r,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)Ee(Ao[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Je(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),An(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||tx(n.textContent,a)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ra(e,!0)}function Bp(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:Rn=Rn.return}}function qs(e){if(e!==Rn)return!1;if(!we)return Bp(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qf(e.type,e.memoizedProps)),a=!a),a&&$e&&Ra(e),Bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=cx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=cx(e)}else n===27?(n=$e,Ga(e.type)?(e=nd,nd=null,$e=e):$e=n):$e=Rn?mi(e.stateNode.nextSibling):null;return!0}function fs(){$e=Rn=null,we=!1}function Lu(){var e=Aa;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Aa=null),e}function io(e){Aa===null?Aa=[e]:Aa.push(e)}var Ou=L(null),ds=null,Zi=null;function Ca(e,n,a){yt(Ou,n._currentValue),n._currentValue=a}function Ki(e){e._currentValue=Ou.current,tt(Ou)}function Pu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function zu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Pu(f.return,a,e),r||(v=null);break t}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Pu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Ys(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=u.type;Qn(u.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(u===dt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Uo):e=[Uo])}u=u.return}e!==null&&zu(n,e,a,r),n.flags|=262144}function Sl(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hs(e){ds=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Fp(ds,e)}function yl(e,n){return ds===null&&hs(e),Fp(e,n)}function Fp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(e===null)throw Error(s(308));Zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Zi=Zi.next=n;return a}var hv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},pv=o.unstable_scheduleCallback,mv=o.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new hv,data:new Map,refCount:0}}function ao(e){e.refCount--,e.refCount===0&&pv(mv,function(){e.controller.abort()})}var so=null,Bu=0,js=0,Zs=null;function xv(e,n){if(so===null){var a=so=[];Bu=0,js=Vf(),Zs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Bu++,n.then(Hp,Hp),n}function Hp(){if(--Bu===0&&so!==null){Zs!==null&&(Zs.status="fulfilled");var e=so;so=null,js=0,Zs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function gv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Gp=B.S;B.S=function(e,n){Em=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&xv(e,n),Gp!==null&&Gp(e,n)};var ps=L(null);function Fu(){var e=ps.current;return e!==null?e:Ke.pooledCache}function Ml(e,n){n===null?yt(ps,ps.current):yt(ps,n.pool)}function Vp(){var e=Fu();return e===null?null:{parent:fn._currentValue,pool:e}}var Ks=Error(s(460)),Hu=Error(s(474)),bl=Error(s(542)),El={then:function(){}};function Xp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qp(e),e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qp(e),e}throw xs=n,Ks}}function ms(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xs=a,Ks):a}}var xs=null;function Wp(){if(xs===null)throw Error(s(459));var e=xs;return xs=null,e}function qp(e){if(e===Ks||e===bl)throw Error(s(483))}var Qs=null,ro=0;function Tl(e){var n=ro;return ro+=1,Qs===null&&(Qs=[]),kp(Qs,e,n)}function oo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Yp(e){function n(Y,X){if(e){var et=Y.deletions;et===null?(Y.deletions=[X],Y.flags|=16):et.push(X)}}function a(Y,X){if(!e)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function r(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=Yi(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,et){return Y.index=et,e?(et=Y.alternate,et!==null?(et=et.index,et<X?(Y.flags|=67108866,X):et):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function v(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,X,et,_t){return X===null||X.tag!==6?(X=Cu(et,Y.mode,_t),X.return=Y,X):(X=u(X,et),X.return=Y,X)}function H(Y,X,et,_t){var ee=et.type;return ee===T?mt(Y,X,et.props.children,_t,et.key):X!==null&&(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===j&&ms(ee)===X.type)?(X=u(X,et.props),oo(X,et),X.return=Y,X):(X=_l(et.type,et.key,et.props,null,Y.mode,_t),oo(X,et),X.return=Y,X)}function nt(Y,X,et,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=wu(et,Y.mode,_t),X.return=Y,X):(X=u(X,et.children||[]),X.return=Y,X)}function mt(Y,X,et,_t,ee){return X===null||X.tag!==7?(X=us(et,Y.mode,_t,ee),X.return=Y,X):(X=u(X,et),X.return=Y,X)}function vt(Y,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Cu(""+X,Y.mode,et),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return et=_l(X.type,X.key,X.props,null,Y.mode,et),oo(et,X),et.return=Y,et;case b:return X=wu(X,Y.mode,et),X.return=Y,X;case j:return X=ms(X),vt(Y,X,et)}if(ht(X)||Q(X))return X=us(X,Y.mode,et,null),X.return=Y,X;if(typeof X.then=="function")return vt(Y,Tl(X),et);if(X.$$typeof===N)return vt(Y,yl(Y,X),et);Al(Y,X)}return null}function st(Y,X,et,_t){var ee=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ee!==null?null:A(Y,X,""+et,_t);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===ee?H(Y,X,et,_t):null;case b:return et.key===ee?nt(Y,X,et,_t):null;case j:return et=ms(et),st(Y,X,et,_t)}if(ht(et)||Q(et))return ee!==null?null:mt(Y,X,et,_t,null);if(typeof et.then=="function")return st(Y,X,Tl(et),_t);if(et.$$typeof===N)return st(Y,X,yl(Y,et),_t);Al(Y,et)}return null}function ct(Y,X,et,_t,ee){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Y=Y.get(et)||null,A(X,Y,""+_t,ee);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return Y=Y.get(_t.key===null?et:_t.key)||null,H(X,Y,_t,ee);case b:return Y=Y.get(_t.key===null?et:_t.key)||null,nt(X,Y,_t,ee);case j:return _t=ms(_t),ct(Y,X,et,_t,ee)}if(ht(_t)||Q(_t))return Y=Y.get(et)||null,mt(X,Y,_t,ee,null);if(typeof _t.then=="function")return ct(Y,X,et,Tl(_t),ee);if(_t.$$typeof===N)return ct(Y,X,et,yl(X,_t),ee);Al(X,_t)}return null}function qt(Y,X,et,_t){for(var ee=null,Pe=null,Qt=X,ge=X=0,Ae=null;Qt!==null&&ge<et.length;ge++){Qt.index>ge?(Ae=Qt,Qt=null):Ae=Qt.sibling;var ze=st(Y,Qt,et[ge],_t);if(ze===null){Qt===null&&(Qt=Ae);break}e&&Qt&&ze.alternate===null&&n(Y,Qt),X=f(ze,X,ge),Pe===null?ee=ze:Pe.sibling=ze,Pe=ze,Qt=Ae}if(ge===et.length)return a(Y,Qt),we&&ji(Y,ge),ee;if(Qt===null){for(;ge<et.length;ge++)Qt=vt(Y,et[ge],_t),Qt!==null&&(X=f(Qt,X,ge),Pe===null?ee=Qt:Pe.sibling=Qt,Pe=Qt);return we&&ji(Y,ge),ee}for(Qt=r(Qt);ge<et.length;ge++)Ae=ct(Qt,Y,ge,et[ge],_t),Ae!==null&&(e&&Ae.alternate!==null&&Qt.delete(Ae.key===null?ge:Ae.key),X=f(Ae,X,ge),Pe===null?ee=Ae:Pe.sibling=Ae,Pe=Ae);return e&&Qt.forEach(function(qa){return n(Y,qa)}),we&&ji(Y,ge),ee}function re(Y,X,et,_t){if(et==null)throw Error(s(151));for(var ee=null,Pe=null,Qt=X,ge=X=0,Ae=null,ze=et.next();Qt!==null&&!ze.done;ge++,ze=et.next()){Qt.index>ge?(Ae=Qt,Qt=null):Ae=Qt.sibling;var qa=st(Y,Qt,ze.value,_t);if(qa===null){Qt===null&&(Qt=Ae);break}e&&Qt&&qa.alternate===null&&n(Y,Qt),X=f(qa,X,ge),Pe===null?ee=qa:Pe.sibling=qa,Pe=qa,Qt=Ae}if(ze.done)return a(Y,Qt),we&&ji(Y,ge),ee;if(Qt===null){for(;!ze.done;ge++,ze=et.next())ze=vt(Y,ze.value,_t),ze!==null&&(X=f(ze,X,ge),Pe===null?ee=ze:Pe.sibling=ze,Pe=ze);return we&&ji(Y,ge),ee}for(Qt=r(Qt);!ze.done;ge++,ze=et.next())ze=ct(Qt,Y,ge,ze.value,_t),ze!==null&&(e&&ze.alternate!==null&&Qt.delete(ze.key===null?ge:ze.key),X=f(ze,X,ge),Pe===null?ee=ze:Pe.sibling=ze,Pe=ze);return e&&Qt.forEach(function(CS){return n(Y,CS)}),we&&ji(Y,ge),ee}function qe(Y,X,et,_t){if(typeof et=="object"&&et!==null&&et.type===T&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var ee=et.key;X!==null;){if(X.key===ee){if(ee=et.type,ee===T){if(X.tag===7){a(Y,X.sibling),_t=u(X,et.props.children),_t.return=Y,Y=_t;break t}}else if(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===j&&ms(ee)===X.type){a(Y,X.sibling),_t=u(X,et.props),oo(_t,et),_t.return=Y,Y=_t;break t}a(Y,X);break}else n(Y,X);X=X.sibling}et.type===T?(_t=us(et.props.children,Y.mode,_t,et.key),_t.return=Y,Y=_t):(_t=_l(et.type,et.key,et.props,null,Y.mode,_t),oo(_t,et),_t.return=Y,Y=_t)}return v(Y);case b:t:{for(ee=et.key;X!==null;){if(X.key===ee)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(Y,X.sibling),_t=u(X,et.children||[]),_t.return=Y,Y=_t;break t}else{a(Y,X);break}else n(Y,X);X=X.sibling}_t=wu(et,Y.mode,_t),_t.return=Y,Y=_t}return v(Y);case j:return et=ms(et),qe(Y,X,et,_t)}if(ht(et))return qt(Y,X,et,_t);if(Q(et)){if(ee=Q(et),typeof ee!="function")throw Error(s(150));return et=ee.call(et),re(Y,X,et,_t)}if(typeof et.then=="function")return qe(Y,X,Tl(et),_t);if(et.$$typeof===N)return qe(Y,X,yl(Y,et),_t);Al(Y,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(Y,X.sibling),_t=u(X,et),_t.return=Y,Y=_t):(a(Y,X),_t=Cu(et,Y.mode,_t),_t.return=Y,Y=_t),v(Y)):a(Y,X)}return function(Y,X,et,_t){try{ro=0;var ee=qe(Y,X,et,_t);return Qs=null,ee}catch(Qt){if(Qt===Ks||Qt===bl)throw Qt;var Pe=Jn(29,Qt,null,Y.mode);return Pe.lanes=_t,Pe.return=Y,Pe}finally{}}}var gs=Yp(!0),jp=Yp(!1),wa=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Be&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=gl(e),Up(e,null,a),n}return xl(e,r,n,a),gl(e)}function lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Vr(e,a)}}function Xu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ku=!1;function co(){if(ku){var e=Zs;if(e!==null)throw e}}function uo(e,n,a,r){ku=!1;var u=e.updateQueue;wa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,nt=H.next;H.next=null,v===null?f=nt:v.next=nt,v=H;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==v&&(A===null?mt.firstBaseUpdate=nt:A.next=nt,mt.lastBaseUpdate=H))}if(f!==null){var vt=u.baseState;v=0,mt=nt=H=null,A=f;do{var st=A.lane&-536870913,ct=st!==A.lane;if(ct?(Te&st)===st:(r&st)===st){st!==0&&st===js&&(ku=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var qt=e,re=A;st=n;var qe=a;switch(re.tag){case 1:if(qt=re.payload,typeof qt=="function"){vt=qt.call(qe,vt,st);break t}vt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=re.payload,st=typeof qt=="function"?qt.call(qe,vt,st):qt,st==null)break t;vt=_({},vt,st);break t;case 2:wa=!0}}st=A.callback,st!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[st]:ct.push(st))}else ct={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(nt=mt=ct,H=vt):mt=mt.next=ct,v|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);mt===null&&(H=vt),u.baseState=H,u.firstBaseUpdate=nt,u.lastBaseUpdate=mt,f===null&&(u.shared.lanes=0),za|=v,e.lanes=v,e.memoizedState=vt}}function Zp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zp(a[e],n)}var Js=L(null),Rl=L(0);function Qp(e,n){e=sa,yt(Rl,e),yt(Js,n),sa=e|n.baseLanes}function Wu(){yt(Rl,sa),yt(Js,Js.current)}function qu(){sa=Rl.current,tt(Js),tt(Rl)}var $n=L(null),pi=null;function Na(e){var n=e.alternate;yt(ln,ln.current&1),yt($n,e),pi===null&&(n===null||Js.current!==null||n.memoizedState!==null)&&(pi=e)}function Yu(e){yt(ln,ln.current),yt($n,e),pi===null&&(pi=e)}function Jp(e){e.tag===22?(yt(ln,ln.current),yt($n,e),pi===null&&(pi=e)):La()}function La(){yt(ln,ln.current),yt($n,$n.current)}function ti(e){tt($n),pi===e&&(pi=null),tt(ln)}var ln=L(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||td(a)||ed(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,me=null,ke=null,dn=null,wl=!1,$s=!1,_s=!1,Dl=0,fo=0,tr=null,_v=0;function sn(){throw Error(s(321))}function ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Qn(e[a],n[a]))return!1;return!0}function Zu(e,n,a,r,u,f){return Qi=f,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?P0:ff,_s=!1,f=a(r,u),_s=!1,$s&&(f=t0(n,a,r,u)),$p(e),f}function $p(e){B.H=mo;var n=ke!==null&&ke.next!==null;if(Qi=0,dn=ke=me=null,wl=!1,fo=0,tr=null,n)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&Sl(e)&&(hn=!0))}function t0(e,n,a,r){me=e;var u=0;do{if($s&&(tr=null),fo=0,$s=!1,25<=u)throw Error(s(301));if(u+=1,dn=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=z0,f=n(a,r)}while($s);return f}function vv(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?ho(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(me.flags|=1024),n}function Ku(){var e=Dl!==0;return Dl=0,e}function Qu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ju(e){if(wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wl=!1}Qi=0,dn=ke=me=null,$s=!1,fo=Dl=0,tr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?me.memoizedState=dn=e:dn=dn.next=e,dn}function cn(){if(ke===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=dn===null?me.memoizedState:dn.next;if(n!==null)dn=n,ke=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},dn===null?me.memoizedState=dn=e:dn=dn.next=e}return dn}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(e){var n=fo;return fo+=1,tr===null&&(tr=[]),e=kp(tr,e,n),n=me,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?P0:ff),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ho(e);if(e.$$typeof===N)return Cn(e)}throw Error(s(438,String(e)))}function $u(e){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=me.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function Ji(e,n){return typeof n=="function"?n(e):n}function Ll(e){var n=cn();return tf(n,ke,e)}function tf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=v=null,H=null,nt=n,mt=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(Te&vt)===vt:(Qi&vt)===vt){var st=nt.revertLane;if(st===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===js&&(mt=!0);else if((Qi&st)===st){nt=nt.next,st===js&&(mt=!0);continue}else vt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=vt,v=f):H=H.next=vt,me.lanes|=st,za|=st;vt=nt.action,_s&&a(f,vt),f=nt.hasEagerState?nt.eagerState:a(f,vt)}else st={lane:vt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=st,v=f):H=H.next=st,me.lanes|=vt,za|=vt;nt=nt.next}while(nt!==null&&nt!==n);if(H===null?v=f:H.next=A,!Qn(f,e.memoizedState)&&(hn=!0,mt&&(a=Zs,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=H,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ef(e){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Qn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function e0(e,n,a){var r=me,u=cn(),f=we;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Qn((ke||u).memoizedState,a);if(v&&(u.memoizedState=a,hn=!0),u=u.queue,sf(a0.bind(null,r,u,e),[e]),u.getSnapshot!==n||v||dn!==null&&dn.memoizedState.tag&1){if(r.flags|=2048,er(9,{destroy:void 0},i0.bind(null,r,u,a,n),null),Ke===null)throw Error(s(349));f||(Qi&127)!==0||n0(r,n,a)}return a}function n0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=Ul(),me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function i0(e,n,a,r){n.value=a,n.getSnapshot=r,s0(n)&&r0(e)}function a0(e,n,a){return a(function(){s0(n)&&r0(e)})}function s0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Qn(e,a)}catch{return!0}}function r0(e){var n=cs(e,2);n!==null&&Yn(n,e,2)}function nf(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),_s){Jt(!0);try{a()}finally{Jt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},n}function o0(e,n,a,r){return e.baseState=a,tf(e,ke,typeof r=="function"?r:Ji)}function Sv(e,n,a,r,u){if(zl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};B.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,l0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function l0(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=B.T,v={};B.T=v;try{var A=a(u,r),H=B.S;H!==null&&H(v,A),c0(e,n,A)}catch(nt){af(e,n,nt)}finally{f!==null&&v.types!==null&&(f.types=v.types),B.T=f}}else try{f=a(u,r),c0(e,n,f)}catch(nt){af(e,n,nt)}}function c0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){u0(e,n,r)},function(r){return af(e,n,r)}):u0(e,n,a)}function u0(e,n,a){n.status="fulfilled",n.value=a,f0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,l0(e,a)))}function af(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,f0(n),n=n.next;while(n!==r)}e.action=null}function f0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function d0(e,n){return n}function h0(e,n){if(we){var a=Ke.formState;if(a!==null){t:{var r=me;if(we){if($e){e:{for(var u=$e,f=hi;u.nodeType!==8;){if(!f){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$e=mi(u.nextSibling),r=u.data==="F!";break t}}Ra(r)}r=!1}r&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:d0,lastRenderedState:n},a.queue=r,a=N0.bind(null,me,r),r.dispatch=a,r=nf(!1),f=uf.bind(null,me,!1,r.queue),r=Bn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Sv.bind(null,me,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function p0(e){var n=cn();return m0(n,ke,e)}function m0(e,n,a){if(n=tf(e,n,d0)[0],e=Ll(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ho(n)}catch(v){throw v===Ks?bl:v}else r=n;n=cn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(me.flags|=2048,er(9,{destroy:void 0},yv.bind(null,u,a),null)),[r,f,e]}function yv(e,n){e.action=n}function x0(e){var n=cn(),a=ke;if(a!==null)return m0(n,a,e);cn(),n=n.memoizedState,a=cn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function er(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=me.updateQueue,n===null&&(n=Ul(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function g0(){return cn().memoizedState}function Ol(e,n,a,r){var u=Bn();me.flags|=e,u.memoizedState=er(1|n,{destroy:void 0},a,r===void 0?null:r)}function Pl(e,n,a,r){var u=cn();r=r===void 0?null:r;var f=u.memoizedState.inst;ke!==null&&r!==null&&ju(r,ke.memoizedState.deps)?u.memoizedState=er(n,f,a,r):(me.flags|=e,u.memoizedState=er(1|n,f,a,r))}function _0(e,n){Ol(8390656,8,e,n)}function sf(e,n){Pl(2048,8,e,n)}function Mv(e){me.flags|=4;var n=me.updateQueue;if(n===null)n=Ul(),me.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function v0(e){var n=cn().memoizedState;return Mv({ref:n,nextImpl:e}),function(){if((Be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function S0(e,n){return Pl(4,2,e,n)}function y0(e,n){return Pl(4,4,e,n)}function M0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function b0(e,n,a){a=a!=null?a.concat([e]):null,Pl(4,4,M0.bind(null,n,e),a)}function rf(){}function E0(e,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&ju(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function T0(e,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&ju(n,r[1]))return r[0];if(r=e(),_s){Jt(!0);try{e()}finally{Jt(!1)}}return a.memoizedState=[r,n],r}function of(e,n,a){return a===void 0||(Qi&1073741824)!==0&&(Te&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Am(),me.lanes|=e,za|=e,a)}function A0(e,n,a,r){return Qn(a,n)?a:Js.current!==null?(e=of(e,a,r),Qn(e,n)||(hn=!0),e):(Qi&42)===0||(Qi&1073741824)!==0&&(Te&261930)===0?(hn=!0,e.memoizedState=a):(e=Am(),me.lanes|=e,za|=e,n)}function R0(e,n,a,r,u){var f=W.p;W.p=f!==0&&8>f?f:8;var v=B.T,A={};B.T=A,uf(e,!1,n,a);try{var H=u(),nt=B.S;if(nt!==null&&nt(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var mt=gv(H,r);po(e,n,mt,ii(e))}else po(e,n,r,ii(e))}catch(vt){po(e,n,{then:function(){},status:"rejected",reason:vt},ii())}finally{W.p=f,v!==null&&A.types!==null&&(v.types=A.types),B.T=v}}function bv(){}function lf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=C0(e).queue;R0(e,u,n,k,a===null?bv:function(){return w0(e),a(r)})}function C0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function w0(e){var n=C0(e);n.next===null&&(n=e.alternate.memoizedState),po(e,n.next.queue,{},ii())}function cf(){return Cn(Uo)}function D0(){return cn().memoizedState}function U0(){return cn().memoizedState}function Ev(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=Da(a);var r=Ua(n,e,a);r!==null&&(Yn(r,n,a),lo(r,n,a)),n={cache:Iu()},e.payload=n;return}n=n.return}}function Tv(e,n,a){var r=ii();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?L0(n,a):(a=Au(e,n,a,r),a!==null&&(Yn(a,e,r),O0(a,n,r)))}function N0(e,n,a){var r=ii();po(e,n,a,r)}function po(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))L0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,Qn(A,v))return xl(e,n,u,0),Ke===null&&ml(),!1}catch{}finally{}if(a=Au(e,n,u,r),a!==null)return Yn(a,e,r),O0(a,n,r),!0}return!1}function uf(e,n,a,r){if(r={lane:2,revertLane:Vf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(s(479))}else n=Au(e,a,r,2),n!==null&&Yn(n,e,2)}function zl(e){var n=e.alternate;return e===me||n!==null&&n===me}function L0(e,n){$s=wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function O0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Vr(e,a)}}var mo={readContext:Cn,use:Nl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};mo.useEffectEvent=sn;var P0={readContext:Cn,use:Nl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:_0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ol(4194308,4,M0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ol(4194308,4,e,n)},useInsertionEffect:function(e,n){Ol(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var r=e();if(_s){Jt(!0);try{e()}finally{Jt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Bn();if(a!==void 0){var u=a(n);if(_s){Jt(!0);try{a(n)}finally{Jt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Tv.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=nf(e);var n=e.queue,a=N0.bind(null,me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:rf,useDeferredValue:function(e,n){var a=Bn();return of(a,e,n)},useTransition:function(){var e=nf(!1);return e=R0.bind(null,me,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=me,u=Bn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ke===null)throw Error(s(349));(Te&127)!==0||n0(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,_0(a0.bind(null,r,f,e),[e]),r.flags|=2048,er(9,{destroy:void 0},i0.bind(null,r,f,a,n),null),a},useId:function(){var e=Bn(),n=Ke.identifierPrefix;if(we){var a=Oi,r=Li;a=(r&~(1<<32-jt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=_v++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:cf,useFormState:h0,useActionState:h0,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uf.bind(null,me,!0,a),a.dispatch=n,[e,n]},useMemoCache:$u,useCacheRefresh:function(){return Bn().memoizedState=Ev.bind(null,me)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ff={readContext:Cn,use:Nl,useCallback:E0,useContext:Cn,useEffect:sf,useImperativeHandle:b0,useInsertionEffect:S0,useLayoutEffect:y0,useMemo:T0,useReducer:Ll,useRef:g0,useState:function(){return Ll(Ji)},useDebugValue:rf,useDeferredValue:function(e,n){var a=cn();return A0(a,ke.memoizedState,e,n)},useTransition:function(){var e=Ll(Ji)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:e0,useId:D0,useHostTransitionStatus:cf,useFormState:p0,useActionState:p0,useOptimistic:function(e,n){var a=cn();return o0(a,ke,e,n)},useMemoCache:$u,useCacheRefresh:U0};ff.useEffectEvent=v0;var z0={readContext:Cn,use:Nl,useCallback:E0,useContext:Cn,useEffect:sf,useImperativeHandle:b0,useInsertionEffect:S0,useLayoutEffect:y0,useMemo:T0,useReducer:ef,useRef:g0,useState:function(){return ef(Ji)},useDebugValue:rf,useDeferredValue:function(e,n){var a=cn();return ke===null?of(a,e,n):A0(a,ke.memoizedState,e,n)},useTransition:function(){var e=ef(Ji)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:e0,useId:D0,useHostTransitionStatus:cf,useFormState:x0,useActionState:x0,useOptimistic:function(e,n){var a=cn();return ke!==null?o0(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:U0};z0.useEffectEvent=v0;function df(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var hf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ii(),u=Da(r);u.payload=n,a!=null&&(u.callback=a),n=Ua(e,u,r),n!==null&&(Yn(n,e,r),lo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ii(),u=Da(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(e,u,r),n!==null&&(Yn(n,e,r),lo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),r=Da(a);r.tag=2,n!=null&&(r.callback=n),n=Ua(e,r,a),n!==null&&(Yn(n,e,a),lo(n,e,a))}};function I0(e,n,a,r,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!to(a,r)||!to(u,f):!0}function B0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&hf.enqueueReplaceState(n,n.state,null)}function vs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function F0(e){pl(e)}function H0(e){console.error(e)}function G0(e){pl(e)}function Il(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function V0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function pf(e,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,n)},a}function X0(e){return e=Da(e),e.tag=3,e}function k0(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){V0(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){V0(n,a,r),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function Av(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ys(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?Zl():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===El?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ff(e,r,u)),!1;case 22:return a.flags|=65536,r===El?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ff(e,r,u)),!1}throw Error(s(435,a.tag))}return Ff(e,r,u),Zl(),!1}if(we)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Nu&&(e=Error(s(422),{cause:r}),io(ui(e,a)))):(r!==Nu&&(n=Error(s(423),{cause:r}),io(ui(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ui(r,a),u=pf(e.stateNode,r,u),Xu(e,u),rn!==4&&(rn=2)),!1;var f=Error(s(520),{cause:r});if(f=ui(f,a),bo===null?bo=[f]:bo.push(f),rn!==4&&(rn=2),n===null)return!0;r=ui(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=pf(a.stateNode,r,e),Xu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=X0(u),k0(u,e,a,r),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var mf=Error(s(461)),hn=!1;function wn(e,n,a,r){n.child=e===null?jp(n,null,a,r):gs(n,e.child,a,r)}function W0(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return hs(n),r=Zu(e,n,a,v,f,u),A=Ku(),e!==null&&!hn?(Qu(e,n,u),$i(e,n,u)):(we&&A&&Du(n),n.flags|=1,wn(e,n,r,u),n.child)}function q0(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!Ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Y0(e,n,f,r,u)):(e=_l(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!bf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(v,r)&&e.ref===n.ref)return $i(e,n,u)}return n.flags|=1,e=Yi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Y0(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(to(f,r)&&e.ref===n.ref)if(hn=!1,n.pendingProps=r=f,bf(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,$i(e,n,u)}return xf(e,n,a,r,u)}function j0(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Z0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ml(n,f!==null?f.cachePool:null),f!==null?Qp(n,f):Wu(),Jp(n);else return r=n.lanes=536870912,Z0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Ml(n,f.cachePool),Qp(n,f),La(),n.memoizedState=null):(e!==null&&Ml(n,null),Wu(),La());return wn(e,n,u,a),n.child}function xo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Z0(e,n,a,r,u){var f=Fu();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Ml(n,null),Wu(),Jp(n),e!==null&&Ys(e,n,r,!0),n.childLanes=u,null}function Bl(e,n){return n=Hl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function K0(e,n,a){return gs(n,e.child,null,a),e=Bl(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function Rv(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(r.mode==="hidden")return e=Bl(n,r),n.lanes=536870912,xo(null,e);if(Yu(n),(e=$e)?(e=lx(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Lp(e),a.return=n,n.child=a,Rn=n,$e=null)):e=null,e===null)throw Ra(n);return n.lanes=536870912,null}return Bl(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Yu(n),u)if(n.flags&256)n.flags&=-257,n=K0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||Ys(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(r=Ke,r!==null&&(v=Xr(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,cs(e,v),Yn(r,e,v),mf;Zl(),n=K0(e,n,a)}else e=f.treeContext,$e=mi(v.nextSibling),Rn=n,we=!0,Aa=null,hi=!1,e!==null&&zp(n,e),n=Bl(n,r),n.flags|=4096;return n}return e=Yi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function xf(e,n,a,r,u){return hs(n),a=Zu(e,n,a,r,void 0,u),r=Ku(),e!==null&&!hn?(Qu(e,n,u),$i(e,n,u)):(we&&r&&Du(n),n.flags|=1,wn(e,n,a,u),n.child)}function Q0(e,n,a,r,u,f){return hs(n),n.updateQueue=null,a=t0(n,r,a,u),$p(e),r=Ku(),e!==null&&!hn?(Qu(e,n,f),$i(e,n,f)):(we&&r&&Du(n),n.flags|=1,wn(e,n,a,f),n.child)}function J0(e,n,a,r,u){if(hs(n),n.stateNode===null){var f=Xs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Cn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=hf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Gu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Cn(v):Xs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(df(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&hf.enqueueReplaceState(f,f.state,null),uo(n,r,f,u),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,H=vs(a,A);f.props=H;var nt=f.context,mt=a.contextType;v=Xs,typeof mt=="object"&&mt!==null&&(v=Cn(mt));var vt=a.getDerivedStateFromProps;mt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||nt!==v)&&B0(n,f,r,v),wa=!1;var st=n.memoizedState;f.state=st,uo(n,r,f,u),co(),nt=n.memoizedState,A||st!==nt||wa?(typeof vt=="function"&&(df(n,a,vt,r),nt=n.memoizedState),(H=wa||I0(n,a,H,r,st,nt,v))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=v,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Vu(e,n),v=n.memoizedProps,mt=vs(a,v),f.props=mt,vt=n.pendingProps,st=f.context,nt=a.contextType,H=Xs,typeof nt=="object"&&nt!==null&&(H=Cn(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==vt||st!==H)&&B0(n,f,r,H),wa=!1,st=n.memoizedState,f.state=st,uo(n,r,f,u),co();var ct=n.memoizedState;v!==vt||st!==ct||wa||e!==null&&e.dependencies!==null&&Sl(e.dependencies)?(typeof A=="function"&&(df(n,a,A,r),ct=n.memoizedState),(mt=wa||I0(n,a,mt,r,st,ct,H)||e!==null&&e.dependencies!==null&&Sl(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ct,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ct,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ct),f.props=r,f.state=ct,f.context=H,r=mt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Fl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=gs(n,e.child,null,u),n.child=gs(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=$i(e,n,u),e}function $0(e,n,a,r){return fs(),n.flags|=256,wn(e,n,a,r),n.child}var gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _f(e){return{baseLanes:e,cachePool:Vp()}}function vf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function tm(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Na(n):La(),(e=$e)?(e=lx(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Lp(e),a.return=n,n.child=a,Rn=n,$e=null)):e=null,e===null)throw Ra(n);return ed(e)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,u?(La(),u=n.mode,A=Hl({mode:"hidden",children:A},u),r=us(r,u,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=_f(a),r.childLanes=vf(e,v,a),n.memoizedState=gf,xo(null,r)):(Na(n),Sf(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=yf(e,n,a)):n.memoizedState!==null?(La(),n.child=e.child,n.flags|=128,n=null):(La(),A=r.fallback,u=n.mode,r=Hl({mode:"visible",children:r.children},u),A=us(A,u,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,gs(n,e.child,null,a),r=n.child,r.memoizedState=_f(a),r.childLanes=vf(e,v,a),n.memoizedState=gf,n=xo(null,r));else if(Na(n),ed(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var nt=v.dgst;v=nt,r=Error(s(419)),r.stack="",r.digest=v,io({value:r,source:null,stack:null}),n=yf(e,n,a)}else if(hn||Ys(e,n,a,!1),v=(a&e.childLanes)!==0,hn||v){if(v=Ke,v!==null&&(r=Xr(v,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,cs(e,r),Yn(v,e,r),mf;td(A)||Zl(),n=yf(e,n,a)}else td(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,$e=mi(A.nextSibling),Rn=n,we=!0,Aa=null,hi=!1,e!==null&&zp(n,e),n=Sf(n,r.children),n.flags|=4096);return n}return u?(La(),A=r.fallback,u=n.mode,H=e.child,nt=H.sibling,r=Yi(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,nt!==null?A=Yi(nt,A):(A=us(A,u,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,xo(null,r),r=n.child,A=e.child.memoizedState,A===null?A=_f(a):(u=A.cachePool,u!==null?(H=fn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Vp(),A={baseLanes:A.baseLanes|a,cachePool:u}),r.memoizedState=A,r.childLanes=vf(e,v,a),n.memoizedState=gf,xo(e.child,r)):(Na(n),a=e.child,e=a.sibling,a=Yi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Sf(e,n){return n=Hl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hl(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function yf(e,n,a){return gs(n,e.child,null,a),e=Sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function em(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Pu(e.return,n,a)}function Mf(e,n,a,r,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function nm(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=ln.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,yt(ln,v),wn(e,n,r,a),r=we?no:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&em(e,a,n);else if(e.tag===19)em(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Cl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Mf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Cl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Mf(n,!0,a,null,f,r);break;case"together":Mf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function $i(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ys(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Yi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Yi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function bf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Sl(e)))}function Cv(e,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),Ca(n,fn,e.memoizedState.cache),fs();break;case 27:case 5:Ht(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Yu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?tm(e,n,a):(Na(n),e=$i(e,n,a),e!==null?e.sibling:null);Na(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ys(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return nm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(ln,ln.current),r)break;return null;case 22:return n.lanes=0,j0(e,n,a,n.pendingProps);case 24:Ca(n,fn,e.memoizedState.cache)}return $i(e,n,a)}function im(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!bf(e,a)&&(n.flags&128)===0)return hn=!1,Cv(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,we&&(n.flags&1048576)!==0&&Pp(n,no,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=ms(n.elementType),n.type=e,typeof e=="function")Ru(e)?(r=vs(e,r),n.tag=1,n=J0(null,n,e,r,a)):(n.tag=0,n=xf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===P){n.tag=11,n=W0(null,n,e,r,a);break t}else if(u===I){n.tag=14,n=q0(null,n,e,r,a);break t}}throw n=pt(e)||e,Error(s(306,n,""))}}return n;case 0:return xf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=vs(r,n.pendingProps),J0(e,n,r,u,a);case 3:t:{if(At(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Vu(e,n),uo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Ca(n,fn,r),r!==f.cache&&zu(n,[fn],a,!0),co(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=$0(e,n,r,a);break t}else if(r!==u){u=ui(Error(s(424)),n),io(u),n=$0(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=mi(e.firstChild),Rn=n,we=!0,Aa=null,hi=!0,a=jp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fs(),r===u){n=$i(e,n,a);break t}wn(e,n,r,a)}n=n.child}return n;case 26:return Fl(e,n),e===null?(a=px(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,r=nc(at.current).createElement(a),r[un]=n,r[xn]=e,Dn(r,a,e),it(r),n.stateNode=r):n.memoizedState=px(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ht(n),e===null&&we&&(r=n.stateNode=fx(n.type,n.pendingProps,at.current),Rn=n,hi=!0,u=$e,Ga(n.type)?(nd=u,$e=mi(r.firstChild)):$e=u),wn(e,n,n.pendingProps.children,a),Fl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=r=$e)&&(r=aS(r,n.type,n.pendingProps,hi),r!==null?(n.stateNode=r,Rn=n,$e=mi(r.firstChild),hi=!1,u=!0):u=!1),u||Ra(n)),Ht(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Qf(u,f)?r=null:v!==null&&Qf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(e,n,vv,null,null,a),Uo._currentValue=u),Fl(e,n),wn(e,n,r,a),n.child;case 6:return e===null&&we&&((e=a=$e)&&(a=sS(a,n.pendingProps,hi),a!==null?(n.stateNode=a,Rn=n,$e=null,e=!0):e=!1),e||Ra(n)),null;case 13:return tm(e,n,a);case 4:return At(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=gs(n,null,r,a):wn(e,n,r,a),n.child;case 11:return W0(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ca(n,n.type,r.value),wn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,hs(n),u=Cn(u),r=r(u),n.flags|=1,wn(e,n,r,a),n.child;case 14:return q0(e,n,n.type,n.pendingProps,a);case 15:return Y0(e,n,n.type,n.pendingProps,a);case 19:return nm(e,n,a);case 31:return Rv(e,n,a);case 22:return j0(e,n,a,n.pendingProps);case 24:return hs(n),r=Cn(fn),e===null?(u=Fu(),u===null&&(u=Ke,f=Iu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Gu(n),Ca(n,fn,u)):((e.lanes&a)!==0&&(Vu(e,n),uo(n,null,null,a),co()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,fn,r)):(r=f.cache,Ca(n,fn,r),r!==u.cache&&zu(n,[fn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ta(e){e.flags|=4}function Ef(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Dm())e.flags|=8192;else throw xs=El,Hu}else e.flags&=-16777217}function am(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vx(n))if(Dm())e.flags|=8192;else throw xs=El,Hu}function Gl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Xe():536870912,e.lanes|=n,sr|=n)}function go(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function wv(e,n,a){var r=n.pendingProps;switch(Uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ki(fn),Ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qs(n)?ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lu())),tn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ta(n),f!==null?(tn(n),am(n,f)):(tn(n),Ef(n,u,null,r,a))):f?f!==e.memoizedState?(ta(n),tn(n),am(n,f)):(tn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ta(n),tn(n),Ef(n,u,e,r,a)),null;case 27:if(oe(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return tn(n),null}e=bt.current,qs(n)?Ip(n):(e=fx(u,r,a),n.stateNode=e,ta(n))}return tn(n),null;case 5:if(oe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return tn(n),null}if(f=bt.current,qs(n))Ip(n);else{var v=nc(at.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[un]=n,f[xn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Dn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ta(n)}}return tn(n),Ef(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ta(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=at.current,qs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||tx(e.nodeValue,a)),e||Ra(n,!0)}else e=nc(e).createTextNode(r),e[un]=n,n.stateNode=e}return tn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=qs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[un]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),e=!1}else a=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=qs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[un]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),tn(n),null);case 4:return Ut(),e===null&&qf(n.stateNode.containerInfo),tn(n),null;case 10:return Ki(n.type),tn(n),null;case 19:if(tt(ln),r=n.memoizedState,r===null)return tn(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)go(r,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Cl(e),f!==null){for(n.flags|=128,go(r,!1),e=f.updateQueue,n.updateQueue=e,Gl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Np(a,e),a=a.sibling;return yt(ln,ln.current&1|2),we&&ji(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>ql&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304)}else{if(!u)if(e=Cl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Gl(n,e),go(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!we)return tn(n),null}else 2*E()-r.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=ln.current,yt(ln,u?a&1|2:a&1),we&&ji(n,r.treeForkCount),e):(tn(n),null);case 22:case 23:return ti(n),qu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&tt(ps),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(fn),tn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Dv(e,n){switch(Uu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ki(fn),Ut(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return oe(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return tt(ln),null;case 4:return Ut(),null;case 10:return Ki(n.type),null;case 22:case 23:return ti(n),qu(),e!==null&&tt(ps),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ki(fn),null;case 25:return null;default:return null}}function sm(e,n){switch(Uu(n),n.tag){case 3:Ki(fn),Ut();break;case 26:case 27:case 5:oe(n);break;case 4:Ut();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:tt(ln);break;case 10:Ki(n.type);break;case 22:case 23:ti(n),qu(),e!==null&&tt(ps);break;case 24:Ki(fn)}}function _o(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function Oa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var H=a,nt=A;try{nt()}catch(mt){Ge(u,H,mt)}}}r=r.next}while(r!==f)}}catch(mt){Ge(n,n.return,mt)}}function rm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Kp(n,a)}catch(r){Ge(e,e.return,r)}}}function om(e,n,a){a.props=vs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ge(e,n,r)}}function vo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Ge(e,n,u)}}function Pi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function lm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Tf(e,n,a){try{var r=e.stateNode;Jv(r,e.type,a,n),r[xn]=n}catch(u){Ge(e,e.return,u)}}function cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function Af(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(r!==4&&(r===27&&Ga(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Rf(e,n,a),e=e.sibling;e!==null;)Rf(e,n,a),e=e.sibling}function Vl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vl(e,n,a),e=e.sibling;e!==null;)Vl(e,n,a),e=e.sibling}function um(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,r,a),n[un]=e,n[xn]=a}catch(f){Ge(e,e.return,f)}}var ea=!1,pn=!1,Cf=!1,fm=typeof WeakSet=="function"?WeakSet:Set,En=null;function Uv(e,n){if(e=e.containerInfo,Zf=cc,e=bp(e),Su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,A=-1,H=-1,nt=0,mt=0,vt=e,st=null;e:for(;;){for(var ct;vt!==a||u!==0&&vt.nodeType!==3||(A=v+u),vt!==f||r!==0&&vt.nodeType!==3||(H=v+r),vt.nodeType===3&&(v+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)st=vt,vt=ct;for(;;){if(vt===e)break e;if(st===a&&++nt===u&&(A=v),st===f&&++mt===r&&(H=v),(ct=vt.nextSibling)!==null)break;vt=st,st=vt.parentNode}vt=ct}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:e,selectionRange:a},cc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var qt=vs(a.type,u);e=r.getSnapshotBeforeUpdate(qt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(re){Ge(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)$f(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function dm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),r&4&&_o(5,a);break;case 1:if(ia(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Ge(a,a.return,v)}else{var u=vs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ge(a,a.return,v)}}r&64&&rm(a),r&512&&vo(a,a.return);break;case 3:if(ia(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Kp(e,n)}catch(v){Ge(a,a.return,v)}}break;case 27:n===null&&r&4&&um(a);case 26:case 5:ia(e,a),n===null&&r&4&&lm(a),r&512&&vo(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),r&4&&mm(e,a);break;case 13:ia(e,a),r&4&&xm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Hv.bind(null,a),rS(e,a))));break;case 22:if(r=a.memoizedState!==null||ea,!r){n=n!==null&&n.memoizedState!==null||pn,u=ea;var f=pn;ea=r,(pn=n)&&!f?aa(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),ea=u,pn=f}break;case 30:break;default:ia(e,a)}}function hm(e){var n=e.alternate;n!==null&&(e.alternate=null,hm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,Xn=!1;function na(e,n,a){for(a=a.child;a!==null;)pm(e,n,a),a=a.sibling}function pm(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:pn||Pi(a,n),na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Pi(a,n);var r=nn,u=Xn;Ga(a.type)&&(nn=a.stateNode,Xn=!1),na(e,n,a),Co(a.stateNode),nn=r,Xn=u;break;case 5:pn||Pi(a,n);case 6:if(r=nn,u=Xn,nn=null,na(e,n,a),nn=r,Xn=u,nn!==null)if(Xn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{nn.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:nn!==null&&(Xn?(e=nn,rx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),hr(e)):rx(nn,a.stateNode));break;case 4:r=nn,u=Xn,nn=a.stateNode.containerInfo,Xn=!0,na(e,n,a),nn=r,Xn=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),pn||Oa(4,a,n),na(e,n,a);break;case 1:pn||(Pi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&om(a,n,r)),na(e,n,a);break;case 21:na(e,n,a);break;case 22:pn=(r=pn)||a.memoizedState!==null,na(e,n,a),pn=r;break;default:na(e,n,a)}}function mm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hr(e)}catch(a){Ge(n,n.return,a)}}}function xm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hr(e)}catch(a){Ge(n,n.return,a)}}function Nv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fm),n;default:throw Error(s(435,e.tag))}}function Xl(e,n){var a=Nv(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Gv.bind(null,e,r);r.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,v=n,A=v;t:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){nn=A.stateNode,Xn=!1;break t}break;case 5:nn=A.stateNode,Xn=!1;break t;case 3:case 4:nn=A.stateNode.containerInfo,Xn=!0;break t}A=A.return}if(nn===null)throw Error(s(160));pm(f,v,u),nn=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)gm(n,e),n=n.sibling}var Ei=null;function gm(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Wn(e),r&4&&(Oa(3,e,e.return),_o(3,e),Oa(5,e,e.return));break;case 1:kn(n,e),Wn(e),r&512&&(pn||a===null||Pi(a,a.return)),r&64&&ea&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ei;if(kn(n,e),Wn(e),r&512&&(pn||a===null||Pi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ss]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,r,a),f[un]=e,it(f),r=f;break t;case"link":var v=gx("link","href",u).get(r+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break e}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=gx("meta","content",u).get(r+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break e}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[un]=e,it(f),r=f}e.stateNode=r}else _x(u,e.type,e.stateNode);else e.stateNode=xx(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?_x(u,e.type,e.stateNode):xx(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Tf(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Wn(e),r&512&&(pn||a===null||Pi(a,a.return)),a!==null&&r&4&&Tf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Wn(e),r&512&&(pn||a===null||Pi(a,a.return)),e.flags&32){u=e.stateNode;try{Ni(u,"")}catch(qt){Ge(e,e.return,qt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Tf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(Cf=!0);break;case 6:if(kn(n,e),Wn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(qt){Ge(e,e.return,qt)}}break;case 3:if(sc=null,u=Ei,Ei=ic(n.containerInfo),kn(n,e),Ei=u,Wn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{hr(n.containerInfo)}catch(qt){Ge(e,e.return,qt)}Cf&&(Cf=!1,_m(e));break;case 4:r=Ei,Ei=ic(e.stateNode.containerInfo),kn(n,e),Wn(e),Ei=r;break;case 12:kn(n,e),Wn(e);break;case 31:kn(n,e),Wn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Xl(e,r)));break;case 13:kn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Xl(e,r)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,nt=ea,mt=pn;if(ea=nt||u,pn=mt||H,kn(n,e),pn=mt,ea=nt,Wn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ea||pn||Ss(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=H.stateNode;var vt=H.memoizedProps.style,st=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(qt){Ge(H,H.return,qt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(qt){Ge(H,H.return,qt)}}}else if(n.tag===18){if(a===null){H=n;try{var ct=H.stateNode;u?ox(ct,!0):ox(H.stateNode,!1)}catch(qt){Ge(H,H.return,qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Xl(e,a))));break;case 19:kn(n,e),Wn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Xl(e,r)));break;case 30:break;case 21:break;default:kn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(cm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Af(e);Vl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Ni(v,""),a.flags&=-33);var A=Af(e);Vl(e,A,v);break;case 3:case 4:var H=a.stateNode.containerInfo,nt=Af(e);Rf(e,nt,H);break;default:throw Error(s(161))}}catch(mt){Ge(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _m(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;_m(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)dm(e,n.alternate,n),n=n.sibling}function Ss(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),Ss(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&om(n,n.return,a),Ss(n);break;case 27:Co(n.stateNode);case 26:case 5:Pi(n,n.return),Ss(n);break;case 22:n.memoizedState===null&&Ss(n);break;case 30:Ss(n);break;default:Ss(n)}e=e.sibling}}function aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:aa(u,f,a),_o(4,f);break;case 1:if(aa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Ge(r,r.return,nt)}if(r=f,u=r.updateQueue,u!==null){var A=r.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Zp(H[u],A)}catch(nt){Ge(r,r.return,nt)}}a&&v&64&&rm(f),vo(f,f.return);break;case 27:um(f);case 26:case 5:aa(u,f,a),a&&r===null&&v&4&&lm(f),vo(f,f.return);break;case 12:aa(u,f,a);break;case 31:aa(u,f,a),a&&v&4&&mm(u,f);break;case 13:aa(u,f,a),a&&v&4&&xm(u,f);break;case 22:f.memoizedState===null&&aa(u,f,a),vo(f,f.return);break;case 30:break;default:aa(u,f,a)}n=n.sibling}}function wf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ao(a))}function Df(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e))}function Ti(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)vm(e,n,a,r),n=n.sibling}function vm(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,r),u&2048&&_o(9,n);break;case 1:Ti(e,n,a,r);break;case 3:Ti(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e)));break;case 12:if(u&2048){Ti(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Ge(n,n.return,H)}}else Ti(e,n,a,r);break;case 31:Ti(e,n,a,r);break;case 13:Ti(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(e,n,a,r):So(e,n):f._visibility&2?Ti(e,n,a,r):(f._visibility|=2,nr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&wf(v,n);break;case 24:Ti(e,n,a,r),u&2048&&Df(n.alternate,n);break;default:Ti(e,n,a,r)}}function nr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,A=a,H=r,nt=v.flags;switch(v.tag){case 0:case 11:case 15:nr(f,v,A,H,u),_o(8,v);break;case 23:break;case 22:var mt=v.stateNode;v.memoizedState!==null?mt._visibility&2?nr(f,v,A,H,u):So(f,v):(mt._visibility|=2,nr(f,v,A,H,u)),u&&nt&2048&&wf(v.alternate,v);break;case 24:nr(f,v,A,H,u),u&&nt&2048&&Df(v.alternate,v);break;default:nr(f,v,A,H,u)}n=n.sibling}}function So(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:So(a,r),u&2048&&wf(r.alternate,r);break;case 24:So(a,r),u&2048&&Df(r.alternate,r);break;default:So(a,r)}n=n.sibling}}var yo=8192;function ir(e,n,a){if(e.subtreeFlags&yo)for(e=e.child;e!==null;)Sm(e,n,a),e=e.sibling}function Sm(e,n,a){switch(e.tag){case 26:ir(e,n,a),e.flags&yo&&e.memoizedState!==null&&_S(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:ir(e,n,a);break;case 3:case 4:var r=Ei;Ei=ic(e.stateNode.containerInfo),ir(e,n,a),Ei=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=yo,yo=16777216,ir(e,n,a),yo=r):ir(e,n,a));break;default:ir(e,n,a)}}function ym(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];En=r,bm(r,e)}ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mm(e),e=e.sibling}function Mm(e){switch(e.tag){case 0:case 11:case 15:Mo(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:Mo(e);break;case 12:Mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,kl(e)):Mo(e);break;default:Mo(e)}}function kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];En=r,bm(r,e)}ym(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kl(n));break;default:kl(n)}e=e.sibling}}function bm(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ao(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,En=r;else t:for(a=e;En!==null;){r=En;var u=r.sibling,f=r.return;if(hm(r),r===a){En=null;break t}if(u!==null){u.return=f,En=u;break t}En=f}}}var Lv={getCacheForType:function(e){var n=Cn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(fn).controller.signal}},Ov=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ke=null,be=null,Te=0,He=0,ei=null,Pa=!1,ar=!1,Uf=!1,sa=0,rn=0,za=0,ys=0,Nf=0,ni=0,sr=0,bo=null,qn=null,Lf=!1,Wl=0,Em=0,ql=1/0,Yl=null,Ia=null,_n=0,Ba=null,rr=null,ra=0,Of=0,Pf=null,Tm=null,Eo=0,zf=null;function ii(){return(Be&2)!==0&&Te!==0?Te&-Te:B.T!==null?Vf():kr()}function Am(){if(ni===0)if((Te&536870912)===0||we){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function Yn(e,n,a){(e===Ke&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(or(e,0),Fa(e,Te,ni,!1)),Nn(e,a),((Be&2)===0||e!==Ke)&&(e===Ke&&((Be&2)===0&&(ys|=a),rn===4&&Fa(e,Te,ni,!1)),zi(e))}function Rm(e,n,a){if((Be&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Vt(e,n),u=r?Iv(e,n):Bf(e,n,!0),f=r;do{if(u===0){ar&&!r&&Fa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Pv(a)){u=Bf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var A=e;u=bo;var H=A.current.memoizedState.isDehydrated;if(H&&(or(A,v).flags|=256),v=Bf(A,v,!1),v!==2){if(Uf&&!H){A.errorRecoveryDisabledLanes|=f,ys|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){or(e,0),Fa(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Fa(r,n,ni,!Pa);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Wl+300-E(),10<u)){if(Fa(r,n,ni,!Pa),St(r,0,!0)!==0)break t;ra=n,r.timeoutHandle=ax(Cm.bind(null,r,a,qn,Yl,Lf,n,ni,ys,sr,Pa,f,"Throttled",-0,0),u);break t}Cm(r,a,qn,Yl,Lf,n,ni,ys,sr,Pa,f,null,-0,0)}}break}while(!0);zi(e)}function Cm(e,n,a,r,u,f,v,A,H,nt,mt,vt,st,ct){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},Sm(n,f,vt);var qt=(f&62914560)===f?Wl-E():(f&4194048)===f?Em-E():0;if(qt=vS(vt,qt),qt!==null){ra=f,e.cancelPendingCommit=qt(zm.bind(null,e,n,f,a,r,u,v,A,H,mt,vt,null,st,ct)),Fa(e,f,v,!nt);return}}zm(e,n,f,a,r,u,v,A,H)}function Pv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(e,n,a,r){n&=~Nf,n&=~ys,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-jt(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&sl(e,a,n)}function jl(){return(Be&6)===0?(To(0),!1):!0}function If(){if(be!==null){if(He===0)var e=be.return;else e=be,Zi=ds=null,Ju(e),Qs=null,ro=0,e=be;for(;e!==null;)sm(e.alternate,e),e=e.return;be=null}}function or(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,eS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,If(),Ke=e,be=a=Yi(e.current,null),Te=n,He=0,ei=null,Pa=!1,ar=Vt(e,n),Uf=!1,sr=ni=Nf=ys=za=rn=0,qn=bo=null,Lf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-jt(r),f=1<<u;n|=e[u],r&=~f}return sa=n,ml(),a}function wm(e,n){me=null,B.H=mo,n===Ks||n===bl?(n=Wp(),He=3):n===Hu?(n=Wp(),He=4):He=n===mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,be===null&&(rn=1,Il(e,ui(n,e.current)))}function Dm(){var e=$n.current;return e===null?!0:(Te&4194048)===Te?pi===null:(Te&62914560)===Te||(Te&536870912)!==0?e===pi:!1}function Um(){var e=B.H;return B.H=mo,e===null?mo:e}function Nm(){var e=B.A;return B.A=Lv,e}function Zl(){rn=4,Pa||(Te&4194048)!==Te&&$n.current!==null||(ar=!0),(za&134217727)===0&&(ys&134217727)===0||Ke===null||Fa(Ke,Te,ni,!1)}function Bf(e,n,a){var r=Be;Be|=2;var u=Um(),f=Nm();(Ke!==e||Te!==n)&&(Yl=null,or(e,n)),n=!1;var v=rn;t:do try{if(He!==0&&be!==null){var A=be,H=ei;switch(He){case 8:If(),v=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var nt=He;if(He=0,ei=null,lr(e,A,H,nt),a&&ar){v=0;break t}break;default:nt=He,He=0,ei=null,lr(e,A,H,nt)}}zv(),v=rn;break}catch(mt){wm(e,mt)}while(!0);return n&&e.shellSuspendCounter++,Zi=ds=null,Be=r,B.H=u,B.A=f,be===null&&(Ke=null,Te=0,ml()),v}function zv(){for(;be!==null;)Lm(be)}function Iv(e,n){var a=Be;Be|=2;var r=Um(),u=Nm();Ke!==e||Te!==n?(Yl=null,ql=E()+500,or(e,n)):ar=Vt(e,n);t:do try{if(He!==0&&be!==null){n=be;var f=ei;e:switch(He){case 1:He=0,ei=null,lr(e,n,f,1);break;case 2:case 9:if(Xp(f)){He=0,ei=null,Om(n);break}n=function(){He!==2&&He!==9||Ke!==e||(He=7),zi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Xp(f)?(He=0,ei=null,Om(n)):(He=0,ei=null,lr(e,n,f,7));break;case 5:var v=null;switch(be.tag){case 26:v=be.memoizedState;case 5:case 27:var A=be;if(v?vx(v):A.stateNode.complete){He=0,ei=null;var H=A.sibling;if(H!==null)be=H;else{var nt=A.return;nt!==null?(be=nt,Kl(nt)):be=null}break e}}He=0,ei=null,lr(e,n,f,5);break;case 6:He=0,ei=null,lr(e,n,f,6);break;case 8:If(),rn=6;break t;default:throw Error(s(462))}}Bv();break}catch(mt){wm(e,mt)}while(!0);return Zi=ds=null,B.H=r,B.A=u,Be=a,be!==null?0:(Ke=null,Te=0,ml(),rn)}function Bv(){for(;be!==null&&!ae();)Lm(be)}function Lm(e){var n=im(e.alternate,e,sa);e.memoizedProps=e.pendingProps,n===null?Kl(e):be=n}function Om(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Q0(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=Q0(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:Ju(n);default:sm(a,n),n=be=Np(n,sa),n=im(a,n,sa)}e.memoizedProps=e.pendingProps,n===null?Kl(e):be=n}function lr(e,n,a,r){Zi=ds=null,Ju(n),Qs=null,ro=0;var u=n.return;try{if(Av(e,u,n,a,Te)){rn=1,Il(e,ui(a,e.current)),be=null;return}}catch(f){if(u!==null)throw be=u,f;rn=1,Il(e,ui(a,e.current)),be=null;return}n.flags&32768?(we||r===1?e=!0:ar||(Te&536870912)!==0?e=!1:(Pa=e=!0,(r===2||r===9||r===3||r===6)&&(r=$n.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pm(n,e)):Kl(n)}function Kl(e){var n=e;do{if((n.flags&32768)!==0){Pm(n,Pa);return}e=n.return;var a=wv(n.alternate,n,sa);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=e}while(n!==null);rn===0&&(rn=5)}function Pm(e,n){do{var a=Dv(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);rn=6,be=null}function zm(e,n,a,r,u,f,v,A,H){e.cancelPendingCommit=null;do Ql();while(_n!==0);if((Be&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Tu,Zn(e,a,f,v,A,H),e===Ke&&(be=Ke=null,Te=0),rr=n,Ba=e,ra=a,Of=f,Pf=u,Tm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vv(rt,function(){return Gm(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,u=W.p,W.p=2,v=Be,Be|=4;try{Uv(e,n,a)}finally{Be=v,W.p=u,B.T=r}}_n=1,Im(),Bm(),Fm()}}function Im(){if(_n===1){_n=0;var e=Ba,n=rr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var r=W.p;W.p=2;var u=Be;Be|=4;try{gm(n,e);var f=Kf,v=bp(e.containerInfo),A=f.focusedElem,H=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&Mp(A.ownerDocument.documentElement,A)){if(H!==null&&Su(A)){var nt=H.start,mt=H.end;if(mt===void 0&&(mt=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(mt,A.value.length);else{var vt=A.ownerDocument||document,st=vt&&vt.defaultView||window;if(st.getSelection){var ct=st.getSelection(),qt=A.textContent.length,re=Math.min(H.start,qt),qe=H.end===void 0?re:Math.min(H.end,qt);!ct.extend&&re>qe&&(v=qe,qe=re,re=v);var Y=yp(A,re),X=yp(A,qe);if(Y&&X&&(ct.rangeCount!==1||ct.anchorNode!==Y.node||ct.anchorOffset!==Y.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var et=vt.createRange();et.setStart(Y.node,Y.offset),ct.removeAllRanges(),re>qe?(ct.addRange(et),ct.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ct.addRange(et))}}}}for(vt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var _t=vt[A];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}cc=!!Zf,Kf=Zf=null}finally{Be=u,W.p=r,B.T=a}}e.current=n,_n=2}}function Bm(){if(_n===2){_n=0;var e=Ba,n=rr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var r=W.p;W.p=2;var u=Be;Be|=4;try{dm(e,n.alternate,n)}finally{Be=u,W.p=r,B.T=a}}_n=3}}function Fm(){if(_n===4||_n===3){_n=0,U();var e=Ba,n=rr,a=ra,r=Tm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,rr=Ba=null,Hm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ia=null),as(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=B.T,u=W.p,W.p=2,B.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];f(A.value,{componentStack:A.stack})}}finally{B.T=n,W.p=u}}(ra&3)!==0&&Ql(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===zf?Eo++:(Eo=0,zf=e):Eo=0,To(0)}}function Hm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ao(n)))}function Ql(){return Im(),Bm(),Fm(),Gm()}function Gm(){if(_n!==5)return!1;var e=Ba,n=Of;Of=0;var a=as(ra),r=B.T,u=W.p;try{W.p=32>a?32:a,B.T=null,a=Pf,Pf=null;var f=Ba,v=ra;if(_n=0,rr=Ba=null,ra=0,(Be&6)!==0)throw Error(s(331));var A=Be;if(Be|=4,Mm(f.current),vm(f,f.current,v,a),Be=A,To(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{W.p=u,B.T=r,Hm(e,n)}}function Vm(e,n,a){n=ui(a,n),n=pf(e.stateNode,n,2),e=Ua(e,n,2),e!==null&&(Nn(e,2),zi(e))}function Ge(e,n,a){if(e.tag===3)Vm(e,e,a);else for(;n!==null;){if(n.tag===3){Vm(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){e=ui(a,e),a=X0(2),r=Ua(n,a,2),r!==null&&(k0(a,r,n,e),Nn(r,2),zi(r));break}}n=n.return}}function Ff(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Ov;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Uf=!0,u.add(a),e=Fv.bind(null,e,n,a),n.then(e,e))}function Fv(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ke===e&&(Te&a)===a&&(rn===4||rn===3&&(Te&62914560)===Te&&300>E()-Wl?(Be&2)===0&&or(e,0):Nf|=a,sr===Te&&(sr=0)),zi(e)}function Xm(e,n){n===0&&(n=Xe()),e=cs(e,n),e!==null&&(Nn(e,n),zi(e))}function Hv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Xm(e,a)}function Gv(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Xm(e,a)}function Vv(e,n){return Me(e,n)}var Jl=null,cr=null,Hf=!1,$l=!1,Gf=!1,Ha=0;function zi(e){e!==cr&&e.next===null&&(cr===null?Jl=cr=e:cr=cr.next=e),$l=!0,Hf||(Hf=!0,kv())}function To(e,n){if(!Gf&&$l){Gf=!0;do for(var a=!1,r=Jl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-jt(42|e)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ym(r,f))}else f=Te,f=St(r,r===Ke?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Vt(r,f)||(a=!0,Ym(r,f));r=r.next}while(a);Gf=!1}}function Xv(){km()}function km(){$l=Hf=!1;var e=0;Ha!==0&&tS()&&(e=Ha);for(var n=E(),a=null,r=Jl;r!==null;){var u=r.next,f=Wm(r,n);f===0?(r.next=null,a===null?Jl=u:a.next=u,u===null&&(cr=a)):(a=r,(e!==0||(f&3)!==0)&&($l=!0)),r=u}_n!==0&&_n!==5||To(e),Ha!==0&&(Ha=0)}function Wm(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-jt(f),A=1<<v,H=u[v];H===-1?((A&a)===0||(A&r)!==0)&&(u[v]=ue(A,n)):H<=n&&(e.expiredLanes|=A),f&=~A}if(n=Ke,a=Te,a=St(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&kt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Vt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&kt(r),as(a)){case 2:case 8:a=gt;break;case 32:a=rt;break;case 268435456:a=Ct;break;default:a=rt}return r=qm.bind(null,e),a=Me(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&kt(r),e.callbackPriority=2,e.callbackNode=null,2}function qm(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ql()&&e.callbackNode!==a)return null;var r=Te;return r=St(e,e===Ke?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Rm(e,r,n),Wm(e,E()),e.callbackNode!=null&&e.callbackNode===a?qm.bind(null,e):null)}function Ym(e,n){if(Ql())return null;Rm(e,n,!0)}function kv(){nS(function(){(Be&6)!==0?Me(xt,Xv):km()})}function Vf(){if(Ha===0){var e=js;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),Ha=e}return Ha}function jm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ol(""+e)}function Zm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Wv(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=jm((u[xn]||null).action),v=r.submitter;v&&(n=(n=v[xn]||null)?jm(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new fl("action","action",null,r,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ha!==0){var H=v?Zm(u,v):new FormData(u);lf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=v?Zm(u,v):new FormData(u),lf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Xf=0;Xf<Eu.length;Xf++){var kf=Eu[Xf],qv=kf.toLowerCase(),Yv=kf[0].toUpperCase()+kf.slice(1);bi(qv,"on"+Yv)}bi(Ap,"onAnimationEnd"),bi(Rp,"onAnimationIteration"),bi(Cp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(cv,"onTransitionRun"),bi(uv,"onTransitionStart"),bi(fv,"onTransitionCancel"),bi(wp,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function Km(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var A=r[v],H=A.instance,nt=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=nt;try{f(u)}catch(mt){pl(mt)}u.currentTarget=null,f=H}else for(v=0;v<r.length;v++){if(A=r[v],H=A.instance,nt=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=nt;try{f(u)}catch(mt){pl(mt)}u.currentTarget=null,f=H}}}}function Ee(e,n){var a=n[zs];a===void 0&&(a=n[zs]=new Set);var r=e+"__bubble";a.has(r)||(Qm(n,e,2,!1),a.add(r))}function Wf(e,n,a){var r=0;n&&(r|=4),Qm(a,e,r,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function qf(e){if(!e[tc]){e[tc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(jv.has(a)||Wf(a,!1,e),Wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[tc]||(n[tc]=!0,Wf("selectionchange",!1,n))}}function Qm(e,n,a,r){switch(Ax(n)){case 2:var u=MS;break;case 8:u=bS;break;default:u=od}a=u.bind(null,n,a,e),u=void 0,!fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Yf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=r.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=Ma(A),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){r=f=v;continue t}A=A.parentNode}}r=r.return}np(function(){var nt=f,mt=cu(a),vt=[];t:{var st=Dp.get(e);if(st!==void 0){var ct=fl,qt=e;switch(e){case"keypress":if(cl(a)===0)break t;case"keydown":case"keyup":ct=G_;break;case"focusin":qt="focus",ct=mu;break;case"focusout":qt="blur",ct=mu;break;case"beforeblur":case"afterblur":ct=mu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=w_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=k_;break;case Ap:case Rp:case Cp:ct=N_;break;case wp:ct=q_;break;case"scroll":case"scrollend":ct=R_;break;case"wheel":ct=j_;break;case"copy":case"cut":case"paste":ct=O_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=op;break;case"toggle":case"beforetoggle":ct=K_}var re=(n&4)!==0,qe=!re&&(e==="scroll"||e==="scrollend"),Y=re?st!==null?st+"Capture":null:st;re=[];for(var X=nt,et;X!==null;){var _t=X;if(et=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||et===null||Y===null||(_t=Yr(X,Y),_t!=null&&re.push(Ro(X,_t,et))),qe)break;X=X.return}0<re.length&&(st=new ct(st,qt,null,a,mt),vt.push({event:st,listeners:re}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",st&&a!==lu&&(qt=a.relatedTarget||a.fromElement)&&(Ma(qt)||qt[Vi]))break t;if((ct||st)&&(st=mt.window===mt?mt:(st=mt.ownerDocument)?st.defaultView||st.parentWindow:window,ct?(qt=a.relatedTarget||a.toElement,ct=nt,qt=qt?Ma(qt):null,qt!==null&&(qe=c(qt),re=qt.tag,qt!==qe||re!==5&&re!==27&&re!==6)&&(qt=null)):(ct=null,qt=nt),ct!==qt)){if(re=sp,_t="onMouseLeave",Y="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(re=op,_t="onPointerLeave",Y="onPointerEnter",X="pointer"),qe=ct==null?st:q(ct),et=qt==null?st:q(qt),st=new re(_t,X+"leave",ct,a,mt),st.target=qe,st.relatedTarget=et,_t=null,Ma(mt)===nt&&(re=new re(Y,X+"enter",qt,a,mt),re.target=et,re.relatedTarget=qe,_t=re),qe=_t,ct&&qt)e:{for(re=Zv,Y=ct,X=qt,et=0,_t=Y;_t;_t=re(_t))et++;_t=0;for(var ee=X;ee;ee=re(ee))_t++;for(;0<et-_t;)Y=re(Y),et--;for(;0<_t-et;)X=re(X),_t--;for(;et--;){if(Y===X||X!==null&&Y===X.alternate){re=Y;break e}Y=re(Y),X=re(X)}re=null}else re=null;ct!==null&&Jm(vt,st,ct,re,!1),qt!==null&&qe!==null&&Jm(vt,qe,qt,re,!0)}}t:{if(st=nt?q(nt):window,ct=st.nodeName&&st.nodeName.toLowerCase(),ct==="select"||ct==="input"&&st.type==="file")var Pe=mp;else if(hp(st))if(xp)Pe=rv;else{Pe=av;var Qt=iv}else ct=st.nodeName,!ct||ct.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&ou(nt.elementType)&&(Pe=mp):Pe=sv;if(Pe&&(Pe=Pe(e,nt))){pp(vt,Pe,a,mt);break t}Qt&&Qt(e,st,nt),e==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&Mn(st,"number",st.value)}switch(Qt=nt?q(nt):window,e){case"focusin":(hp(Qt)||Qt.contentEditable==="true")&&(Hs=Qt,yu=nt,eo=null);break;case"focusout":eo=yu=Hs=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Ep(vt,a,mt);break;case"selectionchange":if(lv)break;case"keydown":case"keyup":Ep(vt,a,mt)}var ge;if(gu)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Fs?fp(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(lp&&a.locale!=="ko"&&(Fs||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Fs&&(ge=ip()):(Ea=mt,du="value"in Ea?Ea.value:Ea.textContent,Fs=!0)),Qt=ec(nt,Ae),0<Qt.length&&(Ae=new rp(Ae,e,null,a,mt),vt.push({event:Ae,listeners:Qt}),ge?Ae.data=ge:(ge=dp(a),ge!==null&&(Ae.data=ge)))),(ge=J_?$_(e,a):tv(e,a))&&(Ae=ec(nt,"onBeforeInput"),0<Ae.length&&(Qt=new rp("onBeforeInput","beforeinput",null,a,mt),vt.push({event:Qt,listeners:Ae}),Qt.data=ge)),Wv(vt,e,nt,a,mt)}Km(vt,n)})}function Ro(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ec(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Yr(e,a),u!=null&&r.unshift(Ro(e,u,f)),u=Yr(e,n),u!=null&&r.push(Ro(e,u,f))),e.tag===3)return r;e=e.return}return[]}function Zv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jm(e,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var A=a,H=A.alternate,nt=A.stateNode;if(A=A.tag,H!==null&&H===r)break;A!==5&&A!==26&&A!==27||nt===null||(H=nt,u?(nt=Yr(a,f),nt!=null&&v.unshift(Ro(a,nt,H))):u||(nt=Yr(a,f),nt!=null&&v.push(Ro(a,nt,H)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Kv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function $m(e){return(typeof e=="string"?e:""+e).replace(Kv,`
`).replace(Qv,"")}function tx(e,n){return n=$m(n),$m(e)===n}function We(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ni(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ni(e,""+r);break;case"className":Ne(e,"class",r);break;case"tabIndex":Ne(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(e,a,r);break;case"style":tp(e,r,f);break;case"data":if(n!=="object"){Ne(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=ol(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&We(e,n,"name",u.name,u,null),We(e,n,"formEncType",u.formEncType,u,null),We(e,n,"formMethod",u.formMethod,u,null),We(e,n,"formTarget",u.formTarget,u,null)):(We(e,n,"encType",u.encType,u,null),We(e,n,"method",u.method,u,null),We(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=ol(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Wi);break;case"onScroll":r!=null&&Ee("scroll",e);break;case"onScrollEnd":r!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=ol(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),xe(e,"popover",r);break;case"xlinkActuate":Oe(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Oe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Oe(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Oe(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Oe(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Oe(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":xe(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=T_.get(a)||a,xe(e,a,r))}}function jf(e,n,a,r,u,f){switch(a){case"style":tp(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ni(e,r):(typeof r=="number"||typeof r=="bigint")&&Ni(e,""+r);break;case"onScroll":r!=null&&Ee("scroll",e);break;case"onScrollEnd":r!=null&&Ee("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):xe(e,a,r)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(e,n,f,v,a,null)}}u&&We(e,n,"srcSet",a.srcSet,a,null),r&&We(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var A=f=v=u=null,H=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var mt=a[r];if(mt!=null)switch(r){case"name":u=mt;break;case"type":v=mt;break;case"checked":H=mt;break;case"defaultChecked":nt=mt;break;case"value":f=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:We(e,n,r,mt,a,null)}}Je(e,f,A,H,nt,v,u,!1);return;case"select":Ee("invalid",e),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:We(e,n,u,A,a,null)}n=f,a=v,e.multiple=!!r,n!=null?gn(e,!!r,n,!1):a!=null&&gn(e,!!r,a,!0);return;case"textarea":Ee("invalid",e),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:We(e,n,v,A,a,null)}An(e,r,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(r=a[H],r!=null))switch(H){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:We(e,n,H,r,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(r=0;r<Ao.length;r++)Ee(Ao[r],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(e,n,nt,r,a,null)}return;default:if(ou(n)){for(mt in a)a.hasOwnProperty(mt)&&(r=a[mt],r!==void 0&&jf(e,n,mt,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&We(e,n,A,r,a,null))}function Jv(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,H=null,nt=null,mt=null;for(ct in a){var vt=a[ct];if(a.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":H=vt;default:r.hasOwnProperty(ct)||We(e,n,ct,null,r,vt)}}for(var st in r){var ct=r[st];if(vt=a[st],r.hasOwnProperty(st)&&(ct!=null||vt!=null))switch(st){case"type":f=ct;break;case"name":u=ct;break;case"checked":nt=ct;break;case"defaultChecked":mt=ct;break;case"value":v=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==vt&&We(e,n,st,ct,r,vt)}}Xi(e,v,A,H,nt,mt,f,u);return;case"select":ct=v=A=st=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ct=H;default:r.hasOwnProperty(f)||We(e,n,f,null,r,H)}for(u in r)if(f=r[u],H=a[u],r.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":st=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==H&&We(e,n,u,f,r,H)}n=A,a=v,r=ct,st!=null?gn(e,!!a,st,!1):!!r!=!!a&&(n!=null?gn(e,!!a,n,!0):gn(e,!!a,a?[]:"",!1));return;case"textarea":ct=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:We(e,n,A,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":st=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&We(e,n,v,u,r,f)}bn(e,st,ct);return;case"option":for(var qt in a)if(st=a[qt],a.hasOwnProperty(qt)&&st!=null&&!r.hasOwnProperty(qt))switch(qt){case"selected":e.selected=!1;break;default:We(e,n,qt,null,r,st)}for(H in r)if(st=r[H],ct=a[H],r.hasOwnProperty(H)&&st!==ct&&(st!=null||ct!=null))switch(H){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:We(e,n,H,st,r,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)st=a[re],a.hasOwnProperty(re)&&st!=null&&!r.hasOwnProperty(re)&&We(e,n,re,null,r,st);for(nt in r)if(st=r[nt],ct=a[nt],r.hasOwnProperty(nt)&&st!==ct&&(st!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:We(e,n,nt,st,r,ct)}return;default:if(ou(n)){for(var qe in a)st=a[qe],a.hasOwnProperty(qe)&&st!==void 0&&!r.hasOwnProperty(qe)&&jf(e,n,qe,void 0,r,st);for(mt in r)st=r[mt],ct=a[mt],!r.hasOwnProperty(mt)||st===ct||st===void 0&&ct===void 0||jf(e,n,mt,st,r,ct);return}}for(var Y in a)st=a[Y],a.hasOwnProperty(Y)&&st!=null&&!r.hasOwnProperty(Y)&&We(e,n,Y,null,r,st);for(vt in r)st=r[vt],ct=a[vt],!r.hasOwnProperty(vt)||st===ct||st==null&&ct==null||We(e,n,vt,st,r,ct)}function ex(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $v(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&ex(v)){for(v=0,A=u.responseEnd,r+=1;r<a.length;r++){var H=a[r],nt=H.startTime;if(nt>A)break;var mt=H.transferSize,vt=H.initiatorType;mt&&ex(vt)&&(H=H.responseEnd,v+=mt*(H<A?1:(A-nt)/(H-nt)))}if(--r,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zf=null,Kf=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function nx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ix(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Qf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function tS(){var e=window.event;return e&&e.type==="popstate"?e===Jf?!1:(Jf=e,!0):(Jf=null,!1)}var ax=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,sx=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof sx<"u"?function(e){return sx.resolve(null).then(e).catch(iS)}:ax;function iS(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function rx(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),hr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Co(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Co(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[ss]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Co(e.ownerDocument.body);a=u}while(a);hr(n)}function ox(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function $f(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function aS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ss])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function sS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function lx(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function td(e){return e.data==="$?"||e.data==="$~"}function ed(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var nd=null;function cx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function ux(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function fx(e,n,a){switch(n=nc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qr(e)}var xi=new Map,dx=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=W.d;W.d={f:oS,r:lS,D:cS,C:uS,L:fS,m:dS,X:pS,S:hS,M:mS};function oS(){var e=oa.f(),n=jl();return e||n}function lS(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?w0(n):oa.r(e)}var ur=typeof document>"u"?null:document;function hx(e,n,a){var r=ur;if(r&&typeof n=="string"&&n){var u=Qe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),dx.has(u)||(dx.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Dn(n,"link",e),it(n),r.head.appendChild(n)))}}function cS(e){oa.D(e),hx("dns-prefetch",e,null)}function uS(e,n){oa.C(e,n),hx("preconnect",e,n)}function fS(e,n,a){oa.L(e,n,a);var r=ur;if(r&&e&&n){var u='link[rel="preload"][as="'+Qe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Qe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Qe(a.imageSizes)+'"]')):u+='[href="'+Qe(e)+'"]';var f=u;switch(n){case"style":f=fr(e);break;case"script":f=dr(e)}xi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),xi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(wo(f))||n==="script"&&r.querySelector(Do(f))||(n=r.createElement("link"),Dn(n,"link",e),it(n),r.head.appendChild(n)))}}function dS(e,n){oa.m(e,n);var a=ur;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Qe(r)+'"][href="'+Qe(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=dr(e)}if(!xi.has(f)&&(e=_({rel:"modulepreload",href:e},n),xi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}r=a.createElement("link"),Dn(r,"link",e),it(r),a.head.appendChild(r)}}}function hS(e,n,a){oa.S(e,n,a);var r=ur;if(r&&e){var u=ot(r).hoistableStyles,f=fr(e);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(wo(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=xi.get(f))&&id(e,a);var H=v=r.createElement("link");it(H),Dn(H,"link",e),H._p=new Promise(function(nt,mt){H.onload=nt,H.onerror=mt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ac(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function pS(e,n){oa.X(e,n);var a=ur;if(a&&e){var r=ot(a).hoistableScripts,u=dr(e),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(e=_({src:e,async:!0},n),(n=xi.get(u))&&ad(e,n),f=a.createElement("script"),it(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function mS(e,n){oa.M(e,n);var a=ur;if(a&&e){var r=ot(a).hoistableScripts,u=dr(e),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=xi.get(u))&&ad(e,n),f=a.createElement("script"),it(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function px(e,n,a,r){var u=(u=at.current)?ic(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fr(a.href),a=ot(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=fr(a.href);var f=ot(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(wo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),xi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(e,a),f||xS(u,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=dr(a),a=ot(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function fr(e){return'href="'+Qe(e)+'"'}function wo(e){return'link[rel="stylesheet"]['+e+"]"}function mx(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function xS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Dn(n,"link",a),it(n),e.head.appendChild(n))}function dr(e){return'[src="'+Qe(e)+'"]'}function Do(e){return"script[async]"+e}function xx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Qe(a.href)+'"]');if(r)return n.instance=r,it(r),r;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),it(r),Dn(r,"style",u),ac(r,a.precedence,e),n.instance=r;case"stylesheet":u=fr(a.href);var f=e.querySelector(wo(u));if(f)return n.state.loading|=4,n.instance=f,it(f),f;r=mx(a),(u=xi.get(u))&&id(r,u),f=(e.ownerDocument||e).createElement("link"),it(f);var v=f;return v._p=new Promise(function(A,H){v.onload=A,v.onerror=H}),Dn(f,"link",r),n.state.loading|=4,ac(f,a.precedence,e),n.instance=f;case"script":return f=dr(a.src),(u=e.querySelector(Do(f)))?(n.instance=u,it(u),u):(r=a,(u=xi.get(f))&&(r=_({},a),ad(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),it(u),Dn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ac(r,a.precedence,e));return n.instance}function ac(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function id(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ad(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var sc=null;function gx(e,n,a){if(sc===null){var r=new Map,u=sc=new Map;u.set(a,r)}else u=sc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ss]||f[un]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var A=r.get(v);A?A.push(f):r.set(v,[f])}}return r}function _x(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function gS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function vx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _S(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=fr(r.href),f=n.querySelector(wo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=rc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,it(f);return}f=n.ownerDocument||n,r=mx(r),(u=xi.get(u))&&id(r,u),f=f.createElement("link"),it(f);var v=f;v._p=new Promise(function(A,H){v.onload=A,v.onerror=H}),Dn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=rc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var sd=0;function vS(e,n){return e.stylesheets&&e.count===0&&lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&sd===0&&(sd=62500*$v());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>sd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function lc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,n.forEach(SS,e),oc=null,rc.call(e))}function SS(e,n){if(!(n.state.loading&4)){var a=oc.get(e);if(a)var r=a.get(null);else{a=new Map,oc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=rc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Uo={$$typeof:N,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function yS(e,n,a,r,u,f,v,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Le(0),this.hiddenUpdates=Le(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Sx(e,n,a,r,u,f,v,A,H,nt,mt,vt){return e=new yS(e,n,a,v,H,nt,mt,vt,A),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),e.current=f,f.stateNode=e,n=Iu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Gu(f),e}function yx(e){return e?(e=Xs,e):Xs}function Mx(e,n,a,r,u,f){u=yx(u),r.context===null?r.context=u:r.pendingContext=u,r=Da(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ua(e,r,n),a!==null&&(Yn(a,e,n),lo(a,e,n))}function bx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function rd(e,n){bx(e,n),(e=e.alternate)&&bx(e,n)}function Ex(e){if(e.tag===13||e.tag===31){var n=cs(e,67108864);n!==null&&Yn(n,e,67108864),rd(e,67108864)}}function Tx(e){if(e.tag===13||e.tag===31){var n=ii();n=Mi(n);var a=cs(e,n);a!==null&&Yn(a,e,n),rd(e,n)}}var cc=!0;function MS(e,n,a,r){var u=B.T;B.T=null;var f=W.p;try{W.p=2,od(e,n,a,r)}finally{W.p=f,B.T=u}}function bS(e,n,a,r){var u=B.T;B.T=null;var f=W.p;try{W.p=8,od(e,n,a,r)}finally{W.p=f,B.T=u}}function od(e,n,a,r){if(cc){var u=ld(r);if(u===null)Yf(e,n,r,uc,a),Rx(e,r);else if(TS(u,e,n,a,r))r.stopPropagation();else if(Rx(e,r),n&4&&-1<ES.indexOf(e)){for(;u!==null;){var f=R(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Et(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var H=1<<31-jt(v);A.entanglements[1]|=H,v&=~H}zi(f),(Be&6)===0&&(ql=E()+500,To(0))}}break;case 31:case 13:A=cs(f,2),A!==null&&Yn(A,f,2),jl(),rd(f,2)}if(f=ld(r),f===null&&Yf(e,n,r,uc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Yf(e,n,r,null,a)}}function ld(e){return e=cu(e),cd(e)}var uc=null;function cd(e){if(uc=null,e=Ma(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return uc=e,null}function Ax(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case xt:return 2;case gt:return 8;case rt:case Zt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var ud=!1,Va=null,Xa=null,ka=null,No=new Map,Lo=new Map,Wa=[],ES="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rx(e,n){switch(e){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function Oo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&Ex(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function TS(e,n,a,r,u){switch(n){case"focusin":return Va=Oo(Va,e,n,a,r,u),!0;case"dragenter":return Xa=Oo(Xa,e,n,a,r,u),!0;case"mouseover":return ka=Oo(ka,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return No.set(f,Oo(No.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,Oo(Lo.get(f)||null,e,n,a,r,u)),!0}return!1}function Cx(e){var n=Ma(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Wr(e.priority,function(){Tx(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Wr(e.priority,function(){Tx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ld(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);lu=r,a.target.dispatchEvent(r),lu=null}else return n=R(a),n!==null&&Ex(n),e.blockedOn=a,!1;n.shift()}return!0}function wx(e,n,a){fc(e)&&a.delete(n)}function AS(){ud=!1,Va!==null&&fc(Va)&&(Va=null),Xa!==null&&fc(Xa)&&(Xa=null),ka!==null&&fc(ka)&&(ka=null),No.forEach(wx),Lo.forEach(wx)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,ud||(ud=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,AS)))}var hc=null;function Dx(e){hc!==e&&(hc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){hc===e&&(hc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(cd(r||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,lf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function hr(e){function n(H){return dc(H,e)}Va!==null&&dc(Va,e),Xa!==null&&dc(Xa,e),ka!==null&&dc(ka,e),No.forEach(n),Lo.forEach(n);for(var a=0;a<Wa.length;a++){var r=Wa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Cx(a),a.blockedOn===null&&Wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[xn]||null;if(typeof f=="function")v||Dx(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[xn]||null)A=v.formAction;else if(cd(u)!==null)continue}else A=v.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Dx(a)}}}function Ux(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function fd(e){this._internalRoot=e}pc.prototype.render=fd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ii();Mx(a,r,e,n,null,null)},pc.prototype.unmount=fd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Mx(e.current,2,null,e,null,null),jl(),n[Vi]=null}};function pc(e){this._internalRoot=e}pc.prototype.unstable_scheduleHydration=function(e){if(e){var n=kr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,e),a===0&&Cx(e)}};var Nx=t.version;if(Nx!=="19.2.1")throw Error(s(527,Nx,"19.2.1"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var RS={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{Mt=mc.inject(RS),Tt=mc}catch{}}return zo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=F0,f=H0,v=G0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Sx(e,1,!1,null,null,a,r,null,u,f,v,Ux),e[Vi]=n.current,qf(e),new fd(n)},zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=F0,v=H0,A=G0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Sx(e,1,!0,n,a??null,r,u,H,f,v,A,Ux),n.context=yx(null),a=n.current,r=ii(),r=Mi(r),u=Da(r),u.callback=null,Ua(a,u,r),a=r,n.current.lanes=a,Nn(n,a),zi(n),e[Vi]=n.current,qf(e),new pc(n)},zo.version="19.2.1",zo}var Vx;function BS(){if(Vx)return pd.exports;Vx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),pd.exports=IS(),pd.exports}var FS=BS();const HS=kg(FS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="181",GS=0,Xx=1,VS=2,Wg=1,XS=2,pa=3,is=0,jn=1,oi=2,_a=0,Nr=1,qc=2,kx=3,Wx=4,kS=5,ws=100,WS=101,qS=102,YS=103,jS=104,ZS=200,KS=201,QS=202,JS=203,Kd=204,Qd=205,$S=206,ty=207,ey=208,ny=209,iy=210,ay=211,sy=212,ry=213,oy=214,Jd=0,$d=1,th=2,Or=3,eh=4,nh=5,ih=6,ah=7,qg=0,ly=1,cy=2,es=0,uy=1,fy=2,dy=3,hy=4,py=5,my=6,xy=7,Yg=300,Pr=301,zr=302,sh=303,rh=304,eu=306,oh=1e3,xa=1001,lh=1002,li=1003,gy=1004,xc=1005,Si=1006,_d=1007,Us=1008,Hi=1009,jg=1010,Zg=1011,Qo=1012,Vh=1013,Ls=1014,ga=1015,Fr=1016,Xh=1017,kh=1018,Jo=1020,Kg=35902,Qg=35899,Jg=1021,$g=1022,Ui=1023,$o=1026,tl=1027,t_=1028,Wh=1029,qh=1030,Yh=1031,jh=1033,Gc=33776,Vc=33777,Xc=33778,kc=33779,ch=35840,uh=35841,fh=35842,dh=35843,hh=36196,ph=37492,mh=37496,xh=37808,gh=37809,_h=37810,vh=37811,Sh=37812,yh=37813,Mh=37814,bh=37815,Eh=37816,Th=37817,Ah=37818,Rh=37819,Ch=37820,wh=37821,Dh=36492,Uh=36494,Nh=36495,Lh=36283,Oh=36284,Ph=36285,zh=36286,_y=3200,vy=3201,e_=0,Sy=1,$a="",_i="srgb",Ir="srgb-linear",Yc="linear",Ye="srgb",pr=7680,qx=519,yy=512,My=513,by=514,n_=515,Ey=516,Ty=517,Ay=518,Ry=519,Ih=35044,Yx="300 es",Fi=2e3,jc=2001;function i_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Cy(){const o=Zc("canvas");return o.style.display="block",o}const jx={};function Kc(...o){const t="THREE."+o.shift();console.log(t,...o)}function fe(...o){const t="THREE."+o.shift();console.warn(t,...o)}function on(...o){const t="THREE."+o.shift();console.error(t,...o)}function el(...o){const t=o.join(" ");t in jx||(jx[t]=!0,fe(...o))}function wy(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Hr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zx=1234567;const jo=Math.PI/180,nl=180/Math.PI;function va(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Se(o,t,i){return Math.max(t,Math.min(i,o))}function Zh(o,t){return(o%t+t)%t}function Dy(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function Uy(o,t,i){return o!==t?(i-o)/(t-o):0}function Zo(o,t,i){return(1-i)*o+i*t}function Ny(o,t,i,s){return Zo(o,t,1-Math.exp(-i*s))}function Ly(o,t=1){return t-Math.abs(Zh(o,t*2)-t)}function Oy(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function Py(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function zy(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Iy(o,t){return o+Math.random()*(t-o)}function By(o){return o*(.5-Math.random())}function Fy(o){o!==void 0&&(Zx=o);let t=Zx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hy(o){return o*jo}function Gy(o){return o*nl}function Vy(o){return(o&o-1)===0&&o!==0}function Xy(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function ky(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Wy(o,t,i,s,l){const c=Math.cos,d=Math.sin,h=c(i/2),m=d(i/2),p=c((t+s)/2),g=d((t+s)/2),_=c((t-s)/2),S=d((t-s)/2),y=c((s-t)/2),b=d((s-t)/2);switch(l){case"XYX":o.set(h*g,m*_,m*S,h*p);break;case"YZY":o.set(m*S,h*g,m*_,h*p);break;case"ZXZ":o.set(m*_,m*S,h*g,h*p);break;case"XZX":o.set(h*g,m*b,m*y,h*p);break;case"YXY":o.set(m*y,h*g,m*b,h*p);break;case"ZYZ":o.set(m*b,m*y,h*g,h*p);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Di(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ve(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const qy={DEG2RAD:jo,RAD2DEG:nl,generateUUID:va,clamp:Se,euclideanModulo:Zh,mapLinear:Dy,inverseLerp:Uy,lerp:Zo,damp:Ny,pingpong:Ly,smoothstep:Oy,smootherstep:Py,randInt:zy,randFloat:Iy,randFloatSpread:By,seededRandom:Fy,degToRad:Hy,radToDeg:Gy,isPowerOfTwo:Vy,ceilPowerOfTwo:Xy,floorPowerOfTwo:ky,setQuaternionFromProperEuler:Wy,normalize:Ve,denormalize:Di};class pe{constructor(t=0,i=0){pe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class il{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],S=c[d+0],y=c[d+1],b=c[d+2],T=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(h>=1){t[i+0]=S,t[i+1]=y,t[i+2]=b,t[i+3]=T;return}if(_!==T||m!==S||p!==y||g!==b){let M=m*S+p*y+g*b+_*T;M<0&&(S=-S,y=-y,b=-b,T=-T,M=-M);let x=1-h;if(M<.9995){const O=Math.acos(M),N=Math.sin(O);x=Math.sin(x*O)/N,h=Math.sin(h*O)/N,m=m*x+S*h,p=p*x+y*h,g=g*x+b*h,_=_*x+T*h}else{m=m*x+S*h,p=p*x+y*h,g=g*x+b*h,_=_*x+T*h;const O=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=O,p*=O,g*=O,_*=O}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[d],S=c[d+1],y=c[d+2],b=c[d+3];return t[i]=h*b+g*_+m*y-p*S,t[i+1]=m*b+g*S+p*_-h*y,t[i+2]=p*b+g*y+h*S-m*_,t[i+3]=g*b-h*_-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),_=h(c/2),S=m(s/2),y=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=S*g*_+p*y*b,this._y=p*y*_-S*g*b,this._z=p*g*b+S*y*_,this._w=p*g*_-S*y*b;break;case"YXZ":this._x=S*g*_+p*y*b,this._y=p*y*_-S*g*b,this._z=p*g*b-S*y*_,this._w=p*g*_+S*y*b;break;case"ZXY":this._x=S*g*_-p*y*b,this._y=p*y*_+S*g*b,this._z=p*g*b+S*y*_,this._w=p*g*_-S*y*b;break;case"ZYX":this._x=S*g*_-p*y*b,this._y=p*y*_+S*g*b,this._z=p*g*b-S*y*_,this._w=p*g*_+S*y*b;break;case"YZX":this._x=S*g*_+p*y*b,this._y=p*y*_+S*g*b,this._z=p*g*b-S*y*_,this._w=p*g*_-S*y*b;break;case"XZY":this._x=S*g*_-p*y*b,this._y=p*y*_-S*g*b,this._z=p*g*b+S*y*_,this._w=p*g*_+S*y*b;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=s+h+_;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-s*p,this._z=c*g+d*p+s*m-l*h,this._w=d*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Kx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Kx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),g=2*(h*i-c*l),_=2*(c*s-d*i);return this.x=i+m*p+d*_-h*g,this.y=s+m*g+h*p-c*_,this.z=l+m*_+c*g-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return vd.copy(this).projectOnVector(t),this.sub(vd)}reflect(t){return this.sub(vd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vd=new J,Kx=new il;class _e{constructor(t,i,s,l,c,d,h,m,p){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],g=s[4],_=s[7],S=s[2],y=s[5],b=s[8],T=l[0],M=l[3],x=l[6],O=l[1],N=l[4],P=l[7],F=l[2],D=l[5],I=l[8];return c[0]=d*T+h*O+m*F,c[3]=d*M+h*N+m*D,c[6]=d*x+h*P+m*I,c[1]=p*T+g*O+_*F,c[4]=p*M+g*N+_*D,c[7]=p*x+g*P+_*I,c[2]=S*T+y*O+b*F,c[5]=S*M+y*N+b*D,c[8]=S*x+y*P+b*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*d*g-i*h*p-s*c*g+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*d-h*p,S=h*m-g*c,y=p*c-d*m,b=i*_+s*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(h*s-l*d)*T,t[3]=S*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=y*T,t[7]=(s*m-p*i)*T,t[8]=(d*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Sd.makeScale(t,i)),this}rotate(t){return this.premultiply(Sd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Sd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sd=new _e,Qx=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jx=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yy(){const o={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ye&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ye&&(l.r=Lr(l.r),l.g=Lr(l.g),l.b=Lr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return el("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return el("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ir]:{primaries:t,whitePoint:s,transfer:Yc,toXYZ:Qx,fromXYZ:Jx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:s,transfer:Ye,toXYZ:Qx,fromXYZ:Jx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),o}const Ie=Yy();function Sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Lr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let mr;class jy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{mr===void 0&&(mr=Zc("canvas")),mr.width=t.width,mr.height=t.height;const l=mr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=mr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Sa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sa(i[s]/255)*255):i[s]=Sa(i[s]);return{data:i,width:t.width,height:t.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zy=0;class Kh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=va(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(yd(l[d].image)):c.push(yd(l[d]))}else c=yd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function yd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?jy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}let Ky=0;const Md=new J;class zn extends Hr{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=xa,l=xa,c=Si,d=Us,h=Ui,m=Hi,p=zn.DEFAULT_ANISOTROPY,g=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=va(),this.name="",this.source=new Kh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){fe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oh:t.x=t.x-Math.floor(t.x);break;case xa:t.x=t.x<0?0:1;break;case lh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oh:t.y=t.y-Math.floor(t.y);break;case xa:t.y=t.y<0?0:1;break;case lh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Yg;zn.DEFAULT_ANISOTROPY=1;class je{constructor(t=0,i=0,s=0,l=1){je.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],S=m[1],y=m[5],b=m[9],T=m[2],M=m[6],x=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+T)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,P=(y+1)/2,F=(x+1)/2,D=(g+S)/4,I=(_+T)/4,j=(b+M)/4;return N>P&&N>F?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=D/s,c=I/s):P>F?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=D/l,c=j/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=I/c,l=j/c),this.set(s,l,c,i),this}let O=Math.sqrt((M-b)*(M-b)+(_-T)*(_-T)+(S-g)*(S-g));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(_-T)/O,this.z=(S-g)/O,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qy extends Hr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new je(0,0,t,i),this.scissorTest=!1,this.viewport=new je(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new zn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Si,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Kh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends Qy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class a_ extends zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=li,this.minFilter=li,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jy extends zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=li,this.minFilter=li,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class al{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ai):Ai.fromBufferAttribute(c,d),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gc.copy(s.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),_c.subVectors(this.max,Io),xr.subVectors(t.a,Io),gr.subVectors(t.b,Io),_r.subVectors(t.c,Io),Ya.subVectors(gr,xr),ja.subVectors(_r,gr),Ms.subVectors(xr,_r);let i=[0,-Ya.z,Ya.y,0,-ja.z,ja.y,0,-Ms.z,Ms.y,Ya.z,0,-Ya.x,ja.z,0,-ja.x,Ms.z,0,-Ms.x,-Ya.y,Ya.x,0,-ja.y,ja.x,0,-Ms.y,Ms.x,0];return!bd(i,xr,gr,_r,_c)||(i=[1,0,0,0,1,0,0,0,1],!bd(i,xr,gr,_r,_c))?!1:(vc.crossVectors(Ya,ja),i=[vc.x,vc.y,vc.z],bd(i,xr,gr,_r,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(la),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const la=[new J,new J,new J,new J,new J,new J,new J,new J],Ai=new J,gc=new al,xr=new J,gr=new J,_r=new J,Ya=new J,ja=new J,Ms=new J,Io=new J,_c=new J,vc=new J,bs=new J;function bd(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){bs.fromArray(o,c);const h=l.x*Math.abs(bs.x)+l.y*Math.abs(bs.y)+l.z*Math.abs(bs.z),m=t.dot(bs),p=i.dot(bs),g=s.dot(bs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const $y=new al,Bo=new J,Ed=new J;class nu{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):$y.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ed.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(Ed)),this.expandByPoint(Bo.copy(t.center).sub(Ed))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ca=new J,Td=new J,Sc=new J,Za=new J,Ad=new J,yc=new J,Rd=new J;class s_{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Td.copy(t).add(i).multiplyScalar(.5),Sc.copy(i).sub(t).normalize(),Za.copy(this.origin).sub(Td);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Sc),h=Za.dot(this.direction),m=-Za.dot(Sc),p=Za.lengthSq(),g=Math.abs(1-d*d);let _,S,y,b;if(g>0)if(_=d*m-h,S=d*h-m,b=c*g,_>=0)if(S>=-b)if(S<=b){const T=1/g;_*=T,S*=T,y=_*(_+d*S+2*h)+S*(d*_+S+2*m)+p}else S=c,_=Math.max(0,-(d*S+h)),y=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(d*S+h)),y=-_*_+S*(S+2*m)+p;else S<=-b?(_=Math.max(0,-(-d*c+h)),S=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+S*(S+2*m)+p):S<=b?(_=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(_=Math.max(0,-(d*c+h)),S=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+S*(S+2*m)+p);else S=d>0?-c:c,_=Math.max(0,-(d*S+h)),y=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Td).addScaledVector(Sc,S),y}intersectSphere(t,i){ca.subVectors(t.center,this.origin);const s=ca.dot(this.direction),l=ca.dot(ca)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,d=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,d=(t.min.y-S.y)*g),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),_>=0?(h=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(h=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ca)!==null}intersectTriangle(t,i,s,l,c){Ad.subVectors(i,t),yc.subVectors(s,t),Rd.crossVectors(Ad,yc);let d=this.direction.dot(Rd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Za.subVectors(this.origin,t);const m=h*this.direction.dot(yc.crossVectors(Za,yc));if(m<0)return null;const p=h*this.direction.dot(Ad.cross(Za));if(p<0||m+p>d)return null;const g=-h*Za.dot(Rd);return g<0?null:this.at(g/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,i,s,l,c,d,h,m,p,g,_,S,y,b,T,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,g,_,S,y,b,T,M)}set(t,i,s,l,c,d,h,m,p,g,_,S,y,b,T,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=S,x[3]=y,x[7]=b,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/vr.setFromMatrixColumn(t,0).length(),c=1/vr.setFromMatrixColumn(t,1).length(),d=1/vr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=d*g,y=d*_,b=h*g,T=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+b*p,i[5]=S-T*p,i[9]=-h*m,i[2]=T-S*p,i[6]=b+y*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*g,y=m*_,b=p*g,T=p*_;i[0]=S+T*h,i[4]=b*h-y,i[8]=d*p,i[1]=d*_,i[5]=d*g,i[9]=-h,i[2]=y*h-b,i[6]=T+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*g,y=m*_,b=p*g,T=p*_;i[0]=S-T*h,i[4]=-d*_,i[8]=b+y*h,i[1]=y+b*h,i[5]=d*g,i[9]=T-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*g,y=d*_,b=h*g,T=h*_;i[0]=m*g,i[4]=b*p-y,i[8]=S*p+T,i[1]=m*_,i[5]=T*p+S,i[9]=y*p-b,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,y=d*p,b=h*m,T=h*p;i[0]=m*g,i[4]=T-S*_,i[8]=b*_+y,i[1]=_,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*_+b,i[10]=S-T*_}else if(t.order==="XZY"){const S=d*m,y=d*p,b=h*m,T=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+T,i[5]=d*g,i[9]=y*_-b,i[2]=b*_-y,i[6]=h*g,i[10]=T*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tM,t,eM)}lookAt(t,i,s){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Ka.crossVectors(s,ai),Ka.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Ka.crossVectors(s,ai)),Ka.normalize(),Mc.crossVectors(ai,Ka),l[0]=Ka.x,l[4]=Mc.x,l[8]=ai.x,l[1]=Ka.y,l[5]=Mc.y,l[9]=ai.y,l[2]=Ka.z,l[6]=Mc.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],g=s[1],_=s[5],S=s[9],y=s[13],b=s[2],T=s[6],M=s[10],x=s[14],O=s[3],N=s[7],P=s[11],F=s[15],D=l[0],I=l[4],j=l[8],w=l[12],C=l[1],G=l[5],Q=l[9],lt=l[13],pt=l[2],ht=l[6],B=l[10],W=l[14],k=l[3],ut=l[7],ft=l[11],L=l[15];return c[0]=d*D+h*C+m*pt+p*k,c[4]=d*I+h*G+m*ht+p*ut,c[8]=d*j+h*Q+m*B+p*ft,c[12]=d*w+h*lt+m*W+p*L,c[1]=g*D+_*C+S*pt+y*k,c[5]=g*I+_*G+S*ht+y*ut,c[9]=g*j+_*Q+S*B+y*ft,c[13]=g*w+_*lt+S*W+y*L,c[2]=b*D+T*C+M*pt+x*k,c[6]=b*I+T*G+M*ht+x*ut,c[10]=b*j+T*Q+M*B+x*ft,c[14]=b*w+T*lt+M*W+x*L,c[3]=O*D+N*C+P*pt+F*k,c[7]=O*I+N*G+P*ht+F*ut,c[11]=O*j+N*Q+P*B+F*ft,c[15]=O*w+N*lt+P*W+F*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],S=t[10],y=t[14],b=t[3],T=t[7],M=t[11],x=t[15];return b*(+c*m*_-l*p*_-c*h*S+s*p*S+l*h*y-s*m*y)+T*(+i*m*y-i*p*S+c*d*S-l*d*y+l*p*g-c*m*g)+M*(+i*p*_-i*h*y-c*d*_+s*d*y+c*h*g-s*p*g)+x*(-l*h*g-i*m*_+i*h*S+l*d*_-s*d*S+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],S=t[10],y=t[11],b=t[12],T=t[13],M=t[14],x=t[15],O=_*M*p-T*S*p+T*m*y-h*M*y-_*m*x+h*S*x,N=b*S*p-g*M*p-b*m*y+d*M*y+g*m*x-d*S*x,P=g*T*p-b*_*p+b*h*y-d*T*y-g*h*x+d*_*x,F=b*_*m-g*T*m-b*h*S+d*T*S+g*h*M-d*_*M,D=i*O+s*N+l*P+c*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return t[0]=O*I,t[1]=(T*S*c-_*M*c-T*l*y+s*M*y+_*l*x-s*S*x)*I,t[2]=(h*M*c-T*m*c+T*l*p-s*M*p-h*l*x+s*m*x)*I,t[3]=(_*m*c-h*S*c-_*l*p+s*S*p+h*l*y-s*m*y)*I,t[4]=N*I,t[5]=(g*M*c-b*S*c+b*l*y-i*M*y-g*l*x+i*S*x)*I,t[6]=(b*m*c-d*M*c-b*l*p+i*M*p+d*l*x-i*m*x)*I,t[7]=(d*S*c-g*m*c+g*l*p-i*S*p-d*l*y+i*m*y)*I,t[8]=P*I,t[9]=(b*_*c-g*T*c-b*s*y+i*T*y+g*s*x-i*_*x)*I,t[10]=(d*T*c-b*h*c+b*s*p-i*T*p-d*s*x+i*h*x)*I,t[11]=(g*h*c-d*_*c-g*s*p+i*_*p+d*s*y-i*h*y)*I,t[12]=F*I,t[13]=(g*T*l-b*_*l+b*s*S-i*T*S-g*s*M+i*_*M)*I,t[14]=(b*h*l-d*T*l-b*s*m+i*T*m+d*s*M-i*h*M)*I,t[15]=(d*_*l-g*h*l+g*s*m-i*_*m-d*s*S+i*h*S)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,g=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,_=h+h,S=c*p,y=c*g,b=c*_,T=d*g,M=d*_,x=h*_,O=m*p,N=m*g,P=m*_,F=s.x,D=s.y,I=s.z;return l[0]=(1-(T+x))*F,l[1]=(y+P)*F,l[2]=(b-N)*F,l[3]=0,l[4]=(y-P)*D,l[5]=(1-(S+x))*D,l[6]=(M+O)*D,l[7]=0,l[8]=(b+N)*I,l[9]=(M-O)*I,l[10]=(1-(S+T))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=vr.set(l[0],l[1],l[2]).length();const d=vr.set(l[4],l[5],l[6]).length(),h=vr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ri.copy(this);const p=1/c,g=1/d,_=1/h;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,i.setFromRotationMatrix(Ri),s.x=c,s.y=d,s.z=h,this}makePerspective(t,i,s,l,c,d,h=Fi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),S=(i+t)/(i-t),y=(s+l)/(s-l);let b,T;if(m)b=c/(d-c),T=d*c/(d-c);else if(h===Fi)b=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===jc)b=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=Fi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),S=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,T;if(m)b=1/(d-c),T=d/(d-c);else if(h===Fi)b=-2/(d-c),T=-(d+c)/(d-c);else if(h===jc)b=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const vr=new J,Ri=new en,tM=new J(0,0,0),eM=new J(1,1,1),Ka=new J,Mc=new J,ai=new J,$x=new en,tg=new il;class Gi{constructor(t=0,i=0,s=0,l=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return $x.makeRotationFromQuaternion(t),this.setFromRotationMatrix($x,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return tg.setFromEuler(this),this.setFromQuaternion(tg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class r_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nM=0;const eg=new J,Sr=new il,ua=new en,bc=new J,Fo=new J,iM=new J,aM=new il,ng=new J(1,0,0),ig=new J(0,1,0),ag=new J(0,0,1),sg={type:"added"},sM={type:"removed"},yr={type:"childadded",child:null},Cd={type:"childremoved",child:null};class In extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const t=new J,i=new Gi,s=new il,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new _e}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Sr.setFromAxisAngle(t,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(t,i){return Sr.setFromAxisAngle(t,i),this.quaternion.premultiply(Sr),this}rotateX(t){return this.rotateOnAxis(ng,t)}rotateY(t){return this.rotateOnAxis(ig,t)}rotateZ(t){return this.rotateOnAxis(ag,t)}translateOnAxis(t,i){return eg.copy(t).applyQuaternion(this.quaternion),this.position.add(eg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ng,t)}translateY(t){return this.translateOnAxis(ig,t)}translateZ(t){return this.translateOnAxis(ag,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?bc.copy(t):bc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Fo,bc,this.up):ua.lookAt(bc,Fo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),Sr.setFromRotationMatrix(ua),this.quaternion.premultiply(Sr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(on("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sg),yr.child=t,this.dispatchEvent(yr),yr.child=null):on("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(sM),Cd.child=t,this.dispatchEvent(Cd),Cd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sg),yr.child=t,this.dispatchEvent(yr),yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,iM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,aM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),g=d(t.images),_=d(t.shapes),S=d(t.skeletons),y=d(t.animations),b=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}In.DEFAULT_UP=new J(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new J,fa=new J,wd=new J,da=new J,Mr=new J,br=new J,rg=new J,Dd=new J,Ud=new J,Nd=new J,Ld=new je,Od=new je,Pd=new je;class vi{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ci.subVectors(t,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ci.subVectors(l,i),fa.subVectors(s,i),wd.subVectors(t,i);const d=Ci.dot(Ci),h=Ci.dot(fa),m=Ci.dot(wd),p=fa.dot(fa),g=fa.dot(wd),_=d*p-h*h;if(_===0)return c.set(0,0,0),null;const S=1/_,y=(p*m-h*g)*S,b=(d*g-h*m)*S;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(d,da.y),m.addScaledVector(h,da.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return Ld.setScalar(0),Od.setScalar(0),Pd.setScalar(0),Ld.fromBufferAttribute(t,i),Od.fromBufferAttribute(t,s),Pd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Ld,c.x),d.addScaledVector(Od,c.y),d.addScaledVector(Pd,c.z),d}static isFrontFacing(t,i,s,l){return Ci.subVectors(s,i),fa.subVectors(t,i),Ci.cross(fa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ci.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;Mr.subVectors(l,s),br.subVectors(c,s),Dd.subVectors(t,s);const m=Mr.dot(Dd),p=br.dot(Dd);if(m<=0&&p<=0)return i.copy(s);Ud.subVectors(t,l);const g=Mr.dot(Ud),_=br.dot(Ud);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(s).addScaledVector(Mr,d);Nd.subVectors(t,c);const y=Mr.dot(Nd),b=br.dot(Nd);if(b>=0&&y<=b)return i.copy(c);const T=y*p-m*b;if(T<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(s).addScaledVector(br,h);const M=g*b-y*_;if(M<=0&&_-g>=0&&y-b>=0)return rg.subVectors(c,l),h=(_-g)/(_-g+(y-b)),i.copy(l).addScaledVector(rg,h);const x=1/(M+T+S);return d=T*x,h=S*x,i.copy(s).addScaledVector(Mr,d).addScaledVector(br,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function zd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class De{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ie.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ie.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ie.workingColorSpace){if(t=Zh(t,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=zd(d,c,t+1/3),this.g=zd(d,c,t),this.b=zd(d,c,t-1/3)}return Ie.colorSpaceToWorking(this,l),this}setStyle(t,i=_i){function s(c){c!==void 0&&parseFloat(c)<1&&fe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:fe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=_i){const s=o_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return Ie.workingToColorSpace(Pn.copy(this),t),Math.round(Se(Pn.r*255,0,255))*65536+Math.round(Se(Pn.g*255,0,255))*256+Math.round(Se(Pn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ie.workingColorSpace){Ie.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=g<=.5?_/(d+h):_/(2-d-h),d){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ie.workingColorSpace){return Ie.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=_i){Ie.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==_i?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Qa),this.setHSL(Qa.h+t,Qa.s+i,Qa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Qa),t.getHSL(Ec);const s=Zo(Qa.h,Ec.h,i),l=Zo(Qa.s,Ec.s,i),c=Zo(Qa.l,Ec.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new De;De.NAMES=o_;let rM=0;class Ps extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=va(),this.name="",this.type="Material",this.blending=Nr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Qd,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){fe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(s.blending=this.blending),this.side!==is&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Qd&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ko extends Ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mn=new J,Tc=new pe;let oM=0;class yi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Ih,this.updateRanges=[],this.gpuType=ga,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(t),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Di(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ve(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Di(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Di(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Di(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Di(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),s=Ve(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),s=Ve(s,this.array),l=Ve(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),s=Ve(s,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ih&&(t.usage=this.usage),t}}class l_ extends yi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class c_ extends yi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Un extends yi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let lM=0;const gi=new en,Id=new In,Er=new J,si=new al,Ho=new al,Tn=new J;class Gn extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(i_(t)?c_:l_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new _e().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,s){return gi.makeTranslation(t,i,s),this.applyMatrix4(gi),this}scale(t,i,s){return gi.makeScale(t,i,s),this.applyMatrix4(gi),this}lookAt(t){return Id.lookAt(t),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Un(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){on("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&on('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){on("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(si.min,Ho.min),si.expandByPoint(Tn),Tn.addVectors(si.max,Ho.max),si.expandByPoint(Tn)):(si.expandByPoint(Ho.min),si.expandByPoint(Ho.max))}si.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Tn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Tn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Tn.fromBufferAttribute(h,p),m&&(Er.fromBufferAttribute(t,p),Tn.add(Er)),l=Math.max(l,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&on('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){on("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let j=0;j<s.count;j++)h[j]=new J,m[j]=new J;const p=new J,g=new J,_=new J,S=new pe,y=new pe,b=new pe,T=new J,M=new J;function x(j,w,C){p.fromBufferAttribute(s,j),g.fromBufferAttribute(s,w),_.fromBufferAttribute(s,C),S.fromBufferAttribute(c,j),y.fromBufferAttribute(c,w),b.fromBufferAttribute(c,C),g.sub(p),_.sub(p),y.sub(S),b.sub(S);const G=1/(y.x*b.y-b.x*y.y);isFinite(G)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(_,-y.y).multiplyScalar(G),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(G),h[j].add(T),h[w].add(T),h[C].add(T),m[j].add(M),m[w].add(M),m[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let j=0,w=O.length;j<w;++j){const C=O[j],G=C.start,Q=C.count;for(let lt=G,pt=G+Q;lt<pt;lt+=3)x(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const N=new J,P=new J,F=new J,D=new J;function I(j){F.fromBufferAttribute(l,j),D.copy(F);const w=h[j];N.copy(w),N.sub(F.multiplyScalar(F.dot(w))).normalize(),P.crossVectors(D,w);const G=P.dot(m[j])<0?-1:1;d.setXYZW(j,N.x,N.y,N.z,G)}for(let j=0,w=O.length;j<w;++j){const C=O[j],G=C.start,Q=C.count;for(let lt=G,pt=G+Q;lt<pt;lt+=3)I(t.getX(lt+0)),I(t.getX(lt+1)),I(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new J,c=new J,d=new J,h=new J,m=new J,p=new J,g=new J,_=new J;if(t)for(let S=0,y=t.count;S<y;S+=3){const b=t.getX(S+0),T=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),h.add(g),m.add(g),p.add(g),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,S=new p.constructor(m.length*g);let y=0,b=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*g;for(let x=0;x<g;x++)S[b++]=p[y++]}return new yi(S,g,_)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Gn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const S=p[g],y=t(S,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let S=0,y=_.length;S<y;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,g=d.length;p<g;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const og=new en,Es=new s_,Ac=new nu,lg=new J,Rc=new J,Cc=new J,wc=new J,Bd=new J,Dc=new J,cg=new J,Uc=new J;class an extends In{constructor(t=new Gn,i=new Ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Dc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Bd.fromBufferAttribute(_,t),d?Dc.addScaledVector(Bd,g):Dc.addScaledVector(Bd.sub(i),g))}i.add(Dc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(c),Es.copy(t.ray).recast(t.near),!(Ac.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Ac,lg)===null||Es.origin.distanceToSquared(lg)>(t.far-t.near)**2))&&(og.copy(c).invert(),Es.copy(t.ray).applyMatrix4(og),!(s.boundingBox!==null&&Es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Es)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,S=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,T=S.length;b<T;b++){const M=S[b],x=d[M.materialIndex],O=Math.max(M.start,y.start),N=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let P=O,F=N;P<F;P+=3){const D=h.getX(P),I=h.getX(P+1),j=h.getX(P+2);l=Nc(this,x,t,s,p,g,_,D,I,j),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const O=h.getX(M),N=h.getX(M+1),P=h.getX(M+2);l=Nc(this,d,t,s,p,g,_,O,N,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,T=S.length;b<T;b++){const M=S[b],x=d[M.materialIndex],O=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let P=O,F=N;P<F;P+=3){const D=P,I=P+1,j=P+2;l=Nc(this,x,t,s,p,g,_,D,I,j),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const O=M,N=M+1,P=M+2;l=Nc(this,d,t,s,p,g,_,O,N,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function cM(o,t,i,s,l,c,d,h){let m;if(t.side===jn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===is,h),m===null)return null;Uc.copy(h),Uc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Uc);return p<i.near||p>i.far?null:{distance:p,point:Uc.clone(),object:o}}function Nc(o,t,i,s,l,c,d,h,m,p){o.getVertexPosition(h,Rc),o.getVertexPosition(m,Cc),o.getVertexPosition(p,wc);const g=cM(o,t,i,s,Rc,Cc,wc,cg);if(g){const _=new J;vi.getBarycoord(cg,Rc,Cc,wc,_),l&&(g.uv=vi.getInterpolatedAttribute(l,h,m,p,_,new pe)),c&&(g.uv1=vi.getInterpolatedAttribute(c,h,m,p,_,new pe)),d&&(g.normal=vi.getInterpolatedAttribute(d,h,m,p,_,new J),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new J,materialIndex:0};vi.getNormal(Rc,Cc,wc,S.normal),g.face=S,g.barycoord=_}return g}class ns extends Gn{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],_=[];let S=0,y=0;b("z","y","x",-1,-1,s,i,t,d,c,0),b("z","y","x",1,-1,s,i,-t,d,c,1),b("x","z","y",1,1,t,s,i,l,d,2),b("x","z","y",1,-1,t,s,-i,l,d,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Un(p,3)),this.setAttribute("normal",new Un(g,3)),this.setAttribute("uv",new Un(_,2));function b(T,M,x,O,N,P,F,D,I,j,w){const C=P/I,G=F/j,Q=P/2,lt=F/2,pt=D/2,ht=I+1,B=j+1;let W=0,k=0;const ut=new J;for(let ft=0;ft<B;ft++){const L=ft*G-lt;for(let tt=0;tt<ht;tt++){const yt=tt*C-Q;ut[T]=yt*O,ut[M]=L*N,ut[x]=pt,p.push(ut.x,ut.y,ut.z),ut[T]=0,ut[M]=0,ut[x]=D>0?1:-1,g.push(ut.x,ut.y,ut.z),_.push(tt/I),_.push(1-ft/j),W+=1}}for(let ft=0;ft<j;ft++)for(let L=0;L<I;L++){const tt=S+L+ht*ft,yt=S+L+ht*(ft+1),bt=S+(L+1)+ht*(ft+1),zt=S+(L+1)+ht*ft;m.push(tt,yt,zt),m.push(yt,bt,zt),k+=6}h.addGroup(y,k,w),y+=k,S+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Br(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(o){const t={};for(let i=0;i<o.length;i++){const s=Br(o[i]);for(const l in s)t[l]=s[l]}return t}function uM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function u_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const fM={clone:Br,merge:Hn};var dM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ya extends Ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dM,this.fragmentShader=hM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=uM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class f_ extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new J,ug=new pe,fg=new pe;class ri extends f_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=nl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z)}getViewSize(t,i){return this.getViewBounds(t,ug,fg),i.subVectors(fg,ug)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(jo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Tr=-90,Ar=1;class pM extends In{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(Tr,Ar,t,i);l.layers=this.layers,this.add(l);const c=new ri(Tr,Ar,t,i);c.layers=this.layers,this.add(c);const d=new ri(Tr,Ar,t,i);d.layers=this.layers,this.add(d);const h=new ri(Tr,Ar,t,i);h.layers=this.layers,this.add(h);const m=new ri(Tr,Ar,t,i);m.layers=this.layers,this.add(m);const p=new ri(Tr,Ar,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Fi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,S,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class d_ extends zn{constructor(t=[],i=Pr,s,l,c,d,h,m,p,g){super(t,i,s,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mM extends Os{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new d_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ns(5,5,5),c=new ya({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:_a});c.uniforms.tEquirect.value=i;const d=new an(l,c),h=i.minFilter;return i.minFilter===Us&&(i.minFilter=Si),new pM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}class Ii extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xM={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),x=this._getHandJoint(p,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),y=.02,b=.005;p.inputState.pinching&&S>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(xM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ii;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class gM extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class _M{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Ih,this.updateRanges=[],this.version=0,this.uuid=va()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=va()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=va()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new J;class Qc{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix4(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.applyNormalMatrix(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.transformDirection(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Di(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ve(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Di(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Di(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Di(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Di(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),s=Ve(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),s=Ve(s,this.array),l=Ve(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),s=Ve(s,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Kc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new yi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Kc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class h_ extends Ps{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Rr;const Go=new J,Cr=new J,wr=new J,Dr=new pe,Vo=new pe,p_=new en,Lc=new J,Xo=new J,Oc=new J,dg=new pe,Hd=new pe,hg=new pe;class vM extends In{constructor(t=new h_){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new Gn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new _M(i,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new Qc(s,3,0,!1)),Rr.setAttribute("uv",new Qc(s,2,3,!1))}this.geometry=Rr,this.material=t,this.center=new pe(.5,.5),this.count=1}raycast(t,i){t.camera===null&&on('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),p_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-wr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const d=this.center;Pc(Lc.set(-.5,-.5,0),wr,d,Cr,l,c),Pc(Xo.set(.5,-.5,0),wr,d,Cr,l,c),Pc(Oc.set(.5,.5,0),wr,d,Cr,l,c),dg.set(0,0),Hd.set(1,0),hg.set(1,1);let h=t.ray.intersectTriangle(Lc,Xo,Oc,!1,Go);if(h===null&&(Pc(Xo.set(-.5,.5,0),wr,d,Cr,l,c),Hd.set(0,1),h=t.ray.intersectTriangle(Lc,Oc,Xo,!1,Go),h===null))return;const m=t.ray.origin.distanceTo(Go);m<t.near||m>t.far||i.push({distance:m,point:Go.clone(),uv:vi.getInterpolation(Go,Lc,Xo,Oc,dg,Hd,hg,new pe),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Pc(o,t,i,s,l,c){Dr.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(Vo.x=c*Dr.x-l*Dr.y,Vo.y=l*Dr.x+c*Dr.y):Vo.copy(Dr),o.copy(t),o.x+=Vo.x,o.y+=Vo.y,o.applyMatrix4(p_)}class SM extends zn{constructor(t=null,i=1,s=1,l,c,d,h,m,p=li,g=li,_,S){super(null,d,h,m,p,g,l,c,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gd=new J,yM=new J,MM=new _e;class Cs{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Gd.subVectors(s,i).cross(yM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Gd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||MM.getNormalMatrix(t),l=this.coplanarPoint(Gd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new nu,bM=new pe(.5,.5),zc=new J;class Qh{constructor(t=new Cs,i=new Cs,s=new Cs,l=new Cs,c=new Cs,d=new Cs){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Fi,s=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],S=c[6],y=c[7],b=c[8],T=c[9],M=c[10],x=c[11],O=c[12],N=c[13],P=c[14],F=c[15];if(l[0].setComponents(p-d,y-g,x-b,F-O).normalize(),l[1].setComponents(p+d,y+g,x+b,F+O).normalize(),l[2].setComponents(p+h,y+_,x+T,F+N).normalize(),l[3].setComponents(p-h,y-_,x-T,F-N).normalize(),s)l[4].setComponents(m,S,M,P).normalize(),l[5].setComponents(p-m,y-S,x-M,F-P).normalize();else if(l[4].setComponents(p-m,y-S,x-M,F-P).normalize(),i===Fi)l[5].setComponents(p+m,y+S,x+M,F+P).normalize();else if(i===jc)l[5].setComponents(m,S,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){Ts.center.set(0,0,0);const i=bM.distanceTo(t.center);return Ts.radius=.7071067811865476+i,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(zc.x=l.normal.x>0?t.max.x:t.min.x,zc.y=l.normal.y>0?t.max.y:t.min.y,zc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bh extends Ps{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jc=new J,$c=new J,pg=new en,ko=new s_,Ic=new nu,Vd=new J,mg=new J;class xg extends In{constructor(t=new Gn,i=new Bh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Jc.fromBufferAttribute(i,l-1),$c.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Jc.distanceTo($c);t.setAttribute("lineDistance",new Un(s,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=c,t.ray.intersectsSphere(Ic)===!1)return;pg.copy(l).invert(),ko.copy(t.ray).applyMatrix4(pg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=s.index,S=s.attributes.position;if(g!==null){const y=Math.max(0,d.start),b=Math.min(g.count,d.start+d.count);for(let T=y,M=b-1;T<M;T+=p){const x=g.getX(T),O=g.getX(T+1),N=Bc(this,t,ko,m,x,O,T);N&&i.push(N)}if(this.isLineLoop){const T=g.getX(b-1),M=g.getX(y),x=Bc(this,t,ko,m,T,M,b-1);x&&i.push(x)}}else{const y=Math.max(0,d.start),b=Math.min(S.count,d.start+d.count);for(let T=y,M=b-1;T<M;T+=p){const x=Bc(this,t,ko,m,T,T+1,T);x&&i.push(x)}if(this.isLineLoop){const T=Bc(this,t,ko,m,b-1,y,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Bc(o,t,i,s,l,c,d){const h=o.geometry.attributes.position;if(Jc.fromBufferAttribute(h,l),$c.fromBufferAttribute(h,c),i.distanceSqToSegment(Jc,$c,Vd,mg)>s)return;Vd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Vd);if(!(p<t.near||p>t.far))return{distance:p,point:mg.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class m_ extends zn{constructor(t,i,s,l,c,d,h,m,p){super(t,i,s,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class x_ extends zn{constructor(t,i,s=Ls,l,c,d,h=li,m=li,p,g=$o,_=1){if(g!==$o&&g!==tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,c,d,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class g_ extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Jh extends Gn{constructor(t=1,i=1,s=1,l=32,c=1,d=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],S=[],y=[];let b=0;const T=[],M=s/2;let x=0;O(),d===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(g),this.setAttribute("position",new Un(_,3)),this.setAttribute("normal",new Un(S,3)),this.setAttribute("uv",new Un(y,2));function O(){const P=new J,F=new J;let D=0;const I=(i-t)/s;for(let j=0;j<=c;j++){const w=[],C=j/c,G=C*(i-t)+t;for(let Q=0;Q<=l;Q++){const lt=Q/l,pt=lt*m+h,ht=Math.sin(pt),B=Math.cos(pt);F.x=G*ht,F.y=-C*s+M,F.z=G*B,_.push(F.x,F.y,F.z),P.set(ht,I,B).normalize(),S.push(P.x,P.y,P.z),y.push(lt,1-C),w.push(b++)}T.push(w)}for(let j=0;j<l;j++)for(let w=0;w<c;w++){const C=T[w][j],G=T[w+1][j],Q=T[w+1][j+1],lt=T[w][j+1];(t>0||w!==0)&&(g.push(C,G,lt),D+=3),(i>0||w!==c-1)&&(g.push(G,Q,lt),D+=3)}p.addGroup(x,D,0),x+=D}function N(P){const F=b,D=new pe,I=new J;let j=0;const w=P===!0?t:i,C=P===!0?1:-1;for(let Q=1;Q<=l;Q++)_.push(0,M*C,0),S.push(0,C,0),y.push(.5,.5),b++;const G=b;for(let Q=0;Q<=l;Q++){const pt=Q/l*m+h,ht=Math.cos(pt),B=Math.sin(pt);I.x=w*B,I.y=M*C,I.z=w*ht,_.push(I.x,I.y,I.z),S.push(0,C,0),D.x=ht*.5+.5,D.y=B*.5*C+.5,y.push(D.x,D.y),b++}for(let Q=0;Q<l;Q++){const lt=F+Q,pt=G+Q;P===!0?g.push(pt,pt+1,lt):g.push(pt+1,pt,lt),j+=3}p.addGroup(x,j,P===!0?1:2),x+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class EM{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let d=1;d<=t;d++)s=this.getPoint(d/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let d;i?d=i:d=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-d,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===d)return l/(c-1);const g=s[l],S=s[l+1]-g,y=(d-g)/S;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const d=this.getPoint(l),h=this.getPoint(c),m=i||(d.isVector2?new pe:new J);return m.copy(h).sub(d).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new J,l=[],c=[],d=[],h=new J,m=new en;for(let y=0;y<=t;y++){const b=y/t;l[y]=this.getTangentAt(b,new J)}c[0]=new J,d[0]=new J;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),S=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),S<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),d[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),d[y]=d[y-1].clone(),h.crossVectors(l[y-1],l[y]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(Se(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(h,b))}d[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Se(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],y*b)),d[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:d}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class TM extends EM{constructor(t=0,i=0,s=1,l=1,c=0,d=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=d,this.aClockwise=h,this.aRotation=m}getPoint(t,i=new pe){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const d=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(d?c=0:c=l),this.aClockwise===!0&&!d&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),S=m-this.aX,y=p-this.aY;m=S*g-y*_+this.aX,p=S*_+y*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ns extends Gn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,_=t/h,S=i/m,y=[],b=[],T=[],M=[];for(let x=0;x<g;x++){const O=x*S-d;for(let N=0;N<p;N++){const P=N*_-c;b.push(P,-O,0),T.push(0,0,1),M.push(N/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<h;O++){const N=O+p*x,P=O+p*(x+1),F=O+1+p*(x+1),D=O+1+p*x;y.push(N,P,D),y.push(P,F,D)}this.setIndex(y),this.setAttribute("position",new Un(b,3)),this.setAttribute("normal",new Un(T,3)),this.setAttribute("uv",new Un(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.width,t.height,t.widthSegments,t.heightSegments)}}class tu extends Gn{constructor(t=.5,i=1,s=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:d},s=Math.max(3,s),l=Math.max(1,l);const h=[],m=[],p=[],g=[];let _=t;const S=(i-t)/l,y=new J,b=new pe;for(let T=0;T<=l;T++){for(let M=0;M<=s;M++){const x=c+M/s*d;y.x=_*Math.cos(x),y.y=_*Math.sin(x),m.push(y.x,y.y,y.z),p.push(0,0,1),b.x=(y.x/i+1)/2,b.y=(y.y/i+1)/2,g.push(b.x,b.y)}_+=S}for(let T=0;T<l;T++){const M=T*(s+1);for(let x=0;x<s;x++){const O=x+M,N=O,P=O+s+1,F=O+s+2,D=O+1;h.push(N,P,D),h.push(P,F,D)}}this.setIndex(h),this.setAttribute("position",new Un(m,3)),this.setAttribute("normal",new Un(p,3)),this.setAttribute("uv",new Un(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ma extends Gn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const g=[],_=new J,S=new J,y=[],b=[],T=[],M=[];for(let x=0;x<=s;x++){const O=[],N=x/s;let P=0;x===0&&d===0?P=.5/i:x===s&&m===Math.PI&&(P=-.5/i);for(let F=0;F<=i;F++){const D=F/i;_.x=-t*Math.cos(l+D*c)*Math.sin(d+N*h),_.y=t*Math.cos(d+N*h),_.z=t*Math.sin(l+D*c)*Math.sin(d+N*h),b.push(_.x,_.y,_.z),S.copy(_).normalize(),T.push(S.x,S.y,S.z),M.push(D+P,1-N),O.push(p++)}g.push(O)}for(let x=0;x<s;x++)for(let O=0;O<i;O++){const N=g[x][O+1],P=g[x][O],F=g[x+1][O],D=g[x+1][O+1];(x!==0||d>0)&&y.push(N,P,D),(x!==s-1||m<Math.PI)&&y.push(P,F,D)}this.setIndex(y),this.setAttribute("position",new Un(b,3)),this.setAttribute("normal",new Un(T,3)),this.setAttribute("uv",new Un(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wi extends Ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e_,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class AM extends Ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class RM extends Ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class __ extends In{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Xd=new en,gg=new J,_g=new J;class CM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Hi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;gg.setFromMatrixPosition(t.matrixWorld),i.position.copy(gg),_g.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(_g),i.updateMatrixWorld(),Xd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Xd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vg=new en,Wo=new J,kd=new J;class wM extends CM{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Wo.setFromMatrixPosition(t.matrixWorld),s.position.copy(Wo),kd.copy(s.position),kd.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(kd),s.updateMatrixWorld(),l.makeTranslation(-Wo.x,-Wo.y,-Wo.z),vg.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vg,s.coordinateSystem,s.reversedDepth)}}class DM extends __{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new wM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class UM extends f_{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class NM extends __{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class LM extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Sg(o,t,i,s){const l=OM(s);switch(i){case Jg:return o*t;case t_:return o*t/l.components*l.byteLength;case Wh:return o*t/l.components*l.byteLength;case qh:return o*t*2/l.components*l.byteLength;case Yh:return o*t*2/l.components*l.byteLength;case $g:return o*t*3/l.components*l.byteLength;case Ui:return o*t*4/l.components*l.byteLength;case jh:return o*t*4/l.components*l.byteLength;case Gc:case Vc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Xc:case kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case uh:case dh:return Math.max(o,16)*Math.max(t,8)/4;case ch:case fh:return Math.max(o,8)*Math.max(t,8)/2;case hh:case ph:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case mh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case xh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case gh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case _h:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case vh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case yh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case bh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Eh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Th:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Ah:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Rh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Ch:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case wh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Dh:case Uh:case Nh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Lh:case Oh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Ph:case zh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function OM(o){switch(o){case Hi:case jg:return{byteLength:1,components:1};case Qo:case Zg:case Fr:return{byteLength:2,components:1};case Xh:case kh:return{byteLength:2,components:4};case Ls:case Vh:case ga:return{byteLength:4,components:1};case Kg:case Qg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function v_(){let o=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function PM(o){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const g=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,g);else{_.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<_.length;y++){const b=_[S],T=_[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++S,_[S]=T)}_.length=S+1;for(let y=0,b=_.length;y<b;y++){const T=_[y];o.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,WM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ob=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ub=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,db="gl_FragColor = linearToOutputTexel( gl_FragColor );",hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Eb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Db=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ob=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ib=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,f1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,S1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,T1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,w1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,O1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,V1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,u3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,h3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:zM,alphahash_pars_fragment:IM,alphamap_fragment:BM,alphamap_pars_fragment:FM,alphatest_fragment:HM,alphatest_pars_fragment:GM,aomap_fragment:VM,aomap_pars_fragment:XM,batching_pars_vertex:kM,batching_vertex:WM,begin_vertex:qM,beginnormal_vertex:YM,bsdfs:jM,iridescence_fragment:ZM,bumpmap_pars_fragment:KM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:tb,color_fragment:eb,color_pars_fragment:nb,color_pars_vertex:ib,color_vertex:ab,common:sb,cube_uv_reflection_fragment:rb,defaultnormal_vertex:ob,displacementmap_pars_vertex:lb,displacementmap_vertex:cb,emissivemap_fragment:ub,emissivemap_pars_fragment:fb,colorspace_fragment:db,colorspace_pars_fragment:hb,envmap_fragment:pb,envmap_common_pars_fragment:mb,envmap_pars_fragment:xb,envmap_pars_vertex:gb,envmap_physical_pars_fragment:Cb,envmap_vertex:_b,fog_vertex:vb,fog_pars_vertex:Sb,fog_fragment:yb,fog_pars_fragment:Mb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:Eb,lights_lambert_fragment:Tb,lights_lambert_pars_fragment:Ab,lights_pars_begin:Rb,lights_toon_fragment:wb,lights_toon_pars_fragment:Db,lights_phong_fragment:Ub,lights_phong_pars_fragment:Nb,lights_physical_fragment:Lb,lights_physical_pars_fragment:Ob,lights_fragment_begin:Pb,lights_fragment_maps:zb,lights_fragment_end:Ib,logdepthbuf_fragment:Bb,logdepthbuf_pars_fragment:Fb,logdepthbuf_pars_vertex:Hb,logdepthbuf_vertex:Gb,map_fragment:Vb,map_pars_fragment:Xb,map_particle_fragment:kb,map_particle_pars_fragment:Wb,metalnessmap_fragment:qb,metalnessmap_pars_fragment:Yb,morphinstance_vertex:jb,morphcolor_vertex:Zb,morphnormal_vertex:Kb,morphtarget_pars_vertex:Qb,morphtarget_vertex:Jb,normal_fragment_begin:$b,normal_fragment_maps:t1,normal_pars_fragment:e1,normal_pars_vertex:n1,normal_vertex:i1,normalmap_pars_fragment:a1,clearcoat_normal_fragment_begin:s1,clearcoat_normal_fragment_maps:r1,clearcoat_pars_fragment:o1,iridescence_pars_fragment:l1,opaque_fragment:c1,packing:u1,premultiplied_alpha_fragment:f1,project_vertex:d1,dithering_fragment:h1,dithering_pars_fragment:p1,roughnessmap_fragment:m1,roughnessmap_pars_fragment:x1,shadowmap_pars_fragment:g1,shadowmap_pars_vertex:_1,shadowmap_vertex:v1,shadowmask_pars_fragment:S1,skinbase_vertex:y1,skinning_pars_vertex:M1,skinning_vertex:b1,skinnormal_vertex:E1,specularmap_fragment:T1,specularmap_pars_fragment:A1,tonemapping_fragment:R1,tonemapping_pars_fragment:C1,transmission_fragment:w1,transmission_pars_fragment:D1,uv_pars_fragment:U1,uv_pars_vertex:N1,uv_vertex:L1,worldpos_vertex:O1,background_vert:P1,background_frag:z1,backgroundCube_vert:I1,backgroundCube_frag:B1,cube_vert:F1,cube_frag:H1,depth_vert:G1,depth_frag:V1,distanceRGBA_vert:X1,distanceRGBA_frag:k1,equirect_vert:W1,equirect_frag:q1,linedashed_vert:Y1,linedashed_frag:j1,meshbasic_vert:Z1,meshbasic_frag:K1,meshlambert_vert:Q1,meshlambert_frag:J1,meshmatcap_vert:$1,meshmatcap_frag:t3,meshnormal_vert:e3,meshnormal_frag:n3,meshphong_vert:i3,meshphong_frag:a3,meshphysical_vert:s3,meshphysical_frag:r3,meshtoon_vert:o3,meshtoon_frag:l3,points_vert:c3,points_frag:u3,shadow_vert:f3,shadow_frag:d3,sprite_vert:h3,sprite_frag:p3},It={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new De(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Hn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Hn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new De(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Hn([It.points,It.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Hn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Hn([It.common,It.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Hn([It.sprite,It.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Hn([It.common,It.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Hn([It.lights,It.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Fc={r:0,b:0,g:0},As=new Gi,m3=new en;function x3(o,t,i,s,l,c,d){const h=new De(0);let m=c===!0?0:1,p,g,_=null,S=0,y=null;function b(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?i:t).get(P)),P}function T(N){let P=!1;const F=b(N);F===null?x(h,m):F&&F.isColor&&(x(F,1),P=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?s.buffers.color.setClear(0,0,0,1,d):D==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,P){const F=b(P);F&&(F.isCubeTexture||F.mapping===eu)?(g===void 0&&(g=new an(new ns(1,1,1),new ya({name:"BackgroundCubeMaterial",uniforms:Br(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(D,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),As.copy(P.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(m3.makeRotationFromEuler(As)),g.material.toneMapped=Ie.getTransfer(F.colorSpace)!==Ye,(_!==F||S!==F.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,_=F,S=F.version,y=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new an(new Ns(2,2),new ya({name:"BackgroundMaterial",uniforms:Br(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Ie.getTransfer(F.colorSpace)!==Ye,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||S!==F.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,_=F,S=F.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,P){N.getRGB(Fc,u_(o)),s.buffers.color.setClear(Fc.r,Fc.g,Fc.b,P,d)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,P=1){h.set(N),m=P,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(h,m)},render:T,addToRenderList:M,dispose:O}}function g3(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,d=!1;function h(C,G,Q,lt,pt){let ht=!1;const B=_(lt,Q,G);c!==B&&(c=B,p(c.object)),ht=y(C,lt,Q,pt),ht&&b(C,lt,Q,pt),pt!==null&&t.update(pt,o.ELEMENT_ARRAY_BUFFER),(ht||d)&&(d=!1,P(C,G,Q,lt),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function _(C,G,Q){const lt=Q.wireframe===!0;let pt=s[C.id];pt===void 0&&(pt={},s[C.id]=pt);let ht=pt[G.id];ht===void 0&&(ht={},pt[G.id]=ht);let B=ht[lt];return B===void 0&&(B=S(m()),ht[lt]=B),B}function S(C){const G=[],Q=[],lt=[];for(let pt=0;pt<i;pt++)G[pt]=0,Q[pt]=0,lt[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:lt,object:C,attributes:{},index:null}}function y(C,G,Q,lt){const pt=c.attributes,ht=G.attributes;let B=0;const W=Q.getAttributes();for(const k in W)if(W[k].location>=0){const ft=pt[k];let L=ht[k];if(L===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),ft===void 0||ft.attribute!==L||L&&ft.data!==L.data)return!0;B++}return c.attributesNum!==B||c.index!==lt}function b(C,G,Q,lt){const pt={},ht=G.attributes;let B=0;const W=Q.getAttributes();for(const k in W)if(W[k].location>=0){let ft=ht[k];ft===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(ft=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(ft=C.instanceColor));const L={};L.attribute=ft,ft&&ft.data&&(L.data=ft.data),pt[k]=L,B++}c.attributes=pt,c.attributesNum=B,c.index=lt}function T(){const C=c.newAttributes;for(let G=0,Q=C.length;G<Q;G++)C[G]=0}function M(C){x(C,0)}function x(C,G){const Q=c.newAttributes,lt=c.enabledAttributes,pt=c.attributeDivisors;Q[C]=1,lt[C]===0&&(o.enableVertexAttribArray(C),lt[C]=1),pt[C]!==G&&(o.vertexAttribDivisor(C,G),pt[C]=G)}function O(){const C=c.newAttributes,G=c.enabledAttributes;for(let Q=0,lt=G.length;Q<lt;Q++)G[Q]!==C[Q]&&(o.disableVertexAttribArray(Q),G[Q]=0)}function N(C,G,Q,lt,pt,ht,B){B===!0?o.vertexAttribIPointer(C,G,Q,pt,ht):o.vertexAttribPointer(C,G,Q,lt,pt,ht)}function P(C,G,Q,lt){T();const pt=lt.attributes,ht=Q.getAttributes(),B=G.defaultAttributeValues;for(const W in ht){const k=ht[W];if(k.location>=0){let ut=pt[W];if(ut===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(ut=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(ut=C.instanceColor)),ut!==void 0){const ft=ut.normalized,L=ut.itemSize,tt=t.get(ut);if(tt===void 0)continue;const yt=tt.buffer,bt=tt.type,zt=tt.bytesPerElement,at=bt===o.INT||bt===o.UNSIGNED_INT||ut.gpuType===Vh;if(ut.isInterleavedBufferAttribute){const dt=ut.data,At=dt.stride,Ut=ut.offset;if(dt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<k.locationSize;Ht++)x(k.location+Ht,dt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ht=0;Ht<k.locationSize;Ht++)M(k.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Ht=0;Ht<k.locationSize;Ht++)N(k.location+Ht,L/k.locationSize,bt,ft,At*zt,(Ut+L/k.locationSize*Ht)*zt,at)}else{if(ut.isInstancedBufferAttribute){for(let dt=0;dt<k.locationSize;dt++)x(k.location+dt,ut.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let dt=0;dt<k.locationSize;dt++)M(k.location+dt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let dt=0;dt<k.locationSize;dt++)N(k.location+dt,L/k.locationSize,bt,ft,L*zt,L/k.locationSize*dt*zt,at)}}else if(B!==void 0){const ft=B[W];if(ft!==void 0)switch(ft.length){case 2:o.vertexAttrib2fv(k.location,ft);break;case 3:o.vertexAttrib3fv(k.location,ft);break;case 4:o.vertexAttrib4fv(k.location,ft);break;default:o.vertexAttrib1fv(k.location,ft)}}}}O()}function F(){j();for(const C in s){const G=s[C];for(const Q in G){const lt=G[Q];for(const pt in lt)g(lt[pt].object),delete lt[pt];delete G[Q]}delete s[C]}}function D(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const Q in G){const lt=G[Q];for(const pt in lt)g(lt[pt].object),delete lt[pt];delete G[Q]}delete s[C.id]}function I(C){for(const G in s){const Q=s[G];if(Q[C.id]===void 0)continue;const lt=Q[C.id];for(const pt in lt)g(lt[pt].object),delete lt[pt];delete Q[C.id]}}function j(){w(),d=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:M,disableUnusedAttributes:O}}function _3(o,t,i){let s;function l(p){s=p}function c(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function d(p,g,_){_!==0&&(o.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let b=0;b<_;b++)y+=g[b];i.update(y,s,1)}function m(p,g,_,S){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)d(p[b],g[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,S,0,_);let b=0;for(let T=0;T<_;T++)b+=g[T]*S[T];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function v3(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Ui&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const j=I===Fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Hi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ga&&!j)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(fe("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=b>0,D=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:N,maxFragmentUniforms:P,vertexTextures:F,maxSamples:D}}function S3(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Cs,h=new _e,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const y=_.length!==0||S||s!==0||l;return l=S,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,y){const b=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,x=o.get(_);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const O=c?0:s,N=O*4;let P=x.clippingState||null;m.value=P,P=g(b,S,N,y);for(let F=0;F!==N;++F)P[F]=i[F];x.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,S,y,b){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,b!==!0||M===null){const x=y+T*4,O=S.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let N=0,P=y;N!==T;++N,P+=4)d.copy(_[N]).applyMatrix4(O,h),d.normal.toArray(M,P),M[P+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function y3(o){let t=new WeakMap;function i(d,h){return h===sh?d.mapping=Pr:h===rh&&(d.mapping=zr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===sh||h===rh)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new mM(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const ts=4,yg=[.125,.215,.35,.446,.526,.582],Ds=20,M3=256,qo=new UM,Mg=new De;let Wd=null,qd=0,Yd=0,jd=!1;const b3=new J;class bg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=b3}=c;Wd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wd,qd,Yd),this._renderer.xr.enabled=jd,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Pr||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Fr,format:Ui,colorSpace:Ir,depthBuffer:!1},l=Eg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eg(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=E3(c)),this._blurMaterial=A3(c,t,i),this._ggxMaterial=T3(c,t,i)}return l}_compileMaterial(t){const i=new an(new Gn,t);this._renderer.compile(i,qo)}_sceneToCubeUV(t,i,s,l,c){const m=new ri(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,y=_.toneMapping;_.getClearColor(Mg),_.toneMapping=es,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new an(new ns,new Ko({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let x=!1;const O=t.background;O?O.isColor&&(M.color.copy(O),t.background=null,x=!0):(M.color.copy(Mg),x=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):P===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const F=this._cubeSize;Ur(l,P*F,N>2?F:0,F,F),_.setRenderTarget(l),x&&_.render(T,m),_.render(t,m)}_.toneMapping=y,_.autoClear=S,t.background=O}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Pr||t.mapping===zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tg());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Ur(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,qo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),S=.05+p*.95,y=_*S,{_lodMax:b}=this,T=this._sizeLods[s],M=3*T*(s>b-ts?s-b+ts:0),x=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,Ur(c,M,x,3*T,2*T),l.setRenderTarget(c),l.render(h,qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Ur(t,M,x,3*T,2*T),l.setRenderTarget(t),l.render(h,qo)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&on("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ds-1),T=c/b,M=isFinite(c)?1+Math.floor(g*T):Ds;M>Ds&&fe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ds}`);const x=[];let O=0;for(let I=0;I<Ds;++I){const j=I/T,w=Math.exp(-j*j/2);x.push(w),I===0?O+=w:I<M&&(O+=2*w)}for(let I=0;I<x.length;I++)x[I]=x[I]/O;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-s;const P=this._sizeLods[l],F=3*P*(l>N-ts?l-N+ts:0),D=4*(this._cubeSize-P);Ur(i,F,D,3*P,2*P),m.setRenderTarget(i),m.render(_,qo)}}function E3(o){const t=[],i=[],s=[];let l=o;const c=o-ts+1+yg.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-ts?m=yg[d-o+ts-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,b=6,T=3,M=2,x=1,O=new Float32Array(T*b*y),N=new Float32Array(M*b*y),P=new Float32Array(x*b*y);for(let D=0;D<y;D++){const I=D%3*2/3-1,j=D>2?0:-1,w=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];O.set(w,T*b*D),N.set(S,M*b*D);const C=[D,D,D,D,D,D];P.set(C,x*b*D)}const F=new Gn;F.setAttribute("position",new yi(O,T)),F.setAttribute("uv",new yi(N,M)),F.setAttribute("faceIndex",new yi(P,x)),s.push(new an(F,null)),l>ts&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Eg(o,t,i){const s=new Os(o,t,i);return s.texture.mapping=eu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ur(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function T3(o,t,i){return new ya({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function A3(o,t,i){const s=new Float32Array(Ds),l=new J(0,1,0);return new ya({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Tg(){return new ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Ag(){return new ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R3(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===sh||m===rh,g=m===Pr||m===zr;if(p||g){let _=t.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new bg(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new bg(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function C3(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&el("WebGLRenderer: "+s+" extension not supported."),l}}}function w3(o,t,i,s){const l={},c=new WeakMap;function d(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",d),delete l[S.id];const y=c.get(S);y&&(t.remove(y),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const y in S)t.update(S[y],o.ARRAY_BUFFER)}function p(_){const S=[],y=_.index,b=_.attributes.position;let T=0;if(y!==null){const O=y.array;T=y.version;for(let N=0,P=O.length;N<P;N+=3){const F=O[N+0],D=O[N+1],I=O[N+2];S.push(F,D,D,I,I,F)}}else if(b!==void 0){const O=b.array;T=b.version;for(let N=0,P=O.length/3-1;N<P;N+=3){const F=N+0,D=N+1,I=N+2;S.push(F,D,D,I,I,F)}}else return;const M=new(i_(S)?c_:l_)(S,1);M.version=T;const x=c.get(_);x&&t.remove(x),c.set(_,M)}function g(_){const S=c.get(_);if(S){const y=_.index;y!==null&&S.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function D3(o,t,i){let s;function l(S){s=S}let c,d;function h(S){c=S.type,d=S.bytesPerElement}function m(S,y){o.drawElements(s,y,c,S*d),i.update(y,s,1)}function p(S,y,b){b!==0&&(o.drawElementsInstanced(s,y,c,S*d,b),i.update(y,s,b))}function g(S,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,S,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];i.update(M,s,1)}function _(S,y,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<S.length;x++)p(S[x]/d,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,S,0,T,0,b);let x=0;for(let O=0;O<b;O++)x+=y[O]*T[O];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function U3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:on("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function N3(o,t,i){const s=new WeakMap,l=new je;function c(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let S=s.get(h);if(S===void 0||S.count!==_){let C=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var y=C;S!==void 0&&S.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let P=0;b===!0&&(P=1),T===!0&&(P=2),M===!0&&(P=3);let F=h.attributes.position.count*P,D=1;F>t.maxTextureSize&&(D=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const I=new Float32Array(F*D*4*_),j=new a_(I,F,D,_);j.type=ga,j.needsUpdate=!0;const w=P*4;for(let G=0;G<_;G++){const Q=x[G],lt=O[G],pt=N[G],ht=F*D*4*G;for(let B=0;B<Q.count;B++){const W=B*w;b===!0&&(l.fromBufferAttribute(Q,B),I[ht+W+0]=l.x,I[ht+W+1]=l.y,I[ht+W+2]=l.z,I[ht+W+3]=0),T===!0&&(l.fromBufferAttribute(lt,B),I[ht+W+4]=l.x,I[ht+W+5]=l.y,I[ht+W+6]=l.z,I[ht+W+7]=0),M===!0&&(l.fromBufferAttribute(pt,B),I[ht+W+8]=l.x,I[ht+W+9]=l.y,I[ht+W+10]=l.z,I[ht+W+11]=pt.itemSize===4?l.w:1)}}S={count:_,texture:j,size:new pe(F,D)},s.set(h,S),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const T=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function L3(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const S_=new zn,Rg=new x_(1,1),y_=new a_,M_=new Jy,b_=new d_,Cg=[],wg=[],Dg=new Float32Array(16),Ug=new Float32Array(9),Ng=new Float32Array(4);function Gr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=Cg[l];if(c===void 0&&(c=new Float32Array(l),Cg[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(c,h)}return c}function vn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Sn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function au(o,t){let i=wg[t];i===void 0&&(i=new Int32Array(t),wg[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function O3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function P3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2fv(this.addr,t),Sn(i,t)}}function z3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;o.uniform3fv(this.addr,t),Sn(i,t)}}function I3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4fv(this.addr,t),Sn(i,t)}}function B3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(vn(i,s))return;Ng.set(s),o.uniformMatrix2fv(this.addr,!1,Ng),Sn(i,s)}}function F3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(vn(i,s))return;Ug.set(s),o.uniformMatrix3fv(this.addr,!1,Ug),Sn(i,s)}}function H3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(vn(i,s))return;Dg.set(s),o.uniformMatrix4fv(this.addr,!1,Dg),Sn(i,s)}}function G3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function V3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2iv(this.addr,t),Sn(i,t)}}function X3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3iv(this.addr,t),Sn(i,t)}}function k3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4iv(this.addr,t),Sn(i,t)}}function W3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function q3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2uiv(this.addr,t),Sn(i,t)}}function Y3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3uiv(this.addr,t),Sn(i,t)}}function j3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4uiv(this.addr,t),Sn(i,t)}}function Z3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Rg.compareFunction=n_,c=Rg):c=S_,i.setTexture2D(t||c,l)}function K3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||M_,l)}function Q3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||b_,l)}function J3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||y_,l)}function $3(o){switch(o){case 5126:return O3;case 35664:return P3;case 35665:return z3;case 35666:return I3;case 35674:return B3;case 35675:return F3;case 35676:return H3;case 5124:case 35670:return G3;case 35667:case 35671:return V3;case 35668:case 35672:return X3;case 35669:case 35673:return k3;case 5125:return W3;case 36294:return q3;case 36295:return Y3;case 36296:return j3;case 35678:case 36198:case 36298:case 36306:case 35682:return Z3;case 35679:case 36299:case 36307:return K3;case 35680:case 36300:case 36308:case 36293:return Q3;case 36289:case 36303:case 36311:case 36292:return J3}}function tE(o,t){o.uniform1fv(this.addr,t)}function eE(o,t){const i=Gr(t,this.size,2);o.uniform2fv(this.addr,i)}function nE(o,t){const i=Gr(t,this.size,3);o.uniform3fv(this.addr,i)}function iE(o,t){const i=Gr(t,this.size,4);o.uniform4fv(this.addr,i)}function aE(o,t){const i=Gr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function sE(o,t){const i=Gr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function rE(o,t){const i=Gr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function oE(o,t){o.uniform1iv(this.addr,t)}function lE(o,t){o.uniform2iv(this.addr,t)}function cE(o,t){o.uniform3iv(this.addr,t)}function uE(o,t){o.uniform4iv(this.addr,t)}function fE(o,t){o.uniform1uiv(this.addr,t)}function dE(o,t){o.uniform2uiv(this.addr,t)}function hE(o,t){o.uniform3uiv(this.addr,t)}function pE(o,t){o.uniform4uiv(this.addr,t)}function mE(o,t,i){const s=this.cache,l=t.length,c=au(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||S_,c[d])}function xE(o,t,i){const s=this.cache,l=t.length,c=au(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||M_,c[d])}function gE(o,t,i){const s=this.cache,l=t.length,c=au(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||b_,c[d])}function _E(o,t,i){const s=this.cache,l=t.length,c=au(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||y_,c[d])}function vE(o){switch(o){case 5126:return tE;case 35664:return eE;case 35665:return nE;case 35666:return iE;case 35674:return aE;case 35675:return sE;case 35676:return rE;case 5124:case 35670:return oE;case 35667:case 35671:return lE;case 35668:case 35672:return cE;case 35669:case 35673:return uE;case 5125:return fE;case 36294:return dE;case 36295:return hE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return xE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return _E}}class SE{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=$3(i.type)}}class yE{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=vE(i.type)}}class ME{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function Lg(o,t){o.seq.push(t),o.map[t.id]=t}function bE(o,t,i){const s=o.name,l=s.length;for(Zd.lastIndex=0;;){const c=Zd.exec(s),d=Zd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Lg(i,p===void 0?new SE(h,o,t):new yE(h,o,t));break}else{let _=i.map[h];_===void 0&&(_=new ME(h),Lg(i,_)),i=_}}}class Wc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);bE(c,d,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function Og(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const EE=37297;let TE=0;function AE(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Pg=new _e;function RE(o){Ie._getMatrix(Pg,Ie.workingColorSpace,o);const t=`mat3( ${Pg.elements.map(i=>i.toFixed(4))} )`;switch(Ie.getTransfer(o)){case Yc:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function zg(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+AE(o.getShaderSource(t),h)}else return c}function CE(o,t){const i=RE(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function wE(o,t){let i;switch(t){case uy:i="Linear";break;case fy:i="Reinhard";break;case dy:i="Cineon";break;case hy:i="ACESFilmic";break;case my:i="AgX";break;case xy:i="Neutral";break;case py:i="Custom";break;default:fe("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new J;function DE(){Ie.getLuminanceCoefficients(Hc);const o=Hc.x.toFixed(4),t=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function NE(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function LE(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Yo(o){return o!==""}function Ig(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const OE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(o){return o.replace(OE,zE)}const PE=new Map;function zE(o,t){let i=ve[t];if(i===void 0){const s=PE.get(t);if(s!==void 0)i=ve[s],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Fh(i)}const IE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(o){return o.replace(IE,BE)}function BE(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Hg(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function FE(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Wg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===XS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===pa&&(t="SHADOWMAP_TYPE_VSM"),t}function HE(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Pr:case zr:t="ENVMAP_TYPE_CUBE";break;case eu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function GE(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case zr:t="ENVMAP_MODE_REFRACTION";break}return t}function VE(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case qg:t="ENVMAP_BLENDING_MULTIPLY";break;case ly:t="ENVMAP_BLENDING_MIX";break;case cy:t="ENVMAP_BLENDING_ADD";break}return t}function XE(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function kE(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=FE(i),p=HE(i),g=GE(i),_=VE(i),S=XE(i),y=UE(i),b=NE(c),T=l.createProgram();let M,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Yo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Yo).join(`
`),x.length>0&&(x+=`
`)):(M=[Hg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),x=[Hg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==es?"#define TONE_MAPPING":"",i.toneMapping!==es?ve.tonemapping_pars_fragment:"",i.toneMapping!==es?wE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,CE("linearToOutputTexel",i.outputColorSpace),DE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),d=Fh(d),d=Ig(d,i),d=Bg(d,i),h=Fh(h),h=Ig(h,i),h=Bg(h,i),d=Fg(d),h=Fg(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Yx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Yx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=O+M+d,P=O+x+h,F=Og(l,l.VERTEX_SHADER,N),D=Og(l,l.FRAGMENT_SHADER,P);l.attachShader(T,F),l.attachShader(T,D),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function I(G){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(T)||"",lt=l.getShaderInfoLog(F)||"",pt=l.getShaderInfoLog(D)||"",ht=Q.trim(),B=lt.trim(),W=pt.trim();let k=!0,ut=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(k=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,F,D);else{const ft=zg(l,F,"vertex"),L=zg(l,D,"fragment");on("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ht+`
`+ft+`
`+L)}else ht!==""?fe("WebGLProgram: Program Info Log:",ht):(B===""||W==="")&&(ut=!1);ut&&(G.diagnostics={runnable:k,programLog:ht,vertexShader:{log:B,prefix:M},fragmentShader:{log:W,prefix:x}})}l.deleteShader(F),l.deleteShader(D),j=new Wc(l,T),w=LE(l,T)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,EE)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=TE++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=D,this}let WE=0;class qE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new YE(t),i.set(t,s)),s}}class YE{constructor(t){this.id=WE++,this.code=t,this.usedTimes=0}}function jE(o,t,i,s,l,c,d){const h=new r_,m=new qE,p=new Set,g=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,G,Q,lt){const pt=Q.fog,ht=lt.geometry,B=w.isMeshStandardMaterial?Q.environment:null,W=(w.isMeshStandardMaterial?i:t).get(w.envMap||B),k=W&&W.mapping===eu?W.image.height:null,ut=b[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&fe("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const ft=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,L=ft!==void 0?ft.length:0;let tt=0;ht.morphAttributes.position!==void 0&&(tt=1),ht.morphAttributes.normal!==void 0&&(tt=2),ht.morphAttributes.color!==void 0&&(tt=3);let yt,bt,zt,at;if(ut){const Le=Bi[ut];yt=Le.vertexShader,bt=Le.fragmentShader}else yt=w.vertexShader,bt=w.fragmentShader,m.update(w),zt=m.getVertexShaderID(w),at=m.getFragmentShaderID(w);const dt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Ut=lt.isInstancedMesh===!0,Ht=lt.isBatchedMesh===!0,oe=!!w.map,ie=!!w.matcap,Gt=!!W,Pt=!!w.aoMap,z=!!w.lightMap,Yt=!!w.bumpMap,$t=!!w.normalMap,ye=!!w.displacementMap,Lt=!!w.emissiveMap,Me=!!w.metalnessMap,kt=!!w.roughnessMap,ae=w.anisotropy>0,U=w.clearcoat>0,E=w.dispersion>0,$=w.iridescence>0,xt=w.sheen>0,gt=w.transmission>0,rt=ae&&!!w.anisotropyMap,Zt=U&&!!w.clearcoatMap,Ct=U&&!!w.clearcoatNormalMap,Kt=U&&!!w.clearcoatRoughnessMap,Wt=$&&!!w.iridescenceMap,Mt=$&&!!w.iridescenceThicknessMap,Tt=xt&&!!w.sheenColorMap,Jt=xt&&!!w.sheenRoughnessMap,jt=!!w.specularMap,Bt=!!w.specularColorMap,ce=!!w.specularIntensityMap,V=gt&&!!w.transmissionMap,Nt=gt&&!!w.thicknessMap,wt=!!w.gradientMap,Dt=!!w.alphaMap,Et=w.alphaTest>0,St=!!w.alphaHash,Vt=!!w.extensions;let ue=es;w.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Xe={shaderID:ut,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:bt,defines:w.defines,customVertexShaderID:zt,customFragmentShaderID:at,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Ht,batchingColor:Ht&&lt._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&lt.instanceColor!==null,instancingMorph:Ut&&lt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Ir,alphaToCoverage:!!w.alphaToCoverage,map:oe,matcap:ie,envMap:Gt,envMapMode:Gt&&W.mapping,envMapCubeUVHeight:k,aoMap:Pt,lightMap:z,bumpMap:Yt,normalMap:$t,displacementMap:S&&ye,emissiveMap:Lt,normalMapObjectSpace:$t&&w.normalMapType===Sy,normalMapTangentSpace:$t&&w.normalMapType===e_,metalnessMap:Me,roughnessMap:kt,anisotropy:ae,anisotropyMap:rt,clearcoat:U,clearcoatMap:Zt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Kt,dispersion:E,iridescence:$,iridescenceMap:Wt,iridescenceThicknessMap:Mt,sheen:xt,sheenColorMap:Tt,sheenRoughnessMap:Jt,specularMap:jt,specularColorMap:Bt,specularIntensityMap:ce,transmission:gt,transmissionMap:V,thicknessMap:Nt,gradientMap:wt,opaque:w.transparent===!1&&w.blending===Nr&&w.alphaToCoverage===!1,alphaMap:Dt,alphaTest:Et,alphaHash:St,combine:w.combine,mapUv:oe&&T(w.map.channel),aoMapUv:Pt&&T(w.aoMap.channel),lightMapUv:z&&T(w.lightMap.channel),bumpMapUv:Yt&&T(w.bumpMap.channel),normalMapUv:$t&&T(w.normalMap.channel),displacementMapUv:ye&&T(w.displacementMap.channel),emissiveMapUv:Lt&&T(w.emissiveMap.channel),metalnessMapUv:Me&&T(w.metalnessMap.channel),roughnessMapUv:kt&&T(w.roughnessMap.channel),anisotropyMapUv:rt&&T(w.anisotropyMap.channel),clearcoatMapUv:Zt&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&T(w.sheenRoughnessMap.channel),specularMapUv:jt&&T(w.specularMap.channel),specularColorMapUv:Bt&&T(w.specularColorMap.channel),specularIntensityMapUv:ce&&T(w.specularIntensityMap.channel),transmissionMapUv:V&&T(w.transmissionMap.channel),thicknessMapUv:Nt&&T(w.thicknessMap.channel),alphaMapUv:Dt&&T(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&($t||ae),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ht.attributes.uv&&(oe||Dt),fog:!!pt,useFog:w.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:At,skinning:lt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:tt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:oe&&w.map.isVideoTexture===!0&&Ie.getTransfer(w.map.colorSpace)===Ye,decodeVideoTextureEmissive:Lt&&w.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(w.emissiveMap.colorSpace)===Ye,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===oi,flipSided:w.side===jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Vt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&w.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=p.has(1),Xe.vertexUv2s=p.has(2),Xe.vertexUv3s=p.has(3),p.clear(),Xe}function x(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(O(C,w),N(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function O(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function N(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function P(w){const C=b[w.type];let G;if(C){const Q=Bi[C];G=fM.clone(Q.uniforms)}else G=w.uniforms;return G}function F(w,C){let G;for(let Q=0,lt=g.length;Q<lt;Q++){const pt=g[Q];if(pt.cacheKey===C){G=pt,++G.usedTimes;break}}return G===void 0&&(G=new kE(o,C,w,c),g.push(G)),G}function D(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function I(w){m.remove(w)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:P,acquireProgram:F,releaseProgram:D,releaseShaderCache:I,programs:g,dispose:j}}function ZE(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function KE(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Gg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Vg(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(_,S,y,b,T,M){let x=o[t];return x===void 0?(x={id:_.id,object:_,geometry:S,material:y,groupOrder:b,renderOrder:_.renderOrder,z:T,group:M},o[t]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=y,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=T,x.group=M),t++,x}function h(_,S,y,b,T,M){const x=d(_,S,y,b,T,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):i.push(x)}function m(_,S,y,b,T,M){const x=d(_,S,y,b,T,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||KE),s.length>1&&s.sort(S||Gg),l.length>1&&l.sort(S||Gg)}function g(){for(let _=t,S=o.length;_<S;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function QE(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new Vg,o.set(s,[d])):l>=c.length?(d=new Vg,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function JE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new De};break;case"SpotLight":i={position:new J,direction:new J,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new J,halfWidth:new J,halfHeight:new J};break}return o[t.id]=i,i}}}function $E(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let tT=0;function eT(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function nT(o){const t=new JE,i=$E(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new en,d=new en;function h(p){let g=0,_=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,b=0,T=0,M=0,x=0,O=0,N=0,P=0,F=0,D=0,I=0;p.sort(eT);for(let w=0,C=p.length;w<C;w++){const G=p[w],Q=G.color,lt=G.intensity,pt=G.distance,ht=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=Q.r*lt,_+=Q.g*lt,S+=Q.b*lt;else if(G.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(G.sh.coefficients[B],lt);I++}else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,k=i.get(G);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,s.directionalShadow[y]=k,s.directionalShadowMap[y]=ht,s.directionalShadowMatrix[y]=G.shadow.matrix,O++}s.directional[y]=B,y++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(Q).multiplyScalar(lt),B.distance=pt,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,s.spot[T]=B;const W=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,W.updateMatrices(G),G.castShadow&&D++),s.spotLightMatrix[T]=W.matrix,G.castShadow){const k=i.get(G);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,s.spotShadow[T]=k,s.spotShadowMap[T]=ht,P++}T++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(Q).multiplyScalar(lt),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=B,M++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const W=G.shadow,k=i.get(G);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,s.pointShadow[b]=k,s.pointShadowMap[b]=ht,s.pointShadowMatrix[b]=G.shadow.matrix,N++}s.point[b]=B,b++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(lt),B.groundColor.copy(G.groundColor).multiplyScalar(lt),s.hemi[x]=B,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=S;const j=s.hash;(j.directionalLength!==y||j.pointLength!==b||j.spotLength!==T||j.rectAreaLength!==M||j.hemiLength!==x||j.numDirectionalShadows!==O||j.numPointShadows!==N||j.numSpotShadows!==P||j.numSpotMaps!==F||j.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=P+F-D,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=I,j.directionalLength=y,j.pointLength=b,j.spotLength=T,j.rectAreaLength=M,j.hemiLength=x,j.numDirectionalShadows=O,j.numPointShadows=N,j.numSpotShadows=P,j.numSpotMaps=F,j.numLightProbes=I,s.version=tT++)}function m(p,g){let _=0,S=0,y=0,b=0,T=0;const M=g.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const N=p[x];if(N.isDirectionalLight){const P=s.directional[_];P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),_++}else if(N.isSpotLight){const P=s.spot[y];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const P=s.rectArea[b];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(M),d.identity(),c.copy(N.matrixWorld),c.premultiply(M),d.extractRotation(c),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),b++}else if(N.isPointLight){const P=s.point[S];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(M),S++}else if(N.isHemisphereLight){const P=s.hemi[T];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:s}}function Xg(o){const t=new nT(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function d(g){s.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function iT(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new Xg(o),t.set(l,[h])):c>=d.length?(h=new Xg(o),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const aT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rT(o,t,i){let s=new Qh;const l=new pe,c=new pe,d=new je,h=new AM({depthPacking:vy}),m=new RM,p={},g=i.maxTextureSize,_={[is]:jn,[jn]:is,[oi]:oi},S=new ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:aT,fragmentShader:sT}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new Gn;b.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new an(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wg;let x=this.type;this.render=function(D,I,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(_a),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const lt=x!==pa&&this.type===pa,pt=x===pa&&this.type!==pa;for(let ht=0,B=D.length;ht<B;ht++){const W=D[ht],k=W.shadow;if(k===void 0){fe("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const ut=k.getFrameExtents();if(l.multiply(ut),c.copy(k.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ut.x),l.x=c.x*ut.x,k.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ut.y),l.y=c.y*ut.y,k.mapSize.y=c.y)),k.map===null||lt===!0||pt===!0){const L=this.type!==pa?{minFilter:li,magFilter:li}:{};k.map!==null&&k.map.dispose(),k.map=new Os(l.x,l.y,L),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const ft=k.getViewportCount();for(let L=0;L<ft;L++){const tt=k.getViewport(L);d.set(c.x*tt.x,c.y*tt.y,c.x*tt.z,c.y*tt.w),Q.viewport(d),k.updateMatrices(W,L),s=k.getFrustum(),P(I,j,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===pa&&O(k,j),k.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,G)};function O(D,I){const j=t.update(T);S.defines.VSM_SAMPLES!==D.blurSamples&&(S.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Os(l.x,l.y)),S.uniforms.shadow_pass.value=D.map.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(I,null,j,S,T,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(I,null,j,y,T,null)}function N(D,I,j,w){let C=null;const G=j.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(G!==void 0)C=G;else if(C=j.isPointLight===!0?m:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Q=C.uuid,lt=I.uuid;let pt=p[Q];pt===void 0&&(pt={},p[Q]=pt);let ht=pt[lt];ht===void 0&&(ht=C.clone(),pt[lt]=ht,I.addEventListener("dispose",F)),C=ht}if(C.visible=I.visible,C.wireframe=I.wireframe,w===pa?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:_[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Q=o.properties.get(C);Q.light=j}return C}function P(D,I,j,w,C){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&C===pa)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,D.matrixWorld);const lt=t.update(D),pt=D.material;if(Array.isArray(pt)){const ht=lt.groups;for(let B=0,W=ht.length;B<W;B++){const k=ht[B],ut=pt[k.materialIndex];if(ut&&ut.visible){const ft=N(D,ut,w,C);D.onBeforeShadow(o,D,I,j,lt,ft,k),o.renderBufferDirect(j,null,lt,ft,D,k),D.onAfterShadow(o,D,I,j,lt,ft,k)}}}else if(pt.visible){const ht=N(D,pt,w,C);D.onBeforeShadow(o,D,I,j,lt,ht,null),o.renderBufferDirect(j,null,lt,ht,D,null),D.onAfterShadow(o,D,I,j,lt,ht,null)}}const Q=D.children;for(let lt=0,pt=Q.length;lt<pt;lt++)P(Q[lt],I,j,w,C)}function F(D){D.target.removeEventListener("dispose",F);for(const j in p){const w=p[j],C=D.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const oT={[Jd]:$d,[th]:ih,[eh]:ah,[Or]:nh,[$d]:Jd,[ih]:th,[ah]:eh,[nh]:Or};function lT(o,t){function i(){let V=!1;const Nt=new je;let wt=null;const Dt=new je(0,0,0,0);return{setMask:function(Et){wt!==Et&&!V&&(o.colorMask(Et,Et,Et,Et),wt=Et)},setLocked:function(Et){V=Et},setClear:function(Et,St,Vt,ue,Xe){Xe===!0&&(Et*=ue,St*=ue,Vt*=ue),Nt.set(Et,St,Vt,ue),Dt.equals(Nt)===!1&&(o.clearColor(Et,St,Vt,ue),Dt.copy(Nt))},reset:function(){V=!1,wt=null,Dt.set(-1,0,0,0)}}}function s(){let V=!1,Nt=!1,wt=null,Dt=null,Et=null;return{setReversed:function(St){if(Nt!==St){const Vt=t.get("EXT_clip_control");St?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Nt=St;const ue=Et;Et=null,this.setClear(ue)}},getReversed:function(){return Nt},setTest:function(St){St?dt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(St){wt!==St&&!V&&(o.depthMask(St),wt=St)},setFunc:function(St){if(Nt&&(St=oT[St]),Dt!==St){switch(St){case Jd:o.depthFunc(o.NEVER);break;case $d:o.depthFunc(o.ALWAYS);break;case th:o.depthFunc(o.LESS);break;case Or:o.depthFunc(o.LEQUAL);break;case eh:o.depthFunc(o.EQUAL);break;case nh:o.depthFunc(o.GEQUAL);break;case ih:o.depthFunc(o.GREATER);break;case ah:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Dt=St}},setLocked:function(St){V=St},setClear:function(St){Et!==St&&(Nt&&(St=1-St),o.clearDepth(St),Et=St)},reset:function(){V=!1,wt=null,Dt=null,Et=null,Nt=!1}}}function l(){let V=!1,Nt=null,wt=null,Dt=null,Et=null,St=null,Vt=null,ue=null,Xe=null;return{setTest:function(Le){V||(Le?dt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Le){Nt!==Le&&!V&&(o.stencilMask(Le),Nt=Le)},setFunc:function(Le,Nn,Zn){(wt!==Le||Dt!==Nn||Et!==Zn)&&(o.stencilFunc(Le,Nn,Zn),wt=Le,Dt=Nn,Et=Zn)},setOp:function(Le,Nn,Zn){(St!==Le||Vt!==Nn||ue!==Zn)&&(o.stencilOp(Le,Nn,Zn),St=Le,Vt=Nn,ue=Zn)},setLocked:function(Le){V=Le},setClear:function(Le){Xe!==Le&&(o.clearStencil(Le),Xe=Le)},reset:function(){V=!1,Nt=null,wt=null,Dt=null,Et=null,St=null,Vt=null,ue=null,Xe=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,y=[],b=null,T=!1,M=null,x=null,O=null,N=null,P=null,F=null,D=null,I=new De(0,0,0),j=0,w=!1,C=null,G=null,Q=null,lt=null,pt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=W>=2);let ut=null,ft={};const L=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),yt=new je().fromArray(L),bt=new je().fromArray(tt);function zt(V,Nt,wt,Dt){const Et=new Uint8Array(4),St=o.createTexture();o.bindTexture(V,St),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Vt=0;Vt<wt;Vt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Dt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(Nt+Vt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return St}const at={};at[o.TEXTURE_2D]=zt(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=zt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=zt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=zt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),dt(o.DEPTH_TEST),d.setFunc(Or),Yt(!1),$t(Xx),dt(o.CULL_FACE),Pt(_a);function dt(V){g[V]!==!0&&(o.enable(V),g[V]=!0)}function At(V){g[V]!==!1&&(o.disable(V),g[V]=!1)}function Ut(V,Nt){return _[V]!==Nt?(o.bindFramebuffer(V,Nt),_[V]=Nt,V===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Nt),V===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Ht(V,Nt){let wt=y,Dt=!1;if(V){wt=S.get(Nt),wt===void 0&&(wt=[],S.set(Nt,wt));const Et=V.textures;if(wt.length!==Et.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Vt=Et.length;St<Vt;St++)wt[St]=o.COLOR_ATTACHMENT0+St;wt.length=Et.length,Dt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Dt=!0);Dt&&o.drawBuffers(wt)}function oe(V){return b!==V?(o.useProgram(V),b=V,!0):!1}const ie={[ws]:o.FUNC_ADD,[WS]:o.FUNC_SUBTRACT,[qS]:o.FUNC_REVERSE_SUBTRACT};ie[YS]=o.MIN,ie[jS]=o.MAX;const Gt={[ZS]:o.ZERO,[KS]:o.ONE,[QS]:o.SRC_COLOR,[Kd]:o.SRC_ALPHA,[iy]:o.SRC_ALPHA_SATURATE,[ey]:o.DST_COLOR,[$S]:o.DST_ALPHA,[JS]:o.ONE_MINUS_SRC_COLOR,[Qd]:o.ONE_MINUS_SRC_ALPHA,[ny]:o.ONE_MINUS_DST_COLOR,[ty]:o.ONE_MINUS_DST_ALPHA,[ay]:o.CONSTANT_COLOR,[sy]:o.ONE_MINUS_CONSTANT_COLOR,[ry]:o.CONSTANT_ALPHA,[oy]:o.ONE_MINUS_CONSTANT_ALPHA};function Pt(V,Nt,wt,Dt,Et,St,Vt,ue,Xe,Le){if(V===_a){T===!0&&(At(o.BLEND),T=!1);return}if(T===!1&&(dt(o.BLEND),T=!0),V!==kS){if(V!==M||Le!==w){if((x!==ws||P!==ws)&&(o.blendEquation(o.FUNC_ADD),x=ws,P=ws),Le)switch(V){case Nr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qc:o.blendFunc(o.ONE,o.ONE);break;case kx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Wx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:on("WebGLState: Invalid blending: ",V);break}else switch(V){case Nr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case kx:on("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wx:on("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:on("WebGLState: Invalid blending: ",V);break}O=null,N=null,F=null,D=null,I.set(0,0,0),j=0,M=V,w=Le}return}Et=Et||Nt,St=St||wt,Vt=Vt||Dt,(Nt!==x||Et!==P)&&(o.blendEquationSeparate(ie[Nt],ie[Et]),x=Nt,P=Et),(wt!==O||Dt!==N||St!==F||Vt!==D)&&(o.blendFuncSeparate(Gt[wt],Gt[Dt],Gt[St],Gt[Vt]),O=wt,N=Dt,F=St,D=Vt),(ue.equals(I)===!1||Xe!==j)&&(o.blendColor(ue.r,ue.g,ue.b,Xe),I.copy(ue),j=Xe),M=V,w=!1}function z(V,Nt){V.side===oi?At(o.CULL_FACE):dt(o.CULL_FACE);let wt=V.side===jn;Nt&&(wt=!wt),Yt(wt),V.blending===Nr&&V.transparent===!1?Pt(_a):Pt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),c.setMask(V.colorWrite);const Dt=V.stencilWrite;h.setTest(Dt),Dt&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Lt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(V){C!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),C=V)}function $t(V){V!==GS?(dt(o.CULL_FACE),V!==G&&(V===Xx?o.cullFace(o.BACK):V===VS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),G=V}function ye(V){V!==Q&&(B&&o.lineWidth(V),Q=V)}function Lt(V,Nt,wt){V?(dt(o.POLYGON_OFFSET_FILL),(lt!==Nt||pt!==wt)&&(o.polygonOffset(Nt,wt),lt=Nt,pt=wt)):At(o.POLYGON_OFFSET_FILL)}function Me(V){V?dt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function kt(V){V===void 0&&(V=o.TEXTURE0+ht-1),ut!==V&&(o.activeTexture(V),ut=V)}function ae(V,Nt,wt){wt===void 0&&(ut===null?wt=o.TEXTURE0+ht-1:wt=ut);let Dt=ft[wt];Dt===void 0&&(Dt={type:void 0,texture:void 0},ft[wt]=Dt),(Dt.type!==V||Dt.texture!==Nt)&&(ut!==wt&&(o.activeTexture(wt),ut=wt),o.bindTexture(V,Nt||at[V]),Dt.type=V,Dt.texture=Nt)}function U(){const V=ft[ut];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function xt(){try{o.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function gt(){try{o.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function rt(){try{o.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ct(){try{o.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Kt(){try{o.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Wt(){try{o.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Mt(){try{o.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Tt(V){yt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),yt.copy(V))}function Jt(V){bt.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),bt.copy(V))}function jt(V,Nt){let wt=p.get(Nt);wt===void 0&&(wt=new WeakMap,p.set(Nt,wt));let Dt=wt.get(V);Dt===void 0&&(Dt=o.getUniformBlockIndex(Nt,V.name),wt.set(V,Dt))}function Bt(V,Nt){const Dt=p.get(Nt).get(V);m.get(Nt)!==Dt&&(o.uniformBlockBinding(Nt,Dt,V.__bindingPointIndex),m.set(Nt,Dt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},ut=null,ft={},_={},S=new WeakMap,y=[],b=null,T=!1,M=null,x=null,O=null,N=null,P=null,F=null,D=null,I=new De(0,0,0),j=0,w=!1,C=null,G=null,Q=null,lt=null,pt=null,yt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:dt,disable:At,bindFramebuffer:Ut,drawBuffers:Ht,useProgram:oe,setBlending:Pt,setMaterial:z,setFlipSided:Yt,setCullFace:$t,setLineWidth:ye,setPolygonOffset:Lt,setScissorTest:Me,activeTexture:kt,bindTexture:ae,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:Wt,texImage3D:Mt,updateUBOMapping:jt,uniformBlockBinding:Bt,texStorage2D:Ct,texStorage3D:Kt,texSubImage2D:xt,texSubImage3D:gt,compressedTexSubImage2D:rt,compressedTexSubImage3D:Zt,scissor:Tt,viewport:Jt,reset:ce}}function cT(o,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new pe,g=new WeakMap;let _;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return y?new OffscreenCanvas(U,E):Zc("canvas")}function T(U,E,$){let xt=1;const gt=ae(U);if((gt.width>$||gt.height>$)&&(xt=$/Math.max(gt.width,gt.height)),xt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const rt=Math.floor(xt*gt.width),Zt=Math.floor(xt*gt.height);_===void 0&&(_=b(rt,Zt));const Ct=E?b(rt,Zt):_;return Ct.width=rt,Ct.height=Zt,Ct.getContext("2d").drawImage(U,0,0,rt,Zt),fe("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+rt+"x"+Zt+")."),Ct}else return"data"in U&&fe("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),U;return U}function M(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function O(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(U,E,$,xt,gt=!1){if(U!==null){if(o[U]!==void 0)return o[U];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let rt=E;if(E===o.RED&&($===o.FLOAT&&(rt=o.R32F),$===o.HALF_FLOAT&&(rt=o.R16F),$===o.UNSIGNED_BYTE&&(rt=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(rt=o.R8UI),$===o.UNSIGNED_SHORT&&(rt=o.R16UI),$===o.UNSIGNED_INT&&(rt=o.R32UI),$===o.BYTE&&(rt=o.R8I),$===o.SHORT&&(rt=o.R16I),$===o.INT&&(rt=o.R32I)),E===o.RG&&($===o.FLOAT&&(rt=o.RG32F),$===o.HALF_FLOAT&&(rt=o.RG16F),$===o.UNSIGNED_BYTE&&(rt=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(rt=o.RG8UI),$===o.UNSIGNED_SHORT&&(rt=o.RG16UI),$===o.UNSIGNED_INT&&(rt=o.RG32UI),$===o.BYTE&&(rt=o.RG8I),$===o.SHORT&&(rt=o.RG16I),$===o.INT&&(rt=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(rt=o.RGB8UI),$===o.UNSIGNED_SHORT&&(rt=o.RGB16UI),$===o.UNSIGNED_INT&&(rt=o.RGB32UI),$===o.BYTE&&(rt=o.RGB8I),$===o.SHORT&&(rt=o.RGB16I),$===o.INT&&(rt=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(rt=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(rt=o.RGBA16UI),$===o.UNSIGNED_INT&&(rt=o.RGBA32UI),$===o.BYTE&&(rt=o.RGBA8I),$===o.SHORT&&(rt=o.RGBA16I),$===o.INT&&(rt=o.RGBA32I)),E===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(rt=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(rt=o.R11F_G11F_B10F)),E===o.RGBA){const Zt=gt?Yc:Ie.getTransfer(xt);$===o.FLOAT&&(rt=o.RGBA32F),$===o.HALF_FLOAT&&(rt=o.RGBA16F),$===o.UNSIGNED_BYTE&&(rt=Zt===Ye?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(rt=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(rt=o.RGB5_A1)}return(rt===o.R16F||rt===o.R32F||rt===o.RG16F||rt===o.RG32F||rt===o.RGBA16F||rt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function P(U,E){let $;return U?E===null||E===Ls||E===Jo?$=o.DEPTH24_STENCIL8:E===ga?$=o.DEPTH32F_STENCIL8:E===Qo&&($=o.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ls||E===Jo?$=o.DEPTH_COMPONENT24:E===ga?$=o.DEPTH_COMPONENT32F:E===Qo&&($=o.DEPTH_COMPONENT16),$}function F(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==li&&U.minFilter!==Si?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function D(U){const E=U.target;E.removeEventListener("dispose",D),j(E),E.isVideoTexture&&g.delete(E)}function I(U){const E=U.target;E.removeEventListener("dispose",I),C(E)}function j(U){const E=s.get(U);if(E.__webglInit===void 0)return;const $=U.source,xt=S.get($);if(xt){const gt=xt[E.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&w(U),Object.keys(xt).length===0&&S.delete($)}s.remove(U)}function w(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const $=U.source,xt=S.get($);delete xt[E.__cacheKey],d.memory.textures--}function C(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(E.__webglFramebuffer[xt]))for(let gt=0;gt<E.__webglFramebuffer[xt].length;gt++)o.deleteFramebuffer(E.__webglFramebuffer[xt][gt]);else o.deleteFramebuffer(E.__webglFramebuffer[xt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[xt])}else{if(Array.isArray(E.__webglFramebuffer))for(let xt=0;xt<E.__webglFramebuffer.length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[xt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let xt=0;xt<E.__webglColorRenderbuffer.length;xt++)E.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[xt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=U.textures;for(let xt=0,gt=$.length;xt<gt;xt++){const rt=s.get($[xt]);rt.__webglTexture&&(o.deleteTexture(rt.__webglTexture),d.memory.textures--),s.remove($[xt])}s.remove(U)}let G=0;function Q(){G=0}function lt(){const U=G;return U>=l.maxTextures&&fe("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function pt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ht(U,E){const $=s.get(U);if(U.isVideoTexture&&Me(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const xt=U.image;if(xt===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{at($,U,E);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function B(U,E){const $=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){at($,U,E);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function W(U,E){const $=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){at($,U,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function k(U,E){const $=s.get(U);if(U.version>0&&$.__version!==U.version){dt($,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const ut={[oh]:o.REPEAT,[xa]:o.CLAMP_TO_EDGE,[lh]:o.MIRRORED_REPEAT},ft={[li]:o.NEAREST,[gy]:o.NEAREST_MIPMAP_NEAREST,[xc]:o.NEAREST_MIPMAP_LINEAR,[Si]:o.LINEAR,[_d]:o.LINEAR_MIPMAP_NEAREST,[Us]:o.LINEAR_MIPMAP_LINEAR},L={[yy]:o.NEVER,[Ry]:o.ALWAYS,[My]:o.LESS,[n_]:o.LEQUAL,[by]:o.EQUAL,[Ay]:o.GEQUAL,[Ey]:o.GREATER,[Ty]:o.NOTEQUAL};function tt(U,E){if(E.type===ga&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Si||E.magFilter===_d||E.magFilter===xc||E.magFilter===Us||E.minFilter===Si||E.minFilter===_d||E.minFilter===xc||E.minFilter===Us)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,ut[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,ut[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,ut[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,ft[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,ft[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===li||E.minFilter!==xc&&E.minFilter!==Us||E.type===ga&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function yt(U,E){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",D));const xt=E.source;let gt=S.get(xt);gt===void 0&&(gt={},S.set(xt,gt));const rt=pt(E);if(rt!==U.__cacheKey){gt[rt]===void 0&&(gt[rt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,$=!0),gt[rt].usedTimes++;const Zt=gt[U.__cacheKey];Zt!==void 0&&(gt[U.__cacheKey].usedTimes--,Zt.usedTimes===0&&w(E)),U.__cacheKey=rt,U.__webglTexture=gt[rt].texture}return $}function bt(U,E,$){return Math.floor(Math.floor(U/$)/E)}function zt(U,E,$,xt){const rt=U.updateRanges;if(rt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,$,xt,E.data);else{rt.sort((Mt,Tt)=>Mt.start-Tt.start);let Zt=0;for(let Mt=1;Mt<rt.length;Mt++){const Tt=rt[Zt],Jt=rt[Mt],jt=Tt.start+Tt.count,Bt=bt(Jt.start,E.width,4),ce=bt(Tt.start,E.width,4);Jt.start<=jt+1&&Bt===ce&&bt(Jt.start+Jt.count-1,E.width,4)===Bt?Tt.count=Math.max(Tt.count,Jt.start+Jt.count-Tt.start):(++Zt,rt[Zt]=Jt)}rt.length=Zt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Kt=o.getParameter(o.UNPACK_SKIP_PIXELS),Wt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Tt=rt.length;Mt<Tt;Mt++){const Jt=rt[Mt],jt=Math.floor(Jt.start/4),Bt=Math.ceil(Jt.count/4),ce=jt%E.width,V=Math.floor(jt/E.width),Nt=Bt,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,ce,V,Nt,wt,$,xt,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Wt)}}function at(U,E,$){let xt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xt=o.TEXTURE_3D);const gt=yt(U,E),rt=E.source;i.bindTexture(xt,U.__webglTexture,o.TEXTURE0+$);const Zt=s.get(rt);if(rt.version!==Zt.__version||gt===!0){i.activeTexture(o.TEXTURE0+$);const Ct=Ie.getPrimaries(Ie.workingColorSpace),Kt=E.colorSpace===$a?null:Ie.getPrimaries(E.colorSpace),Wt=E.colorSpace===$a||Ct===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Mt=T(E.image,!1,l.maxTextureSize);Mt=kt(E,Mt);const Tt=c.convert(E.format,E.colorSpace),Jt=c.convert(E.type);let jt=N(E.internalFormat,Tt,Jt,E.colorSpace,E.isVideoTexture);tt(xt,E);let Bt;const ce=E.mipmaps,V=E.isVideoTexture!==!0,Nt=Zt.__version===void 0||gt===!0,wt=rt.dataReady,Dt=F(E,Mt);if(E.isDepthTexture)jt=P(E.format===tl,E.type),Nt&&(V?i.texStorage2D(o.TEXTURE_2D,1,jt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,jt,Mt.width,Mt.height,0,Tt,Jt,null));else if(E.isDataTexture)if(ce.length>0){V&&Nt&&i.texStorage2D(o.TEXTURE_2D,Dt,jt,ce[0].width,ce[0].height);for(let Et=0,St=ce.length;Et<St;Et++)Bt=ce[Et],V?wt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Bt.width,Bt.height,Tt,Jt,Bt.data):i.texImage2D(o.TEXTURE_2D,Et,jt,Bt.width,Bt.height,0,Tt,Jt,Bt.data);E.generateMipmaps=!1}else V?(Nt&&i.texStorage2D(o.TEXTURE_2D,Dt,jt,Mt.width,Mt.height),wt&&zt(E,Mt,Tt,Jt)):i.texImage2D(o.TEXTURE_2D,0,jt,Mt.width,Mt.height,0,Tt,Jt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,jt,ce[0].width,ce[0].height,Mt.depth);for(let Et=0,St=ce.length;Et<St;Et++)if(Bt=ce[Et],E.format!==Ui)if(Tt!==null)if(V){if(wt)if(E.layerUpdates.size>0){const Vt=Sg(Bt.width,Bt.height,E.format,E.type);for(const ue of E.layerUpdates){const Xe=Bt.data.subarray(ue*Vt/Bt.data.BYTES_PER_ELEMENT,(ue+1)*Vt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ue,Bt.width,Bt.height,1,Tt,Xe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Bt.width,Bt.height,Mt.depth,Tt,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,jt,Bt.width,Bt.height,Mt.depth,0,Bt.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Bt.width,Bt.height,Mt.depth,Tt,Jt,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,jt,Bt.width,Bt.height,Mt.depth,0,Tt,Jt,Bt.data)}else{V&&Nt&&i.texStorage2D(o.TEXTURE_2D,Dt,jt,ce[0].width,ce[0].height);for(let Et=0,St=ce.length;Et<St;Et++)Bt=ce[Et],E.format!==Ui?Tt!==null?V?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Bt.width,Bt.height,Tt,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,jt,Bt.width,Bt.height,0,Bt.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?wt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Bt.width,Bt.height,Tt,Jt,Bt.data):i.texImage2D(o.TEXTURE_2D,Et,jt,Bt.width,Bt.height,0,Tt,Jt,Bt.data)}else if(E.isDataArrayTexture)if(V){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,jt,Mt.width,Mt.height,Mt.depth),wt)if(E.layerUpdates.size>0){const Et=Sg(Mt.width,Mt.height,E.format,E.type);for(const St of E.layerUpdates){const Vt=Mt.data.subarray(St*Et/Mt.data.BYTES_PER_ELEMENT,(St+1)*Et/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,Mt.width,Mt.height,1,Tt,Jt,Vt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Jt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Mt.width,Mt.height,Mt.depth,0,Tt,Jt,Mt.data);else if(E.isData3DTexture)V?(Nt&&i.texStorage3D(o.TEXTURE_3D,Dt,jt,Mt.width,Mt.height,Mt.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Jt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,Mt.width,Mt.height,Mt.depth,0,Tt,Jt,Mt.data);else if(E.isFramebufferTexture){if(Nt)if(V)i.texStorage2D(o.TEXTURE_2D,Dt,jt,Mt.width,Mt.height);else{let Et=Mt.width,St=Mt.height;for(let Vt=0;Vt<Dt;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,jt,Et,St,0,Tt,Jt,null),Et>>=1,St>>=1}}else if(ce.length>0){if(V&&Nt){const Et=ae(ce[0]);i.texStorage2D(o.TEXTURE_2D,Dt,jt,Et.width,Et.height)}for(let Et=0,St=ce.length;Et<St;Et++)Bt=ce[Et],V?wt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Tt,Jt,Bt):i.texImage2D(o.TEXTURE_2D,Et,jt,Tt,Jt,Bt);E.generateMipmaps=!1}else if(V){if(Nt){const Et=ae(Mt);i.texStorage2D(o.TEXTURE_2D,Dt,jt,Et.width,Et.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt,Jt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,jt,Tt,Jt,Mt);M(E)&&x(xt),Zt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function dt(U,E,$){if(E.image.length!==6)return;const xt=yt(U,E),gt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+$);const rt=s.get(gt);if(gt.version!==rt.__version||xt===!0){i.activeTexture(o.TEXTURE0+$);const Zt=Ie.getPrimaries(Ie.workingColorSpace),Ct=E.colorSpace===$a?null:Ie.getPrimaries(E.colorSpace),Kt=E.colorSpace===$a||Zt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Tt=[];for(let St=0;St<6;St++)!Wt&&!Mt?Tt[St]=T(E.image[St],!0,l.maxCubemapSize):Tt[St]=Mt?E.image[St].image:E.image[St],Tt[St]=kt(E,Tt[St]);const Jt=Tt[0],jt=c.convert(E.format,E.colorSpace),Bt=c.convert(E.type),ce=N(E.internalFormat,jt,Bt,E.colorSpace),V=E.isVideoTexture!==!0,Nt=rt.__version===void 0||xt===!0,wt=gt.dataReady;let Dt=F(E,Jt);tt(o.TEXTURE_CUBE_MAP,E);let Et;if(Wt){V&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Dt,ce,Jt.width,Jt.height);for(let St=0;St<6;St++){Et=Tt[St].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){const ue=Et[Vt];E.format!==Ui?jt!==null?V?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,0,0,ue.width,ue.height,jt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,ce,ue.width,ue.height,0,ue.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,0,0,ue.width,ue.height,jt,Bt,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,ce,ue.width,ue.height,0,jt,Bt,ue.data)}}}else{if(Et=E.mipmaps,V&&Nt){Et.length>0&&Dt++;const St=ae(Tt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Dt,ce,St.width,St.height)}for(let St=0;St<6;St++)if(Mt){V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Tt[St].width,Tt[St].height,jt,Bt,Tt[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ce,Tt[St].width,Tt[St].height,0,jt,Bt,Tt[St].data);for(let Vt=0;Vt<Et.length;Vt++){const Xe=Et[Vt].image[St].image;V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,0,0,Xe.width,Xe.height,jt,Bt,Xe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,ce,Xe.width,Xe.height,0,jt,Bt,Xe.data)}}else{V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,jt,Bt,Tt[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ce,jt,Bt,Tt[St]);for(let Vt=0;Vt<Et.length;Vt++){const ue=Et[Vt];V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,0,0,jt,Bt,ue.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,ce,jt,Bt,ue.image[St])}}}M(E)&&x(o.TEXTURE_CUBE_MAP),rt.__version=gt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function At(U,E,$,xt,gt,rt){const Zt=c.convert($.format,$.colorSpace),Ct=c.convert($.type),Kt=N($.internalFormat,Zt,Ct,$.colorSpace),Wt=s.get(E),Mt=s.get($);if(Mt.__renderTarget=E,!Wt.__hasExternalTextures){const Tt=Math.max(1,E.width>>rt),Jt=Math.max(1,E.height>>rt);gt===o.TEXTURE_3D||gt===o.TEXTURE_2D_ARRAY?i.texImage3D(gt,rt,Kt,Tt,Jt,E.depth,0,Zt,Ct,null):i.texImage2D(gt,rt,Kt,Tt,Jt,0,Zt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Lt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,gt,Mt.__webglTexture,0,ye(E)):(gt===o.TEXTURE_2D||gt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,gt,Mt.__webglTexture,rt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(U,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const xt=E.depthTexture,gt=xt&&xt.isDepthTexture?xt.type:null,rt=P(E.stencilBuffer,gt),Zt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=ye(E);Lt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,rt,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,rt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,rt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,U)}else{const xt=E.textures;for(let gt=0;gt<xt.length;gt++){const rt=xt[gt],Zt=c.convert(rt.format,rt.colorSpace),Ct=c.convert(rt.type),Kt=N(rt.internalFormat,Zt,Ct,rt.colorSpace),Wt=ye(E);$&&Lt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Kt,E.width,E.height):Lt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Wt,Kt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(E.depthTexture);xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const gt=xt.__webglTexture,rt=ye(E);if(E.depthTexture.format===$o)Lt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,gt,0,rt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,gt,0);else if(E.depthTexture.format===tl)Lt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,gt,0,rt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function oe(U){const E=s.get(U),$=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const xt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),xt){const gt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,xt.removeEventListener("dispose",gt)};xt.addEventListener("dispose",gt),E.__depthDisposeCallback=gt}E.__boundDepthTexture=xt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const xt=U.texture.mipmaps;xt&&xt.length>0?Ht(E.__webglFramebuffer[0],U):Ht(E.__webglFramebuffer,U)}else if($){E.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[xt]),E.__webglDepthbuffer[xt]===void 0)E.__webglDepthbuffer[xt]=o.createRenderbuffer(),Ut(E.__webglDepthbuffer[xt],U,!1);else{const gt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer[xt];o.bindRenderbuffer(o.RENDERBUFFER,rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,rt)}}else{const xt=U.texture.mipmaps;if(xt&&xt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ut(E.__webglDepthbuffer,U,!1);else{const gt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,rt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ie(U,E,$){const xt=s.get(U);E!==void 0&&At(xt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&oe(U)}function Gt(U){const E=U.texture,$=s.get(U),xt=s.get(E);U.addEventListener("dispose",I);const gt=U.textures,rt=U.isWebGLCubeRenderTarget===!0,Zt=gt.length>1;if(Zt||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=E.version,d.memory.textures++),rt){$.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Ct]=[];for(let Kt=0;Kt<E.mipmaps.length;Kt++)$.__webglFramebuffer[Ct][Kt]=o.createFramebuffer()}else $.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)$.__webglFramebuffer[Ct]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Ct=0,Kt=gt.length;Ct<Kt;Ct++){const Wt=s.get(gt[Ct]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&Lt(U)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ct=0;Ct<gt.length;Ct++){const Kt=gt[Ct];$.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ct]);const Wt=c.convert(Kt.format,Kt.colorSpace),Mt=c.convert(Kt.type),Tt=N(Kt.internalFormat,Wt,Mt,Kt.colorSpace,U.isXRRenderTarget===!0),Jt=ye(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,Tt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut($.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(rt){i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),tt(o.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let Kt=0;Kt<E.mipmaps.length;Kt++)At($.__webglFramebuffer[Ct][Kt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Kt);else At($.__webglFramebuffer[Ct],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(E)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Ct=0,Kt=gt.length;Ct<Kt;Ct++){const Wt=gt[Ct],Mt=s.get(Wt);let Tt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Tt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Tt,Mt.__webglTexture),tt(Tt,Wt),At($.__webglFramebuffer,U,Wt,o.COLOR_ATTACHMENT0+Ct,Tt,0),M(Wt)&&x(Tt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,xt.__webglTexture),tt(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let Kt=0;Kt<E.mipmaps.length;Kt++)At($.__webglFramebuffer[Kt],U,E,o.COLOR_ATTACHMENT0,Ct,Kt);else At($.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Ct,0);M(E)&&x(Ct),i.unbindTexture()}U.depthBuffer&&oe(U)}function Pt(U){const E=U.textures;for(let $=0,xt=E.length;$<xt;$++){const gt=E[$];if(M(gt)){const rt=O(U),Zt=s.get(gt).__webglTexture;i.bindTexture(rt,Zt),x(rt),i.unbindTexture()}}}const z=[],Yt=[];function $t(U){if(U.samples>0){if(Lt(U)===!1){const E=U.textures,$=U.width,xt=U.height;let gt=o.COLOR_BUFFER_BIT;const rt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=s.get(U),Ct=E.length>1;if(Ct)for(let Wt=0;Wt<E.length;Wt++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Kt=U.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(gt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(gt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[Wt]);const Mt=s.get(E[Wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,$,xt,0,0,$,xt,gt,o.NEAREST),m===!0&&(z.length=0,Yt.length=0,z.push(o.COLOR_ATTACHMENT0+Wt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(z.push(rt),Yt.push(rt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Yt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,z))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Wt=0;Wt<E.length;Wt++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[Wt]);const Mt=s.get(E[Wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ye(U){return Math.min(l.maxSamples,U.samples)}function Lt(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(U){const E=d.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function kt(U,E){const $=U.colorSpace,xt=U.format,gt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Ir&&$!==$a&&(Ie.getTransfer($)===Ye?(xt!==Ui||gt!==Hi)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):on("WebGLTextures: Unsupported texture color space:",$)),E}function ae(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=Q,this.setTexture2D=ht,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=ie,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Lt}function uT(o,t){function i(s,l=$a){let c;const d=Ie.getTransfer(l);if(s===Hi)return o.UNSIGNED_BYTE;if(s===Xh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===kh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Kg)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Qg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===jg)return o.BYTE;if(s===Zg)return o.SHORT;if(s===Qo)return o.UNSIGNED_SHORT;if(s===Vh)return o.INT;if(s===Ls)return o.UNSIGNED_INT;if(s===ga)return o.FLOAT;if(s===Fr)return o.HALF_FLOAT;if(s===Jg)return o.ALPHA;if(s===$g)return o.RGB;if(s===Ui)return o.RGBA;if(s===$o)return o.DEPTH_COMPONENT;if(s===tl)return o.DEPTH_STENCIL;if(s===t_)return o.RED;if(s===Wh)return o.RED_INTEGER;if(s===qh)return o.RG;if(s===Yh)return o.RG_INTEGER;if(s===jh)return o.RGBA_INTEGER;if(s===Gc||s===Vc||s===Xc||s===kc)if(d===Ye)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ch||s===uh||s===fh||s===dh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hh||s===ph||s===mh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hh||s===ph)return d===Ye?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===mh)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xh||s===gh||s===_h||s===vh||s===Sh||s===yh||s===Mh||s===bh||s===Eh||s===Th||s===Ah||s===Rh||s===Ch||s===wh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===xh)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gh)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_h)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vh)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sh)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yh)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mh)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bh)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Eh)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Th)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ah)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rh)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ch)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wh)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dh||s===Uh||s===Nh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Dh)return d===Ye?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Uh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Nh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lh||s===Oh||s===Ph||s===zh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Lh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Oh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ph)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const fT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new g_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ya({vertexShader:fT,fragmentShader:dT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new an(new Ns(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pT extends Hr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,_=null,S=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",M=new hT,x={},O=i.getContextAttributes();let N=null,P=null;const F=[],D=[],I=new pe;let j=null;const w=new ri;w.viewport=new je;const C=new ri;C.viewport=new je;const G=[w,C],Q=new LM;let lt=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let dt=F[at];return dt===void 0&&(dt=new Fd,F[at]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(at){let dt=F[at];return dt===void 0&&(dt=new Fd,F[at]=dt),dt.getGripSpace()},this.getHand=function(at){let dt=F[at];return dt===void 0&&(dt=new Fd,F[at]=dt),dt.getHandSpace()};function ht(at){const dt=D.indexOf(at.inputSource);if(dt===-1)return;const At=F[dt];At!==void 0&&(At.update(at.inputSource,at.frame,p||d),At.dispatchEvent({type:at.type,data:at.inputSource}))}function B(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",W);for(let at=0;at<F.length;at++){const dt=D[at];dt!==null&&(D[at]=null,F[at].disconnect(dt))}lt=null,pt=null,M.reset();for(const at in x)delete x[at];t.setRenderTarget(N),y=null,S=null,_=null,l=null,P=null,zt.stop(),s.isPresenting=!1,t.setPixelRatio(j),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){h=at,s.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",B),l.addEventListener("inputsourceschange",W),O.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ut=null,Ht=null;O.depth&&(Ht=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=O.stencil?tl:$o,Ut=O.stencil?Jo:Ls);const oe={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(oe),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),P=new Os(S.textureWidth,S.textureHeight,{format:Ui,type:Hi,depthTexture:new x_(S.textureWidth,S.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const At={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Os(y.framebufferWidth,y.framebufferHeight,{format:Ui,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),zt.setContext(l),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function W(at){for(let dt=0;dt<at.removed.length;dt++){const At=at.removed[dt],Ut=D.indexOf(At);Ut>=0&&(D[Ut]=null,F[Ut].disconnect(At))}for(let dt=0;dt<at.added.length;dt++){const At=at.added[dt];let Ut=D.indexOf(At);if(Ut===-1){for(let oe=0;oe<F.length;oe++)if(oe>=D.length){D.push(At),Ut=oe;break}else if(D[oe]===null){D[oe]=At,Ut=oe;break}if(Ut===-1)break}const Ht=F[Ut];Ht&&Ht.connect(At)}}const k=new J,ut=new J;function ft(at,dt,At){k.setFromMatrixPosition(dt.matrixWorld),ut.setFromMatrixPosition(At.matrixWorld);const Ut=k.distanceTo(ut),Ht=dt.projectionMatrix.elements,oe=At.projectionMatrix.elements,ie=Ht[14]/(Ht[10]-1),Gt=Ht[14]/(Ht[10]+1),Pt=(Ht[9]+1)/Ht[5],z=(Ht[9]-1)/Ht[5],Yt=(Ht[8]-1)/Ht[0],$t=(oe[8]+1)/oe[0],ye=ie*Yt,Lt=ie*$t,Me=Ut/(-Yt+$t),kt=Me*-Yt;if(dt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(kt),at.translateZ(Me),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Ht[10]===-1)at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const ae=ie+Me,U=Gt+Me,E=ye-kt,$=Lt+(Ut-kt),xt=Pt*Gt/U*ae,gt=z*Gt/U*ae;at.projectionMatrix.makePerspective(E,$,xt,gt,ae,U),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function L(at,dt){dt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(dt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let dt=at.near,At=at.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),Q.near=C.near=w.near=dt,Q.far=C.far=w.far=At,(lt!==Q.near||pt!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),lt=Q.near,pt=Q.far),Q.layers.mask=at.layers.mask|6,w.layers.mask=Q.layers.mask&3,C.layers.mask=Q.layers.mask&5;const Ut=at.parent,Ht=Q.cameras;L(Q,Ut);for(let oe=0;oe<Ht.length;oe++)L(Ht[oe],Ut);Ht.length===2?ft(Q,w,C):Q.projectionMatrix.copy(w.projectionMatrix),tt(at,Q,Ut)};function tt(at,dt,At){At===null?at.matrix.copy(dt.matrixWorld):(at.matrix.copy(At.matrixWorld),at.matrix.invert(),at.matrix.multiply(dt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=nl*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(at){m=at,S!==null&&(S.fixedFoveation=at),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=at)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(at){return x[at]};let yt=null;function bt(at,dt){if(g=dt.getViewerPose(p||d),b=dt,g!==null){const At=g.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let Ut=!1;At.length!==Q.cameras.length&&(Q.cameras.length=0,Ut=!0);for(let Gt=0;Gt<At.length;Gt++){const Pt=At[Gt];let z=null;if(y!==null)z=y.getViewport(Pt);else{const $t=_.getViewSubImage(S,Pt);z=$t.viewport,Gt===0&&(t.setRenderTargetTextures(P,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(P))}let Yt=G[Gt];Yt===void 0&&(Yt=new ri,Yt.layers.enable(Gt),Yt.viewport=new je,G[Gt]=Yt),Yt.matrix.fromArray(Pt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Pt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(z.x,z.y,z.width,z.height),Gt===0&&(Q.matrix.copy(Yt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ut===!0&&Q.cameras.push(Yt)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const Gt=_.getDepthInformation(At[0]);Gt&&Gt.isValid&&Gt.texture&&M.init(Gt,l.renderState)}if(Ht&&Ht.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let Gt=0;Gt<At.length;Gt++){const Pt=At[Gt].camera;if(Pt){let z=x[Pt];z||(z=new g_,x[Pt]=z);const Yt=_.getCameraImage(Pt);z.sourceTexture=Yt}}}}for(let At=0;At<F.length;At++){const Ut=D[At],Ht=F[At];Ut!==null&&Ht!==void 0&&Ht.update(Ut,dt,p||d)}yt&&yt(at,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),b=null}const zt=new v_;zt.setAnimationLoop(bt),this.setAnimationLoop=function(at){yt=at},this.dispose=function(){}}}const Rs=new Gi,mT=new en;function xT(o,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,u_(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,O,N,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),_(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),S(M,x),x.isMeshPhysicalMaterial&&y(M,x,P)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),T(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,O,N):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===jn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===jn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=t.get(x),N=O.envMap,P=O.envMapRotation;N&&(M.envMap.value=N,Rs.copy(P),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),M.envMapRotation.value.setFromMatrix4(mT.makeRotationFromEuler(Rs)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,O,N){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=N*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const O=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function gT(o,t,i,s){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,N){const P=N.program;s.uniformBlockBinding(O,P)}function p(O,N){let P=l[O.id];P===void 0&&(b(O),P=g(O),l[O.id]=P,O.addEventListener("dispose",M));const F=N.program;s.updateUBOMapping(O,F);const D=t.render.frame;c[O.id]!==D&&(S(O),c[O.id]=D)}function g(O){const N=_();O.__bindingPointIndex=N;const P=o.createBuffer(),F=O.__size,D=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,F,D),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,P),P}function _(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return on("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const N=l[O.id],P=O.uniforms,F=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let D=0,I=P.length;D<I;D++){const j=Array.isArray(P[D])?P[D]:[P[D]];for(let w=0,C=j.length;w<C;w++){const G=j[w];if(y(G,D,w,F)===!0){const Q=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let pt=0;for(let ht=0;ht<lt.length;ht++){const B=lt[ht],W=T(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,Q+pt,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,pt),pt+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(O,N,P,F){const D=O.value,I=N+"_"+P;if(F[I]===void 0)return typeof D=="number"||typeof D=="boolean"?F[I]=D:F[I]=D.clone(),!0;{const j=F[I];if(typeof D=="number"||typeof D=="boolean"){if(j!==D)return F[I]=D,!0}else if(j.equals(D)===!1)return j.copy(D),!0}return!1}function b(O){const N=O.uniforms;let P=0;const F=16;for(let I=0,j=N.length;I<j;I++){const w=Array.isArray(N[I])?N[I]:[N[I]];for(let C=0,G=w.length;C<G;C++){const Q=w[C],lt=Array.isArray(Q.value)?Q.value:[Q.value];for(let pt=0,ht=lt.length;pt<ht;pt++){const B=lt[pt],W=T(B),k=P%F,ut=k%W.boundary,ft=k+ut;P+=ut,ft!==0&&F-ft<W.storage&&(P+=F-ft),Q.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=P,P+=W.storage}}}const D=P%F;return D>0&&(P+=F-D),O.__size=P,O.__cache={},this}function T(O){const N={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(N.boundary=4,N.storage=4):O.isVector2?(N.boundary=8,N.storage=8):O.isVector3||O.isColor?(N.boundary=16,N.storage=12):O.isVector4?(N.boundary=16,N.storage=16):O.isMatrix3?(N.boundary=48,N.storage=48):O.isMatrix4?(N.boundary=64,N.storage=64):O.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):fe("WebGLRenderer: Unsupported uniform value type.",O),N}function M(O){const N=O.target;N.removeEventListener("dispose",M);const P=d.indexOf(N.__bindingPointIndex);d.splice(P,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const O in l)o.deleteBuffer(l[O]);d=[],l={},c={}}return{bind:m,update:p,dispose:x}}const _T=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ha=null;function vT(){return ha===null&&(ha=new SM(_T,32,32,qh,Fr),ha.minFilter=Si,ha.magFilter=Si,ha.wrapS=xa,ha.wrapT=xa,ha.generateMipmaps=!1,ha.needsUpdate=!0),ha}class ST{constructor(t={}){const{canvas:i=Cy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=d;const b=new Set([jh,Yh,Wh]),T=new Set([Hi,Ls,Qo,Jo,Xh,kh]),M=new Uint32Array(4),x=new Int32Array(4);let O=null,N=null;const P=[],F=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1;this._outputColorSpace=_i;let j=0,w=0,C=null,G=-1,Q=null;const lt=new je,pt=new je;let ht=null;const B=new De(0);let W=0,k=i.width,ut=i.height,ft=1,L=null,tt=null;const yt=new je(0,0,k,ut),bt=new je(0,0,k,ut);let zt=!1;const at=new Qh;let dt=!1,At=!1;const Ut=new en,Ht=new J,oe=new je,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Pt(){return C===null?ft:1}let z=s;function Yt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gh}`),i.addEventListener("webglcontextlost",Et,!1),i.addEventListener("webglcontextrestored",St,!1),i.addEventListener("webglcontextcreationerror",Vt,!1),z===null){const q="webgl2";if(z=Yt(q,R),z===null)throw Yt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let $t,ye,Lt,Me,kt,ae,U,E,$,xt,gt,rt,Zt,Ct,Kt,Wt,Mt,Tt,Jt,jt,Bt,ce,V,Nt;function wt(){$t=new C3(z),$t.init(),ce=new uT(z,$t),ye=new v3(z,$t,t,ce),Lt=new lT(z,$t),ye.reversedDepthBuffer&&S&&Lt.buffers.depth.setReversed(!0),Me=new U3(z),kt=new ZE,ae=new cT(z,$t,Lt,kt,ye,ce,Me),U=new y3(D),E=new R3(D),$=new PM(z),V=new g3(z,$),xt=new w3(z,$,Me,V),gt=new L3(z,xt,$,Me),Jt=new N3(z,ye,ae),Wt=new S3(kt),rt=new jE(D,U,E,$t,ye,V,Wt),Zt=new xT(D,kt),Ct=new QE,Kt=new iT($t),Tt=new x3(D,U,E,Lt,gt,y,m),Mt=new rT(D,gt,ye),Nt=new gT(z,Me,ye,Lt),jt=new _3(z,$t,Me),Bt=new D3(z,$t,Me),Me.programs=rt.programs,D.capabilities=ye,D.extensions=$t,D.properties=kt,D.renderLists=Ct,D.shadowMap=Mt,D.state=Lt,D.info=Me}wt();const Dt=new pT(D,z);this.xr=Dt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(R){R!==void 0&&(ft=R,this.setSize(k,ut,!1))},this.getSize=function(R){return R.set(k,ut)},this.setSize=function(R,q,ot=!0){if(Dt.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,ut=q,i.width=Math.floor(R*ft),i.height=Math.floor(q*ft),ot===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(k*ft,ut*ft).floor()},this.setDrawingBufferSize=function(R,q,ot){k=R,ut=q,ft=ot,i.width=Math.floor(R*ot),i.height=Math.floor(q*ot),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(lt)},this.getViewport=function(R){return R.copy(yt)},this.setViewport=function(R,q,ot,it){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,q,ot,it),Lt.viewport(lt.copy(yt).multiplyScalar(ft).round())},this.getScissor=function(R){return R.copy(bt)},this.setScissor=function(R,q,ot,it){R.isVector4?bt.set(R.x,R.y,R.z,R.w):bt.set(R,q,ot,it),Lt.scissor(pt.copy(bt).multiplyScalar(ft).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(R){Lt.setScissorTest(zt=R)},this.setOpaqueSort=function(R){L=R},this.setTransparentSort=function(R){tt=R},this.getClearColor=function(R){return R.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ot=!0){let it=0;if(R){let Z=!1;if(C!==null){const Rt=C.texture.format;Z=b.has(Rt)}if(Z){const Rt=C.texture.type,Ot=T.has(Rt),Ft=Tt.getClearColor(),Xt=Tt.getClearAlpha(),se=Ft.r,le=Ft.g,te=Ft.b;Ot?(M[0]=se,M[1]=le,M[2]=te,M[3]=Xt,z.clearBufferuiv(z.COLOR,0,M)):(x[0]=se,x[1]=le,x[2]=te,x[3]=Xt,z.clearBufferiv(z.COLOR,0,x))}else it|=z.COLOR_BUFFER_BIT}q&&(it|=z.DEPTH_BUFFER_BIT),ot&&(it|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Et,!1),i.removeEventListener("webglcontextrestored",St,!1),i.removeEventListener("webglcontextcreationerror",Vt,!1),Tt.dispose(),Ct.dispose(),Kt.dispose(),kt.dispose(),U.dispose(),E.dispose(),gt.dispose(),V.dispose(),Nt.dispose(),rt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Vr),Dt.removeEventListener("sessionend",Xr),Mi.stop()};function Et(R){R.preventDefault(),Kc("WebGLRenderer: Context Lost."),I=!0}function St(){Kc("WebGLRenderer: Context Restored."),I=!1;const R=Me.autoReset,q=Mt.enabled,ot=Mt.autoUpdate,it=Mt.needsUpdate,Z=Mt.type;wt(),Me.autoReset=R,Mt.enabled=q,Mt.autoUpdate=ot,Mt.needsUpdate=it,Mt.type=Z}function Vt(R){on("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ue(R){const q=R.target;q.removeEventListener("dispose",ue),Xe(q)}function Xe(R){Le(R),kt.remove(R)}function Le(R){const q=kt.get(R).programs;q!==void 0&&(q.forEach(function(ot){rt.releaseProgram(ot)}),R.isShaderMaterial&&rt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ot,it,Z,Rt){q===null&&(q=ie);const Ot=Z.isMesh&&Z.matrixWorld.determinant()<0,Ft=su(R,q,ot,it,Z);Lt.setMaterial(it,Ot);let Xt=ot.index,se=1;if(it.wireframe===!0){if(Xt=xt.getWireframeAttribute(ot),Xt===void 0)return;se=2}const le=ot.drawRange,te=ot.attributes.position;let xe=le.start*se,Ne=(le.start+le.count)*se;Rt!==null&&(xe=Math.max(xe,Rt.start*se),Ne=Math.min(Ne,(Rt.start+Rt.count)*se)),Xt!==null?(xe=Math.max(xe,0),Ne=Math.min(Ne,Xt.count)):te!=null&&(xe=Math.max(xe,0),Ne=Math.min(Ne,te.count));const Oe=Ne-xe;if(Oe<0||Oe===1/0)return;V.setup(Z,it,Ft,ot,Xt);let Re,Fe=jt;if(Xt!==null&&(Re=$.get(Xt),Fe=Bt,Fe.setIndex(Re)),Z.isMesh)it.wireframe===!0?(Lt.setLineWidth(it.wireframeLinewidth*Pt()),Fe.setMode(z.LINES)):Fe.setMode(z.TRIANGLES);else if(Z.isLine){let ne=it.linewidth;ne===void 0&&(ne=1),Lt.setLineWidth(ne*Pt()),Z.isLineSegments?Fe.setMode(z.LINES):Z.isLineLoop?Fe.setMode(z.LINE_LOOP):Fe.setMode(z.LINE_STRIP)}else Z.isPoints?Fe.setMode(z.POINTS):Z.isSprite&&Fe.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)el("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))Fe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ne=Z._multiDrawStarts,Ze=Z._multiDrawCounts,Ce=Z._multiDrawCount,yn=Xt?$.get(Xt).bytesPerElement:1,ba=kt.get(it).currentProgram.getUniforms();for(let Qe=0;Qe<Ce;Qe++)ba.setValue(z,"_gl_DrawID",Qe),Fe.render(ne[Qe]/yn,Ze[Qe])}else if(Z.isInstancedMesh)Fe.renderInstances(xe,Oe,Z.count);else if(ot.isInstancedBufferGeometry){const ne=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ze=Math.min(ot.instanceCount,ne);Fe.renderInstances(xe,Oe,Ze)}else Fe.render(xe,Oe)};function Nn(R,q,ot){R.transparent===!0&&R.side===oi&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,xn(R,q,ot),R.side=is,R.needsUpdate=!0,xn(R,q,ot),R.side=oi):xn(R,q,ot)}this.compile=function(R,q,ot=null){ot===null&&(ot=R),N=Kt.get(ot),N.init(q),F.push(N),ot.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(N.pushLight(Z),Z.castShadow&&N.pushShadow(Z))}),R!==ot&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(N.pushLight(Z),Z.castShadow&&N.pushShadow(Z))}),N.setupLights();const it=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Rt=Z.material;if(Rt)if(Array.isArray(Rt))for(let Ot=0;Ot<Rt.length;Ot++){const Ft=Rt[Ot];Nn(Ft,ot,Z),it.add(Ft)}else Nn(Rt,ot,Z),it.add(Rt)}),N=F.pop(),it},this.compileAsync=function(R,q,ot=null){const it=this.compile(R,q,ot);return new Promise(Z=>{function Rt(){if(it.forEach(function(Ot){kt.get(Ot).currentProgram.isReady()&&it.delete(Ot)}),it.size===0){Z(R);return}setTimeout(Rt,10)}$t.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Zn=null;function sl(R){Zn&&Zn(R)}function Vr(){Mi.stop()}function Xr(){Mi.start()}const Mi=new v_;Mi.setAnimationLoop(sl),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){Zn=R,Dt.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},Dt.addEventListener("sessionstart",Vr),Dt.addEventListener("sessionend",Xr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){on("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(q),q=Dt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,q,C),N=Kt.get(R,F.length),N.init(q),F.push(N),Ut.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),at.setFromProjectionMatrix(Ut,Fi,q.reversedDepth),At=this.localClippingEnabled,dt=Wt.init(this.clippingPlanes,At),O=Ct.get(R,P.length),O.init(),P.push(O),Dt.enabled===!0&&Dt.isPresenting===!0){const Rt=D.xr.getDepthSensingMesh();Rt!==null&&as(Rt,q,-1/0,D.sortObjects)}as(R,q,0,D.sortObjects),O.finish(),D.sortObjects===!0&&O.sort(L,tt),Gt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Gt&&Tt.addToRenderList(O,R),this.info.render.frame++,dt===!0&&Wt.beginShadows();const ot=N.state.shadowsArray;Mt.render(ot,R,q),dt===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=O.opaque,Z=O.transmissive;if(N.setupLights(),q.isArrayCamera){const Rt=q.cameras;if(Z.length>0)for(let Ot=0,Ft=Rt.length;Ot<Ft;Ot++){const Xt=Rt[Ot];Wr(it,Z,R,Xt)}Gt&&Tt.render(R);for(let Ot=0,Ft=Rt.length;Ot<Ft;Ot++){const Xt=Rt[Ot];kr(O,R,Xt,Xt.viewport)}}else Z.length>0&&Wr(it,Z,R,q),Gt&&Tt.render(R),kr(O,R,q);C!==null&&w===0&&(ae.updateMultisampleRenderTarget(C),ae.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(D,R,q),V.resetDefaultState(),G=-1,Q=null,F.pop(),F.length>0?(N=F[F.length-1],dt===!0&&Wt.setGlobalState(D.clippingPlanes,N.state.camera)):N=null,P.pop(),P.length>0?O=P[P.length-1]:O=null};function as(R,q,ot,it){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||at.intersectsSprite(R)){it&&oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);const Ot=gt.update(R),Ft=R.material;Ft.visible&&O.push(R,Ot,Ft,ot,oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||at.intersectsObject(R))){const Ot=gt.update(R),Ft=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),oe.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),oe.copy(Ot.boundingSphere.center)),oe.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(Ft)){const Xt=Ot.groups;for(let se=0,le=Xt.length;se<le;se++){const te=Xt[se],xe=Ft[te.materialIndex];xe&&xe.visible&&O.push(R,Ot,xe,ot,oe.z,te)}}else Ft.visible&&O.push(R,Ot,Ft,ot,oe.z,null)}}const Rt=R.children;for(let Ot=0,Ft=Rt.length;Ot<Ft;Ot++)as(Rt[Ot],q,ot,it)}function kr(R,q,ot,it){const{opaque:Z,transmissive:Rt,transparent:Ot}=R;N.setupLightsView(ot),dt===!0&&Wt.setGlobalState(D.clippingPlanes,ot),it&&Lt.viewport(lt.copy(it)),Z.length>0&&Kn(Z,q,ot),Rt.length>0&&Kn(Rt,q,ot),Ot.length>0&&Kn(Ot,q,ot),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Wr(R,q,ot,it){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;N.state.transmissionRenderTarget[it.id]===void 0&&(N.state.transmissionRenderTarget[it.id]=new Os(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?Fr:Hi,minFilter:Us,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));const Rt=N.state.transmissionRenderTarget[it.id],Ot=it.viewport||lt;Rt.setSize(Ot.z*D.transmissionResolutionScale,Ot.w*D.transmissionResolutionScale);const Ft=D.getRenderTarget(),Xt=D.getActiveCubeFace(),se=D.getActiveMipmapLevel();D.setRenderTarget(Rt),D.getClearColor(B),W=D.getClearAlpha(),W<1&&D.setClearColor(16777215,.5),D.clear(),Gt&&Tt.render(ot);const le=D.toneMapping;D.toneMapping=es;const te=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),N.setupLightsView(it),dt===!0&&Wt.setGlobalState(D.clippingPlanes,it),Kn(R,ot,it),ae.updateMultisampleRenderTarget(Rt),ae.updateRenderTargetMipmap(Rt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Ne=0,Oe=q.length;Ne<Oe;Ne++){const Re=q[Ne],{object:Fe,geometry:ne,material:Ze,group:Ce}=Re;if(Ze.side===oi&&Fe.layers.test(it.layers)){const yn=Ze.side;Ze.side=jn,Ze.needsUpdate=!0,un(Fe,ot,it,ne,Ze,Ce),Ze.side=yn,Ze.needsUpdate=!0,xe=!0}}xe===!0&&(ae.updateMultisampleRenderTarget(Rt),ae.updateRenderTargetMipmap(Rt))}D.setRenderTarget(Ft,Xt,se),D.setClearColor(B,W),te!==void 0&&(it.viewport=te),D.toneMapping=le}function Kn(R,q,ot){const it=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Rt=R.length;Z<Rt;Z++){const Ot=R[Z],{object:Ft,geometry:Xt,group:se}=Ot;let le=Ot.material;le.allowOverride===!0&&it!==null&&(le=it),Ft.layers.test(ot.layers)&&un(Ft,q,ot,Xt,le,se)}}function un(R,q,ot,it,Z,Rt){R.onBeforeRender(D,q,ot,it,Z,Rt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(D,q,ot,it,R,Rt),Z.transparent===!0&&Z.side===oi&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,D.renderBufferDirect(ot,q,it,Z,R,Rt),Z.side=is,Z.needsUpdate=!0,D.renderBufferDirect(ot,q,it,Z,R,Rt),Z.side=oi):D.renderBufferDirect(ot,q,it,Z,R,Rt),R.onAfterRender(D,q,ot,it,Z,Rt)}function xn(R,q,ot){q.isScene!==!0&&(q=ie);const it=kt.get(R),Z=N.state.lights,Rt=N.state.shadowsArray,Ot=Z.state.version,Ft=rt.getParameters(R,Z.state,Rt,q,ot),Xt=rt.getProgramCacheKey(Ft);let se=it.programs;it.environment=R.isMeshStandardMaterial?q.environment:null,it.fog=q.fog,it.envMap=(R.isMeshStandardMaterial?E:U).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,se===void 0&&(R.addEventListener("dispose",ue),se=new Map,it.programs=se);let le=se.get(Xt);if(le!==void 0){if(it.currentProgram===le&&it.lightsStateVersion===Ot)return zs(R,Ft),le}else Ft.uniforms=rt.getUniforms(R),R.onBeforeCompile(Ft,D),le=rt.acquireProgram(Ft,Xt),se.set(Xt,le),it.uniforms=Ft.uniforms;const te=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(te.clippingPlanes=Wt.uniform),zs(R,Ft),it.needsLights=rl(R),it.lightsStateVersion=Ot,it.needsLights&&(te.ambientLightColor.value=Z.state.ambient,te.lightProbe.value=Z.state.probe,te.directionalLights.value=Z.state.directional,te.directionalLightShadows.value=Z.state.directionalShadow,te.spotLights.value=Z.state.spot,te.spotLightShadows.value=Z.state.spotShadow,te.rectAreaLights.value=Z.state.rectArea,te.ltc_1.value=Z.state.rectAreaLTC1,te.ltc_2.value=Z.state.rectAreaLTC2,te.pointLights.value=Z.state.point,te.pointLightShadows.value=Z.state.pointShadow,te.hemisphereLights.value=Z.state.hemi,te.directionalShadowMap.value=Z.state.directionalShadowMap,te.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,te.spotShadowMap.value=Z.state.spotShadowMap,te.spotLightMatrix.value=Z.state.spotLightMatrix,te.spotLightMap.value=Z.state.spotLightMap,te.pointShadowMap.value=Z.state.pointShadowMap,te.pointShadowMatrix.value=Z.state.pointShadowMatrix),it.currentProgram=le,it.uniformsList=null,le}function Vi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Wc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function zs(R,q){const ot=kt.get(R);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function su(R,q,ot,it,Z){q.isScene!==!0&&(q=ie),ae.resetTextureUnits();const Rt=q.fog,Ot=it.isMeshStandardMaterial?q.environment:null,Ft=C===null?D.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ir,Xt=(it.isMeshStandardMaterial?E:U).get(it.envMap||Ot),se=it.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,le=!!ot.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),te=!!ot.morphAttributes.position,xe=!!ot.morphAttributes.normal,Ne=!!ot.morphAttributes.color;let Oe=es;it.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Oe=D.toneMapping);const Re=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Fe=Re!==void 0?Re.length:0,ne=kt.get(it),Ze=N.state.lights;if(dt===!0&&(At===!0||R!==Q)){const bn=R===Q&&it.id===G;Wt.setState(it,R,bn)}let Ce=!1;it.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Ze.state.version||ne.outputColorSpace!==Ft||Z.isBatchedMesh&&ne.batching===!1||!Z.isBatchedMesh&&ne.batching===!0||Z.isBatchedMesh&&ne.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ne.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ne.instancing===!1||!Z.isInstancedMesh&&ne.instancing===!0||Z.isSkinnedMesh&&ne.skinning===!1||!Z.isSkinnedMesh&&ne.skinning===!0||Z.isInstancedMesh&&ne.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ne.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ne.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ne.instancingMorph===!1&&Z.morphTexture!==null||ne.envMap!==Xt||it.fog===!0&&ne.fog!==Rt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Wt.numPlanes||ne.numIntersection!==Wt.numIntersection)||ne.vertexAlphas!==se||ne.vertexTangents!==le||ne.morphTargets!==te||ne.morphNormals!==xe||ne.morphColors!==Ne||ne.toneMapping!==Oe||ne.morphTargetsCount!==Fe)&&(Ce=!0):(Ce=!0,ne.__version=it.version);let yn=ne.currentProgram;Ce===!0&&(yn=xn(it,q,Z));let ba=!1,Qe=!1,Xi=!1;const Je=yn.getUniforms(),Mn=ne.uniforms;if(Lt.useProgram(yn.program)&&(ba=!0,Qe=!0,Xi=!0),it.id!==G&&(G=it.id,Qe=!0),ba||Q!==R){Lt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Je.setValue(z,"projectionMatrix",R.projectionMatrix),Je.setValue(z,"viewMatrix",R.matrixWorldInverse);const An=Je.map.cameraPosition;An!==void 0&&An.setValue(z,Ht.setFromMatrixPosition(R.matrixWorld)),ye.logarithmicDepthBuffer&&Je.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Je.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),Q!==R&&(Q=R,Qe=!0,Xi=!0)}if(Z.isSkinnedMesh){Je.setOptional(z,Z,"bindMatrix"),Je.setOptional(z,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Je.setValue(z,"boneTexture",bn.boneTexture,ae))}Z.isBatchedMesh&&(Je.setOptional(z,Z,"batchingTexture"),Je.setValue(z,"batchingTexture",Z._matricesTexture,ae),Je.setOptional(z,Z,"batchingIdTexture"),Je.setValue(z,"batchingIdTexture",Z._indirectTexture,ae),Je.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Je.setValue(z,"batchingColorTexture",Z._colorsTexture,ae));const gn=ot.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Jt.update(Z,ot,yn),(Qe||ne.receiveShadow!==Z.receiveShadow)&&(ne.receiveShadow=Z.receiveShadow,Je.setValue(z,"receiveShadow",Z.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Mn.envMap.value=Xt,Mn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&q.environment!==null&&(Mn.envMapIntensity.value=q.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=vT()),Qe&&(Je.setValue(z,"toneMappingExposure",D.toneMappingExposure),ne.needsLights&&ru(Mn,Xi),Rt&&it.fog===!0&&Zt.refreshFogUniforms(Mn,Rt),Zt.refreshMaterialUniforms(Mn,it,ft,ut,N.state.transmissionRenderTarget[R.id]),Wc.upload(z,Vi(ne),Mn,ae)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Wc.upload(z,Vi(ne),Mn,ae),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Je.setValue(z,"center",Z.center),Je.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Je.setValue(z,"normalMatrix",Z.normalMatrix),Je.setValue(z,"modelMatrix",Z.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const bn=it.uniformsGroups;for(let An=0,Ni=bn.length;An<Ni;An++){const ki=bn[An];Nt.update(ki,yn),Nt.bind(ki,yn)}}return yn}function ru(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function rl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,q,ot){const it=kt.get(R);it.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),kt.get(R.texture).__webglTexture=q,kt.get(R.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ot,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ot=kt.get(R);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0};const ss=z.createFramebuffer();this.setRenderTarget=function(R,q=0,ot=0){C=R,j=q,w=ot;let it=!0,Z=null,Rt=!1,Ot=!1;if(R){const Xt=kt.get(R);if(Xt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(z.FRAMEBUFFER,null),it=!1;else if(Xt.__webglFramebuffer===void 0)ae.setupRenderTarget(R);else if(Xt.__hasExternalTextures)ae.rebindTextures(R,kt.get(R.texture).__webglTexture,kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(Xt.__boundDepthTexture!==te){if(te!==null&&kt.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(R)}}const se=R.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Ot=!0);const le=kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(le[q])?Z=le[q][ot]:Z=le[q],Rt=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?Z=kt.get(R).__webglMultisampledFramebuffer:Array.isArray(le)?Z=le[ot]:Z=le,lt.copy(R.viewport),pt.copy(R.scissor),ht=R.scissorTest}else lt.copy(yt).multiplyScalar(ft).floor(),pt.copy(bt).multiplyScalar(ft).floor(),ht=zt;if(ot!==0&&(Z=ss),Lt.bindFramebuffer(z.FRAMEBUFFER,Z)&&it&&Lt.drawBuffers(R,Z),Lt.viewport(lt),Lt.scissor(pt),Lt.setScissorTest(ht),Rt){const Xt=kt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Xt.__webglTexture,ot)}else if(Ot){const Xt=q;for(let se=0;se<R.textures.length;se++){const le=kt.get(R.textures[se]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+se,le.__webglTexture,ot,Xt)}}else if(R!==null&&ot!==0){const Xt=kt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xt.__webglTexture,ot)}G=-1},this.readRenderTargetPixels=function(R,q,ot,it,Z,Rt,Ot,Ft=0){if(!(R&&R.isWebGLRenderTarget)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Xt=Xt[Ot]),Xt){Lt.bindFramebuffer(z.FRAMEBUFFER,Xt);try{const se=R.textures[Ft],le=se.format,te=se.type;if(!ye.textureFormatReadable(le)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(te)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-it&&ot>=0&&ot<=R.height-Z&&(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ft),z.readPixels(q,ot,it,Z,ce.convert(le),ce.convert(te),Rt))}finally{const se=C!==null?kt.get(C).__webglFramebuffer:null;Lt.bindFramebuffer(z.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(R,q,ot,it,Z,Rt,Ot,Ft=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Xt=Xt[Ot]),Xt)if(q>=0&&q<=R.width-it&&ot>=0&&ot<=R.height-Z){Lt.bindFramebuffer(z.FRAMEBUFFER,Xt);const se=R.textures[Ft],le=se.format,te=se.type;if(!ye.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,xe),z.bufferData(z.PIXEL_PACK_BUFFER,Rt.byteLength,z.STREAM_READ),R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ft),z.readPixels(q,ot,it,Z,ce.convert(le),ce.convert(te),0);const Ne=C!==null?kt.get(C).__webglFramebuffer:null;Lt.bindFramebuffer(z.FRAMEBUFFER,Ne);const Oe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await wy(z,Oe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,xe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Rt),z.deleteBuffer(xe),z.deleteSync(Oe),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ot=0){const it=Math.pow(2,-ot),Z=Math.floor(R.image.width*it),Rt=Math.floor(R.image.height*it),Ot=q!==null?q.x:0,Ft=q!==null?q.y:0;ae.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,ot,0,0,Ot,Ft,Z,Rt),Lt.unbindTexture()};const qr=z.createFramebuffer(),Ma=z.createFramebuffer();this.copyTextureToTexture=function(R,q,ot=null,it=null,Z=0,Rt=null){Rt===null&&(Z!==0?(el("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=Z,Z=0):Rt=0);let Ot,Ft,Xt,se,le,te,xe,Ne,Oe;const Re=R.isCompressedTexture?R.mipmaps[Rt]:R.image;if(ot!==null)Ot=ot.max.x-ot.min.x,Ft=ot.max.y-ot.min.y,Xt=ot.isBox3?ot.max.z-ot.min.z:1,se=ot.min.x,le=ot.min.y,te=ot.isBox3?ot.min.z:0;else{const gn=Math.pow(2,-Z);Ot=Math.floor(Re.width*gn),Ft=Math.floor(Re.height*gn),R.isDataArrayTexture?Xt=Re.depth:R.isData3DTexture?Xt=Math.floor(Re.depth*gn):Xt=1,se=0,le=0,te=0}it!==null?(xe=it.x,Ne=it.y,Oe=it.z):(xe=0,Ne=0,Oe=0);const Fe=ce.convert(q.format),ne=ce.convert(q.type);let Ze;q.isData3DTexture?(ae.setTexture3D(q,0),Ze=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ae.setTexture2DArray(q,0),Ze=z.TEXTURE_2D_ARRAY):(ae.setTexture2D(q,0),Ze=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const Ce=z.getParameter(z.UNPACK_ROW_LENGTH),yn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ba=z.getParameter(z.UNPACK_SKIP_PIXELS),Qe=z.getParameter(z.UNPACK_SKIP_ROWS),Xi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Re.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Re.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,se),z.pixelStorei(z.UNPACK_SKIP_ROWS,le),z.pixelStorei(z.UNPACK_SKIP_IMAGES,te);const Je=R.isDataArrayTexture||R.isData3DTexture,Mn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const gn=kt.get(R),bn=kt.get(q),An=kt.get(gn.__renderTarget),Ni=kt.get(bn.__renderTarget);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,An.__webglFramebuffer),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let ki=0;ki<Xt;ki++)Je&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,kt.get(R).__webglTexture,Z,te+ki),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,kt.get(q).__webglTexture,Rt,Oe+ki)),z.blitFramebuffer(se,le,Ot,Ft,xe,Ne,Ot,Ft,z.DEPTH_BUFFER_BIT,z.NEAREST);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||kt.has(R)){const gn=kt.get(R),bn=kt.get(q);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,qr),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ma);for(let An=0;An<Xt;An++)Je?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,gn.__webglTexture,Z,te+An):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,gn.__webglTexture,Z),Mn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,bn.__webglTexture,Rt,Oe+An):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,bn.__webglTexture,Rt),Z!==0?z.blitFramebuffer(se,le,Ot,Ft,xe,Ne,Ot,Ft,z.COLOR_BUFFER_BIT,z.NEAREST):Mn?z.copyTexSubImage3D(Ze,Rt,xe,Ne,Oe+An,se,le,Ot,Ft):z.copyTexSubImage2D(Ze,Rt,xe,Ne,se,le,Ot,Ft);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Mn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Ze,Rt,xe,Ne,Oe,Ot,Ft,Xt,Fe,ne,Re.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(Ze,Rt,xe,Ne,Oe,Ot,Ft,Xt,Fe,Re.data):z.texSubImage3D(Ze,Rt,xe,Ne,Oe,Ot,Ft,Xt,Fe,ne,Re):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Rt,xe,Ne,Ot,Ft,Fe,ne,Re.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Rt,xe,Ne,Re.width,Re.height,Fe,Re.data):z.texSubImage2D(z.TEXTURE_2D,Rt,xe,Ne,Ot,Ft,Fe,ne,Re);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ce),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,yn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ba),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xi),Rt===0&&q.generateMipmaps&&z.generateMipmap(Ze),Lt.unbindTexture()},this.initRenderTarget=function(R){kt.get(R).__webglFramebuffer===void 0&&ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),Lt.unbindTexture()},this.resetState=function(){j=0,w=0,C=null,Lt.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ie._getUnpackColorSpace()}}var Ue=(o=>(o.SIMPLE_MODEL="Simple Model",o.SCATTERING="Rutherford Scattering",o.ISOTOPES="Isotopes",o.CONFIG="Electronic Configuration",o.HISTORY="History of the Atom",o))(Ue||{});const yT=()=>{const o=document.createElement("canvas");o.width=64,o.height=64;const t=o.getContext("2d");if(t){const i=t.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.2,"rgba(255, 255, 0, 1)"),i.addColorStop(.5,"rgba(255, 200, 0, 0.4)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=i,t.fillRect(0,0,64,64)}return new m_(o)},MT=()=>{const o=document.createElement("canvas");o.width=64,o.height=64;const t=o.getContext("2d");return t&&(t.beginPath(),t.arc(32,32,28,0,Math.PI*2),t.strokeStyle="#00ff00",t.lineWidth=4,t.stroke(),t.beginPath(),t.arc(32,32,10,0,Math.PI*2),t.fillStyle="#ccffcc",t.fill()),new m_(o)},bT=({config:o,activeModel:t,topic:i,isSimulating:s=!1,onStatsUpdate:l,simulationSpeed:c=1})=>{const d=he.useRef(null),h=he.useRef(null),m=he.useRef(null),p=he.useRef(null),g=he.useRef(null),_=he.useRef(s),S=he.useRef(c),y=he.useRef({passed:0,deflected:0,reflected:0}),b=he.useRef(i),T=he.useRef(t),M=he.useRef(o),x=he.useRef(null),O=he.useRef(null),N=he.useRef(null),P=he.useRef([]),F=he.useRef([]),D=he.useRef([]),I=he.useRef(0),j=he.useRef(!1),w=he.useRef({x:0,y:0}),C=he.useMemo(()=>yT(),[]),G=he.useMemo(()=>MT(),[]);he.useEffect(()=>{_.current=s},[s]),he.useEffect(()=>{S.current=c},[c]),he.useEffect(()=>{b.current=i},[i]),he.useEffect(()=>{T.current=t},[t]),he.useEffect(()=>{M.current=o},[o]),he.useEffect(()=>{if(!d.current)return;const W=new gM;h.current=W;const k=new ri(60,d.current.clientWidth/d.current.clientHeight,.1,1e3);p.current=k;const ut=new ST({antialias:!0,alpha:!0});ut.setSize(d.current.clientWidth,d.current.clientHeight),ut.setPixelRatio(window.devicePixelRatio),d.current.appendChild(ut.domElement),m.current=ut;const ft=new NM(4210752,1.5);W.add(ft);const L=new DM(16777215,2,100);L.position.set(10,20,10),W.add(L);const tt=new Ii;W.add(tt),g.current=tt;const yt=new Ii,bt=new Ii,zt=new Ii;tt.add(yt),tt.add(bt),tt.add(zt),x.current=yt,O.current=bt,N.current=zt;const at=setInterval(()=>{l&&(y.current.passed>0||y.current.deflected>0||y.current.reflected>0)&&(l({...y.current}),y.current={passed:0,deflected:0,reflected:0})},200),dt=()=>{const ie=b.current,Gt=T.current;if(ie!==Ue.SCATTERING&&(yt.rotation.y+=.002,yt.rotation.x+=.001),ie!==Ue.SCATTERING&&bt.visible&&(Gt==="Rutherford"?bt.children.forEach(Pt=>{Pt.rotation.z+=.02}):Gt==="Bohr"||Gt==="Modern"?bt.children.forEach(Pt=>{if(Pt.userData.isElectron){const{radius:z,speed:Yt}=Pt.userData;Pt.userData.angle=(Pt.userData.angle||0)+Yt,Pt.position.x=z*Math.cos(Pt.userData.angle),Pt.position.z=z*Math.sin(Pt.userData.angle)}}):Gt==="Thomson"&&(bt.rotation.y+=.005)),ie===Ue.SCATTERING){if(_.current){const z=S.current,Yt=1/4*z*.5,$t=60,ye=60;P.current.forEach(Lt=>{for(let U=0;U<4;U++){const{mesh:E,velocity:$}=Lt,xt=E.position.clone(),gt=xt.lengthSq(),rt=Math.sqrt(gt);if(rt<40&&rt>1){const Zt=xt.normalize(),Ct=$t/gt,Kt=Zt.multiplyScalar(Ct);$.add(Kt.multiplyScalar(Yt))}E.position.add($.clone().multiplyScalar(Yt))}const{mesh:Me,trail:kt}=Lt;if(kt.push(Me.position.clone()),kt.length>25&&kt.shift(),Me.position.length()>ye){const U=Lt.velocity.clone().normalize(),E=new J(1,0,0),$=U.angleTo(E),xt=qy.radToDeg($);let gt="passed";xt>90?gt="reflected":xt>10&&(gt="deflected"),gt==="passed"?y.current.passed++:gt==="deflected"?y.current.deflected++:y.current.reflected++;const rt=Math.atan2(-Me.position.z,Me.position.x);Q(rt),lt(Me.position.clone(),zt),ht(Lt),Lt.trail=[]}pt(Lt.trailLine,Lt.trail)})}D.current.forEach(Pt=>{if(Pt.userData.glow>0){Pt.userData.glow-=.05;const z=Math.max(.1,Pt.userData.glow);Pt.material.emissive.setHex(16711680),Pt.material.emissiveIntensity=z,Pt.userData.glow<=0&&(Pt.material.emissive.setHex(0),Pt.material.emissiveIntensity=0)}});for(let Pt=F.current.length-1;Pt>=0;Pt--){const z=F.current[Pt];z.material.opacity-=.05,z.scale.addScalar(.2),z.material.opacity<=0&&(zt.remove(z),F.current.splice(Pt,1))}}ut.render(W,k),I.current=requestAnimationFrame(dt)};I.current=requestAnimationFrame(dt);const At=ie=>{j.current=!0,w.current={x:ie.clientX,y:ie.clientY}},Ut=ie=>{if(j.current&&g.current){const Gt={x:ie.clientX-w.current.x,y:ie.clientY-w.current.y};g.current.rotation.y+=Gt.x*.005,w.current={x:ie.clientX,y:ie.clientY}}},Ht=()=>{j.current=!1},oe=ie=>{if(ie.preventDefault(),!p.current)return;const Gt=p.current,Pt=Gt.position.length(),z=Math.sign(ie.deltaY)*5;let Yt=Pt+z;Yt=Math.max(20,Math.min(Yt,300));const $t=Yt/Pt;Gt.position.multiplyScalar($t)};return d.current.addEventListener("mousedown",At),d.current.addEventListener("wheel",oe,{passive:!1}),window.addEventListener("mousemove",Ut),window.addEventListener("mouseup",Ht),()=>{clearInterval(at),cancelAnimationFrame(I.current),d.current&&(d.current.removeEventListener("mousedown",At),d.current.removeEventListener("wheel",oe)),window.removeEventListener("mousemove",Ut),window.removeEventListener("mouseup",Ht),d.current&&m.current&&d.current.removeChild(m.current.domElement),ut.dispose()}},[]),he.useEffect(()=>{!h.current||!x.current||B(b.current,T.current,M.current,x.current,O.current,N.current,h.current,p.current,g.current)},[i,t,o]);const Q=W=>{let k=null,ut=1e3;D.current.forEach(ft=>{let L=Math.abs(ft.userData.angle-W);L>Math.PI&&(L=2*Math.PI-L),L<ut&&(ut=L,k=ft)}),k&&ut<.5&&(k.userData.glow=1)},lt=(W,k)=>{const ut=new h_({map:G,transparent:!0,opacity:1,color:65280,blending:qc}),ft=new vM(ut);ft.position.copy(W),ft.scale.set(4,4,4),k.add(ft),F.current.push(ft)},pt=(W,k)=>{const ut=new Float32Array(k.length*3);for(let ft=0;ft<k.length;ft++)ut[ft*3]=k[ft].x,ut[ft*3+1]=k[ft].y,ut[ft*3+2]=k[ft].z;W.geometry.setAttribute("position",new yi(ut,3)),W.geometry.setDrawRange(0,k.length)},ht=W=>{const ut=Math.random();let ft,L;ut>.95?ft=Math.random()*.5:ut>.85?ft=1.5+Math.random()*4.5:ft=6+Math.random()*10,L=Math.random()*Math.PI*2;const tt=ft*Math.cos(L),yt=ft*Math.sin(L);W.mesh.position.set(-50,tt,yt),W.velocity.set(6,0,0),W.trail=[]},B=(W,k,ut,ft,L,tt,yt,bt,zt)=>{zt.rotation.set(0,0,0),ft.clear(),L.clear(),tt.clear(),P.current=[],F.current=[],D.current=[],y.current={passed:0,deflected:0,reflected:0},W===Ue.SCATTERING?(bt.position.set(0,140,0),bt.lookAt(0,0,0),bt.rotation.set(-Math.PI/2,0,0),yt.background=new De(0)):(bt.position.set(0,20,35),bt.lookAt(0,0,0),bt.rotation.z=0,yt.background=new De(988970));const at=new wi({color:16724787,roughness:.2,emissive:5570560,emissiveIntensity:.4}),dt=new wi({color:8947848,roughness:.2}),At=new wi({color:3377407,emissive:3377407,emissiveIntensity:1});if(W===Ue.SCATTERING){L.visible=!1,tt.visible=!0;const Ut=new Ii;tt.add(Ut);const Ht=new an(new ns(12,8,8),new wi({color:4473924}));Ht.position.set(-56,0,0),Ut.add(Ht);const oe=new an(new Jh(1.5,1.5,6),new wi({color:2236962}));oe.rotation.z=Math.PI/2,oe.position.set(-50,0,0),Ut.add(oe);const ie=new wi({color:3359061,side:oi}),Gt=new an(new Ns(.5,30),ie);Gt.position.set(-30,0,-10),Ut.add(Gt);const Pt=new an(new Ns(.5,30),ie);Pt.position.set(-30,0,10),Ut.add(Pt);const z=48,Yt=60,$t=new ns(2,6,5);for(let gt=0;gt<z;gt++){const rt=gt/z*Math.PI*2,Zt=Math.abs(Math.PI-rt),Ct=Math.abs(-Math.PI-rt);if(Zt<.2||Ct<.2)continue;const Kt=new wi({color:3355443,emissive:0}),Wt=new an($t,Kt),Mt=Yt*Math.cos(rt),Tt=-Yt*Math.sin(rt);Wt.position.set(Mt,0,Tt),Wt.lookAt(0,0,0),Wt.userData={angle:Math.atan2(-Tt,Mt),glow:0},Ut.add(Wt),D.current.push(Wt)}const ye=new tu(Yt-.5,Yt+.5,64),Lt=new an(ye,new Ko({color:2236962,side:oi}));Lt.rotation.x=Math.PI/2,Ut.add(Lt);const Me=new an(new ns(.1,20,20),new wi({color:16766720,transparent:!0,opacity:.1,emissive:16766720,emissiveIntensity:.1,depthWrite:!1}));Ut.add(Me);const kt=new ma(1.2,16,16),ae=new wi({color:16755200,emissive:16729088,emissiveIntensity:.8}),U=new an(kt,ae);ft.add(U);const E=new Ns(1.5,1.5),$=new Ko({map:C,color:16776960,transparent:!0,blending:qc,depthWrite:!1,side:oi}),xt=new Bh({color:16776960,opacity:.3,transparent:!0});for(let gt=0;gt<100;gt++){const rt=new an(E,$);rt.rotation.x=-Math.PI/2,tt.add(rt);const Zt=new Gn,Ct=new xg(Zt,xt);Ct.frustumCulled=!1,tt.add(Ct);const Kt={mesh:rt,velocity:new J,trail:[],trailLine:Ct};ht(Kt),Kt.mesh.position.x=-50-Math.random()*50,P.current.push(Kt)}}else{L.visible=!0,tt.visible=!1;const Ut=k==="Rutherford"?ut.protons:ut.protons+ut.neutrons,Ht=Math.cbrt(Ut)*1.5,oe=new ma(1,16,16);if(k==="Dalton"){const ie=new ma(5,32,32),Gt=new wi({color:9055202});ft.add(new an(ie,Gt))}else if(k==="Thomson"){const ie=new ma(6,32,32),Gt=new wi({color:16764108,transparent:!0,opacity:.4});ft.add(new an(ie,Gt));for(let Pt=0;Pt<ut.electrons;Pt++){const z=new an(new ma(.4),At),Yt=Math.random()*5,$t=Math.random()*Math.PI*2,ye=Math.random()*Math.PI;z.position.setFromSphericalCoords(Yt,ye,$t),L.add(z)}}else for(let ie=0;ie<Ut;ie++){const Gt=ie<ut.protons;if(!Gt&&(k==="Rutherford"||k==="Bohr"))continue;const Pt=new an(oe,Gt?at:dt),z=Math.random()*Ht,Yt=Math.random()*Math.PI*2,$t=Math.random()*Math.PI;Pt.position.setFromSphericalCoords(z,$t,Yt),ft.add(Pt)}if(k==="Bohr"||k==="Modern"){const ie=[2,8,8,18];let Gt=ut.electrons;ie.forEach((Pt,z)=>{if(Gt<=0)return;const Yt=Math.min(Gt,Pt),$t=8+z*4,ye=new tu($t-.08,$t+.08,64),Lt=new an(ye,new Ko({color:16777215,side:oi,opacity:.3,transparent:!0}));Lt.rotation.x=Math.PI/2,L.add(Lt);const Me=.02-z*.003;for(let kt=0;kt<Yt;kt++){const ae=new an(new ma(.5),At),U=kt/Yt*Math.PI*2;ae.userData={isElectron:!0,radius:$t,angle:U,speed:Me*(z%2===0?1:-1)},ae.position.set(Math.cos(U)*$t,0,Math.sin(U)*$t),L.add(ae)}Gt-=Yt})}else if(k==="Rutherford")for(let ie=0;ie<ut.electrons;ie++){const Gt=new an(new ma(.5),At),Pt=new Ii,z=8+Math.random()*5;Gt.position.x=z,Pt.add(Gt),Pt.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),L.add(Pt);const Yt=new Gn().setFromPoints(new TM(0,0,z,z,0,2*Math.PI,!1,0).getPoints(64)),$t=new xg(Yt,new Bh({color:16777215,opacity:.1,transparent:!0}));Pt.add($t)}}};return he.useEffect(()=>{const W=()=>{d.current&&p.current&&m.current&&(p.current.aspect=d.current.clientWidth/d.current.clientHeight,p.current.updateProjectionMatrix(),m.current.setSize(d.current.clientWidth,d.current.clientHeight))};return window.addEventListener("resize",W),()=>window.removeEventListener("resize",W)},[]),K.jsx("div",{ref:d,className:"w-full h-full bg-black cursor-move",title:"Click and drag to rotate view, Scroll to Zoom"})},ET={protons:6,neutrons:6,electrons:6,symbol:"C",name:"Carbon"},TT={[Ue.SIMPLE_MODEL]:"Atoms consist of a central nucleus, containing protons and neutrons, surrounded by electrons in shells. The nucleus is very small compared to the overall size of the atom.",[Ue.SCATTERING]:"In 1909, Rutherford fired alpha particles at thin gold foil. Most passed straight through (atom is mostly empty space), but some were deflected by the positive nucleus.",[Ue.ISOTOPES]:"Isotopes are atoms of the same element with different numbers of neutrons. They have the same chemical properties but different physical properties (like mass).",[Ue.CONFIG]:"Electrons occupy energy levels (shells). The lowest energy levels are filled first. Capacity: 1st shell: 2, 2nd shell: 8, 3rd shell: 8 (for GCSE purposes).",[Ue.HISTORY]:"Our understanding of the atom has changed over time as new experimental evidence has been found. Select a model below to see how it looked."},AT=[{year:"1803",scientist:"John Dalton",discovery:"Solid Sphere Model",modelName:"Dalton Model",description:"Atoms are solid spheres that cannot be divided.",modelId:"Dalton"},{year:"1897",scientist:"J.J. Thomson",discovery:"The Electron",modelName:"Plum Pudding Model",description:"The atom is a ball of positive charge with negative electrons embedded in it.",modelId:"Thomson"},{year:"1909",scientist:"Ernest Rutherford",discovery:"The Nucleus",modelName:"Nuclear Model",description:"Alpha scattering experiment showed mass is concentrated at the center (nucleus) and the atom is mostly empty space.",modelId:"Rutherford"},{year:"1913",scientist:"Niels Bohr",discovery:"Electron Shells",modelName:"Bohr Model",description:"Electrons orbit the nucleus at specific distances (energy levels).",modelId:"Bohr"},{year:"1932",scientist:"James Chadwick",discovery:"The Neutron",modelName:"Modern Model",description:"Provided evidence for neutral particles in the nucleus (neutrons).",modelId:"Modern"}],RT=({topic:o,config:t,setConfig:i,activeModel:s,setActiveModel:l,onToggleDiagram:c,scatteringStats:d,isSimulating:h,setIsSimulating:m,onResetSimulation:p,simulationSpeed:g=1,setSimulationSpeed:_})=>{const S=(b,T)=>{i(M=>({...M,[b]:Math.max(0,T)}))},y={1:"Hydrogen",2:"Helium",3:"Lithium",4:"Beryllium",5:"Boron",6:"Carbon",7:"Nitrogen",8:"Oxygen",9:"Fluorine",10:"Neon",11:"Sodium",12:"Magnesium",13:"Aluminum",14:"Silicon",15:"Phosphorus",16:"Sulfur",17:"Chlorine",18:"Argon",19:"Potassium",20:"Calcium",79:"Gold"};return he.useEffect(()=>{const b=y[t.protons]||"Unknown/Custom";i(T=>({...T,name:b}))},[t.protons]),K.jsxs("div",{className:"flex flex-col h-full bg-slate-900 border-l border-slate-700 overflow-hidden",children:[K.jsxs("div",{className:"p-6 bg-slate-800 border-b border-slate-700 shadow-lg z-10",children:[K.jsxs("div",{className:"flex justify-between items-start mb-4",children:[K.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[K.jsx("i",{className:"fas fa-atom text-cyan-400"})," ",t.name,K.jsxs("span",{className:"text-sm font-normal text-slate-400",children:["(",t.symbol,")"]})]}),K.jsxs("button",{onClick:c,className:"bg-cyan-600 hover:bg-cyan-500 text-white text-xs px-3 py-1.5 rounded shadow flex items-center gap-2 transition-colors",title:"View 2D Diagram",children:[K.jsx("i",{className:"fas fa-pencil-alt"})," Show Diagram"]})]}),K.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-4",children:[K.jsxs("div",{className:"text-center bg-slate-700/50 p-2 rounded-lg",children:[K.jsx("div",{className:"text-xs text-red-400 font-bold uppercase tracking-wider mb-1",children:"Protons"}),K.jsxs("div",{className:"flex items-center justify-center gap-2",children:[K.jsx("button",{onClick:()=>S("protons",t.protons-1),className:"w-6 h-6 rounded bg-slate-600 hover:bg-slate-500 text-white flex items-center justify-center",children:"-"}),K.jsx("span",{className:"text-xl font-mono w-8",children:t.protons}),K.jsx("button",{onClick:()=>S("protons",t.protons+1),className:"w-6 h-6 rounded bg-slate-600 hover:bg-slate-500 text-white flex items-center justify-center",children:"+"})]})]}),K.jsxs("div",{className:"text-center bg-slate-700/50 p-2 rounded-lg",children:[K.jsx("div",{className:"text-xs text-gray-400 font-bold uppercase tracking-wider mb-1",children:"Neutrons"}),K.jsxs("div",{className:"flex items-center justify-center gap-2",children:[K.jsx("button",{onClick:()=>S("neutrons",t.neutrons-1),className:"w-6 h-6 rounded bg-slate-600 hover:bg-slate-500 text-white flex items-center justify-center",children:"-"}),K.jsx("span",{className:"text-xl font-mono w-8",children:t.neutrons}),K.jsx("button",{onClick:()=>S("neutrons",t.neutrons+1),className:"w-6 h-6 rounded bg-slate-600 hover:bg-slate-500 text-white flex items-center justify-center",children:"+"})]})]}),K.jsxs("div",{className:"text-center bg-slate-700/50 p-2 rounded-lg",children:[K.jsx("div",{className:"text-xs text-blue-400 font-bold uppercase tracking-wider mb-1",children:"Electrons"}),K.jsxs("div",{className:"flex items-center justify-center gap-2",children:[K.jsx("button",{onClick:()=>S("electrons",t.electrons-1),className:"w-6 h-6 rounded bg-slate-600 hover:bg-slate-500 text-white flex items-center justify-center",children:"-"}),K.jsx("span",{className:"text-xl font-mono w-8",children:t.electrons}),K.jsx("button",{onClick:()=>S("electrons",t.electrons+1),className:"w-6 h-6 rounded bg-slate-600 hover:bg-slate-500 text-white flex items-center justify-center",children:"+"})]})]})]}),K.jsxs("div",{className:"flex justify-between text-xs text-slate-400 px-2",children:[K.jsxs("span",{children:["Mass Number: ",K.jsx("strong",{className:"text-white",children:t.protons+t.neutrons})]}),K.jsxs("span",{children:["Net Charge: ",K.jsxs("strong",{className:t.protons===t.electrons?"text-green-400":"text-yellow-400",children:[t.protons-t.electrons>0?"+":"",t.protons-t.electrons]})]})]})]}),K.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[K.jsxs("div",{className:"border-b border-slate-700 pb-4",children:[K.jsx("h3",{className:"text-xl font-bold text-cyan-400 mb-2",children:o}),K.jsx("p",{className:"text-slate-300 leading-relaxed text-sm",children:TT[o]})]}),o===Ue.SCATTERING&&K.jsxs("div",{className:"bg-slate-800 rounded-lg p-4 border border-slate-600 shadow-inner",children:[K.jsxs("div",{className:"flex justify-between items-center mb-4",children:[K.jsx("h4",{className:"font-bold text-white text-sm",children:"Experimental Results"}),K.jsxs("div",{className:"flex gap-2",children:[K.jsx("button",{onClick:()=>m(!h),className:`text-xs px-3 py-1 rounded font-bold transition-colors ${h?"bg-red-500 hover:bg-red-600 text-white":"bg-green-500 hover:bg-green-600 text-white"}`,children:h?K.jsxs(K.Fragment,{children:[K.jsx("i",{className:"fas fa-pause mr-1"})," Pause"]}):K.jsxs(K.Fragment,{children:[K.jsx("i",{className:"fas fa-play mr-1"})," Start"]})}),K.jsx("button",{onClick:p,className:"bg-slate-600 hover:bg-slate-500 text-white text-xs px-3 py-1 rounded transition-colors",title:"Reset Counts",children:K.jsx("i",{className:"fas fa-undo"})})]})]}),K.jsxs("div",{className:"mb-4 bg-slate-700/30 p-2 rounded",children:[K.jsxs("div",{className:"flex justify-between items-center mb-1",children:[K.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Particle Speed"}),K.jsxs("span",{className:"text-xs text-cyan-400 font-mono",children:[g.toFixed(1),"x"]})]}),K.jsx("input",{type:"range",min:"0.1",max:"2.0",step:"0.1",value:g,onChange:b=>_&&_(parseFloat(b.target.value)),className:"w-full h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-cyan-500"})]}),K.jsxs("table",{className:"w-full text-sm text-left",children:[K.jsx("thead",{className:"text-xs text-slate-400 uppercase bg-slate-700/50",children:K.jsxs("tr",{children:[K.jsx("th",{className:"px-3 py-2 rounded-l",children:"Result"}),K.jsx("th",{className:"px-3 py-2 text-right",children:"Count"}),K.jsx("th",{className:"px-3 py-2 text-right rounded-r",children:"%"})]})}),K.jsxs("tbody",{className:"divide-y divide-slate-700",children:[K.jsxs("tr",{className:"bg-slate-800/30",children:[K.jsx("td",{className:"px-3 py-2 font-medium text-green-400",children:"Passed Straight Through"}),K.jsx("td",{className:"px-3 py-2 text-right font-mono",children:d.passed}),K.jsxs("td",{className:"px-3 py-2 text-right font-mono text-slate-400",children:[d.total>0?(d.passed/d.total*100).toFixed(1):"0.0","%"]})]}),K.jsxs("tr",{className:"bg-slate-800/30",children:[K.jsx("td",{className:"px-3 py-2 font-medium text-yellow-400",children:"Deflected (Small Angle)"}),K.jsx("td",{className:"px-3 py-2 text-right font-mono",children:d.deflected}),K.jsxs("td",{className:"px-3 py-2 text-right font-mono text-slate-400",children:[d.total>0?(d.deflected/d.total*100).toFixed(1):"0.0","%"]})]}),K.jsxs("tr",{className:"bg-slate-800/30",children:[K.jsx("td",{className:"px-3 py-2 font-medium text-red-400",children:"Reflected (Large Angle)"}),K.jsx("td",{className:"px-3 py-2 text-right font-mono",children:d.reflected}),K.jsxs("td",{className:"px-3 py-2 text-right font-mono text-slate-400",children:[d.total>0?(d.reflected/d.total*100).toFixed(1):"0.0","%"]})]}),K.jsxs("tr",{className:"bg-slate-700/50 font-bold",children:[K.jsx("td",{className:"px-3 py-2 text-white",children:"Total Particles"}),K.jsx("td",{className:"px-3 py-2 text-right text-white font-mono",children:d.total}),K.jsx("td",{className:"px-3 py-2"})]})]})]}),K.jsx("div",{className:"mt-3 text-xs text-slate-400 italic",children:"* Note: In reality, only about 1 in 8000 particles reflects back. We have increased the probability here for demonstration."})]}),K.jsxs("div",{className:"bg-slate-800/50 rounded-lg p-4 border border-slate-700",children:[K.jsxs("h4",{className:"font-bold text-white text-sm mb-2",children:[K.jsx("i",{className:"fas fa-info-circle text-blue-400 mr-2"}),"Key Facts"]}),K.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[o===Ue.SIMPLE_MODEL&&K.jsx("li",{children:"The nucleus contains almost all the mass."}),o===Ue.SCATTERING&&K.jsx("li",{children:"Alpha particles (positively charged) were fired at gold foil."}),o===Ue.SCATTERING&&K.jsx("li",{children:"Most went straight through → Atom is empty space."}),o===Ue.SCATTERING&&K.jsx("li",{children:"Some deflected → Small, dense, positive nucleus."}),o===Ue.ISOTOPES&&K.jsx("li",{children:"Isotopes usually have the same electron configuration."}),o===Ue.CONFIG&&K.jsx("li",{children:"First shell holds 2 electrons."}),o===Ue.CONFIG&&K.jsx("li",{children:"Second and third shells hold 8 electrons."}),o===Ue.HISTORY&&K.jsx("li",{children:"Click the timeline items below to change the 3D model."}),!Object.values(Ue).includes(o)&&K.jsx("li",{children:"Explore the properties using the controls above."})]})]}),o===Ue.HISTORY&&K.jsxs("div",{className:"space-y-4",children:[K.jsx("h4",{className:"font-bold text-white border-b border-slate-700 pb-2",children:"Timeline (Click to View)"}),AT.map((b,T)=>K.jsxs("button",{onClick:()=>l(b.modelId),className:`w-full text-left relative pl-4 border-l-2 transition-all hover:bg-slate-800/50 p-2 rounded
                  ${s===b.modelId?"border-cyan-500 bg-slate-800":"border-slate-600"}
                `,children:[K.jsx("div",{className:`absolute w-3 h-3 rounded-full -left-[7px] top-4 
                  ${s===b.modelId?"bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]":"bg-slate-600"}`}),K.jsxs("div",{className:`text-xs font-bold ${s===b.modelId?"text-cyan-400":"text-slate-500"}`,children:[b.year," - ",b.scientist]}),K.jsx("div",{className:"text-sm font-bold text-white",children:b.modelName}),K.jsx("div",{className:"text-xs text-slate-400 mt-1",children:b.description})]},T))]}),o===Ue.CONFIG&&K.jsxs("div",{className:"bg-slate-800 p-4 rounded border border-slate-700",children:[K.jsx("h4",{className:"font-bold text-white mb-2 text-sm",children:"Electron Configuration"}),K.jsx("div",{className:"text-2xl font-mono text-center text-cyan-300 tracking-widest",children:(()=>{const b=[];let T=t.electrons;return[2,8,8,18].forEach(M=>{if(T<=0)return;const x=Math.min(T,M);b.push(x),T-=x}),b.join(".")})()}),K.jsx("p",{className:"text-xs text-center text-slate-400 mt-2",children:"Electrons per shell (inner to outer)"})]})]})]})},CT=({config:o,onClose:t})=>{const{protons:i,neutrons:s,electrons:l,symbol:c}=o,h=(S=>{const y=[],b=[2,8,8,2];let T=S;for(const M of b){if(T<=0)break;y.push(Math.min(T,M)),T-=Math.min(T,M)}return y})(l),p=i+s<40,g=[];if(p){const S=Array(i).fill("p"),y=Array(s).fill("n"),b=[...S,...y];b.sort((T,M)=>.5-Math.random());for(let T=0;T<b.length;T++){const M=b[T],x=T*2.39996,O=5*Math.sqrt(T),N=O*Math.cos(x),P=O*Math.sin(x);g.push({x:N,y:P,type:M,id:T})}}const _=(S,y,b)=>K.jsx("text",{x:S,y,textAnchor:"middle",dominantBaseline:"middle",fill:"#ef4444",fontSize:"16",fontWeight:"bold",style:{pointerEvents:"none",fontFamily:"sans-serif"},children:"x"},b);return K.jsxs("div",{className:"absolute top-20 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur text-slate-900 p-6 rounded-xl shadow-2xl z-50 flex flex-col items-center border border-slate-300 animate-[fadeIn_0.3s_ease-out]",children:[K.jsxs("div",{className:"flex justify-between w-full items-center mb-2 gap-8",children:[K.jsx("h3",{className:"font-bold text-lg uppercase tracking-wider text-slate-800",children:"Dot & Cross Diagram"}),K.jsx("button",{onClick:t,className:"w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 text-slate-500 transition-colors",children:K.jsx("i",{className:"fas fa-times"})})]}),K.jsxs("svg",{width:"320",height:"320",viewBox:"-160 -160 320 320",className:"overflow-visible my-2",children:[p?K.jsx("g",{children:g.map(S=>K.jsxs("g",{transform:`translate(${S.x}, ${S.y})`,children:[K.jsx("circle",{r:"4.5",fill:S.type==="p"?"#ef4444":"#64748b",stroke:"white",strokeWidth:"1"}),K.jsx("text",{y:"1.5",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"5",fontWeight:"bold",style:{fontFamily:"Arial"},children:S.type==="p"?"P":"N"})]},S.id))}):K.jsxs("g",{children:[K.jsx("circle",{cx:"0",cy:"0",r:"25",fill:"#0f172a"}),K.jsxs("text",{x:"0",y:"-7",textAnchor:"middle",dominantBaseline:"middle",fill:"#ef4444",fontSize:"12",fontWeight:"bold",children:[i,"p"]}),K.jsxs("text",{x:"0",y:"7",textAnchor:"middle",dominantBaseline:"middle",fill:"#94a3b8",fontSize:"12",fontWeight:"bold",children:[s,"n"]})]}),h.map((S,y)=>{const b=60+y*35,T=K.jsx("circle",{cx:"0",cy:"0",r:b,fill:"none",stroke:"#64748b",strokeWidth:"1.5",strokeDasharray:"4 4"},`shell-${y}`),M=[];for(let x=0;x<S;x++){let O=0,N=0,P=0;if(y===0)O=x===0?-90:90;else{const j=x%4,w=x>=4;if(O=-90+j*90,S>4){const G=w?10:-10;j===0&&(N=G),j===1&&(P=G),j===2&&(N=-G),j===3&&(P=-G)}}const F=O*(Math.PI/180),D=b*Math.cos(F)+N,I=b*Math.sin(F)+P;M.push(_(D,I,`e-${y}-${x}`))}return K.jsxs("g",{children:[T,M]},y)})]}),K.jsxs("div",{className:"bg-slate-100 px-3 py-2 rounded text-xs text-slate-600 font-mono text-center w-full",children:["Configuration: ",K.jsx("strong",{className:"text-slate-900",children:h.join(".")})]})]})},wT=()=>{const[o,t]=he.useState(Ue.SIMPLE_MODEL),[i,s]=he.useState("Modern"),[l,c]=he.useState(ET),[d,h]=he.useState(!1),[m,p]=he.useState(!1),[g,_]=he.useState(!1),[S,y]=he.useState(!1),[b,T]=he.useState(1),[M,x]=he.useState({passed:0,deflected:0,reflected:0,total:0});he.useEffect(()=>{o!==Ue.HISTORY&&s("Modern")},[o]),he.useEffect(()=>{o===Ue.SCATTERING&&(x({passed:0,deflected:0,reflected:0,total:0}),y(!1),T(1))},[o]);const O=he.useCallback(F=>{x(D=>({passed:D.passed+(F.passed||0),deflected:D.deflected+(F.deflected||0),reflected:D.reflected+(F.reflected||0),total:D.total+(F.passed||0)+(F.deflected||0)+(F.reflected||0)}))},[]),N=()=>{x({passed:0,deflected:0,reflected:0,total:0})},P=F=>{switch(F){case Ue.SIMPLE_MODEL:return"fa-cube";case Ue.SCATTERING:return"fa-bullseye";case Ue.ISOTOPES:return"fa-balance-scale";case Ue.CONFIG:return"fa-layer-group";case Ue.HISTORY:return"fa-history";default:return"fa-atom"}};return K.jsxs("div",{className:"w-full h-screen bg-black flex flex-col md:flex-row overflow-hidden relative",children:[K.jsx("button",{className:"md:hidden absolute top-4 left-4 z-50 text-white bg-slate-800 p-2 rounded shadow border border-slate-700",onClick:()=>h(!d),children:K.jsx("i",{className:`fas ${d?"fa-times":"fa-bars"}`})}),K.jsxs("nav",{className:`
        absolute md:relative z-40 h-full bg-slate-900 border-r border-slate-700 transform transition-all duration-300 ease-in-out
        ${d?"translate-x-0":"-translate-x-full"} md:translate-x-0
        ${m?"w-16":"w-64"}
        flex flex-col
      `,children:[K.jsxs("div",{className:`p-4 border-b border-slate-800 bg-slate-900 flex items-center justify-between ${m?"flex-col gap-4":""}`,children:[!m&&K.jsxs("div",{children:[K.jsxs("h1",{className:"text-xl font-bold text-cyan-400 tracking-wider",children:["NeuroLab",K.jsx]}),K.jsx("p",{className:"text-[10px] text-slate-500 mt-1 uppercase tracking-widest",children:"Atomic Architect"})]}),m&&K.jsx("i",{className:"fas fa-atom text-cyan-400 text-2xl mb-2 animate-spin-slow"}),K.jsx("button",{onClick:()=>p(!m),className:"text-slate-500 hover:text-white transition-colors hidden md:block",title:m?"Expand Sidebar":"Collapse Sidebar",children:K.jsx("i",{className:`fas ${m?"fa-chevron-right":"fa-chevron-left"}`})})]}),K.jsx("div",{className:"flex-1 overflow-y-auto py-4 overflow-x-hidden",children:Object.values(Ue).map(F=>K.jsxs("button",{onClick:()=>{t(F),h(!1)},className:`
                w-full text-left py-4 relative group transition-all
                ${m?"px-0 text-center":"px-6"}
                ${o===F?"bg-slate-800 text-cyan-400":"text-slate-400 hover:text-white hover:bg-slate-800/50"}
              `,title:m?F:"",children:[o===F&&K.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-cyan-500"}),K.jsxs("div",{className:"flex items-center gap-4",children:[K.jsx("i",{className:`fas ${P(F)} text-lg ${m?"mx-auto":""} ${o===F?"text-cyan-400":"text-slate-500 group-hover:text-white"}`}),!m&&K.jsx("span",{className:"text-sm font-medium truncate",children:F})]})]},F))}),!m&&K.jsx("div",{className:"p-4 border-t border-slate-800 text-[10px] text-slate-600 text-center",children:"Powered by Three.js & React"})]}),K.jsxs("main",{className:"flex-1 flex flex-col md:flex-row relative bg-black",children:[K.jsxs("div",{className:"flex-1 h-1/2 md:h-full relative overflow-hidden",children:[g&&K.jsx(CT,{config:l,onClose:()=>_(!1)}),K.jsx("div",{className:"absolute top-4 right-4 pointer-events-none text-right z-10 hidden md:block",children:K.jsxs("div",{className:"text-xs text-slate-400 bg-black/80 border border-slate-800 p-3 rounded backdrop-blur-md shadow-xl",children:[K.jsx("div",{className:"font-bold text-slate-200 mb-2 border-b border-slate-700 pb-1",children:o===Ue.SCATTERING?"Experiment Legend":`${i} Model`}),o===Ue.SCATTERING?K.jsxs("div",{className:"space-y-1",children:[K.jsxs("div",{className:"flex items-center justify-end gap-2",children:[K.jsx("span",{className:"text-gray-300",children:"Alpha Particle"})," ",K.jsx("span",{className:"w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)] inline-block"})]}),K.jsxs("div",{className:"flex items-center justify-end gap-2",children:[K.jsx("span",{className:"text-gray-300",children:"Nucleus"})," ",K.jsx("span",{className:"w-3 h-3 rounded-full bg-red-500 inline-block"})]}),K.jsxs("div",{className:"flex items-center justify-end gap-2",children:[K.jsx("span",{className:"text-gray-300",children:"Gold Atom"})," ",K.jsx("span",{className:"w-3 h-3 rounded-full bg-yellow-700 opacity-50 inline-block"})]})]}):K.jsxs("div",{className:"space-y-1",children:[i!=="Dalton"&&K.jsxs("div",{className:"flex items-center justify-end gap-2",children:[K.jsx("span",{className:"text-gray-300",children:"Proton"})," ",K.jsx("span",{className:"w-3 h-3 rounded-full bg-red-500 inline-block"})]}),(i==="Modern"||i==="Bohr")&&K.jsxs("div",{className:"flex items-center justify-end gap-2",children:[K.jsx("span",{className:"text-gray-300",children:"Neutron"})," ",K.jsx("span",{className:"w-3 h-3 rounded-full bg-slate-500 inline-block"})]}),i!=="Dalton"&&K.jsxs("div",{className:"flex items-center justify-end gap-2",children:[K.jsx("span",{className:"text-gray-300",children:"Electron"})," ",K.jsx("span",{className:"w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)] inline-block"})]})]})]})}),K.jsx(bT,{config:l,activeModel:i,topic:o,isSimulating:S,simulationSpeed:b,onStatsUpdate:O})]}),K.jsx("div",{className:"h-1/2 md:h-full md:w-[400px] lg:w-[450px] relative z-20 shadow-2xl transition-all duration-300",children:K.jsx(RT,{topic:o,config:l,setConfig:c,activeModel:i,setActiveModel:s,onToggleDiagram:()=>_(!g),scatteringStats:M,isSimulating:S,setIsSimulating:y,onResetSimulation:N,simulationSpeed:b,setSimulationSpeed:T})})]})]})},E_=document.getElementById("root");if(!E_)throw new Error("Could not find root element to mount to");const DT=HS.createRoot(E_);DT.render(K.jsx(NS.StrictMode,{children:K.jsx(wT,{})}));
