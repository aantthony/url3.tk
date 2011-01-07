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

}(jQuery));eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1n.1d.8m=J(7E){A 2b=1n(q);e=1t.E;2k=1t.4l;if(!2b){D"0"}Q if(2b==2k){D"π"}Q if(2b==e){D"e"}Q if(2b%(2k/4)==0){D(2b/2k)+"π"}Q if(2b%(1/3)==0){D(2b*3)+"/3"}Q if(2b%(e/4)==0){D(2b/e)+"e"}Q if(2b!=1){if((1x(2b))%1==0){A 5m=1x(2b);A 9E="⁰¹²³⁴⁵⁶⁷⁸⁹";D"e"+((4p(5m)<10)?((5m<0?"⁻":"")+9E[4p(5m)]):"^"+5m)}}if(7E===1P){D 2b.1o()}if(2b.9D){if(1t.4p(2b)<0.ju){D"0.jt"}D 2b.9D(7E)}D 2b};J 6l(){A s="";1h(A i=0;i<20;i++){s+=(~~(1t.5a()*16)).1o(16)}D s}A c=js;A G=6.jr-11;A 7M=5.jq;A jp=7.jo;A jn=1.jm;A jl=9C;A 7L=9C;A h=6.jk-34;A 9q=1.jj;A e=1t.E;A 2k=1t.4l;A 6p=(1+1t.2Y(5))/2;A ji=8.jh-12;A en=["jg jf","je","jd","jc","jb","ja","j9","j8","j7","j6","j5","j4","j3","j2","j1","j0","iZ","iY","iX","iW","iV","iU","iT","iS","iR","iQ","iP","iO","iN","iM","iL","iK","iJ","iI","iH","iG","iF","iE","iD","iC","iB","iA","iz","iy","ix","iw","iv","iu","ir","iq","ip","io","il","ik","ij","ii","ih","ie","ic","ib","i9","i8","i7","i6","i5","i4","i3","i2","i1","i0","hZ","hY","hX","hW","hV","hU","hT","hS","hR","hQ","hP","hO","hN","hM","hL","hK","hJ","hI","hH","hG","hF","hE","hD","hC","hB","hA","hz","hy","hx","hw","hv","hu","ht","hs","hr","hq","hp","ho","hn","hm","hl","hk"];A M=[0.0,1.hj,4.hi,6.hh,9.hg,10.hf,12.he,14.hd,15.9B,18.9B,20.hc,22.hb,24.ha,26.h9,28.h8,30.h7,32.h6,35.h5,39.h4,39.h3,40.h2,44.h1,47.h0,50.gZ,51.gY,54.gX,55.gW,58.gV,58.gU,63.gT,65.38,69.gS,72.64,74.gR,78.96,79.gQ,83.gP,85.gO,87.62,88.gN,91.gM,92.gL,95.96,98,gK.gJ,gI.gH,gG.42,gF.gE,gD.gC,gB.gA,gz.71,gy.76,gx.6,gw.gv,gu.gs,gr.gq,gp.gn,gm.gl,9A.gk,9A.gj,gi.gh,gg,gf.36,gd.gc,gb.25,ga.g9,g8.g7,g6.g5,g4.9v,g3.g2,g1.g0,fZ.fY,fX.49,fW.fV,fU.84,fT.9y,fS.23,9z.fR,9z.fQ,fP.fO,fN.59,fM.fL,9y.2,fK.fJ,9x,9x,fI,fH,fG,fF,fE.fD,fC.fB,fz.fy,fx,fw,fv,9w,9w,fu,ft,fs,fr,9v,9u,fq,9u,fp,fo,fm,fl,fk,fj];A 7D=["fi","H","fh","fg","fe","B","C","N","O","F","fd","fc","fb","fa","f9","P","S","f8","f7","K","f6","f5","f4","V","f3","f2","f1","f0","eZ","eY","eX","eW","eV","eU","eT","eS","eR","eQ","eP","Y","eO","eN","eM","9t","eL","eK","eJ","eI","eH","eG","eF","eD","9t","I","eC","eB","eA","ez","ey","ew","ev","eu","et","es","er","ep","eo","em","el","ek","ej","ei","eh","eg","W","ef","ee","ed","ec","ea","e9","e8","e7","e6","e5","e4","e3","e2","e1","e0","dZ","dY","U","dX","dW","dV","dU","dT","dS","dR","dQ","dP","dO","dN","dM","dL","dK","dJ","dI","dH","dG","dF"];1h(A 3v=0;3v<7D.17;3v++){1C[7D[3v]]=M[3v]}A 2w=1t.2w;A 3d=1t.3d;A 3i=1t.3i;A 8R=1t.3i;A 3s=1t.3s;A 1x=1t.1x;A 3j=1t.1x;A 4p=1t.4p;A 5U=1t.5U;A 5V=1t.5V;A 7d=1t.7d;A 7b=1t.7b;A 7c=1t.7c;A 5X=1t.5X;A 5Y=1t.5Y;A 5Z=1t.5Z;A 5a=1t.5a;A 5O=1t.5O;A 2Y=1t.2Y;A 1I=1t.1I;J dE(n,x){D 1I(2w(x),n)}J dD(n,x){D 1I(3d(x),n)}J dC(n,x){D 1I(3i(x),n)}J dB(n,x){D 1I(5b(x),n)}J dA(n,x){D 1I(7e(x),n)}J dz(n,x){D 1I(60(x),n)}J dw(n,x){D 1I(1x(x),n)}J dv(n,x){D 1I(3j(x),n)}J du(b,v){D 3j(v)/3j(b)}J u(x){D(x>=0)?(x?1:0.5):(0)}J 5W(x){if(x==0){D 3y}D 0}J 8S(x){D 2*u(x)-1}J dt(9s,9r,4v){if(9s){D 9r}D 4v}J 8U(x){if(x===0){D 1}D 2w(2k*x)/(2k*x)}J 7e(x){D 1/(3d(x))}J 60(x){D 1/(2w(x))}J 5b(x){D 1/(3i(x))}A ds=5b;A dr=5b;A 8V=60;A 7C=[1,1,2,5,15,52,dq,dp,do,dn,dm,dl,dk,dj,di,dh,dg,df,de,dd,dc,db,da];J 9p(x){if(x===0){D-0.5}Q if(x==1){D 3y}Q if(x==2){D 2k*2k/6}Q if(x==4){D 2k*2k*2k*2k/90}Q if(x<1){D 3y}A 1k=4.4*1I(x,-5.1);1h(A 6h=1;6h<10;6h++){1k+=1I(6h,-x)}D 1k}J 3h(x){if(x>1.0){D(3s(x*(3j(x)-1)+0.5*(-3j(x)+9q)+1/ (12 * x) - 1 /(d9*(x*x*x))+1/ (d8 * 1I(x, 5)) - 1 /(d7*1I(x,7))))}if(x>-0.5){D(1.0+0.d6*x+0.d5*1I(x,2))/(x+0.d4*1I(x,2)-0.d3*1I(x,3))}if(x<0){if(x==~~x){D}Q{D 1t.4l/(1t.2w(1t.4l*x)*3h((1-x)))}}Q{D 1I(x-1,x-1)*1t.2Y(2*1t.4l*(x-1))*3s(1-x+1/ (12 * (x - 1) + 2 /(5*(x-1)+53/(42*(x-1)))))}}J 7A(x){D 5a()}Γ=3h;ψ=7A;π=2k;J 3J(ff){if(ff===0||ff==1){D 1}Q if(ff>0&&ff==~~ff&&ff<15){A s=1;1h(A 6g=1;6g<=ff;6g++){s*=6g}D~~s}Q if(ff!=(~~ff)||ff<0){D 3h(ff+1)}}J 8T(x){if(x==~~x&&x<7C.17){D 7C[x]}Q{A 1k=0;1h(A 5l=0;5l<5;5l++){1k+=1I(5l,x)/3J(5l)}D 1k/e}}A 4w=0;J 7B(ia,6f,x){4w++;A 3A;if(4w>8){4w-=1;D 0}A h=0.8l;if(6f>0){3A=(7B(ia,6f-1,x+h)-7B(ia,6f-1,x-h))/(2*h);4w-=1;D 3A}3A=g[ia](x);4w-=1;D 3A}A 4L={\'gt\':">","1m(":"(","1b)":")","1m[":"[","1b]":"]",\'ge\':">=",\'d2\':"<",\'d1\':"<=","d0":"∞","cZ":"*","3F":"","cY":"\\\\","cX":"α","cW":"β",\'cV\':"γ",\'5W\':"δ",\'9p\':"ζ",\'cU\':"η",\'cT\':"θ",\'cS\':"ι",\'cR\':"κ",\'cQ\':"μ",\'cP\':"ν",\'cO\':"ξ",\'cN\':"ο",\'cM\':"ρ",\'cL\':"σ",\'cK\':"τ",\'cJ\':"υ",\'cI\':"χ",\'7A\':"ψ",\'cH\':"ω",\'6p\':"ϕ","cG":"φ","cF":"φ","cE":"ϵ","cD":"ε","cC":"ε","cB":"ς","cA":"ς","cw":"ϝ","cv":"ϝ","cu":"ϝ","ct":"ϰ","cs":"ϰ","cr":"ϖ","cq":"ϖ","7g":"±","co":"ϱ","cn":"ϱ","cm":"ϑ","cl":"ϑ","2k":"π","6r":"λ",\'3h\':"Γ",\'ck\':"Δ",\'cj\':"Θ",\'ci\':"Λ",\'ch\':"Ξ",\'cg\':"Π",\'cf\':"Σ",\'ce\':"Υ",\'cd\':"Φ",\'cc\':"Ψ",\'cb\':"Ω","ca":"⊥",",":" ","c9":"∇","c8":"∀","1k":"∑","c7":"∑","c6":"∏","1i":"∏","c5":"∐","c4":"∐","c3":"∫","9o":"∫"};A 1y={};A L={"1i":1,"1k":2,"2B":3,"93":4,"5g":5,"2P":6,"7q":7,"29":8,"fn":9,"27":10,"9d":11,"9o":12,"67":13,"7g":14,"7v":15};A 3D=0;J 3f(x){D x}A 3C="                     ";A 3e=0;J p(2H){if(1j 2H=="2B"||!31(2H)){D 1n(2H)}Q if(3f(1,0)&&1j 2H=="1V"){if(!31(2H)){1a.1l.1B.2Z("q is c2 c1 c0 9c 1n(q)");D 1n(2H)}D 2H}if(2H==""||2H===1P){D 0}3f(!3D,0)||1a.1l.1B.1x(3C.1J(0,3e)+"p: "+2H);A eq=[];A e=2H.1D(/\\s/g,"").1D(/\\]/g,")").1D(/\\[/g,"(").1D(/\\)\\(/g,")*(");e=e.1D(/([^\\+\\-\\*\\/\\^\\:\\(\\)\\d\\=])\\(/g,"$1:(");e=e.1D(/([bZ\\d])\\(/g,"$1*(");e=e.1D(/\\)([^\\+\\-\\*\\/\\^\\:\\(\\)\\=])/g,")*$1");if(e.2l("=")!=-1){A eq=e.1D("==","[6e][6e]").2X("=").bY(J(e){D e.1D("[6e][6e]","==")});if(eq.17==2){D[p(eq[0]),p(eq[1])].1p(L.67)}21("bX bW \'=\'s");D}2K((e.2l("(")!=-1)&&(e.2l(")")!=-1)){A 7z=1u;e=e.1D(/\\([^\\(\\)]*\\)/g,J(n){7z=1r;A h=6l();1y[h]=p(n.1J(1,n.17-1));D"2S"+h+"2S"});if(7z){21("73 4m 4B bV");1N}}A 1e=[];A 1Y=0;A 9m="+-";A 9l="*/";if(e.2l(",")!=-1){3f(!3D,0)||1a.1l.1B.1x(3C.1J(0,3e)+"f>: "+e);1e.R=L.2P;A be=e.2X(",");be.2E(J(9n){1e.1c(p(9n))})}Q if((e.2l("+")!=-1)||(e.2l("-")!=-1)){3f(!3D,0)||1a.1l.1B.1x(3C.1J(0,3e)+"+>: "+e);1e.R=L.1k;A 2W=1r;1h(A i=0;i<e.17;i++){if(9m.2l(e[i])!=-1){A s=e.1J(1Y,i);if(2W){1e.1c(p(s).1T(-1));2W=1r}Q{1e.1c(p(s))}if(e[i]=="-"){2W=1u}1Y=i+1}}if(2W){1e.1c(p(e.1J(1Y,e.17)).1T(-1))}Q{1e.1c(p(e.1J(1Y,e.17)))}}Q if((e.2l("*")!=-1)||(e.2l("/")!=-1)){3f(!3D,0)||1a.1l.1B.1x(3C.1J(0,3e)+"*>: "+e);1e.R=L.1i;A 3z=[];3z.R=L.1i;A 2W=1r;1h(A i=0;i<e.17;i++){if(9l.2l(e[i])!=-1){A s=e.1J(1Y,i);if(2W){3z.1c(p(s));2W=1r}Q{1e.1c(p(s))}if(e[i]=="/"){2W=1u}1Y=i+1}}if(2W){3z.1c(p(e.1J(1Y,e.17)))}Q{1e.1c(p(e.1J(1Y,e.17)))}if(3z.17){1e=[1e,3z];1e.R=L.27}}Q if(e.2l("^")!=-1){3f(!3D,0)||1a.1l.1B.1x(3C.1J(0,3e)+"^>: "+e);A be=e.2X("^");if(be.17!=2){21("^ is a 9k 7h");D}A 3E=p(be[0]);if(3E.R==L.1i){1e.R=L.1i;3E[3E.17-1]=[3E[3E.17-1],p(be[1])].1p(L.29);1e.1c(3E)}Q{1e.R=L.29;1e.1c(3E);1e.1c(p(be[1]))}}Q if(e.2l(":")!=-1){3f(!3D,0)||1a.1l.1B.1x(3C.1J(0,3e)+"f>: "+e);1e.R=L.fn;A be=e.2X(":");if(be.17!=2){21("7i bU is a 9k 7h");D}A 3l=/^bT([\\d\\.\\+\\-e]+)$/(be[0]);if(3l){A 9j=["1x",p(be[1])].1p(L.fn);1e.R=L.27;1e.1c(9j);1e.1c(["1x",p(3l[1])].1p(L.fn))}Q{A 6d=p(be[0]);if(1j 6d!="1U"){1e.R=L.1i;1e.1c(6d);1e.1c(p(be[1]))}Q{1e.1c(6d);1e.1c(p(be[1]))}}}Q if(e.2l("!")!=-1){1e.R=L.1i;A 1Y=0;1h(A i=0;i<e.17;i++){if(e[i]=="!"){A s=e.1J(1Y,i);if(s==""){1e[1e.17-1]=["3J",1e[1e.17-1]].1p(L.fn)}Q{1e.1c(["3J",p(s)].1p(L.fn))}1Y=i+1}}A 7y=e.1J(1Y,e.17);if(7y!=""){1e.1c(p(7y))}}Q{A 7x=6c;if(!31(7x=1n(e))){D 7x}Q if(!/^2S[a-z\\d]{20}2S$/.2j(e)){A 3l=/^([\\d](\\.[\\d])?)([^\\d]+)$/(e);if(3l){1e.R=L.1i;1e.1c(p(3l[1]));1e.1c(3l[3])}Q{A 7w=e.2X(".");if(7w.17>1){1e.R=L.1i;7w.2E(J(v){1e.1c(p(v))})}Q{if(0&&e.17>1&&e[0]=="d"){1e.R=L.1i;1e.1c("d");1e.1c(p(e.1J(1)))}Q{D e;1e.R=L.5g;1e.1c(e)}}}}Q{1e.R=L.5g;1e.1c(e)}}1e=1e.2a(/^2S[a-z\\d]{20}2S$/,J(e){A 9i=1y[e.1J(4,24)];5H 1y[e.1J(4,24)];D 9i});3f(!3D,0)||1a.1l.1B.1x(3C.1J(0,3e)+"@>: "+2I.4V(1e));3e--;2K(1j 1e=="1V"&&1e.R==L.5g){1e=1e[0]}if(1e.17==2){if(1e[0].17==1&&1e[0]=="d"&&1e[1].17==1&&1e[1]=="dx"){D["46"].1p(L.7v)}}if(1e.R==L.1i){A 3r=0;1h(A i=0;i<1e.17;i++){if(1e[i].R==L.7v){3r++;A 7u=1e.2f(i,1)[0][0];A 7t=1e.2f(i).1p(L.1i);if(1e.17){D[7u,7t].1p(L.fn).1T(1e)}Q{D[7u,7t].1p(L.fn)}}}}D 1e}J bS(fn){if((fn!==1P)&&(1j fn=="J")){A 1G=J(x){D q};1G.R=L.7q;1G.f=fn;D 1G}Q{A 1G=[];1G.R=L.2P;1h(A i=0;i<9h.17;i++){1G.1c(p(9h[i]))}D 1G}};1z.1d.bR=J(){};1z.1d.im=J(){};1z.1d.bQ=J(o){if(o.R!=L.2P||q.R!=L.2P){21("I 9g it is 4m a 9f!")}};1z.1d.7p=J(o){if(o.R!=L.2P||q.R!=L.2P){21("I 9g it is 4m a 9f!")}A s=[];s.R=L.1k;A 9e=5Z(o.17,q.17);1h(A i=0;i<9e;i++){s.1L(q[i].1T(o[i]))}D s};1z.1d.bP=J(){if(q.R==L.2P){D q.7p(q.7s()).1I((0.5))}Q{D q.1T(q.7s()).1I((0.5))}};1z.1d.7s=J(){D q;D q.2a(/i/g,p("-i"))};1n.1d.3B=J(x){D q==x};1R.1d.3B=J(x){D q==x};1z.1d.3B=J(x){A 3r=1r;1h(A i=0;i<q.17;i++){if(q[i].3B(x)){D 1u}}D 1r};1R.1d.2a=J(a,b){if(a.2j&&a.2j(q.1o())){D b}if(q.1o()===a){D b}D q.1o()};1n.1d.2a=J(a,b){D 1n(q)};1z.1d.2a=J(a,b){A cp=[];cp.R=q.R;1h(A i=0;i<q.17;i++){if(1j q[i]=="1U"){if(a.2j){if(a.2j(q[i])){if(1j b=="J"){cp.1c(b(q[i]))}Q{cp.1c(b)}}Q{cp.1c(q[i])}}Q{1a.1l.1B.2Z("bO bN 1h .2a()")}}Q if(1j q[i]=="1V"){cp.1c(q[i].2a(a,b))}Q{cp.1c(q[i])}}D cp;q.2E(J(i){if(1j i=="1U"){if(a.2j){if(a.2j(i)){if(1j b=="J"){cp.1c(b(i))}Q{cp.1c(b.2a(a,b))}}Q{cp.1c(i)}}Q{if(1j a=="1U"){cp.1c(i.2a(a,b))}}}Q{cp.1c(i.2a(a,b))}});cp.R=q.R;D cp};1n.1d.5f=J(o){A 1i=[1n(q),p(o)];1i.R=L.27;D 1i};1R.1d.5f=J(o){A 1i=[];1i.R=L.27;1i.1c(p(q.1o()));1i.1c(p(o));D 1i};1z.1d.5f=J(o){if(q.R==L.27){q[1].1T(p(o));D q}A 1i=[q,p(o)];1i.R=L.27;D 1i};1z.1d.29=J(o){if(q.R==L.29){q[1]=q[1].1T(p(o))}D[q,p(o)].1p(L.29)};1R.1d.29=J(o){D[p(q.1o()),p(o)].1p(L.29)};1n.1d.29=J(o){D[1n(q),p(o)].1p(L.29)};1z.1d.1T=J(o){if(q.R==L.27){q[0]=q[0].1T(p(o));D q}A 4v=p(o);A 7r=4v.1M();if(7r===0){D 0}Q if(7r===1){D q}if(q.R==L.1i&&4v.R==L.1i){A 1G=q;4v.2E(J(e){1G.1c(e)});D q}Q if(q.R==L.2P||q.R==L.7q){D 1G.7p(o)}A 1k=[q,o];A 6b=q.R;q.1c(q.2f(0,q.17));q[0].R=6b;q.1c(p(o));q.R=L.1i;D q};1R.1d.2E=J(e){e(q.1o())};1n.1d.2E=J(e){e(1n(q))};1R.1d.1L=J(o){if(o==0){D q.1o()}if(q.1o()=="0"){D p(o)}D[p(q.1o())].1p(L.1k).1L(p(o))};1n.1d.1L=J(o){A 7o=p(o);if(7o.1M()==0){D 1n(q)}A 1k=[p(1n(q)),7o];1k.R=L.1k;D 1k};1n.1d.1M=J(o){D 1n(q)};1R.1d.1M=J(){if(q.1o()=="i"){D"i"}if(!31(q.1o())){D 1n(q.1o())}if(1C[q.1o()]){if(1j 1C[q.1o()]!="J"){D 1M(q.1o())}Q{D 6c}}D 6c};1z.1d.1M=J(){if(!q.17){1B.bM("bL: "+q.R)}if(q.2o()){D 1M(q.2c(1,1))}Q{D 6c}};1R.1d.1T=J(o){if(q.1o=="i"){D-1}if(o==1){D p(q.1o())}if(o==0){D 0}A 1k=[p(q.1o()),p(o)];1k.R=L.1i;D 1k};1n.1d.1T=J(o){if(q==0){if(p(o)==3y){D 1P}D 0}if(o==1){D 1n(q)}if(o==0){D 0}A 1k=[1n(q),p(o)];1k.R=L.1i;D 1k};1z.1d.1L=J(o){if(q.R==L.1k&&o.R==L.1k){A 1G=q;p(o).2E(J(e){1G.1c(e)});D q}if(q.R==L.1k){q.1c(p(o));D q}A 1k=[q,o];A 6b=q.R;q.1c(q.2f(0,q.17));q[0].R=6b;q.1c(p(o));q.R=L.1k;D q};1z.1d.7n=J(){A 5k=0;1h(A i=0;i<q.17;i++){if(1j q[i]=="1U"){5k+=q[i].17+6}Q if(1j q[i]=="2B"){5k+=5}Q{5k+=q[i].7n?4+q[i].7n():q[i].17}}D 5k};1z.1d.1p=J(e){q.R=e;D q};1n.1d.2m=J(){if(q==3y||q==-3y){D 1P}D 0};1R.1d.2m=J(){D 1n(q.1o()=="x")};1z.1d.2m=J(2Q){2Q=p(2Q).1M()||1;if(2Q<0){D q.7l(-2Q)}A 4u=[];4u.R=L.1k;if(q.2o&&q.2o()){D 0}if(q.R==L.1k){q.2E(J(e){4u.1L(e.2m())})}Q if(q.R==L.fn){A 7m;if(7m=8Q[q[0]]){D[7m.2a(/^x$/g,q[1]),q[1].2m()].1p(L.1i).1v()}Q{21("I bK\'t bJ 9b 9d 9c 9b "+q[0]+" J!")}D}Q if(q.R==L.27){A a=q[0];A b=q[1];D([[[a.2m(),b].1p(L.1i),[-1,b.2m(),a].1p(L.1i)].1p(L.1k),[b,b].1p(L.1i)].1p(L.27).1v());}Q if(q.R==L.29){A a=q[0];A b=q[1];D[[a.2m(),[a,[b,-1].1p(L.1k)].1p(L.29),b].1p(L.1i),[["1x",a].1p(L.fn),b.2m(),[a,b].1p(L.29)].1p(L.1i)].1p(L.1k).1v()}Q if(q.R==L.1i){if(q.17>1){A a=q[0];A b=q.5P(1).1p(L.1i);D[[a,b.2m()].1p(L.1i),[b,a.2m()].1p(L.1i)].1p(L.1k).1v()}Q if(q.17==1){D q[0].2m()}Q{1a.1l.1B.2Z("bI bH 2m 4F 1i");D 0}}Q{21("99 97 94: "+q.R);D}D 4u.1v()};1z.1d.7l=J(2Q){2Q=2Q||1;if(2Q<0){D q.2m(-2Q)}A 4u=[];4u.R=1k;A m;if(q.R!=L.1k){m=p(0);m.R=L.1k;m.1L(q)}Q if(q.R==L.1k){m=q}Q{21("99 97 94: "+q.R)}m.2E(J(e){m.1c(e.7l(2Q))});D m};1R.1d.6a=J(){D q.1o()};1R.1d.5e=J(){D q.1o()};1n.1d.5e=J(){D 1n(q)};1z.1d.5e=J(){D q;A 1b;if(q.R!=L.1k){82("?");1b=[].1p(L.1k).1L(1b)}Q{1b=q}A 2F=[];A 5h=[];5h.R=L.1k;A 5i=[];1h(A i=0;i<1b.17;i++){A 4t=0;A 5j;1h(A b=0;b<2F.17;b++){if(2F[b].2c()==1b[i].2c()){5j=b;4t=1;1N}Q if(1b[i].R==L.1i&&1b[i].17==2){if(1b[i][0]==2F[b]){5j=b;4t=1b[i][1];1N}Q if(1b[i][1]==2F[b]){5j=b;4t=1b[i][0];1N}}}if(4t!==0){5i[5j].1L(4t)}Q{5i.1c([1].1p(L.1k));2F.1c(1b[i])}}1h(A i=0;i<2F.17;i++){if(5i[i]==1){5h.1L(2F[i])}Q{5h.1L(2F[i].1T(5i[i]))}}D 5h};1z.1d.bG=1z.1d.5e;1z.1d.6a=J(){if(q.R==L.93||q.R==L.2B){D}Q if(q.R==L.5g){D q}if(!q.3B("x")){21("73 4m bF 6a.");D}A 1b=[];if(q.R==L.27){1b.R=L.1i;1b.1c(q[0].2a(/^x$/g,"y"));1b.1c(p(1).5f(q[1].2a(/^x$/g,"y")))}Q{1b=q.2a(/^x$/g,"y")}A 1m=[p("x")];1m.R=L.1k;A 7k=0;2K(1){7k++;if(1b.R==L.1i){A 4s=1r;1h(A i=0;i<1b.17;i++){if(!1b[i].3B("y")){4s=1u;1m=1m.5f(1b.2f(i,1).1p(L.1i));i--}}if(!4s){1b=1b.bE("x")}}Q if(1b.R==L.1k){A 4s=1r;1h(A i=0;i<1b.17;i++){if(!1b[i].3B("y")){4s=1u;1m=1m.1L(1b.2f(i,1).1p(L.1k).1T(-1));i--}}if(!4s){1b=1b.5e()}}Q if(1b.R==L.29){if(1b[0].3B("y")){1m=p("l^(1/b)").2a(/l/g,1m).2a(/b/g,1b[1]);1b=1b[0]}Q{1m=[["1x",1m].1p(L.fn),["1x",1b[0]].1p(L.fn)].1p(L.27);1b=1b[1]}}Q{D"1b.R is bD Q: "+1b.R+": "+1b}2K(1b.17==1){if(1b[0]=="y"){D 1m}1b=1b[0]}if(7k>3){21("bC 1h y: "+1m.2c()+"="+1b.2c());D}}D 1m};J 7j(n){1h(A i in 4L){2K(i.17>1&&n.2l("\\\\"+i)!=-1){n=n.1D("\\\\"+i,4L[i])}}D n.1D(/\\*\\(\\)/g,"*(1)").1D(/\\{ \\}/g,"{1}").1D(/6A\\{([^\\}\\{]+)\\}/g,"6A$1").1D(/\\}\\{/g,")/(").1D(/\\}/g,"))").1D(/\\{/g,"((").1D(/\\\\/g,"")}J 7Y(n){D p(7j(n)).1v()}J 6n(n){n=7j(n);A eq=p(n);A 1X=[];if(eq.R==L.67){if(eq[0]=="y"){1X.1c(eq[1])}Q{4C{1X.1c(eq[0].2a(/^y$/g,"x").1v().6a().1v().2a(/x/g,eq[1].1v()))}4z(ex){21("bB: "+ex)}}}Q{if(eq.1v){eq=eq.1v()}1X.1c(eq)}A 2G={"f":J(){21("bA a J")}};A 5d="(J(1f){";2G.2v=[];if(1X.17){1B.1x(1X);A 3Z=1X[0].1v().2c(0,1u);2G.f=1M("("+"J(x){D "+3Z+";})");5d+="1f.3u();A x=3b;1f.3a(x,"+3Z+");1h(A x=3b;x<3U;x+=(3U-3b)/2L){"+"1f.37(x,"+3Z+");}1f.3t();";4C{}4z(ex){}1h(A i=1;i<1X.17;i++){A 3Z=1X[i].1v().2c(0,1u);5d+="1f.3u();A x=3b;1f.3a(x,"+3Z+");1h(A x=3b;x<3U;x+=(3U-3b)/2L){"+"1f.37(x,"+3Z+");}1f.3t();";4C{}4z(ex){}}}5d+="})";2G.4J=1X;2G.45=1M(5d);D 2G}1R.1d.5J=J(){A e=19.1q("1w");e.1g(19.1F(q.1o()));D e};1n.1d.5J=J(){A e=19.1q("1w");e.1g(19.1F(q.1o()));D e};1z.1d.5J=J(){A e=19.1q("1w");e.1g(19.1F(q.2c()));D e};1R.1d.2o=J(){if(q.1o()=="e"){D 2}if(q.1o()=="π"){D 2}if(1C[q.1o()]){if(1j 1C[q.1o()]!="J"){D 1u}}D 1r};1n.1d.2o=J(){D 1u};1z.1d.2o=J(){if(q.R==L.fn&&1C[q[0]]&&1j 1C[q[0]]=="J"){if(q[0]=="46"){D 4}D q[1].2o()}A 5Y=1u;1h(A i=0;i<q.17;i++){if(1j q[i]=="2B"){}Q if(q[i].2o){A 3A;if(!(3A=q[i].2o())){D 1r}if(3A==4){D 4}}}D 1u};1R.1d.1v=J(){D q.1o()};1n.1d.1v=J(){D 1n(q)};7i.1d.1M=J(){D 31};7i.1d.2o=J(){D 2};1z.1d.3X=J(){A 2G=1;if(q.R==L.1k){D 1}if(q.R==L.fn){D 1}Q if(q.R==L.1i){1h(A i=0;i<q.17;i++){if(q[i].3X){2G=2G.1T(q[i].3X())}}}Q if(q.R==L.27){A 3W=q[0];A 3z=q[1];q.R=q[0].R;q.2f(0);1h(A n=0;n<3W.17;n++){q.1c(3W[n])}if(!q.17){q.1c(1)}2G=2G.1T(3z)}Q{}D 2G};1z.1d.1v=J(8Z,8Y){if(q.17==1){D q[0].1v()}if(q.R==L.27&&q[1].1M()===1){D q[0]}if(q.2o&&q.2o()===1u){D q.1M()}1h(A i=0;i<q.17;i++){2K(i<q.17&&((1j q[i])=="1V")&&q[i].17==1){q[i]=q[i][0]}if(q[i].2o&&q[i].2o()===1u){q[i]=q[i].1M()}Q{q[i]=q[i].1v(1u)}}if(8Z){D q}if(q.R==L.fn){q[1]=q[1].1v();if(q[0]=="1x"&&q[1]=="e"){D 1}if(q[0]=="46"){if(q.17!=2){21("bz 7h bx")}D q[1].2m()}D q}Q if(q.R==L.27){q[1]=q[1].1v();A 3Y=q[1].1M();if(!31(3Y)){if(3Y==1){D q[0].1v()}Q if(3Y==3y){D 0}Q if(3Y==-3y){D-0}if(3Y!=1){q[0]=q[0].1T(1/3Y)}D q[0].1v()}q[0]=q[0].1v();if(q[0].3X){q[1]=q[1].1T(q[0].3X()).1v()}if(q[1].3X){q[0]=q[0].1T(q[1].3X()).1v()}if(8Y){D q}Q{D q.1v(0,1)}}Q if(q.R==L.29){q[1]=q[1].1v();if(q[1].1M()===1){D q[0].1v()}q[0]=q[0].1v()}Q if(q.R==L.1i){1h(A i=0;i<q.17;i++){q[i]=q[i].1v();if(q[i]===0){D 0}Q if(q[i]===1){q.2f(i,1);i--}}1h(A i=0;i<q.17;i++){A 2V=1;2K(i<q.17&&1j q[i]=="1V"&&q[i].R==L.1i){A 2F=q.2f(i,1)[0];1h(A n=0;n<2F.17;n++){q.1c(2F[n])}}if(i<q.17&&1j q[i]=="1V"&&q[i].R==L.27){A 5c=q.2f(i,1)[0];A 3W=q.2f(0);if(!3W.17){3W.1c(1)}5c[0]=5c[0].1T(3W);q.R=L.27;q.1c(5c[0]);q.1c(5c[1])}if(q.R!=L.1i){D q.1v()}}A 2V=1;1h(A i=0;i<q.17;i++){if(1j q[i]=="2B"){2V*=q[i];q.2f(i,1);i--}}if(2V!==1){q.1c(2V)}Q if(2V===0){D 0}}Q if(q.R==L.1k){A 2V=0;1h(A i=0;i<q.17;i++){q[i]=q[i].1v();2K(i<q.17&&1j q[i]=="2B"){2V+=q[i];q.2f(i,1)}}if(2V!==0){q.1c(2V)}}A z=q;2K(1j z=="1V"&&z.17==1){z=z[0]}D z};1R.1d.2c=J(){D q.1o()};1n.1d.2c=J(){D q.1o()};J 46(x){D p(x).2m()}J 2U(e){D e.1o()}1z.1d.2c=J(61,4r){A s=61?"(":"";A 1G=q;A 68=1u;A 4q="";A 66="";A 7f=1u;q.2E(J(e){if(!68){7f=1r}if(68){if(4r&&1G.R==L.29){s+="1I(";4q=")"}if(!4r&&1G.R==L.7g){s+="±"}Q if(61&&1G.R==L.2P){s+="[";4q="]"}Q if(1G.R==L.fn){if(1j e!="1U"&&1j e!="J"){21("J bw is 4m a 1U: "+e);D"8X"}if(8W.2l(e)==-1){21("bv J: "+e);D"8X"}66="(";4q=")"}68=1r}Q if(1G.R==L.1k){s+="+"}Q if(1G.R==L.1i){s+="*"}Q if(4r&&1G.R==L.29){s+=","}Q if(1G.R==L.67){s+="="}Q if(1G.R==L.29){s+="^"}Q if(1G.R==L.27){s+="/"}Q if(1G.R==L.fn){if(7f){s+=","}}Q{s+=","}if(e.R==L.2P){s+=e.2c(0,4r)}Q{s+=e.2c(10,4r)}s+=66;66=""});s+=4q;4q="";if(61){s+=")"}D(s.1D(/(\\-\\-)+/g,"+").1D(/\\+\\++/g,"+").1D(/\\-\\+/g,"-").1D(/\\+\\-/g,"-"))};8W="2w,3d,3i,7e,5b,60,8V,1x,3s,1I,3h,8U,2Y,W,3J,8T,bu,u,8S,5V,5U,7d,bt,bs,br,8R,3j,4p,5X,5O,7c,7b,5a,5Z,5Y,48,2U,8P,5W,Γ,ψ,46".2X(",");1C.bq=33;A 8Q={"1x":p("1/x"),"2w":p("3d(x)"),"3d":p("-2w(x)"),"3i":p("1/(3d(x)*3d(x))"),"3s":p("3s(x)"),"5X":p("8P(x)"),"u":p("5W(x)"),"2Y":p("(x^(-1/2))*0.5"),"5V":p("1/2Y(1-x^2)"),"5U":p("-1/2Y(1-x^2)"),"3J":p("Γ(x+1)*ψ(x+1)"),"3h":p("Γ(x)*ψ(x)"),"Γ":p("Γ(x)*ψ(x)")};if(p("(1/(1*x))*(2*1*1*1*2/3*3*0.5)").1v().2c()!="2/x"){1a.1l.1B.2Z("bp bo bn")}if(!q.2I){q.2I={}}(J(){J f(n){D n<10?\'0\'+n:n}if(1j 8O.1d.3V!==\'J\'){8O.1d.3V=J(3c){D 8w(q.8N())?q.bm()+\'-\'+f(q.bl()+1)+\'-\'+f(q.bk())+\'T\'+f(q.bj())+\':\'+f(q.bi())+\':\'+f(q.bh())+\'Z\':2T};1R.1d.3V=1n.1d.3V=bg.1d.3V=J(3c){D q.8N()}}A cx=/[\\bf\\8M\\8L-\\8K\\8J\\8I\\8H\\8G-\\8F\\8E-\\8D\\8C-\\8B\\8A\\8z-\\8y]/g,5T=/[\\\\\\"\\bd-\\bc\\bb-\\ba\\8M\\8L-\\8K\\8J\\8I\\8H\\8G-\\8F\\8E-\\8D\\8C-\\8B\\8A\\8z-\\8y]/g,2q,56,8x={\'\\b\':\'\\\\b\',\'\\t\':\'\\\\t\',\'\\n\':\'\\\\n\',\'\\f\':\'\\\\f\',\'\\r\':\'\\\\r\',\'"\':\'\\\\"\',\'\\\\\':\'\\\\\\\\\'},3w;J 5S(1U){5T.8u=0;D 5T.2j(1U)?\'"\'+1U.1D(5T,J(a){A c=8x[a];D 1j c===\'1U\'?c:\'\\\\u\'+(\'8t\'+a.8s(0).1o(16)).5P(-4)})+\'"\':\'"\'+1U+\'"\'}J 2M(3c,4n){A i,k,v,17,57=2q,2O,1s=4n[3c];if(1s&&1j 1s===\'1V\'&&1j 1s.3V===\'J\'){1s=1s.3V(3c)}if(1j 3w===\'J\'){1s=3w.5Q(4n,3c,1s)}5r(1j 1s){1O\'1U\':D 5S(1s);1O\'2B\':D 8w(1s)?1R(1s):\'2T\';1O\'6T\':1O\'2T\':D 1R(1s);1O\'1V\':if(!1s){D\'2T\'}2q+=56;2O=[];if(7a.1d.1o.b9(1s)===\'[1V 1z]\'){17=1s.17;1h(i=0;i<17;i+=1){2O[i]=2M(i,1s)||\'2T\'}v=2O.17===0?\'[]\':2q?\'[\\n\'+2q+2O.5R(\',\\n\'+2q)+\'\\n\'+57+\']\':\'[\'+2O.5R(\',\')+\']\';2q=57;D v}if(3w&&1j 3w===\'1V\'){17=3w.17;1h(i=0;i<17;i+=1){k=3w[i];if(1j k===\'1U\'){v=2M(k,1s);if(v){2O.1c(5S(k)+(2q?\': \':\':\')+v)}}}}Q{1h(k in 1s){if(7a.8v.5Q(1s,k)){v=2M(k,1s);if(v){2O.1c(5S(k)+(2q?\': \':\':\')+v)}}}}v=2O.17===0?\'{}\':2q?\'{\\n\'+2q+2O.5R(\',\\n\'+2q)+\'\\n\'+57+\'}\':\'{\'+2O.5R(\',\')+\'}\';2q=57;D v}}if(1j 2I.4V!==\'J\'){2I.4V=J(1s,4o,4Z){A i;2q=\'\';56=\'\';if(1j 4Z===\'2B\'){1h(i=0;i<4Z;i+=1){56+=\' \'}}Q if(1j 4Z===\'1U\'){56=4Z}3w=4o;if(4o&&1j 4o!==\'J\'&&(1j 4o!==\'1V\'||1j 4o.17!==\'2B\')){21 4y 8d(\'2I.4V\')}D 2M(\'\',{\'\':1s})}}if(1j 2I.4B!==\'J\'){2I.4B=J(2U,77){A j;J 75(4n,3c){A k,v,1s=4n[3c];if(1s&&1j 1s===\'1V\'){1h(k in 1s){if(7a.8v.5Q(1s,k)){v=75(1s,k);if(v!==1P){1s[k]=v}Q{5H 1s[k]}}}}D 77.5Q(4n,3c,1s)}2U=1R(2U);cx.8u=0;if(cx.2j(2U)){2U=2U.1D(cx,J(a){D\'\\\\u\'+(\'8t\'+a.8s(0).1o(16)).5P(-4)})}if(/^[\\],:{}\\s]*$/.2j(2U.1D(/\\\\(?:["\\\\\\/b8]|u[0-9a-fA-F]{4})/g,\'@\').1D(/"[^"\\\\\\n\\r]*"|1u|1r|2T|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g,\']\').1D(/(?:^|:|,)(?:\\s*\\[)+/g,\'\'))){j=1M(\'(\'+2U+\')\');D 1j 77===\'J\'?75({\'\':j},\'\'):j}21 4y b7(\'2I.4B\')}}}());1z.1d.4H=J(8r){A 3v=q.2l(8r);if(3v!==-1){q.2f(3v,1)}};1R.1d.8h=J(){D q.b6(0).b5()+q.5P(1)};A 1a={};A 3b=-10;A 3U=10;A 3M=10;A 3L=-10;A 2L,2R;A 7V=["73 4m b4"];1a.3q={"4g":1.5,"4f":1u,"2v":1r};1a.1l=(J(){A 4c=1u;A 4W=/[b3]eb[b2]it/.2j(4Y.4X);A 2u;A 1f;A 3p,2y,5F,2h;A 2s;J 6v(){2L=1C.6J||19.2z.8q;2R=1C.6I||19.2z.8p||8o;2s.1E.b1=~~(2R-85)+"1W";1K.2L=2L;1K.2R=2R;1f&&2u()}A 2D=b0;A 2C=aZ;A 5N=2D;A 5M=2C;A 4O;A 1S=64;A 2i=1S;A 6L=1S;A 1Z;A 3T=0;A 3S=0;A cx=(1C.6J||19.2z.8q||aY)/-3;A cy=(1C.6I||19.2z.8p||8o)*2/3;A cz=aX;J 2u(){e=1t.E;2k=1t.4l;if(!1f){D}1f.aW="aV";1f.70=1f.8n="aU";1f.aT(0,0,2L,2R);3b=cx/1S;3U=(2L+cx)/1S;3L=-(2R-cy)/2i;3M=cy/2i;1Z=1I(2,6-1t.5O(1x(1S)/1x(2)));A 4i=1Z*~~(3b/1Z)-1Z;A 4h=1Z*~~(3U/1Z)+1Z;A 4j=1Z*~~(3M/1Z)+1Z;A 4k=1Z*~~(3L/1Z)-1Z;1f.4g=2;1f.aS="aR aQ-aP";1f.3u();1f.3a(4i,0);1f.37(4h,0);1f.3t();1f.3u();1f.3a(0,4k);1f.37(0,4j);1f.3t();1f.70="#aO";1f.4g=0.1;1h(A x=4i;x<=4h;x+=1Z/4){1f.3u();1f.3a(x,4k);1f.37(x,4j);1f.3t()}1h(A y=4k;y<=4j;y+=1Z/4){1f.3u();1f.3a(4i,y);1f.37(4h,y);1f.3t()}1f.4g=0.4;1h(A x=4i;x<=4h;x+=1Z){1f.3u();1f.3a(x,4k);1f.37(x,4j);1f.3t()}1h(A y=4k;y<=4j;y+=1Z){1f.3u();1f.3a(4i,y);1f.37(4h,y);1f.3t()}1f.4g=1a.3q.4g;1H.2E(J(e){if(!e.8f){1f.70=1f.8n=e.4G;e.45(1f);if(1a.3q.4f&&e.f){A 4f=e.f(0);if(!31(4f)){if(1a.3q.3O){1f.3O(4f.8m(),10-cx,cy-2i*4f)}}}if(1a.3q.2v&&e.2v){e.2v.2E(J(2v){if(1a.3q.3O){1f.3O(2v.2c(),1S*2v-cx.1M(),cy-10)}})}}});}A 5L=0;J 7Q(e){if(!4c){D}5N=2D=e.x||e.6Z;5M=2C=e.y||e.6Y;4O=1u;1K.1E.6x="aN(6K.89), 6K";if(!5L){6s(6X,6W);5L++}};J 6w(e){if(!4c){D}e=e||1C.3k;if(e.x!==1P){2D=e.x;2C=e.y}Q{2D=e.6Z;2C=e.6Y}if(4O){3T+=2D-5N;3S+=2C-5M;if(4W){1K.1E["-4W-8k"]="3H("+3T+"1W,"+3S+"1W)"}Q{1K.1E.1m=3T+"1W";1K.1E.8i=3S+"1W"}}5N=2D;5M=2C};A 4e=0.aM;if(/aL/.2j(4Y.4X)){4e=0.8l}if(/aK/.2j(4Y.4X)){4e=0.aJ}if(/aI/.2j(4Y.4X)){4e=0.aH}if(!/aG aF X/.2j(4Y.4X)){4e=0.1}J 5D(e){if(!4c){D}e=e||1C.3k;if(e.x!==1P){2D=e.x;2C=e.y}Q{2D=e.6Z;2C=e.6Y}A ex=1t.3s(e.aE*4e);1S*=ex;2i*=ex;A dx=2D+cx;A dy=2C-cy;if((dx*dx+dy*dy)>6W){cx=ex*(2D+cx)-2D;cy+=2C+ex*(cy-2C)-cy}2u();e.aD();D 1r}J 6y(){cx-=3T;cy+=3S;3T=3S=0;if(4W){1K.1E["-4W-8k"]="3H(8j,8j)"}Q{1K.1E.1m=3T+"1W";1K.1E.8i=3S+"1W"}}J 6X(){if(4O){6y();2u();6s(6X,6W)}Q{5L--}}J 6G(1y){A w=19.1q("2r");w.2g="aC";A 3R=1j 1y;if(1y===2T){3R="1P"}if(3R=="J"&&1y.17!=1P&&1y[0]!=1P){3R="1V"}3R=3R.1o();5r(3R){1O"2B":A fn=19.1q("4T");fn.1g(19.1F(1y));w.1g(fn);D w;1N;1O"1U":A fn=19.1q("2N");fn.1g(19.1F("\\""+1y+"\\""));w.1g(fn);D w;1N;1O"6T":w.1g(19.1F(1y));D w;1N;1O"1P":1O"J":A fn=19.1q("i");if(1y===1P){fn.1g(19.1F("1P"))}Q if(1y===2T){fn.1g(19.1F("2T"))}Q{fn.1g(19.1F(1y.1o()))}w.1g(fn);D w;1N;1O"1V":A 3r=1r;J 6S(i){A 1A=19.1q("1A");A 3Q=1j 1y[i];if(1y[i]===2T||1y[i]===1P){3Q="1P"}5r(3Q){1O"J":1O"1V":A b=19.1q("b");b.1g(19.1F(i+": "));A 1w=19.1q("1w");1w.1g(b);1w.1g(19.1F((1j(1y[i])).8h()));1A.1g(1w);1A.1y=1y[i];A 6V=19.1q("1w");6V.2g="8g";1A.1g(6V);1A.6U=1r;1A.2g="5A";1A.2p("aB",J(e){e.4N();if(q.2g=="4a"){q.2g="5A";D}q.2g="4a";if(!q.6U){q.6R("8g")[0].1g(6G(q.1y));q.6U=1u}D 1r},1r);1N;5E:A b=19.1q("b");1A.2g="aA";b.1g(19.1F(i+": "));1A.1g(b);A 2M=1y[i];if(3Q=="1P"){A 2N=19.1q("i");2N.1g(19.1F(2M));1A.1g(2N)}Q if(3Q=="6T"){1A.1g(19.1F(2M))}Q if(3Q=="1U"){A 2N=19.1q("2N");2N.1g(19.1F("\\""+2M+"\\""));1A.1g(2N)}Q if(3Q=="2B"){A 2N=19.1q("4T");2N.1g(19.1F(2M));1A.1g(2N)}Q{1A.1g(19.1F(2M))}}w.1g(1A)}if(1y.az!=1z.1d){1h(i in 1y){3r=1u;6S(i)}}if(!3r){if(1y.17!==1P){1h(A i=0;i<1y.17;i++){3r=1u;6S(i)}if(!3r){w.1g(19.1F(1y));D w}}Q{w.1g(19.1F(1y));D w}}1N;5E:}D w}A 2r;A 1l={"4H":J(n){if(!2r){2r=19.5u("1H")}2r.5t(n)},"43":J(){1C.4D=1K.ay("ax/43")},"1L":J(n){A 1A=5F.7R(1u);1A.id="eq-"+n.3I;if(!2r){2r=19.5u("1H")}2r.1g(1A);A 2A=1A.6R("7S")[0];A 3P=1A.5B("7W")[0];A 6P=1A.2J;A 6Q=1A.2J.2J;A 8e=1A.6R("5H")[0];2A.1g(19.1F(n.6m||""));6Q.2p("aw",J(e){1h(A i=0;i<1H.17;i++){if(1H[i].3I==n.3I){1H[i].8f=!6Q.6E;2u();1N}}},1r);2A.2p("4P",J(e){e.4N()},1r);6P.1E.7U=n.4G;6P.2p("4P",J(e){e.4N()},1r);8e.2p("4P",J(e){1a.4H(1A);e.4N()},1r);1A.2p("4P",J(e){$(2A).6N({R:"5K",8c:1u,4U:65});$(2A).6N({R:"5K",4U:39});2A.5B("6u")[0].6t()},1r);$(2A).3o("80");$(2A).3o("7Z");2A.av=J(){1h(A i=0;i<1H.17;i++){if(1H[i].3I==n.3I){A 6O=$(2A).3o("3g");1H[i].6m=6O;4C{A c=6n(6O)}4z(ex){3P.2J.6M="8d: "+2I.4V(ex).1o();3P.1E.3m="41";D}3P.2J.6M="";3P.1E.3m="3K";1H[i].f=c.f;1H[i].45=c.45;1H[i].4J=c.4J;1H[i].2v=c.2v;2u();1N}}};if(!n.4I){$(2A).6N({R:"5K",8c:1u,4U:65});2A.5B("6u")[0].6t()}3P.2J.6M="";3P.1E.3m="3K";D 1A},"5w":{"5v":("#8b,#au,#at,#8b,#as,#ar,#aq,#ap,#ao,#an,#am,#al,#ak,#7T".2X(",")),},"5s":J(){if(2u){2u()}},"41":J(8a){4c=8a?1r:1u},"4E":J(x,y,z){1S*=x||1;2i*=y||x||1;6L*=y||x||1;2u()},"3H":J(x,y,z){cx+=x||0;cy+=y||0;cz+=z||0;2u()},"6k":J(x,y,z){cx=1S*(x||0)-2L/2;cy=2i*(y||0)+2R/2;cz=6L*(z||0)-2L/2;2u()},"5o":J(3G){(4y 7G()).7F="6K.89";1K=19.1q("1K");if(3G){1K.2L=1C.6J;1K.2R=1C.6I}19.2z.1g(1K);if(1K.86){1f=1K.86("2d");if(!1a.3q.3O){1a.3q.3O=1f.3O?1u:1r}}Q{82("aj!")}1K.1E.ai="ah";1K.1E.6x="5E";1K.1E.ag="af";3p=19.1q("1w");if(!3G){3p.1E.3m="3K"}3p.id="3p";3p.2g="81";3p.1g(19.1F("(0,0)"));19.2z.1g(3p);2y=19.1q("1w");2y.id="2y";2y.2g="7X";2y.1E.3m="3K";2s=19.1q("1w");2s.id="2s";2s.2g="81";A 6H=19.1q("4T");6H.id="2h";2y.1g(2s);2y.1g(6H);19.2z.1g(2y);2h=19.5u("2h");$(2h).3o("80");$(2h).3o("7Z");2h.2p("5K",J(3k){if(3k.4U==13){2h.1Y=$(2h).3o("3g");A 3N=7Y(2h.1Y).1v();if(3N.go){3N=3N.go()}if(!3N.2o()){1a.1l.1B.1x(((3N.2c().5J())))}Q{1a.1l.1B.1x(6G(5y.1M(3N.2c(0,1))))}$(2h).3o("3g","")}Q if(3k.4U==38&&3k.ae){if(!/\\\\[a-z]*|[^\\s]/ig.2j(2h.1Y)){2h.1Y=" "}$(2h).3o("3g",2h.1Y)}},1r);A 1X=19.1q("1w");1X.2g="7X";1X.id="1X";if(!3G){1X.1E.3m="3K"}A 6F=19.1q("2r");6F.id="1H";1X.1g(6F);A 4d=19.1q("1A");A 4S=19.1q("1w");A 6B=19.1q("7W");6B.1g(19.1F(7V[0]));4S.2g="b";4S.1E.7U="#7T";A 5I=19.1q("4R");5I.R="ad";5I.6E="6E";4S.1g(5I);A 6D=19.1q("4T");6D.2g="7S";A 6C=19.1q("4T");6C.2g="5H";4d.1g(4S);4d.1g(6D);4d.1g(6C);4d.1g(6B);A 3n=19.1q("1w");3n.2g="3n";A 1Q=19.1q("4R");1Q.1s="+";1Q.R="5G";1Q.6z=J(){1a.1L()};3n.1g(1Q);A 1Q=19.1q("4R");1Q.1s=">6A";1Q.R="5G";1Q.6z=J(){1a.1B()};3n.1g(1Q);A 1Q=19.1q("4R");1Q.1s=".43";1Q.R="5G";1Q.6z=J(){1a.43()};3n.1g(1Q);A 4Q=19.1q("a");4Q.ac="ab://4x.6j/aa/";4Q.a9="a8";A 1Q=19.1q("4R");1Q.1s="";1Q.1E.a7="3K";1Q.R="5G";4Q.1g(1Q);3n.1g(4Q);1X.1g(3n);19.2z.1g(1X);5F=4d.7R(1u);5F.a6("id");1C.a5=6v;1K.a4=7Q;19.2z.2p("4P",J(){if(!4c){D}4O=1r;6y();1K.1E.6x="5E";2u()},1r);19.2z.2p("6w",6w,1r);1C.2p("5D",5D,1r);2y.2p("5D",J(e){e.4N()},1r);19.2z.5t(19.2z.2J);1f.3a=J(1W,2t,7P){D 1f.5C(1S*1W-cx,cy-2i*2t);D;if(!31(2t)){if(2t>3M*4){1f.5C(1S*(1W-cx),2i*(cy-3M*4));D}Q if(2t<3L*4){1f.5C(1S*(1W-cx),2i*(cy-3L*4));D}1f.5C(1S*(1W+cx),2i*(-cy-2t))}};1f.37=J(1W,2t,7P){D 1f.4M(1S*1W-cx,cy-2i*2t);1f.4M(1S*1W-cx,cy-2i*2t);D;if(!31(2t)){if(2t>3M*4){1f.4M(1S*(1W-cx),2i*(cy-3M*4));D}Q if(2t<3L*4){1f.4M(1S*(1W-cx),2i*(cy-3L*4));D}1f.4M(1S*(1W-cx),2i*(cy-2t))}};6v()}};A 4b=1r;1l.1B={"4a":J(){2y.1E.3m="41";4b=1u},"48":J(){2K(2s.2J){2s.5t(2s.2J)}D"a3"},"5A":J(){2y.1E.3m="3K";4b=1r},"7I":J(){if(!4b){1a.1l.1B.4a();2h.5B("6u")[0].6t();D}1a.1l.1B.5A()},"2Z":J(x,5z){A 1w=19.1q("1w");A 2Z=19.1q("1w");2Z.2g="2Z";1w.1g(2Z);if(1j x!="1V"){1w.1g(19.1F(x))}Q{1w.1g(x)}2s.1g(1w);if(!5z&&!4b){1a.1l.1B.4a()}},"1x":J(x,5z){if(1j x!="1V"){A 1w=19.1q("1w");1w.1g(19.1F(x));2s.1g(1w)}Q{2s.1g(x)}if(!5z&&!4b){1a.1l.1B.4a()}}};D 1l})();J 48(){D 1a.1l.1B.48()}A 5y=(J(){A 5y={"1M":J(d){D 1C.1M(d)},"48":J(){D 1a.1l.1B.48()}};D 5y})();A 1H=[];J a2(3l,4K){if(4K==",")D"";if(4L[4K]!==1P)D 4L[4K];D 4K}J a1(3k){if(1C.7O){6s(J(){7O.a0("9Z",3k)},20)}};6o="x^2@3x@2e^{-x}@2x+3@\\\\6r=3@e^{-\\\\6r*x}@\\\\1m(0.5,0.5\\\\1b)@\\\\5x{n=1}^{\\\\6q}\\\\3F{\\\\2w\\\\1m(9Y\\\\1b)}n@\\\\7N{1}^{4}x-n	m:9X@\\\\1m|x^2-4\\\\1b|+2@\\\\9W@x^{-2}@x!@\\\\3j x@\\\\5x{n=1}^{\\\\6q}\\\\3F{x^n}{n}@\\\\2w x@e^x:\\\\1m[−2,2\\\\1b]@\\\\3i\\\\1m(x\\\\1b)@\\\\1m(x+2\\\\1b)\\\\1m(x-3\\\\1b)^2	46\\\\1m(0,2,2x\\\\1b)@\\\\1m(x-2\\\\1b)^2@\\\\5x{n=1}^{\\\\6q}\\\\3F{\\\\2w\\\\1m(\\\\1m(2n−1\\\\1b)x\\\\1b)}{2n−1}@\\\\7N{n=1}^5\\\\1m(x-n\\\\1b)@\\\\5x{n=0}^5n@x^x@\\\\3h\\\\1m(x\\\\1b)@\\\\3F{x!}{3!-x}@x%3@\\\\1m(x>3\\\\1b)?2x:-3@\\\\3J\\\\1m(x\\\\1b)@\\\\3F\\\\6p x@\\\\1m(x>=0\\\\1b)?7M*G/\\\\1m(7L+9V\\\\1b)^2:1P@g\\\\1m[0\\\\1b]\'\\\\1m(2x\\\\1b)@g\\\\1m[0\\\\1b]\\\\1m(x\\\\1b)+1@\\\\2Y x".2X("@");A 7K=0;J 7J(){D 6o[(7K++)%6o.17]}A 4x=J(n){A 3g=n;A 4I=0;if(n){4I=1u}Q{3g=7J()}A t={};A c=6n(3g);t.f=c.f;t.2v=c.2v;t.4J=c.4J;t.45=c.45;t.6m=3g;t.3I=6l();t.4G=1a.1l.5w.5v.9U();t.4I=4I;t.9T=1a.1l.1L(t);D t};1a.6i="9S";1a.1L=J(n){1H.1c(4y 4x(n));1a.1l.5s()};1a.43=J(){1a.1l.43()};1a.1B=J(){1a.1l.1B.7I()};1a.4H=J(n){if(1j n!="1U"){A id=n.id.1J(3);1a.1l.4H(n);n=id}1h(A i=0;i<1H.17;i++){if(1H[i].3I==n){1a.1l.5w.5v.1c(1H[i].4G);1H.2f(i,1);1N}}1a.1l.5s()};1a.4F=J(n){1h(A i=0;i<1H.17;i++){1a.1l.5w.5v.1c(1H[i].4G);1H.2f(i,1)}A 2r=19.5u("1H");2K(2r.2J){2r.5t(2r.2J)}1a.1l.5s()};J 5q(m){A s=m.9R.2X(/[:,]/);5r(s[0]){1O"1L":1a.1L(s[1]);1N;1O"41":1a.1l.41(1);1N;1O"9Q":1a.1l.41(0);1N;1O"3H":1a.1l.3H(s[1],s[2],s[3]);1N;1O"4F":1a.4F();1N;1O"4E":1a.1l.4E(s[1],s[2],s[3]);1N;1O"6k":1a.1l.6k(s[1],s[2],s[3]);1N}}if(1C.2p){1C.2p("5q",5q,1r)}Q{1C.9P("9O",5q)}1C.2p("9N",J(){1a.4F();1a.1L(4D.2S.1J(1))},1r);1a.3H=J(x,y,z){1a.1l.3H(1n(x),1n(y),1n(z))};1a.4E=J(x,y,z){1a.1l.4E(1n(x),1n(y),1n(z))};1a.5o=J(1w){A 3G=!1C.9M.17;1a.1l.5o(3G);if(4D.2S!=""&&4D.2S!="#"){1a.1L(4D.2S.1J(1))}Q if(3G){A 4A;if(1C.7H){4A=7H.9L("4x.6j");if(4A){4C{4A=2I.4B(4A)}4z(ex){}}}1a.1L("\\\\3F{d}{dx}\\\\1m(e^x+x^3\\\\1b)")}A 1w=19.1q("1w");A 5p=4y 7G();5p.7F="9K.9J";5p.1E.9I="1m";1w.1g(5p);1w.1g(19.1F("4x.6j - 6i "+1a.6i));1w.1E.2R="9H";1a.1l.1B.1x(1w,1u);1a.1l.1B.1x("9G by 9F d/dx (1/x)",1u);};1a.5o();',62,1209,'||||||||||||||||||||||||||this||||||||||var|||return||||||function||eqtype|||||else|type||||||||||||||||length||document|app|right|push|prototype|terms|ctx|appendChild|for|product|typeof|sum|ui|left|Number|toString|setType|createElement|false|value|Math|true|simplify|div|log|obj|Array|li|console|window|replace|style|createTextNode|self|graphs|pow|substring|canvas|add|eval|break|case|undefined|newfuncbtn|String|scalex|multiply|string|object|px|funcs|last|gridsize||throw||||||fraction||power|dreplace|num|getString|||splice|className|conin|scaley|test|pi|indexOf|differentiate||canEval|addEventListener|gap|ul|logt|py|draw|xc|sin||con|body|inputbox|number|my|mx|forEach|_0|ret|inp|JSON|firstChild|while|width|str|strong|partial|discretevector|times|height|hash|null|text|_1|nextisinverse|split|sqrt|warn||isNaN||||||line|||move|boundleft|key|cos|level|__debug|latex|Gamma|tan|ln|event|match|display|buttons|mathquill|ptd|config|found|exp|stroke|beginPath|index|rep||Infinity|denom|res|search|spaces|__debug_parser|base|frac|fullscreen|translate|gid|fact|none|boundbottom|boundtop|out|fillText|warn_|m2|mode|_2|_3|boundright|toJSON|numer|takeDenom|denomc|jsc||block||png||plot|diff||clear||show|_4|allowdrag|_5|scaleconst|yc|lineWidth|overright|overleft|overtop|overbottom|PI|not|holder|dreplacer|abs|endchar|javascript|moved|fou_c|itg|other|difflevel|graph|new|catch|preferences|parse|try|location|scale|empty|color|remove|auto|math|submatch|latexchars|lineTo|stopPropagation|drag|mouseup|alink|input|_6|span|which|stringify|webkit|userAgent|navigator|space|||||||indent|mind|||random|cot|_7|builder|factorise|divide|variable|nr|_8|fou_i|_9|inj|exponent||init|logo|message|switch|refresh|removeChild|getElementById|free|colors|sum_|usr|noshow|hide|getElementsByTagName|moveTo|mousewheel|default|proto|button|delete|_10|markup|keydown|drawwhiledrag_c|lmy|lmx|round|slice|call|join|quote|escapable|acos|asin|delta|floor|max|min|csc|braces|||||afterme|equality|_11||inverse|oldtype|NaN|fname|equals|lvl|nns|npw|version|tk|center|random_hash|equation|compile|randfuncs|phi|infinity|lambda|setTimeout|focus|textarea|resize|mousemove|cursor|perform_translation|onclick|_|_12|_13|_14|checked|_15|generateJSON|conin_|innerHeight|innerWidth|grabbing|scalez|nodeValue|trigger|l__|b_|check_|getElementsByClassName|do_loop|boolean|done|children|1000|drawwhiledrag|pageY|pageX|strokeStyle|||Could||walk||reviver|||Object|atan2|ceil|atan|sec|second|pm|operator|Function|clean|__debug_iterations|integrate|fnd|size|po|dot|continuousvector|oe|conjg|subject|operation|operatorfactor|vars|parsednumber|final|fail|psi|djkb|blln|symbol|digits|src|Image|localStorage|toggle|randfunc|randfunc_index|r_e|m_e|prod_|pageTracker|pz|mousedown|cloneNode|matheditor|07c|backgroundColor|LocalStrings|aside|overlay|p_latex|redraw|editable|monospace|alert||||getContext|||gif|block_it|f08|ctrlKey|Error|delete_|disabled|child|capitalize|top|0px|transform|0001|format|fillStyle|120|clientHeight|clientWidth|elem|charCodeAt|0000|lastIndex|hasOwnProperty|isFinite|meta|uffff|ufff0|ufeff|u206f|u2060|u202f|u2028|u200f|u200c|u17b5|u17b4|u070f|u0604|u0600|u00ad|valueOf|Date|shaw|known_derivatives|tg|signum|bellb|sinc|cosec|functions|ERROR|___retry|onlyeval||||constant|Type|||Expression||Invalid||the|of|derivative|lowest|vector|or|arguments|to_ret|fn_|binary|prod_op|term_op|zz|integral|zeta|log2pi|val|cond|Te|262|259|247|210|207|192|140|9994|6378100|toPrecision|exptext|typing|Start|2em|float|ico|favicon|getItem|parent|hashchange|onmessage|attachEvent|unblock|data|808219b|node|pop|100000x|frac1x|H_2SO_4|nx|Graph|_16|track|getlatexpart|Cleared|onmousedown|onresize|removeAttribute|textDecoration|_17|target|about|http|href|checkbox|shiftKey|fixed|position|white|background|Failed|f00|0a0|04f|f0f|f80|0ff|808|088|880|80f|8f0|onchange|change|image|toDataURL|__proto__|end|click|json|preventDefault|wheelDeltaY|OS|Mac|03|Opera|01|Firefox|AppleWebKit|001|url|888|serif|sans|10pt|font|clearRect|black|butt|lineCap|10000|640|300|400|maxHeight|kK|Ww|initalize|toUpperCase|charAt|SyntaxError|bfnrt|apply|x9f|x7f|x1f|x00||u0000|Boolean|getUTCSeconds|getUTCMinutes|getUTCHours|getUTCDate|getUTCMonth|getUTCFullYear|required|improvements|Simplifier|_18|arctan|arccos|arcsin|Zeta|Unknown|name|alone||Differential|Not|CAS|solve|someting|expand|find|factorize|to|Tried|know|don|Empty|error|regex|Use|mag|cross|re|Vector|log_|composition|parentheses|many|Too|map|xe|instead|somewhere|returned|int|coproduct|coprod|prod|summation|forall|nabla|perp|Omega|Psi|Phi|Upsilon|Sigma|Pi|Xi|Lambda|Theta|Delta|vartheta|thetav|varrho|rhov||varpi|piv|varkappa|kappav|digamma|Gammad|gammad||||sigmav|sigmaf|varepsilon|epsiv|epsilon|varphi|phiv|omega|chi|upsilon|tau|sigma|rho|omicron|xi|nu|mu|kappa|iota|theta|eta|gamma|beta|alpha|backslash|cdot|infty|le|lt|3245138289924575|7281333047988399|24425221666910216|150917639897307|1680|1260|360|4506715738447323|474869816156751|51724158235372|5832742205057|682076806159|82864869804|10480142147|1382958545|190899322|27644437|4213597|678570|115975|21147|4140|877|203|ctn|ctg|piecewise|logb|ln_n|log_n|||csc_n|sec_n|cot_n|tan_n|cos_n|sin_n|Rg|Ds|Mt|Hs|Bh|Sg|Db|Rf|Lr|No|Md|Fm|Es|Cf|Bk|Cm|Am|Pu|Np|Pa|Th|Ac|Ra|Fr|Rn|At|Po|Bi|Pb|Tl|Hg|Au||Pt|Ir|Os|Re|Ta|Hf|Lu|Yb|Tm|Er|Ho||Dy|Tb||Gd|Eu|Sm|Pm|Nd|Pr||Ce|La|Ba|Cs|Xe|Sb||Sn|In|Cd|Ag|Pd|Rh|Ru|Mo|Nb|Zr|Sr|Rb|Kr|Br|Se|As|Ge|Ga|Zn|Cu|Ni|Co|Fe|Mn|Cr|Ti|Sc|Ca|Ar|Cl|Si|Al|Mg|Na|Ne|Be||Li|He|Zero|272|271|268|277||264|266|261|258|257|252|251|243|244|237|02891|238||03588|231|03806|232|227|226|223|220|980401|208|3833|204|200|966569|196|084|217|190|186|183|94788|180|178|9668|174|054|173|93421|168|167|93032|164|5001|162|92535|158|157|964|151||150|145|242|144|90765|116|90547|138|327||137|9054519|132|293||131|90447|126|127|121|118|818|114|411|112|8682|107|106|9055|102|07|101|90638|224|90585|4678|798|904|9216|723|546|6934|933195|845|938045|9961|9415|867|955912|078|0983|948|453|065|973762|0855|9815386|305|98976928|1797|0067|0107|811|012182|941|002602|00794|Unununium|Ununnilium|Meitnerium|Hassium|Bohrium|Seaborgium|Dubnium|Rutherfordium|Lawrencium|Nobelium|Mendelevium|Fermium|Einsteinium|Californium|Berkelium|Curium|Americium|Plutonium|Neptunium|Uranium|Protactinium|Thorium|Actinium|Radium|Francium|Radon|Astatine|Polonium|Bismuth|Lead|Thallium|Hydrargyrum|Gold|Platinum|Iridium|Osmium|Rhenium|Tungsten|Tantalum|Hafnium|Lutetium|Ytterbium|Thulium|Erbium|Holmium|Dysprosium|Terbium|Gadolinium|Europium|Samarium|Promethium|Neodymium||Praseodymium|Cerium||Lanthanum|||Barium|Cesium|Xenon|Iodine|Tellurium|||Antimony|Tin|Indium|Cadmium|||Silver|Palladium|Rhodium|Ruthenium|Technetium|Molybdaenum|Niobium|Zirkonium|Yttrium|Strontium|Rubidium|Krypton|Bromine|Selenium|Arsenic|Germanium|Gallium|Zinc|Copper|Nickel|Cobalt|Iron|Manganese|Chromium|Vanadium|Titanium|Scandium|Calcium|Potassium|Argon|Chlorine|Sulphur|Phosphorus|Silicon|aluminium|Magnesium|Sodium|Neon|Fluorine|Oxygen|Nitrogen|Carbon|Boron|Beryllium|Lithium|Helium|Hydrogen|void|Massless|85418782e|epsilon_0|8378770664093453|626068e|R_E|98892e30|m_s|36e22|m_m|9742e24|67300e|299792458|0000000|0000001'.split('|'),0,{}))
