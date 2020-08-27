(this["webpackJsonptz-emphasoft"]=this["webpackJsonptz-emphasoft"]||[]).push([[0],{112:function(e,t,n){e.exports=n(239)},117:function(e,t,n){},118:function(e,t,n){},238:function(e,t){},239:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(47),o=n.n(s),c=(n(117),n(49)),u=n(50),i=n(53),l=n(52),m=(n(118),n(6)),p=n(48),f=n(241),d=n(240),v=n(18),h=n.n(v),E=n(30),U=n(19),g=n(108),b={allUsers:[],currentUsers:[]},_=function(e){return function(){var t=Object(E.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,w.getUserInfo(e);case 3:t.sent;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USERS":return Object(U.a)(Object(U.a)({},e),{},{allUsers:t.users,currentUsers:t.users});case"CURRENT-USERS":return Object(U.a)(Object(U.a)({},e),{},{currentUsers:t.currentUsers});default:return e}},O=g.create({baseURL:"http://emphasoft-test-assignment.herokuapp.com"}),k=function(e,t){return O.post("/api-token-auth/",{username:e,password:t},{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data}))},w={getUsers:function(e){return O.get("/api/v1/users/",{headers:{Authorization:"token ".concat(e)}}).then((function(e){return e.data}))}},j={savedToken:null,isAuth:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH-SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{savedToken:t.token,isAuth:!0});case"LOGOUT":return Object(U.a)(Object(U.a)({},e),{},{savedToken:null,isAuth:!1});default:return e}},S=n(15),x=n(31),y=n.n(x),T=n(23),A=n.n(T),L=function(e){if(!e)return"Field is required"},R=function(e){var t=e.input,n=e.name,r=e.meta,s=r.touched,o=r.error,c=r.warning;return a.a.createElement("div",null,a.a.createElement("input",Object.assign({},t,{placeholder:n,className:"form-control"})),s&&(o&&a.a.createElement("span",{className:y.a.errorSpan},o)||c&&a.a.createElement("span",{className:y.a.errorSpan},c)))},I=Object(d.a)({form:"/login"})((function(e){var t=e.handleSubmit;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{for:"username"},"Username"),a.a.createElement(f.a,{component:R,name:"username",placeholder:"username",validate:L})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{for:"password"},"Username"),a.a.createElement(f.a,{component:R,name:"password",placeholder:"password",className:"form-control",validate:L})),a.a.createElement("div",null,a.a.createElement("button",{className:"btn btn-primary"},"Login")))})),B=Object(S.b)((function(e){return{isAuth:e.auth.isAuth}}),{giveToken:function(e,t){return function(){var n=Object(E.a)(h.a.mark((function n(r){var a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k(e,t);case 2:(a=n.sent).token&&r({type:"AUTH-SUCCESS",token:a.token});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(m.a,{to:"/users"}):a.a.createElement("div",{className:A()("container",y.a.loginContainer)},a.a.createElement("div",{className:A()("text-center",y.a.marginContainer)},a.a.createElement("h2",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435")),a.a.createElement("div",{className:y.a.marginContainer},a.a.createElement("div",null,a.a.createElement("span",null,"\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u043d\u0438\u0436\u0435")),a.a.createElement("div",null,a.a.createElement("span",null,"Username: ",a.a.createElement("b",null,"test_super"))),a.a.createElement("div",null,a.a.createElement("span",null,"Password: ",a.a.createElement("b",null,"Nf<U4f<rDbtDxAPn")))),a.a.createElement("div",null,a.a.createElement(I,{onSubmit:function(t){e.giveToken(t.username,t.password).catch((function(e){return alert("Error")}))}})))})),P=n(242),M=n(111),W=n(7),z=W.combineReducers,D=W.createStore,F=W.applyMiddleware,H=D(z({auth:N,usersPage:C,form:P.a}),F(M.a));window.__store__=H;var J=H,G=n(77),q=n.n(G);n(238);var X=function(e){return a.a.createElement("li",{className:A()("list-group-item")},a.a.createElement("div",{className:q.a.flexContainer},a.a.createElement("div",null,a.a.createElement("span",{className:q.a.idRound},"id ".concat(e.user.id)))),a.a.createElement("div",null,a.a.createElement("b",null,"Username: ",e.user.username)),a.a.createElement("div",null,"First name: ",e.user.first_name),a.a.createElement("div",null,"Last name: ",e.user.last_name))},$=n(38),K=n.n($);var Q=function(e){return a.a.createElement("div",{className:A()("container",K.a.usersContainer)},a.a.createElement("div",{className:A()(K.a.flexContainer,K.a.marginContainer)},a.a.createElement("div",null,a.a.createElement("h2",null,"Users")),a.a.createElement("div",{className:K.a.flexChild},a.a.createElement("button",{onClick:function(){e.logout()},className:"btn btn-primary"},"Logout"))),a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{type:"text",onInput:function(t){var n=e.allUsers.filter((function(e){return e.username.toLowerCase().indexOf(t.currentTarget.value)>-1}));e.filterList(n)},className:"form-control"})),a.a.createElement("ul",{className:"list-group"},e.currentUsers.map((function(t){return a.a.createElement(X,{user:t,key:t.id,saveUserInfo:e.saveUserInfo,savedToken:e.savedToken})}))))},V=n(7),Y=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.savedToken;if(!e)return a.a.createElement(m.a,{to:"/"});this.props.getUsers(e)}},{key:"render",value:function(){return this.props.isAuth?a.a.createElement("div",null,a.a.createElement(Q,{logout:this.props.logout,savedToken:this.props.savedToken,allUsers:this.props.allUsers,currentUsers:this.props.currentUsers,filterList:this.props.filterList,saveUserInfo:this.props.saveUserInfo})):a.a.createElement(m.a,{to:"/"})}}]),n}(a.a.Component),Z=Object(V.compose)(Object(S.b)((function(e){return{isAuth:e.auth.isAuth,savedToken:e.auth.savedToken,allUsers:e.usersPage.allUsers,currentUsers:e.usersPage.currentUsers}}),{logout:function(){return{type:"LOGOUT"}},getUsers:function(e){return function(){var t=Object(E.a)(h.a.mark((function t(n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getUsers(e);case 2:(r=t.sent).sort((function(e,t){return e.id>t.id})),n({type:"SET-USERS",users:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},filterList:function(e){return{type:"CURRENT-USERS",currentUsers:e}},saveUserInfo:function(e,t){return function(){var n=Object(E.a)(h.a.mark((function n(r){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.saveInfo(e,t);case 2:n.sent,r(_(e.user.id));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}),m.f)(Y),ee=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"container-md"},a.a.createElement(m.b,{exact:!0,path:"/"},a.a.createElement(B,null)),a.a.createElement(m.b,{path:"/users"},a.a.createElement(Z,null)))}}]),n}(a.a.Component),te=Object(S.b)((function(e){return{isAuth:e.auth.isAuth}}),{})(ee),ne=function(e){return a.a.createElement(a.a.StrictMode,null,a.a.createElement(S.a,{store:J},a.a.createElement(p.a,null,a.a.createElement(te,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,n){e.exports={loginContainer:"Login_loginContainer__1rLlp",errorSpan:"Login_errorSpan__3rOON",marginContainer:"Login_marginContainer__1xhFt"}},38:function(e,t,n){e.exports={usersContainer:"Users_usersContainer__20JEN",flexContainer:"Users_flexContainer__3WwXg",marginContainer:"Users_marginContainer__2-LaW"}},77:function(e,t,n){e.exports={userCard:"User_userCard__1B-T3",idRound:"User_idRound__1aIP7",userContainer:"User_userContainer__293be",flexContainer:"User_flexContainer__9HBiB",marginContainer:"User_marginContainer__AWMBA"}}},[[112,1,2]]]);
//# sourceMappingURL=main.eb99549b.chunk.js.map