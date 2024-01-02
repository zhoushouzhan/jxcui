import{a as x,r as f,O as E,o as M,b as w,d as a,v as T,h as k,i as t,f as L,N as z,e as d,F as J,q as K,t as i,k as _,l as m,g as C,z as V,D as Z}from"./index-169137c2.js";const $=t("i",{class:"ri-2x text-gray-500 ml-2 ri-barcode-line"},null,-1),q=t("div",{class:"text-xl px-3"},"条码打印",-1),H=t("div",{class:"flex-1 flex flex-row-reverse space-x-reverse space-x-2"},null,-1),A={class:"bg-white text-sm"},G={key:0},P={class:"yp-table"},Q=t("thead",null,[t("tr",null,[t("th",{class:"text-center w-14"},"序号"),t("th",{class:"w-36"},"图片"),t("th",null,"名称/条码"),t("th",null,"标签价"),t("th",null,"数量"),t("th",{class:"text-center"},"操作")])],-1),W={class:"text-center"},X=["src","onClick"],Y={class:"font-bold text-pink-600 py-2 text-xl"},tt=["onClick"],et=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"w-5 h-5 fill-gray-600 hover:fill-red-500"},[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"})],-1),ot=[et],st={colspan:"6"},lt={class:"p-3 text-center"},nt={class:"font-bold text-red-500 px-3"},at={class:"flex justify-center py-2 space-x-2 mt-3"},ct=t("i",{class:"ri-printer-line ri-lg pr-1"},null,-1),dt=t("i",{class:"ri-format-clear ri-lg pr-1"},null,-1),pt={__name:"barcode",props:{id:{default:0},t:{default:0}},emits:["jumpTo"],setup(it,{emit:B}){const U=B,r=x(""),g=x(!1),s=f([]),u=f(JSON.parse(sessionStorage.getItem("printBarcode"))||[]),j=()=>{U("jumpTo",{to:"list"})},D=E({get:()=>{let e=0;return s.map(o=>{e=e+parseInt(o.count)}),e}}),N=async()=>{const e=await C("goods/getall",{ids:u});if(e.code==1)for(let o=0;o<e.data.length;o++)e.data[o].count=1,s.push({goods_id:e.data[o].id,title:e.data[o].title,count:1,labelprice:e.data[o].labelprice,code:e.data[o].code,thumbFile:e.data[o].thumbFile})},F=async()=>{const e=await C("goods/details",{code:r.value});e.code==1&&(e.data.count=1,s.unshift(e.data)),r.value=""},I=e=>{let o=s[e];u.splice(u.indexOf(o.goods_id),1),s.splice(e,1),sessionStorage.setItem("printBarcode",JSON.stringify(u))},O=()=>{V({text:"确定清空吗？"}).then(()=>{s.length=0,sessionStorage.removeItem("printBarcode")}).catch(()=>{console.log("cancel clearbarcode")})},R=async()=>{V({text:"确定生成吗？"}).then(async()=>{let e=[];s.map((v,rt)=>{e.push({id:v.goods_id,numbers:v.count})});let o=[];o=await Z("goods/barcode",e);let p=new Blob([o.data]),b=o.headers["content-disposition"],h=new RegExp("filename=([^;]+\\.[^\\.;]+);*").exec(b),c=decodeURI(h[1]),n=document.createElement("a"),y=window.URL.createObjectURL(p);n.style.display="none",n.href=y,n.download=c,document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(y)}).catch(e=>{console.log("no",e)})},S=e=>{window.open(e)};return M(async()=>{await N(),g.value=!0}),(e,o)=>{const p=w("ypinput"),b=w("yplayout");return g.value?(a(),T(b,{key:0},{header:k(()=>[$,q,H,t("button",{class:"yp-button yp-button-sm yp-button-orange rounded-sm",onClick:j},"返回")]),list:k(()=>[t("div",A,[t("div",null,[L(p,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=l=>r.value=l),disabled:"",placeholder:"录入条码",onKeyup:z(F,["enter"])},null,8,["modelValue"])]),s.length?(a(),d("div",G,[t("table",P,[Q,t("tbody",null,[(a(!0),d(J,null,K(s,(l,h)=>(a(),d("tr",null,[t("td",W,i(h+1),1),t("td",null,[t("img",{src:l.thumbFile,class:"w-32 object-cover",onClick:c=>S(l.thumbFile)},null,8,X)]),t("td",null,[t("div",null,i(l.title),1),t("div",Y,i(l.code),1)]),t("td",null,"￥"+i(l.labelprice),1),t("td",null,[L(p,{modelValue:l.count,"onUpdate:modelValue":c=>l.count=c,placeholder:"打印数量"},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[t("div",{class:"flex items-center justify-center",onClick:c=>I(h)},ot,8,tt)])]))),256))]),t("tfoot",null,[t("tr",null,[t("td",st,[t("div",lt,[_(" 合计"),t("span",nt,i(D.value),1),_("个 ")])])])])])])):m("",!0),t("div",at,[s.length?(a(),d("button",{key:0,class:"yp-button yp-button-orange rounded",type:"button",onClick:R},[ct,_(" 生成打印模板 ")])):m("",!0),s.length?(a(),d("button",{key:1,class:"yp-button yp-button-black rounded",type:"button",onClick:O},[dt,_(" 清空 ")])):m("",!0)])])]),_:1})):m("",!0)}}};export{pt as default};