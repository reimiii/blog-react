import{r as c,a as e,j as a,H as o,L as i}from"./app.d50e086e.js";import{C as h,A as m}from"./App.7ff746a4.js";import{H as s}from"./Header.0a706884.js";import{H as u,D as g}from"./browser.d2dca6a9.js";import"./clsx.m.256e9345.js";function p({children:l}){return c.exports.useEffect(()=>{u.highlightAll()},[]),e("div",{className:"prose max-w-none prose-blue prose-img:rounded-lg",dangerouslySetInnerHTML:{__html:g.sanitize(l)}})}function x(l){var d;const{data:r,related:n}=l.article;return a("div",{children:[e(o,{title:r.title}),a(s,{children:[a("div",{className:"mb-4",children:[a("div",{className:"text-gray-400 text-sm mb-4",children:["Fill in :"," ",e(i,{className:"text-white underline",href:r.category.slug,children:(d=r.category.name)!=null?d:"Uncategorized"})," ","by"," ",e(i,{className:"text-white underline",href:`/u/${r.author.username}`,children:r.author.name})]}),r.tags.length?e("div",{className:"flex items-center gap-x-2",children:r.tags.map(t=>e(i,{className:"bg-gray-700 text-white px-2 py-1 text-xs font-medium hover:bg-gray-600 transition duration-200 rounded shadow border-t border-gray-600",href:route("tags.show",t.slug),children:t.name},t.slug))}):null]}),e(s.Title,{children:r.title}),e(s.Subtitle,{children:r.teaser})]}),e(h,{children:a("div",{className:"grid grid-cols-12 gap-16",children:[a("div",{className:"col-span-8",children:[r.picture?e("img",{className:"rounded mb-6 w-full",src:r.picture,alt:""}):null,e(p,{children:r.body})]}),a("div",{className:"col-span-4",children:[a("h4",{className:"text-xl font-semibold text-black border-b pb-2 mb-4",children:["Related categories : ",r.category.name]}),n.length?e("ul",{className:"space-y-2",children:n.map(t=>e("li",{children:e(i,{className:"line-clamp-1 text-gray-700 hover:text-gray-600 transition duration-200 underline",href:route("articles.show",t.slug),children:t.title})},t.slug))}):null]})]})})]})}x.layout=l=>e(m,{children:l});export{x as default};