import{a as p,r as f,o as x,g,b as u,d as V,e as b,i as t,f as d,k as m,l as h}from"./index-169137c2.js";const k={key:0},w={class:"p-9 text-sm"},C={class:"mt-8 space-y-2"},N={class:"flex items-center"},B=t("div",{class:"w-24 text-right pr-5"},"所属分类",-1),U={class:"flex-1"},D={class:"flex"},L=t("div",{class:"w-24 text-right pr-5"},"名称",-1),$={class:"flex-1",id:"title"},j={class:"flex"},E=t("div",{class:"w-24 text-right pr-5"},"绑定栏目",-1),M={class:"flex-1",id:"title"},T={class:"flex justify-center py-3 space-x-2"},q=t("i",{class:"ri-save-line ri-lg pr-1"},null,-1),z=t("i",{class:"ri-arrow-go-back-fill mr-1"},null,-1),F={__name:"edit",props:["preitem"],emits:["save","update","close"],setup(_,{emit:v}){const a=p(!1),i=_,n=v,e=f({id:0,title:"",pid:""}),r=p([]);return x(async()=>{e.id=i.preitem.id,e.pid=i.preitem.pid,e.title=i.preitem.title,e.category_id=i.preitem.category_id;const l=await g("/classify/gettree",{id:e.id});l.code&&(r.value=l.data),a.value=!0}),(l,s)=>{const y=u("yptree"),c=u("ypinput");return a.value?(V(),b("div",k,[t("div",w,[t("div",C,[t("div",N,[B,t("div",U,[d(y,{itemList:r.value,modelValue:e.pid,"onUpdate:modelValue":s[0]||(s[0]=o=>e.pid=o)},null,8,["itemList","modelValue"])])]),t("div",D,[L,t("div",$,[d(c,{modelValue:e.title,"onUpdate:modelValue":s[1]||(s[1]=o=>e.title=o)},null,8,["modelValue"])])]),t("div",j,[E,t("div",M,[d(c,{modelValue:e.category_id,"onUpdate:modelValue":s[2]||(s[2]=o=>e.category_id=o)},null,8,["modelValue"])])])]),t("div",T,[t("button",{class:"yp-button yp-button-orange rounded",type:"button",onClick:s[3]||(s[3]=o=>n("update",e))},[q,m(" 保存 ")]),t("button",{class:"yp-button yp-button-gray rounded",type:"button",onClick:s[4]||(s[4]=o=>n("close"))},[z,m(" 取消 ")])])])])):h("",!0)}}};export{F as default};