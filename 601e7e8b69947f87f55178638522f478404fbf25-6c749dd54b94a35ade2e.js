/*! For license information please see 601e7e8b69947f87f55178638522f478404fbf25-6c749dd54b94a35ade2e.js.LICENSE.txt */
(self.webpackChunkkhalilprojects=self.webpackChunkkhalilprojects||[]).push([[437],{5900:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var i in n)a.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},8862:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(7294),r=(a=o)&&a.__esModule?a:{default:a};t.default=function(){return r.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},r.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},1867:function(e,t,n){"use strict";var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(7294),l=h(r),i=h(n(5900)),s=h(n(5697)),c=h(n(8862)),u=h(n(5616)),d=n(4109);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),r=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return l.default.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",a({},o,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(r.PureComponent);t.Z=f,f.displayName="Toggle",f.defaultProps={icons:{checked:l.default.createElement(c.default,null),unchecked:l.default.createElement(u.default,null)}},f.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},4109:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},5616:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(7294),r=(a=o)&&a.__esModule?a:{default:a};t.default=function(){return r.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},r.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},5604:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(7294),o=n(3935),r=n(5444),l=n(9831),i=(n(5918),n(3765));function s(){const e=(0,r.K2)("3407052760"),t=()=>window.screen.width>1e3?"75%":"100%",n=e=>{const n=new l.Z({title:e.node.frontmatter.title,width:t(),height:t(),x:"center",y:"center",onfocus:function(){this.removeClass("wb-no-focus"),this.addClass("wb-focus")},onblur:function(){this.removeClass("wb-focus"),this.addClass("wb-no-focus")}});o.render(a.createElement(i.Z,{title:e.node.frontmatter.title,popupImageSrc:e.node.frontmatter.popupImageSrc,popupImageAlt:e.node.frontmatter.popupImageAlt,video:e.node.frontmatter.video,popupGithubLink:e.node.frontmatter.popupGithubLink,popupLiveLink:e.node.frontmatter.popupLiveLink,techIcons:e.node.frontmatter.techIcons,html:e.node.html}),n.body)},s=e.info.edges.map((e=>a.createElement("li",{key:e.node.frontmatter.title,className:"infoItem"},a.createElement("button",{className:"popupWindowLinkButton",style:{cursor:"pointer"},onClick:()=>n(e)},e.node.frontmatter.listName)))),c=e.info.edges.map((e=>a.createElement("li",{key:e.node.frontmatter.title,className:"infoItem"},a.createElement(r.rU,{className:"popupWindowLinkButton",style:{cursor:"pointer"},to:e.node.frontmatter.slug},e.node.frontmatter.listName)))),u=e.projects.edges.map((e=>a.createElement("li",{key:e.node.frontmatter.title,className:e.node.frontmatter.nameOfClass,style:{display:"flex",alignItems:"center",width:"100%"}},a.createElement("button",{className:"popupWindowLinkButton",style:{cursor:"pointer",width:"30%"},onClick:()=>n(e)},e.node.frontmatter.listName),a.createElement("span",{style:{fontSize:"small",paddingLeft:"0.5rem",textJustify:"right",width:"70%"}},"sudo cd /My Projects "+e.node.frontmatter.slug+" -> ",a.createElement("a",{href:e.node.frontmatter.popupGithubLink},e.node.frontmatter.popupGithubLink))))),d=e.projects.edges.map((e=>a.createElement("li",{key:e.node.frontmatter.title,className:e.node.frontmatter.nameOfClass},a.createElement(r.rU,{className:"popupWindowLinkButton",style:{cursor:"pointer"},to:e.node.frontmatter.slug},e.node.frontmatter.listName)))),h=a.createElement("li",{className:"infoItem"},a.createElement("button",{className:"popupWindowLinkButton",style:{cursor:"pointer"},onClick:()=>{}},a.createElement("span",{role:"img","aria-label":"e-mail"},"📧")," ",a.createElement(r.rU,{className:"popupWindowLinkButton",style:{cursor:"pointer"},to:"https://www.linkedin.com/in/mohammed-khalil-ghali-11305119b/",target:"_blank",rel:"noopener noreferrer"},a.createElement("span",{role:"img","aria-label":"Contact Me"},"/Contact Me")," ")));return a.createElement("ul",{className:"mappedItemsList"},window.screen.width<1024?a.createElement(a.Fragment,null,a.createElement("li",null,"→ ~$Echo :")," ",c," ",a.createElement("li",{className:"infoItem"},a.createElement(r.rU,{className:"popupWindowLinkButton",style:{cursor:"pointer"},to:"https://www.linkedin.com/in/mohammed-khalil-ghali-11305119b/",target:"_blank",rel:"noopener noreferrer"},a.createElement("span",{role:"img","aria-label":"Contact Me"},"📧")," "))," ",a.createElement("li",null,"→ Projects:"),d," ",a.createElement("li",{className:"miniProject"},"→ Mini-Projects:")):a.createElement(a.Fragment,null,a.createElement("li",null,"→ ~$Echo :")," ",s," ",h," ",a.createElement("li",null,"→ ~$Chmod Projects:"),u," ",a.createElement("li",{className:"miniProject"},"→ ~$Chdir Portfolio:")))}var c=n(1867),u=n(9519),d=n(8014);var h=()=>{const{0:e,1:t}=(0,a.useState)("undefined"!=typeof window&&sessionStorage.getItem("isLoaded")||!1),{0:n,1:o}=(0,a.useState)("undefined"!=typeof window&&JSON.parse(localStorage.getItem("lightMode"))||!1);return(0,a.useEffect)((()=>{sessionStorage.setItem("isLoaded",e)}),[e]),(0,a.useEffect)((()=>{localStorage.setItem("lightMode",n),o(n),n?document.documentElement.classList.add("light"):document.documentElement.classList.remove("light")}),[n]),"undefined"!=typeof window?a.createElement(c.Z,{defaultChecked:n,icons:{checked:a.createElement(u.G,{icon:d.DBF}),unchecked:a.createElement(u.G,{icon:d.enB})},onChange:()=>{o(!n)},"aria-label":"dark mode toggle"}):""};var f=e=>{let{text:t}=e;const n="undefined"!=typeof window;return a.createElement("div",{className:"LsDisplayWindow"},a.createElement("div",{className:"LsDisplayTaskbar"},a.createElement("span",null,"CMD "," > "," ~ $ls -l"),a.createElement("div",{style:{position:"absolute",right:"10px",bottom:"-2px"}},a.createElement(h,null))),a.createElement("h2",null,t,(n&&window.innerWidth,""),a.createElement("div",{className:"break"})),n?a.createElement(s,null):"")}},9219:function(e,t,n){"use strict";var a=n(7294);n(8938);const o=e=>{let{siteTitle:t}=e;const{0:n,1:o}=(0,a.useState)("undefined"!=typeof window&&sessionStorage.getItem("isLoaded")||!1),r=["Mohammed-Khalil Ghali","Data Science Enthusiast","Generative AI Apps Creator","Welcome to my Generative AI Projects Portal"];let l=0;const i=()=>{const e=document.querySelector("#typewriter-container"),t=r[l],n=t.length;let a=0;const o=()=>{a<=n?(e.textContent=t.substr(0,a),a++,setTimeout(o,100)):setTimeout((()=>{l=(l+1)%r.length,i()}),2500)};o()};return(0,a.useEffect)((()=>{n||(o(!0),i())}),[n]),a.createElement("header",null,a.createElement("div",{style:{display:"inline-flex"}},a.createElement("h1",null,">"),a.createElement("h1",{id:"typewriter-container"},n?"Welcome to Generative AI Projects Portal":"")))};o.defaultProps={siteTitle:""},t.Z=o}}]);
//# sourceMappingURL=601e7e8b69947f87f55178638522f478404fbf25-6c749dd54b94a35ade2e.js.map