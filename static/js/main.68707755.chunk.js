(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),u=a.n(l),c=a(2),i=a.n(c),o=a(4),s=a(3),m=function(e){return r.a.createElement("div",{style:e.style},r.a.createElement("p",null,"Nimell\xe4 ",e.name," on elossa ",e.number," henkil\xf6\xe4 2019"))},p=function(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),l=a[0],u=a[1],c=function(){u(!l)},i={display:l?"":"none"},o={display:l?"none":""};return e.children?r.a.createElement("div",null,r.a.Children.map(e.children,function(e){return r.a.createElement("div",null,r.a.createElement("div",{onClick:c,style:i},e),r.a.createElement("div",{style:o},r.a.createElement("button",{onClick:c},"n\xe4yt\xe4")))})):r.a.createElement(r.a.Fragment,null)},v=function(e){var t=e.birthYear.year;return r.a.createElement("div",{style:e.infoStyle},"Tietoja vuodesta ",t)},d=function(e){return r.a.createElement("div",null,"Saatat olla naimisissa")},b=a(5),h=a.n(b),E={getAll:function(){var e=Object(o.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get();case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getByName:function(){var e=Object(o.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat("/api/names","/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},y={getByYear:function(){var e=Object(o.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=h.a.get("".concat("/api/years","/").concat(t)),e.abrupt("return",a.data);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},f=a(14),g=function(e){var t=e.onChange,a=e.value,n=e.type;Object(f.a)(e,["onChange","value","type"]);return{onChange:t,value:a,type:n}},k=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1];return{type:e,value:r,onChange:function(e){l(e.target.value)},clear:function(){l("")}}},j=function(e){var t=e.onChange,a=e.value,n=function(e){return Number(a)===e};return r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"maritalStatus",value:"0",onChange:t,checked:n(0)}),"Aviopuoliso, ei lapsia",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"maritalStatus",value:"1",onChange:t,checked:n(1)}),"Aviopuoliso, ja lapsia",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"maritalStatus",value:"2",onChange:t,checked:n(2)}),"Avopuoliso, ei lapsia",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"maritalStatus",value:"3",onChange:t,checked:n(3)}),"Avopuoliso, ja lapsia",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"maritalStatus",value:"4",onChange:t,checked:n(4)}),"Vanhempi, ei puolisoa",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"maritalStatus",value:"5",onChange:t,checked:n(5)}),"Lapsi",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"maritalStatus",value:"6",onChange:t,checked:n(6)}),"Perheisiin kuulumaton, asuu yksin",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"maritalStatus",value:"7",onChange:t,checked:n(7)}),"Perheisiin kuulumaton, ei asu yksin",r.a.createElement("br",null))},S=function(){var e=k("text"),t=k("number"),a=Object(n.useState)(null),l=Object(s.a)(a,2),u=l[0],c=l[1],b=Object(n.useState)(null),h=Object(s.a)(b,2),f=h[0],S=h[1],C=Object(n.useState)(!1),O=Object(s.a)(C,2),w=O[0],x=O[1],B=Object(n.useState)(null),A=Object(s.a)(B,2),N=A[0],Y=A[1],J=function(){var a=Object(o.a)(i.a.mark(function a(n){var r,l,u;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(x(!0),c(null),S(null),n.preventDefault(),""===e.value){a.next=10;break}return a.next=7,E.getByName(e.value);case 7:r=a.sent,l=e.value,c({name:l,number:r});case 10:if(""===t.value){a.next=15;break}return a.next=13,y.getByYear(t.value);case 13:u=a.sent,S({year:t.value,data:u});case 15:e.clear(),t.clear(),x(!1);case 18:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}(),L={paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Sy\xf6t\xe4 tietoja"),r.a.createElement("form",{onSubmit:J},"Nimi: ",r.a.createElement("input",g(e)),r.a.createElement("br",null),"Syntym\xe4vuosi: ",r.a.createElement("input",g(t)),r.a.createElement("br",null),"Siviilis\xe4\xe4ny:",r.a.createElement(j,{value:N,onChange:function(e){Y(e.target.value)}}),r.a.createElement("br",null),w?r.a.createElement("button",{type:"submit",disabled:!0},"hae"):r.a.createElement("button",{type:"submit"},"hae"))),r.a.createElement(p,null,u&&r.a.createElement(m,{name:u.name,number:u.number,style:L})),r.a.createElement(p,null,f&&r.a.createElement(v,{birthYear:f,style:L})),r.a.createElement(p,null,f&&r.a.createElement(d,null)))};u.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[15,2,1]]]);
//# sourceMappingURL=main.68707755.chunk.js.map