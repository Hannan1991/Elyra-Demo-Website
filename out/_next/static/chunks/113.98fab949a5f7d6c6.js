"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[113],{250:(e,t,n)=>{n.d(t,{h:()=>l});var r=n(4467),i=n(1926);let o=e=>{let t,n=new Set,r=(e,r)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=r?r:"object"!=typeof i||null===i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,o={setState:r,getState:i,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e))},a=t=e(r,i,o);return o},{useSyncExternalStoreWithSelector:a}=i,s=(e,t)=>{let n=e?o(e):o,i=(e,i=t)=>(function(e,t=e=>e,n){let i=a(e.subscribe,e.getState,e.getInitialState,t,n);return r.useDebugValue(i),i})(n,e,i);return Object.assign(i,n),i},l=(e,t)=>e?s(e,t):s},1586:(e,t,n)=>{n.d(t,{DY:()=>a,IU:()=>l,uv:()=>s});let r=[];function i(e,t,n=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;let r=e.length;if(t.length!==r)return!1;for(let i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}function o(e,t=null,n=!1,a={}){for(let o of(null===t&&(t=[e]),r))if(i(t,o.keys,o.equal)){if(n)return;if(Object.prototype.hasOwnProperty.call(o,"error"))throw o.error;if(Object.prototype.hasOwnProperty.call(o,"response"))return a.lifespan&&a.lifespan>0&&(o.timeout&&clearTimeout(o.timeout),o.timeout=setTimeout(o.remove,a.lifespan)),o.response;if(!n)throw o.promise}let s={keys:t,equal:a.equal,remove:()=>{let e=r.indexOf(s);-1!==e&&r.splice(e,1)},promise:("object"==typeof e&&"function"==typeof e.then?e:e(...t)).then(e=>{s.response=e,a.lifespan&&a.lifespan>0&&(s.timeout=setTimeout(s.remove,a.lifespan))}).catch(e=>s.error=e)};if(r.push(s),!n)throw s.promise}let a=(e,t,n)=>o(e,t,!1,n),s=(e,t,n)=>void o(e,t,!0,n),l=e=>{if(void 0===e||0===e.length)r.splice(0,r.length);else{let t=r.find(t=>i(e,t.keys,t.equal));t&&t.remove()}}},1926:(e,t,n)=>{e.exports=n(7616)},2023:(e,t)=>{function n(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<o(i,t))e[r]=t,e[n]=i,n=r;else break}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>o(l,n))u<i&&0>o(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else if(u<i&&0>o(c,n))e[r]=c,e[u]=n,r=u;else break}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var a,s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var c=[],f=[],m=1,d=null,v=3,p=!1,h=!1,g=!1,y=!1,b="function"==typeof setTimeout?setTimeout:null,x="function"==typeof clearTimeout?clearTimeout:null,w="u">typeof setImmediate?setImmediate:null;function S(e){for(var t=r(f);null!==t;){if(null===t.callback)i(f);else if(t.startTime<=e)i(f),t.sortIndex=t.expirationTime,n(c,t);else break;t=r(f)}}function E(e){if(g=!1,S(e),!h)if(null!==r(c))h=!0,C||(C=!0,a());else{var t=r(f);null!==t&&A(E,t.startTime-e)}}var C=!1,M=-1,k=5,R=-1;function T(){return!!y||!(t.unstable_now()-R<k)}function _(){if(y=!1,C){var e=t.unstable_now();R=e;var n=!0;try{e:{h=!1,g&&(g=!1,x(M),M=-1),p=!0;var o=v;try{t:{for(S(e),d=r(c);null!==d&&!(d.expirationTime>e&&T());){var s=d.callback;if("function"==typeof s){d.callback=null,v=d.priorityLevel;var l=s(d.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof l){d.callback=l,S(e),n=!0;break t}d===r(c)&&i(c),S(e)}else i(c);d=r(c)}if(null!==d)n=!0;else{var u=r(f);null!==u&&A(E,u.startTime-e),n=!1}}break e}finally{d=null,v=o,p=!1}}}finally{n?a():C=!1}}}if("function"==typeof w)a=function(){w(_)};else if("u">typeof MessageChannel){var z=new MessageChannel,P=z.port2;z.port1.onmessage=_,a=function(){P.postMessage(null)}}else a=function(){b(_,0)};function A(e,n){M=b(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_next=function(e){switch(v){case 1:case 2:case 3:var t=3;break;default:t=v}var n=v;v=t;try{return e()}finally{v=n}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=v;v=e;try{return t()}finally{v=n}},t.unstable_scheduleCallback=function(e,i,o){var s=t.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?s+o:s,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=0x3fffffff;break;case 4:l=1e4;break;default:l=5e3}return l=o+l,e={id:m++,callback:i,priorityLevel:e,startTime:o,expirationTime:l,sortIndex:-1},o>s?(e.sortIndex=o,n(f,e),null===r(c)&&e===r(f)&&(g?(x(M),M=-1):g=!0,A(E,o-s))):(e.sortIndex=l,n(c,e),h||p||(h=!0,C||(C=!0,a()))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=v;return function(){var n=v;v=t;try{return e.apply(this,arguments)}finally{v=n}}}},2374:(e,t,n)=>{e.exports=n(2023)},2542:(e,t,n)=>{n.d(t,{Af:()=>u,Go:()=>v,Nz:()=>a,u5:()=>c,y3:()=>d});var r,i,o=n(4467);function a(e,t,n){if(!e)return;if(!0===n(e))return e;let r=t?e.return:e.child;for(;r;){let e=a(r,t,n);if(e)return e;r=t?null:r.sibling}}function s(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}"u">typeof window&&((null==(r=window.document)?void 0:r.createElement)||(null==(i=window.navigator)?void 0:i.product)==="ReactNative")?o.useLayoutEffect:o.useEffect;let l=s(o.createContext(null));class u extends o.Component{render(){return o.createElement(l.Provider,{value:this._reactInternals},this.props.children)}}function c(){let e=o.useContext(l);if(null===e)throw Error("its-fine: useFiber must be called within a <FiberProvider />!");let t=o.useId();return o.useMemo(()=>{for(let n of[e,null==e?void 0:e.alternate]){if(!n)continue;let e=a(n,!1,e=>{let n=e.memoizedState;for(;n;){if(n.memoizedState===t)return!0;n=n.next}});if(e)return e}},[e,t])}let f=Symbol.for("react.context"),m=e=>null!==e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===f;function d(){let e=function(){let e=c(),[t]=o.useState(()=>new Map);t.clear();let n=e;for(;n;){let e=n.type;m(e)&&e!==l&&!t.has(e)&&t.set(e,o.use(s(e))),n=n.return}return t}();return o.useMemo(()=>Array.from(e.keys()).reduce((t,n)=>r=>o.createElement(t,null,o.createElement(n.Provider,{...r,value:e.get(n)})),e=>o.createElement(u,{...e})),[e])}function v(){if(!o.Activity)throw Error("its-fine: useActivityBridge requires React 19.2 or later!");let e=c(),[t]=o.useState(()=>{let t,n=[],r=!1;a(e,!0,e=>{var t,i;if(e.elementType===o.Activity){let r=(null==(t=e.child)?void 0:t.tag)===22?e.child.stateNode:null;if("number"!=typeof(null==r?void 0:r._visibility))throw Error("its-fine: unsupported React Activity internals!");n.push(r)}else 22===e.tag&&(null==(i=e.return)?void 0:i.elementType)!==o.Activity&&(r=!0)});let i="hidden",s=new Set,l={mounted:!1,connected:!1,subscribe:e=>(s.add(e),()=>{s.delete(e)}),sync(e){l.mounted&&!l.connected&&r&&n.length>0?t||(t=function(e){if("function"==typeof requestAnimationFrame){let t=requestAnimationFrame(e);return()=>cancelAnimationFrame(t)}let t=setTimeout(e,16);return()=>clearTimeout(t)}(()=>{t=void 0,l.sync(!0)})):(null==t||t(),t=void 0);let o=i;if(l.mounted?l.connected?o="visible":e&&(o=n.every(e=>(1&e._visibility)!=0)?"visible":"hidden"):o="hidden",i!==o)for(let e of(i=o,s))e()},Bridge:({children:e})=>o.createElement(o.Activity,{mode:o.useSyncExternalStore(l.subscribe,()=>i,()=>"hidden")},e)};return l});return o.useInsertionEffect(()=>(t.mounted=!0,queueMicrotask(()=>t.sync(!1)),()=>{t.mounted=!1,queueMicrotask(()=>t.sync(!1))}),[t]),o.useLayoutEffect(()=>(t.connected=!0,t.sync(!1),()=>{t.connected=!1,t.sync(!0)}),[t]),t.Bridge}},3204:(e,t,n)=>{n.d(t,{n:()=>a});var r=n(4467),i=n(5887),o=n(4518);let a=r.forwardRef(({children:e,enabled:t=!0,speed:n=1,rotationIntensity:a=1,floatIntensity:s=1,floatingRange:l=[-.1,.1],autoInvalidate:u=!1,...c},f)=>{let m=r.useRef(null);r.useImperativeHandle(f,()=>m.current,[]);let d=r.useRef(1e4*Math.random());return(0,i.F)(e=>{var r,i;if(!t||0===n)return;u&&e.invalidate();let c=d.current+e.clock.elapsedTime;m.current.rotation.x=Math.cos(c/4*n)/8*a,m.current.rotation.y=Math.sin(c/4*n)/8*a,m.current.rotation.z=Math.sin(c/4*n)/20*a;let f=Math.sin(c/4*n)/10;f=o.cj9.mapLinear(f,-.1,.1,null!=(r=null==l?void 0:l[0])?r:-.1,null!=(i=null==l?void 0:l[1])?i:.1),m.current.position.y=f*s,m.current.updateMatrix()}),r.createElement("group",c,r.createElement("group",{ref:m,matrixAutoUpdate:!1},e))})},4780:(e,t,n)=>{n.d(t,{Hl:()=>f});var r=n(5887),i=n(4467),o=n(8573);function a(e,t){let n;return(...r)=>{window.clearTimeout(n),n=window.setTimeout(()=>e(...r),t)}}let s=["x","y","top","bottom","left","right","width","height"];var l=n(2542),u=n(6707);function c({ref:e,children:t,fallback:n,resize:l,style:f,gl:m,events:d=r.f,eventSource:v,eventPrefix:p,shadows:h,linear:g,flat:y,legacy:b,orthographic:x,frameloop:w,dpr:S,performance:E,raycaster:C,camera:M,scene:k,onPointerMissed:R,onCreated:T,..._}){i.useMemo(()=>(0,r.e)(o),[]);let z=(0,r.u)(),[P,A]=function({debounce:e,scroll:t,polyfill:n,offsetSize:r}={debounce:0,scroll:!1,offsetSize:!1}){var o,l,u;let c=n||("u"<typeof window?class{}:window.ResizeObserver);if(!c)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[f,m]=(0,i.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),d=(0,i.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:f,orientationHandler:null}),v=e?"number"==typeof e?e:e.scroll:null,p=e?"number"==typeof e?e:e.resize:null,h=(0,i.useRef)(!1);(0,i.useEffect)(()=>(h.current=!0,()=>void(h.current=!1)));let[g,y,b]=(0,i.useMemo)(()=>{let e=()=>{let e,t;if(!d.current.element)return;let{left:n,top:i,width:o,height:a,bottom:l,right:u,x:c,y:f}=d.current.element.getBoundingClientRect(),v={left:n,top:i,width:o,height:a,bottom:l,right:u,x:c,y:f};d.current.element instanceof HTMLElement&&r&&(v.height=d.current.element.offsetHeight,v.width=d.current.element.offsetWidth),Object.freeze(v),h.current&&(e=d.current.lastBounds,t=v,!s.every(n=>e[n]===t[n]))&&m(d.current.lastBounds=v)};return[e,p?a(e,p):e,v?a(e,v):e]},[m,r,v,p]);function x(){d.current.scrollContainers&&(d.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",b,!0)),d.current.scrollContainers=null),d.current.resizeObserver&&(d.current.resizeObserver.disconnect(),d.current.resizeObserver=null),d.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",d.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",d.current.orientationHandler))}function w(){d.current.element&&(d.current.resizeObserver=new c(b),d.current.resizeObserver.observe(d.current.element),t&&d.current.scrollContainers&&d.current.scrollContainers.forEach(e=>e.addEventListener("scroll",b,{capture:!0,passive:!0})),d.current.orientationHandler=()=>{b()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",d.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",d.current.orientationHandler))}return o=b,l=!!t,(0,i.useEffect)(()=>{if(l)return window.addEventListener("scroll",o,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",o,!0)},[o,l]),u=y,(0,i.useEffect)(()=>(window.addEventListener("resize",u),()=>void window.removeEventListener("resize",u)),[u]),(0,i.useEffect)(()=>{x(),w()},[t,b,y]),(0,i.useEffect)(()=>x,[]),[e=>{e&&e!==d.current.element&&(x(),d.current.element=e,d.current.scrollContainers=function e(t){let n=[];if(!t||t===document.body)return n;let{overflow:r,overflowX:i,overflowY:o}=window.getComputedStyle(t);return[r,i,o].some(e=>"auto"===e||"scroll"===e)&&n.push(t),[...n,...e(t.parentElement)]}(e),w())},f,g]}({scroll:!0,debounce:{scroll:50,resize:0},...l}),I=i.useRef(null),F=i.useRef(null);i.useImperativeHandle(e,()=>I.current);let j=(0,r.a)(R),O=i.useCallback(e=>null==j.current?void 0:j.current(e),[j]),[D,B]=i.useState(!1),[L,N]=i.useState(!1);if(D)throw D;if(L)throw L;let U=i.useRef(null),[V,H]=(0,r.b)(),q=i.useRef(null),$=()=>v?(0,r.i)(v)?v.current:v:F.current;i.useInsertionEffect(()=>()=>{let e=U.current;U.current=null,null==e||e.unmount()},[]),(0,r.c)(()=>{let e=I.current;A.width>0&&A.height>0&&e&&(U.current||(U.current=(0,r.d)(e)),U.current.configure({gl:m,scene:k,events:d,shadows:h,linear:g,flat:y,legacy:b,orthographic:x,frameloop:w,dpr:S,performance:E,raycaster:C,camera:M,size:A,onPointerMissed:O,onCreated:e=>{var t;q.current=e,null==e.events.connect||e.events.connect(null!=(t=$())?t:F.current),p&&e.setEvents({compute:(e,t)=>{let n=e[p+"X"],r=e[p+"Y"];t.pointer.set(n/t.size.width*2-1,-(2*(r/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),null==T||T(e)}}).catch(N),"fulfilled"===U.current.ready.status?U.current.render((0,u.jsx)(z,{children:(0,u.jsx)(r.E,{set:N,children:(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)(r.B,{set:B}),children:null!=t?t:null})})})):"pending"===U.current.ready.status&&H(U.current.ready))}),i.useEffect(()=>{var e;let t=null==(e=q.current)?void 0:e.get(),n=$();t&&n&&t.events.connected!==n&&(null==t.events.connect||t.events.connect(n))}),i.useEffect(()=>{let e=I.current;return()=>{var t;e.isConnected||null==(t=U.current)||t.unmount()}},[]);let G=v?"none":"auto";return(0,u.jsxs)("div",{ref:F,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:G,...f},..._,children:[(0,u.jsx)("div",{ref:P,style:{width:"100%",height:"100%"},children:(0,u.jsx)("canvas",{ref:I,style:{display:"block"},children:n})}),V]})}function f(e){return(0,u.jsx)(l.Af,{children:(0,u.jsx)(c,{...e})})}n(2374)},7117:(e,t,n)=>{n.d(t,{A:()=>r});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}},7616:(e,t,n)=>{var r=n(4467),i=n(9200),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,s=r.useRef,l=r.useEffect,u=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var f=s(null);if(null===f.current){var m={hasValue:!1,value:null};f.current=m}else m=f.current;var d=a(e,(f=u(function(){function e(e){if(!l){if(l=!0,a=e,e=r(e),void 0!==i&&m.hasValue){var t=m.value;if(i(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var n=r(e);return void 0!==i&&i(t,n)?(a=e,t):(a=e,s=n)}var a,s,l=!1,u=void 0===n?null:n;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,n,r,i]))[0],f[1]);return l(function(){m.hasValue=!0,m.value=d},[d]),c(d),d}},7668:(e,t,n)=>{n.d(t,{s:()=>d});var r=n(7117),i=n(4467),o=n(4518),a=n(5887);let s=parseInt(o.sPf.replace(/\D+/g,""));class l extends o.BKk{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${s>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(e){this.uniforms.pixelRatio.value=e}}let u=e=>e&&e.constructor===Float32Array,c=e=>e instanceof o.I9Y||e instanceof o.Pq0||e instanceof o.IUQ,f=e=>Array.isArray(e)?e:c(e)?e.toArray():[e,e,e];function m(e,t,n){return i.useMemo(()=>{if(void 0!==t)if(u(t))return t;else{if(t instanceof o.Q1f){let n=Array.from({length:3*e},()=>[t.r,t.g,t.b]).flat();return Float32Array.from(n)}if(c(t)||Array.isArray(t)){let n=Array.from({length:3*e},()=>f(t)).flat();return Float32Array.from(n)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},n)},[t])}let d=i.forwardRef(({noise:e=1,count:t=100,speed:n=1,opacity:s=1,scale:c=1,size:d,color:v,children:p,...h},g)=>{i.useMemo(()=>(0,a.e)({SparklesImplMaterial:l}),[]);let y=i.useRef(null),b=(0,a.D)(e=>e.viewport.dpr),x=f(c),w=i.useMemo(()=>Float32Array.from(Array.from({length:t},()=>x.map(o.cj9.randFloatSpread)).flat()),[t,...x]),S=m(t,d,Math.random),E=m(t,s),C=m(t,n),M=m(3*t,e),k=m(void 0===v?3*t:t,u(v)?v:new o.Q1f(v),()=>1);return(0,a.F)(e=>{y.current&&y.current.material&&(y.current.material.time=e.clock.elapsedTime)}),i.useImperativeHandle(g,()=>y.current,[]),i.createElement("points",(0,r.A)({key:`particle-${t}-${JSON.stringify(c)}`},h,{ref:y}),i.createElement("bufferGeometry",null,i.createElement("bufferAttribute",{attach:"attributes-position",args:[w,3]}),i.createElement("bufferAttribute",{attach:"attributes-size",args:[S,1]}),i.createElement("bufferAttribute",{attach:"attributes-opacity",args:[E,1]}),i.createElement("bufferAttribute",{attach:"attributes-speed",args:[C,1]}),i.createElement("bufferAttribute",{attach:"attributes-color",args:[k,3]}),i.createElement("bufferAttribute",{attach:"attributes-noise",args:[M,3]})),p||i.createElement("sparklesImplMaterial",{transparent:!0,pixelRatio:b,depthWrite:!1}))})},9200:(e,t,n)=>{e.exports=n(9991)},9264:(e,t,n)=>{n.d(t,{$:()=>v});var r,i,o,a,s=n(7117),l=n(4518),u=n(4467),c=n(5887);function f(e,t,n){let r=(0,c.D)(e=>e.size),i=(0,c.D)(e=>e.viewport),o="number"==typeof e?e:r.width*i.dpr,a="number"==typeof t?t:r.height*i.dpr,s=("number"==typeof e?n:e)||{},{samples:f=0,depth:m,...d}=s,v=null!=m?m:s.depthBuffer,p=u.useMemo(()=>{let e=new l.nWS(o,a,{minFilter:l.k6q,magFilter:l.k6q,type:l.ix0,...d});return v&&(e.depthTexture=new l.VCu(o,a,l.RQf)),e.samples=f,e},[]);return u.useLayoutEffect(()=>{p.setSize(o,a),f&&(p.samples=f)},[f,p,o,a]),u.useEffect(()=>()=>p.dispose(),[]),p}let m=(r={},i="void main() { }",o="void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }",(a=class extends l.BKk{constructor(e){for(let t in super({vertexShader:i,fragmentShader:o,...e}),r)this.uniforms[t]=new l.nc$(r[t]),Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(e){this.uniforms[t].value=e}});this.uniforms=l.LlO.clone(this.uniforms)}}).key=l.cj9.generateUUID(),a);class d extends l.uSd{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new l.Q1f("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=n=>{var r;n.uniforms={...n.uniforms,...this.uniforms},(null!=(r=this.anisotropy)?r:0)>0&&(n.defines.USE_ANISOTROPY=""),t?n.defines.USE_SAMPLER="":n.defines.USE_TRANSMISSION="",n.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <transmission_pars_fragment>",`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
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
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in vec3 modelScale ) {
            // Direction of refracted light.
            // n is normalized once when the sample normal is built.
            vec3 refractionVector = refract( - v, n, 1.0 / ior );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 position, const in vec3 modelScale, const in vec3 attenuationCoefficient, const in vec3 F,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelScale );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = transmittedLight.rgb;
            if ( !isinf( attenuationDistance ) ) {
              // Apply Beer's law.
              attenuatedColor *= exp( - attenuationCoefficient * length( transmissionRay ) );
            }
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),n.fragmentShader=n.fragmentShader.replace("#include <transmission_fragment>",`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        if (material.transmission != 0.0) {
          vec3 pos = vWorldPosition;
          float runningSeed = 0.0;
          vec3 v = normalize( cameraPosition - pos );
          vec3 n = inverseTransformDirection( normal, viewMatrix );
          vec3 transmission = vec3(0.0);
          float randomCoords = rand(runningSeed++);
          float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
          vec3 distortionNormal = vec3(0.0);
          vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;

          vec3 modelScale = vec3(
            length( vec3( modelMatrix[ 0 ].xyz ) ),
            length( vec3( modelMatrix[ 1 ].xyz ) ),
            length( vec3( modelMatrix[ 2 ].xyz ) )
          );

          // Beer's-law coefficient
          vec3 attenuationCoefficient = vec3(0.0);
          if ( !isinf( material.attenuationDistance ) ) {
            attenuationCoefficient = -log( material.attenuationColor ) / material.attenuationDistance;
          }

          if (distortion > 0.0) {
            distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
          }
          for (float i = 0.0; i < ${e}.0; i ++) {
            vec3 sampleNorm;
            if (roughnessFactor > 0.0) {
              sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
            } else {
              // Smooth surfaces skip four hashes, a pow, and a normalization per sample
              sampleNorm = normalize(n + distortionNormal);
            }
            float sampleProgress = (i + randomCoords) / float(${e});
            float sampleThickness = material.thickness + thickness_smear * sampleProgress;
            // Fresnel is identical for RGB; only the refracted IOR changes.
            vec3 F = EnvironmentBRDF( sampleNorm, v, material.specularColor, material.specularF90, material.roughness );
            if (chromaticAberration == 0.0) {
              // With one IOR, a single framebuffer sample supplies all RGB channels
              transmission += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior, sampleThickness, material.attenuationDistance
              ).rgb;
            } else {
              float aberration = chromaticAberration * sampleProgress;
              transmission.r += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior, sampleThickness, material.attenuationDistance
              ).r;
              transmission.g += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior * (1.0 + aberration), sampleThickness, material.attenuationDistance
              ).g;
              transmission.b += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * aberration), sampleThickness, material.attenuationDistance
              ).b;
            }
          }
          transmission /= ${e}.0;
          totalDiffuse = mix( totalDiffuse, transmission, material.transmission );
        }
`)},Object.keys(this.uniforms).forEach(e=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t}))}}let v=u.forwardRef(({buffer:e,transmissionSampler:t=!1,backside:n=!1,side:r=l.hB5,transmission:i=1,thickness:o=0,backsideThickness:a=0,backsideEnvMapIntensity:v=1,samples:p=10,resolution:h,backsideResolution:g,background:y,anisotropy:b,anisotropicBlur:x,...w},S)=>{let E,C,M,k;(0,c.e)({MeshTransmissionMaterial:d});let R=u.useRef(null),[T]=u.useState(()=>new m),_=null!=g?g:h,z=f(_,_),P=f(h,h);return(0,c.F)(e=>{let i=R.current;if(i.uniforms.time.value=e.clock.elapsedTime,i.uniforms.buffer.value===P.texture&&!t){var s;(k=null==(s=i.__r3f)||null==(s=s.parent)?void 0:s.object)&&i.visible&&0!==i.uniforms._transmission.value&&(M=e.gl.toneMapping,E=e.scene.background,C=i.envMapIntensity,e.gl.toneMapping=l.y_p,y&&(e.scene.background=y),k.material=T,n&&(e.gl.setRenderTarget(z),e.gl.render(e.scene,e.camera),k.material=i,i.uniforms.buffer.value=z.texture,i.uniforms.thickness.value=a,i.side=l.hsX,r!==l.hsX&&(i.needsUpdate=!0),i.envMapIntensity=v),e.gl.setRenderTarget(P),e.gl.render(e.scene,e.camera),k.material=i,i.uniforms.thickness.value=o,i.side=r,n&&r!==l.hsX&&(i.needsUpdate=!0),i.uniforms.buffer.value=P.texture,i.envMapIntensity=C,e.scene.background=E,e.gl.setRenderTarget(null),e.gl.toneMapping=M)}}),u.useImperativeHandle(S,()=>R.current,[]),u.createElement("meshTransmissionMaterial",(0,s.A)({args:[p,t],ref:R},w,{buffer:e||P.texture,_transmission:i,anisotropicBlur:null!=x?x:b,transmission:t?i:0,thickness:o,side:r}))})},9991:(e,t,n)=>{var r=n(4467),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,a=r.useEffect,s=r.useLayoutEffect,l=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var c="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return s(function(){i.value=n,i.getSnapshot=t,u(i)&&c({inst:i})},[e,n,t]),a(function(){return u(i)&&c({inst:i}),e(function(){u(i)&&c({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c}}]);