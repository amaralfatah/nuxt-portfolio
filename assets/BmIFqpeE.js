import{_ as c}from"./8Xer_2yl.js";import{_ as i}from"./DKu574GP.js";import{B as p,o as l,c as s,a as t,F as m,f,b as h,w as _,t as u,n as d,g as x}from"./BAj3ULd8.js";const g={class:"sticky top-0 hidden w-48 h-screen py-20 md:block"},b={class:"flex flex-col w-full h-full gap-12","aria-label":"Desktop navigation"},k={class:"flex flex-col gap-4 list-none"},F={__name:"Sidebar",setup(y){const o=[{path:"/",label:"Home"},{path:"/portfolios",label:"Portfolio"},{path:"/links",label:"Link"},{path:"/stacks",label:"Stack"},{path:"/drops",label:"Drop"},{path:"/#connect",label:"Contact"}],n=p();return(w,e)=>{const r=c;return l(),s("aside",g,[t("nav",b,[e[0]||(e[0]=t("div",{class:"flex flex-col items-start w-full gap-4 text-left"},[t("img",{src:i,alt:"Amar Al Fatah",class:"rounded-full",width:"72",height:"72"}),t("div",null,[t("span",{class:"text-lg font-medium"},"Amar Al Fatah"),t("p",{class:"text-mygray"},"Software Engineer")])],-1)),t("ul",k,[(l(),s(m,null,f(o,a=>t("li",{key:a.path},[h(r,{to:a.path,class:d(["flex items-center gap-2 py-1 transition-colors text-mygray hover:text-mywhite",{"text-mywhite":x(n).path===a.path}])},{default:_(()=>[t("span",null,u(a.label),1)]),_:2},1032,["to","class"])])),64))])])])}}};export{F as default};