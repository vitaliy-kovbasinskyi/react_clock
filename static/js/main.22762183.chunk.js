(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),a=c.n(n),o=c(2),i=c(3),r=c(5),s=c(4),l=c(1),m=c.n(l),u=(c(12),c(0));function h(){var t=Math.random().toString().slice(2,6);return"Clock-".concat(t)}var d=function(t){Object(r.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={date:"",clockName:h()},t.timerid=void 0,t.timerNameid=void 0,t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerid=setInterval((function(){t.setState({date:(new Date).toLocaleTimeString()}),console.info((new Date).toLocaleTimeString())}),1e3),this.timerNameid=setInterval((function(){t.setState({clockName:h()})}),3300)}},{key:"componentWillUpdate",value:function(t,e){e.clockName!==this.state.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.state.clockName))}},{key:"componentWillUnmount",value:function(){this.timerid&&clearInterval(this.timerid),this.timerNameid&&clearInterval(this.timerNameid)}},{key:"render",value:function(){var t=this.state,e=t.clockName,c=t.date;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:c})]})}}]),c}(m.a.Component),k=function(t){Object(r.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0},t}return Object(i.a)(c,[{key:"render",value:function(){var t=this,e=this.state.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(d,{}),Object(u.jsx)("button",{type:"button",onContextMenu:function(e){t.setState({hasClock:!1}),e.preventDefault()},onClick:function(){t.setState({hasClock:!0})},children:"switcher"})]})}}]),c}(m.a.Component);a.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.22762183.chunk.js.map