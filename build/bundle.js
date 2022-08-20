!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).Notifications={})}(this,(function(t){"use strict";function n(){}const e=t=>t;function o(t){return t()}function i(){return Object.create(null)}function r(t){t.forEach(o)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,e,o){t.$$.on_destroy.push(function(t,...e){if(null==t)return n;const o=t.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function l(t,n,e,o){if(t){const i=f(t,n,e,o);return t[0](i)}}function f(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function a(t,n,e,o){if(t[2]&&o){const i=t[2](o(e));if(void 0===n.dirty)return i;if("object"==typeof i){const t=[],e=Math.max(n.dirty.length,i.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|i[o];return t}return n.dirty|i}return n.dirty}function d(t,n,e,o,i,r){if(i){const c=f(n,e,o,r);t.p(c,i)}}function h(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function p(t){return null==t?"":t}const $="undefined"!=typeof window;let m=$?()=>window.performance.now():()=>Date.now(),g=$?t=>requestAnimationFrame(t):n;const y=new Set;function b(t){y.forEach((n=>{n.c(t)||(y.delete(n),n.f())})),0!==y.size&&g(b)}function v(t){let n;return 0===y.size&&g(b),{promise:new Promise((e=>{y.add(n={c:t,f:e})})),abort(){y.delete(n)}}}function w(t,n){t.appendChild(n)}function x(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function _(t){const n=N("style");return function(t,n){w(t.head||t,n)}(x(t),n),n.sheet}function k(t,n,e){t.insertBefore(n,e||null)}function S(t){t.parentNode.removeChild(t)}function N(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function z(){return E(" ")}function R(){return E("")}function M(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function j(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}const A=new Map;let C,O=0;function P(t,n,e,o,i,r,c,s=0){const u=16.666/o;let l="{\n";for(let t=0;t<=1;t+=u){const o=n+(e-n)*r(t);l+=100*t+`%{${c(o,1-o)}}\n`}const f=l+`100% {${c(e,1-e)}}\n}`,a=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(f)}_${s}`,d=x(t),{stylesheet:h,rules:p}=A.get(d)||function(t,n){const e={stylesheet:_(n),rules:{}};return A.set(t,e),e}(d,t);p[a]||(p[a]=!0,h.insertRule(`@keyframes ${a} ${f}`,h.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${a} ${o}ms linear ${i}ms 1 both`,O+=1,a}function T(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),i=e.length-o.length;i&&(t.style.animation=o.join(", "),O-=i,O||g((()=>{O||(A.forEach((t=>{const{stylesheet:n}=t;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.rules={}})),A.clear())})))}function D(t){C=t}function I(){if(!C)throw new Error("Function called outside component initialization");return C}const q=[],B=[],F=[],L=[],G=Promise.resolve();let H=!1;function J(t){F.push(t)}const K=new Set;let Q,U=0;function V(){const t=C;do{for(;U<q.length;){const t=q[U];U++,D(t),W(t.$$)}for(D(null),q.length=0,U=0;B.length;)B.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];K.has(n)||(K.add(n),n())}F.length=0}while(q.length);for(;L.length;)L.pop()();H=!1,K.clear(),D(t)}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}function X(){return Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q}function Y(t,n,e){t.dispatchEvent(function(t,n,{bubbles:e=!1,cancelable:o=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e,o,n),i}(`${n?"intro":"outro"}${e}`))}const Z=new Set;let tt;function nt(){tt={r:0,c:[],p:tt}}function et(){tt.r||r(tt.c),tt=tt.p}function ot(t,n){t&&t.i&&(Z.delete(t),t.i(n))}function it(t,n,e,o){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push((()=>{Z.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}const rt={duration:0};function ct(t,n){it(t,1,1,(()=>{n.delete(t.key)}))}function st(t){t&&t.c()}function ut(t,n,e,i){const{fragment:s,on_mount:u,on_destroy:l,after_update:f}=t.$$;s&&s.m(n,e),i||J((()=>{const n=u.map(o).filter(c);l?l.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(J)}function lt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){-1===t.$$.dirty[0]&&(q.push(t),H||(H=!0,G.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function at(t,e,o,c,s,u,l,f=[-1]){const a=C;D(t);const d=t.$$={fragment:null,ctx:null,props:u,update:n,not_equal:s,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:i(),dirty:f,skip_bound:!1,root:e.target||a.$$.root};l&&l(d.root);let h=!1;if(d.ctx=o?o(t,e.props||{},((n,e,...o)=>{const i=o.length?o[0]:e;return d.ctx&&s(d.ctx[n],d.ctx[n]=i)&&(!d.skip_bound&&d.bound[n]&&d.bound[n](i),h&&ft(t,n)),e})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(S)}else d.fragment&&d.fragment.c();e.intro&&ot(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),V()}D(a)}class dt{$destroy(){lt(this,1),this.$destroy=n}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ht={subscribe:null,addNotification:null,removeNotification:null,clearNotifications:null},pt=()=>{return t=ht,I().$$.context.get(t);var t};function $t(t){let n,e,o;var i=t[0];function r(t){return{props:{notification:t[1],withoutStyles:t[2],onRemove:t[3]}}}return i&&(n=new i(r(t))),{c(){n&&st(n.$$.fragment),e=R()},m(t,i){n&&ut(n,t,i),k(t,e,i),o=!0},p(t,[o]){const c={};if(2&o&&(c.notification=t[1]),4&o&&(c.withoutStyles=t[2]),i!==(i=t[0])){if(n){nt();const t=n;it(t.$$.fragment,1,0,(()=>{lt(t,1)})),et()}i?(n=new i(r(t)),st(n.$$.fragment),ot(n.$$.fragment,1),ut(n,e.parentNode,e)):n=null}else i&&n.$set(c)},i(t){o||(n&&ot(n.$$.fragment,t),o=!0)},o(t){n&&it(n.$$.fragment,t),o=!1},d(t){t&&S(e),n&&lt(n,t)}}}function mt(t,n,e){let{item:o}=n,{notification:i={}}=n,{withoutStyles:r=!1}=n;const{removeNotification:c}=pt(),{id:s,removeAfter:u}=i,l=()=>c(s);let f=null;var a;return u&&(f=setTimeout(l,u)),a=()=>{u&&f&&clearTimeout(f)},I().$$.on_destroy.push(a),t.$$set=t=>{"item"in t&&e(0,o=t.item),"notification"in t&&e(1,i=t.notification),"withoutStyles"in t&&e(2,r=t.withoutStyles)},[o,i,r,l]}class gt extends dt{constructor(t){super(),at(this,t,mt,$t,s,{item:0,notification:1,withoutStyles:2})}}function yt(t,{delay:n=0,duration:o=400,easing:i=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:i,css:t=>"opacity: "+t*r}}function bt(t){let o,i,s,u,f,$,g,y,b,x;const _=t[6].default,R=l(_,t,t[5],null),j=R||function(t){let e;return{c(){e=E(t[1])},m(t,n){k(t,e,n)},p:n,d(t){t&&S(e)}}}(t);return{c(){o=N("div"),i=N("div"),j&&j.c(),s=z(),u=N("button"),f=E("×"),M(i,"class",p(t[2]("content"))+" svelte-ue5kxf"),M(u,"class",p(t[2]("button"))+" svelte-ue5kxf"),M(u,"aria-label","delete notification"),M(o,"class",p(t[2]())+" svelte-ue5kxf"),M(o,"role","status"),M(o,"aria-live","polite")},m(n,e){var r,l,a,d;k(n,o,e),w(o,i),j&&j.m(i,null),w(o,s),w(o,u),w(u,f),y=!0,b||(l="click",a=function(){c(t[0])&&t[0].apply(this,arguments)},(r=u).addEventListener(l,a,d),x=()=>r.removeEventListener(l,a,d),b=!0)},p(n,[e]){t=n,R&&R.p&&(!y||32&e)&&d(R,_,t,t[5],y?a(_,t[5],e,null):h(t[5]),null)},i(t){y||(ot(j,t),J((()=>{g&&g.end(1),$=function(t,o,i){let r,s,u=o(t,i),l=!1,f=0;function a(){r&&T(t,r)}function d(){const{delay:o=0,duration:i=300,easing:c=e,tick:d=n,css:h}=u||rt;h&&(r=P(t,0,1,i,o,c,h,f++)),d(0,1);const p=m()+o,$=p+i;s&&s.abort(),l=!0,J((()=>Y(t,!0,"start"))),s=v((n=>{if(l){if(n>=$)return d(1,0),Y(t,!0,"end"),a(),l=!1;if(n>=p){const t=c((n-p)/i);d(t,1-t)}}return l}))}let h=!1;return{start(){h||(h=!0,T(t),c(u)?(u=u(),X().then(d)):d())},invalidate(){h=!1},end(){l&&(a(),l=!1)}}}(o,yt,{}),$.start()})),y=!0)},o(t){it(j,t),$&&$.invalidate(),g=function(t,o,i){let s,u=o(t,i),l=!0;const f=tt;function a(){const{delay:o=0,duration:i=300,easing:c=e,tick:a=n,css:d}=u||rt;d&&(s=P(t,1,0,i,o,c,d));const h=m()+o,p=h+i;J((()=>Y(t,!1,"start"))),v((n=>{if(l){if(n>=p)return a(0,1),Y(t,!1,"end"),--f.r||r(f.c),!1;if(n>=h){const t=c((n-h)/i);a(1-t,t)}}return l}))}return f.r+=1,c(u)?X().then((()=>{u=u(),a()})):a(),{end(n){n&&u.tick&&u.tick(1,0),l&&(s&&T(t,s),l=!1)}}}(o,yt,{}),y=!1},d(t){t&&S(o),j&&j.d(t),t&&g&&g.end(),b=!1,x()}}}function vt(t,n,e){let{$$slots:o={},$$scope:i}=n,{notification:r={}}=n,{withoutStyles:c=!1}=n,{onRemove:s=null}=n;const{text:u,type:l}=r;return t.$$set=t=>{"notification"in t&&e(3,r=t.notification),"withoutStyles"in t&&e(4,c=t.withoutStyles),"onRemove"in t&&e(0,s=t.onRemove),"$$scope"in t&&e(5,i=t.$$scope)},[s,u,t=>{const n=t?`-${t}`:"";return`notification${n}${c?"":` default-notification-style${n}`}${l&&!t?` default-notification-${l}`:""}`},r,c,i,o]}class wt extends dt{constructor(t){super(),at(this,t,vt,bt,s,{notification:3,withoutStyles:4,onRemove:0})}}const xt=[];const _t=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"];var kt=(()=>{const t=function(t,e=n){let o;const i=new Set;function r(n){if(s(t,n)&&(t=n,o)){const n=!xt.length;for(const n of i)n[1](),xt.push(n,t);if(n){for(let t=0;t<xt.length;t+=2)xt[t][0](xt[t+1]);xt.length=0}}}return{set:r,update:function(n){r(n(t))},subscribe:function(c,s=n){const u=[c,s];return i.add(u),1===i.size&&(o=e(r)||n),c(t),()=>{i.delete(u),0===i.size&&(o(),o=null)}}}}([]);return{subscribe:t.subscribe,addNotification:n=>((t,n)=>{if(!t)return;const{update:e}=n,o={id:`${(new Date).getTime()}-${Math.floor(9999*Math.random())}`,position:"bottom-center",text:"",...t};o.text&&"string"==typeof o.text&&_t.includes(t.position)&&e((t=>o.position.includes("top-")?[o,...t]:[...t,o]))})(n,t),removeNotification:n=>((t,{update:n})=>{t&&n((n=>n.filter((({id:n})=>n!==t))))})(n,t),clearNotifications:()=>(t=>t.set([]))(t)}})();function St(t,n,e){const o=t.slice();return o[7]=n[e],o}function Nt(t,n,e){const o=t.slice();return o[10]=n[e],o}function Et(t){let n,e;return n=new gt({props:{notification:t[10],withoutStyles:t[1],item:t[0]||wt}}),{c(){st(n.$$.fragment)},m(t,o){ut(n,t,o),e=!0},p(t,e){const o={};8&e&&(o.notification=t[10]),2&e&&(o.withoutStyles=t[1]),1&e&&(o.item=t[0]||wt),n.$set(o)},i(t){e||(ot(n.$$.fragment,t),e=!0)},o(t){it(n.$$.fragment,t),e=!1},d(t){lt(n,t)}}}function zt(t,n){let e,o,i,r=n[10].position===n[7]&&Et(n);return{key:t,first:null,c(){e=R(),r&&r.c(),o=R(),this.first=e},m(t,n){k(t,e,n),r&&r.m(t,n),k(t,o,n),i=!0},p(t,e){(n=t)[10].position===n[7]?r?(r.p(n,e),8&e&&ot(r,1)):(r=Et(n),r.c(),ot(r,1),r.m(o.parentNode,o)):r&&(nt(),it(r,1,1,(()=>{r=null})),et())},i(t){i||(ot(r),i=!0)},o(t){it(r),i=!1},d(t){t&&S(e),r&&r.d(t),t&&S(o)}}}function Rt(t){let n,e,o,i=[],r=new Map,c=t[3];const s=t=>t[10].id;for(let n=0;n<c.length;n+=1){let e=Nt(t,c,n),o=s(e);r.set(o,i[n]=zt(o,e))}return{c(){n=N("div");for(let t=0;t<i.length;t+=1)i[t].c();e=z(),M(n,"class",p(t[4](t[7]))+" svelte-inamvt"),j(n,"z-index",t[2],!1)},m(t,r){k(t,n,r);for(let t=0;t<i.length;t+=1)i[t].m(n,null);w(n,e),o=!0},p(t,o){11&o&&(c=t[3],nt(),i=function(t,n,e,o,i,r,c,s,u,l,f,a){let d=t.length,h=r.length,p=d;const $={};for(;p--;)$[t[p].key]=p;const m=[],g=new Map,y=new Map;for(p=h;p--;){const t=a(i,r,p),s=e(t);let u=c.get(s);u?o&&u.p(t,n):(u=l(s,t),u.c()),g.set(s,m[p]=u),s in $&&y.set(s,Math.abs(p-$[s]))}const b=new Set,v=new Set;function w(t){ot(t,1),t.m(s,f),c.set(t.key,t),f=t.first,h--}for(;d&&h;){const n=m[h-1],e=t[d-1],o=n.key,i=e.key;n===e?(f=n.first,d--,h--):g.has(i)?!c.has(o)||b.has(o)?w(n):v.has(i)?d--:y.get(o)>y.get(i)?(v.add(o),w(n)):(b.add(i),d--):(u(e,c),d--)}for(;d--;){const n=t[d];g.has(n.key)||u(n,c)}for(;h;)w(m[h-1]);return m}(i,o,s,1,t,c,r,n,ct,zt,e,Nt),et()),4&o&&j(n,"z-index",t[2],!1)},i(t){if(!o){for(let t=0;t<c.length;t+=1)ot(i[t]);o=!0}},o(t){for(let t=0;t<i.length;t+=1)it(i[t]);o=!1},d(t){t&&S(n);for(let t=0;t<i.length;t+=1)i[t].d()}}}function Mt(t){let n,e,o;const i=t[6].default,r=l(i,t,t[5],null);let c=_t,s=[];for(let n=0;n<c.length;n+=1)s[n]=Rt(St(t,c,n));const u=t=>it(s[t],1,1,(()=>{s[t]=null}));return{c(){r&&r.c(),n=z(),e=N("div");for(let t=0;t<s.length;t+=1)s[t].c();M(e,"class","notifications")},m(t,i){r&&r.m(t,i),k(t,n,i),k(t,e,i);for(let t=0;t<s.length;t+=1)s[t].m(e,null);o=!0},p(t,[n]){if(r&&r.p&&(!o||32&n)&&d(r,i,t,t[5],o?a(i,t[5],n,null):h(t[5]),null),31&n){let o;for(c=_t,o=0;o<c.length;o+=1){const i=St(t,c,o);s[o]?(s[o].p(i,n),ot(s[o],1)):(s[o]=Rt(i),s[o].c(),ot(s[o],1),s[o].m(e,null))}for(nt(),o=c.length;o<s.length;o+=1)u(o);et()}},i(t){if(!o){ot(r,t);for(let t=0;t<c.length;t+=1)ot(s[t]);o=!0}},o(t){it(r,t),s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)it(s[t]);o=!1},d(t){r&&r.d(t),t&&S(n),t&&S(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(s,t)}}}function jt(t,n,e){let o;u(t,kt,(t=>e(3,o=t)));let{$$slots:i={},$$scope:r}=n,{item:c=null}=n,{withoutStyles:s=!1}=n,{zIndex:l=null}=n;return function(t,n){I().$$.context.set(t,n)}(ht,kt),t.$$set=t=>{"item"in t&&e(0,c=t.item),"withoutStyles"in t&&e(1,s=t.withoutStyles),"zIndex"in t&&e(2,l=t.zIndex),"$$scope"in t&&e(5,r=t.$$scope)},[c,s,l,o,(t="")=>`position-${t}${s?"":` default-position-style-${t}`}`,r,i]}t.default=class extends dt{constructor(t){super(),at(this,t,jt,Mt,s,{item:0,withoutStyles:1,zIndex:2})}},t.getNotificationsContext=pt,Object.defineProperty(t,"__esModule",{value:!0})}));
