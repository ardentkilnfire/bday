import{S as N,R as k,T as C,U as h,V as G,O as P,W as c,X as T,J as b,u as K,Y as V,Z as $,i as z,x as H,t as x,h as J,_ as W,a0 as X,e as Q,s as q,a1 as M,q as U,a2 as Y,f as p,E as ee,a3 as ne,a4 as ae,a5 as re,a6 as te,a7 as fe,a8 as ie,a9 as se,G as Z,aa as B,ab as ue,N as le,ac as de,w as D,F as ve}from"./runtime.CQvpGMFJ.js";function O(r,u=null,m){if(typeof r!="object"||r===null||N in r)return r;const y=$(r);if(y!==k&&y!==C)return r;var f=new Map,l=z(r),o=h(0);l&&f.set("length",h(r.length));var _;return new Proxy(r,{defineProperty(a,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&G();var t=f.get(e);return t===void 0?(t=h(n.value),f.set(e,t)):P(t,O(n.value,_)),!0},deleteProperty(a,e){var n=f.get(e);return n===void 0?e in a&&f.set(e,h(c)):(P(n,c),F(o)),!0},get(a,e,n){var d;if(e===N)return r;var t=f.get(e),i=e in a;if(t===void 0&&(!i||(d=T(a,e))!=null&&d.writable)&&(t=h(O(i?a[e]:c,_)),f.set(e,t)),t!==void 0){var s=b(t);return s===c?void 0:s}return Reflect.get(a,e,n)},getOwnPropertyDescriptor(a,e){var n=Reflect.getOwnPropertyDescriptor(a,e);if(n&&"value"in n){var t=f.get(e);t&&(n.value=b(t))}else if(n===void 0){var i=f.get(e),s=i==null?void 0:i.v;if(i!==void 0&&s!==c)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return n},has(a,e){var s;if(e===N)return!0;var n=f.get(e),t=n!==void 0&&n.v!==c||Reflect.has(a,e);if(n!==void 0||K!==null&&(!t||(s=T(a,e))!=null&&s.writable)){n===void 0&&(n=h(t?O(a[e],_):c),f.set(e,n));var i=b(n);if(i===c)return!1}return t},set(a,e,n,t){var g;var i=f.get(e),s=e in a;if(l&&e==="length")for(var d=n;d<i.v;d+=1){var R=f.get(d+"");R!==void 0?P(R,c):d in a&&(R=h(c),f.set(d+"",R))}i===void 0?(!s||(g=T(a,e))!=null&&g.writable)&&(i=h(void 0),P(i,O(n,_)),f.set(e,i)):(s=i.v!==c,P(i,O(n,_)));var I=Reflect.getOwnPropertyDescriptor(a,e);if(I!=null&&I.set&&I.set.call(t,n),!s){if(l&&typeof e=="string"){var S=f.get("length"),w=Number(e);Number.isInteger(w)&&w>=S.v&&P(S,w+1)}F(o)}return!0},ownKeys(a){b(o);var e=Reflect.ownKeys(a).filter(i=>{var s=f.get(i);return s===void 0||s.v!==c});for(var[n,t]of f)t.v!==c&&!(n in a)&&e.push(n);return e},setPrototypeOf(){V()}})}function F(r,u=1){P(r,r.v+u)}function _e(r){throw new Error("lifecycle_outside_component")}function ye(r,u,m,y=null,f=!1){x&&J();var l=r,o=null,_=null,a=null,e=f?ee:0;H(()=>{if(a===(a=!!u()))return;let n=!1;if(x){const t=l.data===W;a===t&&(l=X(),Q(l),q(!1),n=!0)}a?(o?M(o):o=U(()=>m(l)),_&&Y(_,()=>{_=null})):(_?M(_):y&&(_=U(()=>y(l))),o&&Y(o,()=>{o=null})),n&&q(!0)},e),x&&(l=p)}function be(r,u,m,y){var L;var f=(m&fe)!==0,l=(m&ie)!==0,o=(m&se)!==0,_=(m&de)!==0,a=r[u],e=(L=T(r,u))==null?void 0:L.set,n=y,t=!0,i=!1,s=()=>(i=!0,t&&(t=!1,_?n=Z(y):n=y),n);a===void 0&&y!==void 0&&(e&&l&&ne(),a=s(),e&&e(a));var d;if(l)d=()=>{var v=r[u];return v===void 0?s():(t=!0,i=!1,v)};else{var R=(f?B:ue)(()=>r[u]);R.f|=ae,d=()=>{var v=b(R);return v!==void 0&&(n=void 0),v===void 0?n:v}}if(!(m&re))return d;if(e){var I=r.$$legacy;return function(v,E){return arguments.length>0?((!l||!E||I)&&e(E?d():v),v):d()}}var S=!1,w=le(a),g=B(()=>{var v=d(),E=b(w);return S?(S=!1,E):w.v=v});return f||(g.equals=te),function(v,E){var j=b(g);if(arguments.length>0){const A=E?b(g):l&&o?O(v):v;return g.equals(A)||(S=!0,P(w,A),i&&n!==void 0&&(n=A),b(g)),v}return j}}function me(r){D===null&&_e(),D.l!==null?ce(D).m.push(r):ve(()=>{const u=Z(r);if(typeof u=="function")return u})}function ce(r){var u=r.l;return u.u??(u.u={a:[],b:[],m:[]})}export{O as a,ye as i,me as o,be as p};
