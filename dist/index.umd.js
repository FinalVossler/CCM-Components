!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("ccmtypes"),require("react-jss"),require("react-datepicker"),require("react-datepicker/dist/react-datepicker.css"),require("react-select"),require("react-select/animated"),require("react-table-column-resizer")):"function"==typeof define&&define.amd?define(["exports","react","ccmtypes","react-jss","react-datepicker","react-datepicker/dist/react-datepicker.css","react-select","react-select/animated","react-table-column-resizer"],t):t((e||self).ccmcomponents={},e.react,e.ccmtypes,e.reactJss,e.reactDatepicker,0,e.reactSelect,e.makeAnimated,e.reactTableColumnResizer)}(this,function(e,t,a,r,n,o,l,i,c){function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=/*#__PURE__*/d(t),s=/*#__PURE__*/d(n),m=/*#__PURE__*/d(l),f=/*#__PURE__*/d(i),p=/*#__PURE__*/d(c);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},h.apply(this,arguments)}var g,b=r.createUseStyles(function(e){return{inputContainer:{display:"flex",flexDirection:"column",alignItems:"flex-start",backgroundColor:e.backgroundSurface,padding:12,flex:1,position:"relative",borderRadius:5},fullWidthContainer:{extend:"inputContainer",width:"100%",flex:"initial"},label:{marginBottom:4,color:e.textMajor,fontSize:16,fontFamily:"Open Sans Regular",fontWeight:600,fontStyle:"normal"},input:{backgroundColor:e.backgroundSurface,color:e.textMajor,width:"100%",height:32,borderWidth:1,boxSizing:"border-box",border:"1px solid "+e.borderDefaultMinor,borderRadius:4,paddingLeft:8,fontSize:16,fontStyle:"normal",fontWeight:400,"&:focus":{outline:"none",border:"1px solid "+e.borderDefault}},maxCharacters:{color:e.textMajor,marginRight:5,marginLeft:5},suffixIcon:{color:e.textMajor,marginRight:5,marginLeft:5},iconsContainer:{position:"absolute",right:15,top:44,display:"flex",justifyContent:"center",alignItems:"center"},iconsContainerWithoutLabel:{extend:"iconsContainer",top:6,right:5}}}),x=function(e,t){return function(a){return u.default.createElement(r.ThemeProvider,{theme:t},u.default.createElement(e,h({},a)))}},C=u.default.memo(x(function(e){var t=u.default.useState(e.value||""),a=t[0],n=t[1],o=r.useTheme(),l=b({theme:e.theme||o});return u.default.createElement("div",{className:e.fullWidth?l.fullWidthContainer:l.inputContainer,style:h({minWidth:e.minWidth||270},e.label?{}:{padding:0})},e.label&&u.default.createElement("label",{className:l.label},e.label),u.default.createElement("input",h({type:e.type||"text",className:l.input,placeholder:e.placeholder,onChange:function(t){e.maxCharacters&&t.target.value.toString().length>e.maxCharacters||n(t.target.value)},value:a},e.onClick?{onClick:e.onClick}:{},e.onChange?{onChange:e.onChange}:{},e.suffixIcon||e.maxCharacters?{style:{paddingRight:e.suffixIcon&&e.maxCharacters?80:35}}:{})),(e.suffixIcon||e.maxCharacters)&&u.default.createElement("div",{className:e.label?l.iconsContainer:l.iconsContainerWithoutLabel},e.maxCharacters&&u.default.createElement("span",{className:l.maxCharacters,style:h({},e.suffixIcon||!e.label?{right:!e.label&&e.suffixIcon?40:50}:{})},a.toString().length+"/"+e.maxCharacters),e.suffixIcon&&u.default.createElement(e.suffixIcon,{className:l.suffixIcon})))},a.theme)),k=r.createUseStyles(function(e){return{formSectionContainer:{backgroundColor:e.backgroundSurface,margin:12,display:"flex",flexDirection:"column",border:"1px solid "+e.borderDefaultMinor,boxSizing:"border-box",padding:12},inputsContainer:{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"},title:{fontSize:24,fontStyle:"normal",fontFamily:"Open Sans Regular",color:e.textMajor,padding:12,margin:0}}}),S=u.default.memo(x(function(e){var t=r.useTheme(),a=k({theme:e.theme||t});return u.default.createElement("div",{className:a.formSectionContainer},e.title&&u.default.createElement("h2",{className:a.title},e.title),u.default.createElement("div",{className:a.inputsContainer},e.children))},a.theme)),y=r.createUseStyles(function(e){return{yesOrNoContainer:{display:"flex",flexDirection:"column",alignItems:"flex-start",backgroundColor:e.backgroundSurface,padding:12,flex:1,borderRadius:5},label:{marginBottom:4,color:e.textMajor,fontSize:16,fontFamily:"Open Sans Regular",fontWeight:600,fontStyle:"normal"},checkboxesContainer:{display:"flex",flexDirection:"row",alignItems:"center",paddingTop:8,borderTop:"1px solid "+e.borderDefault,width:"100%",boxSizing:"border-box"},checkboxContainer:{display:"flex",alignItems:"center",marginRight:16,position:"relative",cursor:"pointer"},checkbox:{border:"none",marginRight:8,appearance:"none",width:"20px",height:"20px",borderRadius:"50%",outline:"none",cursor:"pointer",borderColor:e.borderDefaultMinor,backgroundColor:e.borderDefaultMinor,"&:checked":{backgroundColor:e.backgroundPrimary},"&:checked + $dot":{width:10,height:10}},dot:{content:'""',position:"absolute",top:"50%",left:"14px",transform:"translate(-50%, -50%)",width:17,height:17,borderRadius:"50%",backgroundColor:e.backgroundSurface,cursor:"pointer"},yesOrNoLabel:{fontFamily:"Open Sans Regular",fontSize:16,color:e.textMajor,cursor:"pointer"}}}),v=u.default.memo(x(function(e){var t=u.default.useState(!0===e.value),a=t[0],n=t[1],o=u.default.useState(!1===e.value),l=o[0],i=o[1],c=r.useTheme(),d=y({theme:e.theme||c}),s=function(e){e.stopPropagation()};return u.default.createElement("div",{className:d.yesOrNoContainer,style:{minWidth:e.minWidth||170}},u.default.createElement("label",{className:d.label},e.label),u.default.createElement("div",{className:d.checkboxesContainer},u.default.createElement("div",{className:d.checkboxContainer,onClick:function(){var e=!a;n(e),e&&l&&i(!1)}},u.default.createElement("input",{type:"checkbox",className:d.checkbox,checked:a,onChange:s}),u.default.createElement("span",{className:d.dot}),u.default.createElement("label",{className:d.yesOrNoLabel},e.yesLabel||"Yes")),u.default.createElement("div",{className:d.checkboxContainer,onClick:function(){var e=!l;i(e),e&&a&&n(!1)}},u.default.createElement("input",{onChange:s,type:"checkbox",className:d.checkbox,checked:l}),u.default.createElement("span",{className:d.dot}),u.default.createElement("label",{className:d.yesOrNoLabel},e.noLabel||"No"))))},a.theme)),E=r.createUseStyles(function(e){return{datePickerContainer:{display:"flex",flexDirection:"column",alignItems:"flex-start",backgroundColor:e.backgroundSurface,padding:12,flex:1,borderRadius:5,position:"relative","& .react-datepicker":{boxShadow:"1px 1px 10px 1px black",backgroundColor:e.backgroundSurface},"& .react-datepicker-wrapper":{width:"100%"},"& .react-datepicker__month-container":{backgroundColor:e.backgroundSurface,borderRadius:3.5},"& .react-datepicker__header":{backgroundColor:e.backgroundSurface},"& .react-datepicker__time-list":{backgroundColor:e.backgroundSurface},"& .react-datepicker__current-month":{color:e.textMajor},"& .react-datepicker__day-name":{color:e.textMajor},"& .react-datepicker-time__header":{color:e.textMajor},"& .react-datepicker__day":{color:e.textMajor},"& .react-datepicker__day:hover":{color:e.textReverse},"& .react-datepicker__time-list-item":{color:e.textMajor},"& .react-datepicker__time-list-item:hover":{color:e.textReverse},"& input":{backgroundColor:e.backgroundSurface,color:e.textMajor,width:"100%",height:32,borderWidth:1,boxSizing:"border-box",border:"1px solid "+e.borderDefaultMinor,borderRadius:4,paddingLeft:8,fontSize:16,fontStyle:"normal",fontWeight:400,"&:focus":{outline:"none",border:"1px solid "+e.borderDefault}}},label:{marginBottom:4,color:e.textMajor,fontSize:16,fontFamily:"Open Sans Regular",fontWeight:600,fontStyle:"normal"},dateIcon:{position:"absolute",right:20,top:45,zIndex:1},clearIcon:{cursor:"pointer",position:"absolute",right:45,top:45,zIndex:1,fontSize:30}}}),w=function(e){return u.default.useMemo(function(){return h({},e.className?{className:e.className}:{},e.onClick?{onClick:e.onClick}:{},e.style?{style:e.style}:{})},[e])},N=u.default.memo(function(e){var t=w(e);return u.default.createElement("svg",h({},t,{width:"16",height:"16",fill:"none",viewBox:"0 0 16 16"}),u.default.createElement("path",{fill:"#E3E6E8",d:"M7.341 13.235h1.2a.499.499 0 0 0 .492-.506V11.55c0-.28-.22-.506-.493-.506H7.341a.499.499 0 0 0-.493.506v1.18c0 .279.22.505.493.505Zm3.497-3.497h1.199a.499.499 0 0 0 .493-.506V8.053c0-.28-.22-.506-.493-.506h-1.199a.499.499 0 0 0-.493.506v1.18c0 .279.22.505.493.505Zm-3.497 0h1.2a.499.499 0 0 0 .492-.506V8.053c0-.28-.22-.506-.493-.506H7.341a.499.499 0 0 0-.493.506v1.18c0 .279.22.505.493.505Zm-3.497 3.497h1.2a.499.499 0 0 0 .492-.506V11.55c0-.28-.22-.506-.493-.506H3.844a.499.499 0 0 0-.493.506v1.18c0 .279.22.505.493.505Zm0-3.497h1.2a.499.499 0 0 0 .492-.506V8.053c0-.28-.22-.506-.493-.506H3.844a.499.499 0 0 0-.493.506v1.18c0 .279.22.505.493.505Z"}),u.default.createElement("path",{fill:"#E3E6E8",d:"M12.097 2.045V1a.5.5 0 0 0-.493-.507.499.499 0 0 0-.493.507v1.052H4.85V1a.5.5 0 0 0-.493-.507.499.499 0 0 0-.493.507v1.052H2.1c-.546 0-.992.453-.992 1.012v11.424A1 1 0 0 0 2.1 15.5h11.77c.546 0 .992-.453.992-1.012V3.058a1 1 0 0 0-.992-1.013h-1.772ZM2.099 14.481V6.308h11.77v8.173H2.099Zm11.763-9.179H2.099V3.058h1.765v.566c0 .28.22.506.493.506a.499.499 0 0 0 .493-.506v-.566h6.261v.566c0 .28.22.506.493.506a.499.499 0 0 0 .493-.506v-.566h1.765v2.244Z"}))}),B=u.default.memo(function(e){var t=w(e);return u.default.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16"},t),u.default.createElement("path",{fill:e.color||"#17BA89",d:"M3.604 2.896a.5.5 0 1 0-.708.708L7.293 8l-4.397 4.396a.5.5 0 0 0 .708.708L8 8.707l4.396 4.397a.5.5 0 0 0 .708-.708L8.707 8l4.397-4.396a.5.5 0 0 0-.708-.708L8 7.293 3.604 2.896Z"}))}),M=u.default.memo(x(function(e){var t=u.default.useState(e.value||new Date),a=t[0],n=t[1],o=r.useTheme(),l=E({theme:e.theme||o});return u.default.createElement("div",{className:l.datePickerContainer,style:{minWidth:e.minWidth||270}},u.default.createElement("label",{className:l.label},e.label),u.default.createElement(N,{className:l.dateIcon}),u.default.createElement(B,{className:l.clearIcon,onClick:function(){return n(null)}}),u.default.createElement(s.default,h({selected:a,onChange:function(t){t&&(n(t),e.onChange&&e.onChange(t))},className:l.datePickerContainer,dateFormat:"dd/MM/yyyy"+(e.showTimeSelect?" hh:mm aa":""),placeholderText:e.placeholder,showTimeSelect:Boolean(e.showTimeSelect)},e.showTimeSelect?{timeFormat:"HH mm"}:{})))},a.theme)),R=r.createUseStyles(function(e){return{selectorContainer:{display:"flex",flexDirection:"column",alignItems:"flex-start",backgroundColor:e.backgroundSurface,padding:12,flex:1,position:"relative",borderRadius:5,"& svg":{color:e.textPrimary,cursor:"pointer"}},label:{marginBottom:4,color:e.textMajor,fontSize:16,fontFamily:"Open Sans Regular",fontWeight:600,fontStyle:"normal"}}}),I=f.default(),T=u.default.memo(x(function(e){var t=u.default.useState(!1),a=t[0],n=t[1],o=r.useTheme(),l=R({theme:e.theme||o});return u.default.createElement("div",{className:l.selectorContainer,style:{minWidth:e.minWidth||270}},u.default.createElement("label",{className:l.label},e.label),u.default.createElement(m.default,{closeMenuOnSelect:!1,components:I,isMulti:Boolean(e.isMulti),options:e.options,onChange:function(t){e.isMulti||n(!1),e.onChange&&e.onChange(t)},onMenuOpen:function(){n(!0)},onMenuClose:function(){n(!1)},menuIsOpen:a,placeholder:e.placeholder,styles:{container:function(e){return h({},e,{width:"100%"})},control:function(e,t){return h({},e,{outline:"none",boxShadow:"none",backgroundColor:o.backgroundSurface,color:o.textMajor,width:"100%",height:32,borderWidth:1,boxSizing:"border-box",border:"1px solid "+(t.isFocused?o.borderDefault:o.borderDefaultMinor),borderRadius:4,paddingLeft:8,fontSize:16,fontStyle:"normal",fontWeight:400})},input:function(e){return h({},e,{color:o.textMajor})},menu:function(e){return h({},e,{backgroundColor:o.backgroundSurface})},singleValue:function(e){return h({},e,{color:o.textMajor})},option:function(e,t){var a=t.isFocused;return h({},e,{color:t.isSelected?o.textSuccess:a?o.textReverse:o.textMajor,backgroundColor:a?o.textMajor:o.backgroundSurface})},menuList:function(e){return h({},e,{boxShadow:"1px 1px 10px 1px black",border:"1px solid "+o.borderDefaultMinor,borderRadius:5})}}}))},a.theme)),z=r.createUseStyles(function(e){return{confirmButton:{padding:12,fontSize:16,fontWeight:600,fontFamily:"Open Sans SemiBold",boxSizing:"border-box",borderRadius:4,cursor:"pointer",color:e.textPrimary,backgroundColor:e.textReverse,border:"2px solid "+e.borderSuccess,"&:hover":{backgroundColor:e.backgroundPrimary,border:"2px solid "+e.backgroundPrimary,color:e.textReverse,"& svg":{}}},cancelButton:{extend:"confirmButton",backgroundColor:e.textReverse,color:e.textDanger,border:"2px solid "+e.textDanger,"&:hover":{color:e.textReverse,backgroundColor:e.textDanger,borderColor:e.backgroundDanger}}}});!function(e){e.Confirm="Confirm",e.Cancel="Cancel"}(g||(g={}));var D,j=u.default.memo(x(function(e){var t,a=u.default.useState(!1),n=a[0],o=a[1],l=r.useTheme(),i=z({theme:e.theme||l});return u.default.createElement("button",{className:(t={},t[g.Confirm]=i.confirmButton,t[g.Cancel]=i.cancelButton,t)[e.buttonType||g.Confirm],onMouseOver:function(){return o(!0)},onMouseOut:function(){return o(!1)}},(e.prefixIcon&&!n&&e.hoverPrefix||e.prefixIcon&&!e.hoverPrefix)&&u.default.createElement(e.prefixIcon,null),e.hoverPrefix&&n&&u.default.createElement(e.hoverPrefix,null),u.default.createElement("span",{style:{marginLeft:e.prefixIcon?10:0}},e.label))},a.theme)),W=r.createUseStyles(function(e){return{tableContainer:{backgroundColor:e.backgroundSection,color:e.textMajor,width:"100%",border:"1px solid "+e.textMinor,fontFamily:"Open Sans Regular",borderCollapse:"collapse"},tableHeader:{position:"sticky",top:-.5,backgroundColor:e.backgroundSectionMajor,boxShadow:"0px 0px 1px 0px "+e.textMajor,zIndex:1},tableHeaderRow:{height:48},tableHeaderColumn:{height:"100%",fontSize:13},tableHeaderColumnTitle:{borderRight:"2px solid "+e.textMinor,width:"calc(100% - 18px)",textAlign:"start",display:"block",paddingLeft:18},tableHeaderLastColumnTitle:{extend:"tableHeaderColumnTitle",borderRight:"none"},tableBody:{overflow:"auto",marginTop:30},tableRow:{height:48,borderBottom:"1px solid "+e.textMajor,"& .column_resizer_own_class":{borderRight:"1px solid transparent",width:10,padding:0,margin:0},"& .column_resizer_own_class:last-child":{border:"none"}},tableLastRow:{extend:"tableRow",borderBottom:"none"},tableSelectedRow:{extend:"tableRow",backgroundColor:e.textMajor,color:e.textMinor,"& .column_resizer_own_class":{borderRight:"1px solid transparent"}},tableColumn:{textAlign:"start",paddingLeft:18,fontSize:14},tableSearchColumn:{extend:"tableColumn",paddingLeft:0},checkbox:{border:"2px solid "+e.textMinor,backgroundColor:e.backgroundSurface,cursor:"pointer",height:16,width:16,top:2,position:"relative",accentColor:e.textMinor,"-moz-appearance":"none","-webkit-appearance":"none","-o-appearance":"none","&:checked":{backgroundColor:e.textSuccess,"-moz-appearance":"checkbox","-webkit-appearance":"checkbox","-o-appearance":"checkbox"}}}}),L=function(e){return u.default.createElement(p.default,{disabled:!1,maxWidth:null,id:e.id+1e4,resizeStart:function(){},resizeEnd:function(){},className:"columnResizer",minWidth:0})},O=u.default.memo(x(function(e){var t=u.default.useState(!1),a=t[0],n=t[1],o=u.default.useState([]),l=o[0],i=o[1],c=r.useTheme(),d=W({theme:e.theme||c}),s=function(e){return function(t){var a=l.findIndex(function(t){return t===e.id});if(-1===a)i([].concat(l,[e.id]));else{var r=[].concat(l);r.splice(a,1),0===r.length&&n(!1),i(r)}}},m=function(e){e.stopPropagation()};return console.log("props.columsn",e.columns),u.default.createElement("div",{style:h({},e.height?{maxHeight:e.height,overflowY:"auto"}:{})},u.default.createElement("table",{className:d.tableContainer,cellSpacing:"0",cellPadding:"0"},u.default.createElement("thead",{className:d.tableHeader},u.default.createElement("tr",{className:d.tableHeaderRow},e.selectableElements&&u.default.createElement(u.default.Fragment,null,u.default.createElement("th",{className:d.tableColumn,style:{cursor:"pointer"},onClick:function(t){t.stopPropagation(),a?(i([]),n(!1)):(i(e.data.map(function(e){return e.id})),n(!0))}},u.default.createElement("input",{className:d.checkbox,type:"checkbox",onChange:m,checked:a})),u.default.createElement(L,{id:-1})),e.columns.map(function(t,a){return u.default.createElement(u.default.Fragment,{key:a},u.default.createElement("th",{className:d.tableHeaderColumn},u.default.createElement("span",{className:a===e.columns.length-1?d.tableHeaderLastColumnTitle:d.tableHeaderColumnTitle},t.title)),u.default.createElement(L,{id:a}))}))),u.default.createElement("tbody",{className:d.tableBody},e.columns.some(function(e){return Boolean(e.handleSearch)})&&u.default.createElement("tr",{className:d.tableRow},e.selectableElements&&u.default.createElement(u.default.Fragment,null,u.default.createElement("td",{className:d.tableColumn}),u.default.createElement(L,{id:Math.floor(1e3*Math.random())+1e3})),e.columns.map(function(e,t){return u.default.createElement(u.default.Fragment,null,u.default.createElement("td",{className:d.tableSearchColumn},Boolean(e.handleSearch)&&u.default.createElement(C,h({},e.searchInputProps))),u.default.createElement(L,{id:t+Math.floor(1e3*Math.random())+1e3}))})),e.data.map(function(t,a){return u.default.createElement("tr",{key:a,className:(a===e.data.length-1?d.tableLastRow:d.tableRow)+(l.some(function(e){return e===t.id})?" "+d.tableSelectedRow:"")},e.selectableElements&&u.default.createElement(u.default.Fragment,null,u.default.createElement("td",{className:d.tableColumn,onClick:s(t),style:{cursor:"pointer"}},u.default.createElement("input",{className:d.checkbox,type:"checkbox",onChange:m,checked:l.some(function(e){return e===t.id})})),u.default.createElement(L,{id:a-1e4})),e.columns.map(function(e,r){return u.default.createElement(u.default.Fragment,{key:r},u.default.createElement("td",{className:d.tableColumn},!e.render&&t[e.name]||"",e.render&&u.default.createElement(e.render,{element:t})),u.default.createElement(L,{id:a+1e4}))}))}))))},a.theme)),_=r.createUseStyles(function(e){return{status:{padding:"6px 16px",fontFamily:"Open Sans Bold",cursor:"pointer",borderRadius:20,borderWidth:1.5,borderStyle:"solid"},statusWarning:{extend:"status",color:e.textWarningStrong,backgroundColor:e.backgroundSurface,borderColor:e.borderWarning},statusDanger:{extend:"status",borderColor:e.borderDanger,color:e.textDangerStrong,backgroundColor:e.backgroundSurface},statusSuccess:{extend:"status",borderColor:e.borderSuccess,color:e.textSuccessStrong,backgroundColor:e.backgroundSurface},statusInfo:{extend:"status",borderColor:e.borderInfo,backgroundColor:e.backgroundSurface,color:e.textInfoStrong}}});!function(e){e.Danger="Danger",e.Warning="Warning",e.Success="Success",e.Info="Info"}(D||(D={}));var H=u.default.memo(x(function(e){var t,a=r.useTheme(),n=_({theme:e.theme||a});return u.default.createElement("span",{className:(t={},t[D.Success]=n.statusSuccess,t[D.Info]=n.statusInfo,t[D.Danger]=n.statusDanger,t[D.Warning]=n.statusWarning,t)[e.statusType]},e.label)},a.theme)),F=r.createUseStyles(function(e){return{layer:{zIndex:1,position:"fixed",width:"calc(100vw * 2)",height:"calc(100vh * 2)",top:-100,left:-100,backgroundColor:e.backgroundSurface,opacity:.7},sideBarContainer:{zIndex:2,position:"relative",backgroundColor:e.backgroundSurface,padding:12,boxSizing:"border-box",display:"flex",flexDirection:"column",fontFamily:"Open Sans Regular",width:306,transition:"all .15s ease-in-out",overflow:"hidden"},sideBarClosedContainer:{extend:"sideBarContainer",width:40,padding:0,paddingTop:12,paddingBottom:12,"& $sideBarSectionTitle":{opacity:0},"& $sideBarOptionContainer":{justifyContent:"center",paddingLeft:5,paddingRight:5},"& $sideBarOption":{paddingRight:0,paddingLeft:0}},sideBarTriggerIconContainer:{display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,cursor:"pointer"},sideBarTriggerIcon:{transition:"transform .2s ease-in-out"},sideBarTriggerIconSideBarOpen:{transform:"rotateZ(180deg)"},sideBarLine:{width:"100%",borderBottom:"1px solid "+e.textMinor,marginTop:16,marginBottom:10},sideBarSectionContainer:{display:"flex",flexDirection:"column"},sideBarSectionTitle:{color:e.textMinor,fontWeight:700,fontSize:13,position:"relative",left:15,whiteSpace:"nowrap"},sideBarOptionContainer:{display:"flex",flexDirection:"column",cursor:"pointer",paddingRight:12,paddingLeft:12,marginTop:1,marginBottom:1},sideBarOption:{display:"flex",fontSize:13,alignItems:"center",flexDirection:"row",borderRadius:40,padding:10,"&:hover":{backgroundColor:e.borderDefaultMinor,color:e.textReverse}},sideBarOptionTitle:{color:e.textMajor,marginLeft:20,position:"absolute",left:60,whiteSpace:"nowrap"},sideBarIcon:{transition:"all .1s ease-in-out"}}}),P=u.default.memo(function(e){var t=w(e);return u.default.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},t),u.default.createElement("path",{d:"M14.7601 11.6568C14.5355 11.9188 14.1409 11.9492 13.8788 11.7245C13.6168 11.4999 13.5864 11.1053 13.811 10.8433L16.141 8.12501H2.5C2.15482 8.12501 1.875 7.84519 1.875 7.50001C1.875 7.15483 2.15482 6.87501 2.5 6.87501H16.141L13.811 4.15676C13.5864 3.89468 13.6168 3.50012 13.8788 3.27548C14.1409 3.05084 14.5355 3.08119 14.7601 3.34327L17.9672 7.08484C18.0654 7.19524 18.125 7.34066 18.125 7.50001C18.125 7.65937 18.0654 7.8048 17.9672 7.9152L14.7601 11.6568Z",fill:e.color||"#17BA89"}),u.default.createElement("path",{d:"M11.875 11.875C11.875 11.5298 11.5952 11.25 11.25 11.25H2.5C2.15482 11.25 1.875 11.5298 1.875 11.875C1.875 12.2202 2.15482 12.5 2.5 12.5H11.25C11.5952 12.5 11.875 12.2202 11.875 11.875Z",fill:e.color||"#17BA89"}),u.default.createElement("path",{d:"M11.25 15.625C11.5952 15.625 11.875 15.9048 11.875 16.25C11.875 16.5952 11.5952 16.875 11.25 16.875H2.5C2.15482 16.875 1.875 16.5952 1.875 16.25C1.875 15.9048 2.15482 15.625 2.5 15.625H11.25Z",fill:e.color||"#17BA89"}))}),Z=u.default.memo(x(function(e){var t=u.default.useState(!1),a=t[0],n=t[1],o=r.useTheme(),l=F({theme:e.theme||o});return u.default.createElement(u.default.Fragment,null,a&&u.default.createElement("div",{className:l.layer,onClick:function(){return n(!1)}}),u.default.createElement("div",{className:l.sideBarContainer+(a?"":" "+l.sideBarClosedContainer)},u.default.createElement("div",{className:l.sideBarTriggerIconContainer,onClick:function(){return n(!a)}},u.default.createElement(P,{className:l.sideBarTriggerIcon+(a?" "+l.sideBarTriggerIconSideBarOpen:"")})),u.default.createElement("div",{className:l.sideBarLine}),e.sideBarSections.map(function(e,t){return u.default.createElement("div",{key:t,className:l.sideBarSectionContainer},e.title&&u.default.createElement("h2",{className:l.sideBarSectionTitle},e.title),e.options.map(function(e,t){return u.default.createElement("div",h({key:t,className:l.sideBarOptionContainer},e.onClick?{onClick:e.onClick}:{}),u.default.createElement("div",{className:l.sideBarOption},u.default.createElement(e.icon,{className:l.sideBarIcon}),u.default.createElement("span",{className:l.sideBarOptionTitle},e.title)))}))})))},a.theme));e.Button=j,e.DatePicker=M,e.FormSection=S,e.Input=C,e.Selector=T,e.SideBar=Z,e.Status=H,e.Table=O,e.YesOrNo=v});
//# sourceMappingURL=index.umd.js.map
