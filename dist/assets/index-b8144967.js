import t from"./list-01a46f43.js";import n from"./add-6f886e08.js";import{a as l,s as m,d as i,v as c,x as r}from"./index-169137c2.js";const v={__name:"index",setup(u){const a=l(0),o=m(t),s=e=>{e.to=="add"&&(o.value=n,a.value=0),e.to=="edit"&&(a.value=e.id,o.value=n),e.to=="list"&&(a.value=0,o.value=t)};return(e,f)=>(i(),c(r(o.value),{id:a.value,onJumpCom:s},null,40,["id"]))}};export{v as default};