function U(){}const pe=e=>e;function st(e,t){for(const n in t)e[n]=t[n];return e}function Xe(e){return e()}function Te(){return Object.create(null)}function B(e){e.forEach(Xe)}function X(e){return typeof e=="function"}function jt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let de;function Rt(e,t){return de||(de=document.createElement("a")),de.href=t,e===de.href}function fe(e,t){return e!=e?t==t:e!==t}function rt(e){return Object.keys(e).length===0}function lt(e,...t){if(e==null)return U;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Dt(e){let t;return lt(e,n=>t=n)(),t}function Ot(e,t,n,i){if(e){const s=Ye(e,t,n,i);return e[0](s)}}function Ye(e,t,n,i){return e[1]&&i?st(n.ctx.slice(),e[1](i(t))):n.ctx}function Wt(e,t,n,i){if(e[2]&&i){const s=e[2](i(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const r=[],l=Math.max(t.dirty.length,s.length);for(let a=0;a<l;a+=1)r[a]=t.dirty[a]|s[a];return r}return t.dirty|s}return t.dirty}function Bt(e,t,n,i,s,r){if(s){const l=Ye(t,n,i,r);e.p(l,s)}}function Ft(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function Ze(e){return e&&X(e.destroy)?e.destroy:U}function Vt(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const $e=typeof window<"u";let ye=$e?()=>window.performance.now():()=>Date.now(),Se=$e?e=>requestAnimationFrame(e):U;const ee=new Set;function xe(e){ee.forEach(t=>{t.c(e)||(ee.delete(t),t.f())}),ee.size!==0&&Se(xe)}function we(e){let t;return ee.size===0&&Se(xe),{promise:new Promise(n=>{ee.add(t={c:e,f:n})}),abort(){ee.delete(t)}}}const Ht=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function P(e,t){e.appendChild(t)}function et(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function at(e){const t=L("style");return ot(et(e),t),t.sheet}function ot(e,t){return P(e.head||e,t),t.sheet}function j(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function Gt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function L(e){return document.createElement(e)}function ft(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function ne(e){return document.createTextNode(e)}function q(){return ne(" ")}function Ee(){return ne("")}function re(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Jt(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Kt(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function w(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ut(e){return Array.from(e.childNodes)}function ve(e,t){t=""+t,e.data!==t&&(e.data=t)}function Qt(e,t){e.value=t??""}function Xt(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Yt(e,t,n){for(let i=0;i<e.options.length;i+=1){const s=e.options[i];if(s.__value===t){s.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Zt(e){const t=e.querySelector(":checked");return t&&t.__value}let he;function ct(){if(he===void 0){he=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{he=!0}}return he}function $t(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=L("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=ct();let r;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=re(window,"message",l=>{l.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{r=re(i.contentWindow,"resize",t),t()}),P(e,i),()=>{(s||r&&i.contentWindow)&&r(),T(i)}}function G(e,t,n){e.classList[n?"add":"remove"](t)}function dt(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,i,t),s}class xt{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=ft(n.nodeName):this.e=L(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)j(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(T)}}const _e=new Map;let ge=0;function ht(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function mt(e,t){const n={stylesheet:at(t),rules:{}};return _e.set(e,n),n}function le(e,t,n,i,s,r,l,a=0){const c=16.666/i;let d=`{
`;for(let _=0;_<=1;_+=c){const y=t+(n-t)*r(_);d+=_*100+`%{${l(y,1-y)}}
`}const g=d+`100% {${l(n,1-n)}}
}`,u=`__svelte_${ht(g)}_${a}`,o=et(e),{stylesheet:f,rules:m}=_e.get(o)||mt(o,e);m[u]||(m[u]=!0,f.insertRule(`@keyframes ${u} ${g}`,f.cssRules.length));const h=e.style.animation||"";return e.style.animation=`${h?`${h}, `:""}${u} ${i}ms linear ${s}ms 1 both`,ge+=1,u}function ae(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),s=n.length-i.length;s&&(e.style.animation=i.join(", "),ge-=s,ge||_t())}function _t(){Se(()=>{ge||(_e.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&T(t)}),_e.clear())})}function en(e,t,n,i){if(!t)return U;const s=e.getBoundingClientRect();if(t.left===s.left&&t.right===s.right&&t.top===s.top&&t.bottom===s.bottom)return U;const{delay:r=0,duration:l=300,easing:a=pe,start:c=ye()+r,end:d=c+l,tick:g=U,css:u}=n(e,{from:t,to:s},i);let o=!0,f=!1,m;function h(){u&&(m=le(e,0,1,l,r,a,u)),r||(f=!0)}function _(){u&&ae(e,m),o=!1}return we(y=>{if(!f&&y>=c&&(f=!0),f&&y>=d&&(g(1,0),_()),!o)return!1;if(f){const C=y-c,v=0+1*a(C/l);g(v,1-v)}return!0}),h(),g(0,1),_}function tn(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:i}=t,s=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=i,gt(e,s)}}function gt(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const i=getComputedStyle(e),s=i.transform==="none"?"":i.transform;e.style.transform=`${s} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}let oe;function se(e){oe=e}function Ae(){if(!oe)throw new Error("Function called outside component initialization");return oe}function nn(e){Ae().$$.on_mount.push(e)}function sn(e){Ae().$$.after_update.push(e)}function rn(e){Ae().$$.on_destroy.push(e)}const x=[],qe=[];let te=[];const Pe=[],tt=Promise.resolve();let Me=!1;function nt(){Me||(Me=!0,tt.then(it))}function ln(){return nt(),tt}function Q(e){te.push(e)}function an(e){Pe.push(e)}const Ce=new Set;let $=0;function it(){if($!==0)return;const e=oe;do{try{for(;$<x.length;){const t=x[$];$++,se(t),bt(t.$$)}}catch(t){throw x.length=0,$=0,t}for(se(null),x.length=0,$=0;qe.length;)qe.pop()();for(let t=0;t<te.length;t+=1){const n=te[t];Ce.has(n)||(Ce.add(n),n())}te.length=0}while(x.length);for(;Pe.length;)Pe.pop()();Me=!1,Ce.clear(),se(e)}function bt(e){if(e.fragment!==null){e.update(),B(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}function pt(e){const t=[],n=[];te.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),te=t}let ie;function Le(){return ie||(ie=Promise.resolve(),ie.then(()=>{ie=null})),ie}function K(e,t,n){e.dispatchEvent(dt(`${t?"intro":"outro"}${n}`))}const me=new Set;let O;function V(){O={r:0,c:[],p:O}}function H(){O.r||B(O.c),O=O.p}function k(e,t){e&&e.i&&(me.delete(e),e.i(t))}function M(e,t,n,i){if(e&&e.o){if(me.has(e))return;me.add(e),O.c.push(()=>{me.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const Ue={duration:0};function on(e,t,n){const i={direction:"in"};let s=t(e,n,i),r=!1,l,a,c=0;function d(){l&&ae(e,l)}function g(){const{delay:o=0,duration:f=300,easing:m=pe,tick:h=U,css:_}=s||Ue;_&&(l=le(e,0,1,f,o,m,_,c++)),h(0,1);const y=ye()+o,C=y+f;a&&a.abort(),r=!0,Q(()=>K(e,!0,"start")),a=we(v=>{if(r){if(v>=C)return h(1,0),K(e,!0,"end"),d(),r=!1;if(v>=y){const E=m((v-y)/f);h(E,1-E)}}return r})}let u=!1;return{start(){u||(u=!0,ae(e),X(s)?(s=s(i),Le().then(g)):g())},invalidate(){u=!1},end(){r&&(d(),r=!1)}}}function fn(e,t,n){const i={direction:"out"};let s=t(e,n,i),r=!0,l;const a=O;a.r+=1;function c(){const{delay:d=0,duration:g=300,easing:u=pe,tick:o=U,css:f}=s||Ue;f&&(l=le(e,1,0,g,d,u,f));const m=ye()+d,h=m+g;Q(()=>K(e,!1,"start")),we(_=>{if(r){if(_>=h)return o(0,1),K(e,!1,"end"),--a.r||B(a.c),!1;if(_>=m){const y=u((_-m)/g);o(1-y,y)}}return r})}return X(s)?Le().then(()=>{s=s(i),c()}):c(),{end(d){d&&s.tick&&s.tick(1,0),r&&(l&&ae(e,l),r=!1)}}}function un(e,t,n,i){const s={direction:"both"};let r=t(e,n,s),l=i?0:1,a=null,c=null,d=null;function g(){d&&ae(e,d)}function u(f,m){const h=f.b-l;return m*=Math.abs(h),{a:l,b:f.b,d:h,duration:m,start:f.start,end:f.start+m,group:f.group}}function o(f){const{delay:m=0,duration:h=300,easing:_=pe,tick:y=U,css:C}=r||Ue,v={start:ye()+m,b:f};f||(v.group=O,O.r+=1),a||c?c=v:(C&&(g(),d=le(e,l,f,h,m,_,C)),f&&y(0,1),a=u(v,h),Q(()=>K(e,f,"start")),we(E=>{if(c&&E>c.start&&(a=u(c,h),c=null,K(e,a.b,"start"),C&&(g(),d=le(e,l,a.b,a.duration,0,_,r.css))),a){if(E>=a.end)y(l=a.b,1-l),K(e,a.b,"end"),c||(a.b?g():--a.group.r||B(a.group.c)),a=null;else if(E>=a.start){const N=E-a.start;l=a.a+a.d*_(N/a.duration),y(l,1-l)}}return!!(a||c)}))}return{run(f){X(r)?Le().then(()=>{r=r(s),o(f)}):o(f)},end(){g(),a=c=null}}}function cn(e,t){e.d(1),t.delete(e.key)}function Ne(e,t){M(e,1,1,()=>{t.delete(e.key)})}function dn(e,t){e.f(),Ne(e,t)}function Ie(e,t,n,i,s,r,l,a,c,d,g,u){let o=e.length,f=r.length,m=o;const h={};for(;m--;)h[e[m].key]=m;const _=[],y=new Map,C=new Map,v=[];for(m=f;m--;){const A=u(s,r,m),z=n(A);let I=l.get(z);I?i&&v.push(()=>I.p(A,t)):(I=d(z,A),I.c()),y.set(z,_[m]=I),z in h&&C.set(z,Math.abs(m-h[z]))}const E=new Set,N=new Set;function F(A){k(A,1),A.m(a,g),l.set(A.key,A),g=A.first,f--}for(;o&&f;){const A=_[f-1],z=e[o-1],I=A.key,J=z.key;A===z?(g=A.first,o--,f--):y.has(J)?!l.has(I)||E.has(I)?F(A):N.has(J)?o--:C.get(I)>C.get(J)?(N.add(I),F(A)):(E.add(J),o--):(c(z,l),o--)}for(;o--;){const A=e[o];y.has(A.key)||c(A,l)}for(;f;)F(_[f-1]);return B(v),_}function hn(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function W(e){e&&e.c()}function R(e,t,n,i){const{fragment:s,after_update:r}=e.$$;s&&s.m(t,n),i||Q(()=>{const l=e.$$.on_mount.map(Xe).filter(X);e.$$.on_destroy?e.$$.on_destroy.push(...l):B(l),e.$$.on_mount=[]}),r.forEach(Q)}function D(e,t){const n=e.$$;n.fragment!==null&&(pt(n.after_update),B(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(e,t){e.$$.dirty[0]===-1&&(x.push(e),nt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(e,t,n,i,s,r,l,a=[-1]){const c=oe;se(e);const d=e.$$={fragment:null,ctx:[],props:r,update:U,not_equal:s,bound:Te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Te(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};l&&l(d.root);let g=!1;if(d.ctx=n?n(e,t.props||{},(u,o,...f)=>{const m=f.length?f[0]:o;return d.ctx&&s(d.ctx[u],d.ctx[u]=m)&&(!d.skip_bound&&d.bound[u]&&d.bound[u](m),g&&yt(e,u)),o}):[],d.update(),g=!0,B(d.before_update),d.fragment=i?i(d.ctx):!1,t.target){if(t.hydrate){const u=ut(t.target);d.fragment&&d.fragment.l(u),u.forEach(T)}else d.fragment&&d.fragment.c();t.intro&&k(e.$$.fragment),R(e,t.target,t.anchor,t.customElement),it()}se(c)}class ce{$destroy(){D(this,1),this.$destroy=U}$on(t,n){if(!X(n))return U;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!rt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function wt(e,t){function n(i){i.target instanceof Element&&!e.contains(i.target)&&t()}return document.addEventListener("click",n,{capture:!0,passive:!0}),document.addEventListener("keyup",n,{capture:!0,passive:!0}),{update(i){t=i},destroy(){document.removeEventListener("click",n,{capture:!0}),document.removeEventListener("keyup",n,{capture:!0})}}}function mn(e){return Y()+"compose.php?m="+e}function je(e){let t=Y()+"create.php?sesskey="+ke();return e&&(t+="&c="+e),t}function _n(e){return Y()+"view.php?forward=1&sesskey="+ke()+"&m="+e}function vt(){return Y()+"preferences.php"}function gn(e){return Y()+"view.php?reply=1&sesskey="+ke()+"&m="+e}function bn(e){return Y()+"view.php?replyall=1&sesskey="+ke()+"&m="+e}function be(e){var n,i,s,r,l,a,c,d;let t=Y()+"view.php?t="+e.tray;return e.courseid&&(t+="&c="+e.courseid),e.tray=="label"&&e.labelid&&(t+="&l="+e.labelid),e.messageid&&(t+="&m="+e.messageid),e.offset&&(t+="&o="+e.offset),(n=e.search)!=null&&n.content&&(t+="&q="+e.search.content),(i=e.search)!=null&&i.sendername&&(t+="&qs="+e.search.sendername),(s=e.search)!=null&&s.recipientname&&(t+="&qr="+e.search.recipientname),(r=e.search)!=null&&r.unread&&(t+="&u=1"),(l=e.search)!=null&&l.withfilesonly&&(t+="&f=1"),(a=e.search)!=null&&a.maxtime&&(t+="&d="+e.search.maxtime),(c=e.search)!=null&&c.startid&&(t+="&s="+e.search.startid),(d=e.search)!=null&&d.reverse&&(t+="&r=1"),t}function pn(){const e=new URL(window.location.href),t={tray:e.searchParams.get("t")||"inbox",courseid:parseInt(e.searchParams.get("c")||"")||void 0,labelid:parseInt(e.searchParams.get("l")||"")||void 0,messageid:parseInt(e.searchParams.get("m")||"")||void 0,offset:parseInt(e.searchParams.get("o")||"")||void 0},n={content:e.searchParams.get("q")||void 0,sendername:e.searchParams.get("qs")||void 0,recipientname:e.searchParams.get("qr")||void 0,unread:e.searchParams.get("u")=="1"||void 0,withfilesonly:e.searchParams.get("f")=="1"||void 0,maxtime:parseInt(e.searchParams.get("d")||"")||void 0,startid:parseInt(e.searchParams.get("s")||"")||void 0,reverse:e.searchParams.get("r")=="1"||void 0};return Object.values(n).some(i=>i!=null)?{...t,search:n}:t}function yn(e,t){const n=new URL(be(e));n.search!=window.location.search&&(t?window.history.replaceState(void 0,"",n.toString()):window.history.pushState(void 0,"",n.toString()))}function Y(){return window.M.cfg.wwwroot+"/local/mail/"}function ke(){return window.M.cfg.sesskey}function kt(e){let t,n,i,s=e[0].compose+"",r,l;return{c(){t=L("a"),n=L("i"),i=q(),r=ne(s),w(n,"class","icon fa fa-fw fa-edit mr-1"),w(t,"class","btn btn-primary text-truncate px-3"),w(t,"role","button"),w(t,"href",l=je(e[1]))},m(a,c){j(a,t,c),P(t,n),P(t,i),P(t,r)},p(a,[c]){c&1&&s!==(s=a[0].compose+"")&&ve(r,s),c&2&&l!==(l=je(a[1]))&&w(t,"href",l)},i:U,o:U,d(a){a&&T(t)}}}function Ct(e,t,n){let{strings:i}=t,{courseid:s=void 0}=t;return e.$$set=r=>{"strings"in r&&n(0,i=r.strings),"courseid"in r&&n(1,s=r.courseid)},[i,s]}class Et extends ce{constructor(t){super(),ue(this,t,Ct,kt,fe,{strings:0,courseid:1})}}function Pt(e,t){function n(){e.offsetWidth<e.scrollWidth?e.setAttribute("title",t):e.removeAttribute("title")}return e.style.overflow="hidden",e.style.textOverflow="ellipsis",e.style.whiteSpace="nowrap",e.addEventListener("mouseenter",n),{destroy(){e.removeEventListener("mouseenter",n,!0)}}}function Re(e){let t,n;return{c(){t=L("span"),n=ne(e[3]),w(t,"class","local-mail-menu-item-count badge")},m(i,s){j(i,t,s),P(t,n)},p(i,s){s&8&&ve(n,i[3])},d(i){i&&T(t)}}}function Mt(e){let t,n,i,s,r,l,a,c,d,g,u,o,f,m=e[3]>0&&Re(e);return{c(){t=L("a"),n=L("i"),r=q(),l=L("span"),a=ne(e[1]),d=q(),m&&m.c(),w(n,"class",i="fa "+e[0]+" fa-fw"),w(n,"aria-hidden","true"),w(n,"style",s=e[6]!=null&&!e[5]?`color: var(--local-mail-color-${e[6]}-bg, var(--local-mail-color-gray-bg));`:""),w(l,"class","flex-fill px-2"),w(t,"class","local-mail-menu-item list-group-item list-group-item-action d-flex align-items-center px-3 py-2"),w(t,"aria-current",e[5]),w(t,"aria-disabled",e[4]),w(t,"role","tab"),w(t,"href",g=be(e[2])),w(t,"style",u=e[6]!=null&&!e[5]?`color: var(--local-mail-color-${e[6]}-fg, var(--local-mail-color-gray-fg));`:""),G(t,"list-group-item-primary",e[5]),G(t,"disabled",e[4])},m(h,_){j(h,t,_),P(t,n),P(t,r),P(t,l),P(l,a),P(t,d),m&&m.m(t,null),o||(f=[Ze(c=Pt.call(null,l,e[1])),re(t,"click",e[7])],o=!0)},p(h,[_]){_&1&&i!==(i="fa "+h[0]+" fa-fw")&&w(n,"class",i),_&96&&s!==(s=h[6]!=null&&!h[5]?`color: var(--local-mail-color-${h[6]}-bg, var(--local-mail-color-gray-bg));`:"")&&w(n,"style",s),_&2&&ve(a,h[1]),c&&X(c.update)&&_&2&&c.update.call(null,h[1]),h[3]>0?m?m.p(h,_):(m=Re(h),m.c(),m.m(t,null)):m&&(m.d(1),m=null),_&32&&w(t,"aria-current",h[5]),_&16&&w(t,"aria-disabled",h[4]),_&4&&g!==(g=be(h[2]))&&w(t,"href",g),_&96&&u!==(u=h[6]!=null&&!h[5]?`color: var(--local-mail-color-${h[6]}-fg, var(--local-mail-color-gray-fg));`:"")&&w(t,"style",u),_&32&&G(t,"list-group-item-primary",h[5]),_&16&&G(t,"disabled",h[4])},i:U,o:U,d(h){h&&T(t),m&&m.d(),o=!1,B(f)}}}function Nt(e,t,n){let{icon:i}=t,{text:s}=t,{params:r}=t,{count:l=0}=t,{disabled:a=!1}=t,{active:c=!1}=t,{color:d=void 0}=t,{onClick:g=void 0}=t;const u=o=>{g&&(o.preventDefault(),g(r))};return e.$$set=o=>{"icon"in o&&n(0,i=o.icon),"text"in o&&n(1,s=o.text),"params"in o&&n(2,r=o.params),"count"in o&&n(3,l=o.count),"disabled"in o&&n(4,a=o.disabled),"active"in o&&n(5,c=o.active),"color"in o&&n(6,d=o.color),"onClick"in o&&n(8,g=o.onClick)},[i,s,r,l,a,c,d,u,g]}class Z extends ce{constructor(t){super(),ue(this,t,Nt,Mt,fe,{icon:0,text:1,params:2,count:3,disabled:4,active:5,color:6,onClick:8})}}function De(e,t,n){const i=e.slice();return i[13]=t[n],i}function Oe(e,t,n){const i=e.slice();return i[16]=t[n],i}function We(e){var i;let t,n;return t=new Z({props:{icon:"fa-star",text:e[1].starredmail,params:{tray:"starred",courseid:e[10],search:e[9]},active:((i=e[6])==null?void 0:i.tray)=="starred",onClick:e[7]}}),{c(){W(t.$$.fragment)},m(s,r){R(t,s,r),n=!0},p(s,r){var a;const l={};r&2&&(l.text=s[1].starredmail),r&1536&&(l.params={tray:"starred",courseid:s[10],search:s[9]}),r&64&&(l.active=((a=s[6])==null?void 0:a.tray)=="starred"),r&128&&(l.onClick=s[7]),t.$set(l)},i(s){n||(k(t.$$.fragment,s),n=!0)},o(s){M(t.$$.fragment,s),n=!1},d(s){D(t,s)}}}function Be(e){var i;let t,n;return t=new Z({props:{icon:"fa-paper-plane",text:e[1].sentmail,params:{tray:"sent",courseid:e[10],search:e[9]},active:((i=e[6])==null?void 0:i.tray)=="sent",onClick:e[7]}}),{c(){W(t.$$.fragment)},m(s,r){R(t,s,r),n=!0},p(s,r){var a;const l={};r&2&&(l.text=s[1].sentmail),r&1536&&(l.params={tray:"sent",courseid:s[10],search:s[9]}),r&64&&(l.active=((a=s[6])==null?void 0:a.tray)=="sent"),r&128&&(l.onClick=s[7]),t.$set(l)},i(s){n||(k(t.$$.fragment,s),n=!0)},o(s){M(t.$$.fragment,s),n=!1},d(s){D(t,s)}}}function Fe(e){var i;let t,n;return t=new Z({props:{icon:"fa-file",text:e[1].drafts,count:e[3],params:{tray:"drafts",courseid:e[10],search:e[9]},active:((i=e[6])==null?void 0:i.tray)=="drafts",onClick:e[7]}}),{c(){W(t.$$.fragment)},m(s,r){R(t,s,r),n=!0},p(s,r){var a;const l={};r&2&&(l.text=s[1].drafts),r&8&&(l.count=s[3]),r&1536&&(l.params={tray:"drafts",courseid:s[10],search:s[9]}),r&64&&(l.active=((a=s[6])==null?void 0:a.tray)=="drafts"),r&128&&(l.onClick=s[7]),t.$set(l)},i(s){n||(k(t.$$.fragment,s),n=!0)},o(s){M(t.$$.fragment,s),n=!1},d(s){D(t,s)}}}function Ve(e){var i;let t,n;return t=new Z({props:{icon:"fa-trash",text:e[1].trash,params:{tray:"trash",courseid:e[10],search:e[9]},active:((i=e[6])==null?void 0:i.tray)=="trash",onClick:e[7]}}),{c(){W(t.$$.fragment)},m(s,r){R(t,s,r),n=!0},p(s,r){var a;const l={};r&2&&(l.text=s[1].trash),r&1536&&(l.params={tray:"trash",courseid:s[10],search:s[9]}),r&64&&(l.active=((a=s[6])==null?void 0:a.tray)=="trash"),r&128&&(l.onClick=s[7]),t.$set(l)},i(s){n||(k(t.$$.fragment,s),n=!0)},o(s){M(t.$$.fragment,s),n=!1},d(s){D(t,s)}}}function He(e,t){var r,l;let n,i,s;return i=new Z({props:{icon:"fa-tag",text:t[16].name,count:t[16].unread,color:t[16].color,params:{tray:"label",labelid:t[16].id,courseid:t[10],search:t[9]},active:((r=t[6])==null?void 0:r.tray)=="label"&&((l=t[6])==null?void 0:l.labelid)==t[16].id,onClick:t[7]}}),{key:e,first:null,c(){n=Ee(),W(i.$$.fragment),this.first=n},m(a,c){j(a,n,c),R(i,a,c),s=!0},p(a,c){var g,u;t=a;const d={};c&32&&(d.text=t[16].name),c&32&&(d.count=t[16].unread),c&32&&(d.color=t[16].color),c&1568&&(d.params={tray:"label",labelid:t[16].id,courseid:t[10],search:t[9]}),c&96&&(d.active=((g=t[6])==null?void 0:g.tray)=="label"&&((u=t[6])==null?void 0:u.labelid)==t[16].id),c&128&&(d.onClick=t[7]),i.$set(d)},i(a){s||(k(i.$$.fragment,a),s=!0)},o(a){M(i.$$.fragment,a),s=!1},d(a){a&&T(n),D(i,a)}}}function Ge(e){var i,s;let t,n;return t=new Z({props:{icon:"fa-university",text:e[0].coursetraysname=="fullname"?e[13].fullname:e[13].shortname,count:e[13].unread,params:{tray:"course",courseid:e[13].id,search:e[9]},active:((i=e[6])==null?void 0:i.tray)=="course"&&((s=e[6])==null?void 0:s.courseid)==e[13].id,onClick:e[7]}}),{c(){W(t.$$.fragment)},m(r,l){R(t,r,l),n=!0},p(r,l){var c,d;const a={};l&17&&(a.text=r[0].coursetraysname=="fullname"?r[13].fullname:r[13].shortname),l&16&&(a.count=r[13].unread),l&528&&(a.params={tray:"course",courseid:r[13].id,search:r[9]}),l&80&&(a.active=((c=r[6])==null?void 0:c.tray)=="course"&&((d=r[6])==null?void 0:d.courseid)==r[13].id),l&128&&(a.onClick=r[7]),t.$set(a)},i(r){n||(k(t.$$.fragment,r),n=!0)},o(r){M(t.$$.fragment,r),n=!1},d(r){D(t,r)}}}function Je(e,t){let n,i=t[11](t[13]),s,r,l=i&&Ge(t);return{key:e,first:null,c(){n=Ee(),l&&l.c(),s=Ee(),this.first=n},m(a,c){j(a,n,c),l&&l.m(a,c),j(a,s,c),r=!0},p(a,c){t=a,c&2064&&(i=t[11](t[13])),i?l?(l.p(t,c),c&2064&&k(l,1)):(l=Ge(t),l.c(),k(l,1),l.m(s.parentNode,s)):l&&(V(),M(l,1,1,()=>{l=null}),H())},i(a){r||(k(l),r=!0)},o(a){M(l),r=!1},d(a){a&&T(n),l&&l.d(a),a&&T(s)}}}function St(e){var J;let t,n,i,s=e[12]("starred"),r,l=e[12]("sent"),a,c=e[12]("drafts"),d,g=e[12]("trash"),u,o=[],f=new Map,m,h=[],_=new Map,y;n=new Z({props:{icon:"fa-inbox",text:e[1].inbox,count:e[2],params:{tray:"inbox",courseid:e[10],search:e[9]},active:((J=e[6])==null?void 0:J.tray)=="inbox",onClick:e[7]}});let C=s&&We(e),v=l&&Be(e),E=c&&Fe(e),N=g&&Ve(e),F=e[5];const A=p=>p[16].id;for(let p=0;p<F.length;p+=1){let b=Oe(e,F,p),S=A(b);f.set(S,o[p]=He(S,b))}let z=e[4];const I=p=>p[13].id;for(let p=0;p<z.length;p+=1){let b=De(e,z,p),S=I(b);_.set(S,h[p]=Je(S,b))}return{c(){t=L("div"),W(n.$$.fragment),i=q(),C&&C.c(),r=q(),v&&v.c(),a=q(),E&&E.c(),d=q(),N&&N.c(),u=q();for(let p=0;p<o.length;p+=1)o[p].c();m=q();for(let p=0;p<h.length;p+=1)h[p].c();w(t,"class","list-group"),G(t,"list-group-flush",e[8])},m(p,b){j(p,t,b),R(n,t,null),P(t,i),C&&C.m(t,null),P(t,r),v&&v.m(t,null),P(t,a),E&&E.m(t,null),P(t,d),N&&N.m(t,null),P(t,u);for(let S=0;S<o.length;S+=1)o[S]&&o[S].m(t,null);P(t,m);for(let S=0;S<h.length;S+=1)h[S]&&h[S].m(t,null);y=!0},p(p,[b]){var ze;const S={};b&2&&(S.text=p[1].inbox),b&4&&(S.count=p[2]),b&1536&&(S.params={tray:"inbox",courseid:p[10],search:p[9]}),b&64&&(S.active=((ze=p[6])==null?void 0:ze.tray)=="inbox"),b&128&&(S.onClick=p[7]),n.$set(S),b&4096&&(s=p[12]("starred")),s?C?(C.p(p,b),b&4096&&k(C,1)):(C=We(p),C.c(),k(C,1),C.m(t,r)):C&&(V(),M(C,1,1,()=>{C=null}),H()),b&4096&&(l=p[12]("sent")),l?v?(v.p(p,b),b&4096&&k(v,1)):(v=Be(p),v.c(),k(v,1),v.m(t,a)):v&&(V(),M(v,1,1,()=>{v=null}),H()),b&4096&&(c=p[12]("drafts")),c?E?(E.p(p,b),b&4096&&k(E,1)):(E=Fe(p),E.c(),k(E,1),E.m(t,d)):E&&(V(),M(E,1,1,()=>{E=null}),H()),b&4096&&(g=p[12]("trash")),g?N?(N.p(p,b),b&4096&&k(N,1)):(N=Ve(p),N.c(),k(N,1),N.m(t,u)):N&&(V(),M(N,1,1,()=>{N=null}),H()),b&1760&&(F=p[5],V(),o=Ie(o,b,A,1,p,F,f,t,Ne,He,m,Oe),H()),b&2769&&(z=p[4],V(),h=Ie(h,b,I,1,p,z,_,t,Ne,Je,null,De),H()),(!y||b&256)&&G(t,"list-group-flush",p[8])},i(p){if(!y){k(n.$$.fragment,p),k(C),k(v),k(E),k(N);for(let b=0;b<F.length;b+=1)k(o[b]);for(let b=0;b<z.length;b+=1)k(h[b]);y=!0}},o(p){M(n.$$.fragment,p),M(C),M(v),M(E),M(N);for(let b=0;b<o.length;b+=1)M(o[b]);for(let b=0;b<h.length;b+=1)M(h[b]);y=!1},d(p){p&&T(t),D(n),C&&C.d(),v&&v.d(),E&&E.d(),N&&N.d();for(let b=0;b<o.length;b+=1)o[b].d();for(let b=0;b<h.length;b+=1)h[b].d()}}}function At(e,t,n){let i,s,r,l,{settings:a}=t,{strings:c}=t,{unread:d}=t,{drafts:g}=t,{courses:u}=t,{labels:o}=t,{params:f=void 0}=t,{onClick:m=void 0}=t,{flush:h=!1}=t;return e.$$set=_=>{"settings"in _&&n(0,a=_.settings),"strings"in _&&n(1,c=_.strings),"unread"in _&&n(2,d=_.unread),"drafts"in _&&n(3,g=_.drafts),"courses"in _&&n(4,u=_.courses),"labels"in _&&n(5,o=_.labels),"params"in _&&n(6,f=_.params),"onClick"in _&&n(7,m=_.onClick),"flush"in _&&n(8,h=_.flush)},e.$$.update=()=>{e.$$.dirty&65&&n(12,i=_=>a.globaltrays.includes(_)||(f==null?void 0:f.tray)==_),e.$$.dirty&65&&n(11,s=_=>a.coursetrays=="all"||a.coursetrays=="unread"&&_.unread>0||(f==null?void 0:f.tray)=="course"&&(f==null?void 0:f.courseid)==_.id),e.$$.dirty&64&&n(10,r=(f==null?void 0:f.tray)!="course"?f==null?void 0:f.courseid:void 0),e.$$.dirty&64&&n(9,l=f!=null&&f.search?{content:f.search.content,sendername:f.search.sendername,recipientname:f.search.recipientname,maxtime:f.search.maxtime,unread:f.search.unread,withfilesonly:f.search.withfilesonly}:void 0)},[a,c,d,g,u,o,f,m,h,l,r,s,i]}class Lt extends ce{constructor(t){super(),ue(this,t,At,St,fe,{settings:0,strings:1,unread:2,drafts:3,courses:4,labels:5,params:6,onClick:7,flush:8})}}function Ut(e){let t,n,i;return{c(){t=L("a"),n=L("i"),w(n,"class","fa fa-cog"),w(n,"aria-hidden",!0),w(t,"class","btn btn-secondary text-truncate"),w(t,"role","button"),w(t,"href",vt()),w(t,"title",i=e[0].preferences)},m(s,r){j(s,t,r),P(t,n)},p(s,[r]){r&1&&i!==(i=s[0].preferences)&&w(t,"title",i)},i:U,o:U,d(s){s&&T(t)}}}function zt(e,t,n){let{strings:i}=t;return e.$$set=s=>{"strings"in s&&n(0,i=s.strings)},[i]}class Tt extends ce{constructor(t){super(),ue(this,t,zt,Ut,fe,{strings:0})}}function Ke(e){let t,n;return{c(){t=L("div"),n=ne(e[2]),w(t,"class","local-mail-navbar-count count-container svelte-k2oznn")},m(i,s){j(i,t,s),P(t,n)},p(i,s){s&4&&ve(n,i[2])},d(i){i&&T(t)}}}function Qe(e){let t,n,i,s,r,l,a,c,d,g;return i=new Et({props:{strings:e[1]}}),r=new Tt({props:{strings:e[1]}}),d=new Lt({props:{settings:e[0],strings:e[1],unread:e[2],drafts:e[3],courses:e[4],labels:e[5],params:e[6],onClick:e[7]?e[12]:void 0,flush:!0}}),{c(){t=L("div"),n=L("div"),W(i.$$.fragment),s=q(),W(r.$$.fragment),l=q(),a=L("hr"),c=q(),W(d.$$.fragment),w(n,"class","d-flex justify-content-between pl-3 pr-2 py-2"),w(a,"class","m-0"),w(t,"class","local-mail-navbar-dropdown dropdown-menu dropdown-menu-right show p-0 overflow-auto svelte-k2oznn")},m(u,o){j(u,t,o),P(t,n),R(i,n,null),P(n,s),R(r,n,null),P(t,l),P(t,a),P(t,c),R(d,t,null),g=!0},p(u,o){const f={};o&2&&(f.strings=u[1]),i.$set(f);const m={};o&2&&(m.strings=u[1]),r.$set(m);const h={};o&1&&(h.settings=u[0]),o&2&&(h.strings=u[1]),o&4&&(h.unread=u[2]),o&8&&(h.drafts=u[3]),o&16&&(h.courses=u[4]),o&32&&(h.labels=u[5]),o&64&&(h.params=u[6]),o&128&&(h.onClick=u[7]?u[12]:void 0),d.$set(h)},i(u){g||(k(i.$$.fragment,u),k(r.$$.fragment,u),k(d.$$.fragment,u),g=!0)},o(u){M(i.$$.fragment,u),M(r.$$.fragment,u),M(d.$$.fragment,u),g=!1},d(u){u&&T(t),D(i),D(r),D(d)}}}function qt(e){let t,n,i,s,r,l,a,c,d,g;Q(e[13]);let u=e[2]>0&&Ke(e),o=e[8]&&Qe(e);return{c(){t=L("div"),n=L("a"),i=L("i"),r=q(),u&&u.c(),a=q(),o&&o.c(),w(i,"class","fa fa-fw fa-envelope-o"),w(i,"aria-label",s=e[1].plugginname),w(n,"aria-expanded",e[8]),w(n,"aria-label",l=e[1].togglemailmenu),w(n,"class","btn h-100 position-relative d-flex align-items-center px-2 py-0"),w(n,"href",be({tray:"inbox"})),w(t,"class","local-mail-navbar dropdown h-100 svelte-k2oznn"),G(t,"position-static",e[9]<768)},m(f,m){j(f,t,m),P(t,n),P(n,i),P(n,r),u&&u.m(n,null),P(t,a),o&&o.m(t,null),c=!0,d||(g=[re(window,"resize",e[13]),re(n,"click",e[11]),Ze(wt.call(null,t,e[10]))],d=!0)},p(f,[m]){(!c||m&2&&s!==(s=f[1].plugginname))&&w(i,"aria-label",s),f[2]>0?u?u.p(f,m):(u=Ke(f),u.c(),u.m(n,null)):u&&(u.d(1),u=null),(!c||m&256)&&w(n,"aria-expanded",f[8]),(!c||m&2&&l!==(l=f[1].togglemailmenu))&&w(n,"aria-label",l),f[8]?o?(o.p(f,m),m&256&&k(o,1)):(o=Qe(f),o.c(),k(o,1),o.m(t,null)):o&&(V(),M(o,1,1,()=>{o=null}),H()),(!c||m&512)&&G(t,"position-static",f[9]<768)},i(f){c||(k(o),c=!0)},o(f){M(o),c=!1},d(f){f&&T(t),u&&u.d(),o&&o.d(),d=!1,B(g)}}}function It(e,t,n){let{settings:i}=t,{strings:s}=t,{unread:r}=t,{drafts:l}=t,{courses:a}=t,{labels:c}=t,{params:d=void 0}=t,{onClick:g=void 0}=t,u=!1,o;const f=()=>{n(8,u=!1)},m=y=>{i.globaltrays.length>0||c.length>0?(n(8,u=!u),y.preventDefault()):g&&(y.preventDefault(),g({tray:"inbox"}))},h=y=>{n(8,u=!1),g==null||g(y)};function _(){n(9,o=window.innerWidth)}return e.$$set=y=>{"settings"in y&&n(0,i=y.settings),"strings"in y&&n(1,s=y.strings),"unread"in y&&n(2,r=y.unread),"drafts"in y&&n(3,l=y.drafts),"courses"in y&&n(4,a=y.courses),"labels"in y&&n(5,c=y.labels),"params"in y&&n(6,d=y.params),"onClick"in y&&n(7,g=y.onClick)},[i,s,r,l,a,c,d,g,u,o,f,m,h,_]}class wn extends ce{constructor(t){super(),ue(this,t,It,qt,fe,{settings:0,strings:1,unread:2,drafts:3,courses:4,labels:5,params:6,onClick:7})}}export{Qt as $,un as A,M as B,T as C,B as D,nn as E,rn as F,Ht as G,qe as H,Ee as I,V as J,H as K,W as L,R as M,D as N,lt as O,gn as P,bn as Q,G as R,ce as S,_n as T,Gt as U,Rt as V,Xt as W,Pt as X,Ie as Y,Ne as Z,cn as _,yn as a,Jt as a0,$t as a1,Kt as a2,on as a3,be as a4,dn as a5,mn as a6,tn as a7,gt as a8,en as a9,fn as aa,Yt as ab,Zt as ac,hn as ad,an as ae,ln as af,xt as ag,sn as ah,Et as ai,Lt as aj,wn as ak,pn as b,Vt as c,ue as d,fe as e,Ot as f,Dt as g,q as h,pe as i,L as j,w as k,j as l,P as m,U as n,re as o,X as p,Ze as q,wt as r,jt as s,ne as t,ve as u,Bt as v,Ft as w,Wt as x,k as y,Q as z};