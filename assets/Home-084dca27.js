import{s as o,L as X,a as N,r as i,j as t}from"./index-0211207a.js";const Y="/assets/hero-a93b1a0a.png",J=o.section`
  background-image: linear-gradient(
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    ),
    url(${Y});
  background-color: #172234;
  background-size: cover;
  /* background-position: 50%; */
  background-repeat: no-repeat;
`,Q=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  padding-left: 0;
  padding-right: 0;
  padding-top: calc((100vh - 270px) / 2);
  padding-bottom: calc((100vh - 270px) / 2);
  margin: 0 auto;
  text-align: center;

  & h1 {
    color: #fff;
    text-align: center;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25; /* 125% */
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
      font-size: 64px;
    }
  }
  & p {
    color: #fff;
    text-align: center;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3; /* 133.333% */
    letter-spacing: -0.48px;
    margin-bottom: 30px;
    max-width: 76%;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`,Z=o.section`
  padding: 50px 20px;
  & h2 {
    color: #b29f7e;
    /* font-family: Merriweather; */
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2; /* 121.429% */
  }
  @media screen and (min-width: 1280px) {
    padding: 50px 80px;
  }
`,ee=o.div`
  max-width: 1280px;
  margin: 0 auto;
`,te=o.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* width: 1440px; */
  gap: 20px;
  margin-top: 20px;
`,ie=o.li`
  position: relative;
  /* flex-basis: calc((100% - 20px) / 2); */
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 530px;
  }
  @media screen and (min-width: 1440px) {
    width: 630px;
  }
`,re=o.div`
  display: flex;
`,ne=o.div`
  display: flex;
  align-items: flex-end;
  gap: 60px;
  position: absolute;
  bottom: 20px;
  left: 14px;
  color: #fff;

  color: #fff;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2; /* 122.222% */
  @media screen and (min-width: 768px) {
    gap: 80px;
    font-size: 18px;
  }
`,ae=o.p`
  font-family: Merriweather;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7; /* 170% */
  margin-bottom: 5px;
`,oe=o.div`
  display: flex;
  gap: 120px;
`,P=o.p`
  margin-bottom: 10px;
`,le=o(X)`
  display: inline-flex;
  padding: 10px 24px;
  align-items: center;
  color: #fff;

  /* Merriweather 20 */
  font-family: inherit;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7; /* 170% */
  border-radius: 8px;
  border: 1px solid #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #b29f7e;
    background-color: transparent;
    border: 1px solid #b29f7e;
  }
`;N.defaults.baseURL="https://db-zenbittech-backend.onrender.com/api";const se=async()=>{const e=await N.get("/deals");return console.log(e.data.data),e.data.data};/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var c=function(){return c=Object.assign||function(l){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(l[d]=n[d])}return l},c.apply(this,arguments)};function de(e,l){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&l.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)l.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}var ce=function(){return Math.random().toString(36).substring(6)},fe=function(e){var l=e.animate,n=l===void 0?!0:l,r=e.animateBegin,a=e.backgroundColor,d=a===void 0?"#f5f6f7":a,s=e.backgroundOpacity,p=s===void 0?1:s,h=e.baseUrl,m=h===void 0?"":h,x=e.children,g=e.foregroundColor,u=g===void 0?"#eee":g,j=e.foregroundOpacity,I=j===void 0?1:j,k=e.gradientRatio,f=k===void 0?2:k,E=e.gradientDirection,U=E===void 0?"left-right":E,W=e.uniqueKey,S=e.interval,F=S===void 0?.25:S,O=e.rtl,K=O===void 0?!1:O,C=e.speed,_=C===void 0?1.2:C,L=e.style,A=L===void 0?{}:L,z=e.title,T=z===void 0?"Loading...":z,D=e.beforeMask,y=D===void 0?null:D,H=de(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),b=W||ce(),M=b+"-diff",B=b+"-animated-diff",R=b+"-aria",V=K?{transform:"scaleX(-1)"}:null,v="0; "+F+"; 1",w=_+"s",$=U==="top-bottom"?"rotate(90)":void 0;return i.createElement("svg",c({"aria-labelledby":R,role:"img",style:c(c({},A),V)},H),T?i.createElement("title",{id:R},T):null,y&&i.isValidElement(y)?y:null,i.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+m+"#"+M+")",style:{fill:"url("+m+"#"+B+")"}}),i.createElement("defs",null,i.createElement("clipPath",{id:M},x),i.createElement("linearGradient",{id:B,gradientTransform:$},i.createElement("stop",{offset:"0%",stopColor:d,stopOpacity:p},n&&i.createElement("animate",{attributeName:"offset",values:-f+"; "+-f+"; 1",keyTimes:v,dur:w,repeatCount:"indefinite",begin:r})),i.createElement("stop",{offset:"50%",stopColor:u,stopOpacity:I},n&&i.createElement("animate",{attributeName:"offset",values:-f/2+"; "+-f/2+"; "+(1+f/2),keyTimes:v,dur:w,repeatCount:"indefinite",begin:r})),i.createElement("stop",{offset:"100%",stopColor:d,stopOpacity:p},n&&i.createElement("animate",{attributeName:"offset",values:"0; 0; "+(1+f),keyTimes:v,dur:w,repeatCount:"indefinite",begin:r})))))},q=function(e){return e.children?i.createElement(fe,c({},e)):i.createElement(pe,c({},e))},pe=function(e){return i.createElement(q,c({viewBox:"0 0 476 124"},e),i.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),i.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),i.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),i.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),i.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),i.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const he=q,G=e=>t.jsxs(he,{viewBox:"0 0 400 160",height:160,width:400,color:"#3f51b5",backgroundColor:"#36394c",style:{width:"100%"},...e,children:[t.jsx("circle",{cx:"150",cy:"86",r:"8"}),t.jsx("circle",{cx:"194",cy:"86",r:"8"}),t.jsx("circle",{cx:"238",cy:"86",r:"8"})]});G.metadata={name:"RioF",github:"clariokids",description:"Three Dots",filename:"ThreeDots"};const ge=()=>{const[e,l]=i.useState([]),[n,r]=i.useState(!1),[,a]=i.useState(null),d=async()=>{r(!0);try{const s=await se();l(s.result)}catch(s){a(s)}finally{r(!1)}};return i.useEffect(()=>{d()},[]),t.jsxs(t.Fragment,{children:[t.jsx(J,{children:t.jsxs(Q,{children:[t.jsx("h1",{children:"The chemical negatively charged"}),t.jsx("p",{children:"Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is"}),t.jsx(le,{to:"/login",children:"Get Started"})]})}),t.jsxs(Z,{children:[t.jsxs(ee,{children:[t.jsx("h2",{children:"Open deals"}),t.jsx(te,{children:e==null?void 0:e.map(({name:s,price:p,ticket:h,yield:m,daysLeft:x,sold:g,preview:u})=>t.jsx(ie,{children:t.jsxs(re,{children:[t.jsx("div",{children:t.jsx("img",{src:u,alt:s})}),t.jsxs(ne,{children:[t.jsxs("div",{children:[t.jsx(ae,{children:s}),t.jsx(P,{children:p}),t.jsxs("p",{children:["Ticket - ",h]})]}),t.jsxs(oe,{children:[t.jsxs("div",{children:[t.jsxs(P,{children:["Yield ",m]}),t.jsxs("p",{children:["Days left ",x]})]}),t.jsxs("div",{children:["Sold ",g]})]})]})]})},s))})]}),n&&t.jsx(G,{})]})]})};export{ge as default};
