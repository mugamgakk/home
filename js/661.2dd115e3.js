"use strict";(self["webpackChunkfront_club"]=self["webpackChunkfront_club"]||[]).push([[661],{9661:function(e,l,a){a.r(l),a.d(l,{default:function(){return R}});var u=a(641),s=a(33),v=a(3751),n=a(953),c=a(9172);const t=e=>((0,u.Qi)("data-v-1e74e422"),e=e(),(0,u.jt)(),e),o={class:"tab-wrap",style:{"border-bottom":"1px solid #d6dce5","margin-bottom":"61px"}},r={class:"tab bottom"},i={class:"inner-w"},d=t((()=>(0,u.Lk)("h3",{class:"title-sub mb-18"},[(0,u.eW)("운영종목"),(0,u.Lk)("i",{class:"required"})],-1))),f={class:"tab square d-flex",style:{"margin-bottom":"60px"}},b=["onClick"],p=t((()=>(0,u.Lk)("h3",{class:"title-sub mb-18"},[(0,u.eW)("종목 선택"),(0,u.Lk)("i",{class:"required"})],-1))),k={class:"tab square jongmokWrap mini",style:{"margin-bottom":"80px"}},x=["onClick"],g={class:"searchOpsBox d-flex ai-center jc-between"},m={class:"d-flex"},C=["value"],E={class:"etcOps"},h=t((()=>(0,u.Lk)("span",{class:"tit mr-40"},"부가시설",-1))),L=t((()=>(0,u.Lk)("label",{class:"etcCheckbox",for:"a"},"주차장",-1))),N=t((()=>(0,u.Lk)("label",{class:"etcCheckbox",for:"b"}," 무선인터넷 ",-1))),Y=t((()=>(0,u.Lk)("label",{class:"etcCheckbox",for:"c"}," 셔틀버스 ",-1))),O=t((()=>(0,u.Lk)("label",{class:"etcCheckbox",for:"d"}," 장애인시설물 ",-1)));var y=(0,u.pM)({__name:"SearchGrevfxType",emits:["fetchList"],setup(e,{emit:l}){const a=l,t=(0,n.KR)("N"),y=(0,n.KR)([]),K=(0,n.KR)(null),j=(0,n.KR)([]),R=(0,n.KR)([]),w=(0,n.KR)([]),_=(0,n.KR)(""),X=(0,n.KR)(""),A=(0,n.KR)({pkgPsbYn:"N",wifiOffrYn:"N",shtlOprtYn:"N",dsbpFaclOffrYn:"N"});(0,c.A)({url:"/search/grevfx",param:()=>({elitEvfxYn:t.value}),dependancy:[()=>t.value],onSuccess:e=>{console.log(e),y.value=[{grEvfxNm:"전체",grEvfxCd:"*"},...e.map((e=>Object.assign({},e)))],K.value={grEvfxNm:"전체",grEvfxCd:"*"}}}),(0,c.A)({url:()=>{var e;return`/on-main/evfx/{grEvfxCd}?grEvfxCd=${null===(e=K.value)||void 0===e?void 0:e.grEvfxCd}`},dependancy:[()=>K.value],enable:()=>!!K.value,onSuccess:e=>{console.log("AA",e);const l={grEvfxNm:"전체",grEvfxCd:"",mchEvfxCd:null,mchEvfxNm:"GX프로그램"};j.value=[Object.assign({},l),...e.onMainEvfxResList],R.value=[Object.assign({},l)]}}),(0,c.A)({url:"/search/grevfx-sido",onSuccess:e=>{console.log(e),w.value=[{label:"시도 전체",value:""},...e.map((e=>({value:e.siDoCd,label:e.siDoNm})))]}});const{fetchData:F}=(0,c.A)({url:"/search/grevfx-sportclub",param:()=>Object.assign({elitEvfxYn:t.value,sido:_.value,clubNm:X.value,grEvfxCd:R.value.map((e=>e.grEvfxCd))},A.value),dependancy:[()=>K.value,()=>R.value],enable:()=>!!K.value&&!!R.value.length,onSuccess:e=>{console.log("clubs",e),a("fetchList",e)}});return(e,l)=>((0,u.uX)(),(0,u.CE)(u.FK,null,[(0,u.Lk)("div",o,[(0,u.Lk)("ul",r,[(0,u.Lk)("li",{class:(0,s.C4)({"is-active":"N"===t.value}),onClick:l[0]||(l[0]=e=>t.value="N")},"일반종목",2),(0,u.Lk)("li",{class:(0,s.C4)({"is-active":"Y"===t.value}),onClick:l[1]||(l[1]=e=>t.value="Y")},"선수반종목",2)])]),(0,u.Lk)("div",i,[d,(0,u.Lk)("ul",f,[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(y.value,(e=>{var l;return(0,u.uX)(),(0,u.CE)("li",{class:(0,s.C4)(["opsBtn",{"is-active":(null===(l=K.value)||void 0===l?void 0:l.grEvfxCd)==e.grEvfxCd}]),key:e.grEvfxCd,onClick:l=>K.value=e},(0,s.v_)(e.grEvfxNm),11,b)})),128))]),p,(0,u.Lk)("ul",k,[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(j.value,(e=>((0,u.uX)(),(0,u.CE)("li",{class:(0,s.C4)(["opsBtn",{"is-active":R.value.find((l=>l.grEvfxCd===e.grEvfxCd))}]),key:e.grEvfxCd,onClick:()=>{if("전체"===e.grEvfxNm)return void(R.value.length&&R.value.find((e=>"전체"===e.grEvfxNm))?R.value=[]:R.value=[Object.assign({},e)]);const l=R.value.find((l=>l.grEvfxCd===e.grEvfxCd));l?R.value=R.value.filter((l=>l.grEvfxCd!==e.grEvfxCd)):R.value.find((e=>"전체"===e.grEvfxNm))?R.value=[Object.assign({},e)]:R.value=[...R.value.map((e=>Object.assign({},e))),Object.assign({},e)]}},(0,s.v_)(e.grEvfxNm),11,x)))),128))]),(0,u.Lk)("div",g,[(0,u.Lk)("div",m,[(0,u.bo)((0,u.Lk)("select",{class:"jongmokSelect mr-10","onUpdate:modelValue":l[2]||(l[2]=e=>_.value=e)},[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(w.value,(e=>((0,u.uX)(),(0,u.CE)("option",{value:e.value},(0,s.v_)(e.label),9,C)))),256))],512),[[v.u1,_.value]]),(0,u.bo)((0,u.Lk)("input",{class:"keywordInput","onUpdate:modelValue":l[3]||(l[3]=e=>X.value=e),placeholder:"클럽명을 입력해주세요."},null,512),[[v.Jo,X.value]])]),(0,u.Lk)("div",E,[h,(0,u.bo)((0,u.Lk)("input",{type:"checkbox",id:"a","onUpdate:modelValue":l[4]||(l[4]=e=>A.value.pkgPsbYn=e),"true-value":"Y","false-value":"N"},null,512),[[v.lH,A.value.pkgPsbYn]]),L,(0,u.bo)((0,u.Lk)("input",{type:"checkbox",id:"b","onUpdate:modelValue":l[5]||(l[5]=e=>A.value.wifiOffrYn=e),"true-value":"Y","false-value":"N"},null,512),[[v.lH,A.value.wifiOffrYn]]),N,(0,u.bo)((0,u.Lk)("input",{type:"checkbox",id:"c","onUpdate:modelValue":l[6]||(l[6]=e=>A.value.shtlOprtYn=e),"true-value":"Y","false-value":"N"},null,512),[[v.lH,A.value.shtlOprtYn]]),Y,(0,u.bo)((0,u.Lk)("input",{type:"checkbox",id:"d","onUpdate:modelValue":l[7]||(l[7]=e=>A.value.dsbpFaclOffrYn=e),"true-value":"Y","false-value":"N"},null,512),[[v.lH,A.value.dsbpFaclOffrYn]]),O]),(0,u.Lk)("button",{class:"searchBtn",onClick:l[8]||(l[8]=(...e)=>(0,n.R1)(F)&&(0,n.R1)(F)(...e))},"검색")])])],64))}}),K=a(6262);const j=(0,K.A)(y,[["__scopeId","data-v-1e74e422"]]);var R=j}}]);
//# sourceMappingURL=661.2dd115e3.js.map