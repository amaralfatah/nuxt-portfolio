import{_ as d}from"./4AHmR20p.js";import{_ as f}from"./2c23sqR_.js";import{S as h,h as m,U as _,i as g,V as x,W as y,X as v,o as r,c as i,a as t,F as b,f as w,b as k,w as S,t as c,n as V,g as C,d as A,Y as F}from"./Ceis__Qt.js";const I={class:"sticky top-0 hidden w-48 h-screen py-20 md:block"},T={class:"flex flex-col w-full h-full gap-12","aria-label":"Desktop navigation"},B={class:"flex flex-col gap-4 list-none"},E={__name:"Sidebar",setup(D){const p=[{path:"/",label:"Home"},{path:"/portfolios",label:"Portfolio"},{path:"/links",label:"Connection"},{path:"/stacks",label:"Post"},{path:"/drops",label:"Product"},{path:"/journeys",label:"Journey"},{path:"/#connect",label:"Contact"}],u=h(),n=m(0),o=_(F,"visitors");return g(async()=>{{const l=new Date().toISOString().split("T")[0];if(!localStorage.getItem(`visited_${l}`)){const a=(await x(o)).val()||0;await y(o,a+1),localStorage.setItem(`visited_${l}`,"true")}v(o,e=>{n.value=e.val()||0})}}),(l,s)=>{const e=d;return r(),i("aside",I,[t("nav",T,[s[0]||(s[0]=t("div",{class:"flex flex-col items-start w-full gap-4 text-left"},[t("img",{src:f,alt:"Amar Al Fatah",class:"rounded-full",width:"72",height:"72"}),t("div",null,[t("span",{class:"text-lg font-medium"},"Amar Al Fatah"),t("p",{class:"text-mygray"},"Software Engineer")])],-1)),t("ul",B,[(r(),i(b,null,w(p,a=>t("li",{key:a.path},[k(e,{to:a.path,class:V(["flex items-center gap-2 py-1 transition-colors text-mygray hover:text-mywhite",{"text-mywhite":C(u).path===a.path}])},{default:S(()=>[t("span",null,c(a.label),1)]),_:2},1032,["to","class"])])),64))])]),t("p",null,[s[1]||(s[1]=A(" Visitor counts : ")),t("span",null,c(n.value),1)])])}}};export{E as default};