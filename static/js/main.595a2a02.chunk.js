(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(4),l=t.n(u),c=t(2),i=t.n(c),o=t(5),m=t(1),s=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Nimell\xe4 ",e.name," on elossa ",e.number," henkil\xf6\xe4 2019"))},v=function(e){var n=e.year;return r.a.createElement("div",null,"Vuotena ",n," syntyneist\xe4 monet ansaitsevat paremmin kuin sin\xe4")},b={getAll:function(){return Promise.resolve({})},getByName:function(e){return Promise.resolve(7)}},p=t(6),f=function(e){var n=e.onChange,t=e.value,a=e.type;Object(p.a)(e,["onChange","value","type"]);return{onChange:n,value:t,type:a}},E=function(e){var n=Object(a.useState)(""),t=Object(m.a)(n,2),r=t[0],u=t[1];return{type:e,value:r,onChange:function(e){u(e.target.value)},clear:function(){u("")}}},y=function(){var e=E("text"),n=E("number"),t=Object(a.useState)(null),u=Object(m.a)(t,2),l=u[0],c=u[1],p=Object(a.useState)(null),y=Object(m.a)(p,2),h=y[0],d=y[1],g=function(){var t=Object(o.a)(i.a.mark(function t(a){var r,u;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(c(null),d(null),a.preventDefault(),""==e.value){t.next=9;break}return t.next=6,b.getByName(e.value);case 6:r=t.sent,u=e.value,c({name:u,number:r});case 9:""!==n.value&&d(n.value),e.clear(),n.clear();case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Sy\xf6t\xe4 tietoja"),r.a.createElement("form",{onSubmit:g},"Nimi: ",r.a.createElement("input",f(e)),r.a.createElement("br",null),"Syntym\xe4vuosi: ",r.a.createElement("input",f(n)),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"hae"))),l&&r.a.createElement(s,{name:l.name,number:l.number}),h&&r.a.createElement(v,{birthYear:h}))};l.a.render(r.a.createElement(y,null),document.getElementById("root"))},7:function(e,n,t){e.exports=t(15)}},[[7,2,1]]]);
//# sourceMappingURL=main.595a2a02.chunk.js.map