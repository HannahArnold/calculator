(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(8),i=a.n(c),r=(a(22),a(9)),o=a(10),d=a(14),u=a(11),s=a(15),h=(a(23),a(24),function(e){return l.a.createElement("div",{className:"button-wrapper ".concat((t=e.children,isNaN(t)&&"."!==t&&"="!==t?"operator":null)),onClick:function(){return e.handleClick(e.children)}},e.children);var t}),m=(a(25),function(e){return l.a.createElement("div",{className:"input"},e.input)}),p=(a(26),function(e){return l.a.createElement("div",{className:"clear-btn",onClick:e.handleClear},e.children)}),E=a(30),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).addToInput=function(e){a.setState({input:a.state.input+e})},a.handleEqual=function(){a.setState({input:E.a(a.state.input)})},a.state={input:""},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"calc-wrapper"},l.a.createElement(m,{input:this.state.input}),l.a.createElement("div",{className:"row"},l.a.createElement(h,{handleClick:this.addToInput},"7"),l.a.createElement(h,{handleClick:this.addToInput},"8"),l.a.createElement(h,{handleClick:this.addToInput},"9"),l.a.createElement(h,{handleClick:this.addToInput},"/")),l.a.createElement("div",{className:"row"},l.a.createElement(h,{handleClick:this.addToInput},"4"),l.a.createElement(h,{handleClick:this.addToInput},"5"),l.a.createElement(h,{handleClick:this.addToInput},"6"),l.a.createElement(h,{handleClick:this.addToInput},"*")),l.a.createElement("div",{className:"row"},l.a.createElement(h,{handleClick:this.addToInput},"1"),l.a.createElement(h,{handleClick:this.addToInput},"2"),l.a.createElement(h,{handleClick:this.addToInput},"3"),l.a.createElement(h,{handleClick:this.addToInput},"+")),l.a.createElement("div",{className:"row"},l.a.createElement(h,{handleClick:this.addToInput},"."),l.a.createElement(h,{handleClick:this.addToInput},"0"),l.a.createElement(h,{handleClick:function(){return e.handleEqual()}},"="),l.a.createElement(h,{handleClick:this.addToInput},"-")),l.a.createElement("div",{className:"row"},l.a.createElement(p,{handleClear:function(){return e.setState({input:""})}},"Clear"))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.7734fef7.chunk.js.map