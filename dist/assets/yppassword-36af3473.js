import{d as c,e as p,i as d}from"./index-ffc5c309.js";const u={class:"flex-1"},n=["value","placeholder"],i={__name:"yppassword",props:{modelValue:{default:""},placeholder:{type:String},col:Object},emits:["update:modelValue"],setup(e,{emit:l}){const o=l,s=t=>{const a=t.target.value;o("update:modelValue",a)};return(t,a)=>(c(),p("div",u,[d("input",{type:"password",class:"yp-input",value:e.modelValue,onInput:s,placeholder:e.col.tips},null,40,n)]))}};export{i as default};