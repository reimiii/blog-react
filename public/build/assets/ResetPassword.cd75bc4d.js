import{u as f,r as v,j as a,F as N,a as s,H as h}from"./app.d50e086e.js";import{a as l,I as n,G as g}from"./ConfirmPassword.029dada8.js";import{I as i}from"./InputError.8c1b011e.js";import{P as I}from"./PrimaryButton.dad38b17.js";import"./clsx.m.256e9345.js";function b({token:r,email:d}){const{data:t,setData:p,post:u,processing:c,errors:o,reset:w}=f({token:r,email:d,password:"",password_confirmation:""});v.exports.useEffect(()=>()=>{w("password","password_confirmation")},[]);const m=e=>{p(e.target.name,e.target.value)};return a(N,{children:[s(h,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),u(route("password.update"))},children:[a("div",{children:[s(l,{forInput:"email",value:"Email"}),s(n,{type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",onChange:m}),s(i,{message:o.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password",value:"Password"}),s(n,{type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:m}),s(i,{message:o.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password_confirmation",value:"Confirm Password"}),s(n,{type:"password",name:"password_confirmation",value:t.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:m}),s(i,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(I,{className:"ml-4",processing:c,children:"Reset Password"})})]})]})}b.layout=r=>s(g,{children:r});export{b as default};
