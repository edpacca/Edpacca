import{S as y,i as g,s as E,e as d,b as m,Q as h,h as f,J as $,k as b,q as i,l as k,m as v,r as u,N as _,u as p}from"../chunks/index.bbf2decf.js";import{p as q}from"../chunks/stores.e2f81b10.js";function H(n){let t,o=n[0].status+"",s,r;return{c(){t=b("h1"),s=i(o),r=i(": an error occured")},l(e){t=k(e,"H1",{});var a=v(t);s=u(a,o),r=u(a,": an error occured"),a.forEach(f)},m(e,a){m(e,t,a),_(t,s),_(t,r)},p(e,a){a&1&&o!==(o=e[0].status+"")&&p(s,o)},d(e){e&&f(t)}}}function N(n){let t,o=n[0].status+"",s,r,e=n[0].error.message+"",a;return{c(){t=b("h1"),s=i(o),r=i(": "),a=i(e)},l(c){t=k(c,"H1",{});var l=v(t);s=u(l,o),r=u(l,": "),a=u(l,e),l.forEach(f)},m(c,l){m(c,t,l),_(t,s),_(t,r),_(t,a)},p(c,l){l&1&&o!==(o=c[0].status+"")&&p(s,o),l&1&&e!==(e=c[0].error.message+"")&&p(a,e)},d(c){c&&f(t)}}}function S(n){let t;function o(e,a){return e[0].error?N:H}let s=o(n),r=s(n);return{c(){r.c(),t=d()},l(e){r.l(e),t=d()},m(e,a){r.m(e,a),m(e,t,a)},p(e,[a]){s===(s=o(e))&&r?r.p(e,a):(r.d(1),r=s(e),r&&(r.c(),r.m(t.parentNode,t)))},i:h,o:h,d(e){r.d(e),e&&f(t)}}}function C(n,t,o){let s;return $(n,q,r=>o(0,s=r)),[s]}class j extends y{constructor(t){super(),g(this,t,C,S,E,{})}}export{j as component};
