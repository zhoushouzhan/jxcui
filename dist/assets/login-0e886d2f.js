import{_ as m}from"./logo-c4b87c8b.js";import{r as i,w as n,d as f,e as _,i as e,f as d,h as c,E as w,M as p,g,y as h,Y as x,V as y,b}from"./index-169137c2.js";const v={class:"w-full h-full flex justify-center select-none"},V={class:"lg:w-[500px] max-lg:w-full space-y-2 absolute left-1/2 -translate-x-1/2 top-20 bg-white p-10 bg-opacity-65 rounded-lg"},E=e("div",{class:"flex justify-center"},[e("img",{src:m,class:"h-16 object-cover"})],-1),k=e("div",{class:"text-center font-bold text-hui-300"},"泽玛珠宝",-1),U=e("div",{class:"py-2"},null,-1),j=e("div",{class:"text-hui-100 pr-1"},[e("i",{class:"ri-user-fill ri-lg"})],-1),C=e("div",{class:"text-hui-100 pr-1"},[e("i",{class:"ri-lock-fill ri-lg"})],-1),N=e("div",{class:"absolute left-0 bottom-0 w-full text-center py-2 text-sm"}," Copyright © 2022 东海县一品网络技术有限公司 ",-1),F={__name:"login",setup(B){const t=i({username:"",password:""}),a=i({username:"",password:""});n(()=>t.username,(r,s)=>{r==""?a.username="请输入账号":a.username=""}),n(()=>t.password,(r,s)=>{r==""?a.password="请输入密码":a.password=""});const u=async r=>{let s=0;if(t.username==""&&(a.username="请输入账号",s++),t.password==""&&(a.password="请输入密码",s++),s>0)return!1;const o=await w("admin/login",t);if(o.code==1){p.commit("User/SET_TOKEN",o.data.token);const l=await g("index/getsite");l.code==1&&(h({type:"alter-success",text:o.msg}),p.dispatch("User/GET_USER_INFO",l.data.admin),x(),y.push("/"))}};return(r,s)=>{const o=b("ypinput");return f(),_("div",v,[e("div",V,[E,k,U,d(o,{modelValue:t.username,"onUpdate:modelValue":s[0]||(s[0]=l=>t.username=l),errormsg:a.username,maxlength:"22",placeholder:"输入账号"},{prefix:c(()=>[j]),_:1},8,["modelValue","errormsg"]),d(o,{type:"password",modelValue:t.password,"onUpdate:modelValue":s[1]||(s[1]=l=>t.password=l),errormsg:a.password,maxlength:"22",placeholder:"输入密码"},{prefix:c(()=>[C]),_:1},8,["modelValue","errormsg"]),e("div",{class:"flex justify-center"},[e("button",{type:"button",class:"btn btn-lan w-full",onClick:u},"登录")])]),N])}}};export{F as default};