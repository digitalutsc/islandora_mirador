(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1210:function(e,t,n){"use strict";n.r(t);var r=n(14),o=n(20),a=n(5),i=n(21),c=n(0),s=n.n(c),l=n(123),u=n(24),f=n.n(u),p=n(526),d=n(531),h=n(529),y=n(29),v=n(1115),b=n(1116),w=n(1134),g=n.n(w),m=n(446),O=n.n(m),j=n(70),C=n.n(j),I=(n(704),n(616)),x=n(54),E=n(138);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=D(e);if(t){var o=D(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return A(this,n)}}function A(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(a,e);var t,n,r,o=_(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).state={requestedAnnotations:!1},t.handleSelect=t.handleSelect.bind(R(t)),t.handleKey=t.handleKey.bind(R(t)),t.handleIntersection=t.handleIntersection.bind(R(t)),t}return t=a,(n=[{key:"handleSelect",value:function(){var e=this.props,t=e.canvas,n=e.selected,r=e.setCanvas,o=e.focusOnCanvas;n?o():r(t.id)}},{key:"handleKey",value:function(e){var t=this.props,n=t.canvas,r=t.setCanvas,o=t.focusOnCanvas;this.keys={enter:"Enter",space:" "},this.chars={enter:13,space:32},e.key===this.keys.enter||e.which===this.chars.enter||e.key===this.keys.space||e.which===this.chars.space?o():r(n.id)}},{key:"handleIntersection",value:function(e){var t=e.isIntersecting,n=this.props,r=n.annotationsCount,o=n.requestCanvasAnnotations,a=this.state.requestedAnnotations;!t||void 0===r||r>0||a||(this.setState({requestedAnnotations:!0}),o())}},{key:"render",value:function(){var e=this.props,t=e.annotationsCount,n=e.searchAnnotationsCount,r=e.canvas,o=e.classes,a=e.config,i=e.selected,c=new x.default(r);return s.a.createElement(I.a,{onChange:this.handleIntersection},s.a.createElement("div",{key:r.index,className:C()(o.galleryViewItem,i?o.selected:"",n>0?o.hasAnnotations:""),onClick:this.handleSelect,onKeyUp:this.handleKey,role:"button",tabIndex:0},s.a.createElement(E.a,{resource:r,labelled:!0,variant:"outside",maxWidth:a.width,maxHeight:a.height,style:{margin:"0 auto",maxWidth:"".concat(Math.ceil(a.height*c.aspectRatio),"px")}},s.a.createElement("div",{className:o.chips},n>0&&s.a.createElement(b.a,{avatar:s.a.createElement(v.a,{className:o.avatar,classes:{circle:o.avatarIcon}},s.a.createElement(O.a,{fontSize:"small"})),label:n,className:C()(o.searchChip),size:"small"}),(t||0)>0&&s.a.createElement(b.a,{avatar:s.a.createElement(v.a,{className:o.avatar,classes:{circle:o.avatarIcon}},s.a.createElement(g.a,{className:o.annotationIcon})),label:t,className:C()(o.annotationsChip),size:"small"})))))}}])&&P(t.prototype,n),r&&P(t,r),a}(c.Component);S.defaultProps={annotationsCount:void 0,config:{height:100,width:null},requestCanvasAnnotations:function(){},searchAnnotationsCount:0,selected:!1};var N=n(47),q=n(604),T=n(135),$=n(617),K=n(75);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z=Object(r.compose)(Object(o.b)((function(e,t){var n=t.canvas,r=t.windowId,o=Object(N.getCurrentCanvas)(e,{windowId:r}),a=Object(q.f)(e,{windowId:r}),i=f()(a.map((function(e){return e.resources}))).filter((function(e){return e.targetId===n.id})),c=Object(T.getCompanionWindowsForContent)(e,{content:"annotations",windowId:r}).length>0;return{annotationsCount:function(){if(c)return Object($.d)(e,{canvasId:n.id}).reduce((function(e,t){return e+t.resources.filter((function(e){return e.targetId===n.id})).length}),0)}(),config:Object(K.a)(e).galleryView,searchAnnotationsCount:i.length,selected:o&&o.id===n.id}}),(function(e,t){var n=t.canvas,r=(t.id,t.windowId);return{focusOnCanvas:function(){return e(p.i(r,"single"))},requestCanvasAnnotations:function(){return e(d.f(r,n.id))},setCanvas:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e(h.a.apply(y,[r].concat(n)))}}})),Object(a.a)((function(e){return{annotationIcon:{height:"1rem",width:"1rem"},annotationsChip:B({},e.typography.caption),avatar:{backgroundColor:"transparent"},chips:{opacity:.875,position:"absolute",right:0,textAlign:"right",top:0},galleryViewItem:{"&$hasAnnotations":{border:"2px solid ".concat(e.palette.action.selected)},"&$selected,&$selected$hasAnnotations":{border:"2px solid ".concat(e.palette.primary.main)},"&:focus":{outline:"none"},"&:hover":{backgroundColor:e.palette.action.hover},border:"2px solid transparent",cursor:"pointer",display:"inline-block",margin:"".concat(e.spacing(1),"px ").concat(e.spacing(.5),"px"),maxHeight:function(e){return e.config.height+45},minWidth:"60px",overflow:"hidden",padding:e.spacing(.5),position:"relative",width:"min-content"},hasAnnotations:{},searchChip:B(B({},e.typography.caption),{},{"&$selected $avatar":{backgroundColor:e.palette.highlights.primary},marginTop:2}),selected:{}}})))(S);function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=U(e);if(t){var o=U(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return M(this,n)}}function M(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(a,e);var t,n,r,o=G(a);function a(){return H(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.canvases,n=e.classes,r=e.viewingDirection,o=e.windowId,a="right-to-left"===r?"rtl":"ltr";return s.a.createElement(l.a,{component:"section",dir:a,square:!0,elevation:0,className:n.galleryContainer,id:"".concat(o,"-gallery")},t.map((function(e){return s.a.createElement(z,{key:e.id,windowId:o,canvas:e})})))}}])&&J(t.prototype,n),r&&J(t,r),a}(c.Component);X.defaultProps={classes:{},viewingDirection:""};var Y=n(77),L=Object(r.compose)(Object(a.a)((function(e){return{galleryContainer:{alignItems:"flex-start",display:"flex",flexDirection:"row",flexWrap:"wrap",overflowX:"hidden",overflowY:"scroll",padding:"50px 0 50px 20px",width:"100%"}}})),Object(o.b)((function(e,t){var n=t.windowId;return{canvases:Object(N.getCanvases)(e,{windowId:n}),viewingDirection:Object(Y.e)(e,{windowId:n})}})),Object(i.a)("GalleryView"));t.default=L(X)}}]);