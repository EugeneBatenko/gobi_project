/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={"./assets/js/auth.js":()=>{function t(t,e,r,n,o,i,s){try{var a=t[i](s),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var s=e.apply(r,n);function a(e){t(s,o,i,a,u,"next",e)}function u(e){t(s,o,i,a,u,"throw",e)}a(void 0)}))}}document.querySelector("#sign_up_form")&&document.querySelector("#sign_up_form").addEventListener("submit",function(){var t=e(regeneratorRuntime.mark((function t(e){var r,n,o,i,s,a,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(t,e,r){console.log(r.errors[t]),r.errors?(t.classList.add("is-invalid"),e.textContent=r.errors[t]):(t.classList.remove("is-invalid"),t.classList.add("is-valid"),e.textContent="")},e.preventDefault(),r=["name","email","password"],n=e.target.name.value,o=e.target.email.value,i=e.target.password.value,t.prev=6,t.next=9,fetch("/api/signup",{method:"POST",body:JSON.stringify({name:n,email:o,password:i}),headers:{"Content-Type":"application/json"}});case 9:return a=t.sent,t.next=12,a.json();case 12:u=t.sent,console.log(u),u.errors&&r.forEach((function(t){s(document.querySelector("input[name=".concat(t,"]")),document.querySelector(".invalid-feedback.".concat(t,"-error")),u)})),u.user&&location.assign("/"),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(6),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[6,18]])})));return function(e){return t.apply(this,arguments)}}()),document.querySelector("#sign_in_form")&&document.querySelector("#sign_in_form").addEventListener("submit",function(){var t=e(regeneratorRuntime.mark((function t(e){var r,n,o,i,s,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=function(t,e,r,n){console.log(r.errors.password),r.errors[n]?(t.classList.add("is-invalid"),e.textContent=r.errors[n]):(t.classList.remove("is-invalid"),t.classList.add("is-valid"),e.textContent="")},e.preventDefault(),r=["email","password"],n=e.target.email.value,o=e.target.password.value,t.prev=5,t.next=8,fetch("/api/login",{method:"POST",body:JSON.stringify({email:n,password:o}),headers:{"Content-Type":"application/json"}});case 8:return s=t.sent,t.next=11,s.json();case 11:a=t.sent,console.log(a),a.errors&&r.forEach((function(t){i(document.querySelector("input[name=".concat(t,"]")),document.querySelector(".invalid-feedback.".concat(t,"-error")),a,t)})),a.user&&location.assign("/"),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(5),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[5,17]])})));return function(e){return t.apply(this,arguments)}}())},"./assets/js/clients.js":()=>{function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],s=!0,a=!1;try{for(r=r.call(t);!(s=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);s=!0);}catch(t){a=!0,o=t}finally{try{s||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw s}}}}function r(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}document.querySelector("#add_client")&&document.querySelector("#add_client").addEventListener("submit",(function(r){r.preventDefault();var n,o={},i=e(new FormData(r.target));try{for(i.s();!(n=i.n()).done;){var s=t(n.value,2),a=s[0],u=s[1];o[a]=u}}catch(t){i.e(t)}finally{i.f()}fetch("/api/clients",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(o)}).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)})),console.log(o)})),document.querySelector("#update_client")&&document.querySelector("#update_client").addEventListener("submit",(function(r){r.preventDefault();var n,o={},i=e(new FormData(r.target));try{for(i.s();!(n=i.n()).done;){var s=t(n.value,2),a=s[0],u=s[1];o[a]=u}}catch(t){i.e(t)}finally{i.f()}fetch("/api/clients/".concat(o.id),{headers:{"Content-type":"application/json; charset=UTF-8"},method:"PUT",body:JSON.stringify(o)}).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}))}))},"../node_modules/enter-view/enter-view.min.js":(t,e,r)=>{var n,o;void 0===(o="function"==typeof(n=()=>({selector:t,enter:e=(()=>{}),exit:r=(()=>{}),progress:n=(()=>{}),offset:o=0,once:i=!1})=>{let s=null,a=!1,u=[],c=0;function l(){s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)}}function h(){if(o&&"number"==typeof o){const t=Math.min(Math.max(0,o),1);return c-t*c}return c}function f(){const t=document.documentElement.clientHeight,e=window.innerHeight||0;c=Math.max(t,e)}function p(){a=!1;const t=h();u=u.filter((o=>{const{top:s,bottom:a,height:u}=o.getBoundingClientRect(),c=s<t,l=a<t;if(c&&!o.__ev_entered){if(e(o),o.__ev_progress=0,n(o,o.__ev_progress),i)return!1}else!c&&o.__ev_entered&&(o.__ev_progress=0,n(o,o.__ev_progress),r(o));if(c&&!l){const e=(t-s)/u;o.__ev_progress=Math.min(1,Math.max(0,e)),n(o,o.__ev_progress)}return c&&l&&1!==o.__ev_progress&&(o.__ev_progress=1,n(o,o.__ev_progress)),o.__ev_entered=c,!0})),u.length||(window.removeEventListener("scroll",d,!0),window.removeEventListener("resize",v,!0),window.removeEventListener("load",_,!0))}function d(){a||(a=!0,s(p))}function v(){f(),p()}function _(){f(),p()}function g(t){const e=t.length,r=[];for(let n=0;n<e;n+=1)r.push(t[n]);return r}function y(t,e=document){return"string"==typeof t?g(e.querySelectorAll(t)):t instanceof NodeList?g(t):t instanceof Array?t:void 0}function m(){u=y(t)}function w(){window.addEventListener("resize",v,!0),window.addEventListener("scroll",d,!0),window.addEventListener("load",_,!0),v()}function b(){return t?(m(),u&&u.length?(l(),w(),void p()):(console.error("no selector elements found"),!1)):(console.error("must pass a selector"),!1)}b()})?n.call(e,r,e,t):n)||(t.exports=o)},"../node_modules/progressbar.js/src/circle.js":(t,e,r)=>{var n=r("../node_modules/progressbar.js/src/shape.js"),o=r("../node_modules/progressbar.js/src/utils.js"),i=function(t,e){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,n.apply(this,arguments)};(i.prototype=new n).constructor=i,i.prototype._pathString=function(t){var e=t.strokeWidth;t.trailWidth&&t.trailWidth>t.strokeWidth&&(e=t.trailWidth);var r=50-e/2;return o.render(this._pathTemplate,{radius:r,"2radius":2*r})},i.prototype._trailString=function(t){return this._pathString(t)},t.exports=i},"../node_modules/progressbar.js/src/line.js":(t,e,r)=>{var n=r("../node_modules/progressbar.js/src/shape.js"),o=r("../node_modules/progressbar.js/src/utils.js"),i=function(t,e){this._pathTemplate="M 0,{center} L 100,{center}",n.apply(this,arguments)};(i.prototype=new n).constructor=i,i.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 "+e.strokeWidth),t.setAttribute("preserveAspectRatio","none")},i.prototype._pathString=function(t){return o.render(this._pathTemplate,{center:t.strokeWidth/2})},i.prototype._trailString=function(t){return this._pathString(t)},t.exports=i},"../node_modules/progressbar.js/src/main.js":(t,e,r)=>{t.exports={Line:r("../node_modules/progressbar.js/src/line.js"),Circle:r("../node_modules/progressbar.js/src/circle.js"),SemiCircle:r("../node_modules/progressbar.js/src/semicircle.js"),Square:r("../node_modules/progressbar.js/src/square.js"),Path:r("../node_modules/progressbar.js/src/path.js"),Shape:r("../node_modules/progressbar.js/src/shape.js"),utils:r("../node_modules/progressbar.js/src/utils.js")}},"../node_modules/progressbar.js/src/path.js":(t,e,r)=>{var n=r("../node_modules/shifty/dist/shifty.js"),o=r("../node_modules/progressbar.js/src/utils.js"),i=n.Tweenable,s={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},a=function t(e,r){if(!(this instanceof t))throw new Error("Constructor was called without new keyword");var n;r=o.extend({delay:0,duration:800,easing:"linear",from:{},to:{},step:function(){}},r),n=o.isString(e)?document.querySelector(e):e,this.path=n,this._opts=r,this._tweenable=null;var i=this.path.getTotalLength();this.path.style.strokeDasharray=i+" "+i,this.set(0)};a.prototype.value=function(){var t=this._getComputedDashOffset(),e=this.path.getTotalLength();return parseFloat((1-t/e).toFixed(6),10)},a.prototype.set=function(t){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(t);var e=this._opts.step;if(o.isFunction(e)){var r=this._easing(this._opts.easing);e(this._calculateTo(t,r),this._opts.shape||this,this._opts.attachment)}},a.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},a.prototype.animate=function(t,e,r){e=e||{},o.isFunction(e)&&(r=e,e={});var n=o.extend({},e),s=o.extend({},this._opts);e=o.extend(s,e);var a=this._easing(e.easing),u=this._resolveFromAndTo(t,a,n);this.stop(),this.path.getBoundingClientRect();var c=this._getComputedDashOffset(),l=this._progressToOffset(t),h=this;this._tweenable=new i,this._tweenable.tween({from:o.extend({offset:c},u.from),to:o.extend({offset:l},u.to),duration:e.duration,delay:e.delay,easing:a,step:function(t){h.path.style.strokeDashoffset=t.offset;var r=e.shape||h;e.step(t,r,e.attachment)}}).then((function(t){o.isFunction(r)&&r()}))},a.prototype._getComputedDashOffset=function(){var t=window.getComputedStyle(this.path,null);return parseFloat(t.getPropertyValue("stroke-dashoffset"),10)},a.prototype._progressToOffset=function(t){var e=this.path.getTotalLength();return e-t*e},a.prototype._resolveFromAndTo=function(t,e,r){return r.from&&r.to?{from:r.from,to:r.to}:{from:this._calculateFrom(e),to:this._calculateTo(t,e)}},a.prototype._calculateFrom=function(t){return n.interpolate(this._opts.from,this._opts.to,this.value(),t)},a.prototype._calculateTo=function(t,e){return n.interpolate(this._opts.from,this._opts.to,t,e)},a.prototype._stopTween=function(){null!==this._tweenable&&(this._tweenable.stop(),this._tweenable=null)},a.prototype._easing=function(t){return s.hasOwnProperty(t)?s[t]:t},t.exports=a},"../node_modules/progressbar.js/src/semicircle.js":(t,e,r)=>{var n=r("../node_modules/progressbar.js/src/shape.js"),o=r("../node_modules/progressbar.js/src/circle.js"),i=r("../node_modules/progressbar.js/src/utils.js"),s=function(t,e){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,n.apply(this,arguments)};(s.prototype=new n).constructor=s,s.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 50")},s.prototype._initializeTextContainer=function(t,e,r){t.text.style&&(r.style.top="auto",r.style.bottom="0",t.text.alignToBottom?i.setStyle(r,"transform","translate(-50%, 0)"):i.setStyle(r,"transform","translate(-50%, 50%)"))},s.prototype._pathString=o.prototype._pathString,s.prototype._trailString=o.prototype._trailString,t.exports=s},"../node_modules/progressbar.js/src/shape.js":(t,e,r)=>{var n=r("../node_modules/progressbar.js/src/path.js"),o=r("../node_modules/progressbar.js/src/utils.js"),i="Object is destroyed",s=function t(e,r){if(!(this instanceof t))throw new Error("Constructor was called without new keyword");if(0!==arguments.length){this._opts=o.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},r,!0),o.isObject(r)&&void 0!==r.svgStyle&&(this._opts.svgStyle=r.svgStyle),o.isObject(r)&&o.isObject(r.text)&&void 0!==r.text.style&&(this._opts.text.style=r.text.style);var i,s=this._createSvgView(this._opts);if(!(i=o.isString(e)?document.querySelector(e):e))throw new Error("Container does not exist: "+e);this._container=i,this._container.appendChild(s.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&o.setStyles(s.svg,this._opts.svgStyle),this.svg=s.svg,this.path=s.path,this.trail=s.trail,this.text=null;var a=o.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new n(s.path,a),o.isObject(this._opts.text)&&null!==this._opts.text.value&&this.setText(this._opts.text.value)}};s.prototype.animate=function(t,e,r){if(null===this._progressPath)throw new Error(i);this._progressPath.animate(t,e,r)},s.prototype.stop=function(){if(null===this._progressPath)throw new Error(i);void 0!==this._progressPath&&this._progressPath.stop()},s.prototype.pause=function(){if(null===this._progressPath)throw new Error(i);void 0!==this._progressPath&&this._progressPath._tweenable&&this._progressPath._tweenable.pause()},s.prototype.resume=function(){if(null===this._progressPath)throw new Error(i);void 0!==this._progressPath&&this._progressPath._tweenable&&this._progressPath._tweenable.resume()},s.prototype.destroy=function(){if(null===this._progressPath)throw new Error(i);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,null!==this.text&&(this.text.parentNode.removeChild(this.text),this.text=null)},s.prototype.set=function(t){if(null===this._progressPath)throw new Error(i);this._progressPath.set(t)},s.prototype.value=function(){if(null===this._progressPath)throw new Error(i);return void 0===this._progressPath?0:this._progressPath.value()},s.prototype.setText=function(t){if(null===this._progressPath)throw new Error(i);null===this.text&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),o.isObject(t)?(o.removeChildren(this.text),this.text.appendChild(t)):this.text.innerHTML=t},s.prototype._createSvgView=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(e,t);var r=null;(t.trailColor||t.trailWidth)&&(r=this._createTrail(t),e.appendChild(r));var n=this._createPath(t);return e.appendChild(n),{svg:e,path:n,trail:r}},s.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 100")},s.prototype._createPath=function(t){var e=this._pathString(t);return this._createPathElement(e,t)},s.prototype._createTrail=function(t){var e=this._trailString(t),r=o.extend({},t);return r.trailColor||(r.trailColor="#eee"),r.trailWidth||(r.trailWidth=r.strokeWidth),r.color=r.trailColor,r.strokeWidth=r.trailWidth,r.fill=null,this._createPathElement(e,r)},s.prototype._createPathElement=function(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",t),r.setAttribute("stroke",e.color),r.setAttribute("stroke-width",e.strokeWidth),e.fill?r.setAttribute("fill",e.fill):r.setAttribute("fill-opacity","0"),r},s.prototype._createTextContainer=function(t,e){var r=document.createElement("div");r.className=t.text.className;var n=t.text.style;return n&&(t.text.autoStyleContainer&&(e.style.position="relative"),o.setStyles(r,n),n.color||(r.style.color=t.color)),this._initializeTextContainer(t,e,r),r},s.prototype._initializeTextContainer=function(t,e,r){},s.prototype._pathString=function(t){throw new Error("Override this function for each progress bar")},s.prototype._trailString=function(t){throw new Error("Override this function for each progress bar")},s.prototype._warnContainerAspectRatio=function(t){if(this.containerAspectRatio){var e=window.getComputedStyle(t,null),r=parseFloat(e.getPropertyValue("width"),10),n=parseFloat(e.getPropertyValue("height"),10);o.floatEquals(this.containerAspectRatio,r/n)||(console.warn("Incorrect aspect ratio of container","#"+t.id,"detected:",e.getPropertyValue("width")+"(width)","/",e.getPropertyValue("height")+"(height)","=",r/n),console.warn("Aspect ratio of should be",this.containerAspectRatio))}},t.exports=s},"../node_modules/progressbar.js/src/square.js":(t,e,r)=>{var n=r("../node_modules/progressbar.js/src/shape.js"),o=r("../node_modules/progressbar.js/src/utils.js"),i=function(t,e){this._pathTemplate="M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}",this._trailTemplate="M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}",n.apply(this,arguments)};(i.prototype=new n).constructor=i,i.prototype._pathString=function(t){var e=100-t.strokeWidth/2;return o.render(this._pathTemplate,{width:e,strokeWidth:t.strokeWidth,halfOfStrokeWidth:t.strokeWidth/2})},i.prototype._trailString=function(t){var e=100-t.strokeWidth/2;return o.render(this._trailTemplate,{width:e,strokeWidth:t.strokeWidth,halfOfStrokeWidth:t.strokeWidth/2,startMargin:t.strokeWidth/2-t.trailWidth/2})},t.exports=i},"../node_modules/progressbar.js/src/utils.js":t=>{var e="Webkit Moz O ms".split(" ");function r(t,r,o){for(var i=t.style,s=0;s<e.length;++s){i[e[s]+n(r)]=o}i[r]=o}function n(t){return t.charAt(0).toUpperCase()+t.slice(1)}function o(t){return!function(t){return"[object Array]"===Object.prototype.toString.call(t)}(t)&&("object"===typeof t&&!!t)}function i(t,e){for(var r in t){if(t.hasOwnProperty(r))e(t[r],r)}}t.exports={extend:function t(e,r,n){for(var i in e=e||{},n=n||!1,r=r||{})if(r.hasOwnProperty(i)){var s=e[i],a=r[i];n&&o(s)&&o(a)?e[i]=t(s,a,n):e[i]=a}return e},render:function(t,e){var r=t;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n],i=new RegExp("\\{"+n+"\\}","g");r=r.replace(i,o)}return r},setStyle:r,setStyles:function(t,e){i(e,(function(e,n){null!=e&&(o(e)&&!0===e.prefix?r(t,n,e.value):t.style[n]=e)}))},capitalize:n,isString:function(t){return"string"==typeof t||t instanceof String},isFunction:function(t){return"function"==typeof t},isObject:o,forEachObject:i,floatEquals:function(t,e){return Math.abs(t-e)<.001},removeChildren:function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}}},"../node_modules/shifty/dist/shifty.js":t=>{self,t.exports=function(){"use strict";var t={720:function(t,e,r){r.r(e),r.d(e,{Scene:function(){return Xt},Tweenable:function(){return vt},interpolate:function(){return Ut},processTweens:function(){return lt},setBezierFunction:function(){return Yt},tween:function(){return _t},unsetBezierFunction:function(){return Zt}});var n={};r.r(n),r.d(n,{bounce:function(){return q},bouncePast:function(){return I},easeFrom:function(){return D},easeFromTo:function(){return L},easeInBack:function(){return T},easeInCirc:function(){return O},easeInCubic:function(){return c},easeInExpo:function(){return b},easeInOutBack:function(){return A},easeInOutCirc:function(){return k},easeInOutCubic:function(){return h},easeInOutExpo:function(){return j},easeInOutQuad:function(){return u},easeInOutQuart:function(){return d},easeInOutQuint:function(){return g},easeInOutSine:function(){return w},easeInQuad:function(){return s},easeInQuart:function(){return f},easeInQuint:function(){return v},easeInSine:function(){return y},easeOutBack:function(){return C},easeOutBounce:function(){return P},easeOutCirc:function(){return x},easeOutCubic:function(){return l},easeOutExpo:function(){return S},easeOutQuad:function(){return a},easeOutQuart:function(){return p},easeOutQuint:function(){return _},easeOutSine:function(){return m},easeTo:function(){return R},elastic:function(){return E},linear:function(){return i},swingFrom:function(){return F},swingFromTo:function(){return M},swingTo:function(){return W}});var o={};r.r(o),r.d(o,{afterTween:function(){return Rt},beforeTween:function(){return Dt},doesApply:function(){return It},tweenCreated:function(){return Lt}});var i=function(t){return t},s=function(t){return Math.pow(t,2)},a=function(t){return-(Math.pow(t-1,2)-1)},u=function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},c=function(t){return Math.pow(t,3)},l=function(t){return Math.pow(t-1,3)+1},h=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},f=function(t){return Math.pow(t,4)},p=function(t){return-(Math.pow(t-1,4)-1)},d=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},v=function(t){return Math.pow(t,5)},_=function(t){return Math.pow(t-1,5)+1},g=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},y=function(t){return 1-Math.cos(t*(Math.PI/2))},m=function(t){return Math.sin(t*(Math.PI/2))},w=function(t){return-.5*(Math.cos(Math.PI*t)-1)},b=function(t){return 0===t?0:Math.pow(2,10*(t-1))},S=function(t){return 1===t?1:1-Math.pow(2,-10*t)},j=function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},O=function(t){return-(Math.sqrt(1-t*t)-1)},x=function(t){return Math.sqrt(1-Math.pow(t-1,2))},k=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},P=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},T=function(t){var e=1.70158;return t*t*((e+1)*t-e)},C=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},A=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},E=function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},M=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},F=function(t){var e=1.70158;return t*t*((e+1)*t-e)},W=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},q=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},I=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},L=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},D=function(t){return Math.pow(t,4)},R=function(t){return Math.pow(t,.25)};function N(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(r),!0).forEach((function(e){U(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function U(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var J,H,$,G="linear",K="undefined"!=typeof window?window:r.g,X="afterTween",Y="afterTweenEnd",Z="beforeTween",tt="tweenCreated",et="function",rt="string",nt=K.requestAnimationFrame||K.webkitRequestAnimationFrame||K.oRequestAnimationFrame||K.msRequestAnimationFrame||K.mozCancelRequestAnimationFrame&&K.mozRequestAnimationFrame||setTimeout,ot=function(){},it=null,st=null,at=V({},n),ut=function(t,e,r,n,o,i,s){var a,u,c,l=t<i?0:(t-i)/o,h=!1;for(var f in s&&s.call&&(h=!0,a=s(l)),e)h||(a=((u=s[f]).call?u:at[u])(l)),c=r[f],e[f]=c+(n[f]-c)*a;return e},ct=function(t,e){var r=t._timestamp,n=t._currentState,o=t._delay;if(!(e<r+o)){var i=t._duration,s=t._targetState,a=r+o+i,u=e>a?a:e,c=u>=a,l=i-(a-u),h=t._filters.length>0;if(c)return t._render(s,t._data,l),t.stop(!0);h&&t._applyFilter(Z),u<r+o?r=i=u=1:r+=o,ut(u,n,t._originalState,s,i,r,t._easing),h&&t._applyFilter(X),t._render(n,t._data,l)}},lt=function(){for(var t,e=vt.now(),r=it;r;)t=r._next,ct(r,e),r=t},ht=Date.now||function(){return+new Date},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=B(e);if(at[e])return at[e];if(n===rt||n===et)for(var o in t)r[o]=e;else for(var i in t)r[i]=e[i]||G;return r},pt=function(t){t===it?(it=t._next)?it._previous=null:st=null:t===st?(st=t._previous)?st._next=null:it=null:(H=t._previous,$=t._next,H._next=$,$._previous=H),t._previous=t._next=null},dt="function"==typeof Promise?Promise:null,vt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;N(this,t),this._config={},this._data={},this._delay=0,this._filters=[],this._next=null,this._previous=null,this._timestamp=null,this._resolve=null,this._reject=null,this._currentState=e||{},this._originalState={},this._targetState={},this._start=ot,this._render=ot,this._promiseCtor=dt,r&&this.setConfig(r)}var e;return(e=[{key:"_applyFilter",value:function(t){for(var e=this._filters.length;e>0;e--){var r=this._filters[e-e][t];r&&r(this)}}},{key:"tween",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return this._isPlaying&&this.stop(),!e&&this._config||this.setConfig(e),this._pausedAtTime=null,this._timestamp=t.now(),this._start(this.get(),this._data),this._delay&&this._render(this._currentState,this._data,0),this._resume(this._timestamp)}},{key:"setConfig",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this._config;for(var n in e)r[n]=e[n];var o=r.promise,i=void 0===o?this._promiseCtor:o,s=r.start,a=void 0===s?ot:s,u=r.finish,c=r.render,l=void 0===c?this._config.step||ot:c,h=r.step,f=void 0===h?ot:h;this._data=r.data||r.attachment||this._data,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=e.delay||0,this._start=a,this._render=l||f,this._duration=r.duration||500,this._promiseCtor=i,u&&(this._resolve=u);var p=e.from,d=e.to,v=void 0===d?{}:d,_=this._currentState,g=this._originalState,y=this._targetState;for(var m in p)_[m]=p[m];var w=!1;for(var b in _){var S=_[b];w||B(S)!==rt||(w=!0),g[b]=S,y[b]=v.hasOwnProperty(b)?v[b]:S}if(this._easing=ft(this._currentState,r.easing,this._easing),this._filters.length=0,w){for(var j in t.filters)t.filters[j].doesApply(this)&&this._filters.push(t.filters[j]);this._applyFilter(tt)}return this}},{key:"then",value:function(t,e){var r=this;return this._promise=new this._promiseCtor((function(t,e){r._resolve=t,r._reject=e})),this._promise.then(t,e)}},{key:"catch",value:function(t){return this.then().catch(t)}},{key:"get",value:function(){return V({},this._currentState)}},{key:"set",value:function(t){this._currentState=t}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=t.now(),this._isPlaying=!1,pt(this),this}},{key:"resume",value:function(){return this._resume()}},{key:"_resume",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.now();return null===this._timestamp?this.tween():this._isPlaying?this._promise:(this._pausedAtTime&&(this._timestamp+=e-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,null===it?(it=this,st=this):(this._previous=st,st._next=this,st=this),this)}},{key:"seek",value:function(e){e=Math.max(e,0);var r=t.now();return this._timestamp+e===0||(this._timestamp=r-e,ct(this,r)),this}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this._isPlaying)return this;this._isPlaying=!1,pt(this);var e=this._filters.length>0;t&&(e&&this._applyFilter(Z),ut(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),e&&(this._applyFilter(X),this._applyFilter(Y))),this._resolve&&this._resolve({data:this._data,state:this._currentState,tweenable:this}),this._resolve=null,this._reject=null;var r=this._currentState,n=this._originalState,o=this._targetState;for(var i in r)n[i]=o[i]=r[i];return this}},{key:"cancel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this._currentState,r=this._data;return this._isPlaying?(this._reject&&this._reject({data:r,state:e,tweenable:this}),this._resolve=null,this._reject=null,this.stop(t)):this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"setScheduleFunction",value:function(e){t.setScheduleFunction(e)}},{key:"data",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t&&(this._data=V({},t)),this._data}},{key:"dispose",value:function(){for(var t in this)delete this[t]}}])&&z(t.prototype,e),t}();function _t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new vt;return e.tween(t),e.tweenable=e,e}U(vt,"now",(function(){return J})),vt.setScheduleFunction=function(t){return nt=t},vt.formulas=at,vt.filters={},function t(){J=ht(),nt.call(K,t,16.666666666666668),lt()}();var gt,yt,mt=/(\d|-|\.)/,wt=/([^\-0-9.]+)/g,bt=/[0-9.-]+/g,St=(gt=bt.source,yt=/,\s*/.source,new RegExp("rgb\\(".concat(gt).concat(yt).concat(gt).concat(yt).concat(gt,"\\)"),"g")),jt=/^.*\(/,Ot=/#([0-9]|[a-f]){3,6}/gi,xt="VAL",kt=function(t,e){return t.map((function(t,r){return"_".concat(e,"_").concat(r)}))};function Pt(t){return parseInt(t,16)}var Tt=function(t){return"rgb(".concat((e=t,3===(e=e.replace(/#/,"")).length&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]),[Pt(e.substr(0,2)),Pt(e.substr(2,2)),Pt(e.substr(4,2))]).join(","),")");var e},Ct=function(t,e,r){var n=e.match(t),o=e.replace(t,xt);return n&&n.forEach((function(t){return o=o.replace(xt,r(t))})),o},At=function(t){for(var e in t){var r=t[e];"string"==typeof r&&r.match(Ot)&&(t[e]=Ct(Ot,r,Tt))}},Et=function(t){var e=t.match(bt).map(Math.floor),r=t.match(jt)[0];return"".concat(r).concat(e.join(","),")")},Mt=function(t){return t.match(bt)},Ft=function(t,e){var r={};return e.forEach((function(e){r[e]=t[e],delete t[e]})),r},Wt=function(t,e){return e.map((function(e){return t[e]}))},qt=function(t,e){return e.forEach((function(e){return t=t.replace(xt,+e.toFixed(4))})),t},It=function(t){for(var e in t._currentState)if("string"==typeof t._currentState[e])return!0;return!1};function Lt(t){var e=t._currentState;[e,t._originalState,t._targetState].forEach(At),t._tokenData=function(t){var e,r,n={};for(var o in t){var i=t[o];"string"==typeof i&&(n[o]={formatString:(e=i,r=void 0,r=e.match(wt),r?(1===r.length||e.charAt(0).match(mt))&&r.unshift(""):r=["",""],r.join(xt)),chunkNames:kt(Mt(i),o)})}return n}(e)}function Dt(t){var e=t._currentState,r=t._originalState,n=t._targetState,o=t._easing,i=t._tokenData;!function(t,e){var r=function(r){var n=e[r].chunkNames,o=t[r];if("string"==typeof o){var i=o.split(" "),s=i[i.length-1];n.forEach((function(e,r){return t[e]=i[r]||s}))}else n.forEach((function(e){return t[e]=o}));delete t[r]};for(var n in e)r(n)}(o,i),[e,r,n].forEach((function(t){return function(t,e){var r=function(r){Mt(t[r]).forEach((function(n,o){return t[e[r].chunkNames[o]]=+n})),delete t[r]};for(var n in e)r(n)}(t,i)}))}function Rt(t){var e=t._currentState,r=t._originalState,n=t._targetState,o=t._easing,i=t._tokenData;[e,r,n].forEach((function(t){return function(t,e){for(var r in e){var n=e[r],o=n.chunkNames,i=n.formatString,s=qt(i,Wt(Ft(t,o),o));t[r]=Ct(St,s,Et)}}(t,i)})),function(t,e){for(var r in e){var n=e[r].chunkNames,o=t[n[0]];t[r]="string"==typeof o?n.map((function(e){var r=t[e];return delete t[e],r})).join(" "):o}}(o,i)}function Nt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function zt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Nt(Object(r),!0).forEach((function(e){Bt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Nt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Bt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Qt=new vt,Vt=vt.filters,Ut=function(t,e,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=zt({},t),s=ft(t,n);for(var a in Qt._filters.length=0,Qt.set({}),Qt._currentState=i,Qt._originalState=t,Qt._targetState=e,Qt._easing=s,Vt)Vt[a].doesApply(Qt)&&Qt._filters.push(Vt[a]);Qt._applyFilter("tweenCreated"),Qt._applyFilter("beforeTween");var u=ut(r,i,t,e,1,o,s);return Qt._applyFilter("afterTween"),u};function Jt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Ht(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Gt(t,e){var r=e.get(t);if(!r)throw new TypeError("attempted to get private field on non-instance");return r.get?r.get.call(t):r.value}var Kt=new WeakMap,Xt=function(){function t(){Ht(this,t),Kt.set(this,{writable:!0,value:[]});for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.forEach(this.add.bind(this))}var e;return(e=[{key:"add",value:function(t){return Gt(this,Kt).push(t),t}},{key:"remove",value:function(t){var e=Gt(this,Kt).indexOf(t);return~e&&Gt(this,Kt).splice(e,1),t}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return Gt(this,Kt).some((function(t){return t.isPlaying()}))}},{key:"play",value:function(){return Gt(this,Kt).forEach((function(t){return t.tween()})),this}},{key:"pause",value:function(){return Gt(this,Kt).forEach((function(t){return t.pause()})),this}},{key:"resume",value:function(){return Gt(this,Kt).forEach((function(t){return t.resume()})),this}},{key:"stop",value:function(t){return Gt(this,Kt).forEach((function(e){return e.stop(t)})),this}},{key:"tweenables",get:function(){return function(t){if(Array.isArray(t))return Jt(t)}(t=Gt(this,Kt))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return Jt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Jt(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();var t}},{key:"promises",get:function(){return Gt(this,Kt).map((function(t){return t.then()}))}}])&&$t(t.prototype,e),t}(),Yt=function(t,e,r,n,o){var i=function(t,e,r,n){return function(o){return l=0,h=0,f=0,p=function(t){return((l*t+h)*t+f)*t},d=function(t){return(3*l*t+2*h)*t+f},v=function(t){return t>=0?t:0-t},l=1-(f=3*(i=t))-(h=3*(r-i)-f),a=1-(c=3*(s=e))-(u=3*(n-s)-c),function(t){return((a*t+u)*t+c)*t}(function(t,e){var r,n,o,i,s,a;for(o=t,a=0;a<8;a++){if(i=p(o)-t,v(i)<e)return o;if(s=d(o),v(s)<1e-6)break;o-=i/s}if((o=t)<(r=0))return r;if(o>(n=1))return n;for(;r<n;){if(i=p(o),v(i-t)<e)return o;t>i?r=o:n=o,o=.5*(n-r)+r}return o}(o,.005));var i,s,a,u,c,l,h,f,p,d,v}}(e,r,n,o);return i.displayName=t,i.x1=e,i.y1=r,i.x2=n,i.y2=o,vt.formulas[t]=i},Zt=function(t){return delete vt.formulas[t]};vt.filters.token=o}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}return r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(720)}()}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r({});var t=r("../node_modules/enter-view/enter-view.min.js"),e=r.n(t),n=r("../node_modules/progressbar.js/src/main.js"),o=r.n(n),i=(r("./assets/js/clients.js"),r("./assets/js/auth.js"),[".counterCircle1",".counterCircle2",".counterCircle3",".counterCircle4"].map((function(t){return new(o().Circle)(t,{color:"#282A35",duration:50*document.querySelector(t).getAttribute("data-value"),strokeWidth:4,trailWidth:3,easing:"easeInOut",from:{color:"#aaa"},to:{color:"#018567"},step:function(e,r){r.path.setAttribute("stroke",e.color),r.path.setAttribute("stroke-width",e.width);var n=Math.round(r.value()*document.querySelector(t).getAttribute("data-value"));0===n?r.setText(""):r.setText(n)}})})));e()({selector:".statistic-landing",enter:function(t){i.forEach((function(t){return t.animate(1)}))}})})(),(()=>{"use strict";r.r(n)})()})();
//# sourceMappingURL=main.js.map