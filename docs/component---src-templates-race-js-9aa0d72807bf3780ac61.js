(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{nkJK:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));a("Vd3H");var n=a("q1tI"),r=a.n(n),i=a("Bl7J"),s=a("Wbzz"),l=a("0enf"),o=(a("qBGJ"),a("snnE")),c=a("pMyB");t.default=function(e){var t=e.data,a=t.allResultsCsv.nodes[0],n=a.Description,u=a.Date,d=a.Discipline,m=a.Distance,f=t.allResultsCsv.nodes.map((function(e){var t=e.Category_Position,a=e.Firstname,r=e.Gender,i=e.Surname,s=e.Time,l=e.fields,o=l.athlete_slug,c=l.Category;return{Description:n,Date:u,Discipline:d,Distance:m,Category:c,Category_Position:t,Surname:i,Firstname:a,Gender:r,Time:s,Name:a+" "+i,slug:o,fields:{Category:c}}}));return r.a.createElement(i.a,null,r.a.createElement(s.a,{to:"/races/"},"Races"),r.a.createElement(c.a,{race:f}),r.a.createElement(l.a,{data:f.sort(o.b),columns:[{Header:"Name",id:"Name",accessor:function(e){return r.a.createElement(s.a,{to:"/"+e.slug},e.Name)},width:250},{Header:"Time",accessor:"Time",width:150},{Header:"Category",accessor:"Category",width:100},{Header:"Category Position",accessor:"Category_Position",width:200}],defaultSorted:[{id:"Time",desc:!1}],defaultPageSize:15,className:"-striped -highlight"}))};var u="1418565066"},pMyB:function(e,t,a){"use strict";a("dRSK");var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.race,a=t[0],i=a.Description,s=a.Date,l=a.Discipline,o=a.Distance,c=t.find((function(e){return"M"===e.Gender})),u=t.find((function(e){return"F"===e.Gender})),d=t.filter((function(e){return e.Category_Position&&e.Category_Position<=10}));return r.a.createElement(n.Fragment,null,r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("h2",null,s," - ",i," ",o,"km ",l),r.a.createElement("div",null,t.length," Pinelands athlete",t.length>1?"s":""),r.a.createElement("div",{style:{padding:"7px"}},c&&r.a.createElement("div",null,"First male athlete: ",c.Firstname," ",c.Surname,"  (",c.Time,")"),u&&r.a.createElement("div",null,"First female athlete: ",u.Firstname," ",u.Surname," (",u.Time,")")),d.map((function(e){return r.a.createElement("div",{key:e.Firstname},e.Firstname," ",e.Surname," placed ",e.Category_Position," ",e.fields.Category," (",e.Time,")")}))))}},snnE:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));a("KKXr"),a("pIFo");var n=function(e,t){return parseFloat(e.Total,10)<parseFloat(t.Total,10)?1:parseFloat(e.Total,10)>parseFloat(t.Total,10)?-1:0},r=function(e,t){return e[0].Date<t[0].Date?-1:e[0].Date>t[0].Date?1:0},i=function(e,t){var a=e.Time.split("."),n=t.Time.split(".");if(a.length!==n.length)return a.length-n.length;for(var r=0;r<a.length;r++){var i=parseInt(a[r]),s=parseInt(n[r]);if(i!==s)return i-s}return 0}}}]);
//# sourceMappingURL=component---src-templates-race-js-9aa0d72807bf3780ac61.js.map