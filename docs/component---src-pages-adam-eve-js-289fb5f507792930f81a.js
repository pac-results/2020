(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{EReh:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return o}));a("Vd3H"),a("91GP"),a("dRSK");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),s=a("Bl7J"),u=(a("qBGJ"),a("0enf")),i=a("snnE");t.default=function(e){var t=e.data.allResultsCsv.edges.map((function(e){return e.node})).reduce((function(e,t){var a=e.find((function(e){return e.fields.athlete_slug===t.fields.athlete_slug}));return a?a.Total=(parseFloat(a.Total,10)+parseFloat(t.Distance,10)).toFixed(1):e.push(Object.assign({},t,{Total:parseFloat(t.Distance,10)})),e}),[]);return r.a.createElement(s.a,null,r.a.createElement("h1",null,"Adam & Eve Standings"),r.a.createElement(u.a,{data:t.sort(i.c),columns:[{Header:"Distance",accessor:"Total",width:80},{Header:"Name",id:"Name",accessor:function(e){return r.a.createElement(l.a,{to:"/"+e.fields.athlete_slug},e.fields.athlete_name)},width:200}],defaultPageSize:15,className:"-striped -highlight"}))};var o="3656585840"},snnE:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));a("KKXr"),a("pIFo");var n=function(e,t){return parseFloat(e.Total,10)<parseFloat(t.Total,10)?1:parseFloat(e.Total,10)>parseFloat(t.Total,10)?-1:0},r=function(e,t){return e[0].Date<t[0].Date?-1:e[0].Date>t[0].Date?1:0},l=function(e,t){var a=e.Time.split("."),n=t.Time.split(".");if(a.length!==n.length)return a.length-n.length;for(var r=0;r<a.length;r++){var l=parseInt(a[r]),s=parseInt(n[r]);if(l!==s)return l-s}return 0}}}]);
//# sourceMappingURL=component---src-pages-adam-eve-js-289fb5f507792930f81a.js.map