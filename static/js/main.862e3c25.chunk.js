(this["webpackJsonpportfolio-2"]=this["webpackJsonpportfolio-2"]||[]).push([[0],{14:function(e,t,a){e.exports=a(23)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),c=a(12),r=a.n(c),i=a(2),o=a(3),s=a(5),m=a(4),u=(a(19),a(20),a(6)),d=a(8),E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={mobile:null},e.handleClick=function(t){var a=document.querySelector(".menu");(e.state.mobile||e.props.mobileState)&&(a.style.display="none"),e.props.handleSelect(t.target.getAttribute("value"));var l=t.target;Array.from(t.target.parentNode.children).forEach((function(e){e===l&&e.classList.add("active"),e!==l&&e.classList.remove("active")}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelector(".menu");window.addEventListener("resize",(function(){window.innerWidth>=798&&(t.style.display="block",e.setState({mobile:!1}))})),window.innerWidth<=798&&this.setState({mobile:!0})}},{key:"render",value:function(){return n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"animated slideInDown"},n.a.createElement("div",{className:"menu-item active",value:"Projects",onClick:this.handleClick},n.a.createElement(u.c,{className:"menu-icon"}),n.a.createElement("li",null,"Projects")),n.a.createElement("div",{className:"menu-item",value:"Skills",onClick:this.handleClick},n.a.createElement(u.d,{className:"menu-icon"}),n.a.createElement("li",null,"Skills")),n.a.createElement("div",{className:"menu-item",value:"About",onClick:this.handleClick},n.a.createElement(u.a,{className:"menu-icon"}),n.a.createElement("li",null,"About")),n.a.createElement("div",{className:"menu-item",value:"Extra",onClick:this.handleClick},n.a.createElement(d.b,{className:"menu-icon"}),n.a.createElement("li",null,"Extra"))))}}]),a}(n.a.Component),h=function(){return n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Hello"),n.a.createElement("p",null,"Im ",n.a.createElement("span",null,"Joaquin")),n.a.createElement(u.b,{style:{position:"absolute",left:"0",fontSize:"3rem"},className:"hamburguer-icon",onClick:function(){var e=document.querySelector(".menu");"block"===e.style.display?e.style.display="none":e.style.display="block"}}))},p=(a(21),a(7)),v=a(9),b=a(10),y=a(13),f=function(){return n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"what-i-know"},n.a.createElement("h1",null,"I know"),n.a.createElement("div",{className:"techs"},n.a.createElement("h2",null,"Tecnologies"),n.a.createElement("div",{className:"icons-container"},n.a.createElement(v.b,{className:"icon",style:{color:"#f7e018"},title:"Javascript Logo"}),n.a.createElement(v.a,{className:"icon",style:{color:"#f25d36"},title:"Html5 logo"}),n.a.createElement(p.b,{className:"icon",style:{color:"#379ad6"},title:"Css3 logo"}),n.a.createElement(p.d,{className:"icon",style:{color:"#53c1de"},title:"React logo"}),n.a.createElement(p.a,{className:"icon",style:{color:"#553a7d"},title:"Bootstrap logo"}),n.a.createElement(p.e,{className:"icon",style:{color:"#ce679a"},title:"Sass logo"}))),n.a.createElement("div",{className:"tools"},n.a.createElement("h2",null,"Tools"),n.a.createElement("div",{className:"icons-container"},n.a.createElement(p.c,{className:"icon",style:{color:"#f34f29"},title:"Git logo"}),n.a.createElement(d.a,{className:"icon",title:"Console logo"}),n.a.createElement(y.a,{className:"icon",style:{color:"#00000"},title:"Figma logo"}),n.a.createElement(b.a,{className:"icon",style:{color:"#dd2d35"},title:"Node package manager logo"}),n.a.createElement(b.b,{className:"icon",style:{color:"#652077"},title:"Visual studio logo"})))),n.a.createElement("div",{className:"learn-anything"},n.a.createElement("div",{onClick:function(e){!function(e){var t=document.querySelector(".anything"),a=e.target;a.classList.remove("beat","infinite"),a.classList.add("fadeOut"),a.addEventListener("animationend",(function(){a.style.display="none",t.style.display="block",t.classList.add("animated","fadeIn")}))}(e)}},n.a.createElement("h1",null,"What can i learn?",n.a.createElement("br",null),"a click will tell"),n.a.createElement("p",{className:"anything"},"Anything ",n.a.createElement("br",null),n.a.createElement("span",{style:{fontSize:"0.5em"}},"with a lot of effort :)")))),n.a.createElement("div",{className:"what-i-can"},n.a.createElement("h1",null,"My priorities"),n.a.createElement("ul",{className:"prio-ul"},n.a.createElement("li",null,"Responsive designs"),n.a.createElement("li",null,"Accessibility"),n.a.createElement("li",null,"Reusable components"),n.a.createElement("li",null,"Solid basic knowledge"),n.a.createElement("li",null,"Clean code"),n.a.createElement("li",null,"Browser compatibility"),n.a.createElement("li",null,"User experience"),n.a.createElement("li",null,"Beatiful UI")),n.a.createElement("h1",null,"Personal props"),n.a.createElement("ul",null,n.a.createElement("li",null,"Good comunication"),n.a.createElement("li",null,"English fluency"),n.a.createElement("li",null,"Hard worker"),n.a.createElement("li",null,"Very passionate"),n.a.createElement("li",null,"Responsable and respectful"),n.a.createElement("li",null,"Very curious"))))},N=(a(22),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,"ewe")}}]),a}(n.a.Component)),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return"Projects"===this.props.current?n.a.createElement("div",{className:"current-content"},n.a.createElement(N,null)):"Skills"===this.props.current?n.a.createElement("div",{className:"current-content"},n.a.createElement(f,null)):"About"===this.props.current?n.a.createElement("div",{className:"current-content"},"About"):"Extra"===this.props.current?n.a.createElement("div",{className:"current-content"},"Extra!!!!!!CONTENTTTT"):void 0}}]),a}(n.a.Component),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={currentTab:"Projects",mobileState:null},e.handleSelect=function(t){e.setState({currentTab:t})},e.componentDidMount=function(t){var a=document.querySelector(".menu");t!==e.state&&window.addEventListener("resize",(function(){window.innerWidth<=798?(a.style.display="none",e.setState({mobileState:!0})):e.setState({mobileState:!1})}))},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"main-container"},n.a.createElement(h,{showMenu:this.showMenu}),n.a.createElement(E,{handleSelect:this.handleSelect,mobileState:this.state.mobileState,active:this.state.currentTab}),n.a.createElement("div",{className:"current-tab-title"},n.a.createElement("h1",null,this.state.currentTab,n.a.createElement("span",{className:"animated flash infinite",style:{zIndex:"1"}},"|"))),n.a.createElement(k,{current:this.state.currentTab}))}}]),a}(n.a.Component);r.a.render(n.a.createElement(g,null),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.862e3c25.chunk.js.map