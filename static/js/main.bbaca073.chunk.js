(this.webpackJsonptabs=this.webpackJsonptabs||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),b=a(4),r=a.n(b),l=a(3),u=[{value:"12",label:"Tab One"},{value:"23",label:"Tab Two"},{value:"34",label:"Tab Three"}];a(10);function s(e){var t=e.tab,a=e.handleSelectTab;e.currentTab;return Object(n.jsx)("button",{className:"tab-button",type:"button",onClick:function(){return a(t)},children:t.label})}function j(e){var t=e.tab,a=e.currentTab,c=e.handleSelectTab;return Object(n.jsx)("li",{children:Object(n.jsx)(s,{tab:t,currentTab:a,handleSelectTab:c})},t.label)}a(11);function i(e){var t=e.tabsList,a=e.currentTab,c=e.handleSelectTab;return Object(n.jsx)("ul",{className:"tabs",children:t.map((function(e){return Object(n.jsx)(j,{tab:e,currentTab:a,handleSelectTab:c},e.label)}))})}function o(e){var t=e.value;return Object(n.jsx)("div",{className:"current-tab",children:Object(n.jsx)("p",{children:t})})}function d(){var e=Object(c.useState)(u),t=Object(l.a)(e,1)[0],a=Object(c.useState)(t[0]),b=Object(l.a)(a,2),r=b[0],s=b[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Tabs"}),Object(n.jsx)(i,{tabsList:t,currentTab:r,handleSelectTab:function(e){s(e)}}),Object(n.jsx)(o,{value:r.value})]})}r.a.render(Object(n.jsx)(d,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.bbaca073.chunk.js.map