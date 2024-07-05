"use strict";(self.webpackChunkevents_project=self.webpackChunkevents_project||[]).push([[601],{954:(n,e,i)=>{i.d(e,{A:()=>p});var t,r=i(3),d=i(877),o=i(528);const a=i(403).Ay.input(t||(t=(0,o.A)(["\n    width: 100%;\n    margin-bottom: 16px;\n    height: 30px;\n    border-radius: 8px;\n    border: 1px solid var(--divider-color);\n    padding: 5px;\n    outline: none;\n\n     @media screen and (min-width: 768px) {\n      width: 500px;\n      margin-bottom: 0;\n    }\n\n    &:hover,\n    &:focus {\n    border: 1px solid var(--orange-color);\n    }\n"])));var s=i(579);const p=n=>{let{placeholder:e}=n;const i=(0,r.wA)(),t=(0,r.d4)((n=>n.filter.filter));return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a,{onChange:n=>{i((0,d.R6)(n.target.value))},value:t,placeholder:e})})}},601:(n,e,i)=>{i.r(e),i.d(e,{default:()=>Q});var t,r,d,o,a,s,p,c=i(43),l=i(3),x=i(213),h=i(528),m=i(403),g=i(475);const u="\n    font-weight: 500;\n    font-size: 14px;\n    color: var(--text-color);\n  \n    @media screen and (min-width: 768px) {\n        font-size: 16px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        font-size: 18px;    \n    }\n",w=m.Ay.li(t||(t=(0,h.A)(["\n    padding: 8px;\n    border-radius: 8px;\n    background-color: var(--add-bg-color);\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 8px;\n\n    @media screen and (min-width: 768px) {\n        gap: 10px;\n        padding: 10px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        gap: 12px;\n        padding: 16px;   \n    }\n"]))),v=m.Ay.h3(r||(r=(0,h.A)(["\n    font-weight: 500;\n    font-size: 16px;\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    color: var(--orange-color);\n\n    @media screen and (min-width: 768px) {\n        font-size: 18px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        font-size: 20px;\n    }\n"]))),f=m.Ay.p(d||(d=(0,h.A)(["\n    ","\n    grid-column: 1 / 3;\n    grid-row:  2 / 3;\n"])),u),A=m.Ay.p(o||(o=(0,h.A)(["\n    ","\n    grid-column: 1 / 3;\n    grid-row:  3 / 4;\n"])),u),b=m.Ay.p(a||(a=(0,h.A)(["\n    ","\n    grid-column: 1 / 3;\n    grid-row:  4 / 5;\n"])),u),y="\n    text-decoration: none;\n    ".concat(u,"\n    color: var(--add-text-color);\n    justify-self: center;\n\n    &:hover,\n    &:focus {\n    color: var(--orange-color);\n    outline: none;\n   }\n\n"),j=(0,m.Ay)(g.N_)(s||(s=(0,h.A)(["\n    ","\n    grid-column: 1 / 2;\n    grid-row:  5 / 6;  \n"])),y),k=(0,m.Ay)(g.N_)(p||(p=(0,h.A)(["\n    ","\n    grid-column: 2 / 3;\n    grid-row:  5 / 6;    \n"])),y);var z=i(579);const C=n=>{let{event:e}=n;const{_id:i,title:t,description:r,organizer:d,event_date:o}=e,a=new Date(o).toLocaleDateString("dsb-DE",{day:"numeric",month:"numeric",year:"numeric"});return(0,z.jsxs)(w,{id:i,children:[(0,z.jsx)(v,{children:t}),(0,z.jsx)(f,{children:r}),(0,z.jsxs)(A,{children:["Organizer: ",d]}),(0,z.jsxs)(b,{children:["Date: ",a]}),(0,z.jsx)(j,{to:"/events/".concat(i,"/registration"),id:i,children:"Register"}),(0,z.jsx)(k,{to:"/events/".concat(i,"/participants"),id:i,children:"View"})]},i)};var P;const _=m.Ay.ul(P||(P=(0,h.A)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 12px;\n    margin-bottom: 20px;\n\n    @media screen and (min-width: 768px) {\n        grid-template-columns: repeat(2, 1fr);\n        gap: 18px;\n        margin-bottom: 28px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        grid-template-columns: repeat(3, 1fr);\n        gap: 20px;\n        margin-bottom: 32px;\n    }\n"]))),E=n=>{let{events:e,eventsPerPage:i,page:t}=n;return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(_,{children:e.slice((t-1)*i,t*i).map((n=>(0,z.jsx)(C,{event:n},n._id)))})})};var N,D,S,F=i(954);const L=m.Ay.div(N||(N=(0,h.A)(["\n    display: flex;\n    justify-content: center;\n    alihn-items: center;\n    gap: 8px;\n\n     @media screen and (min-width: 768px) {\n        gap: 12px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        gap: 16px;  \n    }\n"]))),R="\n    display: inline-block;\n    background-color: var(--add-bg-color);\n    font-weight: 400;\n    font-size: 10px;\n    color: var(--add-text-color);\n     outline: none;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n  \n    @media screen and (min-width: 768px) {\n        font-size: 12px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        font-size: 14px;    \n    }\n",B=m.Ay.button(D||(D=(0,h.A)(["\n    ",";\n    width: 50px;\n    height: 24px;   \n\n    &:disabled {\n    background-color: var(--divider-color);\n    cursor: not-allowed;\n    }\n\n     @media screen and (min-width: 768px) {\n        width: 70px;\n        height: 26px;  \n    }\n\n    @media screen and (min-width: 1280px) {\n         width: 80px;\n        height: 30px; \n    }\n"])),R),M=m.Ay.button(S||(S=(0,h.A)(["\n    ",";\n    width: 26px;\n    height: 24px;\n    \n     @media screen and (min-width: 768px) {\n        width: 26px;\n        height: 26px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        width: 30px;\n        height: 30px;\n    }\n"])),R),O=n=>{let{page:e,handleClickNext:i,handleClickPrevoius:t,handlePageSet:r,totalEvents:d,eventsPerPage:o}=n;const a=e||1,s=Math.ceil(d/o),p=Array.from({length:s},((n,e)=>e+1));return(0,z.jsxs)(L,{children:[(0,z.jsx)(B,{type:"button",onClick:t,disabled:1===e,children:"Previous"}),p.map((n=>(0,z.jsx)(M,{onClick:()=>r(n),style:{backgroundColor:a===n?"#E59560":"#BACEC1"},children:n},n))),(0,z.jsx)(B,{type:"button",onClick:i,disabled:e===s,children:"Next"})]})};var V,q,G,H;const I=m.Ay.div(V||(V=(0,h.A)(["\n    padding: 16px;\n\n    @media screen and (min-width: 768px) {\n        padding: 18px; \n    }\n\n    @media screen and (min-width: 1280px) {\n        padding: 24px; \n    }\n"]))),J=m.Ay.h2(q||(q=(0,h.A)(["\n    font-weight: 600;\n    font-size: 16px;\n    color: var(--text-color);\n    margin-bottom: 16px;\n\n    @media screen and (min-width: 768px) {\n        font-size: 20px;\n        margin-bottom: 18px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        font-size: 22px;\n        margin-bottom: 20px;\n    }\n"]))),K=m.Ay.div(G||(G=(0,h.A)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 16px;\n\n @media screen and (min-width: 768px) {\n       flex-direction: row;\n       justify-content: space-between;\n       margin-bottom: 18px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        margin-bottom: 20px;\n    }\n"]))),Q=(m.Ay.p(H||(H=(0,h.A)(["\n    font-weight: 400;\n    font-size: 14px;\n    color: var(--text-color);\n\n    @media screen and (min-width: 768px) {\n        font-size: 16px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        font-size: 18px;\n    }\n"]))),()=>{const[n,e]=(0,c.useState)(1),i=(0,l.wA)(),t=(0,l.d4)((n=>n.events.data)),r=(0,l.d4)((n=>n.filter.filter));(0,c.useEffect)((()=>{i((0,x.k)()),e(1)}),[i,r]);const d=t.filter((n=>r?n.title.toLowerCase().includes(r):t));return(0,z.jsxs)(I,{children:[(0,z.jsx)(J,{children:"Choose the best events"}),(0,z.jsxs)(K,{children:[(0,z.jsx)(F.A,{setPage:e,placeholder:"search by title"}),(0,z.jsxs)("p",{children:[d.length," events are found "]})]}),(0,z.jsx)(E,{events:d,page:n,eventsPerPage:6}),d.length>0&&(0,z.jsx)(O,{page:n,handleClickNext:()=>{e((n=>n+1))},handleClickPrevoius:()=>{e((n=>n-1))},handlePageSet:n=>{e(n)},totalEvents:d.length,eventsPerPage:6})]})})}}]);
//# sourceMappingURL=601.bc07a8fc.chunk.js.map