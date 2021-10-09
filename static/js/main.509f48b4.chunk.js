(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK"}},18:function(t,e,n){t.exports={form:"Filter_form__2qyBI",label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},59:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"fetchContacts",(function(){return F})),n.d(r,"deleteContact",(function(){return B})),n.d(r,"addContact",(function(){return A})),n.d(r,"changeFilter",(function(){return D}));var c={};n.r(c),n.d(c,"getContacts",(function(){return J})),n.d(c,"getFilter",(function(){return M})),n.d(c,"getIsLoading",(function(){return W})),n.d(c,"getError",(function(){return K})),n.d(c,"getVisibleContacts",(function(){return G}));var a=n(0),u=n.n(a),o=n(15),i=n.n(o),s=n(6),l=n(5),b=n(2),f=n(31),j=n(7),p=n(3),d=n.n(p),O=n(8),m=n(11),h=n.n(m);function x(){return v.apply(this,arguments)}function v(){return(v=Object(O.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return C.apply(this,arguments)}function C(){return(C=Object(O.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("/contacts",{name:e.name,number:e.number});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return y.apply(this,arguments)}function y(){return(y=Object(O.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.delete("/contacts/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}h.a.defaults.baseURL="http://localhost:3001";var w,k,L,N=Object(l.b)("phoneBook/changeFilter"),F=Object(l.c)("contacts/fetchContacts",function(){var t=Object(O.a)(d.a.mark((function t(e,n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,x();case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),B=Object(l.c)("contacts/deleteContact",function(){var t=Object(O.a)(d.a.mark((function t(e,n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,_(e);case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),A=Object(l.c)("contacts/addContact",function(){var t=Object(O.a)(d.a.mark((function t(e,n){var r,c,a,u,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.name,c=e.number,a=n.rejectWithValue,t.prev=2,t.next=5,g({name:r,number:c});case 5:return u=t.sent,o=u.data,t.abrupt("return",o);case 10:return t.prev=10,t.t0=t.catch(2),t.abrupt("return",a(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,n){return t.apply(this,arguments)}}()),D=function(t){return function(e){e(N(t))}},V=Object(l.d)([],(w={},Object(b.a)(w,F.fulfilled,(function(t,e){return e.payload})),Object(b.a)(w,A.fulfilled,(function(t,e){return[e.payload].concat(Object(f.a)(t))})),Object(b.a)(w,B.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),w)),Z=Object(l.d)(!1,(k={},Object(b.a)(k,F.pending,(function(){return!0})),Object(b.a)(k,F.fulfilled,(function(){return!1})),Object(b.a)(k,F.rejected,(function(){return!1})),Object(b.a)(k,B.pending,(function(){return!0})),Object(b.a)(k,B.fulfilled,(function(){return!1})),Object(b.a)(k,B.rejected,(function(){return!1})),Object(b.a)(k,A.pending,(function(){return!0})),Object(b.a)(k,A.fulfilled,(function(){return!1})),Object(b.a)(k,A.rejected,(function(){return!1})),k)),z=Object(l.d)(null,(L={},Object(b.a)(L,F.rejected,(function(t,e){return e.payload})),Object(b.a)(L,F.pending,(function(){return null})),Object(b.a)(L,B.rejected,(function(t,e){return e.payload})),Object(b.a)(L,B.pending,(function(){return null})),Object(b.a)(L,A.rejected,(function(t,e){return e.payload})),Object(b.a)(L,A.pending,(function(){return null})),L)),S=Object(l.d)("",Object(b.a)({},N,(function(t,e){return e.payload}))),T=Object(j.b)({entities:V,filter:S,isLoading:Z,error:z}),q=Object(l.a)({reducer:{phoneBook:T},devTools:!1}),E=(n(59),n(22)),I=n(10),J=function(t){return t.phoneBook.entities},M=function(t){return t.phoneBook.filter},W=function(t){return t.phoneBook.isLoading},K=function(t){return t.phoneBook.error},G=Object(I.a)([J,M],(function(t,e){var n=e.toLocaleLowerCase();return t.filter((function(t){return t.name.toLocaleLowerCase().includes(n)}))})),P=n(9),R=n.n(P),U=n(1),Y=function(){var t=Object(a.useState)(""),e=Object(E.a)(t,2),n=e[0],u=e[1],o=Object(a.useState)(""),i=Object(E.a)(o,2),l=i[0],b=i[1],f=Object(s.c)(c.getContacts),j=Object(s.b)(),p=function(t){var e=t.currentTarget,n=e.name,r=e.value;"name"===n?u(r):"number"===n&&b(r)},d=function(){u(""),b("")};return Object(U.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f.map((function(t){return t.name.toLocaleLowerCase()})).includes(n.toLocaleLowerCase())?alert("".concat(n," is already in contacts")):(j(r.addContact({name:n,number:l})),d())},className:R.a.form,children:[Object(U.jsx)("label",{className:R.a.label,children:"Name"}),Object(U.jsx)("input",{className:R.a.input,value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:p}),Object(U.jsx)("label",{className:R.a.label,children:"Number"}),Object(U.jsx)("input",{className:R.a.input,value:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:p}),Object(U.jsx)("button",{className:R.a.button,type:"submit",children:"Add contact"})]})},$=n(18),H=n.n($),Q=function(){var t=Object(s.c)(c.getFilter),e=Object(s.b)();return Object(U.jsxs)("div",{className:H.a.form,children:[Object(U.jsx)("label",{className:H.a.label,children:" Find contacts by name"}),Object(U.jsx)("input",{className:H.a.input,type:"text",value:t,onChange:function(t){return e(r.changeFilter(t.target.value))}})]})},X=n(17),tt=n.n(X),et=function(t){var e=t.name,n=t.number,r=t.onDelete;return Object(U.jsxs)("li",{className:tt.a.item,children:[Object(U.jsxs)("span",{children:[e,":"]}),Object(U.jsx)("span",{children:n}),Object(U.jsx)("button",{type:"button",onClick:r,children:"Delete"})]})},nt=function(){var t=Object(s.b)(),e=Object(s.c)(c.getVisibleContacts);Object(a.useEffect)((function(){t(r.fetchContacts())}),[t]);return e&&Object(U.jsx)("ul",{className:tt.a.list,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(U.jsx)(et,{name:c,number:a,onDelete:function(){return function(e){t(r.deleteContact(e))}(n)}},n)}))})},rt=function(){return Object(U.jsxs)("div",{children:[Object(U.jsx)("h1",{className:"text",children:"Phonebook"}),Object(U.jsx)(Y,{}),Object(U.jsx)("h2",{className:"text",children:"Contacts"}),Object(U.jsx)(Q,{}),Object(U.jsx)(nt,{})]})};n(61),n(62);i.a.render(Object(U.jsx)(u.a.StrictMode,{children:Object(U.jsx)(s.a,{store:q,children:Object(U.jsx)(rt,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}}},[[63,1,2]]]);
//# sourceMappingURL=main.509f48b4.chunk.js.map