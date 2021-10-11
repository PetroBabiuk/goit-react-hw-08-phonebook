(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{120:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(39);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(u){a=!0,c=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},146:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK"}},163:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},164:function(t,e,n){t.exports={form:"Filter_form__2qyBI",label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},199:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"getContacts",(function(){return s})),n.d(r,"getFilter",(function(){return l})),n.d(r,"getIsLoading",(function(){return b})),n.d(r,"getError",(function(){return m})),n.d(r,"getVisibleContacts",(function(){return f}));var a=n(120),c=n(0),o=n(10),i=n(8),u=n(30),s=function(t){return t.phoneBook.entities},l=function(t){return t.phoneBook.filter},b=function(t){return t.phoneBook.isLoading},m=function(t){return t.phoneBook.error},f=Object(u.a)([s,l],(function(t,e){var n=e.toLocaleLowerCase();return t.filter((function(t){return t.name.toLocaleLowerCase().includes(n)}))})),j=n(163),d=n.n(j),h=n(1),p=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),n=e[0],u=e[1],s=Object(c.useState)(""),l=Object(a.a)(s,2),b=l[0],m=l[1],f=Object(o.c)(r.getContacts),j=Object(o.b)(),p=function(t){var e=t.currentTarget,n=e.name,r=e.value;"name"===n?u(r):"number"===n&&m(r)},O=function(){u(""),m("")};return Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f.map((function(t){return t.name.toLocaleLowerCase()})).includes(n.toLocaleLowerCase())?alert("".concat(n," is already in contacts")):(j(i.addContact({name:n,number:b})),O())},className:d.a.form,children:[Object(h.jsx)("label",{className:d.a.label,children:"Name"}),Object(h.jsx)("input",{className:d.a.input,value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:p}),Object(h.jsx)("label",{className:d.a.label,children:"Number"}),Object(h.jsx)("input",{className:d.a.input,value:b,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:p}),Object(h.jsx)("button",{className:d.a.button,type:"submit",children:"Add contact"})]})},O=n(164),x=n.n(O),_=function(){var t=Object(o.c)(r.getFilter),e=Object(o.b)();return Object(h.jsxs)("div",{className:x.a.form,children:[Object(h.jsx)("label",{className:x.a.label,children:" Find contacts by name"}),Object(h.jsx)("input",{className:x.a.input,type:"text",value:t,onChange:function(t){return e(i.changeFilter(t.target.value))}})]})},v=n(146),C=n.n(v),g=function(t){var e=t.name,n=t.number,r=t.onDelete;return Object(h.jsxs)("li",{className:C.a.item,children:[Object(h.jsxs)("span",{children:[e,":"]}),Object(h.jsx)("span",{children:n}),Object(h.jsx)("button",{type:"button",onClick:r,children:"Delete"})]})},y=function(){var t=Object(o.b)(),e=Object(o.c)(r.getVisibleContacts);Object(c.useEffect)((function(){t(i.fetchContacts())}),[t]);return e&&Object(h.jsx)("ul",{className:C.a.list,children:e.map((function(e){var n=e.id,r=e.name,a=e.number;return Object(h.jsx)(g,{name:r,number:a,onDelete:function(){return function(e){t(i.deleteContact(e))}(n)}},n)}))})};e.default=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"text",children:"Phonebook"}),Object(h.jsx)(p,{}),Object(h.jsx)("h2",{className:"text",children:"Contacts"}),Object(h.jsx)(_,{}),Object(h.jsx)(y,{})]})}}}]);
//# sourceMappingURL=ContactsView.417d51c0.chunk.js.map