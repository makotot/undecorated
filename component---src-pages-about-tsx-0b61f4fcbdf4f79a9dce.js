(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{240:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(246),r=n(245),i=n(242),c=n(250),d=n(109),u=n(254),s=n(12),m=s.default.p.withConfig({displayName:"paragraph__Paragraph",componentId:"sc-1xjqjq4-0"})(["line-height:2;"]),p=s.default.ul.withConfig({displayName:"list__List",componentId:"puacbm-0"})(["padding:1rem;"]),f=s.default.li.withConfig({displayName:"list__Item",componentId:"puacbm-1"})(["list-style-type:disc;line-height:2rem;"]),g=n(1),h=n(241),y="\n  text-decoration: underline;\n\n  &:hover {\n    text-decoration: none;\n  }\n",E=s.default.a.withConfig({displayName:"text-link__StyledAnchor",componentId:"p6goim-0"})(["",""],y),b=Object(s.default)(h.a).withConfig({displayName:"text-link__StyledLink",componentId:"p6goim-1"})(["",""],y),w=function(e){var t=e.to,n=void 0===t?"#":t,a=e.href,l=e.children;return a?o.a.createElement(E,{href:a},l):o.a.createElement(b,{to:n},l)};t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,null),o.a.createElement(l.a,{title:"About"}),o.a.createElement(d.b,null,o.a.createElement(c.a,null,o.a.createElement(i.a,null,o.a.createElement(g.GutterRow.Block,null,o.a.createElement(g.GutterRow.Element,null,o.a.createElement(m,null,"Undecorated is Collection of reusable CSS layout pattern."),o.a.createElement("br",null),o.a.createElement(m,null,"I made Undecorated mainly for the following two purposes."),o.a.createElement(p,null,o.a.createElement(f,null,"To be able to browse a variety of reusable CSS layout patterns and make them available for instant copy and paste."),o.a.createElement(f,null,"Just import it with npm so that you can create the layout you want.")),o.a.createElement(m,null,"There are multiple sites that list layout patterns in grid and sites that introduce layout patterns in flexbox, but I could not find any sites that could view various layout patterns (regardless of properties such as flexbox, grid, table, etc) .",o.a.createElement("br",null),"So I wanted to create a site where I could browse various CSS layout patterns."),o.a.createElement(m,null,"In addition, I want to make those layout patterns available anywhere just by ",o.a.createElement("code",null,"import"),"(For now with ",o.a.createElement(w,{href:"https://styled-components.com"},"styled-components"),")."),o.a.createElement(m,null,"For example, if you want to center an element vertically and horizontally, you can do it by just following.")),o.a.createElement(g.GutterRow.Element,null,o.a.createElement(u.a,{lang:"jsx",code:"\nimport { Centered } from 'undecorated'\n\n<Centered>\n  <SomethingYouWantToCenter />\n</Centered>\n"})),o.a.createElement(g.GutterRow.Element,null,o.a.createElement(m,null,"Unlike the existing flexbox and grid utility libraries that leave the layout to the user, it only provides patterns that achieve a specific CSS layout.")))))))}},241:function(e,t,n){"use strict";var a=n(0),o=n.n(a),l=n(80),r=n.n(l);n.d(t,"a",function(){return r.a});n(244),n(15).default.enqueue,o.a.createContext({})},242:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),o=n.n(a),l=n(12).default.div.withConfig({displayName:"wrapper__StyledWrapper",componentId:"sc-1pi124y-0"})(["max-width:980px;min-width:320px;margin:0 auto;padding:0 1rem;"]),r=function(e){var t=e.children;return o.a.createElement(l,null,t)}},244:function(e,t,n){var a;e.exports=(a=n(249))&&a.default||a},245:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});n(18),n(17),n(7),n(21);var a=n(12),o=n(44);function l(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["",""]);return l=function(){return e},e}var r="\n  :root {\n    --base-font-size: 16px;\n\n    \n  "+Object.keys(o.spaces).map(function(e){return"--spaces-"+e+": "+o.spaces[e]+"rem;"}).join("")+"\n\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  *::before, *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: var(--base-font-size);\n    font-weight: 400;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body {\n    width: 100%;\n    margin: 0;\n    font-family: 'Source Sans Pro', -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;\n    line-height: 1.25;\n    background-color: #fff;\n    color: #222;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  ul, ol {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n  }\n\n  button {\n    border: 0;\n    cursor: pointer;\n    -webkit-appearance: none;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  pre {\n    margin: 0;\n  }\n\n  .dummy {\n    display: block;\n    padding: 2rem;\n    background-color: rgba(190, 170, 255, 0.5);\n    border: 2px solid #7e91ff;\n  }\n\n  .dummy-inline {\n    display: inline;\n    background-color: rgba(190, 170, 255, 0.5);\n    color: #7e91ff;\n    font-weight: bold;\n    border: 0;\n  }\n\n  .dummy-wrapper {\n    width:100%;\n    height: 10rem;\n  }\n\n  .dummy-background {\n    width: 100%;\n    height: 100%;\n  }\n",i=Object(a.createGlobalStyle)(l(),r)},246:function(e,t,n){"use strict";var a=n(247),o=n(0),l=n.n(o),r=n(251),i=n.n(r);function c(e){var t=e.description,n=e.lang,o=(e.meta,e.title,a.data.site),r=t||o.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:n},title:o.siteMetadata.title,meta:[{name:"description",content:r},{name:"google-site-verification",content:"PHc2RN1kqWrlcCNtsmrI53TDAeZ72egGJbL2xhMl_vc"}],titleTemplate:""+o.siteMetadata.title,defaultTitle:o.siteMetadata.title},l.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&display=swap"}))}c.defaultProps={lang:"en",meta:[],description:"",title:""},t.a=c},247:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"UNDECORATED | Collection of reusable CSS layout pattern","description":"Collection of reusable CSS layout pattern.","author":"makotot"}}}}')},248:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"UNDECORATED | Collection of reusable CSS layout pattern"}}}}')},249:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),o=n.n(a),l=n(114);t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null}},250:function(e,t,n){"use strict";var a=n(248),o=n(0),l=n.n(o),r=n(109),i=n(12),c=n(242),d=n(1),u=n(241),s=n(243),m=i.default.header.withConfig({displayName:"header__StyledHeader",componentId:"qpgpt7-0"})(["padding:1.25rem 0;background-color:#fff;border-bottom:1px solid #ccc;"]),p=i.default.h1.withConfig({displayName:"header__Heading",componentId:"qpgpt7-1"})(["margin:0;color:#333;font-size:1rem;font-weight:500;line-height:1.25;letter-spacing:0.1rem;text-transform:uppercase;"]),f=i.default.p.withConfig({displayName:"header__SubHeading",componentId:"qpgpt7-2"})(["color:#444;font-size:0.75rem;font-weight:300;letter-spacing:0.05rem;"]),g=function(){var e=Object(o.useContext)(r.a),t=(e.state,e.dispatch);return l.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),t({type:"toggleDrawer",isOpened:!0})}},l.a.createElement(s.e,null))},h=Object(i.default)(d.GutterCol.Block).withConfig({displayName:"header__HeaderInner",componentId:"qpgpt7-3"})(["align-items:center;"]),y=function(e){e.title;return l.a.createElement(m,null,l.a.createElement(c.a,null,l.a.createElement(h,null,l.a.createElement(d.GutterCol.Element,null,l.a.createElement(g,null)),l.a.createElement(d.GutterCol.Element,null,l.a.createElement(d.GutterRow.Block,{size:"xs"},l.a.createElement(d.GutterRow.Element,null,l.a.createElement(p,null,l.a.createElement(u.a,{to:"/"},"undecorated"))),l.a.createElement(d.GutterRow.Element,null,l.a.createElement(f,null,"Collection of reusable CSS layout pattern")))))))},E=i.default.main.withConfig({displayName:"main__StyledMain",componentId:"pweocr-0"})(["padding:2rem 0 1rem;"]),b=function(e){var t=e.children;return l.a.createElement(E,null,t)},w=Object(i.default)(d.InlineCentered.Block).withConfig({displayName:"footer__StyledFooter",componentId:"sc-1sxs61l-0"})(["padding:1rem 0;"]),C=i.default.a.withConfig({displayName:"footer__Link",componentId:"sc-1sxs61l-1"})(["color:#222;"]),v=function(){return l.a.createElement("footer",null,l.a.createElement(w,null,l.a.createElement(C,{href:"https://github.com/makotot/undecorated/",target:"_blank",rel:"noopener"},l.a.createElement(s.d,null))))},k=function(e){e.children;return l.a.createElement("nav",null,l.a.createElement(d.GutterRow.Block,{size:"l"},l.a.createElement(d.GutterRow.Element,null,l.a.createElement(u.a,{to:"/about/"},"About"))))},_=i.default.h2.withConfig({displayName:"drawer__NavHeading",componentId:"sc-65tq0j-0"})(["font-size:0.875rem;font-weight:500;text-transform:uppercase;"]),x=Object(i.default)(u.a).withConfig({displayName:"drawer__NavHeadingLink",componentId:"sc-65tq0j-1"})(["color:#555;text-decoration:none;"]),S=i.default.a.withConfig({displayName:"drawer__DrawerBackground",componentId:"sc-65tq0j-2"})(["position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(68,68,68,0.25);z-index:3;transition:all 0.3s ease;display:",";opacity:",";"],function(e){return e.isHidden?"none":""},function(e){return e.isHidden?0:1}),I=i.default.div.withConfig({displayName:"drawer__StyledDrawer",componentId:"sc-65tq0j-3"})(["position:fixed;top:0;left:0;height:100%;padding:2rem 10vw 2rem 2rem;background-color:#fff;color:#444;z-index:4;transition:all 0.3s ease;transform:",";"],function(e){return e.isHidden?"translateX(-100%)":"translateX(0)"}),N=function(e){var t=e.children,n=Object(o.useContext)(r.a),a=n.state,i=n.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,{onClick:function(e){e.preventDefault(),i({type:"toggleDrawer",isOpened:!1})},isHidden:!a.isOpened}),l.a.createElement(I,{isHidden:!a.isOpened},l.a.createElement(d.GutterRow.Block,{size:"xl"},l.a.createElement(d.GutterRow.Element,null,l.a.createElement(_,null,l.a.createElement(x,{to:"/"},"undecorated"))),l.a.createElement(d.GutterRow.Element,null,t))))};t.a=function(e){var t=e.children;a.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.StickyFooter.Block,null,l.a.createElement(y,{title:"Undecorated Collection"}),l.a.createElement(N,null,l.a.createElement(k,null)),l.a.createElement(b,null,t),l.a.createElement(d.StickyFooter.Element,null,l.a.createElement(c.a,null,l.a.createElement(v,null)))))}},254:function(e,t,n){"use strict";n(23);var a=n(0),o=n.n(a),l=n(12),r=n(265),i=n(256),c=n.n(i),d=n(257),u=n(243),s=n(1),m=l.default.div.withConfig({displayName:"code__CodeBody",componentId:"qnaowg-0"})(["position:relative;width:100%;margin-top:0.25rem;font-size:0.875rem;"]),p=l.default.div.withConfig({displayName:"code__CodeButtonFrame",componentId:"qnaowg-1"})(["position:absolute;top:1rem;right:1rem;z-index:1;"]),f=l.default.button.withConfig({displayName:"code__CopyButton",componentId:"qnaowg-2"})(["padding:0.5rem;border:0;background-color:#fff;color:#444;font-size:1rem;cursor:pointer;transition:all 0.3s ease;&:hover{background-color:#444;color:#fff;}"]),g=Object(l.default)(s.GutterCol.Block).withConfig({displayName:"code__Copied",componentId:"qnaowg-3"})(["align-items:center;padding:0.5rem;border:0;background-color:#fff;color:#3c59ff;font-size:1rem;"]),h=Object(l.default)(s.GutterCol.Element).withConfig({displayName:"code__CopiedItem",componentId:"qnaowg-4"})(["display:flex;"]),y=function(e){var t=e.code,n=e.body,l=Object(d.useClipboard)({copiedTimeout:3e3}),r=Object(a.useCallback)(function(){l.copy(t)},[l.copy,t]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null,t&&o.a.createElement(p,null,l.copied?o.a.createElement(g,{size:"xs"},o.a.createElement(h,null,o.a.createElement(u.a,null)),o.a.createElement(h,null,"Copied!")):o.a.createElement(f,{onClick:r},o.a.createElement(u.c,null))),n))};n.d(t,"a",function(){return b});var E=l.default.pre.withConfig({displayName:"code-block__Pre",componentId:"sc-1dss6pc-0"})(["overflow-y:auto;-webkit-overflow-scrolling:touch;padding:0.5rem 4rem 0.5rem 0.5rem;min-height:4rem;"]),b=function(e){var t=e.lang,n=e.code;return o.a.createElement(y,{code:n,body:o.a.createElement(r.a,Object.assign({},r.b,{code:n,language:t,theme:c.a}),function(e){var t=e.className,n=e.style,a=e.tokens,l=e.getLineProps,r=e.getTokenProps;return o.a.createElement(E,{className:t,style:n,"data-body-scroll-lock-ignore":"1"},a.map(function(e,t){return o.a.createElement("div",l({line:e,key:t}),e.map(function(e,t){return o.a.createElement("span",r({token:e,key:t}))}))}))})})}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-0b61f4fcbdf4f79a9dce.js.map