(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{907:function(e,a,t){"use strict";t.r(a);var n=t(32),l=t(20),r=t(8),c=t.n(r),s=t(23),m=t(11),o=t(0),i=t.n(o),d=(t(519),t(1)),p=t(87),u=t(156),E=t(13);a.default=function(e){var a=e.setAuth,t=Object(o.useState)(""),r=Object(m.a)(t,2),g=r[0],f=r[1],b=Object(o.useState)(""),h=Object(m.a)(b,2),v=(h[0],h[1]),N=Object(o.useState)(!1),x=Object(m.a)(N,2),y=x[0],w=x[1],P=Object(o.useState)({companyname:"",domainname:"",firstname:"",lastname:"",mobile:"+91",email:"",password:""}),C=Object(m.a)(P,2),S=C[0],k=C[1],j=S.companyname,L=S.domainname,O=S.firstname,T=S.lastname,q=S.mobile,A=S.email,I=S.password,R=Object(p.a)(),D=R.register,M=R.handleSubmit,U=R.errors,Z=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var l,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=3;break}return v("Yoou must verify the captcha"),e.abrupt("return");case 3:return v(""),n.preventDefault(),console.log(t),n.target.className+=" was-validated",e.prev=7,l={companyname:j,domainname:L,firstname:O,lastname:T,mobile:q,email:A,password:I},e.next=11,fetch("http://localhost:3000/authentication/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(l)});case 11:return r=e.sent,e.next=14,r.json();case 14:(s=e.sent).jwtToken?(localStorage.setItem("token",s.jwtToken),E.ToastsStore.success("Registered Seccessfully Please Check Email ID "),a(!0),E.ToastsStore.success("Register Successfully Please Check Email ID")):(a(!1),E.ToastsStore.error(s)),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),console.error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(a,t){return e.apply(this,arguments)}}(),B=function(e){return k(Object(l.a)(Object(l.a)({},S),{},Object(n.a)({},e.target.name,e.target.value)))};return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(d.Q,{expandable:"sm",className:"navbar-com p-2 "},i.a.createElement(d.hb,{inNavbar:!0,onClick:function(){return w(!y)}}),i.a.createElement(d.R,{className:"navbar-brand "},i.a.createElement(d.B,{src:"./images/logs.png",height:"50px"})),i.a.createElement(d.l,{show:y,navbar:!0},i.a.createElement(d.S,{className:"navbar-text text-center "},i.a.createElement(d.I,{href:"/",className:"navbar-12 pr-3 pl-3 text-decoration-none"},i.a.createElement("span",{className:"navbar-12"},"Home")),i.a.createElement(d.I,{className:"navbar-12 pr-3 pl-3 text-decoration-none "},i.a.createElement("span",{className:"navbar-12"}," About")),i.a.createElement(d.I,{className:"navbar-12 pr-3 pl-3 text-decoration-none"},i.a.createElement("span",{className:"navbar-12"},"Contact")),i.a.createElement(d.I,{className:"navbar-12 pr-3 pl-3 text-decoration-none"},i.a.createElement("span",{className:"navbar-12"},"Link"))),i.a.createElement(d.S,{className:" ml-auto text-center d-flex justify-content-center"},i.a.createElement(d.I,{href:"/#/login",className:"nav-righty text-white ml-3 mr-3 text-decoration-none "},i.a.createElement("span",{className:"nav-righty"},"Login ")),i.a.createElement(d.I,{href:"/#/register",className:"nav-righty text-white ml-3 mr-3  text-decoration-none"},i.a.createElement("span",{className:"nav-righty"},"Sign Up ")))))),i.a.createElement(E.ToastsContainer,{store:E.ToastsStore,position:E.ToastsContainerPosition.TOP_RIGHT}),i.a.createElement("div",{className:"card-bg c-app c-default-layout flex-row justify-content-center "},i.a.createElement("div",{className:" d-flex justify-content-center"},i.a.createElement(d.m,{className:"login-card "},i.a.createElement("div",{className:"card-group pt-1 pb-1"},i.a.createElement("div",{className:"card1 card border-right-0 shadow-lg pt-5 "},i.a.createElement(d.B,{className:"card-img-top p-3",src:"./images/logs.png",alt:"Card image cap"}),i.a.createElement("div",{className:"card-bod-bg card-body pt-3"},i.a.createElement("p",{className:"card-text text-center pt-2 pb-5"},"The DevOps Services is established with the aim of providing benchmark SMAC solutions to the Small,Medium and Large scale companies across the globe."))),i.a.createElement("div",{className:"card shadow-lg"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title"},i.a.createElement("h1",{className:"tittle-login text-center "},"Register"),i.a.createElement("p",{className:"text-muted text-center"},"Welcome Back")),i.a.createElement(d.U,{className:"justify-content-center p-4"},i.a.createElement(d.k,{md:"12"},i.a.createElement("form",{className:"needs-validation",onSubmit:M(Z),noValidate:!0},i.a.createElement("div",{className:"form-group "},i.a.createElement("label",{className:"label-form"},"Comapany Name:",i.a.createElement("span",{className:"text-danger"},"*")),i.a.createElement("input",{type:"text",onChange:B,value:j,className:"form-control input  bg-transparent border-2 outline-none rounded-sm   ",name:"companyname",placeholder:"Company Name",required:!0,minLength:"1",maxLength:"30",ref:D({required:"Please Provide a Comapny Name"})}),U.companyname&&i.a.createElement("p",{className:"text-danger pt-1"},U.companyname.message)),i.a.createElement("div",{className:"form-group "},i.a.createElement("label",{className:"label-form"},"Domain Name:",i.a.createElement("span",{className:"text-danger"},"*")),i.a.createElement("input",{type:"text",onChange:B,value:L,className:"form-control input  bg-transparent border-2 outline-none rounded-sm   ",name:"domainname",placeholder:"Domain Name",required:!0,minLength:"2",maxLength:"45",ref:D({required:"Please Provide a Domain Name"})}),U.domainname&&i.a.createElement("p",{className:"text-danger pt-1"},U.domainname.message)),i.a.createElement("div",{className:"form-group "},i.a.createElement("label",{className:"label-form"},"First Name:",i.a.createElement("span",{className:"text-danger"},"*")),i.a.createElement("input",{type:"text",onChange:B,value:O,className:"form-control input  bg-transparent border-2 outline-none rounded-sm   ",name:"firstname",placeholder:"First Name",required:!0,minLength:"2",maxLength:"30",ref:D({required:"Please Provide Valid Name"})}),U.firstname&&i.a.createElement("p",{className:"text-danger pt-1"},U.firstname.message)),i.a.createElement("div",{className:"form-group "},i.a.createElement("label",{className:"label-form"},"Last Name:",i.a.createElement("span",{className:"text-danger"},"*")),i.a.createElement("input",{type:"text",onChange:B,value:T,className:"form-control input  bg-transparent border-2 outline-none rounded-sm   ",name:"lastname",placeholder:"Last Name",required:!0,minLength:"2",maxLength:"30",ref:D({required:"Please Provide Valid Name"})}),U.lastname&&i.a.createElement("p",{className:"text-danger pt-1"},U.lastname.message)),i.a.createElement("div",{className:"form-group "},i.a.createElement("label",{className:"label-form"},"Mobile No.",i.a.createElement("span",{className:"text-muted"},"(Optional):")),i.a.createElement("input",{type:"tel",onChange:B,value:q,className:"form-control input  bg-transparent border-2 outline-none rounded-sm   ",name:"mobile",placeholder:"Mobile No.",required:!0,minLength:"5",maxLength:"30",ref:D({required:!1})}),U.companyname&&i.a.createElement("p",{className:"text-danger pt-1"},U.companyname.message)),i.a.createElement("div",{className:"form-group "},i.a.createElement("label",{className:"label-form"},"Email Id:",i.a.createElement("span",{className:"text-danger"},"*")),i.a.createElement("input",{type:"email",onChange:B,value:A,className:"form-control input  bg-transparent border-2 outline-none rounded-sm   ",name:"email",placeholder:"Email Id",required:!0,minLength:"5",maxLength:"30",ref:D({required:"Please Provide a Valid Email Id",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}})}),U.email&&i.a.createElement("p",{className:"text-danger pt-1"},U.email.message)),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"label-form"},"Password",i.a.createElement("span",{className:"text-muted"}," (Atleast 8 characters):"),i.a.createElement("span",{className:"text-danger"},"*")),i.a.createElement("input",{type:"password",onChange:B,value:I,className:"form-control input  bg-transparent border-2 outline-none rounded-sm ",name:"password",placeholder:"Password",required:!0,minLength:"3",maxLength:"30",ref:D({required:"Password Required"})}),U.password&&i.a.createElement("p",{className:"text-danger pt-1"},U.password.message)),i.a.createElement("div",{className:"form-group"},i.a.createElement(u.a,{sitekey:"6LfptdQZAAAAAIaZPNPZMnTK_RoFPt4BmxPTgUbJ",onChange:function(e){return f(e)},onExpired:function(e){return f("")}})),i.a.createElement(d.e,{type:"submit",className:"label-button",block:!0},"Register")),i.a.createElement("h6",{className:"font-small text-center text-muted text-lg p-1 pt-4"},"By signing up, you agree to Devops's",i.a.createElement("br",null),i.a.createElement("a",{href:"/#",className:"font-small  grey-text d-flex justify-content-center text-muted"},i.a.createElement("span",{className:"font-weight-bold"},"Terms of Service and Privacy Policy."))))))))))),i.a.createElement("footer",{class:"footer-section"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"footer-cta pt-5 pb-5"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-xl-4 col-md-4 mb-30"},i.a.createElement("div",{class:"single-cta"},i.a.createElement("i",{class:"fas fa-map-marker-alt"}),i.a.createElement("div",{class:"cta-text"},i.a.createElement("h4",null,"Find us"),i.a.createElement("span",null,"Mumbai, mumbai mumbai")))),i.a.createElement("div",{class:"col-xl-4 col-md-4 mb-30"},i.a.createElement("div",{class:"single-cta"},i.a.createElement("i",{class:"fas fa-phone"}),i.a.createElement("div",{class:"cta-text"},i.a.createElement("h4",null,"Call us"),i.a.createElement("span",null,"981234567")))),i.a.createElement("div",{class:"col-xl-4 col-md-4 mb-30"},i.a.createElement("div",{class:"single-cta"},i.a.createElement("i",{class:"far fa-envelope-open"}),i.a.createElement("div",{class:"cta-text"},i.a.createElement("h4",null,"Mail us"),i.a.createElement("span",null,"mail@info.com")))))),i.a.createElement("div",{class:"footer-content pt-5 pb-5"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-xl-4 col-lg-4 mb-50"},i.a.createElement("div",{class:"footer-widget"},i.a.createElement("div",{class:"footer-social-icon"},i.a.createElement("span",null,"Follow us"),i.a.createElement("a",{href:"/"},i.a.createElement("i",{class:"fab fa-facebook-f facebook-bg"})),i.a.createElement("a",{href:"/"},i.a.createElement("i",{class:"fab fa-twitter twitter-bg"})),i.a.createElement("a",{href:"/"},i.a.createElement("i",{class:"fab fa-google-plus-g google-bg"}))))),i.a.createElement("div",{class:"col-xl-4 col-lg-4 col-md-6 mb-30"},i.a.createElement("div",{class:"footer-widget"},i.a.createElement("div",{class:"footer-widget-heading"},i.a.createElement("h3",null,"Useful Links")),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"/"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{href:"/"},"About US")),i.a.createElement("li",null,i.a.createElement("a",{href:"/"}," Our Services")),i.a.createElement("li",null,i.a.createElement("a",{href:"/"},"Contact Us")),i.a.createElement("li",null,i.a.createElement("a",{href:"/"},"Expert Team")))))))),i.a.createElement("div",{class:"copyright-area"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-xl-6 col-lg-6 text-center text-lg-left"},i.a.createElement("div",{class:"copyright-text"},i.a.createElement("p",null,"Copyright \xa9 2020, All Right Reserved ",i.a.createElement("a",{href:"https://codepen.io/anupkumar92/"},"DevOp's")))),i.a.createElement("div",{class:"col-xl-6 col-lg-6 d-none d-lg-block text-right"},i.a.createElement("div",{class:"footer-menu"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"/"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{href:"/"},"Terms")),i.a.createElement("li",null,i.a.createElement("a",{href:"/"},"Privacy")),i.a.createElement("li",null,i.a.createElement("a",{href:"/"},"Policy")),i.a.createElement("li",null,i.a.createElement("a",{href:"/"},"Contact"))))))))))}}}]);
//# sourceMappingURL=12.68c48adb.chunk.js.map