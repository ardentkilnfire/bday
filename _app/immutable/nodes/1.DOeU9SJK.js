import{b as _,t as h}from"../chunks/disclose-version.ClRmIJWn.js";import{D as $,F as i,w as x,G as w,I as f,J as d,K as y,L as k,y as a,M as A,N as B,O as C,r as D,P as E,A as F,v as G,B as b,C as p,Q as I}from"../chunks/runtime.CQvpGMFJ.js";import{s as l}from"../chunks/render.CxS1WH0b.js";import{s as J}from"../chunks/entry.7Rdz2j15.js";function K(){const s=x,e=s.l.u;e&&(e.b.length&&$(()=>{g(s),f(e.b)}),i(()=>{const t=w(()=>e.m.map(k));return()=>{for(const r of t)typeof r=="function"&&r()}}),e.a.length&&i(()=>{g(s),f(e.a)}))}function g(s){if(s.l.s)for(const e of s.l.s)d(e);y(s.s)}function L(s,e,t){if(s==null)return e(void 0),a;const r=s.subscribe(e,t);return r.unsubscribe?()=>r.unsubscribe():r}function M(s,e,t){const r=t[e]??(t[e]={store:null,source:B(void 0),unsubscribe:a});if(r.store!==s)if(r.unsubscribe(),r.store=s??null,s==null)r.source.v=void 0,r.unsubscribe=a;else{var u=!0;r.unsubscribe=L(s,n=>{u?r.source.v=n:C(r.source,n)}),u=!1}return d(r.source)}function N(){const s={};return A(()=>{for(var e in s)s[e].unsubscribe()}),s}const O=()=>{const s=J;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return O().page.subscribe(s)}};var Q=h("<h1> </h1> <p> </p>",1);function H(s,e){D(e,!1);const t=N(),r=()=>M(P,"$page",t);K();var u=Q(),n=E(u),m=b(n);p(n);var o=I(n,2),v=b(o);p(o),F(()=>{var c;l(m,r().status),l(v,(c=r().error)==null?void 0:c.message)}),_(s,u),G()}export{H as component};