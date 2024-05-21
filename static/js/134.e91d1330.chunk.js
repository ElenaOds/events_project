"use strict";(self.webpackChunkevents_project=self.webpackChunkevents_project||[]).push([[134],{22:(n,e,i)=>{i.d(e,{A:()=>c});var d,r=i(528),t=i(403),a=i(475);const o=(0,t.Ay)(a.N_)(d||(d=(0,r.A)(["\n   display: inline-block;\n   text-decoration: none;\n   text-align: center;\n   font-weight: 500;\n   font-size: 12px;\n   color: var(--add-text-color);\n   padding: 3px;\n   background: var(--add-bg-color);\n   margin-bottom: 16px;\n   width: 60px;\n   border-radius: 5px;\n   \n\n   @media (min-width: 768px) {\n    margin-bottom: 18px;\n  }\n\n  @media (min-width: 1280px) {\n    font-size: 14px;\n    width: 70px;\n    margin-bottom: 20px;\n  }\n\n   &:hover,\n   &:focus {\n    color: var(--add-text-color);\n    background: var(--orange-color);\n    outline: none;\n   }\n"])));var p=i(579);const c=n=>{let{backLinkHref:e}=n;return(0,p.jsx)(o,{to:e,children:"Go back"})}},134:(n,e,i)=>{i.r(e),i.d(e,{default:()=>C});var d,r,t,a,o,p,c,s,x=i(43),m=i(216),l=i(3),g=i(758),h=i(22),w=i(528),v=i(403),f=i(475);const u=v.Ay.div(d||(d=(0,w.A)(["\n    padding: 16px;\n\n    @media screen and (min-width: 1768px) {\n        padding: 18px; \n    }\n\n    @media screen and (min-width: 1280px) {\n        padding: 24px; \n    }\n"]))),b=v.Ay.h2(r||(r=(0,w.A)(["\n    font-weight: 600;\n    font-size: 16px;\n    color: var(--text-color);\n    margin-bottom: 16px;\n\n    @media screen and (min-width: 1768px) {\n        font-size: 20px;\n        margin-bottom: 18px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        font-size: 22px;\n        margin-bottom: 20px;\n    }\n"]))),A=v.Ay.ul(t||(t=(0,w.A)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 12px;\n\n    @media screen and (min-width: 480px) {\n        grid-template-columns: repeat(2, 1fr);\n        gap: 18px;\n    }\n\n    @media screen and (min-width: 768px) {\n        grid-template-columns: repeat(3, 1fr);\n        gap: 20px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        grid-template-columns: repeat(4, 1fr);\n        gap: 20px;\n    }\n"]))),k="\n    font-weight: 400;\n    font-size: 14px;\n    color: var(--text-color);\n  \n    @media screen and (min-width: 768px) {\n        font-size: 16px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        font-size: 18px;    \n    }\n",j=v.Ay.p(a||(a=(0,w.A)(["\n    ","\n    & > span {\n        color: var(--orange-color);\n    }\n"])),k),y=v.Ay.li(o||(o=(0,w.A)(["\n    padding: 8px;\n    border-radius: 8px;\n    background-color: var(--add-bg-color);\n    display: grid;\n    gap: 8px;\n\n    @media screen and (min-width: 768px) {\n        gap: 10px;\n        padding: 10px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        gap: 12px;\n        padding: 16px;   \n    }\n"]))),_=v.Ay.div(p||(p=(0,w.A)(["\n@media screen and (min-width: 480px) {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n}\n\n@media screen and (min-width: 768px) {\n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n}\n\n@media screen and (min-width: 1280px) {\n    grid-column: 1 / 5;\n    grid-row: 1 / 2;\n}\n"]))),z=v.Ay.p(c||(c=(0,w.A)(["\n    ","\n    margin-bottom: 12px;\n\n    @media (min-width: 1280px) {\n        margin-bottom: 14px;\n    }\n\n    @media (min-width: 1280px) {\n        margin-bottom: 16px;\n    }\n"])),k),L=(0,v.Ay)(f.N_)(s||(s=(0,w.A)(["\ndisplay: inline-block;\ntext-decoration: none;\ntext-align: center;\n","\ncolor: var(--add-text-color);\npadding: 3px;\nbackground: var(--add-bg-color);\nwidth: 70px;\nborder-radius: 5px;\n\n@media (min-width: 1280px) {\n width: 80px;\n padding: 5px;\n}\n\n&:hover,\n&:focus {\n color: var(--add-text-color);\n background: var(--orange-color);\n outline: none;\n}\n"])),k);var N=i(579);const C=()=>{var n,e;const i=(0,l.wA)(),d=(0,m.zy)(),{_id:r}=(0,m.g)(),t=(0,l.d4)((n=>n.events.data)).find((n=>n._id===r)),a=(0,l.d4)((n=>n.participants.list));(0,x.useEffect)((()=>{i((0,g.L)(r))}),[i,r]);const o=null!==(n=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/events";return(0,N.jsxs)(u,{children:[(0,N.jsx)(h.A,{backLinkHref:o}),(0,N.jsxs)(b,{children:["List of participatns for ",t.title," event"]}),(0,N.jsx)(A,{children:0===a.length?(0,N.jsxs)(_,{children:[(0,N.jsx)(z,{children:"There are no registered participants. Be the first one and register for the event"}),(0,N.jsx)(L,{to:"/events/".concat(t._id,"/registration"),id:t._id,children:"Register"})]}):a.map((n=>(0,N.jsxs)(y,{id:n._id,children:[(0,N.jsxs)(j,{children:[(0,N.jsx)("span",{children:"Name: "}),n.name]}),(0,N.jsxs)(j,{children:[(0,N.jsx)("span",{children:"E-mail: "}),n.email]})]},n._id)))})]})}}}]);
//# sourceMappingURL=134.e91d1330.chunk.js.map