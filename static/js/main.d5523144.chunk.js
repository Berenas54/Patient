(this.webpackJsonppatient=this.webpackJsonppatient||[]).push([[0],{25:function(e,t,n){e.exports={input:"SearchPage_input__1UwR8"}},31:function(e,t,n){},32:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(21),a=n.n(c),s=(n(31),n(32),n(12)),o=n(11),d=n(26),u=n(24),h=n.n(u).a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://api.orionhealth.io/fhir/3.0/Patient/",headers:{Accept:"application/json",Authorization:"Bearer ".concat("KKS11qBTukBbmCUircGVB3FZprTN"),"Access-Control-Allow-Origin":"*"}}),j=function(e){return h.get("?family=".concat(e,"&gender=male"))},b=n(25),p=n.n(b),l=n(2);var f=function(){var e=Object(r.useState)({address:[],birthDate:"",gender:"",id:"",identifier:[],name:[],resourceType:""}),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(""),a=Object(o.a)(c,2),u=a[0],h=a[1],b=Object(d.a)({initialValues:{search:""},onSubmit:function(e){j(e.search).then((function(e){i(e.data.entry[0].resource),h("Patient not found")})).catch((function(e){return h(e.message)})),b.resetForm(),i({address:[],birthDate:"",gender:"",id:"",identifier:[],name:[],resourceType:""})}});return Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{onSubmit:b.handleSubmit,children:[Object(l.jsx)("input",Object(s.a)(Object(s.a)({className:p.a.input,type:"text"},b.getFieldProps("search")),{},{placeholder:"enter your search term"})),Object(l.jsx)("button",{type:"submit",children:"Search"})]}),void 0!==n.name[0]?Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{children:[n.name[0].family," ",n.name[0].given[0]]}),Object(l.jsxs)("p",{children:["Birthday: ",n.birthDate]}),Object(l.jsxs)("p",{children:["Gender: ",n.gender]}),Object(l.jsxs)("p",{children:["Address: ",n.address[0].text]})]}):Object(l.jsx)("div",{children:"Cannot read property '0' of undefined"===u?"Patient not found":u})]})};var m=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(f,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),O()}},[[55,1,2]]]);
//# sourceMappingURL=main.d5523144.chunk.js.map