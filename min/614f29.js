/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);/**
 * Copyright 2010 Jay and Han (laughinghan@gmail.com)
 * License, Usage and Readme at http://mathquill.com
 */
 /****************************
 * Important opening stuff.
 ***************************/

(function($){ //takes in the jQuery function as an argument

//Note: if the following is no longer on line 12 of build/mathquill.js, please modify publish.sh accordingly
//$('head').prepend('<link rel="stylesheet" type="text/css" href="http://laughinghan.github.com/mathquill/mathquill.css">');

function todo(){ alert('BLAM!\n\nAHHHHHH!\n\n"Oh god, oh god, I\'ve never seen so much blood!"\n\nYeah, that doesn\'t fully work yet.'); };

/*************************************************
 * Abstract base classes of blocks and commands.
 ************************************************/

/**
 * MathElement is the core Math DOM tree node prototype.
 * Both MathBlock's and MathCommand's descend from it.
 */
function MathElement(){}
MathElement.prototype = {
  prev: null,
  next: null,
  parent: null,
  firstChild: null,
  lastChild: null,
  eachChild: function(fn)
  {
    for(var child = this.firstChild; child !== null; child = child.next)
      if(fn.call(child) === false)
        break;
    return this;
  },
  reduceChildren: function(fn, initVal)
  {
    this.eachChild(function(){
      initVal = fn.call(this, initVal);
    });
    return initVal;
  },
  keydown: function(e)
  {
    return this.parent.keydown(e);
  },
  keypress: function(e)
  {
    return this.parent.keypress(e);
  }
};

/**
 * Commands and operators, like subscripts, exponents, or fractions.
 * Descendant commands are organized into blocks.
 * May be passed a MathFragment that's being replaced.
 */
function MathCommand(cmd, html_template, replacedFragment)
{
  if(!arguments.length)
    return;

  this.cmd = cmd;
  if(html_template)
    this.html_template = html_template;

  this.jQ = $(this.html_template[0]).data('[[mathquill internal data]]', {cmd: this});
  this.initBlocks(replacedFragment);
}
MathCommand.prototype = $.extend(new MathElement, {
  initBlocks: function(replacedFragment)
  {
    //single-block commands
    if(this.html_template.length === 1)
    {
      this.firstChild = this.lastChild =
        this.jQ.data('[[mathquill internal data]]').block =
          (replacedFragment && replacedFragment.blockify()) || new MathBlock;
      this.firstChild.parent = this;
      this.firstChild.jQ = this.jQ.append(this.firstChild.jQ);
      return;
    }
    //otherwise, the succeeding elements of html_template should be child blocks
    var newBlock, prev, num_blocks = this.html_template.length;
    this.firstChild = newBlock = prev =
      (replacedFragment && replacedFragment.blockify()) || new MathBlock;
    newBlock.parent = this;
    newBlock.jQ = $(this.html_template[1]).data('[[mathquill internal data]]',
      {block: newBlock}).append(newBlock.jQ).appendTo(this.jQ);
    newBlock.setEmpty();
    for(var i = 2; i < num_blocks; i += 1)
    {
      newBlock = new MathBlock;
      newBlock.parent = this;
      newBlock.prev = prev;
      prev.next = newBlock;
      prev = newBlock;

      newBlock.jQ = $(this.html_template[i]).data('[[mathquill internal data]]',
        {block: newBlock}).appendTo(this.jQ);
      newBlock.setEmpty();
    }
    this.lastChild = newBlock;
  },
  latex: function()
  {
    return this.cmd + this.reduceChildren(function(initVal){
      return initVal + '{' + (this.latex() || ' ') + '}';
    }, '');
  },
  remove: function()
  {
    if(this.prev)
      this.prev.next = this.next;
    else
      this.parent.firstChild = this.next;

    if(this.next)
      this.next.prev = this.prev;
    else
      this.parent.lastChild = this.prev;

    this.jQ.remove();

    return this;
  },
  //placeholder for context-sensitive spacing.
  respace: $.noop,
  placeCursor: function(cursor)
  {
    cursor.appendTo(this.reduceChildren(function(prev){
      return prev.isEmpty() ? prev : this;
    }, this.firstChild));
  },
  isEmpty: function()
  {
    return this.reduceChildren(function(initVal){
      return initVal && this.isEmpty();
    }, true);
  }
});

/**
 * Lightweight command without blocks or children.
 */
function Symbol(cmd, html)
{
  MathCommand.call(this, cmd, [ html ]);
}
Symbol.prototype = $.extend(new MathCommand, {
  initBlocks: $.noop,
  latex: function()
  {
    return this.cmd;
  },
  placeCursor: $.noop,
  isEmpty: function(){ return true; }
});

/**
 * Children and parent of MathCommand's. Basically partitions all the
 * symbols and operators that descend (in the Math DOM tree) from
 * ancestor operators.
 */
function MathBlock(){}
MathBlock.prototype = $.extend(new MathElement, {
  latex: function()
  {
    return this.reduceChildren(function(initVal){
      return initVal + this.latex();
    }, '');
  },
  isEmpty: function()
  {
    return this.firstChild === null && this.lastChild === null;
  },
  setEmpty: function()
  {
    this.jQ.removeClass('hasCursor');
    if(this.isEmpty())
      this.jQ.addClass('empty');
    return this;
  },
  removeEmpty:function(cursorJQ)
  {
    this.jQ.addClass('hasCursor');
    if(this.isEmpty())
    {
      this.jQ.removeClass('empty').append(cursorJQ);
      return false;
    }
    return true;
  }
});

/**
 * An entity outside the Math DOM tree with one-way pointers (so it's only
 * a "view" of part of the tree, not an actual node/entity in the tree)
 * that delimit a list of symbols and operators.
 */
function MathFragment(parent, prev, next)
{
  if(!arguments.length)
    return;

  this.parent = parent;
  this.prev = prev || null; //so you can do 'new MathFragment(block)' without
  this.next = next || null; //ending up with this.prev or this.next === undefined

  this.jQinit(this.reduce(function(initVal){ return this.jQ.add(initVal); }, $()));
}
MathFragment.prototype = {
  remove: MathCommand.prototype.remove,
  jQinit: function(children)
  {
    return this.jQ = children;
  },
  each: function(fn)
  {
    for(var el = (this.prev ? this.prev.next : this.parent.firstChild); el !== this.next; el = el.next)
      if(fn.call(el) === false)
        break;
    return this;
  },
  reduce: function(fn, initVal)
  {
    this.each(function()
    {
      initVal = fn.call(this, initVal);
    });
    return initVal;
  },
  blockify: function()
  {
    var newBlock = new MathBlock;
    if(this.prev)
    {
      newBlock.firstChild = this.prev.next;
      this.prev.next = this.next;
    }
    else
    {
      newBlock.firstChild = this.parent.firstChild;
      this.parent.firstChild = this.next;
    }

    if(this.next)
    {
      newBlock.lastChild = this.next.prev;
      this.next.prev = this.prev;
    }
    else
    {
      newBlock.lastChild = this.parent.lastChild;
      this.parent.lastChild = this.prev;
    }

    newBlock.firstChild.prev = this.prev = null;
    newBlock.lastChild.next = this.next = null;

    this.parent = newBlock;
    this.each(function(){ this.parent = newBlock; });

    newBlock.jQ = this.jQ;

    return newBlock;
  }
};
/***************************
 * Commands and Operators.
 **************************/

var CharCmds = {}, LatexCmds = {}; //single character commands, LaTeX commands

function proto(parent, child) //shorthand for prototyping
{
  child.prototype = parent.prototype;
  return child;
}

function SupSub(cmd, html, replacedFragment)
{
  MathCommand.call(this, cmd, [ html ], replacedFragment);
  var me = this;
  this.jQ.change(function()
  {
    me.respace();
    if(me.next)
      me.next.respace();
    if(me.prev)
      me.prev.respace();
  });
}
SupSub.prototype = new MathCommand;
SupSub.prototype.latex = function()
{
  var latex = this.firstChild.latex();
  if(latex.length === 1)
    return this.cmd + latex;
  return this.cmd + '{' + (latex || ' ') + '}';
};
SupSub.prototype.respace = function()
{
  if(this.prev && (this.prev.cmd === '\\int '
    || (this.prev instanceof SupSub && this.prev.cmd != this.cmd
      && this.prev.prev && this.prev.prev.cmd === '\\int ')))
  {
    if(!this.limit)
    {
      this.limit = true;
      this.jQ.addClass('limit');
    }
  }
  else
  {
    if(this.limit)
    {
      this.limit = false;
      this.jQ.removeClass('limit');
    }
  }
  if(this.respaced = this.prev instanceof SupSub && this.prev.cmd != this.cmd && !this.prev.respaced)
    if(this.limit && this.cmd === '_')
      this.jQ.css({
        left: -.25-this.prev.jQ.outerWidth()/+this.jQ.css('fontSize').slice(0,-2)+'em',
        marginRight: .1-Math.min(this.jQ.outerWidth(), this.prev.jQ.outerWidth())/+this.jQ.css('fontSize').slice(0,-2)+'em' //1px adjustment very important!
      });
    else
      this.jQ.css({
        left: -this.prev.jQ.outerWidth()/+this.jQ.css('fontSize').slice(0,-2)+'em',
        marginRight: .1-Math.min(this.jQ.outerWidth(), this.prev.jQ.outerWidth())/+this.jQ.css('fontSize').slice(0,-2)+'em' //1px adjustment very important!
      });
  else if(this.limit && this.cmd === '_')
    this.jQ.css({
      left: '-.25em',
      marginRight: ''
    });
  else if(this.cmd === '^' && this.next && this.next.cmd === '\\sqrt')
    this.jQ.css({
      left: '',
      marginRight: Math.max(-.3, .1-this.jQ.outerWidth()/+this.jQ.css('fontSize').slice(0,-2))+'em'
    }).addClass('limit');
  else
    this.jQ.css({
      left: '',
      marginRight: ''
    });
  return this;
};

LatexCmds.subscript = LatexCmds._ = proto(SupSub, function(replacedFragment)
{
  SupSub.call(this, '_', '<sub></sub>', replacedFragment);
});
LatexCmds.superscript = LatexCmds.supscript = LatexCmds['^'] =
  proto(SupSub, function(replacedFragment)
{
  SupSub.call(this, '^', '<sup></sup>', replacedFragment);
});

function Fraction(replacedFragment)
{
  MathCommand.call(this, '\\frac', undefined, replacedFragment);
  this.jQ.append('<span style="width:0">&nbsp;</span>');
}
Fraction.prototype = new MathCommand;
Fraction.prototype.html_template = [
  '<span class="fraction"></span>',
  '<span class="numerator"></span>',
  '<span class="denominator"></span>'
];

LatexCmds.frac = LatexCmds.fraction = Fraction;

function LiveFraction()
{
  Fraction.apply(this, arguments);
}
LiveFraction.prototype = new Fraction;
LiveFraction.prototype.placeCursor = function(cursor)
{
  if(this.firstChild.isEmpty())
  {
    var prev = this.prev;
    while(prev && !(prev instanceof BinaryOperator || prev instanceof TextBlock
        || prev instanceof BigSymbol)) //lookbehind for operator
      prev = prev.prev;
    if(prev instanceof BigSymbol)
      if(prev.next instanceof SupSub)
      {
        prev = prev.next;
        if(prev.next instanceof SupSub && prev.next.cmd != prev.cmd)
          prev = prev.next;
      }
    if(prev !== this.prev)
    {
      var newBlock = new MathFragment(this.parent, prev, this).blockify();
      newBlock.jQ = this.firstChild.jQ.empty().removeClass('empty').append(newBlock.jQ).data('[[mathquill internal data]]', { block: newBlock });
      newBlock.next = this.lastChild;
      newBlock.parent = this;
      this.firstChild = this.lastChild.prev = newBlock;
    }
  }
  cursor.appendTo(this.lastChild);
};

CharCmds['/'] = LiveFraction;

function SquareRoot(replacedFragment)
{
  MathCommand.call(this, '\\sqrt', undefined, replacedFragment);
  this.firstChild.jQ.change(function()
  {
    var block = $(this), height = block.height();
    block.css({
      borderTopWidth: height/30+1 // NOTE: Formula will need to change if our font isn't Symbola
    }).prev().css({
      fontSize: height/+block.css('fontSize').slice(0,-2)+'em'
    });
  });
}
SquareRoot.prototype = new MathCommand;
SquareRoot.prototype.html_template = [
  '<span><span class="sqrt-prefix">&radic;</span></span>',
  '<span class="sqrt-stem"></span>'
];

LatexCmds.sqrt = SquareRoot;

// Round/Square/Curly/Angle Brackets (aka Parens/Brackets/Braces)
function Bracket(open, close, cmd, end, replacedFragment)
{
  MathCommand.call(this, '\\left'+cmd,
    ['<span><span class="paren">'+open+'</span><span></span><span class="paren">'+close+'</span></span>'],
    replacedFragment);
  this.end = '\\right'+end;
  this.firstChild.jQ.change(function()
  {
    var block = $(this);
    block.prev().add(block.next()).css('fontSize', block.height()/(+block.css('fontSize').slice(0,-2)*1.02)+'em');
  });
}
Bracket.prototype = new MathCommand;
Bracket.prototype.initBlocks = function(replacedFragment)
{
  this.firstChild = this.lastChild =
    (replacedFragment && replacedFragment.blockify()) || new MathBlock;
  this.firstChild.parent = this;
  this.firstChild.jQ = this.jQ.children(':eq(1)')
    .data('[[mathquill internal data]]', {block: this.firstChild})
    .append(this.firstChild.jQ);
};
Bracket.prototype.latex = function()
{
  return this.cmd + this.firstChild.latex() + this.end;
};

LatexCmds.lbrace = CharCmds['{'] = proto(Bracket, function(replacedFragment)
{
  Bracket.call(this, '{', '}', '\\{', '\\}', replacedFragment);
});
LatexCmds.langle = LatexCmds.lang = proto(Bracket, function(replacedFragment)
{
  Bracket.call(this,'&lang;','&rang;','\\langle ','\\rangle ',replacedFragment);
});

// Closing bracket matching opening bracket above
function CloseBracket(open, close, cmd, end, replacedFragment)
{
  Bracket.apply(this, arguments);
}
CloseBracket.prototype = new Bracket;
CloseBracket.prototype.placeCursor = function(cursor)
{
  //if I'm at the end of my parent who is a matching open-paren, and I was not passed
  //  a selection fragment, get rid of me and put cursor after my parent
  if(!this.next && this.parent.parent && this.parent.parent.end === this.end && this.firstChild.isEmpty())
    cursor.backspace().insertAfter(this.parent.parent);
  else
    this.firstChild.setEmpty().jQ.change();
};

LatexCmds.rbrace = CharCmds['}'] = proto(CloseBracket, function(replacedFragment)
{
  CloseBracket.call(this, '{','}','\\{','\\}',replacedFragment);
});
LatexCmds.rangle = LatexCmds.rang = proto(CloseBracket, function(replacedFragment)
{
  CloseBracket.call(this,'&lang;','&rang;','\\langle ','\\rangle ',replacedFragment);
});

function Paren(open, close, replacedFragment)
{
  Bracket.call(this, open, close, open, close, replacedFragment);
}
Paren.prototype = Bracket.prototype;

LatexCmds.lparen = CharCmds['('] = proto(Paren, function(replacedFragment)
{
  Paren.call(this, '(', ')', replacedFragment);
});
LatexCmds.lbrack = LatexCmds.lbracket = CharCmds['['] = proto(Paren, function(replacedFragment)
{
  Paren.call(this, '[', ']', replacedFragment);
});

function CloseParen(open, close, replacedFragment)
{
  CloseBracket.call(this, open, close, open, close, replacedFragment);
}
CloseParen.prototype = CloseBracket.prototype;

LatexCmds.rparen = CharCmds[')'] = proto(CloseParen, function(replacedFragment)
{
  CloseParen.call(this, '(', ')', replacedFragment);
});
LatexCmds.rbrack = LatexCmds.rbracket = CharCmds[']'] = proto(CloseParen, function(replacedFragment)
{
  CloseParen.call(this, '[', ']', replacedFragment);
});

function Pipes(replacedFragment)
{
  Paren.call(this, '|', '|', replacedFragment);
}
Pipes.prototype = new Paren;
Pipes.prototype.placeCursor = function(cursor)
{
  if(!this.next && this.parent.parent && this.parent.parent.end === this.end && this.firstChild.isEmpty())
    cursor.backspace().insertAfter(this.parent.parent);
  else
    cursor.appendTo(this.firstChild);
};

LatexCmds.lpipe = LatexCmds.rpipe = CharCmds['|'] = Pipes;

function TextBlock(replacedText)
{
  if(replacedText instanceof MathFragment)
    this.replacedText = replacedText.remove().jQ.text();
  else if(typeof replacedText === 'string')
    this.replacedText = replacedText;
  MathCommand.call(this, '\\text');
}
TextBlock.prototype = $.extend(new MathCommand, {
  html_template: ['<span class="text"></span>'],
  initBlocks: function()
  {
    this.firstChild = this.lastChild =
      this.jQ.data('[[mathquill internal data]]').block = new InnerTextBlock;
    this.firstChild.parent = this;
    this.firstChild.jQ = this.jQ.append(this.firstChild.jQ);
  },
  placeCursor: function(cursor)
  {
    (this.cursor = cursor).appendTo(this.firstChild);
    if(this.replacedText)
      for(var i = 0; i < this.replacedText.length; i += 1)
        this.write(this.replacedText.charAt(i));
  },
  write: function(ch)
  {
    this.cursor.insertNew(new VanillaSymbol(ch));
  },
  keydown: function(e)
  {
    //backspace and delete and ends of block don't unwrap
    if(!this.cursor.selection &&
      ((e.which === 8 && !this.cursor.prev) ||
      (e.which === 46 && !this.cursor.next)))
    {
      if(this.isEmpty())
        this.cursor.insertAfter(this);
      return false;
    }
    return this.parent.keydown(e);
  },
  keypress: function(e)
  {
    this.cursor.deleteSelection();
    var ch = String.fromCharCode(e.which);
    if(ch === '$')
      if(this.isEmpty())
        this.cursor.insertAfter(this).backspace().insertNew(new VanillaSymbol('\\$','$'));
      else if(!this.cursor.next)
        this.cursor.insertAfter(this);
      else if(!this.cursor.prev)
        this.cursor.insertBefore(this);
      else //split apart
      {
        var next = new TextBlock(new MathFragment(this.firstChild, this.cursor.prev));
        next.placeCursor = function(cursor) // ********** REMOVEME HACK **********
        {
          this.prev = null;
          delete this.placeCursor;
          this.placeCursor(cursor);
        };
        next.firstChild.removeEmpty = function(){ return this; };
        this.cursor.insertAfter(this).insertNew(next);
        next.prev = this;
        this.cursor.insertBefore(next);
        delete next.firstChild.removeEmpty;
      }
    else
      this.write(ch);
    return false;
  }
});
function InnerTextBlock(){}
InnerTextBlock.prototype = $.extend(new MathBlock, {
  setEmpty: function(cursor)
  {
    this.jQ.removeClass('hasCursor');
    if(this.isEmpty())
    {
      var textblock = this.parent, cursor = textblock.cursor;
      if(cursor.parent === this)
        this.jQ.addClass('empty');
      else
      {
        cursor.hide();
        textblock.remove();
        if(cursor.next === textblock)
          cursor.next = textblock.next;
        else if(cursor.prev === textblock)
          cursor.prev = textblock.prev;
        cursor.show().jQ.change();
      }
    }
    return this;
  },
  removeEmpty: function()
  {
    this.jQ.addClass('hasCursor');
    if(this.isEmpty())
      this.jQ.removeClass('empty');
    var textblock = this.parent;
    if(textblock.next instanceof TextBlock)
    {
      var innerblock = this, cursor = textblock.cursor,
        next = textblock.next.firstChild;
      next.eachChild(function(){
        this.parent = innerblock;
        this.jQ.appendTo(innerblock.jQ);
      });
      next.firstChild.prev = this.lastChild;
      if(this.lastChild)
        this.lastChild.next = next.firstChild;
      else
        this.firstChild = next.firstChild;
      this.lastChild = next.lastChild;
      next.parent.remove();
      if(cursor.prev)
        cursor.insertAfter(cursor.prev);
      else
        cursor.prependTo(this);
      this.jQ.change();
      return false;
    }
    else if(textblock.prev instanceof TextBlock)
    {
      var cursor = textblock.cursor;
      if(cursor.prev)
        textblock.prev.firstChild.removeEmpty();
      else
        cursor.appendTo(textblock.prev.firstChild);
      return false;
    }

    return true;
  }
});

LatexCmds.text = CharCmds.$ = TextBlock;

// input box to type a variety of LaTeX commands beginning with a backslash
function LatexCommandInput(replacedFragment)
{
  MathCommand.call(this, '\\');
  if(replacedFragment)
  {
    this.replacedFragment = replacedFragment.detach();
    this.isEmpty = function(){ return false; };
  }
}
LatexCommandInput.prototype = $.extend(new MathCommand, {
  html_template: ['<span class="latex-command-input"></span>'],
  placeCursor: function(cursor)
  {
    this.cursor = cursor.appendTo(this.firstChild);
    if(this.replacedFragment)
      this.jQ = this.jQ.add(this.replacedFragment.jQ.addClass('blur').insertBefore(this.jQ));
  },
  latex: function()
  {
    return '\\' + this.firstChild.latex() + ' ';
  },
  keydown: function(e)
  {
    if(e.which === 9 || e.which === 13) //tab or enter
    {
      this.renderCommand();
      return false;
    }
    return this.parent.keydown(e);
  },
  keypress: function(e)
  {
    var ch = String.fromCharCode(e.which);
    if(ch.match(/[a-z]/i))
    {
      this.cursor.deleteSelection();
      this.cursor.insertNew(new VanillaSymbol(ch));
      return false;
    }
    this.renderCommand();
    if(ch === ' ' || (ch === '\\' && this.firstChild.isEmpty()))
      return false;
    return this.cursor.parent.keypress(e);
  },
  renderCommand: function()
  {
    this.jQ = this.jQ.last();
    this.remove();
    if(this.next)
      this.cursor.insertBefore(this.next);
    else
      this.cursor.appendTo(this.parent);
    var latex = this.firstChild.latex(), cmd;
    if(latex)
      if(cmd = LatexCmds[latex])
        cmd = new cmd(this.replacedFragment, latex);
      else
      {
        cmd = new TextBlock(latex);
        cmd.firstChild.removeEmpty = function(){ delete this.removeEmpty; return true; };
        this.cursor.insertNew(cmd).insertAfter(cmd);
        if(this.replacedFragment)
          this.replacedFragment.remove();
        return;
      }
    else
      cmd = new VanillaSymbol('\\backslash ','\\');
    this.cursor.insertNew(cmd);
    if(cmd instanceof Symbol && this.replacedFragment)
      this.replacedFragment.remove();
  }
});

CharCmds['\\'] = LatexCommandInput;
  
function Binomial(replacedFragment)
{
  MathCommand.call(this, '\\binom', undefined, replacedFragment);
  this.jQ.wrapInner('<span class="array"></span>').prepend('<span class="paren">(</span>').append('<span class="paren">)</span>');
  this.firstChild.jQ.parent().change(function()
  {
    var block = $(this);
    block.prev().add(block.next()).css('fontSize', block.height()/(+block.css('fontSize').slice(0,-2)*.9+2)+'em');
  });
}
Binomial.prototype = new MathCommand;
Binomial.prototype.html_template =
  ['<span></span>', '<span></span>', '<span></span>'];

LatexCmds.binom = LatexCmds.binomial = Binomial;

function Choose()
{
  Binomial.apply(this, arguments);
}
Choose.prototype = new Binomial;
Choose.prototype.placeCursor = LiveFraction.prototype.placeCursor;

LatexCmds.choose = Choose;

function Vector(replacedFragment)
{
  MathCommand.call(this, '\\vector', undefined, replacedFragment);
}
Vector.prototype = new MathCommand;
Vector.prototype.html_template =
  ['<span class="array"></span>', '<span></span>'];
Vector.prototype.latex = function()
{
  return '\\begin{matrix}' + this.reduceChildren(function(initValue){
    initValue.push(this.latex());
    return initValue;
  }, []).join('\\\\') + '\\end{matrix}';
};
Vector.prototype.placeCursor = function(cursor)
{
  this.cursor = cursor.appendTo(this.firstChild);
};
Vector.prototype.keydown = function(e)
{
  var currentBlock = this.cursor.parent;
  if(currentBlock.parent === this)
    if(e.which === 13) //enter
    {
      var newBlock = new MathBlock;
      newBlock.parent = this;
      newBlock.jQ = $('<span></span>').data('[[mathquill internal data]]', {block: newBlock}).insertAfter(currentBlock.jQ);
      if(currentBlock.next)
        currentBlock.next.prev = newBlock;
      else
        this.lastChild = newBlock;
      newBlock.next = currentBlock.next;
      currentBlock.next = newBlock;
      newBlock.prev = currentBlock;
      this.cursor.appendTo(newBlock);
      this.jQ.change();
      return false;
    }
    else if(e.which === 9 && !e.shiftKey && !currentBlock.next) //tab
    {
      if(currentBlock.isEmpty())
        if(currentBlock.prev)
        {
          this.cursor.insertAfter(this);
          delete currentBlock.prev.next;
          this.lastChild = currentBlock.prev;
          currentBlock.jQ.remove();
          this.jQ.change();
          return false;
        }
        else
          return this.parent.keydown(e);

      var newBlock = new MathBlock;
      newBlock.parent = this;
      newBlock.jQ = $('<span></span>').data('[[mathquill internal data]]', {block: newBlock}).appendTo(this.jQ);
      this.lastChild = newBlock;
      currentBlock.next = newBlock;
      newBlock.prev = currentBlock;
      this.cursor.appendTo(newBlock);
      this.jQ.change();
      return false;
    }
    else if(e.which === 8) //backspace
      if(currentBlock.isEmpty())
      {
        if(currentBlock.prev)
        {
          this.cursor.appendTo(currentBlock.prev)
          currentBlock.prev.next = currentBlock.next;
        }
        else
        {
          this.cursor.insertBefore(this);
          this.firstChild = currentBlock.next;
        }
        if(currentBlock.next)
          currentBlock.next.prev = currentBlock.prev;
        else
          this.lastChild = currentBlock.prev;
        currentBlock.jQ.remove();
        if(this.isEmpty())
          this.cursor.deleteForward();
        else
          this.jQ.change();
        return false;
      }
      else if(!this.cursor.prev)
        return false;
  return this.parent.keydown(e);
};

LatexCmds.vector = Vector;
/**********************************
 * Symbols and Special Characters
 *********************************/

function bind(cons) //shorthand for binding arguments to constructor
{
  var args = Array.prototype.slice.call(arguments, 1);

  return proto(cons, function()
  {
    cons.apply(this, args);
  });
}

LatexCmds.f = bind(Symbol, 'f', '<var class="florin">&fnof;</var>');

function Variable(ch, html)
{
  Symbol.call(this, ch, '<var>'+(html || ch)+'</var>');
}
Variable.prototype = Symbol.prototype;

function VanillaSymbol(ch, html)
{
  Symbol.call(this, ch, '<span>'+(html || ch)+'</span>');
}
VanillaSymbol.prototype = Symbol.prototype;

CharCmds[' '] = bind(VanillaSymbol, '\\:', ' ');

LatexCmds.prime = CharCmds["'"] = bind(VanillaSymbol, "'", '&prime;');

function NonSymbolaSymbol(ch, html) //does not use Symbola font
{
  Symbol.call(this, ch, '<span class="nonSymbola">'+(html || ch)+'</span>');
}
NonSymbolaSymbol.prototype = Symbol.prototype;

LatexCmds['@'] = NonSymbolaSymbol;
LatexCmds['&'] = bind(NonSymbolaSymbol, '\\&', '&');
LatexCmds['%'] = bind(NonSymbolaSymbol, '\\%', '%');

//the following are all Greek to me, but this helped a lot: http://www.ams.org/STIX/ion/stixsig03.html

//lowercase Greek letter variables
LatexCmds.alpha =
LatexCmds.beta =
LatexCmds.gamma =
LatexCmds.delta =
LatexCmds.zeta =
LatexCmds.eta =
LatexCmds.theta =
LatexCmds.iota =
LatexCmds.kappa =
LatexCmds.mu =
LatexCmds.nu =
LatexCmds.xi =
LatexCmds.rho =
LatexCmds.sigma =
LatexCmds.tau =
LatexCmds.chi =
LatexCmds.psi =
LatexCmds.omega = proto(Symbol, function(replacedFragment, latex)
{
  Variable.call(this,'\\'+latex+' ','&'+latex+';');
});

//why can't anybody FUCKING agree on these
LatexCmds.phi = //W3C or Unicode?
  bind(Variable,'\\phi ','&#981;');

LatexCmds.phiv = //Elsevier and 9573-13
LatexCmds.varphi = //AMS and LaTeX
  bind(Variable,'\\varphi ','&phi;');

LatexCmds.epsilon = //W3C or Unicode?
  bind(Variable,'\\epsilon ','&#1013;');

LatexCmds.epsiv = //Elsevier and 9573-13
LatexCmds.varepsilon = //AMS and LaTeX
  bind(Variable,'\\varepsilon ','&epsilon;');

LatexCmds.sigmaf = //W3C/Unicode
LatexCmds.sigmav = //Elsevier
LatexCmds.varsigma = //LaTeX
  bind(Variable,'\\varsigma ','&sigmaf;');

LatexCmds.upsilon = //AMS and LaTeX and W3C/Unicode
LatexCmds.upsi = //Elsevier and 9573-13
  bind(Variable,'\\upsilon ','&upsilon;');

//these aren't even mentioned in the HTML character entity references
LatexCmds.gammad = //Elsevier
LatexCmds.Gammad = //9573-13 -- WTF, right? I dunno if this was a typo in the reference (see above)
LatexCmds.digamma = //LaTeX
  bind(Variable,'\\digamma ','&#989;');

LatexCmds.kappav = //Elsevier
LatexCmds.varkappa = //AMS and LaTeX
  bind(Variable,'\\varkappa ','&#1008;');

LatexCmds.piv = //Elsevier and 9573-13
LatexCmds.varpi = //AMS and LaTeX
  bind(Variable,'\\varpi ','&#982;');

LatexCmds.rhov = //Elsevier and 9573-13
LatexCmds.varrho = //AMS and LaTeX
  bind(Variable,'\\varrho ','&#1009;');

LatexCmds.thetav = //Elsevier and 9573-13
LatexCmds.vartheta = //AMS and LaTeX
  bind(Variable,'\\vartheta ','&#977;');

//Greek constants, look best in un-italicised Times New Roman
LatexCmds.pi = bind(NonSymbolaSymbol,'\\pi ','&pi;');
LatexCmds.lambda = bind(NonSymbolaSymbol,'\\lambda ','&lambda;');

//uppercase greek letters

LatexCmds.Upsilon = //AMS and LaTeX and W3C/Unicode
LatexCmds.Upsi = //Elsevier and 9573-13
  bind(Variable,'\\Upsilon ','&Upsilon;');

LatexCmds.Gamma =
LatexCmds.Delta =
LatexCmds.Theta =
LatexCmds.Lambda =
LatexCmds.Xi =
LatexCmds.Pi =
LatexCmds.Sigma =
LatexCmds.Phi =
LatexCmds.Psi =
LatexCmds.Omega =

//other symbols with the same LaTeX command and HTML character entity reference
LatexCmds.forall = proto(Symbol, function(replacedFragment, latex)
{
  VanillaSymbol.call(this,'\\'+latex+' ','&'+latex+';');
});

function BinaryOperator(cmd, html)
{
  Symbol.call(this, cmd, '<span class="binary-operator">'+html+'</span>');
}
BinaryOperator.prototype = new Symbol; //so instanceof will work

function PlusMinus(cmd, html)
{
  VanillaSymbol.apply(this, arguments);
}
PlusMinus.prototype = new BinaryOperator; //so instanceof will work
PlusMinus.prototype.respace = function()
{
  if(!this.prev)
    this.jQ[0].className = '';
  else if(this.prev instanceof BinaryOperator && this.next && !(this.next instanceof BinaryOperator))
    this.jQ[0].className = 'unary-operator';
  else
    this.jQ[0].className = 'binary-operator';
  return this;
};

LatexCmds['+'] = bind(PlusMinus, '+');
LatexCmds['-'] = bind(PlusMinus, '-', '&minus;');
LatexCmds.pm = LatexCmds.plusmn = LatexCmds.plusminus =
  bind(PlusMinus,'\\pm ','&plusmn;');
LatexCmds.mp = LatexCmds.mnplus = LatexCmds.minusplus =
  bind(PlusMinus,'\\mp ','&#8723;');

CharCmds['*'] = LatexCmds.sdot = LatexCmds.cdot =
  bind(BinaryOperator, '\\cdot ', '&middot;');
//semantically should be &sdot;, but &middot; looks better

LatexCmds['='] = bind(BinaryOperator, '=', '=');
LatexCmds['<'] = bind(BinaryOperator, '<', '&lt;');
LatexCmds['>'] = bind(BinaryOperator, '>', '&gt;');

LatexCmds.notin =
LatexCmds.sim =
LatexCmds.cong =
LatexCmds.equiv =
LatexCmds.times =
LatexCmds.oplus =
LatexCmds.otimes = proto(BinaryOperator, function(replacedFragment, latex)
{
  BinaryOperator.call(this,'\\'+latex+' ','&'+latex+';');
});

LatexCmds.div = LatexCmds.divide = LatexCmds.divides =
  bind(BinaryOperator,'\\div ','&divide;');

LatexCmds.ne = LatexCmds.neq = bind(BinaryOperator,'\\ne ','&ne;');

LatexCmds.ast = LatexCmds.star = LatexCmds.loast = LatexCmds.lowast =
  bind(BinaryOperator,'\\ast ','&lowast;');
  //case 'there4 = // a special exception for this one, perhaps?
LatexCmds.therefor = LatexCmds.therefore =
  bind(BinaryOperator,'\\therefore ','&there4;');

LatexCmds.cuz = // l33t
LatexCmds.because = bind(BinaryOperator,'\\because ','&#8757;');

LatexCmds.prop = LatexCmds.propto = bind(BinaryOperator,'\\propto ','&prop;');

LatexCmds.asymp = LatexCmds.approx = bind(BinaryOperator,'\\approx ','&asymp;');

LatexCmds.lt = bind(BinaryOperator,'<','&lt;');

LatexCmds.gt = bind(BinaryOperator,'<','&gt;');

LatexCmds.le = LatexCmds.leq = bind(BinaryOperator,'\\le ','&le;');

LatexCmds.ge = LatexCmds.geq = bind(BinaryOperator,'\\ge ','&ge;');

LatexCmds.isin = LatexCmds['in'] = bind(BinaryOperator,'\\in ','&isin;');

LatexCmds.ni = LatexCmds.contains = bind(BinaryOperator,'\\ni ','&ni;');

LatexCmds.notni = LatexCmds.niton = LatexCmds.notcontains = LatexCmds.doesnotcontain =
  bind(BinaryOperator,'\\not\\ni ','&#8716;');

LatexCmds.sub = LatexCmds.subset = bind(BinaryOperator,'\\subset ','&sub;');

LatexCmds.sup = LatexCmds.supset = LatexCmds.superset =
  bind(BinaryOperator,'\\supset ','&sup;');

LatexCmds.nsub = LatexCmds.notsub =
LatexCmds.nsubset = LatexCmds.notsubset =
  bind(BinaryOperator,'\\not\\subset ','&#8836;');

LatexCmds.nsup = LatexCmds.notsup =
LatexCmds.nsupset = LatexCmds.notsupset =
LatexCmds.nsuperset = LatexCmds.notsuperset =
  bind(BinaryOperator,'\\not\\supset ','&#8837;');

LatexCmds.sube = LatexCmds.subeq = LatexCmds.subsete = LatexCmds.subseteq =
  bind(BinaryOperator,'\\subseteq ','&sube;');

LatexCmds.supe = LatexCmds.supeq =
LatexCmds.supsete = LatexCmds.supseteq =
LatexCmds.supersete = LatexCmds.superseteq =
  bind(BinaryOperator,'\\supseteq ','&supe;');

LatexCmds.nsube = LatexCmds.nsubeq =
LatexCmds.notsube = LatexCmds.notsubeq =
LatexCmds.nsubsete = LatexCmds.nsubseteq =
LatexCmds.notsubsete = LatexCmds.notsubseteq =
  bind(BinaryOperator,'\\not\\subseteq ','&#8840;');

LatexCmds.nsupe = LatexCmds.nsupeq =
LatexCmds.notsupe = LatexCmds.notsupeq =
LatexCmds.nsupsete = LatexCmds.nsupseteq =
LatexCmds.notsupsete = LatexCmds.notsupseteq =
LatexCmds.nsupersete = LatexCmds.nsuperseteq =
LatexCmds.notsupersete = LatexCmds.notsuperseteq =
  bind(BinaryOperator,'\\not\\supseteq ','&#8841;');


//sum, product, coproduct, integral
function BigSymbol(ch, html)
{
  Symbol.call(this, ch, '<big>'+html+'</big>');
}
BigSymbol.prototype = new Symbol; //so instanceof will work

LatexCmds.sum = LatexCmds.summation = bind(BigSymbol,'\\sum ','&sum;');
LatexCmds.prod = LatexCmds.product = bind(BigSymbol,'\\prod ','&prod;');
LatexCmds.coprod = LatexCmds.coproduct = bind(BigSymbol,'\\coprod ','&#8720;');
LatexCmds.int = LatexCmds.integral = bind(BigSymbol,'\\int ','&int;');



//the canonical sets of numbers
LatexCmds.N = LatexCmds.naturals = LatexCmds.Naturals =
  bind(VanillaSymbol,'\\mathbb{N}','&#8469;');

LatexCmds.P =
LatexCmds.primes = LatexCmds.Primes =
LatexCmds.projective = LatexCmds.Projective =
LatexCmds.probability = LatexCmds.Probability =
  bind(VanillaSymbol,'\\mathbb{P}','&#8473;');

LatexCmds.Z = LatexCmds.integers = LatexCmds.Integers =
  bind(VanillaSymbol,'\\mathbb{Z}','&#8484;');

LatexCmds.Q = LatexCmds.rationals = LatexCmds.Rationals =
  bind(VanillaSymbol,'\\mathbb{Q}','&#8474;');

LatexCmds.R = LatexCmds.reals = LatexCmds.Reals =
  bind(VanillaSymbol,'\\mathbb{R}','&#8477;');

LatexCmds.C =
LatexCmds.complex = LatexCmds.Complex =
LatexCmds.complexes = LatexCmds.Complexes =
LatexCmds.complexplane = LatexCmds.Complexplane = LatexCmds.ComplexPlane =
  bind(VanillaSymbol,'\\mathbb{C}','&#8450;');

LatexCmds.H = LatexCmds.Hamiltonian = LatexCmds.quaternions = LatexCmds.Quaternions =
  bind(VanillaSymbol,'\\mathbb{H}','&#8461;');

//spacing
LatexCmds.quad = LatexCmds.emsp = bind(VanillaSymbol,'\\quad ','    ');
LatexCmds.qquad = bind(VanillaSymbol,'\\qquad ','        ');
/* spacing special characters, gonna have to implement this in LatexCommandInput.prototype.keypress somehow
case ',':
  return new VanillaSymbol('\\, ',' ');
case ':':
  return new VanillaSymbol('\\: ','  ');
case ';':
  return new VanillaSymbol('\\; ','   ');
case '!':
  return new Symbol('\\! ','<span style="margin-right:-.2em"></span>');
*/

//various symbols

LatexCmds.caret = bind(VanillaSymbol,'\\caret ','^');
LatexCmds.underscore = bind(VanillaSymbol,'\\underscore ','_');
LatexCmds.backslash = bind(VanillaSymbol,'\\backslash ','\\');
LatexCmds.vert = bind(VanillaSymbol,'|');
LatexCmds.perp = LatexCmds.perpendicular = bind(VanillaSymbol,'\\perp ','&perp;');
LatexCmds.nabla = LatexCmds.del = bind(VanillaSymbol,'\\nabla ','&nabla;');
LatexCmds.hbar = bind(VanillaSymbol,'\\hbar ','&#8463;');

LatexCmds.AA = LatexCmds.Angstrom = LatexCmds.angstrom =
  bind(VanillaSymbol,'\\text\\AA ','&#8491;');

LatexCmds.ring = LatexCmds.circ = LatexCmds.circle =
  bind(VanillaSymbol,'\\circ ','&#8728;');

LatexCmds.bull = LatexCmds.bullet = bind(VanillaSymbol,'\\bullet ','&bull;');

LatexCmds.setminus = LatexCmds.smallsetminus =
  bind(VanillaSymbol,'\\setminus ','&#8726;');

LatexCmds.not = //bind(Symbol,'\\not ','<span class="not">/</span>');
LatexCmds.neg = bind(VanillaSymbol,'\\neg ','&not;');

LatexCmds.dots = LatexCmds.ellip = LatexCmds.hellip =
LatexCmds.ellipsis = LatexCmds.hellipsis =
  bind(VanillaSymbol,'\\dots ','&hellip;');

LatexCmds.converges =
LatexCmds.darr = LatexCmds.dnarr = LatexCmds.dnarrow = LatexCmds.downarrow =
  bind(VanillaSymbol,'\\downarrow ','&darr;');

LatexCmds.dArr = LatexCmds.dnArr = LatexCmds.dnArrow = LatexCmds.Downarrow =
  bind(VanillaSymbol,'\\Downarrow ','&dArr;');

LatexCmds.diverges = LatexCmds.uarr = LatexCmds.uparrow =
  bind(VanillaSymbol,'\\uparrow ','&uarr;');

LatexCmds.uArr = LatexCmds.Uparrow = bind(VanillaSymbol,'\\Uparrow ','&uArr;');

LatexCmds.to = bind(BinaryOperator,'\\to ','&rarr;');

LatexCmds.rarr = LatexCmds.rightarrow = bind(VanillaSymbol,'\\rightarrow ','&rarr;');

LatexCmds.implies = bind(BinaryOperator,'\\Rightarrow ','&rArr;');

LatexCmds.rArr = LatexCmds.Rightarrow = bind(VanillaSymbol,'\\Rightarrow ','&rArr;');

LatexCmds.gets = bind(BinaryOperator,'\\gets ','&larr;');

LatexCmds.larr = LatexCmds.leftarrow = bind(VanillaSymbol,'\\leftarrow ','&larr;');

LatexCmds.impliedby = bind(BinaryOperator,'\\Leftarrow ','&lArr;');

LatexCmds.lArr = LatexCmds.Leftarrow = bind(VanillaSymbol,'\\Leftarrow ','&lArr;');

LatexCmds.harr = LatexCmds.lrarr = LatexCmds.leftrightarrow =
  bind(VanillaSymbol,'\\leftrightarrow ','&harr;');

LatexCmds.iff = bind(BinaryOperator,'\\Leftrightarrow ','&hArr;');

LatexCmds.hArr = LatexCmds.lrArr = LatexCmds.Leftrightarrow =
  bind(VanillaSymbol,'\\Leftrightarrow ','&hArr;');

LatexCmds.Re = LatexCmds.Real = LatexCmds.real = bind(VanillaSymbol,'\\Re ','&real;');

LatexCmds.Im = LatexCmds.imag =
LatexCmds.image = LatexCmds.imagin = LatexCmds.imaginary = LatexCmds.Imaginary =
  bind(VanillaSymbol,'\\Im ','&image;');

LatexCmds.part = LatexCmds.partial = bind(VanillaSymbol,'\\partial ','&part;');

LatexCmds.inf = LatexCmds.infin = LatexCmds.infty = LatexCmds.infinity =
  bind(VanillaSymbol,'\\infty ','&infin;');

LatexCmds.alef = LatexCmds.alefsym = LatexCmds.aleph = LatexCmds.alephsym =
  bind(VanillaSymbol,'\\aleph ','&alefsym;');

LatexCmds.xist = //LOL
LatexCmds.xists = LatexCmds.exist = LatexCmds.exists =
  bind(VanillaSymbol,'\\exists ','&exist;');

LatexCmds.and = LatexCmds.land = LatexCmds.wedge =
  bind(VanillaSymbol,'\\wedge ','&and;');

LatexCmds.or = LatexCmds.lor = LatexCmds.vee = bind(VanillaSymbol,'\\vee ','&or;');

LatexCmds.o = LatexCmds.O =
LatexCmds.empty = LatexCmds.emptyset =
LatexCmds.oslash = LatexCmds.Oslash =
LatexCmds.nothing = LatexCmds.varnothing =
  bind(BinaryOperator,'\\varnothing ','&empty;');

LatexCmds.cup = LatexCmds.union = bind(VanillaSymbol,'\\cup ','&cup;');

LatexCmds.cap = LatexCmds.intersect = LatexCmds.intersection =
  bind(VanillaSymbol,'\\cap ','&cap;');

LatexCmds.deg = LatexCmds.degree = bind(VanillaSymbol,'^\\circ ','&deg;');

LatexCmds.ang = LatexCmds.angle = bind(VanillaSymbol,'\\angle ','&ang;');


function NonItalicizedFunction(replacedFragment, fn)
{
  Symbol.call(this, '\\'+fn+' ', '<span>'+fn+'</span>');
}
NonItalicizedFunction.prototype = new Symbol;
NonItalicizedFunction.prototype.respace = function()
{
  this.jQ[0].className =
    (this.next instanceof SupSub || this.next instanceof Bracket) ?
    '' : 'non-italicized-function';
};

LatexCmds.ln =
LatexCmds.lg =
LatexCmds.log =
LatexCmds.span =
LatexCmds.proj =
LatexCmds.det =
LatexCmds.dim =
LatexCmds.min =
LatexCmds.max =
LatexCmds.mod =
LatexCmds.lcm =
LatexCmds.gcd =
LatexCmds.gcf =
LatexCmds.hcf =
LatexCmds.lim = NonItalicizedFunction;

(function()
{
  var trig = ['sin', 'cos', 'tan', 'sec', 'cosec', 'csc', 'cotan', 'cot'];
  for(var i in trig)
    LatexCmds[trig[i]] =
    LatexCmds[trig[i]+'h'] =
    LatexCmds['a'+trig[i]] = LatexCmds['arc'+trig[i]] =
    LatexCmds['a'+trig[i]+'h'] = LatexCmds['arc'+trig[i]+'h'] =
      NonItalicizedFunction;
}());
/********************************************
 * Cursor and Selection "singleton" classes
 *******************************************/

/* The main thing that manipulates the Math DOM. Makes sure to manipulate the
HTML DOM to match. */

/* Sort of singletons, since there should only be one per editable math
textbox, but any one HTML document can contain many such textboxes, so any one
JS environment could actually contain many instances. */

//A fake cursor in the fake textbox that the math is rendered in.
function Cursor(root)
{
  this.parent = root;
  var jQ = this.jQ = this._jQ = $('<span class="cursor"></span>');

  //API for the blinking cursor
  function blink(){ jQ.toggleClass('blink'); }
  var intervalId;
  this.show = function()
  {
    this.jQ = this._jQ.removeClass('blink');
    if(intervalId)
      clearInterval(intervalId);
    else if(this.parent.removeEmpty(this.jQ))
      if(this.next)
        if(this.selection && this.selection.prev === this.prev)
          this.jQ.insertBefore(this.selection.jQ);
        else
          this.jQ.insertBefore(this.next.jQ);
      else
        this.jQ.appendTo(this.parent.jQ);
    intervalId = setInterval(blink, 500);
    return this;
  };
  this.hide = function()
  {
    if(intervalId)
      clearInterval(intervalId);
    intervalId = undefined;
    this.jQ.detach();
    this.jQ = $();
    return this;
  };
}
Cursor.prototype = {
  prev: null,
  next: null,
  parent: null,
  insertAt: function(parent, next, prev)
  {
    var p = this.parent;
    this.parent = parent;
    this.next = next;
    this.prev = prev;
    p.setEmpty(); //p.setEmpty may want to know where the cursor is going
  },
  insertBefore: function(el)
  {
    this.insertAt(el.parent, el, el.prev)
    this.parent.jQ.addClass('hasCursor');
    this.jQ.insertBefore(el.jQ.first());
    return this;
  },
  insertAfter: function(el)
  {
    this.insertAt(el.parent, el.next, el);
    this.parent.jQ.addClass('hasCursor');
    this.jQ.insertAfter(el.jQ.last());
    return this;
  },
  prependTo: function(el)
  {
    this.insertAt(el, el.firstChild, null);
    if(el.removeEmpty(this.jQ))
      if(el.parent)
        this.jQ.prependTo(el.jQ);
      else //only root has no parent
        this.jQ.insertAfter(el.textarea);
    return this;
  },
  appendTo: function(el)
  {
    this.insertAt(el, null, el.lastChild);
    if(el.removeEmpty(this.jQ))
      this.jQ.appendTo(el.jQ);
    return this;
  },
  moveLeft: function()
  {
    if(this.selection)
      this.insertBefore(this.selection.prev ? this.selection.prev.next : this.parent.firstChild).clearSelection();
    else
      if(this.prev)
        if(this.prev.lastChild)
          this.appendTo(this.prev.lastChild)
        else
          this.hopLeft();
      else //we're at the beginning of a block
        if(this.parent.prev)
          this.appendTo(this.parent.prev);
        else if(this.parent.parent)
          this.insertBefore(this.parent.parent);
    //otherwise we're at the beginning of the root, so do nothing.
    return this.show();
  },
  moveRight: function()
  {
    if(this.selection)
      this.insertAfter(this.selection.next ? this.selection.next.prev : this.parent.lastChild).clearSelection();
    else
      if(this.next)
        if(this.next.firstChild)
          this.prependTo(this.next.firstChild)
        else
          this.hopRight();
      else //we're at the end of a block
        if(this.parent.next)
          this.prependTo(this.parent.next);
        else if(this.parent.parent)
          this.insertAfter(this.parent.parent);
    //otherwise we're at the end of the root, so do nothing.
    return this.show();
  },
  hopLeft: function()
  {
    this.jQ.insertBefore(this.prev.jQ.first());
    this.next = this.prev;
    this.prev = this.prev.prev;
    return this;
  },
  hopRight: function()
  {
    this.jQ.insertAfter(this.next.jQ.last());
    this.prev = this.next;
    this.next = this.next.next;
    return this;
  },
  write: function(ch)
  {
    if(this.selection)
    {
      //gotta do this before this.selection is mutated by 'new cmd(this.selection)'
      this.prev = this.selection.prev;
      this.next = this.selection.next;
    }

    var cmd;
    if(ch.match(/^[a-eg-zA-Z]$/)) //exclude f because want florin
      cmd = new Variable(ch);
    else if(cmd = CharCmds[ch] || LatexCmds[ch])
      cmd = new cmd(this.selection, ch);
    else
      cmd = new VanillaSymbol(ch);

    if(this.selection)
    {
      if(cmd instanceof Symbol)
        this.selection.remove();
      delete this.selection;
    }

    return this.insertNew(cmd);
  },
  insertNew: function(cmd)
  {
    cmd.parent = this.parent;
    cmd.next = this.next;
    cmd.prev = this.prev;
    if(this.prev)
      this.prev.next = cmd;
    else
      this.parent.firstChild = cmd;
    if(this.next)
      this.next.prev = cmd;
    else
      this.parent.lastChild = cmd;
    cmd.jQ.insertBefore(this.jQ);

    //adjust context-sensitive spacing
    cmd.respace();
    if(this.next)
      this.next.respace();
    if(this.prev)
      this.prev.respace();

    this.prev = cmd;

    cmd.placeCursor(this);

    this.jQ.change();

    return this;
  },
  unwrapParent: function()
  {
    var gramp = this.parent.parent, greatgramp = gramp.parent,
      cursor = this, prev = gramp.prev;

    gramp.eachChild(function()
    {
      if(this.isEmpty())
        return;

      this.eachChild(function()
      {
        this.parent = greatgramp;
        this.jQ.insertBefore(gramp.jQ);
      });
      this.firstChild.prev = prev;
      if(prev)
        prev.next = this.firstChild;
      else
        this.firstChild.parent.firstChild = this.firstChild;

      prev = this.lastChild;
    });
    if(prev)
    {
      prev.next = gramp.next;
      if(prev.next)
        prev.next.prev = prev;
      else
        greatgramp.lastChild = prev;
    }
    else
    {
      greatgramp.firstChild = gramp.next;
      if(gramp.next)
        gramp.next.prev = prev;
      else
        greatgramp.lastChild = prev;
    }

    if(!this.next)
      if(this.prev)
        this.next = this.prev.next;
      else
        while(!this.next)
          if(this.parent = this.parent.next)
            this.next = this.parent.lastChild;
          else
          {
            this.next = gramp.next;
            this.parent = greatgramp;
            break;
          }

    if(this.next)
      this.insertBefore(this.next);
    else
      this.appendTo(greatgramp);

    gramp.jQ.remove();

    if(gramp.prev)
      gramp.prev.respace();
    if(gramp.next)
      gramp.next.respace();
  },
  backspace: function()
  {
    if(this.deleteSelection());
    else if(this.prev)
      if(this.prev.isEmpty())
        this.prev = this.prev.remove().prev;
      else
        this.selectLeft();
    else if(this.parent.parent)
      if(this.parent.parent.isEmpty())
        return this.insertAfter(this.parent.parent).backspace();
      else
        this.unwrapParent();

    if(this.prev)
      this.prev.respace();
    if(this.next)
      this.next.respace();
    this.jQ.change();

    return this;
  },
  deleteForward: function()
  {
    if(this.deleteSelection());
    else if(this.next)
      if(this.next.isEmpty())
        this.next = this.next.remove().next;
      else
        this.selectRight();
    else if(this.parent.parent)
      if(this.parent.parent.isEmpty())
        return this.insertBefore(this.parent.parent).deleteForward();
      else
        this.unwrapParent();

    if(this.prev)
      this.prev.respace();
    if(this.next)
      this.next.respace();
    this.jQ.change();

    return this;
  },
  selectLeft: function()
  {
    if(this.selection)
      if(this.selection.prev === this.prev) //if cursor is at left edge of selection,
      {
        if(this.prev) //then extend left if possible
        {
          this.hopLeft().next.jQ.prependTo(this.selection.jQ);
          this.selection.prev = this.prev;
        }
        else if(this.parent.parent) //else level up if possible
          this.insertBefore(this.parent.parent).selection.levelUp();
      }
      else //else cursor is at right edge of selection, retract left
      {
        this.prev.jQ.insertAfter(this.selection.jQ);
        this.hopLeft().selection.next = this.next;
        if(this.selection.prev === this.prev)
          this.deleteSelection();
      }
    else
      if(this.prev)
        this.hide().hopLeft().selection = new Selection(this.parent, this.prev, this.next.next);
      else //end of a block
        if(this.parent.parent)
          this.hide().insertBefore(this.parent.parent).selection = new Selection(this.parent, this.prev, this.next.next);
  },
  selectRight: function()
  {
    if(this.selection)
      if(this.selection.next === this.next) //if cursor is at right edge of selection,
      {
        if(this.next) //then extend right if possible
        {
          this.hopRight().prev.jQ.appendTo(this.selection.jQ);
          this.selection.next = this.next;
        }
        else if(this.parent.parent) //else level up if possible
          this.insertAfter(this.parent.parent).selection.levelUp();
      }
      else //else cursor is at left edge of selection, retract right
      {
        this.next.jQ.insertBefore(this.selection.jQ);
        this.hopRight().selection.prev = this.prev;
        if(this.selection.next === this.next)
          this.deleteSelection();
      }
    else
      if(this.next)
        this.hide().hopRight().selection = new Selection(this.parent, this.prev.prev, this.next);
      else //end of a block
        if(this.parent.parent)
          this.hide().insertAfter(this.parent.parent).selection = new Selection(this.parent, this.prev.prev, this.next);
  },
  clearSelection: function()
  {
    if(this.show().selection)
    {
      this.selection.clear();
      delete this.selection;
    }
    return this;
  },
  deleteSelection: function()
  {
    if(this.show().selection)
    {
      this.prev = this.selection.prev;
      this.next = this.selection.next;
      this.selection.remove();
      delete this.selection;
      return true;
    }
    else
      return false;
  }
}

function Selection(parent, prev, next)
{
  MathFragment.apply(this, arguments);
}
Selection.prototype = $.extend(new MathFragment, {
  jQinit: function(children)
  {
    return this.jQ = children.wrapAll('<span class="selection"></span>').parent();
      //wrapAll clones, so can't do .wrapAll(this.jQ = $(...));
  },
  levelUp: function()
  {
    this.clear().jQinit(this.parent.parent.jQ);

    this.prev = this.parent.parent.prev;
    this.next = this.parent.parent.next;
    this.parent = this.parent.parent.parent;

    return this;
  },
  clear: function()
  {
    this.jQ.replaceWith(this.jQ.children());
    return this;
  },
  blockify: function()
  {
    this.jQ.replaceWith(this.jQ = this.jQ.children());
    return MathFragment.prototype.blockify.call(this);
  },
  detach: function()
  {
    var block = MathFragment.prototype.blockify.call(this);
    this.blockify = function()
    {
      this.jQ.replaceWith(block.jQ = this.jQ = this.jQ.children());
      return block;
    };
    return this;
  }
});
/*********************************************
 * Root math elements with event delegation.
 ********************************************/

function createRoot(type)
{
  var textbox = type === 'textbox', editable = textbox || type === 'editable';
  return this.each(function()
  {
    var jQ = $(this), contents = jQ.contents().detach(),
      root = new (textbox ? RootTextBlock : RootMathBlock);
    if(!textbox)
      jQ.addClass('mathquill-rendered-math');
    root.jQ = jQ.data('[[mathquill internal data]]', {
      block: root,
      revert: function()
      {
        jQ.empty().unbind('.mathquill')
          .removeClass('mathquill-rendered-math mathquill-editable mathquill-textbox')
          .append(contents);
      }
    });

    var cursor = root.cursor = new Cursor(root);

    root.renderLatex(contents.text());

    if(!editable)
      return;

    var textarea = root.textarea =
      $('<span class="textarea"><textarea></textarea></span>')
        .prependTo(jQ.addClass('mathquill-editable')).children();
    if(textbox)
      jQ.addClass('mathquill-textbox');

    textarea.focus(function(e)
    {
      if(!cursor.parent)
        cursor.appendTo(root);
      cursor.parent.jQ.addClass('hasCursor');
      if(cursor.selection)
        cursor.selection.jQ.removeClass('blur');
      else
        cursor.show();
      e.stopPropagation();
    }
    ).blur(function(e)
    {
      cursor.hide().parent.setEmpty();
      if(cursor.selection)
        cursor.selection.jQ.addClass('blur');
      e.stopPropagation();
    });

    var lastKeydnEvt; //see Wiki page "Keyboard Events"
    jQ.bind('keydown.mathquill',function(e) //see Wiki page "Keyboard Events"
    {
      lastKeydnEvt = e;
      e.happened = true;
      return e.returnValue = cursor.parent.keydown(e) ||
        (e.stopImmediatePropagation(), false);
    }
    ).bind('keypress.mathquill',function(e)
    {
      //on auto-repeated key events, keypress may get triggered but not keydown
      //  (see Wiki page "Keyboard Events")
      if(lastKeydnEvt.happened)
        lastKeydnEvt.happened = false;
      else
        lastKeydnEvt.returnValue = cursor.parent.keydown(lastKeydnEvt);
      //only call keypress if keydown returned true
      return lastKeydnEvt.returnValue && (e.ctrlKey || e.metaKey || e.which < 32 ||
        cursor.parent.keypress(e) || (e.stopImmediatePropagation(), false));
    }
    ).bind('click.mathquill',function(e)
    {
      var clicked = $(e.target);
      if(clicked.hasClass('empty'))
      {
        cursor.clearSelection().prependTo(clicked.data('[[mathquill internal data]]').block);
        return false;
      }

      var cmd = clicked.data('[[mathquill internal data]]');
      if(cmd)
      {
        if(cmd.cmd && !cmd.block)
        {
          cursor.clearSelection();
          if(clicked.outerWidth() > 2*(e.pageX - clicked.offset().left))
            cursor.insertBefore(cmd.cmd);
          else
            cursor.insertAfter(cmd.cmd);
          return false;
        }
      }
      else if(!(cmd = (clicked = clicked.parent()).data('[[mathquill internal data]]')))
          return;

      cursor.clearSelection();
      if(cmd.cmd)
        cursor.insertAfter(cmd.cmd);
      else
        cursor.appendTo(cmd.block);
      //move cursor to position closest to click
      var prevPrevDist, prevDist, dist = cursor.jQ.offset().left - e.pageX;
      do
      {
        cursor.moveLeft();
        prevPrevDist = prevDist;
        prevDist = dist;
        dist = Math.abs(cursor.jQ.offset().left - e.pageX);
      }
      while(dist <= prevDist && dist != prevPrevDist);
      if(dist != prevPrevDist)
        cursor.moveRight();

      return false;
    }
    ).bind('click.mathquill',function()
    {
      textarea.focus();
    }
    ).bind('focus.mathquill blur.mathquill',function(e)
    {
      textarea.trigger(e);
    }
    ).blur();
  });
}

function RootMathBlock(){}
RootMathBlock.prototype = $.extend(new MathBlock, {
  latex: function()
  {
    return MathBlock.prototype.latex.call(this).replace(/(\\[a-z]+) (?![a-z])/ig,'$1');
  },
  renderLatex: function(latex)
  {
    latex = latex.match(/\\[a-z]*|[^\s]/ig);
    this.jQ.children(':not(.textarea)').remove();
    this.firstChild = this.lastChild = null;
    this.cursor.show().appendTo(this);
    if(latex)
      (function recurse(cursor)
      {
        while(latex.length)
        {
          var token = latex.shift(); //pop first item
          if(!token || token === '}')
            return;
          var cmd;
          if(token === '\\text')
          {
            var text = latex.shift();
            if(text === '{')
            {
              text = token = latex.shift();
              while(token !== '}')
              {
                if(token === '\\') //skip tokens immediately following backslash
                  text += token = latex.shift();
                text += token = latex.shift();
              }
              text = text.slice(0,-1); //cut trailing '}'
            }
            cmd = new TextBlock(text);
            cursor.insertNew(cmd).insertAfter(cmd);
            continue;
          }
          else if(token === '\\left' || token === '\\right') //REMOVEME HACK for parens
          {
            token = latex.shift();
            if(token === '\\')
              token = latex.shift();
            cursor.write(token);
            cmd = cursor.prev || cursor.parent.parent;
            if(cursor.prev)
              return;
            else
              latex.unshift('{');
          }
          else if(/^\\[a-z]+$/i.test(token))
          {
            token = token.slice(1);
            var cmd = LatexCmds[token];
            if(cmd)
              cursor.insertNew(cmd = new cmd(undefined, token));
            else
            {
              cmd = new TextBlock(token);
              cursor.insertNew(cmd).insertAfter(cmd);
              continue;
            }
          }
          else
          {
            if(token.match(/[a-eg-zA-Z]/)) //exclude f because want florin
              cmd = new Variable(token);
            else if(cmd = LatexCmds[token])
              cmd = new cmd;
            else
              cmd = new VanillaSymbol(token);
            cursor.insertNew(cmd);
          }
          cmd.eachChild(function()
          {
            cursor.appendTo(this);
            var token = latex.shift();
            if(!token)
              return false;
            if(token === '{')
              recurse(cursor);
            else
              cursor.write(token);
          });
          cursor.insertAfter(cmd);
        }
      }(this.cursor));
    this.cursor.hide();
    this.setEmpty();
  },
  keydown: function(e)
  {
    this.skipKeypress = false;
    e.ctrlKey = e.ctrlKey || e.metaKey;
    switch((e.originalEvent && e.originalEvent.keyIdentifier) || e.which)
    {
    case 8: //backspace
    case 'Backspace':
    case 'U+0008':
      if(e.ctrlKey)
        while(this.cursor.prev)
          this.cursor.backspace();
      else
        this.cursor.backspace();
      return false;
    case 27: //esc does something weird in keypress, may as well be the same as tab
             //  until we figure out what to do with it
    case 'Esc':
    case 'U+001B':
    case 9: //tab
    case 'Tab':
    case 'U+0009':
      if(e.ctrlKey)
        return true;
      var parent = this.cursor.parent, gramp = parent.parent;
      if(e.shiftKey) //shift+Tab = go one block left if it exists, else escape left.
      {
        if(!gramp) //cursor is in the root, continue default
          return this.skipKeypress = true;
        else if(parent.prev) //go one block left
          this.cursor.appendTo(parent.prev);
        else //get out of the block
          this.cursor.insertBefore(gramp);
      }
      else //plain Tab = go one block right if it exists, else escape right.
      {
        if(!gramp) //cursor is in the root, continue default
          return this.skipKeypress = true;
        else if(parent.next) //go one block right
          this.cursor.prependTo(parent.next);
        else //get out of the block
          this.cursor.insertAfter(gramp);
      }
      this.cursor.clearSelection();
      return false;
    case 13: //enter
    case 'Enter':
      e.preventDefault();
      return this.skipKeypress = true;
    case 35: //end
    case 'End':
      if(e.shiftKey)
        while(this.cursor.next || (e.ctrlKey && this.cursor.parent.parent))
          this.cursor.selectRight();
      else //move to the end of the root block or the current block.
        this.cursor.clearSelection().appendTo(e.ctrlKey ? this : this.cursor.parent);
      return false;
    case 36: //home
    case 'Home':
      if(e.shiftKey)
        while(this.cursor.prev || (e.ctrlKey && this.cursor.parent.parent))
          this.cursor.selectLeft();
      else //move to the start of the root block or the current block.
        this.cursor.clearSelection().prependTo(e.ctrlKey ? this : this.cursor.parent);
      return false;
    case 37: //left
    case 'Left':
      if(e.ctrlKey)
        return true;
      if(e.shiftKey)
        this.cursor.selectLeft();
      else
        this.cursor.moveLeft();
      return false;
    case 38: //up
    case 'Up':
      if(e.ctrlKey)
        return true;
      if(e.shiftKey)
        if(this.cursor.prev)
          while(this.cursor.prev)
            this.cursor.selectLeft();
        else
          this.cursor.selectLeft();
      else if(this.cursor.parent.prev)
        this.cursor.clearSelection().appendTo(this.cursor.parent.prev);
      else if(this.cursor.prev)
        this.cursor.clearSelection().prependTo(this.cursor.parent);
      else if(this.cursor.parent.parent)
        this.cursor.clearSelection().insertBefore(this.cursor.parent.parent);
      return false;
    case 39: //right
    case 'Right':
      if(e.ctrlKey)
        return true;
      if(e.shiftKey)
        this.cursor.selectRight();
      else
        this.cursor.moveRight();
      return false;
    case 40: //down
    case 'Down':
      if(e.ctrlKey)
        return true;
      if(e.shiftKey)
        if(this.cursor.next)
          while(this.cursor.next)
            this.cursor.selectRight();
        else
          this.cursor.selectRight();
      else if(this.cursor.parent.next)
        this.cursor.clearSelection().prependTo(this.cursor.parent.next);
      else if(this.cursor.next)
        this.cursor.clearSelection().appendTo(this.cursor.parent);
      else if(this.cursor.parent.parent)
        this.cursor.clearSelection().insertAfter(this.cursor.parent.parent);
      return false;
    case 46: //delete
    case 'Del':
    case 'U+007F':
      if(e.ctrlKey)
        while(this.cursor.next)
          this.cursor.deleteForward();
      else
        this.cursor.deleteForward();
      return false;
    case 65: //'a' character, as in Select All
    case 'A':
    case 'U+0041':
      if(!e.ctrlKey || e.shiftKey || e.altKey)
        return true;
      if(this.parent) //so not stopPropagation'd at RootMathCommand
        return this.parent.keydown(e);
      this.cursor.clearSelection().appendTo(this);
      while(this.cursor.prev)
        this.cursor.selectLeft();
      return false;
    default:
      return true;
    }
  },
  keypress: function(e)
  {
    if(this.skipKeypress)
      return true;
    this.cursor.show().write(String.fromCharCode(e.which));
    return false;
  }
});

function RootMathCommand(cursor)
{
  MathCommand.call(this, '$');
  this.firstChild.cursor = cursor;
  this.firstChild.keypress = function(e)
  {
    if(this.skipKeypress)
      return true;
    var ch = String.fromCharCode(e.which);
    if(ch === '$' && cursor.parent == this)
    {
      if(this.isEmpty())
        cursor.insertAfter(this.parent).backspace().insertNew(new VanillaSymbol('\\$','$')).show();
      else if(!cursor.next)
        cursor.insertAfter(this.parent);
      else if(!cursor.prev)
        cursor.insertBefore(this.parent);
      else
        cursor.show().write(ch);
      return false;
    }
    cursor.show().write(ch);
    return false;
  };
}
RootMathCommand.prototype = $.extend(new MathCommand, {
  html_template: ['<span class="mathquill-rendered-math"></span>'],
  initBlocks: function()
  {
    this.firstChild = this.lastChild =
      this.jQ.data('[[mathquill internal data]]').block = new RootMathBlock;
    this.firstChild.parent = this;
    this.firstChild.jQ = this.jQ;
  }
});

function RootTextBlock(){}
RootTextBlock.prototype = $.extend(new MathBlock, {
  renderLatex: $.noop,
  keydown: RootMathBlock.prototype.keydown,
  keypress: function(e)
  {
    if(this.skipKeypress)
      return true;
    this.cursor.deleteSelection();
    var ch = String.fromCharCode(e.which);
    if(ch === '$')
      this.cursor.insertNew(new RootMathCommand(this.cursor));
    else
      this.cursor.insertNew(new VanillaSymbol(ch));
    return false;
  }
});
/*********************************************************
 * The actual jQuery plugin and document ready handlers.
 ********************************************************/

//The publicy exposed method of jQuery.prototype, available (and meant to be
//called) on jQuery-wrapped HTML DOM elements.
$.fn.mathquill = function(cmd, latex)
{
  switch(cmd)
  {
  case 'redraw':
    this.find(':not(:has(:first))').change();
    return this;
  case 'revert':
    return this.each(function()
    {
      var mathObj = $(this).data('[[mathquill internal data]]');
      if(mathObj && mathObj.revert)
        mathObj.revert();
    });
  case 'latex':
    if(arguments.length > 1)
      return this.each(function()
      {
        var mathObj = $(this).data('[[mathquill internal data]]');
        if(mathObj && mathObj.block && mathObj.block.renderLatex)
          mathObj.block.renderLatex(latex);
      });
    var mathObj = this.data('[[mathquill internal data]]');
    return mathObj && mathObj.block && mathObj.block.latex();
  case 'html':
    return this.html().replace(/<span class="?cursor( blink)?"?><\/span>|<span class="?textarea"?><textarea><\/textarea><\/span>/ig, '');
  case 'write':
    latex = latex.charAt(0) === '\\' ? latex.slice(1) : latex;
    if(arguments.length > 1)
      return this.each(function()
      {
        var mathObj = $(this).data('[[mathquill internal data]]'),
          block = mathObj && mathObj.block, cursor = block && block.cursor;
        if(cursor)
        {
          cursor.show().write(latex);
          block.textarea.triggerHandler('blur');
        }
      });
  default:
    return createRoot.call(this, cmd);
  }
};

//on document ready, mathquill-ify all `<tag class="mathquill-*">latex</tag>`
//elements according to their CSS class.
/*$(function()
{
  $('.mathquill-embedded-latex').mathquill();
  $('.mathquill-editable').mathquill('editable');
  $('.mathquill-textbox').mathquill('textbox');
});*/

}(jQuery));eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('J iW(1S,7g){e=1o.E;2c=1o.3V;if(!1S){D"0"}Q if(1S==2c){D"π"}Q if(1S==e){D"e"}Q if(1S%(2c/4)==0){D(1S/2c)+"π"}Q if(1S%(1/3)==0){D(1S*3)+"/3"}Q if(1S%(e/4)==0){D(1S/e)+"e"}Q if(1S!=1){if((1z(1S))%1==0){q 4R=1z(1S);q 9k="⁰¹²³⁴⁵⁶⁷⁸⁹";D"e"+((3H(4R)<10)?((4R<0?"⁻":"")+9k[3H(4R)]):"^"+4R)}}if(7g===1E){D 1S.1p()}if(1S.9j){if(1o.3H(1S)<0.iV){D"0.iU"}D 1S.9j(7g)}D 1S}J 5T(){q s="";1i(q i=0;i<20;i++){s+=(~~(1o.3G()*16)).1p(16)}D s}q c=iT;q G=6.iS-11;q 7o=5.iR;q iQ=7.iP;q iO=1.iN;q iM=9i;q 7n=9i;q h=6.iL-34;q 8Z=1.iK;q e=1o.E;q 2c=1o.3V;q 5X=(1+1o.2O(5))/2;q iJ=8.iI-12;q en=["iH iG","iF","iE","iD","iC","iB","iA","iz","iy","ix","iw","iv","iu","ir","iq","ip","io","il","ik","ij","ii","ih","ie","ic","ib","i9","i8","i7","i6","i5","i4","i3","i2","i1","i0","hZ","hY","hX","hW","hV","hU","hT","hS","hR","hQ","hP","hO","hN","hM","hL","hK","hJ","hI","hH","hG","hF","hE","hD","hC","hB","hA","hz","hy","hx","hw","hv","hu","ht","hs","hr","hq","hp","ho","hn","hm","hl","hk","hj","hi","hh","hg","hf","he","hd","hc","hb","ha","h9","h8","h7","h6","h5","h4","h3","h2","h1","h0","gZ","gY","gX","gW","gV","gU","gT","gS","gR","gQ","gP","gO","gN","gM","gL"];q M=[0.0,1.gK,4.gJ,6.gI,9.gH,10.gG,12.gF,14.gE,15.9h,18.9h,20.gD,22.gC,24.gB,26.gA,28.gz,30.gy,32.gx,35.gw,39.gv,39.gu,40.gs,44.gr,47.gq,50.gp,51.gn,54.gm,55.gl,58.gk,58.gj,63.gi,65.38,69.gh,72.64,74.gf,78.96,79.gd,83.gc,85.gb,87.62,88.ga,91.g9,92.g8,95.96,98,g7.g6,g5.g4,g3.42,g2.g1,g0.fZ,fY.fX,fW.71,fV.76,fU.6,fT.fS,fR.fQ,fP.fO,fN.fM,fL.fK,9g.fJ,9g.fI,fH.fG,fF,fE.36,fD.fC,fB.25,fz.fy,fx.fw,fv.fu,ft.9b,fs.fr,fq.fp,fo.fm,fl.49,fk.fj,fi.84,fh.9e,fg.23,9f.fe,9f.fd,fc.fb,fa.59,f9.f8,9e.2,f7.f6,9d,9d,f5,f4,f3,f2,f1.f0,eZ.eY,eX.eW,eV,eU,eT,9c,9c,eS,eR,eQ,eP,9b,99,eO,99,eN,eM,eL,eK,eJ,eI];q 7f=["eH","H","eG","eF","eD","B","C","N","O","F","eC","eB","eA","ez","ey","P","S","ew","ev","K","eu","et","es","V","er","ep","eo","em","el","ek","ej","ei","eh","eg","ef","ee","ed","ec","ea","Y","e9","e8","e7","97","e6","e5","e4","e3","e2","e1","e0","dZ","97","I","dY","dX","dW","dV","dU","dT","dS","dR","dQ","dP","dO","dN","dM","dL","dK","dJ","dI","dH","dG","dF","W","dE","dD","dC","dB","dA","dz","dw","dv","du","dt","ds","dr","dq","dp","do","dn","dm","U","dl","dk","dj","di","dh","dg","df","de","dd","8J","dc","db","da","d9","d8","d7","d6","d5","d4"];1i(q 2s=0;2s<7f.19;2s++){1N[7f[2s]]=M[2s]}q 2k=1o.2k;q 2Q=1o.2Q;q 2U=1o.2U;q 6J=1o.2U;q 2Y=1o.2Y;q 1z=1o.1z;q 2V=1o.1z;q 3H=1o.3H;q 4G=1o.4G;q 4H=1o.4H;q 5w=1o.5w;q 5u=1o.5u;q 5v=1o.5v;q 4J=1o.4J;q 5t=1o.5t;q 4K=1o.4K;q 3G=1o.3G;q 4C=1o.4C;q 2O=1o.2O;q 1x=1o.1x;J d3(n,x){D 1x(2k(x),n)}J d2(n,x){D 1x(2Q(x),n)}J d1(n,x){D 1x(2U(x),n)}J d0(n,x){D 1x(3Y(x),n)}J cZ(n,x){D 1x(5x(x),n)}J cY(n,x){D 1x(4L(x),n)}J cX(n,x){D 1x(1z(x),n)}J cW(n,x){D 1x(2V(x),n)}J cV(b,v){D 2V(v)/2V(b)}J u(x){D(x>=0)?(x?1:0.5):(0)}J 4I(x){if(x==0){D 4a}D 0}J 6K(x){D 2*u(x)-1}J cU(94,93,4b){if(94){D 93}D 4b}J 6M(x){if(x===0){D 1}D 2k(2c*x)/(2c*x)}J 5x(x){D 1/(2Q(x))}J 4L(x){D 1/(2k(x))}J 3Y(x){D 1/(2U(x))}q cT=3Y;q cS=3Y;q 6N=4L;q 7e=[1,1,2,5,15,52,cR,cQ,cP,cO,cN,cM,cL,cK,cJ,cI,cH,cG,cF,cE,cD,cC,cB];J 8Y(x){if(x===0){D-0.5}Q if(x==1){D 4a}Q if(x==2){D 2c*2c/6}Q if(x==4){D 2c*2c*2c*2c/90}Q if(x<1){D 4a}q 1g=4.4*1x(x,-5.1);1i(q 5P=1;5P<10;5P++){1g+=1x(5P,-x)}D 1g}J 2T(x){if(x>1.0){D(2Y(x*(2V(x)-1)+0.5*(-2V(x)+8Z)+1/ (12 * x) - 1 /(cA*(x*x*x))+1/ (cw * 1x(x, 5)) - 1 /(cv*1x(x,7))))}if(x>-0.5){D(1.0+0.cu*x+0.ct*1x(x,2))/(x+0.cs*1x(x,2)-0.cr*1x(x,3))}if(x<0){if(x==~~x){D}Q{D 1o.3V/(1o.2k(1o.3V*x)*2T((1-x)))}}Q{D 1x(x-1,x-1)*1o.2O(2*1o.3V*(x-1))*2Y(1-x+1/ (12 * (x - 1) + 2 /(5*(x-1)+53/(42*(x-1)))))}}J 7c(x){D 3G()}Γ=2T;ψ=7c;J 3c(ff){if(ff===0||ff==1){D 1}Q if(ff>0&&ff==~~ff&&ff<15){q s=1;1i(q 5O=1;5O<=ff;5O++){s*=5O}D~~s}Q if(ff!=(~~ff)||ff<0){D 2T(ff+1)}}J 6L(x){if(x==~~x&&x<7e.19){D 7e[x]}Q{q 1g=0;1i(q 4Q=0;4Q<5;4Q++){1g+=1x(4Q,x)/3c(4Q)}D 1g/e}}q 4e=0;J 7d(ia,5N,x){4e++;q 1B;if(4e>8){4e-=1;D 0}q h=0.7T;if(5N>0){1B=(7d(ia,5N-1,x+h)-7d(ia,5N-1,x-h))/(2*h);4e-=1;D 1B}1B=g[ia](x);4e-=1;D 1B}q 4l={\'gt\':">","1k(":"(","1b)":")","1k[":"[","1b]":"]",\'ge\':">=",\'cq\':"<",\'co\':"<=","cn":"∞","cm":"*","3M":"","cl":"\\\\","ck":"α","cj":"β",\'ci\':"γ",\'4I\':"δ",\'8Y\':"ζ",\'ch\':"η",\'cg\':"θ",\'cf\':"ι",\'ce\':"κ",\'cd\':"μ",\'cc\':"ν",\'cb\':"ξ",\'ca\':"ο",\'c9\':"ρ",\'c8\':"σ",\'c7\':"τ",\'c6\':"υ",\'c5\':"χ",\'7c\':"ψ",\'c4\':"ω",\'5X\':"ϕ","c3":"φ","c2":"φ","c1":"ϵ","c0":"ε","bZ":"ε","bY":"ς","bX":"ς","bW":"ϝ","bV":"ϝ","bU":"ϝ","bT":"ϰ","bS":"ϰ","bR":"ϖ","bQ":"ϖ","bP":"ϱ","bO":"ϱ","bN":"ϑ","bM":"ϑ","2c":"π","5Z":"λ",\'2T\':"Γ",\'bL\':"Δ",\'bK\':"Θ",\'bJ\':"Λ",\'bI\':"Ξ",\'bH\':"Π",\'bG\':"Σ",\'bF\':"Υ",\'bE\':"Φ",\'bD\':"Ψ",\'bC\':"Ω","bB":"⊥",",":" ","bA":"∇","bz":"∀","1g":"∑","by":"∑","bx":"∏","1j":"∏","bw":"∐","bv":"∐","bu":"∫","8X":"∫"};q 1t={};q L={"1j":1,"1g":2,"2P":3,"8K":4,"5J":5,"2M":6,"70":7,"1Y":8,"fn":9,"21":10,"8O":11,"8X":12,"6Q":13,"8z":14};q 3m=0;J 3n(x){D x}q 3l="                     ";q 3a=0;J p(2S){if(1l 2S=="2P"||!2W(2S)){D 1A(2S)}Q if(1l 2S=="1X"){D 2S}if(2S==""||2S===1E){D 0}3n(!3m,0)||1V.1z(3l.1J(0,3a)+"p: "+2S);q eq=[];q e=2S.1y(/\\s/g,"").1y(/\\]/g,")").1y(/\\[/g,"(").1y(/\\)\\(/g,")*(");e=e.1y(/([^\\+\\-\\*\\/\\^\\:\\(\\)])\\(/g,"$1:(");e=e.1y(/\\)([^\\+\\-\\*\\/\\^\\:\\(\\)])/g,")*$1");if(e.1W("=")!=-1){q eq=e.1y("==","[3k][3k]").2G("=").8H(J(e){D e.1y("[3k][3k]","==")});if(eq.19==2){D[p(eq[0]),p(eq[1])].1u(L.6Q)}1K("5I. \'=\' 8G 8F be 8E 8D 8C 4h.");D}2F((e.1W("(")!=-1)&&(e.1W(")")!=-1)){q 7b=1s;e=e.1y(/\\([^\\(\\)]*\\)/g,J(n){7b=1m;q h=5T();1t[h]=p(n.1J(1,n.19-1));D"4c"+h+"4c"});if(7b){1K("8I 43 5m bt");27}}q 1h=[];q 1Q=0;q 8V="+-";q 8U="*/";if(e.1W(",")!=-1){3n(!3m,0)||1V.1z(3l.1J(0,3a)+"f>: "+e);1h.R=L.2M;q be=e.2G(",");be.2h(J(8W){1h.1e(p(8W))})}Q if((e.1W("+")!=-1)||(e.1W("-")!=-1)){3n(!3m,0)||1V.1z(3l.1J(0,3a)+"+>: "+e);1h.R=L.1g;q 3o=1m;1i(q i=0;i<e.19;i++){if(8V.1W(e[i])!=-1){q s=e.1J(1Q,i);if(3o){1h.1e(p(s).2C(-1))}Q{1h.1e(p(s))}if(e[i]=="-"){3o=1s}1Q=i+1}}if(3o){1h.1e(p(e.1J(1Q,e.19)).2C(-1))}Q{1h.1e(p(e.1J(1Q,e.19)))}}Q if((e.1W("*")!=-1)||(e.1W("/")!=-1)){3n(!3m,0)||1V.1z(3l.1J(0,3a)+"*>: "+e);1h.R=L.1j;q 4d=[];4d.R=L.1j;q 3o=1m;1i(q i=0;i<e.19;i++){if(8U.1W(e[i])!=-1){q s=e.1J(1Q,i);if(3o){4d.1e(p(s))}Q{1h.1e(p(s))}if(e[i]=="/"){3o=1s}1Q=i+1}}if(3o){4d.1e(p(e.1J(1Q,e.19)))}Q{1h.1e(p(e.1J(1Q,e.19)))}if(4d.19){1h=[1h,4d];1h.R=L.21}}Q if(e.1W("^")!=-1){3n(!3m,0)||1V.1z(3l.1J(0,3a)+"^>: "+e);1h.R=L.1Y;q be=e.2G("^");if(be.19!=2){1K("^ is a bs br");D}1h.1e(p(be[0]));1h.1e(p(be[1]))}Q if(e.1W(":")!=-1){3n(!3m,0)||1V.1z(3l.1J(0,3a)+"f>: "+e);1h.R=L.fn;q be=e.2G(":");1h.1e(p(be[0]));1h.1e(p(be[1]))}Q if(e.1W("!")!=-1){1h.R=L.1j;q 1Q=0;1i(q i=0;i<e.19;i++){if(e[i]=="!"){q s=e.1J(1Q,i);if(s==""){1h[1h.19-1]=["3c",1h[1h.19-1]].1u(L.fn)}Q{1h.1e(["3c",p(s)].1u(L.fn))}1Q=i+1}}q 7a=e.1J(1Q,e.19);if(7a!=""){1h.1e(p(7a))}}Q{q 77=5D;if(!2W(77=1A(e))){D 77}Q if(!/^4c[a-z\\d]{20}4c$/.2g(e)){q 4m=/^([\\d](\\.[\\d])?)([^\\d]+)$/(e);if(4m){1h.R=L.1j;1h.1e(p(4m[1]));1h.1e(4m[3])}Q{q 75=e.2G(".");if(75.19>1){1h.R=L.1j;75.2h(J(v){1h.1e(p(v))})}Q{if(0&&e.19>1&&e[0]=="d"){1h.R=L.1j;1h.1e("d");1h.1e(p(e.1J(1)))}Q{1h.R=L.5J;1h.1e(e)}}}}Q{1h.R=L.5J;1h.1e(e)}}1h=1h.1I(/^4c[a-z\\d]{20}4c$/,J(e){D 1t[e.1J(4,24)]});3n(!3m,0)||1V.1z(3l.1J(0,3a)+"@>: "+2Z.5p(1h));3a--;2F(1l 1h=="1X"&&1h.19==1){1h=1h[0]}D 1h.1L()}J bq(fn){if((fn!==1E)&&(1l fn=="J")){q 1d=J(x){D A};1d.R=L.70;1d.f=fn;D 1d}Q{q 1d=[];1d.R=L.2M;1i(q i=0;i<8T.19;i++){1d.1e(p(8T[i]))}D 1d}};1r.17.bp=J(){};1r.17.im=J(){};1r.17.bo=J(o){if(o.R!=L.2M||A.R!=L.2M){1K("I 8S it is 43 a 8R!")}};1r.17.6Z=J(o){if(o.R!=L.2M||A.R!=L.2M){1K("I 8S it is 43 a 8R!")}q s=[];s.R=L.1g;q 8Q=4K(o.19,A.19);1i(q i=0;i<8Q;i++){s.1T(A[i].2C(o[i]))}D s};1r.17.bn=J(){if(A.R==L.2M){D A.6Z(A.73()).1x((0.5))}Q{D A.2C(A.73()).1x((0.5))}};1r.17.73=J(){D A;D A.1I(/i/g,p("-i"))};1A.17.2R=J(x){D A==x};1D.17.2R=J(x){D A==x};1r.17.2R=J(x){q 3y=1m;1i(q i=0;i<A.19;i++){if(A[i].2R(x)){D 1s}}D 1m};1D.17.1I=J(a,b){if(a.2g&&a.2g(A.1p())){D b}if(A.1p()===a){D b}D A.1p()};1A.17.1I=J(a,b){if(A===a){D b}D A};1r.17.1I=J(a,b){q cp=[];A.2h(J(i){if(1l i=="1U"){if(a.2g){if(a.2g(i)){if(1l b=="J"){cp.1e(b(i))}Q{cp.1e(b.1I(a,b))}}Q{cp.1e(i)}}Q{if(1l a=="1U"){cp.1e(i.1I(a,b))}}}Q{cp.1e(i.1I(a,b))}});cp.R=A.R;D cp};1A.17.3I=J(o){q 1j=[A,p(o)];1j.R=L.21;D 1j};1D.17.3I=J(o){q 1j=[];1j.R=L.21;1j.1e(p(A.1p()));1j.1e(p(o));D 1j};1r.17.3I=J(o){if(A.R==L.21){A[1].2C(p(o));D A}q 1j=[A,p(o)];1j.R=L.21;D 1j};1r.17.1Y=J(o){if(A.R==L.1Y){A[1]=A[1].2C(p(o))}D[A,p(o)].1u(L.1Y)}1D.17.1Y=J(o){D[p(A.1p()),p(o)].1u(L.1Y)}1A.17.1Y=J(o){D[A,p(o)].1u(L.1Y)}1r.17.2C=J(o){if(A.R==L.21){A[0].2C(p(o))}q 4b=p(o);if(4b.1G()===0){D 0}if(A.R==L.1j&&4b.R==L.1j){q 1d=A;4b.2h(J(e){1d.1e(e)});D A}Q if(A.R==L.2M||A.R==L.70){D 1d.6Z(o)}q 1g=[A,o];q 5M=A.R;A.1e(A.2r(0,A.19));A[0].R=5M;A.1e(p(o));A.R=L.1j;D A};1D.17.2h=J(e){e(A)};1A.17.2h=J(e){e(A)};1D.17.1T=J(o){if(o==0){D A.1p()}if(A.1p()=="0"){D p(o)}D[p(A.1p())].1u(L.1g).1T(p(o))}1A.17.1T=J(o){if(p(o).1G()==0){D A}q 1g=[p(A),p(o)];1g.R=L.1g;D 1g};1A.17.1G=J(o){D A};1D.17.1G=J(){if(!2W(A.1p())){D 1A(A.1p())}if(1N[A.1p()]){D 1G(A.1p())}D 5D};1r.17.1G=J(){if(A.2p()){D 1G(A.2w(1,1))}Q{D 5D}};1A.17.2C=1D.17.2C=J(o){if(A==0){if(p(o)==4a){D 1E}D 0}if(o==1){D A}if(o==0){D 0}q 1g=[p(A),p(o)];1g.R=L.1j;D 1g};1r.17.1T=J(o){if(A.R==L.1g&&o.R==L.1g){q 1d=A;p(o).2h(J(e){1d.1e(e)});D A}if(A.R==L.1g){A.1e(p(o));D A}q 1g=[A,o];q 5M=A.R;A.1e(A.2r(0,A.19));A[0].R=5M;A.1e(p(o));A.R=L.1g;D A};1r.17.6Y=J(){q 4P=0;1i(q i=0;i<A.19;i++){if(1l A[i]=="1U"){4P+=A[i].19+6}Q if(1l A[i]=="2P"){4P+=5}Q{4P+=A[i].6Y?4+A[i].6Y():A[i].19}}D 4P};1D.17.5K=J(2D){if(2D==L.1g){D"-"+A}Q if(2D==L.1g){D(1).3I(A)}Q if(2D===1E){1K("8P 43 bm")}};1r.17.5K=J(2D){q 3J=[];q 5L=1m;3J.R=A.R||L.1g;if(2D==L.1g){if(3J.R==L.1g){5L=1s}Q if(3J.R==L.1j){5L-1m}}q 6X=1s;A.2h(J(e){if(5L||6X){3J.1e(e.5K(2D));6X=1m}Q{3J.1e(2D)}});D 3J};1A.17.5K=J(2D){if(2D==L.1g){D-A}Q if(2D==L.1j){D 1/A}Q{1K("8y 8P: "+2D)}};1r.17.1u=J(e){A.R=e;D A};1A.17.2j=J(){if(A==4a||A==-4a){D 1E}D 0};1D.17.2j=J(){D 1A(A.1p()=="x")};1r.17.2j=J(2N){2N=2N||1;if(2N<0){D A.6V(-2N)}q 48=[];48.R=L.1g;if(A.2p&&A.2p()){D 0}if(A.R==L.1g){A.2h(J(e){48.1T(e.2j())})}Q if(A.R==L.fn){q 6W;if(6W=8s[A[0]]){D[6W.1I(/x/g,A[1]),A[1].2j()].1u(L.1j).1L()}Q{1K("I bl\'t bk 8N 8O bj 8N "+A[0]+" J!")}D}Q if(A.R==L.21){q a=A[0];q b=A[1];D[[[a.2j(),b].1u(L.1j),[-1,b.2j(),a].1u(L.1j)].1u(L.1g),[b,b].1u(L.1j)].1u(L.21).1L();}Q if(A.R==L.1Y){q a=A[0];q b=A[1];D[[a.2j(),[a,[b,-1].1u(L.1g)].1u(L.1Y),b].1u(L.1j),[["1z",a].1u(L.fn),b.2j(),[a,b].1u(L.1Y)].1u(L.1j)].1u(L.1g).1L()}Q if(A.R==L.1j){q a=A[0];q b=A.5l(1).1u(L.1j);D[[a,b.2j()].1u(L.1j),[b,a.2j()].1u(L.1j)].1u(L.1g).1L()}Q{1K("5I 8M 8L: "+A.R);D}D 48.1L()};1r.17.6V=J(2N){2N=2N||1;if(2N<0){D A.2j(-2N)}q 48=[];48.R=1g;q m;if(A.R!=L.1g){m=p(0);m.R=L.1g;m.1T(A)}Q if(A.R==L.1g){m=A}Q{1K("5I 8M 8L: "+A.R)}m.2h(J(e){m.1e(e.6V(2N))});D m};1D.17.6S=J(){D A.1p()};1D.17.3N=J(){D A.1p()};1A.17.3N=J(){D A};1r.17.3N=J(){D A;q 1b;if(A.R!=L.1g){61("?");1b=[].1u(L.1g).1T(1b)}Q{1b=A}q 37=[];q 4M=[];4M.R=L.1g;q 4N=[];1i(q i=0;i<1b.19;i++){q 46=0;q 4O;1i(q b=0;b<37.19;b++){if(37[b].2w()==1b[i].2w()){4O=b;46=1;27}Q if(1b[i].R==L.1j&&1b[i].19==2){if(1b[i][0]==37[b]){4O=b;46=1b[i][1];27}Q if(1b[i][1]==37[b]){4O=b;46=1b[i][0];27}}}if(46!==0){4N[4O].1T(46)}Q{4N.1e([1].1u(L.1g));37.1e(1b[i])}}1i(q i=0;i<37.19;i++){if(4N[i]==1){4M.1T(37[i])}Q{4M.1T(37[i].2C(4N[i]))}}D 4M};1r.17.bi=1r.17.3N;1r.17.6S=J(){q 6U=0;if(A.R==L.8K||A.R==L.2P){D}Q if(A.R==L.5J){D A}if(!A.2R("x")){1K("8J \'x\' 3y in "+A);D}q 1b=[];if(A.R==L.21){1b.R=L.1j;1b.1e(A[0].1I(/x/g,"y"));1b.1e(p(1).3I(A[1].1I(/x/g,"y")))}Q{1b=A.1I(/x/g,"y")}q 1k=[p("x")];1k.R=1b.R;2F(1){6U++;if(1b.R==L.1j){q 45=1m;1i(q i=0;i<1b.19;i++){if(!1b[i].2R("y")){45=1s;1k=1k.3I(1b.2r(i,1).1u(L.1j));i--}}if(!45){1b=1b.bh("x")}}Q if(1b.R==L.1g){q 45=1m;1i(q i=0;i<1b.19;i++){if(!1b[i].2R("y")){45=1s;1k=1k.1T(1b.2r(i,1).1u(L.1g).2C(-1));i--}}if(!45){1b=1b.3N()}}Q if(1b.R==L.1Y){if(1b[0].2R("y")){1k=p("l^(1/b)").1I(/l/g,1k).1I(/b/g,1b[1]);1b=1b[0]}Q{1k=p("1z(x)").1I(/x/g,1k);1k=1k.3I(p("1z(x)").1I(/x/g,1b[0]));1b=1b[1]}}Q{D"1b.R is bg Q: "+1b.R+": "+1b}2F(1b.19==1){if(1b[0]=="y"){D 1k}1b=1b[0]}if(6U>10){1K("8I 43 bf 1i y: "+1k+"="+1b);D}}D 1k};J 6T(n){1i(q i in 4l){2F(i.19>1&&n.1W("\\\\"+i)!=-1){n=n.1y("\\\\"+i,4l[i])}}D n.1y(/\\}\\{/g,")/(").1y(/\\}/g,"))").1y(/\\{/g,"((").1y(/\\\\/g,"")}J 7A(n){D p(6T(n))}J 5U(n){n=6T(n);1t={};q eq=n.1y("==","[3k][3k]").2G("=").8H(J(e){D e.1y("[3k][3k]","==")});if(eq.19>2){1K("5I. \'=\' 8G 8F be 8E 8D 8C 4h.");D}q 5H,5G;if(eq.19==2){5H=p(eq[0]);q 8B=(5H.1I(/y/g,"x")).6S();5G=(8B.1I(/x/g,p(eq[1]))).go()}Q{5H=p("y");5G=p(eq[0]).go()}q 5E={"f":J(){1K("bd a J")}};q 5F=5G.2w(0,1s);5E.f=1G("("+"J(x){D "+5F+";})");5E.3L=1G("(J(1c){1c.3E();q x=3U;1c.3e(x,"+5F+");1i(q x=3U;x<4B;x+=(4B-3U)/3i){"+"1c.3d(x,"+5F+");}1c.3D();})");D 5E}1D.17.5g=J(){q e=1a.1q("2b");e.1f(1a.1F(A.1p()));D e};1A.17.5g=J(){q e=1a.1q("2b");e.1f(1a.1F(A.1p()));D e};1r.17.5g=J(){q e=1a.1q("2b");e.1f(1a.1F(A.2w()));D e};1D.17.2p=J(){if(A.1p()=="e"){D 2}if(A[0]=="\\""&&A[A.19-1]=="\\""){D 1s}q 8A=!2W(A.1p());if(!8A){if(!1N[A.1p()]){D 1m}}Q{1V.bc("1A in 1U: "+A.1p())}D 1s};1A.17.2p=J(){D 1s};1r.17.2p=J(){1i(q i=0;i<A.19;i++){if(1l A[i]=="2P"){}Q if(A[i].2p){q 1B;if(!(1B=A[i].2p())){D 1B}}Q if(1l A[i]=="1X"){if(!A[i]==5D&&2W(A[i])){D 1m}}}D 1s};1D.17.1L=J(){D A.1p()};1A.17.1L=J(){D A};1A.17.go=J(){D A}1D.17.go=J(){D A.1p()}1D.17.2B=J(x){D 1A(A.1p()==x)}1A.17.2B=J(x){D 1m}1r.17.2B=J(x){if(A.R==L.21){q 1B=0;if(1B=A[0].2B(x)){D 1B}Q if(1B=A[1].2B(x)){D-1B}}Q{q 1B=0 1i(q i=0;i<A.19;i++){if(1B=A[i].2B(x)){D 1B}}}}1r.17.6R=J(){q 1d=A.1L();if(A.R==L.21){if(1d[0]=="d"&&1d[1]=="dx"){D 1}if(1d[0]=="dx"&&1d[1]=="x"){D-1}D 1m}D 1m;if(1d.R==L.21){q 1B;if((1B=(1d[0].2B("d")*(1d[1].2B("dx"))))&&!1d.2R("x")){D 1B}if((1B=(1d[0].2B("dx")*(1d[1].2B("d"))))&&!1d.2R("x")){D-1B}}D 1m}1r.17.go=J(){q 1d=A.1L();if(1d.R==L.1j){q 5C=1m;1i(q i=0;i<1d.19;i++){q 1B;if(1d[i].6R&&(1B=1d[i].6R())){5C=1B;1d.2r(i,1);i--;27}}if(5C==1){D A.1L().2j()}Q if(5C==-1){D 1E}}if(1d.R==L.21){if(1d[0].2B("d")==1&&1d[1].2B("dx")==1){D 1d.1I(/^d$/g,1).1I(/^dx$/g,1).1L().2j()}}Q{1i(q i=0;i<1d.19;i++){if(1d[i].go){1d[i]=1d[i].go()}}}D 1d};1r.17.1L=J(){if(A.2p&&A.2p()===1s){D A.1G()}if(A.R==L.fn){A[1]=A[1].1L();if(A[0]=="1z"&&A[1]=="e"){D 1}D A}if(A.R==L.21){A[0]=A[0].1L();A[1]=A[1].1L()}if(A.R==L.1Y){A[1]=A[1].1L();if(A[1].1G()===1){D A[0]}A[0]=A[0].1L();D A}1i(q i=0;i<A.19;i++){2F(((1l e[i])=="1X")&&A[i].19==1){A[i]=A[i][0]}if(A[i].2p&&A[i].2p()===1s){A[i]=A[i].1G()}Q{A[i]=A[i].1L()}}if(A.R==L.1j){q 33=1;1i(q i=0;i<A.19;i++){q N=A[i].1G();if(!2W(N)){33*=N;A.2r(i,1);i--}}if(33!=1){A.1e(33)}if(33==0){D 0}q 5B=[];1i(q i=0;i<A.19;i++){if((1l A[i]=="1X")&&A[i].R==L.1j){5B.1e(A.2r(i,1)[0]);i--}}if(5B.19){q 1d=A;5B.2h(J(ff){2F(1l ff=="1X"&&ff.19==1){ff=ff[0]}ff.2h(J(gg){2F(1l gg=="1X"&&gg.19==1){ff=ff[0]}1d.1e(gg)})});D 1d}}Q if(A.R==L.1g){q 33=0;1i(q i=0;i<A.19;i++){q N=A[i].1G();if(!2W(N)){33+=N;A.2r(i,1);i--}}if(33!==0){A.1e(33)}}q z=A;2F(1l z=="1X"&&z.19==1){z=z[0]}D z};1D.17.2w=J(){D A.1p()};1A.17.2w=J(){D A.1p()};J 2K(e){D e.1p()}q 6O="2k,2Q,2U,5x,3Y,4L,6N,1z,2Y,1x,2T,6M,2O,W,3c,6L,8w,u,6K,4H,4G,5w,8v,8u,8t,6J,2V,3H,4J,4C,5v,5u,3G,4K,5t,3s,2K,6I,4I".2G(",");1r.17.2w=J(5y,41){q s=5y?"(":"";q 1d=A;q 5A=1s;q 3Z="";q 5z="";q 6P=1s;A.2h(J(e){if(!5A){6P=1m}if(5A){if(41&&1d.R==L.1Y){s+="1x(";3Z=")"}if(!41&&1d.R==L.8z){s+="±"}Q if(5y&&1d.R==L.2M){s+="[";3Z="]"}Q if(1d.R==L.fn){if(1l e!="1U"&&1l e!="J"){1K("J bb is 43 a 1U: "+e);D"8x"}if(6O.1W(e)==-1){1K("8y J: "+e);D"8x"}5z="(";3Z=")"}5A=1m}Q if(1d.R==L.1g){s+="+"}Q if(1d.R==L.1j){s+="*"}Q if(41&&1d.R==L.1Y){s+=","}Q if(1d.R==L.6Q){s+="="}Q if(1d.R==L.1Y){s+="^"}Q if(1d.R==L.21){s+="/"}Q if(1d.R==L.fn){if(6P){s+=","}}Q{s+=","}if(e.R==L.2M){s+=e.2w(0,41)}Q{s+=e.2w(10,41)}s+=5z;5z=""});s+=3Z;3Z="";if(5y){s+=")"}D(s.1y(/(\\-\\-)+/g,"+").1y(/\\+\\++/g,"+").1y(/\\-\\+/g,"-").1y(/\\+\\-/g,"-"))};6O="2k,2Q,2U,5x,3Y,4L,6N,1z,2Y,1x,2T,6M,2O,W,3c,6L,8w,u,6K,4H,4G,5w,8v,8u,8t,6J,2V,3H,4J,4C,5v,5u,3G,4K,5t,3s,2K,6I,4I,Γ,ψ".2G(",");q 8s={"1z":p("1/x"),"2k":p("2Q(x)"),"2Q":p("-2k(x)"),"2U":p("1/(2Q(x)*2Q(x))"),"2Y":p("2Y(x)"),"4J":p("6I(x)"),"u":p("4I(x)"),"2O":p("(x^(-1/2))*0.5"),"4H":p("1/2O(1-x^2)"),"4G":p("-1/2O(1-x^2)"),"3c":p("Γ(x+1)*ψ(x+1)"),"2T":p("Γ(x)*ψ(x)"),"Γ":p("Γ(x)*ψ(x)")};p("(3G(x)-0.5)");if(!A.2Z){A.2Z={}}(J(){J f(n){D n<10?\'0\'+n:n}if(1l 8r.17.3F!==\'J\'){8r.17.3F=J(31){D 89(A.8q())?A.ba()+\'-\'+f(A.b9()+1)+\'-\'+f(A.b8())+\'T\'+f(A.b7())+\':\'+f(A.b6())+\':\'+f(A.b5())+\'Z\':2E};1D.17.3F=1A.17.3F=b4.17.3F=J(31){D A.8q()}}q cx=/[\\b3\\8p\\8o-\\8n\\8m\\8l\\8k\\8j-\\8i\\8h-\\8g\\8f-\\8e\\8d\\8c-\\8b]/g,5s=/[\\\\\\"\\b2-\\b1\\b0-\\aZ\\8p\\8o-\\8n\\8m\\8l\\8k\\8j-\\8i\\8h-\\8g\\8f-\\8e\\8d\\8c-\\8b]/g,2i,4E,8a={\'\\b\':\'\\\\b\',\'\\t\':\'\\\\t\',\'\\n\':\'\\\\n\',\'\\f\':\'\\\\f\',\'\\r\':\'\\\\r\',\'"\':\'\\\\"\',\'\\\\\':\'\\\\\\\\\'},3j;J 5r(1U){5s.82=0;D 5s.2g(1U)?\'"\'+1U.1y(5s,J(a){q c=8a[a];D 1l c===\'1U\'?c:\'\\\\u\'+(\'81\'+a.80(0).1p(16)).5l(-4)})+\'"\':\'"\'+1U+\'"\'}J 2I(31,3W){q i,k,v,19,4F=2i,2L,1n=3W[31];if(1n&&1l 1n===\'1X\'&&1l 1n.3F===\'J\'){1n=1n.3F(31)}if(1l 3j===\'J\'){1n=3j.5o(3W,31,1n)}6z(1l 1n){2q\'1U\':D 5r(1n);2q\'2P\':D 89(1n)?1D(1n):\'2E\';2q\'6w\':2q\'2E\':D 1D(1n);2q\'1X\':if(!1n){D\'2E\'}2i+=4E;2L=[];if(6H.17.1p.aY(1n)===\'[1X 1r]\'){19=1n.19;1i(i=0;i<19;i+=1){2L[i]=2I(i,1n)||\'2E\'}v=2L.19===0?\'[]\':2i?\'[\\n\'+2i+2L.5q(\',\\n\'+2i)+\'\\n\'+4F+\']\':\'[\'+2L.5q(\',\')+\']\';2i=4F;D v}if(3j&&1l 3j===\'1X\'){19=3j.19;1i(i=0;i<19;i+=1){k=3j[i];if(1l k===\'1U\'){v=2I(k,1n);if(v){2L.1e(5r(k)+(2i?\': \':\':\')+v)}}}}Q{1i(k in 1n){if(6H.86.5o(1n,k)){v=2I(k,1n);if(v){2L.1e(5r(k)+(2i?\': \':\':\')+v)}}}}v=2L.19===0?\'{}\':2i?\'{\\n\'+2i+2L.5q(\',\\n\'+2i)+\'\\n\'+4F+\'}\':\'{\'+2L.5q(\',\')+\'}\';2i=4F;D v}}if(1l 2Z.5p!==\'J\'){2Z.5p=J(1n,3X,4D){q i;2i=\'\';4E=\'\';if(1l 4D===\'2P\'){1i(i=0;i<4D;i+=1){4E+=\' \'}}Q if(1l 4D===\'1U\'){4E=4D}3j=3X;if(3X&&1l 3X!==\'J\'&&(1l 3X!==\'1X\'||1l 3X.19!==\'2P\')){1K 4U aX(\'2Z.5p\')}D 2I(\'\',{\'\':1n})}}if(1l 2Z.5m!==\'J\'){2Z.5m=J(2K,6G){q j;J 6F(3W,31){q k,v,1n=3W[31];if(1n&&1l 1n===\'1X\'){1i(k in 1n){if(6H.86.5o(1n,k)){v=6F(1n,k);if(v!==1E){1n[k]=v}Q{6h 1n[k]}}}}D 6G.5o(3W,31,1n)}2K=1D(2K);cx.82=0;if(cx.2g(2K)){2K=2K.1y(cx,J(a){D\'\\\\u\'+(\'81\'+a.80(0).1p(16)).5l(-4)})}if(/^[\\],:{}\\s]*$/.2g(2K.1y(/\\\\(?:["\\\\\\/aW]|u[0-9a-fA-F]{4})/g,\'@\').1y(/"[^"\\\\\\n\\r]*"|1s|1m|2E|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g,\']\').1y(/(?:^|:|,)(?:\\s*\\[)+/g,\'\'))){j=1G(\'(\'+2K+\')\');D 1l 6G===\'J\'?6F({\'\':j},\'\'):j}1K 4U aV(\'2Z.5m\')}}}());1r.17.4f=J(7Z){q 2s=A.1W(7Z);if(2s!==-1){A.2r(2s,1)}};1D.17.7O=J(){D A.aU(0).aT()+A.5l(1)};q 1v={};q 3U=-10;q 4B=10;q 3u=10;q 3t=-10;q 3i,3h;1v.7V={"3P":1.5};1v.1Z=(J(){q 4y=/[aS]eb[aR]it/.2g(4A.4z);q 2H;q 1c;q 3w,2t,5d;q 2u;J 6a(){3i=1N.6o||1a.2o.7Y;3h=1N.6n||1a.2o.7X||7W;2u.1O.aQ=~~(3h-85)+"1P";1C.3i=3i;1C.3h=3h;1c&&2H()}q 2A=aP;q 2z=aO;q 5k=2A;q 5j=2z;q 4p;q 29=64;q 2m=29;q 1R;q 3C=0;q 3B=0;q cx=(1N.6o||1a.2o.7Y||aN)/-3;q cy=(1N.6n||1a.2o.7X||7W)*2/3;q cz=aM;J 2H(){e=1o.E;2c=1o.3V;if(!1c){D}1c.aL="aK";1c.6E=1c.7U="aJ";1c.aI(0,0,3i,3h);3U=cx/29;4B=(3i+cx)/29;3t=-(3h-cy)/2m;3u=cy/2m;1R=1x(2,6-1o.4C(1z(29)/1z(2)));q 3R=1R*~~(3U/1R)-1R;q 3Q=1R*~~(4B/1R)+1R;q 3S=1R*~~(3u/1R)+1R;q 3T=1R*~~(3t/1R)-1R;1c.3P=2;1c.3E();1c.3e(3R,0);1c.3d(3Q,0);1c.3D();1c.3E();1c.3e(0,3T);1c.3d(0,3S);1c.3D();1c.6E="#aH";1c.3P=0.1;1i(q x=3R;x<=3Q;x+=1R/4){1c.3E();1c.3e(x,3T);1c.3d(x,3S);1c.3D()}1i(q y=3T;y<=3S;y+=1R/4){1c.3E();1c.3e(3R,y);1c.3d(3Q,y);1c.3D()}1c.3P=0.4;1i(q x=3R;x<=3Q;x+=1R){1c.3E();1c.3e(x,3T);1c.3d(x,3S);1c.3D()}1i(q y=3T;y<=3S;y+=1R){1c.3E();1c.3e(3R,y);1c.3d(3Q,y);1c.3D()}1c.3P=1v.7V.3P;1M.2h(J(e){if(!e.7N){1c.6E=1c.7U=e.4T;e.3L(1c)}});}q 5i=0;J 7u(e){5k=2A=e.x||e.6D;5j=2z=e.y||e.6C;4p=1s;1C.1O.6c="aG(6p.7G), 6p";if(!5i){66(6B,6A);5i++}};J 6b(e){e=e||1N.3r;if(e.x!==1E){2A=e.x;2z=e.y}Q{2A=e.6D;2z=e.6C}if(4p){3C+=2A-5k;3B+=2z-5j;if(4y){1C.1O["-4y-7S"]="7R("+3C+"1P,"+3B+"1P)"}Q{1C.1O.1k=3C+"1P";1C.1O.7P=3B+"1P"}}5k=2A;5j=2z};q 3O=0.aF;if(/aE/.2g(4A.4z)){3O=0.7T}if(/aD/.2g(4A.4z)){3O=0.aC}if(/aB/.2g(4A.4z)){3O=0.aA}if(!/az ay X/.2g(4A.4z)){3O=0.1}J 5b(e){e=e||1N.3r;if(e.x!==1E){2A=e.x;2z=e.y}Q{2A=e.6D;2z=e.6C}q ex=1o.2Y(e.ax*3O);29*=ex;2m*=ex;q dx=2A+cx;q dy=2z-cy;if((dx*dx+dy*dy)>6A){cx=ex*(2A+cx)-2A;cy+=2z+ex*(cy-2z)-cy}2H()}J 6d(){cx-=3C;cy+=3B;3C=3B=0;if(4y){1C.1O["-4y-7S"]="7R(7Q,7Q)"}Q{1C.1O.1k=3C+"1P";1C.1O.7P=3B+"1P"}}J 6B(){if(4p){6d();2H();66(6B,6A)}Q{5i--}}J 6k(1t){q w=1a.1q("2X");w.2a="aw";q 3A=1l 1t;if(1t===2E){3A="1E"}if(3A=="J"&&1t.19!=1E&&1t[0]!=1E){3A="1X"}3A=3A.1p();6z(3A){2q"2P":q fn=1a.1q("4w");fn.1f(1a.1F(1t));w.1f(fn);D w;27;2q"1U":q fn=1a.1q("2J");fn.1f(1a.1F("\\""+1t+"\\""));w.1f(fn);D w;27;2q"6w":w.1f(1a.1F(1t));D w;27;2q"1E":2q"J":q fn=1a.1q("i");if(1t===1E){fn.1f(1a.1F("1E"))}Q if(1t===2E){fn.1f(1a.1F("2E"))}Q{fn.1f(1a.1F(1t.1p()))}w.1f(fn);D w;27;2q"1X":q 3y=1m;J 6v(i){q 1w=1a.1q("1w");q 3z=1l 1t[i];if(1t[i]===2E||1t[i]===1E){3z="1E"}6z(3z){2q"J":2q"1X":q b=1a.1q("b");b.1f(1a.1F(i+": "));q 2b=1a.1q("2b");2b.1f(b);2b.1f(1a.1F((1l(1t[i])).7O()));1w.1f(2b);1w.1t=1t[i];q 6y=1a.1q("2b");6y.2a="60";1w.1f(6y);1w.6x=1m;1w.2a="4Z";1w.2v("av",J(e){e.4o();if(A.2a=="56"){A.2a="4Z";D}A.2a="56";if(!A.6x){A.6u("60")[0].1f(6k(A.1t));A.6x=1s}D 1m},1m);27;5c:q b=1a.1q("b");1w.2a="au";b.1f(1a.1F(i+": "));1w.1f(b);q 2I=1t[i];if(3z=="1E"){q 2J=1a.1q("i");2J.1f(1a.1F(2I));1w.1f(2J)}Q if(3z=="6w"){1w.1f(1a.1F(2I))}Q if(3z=="1U"){q 2J=1a.1q("2J");2J.1f(1a.1F("\\""+2I+"\\""));1w.1f(2J)}Q if(3z=="2P"){q 2J=1a.1q("4w");2J.1f(1a.1F(2I));1w.1f(2J)}Q{1w.1f(1a.1F(2I))}}w.1f(1w)}if(1t.at!=1r.17){1i(i in 1t){3y=1s;6v(i)}}if(!3y){if(1t.19!==1E){1i(q i=0;i<1t.19;i++){3y=1s;6v(i)}if(!3y){w.1f(1a.1F(1t));D w}}Q{w.1f(1a.1F(1t));D w}}27;5c:}D w}q 2X;q 1Z={"4f":J(n){if(!2X){2X=1a.6l("1M")}2X.4V(n)},"3K":J(){1N.7r=1C.as("ar/3K")},"1T":J(n){q 1w=5d.7v(1s);1w.id="eq-"+n.3p;if(!2X){2X=1a.6l("1M")}2X.1f(1w);q 2y=1w.6u("7w")[0];q 6s=1w.3q;q 6t=1w.3q.3q;q 7M=1w.6u("6h")[0];2y.1f(1a.1F(n.4h||""));6t.2v("aq",J(e){1i(q i=0;i<1M.19;i++){if(1M[i].3p==n.3p){1M[i].7N=!6t.6i;2H();27}}},1m);2y.2v("4q",J(e){e.4o()},1m);6s.1O.7y=n.4T;6s.2v("4q",J(e){e.4o()},1m);7M.2v("4q",J(e){1v.4f(1w);e.4o()},1m);1w.2v("4q",J(e){$(2y).6q({R:"5h",7L:1s,4x:65});$(2y).6q({R:"5h",4x:39});2y.7K("7J")[0].7I()},1m);$(2y).3g("7C");$(2y).3g("7B");2y.ap=J(){1i(q i=0;i<1M.19;i++){if(1M[i].3p==n.3p){q 6r=$(2y).3g("3b");q c=5U(6r);1M[i].f=c.f;1M[i].3L=c.3L;1M[i].4h=6r;2H();27}}};if(!n.4g){$(2y).6q({R:"5h",7L:1s,4x:65});2y.7K("7J")[0].7I()}D 1w},"5R":{"5Q":("#7H,#ao,#an,#7H,#am,#al,#ak,#aj,#ai,#ah,#ag,#af,#ae,#7x".2G(",")),},"7i":J(){if(2H){2H()}},"4S":J(){q 7F=1N.7q.19?1m:1s;(4U ad()).ac="6p.7G";1C=1a.1q("1C");if(7F){1C.3i=1N.6o;1C.3h=1N.6n}1a.2o.1f(1C);if(1C.7E){1c=1C.7E("2d")}Q{61("ab!")}1C.1O.aa="a9";1C.1O.6c="5c";1C.1O.a8="a7";3w=1a.1q("2b");3w.id="3w";3w.2a="7D";3w.1f(1a.1F("(0,0)"));1a.2o.1f(3w);2t=1a.1q("2b");2t.id="2t";2t.2a="7z";2t.1O.68="67";2u=1a.1q("2b");2u.id="2u";2u.2a="7D";q 6m=1a.1q("4w");6m.id="2f";2t.1f(2u);2t.1f(6m);1a.2o.1f(2t);q 2f=1a.6l("2f");$(2f).3g("7C");$(2f).3g("7B");2f.2v("5h",J(3r){if(3r.4x==13){2f.1Q=$(2f).3g("3b");q 5f=7A(2f.1Q).3N();if(!5f.2p()){2u.1f(((5f.2w().5g())))}Q{2u.1f(6k(4Y.1G(5f.2w(0,1))))}$(2f).3g("3b","")}Q if(3r.4x==38){if(!/\\\\[a-z]*|[^\\s]/ig.2g(2f.1Q)){2f.1Q=" "}$(2f).3g("3b",2f.1Q)}},1m);q 3v=1a.1q("2b");3v.2a="7z";3v.id="3v";q 6j=1a.1q("2X");6j.id="1M";3v.1f(6j);q 4s=1a.1q("1w");q 4v=1a.1q("2b");4v.2a="b";4v.1O.7y="#7x";q 5e=1a.1q("4u");5e.R="a6";5e.6i="6i";4v.1f(5e);q 6g=1a.1q("4w");6g.2a="7w";q 6f=1a.1q("4w");6f.2a="6h";4s.1f(4v);4s.1f(6g);4s.1f(6f);q 3f=1a.1q("2b");3f.2a="3f";q 1H=1a.1q("4u");1H.1n="+";1H.R="4r";1H.6e=J(){1v.1T()};3f.1f(1H);q 1H=1a.1q("4u");1H.1n=">a5";1H.R="4r";1H.6e=J(){1v.1V()};3f.1f(1H);q 1H=1a.1q("4u");1H.1n=".3K";1H.R="4r";1H.6e=J(){1v.3K()};3f.1f(1H);q 4t=1a.1q("a");4t.a4="a3://5S.a2/a1/";4t.a0="9Z";q 1H=1a.1q("4u");1H.1n="";1H.1O.9Y="67";1H.R="4r";4t.1f(1H);3f.1f(4t);3v.1f(3f);1a.2o.1f(3v);5d=4s.7v(1s);5d.9X("id");1N.9W=6a;1C.9V=7u;1a.2o.2v("9U",J(e){if(e.4r){1V.1z(e)}},1m);1a.2o.2v("4q",J(){4p=1m;6d();1C.1O.6c="5c";2H()},1m);1a.2o.2v("6b",6b,1m);1N.2v("5b",5b,1m);2t.2v("5b",J(e){e.4o()},1m);1a.2o.4V(1a.2o.3q);1c.3e=J(1P,2l,7t){D 1c.5a(29*1P-cx,cy-2m*2l);D;if(!2W(2l)){if(2l>3u*4){1c.5a(29*(1P-cx),2m*(cy-3u*4));D}Q if(2l<3t*4){1c.5a(29*(1P-cx),2m*(cy-3t*4));D}1c.5a(29*(1P+cx),2m*(-cy-2l))}};1c.3d=J(1P,2l,7t){D 1c.4n(29*1P-cx,cy-2m*2l);1c.4n(29*1P-cx,cy-2m*2l);D;if(!2W(2l)){if(2l>3u*4){1c.4n(29*(1P-cx),2m*(cy-3u*4));D}Q if(2l<3t*4){1c.4n(29*(1P-cx),2m*(cy-3t*4));D}1c.4n(29*(1P-cx),2m*(cy-2l))}};6a()}};q 57=1m;1Z.1V={"56":J(){2t.1O.68="9T";57=1s},"3s":J(){2F(2u.3q){2u.4V(2u.3q)}D"9S"},"4Z":J(){2t.1O.68="67";57=1m},"7h":J(){if(!57){D 1v.1Z.1V.56()}1v.1Z.1V.4Z()},"1z":J(){}};D 1Z})();J 3s(){D 1v.1Z.1V.3s()}q 4Y=(J(){q 4Y={"1G":J(d){D 1N.1G(d)},"3s":J(){D 1v.1Z.1V.3s()}};D 4Y})();q 1M=[];J 9R(4m,4k){if(4k==",")D"";if(4l[4k]!==1E)D 4l[4k];D 4k}J 9Q(3r){if(1N.7s){66(J(){7s.9P("9O",3r)},20)}};J 9N(z){q 4X="1G,1a,1N,7r,9M,61,9L,9K,A,7q,60,9J,9I,9H,2H,9G,9F,9E,9D,9C,1C".2G(",");1i(q 4j=0;4j<4X.19;4j++){if(z.1W(4X[4j])!=-1){1K("9B 9A: "+4X[4j]);D}}D 1G(z)}5W="x^2@3x@2e^{-x}@2x+3@\\\\5Z=3@e^{-\\\\5Z*x}@\\\\1k(0.5,0.5\\\\1b)@\\\\4W{n=1}^{\\\\5Y}\\\\3M{\\\\2k\\\\1k(9z\\\\1b)}n@\\\\7p{1}^{4}x-n	m:9y@\\\\1k|x^2-4\\\\1b|+2@\\\\9x@x^{-2}@x!@\\\\2V x@\\\\4W{n=1}^{\\\\5Y}\\\\3M{x^n}{n}@\\\\2k x@e^x:\\\\1k[−2,2\\\\1b]@\\\\2U\\\\1k(x\\\\1b)@\\\\1k(x+2\\\\1b)\\\\1k(x-3\\\\1b)^2	9w\\\\1k(0,2,2x\\\\1b)@\\\\1k(x-2\\\\1b)^2@\\\\4W{n=1}^{\\\\5Y}\\\\3M{\\\\2k\\\\1k(\\\\1k(2n−1\\\\1b)x\\\\1b)}{2n−1}@\\\\7p{n=1}^5\\\\1k(x-n\\\\1b)@\\\\4W{n=0}^5n@x^x@\\\\2T\\\\1k(x\\\\1b)@\\\\3M{x!}{3!-x}@x%3@\\\\1k(x>3\\\\1b)?2x:-3@\\\\3c\\\\1k(x\\\\1b)@\\\\3M\\\\5X x@\\\\1k(x>=0\\\\1b)?7o*G/\\\\1k(7n+9v\\\\1b)^2:1E@g\\\\1k[0\\\\1b]\'\\\\1k(2x\\\\1b)@g\\\\1k[0\\\\1b]\\\\1k(x\\\\1b)+1@\\\\2O x".2G("@");q 7m=0;J 7j(){D 5W[(7m++)%5W.19]}J 9u(7l){5V=7l.9t;2s=0;4i=7k.3q;2F(4i!=2E){if(4i==5V){27;2s++}4i=4i.9s}g.2r(2s,1);9r.1e(9q.2r(2s,1)[0]);7k.4V(5V);9p()};q 5S=J(n){q 3b=n;q 4g=0;if(n){4g=1s}Q{3b=7j()}q t=J(x){D A.f(x)};q c=5U(3b);t.f=c.f;t.3L=c.3L;t.4h=3b;t.3p=5T();t.4T=1v.1Z.5R.5Q.9o();t.4g=4g;t.9n=1v.1Z.1T(t);D t};1v.9m="9l";1v.1T=J(n){1M.1e(4U 5S(n));1v.1Z.7i()};1v.3K=J(){1v.1Z.3K()};1v.1V=J(){1v.1Z.1V.7h()};1v.4f=J(n){if(1l n!="1U"){q id=n.id.1J(3);1v.1Z.4f(n);n=id}1i(q i=0;i<1M.19;i++){if(1M[i].3p==n){1v.1Z.5R.5Q.1e(1M[i].4T);1M.2r(i,1);27}}};1v.4S=J(){1v.1Z.4S();1v.1T("x+3")};1v.4S();',62,1175,'||||||||||||||||||||||||||var||||||||||this|||return||||||function||eqtype|||||else|type||||||||||||||||prototype||length|document|right|ctx|self|push|appendChild|sum|terms|for|product|left|typeof|false|value|Math|toString|createElement|Array|true|obj|setType|app|li|pow|replace|log|Number|res|canvas|String|undefined|createTextNode|eval|newfuncbtn|dreplace|substring|throw|simplify|graphs|window|style|px|last|gridsize|num|add|string|console|indexOf|object|power|ui||fraction||||||break||scalex|className|div|pi|||conin|test|forEach|gap|differentiate|sin|py|scaley||body|canEval|case|splice|index|con|logt|addEventListener|getString||inputbox|my|mx|has|multiply|operation|null|while|split|draw|str|strong|text|partial|discretevector|times|sqrt|number|cos|search|inp|Gamma|tan|ln|isNaN|ul|exp|JSON||key||_0||||_1|||level|latex|fact|line|move|buttons|mathquill|height|width|rep|equals|spaces|__debug_parser|__debug|nextisinverse|gid|firstChild|event|clear|boundbottom|boundtop|funcs|ptd||found|m2|mode|_2|_3|stroke|beginPath|toJSON|random|abs|divide|inv|png|plot|frac|factorise|scaleconst|lineWidth|overright|overleft|overtop|overbottom|boundleft|PI|holder|dreplacer|cot|endchar||javascript||not||moved|fou_c||itg||Infinity|other|hash|denom|difflevel|remove|auto|equation|other_node|nau_g|submatch|latexchars|match|lineTo|stopPropagation|drag|mouseup|button|_4|alink|input|_5|span|which|webkit|userAgent|navigator|boundright|round|space|indent|mind|acos|asin|delta|floor|min|csc|nr|_6|fou_i|_7|inj|exponent|init|color|new|removeChild|sum_|naughty|usr|hide|||||||show|_8|||moveTo|mousewheel|default|proto|_9|out|markup|keydown|drawwhiledrag_c|lmy|lmx|slice|parse||call|stringify|join|quote|escapable|max|atan2|ceil|atan|sec|braces|afterme|_10|newproducts|foundit|NaN|ret|jsc|rhs|lhs|Invalid|variable|invert|_11|oldtype|lvl|nns|npw|free|colors|graph|random_hash|compile|this_node|randfuncs|phi|infinity|lambda|child|alert|||||setTimeout|none|display||resize|mousemove|cursor|perform_translation|onclick|_12|_13|delete|checked|_14|generateJSON|getElementById|conin_|innerHeight|innerWidth|grabbing|trigger|l__|b_|check_|getElementsByClassName|do_loop|boolean|done|children|switch|1000|drawwhiledrag|pageY|pageX|strokeStyle|walk|reviver|Object|shaw|tg|signum|bellb|sinc|cosec|functions|second|equality|isDifferential|inverse|clean|__debug_iterations|integrate|fnd|first|size|dot|continuousvector|||conjg||vars||parsednumber|||final|fail|psi|djkb|blln|symbol|digits|toggle|refresh|randfunc|flist|delete_button_node|randfunc_index|r_e|m_e|prod_|parent|location|pageTracker|pz|mousedown|cloneNode|matheditor|07c|backgroundColor|overlay|p_latex|redraw|editable|monospace|getContext|fullscreen|gif|f08|focus|textarea|getElementsByTagName|ctrlKey|delete_|disabled|capitalize|top|0px|translate|transform|0001|fillStyle|config|120|clientHeight|clientWidth|elem|charCodeAt|0000|lastIndex||||hasOwnProperty|||isFinite|meta|uffff|ufff0|ufeff|u206f|u2060|u202f|u2028|u200f|u200c|u17b5|u17b4|u070f|u0604|u0600|u00ad|valueOf|Date|known_derivatives|arctan|arccos|arcsin|Zeta|ERROR|Unknown|pm|isnum|inverselhs|per|once|used|only|can|map|Could|No|constant|Type|Expression|the|derivative|Operation|lowest|vector|or|arguments|prod_op|term_op|zz|integral|zeta|log2pi||||val|cond|||Te||262||259|247|210|207|192|140|9994|6378100|toPrecision|exptext|bac25ed|version|node|pop|save|colors_in_use|colorss|nextSibling|parentNode|delfunc|100000x|diff|frac1x|H_2SO_4|nx|Code|Unsafe|nextframe|calcnextframe|extrafunc|get2dfunction|getfunction|clip|xmlhttp|xml|prompt|comfirm|cookie|safeeval|Graph|_15|track|getlatexpart|Cleared|block|mouseover|onmousedown|onresize|removeAttribute|textDecoration|_16|target|about|tk|http|href|_|checkbox|fixed|position|white|background|Failed|src|Image|f00|0a0|04f|f0f|f80|0ff|808|088|880|80f|8f0|onchange|change|image|toDataURL|__proto__|end|click|json|wheelDeltaY|OS|Mac|03|Opera|01|Firefox|AppleWebKit|001|url|888|clearRect|black|butt|lineCap|10000|640|300|400|maxHeight|kK|Ww|toUpperCase|charAt|SyntaxError|bfnrt|Error|apply|x9f|x7f|x1f|x00|u0000|Boolean|getUTCSeconds|getUTCMinutes|getUTCHours|getUTCDate|getUTCMonth|getUTCFullYear|name|warn|Not||solve|someting|expand|factorize|of|know|don|specified|mag|cross|re|Vector|operator|binary|parentheses|int|coproduct|coprod|prod|summation|forall|nabla|perp|Omega|Psi|Phi|Upsilon|Sigma|Pi|Xi|Lambda|Theta|Delta|vartheta|thetav|varrho|rhov|varpi|piv|varkappa|kappav|digamma|Gammad|gammad|sigmav|sigmaf|varepsilon|epsiv|epsilon|varphi|phiv|omega|chi|upsilon|tau|sigma|rho|omicron|xi|nu|mu|kappa|iota|theta|eta|gamma|beta|alpha|backslash|cdot|infty|le||lt|3245138289924575|7281333047988399|24425221666910216|150917639897307|1680|1260||||360|4506715738447323|474869816156751|51724158235372|5832742205057|682076806159|82864869804|10480142147|1382958545|190899322|27644437|4213597|678570|115975|21147|4140|877|203|ctn|ctg|piecewise|logb|ln_n|log_n|csc_n|sec_n|cot_n|tan_n|cos_n|sin_n|Rg|Ds|Mt|Hs|Bh|Sg|Db|Rf|Lr|Md|Fm|Es|Cf|Bk|Cm|Am|Pu|Np|Pa|Th|Ac|Ra|Fr|Rn|At|Po|Bi|Pb|Tl|||Hg|Au|Pt|Ir|Os|Re|Ta|Hf|Lu|Yb|Tm|Er|Ho|Dy|Tb|Gd|Eu|Sm|Pm|Nd|Pr|Ce|La|Ba|Cs|Xe|Sb|Sn|In|Cd|Ag|Pd|Rh|Ru|Mo|Nb|Zr|Sr||Rb|Kr|Br|Se|As|Ge|Ga|Zn|Cu|Ni|Co||Fe|Mn||Cr|Ti|Sc|Ca|Ar|Cl||Si|Al|Mg|Na|Ne|Be||Li|He|Zero|272|271|268|277|264|266|261|258|257|252|251|243|244|237|02891|238|03588|231|03806|232|227|226|223|220|980401|208|3833|204|200|966569|196|084|217||190|186|183|94788|180|178|9668||174|054|173|93421|168|167|93032|164|5001|162|92535|158||157|964|151|150|145|242|144|90765|116|90547|138|327|137|9054519|132|293|131|90447|126|127|121|118|818|114|411|112|8682|107|106|9055|102|07|101|90638|224|90585|4678|798|904||9216||723|546|6934|933195|845|938045|9961||9415|867|955912|078||0983|948|453|065|973762|0855|9815386|305|98976928|1797|0067|0107|811|012182|941|002602|00794|Unununium|Ununnilium|Meitnerium|Hassium|Bohrium|Seaborgium|Dubnium|Rutherfordium|Lawrencium|Nobelium|Mendelevium|Fermium|Einsteinium|Californium|Berkelium|Curium|Americium|Plutonium|Neptunium|Uranium|Protactinium|Thorium|Actinium|Radium|Francium|Radon|Astatine|Polonium|Bismuth|Lead|Thallium|Hydrargyrum|Gold|Platinum|Iridium|Osmium|Rhenium|Tungsten|Tantalum|Hafnium|Lutetium|Ytterbium|Thulium|Erbium|Holmium|Dysprosium|Terbium|Gadolinium|Europium|Samarium|Promethium|Neodymium|Praseodymium|Cerium|Lanthanum|Barium|Cesium|Xenon|Iodine|Tellurium|Antimony|Tin|Indium|Cadmium|Silver|Palladium|Rhodium|Ruthenium|Technetium|Molybdaenum|Niobium|Zirkonium|Yttrium|Strontium|Rubidium|Krypton|Bromine|Selenium|Arsenic|Germanium|Gallium|Zinc|Copper|Nickel|Cobalt|Iron|Manganese||Chromium|Vanadium||Titanium|||Scandium|Calcium|Potassium|Argon|Chlorine|||Sulphur|Phosphorus|Silicon|aluminium|||Magnesium|Sodium|Neon|Fluorine|Oxygen|Nitrogen|Carbon|Boron|Beryllium|Lithium|Helium|Hydrogen|void|Massless|85418782e|epsilon_0|8378770664093453|626068e|R_E|98892e30|m_s|36e22|m_m|9742e24|67300e|299792458|0000000|0000001|format'.split('|'),0,{}))
