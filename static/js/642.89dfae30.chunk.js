"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[642],{40:function(t,e,n){n.d(e,{Tg:function(){return s},on:function(){return o}});var r=n(861),a=n(757),i=n.n(a),u=n(912),c="9cca312caffd11f4ae9f11244d585025";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var t=(0,r.Z)(i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(c,"&page=1"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},642:function(t,e,n){n.r(e),n.d(e,{Movies:function(){return h}});var r=n(861),a=n(439),i=n(757),u=n.n(i),c=n(791),s=n(689),o=n(40),p=n(87),f=n(686),l=n.n(f),d=n(184),h=function(){var t,e=(0,s.TH)(),n=(0,c.useState)([]),i=(0,a.Z)(n,2),f=i[0],h=i[1],v=(0,c.useState)(""),g=(0,a.Z)(v,2),m=g[0],w=g[1],x=(0,c.useState)(),y=(0,a.Z)(x,2),_=y[0],b=y[1],k=null!==(t=_.get("filter"))&&void 0!==t?t:"";(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.on)(k);case 3:e=t.sent,(n=e.results).length<1&&l().Notify.warning("We can't find it, please try again"),h(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),l().Notify.warning("Something wrong, later please");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}k&&function(){t.apply(this,arguments)}()}),[k]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),b(""!==m?{filter:m}:{}),w("")},children:[(0,d.jsx)("input",{type:"text",name:"input",onChange:function(t){return e=t.currentTarget.value.toLowerCase(),void w(e);var e},value:m}),(0,d.jsx)("button",{type:"submit",children:"Search"})]}),f&&(0,d.jsx)("ul",{children:f.map((function(t){var n;return n=t.poster_path?"https://image.tmdb.org/t/p/w400/".concat(t.poster_path):"https://flora.dobro-est.com/tradeskantsiya-tradescantia-opisanie-vidyi-i-uhod-za-tradeskantsiey.html",(0,d.jsxs)(p.rU,{to:"".concat(t.id),state:{from:e},children:[(0,d.jsx)("img",{src:n,width:"400",alt:t.title}),(0,d.jsx)("h2",{children:t.title})]},t.id)}))})]})}}}]);
//# sourceMappingURL=642.89dfae30.chunk.js.map