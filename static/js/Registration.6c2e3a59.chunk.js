(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{160:function(a,e,s){a.exports={loginWindow:"Registration_loginWindow__14kC2",form:"Registration_form__pVcsB",passwordField:"Registration_passwordField__1v4yE",passwordIconButton:"Registration_passwordIconButton__1IS1a",confirmButton:"Registration_confirmButton__2_Ics"}},201:function(a,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return v}));var n=s(120),o=s(0),r=s(10),i=s(147),t=s(20),l=s(22),d=s(196),c=s(198),m=s(195),u=s(145),b=s.n(u),h=s(141),j=s.n(h),w=s(160),p=s.n(w),f=s(9),g=s(1),O={name:"",email:"",password:"",confirmPassword:""},v=function(){var a=Object(o.useState)(!1),e=Object(n.a)(a,2),s=e[0],u=e[1],h=Object(o.useState)(!1),w=Object(n.a)(h,2),v=w[0],x=w[1],P=Object(r.b)(),y=Object(o.useCallback)((function(a){var e={};return a.name?a.name.length<3&&(e.name="Invalid name. Name should have at least 3 symbols"):e.name="Required",a.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(a.email)||(e.email="Invalid email address"):e.email="Required",a.password?(a.password.length<8||a.password.length>16)&&(e.password="Invalid password. Password should be greater then 8 symbols and less then 16 symbols"):e.password="Required",a.confirmPassword?a.confirmPassword.length<8||a.confirmPassword.length>16?e.confirmPassword="Invalid password. Password should be greater then 8 symbols and less then 16 symbols":a.password!==a.confirmPassword&&(e.confirmPassword="Confirm password should be equal to password"):e.confirmPassword="Required",e}),[]),B=Object(o.useCallback)((function(a,e){var s=e.setSubmitting;P(f.a.register({name:a.name,email:a.email,password:a.password})),s(!1)}),[P]),_=Object(o.useCallback)((function(){u((function(a){return!a}))}),[]),k=Object(o.useCallback)((function(){x((function(a){return!a}))}),[]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{className:"text",children:"Sing up form"}),Object(g.jsxs)("div",{className:p.a.loginWindow,children:[Object(g.jsx)(i.a,{initialValues:O,validate:y,onSubmit:B,children:function(a){var e=a.values,n=a.errors,o=a.touched,r=a.handleChange,i=a.handleSubmit,t=a.handleBlur,l=a.isSubmitting;return Object(g.jsxs)("form",{className:p.a.form,onSubmit:i,children:[Object(g.jsx)(c.a,{fullWidth:!0,variant:"outlined",margin:"normal",id:"name",name:"name",label:"Name",value:e.name,onChange:r,onBlur:t,error:o.name&&Boolean(n.name),helperText:o.name&&n.name}),Object(g.jsx)(c.a,{fullWidth:!0,variant:"outlined",margin:"normal",id:"email",name:"email",label:"Email",value:e.email,onChange:r,onBlur:t,error:o.email&&Boolean(n.email),helperText:o.email&&n.email}),Object(g.jsxs)("div",{className:p.a.passwordField,children:[Object(g.jsx)(c.a,{fullWidth:!0,variant:"outlined",id:"password",name:"password",label:"Password",type:s?"text":"password",value:e.password,onChange:r,onBlur:t,error:o.password&&Boolean(n.password),margin:"normal",helperText:o.password&&n.password}),Object(g.jsx)("div",{className:p.a.passwordIconButton,children:Object(g.jsx)(m.a,{"aria-label":"visibility",onClick:_,disabled:!e.password,children:s?Object(g.jsx)(j.a,{}):Object(g.jsx)(b.a,{})})})]}),Object(g.jsxs)("div",{className:p.a.passwordField,children:[Object(g.jsx)(c.a,{fullWidth:!0,variant:"outlined",id:"confirmPassword",name:"confirmPassword",label:"Confirm Password",type:v?"text":"password",value:e.confirmPassword,onChange:r,onBlur:t,error:o.confirmPassword&&Boolean(n.confirmPassword),margin:"normal",helperText:o.confirmPassword&&n.confirmPassword}),Object(g.jsx)("div",{className:p.a.passwordIconButton,children:Object(g.jsx)(m.a,{"aria-label":"visibility",onClick:k,disabled:!e.confirmPassword,children:v?Object(g.jsx)(j.a,{}):Object(g.jsx)(b.a,{})})})]}),Object(g.jsx)("div",{className:p.a.confirmButton,children:Object(g.jsx)(d.a,{color:"primary",variant:"contained",type:"submit",disabled:l||!(Object.keys(o).length===Object.keys(O).length&&0===Object.keys(n).length),children:"Sign up"})})]})}}),Object(g.jsxs)("p",{children:["Do you already have an account? Go to ",Object(g.jsx)(t.b,{to:l.a.login,children:"LOGIN!"})]})]})]})}}}]);
//# sourceMappingURL=Registration.6c2e3a59.chunk.js.map