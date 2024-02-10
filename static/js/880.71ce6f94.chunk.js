"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[880],{4880:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ne}});var r,a,o,i,s,c,d,l,p=t(1413),u=t(9434),m=t(1134),v=t(9085),y=(t(5462),t(6916)),b=function(e){return e.contacts.items},h=function(e){return e.contacts.isLoading},x=function(e){return e.contacts.error},f=function(e){return e.filter},g=(0,y.P1)([b,f],(function(e,n){var t=n.toLowerCase().trim();return null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),Z=t(3634),w=t(168),j=t(7691),C=j.ZP.form(r||(r=(0,w.Z)(["\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n\n  color: var(--primary-color-violet);\n"]))),S=j.ZP.label(a||(a=(0,w.Z)(["\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 700;\n"]))),P=j.ZP.input(o||(o=(0,w.Z)(["\n  display: block;\n  width: 290px;\n\n  border: 1px solid var(--primary-color-yellow);\n\n  border-radius: 6px;\n  margin-top: 6px;\n  padding: 6px 8px;\n\n  @media only screen and (min-width: 768px) {\n    width: 328px;\n  }\n"]))),A=j.ZP.button(i||(i=(0,w.Z)(["\n  display: block;\n  margin-top: 20px;\n\n  padding: 6px 8px;\n  cursor: pointer;\n  font-weight: 700;\n  color: white;\n  background-color: var(--primary-color-yellow);\n  border: none;\n  border-radius: 6px;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &: hover {\n    background-color: var(--primary-color-violet);\n  }\n"]))),I=t(184),k=function(){var e=(0,m.cI)(),n=e.register,t=e.handleSubmit,r=e.reset,a=(0,u.v9)(b),o=(0,u.I0)();return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(C,{onSubmit:t((function(e){if(Array.isArray(a)){if(function(e){return a.some((function(n){return n.name===e}))}(e.name))return void v.Am.info(" ".concat(e.name," is already in contacts"));if(function(e){return a.some((function(n){return n.number===e}))}(e.number))return void v.Am.info(" Number ".concat(e.number," is already in contacts"))}try{o((0,Z.je)(e)),v.Am.success("Contact added successfully")}catch(n){v.Am.error("Something went wrong.")}r()})),children:[(0,I.jsxs)(S,{children:["Name",(0,I.jsx)(P,(0,p.Z)((0,p.Z)({},n("name",{required:!0})),{},{id:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}))]}),(0,I.jsxs)(S,{children:["Number",(0,I.jsx)(P,(0,p.Z)((0,p.Z)({},n("number",{required:!0})),{},{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",required:!0}))]}),(0,I.jsx)(A,{type:"submit",children:"Add contact"})]})})},N=t(2693),L=j.ZP.div(s||(s=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  @media only screen and (min-width: 768px) {\n    flex-wrap: nowrap;\n    justify-content: space-between;\n  }\n"]))),F=j.ZP.h1(c||(c=(0,w.Z)(["\n  font-size: 40px;\n  font-weight: 400;\n  color: var(--primary-color-violet);\n\n  @media only screen and (min-width: 768px) {\n    font-size: 50px;\n  }\n"]))),R=j.ZP.span(d||(d=(0,w.Z)(["\n  font-weight: 700;\n  color: var(--primary-color-yellow);\n"]))),M=j.ZP.section(l||(l=(0,w.Z)(["\n  font-family: Helvetica Neue;\n  padding-top: 35px;\n"]))),O=t(2791),z=t(4942),G=t(3366),T=t(7462),V=t(9278),q=t(4419),B=t(627),_=t(2065),H=t(6934),D=t(1402),X=t(3701),E=t(9103),W=t(162),J=t(2071),K=t(6199),Y=t(5878),$=t(1217);function Q(e){return(0,$.Z)("MuiListItem",e)}var U=(0,Y.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var ee=(0,Y.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function ne(e){return(0,$.Z)("MuiListItemSecondaryAction",e)}(0,Y.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var te=["className"],re=(0,H.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.disableGutters&&n.disableGutters]}})((function(e){var n=e.ownerState;return(0,T.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},n.disableGutters&&{right:0})})),ae=O.forwardRef((function(e,n){var t=(0,D.Z)({props:e,name:"MuiListItemSecondaryAction"}),r=t.className,a=(0,G.Z)(t,te),o=O.useContext(K.Z),i=(0,T.Z)({},t,{disableGutters:o.disableGutters}),s=function(e){var n=e.disableGutters,t=e.classes,r={root:["root",n&&"disableGutters"]};return(0,q.Z)(r,ne,t)}(i);return(0,I.jsx)(re,(0,T.Z)({className:(0,V.Z)(s.root,r),ownerState:i,ref:n},a))}));ae.muiName="ListItemSecondaryAction";var oe,ie,se=ae,ce=["className"],de=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],le=(0,H.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.dense&&n.dense,"flex-start"===t.alignItems&&n.alignItemsFlexStart,t.divider&&n.divider,!t.disableGutters&&n.gutters,!t.disablePadding&&n.padding,t.button&&n.button,t.hasSecondaryAction&&n.secondaryAction]}})((function(e){var n,t=e.theme,r=e.ownerState;return(0,T.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!r.disablePadding&&(0,T.Z)({paddingTop:8,paddingBottom:8},r.dense&&{paddingTop:4,paddingBottom:4},!r.disableGutters&&{paddingLeft:16,paddingRight:16},!!r.secondaryAction&&{paddingRight:48}),!!r.secondaryAction&&(0,z.Z)({},"& > .".concat(ee.root),{paddingRight:48}),(n={},(0,z.Z)(n,"&.".concat(U.focusVisible),{backgroundColor:(t.vars||t).palette.action.focus}),(0,z.Z)(n,"&.".concat(U.selected),(0,z.Z)({backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,_.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)},"&.".concat(U.focusVisible),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,_.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)})),(0,z.Z)(n,"&.".concat(U.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity}),n),"flex-start"===r.alignItems&&{alignItems:"flex-start"},r.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},r.button&&(0,z.Z)({transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(U.selected,":hover"),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,_.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,_.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}),r.hasSecondaryAction&&{paddingRight:48})})),pe=(0,H.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,n){return n.container}})({position:"relative"}),ue=O.forwardRef((function(e,n){var t=(0,D.Z)({props:e,name:"MuiListItem"}),r=t.alignItems,a=void 0===r?"center":r,o=t.autoFocus,i=void 0!==o&&o,s=t.button,c=void 0!==s&&s,d=t.children,l=t.className,p=t.component,u=t.components,m=void 0===u?{}:u,v=t.componentsProps,y=void 0===v?{}:v,b=t.ContainerComponent,h=void 0===b?"li":b,x=t.ContainerProps,f=(x=void 0===x?{}:x).className,g=t.dense,Z=void 0!==g&&g,w=t.disabled,j=void 0!==w&&w,C=t.disableGutters,S=void 0!==C&&C,P=t.disablePadding,A=void 0!==P&&P,k=t.divider,N=void 0!==k&&k,L=t.focusVisibleClassName,F=t.secondaryAction,R=t.selected,M=void 0!==R&&R,z=t.slotProps,_=void 0===z?{}:z,H=t.slots,Y=void 0===H?{}:H,$=(0,G.Z)(t.ContainerProps,ce),ee=(0,G.Z)(t,de),ne=O.useContext(K.Z),te=O.useMemo((function(){return{dense:Z||ne.dense||!1,alignItems:a,disableGutters:S}}),[a,ne.dense,Z,S]),re=O.useRef(null);(0,W.Z)((function(){i&&re.current&&re.current.focus()}),[i]);var ae=O.Children.toArray(d),oe=ae.length&&(0,E.Z)(ae[ae.length-1],["ListItemSecondaryAction"]),ie=(0,T.Z)({},t,{alignItems:a,autoFocus:i,button:c,dense:te.dense,disabled:j,disableGutters:S,disablePadding:A,divider:N,hasSecondaryAction:oe,selected:M}),ue=function(e){var n=e.alignItems,t=e.button,r=e.classes,a=e.dense,o=e.disabled,i={root:["root",a&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",t&&"button","flex-start"===n&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,q.Z)(i,Q,r)}(ie),me=(0,J.Z)(re,n),ve=Y.root||m.Root||le,ye=_.root||y.root||{},be=(0,T.Z)({className:(0,V.Z)(ue.root,ye.className,l),disabled:j},ee),he=p||"li";return c&&(be.component=p||"div",be.focusVisibleClassName=(0,V.Z)(U.focusVisible,L),he=X.Z),oe?(he=be.component||p?he:"div","li"===h&&("li"===he?he="div":"li"===be.component&&(be.component="div")),(0,I.jsx)(K.Z.Provider,{value:te,children:(0,I.jsxs)(pe,(0,T.Z)({as:h,className:(0,V.Z)(ue.container,f),ref:me,ownerState:ie},$,{children:[(0,I.jsx)(ve,(0,T.Z)({},ye,!(0,B.X)(ve)&&{as:he,ownerState:(0,T.Z)({},ie,ye.ownerState)},be,{children:ae})),ae.pop()]}))})):(0,I.jsx)(K.Z.Provider,{value:te,children:(0,I.jsxs)(ve,(0,T.Z)({},ye,{as:he,ref:me},!(0,B.X)(ve)&&{ownerState:(0,T.Z)({},ie,ye.ownerState)},be,{children:[ae,F&&(0,I.jsx)(se,{children:F})]}))})})),me=t(890),ve=t(9849),ye=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],be=(0,H.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[(0,z.Z)({},"& .".concat(ve.Z.primary),n.primary),(0,z.Z)({},"& .".concat(ve.Z.secondary),n.secondary),n.root,t.inset&&n.inset,t.primary&&t.secondary&&n.multiline,t.dense&&n.dense]}})((function(e){var n=e.ownerState;return(0,T.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},n.primary&&n.secondary&&{marginTop:6,marginBottom:6},n.inset&&{paddingLeft:56})})),he=O.forwardRef((function(e,n){var t=(0,D.Z)({props:e,name:"MuiListItemText"}),r=t.children,a=t.className,o=t.disableTypography,i=void 0!==o&&o,s=t.inset,c=void 0!==s&&s,d=t.primary,l=t.primaryTypographyProps,p=t.secondary,u=t.secondaryTypographyProps,m=(0,G.Z)(t,ye),v=O.useContext(K.Z).dense,y=null!=d?d:r,b=p,h=(0,T.Z)({},t,{disableTypography:i,inset:c,primary:!!y,secondary:!!b,dense:v}),x=function(e){var n=e.classes,t=e.inset,r=e.primary,a=e.secondary,o={root:["root",t&&"inset",e.dense&&"dense",r&&a&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,q.Z)(o,ve.L,n)}(h);return null==y||y.type===me.Z||i||(y=(0,I.jsx)(me.Z,(0,T.Z)({variant:v?"body2":"body1",className:x.primary,component:null!=l&&l.variant?void 0:"span",display:"block"},l,{children:y}))),null==b||b.type===me.Z||i||(b=(0,I.jsx)(me.Z,(0,T.Z)({variant:"body2",className:x.secondary,color:"text.secondary",display:"block"},u,{children:b}))),(0,I.jsxs)(be,(0,T.Z)({className:(0,V.Z)(x.root,a),ownerState:h,ref:n},m,{children:[y,b]}))})),xe=t(3400),fe=t(9259),ge=t(5205),Ze=t(7247),we=function(e){var n=e.id,t=e.name,r=e.number,a=e.deleteContact;return(0,I.jsxs)(ue,{sx:{p:"0",mt:"10px","@media only screen and (min-width: 768px)":{width:"330px"}},children:[(0,I.jsx)(ge.Z,{sx:{fill:"rgb(207, 149, 11)",fontSize:"40px",marginRight:"24px"}}),(0,I.jsx)(he,{primary:(0,I.jsx)("span",{style:{color:"rgb(37, 32, 73)",fontSize:"18px"},children:t}),secondary:r}),(0,I.jsx)(xe.Z,{type:"button",onClick:function(){return a(n)},children:(0,I.jsx)(fe.Z,{sx:{fontSize:"30px"},children:(0,I.jsx)(Ze.Z,{})})})]})},je=t(493),Ce=t(3849),Se=function(){var e=(0,u.v9)(h),n=(0,u.v9)(x),t=(0,u.I0)(),r=function(e){t((0,Z.xX)(e)),console.log(e)},a=(0,u.v9)(g);return(0,I.jsxs)(je.Z,{sx:{margin:"auto"},children:[e&&(0,I.jsx)(Ce.a,{}),n&&(0,I.jsx)("p",{children:n}),!e&&(null===a||void 0===a?void 0:a.map((function(e){var n=e.name,t=e._id,a=e.number;return(0,I.jsx)(we,{name:n,id:t,number:a,deleteContact:r},t)})))]})},Pe=t(4808),Ae=j.ZP.label(oe||(oe=(0,w.Z)(["\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 30px;\n  font-weight: 700;\n"]))),Ie=j.ZP.input(ie||(ie=(0,w.Z)(["\n  display: block;\n  width: 290px;\n\n  border: 1px solid var(--primary-color-yellow);\n\n  border-radius: 6px;\n  margin-top: 6px;\n  padding: 6px 8px;\n\n  @media only screen and (min-width: 768px) {\n    width: 317px;\n  }\n"]))),ke=function(){var e=(0,u.v9)(f),n=(0,u.I0)();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Ae,{htmlFor:"search",children:"Find contacts by name:"}),(0,I.jsx)(Ie,{id:"search",type:"text",name:"filter",value:e,onChange:function(e){return n((0,Pe.p)(e.target.value))},placeholder:"Search"})]})},Ne=function(){var e=(0,u.I0)(),n=(0,u.v9)(b);return(0,O.useEffect)((function(){e((0,Z.VC)())}),[e]),(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(N.W,{children:(0,I.jsxs)(L,{children:[(0,I.jsxs)(M,{children:[(0,I.jsxs)(F,{children:["PHONE",(0,I.jsx)(R,{children:"BOOK"})]}),(0,I.jsx)(k,{})]}),(0,I.jsxs)(M,{children:[(0,I.jsx)(F,{children:"CONTACTS"}),0!==n.length&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ke,{}),(0,I.jsx)(Se,{})]})]})]})})})}},5205:function(e,n,t){var r=t(4836);n.Z=void 0;var a=r(t(5649)),o=t(184),i=(0,a.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircleRounded");n.Z=i},7247:function(e,n,t){var r=t(4836);n.Z=void 0;var a=r(t(5649)),o=t(184),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=i}}]);
//# sourceMappingURL=880.71ce6f94.chunk.js.map