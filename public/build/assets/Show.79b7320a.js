import{j as e,a as i,H as d,F as m}from"./app.73e8f943.js";import{C as c,A as h}from"./App.7a060c98.js";import{H as r}from"./Header.fd7c9194.js";import{G as p,A as f}from"./ArticleBlock.22d30615.js";import{P as g}from"./Pagination.365a85a2.js";import"./clsx.m.256e9345.js";function j({user:a,...o}){const{data:t,meta:l,links:s}=o.articles;return e("div",{children:[i(d,{title:a.name}),e(r,{children:[i(r.Title,{children:a.name}),e(r.Subtitle,{children:["Joined ",a.joined,"."]})]}),i(c,{children:t.length?e(m,{children:[i(p,{children:t.map(n=>i(f,{article:n},n.slug))}),i(g,{meta:l,links:s})]}):i("p",{children:"No articles yet."})})]})}j.layout=a=>i(h,{children:a});export{j as default};