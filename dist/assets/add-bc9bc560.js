import{a as h,r as b,o as g,b as i,d as w,v as C,h as p,i as e,f as l,l as k,E as U,y as j,g as B}from"./index-ddd32adc.js";const D=e("i",{class:"ri-2x text-gray-500 ml-2 ri-user-line"},null,-1),N=e("div",{class:"text-xl px-3"},"增加会员",-1),E=e("div",{class:"flex-1 flex flex-row-reverse space-x-reverse space-x-2"},null,-1),L={class:"bg-white text-sm"},M={class:"space-y-3 p-2"},O={class:"flex items-center"},q=e("div",{class:"w-24 text-right pr-5"},"姓名",-1),z={class:"flex-1"},A={class:"flex items-center"},F=e("div",{class:"w-24 text-right pr-5"},"性别",-1),G={class:"flex-1 flex space-x-3"},H={class:"flex items-center"},I=e("div",{class:"w-24 text-right pr-5"},"手机号",-1),J={class:"flex-1"},K={class:"flex items-center"},P=e("div",{class:"w-24 text-right pr-5"},"来源",-1),Q={class:"flex-1"},R={class:"flex items-center"},S=e("div",{class:"w-24 text-right pr-5"},"描述",-1),T={class:"flex-1"},X={__name:"add",props:{id:{default:0}},emits:["jumpCom"],setup(x,{emit:_}){const r=x,u=_,d=h(!1),s=b({sex:0}),v=async()=>{const a=await U("member/save",s);a.code==1&&(j({type:"alter-success",text:a.msg}),u("jumpCom",{to:"list"}))},m=()=>{u("jumpCom",{to:"list"})},f=async a=>{if(!a){d.value=!0;return}let t=await B("member/read",{id:a});t.code==1&&Object.keys(t.data).map(n=>{s[n]=t.data[n]}),d.value=!0};return g(async()=>{r.id?f(r.id):d.value=!0}),(a,t)=>{const n=i("ypinput"),c=i("ypradio"),V=i("yptextarea"),y=i("yplayout");return d.value?(w(),C(y,{key:0},{header:p(()=>[D,N,E,e("button",{class:"btn btn-chen",onClick:m},"返回")]),list:p(()=>[e("div",L,[e("div",M,[e("div",O,[q,e("div",z,[l(n,{modelValue:s.truename,"onUpdate:modelValue":t[0]||(t[0]=o=>s.truename=o),placeholder:"请输入名称"},null,8,["modelValue"])])]),e("div",A,[F,e("div",G,[l(c,{value:"1",modelValue:s.sex,"onUpdate:modelValue":t[1]||(t[1]=o=>s.sex=o),title:"男"},null,8,["modelValue"]),l(c,{value:"2",modelValue:s.sex,"onUpdate:modelValue":t[2]||(t[2]=o=>s.sex=o),title:"女"},null,8,["modelValue"]),l(c,{value:"3",modelValue:s.sex,"onUpdate:modelValue":t[3]||(t[3]=o=>s.sex=o),title:"保密"},null,8,["modelValue"])])]),e("div",H,[I,e("div",J,[l(n,{modelValue:s.mobile,"onUpdate:modelValue":t[4]||(t[4]=o=>s.mobile=o),placeholder:"请输入手机号"},null,8,["modelValue"])])]),e("div",K,[P,e("div",Q,[l(n,{modelValue:s.source,"onUpdate:modelValue":t[5]||(t[5]=o=>s.source=o),placeholder:"客户从哪个渠道来的"},null,8,["modelValue"])])]),e("div",R,[S,e("div",T,[l(V,{modelValue:s.intro,"onUpdate:modelValue":t[6]||(t[6]=o=>s.intro=o),placeholder:"请输入描述"},null,8,["modelValue"])])])]),e("div",{class:"flex justify-center py-2 space-x-2 mt-5"},[e("button",{class:"btn btn-hong",type:"button",onClick:v}," 提交 "),e("button",{class:"btn",type:"button",onClick:m}," 返回 ")])])]),_:1})):k("",!0)}}};export{X as default};