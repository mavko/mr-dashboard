(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[3],{15:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return i}));var a=t(8),o=t(0),r=t.n(o),c=r.a.createContext(),i=function(e){var n=e.children,t=Object(o.useState)(!1),i=Object(a.a)(t,2),l=i[0],s=i[1];function u(){s(!l)}function d(){s(!1)}var f=Object(o.useMemo)((function(){return{isSidebarOpen:l,toggleSidebar:u,closeSidebar:d}}),[l]);return r.a.createElement(c.Provider,{value:f},n)}},18:function(e,n,t){"use strict";var a=t(0),o=t.n(a);n.a=function(){return o.a.createElement("div",{className:"w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900"},"Loading...")}},21:function(e,n,t){e.exports=t(32)},26:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(11),c=t.n(r),i=(t(26),t(9)),l=t(1),s=t(8);var u=function(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],r=n[1],c=Object(l.g)();return Object(a.useEffect)((function(){c.pathname.slice(1)?setTimeout((function(){return r("Navigated to ".concat(c.pathname.slice(1)," page."))}),500):r("")}),[c]),o.a.createElement("span",{className:"sr-only",role:"status","aria-live":"polite","aria-atomic":"true"},t)},d=Object(a.lazy)((function(){return Promise.all([t.e(2),t.e(0),t.e(16)]).then(t.bind(null,185))})),f=Object(a.lazy)((function(){return Promise.all([t.e(2),t.e(0),t.e(17)]).then(t.bind(null,176))})),m=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,177))})),h=Object(a.lazy)((function(){return t.e(14).then(t.bind(null,178))}));var b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement(u,null),o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"/login",component:f}),o.a.createElement(l.b,{path:"/create-account",component:m}),o.a.createElement(l.b,{path:"/forgot-password",component:h}),o.a.createElement(l.b,{path:"/app",component:d}),o.a.createElement(l.a,{exact:!0,from:"/",to:"/login"}))))},p=t(15),g=t(18),v=t(14),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(31);c.a.render(o.a.createElement(p.b,null,o.a.createElement(a.Suspense,{fallback:o.a.createElement(g.a,null)},o.a.createElement(v.Windmill,{usePreferences:!0},o.a.createElement(b,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(n,e)}))}}()}},[[21,4,6]]]);
//# sourceMappingURL=main.1fa541d7.chunk.js.map