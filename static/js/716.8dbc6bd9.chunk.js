"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[716],{40:function(e,t,n){n.d(t,{Tg:function(){return u},Y5:function(){return d},on:function(){return o}});var r=n(861),a=n(757),c=n.n(a),s=n(912),i="9cca312caffd11f4ae9f11244d585025";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},716:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(40),u=n(689),o=n(791),d=n(184),l=function(e){var t,n=e.movie,r=n.title,a=n.release_date,c=n.genres,s=n.overview,i=n.vote_average;return t=n.poster_path?"https://image.tmdb.org/t/p/w400/".concat(n.poster_path):"https://r6z4d5g2.rocketcdn.me/wp-content/uploads/2015/08/mac-fix-dont-load.jpg",(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{rc:t,alt:r}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{children:['"',r,'"(',new Date(a).getFullYear(),")"]}),(0,d.jsxs)("p",{children:[" User Score: ",Math.round(10*i),"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:s}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsxs)("p",{children:[" ",c.map((function(e){return e.name})).join(", ")]})]})]})},p=n(87),v=function(){var e,t,n=(0,u.TH)(),c=(0,o.useState)(null),v=(0,a.Z)(c,2),f=v[0],h=v[1],x=(0,o.useState)(null),g=(0,a.Z)(x,2),m=g[0],j=g[1],w=(0,u.UO)().movieId,_=null!==(e=null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Y5)(w);case 3:t=e.sent,h(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:(0,d.jsx)(p.rU,{to:_,children:" Return to all movies "})}),m&&(0,d.jsx)("div",{children:"Something wrong"}),f&&(0,d.jsxs)("div",{children:[(0,d.jsx)(l,{movie:f}),(0,d.jsx)("h3",{children:" Additiona information"}),(0,d.jsx)(p.OL,{to:"cast",state:n.state,children:"Cast"}),(0,d.jsx)(p.OL,{to:"cast",state:n.state,children:"Reviews"})]})]}),(0,d.jsx)(o.Suspense,{fallback:null,children:(0,d.jsx)(u.j3,{})})]})}}}]);
//# sourceMappingURL=716.8dbc6bd9.chunk.js.map