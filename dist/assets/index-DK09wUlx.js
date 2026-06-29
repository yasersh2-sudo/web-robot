(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Gf={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function sS(){if(o0)return wo;o0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var l0;function rS(){return l0||(l0=1,Gf.exports=sS()),Gf.exports}var I=rS(),Vf={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function oS(){if(c0)return st;c0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function _(N,ne,Se){this.props=N,this.context=ne,this.refs=y,this.updater=Se||b}_.prototype.isReactComponent={},_.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function B(){}B.prototype=_.prototype;function L(N,ne,Se){this.props=N,this.context=ne,this.refs=y,this.updater=Se||b}var D=L.prototype=new B;D.constructor=L,w(D,_.prototype),D.isPureReactComponent=!0;var X=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function C(N,ne,Se){var Z=Se.ref;return{$$typeof:o,type:N,key:ne,ref:Z!==void 0?Z:null,props:Se}}function R(N,ne){return C(N.type,ne,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function re(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Se){return ne[Se]})}var ae=/\/+/g;function fe(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?re(""+N.key):ne.toString(36)}function de(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function(ne){N.status==="pending"&&(N.status="fulfilled",N.value=ne)},function(ne){N.status==="pending"&&(N.status="rejected",N.reason=ne)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,ne,Se,Z,ue){var be=typeof N;(be==="undefined"||be==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(be){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case o:case t:ye=!0;break;case g:return ye=N._init,O(ye(N._payload),ne,Se,Z,ue)}}if(ye)return ue=ue(N),ye=Z===""?"."+fe(N,0):Z,X(ue)?(Se="",ye!=null&&(Se=ye.replace(ae,"$&/")+"/"),O(ue,ne,Se,"",function(at){return at})):ue!=null&&(H(ue)&&(ue=R(ue,Se+(ue.key==null||N&&N.key===ue.key?"":(""+ue.key).replace(ae,"$&/")+"/")+ye)),ne.push(ue)),1;ye=0;var He=Z===""?".":Z+":";if(X(N))for(var Ie=0;Ie<N.length;Ie++)Z=N[Ie],be=He+fe(Z,Ie),ye+=O(Z,ne,Se,be,ue);else if(Ie=M(N),typeof Ie=="function")for(N=Ie.call(N),Ie=0;!(Z=N.next()).done;)Z=Z.value,be=He+fe(Z,Ie++),ye+=O(Z,ne,Se,be,ue);else if(be==="object"){if(typeof N.then=="function")return O(de(N),ne,Se,Z,ue);throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ye}function Q(N,ne,Se){if(N==null)return N;var Z=[],ue=0;return O(N,Z,"","",function(be){return ne.call(Se,be,ue++)}),Z}function K(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(Se){(N._status===0||N._status===-1)&&(N._status=1,N._result=Se)},function(Se){(N._status===0||N._status===-1)&&(N._status=2,N._result=Se)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var Me=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Te={map:Q,forEach:function(N,ne,Se){Q(N,function(){ne.apply(this,arguments)},Se)},count:function(N){var ne=0;return Q(N,function(){ne++}),ne},toArray:function(N){return Q(N,function(ne){return ne})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return st.Activity=x,st.Children=Te,st.Component=_,st.Fragment=i,st.Profiler=l,st.PureComponent=L,st.StrictMode=s,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,st.__COMPILER_RUNTIME={__proto__:null,c:function(N){return z.H.useMemoCache(N)}},st.cache=function(N){return function(){return N.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(N,ne,Se){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Z=w({},N.props),ue=N.key;if(ne!=null)for(be in ne.key!==void 0&&(ue=""+ne.key),ne)!k.call(ne,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&ne.ref===void 0||(Z[be]=ne[be]);var be=arguments.length-2;if(be===1)Z.children=Se;else if(1<be){for(var ye=Array(be),He=0;He<be;He++)ye[He]=arguments[He+2];Z.children=ye}return C(N.type,ue,Z)},st.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},st.createElement=function(N,ne,Se){var Z,ue={},be=null;if(ne!=null)for(Z in ne.key!==void 0&&(be=""+ne.key),ne)k.call(ne,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ue[Z]=ne[Z]);var ye=arguments.length-2;if(ye===1)ue.children=Se;else if(1<ye){for(var He=Array(ye),Ie=0;Ie<ye;Ie++)He[Ie]=arguments[Ie+2];ue.children=He}if(N&&N.defaultProps)for(Z in ye=N.defaultProps,ye)ue[Z]===void 0&&(ue[Z]=ye[Z]);return C(N,be,ue)},st.createRef=function(){return{current:null}},st.forwardRef=function(N){return{$$typeof:d,render:N}},st.isValidElement=H,st.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:K}},st.memo=function(N,ne){return{$$typeof:p,type:N,compare:ne===void 0?null:ne}},st.startTransition=function(N){var ne=z.T,Se={};z.T=Se;try{var Z=N(),ue=z.S;ue!==null&&ue(Se,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(F,Me)}catch(be){Me(be)}finally{ne!==null&&Se.types!==null&&(ne.types=Se.types),z.T=ne}},st.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},st.use=function(N){return z.H.use(N)},st.useActionState=function(N,ne,Se){return z.H.useActionState(N,ne,Se)},st.useCallback=function(N,ne){return z.H.useCallback(N,ne)},st.useContext=function(N){return z.H.useContext(N)},st.useDebugValue=function(){},st.useDeferredValue=function(N,ne){return z.H.useDeferredValue(N,ne)},st.useEffect=function(N,ne){return z.H.useEffect(N,ne)},st.useEffectEvent=function(N){return z.H.useEffectEvent(N)},st.useId=function(){return z.H.useId()},st.useImperativeHandle=function(N,ne,Se){return z.H.useImperativeHandle(N,ne,Se)},st.useInsertionEffect=function(N,ne){return z.H.useInsertionEffect(N,ne)},st.useLayoutEffect=function(N,ne){return z.H.useLayoutEffect(N,ne)},st.useMemo=function(N,ne){return z.H.useMemo(N,ne)},st.useOptimistic=function(N,ne){return z.H.useOptimistic(N,ne)},st.useReducer=function(N,ne,Se){return z.H.useReducer(N,ne,Se)},st.useRef=function(N){return z.H.useRef(N)},st.useState=function(N){return z.H.useState(N)},st.useSyncExternalStore=function(N,ne,Se){return z.H.useSyncExternalStore(N,ne,Se)},st.useTransition=function(){return z.H.useTransition()},st.version="19.2.7",st}var u0;function dd(){return u0||(u0=1,Vf.exports=oS()),Vf.exports}var xn=dd(),kf={exports:{}},Co={},Xf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function lS(){return f0||(f0=1,(function(o){function t(O,Q){var K=O.length;O.push(Q);e:for(;0<K;){var Me=K-1>>>1,Te=O[Me];if(0<l(Te,Q))O[Me]=Q,O[K]=Te,K=Me;else break e}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var Q=O[0],K=O.pop();if(K!==Q){O[0]=K;e:for(var Me=0,Te=O.length,N=Te>>>1;Me<N;){var ne=2*(Me+1)-1,Se=O[ne],Z=ne+1,ue=O[Z];if(0>l(Se,K))Z<Te&&0>l(ue,Se)?(O[Me]=ue,O[Z]=K,Me=Z):(O[Me]=Se,O[ne]=K,Me=ne);else if(Z<Te&&0>l(ue,K))O[Me]=ue,O[Z]=K,Me=Z;else break e}}return Q}function l(O,Q){var K=O.sortIndex-Q.sortIndex;return K!==0?K:O.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,S=3,M=!1,b=!1,w=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var Q=i(p);Q!==null;){if(Q.callback===null)s(p);else if(Q.startTime<=O)s(p),Q.sortIndex=Q.expirationTime,t(m,Q);else break;Q=i(p)}}function X(O){if(w=!1,D(O),!b)if(i(m)!==null)b=!0,F||(F=!0,re());else{var Q=i(p);Q!==null&&de(X,Q.startTime-O)}}var F=!1,z=-1,k=5,C=-1;function R(){return y?!0:!(o.unstable_now()-C<k)}function H(){if(y=!1,F){var O=o.unstable_now();C=O;var Q=!0;try{e:{b=!1,w&&(w=!1,B(z),z=-1),M=!0;var K=S;try{t:{for(D(O),x=i(m);x!==null&&!(x.expirationTime>O&&R());){var Me=x.callback;if(typeof Me=="function"){x.callback=null,S=x.priorityLevel;var Te=Me(x.expirationTime<=O);if(O=o.unstable_now(),typeof Te=="function"){x.callback=Te,D(O),Q=!0;break t}x===i(m)&&s(m),D(O)}else s(m);x=i(m)}if(x!==null)Q=!0;else{var N=i(p);N!==null&&de(X,N.startTime-O),Q=!1}}break e}finally{x=null,S=K,M=!1}Q=void 0}}finally{Q?re():F=!1}}}var re;if(typeof L=="function")re=function(){L(H)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,fe=ae.port2;ae.port1.onmessage=H,re=function(){fe.postMessage(null)}}else re=function(){_(H,0)};function de(O,Q){z=_(function(){O(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var K=S;S=Q;try{return O()}finally{S=K}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=S;S=O;try{return Q()}finally{S=K}},o.unstable_scheduleCallback=function(O,Q,K){var Me=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Me+K:Me):K=Me,O){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=K+Te,O={id:g++,callback:Q,priorityLevel:O,startTime:K,expirationTime:Te,sortIndex:-1},K>Me?(O.sortIndex=K,t(p,O),i(m)===null&&O===i(p)&&(w?(B(z),z=-1):w=!0,de(X,K-Me))):(O.sortIndex=Te,t(m,O),b||M||(b=!0,F||(F=!0,re()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var Q=S;return function(){var K=S;S=Q;try{return O.apply(this,arguments)}finally{S=K}}}})(Wf)),Wf}var h0;function cS(){return h0||(h0=1,Xf.exports=lS()),Xf.exports}var jf={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function uS(){if(d0)return wn;d0=1;var o=dd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},wn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.2.7",wn}var p0;function fS(){if(p0)return jf.exports;p0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),jf.exports=uS(),jf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function hS(){if(m0)return Co;m0=1;var o=cS(),t=dd(),i=fS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var v=!1,E=c.child;E;){if(E===a){v=!0,a=c,r=f;break}if(E===r){v=!0,r=c,a=f;break}E=E.sibling}if(!v){for(E=f.child;E;){if(E===a){v=!0,a=f,r=c;break}if(E===r){v=!0,r=f,a=c;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Symbol.for("react.client.reference");function fe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case X:return"Suspense";case F:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case L:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:fe(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return fe(e(n))}catch{}}return null}var de=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},Me=[],Te=-1;function N(e){return{current:e}}function ne(e){0>Te||(e.current=Me[Te],Me[Te]=null,Te--)}function Se(e,n){Te++,Me[Te]=e.current,e.current=n}var Z=N(null),ue=N(null),be=N(null),ye=N(null);function He(e,n){switch(Se(be,n),Se(ue,e),Se(Z,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Dg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Dg(n),e=Ug(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(Z),Se(Z,e)}function Ie(){ne(Z),ne(ue),ne(be)}function at(e){e.memoizedState!==null&&Se(ye,e);var n=Z.current,a=Ug(n,e.type);n!==a&&(Se(ue,e),Se(Z,a))}function Rt(e){ue.current===e&&(ne(Z),ne(ue)),ye.current===e&&(ne(ye),To._currentValue=K)}var ht,Xt;function G(e){if(ht===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ht=n&&n[1]||"",Xt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+Xt}var Ne=!1;function Fe(e,n){if(!e||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(le){var ie=le}Reflect.construct(e,[],_e)}else{try{_e.call()}catch(le){ie=le}e.call(_e.prototype)}}else{try{throw Error()}catch(le){ie=le}(_e=e())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(le){if(le&&ie&&typeof le.stack=="string")return[le.stack,ie.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],E=f[1];if(v&&E){var P=v.split(`
`),ee=E.split(`
`);for(c=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;c<ee.length&&!ee[c].includes("DetermineComponentFrameRoot");)c++;if(r===P.length||c===ee.length)for(r=P.length-1,c=ee.length-1;1<=r&&0<=c&&P[r]!==ee[c];)c--;for(;1<=r&&0<=c;r--,c--)if(P[r]!==ee[c]){if(r!==1||c!==1)do if(r--,c--,0>c||P[r]!==ee[c]){var he=`
`+P[r].replace(" at new "," at ");return e.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",e.displayName)),he}while(1<=r&&0<=c);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?G(a):""}function Ze(e,n){switch(e.tag){case 26:case 27:case 5:return G(e.type);case 16:return G("Lazy");case 13:return e.child!==n&&n!==null?G("Suspense Fallback"):G("Suspense");case 19:return G("SuspenseList");case 0:case 15:return Fe(e.type,!1);case 11:return Fe(e.type.render,!1);case 1:return Fe(e.type,!0);case 31:return G("Activity");default:return""}}function Oe(e){try{var n="",a=null;do n+=Ze(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var pt=Object.prototype.hasOwnProperty,Xe=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,T=o.unstable_shouldYield,te=o.unstable_requestPaint,pe=o.unstable_now,Ee=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,qe=o.unstable_UserBlockingPriority,Ce=o.unstable_NormalPriority,Ge=o.unstable_LowPriority,vt=o.unstable_IdlePriority,Ae=o.log,Ve=o.unstable_setDisableYieldValue,Ke=null,Ye=null;function ze(e){if(typeof Ae=="function"&&Ve(e),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(Ke,e)}catch{}}var tt=Math.clz32?Math.clz32:W,rt=Math.log,Pt=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(rt(e)/Pt|0)|0}var Re=256,ce=262144,ve=4194304;function we(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function De(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=we(r):(v&=E,v!==0?c=we(v):a||(a=E&~e,a!==0&&(c=we(a))))):(E=r&~f,E!==0?c=we(E):v!==0?c=we(v):a||(a=r&~e,a!==0&&(c=we(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function nt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Yt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fn(){var e=ve;return ve<<=1,(ve&62914560)===0&&(ve=4194304),e}function bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Sn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function di(e,n,a,r,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,P=e.expirationTimes,ee=e.hiddenUpdates;for(a=v&~a;0<a;){var he=31-tt(a),_e=1<<he;E[he]=0,P[he]=-1;var ie=ee[he];if(ie!==null)for(ee[he]=null,he=0;he<ie.length;he++){var le=ie[he];le!==null&&(le.lane&=-536870913)}a&=~_e}r!==0&&Pr(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Pr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-tt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ir(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-tt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function bi(e,n){var a=n&-n;return a=(a&42)!==0?1:qa(a),(a&(e.suspendedLanes|n))!==0?0:a}function qa(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Br(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:e0(e.type))}function Ya(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var pi=Math.random().toString(36).slice(2),Qt="__reactFiber$"+pi,yn="__reactProps$"+pi,Pi="__reactContainer$"+pi,Fr="__reactEvents$"+pi,Oc="__reactListeners$"+pi,zc="__reactHandles$"+pi,ko="__reactResources$"+pi,Za="__reactMarker$"+pi;function A(e){delete e[Qt],delete e[yn],delete e[Fr],delete e[Oc],delete e[zc]}function j(e){var n=e[Qt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pi]||a[Qt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Bg(e);e!==null;){if(a=e[Qt])return a;e=Bg(e)}return n}e=a,a=e.parentNode}return null}function se(e){if(e=e[Qt]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function oe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function q(e){var n=e[ko];return n||(n=e[ko]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xe(e){e[Za]=!0}var Ue=new Set,Be={};function Pe(e,n){$e(e,n),$e(e+"Capture",n)}function $e(e,n){for(Be[e]=n,e=0;e<n.length;e++)Ue.add(n[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qe={},xt={};function wt(e){return pt.call(xt,e)?!0:pt.call(Qe,e)?!1:it.test(e)?xt[e]=!0:(Qe[e]=!0,!1)}function Wt(e,n,a){if(wt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Vt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ot(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function We(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function an(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ct(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Nn(e){if(!e._valueTracker){var n=an(e)?"checked":"value";e._valueTracker=Ct(e,n,""+e[n])}}function Ii(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=an(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ka=/[\n"\\]/g;function mt(e){return e.replace(Ka,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Rn(e,n,a,r,c,f,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+We(n)):e.value!==""+We(n)&&(e.value=""+We(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?hn(e,v,We(n)):a!=null?hn(e,v,We(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+We(E):e.removeAttribute("name")}function On(e,n,a,r,c,f,v,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Nn(e);return}a=a!=null?""+We(a):"",n=n!=null?""+We(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=E?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Nn(e)}function hn(e,n,a){n==="number"&&gn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function en(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+We(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Cs(e,n,a){if(n!=null&&(n=""+We(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+We(a):""}function Ai(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(de(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=We(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Nn(e)}function Ds(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ev=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rd(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||ev.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function wd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Rd(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Rd(e,f,n[f])}function Pc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(e){return nv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var Ic=null;function Bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,Ls=null;function Cd(e){var n=se(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Rn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[yn]||null;if(!c)throw Error(s(90));Rn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ii(r)}break e;case"textarea":Cs(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&en(e,!!a.multiple,n,!1)}}}var Fc=!1;function Dd(e,n,a){if(Fc)return e(n,a);Fc=!0;try{var r=e(n);return r}finally{if(Fc=!1,(Us!==null||Ls!==null)&&(Ul(),Us&&(n=Us,e=Ls,Ls=Us=null,Cd(n),e)))for(n=0;n<e.length;n++)Cd(e[n])}}function Hr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[yn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(Fi)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Hc=!1}var da=null,Gc=null,Wo=null;function Ud(){if(Wo)return Wo;var e,n=Gc,a=n.length,r,c="value"in da?da.value:da.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===c[f-r];r++);return Wo=c.slice(e,1<r?1-r:void 0)}function jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function Ld(){return!1}function Bn(e){function n(a,r,c,f,v){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:Ld,this.isPropagationStopped=Ld,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=Bn(Qa),Vr=x({},Qa,{view:0,detail:0}),iv=Bn(Vr),Vc,kc,kr,Zo=x({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(Vc=e.screenX-kr.screenX,kc=e.screenY-kr.screenY):kc=Vc=0,kr=e),Vc)},movementY:function(e){return"movementY"in e?e.movementY:kc}}),Nd=Bn(Zo),av=x({},Zo,{dataTransfer:0}),sv=Bn(av),rv=x({},Vr,{relatedTarget:0}),Xc=Bn(rv),ov=x({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),lv=Bn(ov),cv=x({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uv=Bn(cv),fv=x({},Qa,{data:0}),Od=Bn(fv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=pv[e])?!!n[e]:!1}function Wc(){return mv}var gv=x({},Vr,{key:function(e){if(e.key){var n=hv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_v=Bn(gv),vv=x({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zd=Bn(vv),xv=x({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),Sv=Bn(xv),yv=x({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mv=Bn(yv),Ev=x({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tv=Bn(Ev),bv=x({},Qa,{newState:0,oldState:0}),Av=Bn(bv),Rv=[9,13,27,32],jc=Fi&&"CompositionEvent"in window,Xr=null;Fi&&"documentMode"in document&&(Xr=document.documentMode);var wv=Fi&&"TextEvent"in window&&!Xr,Pd=Fi&&(!jc||Xr&&8<Xr&&11>=Xr),Id=" ",Bd=!1;function Fd(e,n){switch(e){case"keyup":return Rv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ns=!1;function Cv(e,n){switch(e){case"compositionend":return Hd(n);case"keypress":return n.which!==32?null:(Bd=!0,Id);case"textInput":return e=n.data,e===Id&&Bd?null:e;default:return null}}function Dv(e,n){if(Ns)return e==="compositionend"||!jc&&Fd(e,n)?(e=Ud(),Wo=Gc=da=null,Ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pd&&n.locale!=="ko"?null:n.data;default:return null}}var Uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Uv[e.type]:n==="textarea"}function Vd(e,n,a,r){Us?Ls?Ls.push(r):Ls=[r]:Us=r,n=Bl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Wr=null,jr=null;function Lv(e){Tg(e,0)}function Ko(e){var n=oe(e);if(Ii(n))return e}function kd(e,n){if(e==="change")return n}var Xd=!1;if(Fi){var qc;if(Fi){var Yc="oninput"in document;if(!Yc){var Wd=document.createElement("div");Wd.setAttribute("oninput","return;"),Yc=typeof Wd.oninput=="function"}qc=Yc}else qc=!1;Xd=qc&&(!document.documentMode||9<document.documentMode)}function jd(){Wr&&(Wr.detachEvent("onpropertychange",qd),jr=Wr=null)}function qd(e){if(e.propertyName==="value"&&Ko(jr)){var n=[];Vd(n,jr,e,Bc(e)),Dd(Lv,n)}}function Nv(e,n,a){e==="focusin"?(jd(),Wr=n,jr=a,Wr.attachEvent("onpropertychange",qd)):e==="focusout"&&jd()}function Ov(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(jr)}function zv(e,n){if(e==="click")return Ko(n)}function Pv(e,n){if(e==="input"||e==="change")return Ko(n)}function Iv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Iv;function qr(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!pt.call(n,c)||!qn(e[c],n[c]))return!1}return!0}function Yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zd(e,n){var a=Yd(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yd(a)}}function Kd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Kd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gn(e.document)}return n}function Zc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Bv=Fi&&"documentMode"in document&&11>=document.documentMode,Os=null,Kc=null,Yr=null,Qc=!1;function Jd(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qc||Os==null||Os!==gn(r)||(r=Os,"selectionStart"in r&&Zc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&qr(Yr,r)||(Yr=r,r=Bl(Kc,"onSelect"),0<r.length&&(n=new Yo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Os)))}function Ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var zs={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Jc={},$d={};Fi&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function $a(e){if(Jc[e])return Jc[e];if(!zs[e])return e;var n=zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in $d)return Jc[e]=n[a];return e}var ep=$a("animationend"),tp=$a("animationiteration"),np=$a("animationstart"),Fv=$a("transitionrun"),Hv=$a("transitionstart"),Gv=$a("transitioncancel"),ip=$a("transitionend"),ap=new Map,$c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$c.push("scrollEnd");function mi(e,n){ap.set(e,n),Pe(n,[e])}var Qo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Ps=0,eu=0;function Jo(){for(var e=Ps,n=eu=Ps=0;n<e;){var a=ai[n];ai[n++]=null;var r=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}f!==0&&sp(a,c,f)}}function $o(e,n,a,r){ai[Ps++]=e,ai[Ps++]=n,ai[Ps++]=a,ai[Ps++]=r,eu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function tu(e,n,a,r){return $o(e,n,a,r),el(e)}function es(e,n){return $o(e,null,null,n),el(e)}function sp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-tt(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function el(e){if(50<_o)throw _o=0,ff=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Is={};function Vv(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,r){return new Vv(e,n,a,r)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function rp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function tl(e,n,a,r,c,f){var v=0;if(r=e,typeof e=="function")nu(e)&&(v=1);else if(typeof e=="string")v=qx(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case C:return e=Yn(31,a,n,c),e.elementType=C,e.lanes=f,e;case w:return ts(a.children,c,f,n);case y:v=8,c|=24;break;case _:return e=Yn(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case X:return e=Yn(13,a,n,c),e.elementType=X,e.lanes=f,e;case F:return e=Yn(19,a,n,c),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case B:v=9;break e;case D:v=11;break e;case z:v=14;break e;case k:v=16,r=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Yn(v,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ts(e,n,a,r){return e=Yn(7,e,r,n),e.lanes=a,e}function iu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function op(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function au(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var lp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=lp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Oe(n)},lp.set(e,n),n)}return{value:e,source:n,stack:Oe(n)}}var Bs=[],Fs=0,nl=null,Zr=0,ri=[],oi=0,pa=null,Ri=1,wi="";function Gi(e,n){Bs[Fs++]=Zr,Bs[Fs++]=nl,nl=e,Zr=n}function cp(e,n,a){ri[oi++]=Ri,ri[oi++]=wi,ri[oi++]=pa,pa=e;var r=Ri;e=wi;var c=32-tt(r)-1;r&=~(1<<c),a+=1;var f=32-tt(n)+c;if(30<f){var v=c-c%5;f=(r&(1<<v)-1).toString(32),r>>=v,c-=v,Ri=1<<32-tt(n)+c|a<<c|r,wi=f+e}else Ri=1<<f|a<<c|r,wi=e}function su(e){e.return!==null&&(Gi(e,1),cp(e,1,0))}function ru(e){for(;e===nl;)nl=Bs[--Fs],Bs[Fs]=null,Zr=Bs[--Fs],Bs[Fs]=null;for(;e===pa;)pa=ri[--oi],ri[oi]=null,wi=ri[--oi],ri[oi]=null,Ri=ri[--oi],ri[oi]=null}function up(e,n){ri[oi++]=Ri,ri[oi++]=wi,ri[oi++]=pa,Ri=n.id,wi=n.overflow,pa=e}var Mn=null,jt=null,Et=!1,ma=null,li=!1,ou=Error(s(519));function ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kr(si(n,e)),ou}function fp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[Qt]=e,n[yn]=r,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)_t(xo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),On(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Ai(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||wg(n.textContent,a)?(r.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),r.onScroll!=null&&_t("scroll",n),r.onScrollEnd!=null&&_t("scrollend",n),r.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||ga(e,!0)}function hp(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Mn=Mn.return}}function Hs(e){if(e!==Mn)return!1;if(!Et)return hp(e),Et=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Af(e.type,e.memoizedProps)),a=!a),a&&jt&&ga(e),hp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));jt=Ig(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));jt=Ig(e)}else n===27?(n=jt,Da(e.type)?(e=Uf,Uf=null,jt=e):jt=n):jt=Mn?ui(e.stateNode.nextSibling):null;return!0}function ns(){jt=Mn=null,Et=!1}function lu(){var e=ma;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),ma=null),e}function Kr(e){ma===null?ma=[e]:ma.push(e)}var cu=N(null),is=null,Vi=null;function _a(e,n,a){Se(cu,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=cu.current,ne(cu)}function uu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function fu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),uu(f.return,a,e),r||(v=null);break e}f=E.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),uu(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Gs(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=c.type;qn(c.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(c===ye.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}c=c.return}e!==null&&fu(n,e,a,r),n.flags|=262144}function il(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return dp(is,e)}function al(e,n){return is===null&&as(e),dp(e,n)}function dp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var kv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Xv=o.unstable_scheduleCallback,Wv=o.unstable_NormalPriority,sn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new kv,data:new Map,refCount:0}}function Qr(e){e.refCount--,e.refCount===0&&Xv(Wv,function(){e.controller.abort()})}var Jr=null,du=0,Vs=0,ks=null;function jv(e,n){if(Jr===null){var a=Jr=[];du=0,Vs=_f(),ks={status:"pending",value:void 0,then:function(r){a.push(r)}}}return du++,n.then(pp,pp),n}function pp(){if(--du===0&&Jr!==null){ks!==null&&(ks.status="fulfilled");var e=Jr;Jr=null,Vs=0,ks=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function qv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var mp=O.S;O.S=function(e,n){Jm=pe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jv(e,n),mp!==null&&mp(e,n)};var ss=N(null);function pu(){var e=ss.current;return e!==null?e:kt.pooledCache}function sl(e,n){n===null?Se(ss,ss.current):Se(ss,n.pool)}function gp(){var e=pu();return e===null?null:{parent:sn._currentValue,pool:e}}var Xs=Error(s(460)),mu=Error(s(474)),rl=Error(s(542)),ol={then:function(){}};function _p(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Sp(e),e;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(e=kt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Sp(e),e}throw os=n,Xs}}function rs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(os=a,Xs):a}}var os=null;function xp(){if(os===null)throw Error(s(459));var e=os;return os=null,e}function Sp(e){if(e===Xs||e===rl)throw Error(s(483))}var Ws=null,$r=0;function ll(e){var n=$r;return $r+=1,Ws===null&&(Ws=[]),vp(Ws,e,n)}function eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function cl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function yp(e){function n(Y,V){if(e){var $=Y.deletions;$===null?(Y.deletions=[V],Y.flags|=16):$.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function r(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Hi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,$){return Y.index=$,e?($=Y.alternate,$!==null?($=$.index,$<V?(Y.flags|=67108866,V):$):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function v(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function E(Y,V,$,me){return V===null||V.tag!==6?(V=iu($,Y.mode,me),V.return=Y,V):(V=c(V,$),V.return=Y,V)}function P(Y,V,$,me){var Je=$.type;return Je===w?he(Y,V,$.props.children,me,$.key):V!==null&&(V.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===k&&rs(Je)===V.type)?(V=c(V,$.props),eo(V,$),V.return=Y,V):(V=tl($.type,$.key,$.props,null,Y.mode,me),eo(V,$),V.return=Y,V)}function ee(Y,V,$,me){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=au($,Y.mode,me),V.return=Y,V):(V=c(V,$.children||[]),V.return=Y,V)}function he(Y,V,$,me,Je){return V===null||V.tag!==7?(V=ts($,Y.mode,me,Je),V.return=Y,V):(V=c(V,$),V.return=Y,V)}function _e(Y,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=iu(""+V,Y.mode,$),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return $=tl(V.type,V.key,V.props,null,Y.mode,$),eo($,V),$.return=Y,$;case b:return V=au(V,Y.mode,$),V.return=Y,V;case k:return V=rs(V),_e(Y,V,$)}if(de(V)||re(V))return V=ts(V,Y.mode,$,null),V.return=Y,V;if(typeof V.then=="function")return _e(Y,ll(V),$);if(V.$$typeof===L)return _e(Y,al(Y,V),$);cl(Y,V)}return null}function ie(Y,V,$,me){var Je=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Je!==null?null:E(Y,V,""+$,me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===Je?P(Y,V,$,me):null;case b:return $.key===Je?ee(Y,V,$,me):null;case k:return $=rs($),ie(Y,V,$,me)}if(de($)||re($))return Je!==null?null:he(Y,V,$,me,null);if(typeof $.then=="function")return ie(Y,V,ll($),me);if($.$$typeof===L)return ie(Y,V,al(Y,$),me);cl(Y,$)}return null}function le(Y,V,$,me,Je){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Y=Y.get($)||null,E(V,Y,""+me,Je);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case M:return Y=Y.get(me.key===null?$:me.key)||null,P(V,Y,me,Je);case b:return Y=Y.get(me.key===null?$:me.key)||null,ee(V,Y,me,Je);case k:return me=rs(me),le(Y,V,$,me,Je)}if(de(me)||re(me))return Y=Y.get($)||null,he(V,Y,me,Je,null);if(typeof me.then=="function")return le(Y,V,$,ll(me),Je);if(me.$$typeof===L)return le(Y,V,$,al(V,me),Je);cl(V,me)}return null}function ke(Y,V,$,me){for(var Je=null,Dt=null,je=V,ct=V=0,yt=null;je!==null&&ct<$.length;ct++){je.index>ct?(yt=je,je=null):yt=je.sibling;var Ut=ie(Y,je,$[ct],me);if(Ut===null){je===null&&(je=yt);break}e&&je&&Ut.alternate===null&&n(Y,je),V=f(Ut,V,ct),Dt===null?Je=Ut:Dt.sibling=Ut,Dt=Ut,je=yt}if(ct===$.length)return a(Y,je),Et&&Gi(Y,ct),Je;if(je===null){for(;ct<$.length;ct++)je=_e(Y,$[ct],me),je!==null&&(V=f(je,V,ct),Dt===null?Je=je:Dt.sibling=je,Dt=je);return Et&&Gi(Y,ct),Je}for(je=r(je);ct<$.length;ct++)yt=le(je,Y,ct,$[ct],me),yt!==null&&(e&&yt.alternate!==null&&je.delete(yt.key===null?ct:yt.key),V=f(yt,V,ct),Dt===null?Je=yt:Dt.sibling=yt,Dt=yt);return e&&je.forEach(function(za){return n(Y,za)}),Et&&Gi(Y,ct),Je}function et(Y,V,$,me){if($==null)throw Error(s(151));for(var Je=null,Dt=null,je=V,ct=V=0,yt=null,Ut=$.next();je!==null&&!Ut.done;ct++,Ut=$.next()){je.index>ct?(yt=je,je=null):yt=je.sibling;var za=ie(Y,je,Ut.value,me);if(za===null){je===null&&(je=yt);break}e&&je&&za.alternate===null&&n(Y,je),V=f(za,V,ct),Dt===null?Je=za:Dt.sibling=za,Dt=za,je=yt}if(Ut.done)return a(Y,je),Et&&Gi(Y,ct),Je;if(je===null){for(;!Ut.done;ct++,Ut=$.next())Ut=_e(Y,Ut.value,me),Ut!==null&&(V=f(Ut,V,ct),Dt===null?Je=Ut:Dt.sibling=Ut,Dt=Ut);return Et&&Gi(Y,ct),Je}for(je=r(je);!Ut.done;ct++,Ut=$.next())Ut=le(je,Y,ct,Ut.value,me),Ut!==null&&(e&&Ut.alternate!==null&&je.delete(Ut.key===null?ct:Ut.key),V=f(Ut,V,ct),Dt===null?Je=Ut:Dt.sibling=Ut,Dt=Ut);return e&&je.forEach(function(aS){return n(Y,aS)}),Et&&Gi(Y,ct),Je}function Ft(Y,V,$,me){if(typeof $=="object"&&$!==null&&$.type===w&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:e:{for(var Je=$.key;V!==null;){if(V.key===Je){if(Je=$.type,Je===w){if(V.tag===7){a(Y,V.sibling),me=c(V,$.props.children),me.return=Y,Y=me;break e}}else if(V.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===k&&rs(Je)===V.type){a(Y,V.sibling),me=c(V,$.props),eo(me,$),me.return=Y,Y=me;break e}a(Y,V);break}else n(Y,V);V=V.sibling}$.type===w?(me=ts($.props.children,Y.mode,me,$.key),me.return=Y,Y=me):(me=tl($.type,$.key,$.props,null,Y.mode,me),eo(me,$),me.return=Y,Y=me)}return v(Y);case b:e:{for(Je=$.key;V!==null;){if(V.key===Je)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(Y,V.sibling),me=c(V,$.children||[]),me.return=Y,Y=me;break e}else{a(Y,V);break}else n(Y,V);V=V.sibling}me=au($,Y.mode,me),me.return=Y,Y=me}return v(Y);case k:return $=rs($),Ft(Y,V,$,me)}if(de($))return ke(Y,V,$,me);if(re($)){if(Je=re($),typeof Je!="function")throw Error(s(150));return $=Je.call($),et(Y,V,$,me)}if(typeof $.then=="function")return Ft(Y,V,ll($),me);if($.$$typeof===L)return Ft(Y,V,al(Y,$),me);cl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(Y,V.sibling),me=c(V,$),me.return=Y,Y=me):(a(Y,V),me=iu($,Y.mode,me),me.return=Y,Y=me),v(Y)):a(Y,V)}return function(Y,V,$,me){try{$r=0;var Je=Ft(Y,V,$,me);return Ws=null,Je}catch(je){if(je===Xs||je===rl)throw je;var Dt=Yn(29,je,null,Y.mode);return Dt.lanes=me,Dt.return=Y,Dt}finally{}}}var ls=yp(!0),Mp=yp(!1),va=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Nt&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=el(e),sp(e,null,a),n}return $o(e,r,n,a),el(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ir(e,a)}}function vu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var xu=!1;function no(){if(xu){var e=ks;if(e!==null)throw e}}function io(e,n,a,r){xu=!1;var c=e.updateQueue;va=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var P=E,ee=P.next;P.next=null,v===null?f=ee:v.next=ee,v=P;var he=e.alternate;he!==null&&(he=he.updateQueue,E=he.lastBaseUpdate,E!==v&&(E===null?he.firstBaseUpdate=ee:E.next=ee,he.lastBaseUpdate=P))}if(f!==null){var _e=c.baseState;v=0,he=ee=P=null,E=f;do{var ie=E.lane&-536870913,le=ie!==E.lane;if(le?(St&ie)===ie:(r&ie)===ie){ie!==0&&ie===Vs&&(xu=!0),he!==null&&(he=he.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ke=e,et=E;ie=n;var Ft=a;switch(et.tag){case 1:if(ke=et.payload,typeof ke=="function"){_e=ke.call(Ft,_e,ie);break e}_e=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=et.payload,ie=typeof ke=="function"?ke.call(Ft,_e,ie):ke,ie==null)break e;_e=x({},_e,ie);break e;case 2:va=!0}}ie=E.callback,ie!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[ie]:le.push(ie))}else le={lane:ie,tag:E.tag,payload:E.payload,callback:E.callback,next:null},he===null?(ee=he=le,P=_e):he=he.next=le,v|=ie;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;le=E,E=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);he===null&&(P=_e),c.baseState=P,c.firstBaseUpdate=ee,c.lastBaseUpdate=he,f===null&&(c.shared.lanes=0),ba|=v,e.lanes=v,e.memoizedState=_e}}function Ep(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Tp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ep(a[e],n)}var js=N(null),ul=N(0);function bp(e,n){e=Ji,Se(ul,e),Se(js,n),Ji=e|n.baseLanes}function Su(){Se(ul,Ji),Se(js,js.current)}function yu(){Ji=ul.current,ne(js),ne(ul)}var Zn=N(null),ci=null;function ya(e){var n=e.alternate;Se(tn,tn.current&1),Se(Zn,e),ci===null&&(n===null||js.current!==null||n.memoizedState!==null)&&(ci=e)}function Mu(e){Se(tn,tn.current),Se(Zn,e),ci===null&&(ci=e)}function Ap(e){e.tag===22?(Se(tn,tn.current),Se(Zn,e),ci===null&&(ci=e)):Ma()}function Ma(){Se(tn,tn.current),Se(Zn,Zn.current)}function Kn(e){ne(Zn),ci===e&&(ci=null),ne(tn)}var tn=N(0);function fl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cf(a)||Df(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xi=0,lt=null,It=null,rn=null,hl=!1,qs=!1,cs=!1,dl=0,ao=0,Ys=null,Yv=0;function Jt(){throw Error(s(321))}function Eu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Tu(e,n,a,r,c,f){return Xi=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?cm:Fu,cs=!1,f=a(r,c),cs=!1,qs&&(f=wp(n,a,r,c)),Rp(e),f}function Rp(e){O.H=oo;var n=It!==null&&It.next!==null;if(Xi=0,rn=It=lt=null,hl=!1,ao=0,Ys=null,n)throw Error(s(300));e===null||on||(e=e.dependencies,e!==null&&il(e)&&(on=!0))}function wp(e,n,a,r){lt=e;var c=0;do{if(qs&&(Ys=null),ao=0,qs=!1,25<=c)throw Error(s(301));if(c+=1,rn=It=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=um,f=n(a,r)}while(qs);return f}function Zv(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(It!==null?It.memoizedState:null)!==e&&(lt.flags|=1024),n}function bu(){var e=dl!==0;return dl=0,e}function Au(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ru(e){if(hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hl=!1}Xi=0,rn=It=lt=null,qs=!1,ao=dl=0,Ys=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?lt.memoizedState=rn=e:rn=rn.next=e,rn}function nn(){if(It===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=It.next;var n=rn===null?lt.memoizedState:rn.next;if(n!==null)rn=n,It=e;else{if(e===null)throw lt.alternate===null?Error(s(467)):Error(s(310));It=e,e={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},rn===null?lt.memoizedState=rn=e:rn=rn.next=e}return rn}function pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ao;return ao+=1,Ys===null&&(Ys=[]),e=vp(Ys,e,n),n=lt,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?cm:Fu),e}function ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===L)return En(e)}throw Error(s(438,String(e)))}function wu(e){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=lt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=pl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=R;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function gl(e){var n=nn();return Cu(n,It,e)}function Cu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=v=null,P=null,ee=n,he=!1;do{var _e=ee.lane&-536870913;if(_e!==ee.lane?(St&_e)===_e:(Xi&_e)===_e){var ie=ee.revertLane;if(ie===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),_e===Vs&&(he=!0);else if((Xi&ie)===ie){ee=ee.next,ie===Vs&&(he=!0);continue}else _e={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},P===null?(E=P=_e,v=f):P=P.next=_e,lt.lanes|=ie,ba|=ie;_e=ee.action,cs&&a(f,_e),f=ee.hasEagerState?ee.eagerState:a(f,_e)}else ie={lane:_e,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},P===null?(E=P=ie,v=f):P=P.next=ie,lt.lanes|=_e,ba|=_e;ee=ee.next}while(ee!==null&&ee!==n);if(P===null?v=f:P.next=E,!qn(f,e.memoizedState)&&(on=!0,he&&(a=ks,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=P,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Du(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);qn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Cp(e,n,a){var r=lt,c=nn(),f=Et;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!qn((It||c).memoizedState,a);if(v&&(c.memoizedState=a,on=!0),c=c.queue,Nu(Lp.bind(null,r,c,e),[e]),c.getSnapshot!==n||v||rn!==null&&rn.memoizedState.tag&1){if(r.flags|=2048,Zs(9,{destroy:void 0},Up.bind(null,r,c,a,n),null),kt===null)throw Error(s(349));f||(Xi&127)!==0||Dp(r,n,a)}return a}function Dp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=pl(),lt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Up(e,n,a,r){n.value=a,n.getSnapshot=r,Np(n)&&Op(e)}function Lp(e,n,a){return a(function(){Np(n)&&Op(e)})}function Np(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Op(e){var n=es(e,2);n!==null&&kn(n,e,2)}function Uu(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),cs){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function zp(e,n,a,r){return e.baseState=a,Cu(e,It,typeof r=="function"?r:Wi)}function Kv(e,n,a,r,c){if(xl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Pp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Pp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var E=a(c,r),P=O.S;P!==null&&P(v,E),Ip(e,n,E)}catch(ee){Lu(e,n,ee)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(c,r),Ip(e,n,f)}catch(ee){Lu(e,n,ee)}}function Ip(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Bp(e,n,r)},function(r){return Lu(e,n,r)}):Bp(e,n,a)}function Bp(e,n,a){n.status="fulfilled",n.value=a,Fp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Pp(e,a)))}function Lu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Fp(n),n=n.next;while(n!==r)}e.action=null}function Fp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Hp(e,n){return n}function Gp(e,n){if(Et){var a=kt.formState;if(a!==null){e:{var r=lt;if(Et){if(jt){t:{for(var c=jt,f=li;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){jt=ui(c.nextSibling),r=c.data==="F!";break e}}ga(r)}r=!1}r&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hp,lastRenderedState:n},a.queue=r,a=rm.bind(null,lt,r),r.dispatch=a,r=Uu(!1),f=Bu.bind(null,lt,!1,r.queue),r=zn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=Kv.bind(null,lt,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Vp(e){var n=nn();return kp(n,It,e)}function kp(e,n,a){if(n=Cu(e,n,Hp)[0],e=gl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=so(n)}catch(v){throw v===Xs?rl:v}else r=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,Zs(9,{destroy:void 0},Qv.bind(null,c,a),null)),[r,f,e]}function Qv(e,n){e.action=n}function Xp(e){var n=nn(),a=It;if(a!==null)return kp(n,a,e);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Zs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=lt.updateQueue,n===null&&(n=pl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Wp(){return nn().memoizedState}function _l(e,n,a,r){var c=zn();lt.flags|=e,c.memoizedState=Zs(1|n,{destroy:void 0},a,r===void 0?null:r)}function vl(e,n,a,r){var c=nn();r=r===void 0?null:r;var f=c.memoizedState.inst;It!==null&&r!==null&&Eu(r,It.memoizedState.deps)?c.memoizedState=Zs(n,f,a,r):(lt.flags|=e,c.memoizedState=Zs(1|n,f,a,r))}function jp(e,n){_l(8390656,8,e,n)}function Nu(e,n){vl(2048,8,e,n)}function Jv(e){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=pl(),lt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function qp(e){var n=nn().memoizedState;return Jv({ref:n,nextImpl:e}),function(){if((Nt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Yp(e,n){return vl(4,2,e,n)}function Zp(e,n){return vl(4,4,e,n)}function Kp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qp(e,n,a){a=a!=null?a.concat([e]):null,vl(4,4,Kp.bind(null,n,e),a)}function Ou(){}function Jp(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Eu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function $p(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Eu(n,r[1]))return r[0];if(r=e(),cs){ze(!0);try{e()}finally{ze(!1)}}return a.memoizedState=[r,n],r}function zu(e,n,a){return a===void 0||(Xi&1073741824)!==0&&(St&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=eg(),lt.lanes|=e,ba|=e,a)}function em(e,n,a,r){return qn(a,n)?a:js.current!==null?(e=zu(e,a,r),qn(e,n)||(on=!0),e):(Xi&42)===0||(Xi&1073741824)!==0&&(St&261930)===0?(on=!0,e.memoizedState=a):(e=eg(),lt.lanes|=e,ba|=e,n)}function tm(e,n,a,r,c){var f=Q.p;Q.p=f!==0&&8>f?f:8;var v=O.T,E={};O.T=E,Bu(e,!1,n,a);try{var P=c(),ee=O.S;if(ee!==null&&ee(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var he=qv(P,r);ro(e,n,he,$n(e))}else ro(e,n,r,$n(e))}catch(_e){ro(e,n,{then:function(){},status:"rejected",reason:_e},$n())}finally{Q.p=f,v!==null&&E.types!==null&&(v.types=E.types),O.T=v}}function $v(){}function Pu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=nm(e).queue;tm(e,c,n,K,a===null?$v:function(){return im(e),a(r)})}function nm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function im(e){var n=nm(e);n.next===null&&(n=e.alternate.memoizedState),ro(e,n.next.queue,{},$n())}function Iu(){return En(To)}function am(){return nn().memoizedState}function sm(){return nn().memoizedState}function ex(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=xa(a);var r=Sa(n,e,a);r!==null&&(kn(r,n,a),to(r,n,a)),n={cache:hu()},e.payload=n;return}n=n.return}}function tx(e,n,a){var r=$n();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xl(e)?om(n,a):(a=tu(e,n,a,r),a!==null&&(kn(a,e,r),lm(a,n,r)))}function rm(e,n,a){var r=$n();ro(e,n,a,r)}function ro(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(xl(e))om(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,E=f(v,a);if(c.hasEagerState=!0,c.eagerState=E,qn(E,v))return $o(e,n,c,0),kt===null&&Jo(),!1}catch{}finally{}if(a=tu(e,n,c,r),a!==null)return kn(a,e,r),lm(a,n,r),!0}return!1}function Bu(e,n,a,r){if(r={lane:2,revertLane:_f(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},xl(e)){if(n)throw Error(s(479))}else n=tu(e,a,r,2),n!==null&&kn(n,e,2)}function xl(e){var n=e.alternate;return e===lt||n!==null&&n===lt}function om(e,n){qs=hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function lm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ir(e,a)}}var oo={readContext:En,use:ml,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};oo.useEffectEvent=Jt;var cm={readContext:En,use:ml,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:jp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_l(4194308,4,Kp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _l(4194308,4,e,n)},useInsertionEffect:function(e,n){_l(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var r=e();if(cs){ze(!0);try{e()}finally{ze(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=zn();if(a!==void 0){var c=a(n);if(cs){ze(!0);try{a(n)}finally{ze(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=tx.bind(null,lt,e),[r.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Uu(e);var n=e.queue,a=rm.bind(null,lt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ou,useDeferredValue:function(e,n){var a=zn();return zu(a,e,n)},useTransition:function(){var e=Uu(!1);return e=tm.bind(null,lt,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=lt,c=zn();if(Et){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),kt===null)throw Error(s(349));(St&127)!==0||Dp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,jp(Lp.bind(null,r,f,e),[e]),r.flags|=2048,Zs(9,{destroy:void 0},Up.bind(null,r,f,a,n),null),a},useId:function(){var e=zn(),n=kt.identifierPrefix;if(Et){var a=wi,r=Ri;a=(r&~(1<<32-tt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Yv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Iu,useFormState:Gp,useActionState:Gp,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Bu.bind(null,lt,!0,a),a.dispatch=n,[e,n]},useMemoCache:wu,useCacheRefresh:function(){return zn().memoizedState=ex.bind(null,lt)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Fu={readContext:En,use:ml,useCallback:Jp,useContext:En,useEffect:Nu,useImperativeHandle:Qp,useInsertionEffect:Yp,useLayoutEffect:Zp,useMemo:$p,useReducer:gl,useRef:Wp,useState:function(){return gl(Wi)},useDebugValue:Ou,useDeferredValue:function(e,n){var a=nn();return em(a,It.memoizedState,e,n)},useTransition:function(){var e=gl(Wi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:Cp,useId:am,useHostTransitionStatus:Iu,useFormState:Vp,useActionState:Vp,useOptimistic:function(e,n){var a=nn();return zp(a,It,e,n)},useMemoCache:wu,useCacheRefresh:sm};Fu.useEffectEvent=qp;var um={readContext:En,use:ml,useCallback:Jp,useContext:En,useEffect:Nu,useImperativeHandle:Qp,useInsertionEffect:Yp,useLayoutEffect:Zp,useMemo:$p,useReducer:Du,useRef:Wp,useState:function(){return Du(Wi)},useDebugValue:Ou,useDeferredValue:function(e,n){var a=nn();return It===null?zu(a,e,n):em(a,It.memoizedState,e,n)},useTransition:function(){var e=Du(Wi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:Cp,useId:am,useHostTransitionStatus:Iu,useFormState:Xp,useActionState:Xp,useOptimistic:function(e,n){var a=nn();return It!==null?zp(a,It,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wu,useCacheRefresh:sm};um.useEffectEvent=qp;function Hu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=$n(),c=xa(r);c.payload=n,a!=null&&(c.callback=a),n=Sa(e,c,r),n!==null&&(kn(n,e,r),to(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=$n(),c=xa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Sa(e,c,r),n!==null&&(kn(n,e,r),to(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),r=xa(a);r.tag=2,n!=null&&(r.callback=n),n=Sa(e,r,a),n!==null&&(kn(n,e,a),to(n,e,a))}};function fm(e,n,a,r,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!qr(a,r)||!qr(c,f):!0}function hm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Gu.enqueueReplaceState(n,n.state,null)}function us(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function dm(e){Qo(e)}function pm(e){console.error(e)}function mm(e){Qo(e)}function Sl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function gm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Vu(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(e,n)},a}function _m(e){return e=xa(e),e.tag=3,e}function vm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){gm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){gm(n,a,r),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function nx(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Gs(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Ll():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),pf(e,r,c)),!1;case 22:return a.flags|=65536,r===ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),pf(e,r,c)),!1}throw Error(s(435,a.tag))}return pf(e,r,c),Ll(),!1}if(Et)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==ou&&(e=Error(s(422),{cause:r}),Kr(si(e,a)))):(r!==ou&&(n=Error(s(423),{cause:r}),Kr(si(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=si(r,a),c=Vu(e.stateNode,r,c),vu(e,c),$t!==4&&($t=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),go===null?go=[f]:go.push(f),$t!==4&&($t=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Vu(a.stateNode,r,e),vu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=_m(c),vm(c,e,a,r),vu(a,c),!1}a=a.return}while(a!==null);return!1}var ku=Error(s(461)),on=!1;function Tn(e,n,a,r){n.child=e===null?Mp(n,null,a,r):ls(n,e.child,a,r)}function xm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var E in r)E!=="ref"&&(v[E]=r[E])}else v=r;return as(n),r=Tu(e,n,a,v,f,c),E=bu(),e!==null&&!on?(Au(e,n,c),ji(e,n,c)):(Et&&E&&su(n),n.flags|=1,Tn(e,n,r,c),n.child)}function Sm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!nu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,ym(e,n,f,r,c)):(e=tl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Qu(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:qr,a(v,r)&&e.ref===n.ref)return ji(e,n,c)}return n.flags|=1,e=Hi(f,r),e.ref=n.ref,e.return=n,n.child=e}function ym(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(qr(f,r)&&e.ref===n.ref)if(on=!1,n.pendingProps=r=f,Qu(e,c))(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,ji(e,n,c)}return Xu(e,n,a,r,c)}function Mm(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Em(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&sl(n,f!==null?f.cachePool:null),f!==null?bp(n,f):Su(),Ap(n);else return r=n.lanes=536870912,Em(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(sl(n,f.cachePool),bp(n,f),Ma(),n.memoizedState=null):(e!==null&&sl(n,null),Su(),Ma());return Tn(e,n,c,a),n.child}function lo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Em(e,n,a,r,c){var f=pu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&sl(n,null),Su(),Ap(n),e!==null&&Gs(e,n,r,!0),n.childLanes=c,null}function yl(e,n){return n=El({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Tm(e,n,a){return ls(n,e.child,null,a),e=yl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function ix(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Et){if(r.mode==="hidden")return e=yl(n,r),n.lanes=536870912,lo(null,e);if(Mu(n),(e=jt)?(e=Pg(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ri,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=op(e),a.return=n,n.child=a,Mn=n,jt=null)):e=null,e===null)throw ga(n);return n.lanes=536870912,null}return yl(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Mu(n),c)if(n.flags&256)n.flags&=-257,n=Tm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(on||Gs(e,n,a,!1),c=(a&e.childLanes)!==0,on||c){if(r=kt,r!==null&&(v=bi(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,es(e,v),kn(r,e,v),ku;Ll(),n=Tm(e,n,a)}else e=f.treeContext,jt=ui(v.nextSibling),Mn=n,Et=!0,ma=null,li=!1,e!==null&&up(n,e),n=yl(n,r),n.flags|=4096;return n}return e=Hi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ml(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Xu(e,n,a,r,c){return as(n),a=Tu(e,n,a,r,void 0,c),r=bu(),e!==null&&!on?(Au(e,n,c),ji(e,n,c)):(Et&&r&&su(n),n.flags|=1,Tn(e,n,a,c),n.child)}function bm(e,n,a,r,c,f){return as(n),n.updateQueue=null,a=wp(n,r,a,c),Rp(e),r=bu(),e!==null&&!on?(Au(e,n,f),ji(e,n,f)):(Et&&r&&su(n),n.flags|=1,Tn(e,n,a,f),n.child)}function Am(e,n,a,r,c){if(as(n),n.stateNode===null){var f=Is,v=a.contextType;typeof v=="object"&&v!==null&&(f=En(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},gu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?En(v):Is,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Hu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Gu.enqueueReplaceState(f,f.state,null),io(n,r,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,P=us(a,E);f.props=P;var ee=f.context,he=a.contextType;v=Is,typeof he=="object"&&he!==null&&(v=En(he));var _e=a.getDerivedStateFromProps;he=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||ee!==v)&&hm(n,f,r,v),va=!1;var ie=n.memoizedState;f.state=ie,io(n,r,f,c),no(),ee=n.memoizedState,E||ie!==ee||va?(typeof _e=="function"&&(Hu(n,a,_e,r),ee=n.memoizedState),(P=va||fm(n,a,P,r,ie,ee,v))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ee),f.props=r,f.state=ee,f.context=v,r=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,_u(e,n),v=n.memoizedProps,he=us(a,v),f.props=he,_e=n.pendingProps,ie=f.context,ee=a.contextType,P=Is,typeof ee=="object"&&ee!==null&&(P=En(ee)),E=a.getDerivedStateFromProps,(ee=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_e||ie!==P)&&hm(n,f,r,P),va=!1,ie=n.memoizedState,f.state=ie,io(n,r,f,c),no();var le=n.memoizedState;v!==_e||ie!==le||va||e!==null&&e.dependencies!==null&&il(e.dependencies)?(typeof E=="function"&&(Hu(n,a,E,r),le=n.memoizedState),(he=va||fm(n,a,he,r,ie,le,P)||e!==null&&e.dependencies!==null&&il(e.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,le,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,le,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=le),f.props=r,f.state=le,f.context=P,r=he):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ml(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ls(n,e.child,null,c),n.child=ls(n,null,a,c)):Tn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ji(e,n,c),e}function Rm(e,n,a,r){return ns(),n.flags|=256,Tn(e,n,a,r),n.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ju(e){return{baseLanes:e,cachePool:gp()}}function qu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function wm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Et){if(c?ya(n):Ma(),(e=jt)?(e=Pg(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ri,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=op(e),a.return=n,n.child=a,Mn=n,jt=null)):e=null,e===null)throw ga(n);return Df(e)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(Ma(),c=n.mode,E=El({mode:"hidden",children:E},c),r=ts(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=ju(a),r.childLanes=qu(e,v,a),n.memoizedState=Wu,lo(null,r)):(ya(n),Yu(n,E))}var P=e.memoizedState;if(P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(ya(n),n.flags&=-257,n=Zu(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),E=r.fallback,c=n.mode,r=El({mode:"visible",children:r.children},c),E=ts(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,ls(n,e.child,null,a),r=n.child,r.memoizedState=ju(a),r.childLanes=qu(e,v,a),n.memoizedState=Wu,n=lo(null,r));else if(ya(n),Df(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var ee=v.dgst;v=ee,r=Error(s(419)),r.stack="",r.digest=v,Kr({value:r,source:null,stack:null}),n=Zu(e,n,a)}else if(on||Gs(e,n,a,!1),v=(a&e.childLanes)!==0,on||v){if(v=kt,v!==null&&(r=bi(v,a),r!==0&&r!==P.retryLane))throw P.retryLane=r,es(e,r),kn(v,e,r),ku;Cf(E)||Ll(),n=Zu(e,n,a)}else Cf(E)?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,jt=ui(E.nextSibling),Mn=n,Et=!0,ma=null,li=!1,e!==null&&up(n,e),n=Yu(n,r.children),n.flags|=4096);return n}return c?(Ma(),E=r.fallback,c=n.mode,P=e.child,ee=P.sibling,r=Hi(P,{mode:"hidden",children:r.children}),r.subtreeFlags=P.subtreeFlags&65011712,ee!==null?E=Hi(ee,E):(E=ts(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,lo(null,r),r=n.child,E=e.child.memoizedState,E===null?E=ju(a):(c=E.cachePool,c!==null?(P=sn._currentValue,c=c.parent!==P?{parent:P,pool:P}:c):c=gp(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=qu(e,v,a),n.memoizedState=Wu,lo(e.child,r)):(ya(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Yu(e,n){return n=El({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function El(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function Zu(e,n,a){return ls(n,e.child,null,a),e=Yu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),uu(e.return,n,a)}function Ku(e,n,a,r,c,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function Dm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var v=tn.current,E=(v&2)!==0;if(E?(v=v&1|2,n.flags|=128):v&=1,Se(tn,v),Tn(e,n,r,a),r=Et?Zr:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cm(e,a,n);else if(e.tag===19)Cm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&fl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ku(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&fl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Ku(n,!0,a,null,f,r);break;case"together":Ku(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Gs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Qu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&il(e)))}function ax(e,n,a){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),_a(n,sn,e.memoizedState.cache),ns();break;case 27:case 5:at(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?wm(e,n,a):(ya(n),e=ji(e,n,a),e!==null?e.sibling:null);ya(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Gs(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Dm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Se(tn,tn.current),r)break;return null;case 22:return n.lanes=0,Mm(e,n,a,n.pendingProps);case 24:_a(n,sn,e.memoizedState.cache)}return ji(e,n,a)}function Um(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)on=!0;else{if(!Qu(e,a)&&(n.flags&128)===0)return on=!1,ax(e,n,a);on=(e.flags&131072)!==0}else on=!1,Et&&(n.flags&1048576)!==0&&cp(n,Zr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=rs(n.elementType),n.type=e,typeof e=="function")nu(e)?(r=us(e,r),n.tag=1,n=Am(null,n,e,r,a)):(n.tag=0,n=Xu(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===D){n.tag=11,n=xm(null,n,e,r,a);break e}else if(c===z){n.tag=14,n=Sm(null,n,e,r,a);break e}}throw n=fe(e)||e,Error(s(306,n,""))}}return n;case 0:return Xu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=us(r,n.pendingProps),Am(e,n,r,c,a);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,_u(e,n),io(n,r,null,a);var v=n.memoizedState;if(r=v.cache,_a(n,sn,r),r!==f.cache&&fu(n,[sn],a,!0),no(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Rm(e,n,r,a);break e}else if(r!==c){c=si(Error(s(424)),n),Kr(c),n=Rm(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(jt=ui(e.firstChild),Mn=n,Et=!0,ma=null,li=!0,a=Mp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ns(),r===c){n=ji(e,n,a);break e}Tn(e,n,r,a)}n=n.child}return n;case 26:return Ml(e,n),e===null?(a=Vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,e=n.pendingProps,r=Fl(be.current).createElement(a),r[Qt]=n,r[yn]=e,bn(r,a,e),xe(r),n.stateNode=r):n.memoizedState=Vg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return at(n),e===null&&Et&&(r=n.stateNode=Fg(n.type,n.pendingProps,be.current),Mn=n,li=!0,c=jt,Da(n.type)?(Uf=c,jt=ui(r.firstChild)):jt=c),Tn(e,n,n.pendingProps.children,a),Ml(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Et&&((c=r=jt)&&(r=Ox(r,n.type,n.pendingProps,li),r!==null?(n.stateNode=r,Mn=n,jt=ui(r.firstChild),li=!1,c=!0):c=!1),c||ga(n)),at(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Af(c,f)?r=null:v!==null&&Af(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Tu(e,n,Zv,null,null,a),To._currentValue=c),Ml(e,n),Tn(e,n,r,a),n.child;case 6:return e===null&&Et&&((e=a=jt)&&(a=zx(a,n.pendingProps,li),a!==null?(n.stateNode=a,Mn=n,jt=null,e=!0):e=!1),e||ga(n)),null;case 13:return wm(e,n,a);case 4:return He(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ls(n,null,r,a):Tn(e,n,r,a),n.child;case 11:return xm(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,_a(n,n.type,r.value),Tn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,as(n),c=En(c),r=r(c),n.flags|=1,Tn(e,n,r,a),n.child;case 14:return Sm(e,n,n.type,n.pendingProps,a);case 15:return ym(e,n,n.type,n.pendingProps,a);case 19:return Dm(e,n,a);case 31:return ix(e,n,a);case 22:return Mm(e,n,a,n.pendingProps);case 24:return as(n),r=En(sn),e===null?(c=pu(),c===null&&(c=kt,f=hu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},gu(n),_a(n,sn,c)):((e.lanes&a)!==0&&(_u(e,n),io(n,null,null,a),no()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),_a(n,sn,r)):(r=f.cache,_a(n,sn,r),r!==c.cache&&fu(n,[sn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function qi(e){e.flags|=4}function Ju(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(ag())e.flags|=8192;else throw os=ol,mu}else e.flags&=-16777217}function Lm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qg(n))if(ag())e.flags|=8192;else throw os=ol,mu}function Tl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?fn():536870912,e.lanes|=n,$s|=n)}function co(e,n){if(!Et)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function sx(e,n,a){var r=n.pendingProps;switch(ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ki(sn),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hs(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lu())),qt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(qi(n),f!==null?(qt(n),Lm(n,f)):(qt(n),Ju(n,c,null,r,a))):f?f!==e.memoizedState?(qi(n),qt(n),Lm(n,f)):(qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&qi(n),qt(n),Ju(n,c,e,r,a)),null;case 27:if(Rt(n),a=be.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qt(n),null}e=Z.current,Hs(n)?fp(n):(e=Fg(c,r,a),n.stateNode=e,qi(n))}return qt(n),null;case 5:if(Rt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qt(n),null}if(f=Z.current,Hs(n))fp(n);else{var v=Fl(be.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(c,{is:r.is}):v.createElement(c)}}f[Qt]=n,f[yn]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(bn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&qi(n)}}return qt(n),Ju(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&qi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=be.current,Hs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Mn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[Qt]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||wg(e.nodeValue,a)),e||ga(n,!0)}else e=Fl(e).createTextNode(r),e[Qt]=n,n.stateNode=e}return qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Hs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Qt]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),e=!1}else a=lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Hs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Qt]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),qt(n),null);case 4:return Ie(),e===null&&yf(n.stateNode.containerInfo),qt(n),null;case 10:return ki(n.type),qt(n),null;case 19:if(ne(tn),r=n.memoizedState,r===null)return qt(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)co(r,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=fl(e),f!==null){for(n.flags|=128,co(r,!1),e=f.updateQueue,n.updateQueue=e,Tl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)rp(a,e),a=a.sibling;return Se(tn,tn.current&1|2),Et&&Gi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&pe()>Cl&&(n.flags|=128,c=!0,co(r,!1),n.lanes=4194304)}else{if(!c)if(e=fl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Tl(n,e),co(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Et)return qt(n),null}else 2*pe()-r.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,c=!0,co(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=pe(),e.sibling=null,a=tn.current,Se(tn,c?a&1|2:a&1),Et&&Gi(n,r.treeForkCount),e):(qt(n),null);case 22:case 23:return Kn(n),yu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ne(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(sn),qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function rx(e,n){switch(ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(sn),Ie(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Rt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(tn),null;case 4:return Ie(),null;case 10:return ki(n.type),null;case 22:case 23:return Kn(n),yu(),e!==null&&ne(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(sn),null;case 25:return null;default:return null}}function Nm(e,n){switch(ru(n),n.tag){case 3:ki(sn),Ie();break;case 26:case 27:case 5:Rt(n);break;case 4:Ie();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:ne(tn);break;case 10:ki(n.type);break;case 22:case 23:Kn(n),yu(),e!==null&&ne(ss);break;case 24:ki(sn)}}function uo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==c)}}catch(E){zt(n,n.return,E)}}function Ea(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var v=r.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,c=n;var P=a,ee=E;try{ee()}catch(he){zt(c,P,he)}}}r=r.next}while(r!==f)}}catch(he){zt(n,n.return,he)}}function Om(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Tp(n,a)}catch(r){zt(e,e.return,r)}}}function zm(e,n,a){a.props=us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){zt(e,n,r)}}function fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){zt(e,n,c)}}function Ci(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){zt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(e,n,c)}else a.current=null}function Pm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){zt(e,e.return,c)}}function $u(e,n,a){try{var r=e.stateNode;wx(r,e.type,a,n),r[yn]=n}catch(c){zt(e,e.return,c)}}function Im(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Im(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(r!==4&&(r===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(tf(e,n,a),e=e.sibling;e!==null;)tf(e,n,a),e=e.sibling}function bl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(bl(e,n,a),e=e.sibling;e!==null;)bl(e,n,a),e=e.sibling}function Bm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,r,a),n[Qt]=e,n[yn]=a}catch(f){zt(e,e.return,f)}}var Yi=!1,ln=!1,nf=!1,Fm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function ox(e,n){if(e=e.containerInfo,Tf=jl,e=Qd(e),Zc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,E=-1,P=-1,ee=0,he=0,_e=e,ie=null;t:for(;;){for(var le;_e!==a||c!==0&&_e.nodeType!==3||(E=v+c),_e!==f||r!==0&&_e.nodeType!==3||(P=v+r),_e.nodeType===3&&(v+=_e.nodeValue.length),(le=_e.firstChild)!==null;)ie=_e,_e=le;for(;;){if(_e===e)break t;if(ie===a&&++ee===c&&(E=v),ie===f&&++he===r&&(P=v),(le=_e.nextSibling)!==null)break;_e=ie,ie=_e.parentNode}_e=le}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(bf={focusedElem:e,selectionRange:a},jl=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var ke=us(a.type,c);e=r.getSnapshotBeforeUpdate(ke,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(et){zt(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)wf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Hm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ki(e,a),r&4&&uo(5,a);break;case 1:if(Ki(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){zt(a,a.return,v)}else{var c=us(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){zt(a,a.return,v)}}r&64&&Om(a),r&512&&fo(a,a.return);break;case 3:if(Ki(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Tp(e,n)}catch(v){zt(a,a.return,v)}}break;case 27:n===null&&r&4&&Bm(a);case 26:case 5:Ki(e,a),n===null&&r&4&&Pm(a),r&512&&fo(a,a.return);break;case 12:Ki(e,a);break;case 31:Ki(e,a),r&4&&km(e,a);break;case 13:Ki(e,a),r&4&&Xm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=gx.bind(null,a),Px(e,a))));break;case 22:if(r=a.memoizedState!==null||Yi,!r){n=n!==null&&n.memoizedState!==null||ln,c=Yi;var f=ln;Yi=r,(ln=n)&&!f?Qi(e,a,(a.subtreeFlags&8772)!==0):Ki(e,a),Yi=c,ln=f}break;case 30:break;default:Ki(e,a)}}function Gm(e){var n=e.alternate;n!==null&&(e.alternate=null,Gm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&A(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Zt=null,Fn=!1;function Zi(e,n,a){for(a=a.child;a!==null;)Vm(e,n,a),a=a.sibling}function Vm(e,n,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Ke,a)}catch{}switch(a.tag){case 26:ln||Ci(a,n),Zi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Ci(a,n);var r=Zt,c=Fn;Da(a.type)&&(Zt=a.stateNode,Fn=!1),Zi(e,n,a),yo(a.stateNode),Zt=r,Fn=c;break;case 5:ln||Ci(a,n);case 6:if(r=Zt,c=Fn,Zt=null,Zi(e,n,a),Zt=r,Fn=c,Zt!==null)if(Fn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Zt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Zt!==null&&(Fn?(e=Zt,Og(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),or(e)):Og(Zt,a.stateNode));break;case 4:r=Zt,c=Fn,Zt=a.stateNode.containerInfo,Fn=!0,Zi(e,n,a),Zt=r,Fn=c;break;case 0:case 11:case 14:case 15:Ea(2,a,n),ln||Ea(4,a,n),Zi(e,n,a);break;case 1:ln||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&zm(a,n,r)),Zi(e,n,a);break;case 21:Zi(e,n,a);break;case 22:ln=(r=ln)||a.memoizedState!==null,Zi(e,n,a),ln=r;break;default:Zi(e,n,a)}}function km(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{or(e)}catch(a){zt(n,n.return,a)}}}function Xm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{or(e)}catch(a){zt(n,n.return,a)}}function lx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Fm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Fm),n;default:throw Error(s(435,e.tag))}}function Al(e,n){var a=lx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=_x.bind(null,e,r);r.then(c,c)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,v=n,E=v;e:for(;E!==null;){switch(E.tag){case 27:if(Da(E.type)){Zt=E.stateNode,Fn=!1;break e}break;case 5:Zt=E.stateNode,Fn=!1;break e;case 3:case 4:Zt=E.stateNode.containerInfo,Fn=!0;break e}E=E.return}if(Zt===null)throw Error(s(160));Vm(f,v,c),Zt=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wm(n,e),n=n.sibling}var gi=null;function Wm(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),r&4&&(Ea(3,e,e.return),uo(3,e),Ea(5,e,e.return));break;case 1:Hn(n,e),Gn(e),r&512&&(ln||a===null||Ci(a,a.return)),r&64&&Yi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=gi;if(Hn(n,e),Gn(e),r&512&&(ln||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Za]||f[Qt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,r,a),f[Qt]=e,xe(f),r=f;break e;case"link":var v=Wg("link","href",c).get(r+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(f=v[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break t}}f=c.createElement(r),bn(f,r,a),c.head.appendChild(f);break;case"meta":if(v=Wg("meta","content",c).get(r+(a.content||""))){for(E=0;E<v.length;E++)if(f=v[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break t}}f=c.createElement(r),bn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Qt]=e,xe(f),r=f}e.stateNode=r}else jg(c,e.type,e.stateNode);else e.stateNode=Xg(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?jg(c,e.type,e.stateNode):Xg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&$u(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),r&512&&(ln||a===null||Ci(a,a.return)),a!==null&&r&4&&$u(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),r&512&&(ln||a===null||Ci(a,a.return)),e.flags&32){c=e.stateNode;try{Ds(c,"")}catch(ke){zt(e,e.return,ke)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,$u(e,c,a!==null?a.memoizedProps:c)),r&1024&&(nf=!0);break;case 6:if(Hn(n,e),Gn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(ke){zt(e,e.return,ke)}}break;case 3:if(Vl=null,c=gi,gi=Hl(n.containerInfo),Hn(n,e),gi=c,Gn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{or(n.containerInfo)}catch(ke){zt(e,e.return,ke)}nf&&(nf=!1,jm(e));break;case 4:r=gi,gi=Hl(e.stateNode.containerInfo),Hn(n,e),Gn(e),gi=r;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Al(e,r)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wl=pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Al(e,r)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,ee=Yi,he=ln;if(Yi=ee||c,ln=he||P,Hn(n,e),ln=he,Yi=ee,Gn(e),r&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Yi||ln||fs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=P.stateNode;var _e=P.memoizedProps.style,ie=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;E.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(ke){zt(P,P.return,ke)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(ke){zt(P,P.return,ke)}}}else if(n.tag===18){if(a===null){P=n;try{var le=P.stateNode;c?zg(le,!0):zg(P.stateNode,!1)}catch(ke){zt(P,P.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Al(e,a))));break;case 19:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Al(e,r)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Im(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=ef(e);bl(e,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(Ds(v,""),a.flags&=-33);var E=ef(e);bl(e,E,v);break;case 3:case 4:var P=a.stateNode.containerInfo,ee=ef(e);tf(e,ee,P);break;default:throw Error(s(161))}}catch(he){zt(e,e.return,he)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function jm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;jm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ki(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hm(e,n.alternate,n),n=n.sibling}function fs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),fs(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&zm(n,n.return,a),fs(n);break;case 27:yo(n.stateNode);case 26:case 5:Ci(n,n.return),fs(n);break;case 22:n.memoizedState===null&&fs(n);break;case 30:fs(n);break;default:fs(n)}e=e.sibling}}function Qi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Qi(c,f,a),uo(4,f);break;case 1:if(Qi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ee){zt(r,r.return,ee)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Ep(P[c],E)}catch(ee){zt(r,r.return,ee)}}a&&v&64&&Om(f),fo(f,f.return);break;case 27:Bm(f);case 26:case 5:Qi(c,f,a),a&&r===null&&v&4&&Pm(f),fo(f,f.return);break;case 12:Qi(c,f,a);break;case 31:Qi(c,f,a),a&&v&4&&km(c,f);break;case 13:Qi(c,f,a),a&&v&4&&Xm(c,f);break;case 22:f.memoizedState===null&&Qi(c,f,a),fo(f,f.return);break;case 30:break;default:Qi(c,f,a)}n=n.sibling}}function af(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qr(a))}function sf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e))}function _i(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qm(e,n,a,r),n=n.sibling}function qm(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(e,n,a,r),c&2048&&uo(9,n);break;case 1:_i(e,n,a,r);break;case 3:_i(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e)));break;case 12:if(c&2048){_i(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,E=f.onPostCommit;typeof E=="function"&&E(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){zt(n,n.return,P)}}else _i(e,n,a,r);break;case 31:_i(e,n,a,r);break;case 13:_i(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?_i(e,n,a,r):ho(e,n):f._visibility&2?_i(e,n,a,r):(f._visibility|=2,Ks(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&af(v,n);break;case 24:_i(e,n,a,r),c&2048&&sf(n.alternate,n);break;default:_i(e,n,a,r)}}function Ks(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,E=a,P=r,ee=v.flags;switch(v.tag){case 0:case 11:case 15:Ks(f,v,E,P,c),uo(8,v);break;case 23:break;case 22:var he=v.stateNode;v.memoizedState!==null?he._visibility&2?Ks(f,v,E,P,c):ho(f,v):(he._visibility|=2,Ks(f,v,E,P,c)),c&&ee&2048&&af(v.alternate,v);break;case 24:Ks(f,v,E,P,c),c&&ee&2048&&sf(v.alternate,v);break;default:Ks(f,v,E,P,c)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:ho(a,r),c&2048&&af(r.alternate,r);break;case 24:ho(a,r),c&2048&&sf(r.alternate,r);break;default:ho(a,r)}n=n.sibling}}var po=8192;function Qs(e,n,a){if(e.subtreeFlags&po)for(e=e.child;e!==null;)Ym(e,n,a),e=e.sibling}function Ym(e,n,a){switch(e.tag){case 26:Qs(e,n,a),e.flags&po&&e.memoizedState!==null&&Yx(a,gi,e.memoizedState,e.memoizedProps);break;case 5:Qs(e,n,a);break;case 3:case 4:var r=gi;gi=Hl(e.stateNode.containerInfo),Qs(e,n,a),gi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=po,po=16777216,Qs(e,n,a),po=r):Qs(e,n,a));break;default:Qs(e,n,a)}}function Zm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,Qm(r,e)}Zm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Km(e),e=e.sibling}function Km(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Rl(e)):mo(e);break;default:mo(e)}}function Rl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,Qm(r,e)}Zm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}e=e.sibling}}function Qm(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Qr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else e:for(a=e;_n!==null;){r=_n;var c=r.sibling,f=r.return;if(Gm(r),r===a){_n=null;break e}if(c!==null){c.return=f,_n=c;break e}_n=f}}}var cx={getCacheForType:function(e){var n=En(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(sn).controller.signal}},ux=typeof WeakMap=="function"?WeakMap:Map,Nt=0,kt=null,gt=null,St=0,Ot=0,Qn=null,Ta=!1,Js=!1,rf=!1,Ji=0,$t=0,ba=0,hs=0,of=0,Jn=0,$s=0,go=null,Vn=null,lf=!1,wl=0,Jm=0,Cl=1/0,Dl=null,Aa=null,dn=0,Ra=null,er=null,$i=0,cf=0,uf=null,$m=null,_o=0,ff=null;function $n(){return(Nt&2)!==0&&St!==0?St&-St:O.T!==null?_f():Br()}function eg(){if(Jn===0)if((St&536870912)===0||Et){var e=ce;ce<<=1,(ce&3932160)===0&&(ce=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function kn(e,n,a){(e===kt&&(Ot===2||Ot===9)||e.cancelPendingCommit!==null)&&(tr(e,0),wa(e,St,Jn,!1)),Sn(e,a),((Nt&2)===0||e!==kt)&&(e===kt&&((Nt&2)===0&&(hs|=a),$t===4&&wa(e,St,Jn,!1)),Di(e))}function tg(e,n,a){if((Nt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||nt(e,n),c=r?dx(e,n):df(e,n,!0),f=r;do{if(c===0){Js&&!r&&wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!fx(a)){c=df(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var E=e;c=go;var P=E.current.memoizedState.isDehydrated;if(P&&(tr(E,v).flags|=256),v=df(E,v,!1),v!==2){if(rf&&!P){E.errorRecoveryDisabledLanes|=f,hs|=f,c=4;break e}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){tr(e,0),wa(e,n,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:wa(r,n,Jn,!Ta);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=wl+300-pe(),10<c)){if(wa(r,n,Jn,!Ta),De(r,0,!0)!==0)break e;$i=n,r.timeoutHandle=Lg(ng.bind(null,r,a,Vn,Dl,lf,n,Jn,hs,$s,Ta,f,"Throttled",-0,0),c);break e}ng(r,a,Vn,Dl,lf,n,Jn,hs,$s,Ta,f,null,-0,0)}}break}while(!0);Di(e)}function ng(e,n,a,r,c,f,v,E,P,ee,he,_e,ie,le){if(e.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},Ym(n,f,_e);var ke=(f&62914560)===f?wl-pe():(f&4194048)===f?Jm-pe():0;if(ke=Zx(_e,ke),ke!==null){$i=f,e.cancelPendingCommit=ke(ug.bind(null,e,n,f,a,r,c,v,E,P,he,_e,null,ie,le)),wa(e,f,v,!ee);return}}ug(e,n,f,a,r,c,v,E,P)}function fx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,a,r){n&=~of,n&=~hs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-tt(c),v=1<<f;r[f]=-1,c&=~v}a!==0&&Pr(e,a,n)}function Ul(){return(Nt&6)===0?(vo(0),!1):!0}function hf(){if(gt!==null){if(Ot===0)var e=gt.return;else e=gt,Vi=is=null,Ru(e),Ws=null,$r=0,e=gt;for(;e!==null;)Nm(e.alternate,e),e=e.return;gt=null}}function tr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ux(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$i=0,hf(),kt=e,gt=a=Hi(e.current,null),St=n,Ot=0,Qn=null,Ta=!1,Js=nt(e,n),rf=!1,$s=Jn=of=hs=ba=$t=0,Vn=go=null,lf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-tt(r),f=1<<c;n|=e[c],r&=~f}return Ji=n,Jo(),a}function ig(e,n){lt=null,O.H=oo,n===Xs||n===rl?(n=xp(),Ot=3):n===mu?(n=xp(),Ot=4):Ot=n===ku?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,gt===null&&($t=1,Sl(e,si(n,e.current)))}function ag(){var e=Zn.current;return e===null?!0:(St&4194048)===St?ci===null:(St&62914560)===St||(St&536870912)!==0?e===ci:!1}function sg(){var e=O.H;return O.H=oo,e===null?oo:e}function rg(){var e=O.A;return O.A=cx,e}function Ll(){$t=4,Ta||(St&4194048)!==St&&Zn.current!==null||(Js=!0),(ba&134217727)===0&&(hs&134217727)===0||kt===null||wa(kt,St,Jn,!1)}function df(e,n,a){var r=Nt;Nt|=2;var c=sg(),f=rg();(kt!==e||St!==n)&&(Dl=null,tr(e,n)),n=!1;var v=$t;e:do try{if(Ot!==0&&gt!==null){var E=gt,P=Qn;switch(Ot){case 8:hf(),v=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var ee=Ot;if(Ot=0,Qn=null,nr(e,E,P,ee),a&&Js){v=0;break e}break;default:ee=Ot,Ot=0,Qn=null,nr(e,E,P,ee)}}hx(),v=$t;break}catch(he){ig(e,he)}while(!0);return n&&e.shellSuspendCounter++,Vi=is=null,Nt=r,O.H=c,O.A=f,gt===null&&(kt=null,St=0,Jo()),v}function hx(){for(;gt!==null;)og(gt)}function dx(e,n){var a=Nt;Nt|=2;var r=sg(),c=rg();kt!==e||St!==n?(Dl=null,Cl=pe()+500,tr(e,n)):Js=nt(e,n);e:do try{if(Ot!==0&&gt!==null){n=gt;var f=Qn;t:switch(Ot){case 1:Ot=0,Qn=null,nr(e,n,f,1);break;case 2:case 9:if(_p(f)){Ot=0,Qn=null,lg(n);break}n=function(){Ot!==2&&Ot!==9||kt!==e||(Ot=7),Di(e)},f.then(n,n);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:_p(f)?(Ot=0,Qn=null,lg(n)):(Ot=0,Qn=null,nr(e,n,f,7));break;case 5:var v=null;switch(gt.tag){case 26:v=gt.memoizedState;case 5:case 27:var E=gt;if(v?qg(v):E.stateNode.complete){Ot=0,Qn=null;var P=E.sibling;if(P!==null)gt=P;else{var ee=E.return;ee!==null?(gt=ee,Nl(ee)):gt=null}break t}}Ot=0,Qn=null,nr(e,n,f,5);break;case 6:Ot=0,Qn=null,nr(e,n,f,6);break;case 8:hf(),$t=6;break e;default:throw Error(s(462))}}px();break}catch(he){ig(e,he)}while(!0);return Vi=is=null,O.H=r,O.A=c,Nt=a,gt!==null?0:(kt=null,St=0,Jo(),$t)}function px(){for(;gt!==null&&!T();)og(gt)}function og(e){var n=Um(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,n===null?Nl(e):gt=n}function lg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=bm(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=bm(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Ru(n);default:Nm(a,n),n=gt=rp(n,Ji),n=Um(a,n,Ji)}e.memoizedProps=e.pendingProps,n===null?Nl(e):gt=n}function nr(e,n,a,r){Vi=is=null,Ru(n),Ws=null,$r=0;var c=n.return;try{if(nx(e,c,n,a,St)){$t=1,Sl(e,si(a,e.current)),gt=null;return}}catch(f){if(c!==null)throw gt=c,f;$t=1,Sl(e,si(a,e.current)),gt=null;return}n.flags&32768?(Et||r===1?e=!0:Js||(St&536870912)!==0?e=!1:(Ta=e=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),cg(n,e)):Nl(n)}function Nl(e){var n=e;do{if((n.flags&32768)!==0){cg(n,Ta);return}e=n.return;var a=sx(n.alternate,n,Ji);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);$t===0&&($t=5)}function cg(e,n){do{var a=rx(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);$t=6,gt=null}function ug(e,n,a,r,c,f,v,E,P){e.cancelPendingCommit=null;do Ol();while(dn!==0);if((Nt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=eu,di(e,a,f,v,E,P),e===kt&&(gt=kt=null,St=0),er=n,Ra=e,$i=a,cf=f,uf=c,$m=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vx(Ce,function(){return mg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,c=Q.p,Q.p=2,v=Nt,Nt|=4;try{ox(e,n,a)}finally{Nt=v,Q.p=c,O.T=r}}dn=1,fg(),hg(),dg()}}function fg(){if(dn===1){dn=0;var e=Ra,n=er,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=Q.p;Q.p=2;var c=Nt;Nt|=4;try{Wm(n,e);var f=bf,v=Qd(e.containerInfo),E=f.focusedElem,P=f.selectionRange;if(v!==E&&E&&E.ownerDocument&&Kd(E.ownerDocument.documentElement,E)){if(P!==null&&Zc(E)){var ee=P.start,he=P.end;if(he===void 0&&(he=ee),"selectionStart"in E)E.selectionStart=ee,E.selectionEnd=Math.min(he,E.value.length);else{var _e=E.ownerDocument||document,ie=_e&&_e.defaultView||window;if(ie.getSelection){var le=ie.getSelection(),ke=E.textContent.length,et=Math.min(P.start,ke),Ft=P.end===void 0?et:Math.min(P.end,ke);!le.extend&&et>Ft&&(v=Ft,Ft=et,et=v);var Y=Zd(E,et),V=Zd(E,Ft);if(Y&&V&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==V.node||le.focusOffset!==V.offset)){var $=_e.createRange();$.setStart(Y.node,Y.offset),le.removeAllRanges(),et>Ft?(le.addRange($),le.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),le.addRange($))}}}}for(_e=[],le=E;le=le.parentNode;)le.nodeType===1&&_e.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_e.length;E++){var me=_e[E];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}jl=!!Tf,bf=Tf=null}finally{Nt=c,Q.p=r,O.T=a}}e.current=n,dn=2}}function hg(){if(dn===2){dn=0;var e=Ra,n=er,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=Q.p;Q.p=2;var c=Nt;Nt|=4;try{Hm(e,n.alternate,n)}finally{Nt=c,Q.p=r,O.T=a}}dn=3}}function dg(){if(dn===4||dn===3){dn=0,te();var e=Ra,n=er,a=$i,r=$m;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,er=Ra=null,pg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Aa=null),ws(a),n=n.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,c=Q.p,Q.p=2,O.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var E=r[v];f(E.value,{componentStack:E.stack})}}finally{O.T=n,Q.p=c}}($i&3)!==0&&Ol(),Di(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===ff?_o++:(_o=0,ff=e):_o=0,vo(0)}}function pg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Qr(n)))}function Ol(){return fg(),hg(),dg(),mg()}function mg(){if(dn!==5)return!1;var e=Ra,n=cf;cf=0;var a=ws($i),r=O.T,c=Q.p;try{Q.p=32>a?32:a,O.T=null,a=uf,uf=null;var f=Ra,v=$i;if(dn=0,er=Ra=null,$i=0,(Nt&6)!==0)throw Error(s(331));var E=Nt;if(Nt|=4,Km(f.current),qm(f,f.current,v,a),Nt=E,vo(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Ke,f)}catch{}return!0}finally{Q.p=c,O.T=r,pg(e,n)}}function gg(e,n,a){n=si(a,n),n=Vu(e.stateNode,n,2),e=Sa(e,n,2),e!==null&&(Sn(e,2),Di(e))}function zt(e,n,a){if(e.tag===3)gg(e,e,a);else for(;n!==null;){if(n.tag===3){gg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Aa===null||!Aa.has(r))){e=si(a,e),a=_m(2),r=Sa(n,a,2),r!==null&&(vm(a,r,n,e),Sn(r,2),Di(r));break}}n=n.return}}function pf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new ux;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(rf=!0,c.add(a),e=mx.bind(null,e,n,a),n.then(e,e))}function mx(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,kt===e&&(St&a)===a&&($t===4||$t===3&&(St&62914560)===St&&300>pe()-wl?(Nt&2)===0&&tr(e,0):of|=a,$s===St&&($s=0)),Di(e)}function _g(e,n){n===0&&(n=fn()),e=es(e,n),e!==null&&(Sn(e,n),Di(e))}function gx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),_g(e,a)}function _x(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),_g(e,a)}function vx(e,n){return Xe(e,n)}var zl=null,ir=null,mf=!1,Pl=!1,gf=!1,Ca=0;function Di(e){e!==ir&&e.next===null&&(ir===null?zl=ir=e:ir=ir.next=e),Pl=!0,mf||(mf=!0,Sx())}function vo(e,n){if(!gf&&Pl){gf=!0;do for(var a=!1,r=zl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var v=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-tt(42|e)+1)-1,f&=c&~(v&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,yg(r,f))}else f=St,f=De(r,r===kt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||nt(r,f)||(a=!0,yg(r,f));r=r.next}while(a);gf=!1}}function xx(){vg()}function vg(){Pl=mf=!1;var e=0;Ca!==0&&Dx()&&(e=Ca);for(var n=pe(),a=null,r=zl;r!==null;){var c=r.next,f=xg(r,n);f===0?(r.next=null,a===null?zl=c:a.next=c,c===null&&(ir=a)):(a=r,(e!==0||(f&3)!==0)&&(Pl=!0)),r=c}dn!==0&&dn!==5||vo(e),Ca!==0&&(Ca=0)}function xg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-tt(f),E=1<<v,P=c[v];P===-1?((E&a)===0||(E&r)!==0)&&(c[v]=Yt(E,n)):P<=n&&(e.expiredLanes|=E),f&=~E}if(n=kt,a=St,a=De(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ot===2||Ot===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&U(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||nt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&U(r),ws(a)){case 2:case 8:a=qe;break;case 32:a=Ce;break;case 268435456:a=vt;break;default:a=Ce}return r=Sg.bind(null,e),a=Xe(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&U(r),e.callbackPriority=2,e.callbackNode=null,2}function Sg(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ol()&&e.callbackNode!==a)return null;var r=St;return r=De(e,e===kt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(tg(e,r,n),xg(e,pe()),e.callbackNode!=null&&e.callbackNode===a?Sg.bind(null,e):null)}function yg(e,n){if(Ol())return null;tg(e,n,!0)}function Sx(){Lx(function(){(Nt&6)!==0?Xe(ge,xx):vg()})}function _f(){if(Ca===0){var e=Vs;e===0&&(e=Re,Re<<=1,(Re&261888)===0&&(Re=256)),Ca=e}return Ca}function Mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xo(""+e)}function Eg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function yx(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Mg((c[yn]||null).action),v=r.submitter;v&&(n=(n=v[yn]||null)?Mg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var E=new Yo("action","action",null,r,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ca!==0){var P=v?Eg(c,v):new FormData(c);Pu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=v?Eg(c,v):new FormData(c),Pu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var vf=0;vf<$c.length;vf++){var xf=$c[vf],Mx=xf.toLowerCase(),Ex=xf[0].toUpperCase()+xf.slice(1);mi(Mx,"on"+Ex)}mi(ep,"onAnimationEnd"),mi(tp,"onAnimationIteration"),mi(np,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Fv,"onTransitionRun"),mi(Hv,"onTransitionStart"),mi(Gv,"onTransitionCancel"),mi(ip,"onTransitionEnd"),$e("onMouseEnter",["mouseout","mouseover"]),$e("onMouseLeave",["mouseout","mouseover"]),$e("onPointerEnter",["pointerout","pointerover"]),$e("onPointerLeave",["pointerout","pointerover"]),Pe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Tg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var E=r[v],P=E.instance,ee=E.currentTarget;if(E=E.listener,P!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=ee;try{f(c)}catch(he){Qo(he)}c.currentTarget=null,f=P}else for(v=0;v<r.length;v++){if(E=r[v],P=E.instance,ee=E.currentTarget,E=E.listener,P!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=ee;try{f(c)}catch(he){Qo(he)}c.currentTarget=null,f=P}}}}function _t(e,n){var a=n[Fr];a===void 0&&(a=n[Fr]=new Set);var r=e+"__bubble";a.has(r)||(bg(n,e,2,!1),a.add(r))}function Sf(e,n,a){var r=0;n&&(r|=4),bg(a,e,r,n)}var Il="_reactListening"+Math.random().toString(36).slice(2);function yf(e){if(!e[Il]){e[Il]=!0,Ue.forEach(function(a){a!=="selectionchange"&&(Tx.has(a)||Sf(a,!1,e),Sf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Il]||(n[Il]=!0,Sf("selectionchange",!1,n))}}function bg(e,n,a,r){switch(e0(n)){case 2:var c=Jx;break;case 8:c=$x;break;default:c=Pf}a=c.bind(null,n,a,e),c=void 0,!Hc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Mf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var E=r.stateNode.containerInfo;if(E===c)break;if(v===4)for(v=r.return;v!==null;){var P=v.tag;if((P===3||P===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;E!==null;){if(v=j(E),v===null)return;if(P=v.tag,P===5||P===6||P===26||P===27){r=f=v;continue e}E=E.parentNode}}r=r.return}Dd(function(){var ee=f,he=Bc(a),_e=[];e:{var ie=ap.get(e);if(ie!==void 0){var le=Yo,ke=e;switch(e){case"keypress":if(jo(a)===0)break e;case"keydown":case"keyup":le=_v;break;case"focusin":ke="focus",le=Xc;break;case"focusout":ke="blur",le=Xc;break;case"beforeblur":case"afterblur":le=Xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Sv;break;case ep:case tp:case np:le=lv;break;case ip:le=Mv;break;case"scroll":case"scrollend":le=iv;break;case"wheel":le=Tv;break;case"copy":case"cut":case"paste":le=uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=zd;break;case"toggle":case"beforetoggle":le=Av}var et=(n&4)!==0,Ft=!et&&(e==="scroll"||e==="scrollend"),Y=et?ie!==null?ie+"Capture":null:ie;et=[];for(var V=ee,$;V!==null;){var me=V;if($=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||$===null||Y===null||(me=Hr(V,Y),me!=null&&et.push(So(V,me,$))),Ft)break;V=V.return}0<et.length&&(ie=new le(ie,ke,null,a,he),_e.push({event:ie,listeners:et}))}}if((n&7)===0){e:{if(ie=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",ie&&a!==Ic&&(ke=a.relatedTarget||a.fromElement)&&(j(ke)||ke[Pi]))break e;if((le||ie)&&(ie=he.window===he?he:(ie=he.ownerDocument)?ie.defaultView||ie.parentWindow:window,le?(ke=a.relatedTarget||a.toElement,le=ee,ke=ke?j(ke):null,ke!==null&&(Ft=u(ke),et=ke.tag,ke!==Ft||et!==5&&et!==27&&et!==6)&&(ke=null)):(le=null,ke=ee),le!==ke)){if(et=Nd,me="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(et=zd,me="onPointerLeave",Y="onPointerEnter",V="pointer"),Ft=le==null?ie:oe(le),$=ke==null?ie:oe(ke),ie=new et(me,V+"leave",le,a,he),ie.target=Ft,ie.relatedTarget=$,me=null,j(he)===ee&&(et=new et(Y,V+"enter",ke,a,he),et.target=$,et.relatedTarget=Ft,me=et),Ft=me,le&&ke)t:{for(et=bx,Y=le,V=ke,$=0,me=Y;me;me=et(me))$++;me=0;for(var Je=V;Je;Je=et(Je))me++;for(;0<$-me;)Y=et(Y),$--;for(;0<me-$;)V=et(V),me--;for(;$--;){if(Y===V||V!==null&&Y===V.alternate){et=Y;break t}Y=et(Y),V=et(V)}et=null}else et=null;le!==null&&Ag(_e,ie,le,et,!1),ke!==null&&Ft!==null&&Ag(_e,Ft,ke,et,!0)}}e:{if(ie=ee?oe(ee):window,le=ie.nodeName&&ie.nodeName.toLowerCase(),le==="select"||le==="input"&&ie.type==="file")var Dt=kd;else if(Gd(ie))if(Xd)Dt=Pv;else{Dt=Ov;var je=Nv}else le=ie.nodeName,!le||le.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ee&&Pc(ee.elementType)&&(Dt=kd):Dt=zv;if(Dt&&(Dt=Dt(e,ee))){Vd(_e,Dt,a,he);break e}je&&je(e,ie,ee),e==="focusout"&&ee&&ie.type==="number"&&ee.memoizedProps.value!=null&&hn(ie,"number",ie.value)}switch(je=ee?oe(ee):window,e){case"focusin":(Gd(je)||je.contentEditable==="true")&&(Os=je,Kc=ee,Yr=null);break;case"focusout":Yr=Kc=Os=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,Jd(_e,a,he);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":Jd(_e,a,he)}var ct;if(jc)e:{switch(e){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Ns?Fd(e,a)&&(yt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(Pd&&a.locale!=="ko"&&(Ns||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Ns&&(ct=Ud()):(da=he,Gc="value"in da?da.value:da.textContent,Ns=!0)),je=Bl(ee,yt),0<je.length&&(yt=new Od(yt,e,null,a,he),_e.push({event:yt,listeners:je}),ct?yt.data=ct:(ct=Hd(a),ct!==null&&(yt.data=ct)))),(ct=wv?Cv(e,a):Dv(e,a))&&(yt=Bl(ee,"onBeforeInput"),0<yt.length&&(je=new Od("onBeforeInput","beforeinput",null,a,he),_e.push({event:je,listeners:yt}),je.data=ct)),yx(_e,e,ee,a,he)}Tg(_e,n)})}function So(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Bl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Hr(e,a),c!=null&&r.unshift(So(e,c,f)),c=Hr(e,n),c!=null&&r.push(So(e,c,f))),e.tag===3)return r;e=e.return}return[]}function bx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ag(e,n,a,r,c){for(var f=n._reactName,v=[];a!==null&&a!==r;){var E=a,P=E.alternate,ee=E.stateNode;if(E=E.tag,P!==null&&P===r)break;E!==5&&E!==26&&E!==27||ee===null||(P=ee,c?(ee=Hr(a,f),ee!=null&&v.unshift(So(a,ee,P))):c||(ee=Hr(a,f),ee!=null&&v.push(So(a,ee,P)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Ax=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function Rg(e){return(typeof e=="string"?e:""+e).replace(Ax,`
`).replace(Rx,"")}function wg(e,n){return n=Rg(n),Rg(e)===n}function Bt(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ds(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ds(e,""+r);break;case"className":Vt(e,"class",r);break;case"tabIndex":Vt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Vt(e,a,r);break;case"style":wd(e,r,f);break;case"data":if(n!=="object"){Vt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Xo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Bt(e,n,"name",c.name,c,null),Bt(e,n,"formEncType",c.formEncType,c,null),Bt(e,n,"formMethod",c.formMethod,c,null),Bt(e,n,"formTarget",c.formTarget,c,null)):(Bt(e,n,"encType",c.encType,c,null),Bt(e,n,"method",c.method,c,null),Bt(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Xo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Bi);break;case"onScroll":r!=null&&_t("scroll",e);break;case"onScrollEnd":r!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Xo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":_t("beforetoggle",e),_t("toggle",e),Wt(e,"popover",r);break;case"xlinkActuate":ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ot(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ot(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ot(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ot(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Wt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=tv.get(a)||a,Wt(e,a,r))}}function Ef(e,n,a,r,c,f){switch(a){case"style":wd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ds(e,r):(typeof r=="number"||typeof r=="bigint")&&Ds(e,""+r);break;case"onScroll":r!=null&&_t("scroll",e);break;case"onScrollEnd":r!=null&&_t("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Be.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Wt(e,a,r)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Bt(e,n,f,v,a,null)}}c&&Bt(e,n,"srcSet",a.srcSet,a,null),r&&Bt(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var E=f=v=c=null,P=null,ee=null;for(r in a)if(a.hasOwnProperty(r)){var he=a[r];if(he!=null)switch(r){case"name":c=he;break;case"type":v=he;break;case"checked":P=he;break;case"defaultChecked":ee=he;break;case"value":f=he;break;case"defaultValue":E=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:Bt(e,n,r,he,a,null)}}On(e,f,E,P,ee,v,c,!1);return;case"select":_t("invalid",e),r=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":v=E;break;case"multiple":r=E;default:Bt(e,n,c,E,a,null)}n=f,a=v,e.multiple=!!r,n!=null?en(e,!!r,n,!1):a!=null&&en(e,!!r,a,!0);return;case"textarea":_t("invalid",e),f=c=r=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Bt(e,n,v,E,a,null)}Ai(e,r,c,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Bt(e,n,P,r,a,null)}return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(r=0;r<xo.length;r++)_t(xo[r],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(r=a[ee],r!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Bt(e,n,ee,r,a,null)}return;default:if(Pc(n)){for(he in a)a.hasOwnProperty(he)&&(r=a[he],r!==void 0&&Ef(e,n,he,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Bt(e,n,E,r,a,null))}function wx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,E=null,P=null,ee=null,he=null;for(le in a){var _e=a[le];if(a.hasOwnProperty(le)&&_e!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":P=_e;default:r.hasOwnProperty(le)||Bt(e,n,le,null,r,_e)}}for(var ie in r){var le=r[ie];if(_e=a[ie],r.hasOwnProperty(ie)&&(le!=null||_e!=null))switch(ie){case"type":f=le;break;case"name":c=le;break;case"checked":ee=le;break;case"defaultChecked":he=le;break;case"value":v=le;break;case"defaultValue":E=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==_e&&Bt(e,n,ie,le,r,_e)}}Rn(e,v,E,P,ee,he,f,c);return;case"select":le=v=E=ie=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":le=P;default:r.hasOwnProperty(f)||Bt(e,n,f,null,r,P)}for(c in r)if(f=r[c],P=a[c],r.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":ie=f;break;case"defaultValue":E=f;break;case"multiple":v=f;default:f!==P&&Bt(e,n,c,f,r,P)}n=E,a=v,r=le,ie!=null?en(e,!!a,ie,!1):!!r!=!!a&&(n!=null?en(e,!!a,n,!0):en(e,!!a,a?[]:"",!1));return;case"textarea":le=ie=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Bt(e,n,E,null,r,c)}for(v in r)if(c=r[v],f=a[v],r.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":ie=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Bt(e,n,v,c,r,f)}Cs(e,ie,le);return;case"option":for(var ke in a)if(ie=a[ke],a.hasOwnProperty(ke)&&ie!=null&&!r.hasOwnProperty(ke))switch(ke){case"selected":e.selected=!1;break;default:Bt(e,n,ke,null,r,ie)}for(P in r)if(ie=r[P],le=a[P],r.hasOwnProperty(P)&&ie!==le&&(ie!=null||le!=null))switch(P){case"selected":e.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Bt(e,n,P,ie,r,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ie=a[et],a.hasOwnProperty(et)&&ie!=null&&!r.hasOwnProperty(et)&&Bt(e,n,et,null,r,ie);for(ee in r)if(ie=r[ee],le=a[ee],r.hasOwnProperty(ee)&&ie!==le&&(ie!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,n));break;default:Bt(e,n,ee,ie,r,le)}return;default:if(Pc(n)){for(var Ft in a)ie=a[Ft],a.hasOwnProperty(Ft)&&ie!==void 0&&!r.hasOwnProperty(Ft)&&Ef(e,n,Ft,void 0,r,ie);for(he in r)ie=r[he],le=a[he],!r.hasOwnProperty(he)||ie===le||ie===void 0&&le===void 0||Ef(e,n,he,ie,r,le);return}}for(var Y in a)ie=a[Y],a.hasOwnProperty(Y)&&ie!=null&&!r.hasOwnProperty(Y)&&Bt(e,n,Y,null,r,ie);for(_e in r)ie=r[_e],le=a[_e],!r.hasOwnProperty(_e)||ie===le||ie==null&&le==null||Bt(e,n,_e,ie,r,le)}function Cg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,v=c.initiatorType,E=c.duration;if(f&&E&&Cg(v)){for(v=0,E=c.responseEnd,r+=1;r<a.length;r++){var P=a[r],ee=P.startTime;if(ee>E)break;var he=P.transferSize,_e=P.initiatorType;he&&Cg(_e)&&(P=P.responseEnd,v+=he*(P<E?1:(E-ee)/(P-ee)))}if(--r,n+=8*(f+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tf=null,bf=null;function Fl(e){return e.nodeType===9?e:e.ownerDocument}function Dg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ug(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Af(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rf=null;function Dx(){var e=window.event;return e&&e.type==="popstate"?e===Rf?!1:(Rf=e,!0):(Rf=null,!1)}var Lg=typeof setTimeout=="function"?setTimeout:void 0,Ux=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,Lx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(e){return Ng.resolve(null).then(e).catch(Nx)}:Lg;function Nx(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function Og(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),or(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")yo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,E=f.nodeName;f[Za]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&yo(e.ownerDocument.body);a=c}while(a);or(n)}function zg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function wf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wf(a),A(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ox(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Za])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function zx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Pg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Cf(e){return e.data==="$?"||e.data==="$~"}function Df(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Px(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Uf=null;function Ig(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Bg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Fg(e,n,a){switch(n=Fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);A(e)}var fi=new Map,Hg=new Set;function Hl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=Q.d;Q.d={f:Ix,r:Bx,D:Fx,C:Hx,L:Gx,m:Vx,X:Xx,S:kx,M:Wx};function Ix(){var e=ea.f(),n=Ul();return e||n}function Bx(e){var n=se(e);n!==null&&n.tag===5&&n.type==="form"?im(n):ea.r(e)}var ar=typeof document>"u"?null:document;function Gg(e,n,a){var r=ar;if(r&&typeof n=="string"&&n){var c=mt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Hg.has(c)||(Hg.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),bn(n,"link",e),xe(n),r.head.appendChild(n)))}}function Fx(e){ea.D(e),Gg("dns-prefetch",e,null)}function Hx(e,n){ea.C(e,n),Gg("preconnect",e,n)}function Gx(e,n,a){ea.L(e,n,a);var r=ar;if(r&&e&&n){var c='link[rel="preload"][as="'+mt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+mt(a.imageSizes)+'"]')):c+='[href="'+mt(e)+'"]';var f=c;switch(n){case"style":f=sr(e);break;case"script":f=rr(e)}fi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(Mo(f))||n==="script"&&r.querySelector(Eo(f))||(n=r.createElement("link"),bn(n,"link",e),xe(n),r.head.appendChild(n)))}}function Vx(e,n){ea.m(e,n);var a=ar;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rr(e)}if(!fi.has(f)&&(e=x({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}r=a.createElement("link"),bn(r,"link",e),xe(r),a.head.appendChild(r)}}}function kx(e,n,a){ea.S(e,n,a);var r=ar;if(r&&e){var c=q(r).hoistableStyles,f=sr(e);n=n||"default";var v=c.get(f);if(!v){var E={loading:0,preload:null};if(v=r.querySelector(Mo(f)))E.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Lf(e,a);var P=v=r.createElement("link");xe(P),bn(P,"link",e),P._p=new Promise(function(ee,he){P.onload=ee,P.onerror=he}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Gl(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:E},c.set(f,v)}}}function Xx(e,n){ea.X(e,n);var a=ar;if(a&&e){var r=q(a).hoistableScripts,c=rr(e),f=r.get(c);f||(f=a.querySelector(Eo(c)),f||(e=x({src:e,async:!0},n),(n=fi.get(c))&&Nf(e,n),f=a.createElement("script"),xe(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Wx(e,n){ea.M(e,n);var a=ar;if(a&&e){var r=q(a).hoistableScripts,c=rr(e),f=r.get(c);f||(f=a.querySelector(Eo(c)),f||(e=x({src:e,async:!0,type:"module"},n),(n=fi.get(c))&&Nf(e,n),f=a.createElement("script"),xe(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Vg(e,n,a,r){var c=(c=be.current)?Hl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=sr(a.href),a=q(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=sr(a.href);var f=q(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(Mo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||jx(c,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rr(a),a=q(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function sr(e){return'href="'+mt(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function kg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function jx(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),bn(n,"link",a),xe(n),e.head.appendChild(n))}function rr(e){return'[src="'+mt(e)+'"]'}function Eo(e){return"script[async]"+e}function Xg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+mt(a.href)+'"]');if(r)return n.instance=r,xe(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),xe(r),bn(r,"style",c),Gl(r,a.precedence,e),n.instance=r;case"stylesheet":c=sr(a.href);var f=e.querySelector(Mo(c));if(f)return n.state.loading|=4,n.instance=f,xe(f),f;r=kg(a),(c=fi.get(c))&&Lf(r,c),f=(e.ownerDocument||e).createElement("link"),xe(f);var v=f;return v._p=new Promise(function(E,P){v.onload=E,v.onerror=P}),bn(f,"link",r),n.state.loading|=4,Gl(f,a.precedence,e),n.instance=f;case"script":return f=rr(a.src),(c=e.querySelector(Eo(f)))?(n.instance=c,xe(c),c):(r=a,(c=fi.get(f))&&(r=x({},a),Nf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),xe(c),bn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Gl(r,a.precedence,e));return n.instance}function Gl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,v=0;v<r.length;v++){var E=r[v];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Nf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Vl=null;function Wg(e,n,a){if(Vl===null){var r=new Map,c=Vl=new Map;c.set(a,r)}else c=Vl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Za]||f[Qt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var E=r.get(v);E?E.push(f):r.set(v,[f])}}return r}function jg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function qx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Yx(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=sr(r.href),f=n.querySelector(Mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=kl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,xe(f);return}f=n.ownerDocument||n,r=kg(r),(c=fi.get(c))&&Lf(r,c),f=f.createElement("link"),xe(f);var v=f;v._p=new Promise(function(E,P){v.onload=E,v.onerror=P}),bn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=kl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Of=0;function Zx(e,n){return e.stylesheets&&e.count===0&&Wl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Of===0&&(Of=62500*Cx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Of?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function Wl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,n.forEach(Kx,e),Xl=null,kl.call(e))}function Kx(e,n){if(!(n.state.loading&4)){var a=Xl.get(e);if(a)var r=a.get(null);else{a=new Map,Xl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,c),a.set(v,c),this.count++,r=kl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var To={$$typeof:L,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Qx(e,n,a,r,c,f,v,E,P){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function Yg(e,n,a,r,c,f,v,E,P,ee,he,_e){return e=new Qx(e,n,a,v,P,ee,he,_e,E),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=hu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},gu(f),e}function Zg(e){return e?(e=Is,e):Is}function Kg(e,n,a,r,c,f){c=Zg(c),r.context===null?r.context=c:r.pendingContext=c,r=xa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Sa(e,r,n),a!==null&&(kn(a,e,n),to(a,e,n))}function Qg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function zf(e,n){Qg(e,n),(e=e.alternate)&&Qg(e,n)}function Jg(e){if(e.tag===13||e.tag===31){var n=es(e,67108864);n!==null&&kn(n,e,67108864),zf(e,67108864)}}function $g(e){if(e.tag===13||e.tag===31){var n=$n();n=qa(n);var a=es(e,n);a!==null&&kn(a,e,n),zf(e,n)}}var jl=!0;function Jx(e,n,a,r){var c=O.T;O.T=null;var f=Q.p;try{Q.p=2,Pf(e,n,a,r)}finally{Q.p=f,O.T=c}}function $x(e,n,a,r){var c=O.T;O.T=null;var f=Q.p;try{Q.p=8,Pf(e,n,a,r)}finally{Q.p=f,O.T=c}}function Pf(e,n,a,r){if(jl){var c=If(r);if(c===null)Mf(e,n,r,ql,a),t0(e,r);else if(tS(c,e,n,a,r))r.stopPropagation();else if(t0(e,r),n&4&&-1<eS.indexOf(e)){for(;c!==null;){var f=se(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=we(f.pendingLanes);if(v!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var P=1<<31-tt(v);E.entanglements[1]|=P,v&=~P}Di(f),(Nt&6)===0&&(Cl=pe()+500,vo(0))}}break;case 31:case 13:E=es(f,2),E!==null&&kn(E,f,2),Ul(),zf(f,2)}if(f=If(r),f===null&&Mf(e,n,r,ql,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Mf(e,n,r,null,a)}}function If(e){return e=Bc(e),Bf(e)}var ql=null;function Bf(e){if(ql=null,e=j(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ql=e,null}function e0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ee()){case ge:return 2;case qe:return 8;case Ce:case Ge:return 32;case vt:return 268435456;default:return 32}default:return 32}}var Ff=!1,Ua=null,La=null,Na=null,bo=new Map,Ao=new Map,Oa=[],eS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t0(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=se(n),n!==null&&Jg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function tS(e,n,a,r,c){switch(n){case"focusin":return Ua=Ro(Ua,e,n,a,r,c),!0;case"dragenter":return La=Ro(La,e,n,a,r,c),!0;case"mouseover":return Na=Ro(Na,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return bo.set(f,Ro(bo.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ao.set(f,Ro(Ao.get(f)||null,e,n,a,r,c)),!0}return!1}function n0(e){var n=j(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ya(e.priority,function(){$g(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ya(e.priority,function(){$g(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=If(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Ic=r,a.target.dispatchEvent(r),Ic=null}else return n=se(a),n!==null&&Jg(n),e.blockedOn=a,!1;n.shift()}return!0}function i0(e,n,a){Yl(e)&&a.delete(n)}function nS(){Ff=!1,Ua!==null&&Yl(Ua)&&(Ua=null),La!==null&&Yl(La)&&(La=null),Na!==null&&Yl(Na)&&(Na=null),bo.forEach(i0),Ao.forEach(i0)}function Zl(e,n){e.blockedOn===n&&(e.blockedOn=null,Ff||(Ff=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,nS)))}var Kl=null;function a0(e){Kl!==e&&(Kl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Kl===e&&(Kl=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Bf(r||a)===null)continue;break}var f=se(a);f!==null&&(e.splice(n,3),n-=3,Pu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function or(e){function n(P){return Zl(P,e)}Ua!==null&&Zl(Ua,e),La!==null&&Zl(La,e),Na!==null&&Zl(Na,e),bo.forEach(n),Ao.forEach(n);for(var a=0;a<Oa.length;a++){var r=Oa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)n0(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],v=c[yn]||null;if(typeof f=="function")v||a0(a);else if(v){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[yn]||null)E=v.formAction;else if(Bf(c)!==null)continue}else E=v.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),a0(a)}}}function s0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Hf(e){this._internalRoot=e}Ql.prototype.render=Hf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=$n();Kg(a,r,e,n,null,null)},Ql.prototype.unmount=Hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Kg(e.current,2,null,e,null,null),Ul(),n[Pi]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var n=Br();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&n0(e)}};var r0=t.version;if(r0!=="19.2.7")throw Error(s(527,r0,"19.2.7"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var iS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{Ke=Jl.inject(iS),Ye=Jl}catch{}}return Co.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=dm,f=pm,v=mm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Yg(e,1,!1,null,null,a,r,null,c,f,v,s0),e[Pi]=n.current,yf(e),new Hf(n)},Co.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=dm,v=pm,E=mm,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=Yg(e,1,!0,n,a??null,r,c,P,f,v,E,s0),n.context=Zg(null),a=n.current,r=$n(),r=qa(r),c=xa(r),c.callback=null,Sa(a,c,r),a=r,n.current.lanes=a,Sn(n,a),Di(n),e[Pi]=n.current,yf(e),new Ql(n)},Co.version="19.2.7",Co}var g0;function dS(){if(g0)return kf.exports;g0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),kf.exports=hS(),kf.exports}var pS=dS();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v_=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=xn.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>xn.createElement("svg",{ref:m,...gS,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:v_("lucide",l),...d},[...h.map(([p,g])=>xn.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=(o,t)=>{const i=xn.forwardRef(({className:s,...l},u)=>xn.createElement(_S,{ref:u,iconNode:t,className:v_(`lucide-${mS(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=un("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=un("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=un("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=un("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=un("Cable",[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",key:"10bnsj"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",key:"1eqmu1"}],["path",{d:"M21 21v-2h-4",key:"14zm7j"}],["path",{d:"M3 5h4V3",key:"z442eg"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",key:"ebdjd7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=un("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=un("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=un("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=un("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=un("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=un("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=un("Martini",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=un("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=un("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=un("RadioTower",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=un("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=un("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=un("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=un("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=un("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pd="171",PS=0,_0=1,IS=2,y_=1,BS=2,ra=3,Wa=0,Wn=1,la=2,ka=0,Tr=1,v0=2,x0=3,S0=4,FS=5,ys=100,HS=101,GS=102,VS=103,kS=104,XS=200,WS=201,jS=202,qS=203,Ah=204,Rh=205,YS=206,ZS=207,KS=208,QS=209,JS=210,$S=211,ey=212,ty=213,ny=214,wh=0,Ch=1,Dh=2,Rr=3,Uh=4,Lh=5,Nh=6,Oh=7,M_=0,iy=1,ay=2,Xa=0,sy=1,ry=2,oy=3,ly=4,cy=5,uy=6,fy=7,E_=300,wr=301,Cr=302,zh=303,Ph=304,Uc=306,Ih=1e3,Ts=1001,Bh=1002,Ti=1003,hy=1004,$l=1005,Li=1006,qf=1007,bs=1008,ha=1009,T_=1010,b_=1011,Io=1012,md=1013,As=1014,ca=1015,Bo=1016,gd=1017,_d=1018,Dr=1020,A_=35902,R_=1021,w_=1022,Ei=1023,C_=1024,D_=1025,br=1026,Ur=1027,U_=1028,vd=1029,L_=1030,xd=1031,Sd=1033,yc=33776,Mc=33777,Ec=33778,Tc=33779,Fh=35840,Hh=35841,Gh=35842,Vh=35843,kh=36196,Xh=37492,Wh=37496,jh=37808,qh=37809,Yh=37810,Zh=37811,Kh=37812,Qh=37813,Jh=37814,$h=37815,ed=37816,td=37817,nd=37818,id=37819,ad=37820,sd=37821,bc=36492,rd=36494,od=36495,N_=36283,ld=36284,cd=36285,ud=36286,dy=3200,py=3201,O_=0,my=1,Va="",ni="srgb",Lr="srgb-linear",Rc="linear",Ht="srgb",lr=7680,y0=519,gy=512,_y=513,vy=514,z_=515,xy=516,Sy=517,yy=518,My=519,M0=35044,E0="300 es",ua=2e3,wc=2001;class Or{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yf=Math.PI/180,fd=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function Mt(o,t,i){return Math.max(t,Math.min(i,o))}function Ey(o,t){return(o%t+t)%t}function Zf(o,t,i){return(1-i)*o+i*t}function Do(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class At{constructor(t=0,i=0){At.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Mt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(t,i,s,l,u,h,d,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],x=s[7],S=s[2],M=s[5],b=s[8],w=l[0],y=l[3],_=l[6],B=l[1],L=l[4],D=l[7],X=l[2],F=l[5],z=l[8];return u[0]=h*w+d*B+m*X,u[3]=h*y+d*L+m*F,u[6]=h*_+d*D+m*z,u[1]=p*w+g*B+x*X,u[4]=p*y+g*L+x*F,u[7]=p*_+g*D+x*z,u[2]=S*w+M*B+b*X,u[5]=S*y+M*L+b*F,u[8]=S*_+M*D+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*h-d*p,S=d*m-g*u,M=p*u-h*m,b=i*x+s*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=x*w,t[1]=(l*p-g*s)*w,t[2]=(d*s-l*h)*w,t[3]=S*w,t[4]=(g*i-l*m)*w,t[5]=(l*u-d*i)*w,t[6]=M*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Kf.makeScale(t,i)),this}rotate(t){return this.premultiply(Kf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Kf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new ft;function P_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Cc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ty(){const o=Cc("canvas");return o.style.display="block",o}const T0={};function Mr(o){o in T0||(T0[o]=!0,console.warn(o))}function by(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function Ay(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ry(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const b0=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A0=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wy(){const o={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ht&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ht&&(l.r=Ar(l.r),l.g=Ar(l.g),l.b=Ar(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?Rc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Lr]:{primaries:t,whitePoint:s,transfer:Rc,toXYZ:b0,fromXYZ:A0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:t,whitePoint:s,transfer:Ht,toXYZ:b0,fromXYZ:A0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),o}const Lt=wy();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ar(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let cr;class Cy{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{cr===void 0&&(cr=Cc("canvas")),cr.width=t.width,cr.height=t.height;const s=cr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=cr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Cc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=fa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fa(i[s]/255)*255):i[s]=fa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dy=0;class I_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Fo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Qf(l[h].image)):u.push(Qf(l[h]))}else u=Qf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Qf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Cy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uy=0;class jn extends Or{constructor(t=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,s=Ts,l=Ts,u=Li,h=bs,d=Ei,m=ha,p=jn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Fo(),this.name="",this.source=new I_(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==E_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ih:t.x=t.x-Math.floor(t.x);break;case Ts:t.x=t.x<0?0:1;break;case Bh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ih:t.y=t.y-Math.floor(t.y);break;case Ts:t.y=t.y<0?0:1;break;case Bh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=E_;jn.DEFAULT_ANISOTROPY=1;class Gt{constructor(t=0,i=0,s=0,l=1){Gt.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],g=m[4],x=m[8],S=m[1],M=m[5],b=m[9],w=m[2],y=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(x-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+S)<.1&&Math.abs(x+w)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,X=(_+1)/2,F=(g+S)/4,z=(x+w)/4,k=(b+y)/4;return L>D&&L>X?L<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(L),l=F/s,u=z/s):D>X?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=F/l,u=k/l):X<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),s=z/u,l=k/u),this.set(s,l,u,i),this}let B=Math.sqrt((y-b)*(y-b)+(x-w)*(x-w)+(S-g)*(S-g));return Math.abs(B)<.001&&(B=1),this.x=(y-b)/B,this.y=(x-w)/B,this.z=(S-g)/B,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this.w=Mt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this.w=Mt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ly extends Or{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Gt(0,0,t,i),this.scissorTest=!1,this.viewport=new Gt(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new jn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new I_(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends Ly{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class B_ extends jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ny extends jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],x=s[l+3];const S=u[h+0],M=u[h+1],b=u[h+2],w=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=S,t[i+1]=M,t[i+2]=b,t[i+3]=w;return}if(x!==w||m!==S||p!==M||g!==b){let y=1-d;const _=m*S+p*M+g*b+x*w,B=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const X=Math.sqrt(L),F=Math.atan2(X,_*B);y=Math.sin(y*F)/X,d=Math.sin(d*F)/X}const D=d*B;if(m=m*y+S*D,p=p*y+M*D,g=g*y+b*D,x=x*y+w*D,y===1-d){const X=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=X,p*=X,g*=X,x*=X}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],x=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return t[i]=d*b+g*x+m*M-p*S,t[i+1]=m*b+g*S+p*x-d*M,t[i+2]=p*b+g*M+d*S-m*x,t[i+3]=g*b-d*x-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),x=d(u/2),S=m(s/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*g*x+p*M*b,this._y=p*M*x-S*g*b,this._z=p*g*b+S*M*x,this._w=p*g*x-S*M*b;break;case"YXZ":this._x=S*g*x+p*M*b,this._y=p*M*x-S*g*b,this._z=p*g*b-S*M*x,this._w=p*g*x+S*M*b;break;case"ZXY":this._x=S*g*x-p*M*b,this._y=p*M*x+S*g*b,this._z=p*g*b+S*M*x,this._w=p*g*x-S*M*b;break;case"ZYX":this._x=S*g*x-p*M*b,this._y=p*M*x+S*g*b,this._z=p*g*b-S*M*x,this._w=p*g*x+S*M*b;break;case"YZX":this._x=S*g*x+p*M*b,this._y=p*M*x+S*g*b,this._z=p*g*b-S*M*x,this._w=p*g*x-S*M*b;break;case"XZY":this._x=S*g*x-p*M*b,this._y=p*M*x-S*g*b,this._z=p*g*b+S*M*x,this._w=p*g*x+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],S=s+d+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=h*x+this._w*S,this._x=s*x+this._x*S,this._y=l*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(R0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(R0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-u*l),x=2*(u*s-h*i);return this.x=i+m*p+h*x-d*g,this.y=s+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Jf.copy(this).projectOnVector(t),this.sub(Jf)}reflect(t){return this.sub(Jf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Mt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new J,R0=new Ho;class Go{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,vi):vi.fromBufferAttribute(u,h),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ec.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ec.copy(s.boundingBox)),ec.applyMatrix4(t.matrixWorld),this.union(ec)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),tc.subVectors(this.max,Uo),ur.subVectors(t.a,Uo),fr.subVectors(t.b,Uo),hr.subVectors(t.c,Uo),Pa.subVectors(fr,ur),Ia.subVectors(hr,fr),ds.subVectors(ur,hr);let i=[0,-Pa.z,Pa.y,0,-Ia.z,Ia.y,0,-ds.z,ds.y,Pa.z,0,-Pa.x,Ia.z,0,-Ia.x,ds.z,0,-ds.x,-Pa.y,Pa.x,0,-Ia.y,Ia.x,0,-ds.y,ds.x,0];return!$f(i,ur,fr,hr,tc)||(i=[1,0,0,0,1,0,0,0,1],!$f(i,ur,fr,hr,tc))?!1:(nc.crossVectors(Pa,Ia),i=[nc.x,nc.y,nc.z],$f(i,ur,fr,hr,tc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ta=[new J,new J,new J,new J,new J,new J,new J,new J],vi=new J,ec=new Go,ur=new J,fr=new J,hr=new J,Pa=new J,Ia=new J,ds=new J,Uo=new J,tc=new J,nc=new J,ps=new J;function $f(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){ps.fromArray(o,u);const d=l.x*Math.abs(ps.x)+l.y*Math.abs(ps.y)+l.z*Math.abs(ps.z),m=t.dot(ps),p=i.dot(ps),g=s.dot(ps);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Oy=new Go,Lo=new J,eh=new J;class yd{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Oy.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(eh)),this.expandByPoint(Lo.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const na=new J,th=new J,ic=new J,Ba=new J,nh=new J,ac=new J,ih=new J;class zy{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){th.copy(t).add(i).multiplyScalar(.5),ic.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(th);const u=t.distanceTo(i)*.5,h=-this.direction.dot(ic),d=Ba.dot(this.direction),m=-Ba.dot(ic),p=Ba.lengthSq(),g=Math.abs(1-h*h);let x,S,M,b;if(g>0)if(x=h*m-d,S=h*d-m,b=u*g,x>=0)if(S>=-b)if(S<=b){const w=1/g;x*=w,S*=w,M=x*(x+h*S+2*d)+S*(h*x+S+2*m)+p}else S=u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;else S<=-b?(x=Math.max(0,-(-h*u+d)),S=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p):S<=b?(x=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(x=Math.max(0,-(h*u+d)),S=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p);else S=h>0?-u:u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(th).addScaledVector(ic,S),M}intersectSphere(t,i){na.subVectors(t.center,this.origin);const s=na.dot(this.direction),l=na.dot(na)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(u=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(u=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-S.z)*x,m=(t.max.z-S.z)*x):(d=(t.max.z-S.z)*x,m=(t.min.z-S.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,i,s,l,u){nh.subVectors(i,t),ac.subVectors(s,t),ih.crossVectors(nh,ac);let h=this.direction.dot(ih),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(ac.crossVectors(Ba,ac));if(m<0)return null;const p=d*this.direction.dot(nh.cross(Ba));if(p<0||m+p>h)return null;const g=-d*Ba.dot(ih);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,i,s,l,u,h,d,m,p,g,x,S,M,b,w,y){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,g,x,S,M,b,w,y)}set(t,i,s,l,u,h,d,m,p,g,x,S,M,b,w,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=S,_[3]=M,_[7]=b,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/dr.setFromMatrixColumn(t,0).length(),u=1/dr.setFromMatrixColumn(t,1).length(),h=1/dr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const S=h*g,M=h*x,b=d*g,w=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+b*p,i[5]=S-w*p,i[9]=-d*m,i[2]=w-S*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*g,M=m*x,b=p*g,w=p*x;i[0]=S+w*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=w+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*g,M=m*x,b=p*g,w=p*x;i[0]=S-w*d,i[4]=-h*x,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=w-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*g,M=h*x,b=d*g,w=d*x;i[0]=m*g,i[4]=b*p-M,i[8]=S*p+w,i[1]=m*x,i[5]=w*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,M=h*p,b=d*m,w=d*p;i[0]=m*g,i[4]=w-S*x,i[8]=b*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*x+b,i[10]=S-w*x}else if(t.order==="XZY"){const S=h*m,M=h*p,b=d*m,w=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=S*x+w,i[5]=h*g,i[9]=M*x-b,i[2]=b*x-M,i[6]=d*g,i[10]=w*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Py,t,Iy)}lookAt(t,i,s){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Fa.crossVectors(s,ei),Fa.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Fa.crossVectors(s,ei)),Fa.normalize(),sc.crossVectors(ei,Fa),l[0]=Fa.x,l[4]=sc.x,l[8]=ei.x,l[1]=Fa.y,l[5]=sc.y,l[9]=ei.y,l[2]=Fa.z,l[6]=sc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],x=s[5],S=s[9],M=s[13],b=s[2],w=s[6],y=s[10],_=s[14],B=s[3],L=s[7],D=s[11],X=s[15],F=l[0],z=l[4],k=l[8],C=l[12],R=l[1],H=l[5],re=l[9],ae=l[13],fe=l[2],de=l[6],O=l[10],Q=l[14],K=l[3],Me=l[7],Te=l[11],N=l[15];return u[0]=h*F+d*R+m*fe+p*K,u[4]=h*z+d*H+m*de+p*Me,u[8]=h*k+d*re+m*O+p*Te,u[12]=h*C+d*ae+m*Q+p*N,u[1]=g*F+x*R+S*fe+M*K,u[5]=g*z+x*H+S*de+M*Me,u[9]=g*k+x*re+S*O+M*Te,u[13]=g*C+x*ae+S*Q+M*N,u[2]=b*F+w*R+y*fe+_*K,u[6]=b*z+w*H+y*de+_*Me,u[10]=b*k+w*re+y*O+_*Te,u[14]=b*C+w*ae+y*Q+_*N,u[3]=B*F+L*R+D*fe+X*K,u[7]=B*z+L*H+D*de+X*Me,u[11]=B*k+L*re+D*O+X*Te,u[15]=B*C+L*ae+D*Q+X*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],S=t[10],M=t[14],b=t[3],w=t[7],y=t[11],_=t[15];return b*(+u*m*x-l*p*x-u*d*S+s*p*S+l*d*M-s*m*M)+w*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*g-u*m*g)+y*(+i*p*x-i*d*M-u*h*x+s*h*M+u*d*g-s*p*g)+_*(-l*d*g-i*m*x+i*d*S+l*h*x-s*h*S+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],S=t[10],M=t[11],b=t[12],w=t[13],y=t[14],_=t[15],B=x*y*p-w*S*p+w*m*M-d*y*M-x*m*_+d*S*_,L=b*S*p-g*y*p-b*m*M+h*y*M+g*m*_-h*S*_,D=g*w*p-b*x*p+b*d*M-h*w*M-g*d*_+h*x*_,X=b*x*m-g*w*m-b*d*S+h*w*S+g*d*y-h*x*y,F=i*B+s*L+l*D+u*X;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return t[0]=B*z,t[1]=(w*S*u-x*y*u-w*l*M+s*y*M+x*l*_-s*S*_)*z,t[2]=(d*y*u-w*m*u+w*l*p-s*y*p-d*l*_+s*m*_)*z,t[3]=(x*m*u-d*S*u-x*l*p+s*S*p+d*l*M-s*m*M)*z,t[4]=L*z,t[5]=(g*y*u-b*S*u+b*l*M-i*y*M-g*l*_+i*S*_)*z,t[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*_-i*m*_)*z,t[7]=(h*S*u-g*m*u+g*l*p-i*S*p-h*l*M+i*m*M)*z,t[8]=D*z,t[9]=(b*x*u-g*w*u-b*s*M+i*w*M+g*s*_-i*x*_)*z,t[10]=(h*w*u-b*d*u+b*s*p-i*w*p-h*s*_+i*d*_)*z,t[11]=(g*d*u-h*x*u-g*s*p+i*x*p+h*s*M-i*d*M)*z,t[12]=X*z,t[13]=(g*w*l-b*x*l+b*s*S-i*w*S-g*s*y+i*x*y)*z,t[14]=(b*d*l-h*w*l-b*s*m+i*w*m+h*s*y-i*d*y)*z,t[15]=(h*x*l-g*d*l+g*s*m-i*x*m-h*s*S+i*d*S)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,S=u*p,M=u*g,b=u*x,w=h*g,y=h*x,_=d*x,B=m*p,L=m*g,D=m*x,X=s.x,F=s.y,z=s.z;return l[0]=(1-(w+_))*X,l[1]=(M+D)*X,l[2]=(b-L)*X,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(S+_))*F,l[6]=(y+B)*F,l[7]=0,l[8]=(b+L)*z,l[9]=(y-B)*z,l[10]=(1-(S+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=dr.set(l[0],l[1],l[2]).length();const h=dr.set(l[4],l[5],l[6]).length(),d=dr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/u,g=1/h,x=1/d;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=x,xi.elements[9]*=x,xi.elements[10]*=x,i.setFromRotationMatrix(xi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=ua){const m=this.elements,p=2*u/(i-t),g=2*u/(s-l),x=(i+t)/(i-t),S=(s+l)/(s-l);let M,b;if(d===ua)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===wc)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=ua){const m=this.elements,p=1/(i-t),g=1/(s-l),x=1/(h-u),S=(i+t)*p,M=(s+l)*g;let b,w;if(d===ua)b=(h+u)*x,w=-2*x;else if(d===wc)b=u*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=w,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const dr=new J,xi=new Kt,Py=new J(0,0,0),Iy=new J(1,1,1),Fa=new J,sc=new J,ei=new J,w0=new Kt,C0=new Ho;class Oi{constructor(t=0,i=0,s=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return w0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(w0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return C0.setFromEuler(this),this.setFromQuaternion(C0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class F_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let By=0;const D0=new J,pr=new Ho,ia=new Kt,rc=new J,No=new J,Fy=new J,Hy=new Ho,U0=new J(1,0,0),L0=new J(0,1,0),N0=new J(0,0,1),O0={type:"added"},Gy={type:"removed"},mr={type:"childadded",child:null},ah={type:"childremoved",child:null};class Un extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new J,i=new Oi,s=new Ho,l=new J(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ft}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(U0,t)}rotateY(t){return this.rotateOnAxis(L0,t)}rotateZ(t){return this.rotateOnAxis(N0,t)}translateOnAxis(t,i){return D0.copy(t).applyQuaternion(this.quaternion),this.position.add(D0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(U0,t)}translateY(t){return this.translateOnAxis(L0,t)}translateZ(t){return this.translateOnAxis(N0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?rc.copy(t):rc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(No,rc,this.up):ia.lookAt(rc,No,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),pr.setFromRotationMatrix(ia),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(O0),mr.child=t,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Gy),ah.child=t,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(O0),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,Fy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,Hy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),S=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new J(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new J,aa=new J,sh=new J,sa=new J,gr=new J,_r=new J,z0=new J,rh=new J,oh=new J,lh=new J,ch=new Gt,uh=new Gt,fh=new Gt;class Mi{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Si.subVectors(t,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Si.subVectors(l,i),aa.subVectors(s,i),sh.subVectors(t,i);const h=Si.dot(Si),d=Si.dot(aa),m=Si.dot(sh),p=aa.dot(aa),g=aa.dot(sh),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const S=1/x,M=(p*m-d*g)*S,b=(h*g-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,sa.x),m.addScaledVector(h,sa.y),m.addScaledVector(d,sa.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return ch.setScalar(0),uh.setScalar(0),fh.setScalar(0),ch.fromBufferAttribute(t,i),uh.fromBufferAttribute(t,s),fh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(ch,u.x),h.addScaledVector(uh,u.y),h.addScaledVector(fh,u.z),h}static isFrontFacing(t,i,s,l){return Si.subVectors(s,i),aa.subVectors(t,i),Si.cross(aa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),Si.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Mi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;gr.subVectors(l,s),_r.subVectors(u,s),rh.subVectors(t,s);const m=gr.dot(rh),p=_r.dot(rh);if(m<=0&&p<=0)return i.copy(s);oh.subVectors(t,l);const g=gr.dot(oh),x=_r.dot(oh);if(g>=0&&x<=g)return i.copy(l);const S=m*x-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(gr,h);lh.subVectors(t,u);const M=gr.dot(lh),b=_r.dot(lh);if(b>=0&&M<=b)return i.copy(u);const w=M*p-m*b;if(w<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(_r,d);const y=g*b-M*x;if(y<=0&&x-g>=0&&M-b>=0)return z0.subVectors(u,l),d=(x-g)/(x-g+(M-b)),i.copy(l).addScaledVector(z0,d);const _=1/(y+w+S);return h=w*_,d=S*_,i.copy(s).addScaledVector(gr,h).addScaledVector(_r,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},oc={h:0,s:0,l:0};function hh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Tt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Lt.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Lt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Lt.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Lt.workingColorSpace){if(t=Ey(t,1),i=Mt(i,0,1),s=Mt(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=hh(h,u,t+1/3),this.g=hh(h,u,t),this.b=hh(h,u,t-1/3)}return Lt.toWorkingColorSpace(this,l),this}setStyle(t,i=ni){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ni){const s=H_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return Lt.fromWorkingColorSpace(Dn.copy(this),t),Math.round(Mt(Dn.r*255,0,255))*65536+Math.round(Mt(Dn.g*255,0,255))*256+Math.round(Mt(Dn.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,u=Dn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=ni){Lt.fromWorkingColorSpace(Dn.copy(this),t);const i=Dn.r,s=Dn.g,l=Dn.b;return t!==ni?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(oc);const s=Zf(Ha.h,oc.h,i),l=Zf(Ha.s,oc.s,i),u=Zf(Ha.l,oc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Tt;Tt.NAMES=H_;let Vy=0;class Vo extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Tr,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(s.blending=this.blending),this.side!==Wa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ah&&(s.blendSrc=this.blendSrc),this.blendDst!==Rh&&(s.blendDst=this.blendDst),this.blendEquation!==ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==y0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Md extends Vo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=M_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new J,lc=new At;class Ni{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=M0,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)lc.fromBufferAttribute(this,i),lc.applyMatrix3(t),this.setXY(i,lc.x,lc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Do(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Xn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array),u=Xn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==M0&&(t.usage=this.usage),t}}class G_ extends Ni{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class V_ extends Ni{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ln extends Ni{constructor(t,i,s){super(new Float32Array(t),i,s)}}let ky=0;const hi=new Kt,dh=new Un,vr=new J,ti=new Go,Oo=new Go,vn=new J;class zi extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(P_(t)?V_:G_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ft().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,s){return hi.makeTranslation(t,i,s),this.applyMatrix4(hi),this}scale(t,i,s){return hi.makeScale(t,i,s),this.applyMatrix4(hi),this}lookAt(t){return dh.lookAt(t),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ln(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ti.min,Oo.min),ti.expandByPoint(vn),vn.addVectors(ti.max,Oo.max),ti.expandByPoint(vn)):(ti.expandByPoint(Oo.min),ti.expandByPoint(Oo.max))}ti.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)vn.fromBufferAttribute(d,p),m&&(vr.fromBufferAttribute(t,p),vn.add(vr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<s.count;k++)d[k]=new J,m[k]=new J;const p=new J,g=new J,x=new J,S=new At,M=new At,b=new At,w=new J,y=new J;function _(k,C,R){p.fromBufferAttribute(s,k),g.fromBufferAttribute(s,C),x.fromBufferAttribute(s,R),S.fromBufferAttribute(u,k),M.fromBufferAttribute(u,C),b.fromBufferAttribute(u,R),g.sub(p),x.sub(p),M.sub(S),b.sub(S);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(x,-M.y).multiplyScalar(H),y.copy(x).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(H),d[k].add(w),d[C].add(w),d[R].add(w),m[k].add(y),m[C].add(y),m[R].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let k=0,C=B.length;k<C;++k){const R=B[k],H=R.start,re=R.count;for(let ae=H,fe=H+re;ae<fe;ae+=3)_(t.getX(ae+0),t.getX(ae+1),t.getX(ae+2))}const L=new J,D=new J,X=new J,F=new J;function z(k){X.fromBufferAttribute(l,k),F.copy(X);const C=d[k];L.copy(C),L.sub(X.multiplyScalar(X.dot(C))).normalize(),D.crossVectors(F,C);const H=D.dot(m[k])<0?-1:1;h.setXYZW(k,L.x,L.y,L.z,H)}for(let k=0,C=B.length;k<C;++k){const R=B[k],H=R.start,re=R.count;for(let ae=H,fe=H+re;ae<fe;ae+=3)z(t.getX(ae+0)),z(t.getX(ae+1)),z(t.getX(ae+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new J,u=new J,h=new J,d=new J,m=new J,p=new J,g=new J,x=new J;if(t)for(let S=0,M=t.count;S<M;S+=3){const b=t.getX(S+0),w=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,S=new p.constructor(m.length*g);let M=0,b=0;for(let w=0,y=m.length;w<y;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*g;for(let _=0;_<g;_++)S[b++]=p[M++]}return new Ni(S,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const S=p[g],M=t(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,S=p.length;x<S;x++){const M=p[x];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],x=u[p];for(let S=0,M=x.length;S<M;S++)g.push(x[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const P0=new Kt,ms=new zy,cc=new yd,I0=new J,uc=new J,fc=new J,hc=new J,ph=new J,dc=new J,B0=new J,pc=new J;class ut extends Un{constructor(t=new zi,i=new Md){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){dc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(ph.fromBufferAttribute(x,t),h?dc.addScaledVector(ph,g):dc.addScaledVector(ph.sub(i),g))}i.add(dc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),cc.copy(s.boundingSphere),cc.applyMatrix4(u),ms.copy(t.ray).recast(t.near),!(cc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(cc,I0)===null||ms.origin.distanceToSquared(I0)>(t.far-t.near)**2))&&(P0.copy(u).invert(),ms.copy(t.ray).applyMatrix4(P0),!(s.boundingBox!==null&&ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ms)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,w=S.length;b<w;b++){const y=S[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,X=L;D<X;D+=3){const F=d.getX(D),z=d.getX(D+1),k=d.getX(D+2);l=mc(this,_,t,s,p,g,x,F,z,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=b,_=w;y<_;y+=3){const B=d.getX(y),L=d.getX(y+1),D=d.getX(y+2);l=mc(this,h,t,s,p,g,x,B,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,w=S.length;b<w;b++){const y=S[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,X=L;D<X;D+=3){const F=D,z=D+1,k=D+2;l=mc(this,_,t,s,p,g,x,F,z,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=b,_=w;y<_;y+=3){const B=y,L=y+1,D=y+2;l=mc(this,h,t,s,p,g,x,B,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Xy(o,t,i,s,l,u,h,d){let m;if(t.side===Wn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===Wa,d),m===null)return null;pc.copy(d),pc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(pc);return p<i.near||p>i.far?null:{distance:p,point:pc.clone(),object:o}}function mc(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,uc),o.getVertexPosition(m,fc),o.getVertexPosition(p,hc);const g=Xy(o,t,i,s,uc,fc,hc,B0);if(g){const x=new J;Mi.getBarycoord(B0,uc,fc,hc,x),l&&(g.uv=Mi.getInterpolatedAttribute(l,d,m,p,x,new At)),u&&(g.uv1=Mi.getInterpolatedAttribute(u,d,m,p,x,new At)),h&&(g.normal=Mi.getInterpolatedAttribute(h,d,m,p,x,new J),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new J,materialIndex:0};Mi.getNormal(uc,fc,hc,S.normal),g.face=S,g.barycoord=x}return g}class In extends zi{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let S=0,M=0;b("z","y","x",-1,-1,s,i,t,h,u,0),b("z","y","x",1,-1,s,i,-t,h,u,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,u,4),b("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Ln(p,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(x,2));function b(w,y,_,B,L,D,X,F,z,k,C){const R=D/z,H=X/k,re=D/2,ae=X/2,fe=F/2,de=z+1,O=k+1;let Q=0,K=0;const Me=new J;for(let Te=0;Te<O;Te++){const N=Te*H-ae;for(let ne=0;ne<de;ne++){const Se=ne*R-re;Me[w]=Se*B,Me[y]=N*L,Me[_]=fe,p.push(Me.x,Me.y,Me.z),Me[w]=0,Me[y]=0,Me[_]=F>0?1:-1,g.push(Me.x,Me.y,Me.z),x.push(ne/z),x.push(1-Te/k),Q+=1}}for(let Te=0;Te<k;Te++)for(let N=0;N<z;N++){const ne=S+N+de*Te,Se=S+N+de*(Te+1),Z=S+(N+1)+de*(Te+1),ue=S+(N+1)+de*Te;m.push(ne,Se,ue),m.push(Se,Z,ue),K+=6}d.addGroup(M,K,C),M+=K,S+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Pn(o){const t={};for(let i=0;i<o.length;i++){const s=Nr(o[i]);for(const l in s)t[l]=s[l]}return t}function Wy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function k_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Lt.workingColorSpace}const jy={clone:Nr,merge:Pn};var qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends Vo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qy,this.fragmentShader=Yy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=Wy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class X_ extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=ua}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new J,F0=new At,H0=new At;class ii extends X_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=fd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fd*2*Math.atan(Math.tan(Yf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,F0,H0),i.subVectors(H0,F0)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Yf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xr=-90,Sr=1;class Zy extends Un{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(xr,Sr,t,i);l.layers=this.layers,this.add(l);const u=new ii(xr,Sr,t,i);u.layers=this.layers,this.add(u);const h=new ii(xr,Sr,t,i);h.layers=this.layers,this.add(h);const d=new ii(xr,Sr,t,i);d.layers=this.layers,this.add(d);const m=new ii(xr,Sr,t,i);m.layers=this.layers,this.add(m);const p=new ii(xr,Sr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ua)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===wc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(x,S,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class W_ extends jn{constructor(t,i,s,l,u,h,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:wr,super(t,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ky extends Rs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new W_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Li}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new In(5,5,5),u=new ja({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:ka});u.uniforms.tEquirect.value=i;const h=new ut(l,u),d=i.minFilter;return i.minFilter===bs&&(i.minFilter=Li),new Zy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class Qy extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const mh=new J,Jy=new J,$y=new ft;class xs{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=mh.subVectors(s,i).cross(Jy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(mh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||$y.getNormalMatrix(t),l=this.coplanarPoint(mh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new yd,gc=new J;class Ed{constructor(t=new xs,i=new xs,s=new xs,l=new xs,u=new xs,h=new xs){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ua){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],S=l[7],M=l[8],b=l[9],w=l[10],y=l[11],_=l[12],B=l[13],L=l[14],D=l[15];if(s[0].setComponents(m-u,S-p,y-M,D-_).normalize(),s[1].setComponents(m+u,S+p,y+M,D+_).normalize(),s[2].setComponents(m+h,S+g,y+b,D+B).normalize(),s[3].setComponents(m-h,S-g,y-b,D-B).normalize(),s[4].setComponents(m-d,S-x,y-w,D-L).normalize(),i===ua)s[5].setComponents(m+d,S+x,y+w,D+L).normalize();else if(i===wc)s[5].setComponents(d,x,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(gc.x=l.normal.x>0?t.max.x:t.min.x,gc.y=l.normal.y>0?t.max.y:t.min.y,gc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yi extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}class j_ extends jn{constructor(t,i,s,l,u,h,d,m,p,g=br){if(g!==br&&g!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===br&&(s=As),s===void 0&&g===Ur&&(s=Dr),super(null,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Ti,this.minFilter=m!==void 0?m:Ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class An extends zi{constructor(t=1,i=1,s=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const g=[],x=[],S=[],M=[];let b=0;const w=[],y=s/2;let _=0;B(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Ln(x,3)),this.setAttribute("normal",new Ln(S,3)),this.setAttribute("uv",new Ln(M,2));function B(){const D=new J,X=new J;let F=0;const z=(i-t)/s;for(let k=0;k<=u;k++){const C=[],R=k/u,H=R*(i-t)+t;for(let re=0;re<=l;re++){const ae=re/l,fe=ae*m+d,de=Math.sin(fe),O=Math.cos(fe);X.x=H*de,X.y=-R*s+y,X.z=H*O,x.push(X.x,X.y,X.z),D.set(de,z,O).normalize(),S.push(D.x,D.y,D.z),M.push(ae,1-R),C.push(b++)}w.push(C)}for(let k=0;k<l;k++)for(let C=0;C<u;C++){const R=w[C][k],H=w[C+1][k],re=w[C+1][k+1],ae=w[C][k+1];(t>0||C!==0)&&(g.push(R,H,ae),F+=3),(i>0||C!==u-1)&&(g.push(H,re,ae),F+=3)}p.addGroup(_,F,0),_+=F}function L(D){const X=b,F=new At,z=new J;let k=0;const C=D===!0?t:i,R=D===!0?1:-1;for(let re=1;re<=l;re++)x.push(0,y*R,0),S.push(0,R,0),M.push(.5,.5),b++;const H=b;for(let re=0;re<=l;re++){const fe=re/l*m+d,de=Math.cos(fe),O=Math.sin(fe);z.x=C*O,z.y=y*R,z.z=C*de,x.push(z.x,z.y,z.z),S.push(0,R,0),F.x=de*.5+.5,F.y=O*.5*R+.5,M.push(F.x,F.y),b++}for(let re=0;re<l;re++){const ae=X+re,fe=H+re;D===!0?g.push(fe,fe+1,ae):g.push(fe+1,fe,ae),k+=3}p.addGroup(_,k,D===!0?1:2),_+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dc extends An{constructor(t=1,i=1,s=32,l=1,u=!1,h=0,d=Math.PI*2){super(0,t,i,s,l,u,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:d}}static fromJSON(t){return new Dc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lc extends zi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,x=t/d,S=i/m,M=[],b=[],w=[],y=[];for(let _=0;_<g;_++){const B=_*S-h;for(let L=0;L<p;L++){const D=L*x-u;b.push(D,-B,0),w.push(0,0,1),y.push(L/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const L=B+p*_,D=B+p*(_+1),X=B+1+p*(_+1),F=B+1+p*_;M.push(L,D,F),M.push(D,X,F)}this.setIndex(M),this.setAttribute("position",new Ln(b,3)),this.setAttribute("normal",new Ln(w,3)),this.setAttribute("uv",new Ln(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ms extends zi{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],x=new J,S=new J,M=[],b=[],w=[],y=[];for(let _=0;_<=s;_++){const B=[],L=_/s;let D=0;_===0&&h===0?D=.5/i:_===s&&m===Math.PI&&(D=-.5/i);for(let X=0;X<=i;X++){const F=X/i;x.x=-t*Math.cos(l+F*u)*Math.sin(h+L*d),x.y=t*Math.cos(h+L*d),x.z=t*Math.sin(l+F*u)*Math.sin(h+L*d),b.push(x.x,x.y,x.z),S.copy(x).normalize(),w.push(S.x,S.y,S.z),y.push(F+D,1-L),B.push(p++)}g.push(B)}for(let _=0;_<s;_++)for(let B=0;B<i;B++){const L=g[_][B+1],D=g[_][B],X=g[_+1][B],F=g[_+1][B+1];(_!==0||h>0)&&M.push(L,D,F),(_!==s-1||m<Math.PI)&&M.push(D,X,F)}this.setIndex(M),this.setAttribute("position",new Ln(b,3)),this.setAttribute("normal",new Ln(w,3)),this.setAttribute("uv",new Ln(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Td extends zi{constructor(t=1,i=.4,s=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:u},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],g=new J,x=new J,S=new J;for(let M=0;M<=s;M++)for(let b=0;b<=l;b++){const w=b/l*u,y=M/s*Math.PI*2;x.x=(t+i*Math.cos(y))*Math.cos(w),x.y=(t+i*Math.cos(y))*Math.sin(w),x.z=i*Math.sin(y),d.push(x.x,x.y,x.z),g.x=t*Math.cos(w),g.y=t*Math.sin(w),S.subVectors(x,g).normalize(),m.push(S.x,S.y,S.z),p.push(b/l),p.push(M/s)}for(let M=1;M<=s;M++)for(let b=1;b<=l;b++){const w=(l+1)*M+b-1,y=(l+1)*(M-1)+b-1,_=(l+1)*(M-1)+b,B=(l+1)*M+b;h.push(w,y,B),h.push(y,_,B)}this.setIndex(h),this.setAttribute("position",new Ln(d,3)),this.setAttribute("normal",new Ln(m,3)),this.setAttribute("uv",new Ln(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Td(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class oa extends Vo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=O_,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class G0 extends oa{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class eM extends Vo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tM extends Vo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class bd extends Un{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const gh=new Kt,V0=new J,k0=new J;class q_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ed,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;V0.setFromMatrixPosition(t.matrixWorld),i.position.copy(V0),k0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(k0),i.updateMatrixWorld(),gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(gh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const X0=new Kt,zo=new J,_h=new J;class nM extends q_{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,u=t.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),zo.setFromMatrixPosition(t.matrixWorld),s.position.copy(zo),_h.copy(s.position),_h.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(_h),s.updateMatrixWorld(),l.makeTranslation(-zo.x,-zo.y,-zo.z),X0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(X0)}}class W0 extends bd{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new nM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Y_ extends X_{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class iM extends q_{constructor(){super(new Y_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aM extends bd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new iM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sM extends bd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class rM extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class oM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=j0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=j0();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function j0(){return performance.now()}function q0(o,t,i,s){const l=lM(s);switch(i){case R_:return o*t;case C_:return o*t;case D_:return o*t*2;case U_:return o*t/l.components*l.byteLength;case vd:return o*t/l.components*l.byteLength;case L_:return o*t*2/l.components*l.byteLength;case xd:return o*t*2/l.components*l.byteLength;case w_:return o*t*3/l.components*l.byteLength;case Ei:return o*t*4/l.components*l.byteLength;case Sd:return o*t*4/l.components*l.byteLength;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hh:case Vh:return Math.max(o,16)*Math.max(t,8)/4;case Fh:case Gh:return Math.max(o,8)*Math.max(t,8)/2;case kh:case Xh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Wh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case jh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case $h:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case ed:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case td:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case nd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case id:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case ad:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case sd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case bc:case rd:case od:return Math.ceil(o/4)*Math.ceil(t/4)*16;case N_:case ld:return Math.ceil(o/4)*Math.ceil(t/4)*8;case cd:case ud:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lM(o){switch(o){case ha:case T_:return{byteLength:1,components:1};case Io:case b_:case Bo:return{byteLength:2,components:1};case gd:case _d:return{byteLength:2,components:4};case As:case md:case ca:return{byteLength:4,components:1};case A_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Z_(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function cM(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const g=m.array,x=m.updateRanges;if(o.bindBuffer(p,d),x.length===0)o.bufferSubData(p,0,g);else{x.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<x.length;M++){const b=x[S],w=x[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++S,x[S]=w)}x.length=S+1;for(let M=0,b=x.length;M<b;M++){const w=x[M];o.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var uM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fM=`#ifdef USE_ALPHAHASH
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
#endif`,hM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gM=`#ifdef USE_AOMAP
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
#endif`,_M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM=`#ifdef USE_BATCHING
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
#endif`,xM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,EM=`#ifdef USE_IRIDESCENCE
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
#endif`,TM=`#ifdef USE_BUMPMAP
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
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,NM=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,OM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zM=`vec3 transformedNormal = objectNormal;
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
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HM="gl_FragColor = linearToOutputTexel( gl_FragColor );",GM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VM=`#ifdef USE_ENVMAP
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
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QM=`#ifdef USE_GRADIENTMAP
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
}`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tE=`uniform bool receiveShadow;
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
#endif`,nE=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,iE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oE=`PhysicalMaterial material;
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
#endif`,lE=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,cE=`
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
#endif`,uE=`#if defined( RE_IndirectDiffuse )
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
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xE=`#if defined( USE_POINTS_UV )
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
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ME=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
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
#endif`,AE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
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
#endif`,NE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,YE=`float getShadowMask() {
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
}`,ZE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KE=`#ifdef USE_SKINNING
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
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JE=`#ifdef USE_SKINNING
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
#endif`,$E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i1=`#ifdef USE_TRANSMISSION
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
#endif`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u1=`uniform sampler2D t2D;
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`#include <common>
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
}`,g1=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_1=`#define DISTANCE
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
}`,v1=`#define DISTANCE
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`uniform float scale;
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
}`,M1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,T1=`uniform vec3 diffuse;
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
}`,b1=`#define LAMBERT
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
}`,A1=`#define LAMBERT
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
}`,R1=`#define MATCAP
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
}`,w1=`#define MATCAP
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
}`,C1=`#define NORMAL
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
}`,D1=`#define NORMAL
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
}`,U1=`#define PHONG
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
}`,L1=`#define PHONG
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
}`,N1=`#define STANDARD
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
}`,O1=`#define STANDARD
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
}`,z1=`#define TOON
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
}`,P1=`#define TOON
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
}`,I1=`uniform float size;
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
}`,B1=`uniform vec3 diffuse;
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
}`,F1=`#include <common>
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
}`,H1=`uniform vec3 color;
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
}`,G1=`uniform float rotation;
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
}`,V1=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:uM,alphahash_pars_fragment:fM,alphamap_fragment:hM,alphamap_pars_fragment:dM,alphatest_fragment:pM,alphatest_pars_fragment:mM,aomap_fragment:gM,aomap_pars_fragment:_M,batching_pars_vertex:vM,batching_vertex:xM,begin_vertex:SM,beginnormal_vertex:yM,bsdfs:MM,iridescence_fragment:EM,bumpmap_pars_fragment:TM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:RM,clipping_planes_vertex:wM,color_fragment:CM,color_pars_fragment:DM,color_pars_vertex:UM,color_vertex:LM,common:NM,cube_uv_reflection_fragment:OM,defaultnormal_vertex:zM,displacementmap_pars_vertex:PM,displacementmap_vertex:IM,emissivemap_fragment:BM,emissivemap_pars_fragment:FM,colorspace_fragment:HM,colorspace_pars_fragment:GM,envmap_fragment:VM,envmap_common_pars_fragment:kM,envmap_pars_fragment:XM,envmap_pars_vertex:WM,envmap_physical_pars_fragment:nE,envmap_vertex:jM,fog_vertex:qM,fog_pars_vertex:YM,fog_fragment:ZM,fog_pars_fragment:KM,gradientmap_pars_fragment:QM,lightmap_pars_fragment:JM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:eE,lights_pars_begin:tE,lights_toon_fragment:iE,lights_toon_pars_fragment:aE,lights_phong_fragment:sE,lights_phong_pars_fragment:rE,lights_physical_fragment:oE,lights_physical_pars_fragment:lE,lights_fragment_begin:cE,lights_fragment_maps:uE,lights_fragment_end:fE,logdepthbuf_fragment:hE,logdepthbuf_pars_fragment:dE,logdepthbuf_pars_vertex:pE,logdepthbuf_vertex:mE,map_fragment:gE,map_pars_fragment:_E,map_particle_fragment:vE,map_particle_pars_fragment:xE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:yE,morphinstance_vertex:ME,morphcolor_vertex:EE,morphnormal_vertex:TE,morphtarget_pars_vertex:bE,morphtarget_vertex:AE,normal_fragment_begin:RE,normal_fragment_maps:wE,normal_pars_fragment:CE,normal_pars_vertex:DE,normal_vertex:UE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:NE,clearcoat_normal_fragment_maps:OE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:PE,opaque_fragment:IE,packing:BE,premultiplied_alpha_fragment:FE,project_vertex:HE,dithering_fragment:GE,dithering_pars_fragment:VE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:jE,shadowmap_vertex:qE,shadowmask_pars_fragment:YE,skinbase_vertex:ZE,skinning_pars_vertex:KE,skinning_vertex:QE,skinnormal_vertex:JE,specularmap_fragment:$E,specularmap_pars_fragment:e1,tonemapping_fragment:t1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:a1,uv_pars_fragment:s1,uv_pars_vertex:r1,uv_vertex:o1,worldpos_vertex:l1,background_vert:c1,background_frag:u1,backgroundCube_vert:f1,backgroundCube_frag:h1,cube_vert:d1,cube_frag:p1,depth_vert:m1,depth_frag:g1,distanceRGBA_vert:_1,distanceRGBA_frag:v1,equirect_vert:x1,equirect_frag:S1,linedashed_vert:y1,linedashed_frag:M1,meshbasic_vert:E1,meshbasic_frag:T1,meshlambert_vert:b1,meshlambert_frag:A1,meshmatcap_vert:R1,meshmatcap_frag:w1,meshnormal_vert:C1,meshnormal_frag:D1,meshphong_vert:U1,meshphong_frag:L1,meshphysical_vert:N1,meshphysical_frag:O1,meshtoon_vert:z1,meshtoon_frag:P1,points_vert:I1,points_frag:B1,shadow_vert:F1,shadow_frag:H1,sprite_vert:G1,sprite_frag:V1},Le={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ui={basic:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Tt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Pn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Pn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Tt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Pn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Pn([Le.points,Le.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Pn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Pn([Le.common,Le.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Pn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Pn([Le.sprite,Le.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Pn([Le.common,Le.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Pn([Le.lights,Le.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ui.physical={uniforms:Pn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const _c={r:0,b:0,g:0},_s=new Oi,k1=new Kt;function X1(o,t,i,s,l,u,h){const d=new Tt(0);let m=u===!0?0:1,p,g,x=null,S=0,M=null;function b(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function w(L){let D=!1;const X=b(L);X===null?_(d,m):X&&X.isColor&&(_(X,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,D){const X=b(D);X&&(X.isCubeTexture||X.mapping===Uc)?(g===void 0&&(g=new ut(new In(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Nr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),_s.copy(D.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),g.material.uniforms.envMap.value=X,g.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(k1.makeRotationFromEuler(_s)),g.material.toneMapped=Lt.getTransfer(X.colorSpace)!==Ht,(x!==X||S!==X.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,x=X,S=X.version,M=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new ut(new Lc(2,2),new ja({name:"BackgroundMaterial",uniforms:Nr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(X.colorSpace)!==Ht,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(x!==X||S!==X.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=X,S=X.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,D){L.getRGB(_c,k_(o)),s.buffers.color.setClear(_c.r,_c.g,_c.b,D,h)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:w,addToRenderList:y,dispose:B}}function W1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(R,H,re,ae,fe){let de=!1;const O=x(ae,re,H);u!==O&&(u=O,p(u.object)),de=M(R,ae,re,fe),de&&b(R,ae,re,fe),fe!==null&&t.update(fe,o.ELEMENT_ARRAY_BUFFER),(de||h)&&(h=!1,D(R,H,re,ae),fe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(fe).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function x(R,H,re){const ae=re.wireframe===!0;let fe=s[R.id];fe===void 0&&(fe={},s[R.id]=fe);let de=fe[H.id];de===void 0&&(de={},fe[H.id]=de);let O=de[ae];return O===void 0&&(O=S(m()),de[ae]=O),O}function S(R){const H=[],re=[],ae=[];for(let fe=0;fe<i;fe++)H[fe]=0,re[fe]=0,ae[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:re,attributeDivisors:ae,object:R,attributes:{},index:null}}function M(R,H,re,ae){const fe=u.attributes,de=H.attributes;let O=0;const Q=re.getAttributes();for(const K in Q)if(Q[K].location>=0){const Te=fe[K];let N=de[K];if(N===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),Te===void 0||Te.attribute!==N||N&&Te.data!==N.data)return!0;O++}return u.attributesNum!==O||u.index!==ae}function b(R,H,re,ae){const fe={},de=H.attributes;let O=0;const Q=re.getAttributes();for(const K in Q)if(Q[K].location>=0){let Te=de[K];Te===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Te=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Te=R.instanceColor));const N={};N.attribute=Te,Te&&Te.data&&(N.data=Te.data),fe[K]=N,O++}u.attributes=fe,u.attributesNum=O,u.index=ae}function w(){const R=u.newAttributes;for(let H=0,re=R.length;H<re;H++)R[H]=0}function y(R){_(R,0)}function _(R,H){const re=u.newAttributes,ae=u.enabledAttributes,fe=u.attributeDivisors;re[R]=1,ae[R]===0&&(o.enableVertexAttribArray(R),ae[R]=1),fe[R]!==H&&(o.vertexAttribDivisor(R,H),fe[R]=H)}function B(){const R=u.newAttributes,H=u.enabledAttributes;for(let re=0,ae=H.length;re<ae;re++)H[re]!==R[re]&&(o.disableVertexAttribArray(re),H[re]=0)}function L(R,H,re,ae,fe,de,O){O===!0?o.vertexAttribIPointer(R,H,re,fe,de):o.vertexAttribPointer(R,H,re,ae,fe,de)}function D(R,H,re,ae){w();const fe=ae.attributes,de=re.getAttributes(),O=H.defaultAttributeValues;for(const Q in de){const K=de[Q];if(K.location>=0){let Me=fe[Q];if(Me===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Me=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Me=R.instanceColor)),Me!==void 0){const Te=Me.normalized,N=Me.itemSize,ne=t.get(Me);if(ne===void 0)continue;const Se=ne.buffer,Z=ne.type,ue=ne.bytesPerElement,be=Z===o.INT||Z===o.UNSIGNED_INT||Me.gpuType===md;if(Me.isInterleavedBufferAttribute){const ye=Me.data,He=ye.stride,Ie=Me.offset;if(ye.isInstancedInterleavedBuffer){for(let at=0;at<K.locationSize;at++)_(K.location+at,ye.meshPerAttribute);R.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let at=0;at<K.locationSize;at++)y(K.location+at);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let at=0;at<K.locationSize;at++)L(K.location+at,N/K.locationSize,Z,Te,He*ue,(Ie+N/K.locationSize*at)*ue,be)}else{if(Me.isInstancedBufferAttribute){for(let ye=0;ye<K.locationSize;ye++)_(K.location+ye,Me.meshPerAttribute);R.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ye=0;ye<K.locationSize;ye++)y(K.location+ye);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let ye=0;ye<K.locationSize;ye++)L(K.location+ye,N/K.locationSize,Z,Te,N*ue,N/K.locationSize*ye*ue,be)}}else if(O!==void 0){const Te=O[Q];if(Te!==void 0)switch(Te.length){case 2:o.vertexAttrib2fv(K.location,Te);break;case 3:o.vertexAttrib3fv(K.location,Te);break;case 4:o.vertexAttrib4fv(K.location,Te);break;default:o.vertexAttrib1fv(K.location,Te)}}}}B()}function X(){k();for(const R in s){const H=s[R];for(const re in H){const ae=H[re];for(const fe in ae)g(ae[fe].object),delete ae[fe];delete H[re]}delete s[R]}}function F(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const re in H){const ae=H[re];for(const fe in ae)g(ae[fe].object),delete ae[fe];delete H[re]}delete s[R.id]}function z(R){for(const H in s){const re=s[H];if(re[R.id]===void 0)continue;const ae=re[R.id];for(const fe in ae)g(ae[fe].object),delete ae[fe];delete re[R.id]}}function k(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:C,dispose:X,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:y,disableUnusedAttributes:B}}function j1(o,t,i){let s;function l(p){s=p}function u(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,x){x!==0&&(o.drawArraysInstanced(s,p,g,x),i.update(g,s,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,x);let M=0;for(let b=0;b<x;b++)M+=g[b];i.update(M,s,1)}function m(p,g,x,S){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,S,0,x);let b=0;for(let w=0;w<x;w++)b+=g[w]*S[w];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function q1(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ei&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const k=z===Bo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ha&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ca&&!k)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=b>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:B,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:X,maxSamples:F}}function Y1(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new xs,d=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||s!==0||l;return l=S,s=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=g(x,S,0)},this.setState=function(x,S,M){const b=x.clippingPlanes,w=x.clipIntersection,y=x.clipShadows,_=o.get(x);if(!l||b===null||b.length===0||u&&!y)u?g(null):p();else{const B=u?0:s,L=B*4;let D=_.clippingState||null;m.value=D,D=g(b,S,L,M);for(let X=0;X!==L;++X)D[X]=i[X];_.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(x,S,M,b){const w=x!==null?x.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const _=M+w*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,D=M;L!==w;++L,D+=4)h.copy(x[L]).applyMatrix4(B,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function Z1(o){let t=new WeakMap;function i(h,d){return d===zh?h.mapping=wr:d===Ph&&(h.mapping=Cr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===zh||d===Ph)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ky(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const Er=4,Y0=[.125,.215,.35,.446,.526,.582],Es=20,vh=new Y_,Z0=new Tt;let xh=null,Sh=0,yh=0,Mh=!1;const Ss=(1+Math.sqrt(5))/2,yr=1/Ss,K0=[new J(-Ss,yr,0),new J(Ss,yr,0),new J(-yr,0,Ss),new J(yr,0,Ss),new J(0,Ss,-yr),new J(0,Ss,yr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class Q0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){xh=this._renderer.getRenderTarget(),Sh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xh,Sh,yh),this._renderer.xr.enabled=Mh,t.scissorTest=!1,vc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===wr||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xh=this._renderer.getRenderTarget(),Sh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Bo,format:Ei,colorSpace:Lr,depthBuffer:!1},l=J0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J0(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K1(u)),this._blurMaterial=Q1(u,t,i)}return l}_compileMaterial(t){const i=new ut(this._lodPlanes[0],t);this._renderer.compile(i,vh)}_sceneToCubeUV(t,i,s,l){const d=new ii(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(Z0),g.toneMapping=Xa,g.autoClear=!1;const M=new Md({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),b=new ut(new In,M);let w=!1;const y=t.background;y?y.isColor&&(M.color.copy(y),t.background=null,w=!0):(M.color.copy(Z0),w=!0);for(let _=0;_<6;_++){const B=_%3;B===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):B===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const L=this._cubeSize;vc(l,B*L,_>2?L:0,L,L),g.setRenderTarget(l),w&&g.render(b,d),g.render(t,d)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=S,g.autoClear=x,t.background=y}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===wr||t.mapping===Cr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=e_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ut(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;vc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,vh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=K0[(l-u-1)%K0.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new ut(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Es-1),w=u/b,y=isFinite(u)?1+Math.floor(g*w):Es;y>Es&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Es}`);const _=[];let B=0;for(let z=0;z<Es;++z){const k=z/w,C=Math.exp(-k*k/2);_.push(C),z===0?B+=C:z<y&&(B+=2*C)}for(let z=0;z<_.length;z++)_[z]=_[z]/B;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=b,S.mipInt.value=L-s;const D=this._sizeLods[l],X=3*D*(l>L-Er?l-L+Er:0),F=4*(this._cubeSize-D);vc(i,X,F,3*D,2*D),m.setRenderTarget(i),m.render(x,vh)}}function K1(o){const t=[],i=[],s=[];let l=o;const u=o-Er+1+Y0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Er?m=Y0[h-o+Er-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,x=1+p,S=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,b=6,w=3,y=2,_=1,B=new Float32Array(w*b*M),L=new Float32Array(y*b*M),D=new Float32Array(_*b*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,k=F>2?0:-1,C=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];B.set(C,w*b*F),L.set(S,y*b*F);const R=[F,F,F,F,F,F];D.set(R,_*b*F)}const X=new zi;X.setAttribute("position",new Ni(B,w)),X.setAttribute("uv",new Ni(L,y)),X.setAttribute("faceIndex",new Ni(D,_)),t.push(X),l>Er&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function J0(o,t,i){const s=new Rs(o,t,i);return s.texture.mapping=Uc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function vc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function Q1(o,t,i){const s=new Float32Array(Es),l=new J(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ad(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function $0(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ad(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function e_(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Ad(){return`

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
	`}function J1(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===zh||m===Ph,g=m===wr||m===Cr;if(p||g){let x=t.get(d);const S=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Q0(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Q0(o)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function $1(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Mr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function eT(o,t,i,s){const l={},u=new WeakMap;function h(x){const S=x.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(x,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function p(x){const S=[],M=x.index,b=x.attributes.position;let w=0;if(M!==null){const B=M.array;w=M.version;for(let L=0,D=B.length;L<D;L+=3){const X=B[L+0],F=B[L+1],z=B[L+2];S.push(X,F,F,z,z,X)}}else if(b!==void 0){const B=b.array;w=b.version;for(let L=0,D=B.length/3-1;L<D;L+=3){const X=L+0,F=L+1,z=L+2;S.push(X,F,F,z,z,X)}}else return;const y=new(P_(S)?V_:G_)(S,1);y.version=w;const _=u.get(x);_&&t.remove(_),u.set(x,y)}function g(x){const S=u.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function tT(o,t,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,u,S*h),i.update(M,s,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(s,M,u,S*h,b),i.update(M,s,b))}function g(S,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,s,1)}function x(S,M,b,w){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/h,M[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,w,0,b);let _=0;for(let B=0;B<b;B++)_+=M[B]*w[B];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function nT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function iT(o,t,i){const s=new WeakMap,l=new Gt;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let S=s.get(d);if(S===void 0||S.count!==x){let R=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let X=d.attributes.position.count*D,F=1;X>t.maxTextureSize&&(F=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const z=new Float32Array(X*F*4*x),k=new B_(z,X,F,x);k.type=ca,k.needsUpdate=!0;const C=D*4;for(let H=0;H<x;H++){const re=_[H],ae=B[H],fe=L[H],de=X*F*4*H;for(let O=0;O<re.count;O++){const Q=O*C;b===!0&&(l.fromBufferAttribute(re,O),z[de+Q+0]=l.x,z[de+Q+1]=l.y,z[de+Q+2]=l.z,z[de+Q+3]=0),w===!0&&(l.fromBufferAttribute(ae,O),z[de+Q+4]=l.x,z[de+Q+5]=l.y,z[de+Q+6]=l.z,z[de+Q+7]=0),y===!0&&(l.fromBufferAttribute(fe,O),z[de+Q+8]=l.x,z[de+Q+9]=l.y,z[de+Q+10]=l.z,z[de+Q+11]=fe.itemSize===4?l.w:1)}}S={count:x,texture:k,size:new At(X,F)},s.set(d,S),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const w=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function aT(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const K_=new jn,t_=new j_(1,1),Q_=new B_,J_=new Ny,$_=new W_,n_=[],i_=[],a_=new Float32Array(16),s_=new Float32Array(9),r_=new Float32Array(4);function zr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=n_[l];if(u===void 0&&(u=new Float32Array(l),n_[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function pn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function mn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Nc(o,t){let i=i_[t];i===void 0&&(i=new Int32Array(t),i_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function sT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2fv(this.addr,t),mn(i,t)}}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;o.uniform3fv(this.addr,t),mn(i,t)}}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4fv(this.addr,t),mn(i,t)}}function cT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;r_.set(s),o.uniformMatrix2fv(this.addr,!1,r_),mn(i,s)}}function uT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;s_.set(s),o.uniformMatrix3fv(this.addr,!1,s_),mn(i,s)}}function fT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;a_.set(s),o.uniformMatrix4fv(this.addr,!1,a_),mn(i,s)}}function hT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function dT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2iv(this.addr,t),mn(i,t)}}function pT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3iv(this.addr,t),mn(i,t)}}function mT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4iv(this.addr,t),mn(i,t)}}function gT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function _T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2uiv(this.addr,t),mn(i,t)}}function vT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3uiv(this.addr,t),mn(i,t)}}function xT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4uiv(this.addr,t),mn(i,t)}}function ST(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(t_.compareFunction=z_,u=t_):u=K_,i.setTexture2D(t||u,l)}function yT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||J_,l)}function MT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||$_,l)}function ET(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Q_,l)}function TT(o){switch(o){case 5126:return sT;case 35664:return rT;case 35665:return oT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return fT;case 5124:case 35670:return hT;case 35667:case 35671:return dT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return _T;case 36295:return vT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return ET}}function bT(o,t){o.uniform1fv(this.addr,t)}function AT(o,t){const i=zr(t,this.size,2);o.uniform2fv(this.addr,i)}function RT(o,t){const i=zr(t,this.size,3);o.uniform3fv(this.addr,i)}function wT(o,t){const i=zr(t,this.size,4);o.uniform4fv(this.addr,i)}function CT(o,t){const i=zr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function DT(o,t){const i=zr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function UT(o,t){const i=zr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function LT(o,t){o.uniform1iv(this.addr,t)}function NT(o,t){o.uniform2iv(this.addr,t)}function OT(o,t){o.uniform3iv(this.addr,t)}function zT(o,t){o.uniform4iv(this.addr,t)}function PT(o,t){o.uniform1uiv(this.addr,t)}function IT(o,t){o.uniform2uiv(this.addr,t)}function BT(o,t){o.uniform3uiv(this.addr,t)}function FT(o,t){o.uniform4uiv(this.addr,t)}function HT(o,t,i){const s=this.cache,l=t.length,u=Nc(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||K_,u[h])}function GT(o,t,i){const s=this.cache,l=t.length,u=Nc(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||J_,u[h])}function VT(o,t,i){const s=this.cache,l=t.length,u=Nc(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||$_,u[h])}function kT(o,t,i){const s=this.cache,l=t.length,u=Nc(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Q_,u[h])}function XT(o){switch(o){case 5126:return bT;case 35664:return AT;case 35665:return RT;case 35666:return wT;case 35674:return CT;case 35675:return DT;case 35676:return UT;case 5124:case 35670:return LT;case 35667:case 35671:return NT;case 35668:case 35672:return OT;case 35669:case 35673:return zT;case 5125:return PT;case 36294:return IT;case 36295:return BT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return kT}}class WT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=TT(i.type)}}class jT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=XT(i.type)}}class qT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Eh=/(\w+)(\])?(\[|\.)?/g;function o_(o,t){o.seq.push(t),o.map[t.id]=t}function YT(o,t,i){const s=o.name,l=s.length;for(Eh.lastIndex=0;;){const u=Eh.exec(s),h=Eh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){o_(i,p===void 0?new WT(d,o,t):new jT(d,o,t));break}else{let x=i.map[d];x===void 0&&(x=new qT(d),o_(i,x)),i=x}}}class Ac{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);YT(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function l_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const ZT=37297;let KT=0;function QT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const c_=new ft;function JT(o){Lt._getMatrix(c_,Lt.workingColorSpace,o);const t=`mat3( ${c_.elements.map(i=>i.toFixed(4))} )`;switch(Lt.getTransfer(o)){case Rc:return[t,"LinearTransferOETF"];case Ht:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function u_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+QT(o.getShaderSource(t),h)}else return l}function $T(o,t){const i=JT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function eb(o,t){let i;switch(t){case sy:i="Linear";break;case ry:i="Reinhard";break;case oy:i="Cineon";break;case ly:i="ACESFilmic";break;case uy:i="AgX";break;case fy:i="Neutral";break;case cy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xc=new J;function tb(){Lt.getLuminanceCoefficients(xc);const o=xc.x.toFixed(4),t=xc.y.toFixed(4),i=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function ib(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function ab(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Po(o){return o!==""}function f_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function h_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(o){return o.replace(sb,ob)}const rb=new Map;function ob(o,t){let i=dt[t];if(i===void 0){const s=rb.get(t);if(s!==void 0)i=dt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return hd(i)}const lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d_(o){return o.replace(lb,cb)}function cb(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function p_(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function ub(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===y_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===BS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function fb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case wr:case Cr:t="ENVMAP_TYPE_CUBE";break;case Uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Cr:t="ENVMAP_MODE_REFRACTION";break}return t}function db(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case M_:t="ENVMAP_BLENDING_MULTIPLY";break;case iy:t="ENVMAP_BLENDING_MIX";break;case ay:t="ENVMAP_BLENDING_ADD";break}return t}function pb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function mb(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=ub(i),p=fb(i),g=hb(i),x=db(i),S=pb(i),M=nb(i),b=ib(u),w=l.createProgram();let y,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Po).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Po).join(`
`),_.length>0&&(_+=`
`)):(y=[p_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),_=[p_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?dt.tonemapping_pars_fragment:"",i.toneMapping!==Xa?eb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,$T("linearToOutputTexel",i.outputColorSpace),tb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Po).join(`
`)),h=hd(h),h=f_(h,i),h=h_(h,i),d=hd(d),d=f_(d,i),d=h_(d,i),h=d_(h),d=d_(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===E0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===E0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=B+y+h,D=B+_+d,X=l_(l,l.VERTEX_SHADER,L),F=l_(l,l.FRAGMENT_SHADER,D);l.attachShader(w,X),l.attachShader(w,F),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(H){if(o.debug.checkShaderErrors){const re=l.getProgramInfoLog(w).trim(),ae=l.getShaderInfoLog(X).trim(),fe=l.getShaderInfoLog(F).trim();let de=!0,O=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(de=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,X,F);else{const Q=u_(l,X,"vertex"),K=u_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+re+`
`+Q+`
`+K)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(ae===""||fe==="")&&(O=!1);O&&(H.diagnostics={runnable:de,programLog:re,vertexShader:{log:ae,prefix:y},fragmentShader:{log:fe,prefix:_}})}l.deleteShader(X),l.deleteShader(F),k=new Ac(l,w),C=ab(l,w)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,ZT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=KT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=X,this.fragmentShader=F,this}let gb=0;class _b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new vb(t),i.set(t,s)),s}}class vb{constructor(t){this.id=gb++,this.code=t,this.usedTimes=0}}function xb(o,t,i,s,l,u,h){const d=new F_,m=new _b,p=new Set,g=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,R,H,re,ae){const fe=re.fog,de=ae.geometry,O=C.isMeshStandardMaterial?re.environment:null,Q=(C.isMeshStandardMaterial?i:t).get(C.envMap||O),K=Q&&Q.mapping===Uc?Q.image.height:null,Me=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const Te=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,N=Te!==void 0?Te.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let Se,Z,ue,be;if(Me){const bt=Ui[Me];Se=bt.vertexShader,Z=bt.fragmentShader}else Se=C.vertexShader,Z=C.fragmentShader,m.update(C),ue=m.getVertexShaderID(C),be=m.getFragmentShaderID(C);const ye=o.getRenderTarget(),He=o.state.buffers.depth.getReversed(),Ie=ae.isInstancedMesh===!0,at=ae.isBatchedMesh===!0,Rt=!!C.map,ht=!!C.matcap,Xt=!!Q,G=!!C.aoMap,Ne=!!C.lightMap,Fe=!!C.bumpMap,Ze=!!C.normalMap,Oe=!!C.displacementMap,pt=!!C.emissiveMap,Xe=!!C.metalnessMap,U=!!C.roughnessMap,T=C.anisotropy>0,te=C.clearcoat>0,pe=C.dispersion>0,Ee=C.iridescence>0,ge=C.sheen>0,qe=C.transmission>0,Ce=T&&!!C.anisotropyMap,Ge=te&&!!C.clearcoatMap,vt=te&&!!C.clearcoatNormalMap,Ae=te&&!!C.clearcoatRoughnessMap,Ve=Ee&&!!C.iridescenceMap,Ke=Ee&&!!C.iridescenceThicknessMap,Ye=ge&&!!C.sheenColorMap,ze=ge&&!!C.sheenRoughnessMap,tt=!!C.specularMap,rt=!!C.specularColorMap,Pt=!!C.specularIntensityMap,W=qe&&!!C.transmissionMap,Re=qe&&!!C.thicknessMap,ce=!!C.gradientMap,ve=!!C.alphaMap,we=C.alphaTest>0,De=!!C.alphaHash,nt=!!C.extensions;let Yt=Xa;C.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Yt=o.toneMapping);const fn={shaderID:Me,shaderType:C.type,shaderName:C.name,vertexShader:Se,fragmentShader:Z,defines:C.defines,customVertexShaderID:ue,customFragmentShaderID:be,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:at,batchingColor:at&&ae._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ae.instanceColor!==null,instancingMorph:Ie&&ae.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ye===null?o.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Lr,alphaToCoverage:!!C.alphaToCoverage,map:Rt,matcap:ht,envMap:Xt,envMapMode:Xt&&Q.mapping,envMapCubeUVHeight:K,aoMap:G,lightMap:Ne,bumpMap:Fe,normalMap:Ze,displacementMap:S&&Oe,emissiveMap:pt,normalMapObjectSpace:Ze&&C.normalMapType===my,normalMapTangentSpace:Ze&&C.normalMapType===O_,metalnessMap:Xe,roughnessMap:U,anisotropy:T,anisotropyMap:Ce,clearcoat:te,clearcoatMap:Ge,clearcoatNormalMap:vt,clearcoatRoughnessMap:Ae,dispersion:pe,iridescence:Ee,iridescenceMap:Ve,iridescenceThicknessMap:Ke,sheen:ge,sheenColorMap:Ye,sheenRoughnessMap:ze,specularMap:tt,specularColorMap:rt,specularIntensityMap:Pt,transmission:qe,transmissionMap:W,thicknessMap:Re,gradientMap:ce,opaque:C.transparent===!1&&C.blending===Tr&&C.alphaToCoverage===!1,alphaMap:ve,alphaTest:we,alphaHash:De,combine:C.combine,mapUv:Rt&&w(C.map.channel),aoMapUv:G&&w(C.aoMap.channel),lightMapUv:Ne&&w(C.lightMap.channel),bumpMapUv:Fe&&w(C.bumpMap.channel),normalMapUv:Ze&&w(C.normalMap.channel),displacementMapUv:Oe&&w(C.displacementMap.channel),emissiveMapUv:pt&&w(C.emissiveMap.channel),metalnessMapUv:Xe&&w(C.metalnessMap.channel),roughnessMapUv:U&&w(C.roughnessMap.channel),anisotropyMapUv:Ce&&w(C.anisotropyMap.channel),clearcoatMapUv:Ge&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:vt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:ze&&w(C.sheenRoughnessMap.channel),specularMapUv:tt&&w(C.specularMap.channel),specularColorMapUv:rt&&w(C.specularColorMap.channel),specularIntensityMapUv:Pt&&w(C.specularIntensityMap.channel),transmissionMapUv:W&&w(C.transmissionMap.channel),thicknessMapUv:Re&&w(C.thicknessMap.channel),alphaMapUv:ve&&w(C.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Ze||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!de.attributes.uv&&(Rt||ve),fog:!!fe,useFog:C.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:He,skinning:ae.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Rt&&C.map.isVideoTexture===!0&&Lt.getTransfer(C.map.colorSpace)===Ht,decodeVideoTextureEmissive:pt&&C.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(C.emissiveMap.colorSpace)===Ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===la,flipSided:C.side===Wn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:nt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&C.extensions.multiDraw===!0||at)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return fn.vertexUv1s=p.has(1),fn.vertexUv2s=p.has(2),fn.vertexUv3s=p.has(3),p.clear(),fn}function _(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)R.push(H),R.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(B(R,C),L(R,C),R.push(o.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function B(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function L(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const R=b[C.type];let H;if(R){const re=Ui[R];H=jy.clone(re.uniforms)}else H=C.uniforms;return H}function X(C,R){let H;for(let re=0,ae=g.length;re<ae;re++){const fe=g[re];if(fe.cacheKey===R){H=fe,++H.usedTimes;break}}return H===void 0&&(H=new mb(o,R,C,u),g.push(H)),H}function F(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),C.destroy()}}function z(C){m.remove(C)}function k(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:X,releaseProgram:F,releaseShaderCache:z,programs:g,dispose:k}}function Sb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function yb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function m_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function g_(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(x,S,M,b,w,y){let _=o[t];return _===void 0?(_={id:x.id,object:x,geometry:S,material:M,groupOrder:b,renderOrder:x.renderOrder,z:w,group:y},o[t]=_):(_.id=x.id,_.object=x,_.geometry=S,_.material=M,_.groupOrder=b,_.renderOrder=x.renderOrder,_.z=w,_.group=y),t++,_}function d(x,S,M,b,w,y){const _=h(x,S,M,b,w,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,S,M,b,w,y){const _=h(x,S,M,b,w,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,S){i.length>1&&i.sort(x||yb),s.length>1&&s.sort(S||m_),l.length>1&&l.sort(S||m_)}function g(){for(let x=t,S=o.length;x<S;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function Mb(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new g_,o.set(s,[h])):l>=u.length?(h=new g_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Eb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new Tt};break;case"SpotLight":i={position:new J,direction:new J,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":i={color:new Tt,position:new J,halfWidth:new J,halfHeight:new J};break}return o[t.id]=i,i}}}function Tb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let bb=0;function Ab(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Rb(o){const t=new Eb,i=Tb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,u=new Kt,h=new Kt;function d(p){let g=0,x=0,S=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,b=0,w=0,y=0,_=0,B=0,L=0,D=0,X=0,F=0,z=0;p.sort(Ab);for(let C=0,R=p.length;C<R;C++){const H=p[C],re=H.color,ae=H.intensity,fe=H.distance,de=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=re.r*ae,x+=re.g*ae,S+=re.b*ae;else if(H.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(H.sh.coefficients[O],ae);z++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Q=H.shadow,K=i.get(H);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,s.directionalShadow[M]=K,s.directionalShadowMap[M]=de,s.directionalShadowMatrix[M]=H.shadow.matrix,B++}s.directional[M]=O,M++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(re).multiplyScalar(ae),O.distance=fe,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,s.spot[w]=O;const Q=H.shadow;if(H.map&&(s.spotLightMap[X]=H.map,X++,Q.updateMatrices(H),H.castShadow&&F++),s.spotLightMatrix[w]=Q.matrix,H.castShadow){const K=i.get(H);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,s.spotShadow[w]=K,s.spotShadowMap[w]=de,D++}w++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy(re).multiplyScalar(ae),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=O,y++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const Q=H.shadow,K=i.get(H);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,s.pointShadow[b]=K,s.pointShadowMap[b]=de,s.pointShadowMatrix[b]=H.shadow.matrix,L++}s.point[b]=O,b++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar(ae),O.groundColor.copy(H.groundColor).multiplyScalar(ae),s.hemi[_]=O,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=S;const k=s.hash;(k.directionalLength!==M||k.pointLength!==b||k.spotLength!==w||k.rectAreaLength!==y||k.hemiLength!==_||k.numDirectionalShadows!==B||k.numPointShadows!==L||k.numSpotShadows!==D||k.numSpotMaps!==X||k.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+X-F,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,k.directionalLength=M,k.pointLength=b,k.spotLength=w,k.rectAreaLength=y,k.hemiLength=_,k.numDirectionalShadows=B,k.numPointShadows=L,k.numSpotShadows=D,k.numSpotMaps=X,k.numLightProbes=z,s.version=bb++)}function m(p,g){let x=0,S=0,M=0,b=0,w=0;const y=g.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const L=p[_];if(L.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),x++}else if(L.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(L.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(L.isPointLight){const D=s.point[S];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:d,setupView:m,state:s}}function __(o){const t=new Rb(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function wb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new __(o),t.set(l,[d])):u>=h.length?(d=new __(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Db=`uniform sampler2D shadow_pass;
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
}`;function Ub(o,t,i){let s=new Ed;const l=new At,u=new At,h=new Gt,d=new eM({depthPacking:py}),m=new tM,p={},g=i.maxTextureSize,x={[Wa]:Wn,[Wn]:Wa,[la]:la},S=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Cb,fragmentShader:Db}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new zi;b.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ut(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y_;let _=this.type;this.render=function(F,z,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const C=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),re=o.state;re.setBlending(ka),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ae=_!==ra&&this.type===ra,fe=_===ra&&this.type!==ra;for(let de=0,O=F.length;de<O;de++){const Q=F[de],K=Q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const Me=K.getFrameExtents();if(l.multiply(Me),u.copy(K.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Me.x),l.x=u.x*Me.x,K.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Me.y),l.y=u.y*Me.y,K.mapSize.y=u.y)),K.map===null||ae===!0||fe===!0){const N=this.type!==ra?{minFilter:Ti,magFilter:Ti}:{};K.map!==null&&K.map.dispose(),K.map=new Rs(l.x,l.y,N),K.map.texture.name=Q.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const Te=K.getViewportCount();for(let N=0;N<Te;N++){const ne=K.getViewport(N);h.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),re.viewport(h),K.updateMatrices(Q,N),s=K.getFrustum(),D(z,k,K.camera,Q,this.type)}K.isPointLightShadow!==!0&&this.type===ra&&B(K,k),K.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(C,R,H)};function B(F,z){const k=t.update(w);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Rs(l.x,l.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(z,null,k,S,w,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(z,null,k,M,w,null)}function L(F,z,k,C){let R=null;const H=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)R=H;else if(R=k.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const re=R.uuid,ae=z.uuid;let fe=p[re];fe===void 0&&(fe={},p[re]=fe);let de=fe[ae];de===void 0&&(de=R.clone(),fe[ae]=de,z.addEventListener("dispose",X)),R=de}if(R.visible=z.visible,R.wireframe=z.wireframe,C===ra?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:x[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const re=o.properties.get(R);re.light=k}return R}function D(F,z,k,C,R){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===ra)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const ae=t.update(F),fe=F.material;if(Array.isArray(fe)){const de=ae.groups;for(let O=0,Q=de.length;O<Q;O++){const K=de[O],Me=fe[K.materialIndex];if(Me&&Me.visible){const Te=L(F,Me,C,R);F.onBeforeShadow(o,F,z,k,ae,Te,K),o.renderBufferDirect(k,null,ae,Te,F,K),F.onAfterShadow(o,F,z,k,ae,Te,K)}}}else if(fe.visible){const de=L(F,fe,C,R);F.onBeforeShadow(o,F,z,k,ae,de,null),o.renderBufferDirect(k,null,ae,de,F,null),F.onAfterShadow(o,F,z,k,ae,de,null)}}const re=F.children;for(let ae=0,fe=re.length;ae<fe;ae++)D(re[ae],z,k,C,R)}function X(F){F.target.removeEventListener("dispose",X);for(const k in p){const C=p[k],R=F.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const Lb={[wh]:Ch,[Dh]:Nh,[Uh]:Oh,[Rr]:Lh,[Ch]:wh,[Nh]:Dh,[Oh]:Uh,[Lh]:Rr};function Nb(o,t){function i(){let W=!1;const Re=new Gt;let ce=null;const ve=new Gt(0,0,0,0);return{setMask:function(we){ce!==we&&!W&&(o.colorMask(we,we,we,we),ce=we)},setLocked:function(we){W=we},setClear:function(we,De,nt,Yt,fn){fn===!0&&(we*=Yt,De*=Yt,nt*=Yt),Re.set(we,De,nt,Yt),ve.equals(Re)===!1&&(o.clearColor(we,De,nt,Yt),ve.copy(Re))},reset:function(){W=!1,ce=null,ve.set(-1,0,0,0)}}}function s(){let W=!1,Re=!1,ce=null,ve=null,we=null;return{setReversed:function(De){if(Re!==De){const nt=t.get("EXT_clip_control");Re?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT);const Yt=we;we=null,this.setClear(Yt)}Re=De},getReversed:function(){return Re},setTest:function(De){De?ye(o.DEPTH_TEST):He(o.DEPTH_TEST)},setMask:function(De){ce!==De&&!W&&(o.depthMask(De),ce=De)},setFunc:function(De){if(Re&&(De=Lb[De]),ve!==De){switch(De){case wh:o.depthFunc(o.NEVER);break;case Ch:o.depthFunc(o.ALWAYS);break;case Dh:o.depthFunc(o.LESS);break;case Rr:o.depthFunc(o.LEQUAL);break;case Uh:o.depthFunc(o.EQUAL);break;case Lh:o.depthFunc(o.GEQUAL);break;case Nh:o.depthFunc(o.GREATER);break;case Oh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ve=De}},setLocked:function(De){W=De},setClear:function(De){we!==De&&(Re&&(De=1-De),o.clearDepth(De),we=De)},reset:function(){W=!1,ce=null,ve=null,we=null,Re=!1}}}function l(){let W=!1,Re=null,ce=null,ve=null,we=null,De=null,nt=null,Yt=null,fn=null;return{setTest:function(bt){W||(bt?ye(o.STENCIL_TEST):He(o.STENCIL_TEST))},setMask:function(bt){Re!==bt&&!W&&(o.stencilMask(bt),Re=bt)},setFunc:function(bt,Sn,di){(ce!==bt||ve!==Sn||we!==di)&&(o.stencilFunc(bt,Sn,di),ce=bt,ve=Sn,we=di)},setOp:function(bt,Sn,di){(De!==bt||nt!==Sn||Yt!==di)&&(o.stencilOp(bt,Sn,di),De=bt,nt=Sn,Yt=di)},setLocked:function(bt){W=bt},setClear:function(bt){fn!==bt&&(o.clearStencil(bt),fn=bt)},reset:function(){W=!1,Re=null,ce=null,ve=null,we=null,De=null,nt=null,Yt=null,fn=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},S=new WeakMap,M=[],b=null,w=!1,y=null,_=null,B=null,L=null,D=null,X=null,F=null,z=new Tt(0,0,0),k=0,C=!1,R=null,H=null,re=null,ae=null,fe=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Q=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(K)[1]),O=Q>=1):K.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),O=Q>=2);let Me=null,Te={};const N=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Se=new Gt().fromArray(N),Z=new Gt().fromArray(ne);function ue(W,Re,ce,ve){const we=new Uint8Array(4),De=o.createTexture();o.bindTexture(W,De),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let nt=0;nt<ce;nt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,ve,0,o.RGBA,o.UNSIGNED_BYTE,we):o.texImage2D(Re+nt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,we);return De}const be={};be[o.TEXTURE_2D]=ue(o.TEXTURE_2D,o.TEXTURE_2D,1),be[o.TEXTURE_CUBE_MAP]=ue(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[o.TEXTURE_2D_ARRAY]=ue(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),be[o.TEXTURE_3D]=ue(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ye(o.DEPTH_TEST),h.setFunc(Rr),Fe(!1),Ze(_0),ye(o.CULL_FACE),G(ka);function ye(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function He(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Ie(W,Re){return x[W]!==Re?(o.bindFramebuffer(W,Re),x[W]=Re,W===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Re),W===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function at(W,Re){let ce=M,ve=!1;if(W){ce=S.get(Re),ce===void 0&&(ce=[],S.set(Re,ce));const we=W.textures;if(ce.length!==we.length||ce[0]!==o.COLOR_ATTACHMENT0){for(let De=0,nt=we.length;De<nt;De++)ce[De]=o.COLOR_ATTACHMENT0+De;ce.length=we.length,ve=!0}}else ce[0]!==o.BACK&&(ce[0]=o.BACK,ve=!0);ve&&o.drawBuffers(ce)}function Rt(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const ht={[ys]:o.FUNC_ADD,[HS]:o.FUNC_SUBTRACT,[GS]:o.FUNC_REVERSE_SUBTRACT};ht[VS]=o.MIN,ht[kS]=o.MAX;const Xt={[XS]:o.ZERO,[WS]:o.ONE,[jS]:o.SRC_COLOR,[Ah]:o.SRC_ALPHA,[JS]:o.SRC_ALPHA_SATURATE,[KS]:o.DST_COLOR,[YS]:o.DST_ALPHA,[qS]:o.ONE_MINUS_SRC_COLOR,[Rh]:o.ONE_MINUS_SRC_ALPHA,[QS]:o.ONE_MINUS_DST_COLOR,[ZS]:o.ONE_MINUS_DST_ALPHA,[$S]:o.CONSTANT_COLOR,[ey]:o.ONE_MINUS_CONSTANT_COLOR,[ty]:o.CONSTANT_ALPHA,[ny]:o.ONE_MINUS_CONSTANT_ALPHA};function G(W,Re,ce,ve,we,De,nt,Yt,fn,bt){if(W===ka){w===!0&&(He(o.BLEND),w=!1);return}if(w===!1&&(ye(o.BLEND),w=!0),W!==FS){if(W!==y||bt!==C){if((_!==ys||D!==ys)&&(o.blendEquation(o.FUNC_ADD),_=ys,D=ys),bt)switch(W){case Tr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case v0:o.blendFunc(o.ONE,o.ONE);break;case x0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case S0:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Tr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case v0:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case x0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case S0:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}B=null,L=null,X=null,F=null,z.set(0,0,0),k=0,y=W,C=bt}return}we=we||Re,De=De||ce,nt=nt||ve,(Re!==_||we!==D)&&(o.blendEquationSeparate(ht[Re],ht[we]),_=Re,D=we),(ce!==B||ve!==L||De!==X||nt!==F)&&(o.blendFuncSeparate(Xt[ce],Xt[ve],Xt[De],Xt[nt]),B=ce,L=ve,X=De,F=nt),(Yt.equals(z)===!1||fn!==k)&&(o.blendColor(Yt.r,Yt.g,Yt.b,fn),z.copy(Yt),k=fn),y=W,C=!1}function Ne(W,Re){W.side===la?He(o.CULL_FACE):ye(o.CULL_FACE);let ce=W.side===Wn;Re&&(ce=!ce),Fe(ce),W.blending===Tr&&W.transparent===!1?G(ka):G(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const ve=W.stencilWrite;d.setTest(ve),ve&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),pt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ye(o.SAMPLE_ALPHA_TO_COVERAGE):He(o.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(W){R!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),R=W)}function Ze(W){W!==PS?(ye(o.CULL_FACE),W!==H&&(W===_0?o.cullFace(o.BACK):W===IS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):He(o.CULL_FACE),H=W}function Oe(W){W!==re&&(O&&o.lineWidth(W),re=W)}function pt(W,Re,ce){W?(ye(o.POLYGON_OFFSET_FILL),(ae!==Re||fe!==ce)&&(o.polygonOffset(Re,ce),ae=Re,fe=ce)):He(o.POLYGON_OFFSET_FILL)}function Xe(W){W?ye(o.SCISSOR_TEST):He(o.SCISSOR_TEST)}function U(W){W===void 0&&(W=o.TEXTURE0+de-1),Me!==W&&(o.activeTexture(W),Me=W)}function T(W,Re,ce){ce===void 0&&(Me===null?ce=o.TEXTURE0+de-1:ce=Me);let ve=Te[ce];ve===void 0&&(ve={type:void 0,texture:void 0},Te[ce]=ve),(ve.type!==W||ve.texture!==Re)&&(Me!==ce&&(o.activeTexture(ce),Me=ce),o.bindTexture(W,Re||be[W]),ve.type=W,ve.texture=Re)}function te(){const W=Te[Me];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{o.compressedTexImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{o.texSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{o.texSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{o.texStorage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{o.texStorage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{o.texImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{o.texImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ye(W){Se.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),Se.copy(W))}function ze(W){Z.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Z.copy(W))}function tt(W,Re){let ce=p.get(Re);ce===void 0&&(ce=new WeakMap,p.set(Re,ce));let ve=ce.get(W);ve===void 0&&(ve=o.getUniformBlockIndex(Re,W.name),ce.set(W,ve))}function rt(W,Re){const ve=p.get(Re).get(W);m.get(Re)!==ve&&(o.uniformBlockBinding(Re,ve,W.__bindingPointIndex),m.set(Re,ve))}function Pt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Me=null,Te={},x={},S=new WeakMap,M=[],b=null,w=!1,y=null,_=null,B=null,L=null,D=null,X=null,F=null,z=new Tt(0,0,0),k=0,C=!1,R=null,H=null,re=null,ae=null,fe=null,Se.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ye,disable:He,bindFramebuffer:Ie,drawBuffers:at,useProgram:Rt,setBlending:G,setMaterial:Ne,setFlipSided:Fe,setCullFace:Ze,setLineWidth:Oe,setPolygonOffset:pt,setScissorTest:Xe,activeTexture:U,bindTexture:T,unbindTexture:te,compressedTexImage2D:pe,compressedTexImage3D:Ee,texImage2D:Ve,texImage3D:Ke,updateUBOMapping:tt,uniformBlockBinding:rt,texStorage2D:vt,texStorage3D:Ae,texSubImage2D:ge,texSubImage3D:qe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ge,scissor:Ye,viewport:ze,reset:Pt}}function Ob(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new At,g=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):Cc("canvas")}function w(U,T,te){let pe=1;const Ee=Xe(U);if((Ee.width>te||Ee.height>te)&&(pe=te/Math.max(Ee.width,Ee.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ge=Math.floor(pe*Ee.width),qe=Math.floor(pe*Ee.height);x===void 0&&(x=b(ge,qe));const Ce=T?b(ge,qe):x;return Ce.width=ge,Ce.height=qe,Ce.getContext("2d").drawImage(U,0,0,ge,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+ge+"x"+qe+")."),Ce}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),U;return U}function y(U){return U.generateMipmaps}function _(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,T,te,pe,Ee=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ge=T;if(T===o.RED&&(te===o.FLOAT&&(ge=o.R32F),te===o.HALF_FLOAT&&(ge=o.R16F),te===o.UNSIGNED_BYTE&&(ge=o.R8)),T===o.RED_INTEGER&&(te===o.UNSIGNED_BYTE&&(ge=o.R8UI),te===o.UNSIGNED_SHORT&&(ge=o.R16UI),te===o.UNSIGNED_INT&&(ge=o.R32UI),te===o.BYTE&&(ge=o.R8I),te===o.SHORT&&(ge=o.R16I),te===o.INT&&(ge=o.R32I)),T===o.RG&&(te===o.FLOAT&&(ge=o.RG32F),te===o.HALF_FLOAT&&(ge=o.RG16F),te===o.UNSIGNED_BYTE&&(ge=o.RG8)),T===o.RG_INTEGER&&(te===o.UNSIGNED_BYTE&&(ge=o.RG8UI),te===o.UNSIGNED_SHORT&&(ge=o.RG16UI),te===o.UNSIGNED_INT&&(ge=o.RG32UI),te===o.BYTE&&(ge=o.RG8I),te===o.SHORT&&(ge=o.RG16I),te===o.INT&&(ge=o.RG32I)),T===o.RGB_INTEGER&&(te===o.UNSIGNED_BYTE&&(ge=o.RGB8UI),te===o.UNSIGNED_SHORT&&(ge=o.RGB16UI),te===o.UNSIGNED_INT&&(ge=o.RGB32UI),te===o.BYTE&&(ge=o.RGB8I),te===o.SHORT&&(ge=o.RGB16I),te===o.INT&&(ge=o.RGB32I)),T===o.RGBA_INTEGER&&(te===o.UNSIGNED_BYTE&&(ge=o.RGBA8UI),te===o.UNSIGNED_SHORT&&(ge=o.RGBA16UI),te===o.UNSIGNED_INT&&(ge=o.RGBA32UI),te===o.BYTE&&(ge=o.RGBA8I),te===o.SHORT&&(ge=o.RGBA16I),te===o.INT&&(ge=o.RGBA32I)),T===o.RGB&&te===o.UNSIGNED_INT_5_9_9_9_REV&&(ge=o.RGB9_E5),T===o.RGBA){const qe=Ee?Rc:Lt.getTransfer(pe);te===o.FLOAT&&(ge=o.RGBA32F),te===o.HALF_FLOAT&&(ge=o.RGBA16F),te===o.UNSIGNED_BYTE&&(ge=qe===Ht?o.SRGB8_ALPHA8:o.RGBA8),te===o.UNSIGNED_SHORT_4_4_4_4&&(ge=o.RGBA4),te===o.UNSIGNED_SHORT_5_5_5_1&&(ge=o.RGB5_A1)}return(ge===o.R16F||ge===o.R32F||ge===o.RG16F||ge===o.RG32F||ge===o.RGBA16F||ge===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ge}function D(U,T){let te;return U?T===null||T===As||T===Dr?te=o.DEPTH24_STENCIL8:T===ca?te=o.DEPTH32F_STENCIL8:T===Io&&(te=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===As||T===Dr?te=o.DEPTH_COMPONENT24:T===ca?te=o.DEPTH_COMPONENT32F:T===Io&&(te=o.DEPTH_COMPONENT16),te}function X(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ti&&U.minFilter!==Li?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function F(U){const T=U.target;T.removeEventListener("dispose",F),k(T),T.isVideoTexture&&g.delete(T)}function z(U){const T=U.target;T.removeEventListener("dispose",z),R(T)}function k(U){const T=s.get(U);if(T.__webglInit===void 0)return;const te=U.source,pe=S.get(te);if(pe){const Ee=pe[T.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&C(U),Object.keys(pe).length===0&&S.delete(te)}s.remove(U)}function C(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const te=U.source,pe=S.get(te);delete pe[T.__cacheKey],h.memory.textures--}function R(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let Ee=0;Ee<T.__webglFramebuffer[pe].length;Ee++)o.deleteFramebuffer(T.__webglFramebuffer[pe][Ee]);else o.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)o.deleteFramebuffer(T.__webglFramebuffer[pe]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=U.textures;for(let pe=0,Ee=te.length;pe<Ee;pe++){const ge=s.get(te[pe]);ge.__webglTexture&&(o.deleteTexture(ge.__webglTexture),h.memory.textures--),s.remove(te[pe])}s.remove(U)}let H=0;function re(){H=0}function ae(){const U=H;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function fe(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function de(U,T){const te=s.get(U);if(U.isVideoTexture&&Oe(U),U.isRenderTargetTexture===!1&&U.version>0&&te.__version!==U.version){const pe=U.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(te,U,T);return}}i.bindTexture(o.TEXTURE_2D,te.__webglTexture,o.TEXTURE0+T)}function O(U,T){const te=s.get(U);if(U.version>0&&te.__version!==U.version){Z(te,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,te.__webglTexture,o.TEXTURE0+T)}function Q(U,T){const te=s.get(U);if(U.version>0&&te.__version!==U.version){Z(te,U,T);return}i.bindTexture(o.TEXTURE_3D,te.__webglTexture,o.TEXTURE0+T)}function K(U,T){const te=s.get(U);if(U.version>0&&te.__version!==U.version){ue(te,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture,o.TEXTURE0+T)}const Me={[Ih]:o.REPEAT,[Ts]:o.CLAMP_TO_EDGE,[Bh]:o.MIRRORED_REPEAT},Te={[Ti]:o.NEAREST,[hy]:o.NEAREST_MIPMAP_NEAREST,[$l]:o.NEAREST_MIPMAP_LINEAR,[Li]:o.LINEAR,[qf]:o.LINEAR_MIPMAP_NEAREST,[bs]:o.LINEAR_MIPMAP_LINEAR},N={[gy]:o.NEVER,[My]:o.ALWAYS,[_y]:o.LESS,[z_]:o.LEQUAL,[vy]:o.EQUAL,[yy]:o.GEQUAL,[xy]:o.GREATER,[Sy]:o.NOTEQUAL};function ne(U,T){if(T.type===ca&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Li||T.magFilter===qf||T.magFilter===$l||T.magFilter===bs||T.minFilter===Li||T.minFilter===qf||T.minFilter===$l||T.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Me[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Me[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Me[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Te[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Te[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ti||T.minFilter!==$l&&T.minFilter!==bs||T.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const te=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Se(U,T){let te=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",F));const pe=T.source;let Ee=S.get(pe);Ee===void 0&&(Ee={},S.set(pe,Ee));const ge=fe(T);if(ge!==U.__cacheKey){Ee[ge]===void 0&&(Ee[ge]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,te=!0),Ee[ge].usedTimes++;const qe=Ee[U.__cacheKey];qe!==void 0&&(Ee[U.__cacheKey].usedTimes--,qe.usedTimes===0&&C(T)),U.__cacheKey=ge,U.__webglTexture=Ee[ge].texture}return te}function Z(U,T,te){let pe=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=o.TEXTURE_3D);const Ee=Se(U,T),ge=T.source;i.bindTexture(pe,U.__webglTexture,o.TEXTURE0+te);const qe=s.get(ge);if(ge.version!==qe.__version||Ee===!0){i.activeTexture(o.TEXTURE0+te);const Ce=Lt.getPrimaries(Lt.workingColorSpace),Ge=T.colorSpace===Va?null:Lt.getPrimaries(T.colorSpace),vt=T.colorSpace===Va||Ce===Ge?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Ae=w(T.image,!1,l.maxTextureSize);Ae=pt(T,Ae);const Ve=u.convert(T.format,T.colorSpace),Ke=u.convert(T.type);let Ye=L(T.internalFormat,Ve,Ke,T.colorSpace,T.isVideoTexture);ne(pe,T);let ze;const tt=T.mipmaps,rt=T.isVideoTexture!==!0,Pt=qe.__version===void 0||Ee===!0,W=ge.dataReady,Re=X(T,Ae);if(T.isDepthTexture)Ye=D(T.format===Ur,T.type),Pt&&(rt?i.texStorage2D(o.TEXTURE_2D,1,Ye,Ae.width,Ae.height):i.texImage2D(o.TEXTURE_2D,0,Ye,Ae.width,Ae.height,0,Ve,Ke,null));else if(T.isDataTexture)if(tt.length>0){rt&&Pt&&i.texStorage2D(o.TEXTURE_2D,Re,Ye,tt[0].width,tt[0].height);for(let ce=0,ve=tt.length;ce<ve;ce++)ze=tt[ce],rt?W&&i.texSubImage2D(o.TEXTURE_2D,ce,0,0,ze.width,ze.height,Ve,Ke,ze.data):i.texImage2D(o.TEXTURE_2D,ce,Ye,ze.width,ze.height,0,Ve,Ke,ze.data);T.generateMipmaps=!1}else rt?(Pt&&i.texStorage2D(o.TEXTURE_2D,Re,Ye,Ae.width,Ae.height),W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Ve,Ke,Ae.data)):i.texImage2D(o.TEXTURE_2D,0,Ye,Ae.width,Ae.height,0,Ve,Ke,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ye,tt[0].width,tt[0].height,Ae.depth);for(let ce=0,ve=tt.length;ce<ve;ce++)if(ze=tt[ce],T.format!==Ei)if(Ve!==null)if(rt){if(W)if(T.layerUpdates.size>0){const we=q0(ze.width,ze.height,T.format,T.type);for(const De of T.layerUpdates){const nt=ze.data.subarray(De*we/ze.data.BYTES_PER_ELEMENT,(De+1)*we/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ce,0,0,De,ze.width,ze.height,1,Ve,nt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ce,0,0,0,ze.width,ze.height,Ae.depth,Ve,ze.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ce,Ye,ze.width,ze.height,Ae.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?W&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ce,0,0,0,ze.width,ze.height,Ae.depth,Ve,Ke,ze.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ce,Ye,ze.width,ze.height,Ae.depth,0,Ve,Ke,ze.data)}else{rt&&Pt&&i.texStorage2D(o.TEXTURE_2D,Re,Ye,tt[0].width,tt[0].height);for(let ce=0,ve=tt.length;ce<ve;ce++)ze=tt[ce],T.format!==Ei?Ve!==null?rt?W&&i.compressedTexSubImage2D(o.TEXTURE_2D,ce,0,0,ze.width,ze.height,Ve,ze.data):i.compressedTexImage2D(o.TEXTURE_2D,ce,Ye,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?W&&i.texSubImage2D(o.TEXTURE_2D,ce,0,0,ze.width,ze.height,Ve,Ke,ze.data):i.texImage2D(o.TEXTURE_2D,ce,Ye,ze.width,ze.height,0,Ve,Ke,ze.data)}else if(T.isDataArrayTexture)if(rt){if(Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ye,Ae.width,Ae.height,Ae.depth),W)if(T.layerUpdates.size>0){const ce=q0(Ae.width,Ae.height,T.format,T.type);for(const ve of T.layerUpdates){const we=Ae.data.subarray(ve*ce/Ae.data.BYTES_PER_ELEMENT,(ve+1)*ce/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ve,Ae.width,Ae.height,1,Ve,Ke,we)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ve,Ke,Ae.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ye,Ae.width,Ae.height,Ae.depth,0,Ve,Ke,Ae.data);else if(T.isData3DTexture)rt?(Pt&&i.texStorage3D(o.TEXTURE_3D,Re,Ye,Ae.width,Ae.height,Ae.depth),W&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ve,Ke,Ae.data)):i.texImage3D(o.TEXTURE_3D,0,Ye,Ae.width,Ae.height,Ae.depth,0,Ve,Ke,Ae.data);else if(T.isFramebufferTexture){if(Pt)if(rt)i.texStorage2D(o.TEXTURE_2D,Re,Ye,Ae.width,Ae.height);else{let ce=Ae.width,ve=Ae.height;for(let we=0;we<Re;we++)i.texImage2D(o.TEXTURE_2D,we,Ye,ce,ve,0,Ve,Ke,null),ce>>=1,ve>>=1}}else if(tt.length>0){if(rt&&Pt){const ce=Xe(tt[0]);i.texStorage2D(o.TEXTURE_2D,Re,Ye,ce.width,ce.height)}for(let ce=0,ve=tt.length;ce<ve;ce++)ze=tt[ce],rt?W&&i.texSubImage2D(o.TEXTURE_2D,ce,0,0,Ve,Ke,ze):i.texImage2D(o.TEXTURE_2D,ce,Ye,Ve,Ke,ze);T.generateMipmaps=!1}else if(rt){if(Pt){const ce=Xe(Ae);i.texStorage2D(o.TEXTURE_2D,Re,Ye,ce.width,ce.height)}W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ve,Ke,Ae)}else i.texImage2D(o.TEXTURE_2D,0,Ye,Ve,Ke,Ae);y(T)&&_(pe),qe.__version=ge.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ue(U,T,te){if(T.image.length!==6)return;const pe=Se(U,T),Ee=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+te);const ge=s.get(Ee);if(Ee.version!==ge.__version||pe===!0){i.activeTexture(o.TEXTURE0+te);const qe=Lt.getPrimaries(Lt.workingColorSpace),Ce=T.colorSpace===Va?null:Lt.getPrimaries(T.colorSpace),Ge=T.colorSpace===Va||qe===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const vt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,Ve=[];for(let ve=0;ve<6;ve++)!vt&&!Ae?Ve[ve]=w(T.image[ve],!0,l.maxCubemapSize):Ve[ve]=Ae?T.image[ve].image:T.image[ve],Ve[ve]=pt(T,Ve[ve]);const Ke=Ve[0],Ye=u.convert(T.format,T.colorSpace),ze=u.convert(T.type),tt=L(T.internalFormat,Ye,ze,T.colorSpace),rt=T.isVideoTexture!==!0,Pt=ge.__version===void 0||pe===!0,W=Ee.dataReady;let Re=X(T,Ke);ne(o.TEXTURE_CUBE_MAP,T);let ce;if(vt){rt&&Pt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,tt,Ke.width,Ke.height);for(let ve=0;ve<6;ve++){ce=Ve[ve].mipmaps;for(let we=0;we<ce.length;we++){const De=ce[we];T.format!==Ei?Ye!==null?rt?W&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we,0,0,De.width,De.height,Ye,De.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we,tt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we,0,0,De.width,De.height,Ye,ze,De.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we,tt,De.width,De.height,0,Ye,ze,De.data)}}}else{if(ce=T.mipmaps,rt&&Pt){ce.length>0&&Re++;const ve=Xe(Ve[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,tt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ae){rt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ve[ve].width,Ve[ve].height,Ye,ze,Ve[ve].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,tt,Ve[ve].width,Ve[ve].height,0,Ye,ze,Ve[ve].data);for(let we=0;we<ce.length;we++){const nt=ce[we].image[ve].image;rt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we+1,0,0,nt.width,nt.height,Ye,ze,nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we+1,tt,nt.width,nt.height,0,Ye,ze,nt.data)}}else{rt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ye,ze,Ve[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,tt,Ye,ze,Ve[ve]);for(let we=0;we<ce.length;we++){const De=ce[we];rt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we+1,0,0,Ye,ze,De.image[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we+1,tt,Ye,ze,De.image[ve])}}}y(T)&&_(o.TEXTURE_CUBE_MAP),ge.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function be(U,T,te,pe,Ee,ge){const qe=u.convert(te.format,te.colorSpace),Ce=u.convert(te.type),Ge=L(te.internalFormat,qe,Ce,te.colorSpace),vt=s.get(T),Ae=s.get(te);if(Ae.__renderTarget=T,!vt.__hasExternalTextures){const Ve=Math.max(1,T.width>>ge),Ke=Math.max(1,T.height>>ge);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?i.texImage3D(Ee,ge,Ge,Ve,Ke,T.depth,0,qe,Ce,null):i.texImage2D(Ee,ge,Ge,Ve,Ke,0,qe,Ce,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ze(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,Ee,Ae.__webglTexture,0,Fe(T)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,Ee,Ae.__webglTexture,ge),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ye(U,T,te){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const pe=T.depthTexture,Ee=pe&&pe.isDepthTexture?pe.type:null,ge=D(T.stencilBuffer,Ee),qe=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=Fe(T);Ze(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ce,ge,T.width,T.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ce,ge,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ge,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qe,o.RENDERBUFFER,U)}else{const pe=T.textures;for(let Ee=0;Ee<pe.length;Ee++){const ge=pe[Ee],qe=u.convert(ge.format,ge.colorSpace),Ce=u.convert(ge.type),Ge=L(ge.internalFormat,qe,Ce,ge.colorSpace),vt=Fe(T);te&&Ze(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,vt,Ge,T.width,T.height):Ze(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,vt,Ge,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ge,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function He(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=s.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),de(T.depthTexture,0);const Ee=pe.__webglTexture,ge=Fe(T);if(T.depthTexture.format===br)Ze(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0);else if(T.depthTexture.format===Ur)Ze(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Ie(U){const T=s.get(U),te=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const pe=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const Ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",Ee)};pe.addEventListener("dispose",Ee),T.__depthDisposeCallback=Ee}T.__boundDepthTexture=pe}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");He(T.__webglFramebuffer,U)}else if(te){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=o.createRenderbuffer(),ye(T.__webglDepthbuffer[pe],U,!1);else{const Ee=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,ge)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ye(T.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ee=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ee),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,Ee)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function at(U,T,te){const pe=s.get(U);T!==void 0&&be(pe.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),te!==void 0&&Ie(U)}function Rt(U){const T=U.texture,te=s.get(U),pe=s.get(T);U.addEventListener("dispose",z);const Ee=U.textures,ge=U.isWebGLCubeRenderTarget===!0,qe=Ee.length>1;if(qe||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=T.version,h.memory.textures++),ge){te.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Ce]=[];for(let Ge=0;Ge<T.mipmaps.length;Ge++)te.__webglFramebuffer[Ce][Ge]=o.createFramebuffer()}else te.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)te.__webglFramebuffer[Ce]=o.createFramebuffer()}else te.__webglFramebuffer=o.createFramebuffer();if(qe)for(let Ce=0,Ge=Ee.length;Ce<Ge;Ce++){const vt=s.get(Ee[Ce]);vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ze(U)===!1){te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Ee.length;Ce++){const Ge=Ee[Ce];te.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,te.__webglColorRenderbuffer[Ce]);const vt=u.convert(Ge.format,Ge.colorSpace),Ae=u.convert(Ge.type),Ve=L(Ge.internalFormat,vt,Ae,Ge.colorSpace,U.isXRRenderTarget===!0),Ke=Fe(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke,Ve,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,te.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),ye(te.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ge){i.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)be(te.__webglFramebuffer[Ce][Ge],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ge);else be(te.__webglFramebuffer[Ce],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let Ce=0,Ge=Ee.length;Ce<Ge;Ce++){const vt=Ee[Ce],Ae=s.get(vt);i.bindTexture(o.TEXTURE_2D,Ae.__webglTexture),ne(o.TEXTURE_2D,vt),be(te.__webglFramebuffer,U,vt,o.COLOR_ATTACHMENT0+Ce,o.TEXTURE_2D,0),y(vt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ce,pe.__webglTexture),ne(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)be(te.__webglFramebuffer[Ge],U,T,o.COLOR_ATTACHMENT0,Ce,Ge);else be(te.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Ce,0);y(T)&&_(Ce),i.unbindTexture()}U.depthBuffer&&Ie(U)}function ht(U){const T=U.textures;for(let te=0,pe=T.length;te<pe;te++){const Ee=T[te];if(y(Ee)){const ge=B(U),qe=s.get(Ee).__webglTexture;i.bindTexture(ge,qe),_(ge),i.unbindTexture()}}}const Xt=[],G=[];function Ne(U){if(U.samples>0){if(Ze(U)===!1){const T=U.textures,te=U.width,pe=U.height;let Ee=o.COLOR_BUFFER_BIT;const ge=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qe=s.get(U),Ce=T.length>1;if(Ce)for(let Ge=0;Ge<T.length;Ge++)i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ge,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ge,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Ge=0;Ge<T.length;Ge++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qe.__webglColorRenderbuffer[Ge]);const vt=s.get(T[Ge]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,vt,0)}o.blitFramebuffer(0,0,te,pe,0,0,te,pe,Ee,o.NEAREST),m===!0&&(Xt.length=0,G.length=0,Xt.push(o.COLOR_ATTACHMENT0+Ge),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Xt.push(ge),G.push(ge),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,G)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Xt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let Ge=0;Ge<T.length;Ge++){i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ge,o.RENDERBUFFER,qe.__webglColorRenderbuffer[Ge]);const vt=s.get(T[Ge]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ge,o.TEXTURE_2D,vt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Fe(U){return Math.min(l.maxSamples,U.samples)}function Ze(U){const T=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Oe(U){const T=h.render.frame;g.get(U)!==T&&(g.set(U,T),U.update())}function pt(U,T){const te=U.colorSpace,pe=U.format,Ee=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||te!==Lr&&te!==Va&&(Lt.getTransfer(te)===Ht?(pe!==Ei||Ee!==ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Xe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=re,this.setTexture2D=de,this.setTexture2DArray=O,this.setTexture3D=Q,this.setTextureCube=K,this.rebindTextures=at,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ze}function zb(o,t){function i(s,l=Va){let u;const h=Lt.getTransfer(l);if(s===ha)return o.UNSIGNED_BYTE;if(s===gd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===_d)return o.UNSIGNED_SHORT_5_5_5_1;if(s===A_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===T_)return o.BYTE;if(s===b_)return o.SHORT;if(s===Io)return o.UNSIGNED_SHORT;if(s===md)return o.INT;if(s===As)return o.UNSIGNED_INT;if(s===ca)return o.FLOAT;if(s===Bo)return o.HALF_FLOAT;if(s===R_)return o.ALPHA;if(s===w_)return o.RGB;if(s===Ei)return o.RGBA;if(s===C_)return o.LUMINANCE;if(s===D_)return o.LUMINANCE_ALPHA;if(s===br)return o.DEPTH_COMPONENT;if(s===Ur)return o.DEPTH_STENCIL;if(s===U_)return o.RED;if(s===vd)return o.RED_INTEGER;if(s===L_)return o.RG;if(s===xd)return o.RG_INTEGER;if(s===Sd)return o.RGBA_INTEGER;if(s===yc||s===Mc||s===Ec||s===Tc)if(h===Ht)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fh||s===Hh||s===Gh||s===Vh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Fh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kh||s===Xh||s===Wh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===kh||s===Xh)return h===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Wh)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===ed||s===td||s===nd||s===id||s===ad||s===sd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===jh)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qh)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yh)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zh)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kh)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qh)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jh)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$h)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ed)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===td)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nd)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===id)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ad)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sd)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bc||s===rd||s===od)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===bc)return h===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===od)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===N_||s===ld||s===cd||s===ud)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===bc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===ld)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ud)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Dr?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Pb={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),_=this._getHandJoint(p,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=g.position.distanceTo(x.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Pb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new yi;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bb=`
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

}`;class Fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new jn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ja({vertexShader:Ib,fragmentShader:Bb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ut(new Lc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hb extends Or{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,S=null,M=null,b=null;const w=new Fb,y=i.getContextAttributes();let _=null,B=null;const L=[],D=[],X=new At;let F=null;const z=new ii;z.viewport=new Gt;const k=new ii;k.viewport=new Gt;const C=[z,k],R=new rM;let H=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=L[Z];return ue===void 0&&(ue=new Th,L[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=L[Z];return ue===void 0&&(ue=new Th,L[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=L[Z];return ue===void 0&&(ue=new Th,L[Z]=ue),ue.getHandSpace()};function ae(Z){const ue=D.indexOf(Z.inputSource);if(ue===-1)return;const be=L[ue];be!==void 0&&(be.update(Z.inputSource,Z.frame,p||h),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function fe(){l.removeEventListener("select",ae),l.removeEventListener("selectstart",ae),l.removeEventListener("selectend",ae),l.removeEventListener("squeeze",ae),l.removeEventListener("squeezestart",ae),l.removeEventListener("squeezeend",ae),l.removeEventListener("end",fe),l.removeEventListener("inputsourceschange",de);for(let Z=0;Z<L.length;Z++){const ue=D[Z];ue!==null&&(D[Z]=null,L[Z].disconnect(ue))}H=null,re=null,w.reset(),t.setRenderTarget(_),M=null,S=null,x=null,l=null,B=null,Se.stop(),s.isPresenting=!1,t.setPixelRatio(F),t.setSize(X.width,X.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",ae),l.addEventListener("selectstart",ae),l.addEventListener("selectend",ae),l.addEventListener("squeeze",ae),l.addEventListener("squeezestart",ae),l.addEventListener("squeezeend",ae),l.addEventListener("end",fe),l.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(X),l.renderState.layers===void 0){const ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ue),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new Rs(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:ha,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let ue=null,be=null,ye=null;y.depth&&(ye=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ue=y.stencil?Ur:br,be=y.stencil?Dr:As);const He={colorFormat:i.RGBA8,depthFormat:ye,scaleFactor:u};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(He),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),B=new Rs(S.textureWidth,S.textureHeight,{format:Ei,type:ha,depthTexture:new j_(S.textureWidth,S.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Se.setContext(l),Se.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function de(Z){for(let ue=0;ue<Z.removed.length;ue++){const be=Z.removed[ue],ye=D.indexOf(be);ye>=0&&(D[ye]=null,L[ye].disconnect(be))}for(let ue=0;ue<Z.added.length;ue++){const be=Z.added[ue];let ye=D.indexOf(be);if(ye===-1){for(let Ie=0;Ie<L.length;Ie++)if(Ie>=D.length){D.push(be),ye=Ie;break}else if(D[Ie]===null){D[Ie]=be,ye=Ie;break}if(ye===-1)break}const He=L[ye];He&&He.connect(be)}}const O=new J,Q=new J;function K(Z,ue,be){O.setFromMatrixPosition(ue.matrixWorld),Q.setFromMatrixPosition(be.matrixWorld);const ye=O.distanceTo(Q),He=ue.projectionMatrix.elements,Ie=be.projectionMatrix.elements,at=He[14]/(He[10]-1),Rt=He[14]/(He[10]+1),ht=(He[9]+1)/He[5],Xt=(He[9]-1)/He[5],G=(He[8]-1)/He[0],Ne=(Ie[8]+1)/Ie[0],Fe=at*G,Ze=at*Ne,Oe=ye/(-G+Ne),pt=Oe*-G;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(pt),Z.translateZ(Oe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),He[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Xe=at+Oe,U=Rt+Oe,T=Fe-pt,te=Ze+(ye-pt),pe=ht*Rt/U*Xe,Ee=Xt*Rt/U*Xe;Z.projectionMatrix.makePerspective(T,te,pe,Ee,Xe,U),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Me(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let ue=Z.near,be=Z.far;w.texture!==null&&(w.depthNear>0&&(ue=w.depthNear),w.depthFar>0&&(be=w.depthFar)),R.near=k.near=z.near=ue,R.far=k.far=z.far=be,(H!==R.near||re!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,re=R.far),z.layers.mask=Z.layers.mask|2,k.layers.mask=Z.layers.mask|4,R.layers.mask=z.layers.mask|k.layers.mask;const ye=Z.parent,He=R.cameras;Me(R,ye);for(let Ie=0;Ie<He.length;Ie++)Me(He[Ie],ye);He.length===2?K(R,z,k):R.projectionMatrix.copy(z.projectionMatrix),Te(Z,R,ye)};function Te(Z,ue,be){be===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(Z){m=Z,S!==null&&(S.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let N=null;function ne(Z,ue){if(g=ue.getViewerPose(p||h),b=ue,g!==null){const be=g.views;M!==null&&(t.setRenderTargetFramebuffer(B,M.framebuffer),t.setRenderTarget(B));let ye=!1;be.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let Ie=0;Ie<be.length;Ie++){const at=be[Ie];let Rt=null;if(M!==null)Rt=M.getViewport(at);else{const Xt=x.getViewSubImage(S,at);Rt=Xt.viewport,Ie===0&&(t.setRenderTargetTextures(B,Xt.colorTexture,S.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(B))}let ht=C[Ie];ht===void 0&&(ht=new ii,ht.layers.enable(Ie),ht.viewport=new Gt,C[Ie]=ht),ht.matrix.fromArray(at.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(at.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ie===0&&(R.matrix.copy(ht.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(ht)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")){const Ie=x.getDepthInformation(be[0]);Ie&&Ie.isValid&&Ie.texture&&w.init(t,Ie,l.renderState)}}for(let be=0;be<L.length;be++){const ye=D[be],He=L[be];ye!==null&&He!==void 0&&He.update(ye,ue,p||h)}N&&N(Z,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),b=null}const Se=new Z_;Se.setAnimationLoop(ne),this.setAnimationLoop=function(Z){N=Z},this.dispose=function(){}}}const vs=new Oi,Gb=new Kt;function Vb(o,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,k_(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,B,L,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),x(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,D)):_.isMeshMatcapMaterial?(u(y,_),b(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),w(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,B,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Wn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Wn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const B=t.get(_),L=B.envMap,D=B.envMapRotation;L&&(y.envMap.value=L,vs.copy(D),vs.x*=-1,vs.y*=-1,vs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),y.envMapRotation.value.setFromMatrix4(Gb.makeRotationFromEuler(vs)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,B,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*B,y.scale.value=L*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,B){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const B=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function kb(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,L){const D=L.program;s.uniformBlockBinding(B,D)}function p(B,L){let D=l[B.id];D===void 0&&(b(B),D=g(B),l[B.id]=D,B.addEventListener("dispose",y));const X=L.program;s.updateUBOMapping(B,X);const F=t.render.frame;u[B.id]!==F&&(S(B),u[B.id]=F)}function g(B){const L=x();B.__bindingPointIndex=L;const D=o.createBuffer(),X=B.__size,F=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,X,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function x(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const L=l[B.id],D=B.uniforms,X=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let F=0,z=D.length;F<z;F++){const k=Array.isArray(D[F])?D[F]:[D[F]];for(let C=0,R=k.length;C<R;C++){const H=k[C];if(M(H,F,C,X)===!0){const re=H.__offset,ae=Array.isArray(H.value)?H.value:[H.value];let fe=0;for(let de=0;de<ae.length;de++){const O=ae[de],Q=w(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,re+fe,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,fe),fe+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,re,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,L,D,X){const F=B.value,z=L+"_"+D;if(X[z]===void 0)return typeof F=="number"||typeof F=="boolean"?X[z]=F:X[z]=F.clone(),!0;{const k=X[z];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return X[z]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function b(B){const L=B.uniforms;let D=0;const X=16;for(let z=0,k=L.length;z<k;z++){const C=Array.isArray(L[z])?L[z]:[L[z]];for(let R=0,H=C.length;R<H;R++){const re=C[R],ae=Array.isArray(re.value)?re.value:[re.value];for(let fe=0,de=ae.length;fe<de;fe++){const O=ae[fe],Q=w(O),K=D%X,Me=K%Q.boundary,Te=K+Me;D+=Me,Te!==0&&X-Te<Q.storage&&(D+=X-Te),re.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=D,D+=Q.storage}}}const F=D%X;return F>0&&(D+=X-F),B.__size=D,B.__cache={},this}function w(B){const L={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(L.boundary=4,L.storage=4):B.isVector2?(L.boundary=8,L.storage=8):B.isVector3||B.isColor?(L.boundary=16,L.storage=12):B.isVector4?(L.boundary=16,L.storage=16):B.isMatrix3?(L.boundary=48,L.storage=48):B.isMatrix4?(L.boundary=64,L.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),L}function y(B){const L=B.target;L.removeEventListener("dispose",y);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class Xb{constructor(t={}){const{canvas:i=Ty(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),w=new Int32Array(4);let y=null,_=null;const B=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Xa,this.toneMappingExposure=1;const D=this;let X=!1,F=0,z=0,k=null,C=-1,R=null;const H=new Gt,re=new Gt;let ae=null;const fe=new Tt(0);let de=0,O=i.width,Q=i.height,K=1,Me=null,Te=null;const N=new Gt(0,0,O,Q),ne=new Gt(0,0,O,Q);let Se=!1;const Z=new Ed;let ue=!1,be=!1;const ye=new Kt,He=new Kt,Ie=new J,at=new Gt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Xt(){return k===null?K:1}let G=s;function Ne(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pd}`),i.addEventListener("webglcontextlost",ve,!1),i.addEventListener("webglcontextrestored",we,!1),i.addEventListener("webglcontextcreationerror",De,!1),G===null){const j="webgl2";if(G=Ne(j,A),G===null)throw Ne(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Fe,Ze,Oe,pt,Xe,U,T,te,pe,Ee,ge,qe,Ce,Ge,vt,Ae,Ve,Ke,Ye,ze,tt,rt,Pt,W;function Re(){Fe=new $1(G),Fe.init(),rt=new zb(G,Fe),Ze=new q1(G,Fe,t,rt),Oe=new Nb(G,Fe),Ze.reverseDepthBuffer&&S&&Oe.buffers.depth.setReversed(!0),pt=new nT(G),Xe=new Sb,U=new Ob(G,Fe,Oe,Xe,Ze,rt,pt),T=new Z1(D),te=new J1(D),pe=new cM(G),Pt=new W1(G,pe),Ee=new eT(G,pe,pt,Pt),ge=new aT(G,Ee,pe,pt),Ye=new iT(G,Ze,U),Ae=new Y1(Xe),qe=new xb(D,T,te,Fe,Ze,Pt,Ae),Ce=new Vb(D,Xe),Ge=new Mb,vt=new wb(Fe),Ke=new X1(D,T,te,Oe,ge,M,m),Ve=new Ub(D,ge,Ze),W=new kb(G,pt,Ze,Oe),ze=new j1(G,Fe,pt),tt=new tT(G,Fe,pt),pt.programs=qe.programs,D.capabilities=Ze,D.extensions=Fe,D.properties=Xe,D.renderLists=Ge,D.shadowMap=Ve,D.state=Oe,D.info=pt}Re();const ce=new Hb(D,G);this.xr=ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(O,Q,!1))},this.getSize=function(A){return A.set(O,Q)},this.setSize=function(A,j,se=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,Q=j,i.width=Math.floor(A*K),i.height=Math.floor(j*K),se===!0&&(i.style.width=A+"px",i.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(O*K,Q*K).floor()},this.setDrawingBufferSize=function(A,j,se){O=A,Q=j,K=se,i.width=Math.floor(A*se),i.height=Math.floor(j*se),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,j,se,oe){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,j,se,oe),Oe.viewport(H.copy(N).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,j,se,oe){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,j,se,oe),Oe.scissor(re.copy(ne).multiplyScalar(K).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(A){Oe.setScissorTest(Se=A)},this.setOpaqueSort=function(A){Me=A},this.setTransparentSort=function(A){Te=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,j=!0,se=!0){let oe=0;if(A){let q=!1;if(k!==null){const xe=k.texture.format;q=xe===Sd||xe===xd||xe===vd}if(q){const xe=k.texture.type,Ue=xe===ha||xe===As||xe===Io||xe===Dr||xe===gd||xe===_d,Be=Ke.getClearColor(),Pe=Ke.getClearAlpha(),$e=Be.r,it=Be.g,Qe=Be.b;Ue?(b[0]=$e,b[1]=it,b[2]=Qe,b[3]=Pe,G.clearBufferuiv(G.COLOR,0,b)):(w[0]=$e,w[1]=it,w[2]=Qe,w[3]=Pe,G.clearBufferiv(G.COLOR,0,w))}else oe|=G.COLOR_BUFFER_BIT}j&&(oe|=G.DEPTH_BUFFER_BIT),se&&(oe|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ve,!1),i.removeEventListener("webglcontextrestored",we,!1),i.removeEventListener("webglcontextcreationerror",De,!1),Ke.dispose(),Ge.dispose(),vt.dispose(),Xe.dispose(),T.dispose(),te.dispose(),ge.dispose(),Pt.dispose(),W.dispose(),qe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Pr),ce.removeEventListener("sessionend",Ir),bi.stop()};function ve(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const A=pt.autoReset,j=Ve.enabled,se=Ve.autoUpdate,oe=Ve.needsUpdate,q=Ve.type;Re(),pt.autoReset=A,Ve.enabled=j,Ve.autoUpdate=se,Ve.needsUpdate=oe,Ve.type=q}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nt(A){const j=A.target;j.removeEventListener("dispose",nt),Yt(j)}function Yt(A){fn(A),Xe.remove(A)}function fn(A){const j=Xe.get(A).programs;j!==void 0&&(j.forEach(function(se){qe.releaseProgram(se)}),A.isShaderMaterial&&qe.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,se,oe,q,xe){j===null&&(j=Rt);const Ue=q.isMesh&&q.matrixWorld.determinant()<0,Be=Fr(A,j,se,oe,q);Oe.setMaterial(oe,Ue);let Pe=se.index,$e=1;if(oe.wireframe===!0){if(Pe=Ee.getWireframeAttribute(se),Pe===void 0)return;$e=2}const it=se.drawRange,Qe=se.attributes.position;let xt=it.start*$e,wt=(it.start+it.count)*$e;xe!==null&&(xt=Math.max(xt,xe.start*$e),wt=Math.min(wt,(xe.start+xe.count)*$e)),Pe!==null?(xt=Math.max(xt,0),wt=Math.min(wt,Pe.count)):Qe!=null&&(xt=Math.max(xt,0),wt=Math.min(wt,Qe.count));const Wt=wt-xt;if(Wt<0||Wt===1/0)return;Pt.setup(q,oe,Be,se,Pe);let Vt,ot=ze;if(Pe!==null&&(Vt=pe.get(Pe),ot=tt,ot.setIndex(Vt)),q.isMesh)oe.wireframe===!0?(Oe.setLineWidth(oe.wireframeLinewidth*Xt()),ot.setMode(G.LINES)):ot.setMode(G.TRIANGLES);else if(q.isLine){let We=oe.linewidth;We===void 0&&(We=1),Oe.setLineWidth(We*Xt()),q.isLineSegments?ot.setMode(G.LINES):q.isLineLoop?ot.setMode(G.LINE_LOOP):ot.setMode(G.LINE_STRIP)}else q.isPoints?ot.setMode(G.POINTS):q.isSprite&&ot.setMode(G.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ot.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))ot.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const We=q._multiDrawStarts,an=q._multiDrawCounts,Ct=q._multiDrawCount,Nn=Pe?pe.get(Pe).bytesPerElement:1,Ii=Xe.get(oe).currentProgram.getUniforms();for(let gn=0;gn<Ct;gn++)Ii.setValue(G,"_gl_DrawID",gn),ot.render(We[gn]/Nn,an[gn])}else if(q.isInstancedMesh)ot.renderInstances(xt,Wt,q.count);else if(se.isInstancedBufferGeometry){const We=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,an=Math.min(se.instanceCount,We);ot.renderInstances(xt,Wt,an)}else ot.render(xt,Wt)};function bt(A,j,se){A.transparent===!0&&A.side===la&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,Qt(A,j,se),A.side=Wa,A.needsUpdate=!0,Qt(A,j,se),A.side=la):Qt(A,j,se)}this.compile=function(A,j,se=null){se===null&&(se=A),_=vt.get(se),_.init(j),L.push(_),se.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),A!==se&&A.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const oe=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const xe=q.material;if(xe)if(Array.isArray(xe))for(let Ue=0;Ue<xe.length;Ue++){const Be=xe[Ue];bt(Be,se,q),oe.add(Be)}else bt(xe,se,q),oe.add(xe)}),L.pop(),_=null,oe},this.compileAsync=function(A,j,se=null){const oe=this.compile(A,j,se);return new Promise(q=>{function xe(){if(oe.forEach(function(Ue){Xe.get(Ue).currentProgram.isReady()&&oe.delete(Ue)}),oe.size===0){q(A);return}setTimeout(xe,10)}Fe.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Sn=null;function di(A){Sn&&Sn(A)}function Pr(){bi.stop()}function Ir(){bi.start()}const bi=new Z_;bi.setAnimationLoop(di),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){Sn=A,ce.setAnimationLoop(A),A===null?bi.stop():bi.start()},ce.addEventListener("sessionstart",Pr),ce.addEventListener("sessionend",Ir),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(j),j=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,j,k),_=vt.get(A,L.length),_.init(j),L.push(_),He.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Z.setFromProjectionMatrix(He),be=this.localClippingEnabled,ue=Ae.init(this.clippingPlanes,be),y=Ge.get(A,B.length),y.init(),B.push(y),ce.enabled===!0&&ce.isPresenting===!0){const xe=D.xr.getDepthSensingMesh();xe!==null&&qa(xe,j,-1/0,D.sortObjects)}qa(A,j,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(Me,Te),ht=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ht&&Ke.addToRenderList(y,A),this.info.render.frame++,ue===!0&&Ae.beginShadows();const se=_.state.shadowsArray;Ve.render(se,A,j),ue===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=y.opaque,q=y.transmissive;if(_.setupLights(),j.isArrayCamera){const xe=j.cameras;if(q.length>0)for(let Ue=0,Be=xe.length;Ue<Be;Ue++){const Pe=xe[Ue];Br(oe,q,A,Pe)}ht&&Ke.render(A);for(let Ue=0,Be=xe.length;Ue<Be;Ue++){const Pe=xe[Ue];ws(y,A,Pe,Pe.viewport)}}else q.length>0&&Br(oe,q,A,j),ht&&Ke.render(A),ws(y,A,j);k!==null&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(D,A,j),Pt.resetDefaultState(),C=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],ue===!0&&Ae.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function qa(A,j,se,oe){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){oe&&at.setFromMatrixPosition(A.matrixWorld).applyMatrix4(He);const Ue=ge.update(A),Be=A.material;Be.visible&&y.push(A,Ue,Be,se,at.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Ue=ge.update(A),Be=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),at.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),at.copy(Ue.boundingSphere.center)),at.applyMatrix4(A.matrixWorld).applyMatrix4(He)),Array.isArray(Be)){const Pe=Ue.groups;for(let $e=0,it=Pe.length;$e<it;$e++){const Qe=Pe[$e],xt=Be[Qe.materialIndex];xt&&xt.visible&&y.push(A,Ue,xt,se,at.z,Qe)}}else Be.visible&&y.push(A,Ue,Be,se,at.z,null)}}const xe=A.children;for(let Ue=0,Be=xe.length;Ue<Be;Ue++)qa(xe[Ue],j,se,oe)}function ws(A,j,se,oe){const q=A.opaque,xe=A.transmissive,Ue=A.transparent;_.setupLightsView(se),ue===!0&&Ae.setGlobalState(D.clippingPlanes,se),oe&&Oe.viewport(H.copy(oe)),q.length>0&&Ya(q,j,se),xe.length>0&&Ya(xe,j,se),Ue.length>0&&Ya(Ue,j,se),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Br(A,j,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[oe.id]===void 0&&(_.state.transmissionRenderTarget[oe.id]=new Rs(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Bo:ha,minFilter:bs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const xe=_.state.transmissionRenderTarget[oe.id],Ue=oe.viewport||H;xe.setSize(Ue.z,Ue.w);const Be=D.getRenderTarget();D.setRenderTarget(xe),D.getClearColor(fe),de=D.getClearAlpha(),de<1&&D.setClearColor(16777215,.5),D.clear(),ht&&Ke.render(se);const Pe=D.toneMapping;D.toneMapping=Xa;const $e=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),_.setupLightsView(oe),ue===!0&&Ae.setGlobalState(D.clippingPlanes,oe),Ya(A,se,oe),U.updateMultisampleRenderTarget(xe),U.updateRenderTargetMipmap(xe),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Qe=0,xt=j.length;Qe<xt;Qe++){const wt=j[Qe],Wt=wt.object,Vt=wt.geometry,ot=wt.material,We=wt.group;if(ot.side===la&&Wt.layers.test(oe.layers)){const an=ot.side;ot.side=Wn,ot.needsUpdate=!0,pi(Wt,se,oe,Vt,ot,We),ot.side=an,ot.needsUpdate=!0,it=!0}}it===!0&&(U.updateMultisampleRenderTarget(xe),U.updateRenderTargetMipmap(xe))}D.setRenderTarget(Be),D.setClearColor(fe,de),$e!==void 0&&(oe.viewport=$e),D.toneMapping=Pe}function Ya(A,j,se){const oe=j.isScene===!0?j.overrideMaterial:null;for(let q=0,xe=A.length;q<xe;q++){const Ue=A[q],Be=Ue.object,Pe=Ue.geometry,$e=oe===null?Ue.material:oe,it=Ue.group;Be.layers.test(se.layers)&&pi(Be,j,se,Pe,$e,it)}}function pi(A,j,se,oe,q,xe){A.onBeforeRender(D,j,se,oe,q,xe),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(D,j,se,oe,A,xe),q.transparent===!0&&q.side===la&&q.forceSinglePass===!1?(q.side=Wn,q.needsUpdate=!0,D.renderBufferDirect(se,j,oe,q,A,xe),q.side=Wa,q.needsUpdate=!0,D.renderBufferDirect(se,j,oe,q,A,xe),q.side=la):D.renderBufferDirect(se,j,oe,q,A,xe),A.onAfterRender(D,j,se,oe,q,xe)}function Qt(A,j,se){j.isScene!==!0&&(j=Rt);const oe=Xe.get(A),q=_.state.lights,xe=_.state.shadowsArray,Ue=q.state.version,Be=qe.getParameters(A,q.state,xe,j,se),Pe=qe.getProgramCacheKey(Be);let $e=oe.programs;oe.environment=A.isMeshStandardMaterial?j.environment:null,oe.fog=j.fog,oe.envMap=(A.isMeshStandardMaterial?te:T).get(A.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",nt),$e=new Map,oe.programs=$e);let it=$e.get(Pe);if(it!==void 0){if(oe.currentProgram===it&&oe.lightsStateVersion===Ue)return Pi(A,Be),it}else Be.uniforms=qe.getUniforms(A),A.onBeforeCompile(Be,D),it=qe.acquireProgram(Be,Pe),$e.set(Pe,it),oe.uniforms=Be.uniforms;const Qe=oe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=Ae.uniform),Pi(A,Be),oe.needsLights=zc(A),oe.lightsStateVersion=Ue,oe.needsLights&&(Qe.ambientLightColor.value=q.state.ambient,Qe.lightProbe.value=q.state.probe,Qe.directionalLights.value=q.state.directional,Qe.directionalLightShadows.value=q.state.directionalShadow,Qe.spotLights.value=q.state.spot,Qe.spotLightShadows.value=q.state.spotShadow,Qe.rectAreaLights.value=q.state.rectArea,Qe.ltc_1.value=q.state.rectAreaLTC1,Qe.ltc_2.value=q.state.rectAreaLTC2,Qe.pointLights.value=q.state.point,Qe.pointLightShadows.value=q.state.pointShadow,Qe.hemisphereLights.value=q.state.hemi,Qe.directionalShadowMap.value=q.state.directionalShadowMap,Qe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Qe.spotShadowMap.value=q.state.spotShadowMap,Qe.spotLightMatrix.value=q.state.spotLightMatrix,Qe.spotLightMap.value=q.state.spotLightMap,Qe.pointShadowMap.value=q.state.pointShadowMap,Qe.pointShadowMatrix.value=q.state.pointShadowMatrix),oe.currentProgram=it,oe.uniformsList=null,it}function yn(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Ac.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Pi(A,j){const se=Xe.get(A);se.outputColorSpace=j.outputColorSpace,se.batching=j.batching,se.batchingColor=j.batchingColor,se.instancing=j.instancing,se.instancingColor=j.instancingColor,se.instancingMorph=j.instancingMorph,se.skinning=j.skinning,se.morphTargets=j.morphTargets,se.morphNormals=j.morphNormals,se.morphColors=j.morphColors,se.morphTargetsCount=j.morphTargetsCount,se.numClippingPlanes=j.numClippingPlanes,se.numIntersection=j.numClipIntersection,se.vertexAlphas=j.vertexAlphas,se.vertexTangents=j.vertexTangents,se.toneMapping=j.toneMapping}function Fr(A,j,se,oe,q){j.isScene!==!0&&(j=Rt),U.resetTextureUnits();const xe=j.fog,Ue=oe.isMeshStandardMaterial?j.environment:null,Be=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Lr,Pe=(oe.isMeshStandardMaterial?te:T).get(oe.envMap||Ue),$e=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,it=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Qe=!!se.morphAttributes.position,xt=!!se.morphAttributes.normal,wt=!!se.morphAttributes.color;let Wt=Xa;oe.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Wt=D.toneMapping);const Vt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ot=Vt!==void 0?Vt.length:0,We=Xe.get(oe),an=_.state.lights;if(ue===!0&&(be===!0||A!==R)){const hn=A===R&&oe.id===C;Ae.setState(oe,A,hn)}let Ct=!1;oe.version===We.__version?(We.needsLights&&We.lightsStateVersion!==an.state.version||We.outputColorSpace!==Be||q.isBatchedMesh&&We.batching===!1||!q.isBatchedMesh&&We.batching===!0||q.isBatchedMesh&&We.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&We.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&We.instancing===!1||!q.isInstancedMesh&&We.instancing===!0||q.isSkinnedMesh&&We.skinning===!1||!q.isSkinnedMesh&&We.skinning===!0||q.isInstancedMesh&&We.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&We.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&We.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&We.instancingMorph===!1&&q.morphTexture!==null||We.envMap!==Pe||oe.fog===!0&&We.fog!==xe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ae.numPlanes||We.numIntersection!==Ae.numIntersection)||We.vertexAlphas!==$e||We.vertexTangents!==it||We.morphTargets!==Qe||We.morphNormals!==xt||We.morphColors!==wt||We.toneMapping!==Wt||We.morphTargetsCount!==ot)&&(Ct=!0):(Ct=!0,We.__version=oe.version);let Nn=We.currentProgram;Ct===!0&&(Nn=Qt(oe,j,q));let Ii=!1,gn=!1,Ka=!1;const mt=Nn.getUniforms(),Rn=We.uniforms;if(Oe.useProgram(Nn.program)&&(Ii=!0,gn=!0,Ka=!0),oe.id!==C&&(C=oe.id,gn=!0),Ii||R!==A){Oe.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),Ay(ye),Ry(ye),mt.setValue(G,"projectionMatrix",ye)):mt.setValue(G,"projectionMatrix",A.projectionMatrix),mt.setValue(G,"viewMatrix",A.matrixWorldInverse);const en=mt.map.cameraPosition;en!==void 0&&en.setValue(G,Ie.setFromMatrixPosition(A.matrixWorld)),Ze.logarithmicDepthBuffer&&mt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&mt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,gn=!0,Ka=!0)}if(q.isSkinnedMesh){mt.setOptional(G,q,"bindMatrix"),mt.setOptional(G,q,"bindMatrixInverse");const hn=q.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),mt.setValue(G,"boneTexture",hn.boneTexture,U))}q.isBatchedMesh&&(mt.setOptional(G,q,"batchingTexture"),mt.setValue(G,"batchingTexture",q._matricesTexture,U),mt.setOptional(G,q,"batchingIdTexture"),mt.setValue(G,"batchingIdTexture",q._indirectTexture,U),mt.setOptional(G,q,"batchingColorTexture"),q._colorsTexture!==null&&mt.setValue(G,"batchingColorTexture",q._colorsTexture,U));const On=se.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ye.update(q,se,Nn),(gn||We.receiveShadow!==q.receiveShadow)&&(We.receiveShadow=q.receiveShadow,mt.setValue(G,"receiveShadow",q.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Rn.envMap.value=Pe,Rn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&j.environment!==null&&(Rn.envMapIntensity.value=j.environmentIntensity),gn&&(mt.setValue(G,"toneMappingExposure",D.toneMappingExposure),We.needsLights&&Oc(Rn,Ka),xe&&oe.fog===!0&&Ce.refreshFogUniforms(Rn,xe),Ce.refreshMaterialUniforms(Rn,oe,K,Q,_.state.transmissionRenderTarget[A.id]),Ac.upload(G,yn(We),Rn,U)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Ac.upload(G,yn(We),Rn,U),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&mt.setValue(G,"center",q.center),mt.setValue(G,"modelViewMatrix",q.modelViewMatrix),mt.setValue(G,"normalMatrix",q.normalMatrix),mt.setValue(G,"modelMatrix",q.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const hn=oe.uniformsGroups;for(let en=0,Cs=hn.length;en<Cs;en++){const Ai=hn[en];W.update(Ai,Nn),W.bind(Ai,Nn)}}return Nn}function Oc(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function zc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,j,se){Xe.get(A.texture).__webglTexture=j,Xe.get(A.depthTexture).__webglTexture=se;const oe=Xe.get(A);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const se=Xe.get(A);se.__webglFramebuffer=j,se.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,se=0){k=A,F=j,z=se;let oe=!0,q=null,xe=!1,Ue=!1;if(A){const Pe=Xe.get(A);if(Pe.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(G.FRAMEBUFFER,null),oe=!1;else if(Pe.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(Pe.__hasExternalTextures)U.rebindTextures(A,Xe.get(A.texture).__webglTexture,Xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(Pe.__boundDepthTexture!==Qe){if(Qe!==null&&Xe.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const it=Xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[j])?q=it[j][se]:q=it[j],xe=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?q=Xe.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?q=it[se]:q=it,H.copy(A.viewport),re.copy(A.scissor),ae=A.scissorTest}else H.copy(N).multiplyScalar(K).floor(),re.copy(ne).multiplyScalar(K).floor(),ae=Se;if(Oe.bindFramebuffer(G.FRAMEBUFFER,q)&&oe&&Oe.drawBuffers(A,q),Oe.viewport(H),Oe.scissor(re),Oe.setScissorTest(ae),xe){const Pe=Xe.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pe.__webglTexture,se)}else if(Ue){const Pe=Xe.get(A.texture),$e=j||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pe.__webglTexture,se||0,$e)}C=-1},this.readRenderTargetPixels=function(A,j,se,oe,q,xe,Ue){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){Oe.bindFramebuffer(G.FRAMEBUFFER,Be);try{const Pe=A.texture,$e=Pe.format,it=Pe.type;if(!Ze.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-oe&&se>=0&&se<=A.height-q&&G.readPixels(j,se,oe,q,rt.convert($e),rt.convert(it),xe)}finally{const Pe=k!==null?Xe.get(k).__webglFramebuffer:null;Oe.bindFramebuffer(G.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,j,se,oe,q,xe,Ue){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){const Pe=A.texture,$e=Pe.format,it=Pe.type;if(!Ze.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-oe&&se>=0&&se<=A.height-q){Oe.bindFramebuffer(G.FRAMEBUFFER,Be);const Qe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Qe),G.bufferData(G.PIXEL_PACK_BUFFER,xe.byteLength,G.STREAM_READ),G.readPixels(j,se,oe,q,rt.convert($e),rt.convert(it),0);const xt=k!==null?Xe.get(k).__webglFramebuffer:null;Oe.bindFramebuffer(G.FRAMEBUFFER,xt);const wt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await by(G,wt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Qe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,xe),G.deleteBuffer(Qe),G.deleteSync(wt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,se=0){A.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const oe=Math.pow(2,-se),q=Math.floor(A.image.width*oe),xe=Math.floor(A.image.height*oe),Ue=j!==null?j.x:0,Be=j!==null?j.y:0;U.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Ue,Be,q,xe),Oe.unbindTexture()};const ko=G.createFramebuffer(),Za=G.createFramebuffer();this.copyTextureToTexture=function(A,j,se=null,oe=null,q=0,xe=null){A.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,A=arguments[1],j=arguments[2],xe=arguments[3]||0,se=null),xe===null&&(q!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=q,q=0):xe=0);let Ue,Be,Pe,$e,it,Qe,xt,wt,Wt;const Vt=A.isCompressedTexture?A.mipmaps[xe]:A.image;if(se!==null)Ue=se.max.x-se.min.x,Be=se.max.y-se.min.y,Pe=se.isBox3?se.max.z-se.min.z:1,$e=se.min.x,it=se.min.y,Qe=se.isBox3?se.min.z:0;else{const On=Math.pow(2,-q);Ue=Math.floor(Vt.width*On),Be=Math.floor(Vt.height*On),A.isDataArrayTexture?Pe=Vt.depth:A.isData3DTexture?Pe=Math.floor(Vt.depth*On):Pe=1,$e=0,it=0,Qe=0}oe!==null?(xt=oe.x,wt=oe.y,Wt=oe.z):(xt=0,wt=0,Wt=0);const ot=rt.convert(j.format),We=rt.convert(j.type);let an;j.isData3DTexture?(U.setTexture3D(j,0),an=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(U.setTexture2DArray(j,0),an=G.TEXTURE_2D_ARRAY):(U.setTexture2D(j,0),an=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const Ct=G.getParameter(G.UNPACK_ROW_LENGTH),Nn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ii=G.getParameter(G.UNPACK_SKIP_PIXELS),gn=G.getParameter(G.UNPACK_SKIP_ROWS),Ka=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Vt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Vt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,$e),G.pixelStorei(G.UNPACK_SKIP_ROWS,it),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Qe);const mt=A.isDataArrayTexture||A.isData3DTexture,Rn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const On=Xe.get(A),hn=Xe.get(j),en=Xe.get(On.__renderTarget),Cs=Xe.get(hn.__renderTarget);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,en.__webglFramebuffer),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Cs.__webglFramebuffer);for(let Ai=0;Ai<Pe;Ai++)mt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.get(A).__webglTexture,q,Qe+Ai),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.get(j).__webglTexture,xe,Wt+Ai)),G.blitFramebuffer($e,it,Ue,Be,xt,wt,Ue,Be,G.DEPTH_BUFFER_BIT,G.NEAREST);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Xe.has(A)){const On=Xe.get(A),hn=Xe.get(j);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,ko),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Za);for(let en=0;en<Pe;en++)mt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,On.__webglTexture,q,Qe+en):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,On.__webglTexture,q),Rn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hn.__webglTexture,xe,Wt+en):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hn.__webglTexture,xe),q!==0?G.blitFramebuffer($e,it,Ue,Be,xt,wt,Ue,Be,G.COLOR_BUFFER_BIT,G.NEAREST):Rn?G.copyTexSubImage3D(an,xe,xt,wt,Wt+en,$e,it,Ue,Be):G.copyTexSubImage2D(an,xe,xt,wt,$e,it,Ue,Be);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(an,xe,xt,wt,Wt,Ue,Be,Pe,ot,We,Vt.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(an,xe,xt,wt,Wt,Ue,Be,Pe,ot,Vt.data):G.texSubImage3D(an,xe,xt,wt,Wt,Ue,Be,Pe,ot,We,Vt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,xe,xt,wt,Ue,Be,ot,We,Vt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,xe,xt,wt,Vt.width,Vt.height,ot,Vt.data):G.texSubImage2D(G.TEXTURE_2D,xe,xt,wt,Ue,Be,ot,We,Vt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ct),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Nn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ii),G.pixelStorei(G.UNPACK_SKIP_ROWS,gn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ka),xe===0&&j.generateMipmaps&&G.generateMipmap(an),Oe.unbindTexture()},this.copyTextureToTexture3D=function(A,j,se=null,oe=null,q=0){return A.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,oe=arguments[1]||null,A=arguments[2],j=arguments[3],q=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,se,oe,q)},this.initRenderTarget=function(A){Xe.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),Oe.unbindTexture()},this.resetState=function(){F=0,z=0,k=null,Oe.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Lt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Lt._getUnpackColorSpace()}}function Wb(){const o=xn.useRef(null);return xn.useEffect(()=>{const t=o.current,i=new Qy,s=new ii(42,1,.1,100);s.position.set(0,1.12,6.15);const l=new Xb({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.outputColorSpace=ni,t.appendChild(l.domElement);const u=new W0(6616319,5,18);u.position.set(-3,4,4),i.add(u);const h=new W0(16735143,3.2,14);h.position.set(3.5,2.5,2),i.add(h);const d=new aM(15267583,1.55);d.position.set(0,2.2,4.5),i.add(d),i.add(new sM(7770280,1.5));const m=new yi;i.add(m);const p=new oa({color:14542832,metalness:.72,roughness:.24}),g=new oa({color:791840,metalness:.62,roughness:.2}),x=new oa({color:3663359,emissive:950161,emissiveIntensity:.75,metalness:.15,roughness:.15}),S=new oa({color:16732057,emissive:9312071,emissiveIntensity:.7,metalness:.2,roughness:.18}),M=new G0({color:12187647,transmission:.52,opacity:.6,transparent:!0,roughness:.04,metalness:.05}),b=new oa({color:13886189,metalness:.86,roughness:.16}),w=new oa({color:461584,metalness:.25,roughness:.38}),y=new oa({color:463901,emissive:741992,emissiveIntensity:.28,metalness:.2,roughness:.12}),_=new oa({color:13836860,metalness:.42,roughness:.2}),B=new G0({color:7723519,transmission:.32,transparent:!0,opacity:.82,metalness:.08,roughness:.04}),L=new yi;L.scale.setScalar(1.16),L.position.y=.12,m.add(L);const D=new ut(new In(4.2,.16,1.15),w);D.position.set(0,-1.12,.22),D.rotation.x=-.03,L.add(D);const X=new ut(new An(1.05,1.32,.42,64),w);X.position.y=-.92,L.add(X);const F=new ut(new An(.78,.92,1.65,48),b);F.position.y=.02,L.add(F);const z=new ut(new In(.72,.48,.045),y);z.position.set(0,.22,.79),L.add(z);const k=new ut(new In(.52,.08,.055),x);k.position.set(0,.34,.82),L.add(k);const C=new ut(new An(.18,.24,.28,32),g);C.position.y=1,L.add(C);const R=new ut(new In(1.08,.62,.82),b);R.position.y=1.42,L.add(R);const H=new ut(new In(.86,.28,.055),y);H.position.set(0,1.45,.44),L.add(H);const re=new ut(new In(.24,.08,.065),x);re.position.set(-.23,1.48,.48);const ae=new ut(new In(.24,.08,.065),x);ae.position.set(.23,1.48,.48),L.add(re,ae);const fe=new ut(new An(.09,.09,.045,32),S);fe.rotation.x=Math.PI/2,fe.position.set(0,1.31,.48),L.add(fe);const de=new ut(new An(.12,.14,.18,32),g);de.position.set(0,1.85,0);const O=new ut(new Ms(.08,24,24),x);O.position.set(0,1.98,0),L.add(de,O);const Q=new ut(new An(.07,.07,1.85,24),g);Q.rotation.z=Math.PI/2,Q.position.set(0,.76,.02),L.add(Q);const K=Z(-1),Me=Z(1);L.add(K,Me);const Te=ue(_,x);Te.position.set(-1.45,-.62,.3),Te.rotation.z=-.04,L.add(Te);const N=be();N.position.set(1.42,-.58,.3),N.rotation.z=.05,L.add(N);const ne=ye();ne.position.set(.05,-.58,.52),L.add(ne);function Se(Ne,Fe,Ze){const Oe=new ut(new An(Fe,Fe*1.08,Ne,24),Ze);return Oe.rotation.x=Math.PI/2,Oe}function Z(Ne){const Fe=new yi,Ze=new ut(new Ms(.17,24,24),g);Ze.position.set(Ne*.96,.74,.06);const Oe=Se(.86,.075,b);Oe.rotation.z=Ne*.46,Oe.position.set(Ne*1.18,.36,.18);const pt=new ut(new Ms(.14,24,24),x);pt.position.set(Ne*1.37,-.02,.32);const Xe=Se(.78,.065,b);Xe.rotation.z=Ne*-.72,Xe.position.set(Ne*1.43,-.42,.44);const U=new ut(new Ms(.1,24,24),g);U.position.set(Ne*1.63,-.76,.5);const T=new ut(new In(.05,.28,.05),x);T.rotation.z=Ne*.28,T.position.set(Ne*1.55,-.9,.55);const te=new ut(new In(.05,.28,.05),x);return te.rotation.z=Ne*-.28,te.position.set(Ne*1.72,-.9,.55),Fe.add(Ze,Oe,pt,Xe,U,T,te),Fe}function ue(Ne,Fe){const Ze=new yi,Oe=new ut(new An(.18,.18,.58,32),Ne),pt=new ut(new An(.18,.18,.025,32),p);pt.position.y=.3;const Xe=new ut(new In(.28,.13,.025),Fe);return Xe.position.set(0,.02,.18),Ze.add(Oe,pt,Xe),Ze}function be(){const Ne=new yi,Fe=new ut(new An(.17,.2,.72,32),B),Ze=new ut(new An(.07,.09,.24,24),B);Ze.position.y=.48;const Oe=new ut(new An(.08,.08,.07,24),x);return Oe.position.y=.64,Ne.add(Fe,Ze,Oe),Ne}function ye(){const Ne=new yi,Fe=new ut(new Dc(.34,.58,4,1,!0),M);Fe.rotation.y=Math.PI/4;const Ze=new ut(new An(.03,.03,.44,18),b);Ze.position.y=-.5;const Oe=new ut(new An(.2,.2,.035,24),b);Oe.position.y=-.74;const pt=new ut(new Dc(.24,.18,4),S);return pt.rotation.y=Math.PI/4,pt.position.y=-.08,Ne.add(Fe,Ze,Oe,pt),Ne}const He=[];for(let Ne=0;Ne<3;Ne+=1){const Fe=new ut(new Td(1.85+Ne*.42,.008,12,120),new Md({color:Ne%2?16735143:3663359,transparent:!0,opacity:.55}));Fe.rotation.x=Math.PI/2+Ne*.2,Fe.position.y=-.6+Ne*.4,m.add(Fe),He.push(Fe)}const Ie=new yi,at=new Ms(.035,12,12);for(let Ne=0;Ne<34;Ne+=1){const Fe=new ut(at,Ne%2?x:S),Ze=Ne/34*Math.PI*2,Oe=2.6+Math.sin(Ne)*.25;Fe.position.set(Math.cos(Ze)*Oe,Math.sin(Ne*1.7)*1.15+.25,Math.sin(Ze)*Oe),Ie.add(Fe)}i.add(Ie);const Rt=()=>{const{width:Ne,height:Fe}=t.getBoundingClientRect();l.setSize(Ne,Fe,!1),s.aspect=Ne/Fe,s.updateProjectionMatrix()};let ht;const Xt=new oM,G=()=>{const Ne=Xt.getElapsedTime();m.rotation.y=Math.sin(Ne*.42)*.28,m.position.y=Math.sin(Ne*.9)*.07,K.rotation.z=Math.sin(Ne*1.15)*.08,Me.rotation.z=Math.cos(Ne*1.05)*.08,O.scale.setScalar(1+Math.sin(Ne*3.2)*.14),ne.rotation.y=Ne*.45,Te.position.y=-.62+Math.sin(Ne*1.2)*.025,N.position.y=-.58+Math.cos(Ne*1.1)*.025,He.forEach((Fe,Ze)=>{Fe.rotation.z=Ne*(.24+Ze*.1),Fe.material.opacity=.35+Math.sin(Ne*1.4+Ze)*.12}),Ie.rotation.y=Ne*.08,l.render(i,s),ht=requestAnimationFrame(G)};return Rt(),G(),window.addEventListener("resize",Rt),()=>{window.removeEventListener("resize",Rt),cancelAnimationFrame(ht),t.removeChild(l.domElement),l.dispose(),i.traverse(Ne=>{Ne.geometry&&Ne.geometry.dispose(),Ne.material&&(Array.isArray(Ne.material)?Ne.material.forEach(Fe=>Fe.dispose()):Ne.material.dispose())})}},[]),I.jsx("div",{className:"three-mount",ref:o})}const jb={voice:wS,stt:xS,intent:S_,tts:NS,gesture:TS,drink:MS,ros2:SS,memory:yS,state:OS},qb=[{code:"de",label:"Deutsch",short:"DE"},{code:"en",label:"English",short:"EN"}],Yb={de:{nav:{workflow:"Ablauf",modules:"Module",architecture:"Architektur",team:"Team",language:"Sprache"},scenes:["Start","Demo","Überblick","Ablauf","Module","Showcase","Live","Projekt","Architektur","Tech","Highlights","Team"],scrollHint:{scene:"Szene",inside:"weiter in dieser Szene",next:"nächste Szene"},hero:{eyebrow:"Robotik trifft Gastfreundschaft",title:"Barkeeper Robot",text:"Ein interaktiver Voice- und Zeige-Demonstrator: Der Roboter erkennt Gäste, versteht Cola oder Wasser, antwortet per Sprache und löst über ROS2 die passende Zeigegeste aus.",primary:"Ablauf ansehen",secondary:"Module ansehen",visualLabel:"Interaktive 3D-Szene des Roboter-Barkeepers",badges:["Live Voice Demo","Cola / Wasser","ROS2 Events"],status:[["Voice State","LISTENING"],["DoA","0° ± 35°"],["Output","/order_event"]]},overview:{kicker:"Projektüberblick",title:"Ein realer Voice- und Zeige-Demonstrator für den Barkeeper-Roboter.",text:"Der aktuelle Projektfokus ist klar definiert: Getränk erkennen, sprachlich reagieren und die passende Zeigegeste auslösen. Das System unterstützt Cola und Wasser, ermöglicht Small Talk, nutzt lokale Gästespeicherung und kommuniziert über ROS2 mit Kamera, Emotionen, Robot-Status und Motion-Logik.",metrics:[["2","unterstützte Getränke"],["13","Unit Tests bestanden"],["ROS2","Topics & Events"]]},workflow:{kicker:"Vollständiger Ablauf",title:"Vom ersten Kontakt bis zur intelligenten Roboterantwort.",steps:[["Kamera erkennt Gast","Ein Camera-Event mit person_detected, person_id, Name und known_guest startet den Dialog."],["Begrüßung & Memory","Bekannte Gäste werden persönlich begrüßt, neue Gäste werden lokal in guest_memory.json angelegt."],["DoA prüft Richtung","Der ReSpeaker-Winkel muss stabil im erlaubten Bereich 0° ± 35° liegen."],["LiveMic nimmt Sprache auf","Das Mikrofon kalibriert Geräuschpegel, wartet auf Sprache und speichert temp.wav."],["STT + LLM verstehen","Whisper-3-Large transkribiert Deutsch, chat-medium erkennt Small Talk oder Cola/Wasser."],["ROS2 löst Aktion aus","Bei Cola/Wasser publiziert die Voice Node ein order_event und der Roboter zeigt auf das Getränk."]]},modules:{kicker:"Systemmodule",title:"Unabhängige Bausteine, koordiniert zu einem Robotik-Erlebnis.",items:[["voice","VoiceNode","Steuert Zustände wie GREETING, LISTENING, PROCESSING, WAITING_ROBOT und READY."],["stt","STTModule","Nutzt whisper-3-large, deutsche Sprache und Filter gegen STT-Halluzinationen."],["intent","LLMModule","Nutzt chat-medium und gibt gültiges JSON mit intent, item, reply und state zurück."],["tts","TTSModule","Erzeugt Roboterantworten mit xtts-v2 und spielt response.wav lokal ab."],["gesture","DoA / ReSpeaker","Akzeptiert Sprache nur aus stabiler Richtung im Zielbereich 0° ± 35°."],["drink","Getränkelogik","Normalisiert cola, wasser und water; andere Getränke führen zu einer Klärung."],["ros2","VoiceRosNode","Publiziert /emotion und /order_event, hört /camera_event und /robot_status."],["memory","GuestMemory","Speichert Namen, known_guest, Gespräche, Lieblingsgetränke und last_seen in JSON."],["state","Camera Server","Streamt DepthAI-Kameraframes über TCP auf Port 9999 an Clients."]]},showcase:{kicker:"Interaktives Showcase",title:"Geschichtete Roboterintelligenz mit Echtzeit-Tiefe.",text:"Die Website zeigt das System wie ein Live-Dashboard: Kamera erkennt einen Gast, DoA validiert die Richtung, STT und LLM verstehen den Wunsch, TTS spricht die Antwort und ROS2 gibt die Zeigeaktion an den Roboter weiter.",cards:["Person erkannt: guest_7","Intent: order / item: cola","Status: WAITING_ROBOT"],label:"3D-inspiriertes Systemdashboard"},architecture:{kicker:"Technischer Ablauf",title:"Eine klare Architektur für den gesamten internen Prozess.",nodes:[["/camera_event","Startet den Dialog mit person_detected, person_id, name und known_guest."],["/emotion","Veröffentlicht happy, listening, thinking, talking, confused, error oder neutral."],["/order_event","Sendet order_completed mit item cola oder wasser an das Robotersystem."],["/robot_status","Verarbeitet preparing, ready, unavailable und error als Rückmeldung."],["DialogueStatus","Im Zielsystem wird PREPARING + item als kompatibles Übergabesignal genutzt."],["Motion DRINK","Der Barkeeper-Tree löst die item-spezifische Zeigegeste aus."]]},tech:{kicker:"Technologien",title:"Aufgebaut mit modernen Robotik- und KI-Bausteinen.",items:["Python","ROS2 Jazzy","DepthAI","PyAudio","Whisper-3-Large","chat-medium","XTTS-v2","JSON Memory","Docker Compose","Ruff","Pytest"]},highlights:{kicker:"Projekt-Highlights",title:"Was den Roboter intelligent, modular und lebendig wirken lässt.",items:[["Persönliche Begrüßung","Bekannte Gäste wie Yaser werden mit Namen begrüßt und über last_seen wiedererkannt."],["Robuste Spracheingabe","LiveMic kalibriert Hintergrundgeräusche und STT filtert typische Halluzinationen."],["Kompatible Robotik","Die bestehende PREPARING-Schnittstelle bleibt erhalten, obwohl aktuell eine Zeigegeste im Fokus steht."]]},team:{kicker:"Team",title:"Bereich für die Projektmitglieder.",placeholder:"Platzhalter für Teammitglied",roles:["Robotik","KI-Logik","Voice UX","Integration"]},footer:{text:"Premium-Robotik-Showcase für einen KI-Barkeeper-Demonstrator.",contact:"Kontakt"},live:{kicker:"Live-System",title:"So fühlt sich der aktuelle Prototyp im Betrieb an.",cards:[["Voice State","IDLE → GREETING → LISTENING → PROCESSING → WAITING_ROBOT"],["Unterstützte Getränke","Cola und Wasser; water wird automatisch zu wasser normalisiert."],["Testbefehle","camera, robot, doa, doa_live, doa_stop, state, exit"]],terminal:["Befehl: doa → DoA-Winkel: 0",'Befehl: camera → {"person_detected":true,"person_id":"guest_7","name":"Yaser","known_guest":true}',"Roboter: Willkommen zurück, Yaser. Schön dich zu sehen.","Gast: Wo ist die Cola?",'JSON: {"intent":"order","item":"cola","reply":"Hier ist die Cola.","state":"ORDER"}',"ROS2: /order_event → order_completed, item=cola"]},simulator:{kicker:"Dynamische Demo",title:"Teste den Gesprächsfluss direkt auf der Website.",subtitle:"Wähle ein Szenario und sieh, wie sich Voice State, LLM-Intent, Roboterantwort und ROS2-Event verändern.",options:[{id:"cola",label:"Cola",guest:"Wo ist die Cola?",state:"WAITING_ROBOT",intent:"order",item:"cola",reply:"Hier ist die Cola.",emotion:"talking",event:"/order_event: order_completed, item=cola",insight:["Drink erkannt","item=cola","Zeigegeste vorbereitet"]},{id:"wasser",label:"Wasser",guest:"Zeig mir bitte das Wasser.",state:"WAITING_ROBOT",intent:"order",item:"wasser",reply:"Hier ist das Wasser.",emotion:"talking",event:"/order_event: order_completed, item=wasser",insight:["Drink erkannt","item=wasser","Antwort kurz und direkt"]},{id:"smalltalk",label:"Small Talk",guest:"Kennst du mich noch und was würdest du mir empfehlen?",state:"CONTEXT_CHAT",intent:"small_talk",item:"favorite_drink: cola",reply:"Willkommen zurück, Yaser. Beim letzten Mal wolltest du Cola sehen. Ich kann dir wieder Cola zeigen oder dir Wasser als leichte Alternative empfehlen.",emotion:"friendly",event:"/memory: known_guest=true → /emotion: happy → dialogue_status=SMALL_TALK",insight:["Gast wiedererkannt","Memory genutzt","Empfehlung formuliert"]}],pipeline:["Kamera","DoA","LiveMic","STT","LLM","TTS","ROS2","Zeigegeste"],labels:{guest:"Gast sagt",reply:"Roboter antwortet",state:"Voice State",intent:"Intent",item:"Item",emotion:"Emotion",event:"Output",insight:"Intelligente Entscheidung"}},realProject:{kicker:"Aus deinem PyCharm-Projekt",title:"Die Website nutzt jetzt die echten Projektmodule statt Platzhalter.",diagramTitle:"Originale Projekt-Diagramme",files:[["voice_module/voice_node.py","Gesprächsablauf, VoiceState, DoA-Check, Cola/Wasser-Logik und order_event."],["voice_module/llm_module.py","Prompt-Regeln, Small Talk, JSON-Ausgabe und chat-medium Integration."],["voice_module/stt_module.py","Whisper-3-Large, deutsche Transkription und Halluzinationsfilter."],["voice_module/tts_module.py","XTTS-v2, response.wav, afplay/ffplay/aplay und Humanisierung der Antworten."],["voice_module/guest_memory.py","JSON-Speicher für Gäste, Gespräche, favorite_drinks, created_at und last_seen."],["camera_server/camera_server.py","DepthAI-Kamera, BGR888p-Frames, TCP-Socket auf Port 9999."]]}},en:{nav:{workflow:"Workflow",modules:"Modules",architecture:"Architecture",team:"Team",language:"Language"},scenes:["Start","Demo","Overview","Flow","Modules","Showcase","Live","Project","Architecture","Tech","Highlights","Team"],scrollHint:{scene:"Scene",inside:"continue inside this scene",next:"next scene"},hero:{eyebrow:"Robotics meets hospitality",title:"Barkeeper Robot",text:"An interactive voice and pointing demonstrator: the robot recognizes guests, understands cola or water, replies by speech, and triggers the matching pointing gesture through ROS2.",primary:"Explore flow",secondary:"View modules",visualLabel:"Interactive 3D robot bartender scene",badges:["Live Voice Demo","Cola / Water","ROS2 Events"],status:[["Voice State","LISTENING"],["DoA","0° ± 35°"],["Output","/order_event"]]},overview:{kicker:"Project overview",title:"A real voice and pointing demonstrator for the robot bartender.",text:"The current project focus is precise: recognize a drink, respond by voice, and trigger the correct pointing gesture. The system supports cola and water, keeps small talk, stores guest context locally, and communicates with camera, emotion, robot status, and motion logic through ROS2.",metrics:[["2","supported drinks"],["13","unit tests passed"],["ROS2","topics & events"]]},workflow:{kicker:"Full workflow",title:"From first approach to intelligent robot response.",steps:[["Camera detects guest","A camera event with person_detected, person_id, name, and known_guest starts the dialogue."],["Greeting & memory","Known guests are greeted personally, new guests are stored in guest_memory.json."],["DoA checks direction","The ReSpeaker angle must be stable in the allowed range of 0° ± 35°."],["LiveMic records speech","The microphone calibrates noise, waits for speech, and stores temp.wav."],["STT + LLM understand","Whisper-3-Large transcribes German; chat-medium detects small talk or cola/water."],["ROS2 triggers action","For cola or water, the voice node publishes an order event and the robot points to the drink."]]},modules:{kicker:"System modules",title:"Independent parts, coordinated as one robotic experience.",items:[["voice","VoiceNode","Controls GREETING, LISTENING, PROCESSING, WAITING_ROBOT, READY, and more."],["stt","STTModule","Uses whisper-3-large, German language hints, and filters hallucinated text."],["intent","LLMModule","Uses chat-medium and returns valid JSON with intent, item, reply, and state."],["tts","TTSModule","Creates robot speech with xtts-v2 and plays response.wav locally."],["gesture","DoA / ReSpeaker","Accepts speech only from a stable direction inside 0° ± 35°."],["drink","Drink logic","Normalizes cola, wasser, and water; unsupported drinks lead to clarification."],["ros2","VoiceRosNode","Publishes /emotion and /order_event, listens to /camera_event and /robot_status."],["memory","GuestMemory","Stores names, known_guest, conversations, favorite_drinks, and last_seen in JSON."],["state","Camera Server","Streams DepthAI camera frames over TCP on port 9999."]]},showcase:{kicker:"Interactive showcase",title:"Layered robot intelligence with real-time depth.",text:"The website now behaves like a live dashboard: camera detects a guest, DoA validates the speaking direction, STT and LLM understand the request, TTS speaks the reply, and ROS2 forwards the pointing action.",cards:["Person detected: guest_7","Intent: order / item: cola","Status: WAITING_ROBOT"],label:"3D style system dashboard"},architecture:{kicker:"Technical flow",title:"Readable architecture for the whole internal process.",nodes:[["/camera_event","Starts dialogue with person_detected, person_id, name, and known_guest."],["/emotion","Publishes happy, listening, thinking, talking, confused, error, or neutral."],["/order_event","Sends order_completed with item cola or wasser to the robot system."],["/robot_status","Handles preparing, ready, unavailable, and error feedback."],["DialogueStatus","The target system uses PREPARING + item as compatible handoff signal."],["Motion DRINK","The barkeeper tree triggers the item-specific pointing gesture."]]},tech:{kicker:"Technologies",title:"Built around modern robotics and AI building blocks.",items:["Python","ROS2 Jazzy","DepthAI","PyAudio","Whisper-3-Large","chat-medium","XTTS-v2","JSON Memory","Docker Compose","Ruff","Pytest"]},highlights:{kicker:"Project highlights",title:"What makes the robot feel intelligent, modular, and alive.",items:[["Personal greeting","Known guests such as Yaser are greeted by name and recognized through last_seen."],["Robust voice input","LiveMic calibrates background noise and STT filters typical hallucinations."],["Compatible robotics","The existing PREPARING interface remains even though the current focus is pointing."]]},team:{kicker:"Team",title:"Contributor space for the project team.",placeholder:"Team member placeholder",roles:["Robotics","AI Logic","Voice UX","Integration"]},footer:{text:"Premium robotics showcase for an AI bartender demonstrator.",contact:"Contact"},live:{kicker:"Live system",title:"How the current prototype feels in operation.",cards:[["Voice State","IDLE → GREETING → LISTENING → PROCESSING → WAITING_ROBOT"],["Supported drinks","Cola and water; water is normalized to wasser."],["Test commands","camera, robot, doa, doa_live, doa_stop, state, exit"]],terminal:["Command: doa → DoA angle: 0",'Command: camera → {"person_detected":true,"person_id":"guest_7","name":"Yaser","known_guest":true}',"Robot: Welcome back, Yaser. Nice to see you.","Guest: Where is the cola?",'JSON: {"intent":"order","item":"cola","reply":"Here is the cola.","state":"ORDER"}',"ROS2: /order_event → order_completed, item=cola"]},simulator:{kicker:"Dynamic demo",title:"Test the dialogue flow directly on the website.",subtitle:"Choose a scenario and watch Voice State, LLM intent, robot reply, and ROS2 event change.",options:[{id:"cola",label:"Cola",guest:"Where is the cola?",state:"WAITING_ROBOT",intent:"order",item:"cola",reply:"Here is the cola.",emotion:"talking",event:"/order_event: order_completed, item=cola",insight:["Drink detected","item=cola","Pointing gesture prepared"]},{id:"wasser",label:"Water",guest:"Please show me the water.",state:"WAITING_ROBOT",intent:"order",item:"wasser",reply:"Here is the water.",emotion:"talking",event:"/order_event: order_completed, item=wasser",insight:["Drink detected","item=wasser","Short direct reply"]},{id:"smalltalk",label:"Small Talk",guest:"Do you remember me, and what would you recommend?",state:"CONTEXT_CHAT",intent:"small_talk",item:"favorite_drink: cola",reply:"Welcome back, Yaser. Last time you wanted cola. I can show you cola again, or recommend water as a lighter option.",emotion:"friendly",event:"/memory: known_guest=true → /emotion: happy → dialogue_status=SMALL_TALK",insight:["Guest recognized","Memory used","Recommendation formed"]}],pipeline:["Camera","DoA","LiveMic","STT","LLM","TTS","ROS2","Pointing"],labels:{guest:"Guest says",reply:"Robot replies",state:"Voice State",intent:"Intent",item:"Item",emotion:"Emotion",event:"Output",insight:"Intelligent decision"}},realProject:{kicker:"From your PyCharm project",title:"The website now uses your real project modules instead of placeholders.",diagramTitle:"Original project diagrams",files:[["voice_module/voice_node.py","Dialogue flow, VoiceState, DoA check, cola/water logic, and order_event."],["voice_module/llm_module.py","Prompt rules, small talk, JSON output, and chat-medium integration."],["voice_module/stt_module.py","Whisper-3-Large, German transcription, and hallucination filtering."],["voice_module/tts_module.py","XTTS-v2, response.wav, afplay/ffplay/aplay, and response humanization."],["voice_module/guest_memory.py","JSON storage for guests, conversations, favorite_drinks, created_at, and last_seen."],["camera_server/camera_server.py","DepthAI camera, BGR888p frames, TCP socket on port 9999."]]}}};function Zb({activeLanguage:o,onLanguageChange:t,t:i}){return I.jsxs("header",{className:"nav-shell",children:[I.jsxs("a",{className:"brand",href:"#top","aria-label":"Barkeeper Robot home",children:[I.jsx("span",{className:"brand-mark",children:I.jsx(x_,{size:20})}),I.jsx("span",{children:"Barkeeper Robot"})]}),I.jsxs("nav",{children:[I.jsx("a",{href:"#workflow",children:i.nav.workflow}),I.jsx("a",{href:"#modules",children:i.nav.modules}),I.jsx("a",{href:"#architecture",children:i.nav.architecture}),I.jsx("a",{href:"#team",children:i.nav.team})]}),I.jsxs("div",{className:"language-switcher","aria-label":i.nav.language,children:[I.jsx(bS,{size:16}),qb.map(s=>I.jsx("button",{className:s.code===o?"active":"",onClick:()=>t(s.code),type:"button",children:s.short},s.code))]})]})}function Kb(){const[o,t]=xn.useState(0);return xn.useEffect(()=>{const i=()=>{const s=document.documentElement.scrollHeight-window.innerHeight;t(s>0?window.scrollY/s*100:0)};return i(),window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i),()=>{window.removeEventListener("scroll",i),window.removeEventListener("resize",i)}},[]),I.jsx("div",{className:"scroll-progress",style:{transform:`scaleX(${o/100})`}})}function Qb(){return I.jsx("div",{className:"ambient-field","aria-hidden":"true",children:Array.from({length:18},(o,t)=>I.jsx("span",{style:{"--i":t}},t))})}function Jb({labels:o}){const[t,i]=xn.useState(0),s=["top","scene-1","scene-2","workflow","modules","scene-5","scene-6","scene-7","architecture","scene-9","scene-10","team"];return xn.useEffect(()=>{const l=Array.from(document.querySelectorAll(".scroll-scene")),u=new IntersectionObserver(h=>{const d=h.filter(m=>m.isIntersecting).sort((m,p)=>p.intersectionRatio-m.intersectionRatio)[0];if(d){const m=Number(d.target.dataset.sceneIndex||0);i(m),l.forEach(p=>{p.classList.toggle("active-scene",Number(p.dataset.sceneIndex||0)===m)})}},{rootMargin:"-28% 0px -42% 0px",threshold:[.2,.45,.7]});return l.forEach(h=>u.observe(h)),()=>u.disconnect()},[]),I.jsx("div",{className:"scene-progress","aria-label":"Scroll scenes",children:o.map((l,u)=>I.jsxs("a",{"aria-label":l,className:u===t?"active":"",href:`#${s[u]}`,title:l,children:[I.jsx("span",{children:String(u+1).padStart(2,"0")}),I.jsx("em",{children:l})]},l))})}function $b({labels:o,t}){const[i,s]=xn.useState(0),[l,u]=xn.useState(!1);return xn.useEffect(()=>{const h=()=>{const d=Array.from(document.querySelectorAll(".scroll-scene")),m=window.scrollY+8,p=d.find(S=>S.offsetTop<=m&&S.offsetTop+S.offsetHeight>m)||d.find(S=>S.classList.contains("active-scene"))||d[0];if(!p)return;const g=Number(p.dataset.sceneIndex||0),x=p.getBoundingClientRect();s(g),u(p.offsetHeight>window.innerHeight+16&&x.bottom>window.innerHeight+28)};return h(),window.addEventListener("scroll",h,{passive:!0}),window.addEventListener("resize",h),()=>{window.removeEventListener("scroll",h),window.removeEventListener("resize",h)}},[]),I.jsxs("div",{className:`scene-hint ${l?"inside":""}`,children:[I.jsxs("span",{children:[t.scrollHint.scene," ",String(i+1).padStart(2,"0")]}),I.jsx("strong",{children:o[i]}),I.jsx("small",{children:l?t.scrollHint.inside:t.scrollHint.next})]})}function eA(){return xn.useEffect(()=>{let o=!1;const t=()=>{const h=Array.from(document.querySelectorAll(".scroll-scene")),d=window.scrollY+8,m=h.findIndex(g=>g.offsetTop<=d&&g.offsetTop+g.offsetHeight>d);if(m>=0)return m;const p=window.scrollY+window.innerHeight*.35;return h.reduce((g,x,S)=>{const M=h[g],b=Math.abs(M.offsetTop-p);return Math.abs(x.offsetTop-p)<b?S:g},0)},i=h=>{const d=Array.from(document.querySelectorAll(".scroll-scene")),m=t(),p=Math.min(Math.max(m+h,0),d.length-1);p!==m&&(o=!0,document.body.classList.remove("scene-shift-up","scene-shift-down","scene-is-changing"),document.body.classList.add(h>0?"scene-shift-down":"scene-shift-up","scene-is-changing"),d[p].scrollIntoView({behavior:"smooth",block:"start"}),window.setTimeout(()=>{o=!1,document.body.classList.remove("scene-is-changing")},850))},s=h=>{const m=Array.from(document.querySelectorAll(".scroll-scene"))[t()];if(!m||m.offsetHeight<=window.innerHeight+16)return!1;const p=m.getBoundingClientRect(),g=h>0&&p.bottom>window.innerHeight+24,x=h<0&&p.top<-24;return g||x},l=h=>{if(window.innerWidth<=960||h.ctrlKey||Math.abs(h.deltaY)<24)return;const d=h.deltaY>0?1:-1;s(d)||(h.preventDefault(),o||i(d))},u=h=>{if(!(window.innerWidth<=960||o)){if(["ArrowDown","PageDown"," "].includes(h.key)){if(s(1))return;h.preventDefault(),i(1)}if(["ArrowUp","PageUp"].includes(h.key)){if(s(-1))return;h.preventDefault(),i(-1)}}};return window.addEventListener("wheel",l,{passive:!1}),window.addEventListener("keydown",u),()=>{window.removeEventListener("wheel",l),window.removeEventListener("keydown",u)}},[]),null}function tA({t:o}){return I.jsxs("section",{className:"hero section-band scroll-scene","data-scene-index":"0",id:"top",children:[I.jsxs("div",{className:"hero-copy",children:[I.jsxs("div",{className:"eyebrow",children:[I.jsx(US,{size:16})," ",o.hero.eyebrow]}),I.jsx("div",{className:"hero-badges",children:o.hero.badges.map(t=>I.jsx("span",{children:t},t))}),I.jsx("h1",{children:o.hero.title}),I.jsx("p",{children:o.hero.text}),I.jsxs("div",{className:"hero-actions",children:[I.jsxs("a",{className:"button primary",href:"#workflow",children:[o.hero.primary," ",I.jsx(vS,{size:18})]}),I.jsx("a",{className:"button secondary",href:"#modules",children:o.hero.secondary})]})]}),I.jsxs("div",{className:"hero-stage","aria-label":o.hero.visualLabel,children:[I.jsx("div",{className:"hero-visual",children:I.jsx(Wb,{})}),I.jsx("div",{className:"hero-status-grid",children:o.hero.status.map(([t,i])=>I.jsxs("div",{className:"hero-status",children:[I.jsx("span",{children:t}),I.jsx("strong",{children:i})]},t))})]})]})}function nA({t:o}){const[t,i]=xn.useState(0),s=o.simulator.options[t];return xn.useEffect(()=>{const l=window.setInterval(()=>{i(u=>(u+1)%o.simulator.options.length)},5200);return()=>window.clearInterval(l)},[o.simulator.options.length]),I.jsxs("section",{className:"section-band simulator-section scroll-scene","data-scene-index":"1",id:"scene-1",children:[I.jsxs("div",{className:"section-heading",children:[I.jsx("span",{className:"section-kicker",children:o.simulator.kicker}),I.jsx("h2",{children:o.simulator.title}),I.jsx("p",{className:"wide-copy",children:o.simulator.subtitle})]}),I.jsxs("div",{className:"simulator-grid",children:[I.jsxs("div",{className:"scenario-panel",children:[I.jsx("div",{className:"scenario-buttons",children:o.simulator.options.map((l,u)=>I.jsx("button",{className:u===t?"active":"",onClick:()=>i(u),type:"button",children:l.label},l.id))}),I.jsxs("div",{className:"conversation-card",children:[I.jsx("span",{children:o.simulator.labels.guest}),I.jsx("strong",{children:s.guest})]}),I.jsxs("div",{className:"conversation-card robot",children:[I.jsx("span",{children:o.simulator.labels.reply}),I.jsx("strong",{children:s.reply})]}),I.jsxs("div",{className:"insight-strip","aria-label":o.simulator.labels.insight,children:[I.jsx("span",{children:o.simulator.labels.insight}),I.jsx("div",{children:s.insight.map(l=>I.jsx("strong",{children:l},l))})]})]}),I.jsxs("div",{className:"state-console",children:[I.jsxs("div",{className:"state-orbit",children:[I.jsx(x_,{size:34}),I.jsx("span",{className:"orbit-ring"}),I.jsx("span",{className:"orbit-ring second"})]}),I.jsxs("div",{className:"state-grid",children:[I.jsx(Sc,{label:o.simulator.labels.state,value:s.state}),I.jsx(Sc,{label:o.simulator.labels.intent,value:s.intent}),I.jsx(Sc,{label:o.simulator.labels.item,value:s.item}),I.jsx(Sc,{label:o.simulator.labels.emotion,value:s.emotion})]}),I.jsxs("div",{className:"event-output",children:[I.jsx("span",{children:o.simulator.labels.event}),I.jsx("code",{children:s.event})]})]})]}),I.jsx("div",{className:"pipeline-strip",children:o.simulator.pipeline.map((l,u)=>I.jsxs("div",{className:"pipeline-step",children:[I.jsx("span",{children:String(u+1).padStart(2,"0")}),I.jsx("strong",{children:l})]},l))})]})}function Sc({label:o,value:t}){return I.jsxs("div",{className:"state-pill",children:[I.jsx("span",{children:o}),I.jsx("strong",{children:t})]})}function iA({t:o}){return I.jsxs("section",{className:"section-band overview scroll-scene","data-scene-index":"2",id:"scene-2",children:[I.jsxs("div",{className:"section-heading",children:[I.jsx("span",{className:"section-kicker",children:o.overview.kicker}),I.jsx("h2",{children:o.overview.title})]}),I.jsx("p",{className:"wide-copy",children:o.overview.text}),I.jsx("div",{className:"overview-grid",children:o.overview.metrics.map(([t,i])=>I.jsx(aA,{value:t,label:i},i))})]})}function aA({value:o,label:t}){return I.jsxs("div",{className:"metric",children:[I.jsx("strong",{children:o}),I.jsx("span",{children:t})]})}function sA({t:o}){return I.jsxs("section",{className:"section-band scroll-scene","data-scene-index":"3",id:"workflow",children:[I.jsxs("div",{className:"section-heading",children:[I.jsx("span",{className:"section-kicker",children:o.workflow.kicker}),I.jsx("h2",{children:o.workflow.title})]}),I.jsx("div",{className:"flow-line",children:o.workflow.steps.map(([t,i],s)=>I.jsxs("article",{className:"flow-card reveal-card",children:[I.jsx("span",{className:"step-index",children:String(s+1).padStart(2,"0")}),I.jsx("h3",{children:t}),I.jsx("p",{children:i})]},t))})]})}function rA({t:o}){return I.jsxs("section",{className:"section-band scroll-scene","data-scene-index":"4",id:"modules",children:[I.jsxs("div",{className:"section-heading",children:[I.jsx("span",{className:"section-kicker",children:o.modules.kicker}),I.jsx("h2",{children:o.modules.title})]}),I.jsx("div",{className:"module-grid",children:o.modules.items.map(([t,i,s])=>{const l=jb[t];return I.jsxs("article",{className:"module-card reveal-card",children:[I.jsx("span",{className:"module-icon",children:I.jsx(l,{size:22})}),I.jsx("h3",{children:i}),I.jsx("p",{children:s})]},i)})})]})}function oA({t:o}){return I.jsx("section",{className:"showcase section-band scroll-scene","data-scene-index":"5",id:"scene-5",children:I.jsxs("div",{className:"showcase-panel",children:[I.jsxs("div",{children:[I.jsx("span",{className:"section-kicker",children:o.showcase.kicker}),I.jsx("h2",{children:o.showcase.title}),I.jsx("p",{children:o.showcase.text})]}),I.jsxs("div",{className:"holo-stack","aria-label":o.showcase.label,children:[I.jsxs("div",{className:"holo-card one",children:[I.jsx(CS,{})," ",o.showcase.cards[0]]}),I.jsxs("div",{className:"holo-card two",children:[I.jsx(S_,{})," ",o.showcase.cards[1]]}),I.jsxs("div",{className:"holo-card three",children:[I.jsx(RS,{})," ",o.showcase.cards[2]]})]})]})})}function lA({t:o}){return I.jsxs("section",{className:"section-band live-system scroll-scene","data-scene-index":"6",id:"scene-6",children:[I.jsxs("div",{className:"section-heading",children:[I.jsx("span",{className:"section-kicker",children:o.live.kicker}),I.jsx("h2",{children:o.live.title})]}),I.jsxs("div",{className:"live-grid",children:[I.jsx("div",{className:"signal-board",children:o.live.cards.map(([t,i])=>I.jsxs("article",{className:"signal-card",children:[I.jsx("span",{className:"signal-dot"}),I.jsx("h3",{children:t}),I.jsx("p",{children:i})]},t))}),I.jsxs("div",{className:"terminal-panel","aria-label":"Projekt-Testablauf",children:[I.jsxs("div",{className:"terminal-bar",children:[I.jsx("span",{}),I.jsx("span",{}),I.jsx("span",{})]}),I.jsx("pre",{children:o.live.terminal.join(`
`)})]})]})]})}function cA({t:o}){return I.jsxs("section",{className:"section-band project-evidence scroll-scene","data-scene-index":"7",id:"scene-7",children:[I.jsxs("div",{className:"section-heading",children:[I.jsx("span",{className:"section-kicker",children:o.realProject.kicker}),I.jsx("h2",{children:o.realProject.title})]}),I.jsxs("div",{className:"evidence-layout",children:[I.jsx("div",{className:"evidence-files",children:o.realProject.files.map(([t,i])=>I.jsxs("article",{className:"file-card",children:[I.jsx("code",{children:t}),I.jsx("p",{children:i})]},t))}),I.jsxs("div",{className:"project-images",children:[I.jsx("span",{children:o.realProject.diagramTitle}),I.jsx("img",{src:"/project-assets/voice-flow-diagram.svg",alt:"Voice Module: Gesamter Gesprächsablauf"}),I.jsx("img",{src:"/project-assets/drink-recognition-diagram.svg",alt:"Voice Module: Getränkeerkennung und Reaktion"})]})]})]})}function uA({t:o}){return I.jsxs("section",{className:"section-band scroll-scene","data-scene-index":"8",id:"architecture",children:[I.jsxs("div",{className:"section-heading",children:[I.jsx("span",{className:"section-kicker",children:o.architecture.kicker}),I.jsx("h2",{children:o.architecture.title})]}),I.jsx("div",{className:"architecture-grid",children:o.architecture.nodes.map(([t,i])=>I.jsxs("article",{className:"architecture-node",children:[I.jsx("span",{}),I.jsx("h3",{children:t}),I.jsx("p",{children:i})]},t))})]})}function fA({t:o}){return I.jsxs("section",{className:"section-band tech-section scroll-scene","data-scene-index":"9",id:"scene-9",children:[I.jsxs("div",{className:"section-heading",children:[I.jsx("span",{className:"section-kicker",children:o.tech.kicker}),I.jsx("h2",{children:o.tech.title})]}),I.jsx("div",{className:"tech-cloud",children:o.tech.items.map(t=>I.jsx("span",{children:t},t))})]})}function hA({t:o}){return I.jsxs("section",{className:"section-band highlights scroll-scene","data-scene-index":"10",id:"scene-10",children:[I.jsxs("div",{className:"section-heading",children:[I.jsx("span",{className:"section-kicker",children:o.highlights.kicker}),I.jsx("h2",{children:o.highlights.title})]}),I.jsxs("div",{className:"highlight-grid",children:[I.jsx(bh,{icon:I.jsx(DS,{}),title:o.highlights.items[0][0],text:o.highlights.items[0][1]}),I.jsx(bh,{icon:I.jsx(AS,{}),title:o.highlights.items[1][0],text:o.highlights.items[1][1]}),I.jsx(bh,{icon:I.jsx(zS,{}),title:o.highlights.items[2][0],text:o.highlights.items[2][1]})]})]})}function bh({icon:o,title:t,text:i}){return I.jsxs("article",{className:"feature-card",children:[I.jsx("span",{children:o}),I.jsx("h3",{children:t}),I.jsx("p",{children:i})]})}function dA({t:o}){return I.jsxs("section",{className:"section-band scroll-scene","data-scene-index":"11",id:"team",children:[I.jsxs("div",{className:"section-heading",children:[I.jsx("span",{className:"section-kicker",children:o.team.kicker}),I.jsx("h2",{children:o.team.title})]}),I.jsx("div",{className:"team-grid",children:o.team.roles.map(t=>I.jsxs("article",{className:"team-card",children:[I.jsx(LS,{size:22}),I.jsx("h3",{children:t}),I.jsx("p",{children:o.team.placeholder})]},t))})]})}function pA({t:o}){return I.jsxs("footer",{className:"footer",children:[I.jsxs("div",{children:[I.jsx("strong",{children:"Barkeeper Robot"}),I.jsx("p",{children:o.footer.text})]}),I.jsxs("div",{className:"footer-links",children:[I.jsxs("a",{href:"#","aria-label":"GitHub placeholder",children:[I.jsx(ES,{size:18})," GitHub"]}),I.jsx("a",{href:"mailto:contact@example.com",children:o.footer.contact})]})]})}function mA(){const[o,t]=xn.useState("de"),i=Yb[o];return I.jsxs("main",{children:[I.jsx(Kb,{}),I.jsx(Qb,{}),I.jsx(Zb,{activeLanguage:o,onLanguageChange:t,t:i}),I.jsx(Jb,{labels:i.scenes}),I.jsx($b,{labels:i.scenes,t:i}),I.jsx(eA,{}),I.jsx(tA,{t:i}),I.jsx(nA,{t:i}),I.jsx(iA,{t:i}),I.jsx(sA,{t:i}),I.jsx(rA,{t:i}),I.jsx(oA,{t:i}),I.jsx(lA,{t:i}),I.jsx(cA,{t:i}),I.jsx(uA,{t:i}),I.jsx(fA,{t:i}),I.jsx(hA,{t:i}),I.jsx(dA,{t:i}),I.jsx(pA,{t:i})]})}pS.createRoot(document.getElementById("root")).render(I.jsx(mA,{}));
