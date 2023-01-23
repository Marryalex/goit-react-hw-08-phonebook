"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[163],{9253:function(e,t,n){n.d(t,{r:function(){return i}});var o=n(5646),a=n(9658),r=n(3329),i=function(e){var t=e.isOpen,n=void 0===t||t,i=e.handleClose,c=e.text,l=e.position,s=void 0===l?{vertical:"bottom",horizontal:"center"}:l,d=e.type;return(0,r.jsx)(o.Z,{open:n,onClose:i,autoHideDuration:3e3,anchorOrigin:s,children:(0,r.jsx)(a.Z,{onClose:i,severity:d,children:c})})}},1163:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var o=n(2791),a=n(9434),r=n(6895),i=function(e){return e.contacts.items},c=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},s=function(e){return e.filter},d="Filter_filter_label__5ITod",u="Filter_filter_input__eu2zm",p=n(3329),v=function(){var e=(0,a.I0)(),t=(0,a.v9)(s);return(0,p.jsxs)("label",{className:d,children:["Find contacts by name",(0,p.jsx)("input",{name:"filter",type:"text",value:t,onChange:function(t){return e((0,r.ko)(t.target.value.toLowerCase()))},className:u})]})},m="ContactListItem_contact_item__c5xaq",h="ContactListItem_list_item_text__iQnHH",x="ContactListItem_delete_btn__P21WK",b=function(e){var t=e.contactName,n=e.contactNumber,o=e.onClickDeleteContact;return(0,p.jsxs)("li",{className:m,children:[(0,p.jsxs)("span",{className:h,children:[t,":"]}),(0,p.jsx)("span",{className:h,children:n}),(0,p.jsx)("button",{type:"button",onClick:o,className:x,children:"Delete"})]})},f="ContactList_contacts_list__jhchV",g=n(208),S=n(9253),y=function(){var e=(0,a.v9)(c),t=(0,a.v9)(l),n=(0,a.v9)(i),o=(0,a.v9)(s),r=(0,a.I0)(),d=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(n,o);return(0,p.jsxs)("ul",{className:f,children:[e&&!t&&(0,p.jsx)("p",{children:"Loading contacts..."}),t&&(0,p.jsx)(S.r,{type:"error",text:"Something went wrong :("}),d.length?d.map((function(e){var t=e.id,n=e.name,o=e.number;return(0,p.jsx)(b,{contactName:n,contactNumber:o,onClickDeleteContact:function(){return r((0,g.GK)(t))}},t)})):!e&&(0,p.jsx)("p",{children:"'No contacts'"})]})},z=n(9439),Z=n(8130),C=n(1614),w=n(4554),I=n(3044),j=n(1889),k=n(4741),_=n(4942),N=n(3366),R=n(7462),L=n(8182),W=n(5735),E=n(4419),F=n(2065),P=n(6934),M=n(1402),T=n(3701),O=n(4036),V=n(5878),q=n(1217);function B(e){return(0,q.Z)("MuiButton",e)}var D=(0,V.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var H=o.createContext({}),A=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],K=function(e){return(0,R.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},G=(0,P.ZP)(T.Z,{shouldForwardProp:function(e){return(0,P.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,O.Z)(n.color))],t["size".concat((0,O.Z)(n.size))],t["".concat(n.variant,"Size").concat((0,O.Z)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n,o,a=e.theme,r=e.ownerState;return(0,R.Z)({},a.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(a.vars||a).shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":(0,R.Z)({textDecoration:"none",backgroundColor:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,F.Fq)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===r.variant&&"inherit"!==r.color&&{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[r.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,F.Fq)(a.palette[r.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===r.variant&&"inherit"!==r.color&&{border:"1px solid ".concat((a.vars||a).palette[r.color].main),backgroundColor:a.vars?"rgba(".concat(a.vars.palette[r.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,F.Fq)(a.palette[r.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===r.variant&&{backgroundColor:(a.vars||a).palette.grey.A100,boxShadow:(a.vars||a).shadows[4],"@media (hover: none)":{boxShadow:(a.vars||a).shadows[2],backgroundColor:(a.vars||a).palette.grey[300]}},"contained"===r.variant&&"inherit"!==r.color&&{backgroundColor:(a.vars||a).palette[r.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[r.color].main}}),"&:active":(0,R.Z)({},"contained"===r.variant&&{boxShadow:(a.vars||a).shadows[8]})},(0,_.Z)(t,"&.".concat(D.focusVisible),(0,R.Z)({},"contained"===r.variant&&{boxShadow:(a.vars||a).shadows[6]})),(0,_.Z)(t,"&.".concat(D.disabled),(0,R.Z)({color:(a.vars||a).palette.action.disabled},"outlined"===r.variant&&{border:"1px solid ".concat((a.vars||a).palette.action.disabledBackground)},"outlined"===r.variant&&"secondary"===r.color&&{border:"1px solid ".concat((a.vars||a).palette.action.disabled)},"contained"===r.variant&&{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground})),t),"text"===r.variant&&{padding:"6px 8px"},"text"===r.variant&&"inherit"!==r.color&&{color:(a.vars||a).palette[r.color].main},"outlined"===r.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===r.variant&&"inherit"!==r.color&&{color:(a.vars||a).palette[r.color].main,border:a.vars?"1px solid rgba(".concat(a.vars.palette[r.color].mainChannel," / 0.5)"):"1px solid ".concat((0,F.Fq)(a.palette[r.color].main,.5))},"contained"===r.variant&&{color:a.vars?a.vars.palette.text.primary:null==(n=(o=a.palette).getContrastText)?void 0:n.call(o,a.palette.grey[300]),backgroundColor:(a.vars||a).palette.grey[300],boxShadow:(a.vars||a).shadows[2]},"contained"===r.variant&&"inherit"!==r.color&&{color:(a.vars||a).palette[r.color].contrastText,backgroundColor:(a.vars||a).palette[r.color].main},"inherit"===r.color&&{color:"inherit",borderColor:"currentColor"},"small"===r.size&&"text"===r.variant&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},"large"===r.size&&"text"===r.variant&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},"small"===r.size&&"outlined"===r.variant&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},"large"===r.size&&"outlined"===r.variant&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},"small"===r.size&&"contained"===r.variant&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},"large"===r.size&&"contained"===r.variant&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},r.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,_.Z)(t,"&.".concat(D.focusVisible),{boxShadow:"none"}),(0,_.Z)(t,"&:active",{boxShadow:"none"}),(0,_.Z)(t,"&.".concat(D.disabled),{boxShadow:"none"}),t)})),Q=(0,P.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat((0,O.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,R.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},K(t))})),J=(0,P.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat((0,O.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,R.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},K(t))})),U=o.forwardRef((function(e,t){var n=o.useContext(H),a=(0,W.Z)(n,e),r=(0,M.Z)({props:a,name:"MuiButton"}),i=r.children,c=r.color,l=void 0===c?"primary":c,s=r.component,d=void 0===s?"button":s,u=r.className,v=r.disabled,m=void 0!==v&&v,h=r.disableElevation,x=void 0!==h&&h,b=r.disableFocusRipple,f=void 0!==b&&b,g=r.endIcon,S=r.focusVisibleClassName,y=r.fullWidth,z=void 0!==y&&y,Z=r.size,C=void 0===Z?"medium":Z,w=r.startIcon,I=r.type,j=r.variant,k=void 0===j?"text":j,_=(0,N.Z)(r,A),F=(0,R.Z)({},r,{color:l,component:d,disabled:m,disableElevation:x,disableFocusRipple:f,fullWidth:z,size:C,type:I,variant:k}),P=function(e){var t=e.color,n=e.disableElevation,o=e.fullWidth,a=e.size,r=e.variant,i=e.classes,c={root:["root",r,"".concat(r).concat((0,O.Z)(t)),"size".concat((0,O.Z)(a)),"".concat(r,"Size").concat((0,O.Z)(a)),"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,O.Z)(a))],endIcon:["endIcon","iconSize".concat((0,O.Z)(a))]},l=(0,E.Z)(c,B,i);return(0,R.Z)({},i,l)}(F),T=w&&(0,p.jsx)(Q,{className:P.startIcon,ownerState:F,children:w}),V=g&&(0,p.jsx)(J,{className:P.endIcon,ownerState:F,children:g});return(0,p.jsxs)(G,(0,R.Z)({ownerState:F,className:(0,L.Z)(n.className,P.root,u),component:d,disabled:m,focusRipple:!f,focusVisibleClassName:(0,L.Z)(P.focusVisible,S),ref:t,type:I},_,{classes:P,children:[T,i,V]}))}));function X(){var e=(0,a.I0)(),t=(0,o.useState)(""),n=(0,z.Z)(t,2),r=n[0],c=n[1],l=(0,o.useState)(""),s=(0,z.Z)(l,2),d=s[0],u=s[1],v=(0,a.v9)(i),m=(0,o.useState)(!1),h=(0,z.Z)(m,2),x=h[0],b=h[1],f=function(e){var t=e.currentTarget,n=t.name,o=t.value;switch(n){case"name":c(o);break;case"number":u(o);break;default:throw new Error("Not supported type")}},y=function(){c(""),u("")};return(0,p.jsxs)(p.Fragment,{children:[x&&(0,p.jsx)(S.r,{isOpen:x,handleClose:function(){b(!1)},text:"Add Contact",type:"success"}),(0,p.jsx)(C.Z,{component:"section",maxWidth:"xs",children:(0,p.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,p.jsx)(I.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,p.jsx)(Z.Z,{})}),(0,p.jsxs)(w.Z,{component:"form",noValidate:!0,onSubmit:function(t){t.preventDefault(),function(e){var t=e.toLowerCase();return v.find((function(e){return e.name.toLowerCase().includes(t)}))}(r)?alert("".concat(r," is already in contacts.")):(e((0,g.uK)({name:r,number:d})),b(!0),y())},sx:{mt:3},children:[(0,p.jsxs)(j.ZP,{container:!0,spacing:2,children:[(0,p.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,p.jsx)(k.Z,{type:"text",name:"name",error:""===r,id:"numberInputId",value:r,label:"Name",autoComplete:"given-name",required:!0,fullWidth:!0,onChange:f,helperText:""===r?"Required":" "})}),(0,p.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,p.jsx)(k.Z,{type:"text",name:"number",inputProps:{inputMode:"numeric",pattern:""},error:""===r,id:"numberInputId",value:d,autoComplete:"tel",onChange:f,required:!0,fullWidth:!0,label:"Phone number",helperText:""===r?"Required":" "})})]}),(0,p.jsx)(U,{type:"submit",disabled:!r||!d,fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add Contact"})]})]})})]})}var Y=n(3239);function $(){var e=(0,a.I0)(),t=(0,a.v9)(c);return(0,o.useEffect)((function(){e((0,g.yF)())}),[e]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(X,{}),t&&(0,p.jsx)(Y.Z,{sx:{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)"}}),(0,p.jsx)(v,{}),(0,p.jsx)(y,{})]})}},8130:function(e,t,n){var o=n(4836);t.Z=void 0;var a=o(n(5649)),r=n(3329),i=(0,a.default)((0,r.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V8c0-.55-.45-1-1-1s-1 .45-1 1v2H2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1H6zm9 4c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"}),"PersonAddRounded");t.Z=i}}]);
//# sourceMappingURL=163.b9ae2ec2.chunk.js.map