(window["webpackJsonpreact-ts-template"]=window["webpackJsonpreact-ts-template"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);a(68);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=a(15),i=a(37),s=a(14),u=a(21),m=a(26),p=a(53),d=a(47);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={count:0},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_COUNT":return b({},e,{count:e.count+1});case"DECREMENT_COUNT":return b({},e,{count:e.count-1});default:return e}},v=a(41),g=a.n(v),O=a(54);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j={events:[],isLoading:!1},N={requestEvents:function(e){return function(){var t=Object(O.a)(g.a.mark((function t(a,n){var r,c,l;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r={headers:{"Content-Type":"application/json",Accept:"application/json"}},e!==n().events.dayIndex){t.next=3;break}return t.abrupt("return");case 3:return a({type:"REQUEST_EVENTS",dayIndex:e}),"https://api.coingecko.com/api/v3/events",t.next=7,fetch("https://api.coingecko.com/api/v3/events",r);case 7:return c=t.sent,t.next=10,c.json();case 10:l=t.sent,a({type:"RECEIVE_EVENTS",dayIndex:e,events:l});case 12:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_EVENTS":return w({},e,{dayIndex:t.dayIndex,isLoading:!0});case"RECEIVE_EVENTS":return w({},e,{dayIndex:t.dayIndex,events:t.events.data,isLoading:!1});default:return e}};function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}a(79);var S=a(45),P=a(24),R=a(59),D=a(60),T=a.n(D),C={en:{translations:a(61)},de:{translations:a(62)}};S.a.use(R.a).use(T.a).use(P.a).init({resources:C,lng:"en",fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1},ns:["translations"],defaultNS:"translations"});S.a;var I=a(8),A=a(115),M=a(6),W=a(7),B=a(17),F=a(18),_=a(10),U=a(19),H=a(114),L=a(116),V=a(117),Y=a(118),z=a(119),G=a(120),J=a(34),q=(a(97),a(12)),Q=a(23),$=function(e){function t(e){var a;return Object(M.a)(this,t),(a=Object(B.a)(this,Object(F.a)(t).call(this,e))).toggle=a.toggle.bind(Object(_.a)(a)),a.state={isOpen:!1},a}return Object(U.a)(t,e),Object(W.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.props,t=e.t,a=e.i18n,n=function(e){return a.changeLanguage(e)};return r.a.createElement("header",null,r.a.createElement(H.a,{className:"navbar-expand-sm navbar-dark bg-dark navbar-toggleable-sm border-bottom box-shadow mb-3",dark:!0},r.a.createElement(A.a,null,r.a.createElement(L.a,{tag:J.a,to:"/"},"React TypeScript"),r.a.createElement(V.a,{onClick:this.toggle,className:"mr-2"}),r.a.createElement(Y.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:this.state.isOpen,navbar:!0},r.a.createElement("ul",{className:"navbar-nav flex-grow"},r.a.createElement(z.a,null,r.a.createElement(G.a,{tag:J.a,className:"text-light",to:"/"},r.a.createElement(q.a,{icon:Q.d})," ",t("menuHome"))),r.a.createElement(z.a,null,r.a.createElement(G.a,{tag:J.a,className:"text-light",to:"/RestCall"},r.a.createElement(q.a,{icon:Q.c})," ",t("menuRestCall"))),r.a.createElement(z.a,null,r.a.createElement(G.a,{tag:J.a,className:"text-light",to:"/About"},r.a.createElement(q.a,{icon:Q.e})," ",t("menuAbout"))),r.a.createElement("form",{className:"form-inline"},r.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",type:"button",onClick:function(e){return n("de")}},r.a.createElement("span",{className:"flag-icon flag-icon-de"})),r.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",type:"button",onClick:function(e){return n("en")}},r.a.createElement("span",{className:"flag-icon flag-icon-gb"}))))))))}}]),t}(r.a.Component),K=Object(P.c)()($),X=(a(108),function(e){function t(){var e,a;Object(M.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(B.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).state={intervalId:0,thePosition:!1,scrollStepInPx:50,delayInMs:30},a}return Object(U.a)(t,e),Object(W.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(){window.scrollY>170?e.setState({thePosition:!0}):e.setState({thePosition:!1})})),window.scrollTo(0,0)}},{key:"scrollToTop",value:function(){window.scroll(0,0)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.thePosition&&r.a.createElement("div",{className:"go-to-top",onClick:this.scrollToTop},r.a.createElement(q.a,{icon:Q.b})))}}]),t}(n.Component)),Z=Object(o.c)((function(e){return e}))(X),ee=(a(109),function(){return r.a.createElement("hr",{style:{position:"fixed",left:0,height:0,width:"100%",border:"2px solid grey",margin:0,zIndex:1030,bottom:0}})}),te=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(A.a,null,e.children,r.a.createElement("footer",null,r.a.createElement("div",{className:"float-left"},r.a.createElement("br",null),"\xa9 2019 - MoWeTec",r.a.createElement("br",null),r.a.createElement("br",null))))),r.a.createElement(ee,null),r.a.createElement(Z,null))},ae=a(36),ne=a.n(ae),re=a(31),ce=Object(o.c)()((function(e){var t=Object(P.b)().t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,t("titleHome")),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"React TypeScript Demo",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,t("withWordBig")," Redux"),r.a.createElement("h4",null,"... Bootstrap"),r.a.createElement("h4",null,"... Font Awesome"),r.a.createElement("h4",null,"... Internationalization (i18n)"),r.a.createElement("h4",null,"... REST Call Demo"),r.a.createElement("h4",null,"... etc.")),r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:ne.a,className:"card-img-top",alt:"Icon"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,t("MoreInfo")),r.a.createElement("a",{href:"https://github.com/rich-info",title:""},r.a.createElement(q.a,{icon:re.a})," Github"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/rich-info/react-ts-redux-bootstrap-i18n-template",title:""},r.a.createElement(q.a,{icon:re.a})," Github"),r.a.createElement("br",null))))})),le=a(64),oe=a.n(le),ie=a(65),se=a.n(ie),ue=function(e){function t(){return Object(M.a)(this,t),Object(B.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(U.a)(t,e),Object(W.a)(t,[{key:"componentDidMount",value:function(){this.ensureDataFetched()}},{key:"componentDidUpdate",value:function(){this.ensureDataFetched()}},{key:"ensureDataFetched",value:function(){this.props.requestEvents(1)}},{key:"render",value:function(){var e=this.props.t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,e("titleRestCall")),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"API: https://api.coingecko.com/api/v3/events ",r.a.createElement("br",null),r.a.createElement("br",null),function(e){var t=e.t;return r.a.createElement("div",{className:"card-columns"},e.events.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("div",{className:"card"},e.screenshot.startsWith("http")&&r.a.createElement("img",{src:e.screenshot,className:"card-img-top",alt:"Event Icon"}),!e.screenshot.startsWith("http")&&r.a.createElement("img",{src:oe.a,className:"card-img-top",alt:"Event Icon"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.title),r.a.createElement("div",{className:"card-text"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},e.url)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("a",{className:"btn btn-outline-primary",target:"_blank",href:e.website,role:"button"},t("MoreWordBig"),"..."))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm center-block"},r.a.createElement("small",{className:"text-muted"},r.a.createElement(q.a,{icon:Q.a})," ",r.a.createElement(se.a,{format:"DD.MM.YYYY",date:e.start_date}))))))),r.a.createElement("br",null))})))}(this.props))))}}]),t}(n.Component);var me=Object(o.c)((function(e){return e.events}),(function(e){return Object(m.b)(N,e)}))(Object(P.c)()(ue)),pe=Object(o.c)()((function(e){var t=Object(P.b)().t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,t("titleAbout")),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"React TypeScript Demo",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,t("withWordBig")," Redux"),r.a.createElement("h4",null,"... Bootstrap"),r.a.createElement("h4",null,"... Font Awesome"),r.a.createElement("h4",null,"... Internationalization (i18n)"),r.a.createElement("h4",null,"... REST Call Demo"),r.a.createElement("h4",null,"... etc.")),r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:ne.a,className:"card-img-top",alt:"Icon"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,t("MoreInfo")),r.a.createElement("a",{href:"https://github.com/rich-info",title:""},r.a.createElement(q.a,{icon:re.a})," Github"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/rich-info/react-ts-redux-bootstrap-i18n-template",title:""},r.a.createElement(q.a,{icon:re.a})," Github"),r.a.createElement("br",null))))})),de=(a(112),function(){return r.a.createElement(te,null,r.a.createElement(I.a,{exact:!0,path:"/",component:ce}),r.a.createElement(I.a,{path:"/Home/:dayIndex?",component:ce}),r.a.createElement(I.a,{path:"/RestCall/:currency?",component:me}),r.a.createElement(I.a,{path:"/About",component:pe}))}),Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var fe=document.getElementsByTagName("base")[0].getAttribute("href")||void 0,he=Object(s.a)({basename:fe}),ve=function(e,t){var a={counter:h,events:k},n=[p.a,Object(d.a)(e)],r=[],c=Object(m.c)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{router:Object(i.b)(e)}));return Object(m.e)(c,t,m.d.apply(void 0,[m.a.apply(void 0,n)].concat(r)))}(he,window.initialReduxState),ge=document.getElementById("root");l.a.render(r.a.createElement(o.a,{store:ve},r.a.createElement(i.a,{history:he},r.a.createElement(de,null))),ge),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ee?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):be(t,e)}))}}()},36:function(e,t,a){e.exports=a.p+"static/media/react_icon.638be909.png"},61:function(e){e.exports=JSON.parse('{"menuHome":"Home","menuRestCall":"REST Demo","menuAbout":"About","titleHome":"A multipurpose template for react web applications","titleRestCall":"REST Call Demo","titleAbout":"About","withWordBig":"With","MoreWordBig":"More","MoreInfo":"More info","username":"Usuario: {{username}}"}')},62:function(e){e.exports=JSON.parse('{"menuHome":"Startseite","menuRestCall":"REST Demo","menuAbout":"\xdcber","titleHome":"Eine vielseitige Vorlage f\xfcr React Webanwendungen","titleRestCall":"REST Api Aufruf Demo","titleAbout":"\xdcber","withWordBig":"Mit","MoreWordBig":"Mehr","MoreInfo":"Mehr Informationen","username":"Benutzer: {{username}}"}')},64:function(e,t,a){e.exports=a.p+"static/media/bitcoin_icon.e76046a2.png"},67:function(e,t,a){e.exports=a(113)},79:function(e,t,a){},97:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.e1fea114.chunk.js.map