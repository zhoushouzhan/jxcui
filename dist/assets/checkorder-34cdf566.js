import{a as k,r as g,o as E,b as V,d as l,v as L,h as C,i as t,e as a,F as b,q as x,n as $,t as s,f as p,k as q,l as U,g as w,z as I,E as M,y as S}from"./index-169137c2.js";const T=t("i",{class:"ri-2x text-gray-500 ml-2 ri-checkbox-multiple-fill"},null,-1),A=t("div",{class:"text-xl px-3"},"审批中心",-1),G=t("div",{class:"flex-1 flex flex-row-reverse space-x-reverse space-x-2"},null,-1),H={class:"flex space-x-1"},J={class:"overflow-y-auto h-[900px]"},K={class:"yp-table"},P=t("thead",null,[t("tr",null,[t("th",{class:"text-center"},"序号"),t("th",{class:"text-center"},"图片"),t("th",null,"名称"),t("th",{class:"w-24"},"成本"),t("th",{class:"w-28"},"售价"),t("th",{class:"w-20"},"数量"),t("th",null,"备注")])],-1),Q=["onClick"],R={class:"text-center"},W={class:"w-40"},X=["src"],Y={class:"text-red-600 font-bold"},Z={class:"flex-1"},tt={class:"overflow-y-auto max-h-[440px]"},et={class:"yp-table"},st=t("thead",null,[t("tr",null,[t("th",{class:"text-center w-20"},"序号"),t("th",null,"名称"),t("th",{class:"w-24"},"编码"),t("th",{class:"w-24"},"标签"),t("th",{class:"w-24"},"成本"),t("th",{class:"w-24"},"零售价"),t("th",{class:"w-28"},"日期")])],-1),ot={key:0},lt={class:"hover:bg-gray-100"},at={class:"text-center"},nt={class:"whitespace-nowrap"},ct={class:"whitespace-nowrap"},dt={key:1},rt=t("tr",null,[t("td",{colspan:"3"},[t("div",{class:"text-center py-2 text-gray-400"},"暂无数据")])],-1),it=[rt],ut={class:"overflow-y-auto max-h-[440px]"},_t={class:"yp-table"},ht=t("thead",null,[t("tr",null,[t("th",{class:"text-center w-20"},"图片"),t("th",null,"名称"),t("th",{class:"w-24"},"编码"),t("th",{class:"w-24"},"标签"),t("th",{class:"w-24"},"成本"),t("th",{class:"w-24"},"零售价"),t("th",{class:"w-28"},"日期")])],-1),pt={key:0},yt={class:"hover:bg-gray-100"},gt=["src","onClick"],bt={class:"whitespace-nowrap"},xt={class:"whitespace-nowrap"},wt={key:1},mt=t("tr",null,[t("td",{colspan:"3"},[t("div",{class:"text-center py-2 text-gray-400"},"暂无数据")])],-1),vt=[mt],ft={class:"flex py-2 space-x-2 mt-3"},kt=t("i",{class:"ri-save-line ri-lg pr-1"},null,-1),Ct={__name:"checkorder",props:{id:{default:0}},emits:["jumpCom"],setup(j,{emit:F}){const m=j,v=F,f=k(!1),y=k(0),c=g({godown_id:0,type:1,bill:[]}),_=g([]),i=g([]),B=o=>{window.open(o)},D=()=>{v("jumpCom",{to:"list"})},N=async o=>{const d=await w("kucundan/read",{id:o});d.code==1&&(c.id=o,c.enabled=1,c.godown_id=d.data.godown_id,c.type=d.data.type,c.bill=d.data.bill)},O=async o=>{if(y.value==o.goods_id)return;y.value=o.goods_id;let d=o.goods_id;const r=await w("goodsitem/near",{goods_id:d});r.code==1&&(_.length=0,Object.keys(r.data).map(e=>{_[e]=r.data[e]}));const u=await w("goodsitem/label",{goods_id:d});u.code==1&&(i.length=0,Object.keys(u.data).map(e=>{i[e]=u.data[e]})),console.log(i)},z=async()=>{I({text:"确定入库吗？"}).then(async()=>{const o=await M("kucundan/save",c);o.code==1&&(S({type:"alter-success",text:o.msg}),v("jumpCom",{to:"list"}))}).catch(()=>{console.log("cancel")})};return E(async()=>{m.id&&await N(m.id),f.value=!0}),(o,d)=>{const r=V("ypinput"),u=V("yplayout");return f.value?(l(),L(u,{key:0},{header:C(()=>[T,A,G,t("button",{class:"yp-button yp-button-sm yp-button-orange rounded-sm",onClick:D},"返回")]),list:C(()=>[t("div",H,[t("div",J,[t("table",K,[P,t("tbody",null,[(l(!0),a(b,null,x(c.bill,(e,h)=>(l(),a("tr",{class:$(["hover:bg-gray-100",{"bg-gray-200":y.value==e.goods_id}]),onClick:n=>O(e)},[t("td",R,s(h+1),1),t("td",W,[t("img",{src:e.thumbFile,class:"object-cover"},null,8,X)]),t("td",null,[t("div",null,s(e.title),1),t("div",Y,s(e.code),1)]),t("td",null,[p(r,{modelValue:e.inprice,"onUpdate:modelValue":n=>e.inprice=n,placeholder:"请输入价格"},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[p(r,{modelValue:e.storeprice,"onUpdate:modelValue":n=>e.storeprice=n,placeholder:"销售价格"},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[p(r,{modelValue:e.numbers,"onUpdate:modelValue":n=>e.numbers=n,placeholder:"请输入数量"},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[p(r,{modelValue:e.intro,"onUpdate:modelValue":n=>e.intro=n,placeholder:"请输入备注"},null,8,["modelValue","onUpdate:modelValue"])])],10,Q))),256))])])]),t("div",Z,[t("div",tt,[t("table",et,[st,_.length?(l(),a("tbody",ot,[(l(!0),a(b,null,x(_,(e,h)=>(l(),a("tr",lt,[t("td",at,s(h+1),1),t("td",nt,s(e.title),1),t("td",null,s(e.code),1),t("td",null,s(e.goods.label),1),t("td",null,s(e.inprice),1),t("td",null,s(e.goods.storeprice),1),t("td",ct,s(e.create_time.substring(0,e.create_time.indexOf(" "))),1)]))),256))])):(l(),a("tbody",dt,it))])]),t("div",ut,[t("table",_t,[ht,i.length?(l(),a("tbody",pt,[(l(!0),a(b,null,x(i,(e,h)=>(l(),a("tr",yt,[t("td",null,[t("img",{src:e.goods.thumbFile,class:"max-h-10",onClick:n=>B(e.goods.thumbFile)},null,8,gt)]),t("td",bt,s(e.title),1),t("td",null,s(e.goods.code),1),t("td",null,s(e.goods.label),1),t("td",null,s(e.inprice),1),t("td",null,s(e.goods.storeprice),1),t("td",xt,s(e.create_time.substring(0,e.create_time.indexOf(" "))),1)]))),256))])):(l(),a("tbody",wt,vt))])])])]),t("div",ft,[c.bill.length?(l(),a("button",{key:0,class:"yp-button rounded",type:"button",onClick:z},[kt,q(" 提交 ")])):U("",!0)])]),_:1})):U("",!0)}}};export{Ct as default};