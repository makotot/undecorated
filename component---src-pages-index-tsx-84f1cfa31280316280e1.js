(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{238:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(244),r=n(243),i=n(240),c=n(273),d=n.n(c),u=n(259),m=n(241),s=n(279),p=n.n(s),f=n(287),g=n.n(f),h=n(1),b=n(109),y=n(15),E=n(289),w=n.n(E);function C(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    ","\n    ","\n  "]);return C=function(){return e},e}var v=y.default.div.withConfig({displayName:"playground__StyledPlayground",componentId:"sc-5fo7hy-0"})(["position:relative;background:#fff;border:1px solid rgba(0,0,255,0.25);"]),k=y.default.div.withConfig({displayName:"playground__BackgroundGridGround",componentId:"sc-5fo7hy-1"})(["background-color:rgba(250,250,250,0.25);"]),_=function(e){return"rgba(0, 0, 255, "+e+")"},x=y.default.div.withConfig({displayName:"playground__BackgroundGrid",componentId:"sc-5fo7hy-2"})(["position:absolute;top:0;left:0;right:0;bottom:0;background-color:transparent;background-image:linear-gradient(0deg,transparent 24%,"," 25%,"," 26%,transparent 27%,transparent 74%,"," 75%,"," 76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%,"," 25%,"," 26%,transparent 27%,transparent 74%,"," 75%,"," 76%,transparent 77%,transparent);background-size:1rem 1rem;"],_(.1),_(.1),_(.6),_(.6),_(.1),_(.1),_(.6),_(.6)),N=Object(y.default)(w.a).withConfig({displayName:"playground__StyledFrame",componentId:"sc-5fo7hy-3"})(["width:100%;height:10rem;border:1px solid #ccc;"]),I=function(e){var t=e.children;return o.a.createElement(v,null,o.a.createElement(k,null,o.a.createElement(x,null),t))},S=function(e){var t=e.children,n=e.style,a=Object(y.createGlobalStyle)(C(),r.b,n);return o.a.createElement(N,null,o.a.createElement(E.FrameContextConsumer,null,function(e){var n=e.document;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.StyleSheetManager,{target:n.head},o.a.createElement(o.a.Fragment,null,o.a.createElement(a,null),o.a.createElement(I,null,t))))}))},j=y.default.section.withConfig({displayName:"wrapper__Wrapper",componentId:"sc-1pcyhyv-0"})(["display:flex;flex-direction:column;padding:0 0 2rem;"]),O=y.default.h2.withConfig({displayName:"heading__Heading",componentId:"sc-1f2rm9j-0"})(["display:block;padding-bottom:1rem;text-transform:uppercase;font-size:1.25rem;font-weight:300;letter-spacing:0.5rem;border-bottom:1px solid #222;"]),z=y.default.p.withConfig({displayName:"summary__Summary",componentId:"sc-1oxfhsw-0"})(["color:#555;font-size:1rem;line-height:1.5rem;"]),G=y.default.div.withConfig({displayName:"body__Body",componentId:"sc-454gjj-0"})(["margin:1rem 0 0;"]),B=y.default.footer.withConfig({displayName:"foot__Foot",componentId:"xb89ky-0"})(["margin-top:auto;padding-top:1rem;text-align:center;"]),F=y.default.button.withConfig({displayName:"foot__StyledFootButton",componentId:"xb89ky-1"})(["appearance:none;display:inline-flex;align-items:center;background-color:#FFF;color:#222;border:1px solid #222;padding:0.5rem;font-size:0.675rem;transition:all 0.3s ease;&:hover{background-color:#444;color:#fff;}"]),R=function(e){var t=e.children,n=e.onClick;return o.a.createElement(F,{onClick:n},t)};function M(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    ","\n  "]);return M=function(){return e},e}var T=function(e){var t=e.style,n=e.template,l=e.title,r=e.id,i=e.summary,c=e.iframe,d=void 0!==c&&c,s=e.index,p=Object(y.createGlobalStyle)(M(),t),f=Object(a.useContext)(b.a),g=(f.state,f.dispatch);return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,null),o.a.createElement(j,null,o.a.createElement(O,{id:r},l),o.a.createElement(G,null,o.a.createElement(h.GutterRow.Block,null,o.a.createElement(h.GutterRow.Element,null,o.a.createElement(z,null,i)),o.a.createElement(h.GutterRow.Element,null,d?o.a.createElement(S,{style:t},n):o.a.createElement(I,null,n)))),o.a.createElement(B,null,o.a.createElement(R,{onClick:function(){g({type:"toggleModal",isVisible:!0,modalId:s}),Object(u.disableBodyScroll)(document.querySelector("#js-modal"),{allowTouchMove:function(e){for(;e&&e!==document.body;){if(e.getAttribute("body-scroll-lock-ignore"))return!0;e=e.parentNode}}})}},o.a.createElement(m.b,null)," Show Code"))))},q=y.default.button.withConfig({displayName:"close-button__StyledCloseButton",componentId:"sc-185oi1r-0"})(["margin-left:auto;appearance:none;padding:0.5rem;background-color:#fff;color:#222;font-size:1rem;"]),H=function(e){var t=e.children,n=e.onClick;return o.a.createElement(q,{onClick:n},t)},D=n(44),P=y.default.div.withConfig({displayName:"modal__Modal",componentId:"sc-1u4pssu-0"})(["position:fixed;min-width:80vw;max-width:90vw;max-height:90vh;top:50%;left:50%;transition:all 0.3s ease;transform:translate(-50%,",");opacity:",";background-color:#fff;z-index:10;@media screen and (min-width:","px){max-width:980px;}"],function(e){return e.isVisible?"-50%":"-200%"},function(e){return e.isVisible?1:0},D.breakPoints.l),V=y.default.header.withConfig({displayName:"modal__ModalHead",componentId:"sc-1u4pssu-1"})(["display:flex;align-items:center;"]),A=y.default.h2.withConfig({displayName:"modal__ModalHeadTitle",componentId:"sc-1u4pssu-2"})(["font-size:1.125rem;font-weight:300;letter-spacing:0.5rem;text-transform:uppercase;"]),L=y.default.div.withConfig({displayName:"modal__ModalInner",componentId:"sc-1u4pssu-3"})(["overflow:hidden;padding:1rem;"]),J=y.default.div.withConfig({displayName:"modal__ModalBody",componentId:"sc-1u4pssu-4"})(["max-height:80vh;overflow-x:auto;overflow-scrolling:touch;"]),U=y.default.div.withConfig({displayName:"modal__Overlay",componentId:"sc-1u4pssu-5"})(["position:fixed;width:100%;height:100%;top:0;left:0;display:",";background-color:rgba(0,0,0,0.25);z-index:9;"],function(e){return e.isVisible?"block":"none"}),W=(n(261),n(23),n(252)),X=y.default.a.withConfig({displayName:"code-tab__StyledCodeTabNavLink",componentId:"sc-1x23do6-0"})(["display:block;padding:0.5rem;color:",";border-bottom:2px solid ",";font-weight:",";text-decoration:none;"],function(e){return e.active?"#222":"#555"},function(e){return e.active?"#222":"transparent"},function(e){return e.active?400:300}),Z=function(e){return o.a.createElement(X,Object.assign({href:"#"},e),e.children)},K=y.default.li.withConfig({displayName:"code-tab__CodeTabNavItem",componentId:"sc-1x23do6-1"})([""]),Q=y.default.ul.withConfig({displayName:"code-tab__CodeTabNav",componentId:"sc-1x23do6-2"})(["display:flex;flex-direction:row;border-bottom:1px solid #222;"]),Y=y.default.div.withConfig({displayName:"code-tab__CodeTabBody",componentId:"sc-1x23do6-3"})(["margin-top:1rem;"]),$=function(e){var t=e.groups,n=Object(a.useState)(0),l=n[0],r=n[1],i=function(e){e.preventDefault(),r(Number(e.currentTarget.dataset.index))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q,null,t.map(function(e,t){return o.a.createElement(K,{key:t},o.a.createElement(Z,{active:t===l,onClick:i,"data-index":t},e.title))})),o.a.createElement(Y,null,t.map(function(e,t){return t!==l?null:e.items.map(function(e,t){return o.a.createElement(W.a,{key:t,code:e.code,lang:e.lang})})})))},ee=function(){var e=Object(a.useContext)(b.a),t=e.state,n=e.dispatch,l=function(){n({type:"toggleModal",isVisible:!1,modalId:-1}),Object(u.clearAllBodyScrollLocks)()},r=t.patterns.map(function(e,t){return o.a.createElement(T,{key:t,style:e.defaultRules||e.rules,template:e.template(),title:e.docs.title,id:e.docs.id,summary:e.docs.summary,iframe:e.docs.iframe,jsxTemplate:e.jsxTemplate,index:t})}),i=t.patterns[t.modalId];return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.GutterRow.Block,null,o.a.createElement(h.GutterRow.Element,null,o.a.createElement(h.FlowGrid.Block,null,r))),o.a.createElement(P,{isVisible:t.isVisible,id:"js-modal"},t.modalId>-1&&o.a.createElement(L,null,o.a.createElement(V,null,o.a.createElement(A,null,i.docs.title),o.a.createElement(H,{onClick:l},o.a.createElement(m.f,null))),o.a.createElement(J,null,o.a.createElement($,{groups:[{title:"SCSS",items:[{code:g()(i.defaultRules||i.rules),lang:"scss"},{code:p()(d.a.renderToStaticMarkup(i.template())),lang:"markup"}]},{title:"Styled Components",items:[{code:i.jsxTemplate,lang:"jsx"}]}]})))),o.a.createElement(U,{isVisible:t.isVisible,onClick:l}))},te=n(248);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,null),o.a.createElement(l.a,{title:""}),o.a.createElement(b.b,null,o.a.createElement(te.a,null,o.a.createElement(i.a,null,o.a.createElement(ee,null)))))}},240:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),o=n.n(a),l=n(15).default.div.withConfig({displayName:"wrapper__StyledWrapper",componentId:"sc-1pi124y-0"})(["max-width:980px;min-width:320px;margin:0 auto;padding:0 1rem;"]),r=function(e){var t=e.children;return o.a.createElement(l,null,t)}},242:function(e,t,n){var a;e.exports=(a=n(247))&&a.default||a},243:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});n(18),n(17),n(7),n(21);var a=n(15),o=n(44);function l(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["",""]);return l=function(){return e},e}var r="\n  :root {\n    --base-font-size: 16px;\n\n    \n  "+Object.keys(o.spaces).map(function(e){return"--spaces-"+e+": "+o.spaces[e]+"rem;"}).join("")+"\n\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  *::before, *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: var(--base-font-size);\n    font-weight: 400;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body {\n    width: 100%;\n    margin: 0;\n    font-family: 'Source Sans Pro', -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;\n    line-height: 1.25;\n    background-color: #fff;\n    color: #222;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  ul, ol {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n  }\n\n  button {\n    border: 0;\n    cursor: pointer;\n    -webkit-appearance: none;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  pre {\n    margin: 0;\n  }\n\n  .dummy {\n    display: block;\n    padding: 2rem;\n    background-color: rgba(190, 170, 255, 0.5);\n    border: 2px solid #7e91ff;\n  }\n\n  .dummy-inline {\n    display: inline;\n    background-color: rgba(190, 170, 255, 0.5);\n    color: #7e91ff;\n    font-weight: bold;\n    border: 0;\n  }\n\n  .dummy-wrapper {\n    width:100%;\n    height: 10rem;\n  }\n",i=Object(a.createGlobalStyle)(l(),r)},244:function(e,t,n){"use strict";var a=n(245),o=n(0),l=n.n(o),r=n(249),i=n.n(r);function c(e){var t=e.description,n=e.lang,o=(e.meta,e.title,a.data.site),r=t||o.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:n},title:o.siteMetadata.title,meta:[{name:"description",content:r},{name:"google-site-verification",content:"PHc2RN1kqWrlcCNtsmrI53TDAeZ72egGJbL2xhMl_vc"}],titleTemplate:""+o.siteMetadata.title,defaultTitle:o.siteMetadata.title},l.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&display=swap"}))}c.defaultProps={lang:"en",meta:[],description:"",title:""},t.a=c},245:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"UNDECORATED | Collection of reusable layout pattern of CSS and styled-components","description":"Collection of reusable layout pattern of CSS and styled-components.","author":"makotot"}}}}')},246:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"UNDECORATED | Collection of reusable layout pattern of CSS and styled-components"}}}}')},247:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),o=n.n(a),l=n(114);t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null}},248:function(e,t,n){"use strict";var a=n(246),o=n(0),l=n.n(o),r=n(109),i=n(15),c=n(240),d=n(1),u=n(80),m=n.n(u);n(242),n(14).default.enqueue,l.a.createContext({});var s=n(241),p=i.default.header.withConfig({displayName:"header__StyledHeader",componentId:"qpgpt7-0"})(["padding:1.25rem 0;background-color:#fff;border-bottom:1px solid #ccc;"]),f=i.default.h1.withConfig({displayName:"header__Heading",componentId:"qpgpt7-1"})(["margin:0;color:#333;font-size:1rem;font-weight:500;line-height:1.25;letter-spacing:0.1rem;text-transform:uppercase;"]),g=i.default.p.withConfig({displayName:"header__SubHeading",componentId:"qpgpt7-2"})(["color:#444;font-size:0.75rem;font-weight:300;letter-spacing:0.05rem;"]),h=function(){var e=Object(o.useContext)(r.a),t=(e.state,e.dispatch);return l.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),t({type:"toggleDrawer",isOpened:!0})}},l.a.createElement(s.e,null))},b=Object(i.default)(d.GutterCol.Block).withConfig({displayName:"header__HeaderInner",componentId:"qpgpt7-3"})(["align-items:center;"]),y=function(e){e.title;return l.a.createElement(p,null,l.a.createElement(c.a,null,l.a.createElement(b,null,l.a.createElement(d.GutterCol.Element,null,l.a.createElement(h,null)),l.a.createElement(d.GutterCol.Element,null,l.a.createElement(d.GutterRow.Block,{size:"xs"},l.a.createElement(d.GutterRow.Element,null,l.a.createElement(f,null,l.a.createElement(m.a,{to:"/"},"undecorated"))),l.a.createElement(d.GutterRow.Element,null,l.a.createElement(g,null,"Collection of reusable layout pattern")))))))},E=i.default.main.withConfig({displayName:"main__StyledMain",componentId:"pweocr-0"})(["padding:2rem 0 1rem;"]),w=function(e){var t=e.children;return l.a.createElement(E,null,t)},C=Object(i.default)(d.InlineCentered.Block).withConfig({displayName:"footer__StyledFooter",componentId:"sc-1sxs61l-0"})(["padding:1rem 0;"]),v=i.default.a.withConfig({displayName:"footer__Link",componentId:"sc-1sxs61l-1"})(["color:#222;"]),k=function(){return l.a.createElement("footer",null,l.a.createElement(C,null,l.a.createElement(v,{href:"https://github.com/makotot/undecorated/",target:"_blank",rel:"noopener"},l.a.createElement(s.d,null))))},_=function(e){e.children;return l.a.createElement("nav",null,l.a.createElement(d.GutterRow.Block,{size:"l"},l.a.createElement(d.GutterRow.Element,null,l.a.createElement(m.a,{to:"/about/"},"About"))))},x=i.default.h2.withConfig({displayName:"drawer__NavHeading",componentId:"sc-65tq0j-0"})(["font-size:0.875rem;font-weight:500;text-transform:uppercase;"]),N=Object(i.default)(m.a).withConfig({displayName:"drawer__NavHeadingLink",componentId:"sc-65tq0j-1"})(["color:#555;text-decoration:none;"]),I=i.default.a.withConfig({displayName:"drawer__DrawerBackground",componentId:"sc-65tq0j-2"})(["position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(68,68,68,0.25);z-index:3;transition:all 0.3s ease;display:",";opacity:",";"],function(e){return e.isHidden?"none":""},function(e){return e.isHidden?0:1}),S=i.default.div.withConfig({displayName:"drawer__StyledDrawer",componentId:"sc-65tq0j-3"})(["position:fixed;top:0;left:0;height:100%;padding:2rem 10vw 2rem 2rem;background-color:#fff;color:#444;z-index:4;transition:all 0.3s ease;transform:",";"],function(e){return e.isHidden?"translateX(-100%)":"translateX(0)"}),j=function(e){var t=e.children,n=Object(o.useContext)(r.a),a=n.state,i=n.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{onClick:function(e){e.preventDefault(),i({type:"toggleDrawer",isOpened:!1})},isHidden:!a.isOpened}),l.a.createElement(S,{isHidden:!a.isOpened},l.a.createElement(d.GutterRow.Block,{size:"xl"},l.a.createElement(d.GutterRow.Element,null,l.a.createElement(x,null,l.a.createElement(N,{to:"/"},"undecorated"))),l.a.createElement(d.GutterRow.Element,null,t))))};t.a=function(e){var t=e.children;a.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.StickyFooter.Block,null,l.a.createElement(y,{title:"Undecorated Collection"}),l.a.createElement(j,null,l.a.createElement(_,null)),l.a.createElement(w,null,t),l.a.createElement(d.StickyFooter.Element,null,l.a.createElement(c.a,null,l.a.createElement(k,null)))))}},252:function(e,t,n){"use strict";n(23);var a=n(0),o=n.n(a),l=n(15),r=n(263),i=n(254),c=n.n(i),d=n(255),u=n(241),m=n(1),s=l.default.div.withConfig({displayName:"code__CodeBody",componentId:"qnaowg-0"})(["position:relative;width:100%;margin-top:0.25rem;font-size:0.875rem;"]),p=l.default.div.withConfig({displayName:"code__CodeButtonFrame",componentId:"qnaowg-1"})(["position:absolute;top:1rem;right:1rem;z-index:1;"]),f=l.default.button.withConfig({displayName:"code__CopyButton",componentId:"qnaowg-2"})(["padding:0.5rem;border:0;background-color:#fff;color:#444;font-size:1rem;cursor:pointer;transition:all 0.3s ease;&:hover{background-color:#444;color:#fff;}"]),g=Object(l.default)(m.GutterCol.Block).withConfig({displayName:"code__Copied",componentId:"qnaowg-3"})(["align-items:center;padding:0.5rem;border:0;background-color:#fff;color:#3c59ff;font-size:1rem;"]),h=Object(l.default)(m.GutterCol.Element).withConfig({displayName:"code__CopiedItem",componentId:"qnaowg-4"})(["display:flex;"]),b=function(e){var t=e.code,n=e.body,l=Object(d.useClipboard)({copiedTimeout:3e3}),r=Object(a.useCallback)(function(){l.copy(t)},[l.copy,t]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,null,t&&o.a.createElement(p,null,l.copied?o.a.createElement(g,{size:"xs"},o.a.createElement(h,null,o.a.createElement(u.a,null)),o.a.createElement(h,null,"Copied!")):o.a.createElement(f,{onClick:r},o.a.createElement(u.c,null))),n))};n.d(t,"a",function(){return E});var y=l.default.pre.withConfig({displayName:"code-block__Pre",componentId:"sc-1dss6pc-0"})(["overflow-y:auto;-webkit-overflow-scrolling:touch;padding:0.5rem 4rem 0.5rem 0.5rem;min-height:4rem;"]),E=function(e){var t=e.lang,n=e.code;return o.a.createElement(b,{code:n,body:o.a.createElement(r.a,Object.assign({},r.b,{code:n,language:t,theme:c.a}),function(e){var t=e.className,n=e.style,a=e.tokens,l=e.getLineProps,r=e.getTokenProps;return o.a.createElement(y,{className:t,style:n,"data-body-scroll-lock-ignore":"1"},a.map(function(e,t){return o.a.createElement("div",l({line:e,key:t}),e.map(function(e,t){return o.a.createElement("span",r({token:e,key:t}))}))}))})})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-84f1cfa31280316280e1.js.map