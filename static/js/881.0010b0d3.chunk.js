"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[881],{40:function(t,e,n){n.d(e,{Tg:function(){return i},Y5:function(){return p},on:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(912),s="9cca312caffd11f4ae9f11244d585025";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s,"&page=1"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},881:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(87),o=n(689),p=n(40),f="Movies_search__VjLZn",l="Movies_form__4ow+Z",h="Movies_search_btn__FHbHl",d=n(686),v=n.n(d),g=n(184),m=function(){var t,e=(0,o.TH)(),n=(0,s.useState)([]),c=(0,a.Z)(n,2),d=c[0],m=c[1],_=(0,s.useState)(""),w=(0,a.Z)(_,2),x=w[0],y=w[1],b=(0,i.lr)(),k=(0,a.Z)(b,2),Z=k[0],j=k[1],S=null!==(t=Z.get("query"))&&void 0!==t?t:"";(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.on)(S);case 3:e=t.sent,(n=e.results).length<1&&v().Notify.warning("We can't find it, please try again"),m(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),v().Notify.warning("Something wrong, later please");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}S&&function(){t.apply(this,arguments)}()}),[S]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("form",{className:l,onSubmit:function(t){t.preventDefault(),j(""!==x?{query:x}:{}),y("")},children:[(0,g.jsx)("input",{className:f,placeholder:"enter a movie search",type:"text",name:"input",onChange:function(t){return e=t.currentTarget.value.toLowerCase(),void y(e);var e},value:x}),(0,g.jsx)("button",{className:h,type:"submit",children:"Search"})]}),d&&(0,g.jsx)("ul",{children:d.map((function(t){var n;return n=t.poster_path?"https://image.tmdb.org/t/p/w400/".concat(t.poster_path):"https://r6z4d5g2.rocketcdn.me/wp-content/uploads/2015/08/mac-fix-dont-load.jpg",(0,g.jsxs)(i.rU,{to:"".concat(t.id),state:{from:e},children:[(0,g.jsx)("img",{src:n,width:"400",alt:t.title}),(0,g.jsx)("h2",{children:t.title})]},t.id)}))})]})}}}]);
//# sourceMappingURL=881.0010b0d3.chunk.js.map