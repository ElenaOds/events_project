"use strict";(self.webpackChunkevents_project=self.webpackChunkevents_project||[]).push([[557],{784:(n,e,a)=>{a.d(e,{A:()=>s});var i,t=a(528),r=a(403),d=a(475);const o=(0,r.Ay)(d.N_)(i||(i=(0,t.A)(["\n   display: inline-block;\n   text-decoration: none;\n   text-align: center;\n   font-weight: 500;\n   font-size: 12px;\n   color: var(--add-text-color);\n   padding: 3px;\n   background: var(--add-bg-color);\n   margin-bottom: 16px;\n   width: 60px;\n   border-radius: 5px;\n   \n\n   @media (min-width: 768px) {\n    margin-bottom: 18px;\n  }\n\n  @media (min-width: 1280px) {\n    font-size: 14px;\n    width: 70px;\n    margin-bottom: 20px;\n  }\n\n   &:hover,\n   &:focus {\n    color: var(--add-text-color);\n    background: var(--orange-color);\n    outline: none;\n   }\n"])));var l=a(579);const s=n=>{let{backLinkHref:e}=n;return(0,l.jsx)(o,{to:e,children:"Go back"})}},557:(n,e,a)=>{a.r(e),a.d(e,{default:()=>y});var i=a(216),t=a(3),r=a(490),d=a(892),o=a(401),l=a(899);const s=l.Ik({name:l.Yj().matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\u0406\u0456\u0407\u0457\u0404\u0454 '-]+$/,"Only letters are allowed").min(3,"Name should not be shorter than 3 characters").max(25,"Name should not be longer than 25 characters").required("Please type your full name"),email:l.Yj().email().required("Please type your email"),date:l.p6().required("Please type or select date of birth"),priority:l.Yj().oneOf(["social media","friends","found myseld"],"Please select the option").required()});var c,p,m,x=a(784),h=a(528),u=a(403);const b=u.Ay.div(c||(c=(0,h.A)(["\n    padding: 16px;\n\n    @media screen and (min-width: 1768px) {\n        padding: 18px; \n    }\n\n    @media screen and (min-width: 1280px) {\n        padding: 24px; \n    }\n"]))),g=u.Ay.h2(p||(p=(0,h.A)(["\n    font-weight: 600;\n    font-size: 16px;\n    color: var(--text-color);\n    margin-bottom: 16px;\n\n    @media screen and (min-width: 1768px) {\n        font-size: 20px;\n        margin-bottom: 18px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        font-size: 22px;\n        margin-bottom: 20px;\n    }\n"]))),f=(0,u.Ay)(d.lV)(m||(m=(0,h.A)(["\n    padding: 10px;\n    border-radius: 8px;\n    background-color: var(--add-bg-color);\n    display: grid;\n    grid-template-columns: repeat(1fr);\n    gap: 10px;\n    max-width: 560px;\n    margin: 0 auto;\n\n@media screen and (min-width: 768px) {\n    gap: 16px;\n    padding: 16px;\n}\n\n@media screen and (min-width: 1280px) {\n    gap: 12px;\n    padding: 16px;   \n}\n"])));var j=a(579);const v={name:"",email:"",birthdate:"",info:""},y=()=>{var n,e;const a=(0,t.wA)(),l=(0,i.zy)(),{_id:c}=(0,i.g)(),p=(0,t.d4)((n=>n.events.data)).find((n=>n._id===c)),m=null!==(n=null===(e=l.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/events";return(0,j.jsxs)(b,{children:[(0,j.jsx)(x.A,{backLinkHref:m}),(0,j.jsxs)(g,{children:[p.title," registration"]}),(0,j.jsx)(d.l1,{initialValues:v,validationSchema:s,onSubmit:(n,e)=>{let{resetForm:i}=e;const t={...p,participants:n};a((0,r.U)(t)),o.oR.success("Event is created"),i()},children:(0,j.jsxs)(f,{children:[(0,j.jsxs)("label",{htmlFor:"name",children:[(0,j.jsx)("span",{children:"Full name"}),(0,j.jsx)(d.D0,{as:"textarea",name:"name",placeholder:"Full name"})]}),(0,j.jsxs)("label",{htmlFor:"email",children:[(0,j.jsx)("span",{children:"Email"}),(0,j.jsx)(d.D0,{as:"textarea",name:"email",placeholder:"email"})]}),(0,j.jsxs)("label",{htmlFor:"birthdate",children:[(0,j.jsx)("span",{children:"Birthdate"}),(0,j.jsx)(d.D0,{type:"date",name:"birthdate",placeholder:"birthdate"})]}),(0,j.jsxs)("div",{id:"info",role:"group",children:[(0,j.jsx)("p",{children:"Where did you hear about this event?"}),(0,j.jsxs)("label",{children:[(0,j.jsx)(d.D0,{type:"radio",name:"info",value:"social media"}),"Social media"]}),(0,j.jsxs)("label",{children:[(0,j.jsx)(d.D0,{type:"radio",name:"info",value:"friends"}),"Friends"]}),(0,j.jsxs)("label",{children:[(0,j.jsx)(d.D0,{type:"radio",name:"info",value:"found myself"}),"Found myself"]})]}),(0,j.jsx)("button",{type:"submit",children:"Submit"})]})})]})}}}]);
//# sourceMappingURL=557.810d9531.chunk.js.map