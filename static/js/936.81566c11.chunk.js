"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{40:function(t,e,n){n.d(e,{Tg:function(){return o},Y5:function(){return p},on:function(){return u}});var r=n(861),a=n(757),c=n.n(a),s=n(912),i="9cca312caffd11f4ae9f11244d585025";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},936:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),o=n(40),u=n(686),p=n.n(u),f=n(87),d="Home_title__L087v",h="Home_home_cards__BX7oy",l="Home_homeItems__-V5kz",m="Home_homeItems_title__7nz4Q",v=n(184),_=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1];return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Tg)();case 3:e=t.sent,(n=e.results)<1&&p().Notify.warning("not possible to find , please try again"),c(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),p().Notify.warning("Something went wrong");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{className:d,children:" Trending today"}),(0,v.jsx)("ul",{className:h,children:n.map((function(t){var e;return e=t.poster_path?"https://image.tmdb.org/t/p/w400/".concat(t.poster_path):"https://flora.dobro-est.com/tradeskantsiya-tradescantia-opisanie-vidyi-i-uhod-za-tradeskantsiey.html",(0,v.jsxs)(f.rU,{className:l,to:"/movies/".concat(t.id),children:[(0,v.jsx)("img",{src:e,width:"400",alt:t.title}),(0,v.jsx)("h2",{className:m,children:t.title})]},t.id)}))})]})}}}]);
//# sourceMappingURL=936.81566c11.chunk.js.map