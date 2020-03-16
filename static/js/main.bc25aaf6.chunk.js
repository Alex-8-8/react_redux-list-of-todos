(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{15:function(t,e,n){t.exports=n(28)},26:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(7),u=n.n(o),c=n(2),l=n(11),s=(n(26),Object(c.b)(null,(function(t){return{onDelete:function(e){return t({type:"ON_DELETE",payload:e})}}}))((function(t){var e=t.todo,n=t.onDelete;return a.a.createElement("tr",null,a.a.createElement("td",null,e.user.username),a.a.createElement("td",null,e.title),a.a.createElement("td",null,e.completed?"completed":"uncompleted"),a.a.createElement("td",null,a.a.createElement("button",{type:"button",onClick:function(){return n(e.id)}},"x")))}))),i=Object(c.b)((function(t){return{todos:t.todos}}),(function(t){return{sortByTitle:function(){return t({type:"SORT_BY_TITLE"})},sortByName:function(){return t({type:"SORT_BY_NAME"})},sortByCompleted:function(){return t({type:"SORT_BY_COMPLETED"})}}}))((function(t){var e=t.todos,n=t.sortByTitle,r=t.sortByName,o=t.sortByCompleted;return a.a.createElement("div",{className:"table-wrapper"},a.a.createElement("table",{className:"table table-striped w-100 w-50"},a.a.createElement("thead",{className:"thead-dark"},a.a.createElement("tr",null,a.a.createElement("th",null,a.a.createElement("button",{className:"btn btn-info",type:"button",onClick:function(){return r()}},"Name")),a.a.createElement("th",null,a.a.createElement("button",{className:"btn btn-info",type:"button",onClick:function(){return n()}},"Todo")),a.a.createElement("th",null,a.a.createElement("button",{className:"btn btn-info",type:"button",onClick:function(){return o()}},"Status")),a.a.createElement("th",null,"Delete"))),a.a.createElement("tbody",null,e.map((function(t){return a.a.createElement(s,{key:t.id,todo:t})})))))})),d=n(3),p=n(1),m=n.n(p),b=n(5),f="https://jsonplaceholder.typicode.com",E=function(){var t=Object(b.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(b.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",E("".concat(f,"/users")));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(b.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",E("".concat(f,"/todos")));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(b.a)(m.a.mark((function t(){var e,n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,t.next=5,O();case 5:return n=t.sent,r=e.map((function(t){return Object(d.a)({},t,{user:n.find((function(e){return t.userId===e.id}))})})),t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=Object(c.b)(null,(function(t){return{setTodos:function(e){return t({type:"SET_TODOS",todos:e})}}}))((function(t){var e=t.setTodos,n=Object(r.useState)(!1),o=Object(l.a)(n,2),u=o[0],c=o[1],s=Object(r.useState)(!1),d=Object(l.a)(s,2),p=d[0],m=d[1];return a.a.createElement("div",{className:"app"},u?a.a.createElement(i,null):a.a.createElement("div",{className:"primary-show"},a.a.createElement("h1",null,"Redux TODOs"),a.a.createElement("button",{className:"btn btn-warning btn-lg",type:"button",onClick:function(){m(!0),y().then((function(t){e(t),c(!0),m(!1)}))}},p?a.a.createElement("span",null,"Loading..."):a.a.createElement("span",null,"Load"))))})),j=n(6),T=n(4),N=n(14),_={todos:[]},w=Object(T.createStore)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_TODOS":return Object(d.a)({},t,{todos:e.todos});case"SORT_BY_COMPLETED":return Object(d.a)({},t,{todos:Object(j.a)(null===t||void 0===t?void 0:t.todos).sort((function(t,e){return Number(e.completed)-Number(t.completed)}))});case"SORT_BY_TITLE":return Object(d.a)({},t,{todos:Object(j.a)(null===t||void 0===t?void 0:t.todos).sort((function(t,e){return t.title.localeCompare(e.title)}))});case"SORT_BY_NAME":return Object(d.a)({},t,{todos:Object(j.a)(null===t||void 0===t?void 0:t.todos).sort((function(t,e){return t.user.username.localeCompare(e.user.username)}))});case"ON_DELETE":return Object(d.a)({},t,{todos:Object(j.a)(null===t||void 0===t?void 0:t.todos).filter((function(t){return t.id!==e.payload}))});default:return t}}),Object(N.composeWithDevTools)());u.a.render(a.a.createElement(c.a,{store:w},a.a.createElement(h,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bc25aaf6.chunk.js.map