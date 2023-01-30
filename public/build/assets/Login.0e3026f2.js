import{j as r,a as e,u as g,r as h,F as x,H as b,L as w}from"./app.d9b1d670.js";import{c as N}from"./clsx.m.256e9345.js";import{a as n,I as c,G as y}from"./ConfirmPassword.812530a1.js";import{I as i}from"./InputError.7fcf6c8b.js";import{P as v}from"./PrimaryButton.54453fd5.js";function k({className:a,label:m,...t}){return r("label",{className:N("flex items-center gap-x-2.5",a),children:[e("input",{...t,type:"checkbox",className:"rounded border-gray-300 text-blue-600 shadow-sm focus:ring-0 focus:ring-offset-0"}),e("span",{className:"select-none text-gray-600",children:m})]})}function I({status:a,canResetPassword:m}){const{data:t,setData:u,post:d,processing:p,errors:l,reset:f}=g({email:"",password:"",remember:""});h.exports.useEffect(()=>()=>{f("password")},[]);const o=s=>{u(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)};return r(x,{children:[e(b,{title:"Log in"}),a&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),r("form",{onSubmit:s=>{s.preventDefault(),d(route("login"))},children:[r("div",{children:[e(n,{forInput:"email",value:"Email"}),e(c,{type:"text",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:o}),e(i,{message:l.email,className:"mt-2"})]}),r("div",{className:"mt-6",children:[e(n,{forInput:"password",value:"Password"}),e(c,{type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:o}),e(i,{message:l.password,className:"mt-2"})]}),e(k,{className:"mt-4",name:"remember",label:"Remember me",value:t.remember,onChange:o}),r("div",{className:"flex items-center justify-end mt-4",children:[m&&e(w,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900",children:"Forgot your password?"}),e(v,{className:"ml-4",processing:p,children:"Log in"})]})]})]})}I.layout=a=>e(y,{children:a});export{I as default};