(this["webpackJsonptz-emphasoft"]=this["webpackJsonptz-emphasoft"]||[]).push([[0],{112:function(e,t,n){e.exports=n(239)},117:function(e,t,n){},118:function(e,t,n){},238:function(e,t){},239:function(e,t,n){"use strict";n.r(t);var r,a=n(0),s=n.n(a),o=n(47),c=n.n(o),u=(n(117),n(49)),i=n(50),l=n(53),m=n(52),p=(n(118),n(6)),f=n(48),d=n(241),v=n(240),h=n(18),E=n.n(h),g=n(30),b=n(19),U=n(108),_={allUsers:[],currentUsers:[]},C=function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,j.getUserInfo(e);case 3:t.sent;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USERS":return Object(b.a)(Object(b.a)({},e),{},{allUsers:t.users,currentUsers:t.users});case"CURRENT-USERS":return Object(b.a)(Object(b.a)({},e),{},{currentUsers:t.currentUsers});default:return e}},O=U.create({baseURL:"https://emphasoft-test-assignment.herokuapp.com"}),k=function(e,t){return O.post("/api-token-auth/",{username:e,password:t},{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data}))},j={getUsers:function(e){return O.get("/api/v1/users/",{headers:{Authorization:"token ".concat(e)}}).then((function(e){return e.data}))}},x={savedToken:null,isAuth:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH-SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{savedToken:t.token,isAuth:!0});case"LOGOUT":return Object(b.a)(Object(b.a)({},e),{},{savedToken:null,isAuth:!1});default:return e}},y=n(15),S=n(31),T=n.n(S),L=n(23),A=n.n(L),R=function(e){if(!e)return"Field is required"},I=(r=50,function(e){if(e.length>r)return"Max length is ".concat(r," symbols")}),P=function(e){var t=e.input,n=e.name,r=e.meta,a=r.touched&&r.error;return s.a.createElement("div",{className:a},s.a.createElement("input",Object.assign({},t,{placeholder:n,className:"form-control "+(a?T.a.error:"")})),a&&s.a.createElement("span",{className:T.a.errorSpan},r.error))},B=Object(v.a)({form:"/login"})((function(e){var t=e.handleSubmit;return s.a.createElement("form",{onSubmit:t},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{for:"username"},"Username"),s.a.createElement(d.a,{component:P,name:"username",placeholder:"username",validate:[R,I],defaultValue:"test_super"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{for:"password"},"Password"),s.a.createElement(d.a,{component:P,name:"password",placeholder:"password",className:"form-control",validate:[R,I]})),s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-primary"},"Login")))})),W=Object(y.b)((function(e){return{isAuth:e.auth.isAuth}}),{giveToken:function(e,t){return function(){var n=Object(g.a)(E.a.mark((function n(r){var a;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k(e,t);case 2:(a=n.sent).token&&r({type:"AUTH-SUCCESS",token:a.token});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){return e.isAuth?s.a.createElement(p.a,{to:"/users"}):s.a.createElement("div",{className:A()("container",T.a.loginContainer)},s.a.createElement("div",{className:A()("text-center",T.a.marginContainer)},s.a.createElement("h2",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435")),s.a.createElement("div",{className:T.a.marginContainer},s.a.createElement("div",null,s.a.createElement("span",null,"\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u043d\u0438\u0436\u0435")),s.a.createElement("div",null,s.a.createElement("span",null,"Username: ",s.a.createElement("b",null,"test_super"))),s.a.createElement("div",null,s.a.createElement("span",null,"Password: ",s.a.createElement("b",null,"Nf<U4f<rDbtDxAPn")))),s.a.createElement("div",null,s.a.createElement(B,{onSubmit:function(t){e.giveToken(t.username,t.password).catch((function(e){return alert("Invalid username or password")}))}})))})),M=n(242),z=n(111),D=n(7),F=D.combineReducers,H=D.createStore,J=D.applyMiddleware,G=H(F({auth:N,usersPage:w,form:M.a}),J(z.a));window.__store__=G;var q=G,V=n(77),X=n.n(V);n(238);var $=function(e){return s.a.createElement("li",{className:A()("list-group-item")},s.a.createElement("div",{className:X.a.flexContainer},s.a.createElement("div",null,s.a.createElement("span",{className:X.a.idRound},"id ".concat(e.user.id)))),s.a.createElement("div",null,s.a.createElement("b",null,"Username: ",e.user.username)),s.a.createElement("div",null,"First name: ",e.user.first_name),s.a.createElement("div",null,"Last name: ",e.user.last_name))},K=n(38),Q=n.n(K);var Y=function(e){return s.a.createElement("div",{className:A()("container",Q.a.usersContainer)},s.a.createElement("div",{className:A()(Q.a.flexContainer,Q.a.marginContainer)},s.a.createElement("div",null,s.a.createElement("h2",null,"Users")),s.a.createElement("div",{className:Q.a.flexChild},s.a.createElement("button",{onClick:function(){e.logout()},className:"btn btn-primary"},"Logout"))),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",onInput:function(t){var n=e.allUsers.filter((function(e){return e.username.toLowerCase().indexOf(t.currentTarget.value.toLowerCase())>-1}));e.filterList(n)},className:"form-control"})),s.a.createElement("ul",{className:"list-group"},e.currentUsers.map((function(t){return s.a.createElement($,{user:t,key:t.id,saveUserInfo:e.saveUserInfo,savedToken:e.savedToken})}))))},Z=n(7),ee=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.savedToken;if(!e)return s.a.createElement(p.a,{to:"/"});this.props.getUsers(e)}},{key:"render",value:function(){return this.props.isAuth?s.a.createElement("div",null,s.a.createElement(Y,{logout:this.props.logout,savedToken:this.props.savedToken,allUsers:this.props.allUsers,currentUsers:this.props.currentUsers,filterList:this.props.filterList,saveUserInfo:this.props.saveUserInfo})):s.a.createElement(p.a,{to:"/"})}}]),n}(s.a.Component),te=Object(Z.compose)(Object(y.b)((function(e){return{isAuth:e.auth.isAuth,savedToken:e.auth.savedToken,allUsers:e.usersPage.allUsers,currentUsers:e.usersPage.currentUsers}}),{logout:function(){return{type:"LOGOUT"}},getUsers:function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.getUsers(e);case 2:(r=t.sent).sort((function(e,t){return e.id>t.id?1:-1})),n({type:"SET-USERS",users:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},filterList:function(e){return{type:"CURRENT-USERS",currentUsers:e}},saveUserInfo:function(e,t){return function(){var n=Object(g.a)(E.a.mark((function n(r){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.saveInfo(e,t);case 2:n.sent,r(C(e.user.id));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}),p.f)(ee),ne=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-md"},s.a.createElement(p.b,{exact:!0,path:"/"},s.a.createElement(W,null)),s.a.createElement(p.b,{path:"/users"},s.a.createElement(te,null)))}}]),n}(s.a.Component),re=Object(y.b)((function(e){return{isAuth:e.auth.isAuth}}),{})(ne),ae=function(e){return s.a.createElement(y.a,{store:q},s.a.createElement(f.a,null,s.a.createElement(re,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,n){e.exports={loginContainer:"Login_loginContainer__1rLlp",errorSpan:"Login_errorSpan__3rOON",error:"Login_error__boyWw",marginContainer:"Login_marginContainer__1xhFt"}},38:function(e,t,n){e.exports={usersContainer:"Users_usersContainer__20JEN",flexContainer:"Users_flexContainer__3WwXg",marginContainer:"Users_marginContainer__2-LaW"}},77:function(e,t,n){e.exports={userCard:"User_userCard__1B-T3",idRound:"User_idRound__1aIP7",userContainer:"User_userContainer__293be",flexContainer:"User_flexContainer__9HBiB",marginContainer:"User_marginContainer__AWMBA"}}},[[112,1,2]]]);
//# sourceMappingURL=main.36b6875d.chunk.js.map