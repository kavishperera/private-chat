(this.webpackJsonpbsa_chat=this.webpackJsonpbsa_chat||[]).push([[0],{394:function(e,t,a){e.exports=a(481)},399:function(e,t,a){},481:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),c=a.n(s),o=(a(399),a(196)),i=a(197),u=a(221),l=a(220),d=a(32),p=a(66),b=a(36),m=a(64),E=a(106),f=a(15),g=function(e,t){switch(t.type){case"ADD_MESSAGE":return Object(f.a)(Object(f.a)({},e),{},{messages:[].concat(Object(E.a)(e.messages),[t.payload])});case"TOGGLE_EDIT":return Object(f.a)(Object(f.a)({},e),{},{editMessage:t.payload});case"IN_PROGRESS":return Object(f.a)(Object(f.a)({},e),{},{isLoading:!0});case"SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{isLoading:!1});case"ERROR":return Object(f.a)(Object(f.a)({},e),{},{isLoading:!1,error:t.payload});case"FILL_USER":return console.log(t.payload),Object(f.a)(Object(f.a)({},e),{},{currentUser:t.payload});case"DROP_USER":return Object(f.a)(Object(f.a)({},e),{},{currentUser:t.payload});case"FILL_MESSAGES":return Object(f.a)(Object(f.a)({},e),{},{messages:t.payload});case"SUCCESS_MESSAGE_EDIT":return Object(f.a)(Object(f.a)({},e),{},{messages:e.messages.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"STORE_ADD_MESSAGE":return Object(f.a)(Object(f.a)({},e),{},{messages:[].concat(Object(E.a)(e.messages),[t.payload])});case"SUCCESS_DELETE_MESSAGE":return Object(f.a)(Object(f.a)({},e),{},{messages:e.messages.filter((function(e){return e.id!==t.payload}))});case"SUCCESS_SET_LIKE":return Object(f.a)(Object(f.a)({},e),{},{messages:e.messages.map((function(e){return e.id===t.payload?Object(f.a)(Object(f.a)({},e),{},{isLike:!e.isLike}):e}))});case"SUCCESS_USERS_GET":return Object(f.a)(Object(f.a)({},e),{},{users:t.payload});case"SUCCESS_USER_CREATING":return Object(f.a)(Object(f.a)({},e),{},{users:[].concat(Object(E.a)(e.users),[t.payload])});case"SUCCESS_USER_DELETED":return Object(f.a)(Object(f.a)({},e),{},{users:e.users.filter((function(e){return e.userId!==t.payload}))});case"SUCCESS_USER_EDITING":return Object(f.a)(Object(f.a)({},e),{},{users:e.users.map((function(e){return e.userId===t.payload.userId?t.payload:e}))});default:return e}},O=a(365),j=a(386),S=a(21),y=a.n(S),x=a(16),h=a(93),v=a.n(h),w=function(e){return{type:"GET_MESSAGES",payload:e}},C=function(e){return{type:"ADD_MESSAGE",payload:e}},R=function(e,t,a){return{type:"EDIT_MESSAGE",payload:{ms:Object(f.a)(Object(f.a)({},e),{},{text:t}),history:a}}},U=function(e){return{type:"TOGGLE_EDIT",payload:e}},_=function(e){return{type:"ERROR",payload:e}},k=function(e){return{type:"GET_USERS",payload:e}},I=y.a.mark(X),M=y.a.mark(Y),A=y.a.mark(Z),T=y.a.mark($),L=y.a.mark(ee),D=y.a.mark(te),P=y.a.mark(ae),G=y.a.mark(ne),N=y.a.mark(re),H=y.a.mark(se),F=y.a.mark(ce),B=y.a.mark(oe),J=y.a.mark(ie),K=y.a.mark(ue),W=y.a.mark(le),V=y.a.mark(de),q=y.a.mark(pe),z=y.a.mark(be),Q=y.a.mark(me);function X(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)("LOGIN_USER",ce);case 2:case"end":return e.stop()}}),I)}function Y(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)("GET_MESSAGES",oe);case 2:case"end":return e.stop()}}),M)}function Z(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)("EDIT_MESSAGE",ie);case 2:case"end":return e.stop()}}),A)}function $(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)("ADD_MESSAGE",ue);case 2:case"end":return e.stop()}}),T)}function ee(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)("DELETE_MESSAGE",le);case 2:case"end":return e.stop()}}),L)}function te(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)("SET_LIKE",de);case 2:case"end":return e.stop()}}),D)}function ae(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)("GET_USERS",pe);case 2:case"end":return e.stop()}}),P)}function ne(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)("CREATE_USER",be);case 2:case"end":return e.stop()}}),G)}function re(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)("DELETE_USER",me);case 2:case"end":return e.stop()}}),N)}function se(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)("EDIT_USER",be);case 2:case"end":return e.stop()}}),H)}function ce(e){var t;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(x.b)({type:"IN_PROGRESS"});case 3:return a.next=5,Object(x.a)(v.a.post,"http://localhost:8181/login",JSON.stringify({userName:e.payload.userName,password:e.payload.password}),{headers:{"Content-Type":"application/json"}});case 5:return t=a.sent,a.next=8,Object(x.b)({type:"SUCCESS"});case 8:return a.next=10,Object(x.b)({type:"FILL_USER",payload:t.data});case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,Object(x.b)(_(a.t0));case 16:case"end":return a.stop()}}),F,null,[[0,12]])}function oe(e){var t;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(x.b)({type:"IN_PROGRESS"});case 3:return a.next=5,Object(x.a)(v.a.get,"http://localhost:8181/messages/"+e.payload);case 5:return t=a.sent,a.next=8,Object(x.b)({type:"SUCCESS"});case 8:return a.next=10,Object(x.b)({type:"FILL_MESSAGES",payload:t.data});case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,Object(x.b)(_(a.t0));case 16:case"end":return a.stop()}}),B,null,[[0,12]])}function ie(e){var t;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(x.b)({type:"IN_PROGRESS"});case 3:return a.next=5,Object(x.a)(v.a.post,"http://localhost:8181/message/edit",JSON.stringify(e.payload.ms),{headers:{"Content-Type":"application/json"}});case 5:return t=a.sent,a.next=8,Object(x.b)({type:"SUCCESS"});case 8:return a.next=10,Object(x.b)({type:"SUCCESS_MESSAGE_EDIT",payload:t.data});case 10:e.payload.history.push("/chat"),a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(0),a.next=17,Object(x.b)(_(a.t0));case 17:case"end":return a.stop()}}),J,null,[[0,13]])}function ue(e){var t;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(x.b)({type:"IN_PROGRESS"});case 3:return a.next=5,Object(x.a)(v.a.post,"http://localhost:8181/message/edit",JSON.stringify(e.payload),{headers:{"Content-Type":"application/json"}});case 5:return t=a.sent,a.next=8,Object(x.b)({type:"SUCCESS"});case 8:return a.next=10,Object(x.b)({type:"STORE_ADD_MESSAGE",payload:t.data});case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,Object(x.b)(_(a.t0));case 16:case"end":return a.stop()}}),K,null,[[0,12]])}function le(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(x.b)({type:"IN_PROGRESS"});case 3:return t.next=5,Object(x.a)(v.a.delete,"http://localhost:8181/message/delete/"+e.payload);case 5:return t.sent,t.next=8,Object(x.b)({type:"SUCCESS"});case 8:return t.next=10,Object(x.b)({type:"SUCCESS_DELETE_MESSAGE",payload:e.payload});case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),t.next=16,Object(x.b)(_(t.t0));case 16:case"end":return t.stop()}}),W,null,[[0,12]])}function de(e){var t;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,console.log("Generator started: "+e.payload),a.next=4,Object(x.b)({type:"IN_PROGRESS"});case 4:return a.next=6,Object(x.a)(v.a.put,"http://localhost:8181/message/like/"+e.payload);case 6:return t=a.sent,a.next=9,Object(x.b)({type:"SUCCESS"});case 9:return a.next=11,Object(x.b)({type:"SUCCESS_SET_LIKE",payload:e.payload});case 11:console.log(t.data),a.next=18;break;case 14:return a.prev=14,a.t0=a.catch(0),a.next=18,Object(x.b)(_(a.t0));case 18:case"end":return a.stop()}}),V,null,[[0,14]])}function pe(e){var t;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,console.log("Generator started: "+e.payload),a.next=4,Object(x.b)({type:"IN_PROGRESS"});case 4:return a.next=6,Object(x.a)(v.a.get,"http://localhost:8181/userList/"+e.payload);case 6:return t=a.sent,a.next=9,Object(x.b)({type:"SUCCESS"});case 9:return a.next=11,Object(x.b)({type:"SUCCESS_USERS_GET",payload:t.data});case 11:console.log(t.data),a.next=18;break;case 14:return a.prev=14,a.t0=a.catch(0),a.next=18,Object(x.b)(_(a.t0));case 18:case"end":return a.stop()}}),q,null,[[0,14]])}function be(e){var t;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(x.b)({type:"IN_PROGRESS"});case 3:return a.next=5,Object(x.a)(v.a.post,"http://localhost:8181/user/edit",JSON.stringify(e.payload),{headers:{"Content-Type":"application/json"}});case 5:return t=a.sent,a.next=8,Object(x.b)({type:"SUCCESS"});case 8:if(console.log(t.data),null==e.userId){a.next=14;break}return a.next=12,Object(x.b)({type:"SUCCESS_USER_CREATING",payload:t.data});case 12:a.next=16;break;case 14:return a.next=16,Object(x.b)({type:"SUCCESS_USER_EDITING",payload:t.data});case 16:a.next=22;break;case 18:return a.prev=18,a.t0=a.catch(0),a.next=22,Object(x.b)(_(a.t0));case 22:case"end":return a.stop()}}),z,null,[[0,18]])}function me(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(x.b)({type:"IN_PROGRESS"});case 3:return t.next=5,Object(x.a)(v.a.delete,"http://localhost:8181/user/delete/"+e.payload);case 5:return t.next=7,Object(x.b)({type:"SUCCESS"});case 7:return t.next=9,Object(x.b)({type:"SUCCESS_USER_DELETED",payload:e.payload});case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),t.next=15,Object(x.b)(_(t.t0));case 15:case"end":return t.stop()}}),Q,null,[[0,11]])}var Ee=Object(j.a)(),fe=Object(O.composeWithDevTools)(Object(m.applyMiddleware)(Ee)),ge=Object(m.createStore)(g,{messages:[],users:[],messagesLength:0,currentUser:{userName:"",password:"",userId:"",avatar:null,isAdmin:!1,isLoggedIn:!1},isLoading:!1,error:"",editMessage:{}},fe);Ee.run(X),Ee.run(Y),Ee.run(Z),Ee.run($),Ee.run(ee),Ee.run(te),Ee.run(ae),Ee.run(ne),Ee.run(re),Ee.run(se);var Oe=ge,je=a(104),Se=a(328),ye=a(500),xe=a(498),he=a(105),ve=a(366),we=a.n(ve),Ce=a(367),Re=a.n(Ce),Ue=a(199),_e=a.n(Ue),ke={marginLeft:"30px"},Ie={width:"70%",textAlign:"right"},Me={color:"white",margin:"5px"};var Ae={dropUserProps:function(){return{type:"DROP_USER",payload:null}}},Te=Object(d.b)((function(e){return e}),Ae)((function(e){var t=e.messages.length,a=Array.from(new Set(e.messages&&e.messages.map((function(e){return e.userId})))).length,n=function(e){for(var t,a=1;a<e.length;a++)Date.parse(e[a-1].createdAt)>Date.parse(e[a].createdAt)&&(console.log(Date.parse(e[a-1].createdAt)),t=e[a-1].createdAt);return t}(e.messages);return r.a.createElement(xe.a,{position:"fixed"},r.a.createElement(Se.a,null,r.a.createElement(he.a,null,r.a.createElement(ye.a,{badgeContent:t,color:"secondary",style:ke},r.a.createElement(we.a,null)),r.a.createElement(ye.a,{badgeContent:a,color:"secondary",style:ke},r.a.createElement(Re.a,null))),r.a.createElement(he.a,{align:"right",variant:"h6",style:ke},r.a.createElement(p.b,{style:Me,to:"/chat"},"   Bsa Chat!  ")),e.currentUser.isAdmin?r.a.createElement(p.b,{style:Me,to:"/users"},"Admin tool"):null,e.currentUser.isLoggedIn?r.a.createElement(p.b,{style:Me,to:"/login",onClick:function(){window.location.reload()}},"Logout"):null,r.a.createElement("div",{style:Ie},e.currentUser.isLoggedIn&&r.a.createElement(he.a,{align:"right",variant:"h6",style:ke},"   latest: ",_e()(n).calendar()," "))))})),Le=a(78),De=a(329),Pe=a(330),Ge={display:"flex",width:"100%",alignItems:"center",justifyContent:"center",marginTop:"20px",marginBottom:"20px"},Ne={width:"60%",marginTop:"10px",marginBottom:"10px"},He={marginLeft:"10px"};var Fe={addMessageHandler:C,editMessage:R},Be=Object(d.b)((function(e){return{currentPropsUser:e.currentUser,isEditMode:e.isEditMode}}),Fe)((function(e){var t=e.addMessageHandler,a=e.currentPropsUser,s=(e.messageToEdit,e.editMessageHandler,Object(n.useState)("")),c=Object(Le.a)(s,2),o=c[0],i=c[1],u=Object(f.a)(Object(f.a)({},a),{},{id:0,text:"",createdAt:(new Date).toISOString(),editedAt:""}),l=Object(f.a)(Object(f.a)({},u),{},{text:o,id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))});return r.a.createElement("div",{style:Ge},r.a.createElement(De.a,{id:"outlined-helperText",name:"message",label:"New message: ",helperText:"Write your message here",value:o,variant:"outlined",style:Ne,onChange:function(e){i(e.target.value)}}),r.a.createElement(Pe.a,{variant:"contained",color:"primary",style:He,onClick:function(){t(l),i("")}},"Send"))})),Je=a(502),Ke=a(503),We=a(504),Ve=a(514),qe=a(254),ze=a(369),Qe=a.n(ze),Xe=a(370),Ye=a.n(Xe),Ze=a(371),$e=a.n(Ze),et=a(222);var tt={propsEditMessage:R,closeModal:U},at=Object(d.b)((function(e){return{message:e.editMessage}}),tt)((function(e){var t=e.message,a=e.propsEditMessage,s=e.closeModal,c=Object(n.useState)(t.text),o=Object(Le.a)(c,2),i=o[0],u=o[1];return console.log(i),r.a.createElement(et.a,{open:!0,onClose:function(){return s({})},style:{marginTop:"100px",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{background:"white",padding:"10px",border:"1px solid black",borderRadius:"8px"}},r.a.createElement(De.a,{multiline:!0,value:i,onChange:function(e){u(e.target.value)}}),r.a.createElement(Pe.a,{style:{marginLeft:"10px"},variant:"contained",color:"primary",onClick:function(){a(t,i),s({})}},"Edit")))})),nt={background:"#f2ffff",width:"60%",marginTop:"10px"},rt={display:"flex",justifyContent:"flex-end"},st={display:"flex",justifyContent:"flex-begin",marginBottom:"10px"},ct={marginRight:"10px"},ot={width:"100%",display:"flex",alignItems:"center"},it={flex:"1"},ut={toggleEdit:U,addMessage:C,deleteMessageHandler:function(e){return{type:"DELETE_MESSAGE",payload:e}},likeMessageHandler:function(e){return{type:"SET_LIKE",payload:e}}},lt=Object(d.b)((function(e){return{currentPropsUser:e.currentUser,messages:e.messages,hasEditWindow:Boolean(e.editMessage.id)}}),ut)((function(e){var t=e.messages,a=e.currentPropsUser,n=e.likeMessageHandler,s=e.hasEditWindow,c=e.deleteMessageHandler,o=(e.toggleEdit,t.sort((function(e,t){return Date.parse(e.createdAt)>Date.parse(t.createdAt)?1:e.createdAt<t.createdAt?-1:0})));return r.a.createElement(Je.a,null,r.a.createElement("div",{className:"MessageList"},o.map((function(e,t){var s=a.userId===e.userId,o=s?rt:null;return r.a.createElement("div",{style:o},r.a.createElement(Ke.a,{style:nt},r.a.createElement(We.a,null,r.a.createElement("div",{style:st},!s&&r.a.createElement(Ve.a,{src:e.avatar,style:ct}),r.a.createElement(he.a,{gutterBottom:!0,variant:"h6",component:"h2"},e.user||e.userName)),r.a.createElement(he.a,{variant:"body1",color:"textSecondary",component:"p"},e.text),r.a.createElement("div",{style:ot},r.a.createElement("div",{style:it},!s&&r.a.createElement(qe.a,{onClick:function(){return n(e.id)}},r.a.createElement(Qe.a,{color:e.isLike?"secondary":"action"})),s&&r.a.createElement(qe.a,{onClick:function(){return c(e.id)}},r.a.createElement(Ye.a,null)),s&&r.a.createElement(p.b,{to:"/message/".concat(e.id)},r.a.createElement(qe.a,null,r.a.createElement($e.a,null)))),r.a.createElement(he.a,{align:"right",variant:"body2",color:"textSecondary",style:it},_e()(e.createdAt).format("LLLL"))))))}))),s&&r.a.createElement(at,null))})),dt={maxHeight:"100%",marginTop:"63px"},pt={width:"100%",background:"#ffffff",boxShadow:"0 0 5px rgba(0,0,0,0.3)"};var bt=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={messages:[],messagesLength:0,currentUser:{user:"Andrew",userId:"121314",avatar:null},messageToEditIndex:{},isEditMode:!1,isLoading:!0},n.receiveMessage=n.receiveMessage.bind(Object(je.a)(n)),n.likeMessage=n.likeMessage.bind(Object(je.a)(n)),n.deleteMessage=n.deleteMessage.bind(Object(je.a)(n)),n.editModeHander=n.editModeHander.bind(Object(je.a)(n)),n.editMessage=n.editMessage.bind(Object(je.a)(n)),n}return Object(i.a)(a,[{key:"receiveMessage",value:function(e){this.state.messages.push(e),this.setState({messagesLength:this.state.messages.length})}},{key:"likeMessage",value:function(e){var t=Object(E.a)(this.state.messages);t[e].isLiked=!this.state.messages[e].isLiked,this.setState({messages:t})}},{key:"editModeHander",value:function(e){this.setState({messageToEditIndex:e,isEditMode:!0})}},{key:"editMessage",value:function(e){var t=this.state,a=t.messages,n=t.messageToEditIndex,r=Object(E.a)(a);r[n]=e,this.setState({messages:r,messageToEditIndex:null,isEditMode:!1})}},{key:"deleteMessage",value:function(e){var t=function(e,t){for(var a=[],n=0;n<e.length;n++)n!==t&&a.push(e[n]);return a}(Object(E.a)(this.state.messages),e);this.setState({messages:t})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.getMessagesHandler;e.getUsers;t(this.props.currentUser.userId)}},{key:"render",value:function(){this.state.isLoading;return this.props.currentUser.isLoggedIn?r.a.createElement("div",null,r.a.createElement(Je.a,{style:dt},r.a.createElement(lt,null)),r.a.createElement("div",{style:pt},r.a.createElement(Be,{style:pt}))):r.a.createElement(b.a,{to:"login"})}}]),a}(n.Component),mt={getMessagesHandler:w},Et=Object(d.b)((function(e,t){return Object(f.a)({},e)}),mt)(bt),ft=a(124),gt=a(251),Ot=a(252),jt=a(208),St=a(332),yt=a(212),xt=a.n(yt),ht=a(213),vt=a.n(ht),wt=(a(331),{marginTop:"100px"}),Ct={margin:"20px"},Rt=Object(d.b)((function(e){return e}),null)((function(e){var t=Object(b.g)(),a=Object(n.useState)({name:"",password:"",showPassword:!1}),s=Object(Le.a)(a,2),c=s[0],o=s[1],i=Object(n.useState)(!1),u=Object(Le.a)(i,2),l=(u[0],u[1]);Object(n.useEffect)((function(){e.isLoading&&l(!0),e.currentUser.isLoggedIn&&(l(!1),e.currentUser.isAdmin?t.push("/users"):t.push("/chat"))}));var d=function(e){return function(t){o(Object(f.a)(Object(f.a)({},c),{},Object(ft.a)({},e,t.target.value)))}};return r.a.createElement(Je.a,{style:wt},r.a.createElement(De.a,{style:Ct,id:"outlined-helperText",name:"message",label:"Name: ",value:c.name,variant:"outlined",onChange:d("name")}),r.a.createElement(gt.a,{style:Ct},r.a.createElement(Ot.a,{htmlFor:"standard-adornment-password"},"Password"),r.a.createElement(jt.a,{id:"standard-adornment-password",type:c.showPassword?"text":"password",value:c.password,onChange:d("password"),endAdornment:r.a.createElement(St.a,{position:"end"},r.a.createElement(qe.a,{"aria-label":"toggle password visibility",onClick:function(){o(Object(f.a)(Object(f.a)({},c),{},{showPassword:!c.showPassword}))},onMouseDown:function(e){e.preventDefault()}},c.showPassword?r.a.createElement(xt.a,null):r.a.createElement(vt.a,null)))})),r.a.createElement(Pe.a,{variant:"contained",color:"primary",onClick:function(){var t,a;e.dispatch((t=c.name,a=c.password,{type:"LOGIN_USER",payload:{userName:t,password:a}}))}},"Send"))})),Ut={marginTop:"300px",display:"flex",justifyContent:"center",alignItems:"center"},_t={background:"white",padding:"20px",border:"1px solid black",borderRadius:"8px",width:"50%",height:"50%"},kt={margin:"15px"},It={getMessages:w,propsEditMessage:R},Mt=Object(d.b)((function(e){return{messages:e.messages,isLoggedIn:e.currentUser.isLoggedIn}}),It)((function(e){var t=e.match,a=e.propsEditMessage,s=(e.getMessages,e.messages),c=e.isLoggedIn,o=t.params.id,i=Object(n.useState)(),u=Object(Le.a)(i,2),l=u[0],d=u[1],p=Object(n.useState)(),m=Object(Le.a)(p,2),E=m[0],f=m[1],g=Object(b.g)();Object(n.useEffect)((function(){s&&d(s.find((function(e){return e.id===o}))),l&&!E&&f(l.text)}));return c?r.a.createElement("div",{style:Ut},r.a.createElement("p",{style:kt},"Edit filed: "),r.a.createElement(De.a,{style:_t,id:"outlined-multiline-static",multiline:!0,rows:8,value:E,onChange:function(e){f(e.target.value)},variant:"outlined"}),r.a.createElement(Pe.a,{style:kt,variant:"contained",color:"primary",onClick:function(){a(l,E,g)}},"Edit")):r.a.createElement(b.a,{to:"login"})})),At=function(e){var t=Object(n.useState)({name:"",avatar:"",password:"",showPassword:!1}),a=Object(Le.a)(t,2),s=a[0],c=a[1],o=function(e){return function(t){c(Object(f.a)(Object(f.a)({},s),{},Object(ft.a)({},e,t.target.value)))}};return r.a.createElement(Je.a,null,r.a.createElement(De.a,{id:"outlined-helperText",name:"message",label:"Name: ",value:s.name,variant:"outlined",onChange:o("name")}),r.a.createElement(De.a,{id:"outlined-helperText",name:"message",label:"Avatar url: ",value:s.avatar,variant:"outlined",onChange:o("avatar")}),r.a.createElement(gt.a,null,r.a.createElement(Ot.a,{htmlFor:"standard-adornment-password"},"Password"),r.a.createElement(jt.a,{id:"standard-adornment-password",type:s.showPassword?"text":"password",value:s.password,onChange:o("password"),endAdornment:r.a.createElement(St.a,{position:"end"},r.a.createElement(qe.a,{"aria-label":"toggle password visibility",onClick:function(){c(Object(f.a)(Object(f.a)({},s),{},{showPassword:!s.showPassword}))},onMouseDown:function(e){e.preventDefault()}},s.showPassword?r.a.createElement(xt.a,null):r.a.createElement(vt.a,null)))})))},Tt=a(194),Lt=a.n(Tt),Dt=a(373),Pt=a.n(Dt),Gt=a(383),Nt=a.n(Gt),Ht=a(374),Ft=a.n(Ht),Bt=a(381),Jt=a.n(Bt),Kt=a(261),Wt=a.n(Kt),Vt=a(260),qt=a.n(Vt),zt=a(375),Qt=a.n(zt),Xt=a(376),Yt=a.n(Xt),Zt=a(378),$t=a.n(Zt),ea=a(379),ta=a.n(ea),aa=a(380),na=a.n(aa),ra=a(384),sa=a.n(ra),ca=a(377),oa=a.n(ca),ia=a(382),ua=a.n(ia),la=a(385),da=a.n(la),pa={marginTop:"150px"},ba={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(Pt.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(Ft.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(qt.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(Qt.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(Wt.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(Yt.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(oa.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement($t.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(ta.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(na.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(Wt.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(Jt.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(qt.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(ua.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(Nt.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(sa.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(da.a,Object.assign({},e,{ref:t}))}))},ma={getUsersProps:k,editUserProps:function(e){return{type:"EDIT_USER",payload:{userName:e.userName,isAdmin:e.isAdmin,password:e.password,avatar:e.avatar,userId:e.userId}}},createUserProps:function(e){return{type:"CREATE_USER",payload:{userName:e.userName,isAdmin:e.isAdmin,password:e.password,avatar:e.avatar,userId:e.userId}}},deleteUserProps:function(e){return{type:"DELETE_USER",payload:e.userId}}},Ea=Object(d.b)((function(e){return e}),ma)((function(e){return e.currentUser.isAdmin?(console.log(e.users),r.a.createElement(Lt.a,{style:pa,title:"Administrator tool: Users list",icons:ba,columns:[{title:"Name",field:"userName"},{title:"Avatar",field:"avatar"},{title:"isAdmin",field:"isAdmin"},{title:"password",field:"password"}],data:e.users,editable:{isEditHidden:function(e){return!0===e.isAdmin},isDeleteHidden:function(e){return!0===e.isAdmin},onRowUpdate:function(t){return Promise.resolve(e.editUserProps(t))},onRowAdd:function(t){return Promise.resolve(e.createUserProps(t))},onRowDelete:function(t){return Promise.resolve(e.deleteUserProps(t))}}})):r.a.createElement(b.a,{to:"/login"})})),fa={getUsersProps:k},ga=Object(d.b)((function(e){return e}),fa)((function(e){return Object(n.useEffect)((function(){0===e.users.length&&e.getUsersProps(e.currentUser.userId)})),r.a.createElement(Ea,null)})),Oa=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{store:Oe},r.a.createElement(p.a,null,r.a.createElement(Te,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/chat",component:Et}),r.a.createElement(b.b,{path:"/message/:id",component:Mt}),r.a.createElement(b.b,{path:"/login",component:Rt}),r.a.createElement(b.b,{path:"/user/edit",component:At}),r.a.createElement(b.b,{path:"/users",component:ga}))))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oa,null)),document.getElementById("root"))}},[[394,1,2]]]);
//# sourceMappingURL=main.4a219bc9.chunk.js.map