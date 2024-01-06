import{u as R,a as U,r as h,w as z,o as A,b as y,c as F,d as n,v as H,h as w,i as t,m as k,f as x,e as a,F as q,q as O,t as r,l as p,k as S,g as G,y as v,z as J,E as K,A as Q}from"./index-0f467f6d.js";const W=t("i",{class:"ri-2x ri-database-2-line text-gray-500 ml-2"},null,-1),X=["innerHTML"],Y={class:"flex items-center justify-between"},Z=t("div",{class:"space-x-2"},[t("button",{class:"btn"},"入库单"),t("button",{class:"btn"},"出库单")],-1),tt={class:"flex space-x-2"},et={class:"table-auto w-full text-sm"},st={class:"bg-gray-100"},ot={class:"px-2 py-2 border w-10 font-thin"},nt=t("th",{class:"px-2 py-2 border w-10 text-center"},"ID",-1),at=t("th",{class:"px-2 py-2 border w-44 text-center max-lg:hidden"},"单号",-1),lt=t("th",{class:"px-2 py-2 border text-left"},"类型",-1),dt=t("th",{class:"px-2 py-2 border text-left"},"操作员",-1),rt=t("th",{class:"px-2 py-2 border w-32"},"库存",-1),ct=t("th",{class:"px-2 py-2 border w-32"},"状态",-1),it=t("th",{class:"px-2 py-2 border w-44 max-lg:hidden"},"录入时间",-1),pt=t("th",{class:"px-2 py-2 border w-40 text-center"},"操作",-1),ut={class:"border px-2"},_t={class:"border px-2 text-center"},mt={class:"border px-2 max-lg:hidden"},ht={class:"border px-2"},xt={key:0,class:"text-lime-600 bg-gray-100 px-2 py-[2px] rounded"},bt={key:1,class:"text-rose-500 bg-gray-100 px-2 py-[2px] rounded"},gt={class:"border px-2 space-x-2 text-sm"},yt={class:"border px-2 text-center"},kt={class:"border px-2 text-center"},ft={key:0,class:"bg-red-400 text-white px-2 py-[2px] rounded"},Ct={key:1,class:"bg-green-700 text-white px-2 py-[2px] rounded"},wt={class:"border px-2 max-lg:hidden"},vt={class:"border px-2 py-2 text-center"},Vt=["onClick"],Dt=["onClick"],Pt=["onClick"],$t=["onClick"],Lt={class:"border p-2"},Tt={class:"border p-2",colspan:"8"},jt={key:0,class:"mt-3"},Et={__name:"list",props:{page:{default:0}},emits:["jumpCom"],setup(V,{emit:D}){const P=V,c=D,$=R().meta,L=U(!1),l=h({totalRecords:0,pageCount:0,currentPage:P.page}),T=s=>{l.currentPage=s,b()},m=h([]),d=h([]),u=h([]);z(u,(s,o)=>{d.length=0,s.length>0?m.forEach(i=>{d.push(i.id)}):d.length=0});const j=s=>{s.type==1&&c("jumpCom",{to:"in",id:s.id,page:l.currentPage}),s.type==2&&c("jumpCom",{to:"out",id:s.id,page:l.currentPage})},B=s=>{c("jumpCom",{to:"view",id:s,page:l.currentPage})},N=s=>{c("jumpCom",{to:"checkorder",id:s,page:l.currentPage})},b=async()=>{let s=await G("kucundan/index",{page:l.currentPage});if(s.code==1){l.currentPage=s.data.current_page,l.pageCount=s.data.last_page,l.totalRecords=s.data.total,m.length=0;for(let o in s.data.data)m[o]=s.data.data[o]}L.value=!0},f=s=>{if(s==0&&(s=d.length?d:0),!s){v({type:"alter-error",text:"请选择项目"});return}J({text:"确认删除吗？"}).then(async()=>{const o=await K("kucundan/delete",{ids:s});o.code&&(v({type:"alter-success",text:o.msg}),b())}).catch(o=>{})},C=s=>{const o=$.mod.name;return Q(o).indexOf(s)>=0};return A(()=>{b()}),(s,o)=>{const i=y("ypcheckbox"),E=y("yppage"),I=y("yplayout"),g=F("tooltip");return n(),H(I,null,{header:w(e=>[W,t("div",{class:"text-xl px-3",innerHTML:e.meta.title},null,8,X)]),list:w(()=>[t("div",Y,[Z,t("div",tt,[t("div",null,[t("button",{class:"btn btn-lan",onClick:o[0]||(o[0]=e=>c("jumpCom",{to:"in"}))},"入库")]),t("div",null,[t("button",{class:"btn btn-hong",onClick:o[1]||(o[1]=e=>c("jumpCom",{to:"out"}))},"出库")])])]),t("table",et,[t("thead",st,[t("tr",null,[t("th",ot,[k(x(i,{value:"all",modelValue:u,"onUpdate:modelValue":o[2]||(o[2]=e=>u=e)},null,8,["modelValue"]),[[g,"全选",void 0,{top:!0}]])]),nt,at,lt,dt,rt,ct,it,pt])]),t("tbody",null,[(n(!0),a(q,null,O(m,(e,M)=>(n(),a("tr",{class:"hover:bg-gray-100",key:M},[t("td",ut,[x(i,{value:e.id,modelValue:d,"onUpdate:modelValue":o[3]||(o[3]=_=>d=_)},null,8,["value","modelValue"])]),t("td",_t,r(e.id),1),t("td",mt,r(e.sn),1),t("td",ht,[e.type==1?(n(),a("span",xt,r(e.typeTip),1)):p("",!0),e.type==2?(n(),a("span",bt,r(e.typeTip),1)):p("",!0)]),t("td",gt,r(e.admin.truename||e.admin.username),1),t("td",yt,r(e.goodsCount),1),t("td",kt,[e.enabled==0?(n(),a("span",ft,"核验中")):(n(),a("span",Ct,"己入库"))]),t("td",wt,r(e.create_time),1),t("td",vt,[e.enabled==0?(n(),a("button",{key:0,class:"btn btn-lan mr-2",onClick:_=>j(e)},"编辑",8,Vt)):(n(),a("button",{key:1,class:"btn mr-2",onClick:_=>B(e.id)},"查看",8,Dt)),C("enabled")&&e.enabled==0?(n(),a("button",{key:2,class:"btn btn-zi mr-2",onClick:_=>N(e.id)},"核验",8,Pt)):p("",!0),e.enabled==0?(n(),a("button",{key:3,class:"btn btn-hong",onClick:_=>f(e.id)},"删除",8,$t)):p("",!0)])]))),128))]),t("tfoot",null,[t("tr",null,[t("td",Lt,[k(x(i,{value:"all",modelValue:u,"onUpdate:modelValue":o[4]||(o[4]=e=>u=e)},null,8,["modelValue"]),[[g,"全选",void 0,{right:!0}]])]),t("td",Tt,[C("delete")?k((n(),a("button",{key:0,class:"yp-button yp-button-red yp-button-sm rounded-sm",onClick:o[5]||(o[5]=e=>f(0))},[S("批量删除")])),[[g,"批量删除",void 0,{bottom:!0}]]):p("",!0)])])])]),l.pageCount>1?(n(),a("div",jt,[x(E,{onTopage:T,pageData:l},null,8,["pageData"])])):p("",!0)]),_:1})}}};export{Et as default};
