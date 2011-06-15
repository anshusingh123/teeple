/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();;

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
/**
 * Modified Star Rating - jQuery plugin
 *
 * Copyright (c) 2006 Wil Stuckey
 *
 * Original source available: http://sandbox.wilstuckey.com/jquery-ratings/
 * Extensively modified by Lullabot: http://www.lullabot.com
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

/**
 * Create a degradeable star rating interface out of a simple form structure.
 * Returns a modified jQuery object containing the new interface.
 *   
 * @example jQuery('form.rating').fivestar();
 * @cat plugin
 * @type jQuery 
 *
 */
(function($){ // Create local scope.
    /**
     * Takes the form element, builds the rating interface and attaches the proper events.
     * @param {Object} $obj
     */
    var buildRating = function($obj){
        var $widget = buildInterface($obj),
            $stars = $('.star', $widget),
            $cancel = $('.cancel', $widget),
            $summary = $('.fivestar-summary', $obj),
            feedbackTimerId = 0,
            summaryText = $summary.html(),
            summaryHover = $obj.is('.fivestar-labels-hover'),
            currentValue = $("select", $obj).val(),
            cancelTitle = $('label', $obj).html(),
            voteTitle = cancelTitle != Drupal.settings.fivestar.titleAverage ? cancelTitle : Drupal.settings.fivestar.titleUser,
            voteChanged = false;

        // Record star display.
        if ($obj.is('.fivestar-user-stars')) {
          var starDisplay = 'user';
        }
        else if ($obj.is('.fivestar-average-stars')) {
          var starDisplay = 'average';
          currentValue = $("input[name=vote_average]", $obj).val();
        }
        else if ($obj.is('.fivestar-combo-stars')) {
          var starDisplay = 'combo';
        }
        else {
          var starDisplay = 'none';
        }

        // Smart is intentionally separate, so the average will be set if necessary.
        if ($obj.is('.fivestar-smart-stars')) {
          var starDisplay = 'smart';
        }

        // Record text display.
        if ($summary.size()) {
          var textDisplay = $summary.attr('class').replace(/.*?fivestar-summary-([^ ]+).*/, '$1').replace(/-/g, '_');
        }
        else {
          var textDisplay = 'none';
        }

        // Add hover and focus events.
        $stars
            .mouseover(function(){
                event.drain();
                event.fill(this);
            })
            .mouseout(function(){
                event.drain();
                event.reset();
            });
        $stars.children()
            .focus(function(){
                event.drain();
                event.fill(this.parentNode)
            })
            .blur(function(){
                event.drain();
                event.reset();
            }).end();

        // Cancel button events.
        $cancel
            .mouseover(function(){
                event.drain();
                $(this).addClass('on')
            })
            .mouseout(function(){
                event.reset();
                $(this).removeClass('on')
            });
        $cancel.children()
            .focus(function(){
                event.drain();
                $(this.parentNode).addClass('on')
            })
            .blur(function(){
                event.reset();
                $(this.parentNode).removeClass('on')
            }).end();

        // Click events.
        $cancel.click(function(){
            currentValue = 0;
            event.reset();
            voteChanged = false;
            // Inform a user that his vote is being processed
            if ($("input.fivestar-path", $obj).size() && $summary.is('.fivestar-feedback-enabled')) {
              setFeedbackText(Drupal.settings.fivestar.feedbackDeletingVote);
            }
            // Save the currentValue in a hidden field.
            $("select", $obj).val(0);
            // Update the title.
            cancelTitle = starDisplay != 'smart' ? cancelTitle : Drupal.settings.fivestar.titleAverage;
            $('label', $obj).html(cancelTitle);
            // Update the smart classes on the widget if needed.
            if ($obj.is('.fivestar-smart-text')) {
              $obj.removeClass('fivestar-user-text').addClass('fivestar-average-text');
              $summary[0].className = $summary[0].className.replace(/-user/, '-average');
              textDisplay = $summary.attr('class').replace(/.*?fivestar-summary-([^ ]+).*/, '$1').replace(/-/g, '_');
            }
            if ($obj.is('.fivestar-smart-stars')) {
              $obj.removeClass('fivestar-user-stars').addClass('fivestar-average-stars');
            }
            // Submit the form if needed.
            $("input.fivestar-path", $obj).each(function() {
              var token = $("input.fivestar-token", $obj).val();
              $.ajax({
                type: 'GET',
                data: { token: token },
                dataType: 'xml',
                url: this.value + '/' + 0,
                success: voteHook
              });
            });
            return false;
        });
        $stars.click(function(){
            currentValue = $('select option', $obj).get($stars.index(this) + $cancel.size() + 1).value;
            // Save the currentValue to the hidden select field.
            $("select", $obj).val(currentValue);
            // Update the display of the stars.
            voteChanged = true;
            event.reset();
            // Inform a user that his vote is being processed.
            if ($("input.fivestar-path", $obj).size() && $summary.is('.fivestar-feedback-enabled')) {
              setFeedbackText(Drupal.settings.fivestar.feedbackSavingVote);
            }
            // Update the smart classes on the widget if needed.
            if ($obj.is('.fivestar-smart-text')) {
              $obj.removeClass('fivestar-average-text').addClass('fivestar-user-text');
              $summary[0].className = $summary[0].className.replace(/-average/, '-user');
              textDisplay = $summary.attr('class').replace(/.*?fivestar-summary-([^ ]+).*/, '$1').replace(/-/g, '_');
            }
            if ($obj.is('.fivestar-smart-stars')) {
              $obj.removeClass('fivestar-average-stars').addClass('fivestar-user-stars');
            }
            // Submit the form if needed.
            $("input.fivestar-path", $obj).each(function () {
              var token = $("input.fivestar-token", $obj).val();
              $.ajax({
                type: 'GET',
                data: { token: token },
                dataType: 'xml',
                url: this.value + '/' + currentValue,
                success: voteHook
              });
            });
            return false;
        });

        var event = {
            fill: function(el){
              // Fill to the current mouse position.
              var index = $stars.index(el) + 1;
              $stars
                .children('a').css('width', '100%').end()
                .filter(':lt(' + index + ')').addClass('hover').end();
              // Update the description text and label.
              if (summaryHover && !feedbackTimerId) {
                var summary = $("select option", $obj)[index + $cancel.size()].text;
                var value = $("select option", $obj)[index + $cancel.size()].value;
                $summary.html(summary != index + 1 ? summary : '&nbsp;');
                $('label', $obj).html(voteTitle);
              }
            },
            drain: function() {
              // Drain all the stars.
              $stars
                .filter('.on').removeClass('on').end()
                .filter('.hover').removeClass('hover').end();
              // Update the description text.
              if (summaryHover && !feedbackTimerId) {
                var cancelText = $("select option", $obj)[1].text;
                $summary.html(($cancel.size() && cancelText != 0) ? cancelText : '&nbsp');
                if (!voteChanged) {
                  $('label', $obj).html(cancelTitle);
                }
              }
            },
            reset: function(){
              // Reset the stars to the default index.
              var starValue = currentValue/100 * $stars.size();
              var percent = (starValue - Math.floor(starValue)) * 100;
              $stars.filter(':lt(' + Math.floor(starValue) + ')').addClass('on').end();
              if (percent > 0) {
                $stars.eq(Math.floor(starValue)).addClass('on').children('a').css('width', percent + "%").end().end();
              }
              // Restore the summary text and original title.
              if (summaryHover && !feedbackTimerId) {
                $summary.html(summaryText ? summaryText : '&nbsp;');
              }
              if (voteChanged) {
                $('label', $obj).html(voteTitle);
              }
              else {
                $('label', $obj).html(cancelTitle);
              }
            }
        };

        var setFeedbackText = function(text) {
          // Kill previous timer if it isn't finished yet so that the text we
          // are about to set will not get cleared too early.
          feedbackTimerId = 1;
          $summary.html(text);
        };

        /**
         * Checks for the presence of a javascript hook 'fivestarResult' to be
         * called upon completion of a AJAX vote request.
         */
        var voteHook = function(data) {
          var returnObj = {
            result: {
              count: $("result > count", data).text(),
              average: $("result > average", data).text(),
              summary: {
                average: $("summary average", data).text(),
                average_count: $("summary average_count", data).text(),
                user: $("summary user", data).text(),
                user_count: $("summary user_count", data).text(),
                combo: $("summary combo", data).text(),
                count: $("summary count", data).text()
              }
            },
            vote: {
              id: $("vote id", data).text(),
              tag: $("vote tag", data).text(),
              type: $("vote type", data).text(),
              value: $("vote value", data).text()
            },
            display: {
              stars: starDisplay,
              text: textDisplay
            }
          };
          // Check for a custom callback.
          if (window.fivestarResult) {
            fivestarResult(returnObj);
          }
          // Use the default.
          else {
            fivestarDefaultResult(returnObj);
          }
          // Update the summary text.
          summaryText = returnObj.result.summary[returnObj.display.text];
          if ($(returnObj.result.summary.average).is('.fivestar-feedback-enabled')) {
            // Inform user that his/her vote has been processed.
            if (returnObj.vote.value != 0) { // check if vote has been saved or deleted 
              setFeedbackText(Drupal.settings.fivestar.feedbackVoteSaved);
            }
            else {
              setFeedbackText(Drupal.settings.fivestar.feedbackVoteDeleted);
            }
            // Setup a timer to clear the feedback text after 3 seconds.
            feedbackTimerId = setTimeout(function() { clearTimeout(feedbackTimerId); feedbackTimerId = 0; $summary.html(returnObj.result.summary[returnObj.display.text]); }, 2000);
          }
          // Update the current star currentValue to the previous average.
          if (returnObj.vote.value == 0 && (starDisplay == 'average' || starDisplay == 'smart')) {
            currentValue = returnObj.result.average;
            event.reset();
          }
        };

        event.reset();
        return $widget;
    };
    
    /**
     * Accepts jQuery object containing a single fivestar widget.
     * Returns the proper div structure for the star interface.
     * 
     * @return jQuery
     * @param {Object} $widget
     * 
     */
    var buildInterface = function($widget){
        var $container = $('<div class="fivestar-widget clear-block"></div>');
        var $options = $("select option", $widget);
        var size = $('option', $widget).size() - 1;
        var cancel = 1;
        for (var i = 1, option; option = $options[i]; i++){
            if (option.value == "0") {
              cancel = 0;
              $div = $('<div class="cancel"><a href="#0" title="' + option.text + '">' + option.text + '</a></div>');
            }
            else {
              var zebra = (i + cancel - 1) % 2 == 0 ? 'even' : 'odd';
              var count = i + cancel - 1;
              var first = count == 1 ? ' star-first' : '';
              var last = count == size + cancel - 1 ? ' star-last' : '';
              $div = $('<div class="star star-' + count + ' star-' + zebra + first + last + '"><a href="#' + option.value + '" title="' + option.text + '">' + option.text + '</a></div>');
            }
            $container.append($div[0]);
        }
        $container.addClass('fivestar-widget-' + (size + cancel - 1));
        // Attach the new widget and hide the existing widget.
        $('select', $widget).after($container).css('display', 'none');
        return $container;
    };

    /**
     * Standard handler to update the average rating when a user changes their
     * vote. This behavior can be overridden by implementing a fivestarResult
     * function in your own module or theme.
     * @param object voteResult
     * Object containing the following properties from the vote result:
     * voteResult.result.count The current number of votes for this item.
     * voteResult.result.average The current average of all votes for this item.
     * voteResult.result.summary.average The textual description of the average.
     * voteResult.result.summary.user The textual description of the user's current vote.
     * voteResult.vote.id The id of the item the vote was placed on (such as the nid)
     * voteResult.vote.type The type of the item the vote was placed on (such as 'node')
     * voteResult.vote.tag The multi-axis tag the vote was placed on (such as 'vote')
     * voteResult.vote.average The average of the new vote saved
     * voteResult.display.stars The type of star display we're using. Either 'average', 'user', or 'combo'.
     * voteResult.display.text The type of text display we're using. Either 'average', 'user', or 'combo'.
     */
    function fivestarDefaultResult(voteResult) {
      // Update the summary text.
      $('div.fivestar-summary-'+voteResult.vote.tag+'-'+voteResult.vote.id).html(voteResult.result.summary[voteResult.display.text]);
      // If this is a combo display, update the average star display.
      if (voteResult.display.stars == 'combo') {
        $('div.fivestar-form-'+voteResult.vote.id).each(function() {
          // Update stars.
          var $stars = $('.fivestar-widget-static .star span', this);
          var average = voteResult.result.average/100 * $stars.size();
          var index = Math.floor(average);
          $stars.removeClass('on').addClass('off').css('width', 'auto');
          $stars.filter(':lt(' + (index + 1) + ')').removeClass('off').addClass('on');
          $stars.eq(index).css('width', ((average - index) * 100) + "%");
          // Update summary.
          var $summary = $('.fivestar-static-form-item .fivestar-summary', this);
          if ($summary.size()) {
            var textDisplay = $summary.attr('class').replace(/.*?fivestar-summary-([^ ]+).*/, '$1').replace(/-/g, '_');
            $summary.html(voteResult.result.summary[textDisplay]);
          }
        });
      }
    };

    /**
     * Set up the plugin
     */
    $.fn.fivestar = function() {
      var stack = [];
      this.each(function() {
          var ret = buildRating($(this));
          stack.push(ret);
      });
      return stack;
    };

  // Fix ie6 background flicker problem.
  if ($.browser.msie == true) {
    try {
      document.execCommand('BackgroundImageCache', false, true);
    } catch(err) {}
  }

  Drupal.behaviors.fivestar = function(context) {
    $('div.fivestar-form-item:not(.fivestar-processed)', context).addClass('fivestar-processed').fivestar();
    $('input.fivestar-submit', context).css('display', 'none');
  }

})(jQuery);;
/*

 FullCalendar v1.4.9
 http://arshaw.com/fullcalendar/

 Use fullcalendar.css for basic styling.
 For event drag & drop, requires jQuery UI draggable.
 For event resizing, requires jQuery UI resizable.

 Copyright (c) 2010 Adam Shaw
 Dual licensed under the MIT and GPL licenses, located in
 MIT-LICENSE.txt and GPL-LICENSE.txt respectively.

 Date: Fri Nov 19 22:45:44 2010 -0800

*/
(function(l,ga){function hb(a){l.extend(true,Oa,a)}function Db(a,b,f){function e(q){if(I){s();r();ja();N(q)}else g()}function g(){P=b.theme?"ui":"fc";a.addClass("fc");b.isRTL&&a.addClass("fc-rtl");b.theme&&a.addClass("ui-widget");I=l("<div class='fc-content "+P+"-widget-content' style='position:relative'/>").prependTo(a);L=new Eb(Y,b);(D=L.render())&&a.prepend(D);z(b.defaultView);l(window).resize(ha);t()||h()}function h(){setTimeout(function(){!v.start&&t()&&N()},0)}function m(){l(window).unbind("resize",
ha);L.destroy();I.remove();a.removeClass("fc fc-rtl fc-ui-widget")}function o(){return Q.offsetWidth!==0}function t(){return l("body")[0].offsetWidth!==0}function z(q){if(!v||q!=v.name){p++;A();var B=v,J;if(B){(B.beforeHide||ib)();Ra(I,I.height());B.element.hide()}else Ra(I,1);I.css("overflow","hidden");if(v=j[q])v.element.show();else v=j[q]=new Fa[q](J=k=l("<div class='fc-view fc-view-"+q+"' style='position:absolute'/>").appendTo(I),Y);B&&L.deactivateButton(B.name);L.activateButton(q);N();I.css("overflow",
"");B&&Ra(I,1);J||(v.afterShow||ib)();p--}}function N(q){if(o()){p++;A();E===ga&&s();var B=false;if(!v.start||q||u<v.start||u>=v.end){v.render(u,q||0);Z(true);B=true}else if(v.sizeDirty){v.clearEvents();Z();B=true}else if(v.eventsDirty){v.clearEvents();B=true}v.sizeDirty=false;v.eventsDirty=false;da(B);i=a.outerWidth();L.updateTitle(v.title);q=new Date;q>=v.start&&q<v.end?L.disableButton("today"):L.enableButton("today");p--;v.trigger("viewDisplay",Q)}}function O(){r();if(o()){s();Z();A();v.clearEvents();
v.renderEvents(V);v.sizeDirty=false}}function r(){l.each(j,function(q,B){B.sizeDirty=true})}function s(){E=b.contentHeight?b.contentHeight:b.height?b.height-(D?D.height():0)-Sa(I[0]):Math.round(I.width()/Math.max(b.aspectRatio,0.5))}function Z(q){p++;v.setHeight(E,q);if(k){k.css("position","relative");k=null}v.setWidth(I.width(),q);p--}function ha(){if(!p)if(v.start){var q=++c;setTimeout(function(){if(q==c&&!p&&o())if(i!=(i=a.outerWidth())){p++;O();v.trigger("windowResize",Q);p--}},200)}else h()}
function da(q){if(!b.lazyFetching||w(v.visStart,v.visEnd))X();else q&&aa()}function X(){K(v.visStart,v.visEnd)}function la(q){V=q;aa()}function oa(q){aa(q)}function aa(q){ja();if(o()){v.clearEvents();v.renderEvents(V,q);v.eventsDirty=false}}function ja(){l.each(j,function(q,B){B.eventsDirty=true})}function ca(q,B,J){v.select(q,B,J===ga?true:J)}function A(){v&&v.unselect()}function ia(){N(-1)}function x(){N(1)}function d(){Ta(u,-1);N()}function F(){Ta(u,1);N()}function H(){u=new Date;N()}function R(q,
B,J){if(q instanceof Date)u=C(q);else jb(u,q,B,J);N()}function ma(q,B,J){q!==ga&&Ta(u,q);B!==ga&&Ua(u,B);J!==ga&&T(u,J);N()}function ka(){return C(u)}function G(){return v}function U(q,B){if(B===ga)return b[q];if(q=="height"||q=="contentHeight"||q=="aspectRatio"){b[q]=B;O()}}function va(q,B){if(b[q])return b[q].apply(B||Q,Array.prototype.slice.call(arguments,2))}var Y=this;Y.options=b;Y.render=e;Y.destroy=m;Y.refetchEvents=X;Y.reportEvents=la;Y.reportEventChange=oa;Y.changeView=z;Y.select=ca;Y.unselect=
A;Y.prev=ia;Y.next=x;Y.prevYear=d;Y.nextYear=F;Y.today=H;Y.gotoDate=R;Y.incrementDate=ma;Y.formatDate=function(q,B){return Ha(q,B,b)};Y.formatDates=function(q,B,J){return Va(q,B,J,b)};Y.getDate=ka;Y.getView=G;Y.option=U;Y.trigger=va;Fb.call(Y,b,f);var w=Y.isFetchNeeded,K=Y.fetchEvents,Q=a[0],L,D,I,P,v,j={},i,E,k,c=0,p=0,u=new Date,V=[],$;jb(u,b.year,b.month,b.date);b.droppable&&l(document).bind("dragstart",function(q,B){var J=q.target,fa=l(J);if(!fa.parents(".fc").length){var na=b.dropAccept;if(l.isFunction(na)?
na.call(J,fa):fa.is(na)){$=J;v.dragStart($,q,B)}}}).bind("dragstop",function(q,B){if($){v.dragStop($,q,B);$=null}})}function Eb(a,b){function f(){r=b.theme?"ui":"fc";var s=b.header;if(s)return O=l("<table class='fc-header'/>").append(l("<tr/>").append(l("<td class='fc-header-left'/>").append(g(s.left))).append(l("<td class='fc-header-center'/>").append(g(s.center))).append(l("<td class='fc-header-right'/>").append(g(s.right))))}function e(){O.remove()}function g(s){if(s){var Z=l("<tr/>");l.each(s.split(" "),
function(ha){ha>0&&Z.append("<td><span class='fc-header-space'/></td>");var da;l.each(this.split(","),function(X,la){if(la=="title"){Z.append("<td><h2 class='fc-header-title'>&nbsp;</h2></td>");da&&da.addClass(r+"-corner-right");da=null}else{var oa;if(a[la])oa=a[la];else if(Fa[la])oa=function(){aa.removeClass(r+"-state-hover");a.changeView(la)};if(oa){da&&da.addClass(r+"-no-right");var aa;X=b.theme?Wa(b.buttonIcons,la):null;var ja=Wa(b.buttonText,la);if(X)aa=l("<div class='fc-button-"+la+" ui-state-default'><a><span class='ui-icon ui-icon-"+
X+"'/></a></div>");else if(ja)aa=l("<div class='fc-button-"+la+" "+r+"-state-default'><a><span>"+ja+"</span></a></div>");if(aa){aa.click(function(){aa.hasClass(r+"-state-disabled")||oa()}).mousedown(function(){aa.not("."+r+"-state-active").not("."+r+"-state-disabled").addClass(r+"-state-down")}).mouseup(function(){aa.removeClass(r+"-state-down")}).hover(function(){aa.not("."+r+"-state-active").not("."+r+"-state-disabled").addClass(r+"-state-hover")},function(){aa.removeClass(r+"-state-hover").removeClass(r+
"-state-down")}).appendTo(l("<td/>").appendTo(Z));da?da.addClass(r+"-no-right"):aa.addClass(r+"-corner-left");da=aa}}}});da&&da.addClass(r+"-corner-right")});return l("<table/>").append(Z)}}function h(s){O.find("h2.fc-header-title").html(s)}function m(s){O.find("div.fc-button-"+s).addClass(r+"-state-active")}function o(s){O.find("div.fc-button-"+s).removeClass(r+"-state-active")}function t(s){O.find("div.fc-button-"+s).addClass(r+"-state-disabled")}function z(s){O.find("div.fc-button-"+s).removeClass(r+
"-state-disabled")}var N=this;N.render=f;N.destroy=e;N.updateTitle=h;N.activateButton=m;N.deactivateButton=o;N.disableButton=t;N.enableButton=z;var O=l([]),r}function Fb(a,b){function f(d,F){return!oa||d<oa||F>aa}function e(d,F){oa=d;aa=F;x=[];d=++ja;ca=F=b.length;for(var H=0;H<F;H++)g(b[H],d)}function g(d,F){h(d,function(H){if(F==ja){for(var R=0;R<H.length;R++){Z(H[R]);H[R].source=d}x=x.concat(H);ca--;ca||la(x)}})}function h(d,F){if(typeof d=="string"){var H={};H[a.startParam]=Math.round(oa.getTime()/
1E3);H[a.endParam]=Math.round(aa.getTime()/1E3);if(a.cacheParam)H[a.cacheParam]=(new Date).getTime();r();l.ajax({url:d,dataType:"json",data:H,cache:a.cacheParam||false,success:function(R){s();F(R)}})}else if(l.isFunction(d)){r();d(C(oa),C(aa),function(R){s();F(R)})}else F(d)}function m(d){b.push(d);ca++;g(d,ja)}function o(d){b=l.grep(b,function(F){return F!=d});x=l.grep(x,function(F){return F.source!=d});la(x)}function t(d){var F,H=x.length,R,ma=X().defaultEventEnd,ka=d.start-d._start,G=d.end?d.end-
(d._end||ma(d)):0;for(F=0;F<H;F++){R=x[F];if(R._id==d._id&&R!=d){R.start=new Date(+R.start+ka);R.end=d.end?R.end?new Date(+R.end+G):new Date(+ma(R)+G):null;R.title=d.title;R.url=d.url;R.allDay=d.allDay;R.className=d.className;R.editable=d.editable;Z(R)}}Z(d);la(x)}function z(d,F){Z(d);if(!d.source){if(F){ia.push(d);d.source=ia}x.push(d)}la(x)}function N(d){if(d){if(!l.isFunction(d)){var F=d+"";d=function(R){return R._id==F}}x=l.grep(x,d,true);for(H=0;H<b.length;H++)if(typeof b[H]=="object")b[H]=l.grep(b[H],
d,true)}else{x=[];for(var H=0;H<b.length;H++)if(typeof b[H]=="object")b[H]=[]}la(x)}function O(d){if(l.isFunction(d))return l.grep(x,d);else if(d){d+="";return l.grep(x,function(F){return F._id==d})}return x}function r(){A++||da("loading",null,true)}function s(){--A||da("loading",null,false)}function Z(d){d._id=d._id||(d.id===ga?"_fc"+Gb++:d.id+"");if(d.date){if(!d.start)d.start=d.date;delete d.date}d._start=C(d.start=Xa(d.start,a.ignoreTimezone));d.end=Xa(d.end,a.ignoreTimezone);if(d.end&&d.end<=
d.start)d.end=null;d._end=d.end?C(d.end):null;if(d.allDay===ga)d.allDay=a.allDayDefault;if(d.className){if(typeof d.className=="string")d.className=d.className.split(/\s+/)}else d.className=[]}var ha=this;ha.isFetchNeeded=f;ha.fetchEvents=e;ha.addEventSource=m;ha.removeEventSource=o;ha.updateEvent=t;ha.renderEvent=z;ha.removeEvents=N;ha.clientEvents=O;ha.normalizeEvent=Z;var da=ha.trigger,X=ha.getView,la=ha.reportEvents,oa,aa,ja=0,ca=0,A=0,ia=[],x=[];b.push(ia)}function Hb(a,b){function f(o,t){if(t){Ua(o,
t);o.setDate(1)}o=C(o,true);o.setDate(1);t=Ua(C(o),1);var z=C(o),N=C(t),O=g("firstDay"),r=g("weekends")?0:1;if(r){ta(z);ta(N,-1,true)}T(z,-((z.getDay()-Math.max(O,r)+7)%7));T(N,(7-N.getDay()+Math.max(O,r))%7);O=Math.round((N-z)/(kb*7));if(g("weekMode")=="fixed"){T(N,(6-O)*7);O=6}e.title=m(o,g("titleFormat"));e.start=o;e.end=t;e.visStart=z;e.visEnd=N;h(O,r?5:7,true)}var e=this;e.render=f;Ya.call(e,a,b,"month");var g=e.opt,h=e.renderBasic,m=b.formatDate}function Ib(a,b){function f(o,t){t&&T(o,t*7);
o=T(C(o),-((o.getDay()-g("firstDay")+7)%7));t=T(C(o),7);var z=C(o),N=C(t),O=g("weekends");if(!O){ta(z);ta(N,-1,true)}e.title=m(z,T(C(N),-1),g("titleFormat"));e.start=o;e.end=t;e.visStart=z;e.visEnd=N;h(1,O?7:5,false)}var e=this;e.render=f;Ya.call(e,a,b,"basicWeek");var g=e.opt,h=e.renderBasic,m=b.formatDates}function Jb(a,b){function f(o,t){if(t){T(o,t);g("weekends")||ta(o,t<0?-1:1)}e.title=m(o,g("titleFormat"));e.start=e.visStart=C(o,true);e.end=e.visEnd=T(C(e.start),1);h(1,1,false)}var e=this;e.render=
f;Ya.call(e,a,b,"basicDay");var g=e.opt,h=e.renderBasic,m=b.formatDate}function Ya(a,b,f){function e(k,c,p){w=k;K=c;if(ka=ia("isRTL")){G=-1;U=K-1}else{G=1;U=0}va=ia("firstDay");Y=ia("weekends")?0:1;var u=ia("theme")?"ui":"fc",V=ia("columnFormat"),$=A.start.getMonth(),q=Ga(new Date),B,J=C(A.visStart);if(P){d();c=P.find("tr").length;if(w<c)P.find("tr:gt("+(w-1)+")").remove();else if(w>c){k="";for(c=c;c<w;c++){k+="<tr class='fc-week"+c+"'>";for(B=0;B<K;B++){k+="<td class='fc-"+Ca[J.getDay()]+" "+u+"-state-default fc-new fc-day"+
(c*K+B)+(B==U?" fc-leftmost":"")+"'>"+(p?"<div class='fc-day-number'></div>":"")+"<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></td>";T(J,1);Y&&ta(J)}k+="</tr>"}P.append(k)}m(P.find("td.fc-new").removeClass("fc-new"));J=C(A.visStart);P.find("td").each(function(){var na=l(this);if(w>1)J.getMonth()==$?na.removeClass("fc-other-month"):na.addClass("fc-other-month");+J==+q?na.removeClass("fc-not-today").addClass("fc-today").addClass(u+"-state-highlight"):na.addClass("fc-not-today").removeClass("fc-today").removeClass(u+
"-state-highlight");na.find("div.fc-day-number").text(J.getDate());T(J,1);Y&&ta(J)});if(w==1){J=C(A.visStart);I.find("th").each(function(na,W){l(W).text(ma(J,V));W.className=W.className.replace(/^fc-\w+(?= )/,"fc-"+Ca[J.getDay()]);T(J,1);Y&&ta(J)});J=C(A.visStart);P.find("td").each(function(na,W){W.className=W.className.replace(/^fc-\w+(?= )/,"fc-"+Ca[J.getDay()]);T(J,1);Y&&ta(J)})}}else{var fa=l("<table/>").appendTo(a);k="<thead><tr>";for(c=0;c<K;c++){k+="<th class='fc-"+Ca[J.getDay()]+" "+u+"-state-default"+
(c==U?" fc-leftmost":"")+"'>"+ma(J,V)+"</th>";T(J,1);Y&&ta(J)}I=l(k+"</tr></thead>").appendTo(fa);k="<tbody>";J=C(A.visStart);for(c=0;c<w;c++){k+="<tr class='fc-week"+c+"'>";for(B=0;B<K;B++){k+="<td class='fc-"+Ca[J.getDay()]+" "+u+"-state-default fc-day"+(c*K+B)+(B==U?" fc-leftmost":"")+(w>1&&J.getMonth()!=$?" fc-other-month":"")+(+J==+q?" fc-today "+u+"-state-highlight":" fc-not-today")+"'>"+(p?"<div class='fc-day-number'>"+J.getDate()+"</div>":"")+"<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></td>";
T(J,1);Y&&ta(J)}k+="</tr>"}P=l(k+"</tbody>").appendTo(fa);m(P.find("td"));v=l("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(a)}}function g(k){D=k;k=P.find("tr td:first-child");var c=D-I.height(),p;if(ia("weekMode")=="variable")p=c=Math.floor(c/(w==1?2:6));else{p=Math.floor(c/w);c=c-p*(w-1)}if(Za===ga){var u=P.find("tr:first").find("td:first");u.height(p);Za=p!=u.height()}if(Za){k.slice(0,-1).height(p);k.slice(-1).height(c)}else{Pa(k.slice(0,-1),p);Pa(k.slice(-1),c)}}function h(k){L=
k;E.clear();Q=Math.floor(L/K);Ia(I.find("th").slice(0,-1),Q)}function m(k){k.click(o).mousedown(R)}function o(k){if(!ia("selectable")){var c=parseInt(this.className.match(/fc\-day(\d+)/)[1]);c=T(C(A.visStart),Math.floor(c/K)*7+c%K);x("dayClick",this,c,true,k)}}function t(k,c,p){p&&j.build();p=C(A.visStart);for(var u=T(C(p),K),V=0;V<w;V++){var $=new Date(Math.max(p,k)),q=new Date(Math.min(u,c));if($<q){var B;if(ka){B=za(q,p)*G+U+1;$=za($,p)*G+U+1}else{B=za($,p);$=za(q,p)}m(z(V,B,V,$-1))}T(p,7);T(u,
7)}}function z(k,c,p,u){k=j.rect(k,c,p,u,a);return F(k,a)}function N(k){return C(k)}function O(k,c){t(k,T(C(c),1),true)}function r(){H()}function s(k,c){i.start(function(p){H();p&&z(p.row,p.col,p.row,p.col)},c)}function Z(k,c,p){var u=i.stop();H();if(u){u=aa(u);x("drop",k,u,true,c,p)}}function ha(k){return C(k.start)}function da(k){return E.left(k)}function X(k){return E.right(k)}function la(k){return(k-Math.max(va,Y)+K)%K}function oa(k){return{row:Math.floor(za(k,A.visStart)/7),col:la(k.getDay())*
G+U}}function aa(k){return T(C(A.visStart),k.row*7+k.col*G+U)}function ja(k){return P.find("tr:eq("+k+")")}function ca(){return{left:0,right:L}}var A=this;A.renderBasic=e;A.setHeight=g;A.setWidth=h;A.renderDayOverlay=t;A.defaultSelectionEnd=N;A.renderSelection=O;A.clearSelection=r;A.dragStart=s;A.dragStop=Z;A.defaultEventEnd=ha;A.getHoverListener=function(){return i};A.colContentLeft=da;A.colContentRight=X;A.dayOfWeekCol=la;A.dateCell=oa;A.cellDate=aa;A.cellIsAllDay=function(){return true};A.allDayTR=
ja;A.allDayBounds=ca;A.getRowCnt=function(){return w};A.getColCnt=function(){return K};A.getColWidth=function(){return Q};A.getDaySegmentContainer=function(){return v};lb.call(A,a,b,f);mb.call(A);nb.call(A);Kb.call(A);var ia=A.opt,x=A.trigger,d=A.clearEvents,F=A.renderOverlay,H=A.clearOverlays,R=A.daySelectionMousedown,ma=b.formatDate,ka,G,U,va,Y,w,K,Q,L,D,I,P,v,j,i,E;ob(a.addClass("fc-grid"));j=new pb(function(k,c){var p,u,V,$=P.find("tr:first td");if(ka)$=l($.get().reverse());$.each(function(q,
B){p=l(B);u=p.offset().left;if(q)V[1]=u;V=[u];c[q]=V});V[1]=u+p.outerWidth();P.find("tr").each(function(q,B){p=l(B);u=p.offset().top;if(q)V[1]=u;V=[u];k[q]=V});V[1]=u+p.outerHeight()});i=new qb(j);E=new rb(function(k){return P.find("td:eq("+k+") div div")})}function Kb(){function a(ca,A){t(ca);aa(f(ca),A)}function b(){z();Z().empty()}function f(ca){var A=la(),ia=oa(),x=C(h.visStart);ia=T(C(x),ia);var d=l.map(ca,Na),F,H,R,ma,ka,G,U=[];for(F=0;F<A;F++){H=$a(ab(ca,d,x,ia));for(R=0;R<H.length;R++){ma=
H[R];for(ka=0;ka<ma.length;ka++){G=ma[ka];G.row=F;G.level=R;U.push(G)}}T(x,7);T(ia,7)}return U}function e(ca,A,ia){N(ca,A);if(ca.editable||ca.editable===ga&&m("editable")){g(ca,A);ia.isEnd&&ja(ca,A,ia)}}function g(ca,A){if(!m("disableDragging")&&A.draggable){var ia=ha(),x;A.draggable({zIndex:9,delay:50,opacity:m("dragOpacity"),revertDuration:m("dragRevertDuration"),start:function(d,F){o("eventDragStart",A,ca,d,F);r(ca,A);ia.start(function(H,R,ma,ka){A.draggable("option","revert",!H||!ma&&!ka);X();
if(H){x=ma*7+ka*(m("isRTL")?-1:1);da(T(C(ca.start),x),T(Na(ca),x))}else x=0},d,"drag")},stop:function(d,F){ia.stop();X();o("eventDragStop",A,ca,d,F);if(x){A.find("a").removeAttr("href");s(this,ca,x,0,ca.allDay,d,F)}else{l.browser.msie&&A.css("filter","");O(ca,A)}}})}}var h=this;h.renderEvents=a;h.compileDaySegs=f;h.clearEvents=b;h.bindDaySeg=e;sb.call(h);var m=h.opt,o=h.trigger,t=h.reportEvents,z=h.reportEventClear,N=h.eventElementHandlers,O=h.showEvents,r=h.hideEvents,s=h.eventDrop,Z=h.getDaySegmentContainer,
ha=h.getHoverListener,da=h.renderDayOverlay,X=h.clearOverlays,la=h.getRowCnt,oa=h.getColCnt,aa=h.renderDaySegs,ja=h.resizableDayEvent}function Lb(a,b){function f(o,t){t&&T(o,t*7);o=T(C(o),-((o.getDay()-g("firstDay")+7)%7));t=T(C(o),7);var z=C(o),N=C(t),O=g("weekends");if(!O){ta(z);ta(N,-1,true)}e.title=m(z,T(C(N),-1),g("titleFormat"));e.start=o;e.end=t;e.visStart=z;e.visEnd=N;h(O?7:5)}var e=this;e.render=f;tb.call(e,a,b,"agendaWeek");var g=e.opt,h=e.renderAgenda,m=b.formatDates}function Mb(a,b){function f(o,
t){if(t){T(o,t);g("weekends")||ta(o,t<0?-1:1)}t=C(o,true);var z=T(C(t),1);e.title=m(o,g("titleFormat"));e.start=e.visStart=t;e.end=e.visEnd=z;h(1)}var e=this;e.render=f;tb.call(e,a,b,"agendaDay");var g=e.opt,h=e.renderAgenda,m=b.formatDate}function tb(a,b,f){function e(n){c=n;fa=U("theme")?"ui":"fc";W=U("weekends")?0:1;na=U("firstDay");if(sa=U("isRTL")){ea=-1;pa=c-1}else{ea=1;pa=0}Aa=bb(U("minTime"));Ba=bb(U("maxTime"));n=sa?T(C(G.visEnd),-1):C(G.visStart);var y=C(n),M=Ga(new Date),S=U("columnFormat");
if(v){Y();v.find("tr:first th").slice(1,-1).each(function(Ja,xa){l(xa).text(P(y,S));xa.className=xa.className.replace(/^fc-\w+(?= )/,"fc-"+Ca[y.getDay()]);T(y,ea);W&&ta(y,ea)});y=C(n);k.find("td").each(function(Ja,xa){xa.className=xa.className.replace(/^fc-\w+(?= )/,"fc-"+Ca[y.getDay()]);+y==+M?l(xa).removeClass("fc-not-today").addClass("fc-today").addClass(fa+"-state-highlight"):l(xa).addClass("fc-not-today").removeClass("fc-today").removeClass(fa+"-state-highlight");T(y,ea);W&&ta(y,ea)})}else{var ba,
ua,Da=U("slotMinutes")%15==0,qa="<div class='fc-agenda-head' style='position:relative;z-index:4'><table style='width:100%'><tr class='fc-first"+(U("allDaySlot")?"":" fc-last")+"'><th class='fc-leftmost "+fa+"-state-default'>&nbsp;</th>";for(ba=0;ba<c;ba++){qa+="<th class='fc-"+Ca[y.getDay()]+" "+fa+"-state-default'>"+P(y,S)+"</th>";T(y,ea);W&&ta(y,ea)}qa+="<th class='"+fa+"-state-default'>&nbsp;</th></tr>";if(U("allDaySlot"))qa+="<tr class='fc-all-day'><th class='fc-axis fc-leftmost "+fa+"-state-default'>"+
U("allDayText")+"</th><td colspan='"+c+"' class='"+fa+"-state-default'><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></td><th class='"+fa+"-state-default'>&nbsp;</th></tr><tr class='fc-divider fc-last'><th colspan='"+(c+2)+"' class='"+fa+"-state-default fc-leftmost'><div/></th></tr>";qa+="</table></div>";v=l(qa).appendTo(a);z(v.find("td"));ub=l("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(v);y=vb();var cb=ra(C(y),Ba);ra(y,Aa);qa="<table>";for(ba=
0;y<cb;ba++){ua=y.getMinutes();qa+="<tr class='"+(!ba?"fc-first":!ua?"":"fc-minor")+"'><th class='fc-axis fc-leftmost "+fa+"-state-default'>"+(!Da||!ua?P(y,U("axisFormat")):"&nbsp;")+"</th><td class='fc-slot"+ba+" "+fa+"-state-default'><div style='position:relative'>&nbsp;</div></td></tr>";ra(y,U("slotMinutes"));p++}qa+="</table>";j=l("<div class='fc-agenda-body' style='position:relative;z-index:2;overflow:auto'/>").append(i=l("<div style='position:relative;overflow:hidden'>").append(E=l(qa))).appendTo(a);
N(j.find("td"));wb=l("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(i);y=C(n);qa="<div class='fc-agenda-bg' style='position:absolute;z-index:1'><table style='width:100%;height:100%'><tr class='fc-first'>";for(ba=0;ba<c;ba++){qa+="<td class='fc-"+Ca[y.getDay()]+" "+fa+"-state-default "+(!ba?"fc-leftmost ":"")+(+y==+M?fa+"-state-highlight fc-today":"fc-not-today")+"'><div class='fc-day-content'><div>&nbsp;</div></div></td>";T(y,ea);W&&ta(y,ea)}qa+="</tr></table></div>";k=l(qa).appendTo(a)}}
function g(n,y){if(n===ga)n=B;B=n;db={};n=n-v.height();n=Math.min(n,E.height());j.height(n);$=j.find("tr:first div").height()+1;y&&m()}function h(n){q=n;Qa.clear();j.width(n).css("overflow","auto");E.width("");var y=v.find("tr:first th"),M=v.find("tr.fc-all-day th:last"),S=k.find("td"),ba=j[0].clientWidth;E.width(ba);ba=j[0].clientWidth;E.width(ba);u=0;Ia(v.find("tr:lt(2) th:first").add(j.find("tr:first th")).width(1).each(function(){u=Math.max(u,l(this).outerWidth())}),u);V=Math.floor((ba-u)/c);
Ia(S.slice(0,-1),V);Ia(y.slice(1,-2),V);if(n!=ba){Ia(y.slice(-2,-1),ba-u-V*(c-1));y.slice(-1).show();M.show()}else{j.css("overflow","hidden");y.slice(-2,-1).width("");y.slice(-1).hide();M.hide()}k.css({top:v.find("tr").height(),left:u,width:ba-u,height:B})}function m(){var n=vb(),y=C(n);y.setHours(U("firstHour"));var M=oa(n,y)+1;n=function(){j.scrollTop(M)};n();setTimeout(n,0)}function o(){J=j.scrollTop()}function t(){j.scrollTop(J)}function z(n){n.click(O).mousedown(D)}function N(n){n.click(O).mousedown(R)}
function O(n){if(!U("selectable")){var y=Math.min(c-1,Math.floor((n.pageX-k.offset().left)/V));y=T(C(G.visStart),y*ea+pa);var M=this.className.match(/fc-slot(\d+)/);if(M){M=parseInt(M[1])*U("slotMinutes");var S=Math.floor(M/60);y.setHours(S);y.setMinutes(M%60+Aa);va("dayClick",this,y,false,n)}else va("dayClick",this,y,true,n)}}function r(n,y,M){M&&wa.build();var S=C(G.visStart);if(sa){M=za(y,S)*ea+pa+1;n=za(n,S)*ea+pa+1}else{M=za(n,S);n=za(y,S)}M=Math.max(0,M);n=Math.min(c,n);M<n&&z(s(0,M,0,n-1))}
function s(n,y,M,S){n=wa.rect(n,y,M,S,v);return w(n,v)}function Z(n,y){for(var M=C(G.visStart),S=T(C(M),1),ba=0;ba<c;ba++){var ua=new Date(Math.max(M,n)),Da=new Date(Math.min(S,y));if(ua<Da){var qa=ba*ea+pa;qa=wa.rect(0,qa,0,qa,i);ua=oa(M,ua);Da=oa(M,Da);qa.top=ua;qa.height=Da-ua;N(w(qa,i))}T(M,1);T(S,1)}}function ha(n){return u+Qa.left(n)}function da(n){return u+Qa.right(n)}function X(n){return(n-Math.max(na,W)+c)%c*ea+pa}function la(n){return{row:Math.floor(za(n,G.visStart)/7),col:X(n.getDay())}}
function oa(n,y){n=C(n,true);if(y<ra(C(n),Aa))return 0;if(y>=ra(C(n),Ba))return i.height();n=U("slotMinutes");y=y.getHours()*60+y.getMinutes()-Aa;var M=Math.floor(y/n),S=db[M];if(S===ga)S=db[M]=j.find("tr:eq("+M+") td div")[0].offsetTop;return Math.max(0,Math.round(S-1+$*(y%n/n)))}function aa(n){var y=T(C(G.visStart),n.col*ea+pa);n=n.row;U("allDaySlot")&&n--;n>=0&&ra(y,Aa+n*U("slotMinutes"));return y}function ja(n){return U("allDaySlot")&&!n.row}function ca(){return{left:u,right:q}}function A(){return v.find("tr.fc-all-day")}
function ia(n){var y=C(n.start);if(n.allDay)return y;return ra(y,U("defaultEventMinutes"))}function x(n,y){if(y)return C(n);return ra(C(n),U("slotMinutes"))}function d(n,y,M){if(M)U("allDaySlot")&&r(n,T(C(y),1),true);else F(n,y)}function F(n,y){var M=U("selectHelper");wa.build();if(M){var S=za(n,G.visStart)*ea+pa;if(S>=0&&S<c){S=wa.rect(0,S,0,S,i);var ba=oa(n,n),ua=oa(n,y);if(ua>ba){S.top=ba;S.height=ua-ba;S.left+=2;S.width-=5;if(l.isFunction(M)){if(n=M(n,y)){S.position="absolute";S.zIndex=8;ya=l(n).css(S).appendTo(i)}}else{ya=
l(I({title:"",start:n,end:y,className:[],editable:false},S,"fc-event fc-event-vert fc-corner-top fc-corner-bottom "));l.browser.msie&&ya.find("span.fc-event-bg").hide();ya.css("opacity",U("dragOpacity"))}if(ya){N(ya);i.append(ya);Ia(ya,S.width,true);Pa(ya,S.height,true)}}}}else Z(n,y)}function H(){K();if(ya){ya.remove();ya=null}}function R(n){if(n.which==1&&U("selectable")){L(n);var y=this,M;Ka.start(function(S,ba){H();if(S&&S.col==ba.col&&!ja(S)){ba=aa(ba);S=aa(S);M=[ba,ra(C(ba),U("slotMinutes")),
S,ra(C(S),U("slotMinutes"))].sort(eb);F(M[0],M[3])}else M=null},n);l(document).one("mouseup",function(S){Ka.stop();if(M){+M[0]==+M[1]&&va("dayClick",y,M[0],false,S);Q(M[0],M[3],false,S)}})}}function ma(n,y){Ka.start(function(M){K();if(M)if(ja(M))s(M.row,M.col,M.row,M.col);else{M=aa(M);var S=ra(C(M),U("defaultEventMinutes"));Z(M,S)}},y)}function ka(n,y,M){var S=Ka.stop();K();S&&va("drop",n,aa(S),ja(S),y,M)}var G=this;G.renderAgenda=e;G.setWidth=h;G.setHeight=g;G.beforeHide=o;G.afterShow=t;G.defaultEventEnd=
ia;G.timePosition=oa;G.dayOfWeekCol=X;G.dateCell=la;G.cellDate=aa;G.cellIsAllDay=ja;G.allDayTR=A;G.allDayBounds=ca;G.getHoverListener=function(){return Ka};G.colContentLeft=ha;G.colContentRight=da;G.getDaySegmentContainer=function(){return ub};G.getSlotSegmentContainer=function(){return wb};G.getMinMinute=function(){return Aa};G.getMaxMinute=function(){return Ba};G.getBodyContent=function(){return i};G.getRowCnt=function(){return 1};G.getColCnt=function(){return c};G.getColWidth=function(){return V};
G.getSlotHeight=function(){return $};G.defaultSelectionEnd=x;G.renderDayOverlay=r;G.renderSelection=d;G.clearSelection=H;G.dragStart=ma;G.dragStop=ka;lb.call(G,a,b,f);mb.call(G);nb.call(G);Nb.call(G);var U=G.opt,va=G.trigger,Y=G.clearEvents,w=G.renderOverlay,K=G.clearOverlays,Q=G.reportSelection,L=G.unselect,D=G.daySelectionMousedown,I=G.slotSegHtml,P=b.formatDate,v,j,i,E,k,c,p=0,u,V,$,q,B,J,fa,na,W,sa,ea,pa,Aa,Ba,wa,Ka,Qa,db={},ya,ub,wb;ob(a.addClass("fc-agenda"));wa=new pb(function(n,y){function M(xa){return Math.max(qa,
Math.min(cb,xa))}var S,ba,ua;k.find("td").each(function(xa,Ob){S=l(Ob);ba=S.offset().left;if(xa)ua[1]=ba;ua=[ba];y[xa]=ua});ua[1]=ba+S.outerWidth();if(U("allDaySlot")){S=v.find("td");ba=S.offset().top;n[0]=[ba,ba+S.outerHeight()]}for(var Da=i.offset().top,qa=j.offset().top,cb=qa+j.outerHeight(),Ja=0;Ja<p;Ja++)n.push([M(Da+$*Ja),M(Da+$*(Ja+1))])});Ka=new qb(wa);Qa=new rb(function(n){return k.find("td:eq("+n+") div div")})}function Nb(){function a(j,i){da(j);var E,k=j.length,c=[],p=[];for(E=0;E<k;E++)j[E].allDay?
c.push(j[E]):p.push(j[E]);if(s("allDaySlot")){H(f(c),i);oa()}h(e(p),i)}function b(){X();aa().empty();ja().empty()}function f(j){j=$a(ab(j,l.map(j,Na),r.visStart,r.visEnd));var i,E=j.length,k,c,p,u=[];for(i=0;i<E;i++){k=j[i];for(c=0;c<k.length;c++){p=k[c];p.row=0;p.level=i;u.push(p)}}return u}function e(j){var i=ma(),E=ia(),k=A(),c=ra(C(r.visStart),E),p=l.map(j,g),u,V,$,q,B,J,fa=[];for(u=0;u<i;u++){V=$a(ab(j,p,c,ra(C(c),k-E)));Pb(V);for($=0;$<V.length;$++){q=V[$];for(B=0;B<q.length;B++){J=q[B];J.col=
u;J.level=$;fa.push(J)}}T(c,1,true)}return fa}function g(j){return j.end?C(j.end):ra(C(j.start),s("defaultEventMinutes"))}function h(j,i){var E,k=j.length,c,p,u,V,$,q,B,J,fa,na,W="",sa,ea,pa={},Aa={},Ba=ja(),wa;E=ma();if(sa=s("isRTL")){ea=-1;wa=E-1}else{ea=1;wa=0}for(E=0;E<k;E++){c=j[E];p=c.event;u="fc-event fc-event-vert ";if(c.isStart)u+="fc-corner-top ";if(c.isEnd)u+="fc-corner-bottom ";V=x(c.start,c.start);$=x(c.start,c.end);q=c.col;B=c.level;J=c.forward||0;fa=d(q*ea+wa);na=F(q*ea+wa)-fa;na=Math.min(na-
6,na*0.95);q=B?na/(B+J+1):J?(na/(J+1)-6)*2:na;B=fa+na/(B+J+1)*B*ea+(sa?na-q:0);c.top=V;c.left=B;c.outerWidth=q;c.outerHeight=$-V;W+=m(p,c,u)}Ba[0].innerHTML=W;sa=Ba.children();for(E=0;E<k;E++){c=j[E];p=c.event;W=l(sa[E]);ea=Z("eventRender",p,p,W);if(ea===false)W.remove();else{if(ea&&ea!==true){W.remove();W=l(ea).css({position:"absolute",top:c.top,left:c.left}).appendTo(Ba)}c.element=W;if(p._id===i)t(p,W,c);else W[0]._fci=E;va(p,W)}}xb(Ba,j,t);for(E=0;E<k;E++){c=j[E];if(W=c.element){p=pa[i=c.key=yb(W[0])];
c.vsides=p===ga?(pa[i]=Sa(W[0],true)):p;p=Aa[i];c.hsides=p===ga?(Aa[i]=fb(W[0],true)):p;i=W.find("span.fc-event-title");if(i.length)c.titleTop=i[0].offsetTop}}for(E=0;E<k;E++){c=j[E];if(W=c.element){W[0].style.width=Math.max(0,c.outerWidth-c.hsides)+"px";pa=Math.max(0,c.outerHeight-c.vsides);W[0].style.height=pa+"px";p=c.event;if(c.titleTop!==ga&&pa-c.titleTop<10){W.find("span.fc-event-time").text(P(p.start,s("timeFormat"))+" - "+p.title);W.find("span.fc-event-title").remove()}Z("eventAfterRender",
p,p,W)}}}function m(j,i,E){return"<div class='"+E+j.className.join(" ")+"' style='position:absolute;z-index:8;top:"+i.top+"px;left:"+i.left+"px'><a"+(j.url?" href='"+La(j.url)+"'":"")+"><span class='fc-event-bg'></span><span class='fc-event-time'>"+La(v(j.start,j.end,s("timeFormat")))+"</span><span class='fc-event-title'>"+La(j.title)+"</span></a>"+((j.editable||j.editable===ga&&s("editable"))&&!s("disableResizing")&&l.fn.resizable?"<div class='ui-resizable-handle ui-resizable-s'>=</div>":"")+"</div>"}
function o(j,i,E){la(j,i);if(j.editable||j.editable===ga&&s("editable")){z(j,i,E.isStart);E.isEnd&&R(j,i,E)}}function t(j,i,E){la(j,i);if(j.editable||j.editable===ga&&s("editable")){var k=i.find("span.fc-event-time");N(j,i,k);E.isEnd&&O(j,i,k)}}function z(j,i,E){if(!s("disableDragging")&&i.draggable){var k,c=true,p,u=s("isRTL")?-1:1,V=ca(),$=ka(),q=G(),B=ia();i.draggable({zIndex:9,opacity:s("dragOpacity","month"),revertDuration:s("dragRevertDuration"),start:function(fa,na){Z("eventDragStart",i,j,
fa,na);w(j,i);k=i.width();V.start(function(W,sa,ea,pa){i.draggable("option","revert",!W||!ea&&!pa);D();if(W){p=pa*u;if(W.row){if(E&&c){Pa(i.width($-10),q*Math.round((j.end?(j.end-j.start)/Qb:s("defaultEventMinutes"))/s("slotMinutes")));i.draggable("option","grid",[$,1]);c=false}}else{L(T(C(j.start),p),T(Na(j),p));J()}}},fa,"drag")},stop:function(fa,na){var W=V.stop();D();Z("eventDragStop",i,j,fa,na);if(W&&(!c||p)){i.find("a").removeAttr("href");W=0;c||(W=Math.round((i.offset().top-U().offset().top)/
q)*s("slotMinutes")+B-(j.start.getHours()*60+j.start.getMinutes()));K(this,j,p,W,c,fa,na)}else{J();l.browser.msie&&i.css("filter","");Y(j,i)}}});function J(){if(!c){i.width(k).height("").draggable("option","grid",null);c=true}}}}function N(j,i,E){if(!s("disableDragging")&&i.draggable){var k,c=false,p,u,V,$=s("isRTL")?-1:1,q=ca(),B=ma(),J=ka(),fa=G();i.draggable({zIndex:9,scroll:false,grid:[J,fa],axis:B==1?"y":false,opacity:s("dragOpacity"),revertDuration:s("dragRevertDuration"),start:function(sa,
ea){Z("eventDragStart",i,j,sa,ea);w(j,i);l.browser.msie&&i.find("span.fc-event-bg").hide();k=i.position();u=V=0;q.start(function(pa,Aa,Ba,wa){i.draggable("option","revert",!pa);D();if(pa){p=wa*$;if(s("allDaySlot")&&!pa.row){if(!c){c=true;E.hide();i.draggable("option","grid",null)}L(T(C(j.start),p),T(Na(j),p))}else W()}},sa,"drag")},drag:function(sa,ea){u=Math.round((ea.position.top-k.top)/fa)*s("slotMinutes");if(u!=V){c||na(u);V=u}},stop:function(sa,ea){var pa=q.stop();D();Z("eventDragStop",i,j,sa,
ea);if(pa&&(p||u||c))K(this,j,p,c?0:u,c,sa,ea);else{W();i.css(k);na(0);l.browser.msie&&i.css("filter","").find("span.fc-event-bg").css("display","");Y(j,i)}}});function na(sa){var ea=ra(C(j.start),sa),pa;if(j.end)pa=ra(C(j.end),sa);E.text(v(ea,pa,s("timeFormat")))}function W(){if(c){E.css("display","");i.draggable("option","grid",[J,fa]);c=false}}}}function O(j,i,E){if(!s("disableResizing")&&i.resizable){var k,c,p=G();i.resizable({handles:{s:"div.ui-resizable-s"},grid:p,start:function(u,V){k=c=0;
w(j,i);l.browser.msie&&l.browser.version=="6.0"&&i.css("overflow","hidden");i.css("z-index",9);Z("eventResizeStart",this,j,u,V)},resize:function(u,V){k=Math.round((Math.max(p,i.height())-V.originalSize.height)/p);if(k!=c){E.text(v(j.start,!k&&!j.end?null:ra(ha(j),s("slotMinutes")*k),s("timeFormat")));c=k}},stop:function(u,V){Z("eventResizeStop",this,j,u,V);if(k)Q(this,j,0,s("slotMinutes")*k,u,V);else{i.css("z-index",8);Y(j,i)}}})}}var r=this;r.renderEvents=a;r.compileDaySegs=f;r.clearEvents=b;r.slotSegHtml=
m;r.bindDaySeg=o;sb.call(r);var s=r.opt,Z=r.trigger,ha=r.eventEnd,da=r.reportEvents,X=r.reportEventClear,la=r.eventElementHandlers,oa=r.setHeight,aa=r.getDaySegmentContainer,ja=r.getSlotSegmentContainer,ca=r.getHoverListener,A=r.getMaxMinute,ia=r.getMinMinute,x=r.timePosition,d=r.colContentLeft,F=r.colContentRight,H=r.renderDaySegs,R=r.resizableDayEvent,ma=r.getColCnt,ka=r.getColWidth,G=r.getSlotHeight,U=r.getBodyContent,va=r.reportEventElement,Y=r.showEvents,w=r.hideEvents,K=r.eventDrop,Q=r.eventResize,
L=r.renderDayOverlay,D=r.clearOverlays,I=r.calendar,P=I.formatDate,v=I.formatDates}function Pb(a){var b,f,e,g,h,m;for(b=a.length-1;b>0;b--){g=a[b];for(f=0;f<g.length;f++){h=g[f];for(e=0;e<a[b-1].length;e++){m=a[b-1][e];if(zb(h,m))m.forward=Math.max(m.forward||0,(h.forward||0)+1)}}}}function lb(a,b,f){function e(x,d){x=ia[x];if(typeof x=="object")return Wa(x,d||f);return x}function g(x,d){return b.trigger.apply(b,[x,d||X].concat(Array.prototype.slice.call(arguments,2),[X]))}function h(x){ja={};var d,
F=x.length,H;for(d=0;d<F;d++){H=x[d];if(ja[H._id])ja[H._id].push(H);else ja[H._id]=[H]}}function m(x){return x.end?C(x.end):la(x)}function o(x,d){ca.push(d);if(A[x._id])A[x._id].push(d);else A[x._id]=[d]}function t(){ca=[];A={}}function z(x,d){d.click(function(F){if(!d.hasClass("ui-draggable-dragging")&&!d.hasClass("ui-resizable-resizing"))return g("eventClick",this,x,F)}).hover(function(F){g("eventMouseover",this,x,F)},function(F){g("eventMouseout",this,x,F)})}function N(x,d){r(x,d,"show")}function O(x,
d){r(x,d,"hide")}function r(x,d,F){x=A[x._id];var H,R=x.length;for(H=0;H<R;H++)if(!d||x[H][0]!=d[0])x[H][F]()}function s(x,d,F,H,R,ma,ka){var G=d.allDay,U=d._id;ha(ja[U],F,H,R);g("eventDrop",x,d,F,H,R,function(){ha(ja[U],-F,-H,G);aa(U)},ma,ka);aa(U)}function Z(x,d,F,H,R,ma){var ka=d._id;da(ja[ka],F,H);g("eventResize",x,d,F,H,function(){da(ja[ka],-F,-H);aa(ka)},R,ma);aa(ka)}function ha(x,d,F,H){F=F||0;for(var R,ma=x.length,ka=0;ka<ma;ka++){R=x[ka];if(H!==ga)R.allDay=H;ra(T(R.start,d,true),F);if(R.end)R.end=
ra(T(R.end,d,true),F);oa(R,ia)}}function da(x,d,F){F=F||0;for(var H,R=x.length,ma=0;ma<R;ma++){H=x[ma];H.end=ra(T(m(H),d,true),F);oa(H,ia)}}var X=this;X.element=a;X.calendar=b;X.name=f;X.opt=e;X.trigger=g;X.reportEvents=h;X.eventEnd=m;X.reportEventElement=o;X.reportEventClear=t;X.eventElementHandlers=z;X.showEvents=N;X.hideEvents=O;X.eventDrop=s;X.eventResize=Z;var la=X.defaultEventEnd,oa=b.normalizeEvent,aa=b.reportEventChange,ja={},ca=[],A={},ia=b.options}function sb(){function a(w,K){var Q=ma(),
L=ja(),D=ca(),I=0,P,v,j=w.length,i,E;Q[0].innerHTML=f(w);e(w,Q.children());g(w);h(w,Q,K);m(w);o(w);t(w);K=z();for(Q=0;Q<L;Q++){P=[];for(v=0;v<D;v++)P[v]=0;for(;I<j&&(i=w[I]).row==Q;){v=Ab(P.slice(i.startCol,i.endCol));i.top=v;v+=i.outerHeight;for(E=i.startCol;E<i.endCol;E++)P[E]=v;I++}K[Q].height(Ab(P))}O(w,N(K))}function b(w,K,Q){var L=l("<div/>"),D=ma(),I=w.length,P;L[0].innerHTML=f(w);L=L.children();D.append(L);e(w,L);m(w);o(w);t(w);O(w,N(z()));L=[];for(D=0;D<I;D++)if(P=w[D].element){w[D].row===
K&&P.css("top",Q);L.push(P[0])}return l(L)}function f(w){var K=Z("isRTL"),Q,L=w.length,D,I,P;Q=ia();var v=Q.left,j=Q.right,i=[],E,k,c="";for(Q=0;Q<L;Q++){D=w[Q];I=D.event;P="fc-event fc-event-hori ";if(K){if(D.isStart)P+="fc-corner-right ";if(D.isEnd)P+="fc-corner-left ";i[0]=F(D.end.getDay()-1);i[1]=F(D.start.getDay());E=D.isEnd?x(i[0]):v;k=D.isStart?d(i[1]):j}else{if(D.isStart)P+="fc-corner-left ";if(D.isEnd)P+="fc-corner-right ";i[0]=F(D.start.getDay());i[1]=F(D.end.getDay()-1);E=D.isStart?x(i[0]):
v;k=D.isEnd?d(i[1]):j}c+="<div class='"+P+I.className.join(" ")+"' style='position:absolute;z-index:8;left:"+E+"px'><a"+(I.url?" href='"+La(I.url)+"'":"")+">"+(!I.allDay&&D.isStart?"<span class='fc-event-time'>"+La(G(I.start,I.end,Z("timeFormat")))+"</span>":"")+"<span class='fc-event-title'>"+La(I.title)+"</span></a>"+(D.isEnd&&(I.editable||I.editable===ga&&Z("editable"))&&!Z("disableResizing")?"<div class='ui-resizable-handle ui-resizable-"+(K?"w":"e")+"'></div>":"")+"</div>";D.left=E;D.outerWidth=
k-E;i.sort(eb);D.startCol=i[0];D.endCol=i[1]+1}return c}function e(w,K){var Q,L=w.length,D,I,P;for(Q=0;Q<L;Q++){D=w[Q];I=D.event;P=l(K[Q]);I=ha("eventRender",I,I,P);if(I===false)P.remove();else{if(I&&I!==true){I=l(I).css({position:"absolute",left:D.left});P.replaceWith(I);P=I}D.element=P}}}function g(w){var K,Q=w.length,L,D;for(K=0;K<Q;K++){L=w[K];(D=L.element)&&X(L.event,D)}}function h(w,K,Q){var L,D=w.length,I,P,v;for(L=0;L<D;L++){I=w[L];if(P=I.element){v=I.event;if(v._id===Q)ka(v,P,I);else P[0]._fci=
L}}xb(K,w,ka)}function m(w){var K,Q=w.length,L,D,I,P,v={};for(K=0;K<Q;K++){L=w[K];if(D=L.element){I=L.key=yb(D[0]);P=v[I];if(P===ga)P=v[I]=fb(D[0],true);L.hsides=P}}}function o(w){var K,Q=w.length,L,D;for(K=0;K<Q;K++){L=w[K];if(D=L.element)D[0].style.width=Math.max(0,L.outerWidth-L.hsides)+"px"}}function t(w){var K,Q=w.length,L,D,I,P,v={};for(K=0;K<Q;K++){L=w[K];if(D=L.element){I=L.key;P=v[I];if(P===ga)P=v[I]=Bb(D[0]);L.outerHeight=D[0].offsetHeight+P}}}function z(){var w,K=ja(),Q=[];for(w=0;w<K;w++)Q[w]=
A(w).find("td:first div.fc-day-content > div");return Q}function N(w){var K,Q=w.length,L=[];for(K=0;K<Q;K++)L[K]=w[K][0].offsetTop;return L}function O(w,K){var Q,L=w.length,D,I;for(Q=0;Q<L;Q++){D=w[Q];if(I=D.element){I[0].style.top=K[D.row]+(D.top||0)+"px";D=D.event;ha("eventAfterRender",D,D,I)}}}function r(w,K,Q){if(!Z("disableResizing")&&Q.isEnd){var L=Z("isRTL"),D=L?"w":"e";K.find("div.ui-resizable-"+D).mousedown(function(I){function P(q){ha("eventResizeStop",this,w,q);l("body").css("cursor","auto");
v.stop();va();p&&aa(this,w,p,0,q)}if(I.which==1){var v=s.getHoverListener(),j=ja(),i=ca(),E=L?-1:1,k=L?i:0,c=K.css("top"),p,u,V=l.extend({},w),$=H(w.start);Y();l("body").css("cursor",D+"-resize").one("mouseup",P);ha("eventResizeStart",this,w,I);v.start(function(q,B){if(q){var J=Math.max($.row,q.row);q=q.col;if(j==1)J=0;if(J==$.row)q=L?Math.min($.col,q):Math.max($.col,q);p=J*i+q*E+k-(B.row*i+B.col*E+k);B=T(da(w),p,true);if(p){V.end=B;J=u;u=b(R([V]),Q.row,c);u.find("*").css("cursor",D+"-resize");J&&
J.remove();oa(w)}else if(u){la(w);u.remove();u=null}va();U(w.start,T(C(B),1))}},I)}})}}var s=this;s.renderDaySegs=a;s.resizableDayEvent=r;var Z=s.opt,ha=s.trigger,da=s.eventEnd,X=s.reportEventElement,la=s.showEvents,oa=s.hideEvents,aa=s.eventResize,ja=s.getRowCnt,ca=s.getColCnt,A=s.allDayTR,ia=s.allDayBounds,x=s.colContentLeft,d=s.colContentRight,F=s.dayOfWeekCol,H=s.dateCell,R=s.compileDaySegs,ma=s.getDaySegmentContainer,ka=s.bindDaySeg,G=s.calendar.formatDates,U=s.renderDayOverlay,va=s.clearOverlays,
Y=s.clearSelection}function nb(){function a(O,r,s){b();r||(r=o(O,s));t(O,r,s);f(O,r,s)}function b(O){if(N){N=false;z();m("unselect",null,O)}}function f(O,r,s,Z){N=true;m("select",null,O,r,s,Z)}function e(O){var r=g.cellDate,s=g.cellIsAllDay,Z=g.getHoverListener();if(O.which==1&&h("selectable")){b(O);var ha=this,da;Z.start(function(X,la){z();if(X&&s(X)){da=[r(la),r(X)].sort(eb);t(da[0],da[1],true)}else da=null},O);l(document).one("mouseup",function(X){Z.stop();if(da){+da[0]==+da[1]&&m("dayClick",ha,
da[0],true,X);f(da[0],da[1],true,X)}})}}var g=this;g.select=a;g.unselect=b;g.reportSelection=f;g.daySelectionMousedown=e;var h=g.opt,m=g.trigger,o=g.defaultSelectionEnd,t=g.renderSelection,z=g.clearSelection,N=false;h("selectable")&&h("unselectAuto")&&l(document).mousedown(function(O){var r=h("unselectCancel");if(r)if(l(O.target).parents(r).length)return;b(O)})}function mb(){function a(h,m){var o=g.shift();o||(o=l("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>"));o[0].parentNode!=
m[0]&&o.appendTo(m);e.push(o.css(h).show());return o}function b(){for(var h;h=e.shift();)g.push(h.hide().unbind())}var f=this;f.renderOverlay=a;f.clearOverlays=b;var e=[],g=[]}function pb(a){var b=this,f,e;b.build=function(){f=[];e=[];a(f,e)};b.cell=function(g,h){var m=f.length,o=e.length,t,z=-1,N=-1;for(t=0;t<m;t++)if(h>=f[t][0]&&h<f[t][1]){z=t;break}for(t=0;t<o;t++)if(g>=e[t][0]&&g<e[t][1]){N=t;break}return z>=0&&N>=0?{row:z,col:N}:null};b.rect=function(g,h,m,o,t){t=t.offset();return{top:f[g][0]-
t.top,left:e[h][0]-t.left,width:e[o][1]-e[h][0],height:f[m][1]-f[g][0]}}}function qb(a){function b(o){o=a.cell(o.pageX,o.pageY);if(!o!=!m||o&&(o.row!=m.row||o.col!=m.col)){if(o){h||(h=o);g(o,h,o.row-h.row,o.col-h.col)}else g(o,h);m=o}}var f=this,e,g,h,m;f.start=function(o,t,z){g=o;h=m=null;a.build();b(t);e=z||"mousemove";l(document).bind(e,b)};f.stop=function(){l(document).unbind(e,b);return m}}function rb(a){function b(m){return e[m]=e[m]||a(m)}var f=this,e={},g={},h={};f.left=function(m){return g[m]=
g[m]===ga?b(m).position().left:g[m]};f.right=function(m){return h[m]=h[m]===ga?f.left(m)+b(m).width():h[m]};f.clear=function(){e={};g={};h={}}}function Ta(a,b,f){a.setFullYear(a.getFullYear()+b);f||Ga(a);return a}function Ua(a,b,f){if(+a){b=a.getMonth()+b;var e=C(a);e.setDate(1);e.setMonth(b);a.setMonth(b);for(f||Ga(a);a.getMonth()!=e.getMonth();)a.setDate(a.getDate()+(a<e?1:-1))}return a}function T(a,b,f){if(+a){b=a.getDate()+b;var e=C(a);e.setHours(9);e.setDate(b);a.setDate(b);f||Ga(a);gb(a,e)}return a}
function gb(a,b){if(+a)for(;a.getDate()!=b.getDate();)a.setTime(+a+(a<b?1:-1)*Rb)}function ra(a,b){a.setMinutes(a.getMinutes()+b);return a}function Ga(a){a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);return a}function C(a,b){if(b)return Ga(new Date(+a));return new Date(+a)}function vb(){var a=0,b;do b=new Date(1970,a++,1);while(b.getHours());return b}function ta(a,b,f){for(b=b||1;!a.getDay()||f&&a.getDay()==1||!f&&a.getDay()==6;)T(a,b);return a}function za(a,b){return Math.round((C(a,
true)-C(b,true))/kb)}function jb(a,b,f,e){if(b!==ga&&b!=a.getFullYear()){a.setDate(1);a.setMonth(0);a.setFullYear(b)}if(f!==ga&&f!=a.getMonth()){a.setDate(1);a.setMonth(f)}e!==ga&&a.setDate(e)}function Xa(a,b){if(typeof a=="object")return a;if(typeof a=="number")return new Date(a*1E3);if(typeof a=="string"){if(a.match(/^\d+$/))return new Date(parseInt(a)*1E3);if(b===ga)b=true;return Cb(a,b)||(a?new Date(a):null)}return null}function Cb(a,b){a=a.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?$/);
if(!a)return null;var f=new Date(a[1],0,1);if(b||!a[14]){b=new Date(a[1],0,1,9,0);if(a[3]){f.setMonth(a[3]-1);b.setMonth(a[3]-1)}if(a[5]){f.setDate(a[5]);b.setDate(a[5])}gb(f,b);a[7]&&f.setHours(a[7]);a[8]&&f.setMinutes(a[8]);a[10]&&f.setSeconds(a[10]);a[12]&&f.setMilliseconds(Number("0."+a[12])*1E3);gb(f,b)}else{f.setUTCFullYear(a[1],a[3]?a[3]-1:0,a[5]||1);f.setUTCHours(a[7]||0,a[8]||0,a[10]||0,a[12]?Number("0."+a[12])*1E3:0);b=Number(a[16])*60+Number(a[17]);b*=a[15]=="-"?1:-1;f=new Date(+f+b*60*
1E3)}return f}function bb(a){if(typeof a=="number")return a*60;if(typeof a=="object")return a.getHours()*60+a.getMinutes();if(a=a.match(/(\d+)(?::(\d+))?\s*(\w+)?/)){var b=parseInt(a[1]);if(a[3]){b%=12;if(a[3].toLowerCase().charAt(0)=="p")b+=12}return b*60+(a[2]?parseInt(a[2]):0)}}function Ha(a,b,f){return Va(a,null,b,f)}function Va(a,b,f,e){e=e||Oa;var g=a,h=b,m,o=f.length,t,z,N,O="";for(m=0;m<o;m++){t=f.charAt(m);if(t=="'")for(z=m+1;z<o;z++){if(f.charAt(z)=="'"){if(g){O+=z==m+1?"'":f.substring(m+
1,z);m=z}break}}else if(t=="(")for(z=m+1;z<o;z++){if(f.charAt(z)==")"){m=Ha(g,f.substring(m+1,z),e);if(parseInt(m.replace(/\D/,"")))O+=m;m=z;break}}else if(t=="[")for(z=m+1;z<o;z++){if(f.charAt(z)=="]"){t=f.substring(m+1,z);m=Ha(g,t,e);if(m!=Ha(h,t,e))O+=m;m=z;break}}else if(t=="{"){g=b;h=a}else if(t=="}"){g=a;h=b}else{for(z=o;z>m;z--)if(N=Sb[f.substring(m,z)]){if(g)O+=N(g,e);m=z-1;break}if(z==m)if(g)O+=t}}return O}function Na(a){return a.end?Tb(a.end,a.allDay):T(C(a.start),1)}function Tb(a,b){a=
C(a);return b||a.getHours()||a.getMinutes()?T(a,1):Ga(a)}function Ub(a,b){return(b.msLength-a.msLength)*100+(a.event.start-b.event.start)}function zb(a,b){return a.end>b.start&&a.start<b.end}function ab(a,b,f,e){var g=[],h,m=a.length,o,t,z,N,O;for(h=0;h<m;h++){o=a[h];t=o.start;z=b[h];if(z>f&&t<e){if(t<f){t=C(f);N=false}else{t=t;N=true}if(z>e){z=C(e);O=false}else{z=z;O=true}g.push({event:o,start:t,end:z,isStart:N,isEnd:O,msLength:z-t})}}return g.sort(Ub)}function $a(a){var b=[],f,e=a.length,g,h,m,
o;for(f=0;f<e;f++){g=a[f];for(h=0;;){m=false;if(b[h])for(o=0;o<b[h].length;o++)if(zb(b[h][o],g)){m=true;break}if(m)h++;else break}if(b[h])b[h].push(g);else b[h]=[g]}return b}function xb(a,b,f){a.unbind("mouseover").mouseover(function(e){for(var g=e.target,h;g!=this;){h=g;g=g.parentNode}if((g=h._fci)!==ga){h._fci=ga;h=b[g];f(h.event,h.element,h);l(e.target).trigger(e)}e.stopPropagation()})}function Ia(a,b,f){a.each(function(e,g){g.style.width=Math.max(0,b-fb(g,f))+"px"})}function Pa(a,b,f){a.each(function(e,
g){g.style.height=Math.max(0,b-Sa(g,f))+"px"})}function fb(a,b){return(parseFloat(l.curCSS(a,"paddingLeft",true))||0)+(parseFloat(l.curCSS(a,"paddingRight",true))||0)+(parseFloat(l.curCSS(a,"borderLeftWidth",true))||0)+(parseFloat(l.curCSS(a,"borderRightWidth",true))||0)+(b?Vb(a):0)}function Vb(a){return(parseFloat(l.curCSS(a,"marginLeft",true))||0)+(parseFloat(l.curCSS(a,"marginRight",true))||0)}function Sa(a,b){return(parseFloat(l.curCSS(a,"paddingTop",true))||0)+(parseFloat(l.curCSS(a,"paddingBottom",
true))||0)+(parseFloat(l.curCSS(a,"borderTopWidth",true))||0)+(parseFloat(l.curCSS(a,"borderBottomWidth",true))||0)+(b?Bb(a):0)}function Bb(a){return(parseFloat(l.curCSS(a,"marginTop",true))||0)+(parseFloat(l.curCSS(a,"marginBottom",true))||0)}function Ra(a,b){b=typeof b=="number"?b+"px":b;a[0].style.cssText+=";min-height:"+b+";_height:"+b}function ib(){}function eb(a,b){return a-b}function Ab(a){return Math.max.apply(Math,a)}function Ma(a){return(a<10?"0":"")+a}function Wa(a,b){if(a[b]!==ga)return a[b];
b=b.split(/(?=[A-Z])/);for(var f=b.length-1,e;f>=0;f--){e=a[b[f].toLowerCase()];if(e!==ga)return e}return a[""]}function La(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function yb(a){return a.id+"/"+a.className+"/"+a.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig,"")}function ob(a){a.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})}
var Oa={defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:true,allDayDefault:true,ignoreTimezone:true,lazyFetching:true,startParam:"start",endParam:"end",titleFormat:{month:"MMMM yyyy",week:"MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",day:"dddd, MMM d, yyyy"},columnFormat:{month:"ddd",week:"ddd M/d",day:"dddd M/d"},timeFormat:{"":"h(:mm)t"},isRTL:false,firstDay:0,monthNames:["January","February","March","April","May","June","July","August","September",
"October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],buttonText:{prev:"&nbsp;&#9668;&nbsp;",next:"&nbsp;&#9658;&nbsp;",prevYear:"&nbsp;&lt;&lt;&nbsp;",nextYear:"&nbsp;&gt;&gt;&nbsp;",today:"today",month:"month",week:"week",day:"day"},theme:false,buttonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e"},
unselectAuto:true,dropAccept:"*"},Wb={header:{left:"next,prev today",center:"",right:"title"},buttonText:{prev:"&nbsp;&#9658;&nbsp;",next:"&nbsp;&#9668;&nbsp;",prevYear:"&nbsp;&gt;&gt;&nbsp;",nextYear:"&nbsp;&lt;&lt;&nbsp;"},buttonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w"}},Ea=l.fullCalendar={version:"1.4.9"},Fa=Ea.views={};l.fn.fullCalendar=function(a){if(typeof a=="string"){var b=Array.prototype.slice.call(arguments,1),f;this.each(function(){var g=l.data(this,"fullCalendar");if(g&&
l.isFunction(g[a])){g=g[a].apply(g,b);if(f===ga)f=g;a=="destroy"&&l.removeData(this,"fullCalendar")}});if(f!==ga)return f;return this}var e=a.eventSources||[];delete a.eventSources;if(a.events){e.push(a.events);delete a.events}a=l.extend(true,{},Oa,a.isRTL||a.isRTL===ga&&Oa.isRTL?Wb:{},a);this.each(function(g,h){g=l(h);h=new Db(g,a,e);g.data("fullCalendar",h);h.render()});return this};var Gb=1;Fa.month=Hb;Fa.basicWeek=Ib;Fa.basicDay=Jb;var Za;hb({weekMode:"fixed"});Fa.agendaWeek=Lb;Fa.agendaDay=Mb;
hb({allDaySlot:true,allDayText:"all-day",firstHour:6,slotMinutes:30,defaultEventMinutes:120,axisFormat:"h(:mm)tt",timeFormat:{agenda:"h:mm{ - h:mm}"},dragOpacity:{agenda:0.5},minTime:0,maxTime:24});Ea.addDays=T;Ea.cloneDate=C;Ea.parseDate=Xa;Ea.parseISO8601=Cb;Ea.parseTime=bb;Ea.formatDate=Ha;Ea.formatDates=Va;var Ca=["sun","mon","tue","wed","thu","fri","sat"],kb=864E5,Rb=36E5,Qb=6E4,Sb={s:function(a){return a.getSeconds()},ss:function(a){return Ma(a.getSeconds())},m:function(a){return a.getMinutes()},
mm:function(a){return Ma(a.getMinutes())},h:function(a){return a.getHours()%12||12},hh:function(a){return Ma(a.getHours()%12||12)},H:function(a){return a.getHours()},HH:function(a){return Ma(a.getHours())},d:function(a){return a.getDate()},dd:function(a){return Ma(a.getDate())},ddd:function(a,b){return b.dayNamesShort[a.getDay()]},dddd:function(a,b){return b.dayNames[a.getDay()]},M:function(a){return a.getMonth()+1},MM:function(a){return Ma(a.getMonth()+1)},MMM:function(a,b){return b.monthNamesShort[a.getMonth()]},
MMMM:function(a,b){return b.monthNames[a.getMonth()]},yy:function(a){return(a.getFullYear()+"").substring(2)},yyyy:function(a){return a.getFullYear()},t:function(a){return a.getHours()<12?"a":"p"},tt:function(a){return a.getHours()<12?"am":"pm"},T:function(a){return a.getHours()<12?"A":"P"},TT:function(a){return a.getHours()<12?"AM":"PM"},u:function(a){return Ha(a,"yyyy-MM-dd'T'HH:mm:ss'Z'")},S:function(a){a=a.getDate();if(a>10&&a<20)return"th";return["st","nd","rd"][a%10-1]||"th"}}})(jQuery);
;
/*
 * jQuery UI 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */(function(C){var I=C.fn.remove,D=C.browser.mozilla&&(parseFloat(C.browser.version)<1.9);C.ui={version:"1.6",plugin:{add:function(K,L,N){var M=C.ui[K].prototype;for(var J in N){M.plugins[J]=M.plugins[J]||[];M.plugins[J].push([L,N[J]])}},call:function(J,L,K){var N=J.plugins[L];if(!N){return }for(var M=0;M<N.length;M++){if(J.options[N[M][0]]){N[M][1].apply(J.element,K)}}}},contains:function(L,K){var J=C.browser.safari&&C.browser.version<522;if(L.contains&&!J){return L.contains(K)}if(L.compareDocumentPosition){return !!(L.compareDocumentPosition(K)&16)}while(K=K.parentNode){if(K==L){return true}}return false},cssCache:{},css:function(J){if(C.ui.cssCache[J]){return C.ui.cssCache[J]}var K=C('<div class="ui-gen">').addClass(J).css({position:"absolute",top:"-5000px",left:"-5000px",display:"block"}).appendTo("body");C.ui.cssCache[J]=!!((!(/auto|default/).test(K.css("cursor"))||(/^[1-9]/).test(K.css("height"))||(/^[1-9]/).test(K.css("width"))||!(/none/).test(K.css("backgroundImage"))||!(/transparent|rgba\(0, 0, 0, 0\)/).test(K.css("backgroundColor"))));try{C("body").get(0).removeChild(K.get(0))}catch(L){}return C.ui.cssCache[J]},hasScroll:function(M,K){if(C(M).css("overflow")=="hidden"){return false}var J=(K&&K=="left")?"scrollLeft":"scrollTop",L=false;if(M[J]>0){return true}M[J]=1;L=(M[J]>0);M[J]=0;return L},isOverAxis:function(K,J,L){return(K>J)&&(K<(J+L))},isOver:function(O,K,N,M,J,L){return C.ui.isOverAxis(O,N,J)&&C.ui.isOverAxis(K,M,L)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(D){var F=C.attr,E=C.fn.removeAttr,H="http://www.w3.org/2005/07/aaa",A=/^aria-/,B=/^wairole:/;C.attr=function(K,J,L){var M=L!==undefined;return(J=="role"?(M?F.call(this,K,J,"wairole:"+L):(F.apply(this,arguments)||"").replace(B,"")):(A.test(J)?(M?K.setAttributeNS(H,J.replace(A,"aaa:"),L):F.call(this,K,J.replace(A,"aaa:"))):F.apply(this,arguments)))};C.fn.removeAttr=function(J){return(A.test(J)?this.each(function(){this.removeAttributeNS(H,J.replace(A,""))}):E.call(this,J))}}C.fn.extend({remove:function(){C("*",this).add(this).each(function(){C(this).triggerHandler("remove")});return I.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var J;if((C.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){J=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(C.curCSS(this,"position",1))&&(/(auto|scroll)/).test(C.curCSS(this,"overflow",1)+C.curCSS(this,"overflow-y",1)+C.curCSS(this,"overflow-x",1))}).eq(0)}else{J=this.parents().filter(function(){return(/(auto|scroll)/).test(C.curCSS(this,"overflow",1)+C.curCSS(this,"overflow-y",1)+C.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!J.length?C(document):J}});C.extend(C.expr[":"],{data:function(K,L,J){return C.data(K,J[3])},tabbable:function(L,M,K){var N=L.nodeName.toLowerCase();function J(O){return !(C(O).is(":hidden")||C(O).parents(":hidden").length)}return(L.tabIndex>=0&&(("a"==N&&L.href)||(/input|select|textarea|button/.test(N)&&"hidden"!=L.type&&!L.disabled))&&J(L))}});function G(M,N,O,L){function K(Q){var P=C[M][N][Q]||[];return(typeof P=="string"?P.split(/,?\s+/):P)}var J=K("getter");if(L.length==1&&typeof L[0]=="string"){J=J.concat(K("getterSetter"))}return(C.inArray(O,J)!=-1)}C.widget=function(K,J){var L=K.split(".")[0];K=K.split(".")[1];C.fn[K]=function(P){var N=(typeof P=="string"),O=Array.prototype.slice.call(arguments,1);if(N&&P.substring(0,1)=="_"){return this}if(N&&G(L,K,P,O)){var M=C.data(this[0],K);return(M?M[P].apply(M,O):undefined)}return this.each(function(){var Q=C.data(this,K);(!Q&&!N&&C.data(this,K,new C[L][K](this,P)));(Q&&N&&C.isFunction(Q[P])&&Q[P].apply(Q,O))})};C[L]=C[L]||{};C[L][K]=function(O,N){var M=this;this.widgetName=K;this.widgetEventPrefix=C[L][K].eventPrefix||K;this.widgetBaseClass=L+"-"+K;this.options=C.extend({},C.widget.defaults,C[L][K].defaults,C.metadata&&C.metadata.get(O)[K],N);this.element=C(O).bind("setData."+K,function(Q,P,R){return M._setData(P,R)}).bind("getData."+K,function(Q,P){return M._getData(P)}).bind("remove",function(){return M.destroy()});this._init()};C[L][K].prototype=C.extend({},C.widget.prototype,J);C[L][K].getterSetter="option"};C.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName)},option:function(L,M){var K=L,J=this;if(typeof L=="string"){if(M===undefined){return this._getData(L)}K={};K[L]=M}C.each(K,function(N,O){J._setData(N,O)})},_getData:function(J){return this.options[J]},_setData:function(J,K){this.options[J]=K;if(J=="disabled"){this.element[K?"addClass":"removeClass"](this.widgetBaseClass+"-disabled")}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(K,L,M){var J=(K==this.widgetEventPrefix?K:this.widgetEventPrefix+K);L=L||C.event.fix({type:J,target:this.element[0]});return this.element.triggerHandler(J,[L,M],this.options[K])}};C.widget.defaults={disabled:false};C.ui.mouse={_mouseInit:function(){var J=this;this.element.bind("mousedown."+this.widgetName,function(K){return J._mouseDown(K)}).bind("click."+this.widgetName,function(K){if(J._preventClickEvent){J._preventClickEvent=false;return false}});if(C.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(C.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(L){(this._mouseStarted&&this._mouseUp(L));this._mouseDownEvent=L;var K=this,M=(L.which==1),J=(typeof this.options.cancel=="string"?C(L.target).parents().add(L.target).filter(this.options.cancel).length:false);if(!M||J||!this._mouseCapture(L)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){K.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(L)&&this._mouseDelayMet(L)){this._mouseStarted=(this._mouseStart(L)!==false);if(!this._mouseStarted){L.preventDefault();return true}}this._mouseMoveDelegate=function(N){return K._mouseMove(N)};this._mouseUpDelegate=function(N){return K._mouseUp(N)};C(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);if(!C.browser.safari){L.preventDefault()}return true},_mouseMove:function(J){if(C.browser.msie&&!J.button){return this._mouseUp(J)}if(this._mouseStarted){this._mouseDrag(J);return J.preventDefault()}if(this._mouseDistanceMet(J)&&this._mouseDelayMet(J)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,J)!==false);(this._mouseStarted?this._mouseDrag(J):this._mouseUp(J))}return !this._mouseStarted},_mouseUp:function(J){C(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=true;this._mouseStop(J)}return false},_mouseDistanceMet:function(J){return(Math.max(Math.abs(this._mouseDownEvent.pageX-J.pageX),Math.abs(this._mouseDownEvent.pageY-J.pageY))>=this.options.distance)},_mouseDelayMet:function(J){return this.mouseDelayMet},_mouseStart:function(J){},_mouseDrag:function(J){},_mouseStop:function(J){},_mouseCapture:function(J){return true}};C.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);
/*
 * jQuery UI Draggable 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	ui.core.js
 */(function(A){A.widget("ui.draggable",A.extend({},A.ui.mouse,{_init:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.cssNamespace&&this.element.addClass(this.options.cssNamespace+"-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return }this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(B){var C=this.options;if(this.helper||C.disabled||A(B.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(B);if(!this.handle){return false}return true},_mouseStart:function(B){var C=this.options;this.helper=this._createHelper(B);this._cacheHelperProportions();if(A.ui.ddmanager){A.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};A.extend(this.offset,{click:{left:B.pageX-this.offset.left,top:B.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});if(C.cursorAt){this._adjustOffsetFromHelper(C.cursorAt)}this.originalPosition=this._generatePosition(B);if(C.containment){this._setContainment()}this._propagate("start",B);this._cacheHelperProportions();if(A.ui.ddmanager&&!C.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,B)}this.helper.addClass("ui-draggable-dragging");this._mouseDrag(B,true);return true},_mouseDrag:function(B,C){this.position=this._generatePosition(B);this.positionAbs=this._convertPositionTo("absolute");if(!C){this.position=this._propagate("drag",B)||this.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(A.ui.ddmanager){A.ui.ddmanager.drag(this,B)}return false},_mouseStop:function(C){var D=false;if(A.ui.ddmanager&&!this.options.dropBehaviour){var D=A.ui.ddmanager.drop(this,C)}if((this.options.revert=="invalid"&&!D)||(this.options.revert=="valid"&&D)||this.options.revert===true||(A.isFunction(this.options.revert)&&this.options.revert.call(this.element,D))){var B=this;A(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){B._propagate("stop",C);B._clear()})}else{this._propagate("stop",C);this._clear()}return false},_getHandle:function(B){var C=!this.options.handle||!A(this.options.handle,this.element).length?true:false;A(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==B.target){C=true}});return C},_createHelper:function(C){var D=this.options;var B=A.isFunction(D.helper)?A(D.helper.apply(this.element[0],[C])):(D.helper=="clone"?this.element.clone():this.element);if(!B.parents("body").length){B.appendTo((D.appendTo=="parent"?this.element[0].parentNode:D.appendTo))}if(B[0]!=this.element[0]&&!(/(fixed|absolute)/).test(B.css("position"))){B.css("position","absolute")}return B},_adjustOffsetFromHelper:function(B){if(B.left!=undefined){this.offset.click.left=B.left+this.margins.left}if(B.right!=undefined){this.offset.click.left=this.helperProportions.width-B.right+this.margins.left}if(B.top!=undefined){this.offset.click.top=B.top+this.margins.top}if(B.bottom!=undefined){this.offset.click.top=this.helperProportions.height-B.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var B=this.offsetParent.offset();if((this.offsetParent[0]==document.body&&A.browser.mozilla)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&A.browser.msie)){B={top:0,left:0}}return{top:B.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:B.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var B=this.element.position();return{top:B.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:B.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var E=this.options;if(E.containment=="parent"){E.containment=this.helper[0].parentNode}if(E.containment=="document"||E.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,A(E.containment=="document"?document:window).width()-this.offset.relative.left-this.offset.parent.left-this.helperProportions.width-this.margins.left-(parseInt(this.element.css("marginRight"),10)||0),(A(E.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.offset.relative.top-this.offset.parent.top-this.helperProportions.height-this.margins.top-(parseInt(this.element.css("marginBottom"),10)||0)]}if(!(/^(document|window|parent)$/).test(E.containment)){var C=A(E.containment)[0];var D=A(E.containment).offset();var B=(A(C).css("overflow")!="hidden");this.containment=[D.left+(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.offset.relative.left-this.offset.parent.left-this.margins.left,D.top+(parseInt(A(C).css("borderTopWidth"),10)||0)-this.offset.relative.top-this.offset.parent.top-this.margins.top,D.left+(B?Math.max(C.scrollWidth,C.offsetWidth):C.offsetWidth)-(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.offset.relative.left-this.offset.parent.left-this.helperProportions.width-this.margins.left,D.top+(B?Math.max(C.scrollHeight,C.offsetHeight):C.offsetHeight)-(parseInt(A(C).css("borderTopWidth"),10)||0)-this.offset.relative.top-this.offset.parent.top-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(D,F){if(!F){F=this.position}var C=D=="absolute"?1:-1;var B=this[(this.cssPosition=="absolute"?"offset":"scroll")+"Parent"],E=(/(html|body)/i).test(B[0].tagName);return{top:(F.top+this.offset.relative.top*C+this.offset.parent.top*C+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(E?0:B.scrollTop()))*C+this.margins.top*C),left:(F.left+this.offset.relative.left*C+this.offset.parent.left*C+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():(E?0:B.scrollLeft()))*C+this.margins.left*C)}},_generatePosition:function(D){var G=this.options,C=this[(this.cssPosition=="absolute"?"offset":"scroll")+"Parent"],H=(/(html|body)/i).test(C[0].tagName);var B={top:(D.pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(H?0:C.scrollTop()))),left:(D.pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():H?0:C.scrollLeft()))};if(!this.originalPosition){return B}if(this.containment){if(B.left<this.containment[0]){B.left=this.containment[0]}if(B.top<this.containment[1]){B.top=this.containment[1]}if(B.left>this.containment[2]){B.left=this.containment[2]}if(B.top>this.containment[3]){B.top=this.containment[3]}}if(G.grid){var F=this.originalPosition.top+Math.round((B.top-this.originalPosition.top)/G.grid[1])*G.grid[1];B.top=this.containment?(!(F<this.containment[1]||F>this.containment[3])?F:(!(F<this.containment[1])?F-G.grid[1]:F+G.grid[1])):F;var E=this.originalPosition.left+Math.round((B.left-this.originalPosition.left)/G.grid[0])*G.grid[0];B.left=this.containment?(!(E<this.containment[0]||E>this.containment[2])?E:(!(E<this.containment[0])?E-G.grid[0]:E+G.grid[0])):E}return B},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_propagate:function(C,B){A.ui.plugin.call(this,C,[B,this._uiHash()]);if(C=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return this.element.triggerHandler(C=="drag"?C:"drag"+C,[B,this._uiHash()],this.options[C])},plugins:{},_uiHash:function(B){return{helper:this.helper,position:this.position,absolutePosition:this.positionAbs,options:this.options}}}));A.extend(A.ui.draggable,{version:"1.6",defaults:{appendTo:"parent",axis:false,cancel:":input",connectToSortable:false,containment:false,cssNamespace:"ui",cursor:"default",cursorAt:null,delay:0,distance:1,grid:false,handle:false,helper:"original",iframeFix:false,opacity:1,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:null}});A.ui.plugin.add("draggable","connectToSortable",{start:function(B,D){var C=A(this).data("draggable");C.sortables=[];A(D.options.connectToSortable).each(function(){A(this+"").each(function(){if(A.data(this,"sortable")){var E=A.data(this,"sortable");C.sortables.push({instance:E,shouldRevert:E.options.revert});E._refreshItems();E._propagate("activate",B,C)}})})},stop:function(B,D){var C=A(this).data("draggable");A.each(C.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;C.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(B);this.instance.element.triggerHandler("sortreceive",[B,A.extend(this.instance._ui(),{sender:C.element})],this.instance.options["receive"]);this.instance.options.helper=this.instance.options._helper;if(C.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._propagate("deactivate",B,C)}})},drag:function(C,F){var E=A(this).data("draggable"),B=this;var D=function(I){var N=this.offset.click.top,M=this.offset.click.left;var G=this.positionAbs.top,K=this.positionAbs.left;var J=I.height,L=I.width;var O=I.top,H=I.left;return A.ui.isOver(G+N,K+M,O,H,J,L)};A.each(E.sortables,function(G){if(D.call(E,this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=A(B).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return F.helper[0]};C.target=this.instance.currentItem[0];this.instance._mouseCapture(C,true);this.instance._mouseStart(C,true,true);this.instance.offset.click.top=E.offset.click.top;this.instance.offset.click.left=E.offset.click.left;this.instance.offset.parent.left-=E.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=E.offset.parent.top-this.instance.offset.parent.top;E._propagate("toSortable",C)}if(this.instance.currentItem){this.instance._mouseDrag(C)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._mouseStop(C,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}E._propagate("fromSortable",C)}}})}});A.ui.plugin.add("draggable","cursor",{start:function(C,D){var B=A("body");if(B.css("cursor")){D.options._cursor=B.css("cursor")}B.css("cursor",D.options.cursor)},stop:function(B,C){if(C.options._cursor){A("body").css("cursor",C.options._cursor)}}});A.ui.plugin.add("draggable","iframeFix",{start:function(B,C){A(C.options.iframeFix===true?"iframe":C.options.iframeFix).each(function(){A('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(A(this).offset()).appendTo("body")})},stop:function(B,C){A("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});A.ui.plugin.add("draggable","opacity",{start:function(C,D){var B=A(D.helper);if(B.css("opacity")){D.options._opacity=B.css("opacity")}B.css("opacity",D.options.opacity)},stop:function(B,C){if(C.options._opacity){A(C.helper).css("opacity",C.options._opacity)}}});A.ui.plugin.add("draggable","scroll",{start:function(C,D){var E=D.options;var B=A(this).data("draggable");if(B.scrollParent[0]!=document&&B.scrollParent[0].tagName!="HTML"){B.overflowOffset=B.scrollParent.offset()}},drag:function(D,E){var F=E.options,B=false;var C=A(this).data("draggable");if(C.scrollParent[0]!=document&&C.scrollParent[0].tagName!="HTML"){if((C.overflowOffset.top+C.scrollParent[0].offsetHeight)-D.pageY<F.scrollSensitivity){C.scrollParent[0].scrollTop=B=C.scrollParent[0].scrollTop+F.scrollSpeed}else{if(D.pageY-C.overflowOffset.top<F.scrollSensitivity){C.scrollParent[0].scrollTop=B=C.scrollParent[0].scrollTop-F.scrollSpeed}}if((C.overflowOffset.left+C.scrollParent[0].offsetWidth)-D.pageX<F.scrollSensitivity){C.scrollParent[0].scrollLeft=B=C.scrollParent[0].scrollLeft+F.scrollSpeed}else{if(D.pageX-C.overflowOffset.left<F.scrollSensitivity){C.scrollParent[0].scrollLeft=B=C.scrollParent[0].scrollLeft-F.scrollSpeed}}}else{if(D.pageY-A(document).scrollTop()<F.scrollSensitivity){B=A(document).scrollTop(A(document).scrollTop()-F.scrollSpeed)}else{if(A(window).height()-(D.pageY-A(document).scrollTop())<F.scrollSensitivity){B=A(document).scrollTop(A(document).scrollTop()+F.scrollSpeed)}}if(D.pageX-A(document).scrollLeft()<F.scrollSensitivity){B=A(document).scrollLeft(A(document).scrollLeft()-F.scrollSpeed)}else{if(A(window).width()-(D.pageX-A(document).scrollLeft())<F.scrollSensitivity){B=A(document).scrollLeft(A(document).scrollLeft()+F.scrollSpeed)}}}if(B!==false&&A.ui.ddmanager&&!F.dropBehaviour){A.ui.ddmanager.prepareOffsets(C,D)}if(B!==false&&C.cssPosition=="absolute"&&C.scrollParent[0]!=document&&A.ui.contains(C.scrollParent[0],C.offsetParent[0])){C.offset.parent=C._getParentOffset()}if(B!==false&&C.cssPosition=="relative"&&!(C.scrollParent[0]!=document&&C.scrollParent[0]!=C.offsetParent[0])){C.offset.relative=C._getRelativeOffset()}}});A.ui.plugin.add("draggable","snap",{start:function(B,D){var C=A(this).data("draggable");C.snapElements=[];A(D.options.snap.constructor!=String?(D.options.snap.items||":data(draggable)"):D.options.snap).each(function(){var F=A(this);var E=F.offset();if(this!=C.element[0]){C.snapElements.push({item:this,width:F.outerWidth(),height:F.outerHeight(),top:E.top,left:E.left})}})},drag:function(M,K){var E=A(this).data("draggable");var Q=K.options.snapTolerance;var P=K.absolutePosition.left,O=P+E.helperProportions.width,D=K.absolutePosition.top,C=D+E.helperProportions.height;for(var N=E.snapElements.length-1;N>=0;N--){var L=E.snapElements[N].left,J=L+E.snapElements[N].width,I=E.snapElements[N].top,S=I+E.snapElements[N].height;if(!((L-Q<P&&P<J+Q&&I-Q<D&&D<S+Q)||(L-Q<P&&P<J+Q&&I-Q<C&&C<S+Q)||(L-Q<O&&O<J+Q&&I-Q<D&&D<S+Q)||(L-Q<O&&O<J+Q&&I-Q<C&&C<S+Q))){if(E.snapElements[N].snapping){(E.options.snap.release&&E.options.snap.release.call(E.element,M,A.extend(E._uiHash(),{snapItem:E.snapElements[N].item})))}E.snapElements[N].snapping=false;continue}if(K.options.snapMode!="inner"){var B=Math.abs(I-C)<=Q;var R=Math.abs(S-D)<=Q;var G=Math.abs(L-O)<=Q;var H=Math.abs(J-P)<=Q;if(B){K.position.top=E._convertPositionTo("relative",{top:I-E.helperProportions.height,left:0}).top}if(R){K.position.top=E._convertPositionTo("relative",{top:S,left:0}).top}if(G){K.position.left=E._convertPositionTo("relative",{top:0,left:L-E.helperProportions.width}).left}if(H){K.position.left=E._convertPositionTo("relative",{top:0,left:J}).left}}var F=(B||R||G||H);if(K.options.snapMode!="outer"){var B=Math.abs(I-D)<=Q;var R=Math.abs(S-C)<=Q;var G=Math.abs(L-P)<=Q;var H=Math.abs(J-O)<=Q;if(B){K.position.top=E._convertPositionTo("relative",{top:I,left:0}).top}if(R){K.position.top=E._convertPositionTo("relative",{top:S-E.helperProportions.height,left:0}).top}if(G){K.position.left=E._convertPositionTo("relative",{top:0,left:L}).left}if(H){K.position.left=E._convertPositionTo("relative",{top:0,left:J-E.helperProportions.width}).left}}if(!E.snapElements[N].snapping&&(B||R||G||H||F)){(E.options.snap.snap&&E.options.snap.snap.call(E.element,M,A.extend(E._uiHash(),{snapItem:E.snapElements[N].item})))}E.snapElements[N].snapping=(B||R||G||H||F)}}});A.ui.plugin.add("draggable","stack",{start:function(B,C){var D=A.makeArray(A(C.options.stack.group)).sort(function(F,E){return(parseInt(A(F).css("zIndex"),10)||C.options.stack.min)-(parseInt(A(E).css("zIndex"),10)||C.options.stack.min)});A(D).each(function(E){this.style.zIndex=C.options.stack.min+E});this[0].style.zIndex=C.options.stack.min+D.length}});A.ui.plugin.add("draggable","zIndex",{start:function(C,D){var B=A(D.helper);if(B.css("zIndex")){D.options._zIndex=B.css("zIndex")}B.css("zIndex",D.options.zIndex)},stop:function(B,C){if(C.options._zIndex){A(C.helper).css("zIndex",C.options._zIndex)}}})})(jQuery);
/*
 * jQuery UI Droppable 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 */(function(A){A.widget("ui.droppable",{_init:function(){var C=this.options,B=C.accept;this.isover=0;this.isout=1;this.options.accept=this.options.accept&&A.isFunction(this.options.accept)?this.options.accept:function(D){return D.is(B)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};A.ui.ddmanager.droppables[this.options.scope]=A.ui.ddmanager.droppables[this.options.scope]||[];A.ui.ddmanager.droppables[this.options.scope].push(this);(this.options.cssNamespace&&this.element.addClass(this.options.cssNamespace+"-droppable"))},destroy:function(){var B=A.ui.ddmanager.droppables[this.options.scope];for(var C=0;C<B.length;C++){if(B[C]==this){B.splice(C,1)}}this.element.removeClass("ui-droppable-disabled").removeData("droppable").unbind(".droppable")},_setData:function(B,C){if(B=="accept"){this.options.accept=C&&A.isFunction(C)?C:function(D){return D.is(accept)}}else{A.widget.prototype._setData.apply(this,arguments)}},_activate:function(C){var B=A.ui.ddmanager.current;A.ui.plugin.call(this,"activate",[C,this.ui(B)]);if(B){this.element.triggerHandler("dropactivate",[C,this.ui(B)],this.options.activate)}},_deactivate:function(C){var B=A.ui.ddmanager.current;A.ui.plugin.call(this,"deactivate",[C,this.ui(B)]);if(B){this.element.triggerHandler("dropdeactivate",[C,this.ui(B)],this.options.deactivate)}},_over:function(C){var B=A.ui.ddmanager.current;if(!B||(B.currentItem||B.element)[0]==this.element[0]){return }if(this.options.accept.call(this.element,(B.currentItem||B.element))){A.ui.plugin.call(this,"over",[C,this.ui(B)]);this.element.triggerHandler("dropover",[C,this.ui(B)],this.options.over)}},_out:function(C){var B=A.ui.ddmanager.current;if(!B||(B.currentItem||B.element)[0]==this.element[0]){return }if(this.options.accept.call(this.element,(B.currentItem||B.element))){A.ui.plugin.call(this,"out",[C,this.ui(B)]);this.element.triggerHandler("dropout",[C,this.ui(B)],this.options.out)}},_drop:function(C,D){var B=D||A.ui.ddmanager.current;if(!B||(B.currentItem||B.element)[0]==this.element[0]){return false}var E=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var F=A.data(this,"droppable");if(F.options.greedy&&A.ui.intersect(B,A.extend(F,{offset:F.element.offset()}),F.options.tolerance)){E=true;return false}});if(E){return false}if(this.options.accept.call(this.element,(B.currentItem||B.element))){A.ui.plugin.call(this,"drop",[C,this.ui(B)]);this.element.triggerHandler("drop",[C,this.ui(B)],this.options.drop);return this.element}return false},plugins:{},ui:function(B){return{draggable:(B.currentItem||B.element),helper:B.helper,position:B.position,absolutePosition:B.positionAbs,options:this.options,element:this.element}}});A.extend(A.ui.droppable,{version:"1.6",defaults:{accept:"*",activeClass:null,cssNamespace:"ui",greedy:false,hoverClass:null,scope:"default",tolerance:"intersect"}});A.ui.intersect=function(O,I,M){if(!I.offset){return false}var D=(O.positionAbs||O.position.absolute).left,C=D+O.helperProportions.width,L=(O.positionAbs||O.position.absolute).top,K=L+O.helperProportions.height;var F=I.offset.left,B=F+I.proportions.width,N=I.offset.top,J=N+I.proportions.height;switch(M){case"fit":return(F<D&&C<B&&N<L&&K<J);break;case"intersect":return(F<D+(O.helperProportions.width/2)&&C-(O.helperProportions.width/2)<B&&N<L+(O.helperProportions.height/2)&&K-(O.helperProportions.height/2)<J);break;case"pointer":var G=((O.positionAbs||O.position.absolute).left+(O.clickOffset||O.offset.click).left),H=((O.positionAbs||O.position.absolute).top+(O.clickOffset||O.offset.click).top),E=A.ui.isOver(H,G,N,F,I.proportions.height,I.proportions.width);return E;break;case"touch":return((L>=N&&L<=J)||(K>=N&&K<=J)||(L<N&&K>J))&&((D>=F&&D<=B)||(C>=F&&C<=B)||(D<F&&C>B));break;default:return false;break}};A.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(E,G){var B=A.ui.ddmanager.droppables[E.options.scope];var F=G?G.type:null;var H=(E.currentItem||E.element).find(":data(droppable)").andSelf();droppablesLoop:for(var D=0;D<B.length;D++){if(B[D].options.disabled||(E&&!B[D].options.accept.call(B[D].element,(E.currentItem||E.element)))){continue}for(var C=0;C<H.length;C++){if(H[C]==B[D].element[0]){B[D].proportions.height=0;continue droppablesLoop}}B[D].visible=B[D].element.css("display")!="none";if(!B[D].visible){continue}B[D].offset=B[D].element.offset();B[D].proportions={width:B[D].element[0].offsetWidth,height:B[D].element[0].offsetHeight};if(F=="dragstart"||F=="sortactivate"){B[D]._activate.call(B[D],G)}}},drop:function(B,C){var D=false;A.each(A.ui.ddmanager.droppables[B.options.scope],function(){if(!this.options){return }if(!this.options.disabled&&this.visible&&A.ui.intersect(B,this,this.options.tolerance)){D=this._drop.call(this,C)}if(!this.options.disabled&&this.visible&&this.options.accept.call(this.element,(B.currentItem||B.element))){this.isout=1;this.isover=0;this._deactivate.call(this,C)}});return D},drag:function(B,C){if(B.options.refreshPositions){A.ui.ddmanager.prepareOffsets(B,C)}A.each(A.ui.ddmanager.droppables[B.options.scope],function(){if(this.options.disabled||this.greedyChild||!this.visible){return }var E=A.ui.intersect(B,this,this.options.tolerance);var G=!E&&this.isover==1?"isout":(E&&this.isover==0?"isover":null);if(!G){return }var F;if(this.options.greedy){var D=this.element.parents(":data(droppable):eq(0)");if(D.length){F=A.data(D[0],"droppable");F.greedyChild=(G=="isover"?1:0)}}if(F&&G=="isover"){F["isover"]=0;F["isout"]=1;F._out.call(F,C)}this[G]=1;this[G=="isout"?"isover":"isout"]=0;this[G=="isover"?"_over":"_out"].call(this,C);if(F&&G=="isout"){F["isout"]=0;F["isover"]=1;F._over.call(F,C)}})}};A.ui.plugin.add("droppable","activeClass",{activate:function(B,C){A(this).addClass(C.options.activeClass)},deactivate:function(B,C){A(this).removeClass(C.options.activeClass)},drop:function(B,C){A(this).removeClass(C.options.activeClass)}});A.ui.plugin.add("droppable","hoverClass",{over:function(B,C){A(this).addClass(C.options.hoverClass)},out:function(B,C){A(this).removeClass(C.options.hoverClass)},drop:function(B,C){A(this).removeClass(C.options.hoverClass)}})})(jQuery);
/*
 * jQuery UI Resizable 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	ui.core.js
 */(function(B){B.widget("ui.resizable",B.extend({},B.ui.mouse,{_init:function(){var N=this,O=this.options;var R=this.element.css("position");this.originalElement=this.element;this.element.addClass("ui-resizable").css({position:/static/.test(R)?"relative":R});B.extend(O,{_aspectRatio:!!(O.aspectRatio),helper:O.helper||O.ghost||O.animate?O.helper||"ui-resizable-helper":null,knobHandles:O.knobHandles===true?"ui-resizable-knob-handle":O.knobHandles});var I="1px solid #DEDEDE";O.defaultTheme={"ui-resizable":{display:"block"},"ui-resizable-handle":{position:"absolute",background:"#F2F2F2",fontSize:"0.1px"},"ui-resizable-n":{cursor:"n-resize",height:"4px",left:"0px",right:"0px",borderTop:I},"ui-resizable-s":{cursor:"s-resize",height:"4px",left:"0px",right:"0px",borderBottom:I},"ui-resizable-e":{cursor:"e-resize",width:"4px",top:"0px",bottom:"0px",borderRight:I},"ui-resizable-w":{cursor:"w-resize",width:"4px",top:"0px",bottom:"0px",borderLeft:I},"ui-resizable-se":{cursor:"se-resize",width:"4px",height:"4px",borderRight:I,borderBottom:I},"ui-resizable-sw":{cursor:"sw-resize",width:"4px",height:"4px",borderBottom:I,borderLeft:I},"ui-resizable-ne":{cursor:"ne-resize",width:"4px",height:"4px",borderRight:I,borderTop:I},"ui-resizable-nw":{cursor:"nw-resize",width:"4px",height:"4px",borderLeft:I,borderTop:I}};O.knobTheme={"ui-resizable-handle":{background:"#F2F2F2",border:"1px solid #808080",height:"8px",width:"8px"},"ui-resizable-n":{cursor:"n-resize",top:"0px",left:"45%"},"ui-resizable-s":{cursor:"s-resize",bottom:"0px",left:"45%"},"ui-resizable-e":{cursor:"e-resize",right:"0px",top:"45%"},"ui-resizable-w":{cursor:"w-resize",left:"0px",top:"45%"},"ui-resizable-se":{cursor:"se-resize",right:"0px",bottom:"0px"},"ui-resizable-sw":{cursor:"sw-resize",left:"0px",bottom:"0px"},"ui-resizable-nw":{cursor:"nw-resize",left:"0px",top:"0px"},"ui-resizable-ne":{cursor:"ne-resize",right:"0px",top:"0px"}};O._nodeName=this.element[0].nodeName;if(O._nodeName.match(/canvas|textarea|input|select|button|img/i)){var C=this.element;if(/relative/.test(C.css("position"))&&B.browser.opera){C.css({position:"relative",top:"auto",left:"auto"})}C.wrap(B('<div class="ui-wrapper"	style="overflow: hidden;"></div>').css({position:C.css("position"),width:C.outerWidth(),height:C.outerHeight(),top:C.css("top"),left:C.css("left")}));var K=this.element;this.element=this.element.parent();this.element.data("resizable",this);this.element.css({marginLeft:K.css("marginLeft"),marginTop:K.css("marginTop"),marginRight:K.css("marginRight"),marginBottom:K.css("marginBottom")});K.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});if(B.browser.safari&&O.preventDefault){K.css("resize","none")}O.proportionallyResize=K.css({position:"static",zoom:1,display:"block"});this.element.css({margin:K.css("margin")});this._proportionallyResize()}if(!O.handles){O.handles=!B(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}}if(O.handles.constructor==String){O.zIndex=O.zIndex||1000;if(O.handles=="all"){O.handles="n,e,s,w,se,sw,ne,nw"}var P=O.handles.split(",");O.handles={};var H={handle:"position: absolute; display: none; overflow:hidden;",n:"top: 0pt; width:100%;",e:"right: 0pt; height:100%;",s:"bottom: 0pt; width:100%;",w:"left: 0pt; height:100%;",se:"bottom: 0pt; right: 0px;",sw:"bottom: 0pt; left: 0px;",ne:"top: 0pt; right: 0px;",nw:"top: 0pt; left: 0px;"};for(var S=0;S<P.length;S++){var T=B.trim(P[S]),M=O.defaultTheme,G="ui-resizable-"+T,D=!B.ui.css(G)&&!O.knobHandles,Q=B.ui.css("ui-resizable-knob-handle"),U=B.extend(M[G],M["ui-resizable-handle"]),E=B.extend(O.knobTheme[G],!Q?O.knobTheme["ui-resizable-handle"]:{});var L=/sw|se|ne|nw/.test(T)?{zIndex:++O.zIndex}:{};var J=(D?H[T]:""),F=B(['<div class="ui-resizable-handle ',G,'" style="',J,H.handle,'"></div>'].join("")).css(L);O.handles[T]=".ui-resizable-"+T;this.element.append(F.css(D?U:{}).css(O.knobHandles?E:{}).addClass(O.knobHandles?"ui-resizable-knob-handle":"").addClass(O.knobHandles))}if(O.knobHandles){this.element.addClass("ui-resizable-knob").css(!B.ui.css("ui-resizable-knob")?{}:{})}}this._renderAxis=function(Z){Z=Z||this.element;for(var W in O.handles){if(O.handles[W].constructor==String){O.handles[W]=B(O.handles[W],this.element).show()}if(O.transparent){O.handles[W].css({opacity:0})}if(this.element.is(".ui-wrapper")&&O._nodeName.match(/textarea|input|select|button/i)){var X=B(O.handles[W],this.element),Y=0;Y=/sw|ne|nw|se|n|s/.test(W)?X.outerHeight():X.outerWidth();var V=["padding",/ne|nw|n/.test(W)?"Top":/se|sw|s/.test(W)?"Bottom":/^e$/.test(W)?"Right":"Left"].join("");if(!O.transparent){Z.css(V,Y)}this._proportionallyResize()}if(!B(O.handles[W]).length){continue}}};this._renderAxis(this.element);O._handles=B(".ui-resizable-handle",N.element);if(O.disableSelection){O._handles.disableSelection()}O._handles.mouseover(function(){if(!O.resizing){if(this.className){var V=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}N.axis=O.axis=V&&V[1]?V[1]:"se"}});if(O.autoHide){O._handles.hide();B(N.element).addClass("ui-resizable-autohide").hover(function(){B(this).removeClass("ui-resizable-autohide");O._handles.show()},function(){if(!O.resizing){B(this).addClass("ui-resizable-autohide");O._handles.hide()}})}this._mouseInit()},destroy:function(){var E=this.element,D=E.children(".ui-resizable").get(0);this._mouseDestroy();var C=function(F){B(F).removeClass("ui-resizable ui-resizable-disabled").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};C(E);if(E.is(".ui-wrapper")&&D){E.parent().append(B(D).css({position:E.css("position"),width:E.outerWidth(),height:E.outerHeight(),top:E.css("top"),left:E.css("left")})).end().remove();C(D)}},_mouseCapture:function(D){if(this.options.disabled){return false}var E=false;for(var C in this.options.handles){if(B(this.options.handles[C])[0]==D.target){E=true}}if(!E){return false}return true},_mouseStart:function(D){var E=this.options,C=this.element.position(),F=this.element,I=B.browser.msie&&B.browser.version<7;E.resizing=true;E.documentScroll={top:B(document).scrollTop(),left:B(document).scrollLeft()};if(F.is(".ui-draggable")||(/absolute/).test(F.css("position"))){var K=B.browser.msie&&!E.containment&&(/absolute/).test(F.css("position"))&&!(/relative/).test(F.parent().css("position"));var L=K?this.documentScroll.top:0,H=K?this.documentScroll.left:0;F.css({position:"absolute",top:(C.top+L),left:(C.left+H)})}if(B.browser.opera&&(/relative/).test(F.css("position"))){F.css({position:"relative",top:"auto",left:"auto"})}this._renderProxy();var M=A(this.helper.css("left")),G=A(this.helper.css("top"));if(E.containment){M+=B(E.containment).scrollLeft()||0;G+=B(E.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:M,top:G};this.size=E.helper||I?{width:F.outerWidth(),height:F.outerHeight()}:{width:F.width(),height:F.height()};this.originalSize=E.helper||I?{width:F.outerWidth(),height:F.outerHeight()}:{width:F.width(),height:F.height()};this.originalPosition={left:M,top:G};this.sizeDiff={width:F.outerWidth()-F.width(),height:F.outerHeight()-F.height()};this.originalMousePosition={left:D.pageX,top:D.pageY};E.aspectRatio=(typeof E.aspectRatio=="number")?E.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);if(E.preserveCursor){var J=B(".ui-resizable-"+this.axis).css("cursor");B("body").css("cursor",J=="auto"?this.axis+"-resize":J)}this._propagate("start",D);return true},_mouseDrag:function(C){var F=this.helper,E=this.options,K={},N=this,H=this.originalMousePosition,L=this.axis;var O=(C.pageX-H.left)||0,M=(C.pageY-H.top)||0;var G=this._change[L];if(!G){return false}var J=G.apply(this,[C,O,M]),I=B.browser.msie&&B.browser.version<7,D=this.sizeDiff;if(E._aspectRatio||C.shiftKey){J=this._updateRatio(J,C)}J=this._respectSize(J,C);this._propagate("resize",C);F.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!E.helper&&E.proportionallyResize){this._proportionallyResize()}this._updateCache(J);this.element.triggerHandler("resize",[C,this.ui()],this.options["resize"]);return false},_mouseStop:function(F){this.options.resizing=false;var G=this.options,K=this;if(G.helper){var E=G.proportionallyResize,C=E&&(/textarea/i).test(E.get(0).nodeName),D=C&&B.ui.hasScroll(E.get(0),"left")?0:K.sizeDiff.height,I=C?0:K.sizeDiff.width;var L={width:(K.size.width-I),height:(K.size.height-D)},H=(parseInt(K.element.css("left"),10)+(K.position.left-K.originalPosition.left))||null,J=(parseInt(K.element.css("top"),10)+(K.position.top-K.originalPosition.top))||null;if(!G.animate){this.element.css(B.extend(L,{top:J,left:H}))}if(G.helper&&!G.animate){this._proportionallyResize()}}if(G.preserveCursor){B("body").css("cursor","auto")}this._propagate("stop",F);if(G.helper){this.helper.remove()}return false},_updateCache:function(C){var D=this.options;this.offset=this.helper.offset();if(C.left){this.position.left=C.left}if(C.top){this.position.top=C.top}if(C.height){this.size.height=C.height}if(C.width){this.size.width=C.width}},_updateRatio:function(F,E){var G=this.options,H=this.position,D=this.size,C=this.axis;if(F.height){F.width=(D.height*G.aspectRatio)}else{if(F.width){F.height=(D.width/G.aspectRatio)}}if(C=="sw"){F.left=H.left+(D.width-F.width);F.top=null}if(C=="nw"){F.top=H.top+(D.height-F.height);F.left=H.left+(D.width-F.width)}return F},_respectSize:function(J,E){var H=this.helper,G=this.options,O=G._aspectRatio||E.shiftKey,N=this.axis,Q=J.width&&G.maxWidth&&G.maxWidth<J.width,K=J.height&&G.maxHeight&&G.maxHeight<J.height,F=J.width&&G.minWidth&&G.minWidth>J.width,P=J.height&&G.minHeight&&G.minHeight>J.height;if(F){J.width=G.minWidth}if(P){J.height=G.minHeight}if(Q){J.width=G.maxWidth}if(K){J.height=G.maxHeight}var D=this.originalPosition.left+this.originalSize.width,M=this.position.top+this.size.height;var I=/sw|nw|w/.test(N),C=/nw|ne|n/.test(N);if(F&&I){J.left=D-G.minWidth}if(Q&&I){J.left=D-G.maxWidth}if(P&&C){J.top=M-G.minHeight}if(K&&C){J.top=M-G.maxHeight}var L=!J.width&&!J.height;if(L&&!J.left&&J.top){J.top=null}else{if(L&&!J.top&&J.left){J.left=null}}return J},_proportionallyResize:function(){var G=this.options;if(!G.proportionallyResize){return }var E=G.proportionallyResize,D=this.helper||this.element;if(!G.borderDif){var C=[E.css("borderTopWidth"),E.css("borderRightWidth"),E.css("borderBottomWidth"),E.css("borderLeftWidth")],F=[E.css("paddingTop"),E.css("paddingRight"),E.css("paddingBottom"),E.css("paddingLeft")];G.borderDif=B.map(C,function(H,J){var I=parseInt(H,10)||0,K=parseInt(F[J],10)||0;return I+K})}E.css({height:(D.height()-G.borderDif[0]-G.borderDif[2])+"px",width:(D.width()-G.borderDif[1]-G.borderDif[3])+"px"})},_renderProxy:function(){var D=this.element,G=this.options;this.elementOffset=D.offset();if(G.helper){this.helper=this.helper||B('<div style="overflow:hidden;"></div>');var C=B.browser.msie&&B.browser.version<7,E=(C?1:0),F=(C?2:-1);this.helper.addClass(G.helper).css({width:D.outerWidth()+F,height:D.outerHeight()+F,position:"absolute",left:this.elementOffset.left-E+"px",top:this.elementOffset.top-E+"px",zIndex:++G.zIndex});this.helper.appendTo("body");if(G.disableSelection){this.helper.disableSelection()}}else{this.helper=D}},_change:{e:function(E,D,C){return{width:this.originalSize.width+D}},w:function(F,D,C){var H=this.options,E=this.originalSize,G=this.originalPosition;return{left:G.left+D,width:E.width-D}},n:function(F,D,C){var H=this.options,E=this.originalSize,G=this.originalPosition;return{top:G.top+C,height:E.height-C}},s:function(E,D,C){return{height:this.originalSize.height+C}},se:function(E,D,C){return B.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[E,D,C]))},sw:function(E,D,C){return B.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[E,D,C]))},ne:function(E,D,C){return B.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[E,D,C]))},nw:function(E,D,C){return B.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[E,D,C]))}},_propagate:function(D,C){B.ui.plugin.call(this,D,[C,this.ui()]);if(D!="resize"){this.element.triggerHandler(["resize",D].join(""),[C,this.ui()],this.options[D])}},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,options:this.options,originalSize:this.originalSize,originalPosition:this.originalPosition}}}));B.extend(B.ui.resizable,{version:"1.6",defaults:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,cancel:":input",containment:false,disableSelection:true,distance:1,delay:0,ghost:false,grid:false,knobHandles:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,preserveCursor:true,preventDefault:true,proportionallyResize:false,transparent:false}});B.ui.plugin.add("resizable","alsoResize",{start:function(D,E){var G=E.options,C=B(this).data("resizable"),F=function(H){B(H).each(function(){B(this).data("resizable-alsoresize",{width:parseInt(B(this).width(),10),height:parseInt(B(this).height(),10),left:parseInt(B(this).css("left"),10),top:parseInt(B(this).css("top"),10)})})};if(typeof (G.alsoResize)=="object"&&!G.alsoResize.parentNode){if(G.alsoResize.length){G.alsoResize=G.alsoResize[0];F(G.alsoResize)}else{B.each(G.alsoResize,function(H,I){F(H)})}}else{F(G.alsoResize)}},resize:function(E,G){var H=G.options,D=B(this).data("resizable"),F=D.originalSize,J=D.originalPosition;var I={height:(D.size.height-F.height)||0,width:(D.size.width-F.width)||0,top:(D.position.top-J.top)||0,left:(D.position.left-J.left)||0},C=function(K,L){B(K).each(function(){var O=B(this).data("resizable-alsoresize"),N={},M=L&&L.length?L:["width","height","top","left"];B.each(M||["width","height","top","left"],function(P,R){var Q=(O[R]||0)+(I[R]||0);if(Q&&Q>=0){N[R]=Q||null}});B(this).css(N)})};if(typeof (H.alsoResize)=="object"&&!H.alsoResize.parentNode){B.each(H.alsoResize,function(K,L){C(K,L)})}else{C(H.alsoResize)}},stop:function(C,D){B(this).removeData("resizable-alsoresize-start")}});B.ui.plugin.add("resizable","animate",{stop:function(G,L){var H=L.options,M=B(this).data("resizable");var F=H.proportionallyResize,C=F&&(/textarea/i).test(F.get(0).nodeName),D=C&&B.ui.hasScroll(F.get(0),"left")?0:M.sizeDiff.height,J=C?0:M.sizeDiff.width;var E={width:(M.size.width-J),height:(M.size.height-D)},I=(parseInt(M.element.css("left"),10)+(M.position.left-M.originalPosition.left))||null,K=(parseInt(M.element.css("top"),10)+(M.position.top-M.originalPosition.top))||null;M.element.animate(B.extend(E,K&&I?{top:K,left:I}:{}),{duration:H.animateDuration,easing:H.animateEasing,step:function(){var N={width:parseInt(M.element.css("width"),10),height:parseInt(M.element.css("height"),10),top:parseInt(M.element.css("top"),10),left:parseInt(M.element.css("left"),10)};if(F){F.css({width:N.width,height:N.height})}M._updateCache(N);M._propagate("animate",G)}})}});B.ui.plugin.add("resizable","containment",{start:function(D,N){var H=N.options,P=B(this).data("resizable"),J=P.element;var E=H.containment,I=(E instanceof B)?E.get(0):(/parent/.test(E))?J.parent().get(0):E;if(!I){return }P.containerElement=B(I);if(/document/.test(E)||E==document){P.containerOffset={left:0,top:0};P.containerPosition={left:0,top:0};P.parentData={element:B(document),left:0,top:0,width:B(document).width(),height:B(document).height()||document.body.parentNode.scrollHeight}}else{var L=B(I),G=[];B(["Top","Right","Left","Bottom"]).each(function(R,Q){G[R]=A(L.css("padding"+Q))});P.containerOffset=L.offset();P.containerPosition=L.position();P.containerSize={height:(L.innerHeight()-G[3]),width:(L.innerWidth()-G[1])};var M=P.containerOffset,C=P.containerSize.height,K=P.containerSize.width,F=(B.ui.hasScroll(I,"left")?I.scrollWidth:K),O=(B.ui.hasScroll(I)?I.scrollHeight:C);P.parentData={element:I,left:M.left,top:M.top,width:F,height:O}}},resize:function(E,N){var G=N.options,Q=B(this).data("resizable"),D=Q.containerSize,M=Q.containerOffset,K=Q.size,L=Q.position,O=G._aspectRatio||E.shiftKey,C={top:0,left:0},F=Q.containerElement;if(F[0]!=document&&(/static/).test(F.css("position"))){C=M}if(L.left<(G.helper?M.left:0)){Q.size.width=Q.size.width+(G.helper?(Q.position.left-M.left):(Q.position.left-C.left));if(O){Q.size.height=Q.size.width/G.aspectRatio}Q.position.left=G.helper?M.left:0}if(L.top<(G.helper?M.top:0)){Q.size.height=Q.size.height+(G.helper?(Q.position.top-M.top):Q.position.top);if(O){Q.size.width=Q.size.height*G.aspectRatio}Q.position.top=G.helper?M.top:0}Q.offset.left=Q.parentData.left+Q.position.left;Q.offset.top=Q.parentData.top+Q.position.top;var J=Math.abs((G.helper?Q.offset.left-C.left:(Q.offset.left-C.left))+Q.sizeDiff.width),P=Math.abs((G.helper?Q.offset.top-C.top:(Q.offset.top-M.top))+Q.sizeDiff.height);var I=Q.containerElement.get(0)==Q.element.parent().get(0),H=/relative|absolute/.test(Q.containerElement.css("position"));if(I&&H){J-=Q.parentData.left}if(J+Q.size.width>=Q.parentData.width){Q.size.width=Q.parentData.width-J;if(O){Q.size.height=Q.size.width/G.aspectRatio}}if(P+Q.size.height>=Q.parentData.height){Q.size.height=Q.parentData.height-P;if(O){Q.size.width=Q.size.height*G.aspectRatio}}},stop:function(D,K){var E=K.options,M=B(this).data("resizable"),I=M.position,J=M.containerOffset,C=M.containerPosition,F=M.containerElement;var G=B(M.helper),N=G.offset(),L=G.outerWidth()-M.sizeDiff.width,H=G.outerHeight()-M.sizeDiff.height;if(E.helper&&!E.animate&&(/relative/).test(F.css("position"))){B(this).css({left:N.left-C.left-J.left,width:L,height:H})}if(E.helper&&!E.animate&&(/static/).test(F.css("position"))){B(this).css({left:N.left-C.left-J.left,width:L,height:H})}}});B.ui.plugin.add("resizable","ghost",{start:function(E,F){var G=F.options,C=B(this).data("resizable"),H=G.proportionallyResize,D=C.size;if(!H){C.ghost=C.element.clone()}else{C.ghost=H.clone()}C.ghost.css({opacity:0.25,display:"block",position:"relative",height:D.height,width:D.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof G.ghost=="string"?G.ghost:"");C.ghost.appendTo(C.helper)},resize:function(D,E){var F=E.options,C=B(this).data("resizable"),G=F.proportionallyResize;if(C.ghost){C.ghost.css({position:"relative",height:C.size.height,width:C.size.width})}},stop:function(D,E){var F=E.options,C=B(this).data("resizable"),G=F.proportionallyResize;if(C.ghost&&C.helper){C.helper.get(0).removeChild(C.ghost.get(0))}}});B.ui.plugin.add("resizable","grid",{resize:function(C,K){var F=K.options,M=B(this).data("resizable"),I=M.size,G=M.originalSize,H=M.originalPosition,L=M.axis,J=F._aspectRatio||C.shiftKey;F.grid=typeof F.grid=="number"?[F.grid,F.grid]:F.grid;var E=Math.round((I.width-G.width)/(F.grid[0]||1))*(F.grid[0]||1),D=Math.round((I.height-G.height)/(F.grid[1]||1))*(F.grid[1]||1);if(/^(se|s|e)$/.test(L)){M.size.width=G.width+E;M.size.height=G.height+D}else{if(/^(ne)$/.test(L)){M.size.width=G.width+E;M.size.height=G.height+D;M.position.top=H.top-D}else{if(/^(sw)$/.test(L)){M.size.width=G.width+E;M.size.height=G.height+D;M.position.left=H.left-E}else{M.size.width=G.width+E;M.size.height=G.height+D;M.position.top=H.top-D;M.position.left=H.left-E}}}}});var A=function(C){return parseInt(C,10)||0}})(jQuery);
/*
 * jQuery UI Effects 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */(function(C){C.effects=C.effects||{};C.extend(C.effects,{version:"1.6",save:function(F,G){for(var E=0;E<G.length;E++){if(G[E]!==null){C.data(F[0],"ec.storage."+G[E],F[0].style[G[E]])}}},restore:function(F,G){for(var E=0;E<G.length;E++){if(G[E]!==null){F.css(G[E],C.data(F[0],"ec.storage."+G[E]))}}},setMode:function(E,F){if(F=="toggle"){F=E.is(":hidden")?"show":"hide"}return F},getBaseline:function(F,G){var H,E;switch(F[0]){case"top":H=0;break;case"middle":H=0.5;break;case"bottom":H=1;break;default:H=F[0]/G.height}switch(F[1]){case"left":E=0;break;case"center":E=0.5;break;case"right":E=1;break;default:E=F[1]/G.width}return{x:E,y:H}},createWrapper:function(F){if(F.parent().attr("id")=="fxWrapper"){return F}var E={width:F.outerWidth({margin:true}),height:F.outerHeight({margin:true}),"float":F.css("float")};F.wrap('<div id="fxWrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');var I=F.parent();if(F.css("position")=="static"){I.css({position:"relative"});F.css({position:"relative"})}else{var H=F.css("top");if(isNaN(parseInt(H))){H="auto"}var G=F.css("left");if(isNaN(parseInt(G))){G="auto"}I.css({position:F.css("position"),top:H,left:G,zIndex:F.css("z-index")}).show();F.css({position:"relative",top:0,left:0})}I.css(E);return I},removeWrapper:function(E){if(E.parent().attr("id")=="fxWrapper"){return E.parent().replaceWith(E)}return E},setTransition:function(F,G,E,H){H=H||{};C.each(G,function(J,I){unit=F.cssUnit(I);if(unit[0]>0){H[I]=unit[0]*E+unit[1]}});return H},animateClass:function(G,H,J,I){var E=(typeof J=="function"?J:(I?I:null));var F=(typeof J=="object"?J:null);return this.each(function(){var O={};var M=C(this);var N=M.attr("style")||"";if(typeof N=="object"){N=N["cssText"]}if(G.toggle){M.hasClass(G.toggle)?G.remove=G.toggle:G.add=G.toggle}var K=C.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(G.add){M.addClass(G.add)}if(G.remove){M.removeClass(G.remove)}var L=C.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(G.add){M.removeClass(G.add)}if(G.remove){M.addClass(G.remove)}for(var P in L){if(typeof L[P]!="function"&&L[P]&&P.indexOf("Moz")==-1&&P.indexOf("length")==-1&&L[P]!=K[P]&&(P.match(/color/i)||(!P.match(/color/i)&&!isNaN(parseInt(L[P],10))))&&(K.position!="static"||(K.position=="static"&&!P.match(/left|top|bottom|right/)))){O[P]=L[P]}}M.animate(O,H,F,function(){if(typeof C(this).attr("style")=="object"){C(this).attr("style")["cssText"]="";C(this).attr("style")["cssText"]=N}else{C(this).attr("style",N)}if(G.add){C(this).addClass(G.add)}if(G.remove){C(this).removeClass(G.remove)}if(E){E.apply(this,arguments)}})})}});C.fn.extend({_show:C.fn.show,_hide:C.fn.hide,__toggle:C.fn.toggle,_addClass:C.fn.addClass,_removeClass:C.fn.removeClass,_toggleClass:C.fn.toggleClass,effect:function(E,G,F,H){return C.effects[E]?C.effects[E].call(this,{method:E,options:G||{},duration:F,callback:H}):null},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||/(slow|normal|fast)/.test(arguments[0]))){return this._show.apply(this,arguments)}else{var E=arguments[1]||{};E["mode"]="show";return this.effect.apply(this,[arguments[0],E,arguments[2]||E.duration,arguments[3]||E.callback])}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||/(slow|normal|fast)/.test(arguments[0]))){return this._hide.apply(this,arguments)}else{var E=arguments[1]||{};E["mode"]="hide";return this.effect.apply(this,[arguments[0],E,arguments[2]||E.duration,arguments[3]||E.callback])}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||/(slow|normal|fast)/.test(arguments[0]))||(arguments[0].constructor==Function)){return this.__toggle.apply(this,arguments)}else{var E=arguments[1]||{};E["mode"]="toggle";return this.effect.apply(this,[arguments[0],E,arguments[2]||E.duration,arguments[3]||E.callback])}},addClass:function(F,E,H,G){return E?C.effects.animateClass.apply(this,[{add:F},E,H,G]):this._addClass(F)},removeClass:function(F,E,H,G){return E?C.effects.animateClass.apply(this,[{remove:F},E,H,G]):this._removeClass(F)},toggleClass:function(F,E,H,G){return E?C.effects.animateClass.apply(this,[{toggle:F},E,H,G]):this._toggleClass(F)},morph:function(E,G,F,I,H){return C.effects.animateClass.apply(this,[{add:G,remove:E},F,I,H])},switchClass:function(){return this.morph.apply(this,arguments)},cssUnit:function(E){var F=this.css(E),G=[];C.each(["em","px","%","pt"],function(H,I){if(F.indexOf(I)>0){G=[parseFloat(F),I]}});return G}});C.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(F,E){C.fx.step[E]=function(G){if(G.state==0){G.start=D(G.elem,E);G.end=B(G.end)}G.elem.style[E]="rgb("+[Math.max(Math.min(parseInt((G.pos*(G.end[0]-G.start[0]))+G.start[0]),255),0),Math.max(Math.min(parseInt((G.pos*(G.end[1]-G.start[1]))+G.start[1]),255),0),Math.max(Math.min(parseInt((G.pos*(G.end[2]-G.start[2]))+G.start[2]),255),0)].join(",")+")"}});function B(F){var E;if(F&&F.constructor==Array&&F.length==3){return F}if(E=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(F)){return[parseInt(E[1]),parseInt(E[2]),parseInt(E[3])]}if(E=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(F)){return[parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55]}if(E=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(F)){return[parseInt(E[1],16),parseInt(E[2],16),parseInt(E[3],16)]}if(E=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(F)){return[parseInt(E[1]+E[1],16),parseInt(E[2]+E[2],16),parseInt(E[3]+E[3],16)]}if(E=/rgba\(0, 0, 0, 0\)/.exec(F)){return A["transparent"]}return A[C.trim(F).toLowerCase()]}function D(G,E){var F;do{F=C.curCSS(G,E);if(F!=""&&F!="transparent"||C.nodeName(G,"body")){break}E="backgroundColor"}while(G=G.parentNode);return B(F)}var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};C.easing.jswing=C.easing.swing;C.extend(C.easing,{def:"easeOutQuad",swing:function(F,G,E,I,H){return C.easing[C.easing.def](F,G,E,I,H)},easeInQuad:function(F,G,E,I,H){return I*(G/=H)*G+E},easeOutQuad:function(F,G,E,I,H){return -I*(G/=H)*(G-2)+E},easeInOutQuad:function(F,G,E,I,H){if((G/=H/2)<1){return I/2*G*G+E}return -I/2*((--G)*(G-2)-1)+E},easeInCubic:function(F,G,E,I,H){return I*(G/=H)*G*G+E},easeOutCubic:function(F,G,E,I,H){return I*((G=G/H-1)*G*G+1)+E},easeInOutCubic:function(F,G,E,I,H){if((G/=H/2)<1){return I/2*G*G*G+E}return I/2*((G-=2)*G*G+2)+E},easeInQuart:function(F,G,E,I,H){return I*(G/=H)*G*G*G+E},easeOutQuart:function(F,G,E,I,H){return -I*((G=G/H-1)*G*G*G-1)+E},easeInOutQuart:function(F,G,E,I,H){if((G/=H/2)<1){return I/2*G*G*G*G+E}return -I/2*((G-=2)*G*G*G-2)+E},easeInQuint:function(F,G,E,I,H){return I*(G/=H)*G*G*G*G+E},easeOutQuint:function(F,G,E,I,H){return I*((G=G/H-1)*G*G*G*G+1)+E},easeInOutQuint:function(F,G,E,I,H){if((G/=H/2)<1){return I/2*G*G*G*G*G+E}return I/2*((G-=2)*G*G*G*G+2)+E},easeInSine:function(F,G,E,I,H){return -I*Math.cos(G/H*(Math.PI/2))+I+E},easeOutSine:function(F,G,E,I,H){return I*Math.sin(G/H*(Math.PI/2))+E},easeInOutSine:function(F,G,E,I,H){return -I/2*(Math.cos(Math.PI*G/H)-1)+E},easeInExpo:function(F,G,E,I,H){return(G==0)?E:I*Math.pow(2,10*(G/H-1))+E},easeOutExpo:function(F,G,E,I,H){return(G==H)?E+I:I*(-Math.pow(2,-10*G/H)+1)+E},easeInOutExpo:function(F,G,E,I,H){if(G==0){return E}if(G==H){return E+I}if((G/=H/2)<1){return I/2*Math.pow(2,10*(G-1))+E}return I/2*(-Math.pow(2,-10*--G)+2)+E},easeInCirc:function(F,G,E,I,H){return -I*(Math.sqrt(1-(G/=H)*G)-1)+E},easeOutCirc:function(F,G,E,I,H){return I*Math.sqrt(1-(G=G/H-1)*G)+E},easeInOutCirc:function(F,G,E,I,H){if((G/=H/2)<1){return -I/2*(Math.sqrt(1-G*G)-1)+E}return I/2*(Math.sqrt(1-(G-=2)*G)+1)+E},easeInElastic:function(F,H,E,L,K){var I=1.70158;var J=0;var G=L;if(H==0){return E}if((H/=K)==1){return E+L}if(!J){J=K*0.3}if(G<Math.abs(L)){G=L;var I=J/4}else{var I=J/(2*Math.PI)*Math.asin(L/G)}return -(G*Math.pow(2,10*(H-=1))*Math.sin((H*K-I)*(2*Math.PI)/J))+E},easeOutElastic:function(F,H,E,L,K){var I=1.70158;var J=0;var G=L;if(H==0){return E}if((H/=K)==1){return E+L}if(!J){J=K*0.3}if(G<Math.abs(L)){G=L;var I=J/4}else{var I=J/(2*Math.PI)*Math.asin(L/G)}return G*Math.pow(2,-10*H)*Math.sin((H*K-I)*(2*Math.PI)/J)+L+E},easeInOutElastic:function(F,H,E,L,K){var I=1.70158;var J=0;var G=L;if(H==0){return E}if((H/=K/2)==2){return E+L}if(!J){J=K*(0.3*1.5)}if(G<Math.abs(L)){G=L;var I=J/4}else{var I=J/(2*Math.PI)*Math.asin(L/G)}if(H<1){return -0.5*(G*Math.pow(2,10*(H-=1))*Math.sin((H*K-I)*(2*Math.PI)/J))+E}return G*Math.pow(2,-10*(H-=1))*Math.sin((H*K-I)*(2*Math.PI)/J)*0.5+L+E},easeInBack:function(F,G,E,J,I,H){if(H==undefined){H=1.70158}return J*(G/=I)*G*((H+1)*G-H)+E},easeOutBack:function(F,G,E,J,I,H){if(H==undefined){H=1.70158}return J*((G=G/I-1)*G*((H+1)*G+H)+1)+E},easeInOutBack:function(F,G,E,J,I,H){if(H==undefined){H=1.70158}if((G/=I/2)<1){return J/2*(G*G*(((H*=(1.525))+1)*G-H))+E}return J/2*((G-=2)*G*(((H*=(1.525))+1)*G+H)+2)+E},easeInBounce:function(F,G,E,I,H){return I-C.easing.easeOutBounce(F,H-G,0,I,H)+E},easeOutBounce:function(F,G,E,I,H){if((G/=H)<(1/2.75)){return I*(7.5625*G*G)+E}else{if(G<(2/2.75)){return I*(7.5625*(G-=(1.5/2.75))*G+0.75)+E}else{if(G<(2.5/2.75)){return I*(7.5625*(G-=(2.25/2.75))*G+0.9375)+E}else{return I*(7.5625*(G-=(2.625/2.75))*G+0.984375)+E}}}},easeInOutBounce:function(F,G,E,I,H){if(G<H/2){return C.easing.easeInBounce(F,G*2,0,I,H)*0.5+E}return C.easing.easeOutBounce(F,G*2-H,0,I,H)*0.5+I*0.5+E}})})(jQuery);
/*
 * jQuery UI Effects Highlight 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	effects.core.js
 */(function(A){A.effects.highlight=function(B){return this.queue(function(){var E=A(this),D=["backgroundImage","backgroundColor","opacity"];var H=A.effects.setMode(E,B.options.mode||"show");var C=B.options.color||"#ffff99";var G=E.css("backgroundColor");A.effects.save(E,D);E.show();E.css({backgroundImage:"none",backgroundColor:C});var F={backgroundColor:G};if(H=="hide"){F["opacity"]=0}E.animate(F,{queue:false,duration:B.duration,easing:B.options.easing,complete:function(){if(H=="hide"){E.hide()}A.effects.restore(E,D);if(H=="show"&&A.browser.msie){this.style.removeAttribute("filter")}if(B.callback){B.callback.apply(this,arguments)}E.dequeue()}})})}})(jQuery);
function merciHandleTaxonomyPost( json )
{

	var response = eval( '(' + json + ')' )
	
	if ( response.error )
	{
	
	} // if
	else
	{
	
		merciSendingTaxonomy[ response.node ] = false
	
		$.get( '/merci/taxonomy/' + response.node , {} , merciHandleTaxonomyJSON )
	
	} // else	

} // merciHandleTaxonomyPost

function merciHandleTaxonomyJSON( json )
{

	var response = eval( '(' + json + ')' )
	var edit = $( '#merci-id-' + response.node ).find( 'a' )

	edit.parent().find( '.complete' ).remove()

	if ( response.error )
	{

	} // if
	else
	{

		edit.data( 'info' , response )

		var done = false

		for ( var vocabularyId in response.vocabularies )
		{

			var vocabulary = response.vocabularies[ vocabularyId ]

			if ( vocabulary.selected.length > 0 ) done = true

		} // for

		if ( done )
		{

			var checkMark = $( '<span class="complete"> &#10003;</span>' )

			if ( response.admin ) checkMark.addClass( 'admin' )

			checkMark.insertAfter( edit )

		} // if
		else
		{

		} // else

		edit.click(

			function()
			{

				var $this = $( this )
				var offset = $this.offset()
				var info = $this.data( 'info' )

				$( '#merci-taxonomy-edit' ).remove()

				var div = $( '<div id="merci-taxonomy-edit"></div>' )
					.css(
						{
							'background' : '#fff' ,
							'border' : '1px #999 solid' ,
							'padding' : '1em' ,
							'position' : 'absolute' ,
							'top' : offset.top + 20 ,
							'left' : offset.left
						}
					)
					.click( function(){ return false } )

				for ( var vocabularyId in info.vocabularies )
				{

					var vocabulary = info.vocabularies[ vocabularyId ]
					var select = $( vocabulary.select )

					for ( var selectedId in vocabulary.selected )
					{

						var termId = vocabulary.selected[ selectedId ]

						select.find( 'option[value=' + termId + ']' ).attr( 'selected' , true )

					} // for

					div.append( select )

				} // for

				$( '<input type="button" value="Save" />' )
					.click( merciSaveTaxonomy )
					.appendTo( div )

				div
					.appendTo( 'body' )
					.data( 'node' , info.node )

				return false

			} // function

		) // $.click

	} // else

} // merciHandleTaxonomyJSON

function merciSaveTaxonomy()
{

	var parameters = {}
	var selectionId = 0
	var nodeId = $( '#merci-taxonomy-edit' ).data( 'node' )
	
	if ( ! merciSendingTaxonomy[ nodeId ] )
	{
	
		merciSendingTaxonomy[ nodeId ] = true
	
		$( '#merci-taxonomy-edit select option:selected' ).each(
	
			function()
			{
	
				var $this = $( this )
				var select = $this.parent( 'select' )
				var name = select.attr( 'name' )
	
				parameters[ name.slice( 0 , name.length - 1 ) + selectionId + ']' ] = $this.attr( 'value' )
	
				selectionId++
	
			} // function
	
		) // $.each
	
		$.post( '/merci/taxonomy/' + nodeId , parameters , merciHandleTaxonomyPost )

	} // if

	$( '#merci-taxonomy-edit' ).remove()
	

} // merciSaveTaxonomy

$( document ).ready(

	function()
	{

		$( 'body' ).click(

			function()
			{

				$( '#merci-taxonomy-edit' ).remove()

			} // function

		) // $.click

		$( 'span.edit-details' ).each(

			function()
			{

				var $this = $( this )
				var nodeId = $this.attr( 'id' ).split( '-' )[2]

				$.get( '/merci/taxonomy/' + nodeId , {} , merciHandleTaxonomyJSON )

			} // function

		) // $.each

	} // function

) // $.ready

var merciSendingTaxonomy = [];
// $Id: og.js,v 1.9.2.3 2010/01/24 14:44:56 amitaibu Exp $

// Content type form
Drupal.behaviors.og_content_type = function() {
  // Disable the group limit textarea if the content type is not a standard group post
  $('input[name="og_content_type_usage"]').click(function(){
    if (!$('#edit-og-content-type-usage-group-post-standard').attr('checked')) {
      $('#edit-og-max-groups').attr('disabled','disabled');
    } else {
      $('#edit-og-max-groups').removeAttr('disabled');
    }
  });
  
  // Initial check to see if content type is standard group post
  if (!$('#edit-og-content-type-usage-group-post-standard').attr('checked')) {
    $('#edit-og-max-groups').attr('disabled','disabled');
  };
}


Drupal.verticalTabs = Drupal.verticalTabs || {};

Drupal.verticalTabs.og_nodeapi = function() {
  var values = [];
  $('.vertical-tabs-og_nodeapi #edit-og-groups :selected')
    .each(function (i, selected) {
      values[i] = $(selected).text();
    });

  return values.join(', ');
}

Drupal.verticalTabs.og = function() {
  var type = $('.vertical-tabs-og input[type=radio]:checked').val();
  
  switch (type) {
    case 'group':
      return Drupal.t('Group node');
      break;
      
    case 'omitted':
      return Drupal.t('May not be posted into a group.');
      break;
      
    case 'group_post_standard':
      return Drupal.t('Standard group post');
      break;
      
    case 'group_post_wiki':
      return Drupal.t('Wiki group post');
      break;
  }
}
;
// $Id: panels.js,v 1.2.4.1 2009/10/05 22:40:35 merlinofchaos Exp $

(function ($) {
  Drupal.Panels = {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
// Javascript for user_relationships_ui.module

// Creating our own namespace for the module
Drupal.user_relationships_ui = {};

if (Drupal.jsEnabled) {
  $(document).ready(function() {
    // Any links that we have created in the ui module are
    // Given a click handler so you can display the popup correctly
    $('a.user_relationships_popup_link').click(function(e) {
      var buttoncode = e.which ? e.which : e.button; // msie specific checks does not support e.which
      // If position is fixed, allow for %'s.
      position = Drupal.settings.user_relationships_ui.position.position;
      left = Drupal.settings.user_relationships_ui.position.left;
      xtop = Drupal.settings.user_relationships_ui.position.top;
      
      if(position == "fixed") {
        // If left is defined in a % (.5) calculate left requirement
        if(left <= 1) {
          // Window width * desired - UI width
          left = Math.round(($(window).width()*left) - ($("#user_relationships_popup_form").width()/2));
        }
        // If top is define in a % (.33) calculate top requirement
        if(xtop <= 1) {
          // Window height * desired - UI height (which is an unknown)
          xtop = Math.round(($(window).height()*xtop));// - ($("#user_relationships_popup_form").height()/2));
        }
      } else {
      left = (e.pageX ? e.pageX : e.clientX) + Number(left); // msie specific checks does not support e.page
      if (left + $("#user_relationships_popup_form").width() > $(window).width()) {
        left = (e.pageX ? e.pageX : e.clientX) - $("#user_relationships_popup_form").width();
      }
        xtop = (e.pageY ? e.pageY : e.clientY) + Number(xtop); // msie specific checks does not support e.page
      }
      var href = $(this).attr('href'); // Where we send the ajax request.
      Drupal.user_relationships_ui.showForm(href, position, left, xtop);
      return false;
    });
  });
}

/**
 * Function to display the pertinent form for the user
 *
 * @param href
 *      Ajax url where we will retrieve the form
 * @param pageX
 *      Left value for the event
 * @param pageY
 *      Top value for the event
 */
Drupal.user_relationships_ui.showForm = function(href, position, left, top) {
  // Making sure that any currently open popups will be hidden.
  Drupal.user_relationships_ui.hidePopup();
  // Putting the animation into this

  $('#user_relationships_popup_form')
    .css({top: top + 'px', left: left + 'px', position: position})
    .html(Drupal.user_relationships_ui.loadingAnimation())
    .slideDown();
  // Adding ajax to the href because we need to determine between ajax and regular
  if (href.indexOf('?') == -1) {
    href += '?';
  };
  href += '&ajax=1';
  // Making the ajax request to the server to retrieve the form.
  $.get(href, function(result) {
    $('#user_relationships_popup_form').html(result).slideDown();
    // Making sure the cancel link on each form in the popup closes the popup.
    $('#user_relationships_popup_form a').click(function() {
      Drupal.user_relationships_ui.hidePopup();
      return false;
    });
    //Prevent users from clicking submit button twice
    Drupal.user_relationships_ui.formCheck();
  });
};

/**
 * Function used to return the html that is used to build the.
 * Loading animation when a form is requested by the user.
 */
Drupal.user_relationships_ui.loadingAnimation = function() {
  var html = '<div>';
  html += '<div style="text-align: center; font-weight: bold;">';
  html += Drupal.t('Form Loading');
  html += '</div>';
  html += '<img src="' + Drupal.settings.user_relationships_ui['loadingimage'] + '" border="0" height="20" width="200" />';
  html += '</div>';
  return html;
}

/**
 * Helper function to hide the popup form
 */
Drupal.user_relationships_ui.hidePopup = function() {
  $('#user_relationships_popup_form').slideUp();
}

/**
 * Prevent users from clicking a submit button twice - borrowed from http://drupal.org/project/newswire - thanks, fellows :)
 */
Drupal.user_relationships_ui.formCheck = function() {
  // only apply this to node and comment and new user registration forms
  var forms = $("#user_relationships_popup_form #edit-submit");
  // insert the saving div now to cache it for better performance and to show the loading image
  $('<div id="user_relationships_popup_form_saving"><p class="user_relationships_popup_form_saving">' + Drupal.t('Saving...') + '</p></div>').insertAfter(forms);
  forms.click(function() {
    $(this).siblings("input[type=submit]").hide();
    $(this).hide();
    $("#user_relationships_popup_form_saving").show();
    var notice = function() {
      $('<p id="user_relationships_popup_form_saving_notice">' + Drupal.t('Not saving? Please wait a few seconds, reload this page, and try again.') + '</p>').appendTo("#user_relationships_popup_form_saving").fadeIn();
    };
    // append notice if form saving isn't work, perhaps a timeout issue
    setTimeout(notice, 60000);
  });
};

$(document).ready(function() {
  $('#edit-is-oneway').click(function () {
    if ($('#edit-is-oneway').attr('checked')) {
      $('#edit-is-reciprocal-wrapper').slideDown('slow');
    }
    else {
      $('#edit-is-reciprocal-wrapper').slideUp('slow');
    }
  });
  
  if (!$('#edit-is-oneway').attr('checked')) {
    $('#edit-is-reciprocal-wrapper').hide();
  }
});
;
/* Id$ */

/*!
 * jQuery JavaScript Library v1.5
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Jan 31 08:31:29 2011 -0500
 */
(function(a,b){function b$(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function bX(a){if(!bR[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";bR[a]=c}return bR[a]}function bW(a,b){var c={};d.each(bV.concat.apply([],bV.slice(0,b)),function(){c[this]=a});return c}function bJ(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f=a.converters,g,h=e.length,i,j=e[0],k,l,m,n,o;for(g=1;g<h;g++){k=j,j=e[g];if(j==="*")j=k;else if(k!=="*"&&k!==j){l=k+" "+j,m=f[l]||f["* "+j];if(!m){o=b;for(n in f){i=n.split(" ");if(i[0]===k||i[0]==="*"){o=f[i[1]+" "+j];if(o){n=f[n],n===!0?m=o:o===!0&&(m=n);break}}}}!m&&!o&&d.error("No conversion from "+l.replace(" "," to ")),m!==!0&&(c=m?m(c):o(n(c)))}}return c}function bI(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bH(a,b,c,e){d.isArray(b)&&b.length?d.each(b,function(b,f){c||bp.test(a)?e(a,f):bH(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)}):c||b==null||typeof b!=="object"?e(a,b):d.isArray(b)||d.isEmptyObject(b)?e(a,""):d.each(b,function(b,d){bH(a+"["+b+"]",d,c,e)})}function bG(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bD,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(g[l]?l=b:(c.dataTypes.unshift(l),l=bG(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bG(a,c,d,e,"*",g));return l}function bF(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bz),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bn(a,b,c){var e=b==="width"?bh:bi,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function _(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function $(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function Z(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h,g[h][i],g[h][i].data)}}}}function Y(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function O(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(J.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function N(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function F(a,b){return(a&&a!=="*"?a+".":"")+b.replace(q,"`").replace(r,"&")}function E(a){var b,c,e,f,g,h,i,j,k,l,m,n,p,q=[],r=[],s=d._data(this,u);typeof s==="function"&&(s=s.events);if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(o,"")===a.type?r.push(g.selector):t.splice(i--,1);f=d(a.target).closest(r,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&q.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=q.length;j<k;j++){f=q[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,p=f.handleObj.origHandler.apply(f.elem,arguments);if(p===!1||a.isPropagationStopped()){c=f.level,p===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function C(a,b,c){c[0].type=a;return d.event.handle.apply(b,c)}function w(){return!0}function v(){return!1}function f(a,c,f){if(f===b&&a.nodeType===1){f=a.getAttribute("data-"+c);if(typeof f==="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:d.isNaN(f)?e.test(f)?d.parseJSON(f):f:parseFloat(f)}catch(g){}d.data(a,c,f)}else f=b}return f}var c=a.document,d=function(){function I(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(I,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=!1,y,z="then done fail isResolved isRejected promise".split(" "),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;y.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=!0;if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",A,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",A),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&I()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):H[B.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");e.type="text/javascript",d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:F?function(a){return a==null?"":F.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){c=1;try{while(a[0])a.shift().apply(d,f)}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),e;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a,c){if(a==null){if(e)return e;e=a={}}c=z.length;while(c--)a[z[c]]=b[z[c]];return a}}),b.then(c.cancel,b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){var b=arguments,c=b.length,e=c<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),f=e.promise(),g;c>1?(g=Array(c),d.each(b,function(a,b){d.when(b).then(function(b){g[a]=arguments.length>1?E.call(arguments,0):b,--c||e.resolveWith(f,g)},e.reject)})):e!==a&&e.resolve(a);return f},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),y=d._Deferred(),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){H["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),G&&(d.inArray=function(a,b){return G.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?A=function(){c.removeEventListener("DOMContentLoaded",A,!1),d.ready()}:c.attachEvent&&(A=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",A),d.ready())});return a.jQuery=a.$=d}();(function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option"));if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:b.getElementsByTagName("input")[0].value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,_scriptEval:null,noCloneEvent:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},g.disabled=!0,d.support.optDisabled=!h.disabled,d.support.scriptEval=function(){if(d.support._scriptEval===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();e.type="text/javascript";try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(d.support._scriptEval=!0,delete a[f]):d.support._scriptEval=!1,b.removeChild(e),b=e=f=null}return d.support._scriptEval};try{delete b.test}catch(i){d.support.deleteExpando=!1}b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function j(){d.support.noCloneEvent=!1,b.detachEvent("onclick",j)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var k=c.createDocumentFragment();k.appendChild(b.firstChild),d.support.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",b.removeChild(a).style.display="none",a=e=null}});var l=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function"),b=null;return d};d.support.submitBubbles=l("submit"),d.support.changeBubbles=l("change"),b=e=f=null}})();var e=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!d.isEmptyObject(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={}),typeof c==="object"&&(f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c)),i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,g=b.nodeType,h=g?d.cache:b,i=g?b[d.expando]:d.expando;if(!h[i])return;if(c){var j=e?h[i][f]:h[i];if(j){delete j[c];if(!d.isEmptyObject(j))return}}if(e){delete h[i][f];if(!d.isEmptyObject(h[i]))return}var k=h[i][f];d.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},h[i][f]=k):g&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var g=this[0].attributes,h;for(var i=0,j=g.length;i<j;i++)h=g[i].name,h.indexOf("data-")===0&&(h=h.substr(5),f(this[0],h,e[h]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=f(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var g=/[\n\t\r]/g,h=/\s+/,i=/\r/g,j=/^(?:href|src|style)$/,k=/^(?:button|input)$/i,l=/^(?:button|input|object|select|textarea)$/i,m=/^a(?:rea)?$/i,n=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(h);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",i=f.className;for(var j=0,k=b.length;j<k;j++)g.indexOf(" "+b[j]+" ")<0&&(i+=" "+b[j]);f.className=d.trim(i)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(h);for(var e=0,f=this.length;e<f;e++){var i=this[e];if(i.nodeType===1&&i.className)if(a){var j=(" "+i.className+" ").replace(g," ");for(var k=0,l=c.length;k<l;k++)j=j.replace(" "+c[k]+" "," ");i.className=d.trim(j)}else i.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,i=d(this),j=b,k=a.split(h);while(f=k[g++])j=e?j:!i.hasClass(f),i[j?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(g," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,j=c.type==="select-one";if(f<0)return null;for(var k=j?f:0,l=j?f+1:h.length;k<l;k++){var m=h[k];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(j)return a;g.push(a)}}return g}if(n.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(i,"")}return b}var o=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){o&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&n.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=j.test(c);if(c==="selected"&&!d.support.optSelected){var n=a.parentNode;n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&k.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var o=a.getAttributeNode("tabIndex");return o&&o.specified?o.value:l.test(a.nodeName)||m.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var p=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return p===null?b:p}h&&(a[c]=e);return a[c]}});var o=/\.(.*)$/,p=/^(?:textarea|input|select)$/i,q=/\./g,r=/ /g,s=/[^\w\s.|`]/g,t=function(a){return a.replace(s,"\\$&")},u="events";d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a);if(f===!1)f=v;else if(!f)return;var h,i;f.handler&&(h=f,f=h.handler),f.guid||(f.guid=d.guid++);var j=d._data(c);if(!j)return;var k=j[u],l=j.handle;typeof k==="function"?(l=k.handle,k=k.events):k||(c.nodeType||(j[u]=j=function(){}),j.events=k={}),l||(j.handle=l=function(){return typeof d!=="undefined"&&!d.event.triggered?d.event.handle.apply(l.elem,arguments):b}),l.elem=c,e=e.split(" ");var m,n=0,o;while(m=e[n++]){i=h?d.extend({},h):{handler:f,data:g},m.indexOf(".")>-1?(o=m.split("."),m=o.shift(),i.namespace=o.slice(0).sort().join(".")):(o=[],i.namespace=""),i.type=m,i.guid||(i.guid=f.guid);var p=k[m],q=d.event.special[m]||{};if(!p){p=k[m]=[];if(!q.setup||q.setup.call(c,g,o,l)===!1)c.addEventListener?c.addEventListener(m,l,!1):c.attachEvent&&c.attachEvent("on"+m,l)}q.add&&(q.add.call(c,i),i.handler.guid||(i.handler.guid=f.guid)),p.push(i),d.event.global[m]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=v);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),w=s&&s[u];if(!s||!w)return;typeof w==="function"&&(s=w,w=w.events),c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in w)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),t).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=w[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete w[h]}if(d.isEmptyObject(w)){var x=s.handle;x&&(x.elem=null),delete s.events,delete s.handle,typeof s==="function"?d.removeData(a,u,!0):d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=e.nodeType?d._data(e,"handle"):(d._data(e,u)||{}).handle;h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(o,""),n=d.nodeName(l,"a")&&m==="click",p=d.event.special[m]||{};if((!p._default||p._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=!0,l[m]())}catch(q){}k&&(l["on"+m]=k),d.event.triggered=!1}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,u),typeof i==="function"&&(i=i.events),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,F(a.origType,a.selector),d.extend({},a,{handler:E,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,F(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?w:v):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=w;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=w;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=w,this.stopPropagation()},isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v};var x=function(a){var b=a.relatedTarget;try{while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(c){}},y=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?y:x,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?y:x)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,c){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="submit"||e==="image")&&d(c).closest("form").length){a.liveFired=b;return C("submit",this,arguments)}}),d.event.add(this,"keypress.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="text"||e==="password")&&d(c).closest("form").length&&a.keyCode===13){a.liveFired=b;return C("submit",this,arguments)}});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var z,A=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},B=function B(a){var c=a.target,e,f;if(p.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=A(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f){a.type="change",a.liveFired=b;return d.event.trigger(a,arguments[1],c)}}};d.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(a){var b=a.target,c=b.type;if(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")return B.call(this,a)},keydown:function(a){var b=a.target,c=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")return B.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",A(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in z)d.event.add(this,c+".specialChange",z[c]);return p.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return p.test(this.nodeName)}},z=d.event.special.change.filters,z.focus=z.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function c(a){a=d.event.fix(a),a.type=b;return d.event.handle.call(this,a)}d.event.special[b]={setup:function(){this.addEventListener(a,c,!0)},teardown:function(){this.removeEventListener(a,c,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var D={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var p in a)n[c](p,e,a[p],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=o.exec(h),k="",j&&(k=j[0],h=h.replace(o,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(D[h]+k),h=h+k):h=(D[h]||h)+k;if(c==="live")for(var q=0,r=n.length;q<r;q++)d.event.add(n[q],"live."+F(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+F(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function s(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var j=d[g];if(j){var k=!1;j=j[a];while(j){if(j.sizcache===c){k=d[j.sizset];break}if(j.nodeType===1){f||(j.sizcache=c,j.sizset=g);if(typeof b!=="string"){if(j===b){k=!0;break}}else if(i.filter(b,[j]).length>0){k=j;break}}j=j[a]}d[g]=k}}}function r(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0;[0,0].sort(function(){h=!1;return 0});var i=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var l,m,o,p,q,r,s,u,v=!0,w=i.isXML(d),x=[],y=b;do{a.exec(""),l=a.exec(y);if(l){y=l[3],x.push(l[1]);if(l[2]){p=l[3];break}}}while(l);if(x.length>1&&k.exec(b))if(x.length===2&&j.relative[x[0]])m=t(x[0]+x[1],d);else{m=j.relative[x[0]]?[d]:i(x.shift(),d);while(x.length)b=x.shift(),j.relative[b]&&(b+=x.shift()),m=t(b,m)}else{!g&&x.length>1&&d.nodeType===9&&!w&&j.match.ID.test(x[0])&&!j.match.ID.test(x[x.length-1])&&(q=i.find(x.shift(),d,w),d=q.expr?i.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:n(g)}:i.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),m=q.expr?i.filter(q.expr,q.set):q.set,x.length>0?o=n(m):v=!1;while(x.length)r=x.pop(),s=r,j.relative[r]?s=x.pop():r="",s==null&&(s=d),j.relative[r](o,s,w)}else o=x=[]}o||(o=m),o||i.error(r||b);if(f.call(o)==="[object Array]")if(v)if(d&&d.nodeType===1)for(u=0;o[u]!=null;u++)o[u]&&(o[u]===!0||o[u].nodeType===1&&i.contains(d,o[u]))&&e.push(m[u]);else for(u=0;o[u]!=null;u++)o[u]&&o[u].nodeType===1&&e.push(m[u]);else e.push.apply(e,o);else n(o,e);p&&(i(p,h,e,g),i.uniqueSort(e));return e};i.uniqueSort=function(a){if(p){g=h,a.sort(p);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},i.matches=function(a,b){return i(a,null,null,b)},i.matchesSelector=function(a,b){return i(b,null,null,[a]).length>0},i.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=j.order.length;e<f;e++){var g,h=j.order[e];if(g=j.leftMatch[h].exec(a)){var i=g[1];g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(/\\/g,""),d=j.find[h](g,b,c);if(d!=null){a=a.replace(j.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},i.filter=function(a,c,d,e){var f,g,h=a,k=[],l=c,m=c&&c[0]&&i.isXML(c[0]);while(a&&c.length){for(var n in j.filter)if((f=j.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=j.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;l===k&&(k=[]);if(j.preFilter[n]){f=j.preFilter[n](f,l,d,k,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=l[s])!=null;s++)if(p){o=q(p,f,s,l);var t=e^!!o;d&&o!=null?t?g=!0:l[s]=!1:t&&(k.push(p),g=!0)}if(o!==b){d||(l=k),a=a.replace(j.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)i.error(a);else break;h=a}return l},i.error=function(a){throw"Syntax error, unrecognized expression: "+a};var j=i.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!/\W/.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&i.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!/\W/.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&i.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(/\\/g,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(/\\/g,"")},TAG:function(a,b){return a[1].toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||i.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&i.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(/\\/g,"");!f&&j.attrMap[g]&&(a[1]=j.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(/\\/g,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=i(b[3],null,null,c);else{var g=i.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(j.match.POS.test(b[0])||j.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!i(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=j.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||i.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,k=g.length;h<k;h++)if(g[h]===a)return!1;return!0}i.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=j.attrHandle[c]?j.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=j.setFilters[e];if(f)return f(a,c,b,d)}}},k=j.match.POS,l=function(a,b){return"\\"+(b-0+1)};for(var m in j.match)j.match[m]=new RegExp(j.match[m].source+/(?![^\[]*\])(?![^\(]*\))/.source),j.leftMatch[m]=new RegExp(/(^(?:.|\r|\n)*?)/.source+j.match[m].source.replace(/\\(\d+)/g,l));var n=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(o){n=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var p,q;c.documentElement.compareDocumentPosition?p=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(p=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return q(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return q(e[k],f[k]);return k===c?q(a,f[k],-1):q(e[k],b,1)},q=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),i.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=i.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(j.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},j.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(j.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(j.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=i,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){i=function(b,e,f,g){e=e||c;if(!g&&!i.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return n(e.getElementsByTagName(b),f);if(h[2]&&j.find.CLASS&&e.getElementsByClassName)return n(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return n([e.body],f);if(h&&h[3]){var k=e.getElementById(h[3]);if(!k||!k.parentNode)return n([],f);if(k.id===h[3])return n([k],f)}try{return n(e.querySelectorAll(b),f)}catch(l){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e.getAttribute("id"),o=m||d,p=e.parentNode,q=/^\s*[+~]/.test(b);m?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),q&&p&&(e=e.parentNode);try{if(!q||p)return n(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(r){}finally{m||e.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)i[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(e){d=!0}b&&(i.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!i.isXML(a))try{if(d||!j.match.PSEUDO.test(c)&&!/!=/.test(c))return b.call(a,c)}catch(e){}return i(c,null,null,[a]).length>0})}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;j.order.splice(1,0,"CLASS"),j.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?i.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?i.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains=function(){return!1},i.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var t=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=j.match.PSEUDO.exec(a))e+=c[0],a=a.replace(j.match.PSEUDO,"");a=j.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)i(a,f[g],d);return i.filter(e,d)};d.find=i,d.expr=i.selectors,d.expr[":"]=d.expr.filters,d.unique=i.uniqueSort,d.text=i.getText,d.isXMLDoc=i.isXML,d.contains=i.contains}();var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(O(this,a,!1),"not",a)},filter:function(a){return this.pushStack(O(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=L.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=K.call(arguments);G.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!M[a]?d.unique(f):f,(this.length>1||I.test(e))&&H.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var P=/ jQuery\d+="(?:\d+|null)"/g,Q=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,S=/<([\w:]+)/,T=/<tbody/i,U=/<|&#?\w+;/,V=/<(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};X.optgroup=X.option,X.tbody=X.tfoot=X.colgroup=X.caption=X.thead,X.th=X.td,d.support.htmlSerialize||(X._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!0:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(P,""):null;if(typeof a!=="string"||V.test(a)||!d.support.leadingWhitespace&&Q.test(a)||X[(S.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(R,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&W.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?Y(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,_)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!V.test(a[0])&&(d.support.checkClone||!W.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if(!d.support.noCloneEvent&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");for(h=0;f[h];++h)$(f[h],g[h]);$(a,e)}if(b){Z(a,e);if(c&&"getElementsByTagName"in a){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");if(f.length)for(h=0;f[h];++h)Z(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||U.test(i)){if(typeof i==="string"){i=i.replace(R,"<$1></$2>");var j=(S.exec(i)||["",""])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=T.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&Q.test(i)&&m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var ba=/alpha\([^)]*\)/i,bb=/opacity=([^)]*)/,bc=/-([a-z])/ig,bd=/([A-Z])/g,be=/^-?\d+(?:px)?$/i,bf=/^-?\d/,bg={position:"absolute",visibility:"hidden",display:"block"},bh=["Left","Right"],bi=["Top","Bottom"],bj,bk,bl,bm=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bj(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bj)return bj(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bc,bm)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bn(a,b,e):d.swap(a,bg,function(){f=bn(a,b,e)});if(f<=0){f=bj(a,b,b),f==="0px"&&bl&&(f=bl(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!be.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return bb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=ba.test(f)?f.replace(ba,e):c.filter+" "+e}}),c.defaultView&&c.defaultView.getComputedStyle&&(bk=function(a,c,e){var f,g,h;e=e.replace(bd,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bl=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!be.test(d)&&bf.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bj=bk||bl,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var bo=/%20/g,bp=/\[\]$/,bq=/\r?\n/g,br=/#.*$/,bs=/^(.*?):\s*(.*?)\r?$/mg,bt=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bu=/^(?:GET|HEAD)$/,bv=/^\/\//,bw=/\?/,bx=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,by=/^(?:select|textarea)/i,bz=/\s+/,bA=/([?&])_=[^&]*/,bB=/^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/,bC=d.fn.load,bD={},bE={};d.fn.extend({load:function(a,b,c){if(typeof a!=="string"&&bC)return bC.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}var g="GET";b&&(d.isFunction(b)?(c=b,b=null):typeof b==="object"&&(b=d.param(b,d.ajaxSettings.traditional),g="POST"));var h=this;d.ajax({url:a,type:g,dataType:"html",data:b,complete:function(a,b,e){e=a.responseText,a.isResolved()&&(a.done(function(a){e=a}),h.html(f?d("<div>").append(e.replace(bx,"")).find(f):e)),c&&h.each(c,[e,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||by.test(this.nodeName)||bt.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(bq,"\r\n")}}):{name:b.name,value:c.replace(bq,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,b){d[b]=function(a,c,e,f){d.isFunction(c)&&(f=f||e,e=c,c=null);return d.ajax({type:b,url:a,data:c,success:e,dataType:f})}}),d.extend({getScript:function(a,b){return d.get(a,null,b,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a){d.extend(!0,d.ajaxSettings,a),a.context&&(d.ajaxSettings.context=a.context)},ajaxSettings:{url:location.href,global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bF(bD),ajaxTransport:bF(bE),ajax:function(a,e){function w(a,c,e,l){if(t!==2){t=2,p&&clearTimeout(p),o=b,m=l||"",v.readyState=a?4:0;var n,q,r,s=e?bI(f,v,e):b,u,w;if(a>=200&&a<300||a===304){if(f.ifModified){if(u=v.getResponseHeader("Last-Modified"))d.lastModified[f.url]=u;if(w=v.getResponseHeader("Etag"))d.etag[f.url]=w}if(a===304)c="notmodified",n=!0;else try{q=bJ(f,s),c="success",n=!0}catch(x){c="parsererror",r=x}}else r=c,a&&(c="error",a<0&&(a=0));v.status=a,v.statusText=c,n?i.resolveWith(g,[q,c,v]):i.rejectWith(g,[v,c,r]),v.statusCode(k),k=b,f.global&&h.trigger("ajax"+(n?"Success":"Error"),[v,f,n?q:r]),j.resolveWith(g,[v,c]),f.global&&(h.trigger("ajaxComplete",[v,f]),--d.active||d.event.trigger("ajaxStop"))}}typeof e!=="object"&&(e=a,a=b),e=e||{};var f=d.extend(!0,{},d.ajaxSettings,e),g=(f.context=("context"in e?e:d.ajaxSettings).context)||f,h=g===f?d.event:d(g),i=d.Deferred(),j=d._Deferred(),k=f.statusCode||{},l={},m,n,o,p,q=c.location,r=q.protocol||"http:",s,t=0,u,v={readyState:0,setRequestHeader:function(a,b){t===0&&(l[a.toLowerCase()]=b);return this},getAllResponseHeaders:function(){return t===2?m:null},getResponseHeader:function(a){var b;if(t===2){if(!n){n={};while(b=bs.exec(m))n[b[1].toLowerCase()]=b[2]}b=n[a.toLowerCase()]}return b||null},abort:function(a){a=a||"abort",o&&o.abort(a),w(0,a);return this}};i.promise(v),v.success=v.done,v.error=v.fail,v.complete=j.done,v.statusCode=function(a){if(a){var b;if(t<2)for(b in a)k[b]=[k[b],a[b]];else b=a[v.status],v.then(b,b)}return this},f.url=(""+(a||f.url)).replace(br,"").replace(bv,r+"//"),f.dataTypes=d.trim(f.dataType||"*").toLowerCase().split(bz),f.crossDomain||(s=bB.exec(f.url.toLowerCase()),f.crossDomain=s&&(s[1]!=r||s[2]!=q.hostname||(s[3]||(s[1]==="http:"?80:443))!=(q.port||(r==="http:"?80:443)))),f.data&&f.processData&&typeof f.data!=="string"&&(f.data=d.param(f.data,f.traditional)),bG(bD,f,e,v),f.type=f.type.toUpperCase(),f.hasContent=!bu.test(f.type),f.global&&d.active++===0&&d.event.trigger("ajaxStart");if(!f.hasContent){f.data&&(f.url+=(bw.test(f.url)?"&":"?")+f.data);if(f.cache===!1){var x=d.now(),y=f.url.replace(bA,"$1_="+x);f.url=y+(y===f.url?(bw.test(f.url)?"&":"?")+"_="+x:"")}}if(f.data&&f.hasContent&&f.contentType!==!1||e.contentType)l["content-type"]=f.contentType;f.ifModified&&(d.lastModified[f.url]&&(l["if-modified-since"]=d.lastModified[f.url]),d.etag[f.url]&&(l["if-none-match"]=d.etag[f.url])),l.accept=f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+(f.dataTypes[0]!=="*"?", */*; q=0.01":""):f.accepts["*"];for(u in f.headers)l[u.toLowerCase()]=f.headers[u];if(!f.beforeSend||f.beforeSend.call(g,v,f)!==!1&&t!==2){for(u in {success:1,error:1,complete:1})v[u](f[u]);o=bG(bE,f,e,v);if(o){t=v.readyState=1,f.global&&h.trigger("ajaxSend",[v,f]),f.async&&f.timeout>0&&(p=setTimeout(function(){v.abort("timeout")},f.timeout));try{o.send(l,w)}catch(z){status<2?w(-1,z):d.error(z)}}else w(-1,"No Transport")}else w(0,"abort"),v=!1;return v},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery)d.each(a,function(){f(this.name,this.value)});else for(var g in a)bH(g,a[g],c,f);return e.join("&").replace(bo,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bK=d.now(),bL=/(\=)\?(&|$)|()\?\?()/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bK++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){e=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bL.test(b.url)||e&&bL.test(b.data))){var f,g=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h=a[g],i=b.url,j=b.data,k="$1"+g+"$2";b.jsonp!==!1&&(i=i.replace(bL,k),b.url===i&&(e&&(j=j.replace(bL,k)),b.data===j&&(i+=(/\?/.test(i)?"&":"?")+b.jsonp+"="+g))),b.url=i,b.data=j,a[g]=function(a){f=[a]},b.complete=[function(){a[g]=h;if(h)f&&d.isFunction(h)&&a[g](f[0]);else try{delete a[g]}catch(b){}},b.complete],b.converters["script json"]=function(){f||d.error(g+" was not called");return f[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript"},contents:{script:/javascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bM=d.now(),bN={},bO,bP;d.ajaxSettings.xhr=a.ActiveXObject?function(){if(a.location.protocol!=="file:")try{return new a.XMLHttpRequest}catch(b){}try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(c){}}:function(){return new a.XMLHttpRequest};try{bP=d.ajaxSettings.xhr()}catch(bQ){}d.support.ajax=!!bP,d.support.cors=bP&&"withCredentials"in bP,bP=b,d.support.ajax&&d.ajaxTransport(function(b){if(!b.crossDomain||d.support.cors){var c;return{send:function(e,f){bO||(bO=1,d(a).bind("unload",function(){d.each(bN,function(a,b){b.onreadystatechange&&b.onreadystatechange(1)})}));var g=b.xhr(),h;b.username?g.open(b.type,b.url,b.async,b.username,b.password):g.open(b.type,b.url,b.async),(!b.crossDomain||b.hasContent)&&!e["x-requested-with"]&&(e["x-requested-with"]="XMLHttpRequest");try{d.each(e,function(a,b){g.setRequestHeader(a,b)})}catch(i){}g.send(b.hasContent&&b.data||null),c=function(a,e){if(c&&(e||g.readyState===4)){c=0,h&&(g.onreadystatechange=d.noop,delete bN[h]);if(e)g.readyState!==4&&g.abort();else{var i=g.status,j,k=g.getAllResponseHeaders(),l={},m=g.responseXML;m&&m.documentElement&&(l.xml=m),l.text=g.responseText;try{j=g.statusText}catch(n){j=""}i=i===0?!b.crossDomain||j?k?304:0:302:i==1223?204:i,f(i,j,l,k)}}},b.async&&g.readyState!==4?(h=bM++,bN[h]=g,g.onreadystatechange=c):c()},abort:function(){c&&c(0,1)}}}});var bR={},bS=/^(?:toggle|show|hide)$/,bT=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,bU,bV=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(bW("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",bX(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(bW("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(bW("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=bX(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(bS.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=bT.exec(e),j=f.cur()||0;if(i){var k=parseFloat(i[2]),l=i[3]||"px";l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:bW("show",1),slideUp:bW("hide",1),slideToggle:bW("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(d.css(this.elem,this.prop));return a||0},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||"px",this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!bU&&(bU=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(bU),bU=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var bY=/^t(?:able|d|h)$/i,bZ=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=b$(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!bY.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),a=b=e=f=g=h=null,d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=e==="absolute"&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=bZ.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!bZ.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=b$(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=b$(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}})})(window);;
/* Id$ */

var jqm = jQuery.noConflict();;
/* Id$ */

/*!
 * jQuery Mobile v1.0a3
 * http://jquerymobile.com/
 *
 * Copyright 2010, jQuery Project
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
/*!
 * jQuery UI Widget @VERSION
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function( $, undefined ) {

// jQuery 1.4+
if ( $.cleanData ) {
	var _cleanData = $.cleanData;
	$.cleanData = function( elems ) {
		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			$( elem ).triggerHandler( "remove" );
		}
		_cleanData( elems );
	};
} else {
	var _remove = $.fn.remove;
	$.fn.remove = function( selector, keepData ) {
		return this.each(function() {
			if ( !keepData ) {
				if ( !selector || $.filter( selector, [ this ] ).length ) {
					$( "*", this ).add( [ this ] ).each(function() {
						$( this ).triggerHandler( "remove" );
					});
				}
			}
			return _remove.call( $(this), selector, keepData );
		});
	};
}

$.widget = function( name, base, prototype ) {
	var namespace = name.split( "." )[ 0 ],
		fullName;
	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName ] = function( elem ) {
		return !!$.data( elem, name );
	};

	$[ namespace ] = $[ namespace ] || {};
	$[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without initializing for simple inheritance
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	var basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
//	$.each( basePrototype, function( key, val ) {
//		if ( $.isPlainObject(val) ) {
//			basePrototype[ key ] = $.extend( {}, val );
//		}
//	});
	basePrototype.options = $.extend( true, {}, basePrototype.options );
	$[ namespace ][ name ].prototype = $.extend( true, basePrototype, {
		namespace: namespace,
		widgetName: name,
		widgetEventPrefix: $[ namespace ][ name ].prototype.widgetEventPrefix || name,
		widgetBaseClass: fullName
	}, prototype );

	$.widget.bridge( name, $[ namespace ][ name ] );
};

$.widget.bridge = function( name, object ) {
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = Array.prototype.slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.extend.apply( null, [ true, options ].concat(args) ) :
			options;

		// prevent calls to internal methods
		if ( isMethodCall && options.charAt( 0 ) === "_" ) {
			return returnValue;
		}

		if ( isMethodCall ) {
			this.each(function() {
				var instance = $.data( this, name );
				if ( !instance ) {
					throw "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'";
				}
				if ( !$.isFunction( instance[options] ) ) {
					throw "no such method '" + options + "' for " + name + " widget instance";
				}
				var methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, name );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, name, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( options, element ) {
	// allow instantiation without initializing for simple inheritance
	if ( arguments.length ) {
		this._createWidget( options, element );
	}
};

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	options: {
		disabled: false
	},
	_createWidget: function( options, element ) {
		// $.widget.bridge stores the plugin instance, but we do it anyway
		// so that it's stored even before the _create function runs
		$.data( element, this.widgetName, this );
		this.element = $( element );
		this.options = $.extend( true, {},
			this.options,
			this._getCreateOptions(),
			options );

		var self = this;
		this.element.bind( "remove." + this.widgetName, function() {
			self.destroy();
		});

		this._create();
		this._trigger( "create" );
		this._init();
	},
	_getCreateOptions: function() {
		var options = {};
		if ( $.metadata ) {
			options = $.metadata.get( element )[ this.widgetName ];
		}
		return options;
	},
	_create: function() {},
	_init: function() {},

	destroy: function() {
		this.element
			.unbind( "." + this.widgetName )
			.removeData( this.widgetName );
		this.widget()
			.unbind( "." + this.widgetName )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetBaseClass + "-disabled " +
				"ui-state-disabled" );
	},

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.extend( {}, this.options );
		}

		if  (typeof key === "string" ) {
			if ( value === undefined ) {
				return this.options[ key ];
			}
			options = {};
			options[ key ] = value;
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var self = this;
		$.each( options, function( key, value ) {
			self._setOption( key, value );
		});

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				[ value ? "addClass" : "removeClass"](
					this.widgetBaseClass + "-disabled" + " " +
					"ui-state-disabled" )
				.attr( "aria-disabled", value );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_trigger: function( type, event, data ) {
		var callback = this.options[ type ];

		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		data = data || {};

		// copy original event properties over to the new event
		// this would happen if we could call $.event.fix instead of $.Event
		// but we don't have a way to force an event to be fixed multiple times
		if ( event.originalEvent ) {
			for ( var i = $.event.props.length, prop; i; ) {
				prop = $.event.props[ --i ];
				event[ prop ] = event.originalEvent[ prop ];
			}
		}

		this.element.trigger( event, data );

		return !( $.isFunction(callback) &&
			callback.call( this.element[0], event, data ) === false ||
			event.isDefaultPrevented() );
	}
};

})( jQuery );
/*
* jQuery Mobile Framework : widget factory extentions for mobile
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {

$.widget( "mobile.widget", {
	_getCreateOptions: function() {
		var elem = this.element,
			options = {};
		$.each( this.options, function( option ) {
			var value = elem.data( option.replace( /[A-Z]/g, function( c ) {
				return "-" + c.toLowerCase();
			} ) );
			if ( value !== undefined ) {
				options[ option ] = value;
			}
		});
		return options;
	}
});

})( jQuery );
/*
* jQuery Mobile Framework : resolution and CSS media query related helpers and behavior
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {

var $window = $(window),
	$html = $( "html" ),

	//media-query-like width breakpoints, which are translated to classes on the html element
	resolutionBreakpoints = [320,480,768,1024];


/* $.mobile.media method: pass a CSS media type or query and get a bool return
	note: this feature relies on actual media query support for media queries, though types will work most anywhere
	examples:
		$.mobile.media('screen') //>> tests for screen media type
		$.mobile.media('screen and (min-width: 480px)') //>> tests for screen media type with window width > 480px
		$.mobile.media('@media screen and (-webkit-min-device-pixel-ratio: 2)') //>> tests for webkit 2x pixel ratio (iPhone 4)
*/
$.mobile.media = (function() {
	// TODO: use window.matchMedia once at least one UA implements it
	var cache = {},
		testDiv = $( "<div id='jquery-mediatest'>" ),
		fakeBody = $( "<body>" ).append( testDiv );

	return function( query ) {
		if ( !( query in cache ) ) {
			var styleBlock = document.createElement('style'),
        		cssrule = "@media " + query + " { #jquery-mediatest { position:absolute; } }";
	        //must set type for IE!	
	        styleBlock.type = "text/css";
	        if (styleBlock.styleSheet){ 
	          styleBlock.styleSheet.cssText = cssrule;
	        } 
	        else {
	          styleBlock.appendChild(document.createTextNode(cssrule));
	        } 
				
			$html.prepend( fakeBody ).prepend( styleBlock );
			cache[ query ] = testDiv.css( "position" ) === "absolute";
			fakeBody.add( styleBlock ).remove();
		}
		return cache[ query ];
	};
})();

/*
	private function for adding/removing breakpoint classes to HTML element for faux media-query support
	It does not require media query support, instead using JS to detect screen width > cross-browser support
	This function is called on orientationchange, resize, and mobileinit, and is bound via the 'htmlclass' event namespace
*/
function detectResolutionBreakpoints(){
	var currWidth = $window.width(),
		minPrefix = "min-width-",
		maxPrefix = "max-width-",
		minBreakpoints = [],
		maxBreakpoints = [],
		unit = "px",
		breakpointClasses;

	$html.removeClass( minPrefix + resolutionBreakpoints.join(unit + " " + minPrefix) + unit + " " +
		maxPrefix + resolutionBreakpoints.join( unit + " " + maxPrefix) + unit );

	$.each(resolutionBreakpoints,function( i, breakPoint ){
		if( currWidth >= breakPoint ){
			minBreakpoints.push( minPrefix + breakPoint + unit );
		}
		if( currWidth <= breakPoint ){
			maxBreakpoints.push( maxPrefix + breakPoint + unit );
		}
	});

	if( minBreakpoints.length ){ breakpointClasses = minBreakpoints.join(" "); }
	if( maxBreakpoints.length ){ breakpointClasses += " " +  maxBreakpoints.join(" "); }

	$html.addClass( breakpointClasses );
};

/* $.mobile.addResolutionBreakpoints method:
	pass either a number or an array of numbers and they'll be added to the min/max breakpoint classes
	Examples:
		$.mobile.addResolutionBreakpoints( 500 );
		$.mobile.addResolutionBreakpoints( [500, 1200] );
*/
$.mobile.addResolutionBreakpoints = function( newbps ){
	if( $.type( newbps ) === "array" ){
		resolutionBreakpoints = resolutionBreakpoints.concat( newbps );
	}
	else {
		resolutionBreakpoints.push( newbps );
	}
	resolutionBreakpoints.sort(function(a,b){ return a-b; });
	detectResolutionBreakpoints();
};

/* 	on mobileinit, add classes to HTML element
	and set handlers to update those on orientationchange and resize*/
$(document).bind("mobileinit.htmlclass", function(){
	/* bind to orientationchange and resize
	to add classes to HTML element for min/max breakpoints and orientation */
	$window.bind("orientationchange.htmlclass resize.htmlclass", function(event){
		//add orientation class to HTML element on flip/resize.
		if(event.orientation){
			$html.removeClass( "portrait landscape" ).addClass( event.orientation );
		}
		//add classes to HTML element for min/max breakpoints
		detectResolutionBreakpoints();
	});
});

/* Manually trigger an orientationchange event when the dom ready event fires.
   This will ensure that any viewport meta tag that may have been injected
   has taken effect already, allowing us to properly calculate the width of the
   document.
*/
$(function(){
	//trigger event manually
	$window.trigger( "orientationchange.htmlclass" );
});

})(jQuery);/*
* jQuery Mobile Framework : support tests
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
* Note: Code is in draft form and is subject to change 
*/
(function($, undefined ) {



var fakeBody = $( "<body>" ).prependTo( "html" ),
	fbCSS = fakeBody[0].style,
	vendors = ['webkit','moz','o'],
	webos = window.palmGetResource || window.PalmServiceBridge, //only used to rule out scrollTop 
	bb = window.blackberry; //only used to rule out box shadow, as it's filled opaque on BB

//thx Modernizr
function propExists( prop ){
	var uc_prop = prop.charAt(0).toUpperCase() + prop.substr(1),
		props   = (prop + ' ' + vendors.join(uc_prop + ' ') + uc_prop).split(' ');
	for(var v in props){
		if( fbCSS[ v ] !== undefined ){
			return true;
		}
	}
};

//test for dynamic-updating base tag support (allows us to avoid href,src attr rewriting)
function baseTagTest(){
	var fauxBase = location.protocol + '//' + location.host + location.pathname + "ui-dir/",
		base = $("head base"),
		fauxEle = null,
		href = '';
	if (!base.length) {
		base = fauxEle = $("<base>", {"href": fauxBase}).appendTo("head");
	}
	else {
		href = base.attr("href");
	}
	var link = $( "<a href='testurl'></a>" ).prependTo( fakeBody ),
		rebase = link[0].href;
	base[0].href = href ? href : location.pathname;
	if (fauxEle) {
		fauxEle.remove();
	}
	return rebase.indexOf(fauxBase) === 0;
};

$.extend( $.support, {
	orientation: "orientation" in window,
	touch: "ontouchend" in document,
	cssTransitions: "WebKitTransitionEvent" in window,
	pushState: !!history.pushState,
	mediaquery: $.mobile.media('only all'),
	cssPseudoElement: !!propExists('content'),
	boxShadow: !!propExists('boxShadow') && !bb,
	scrollTop: ("pageXOffset" in window || "scrollTop" in document.documentElement || "scrollTop" in fakeBody[0]) && !webos,
	dynamicBaseTag: baseTagTest()
});

fakeBody.remove();

//for ruling out shadows via css
if( !$.support.boxShadow ){ $('html').addClass('ui-mobile-nosupport-boxshadow'); }

})( jQuery );/*
* jQuery Mobile Framework : events
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {

// add new event shortcuts
$.each( "touchstart touchmove touchend orientationchange tap taphold swipe swipeleft swiperight scrollstart scrollstop".split( " " ), function( i, name ) {
	$.fn[ name ] = function( fn ) {
		return fn ? this.bind( name, fn ) : this.trigger( name );
	};
	$.attrFn[ name ] = true;
});

var supportTouch = $.support.touch,
	scrollEvent = "touchmove scroll",
	touchStartEvent = supportTouch ? "touchstart" : "mousedown",
	touchStopEvent = supportTouch ? "touchend" : "mouseup",
	touchMoveEvent = supportTouch ? "touchmove" : "mousemove";

// also handles scrollstop
$.event.special.scrollstart = {
	enabled: true,
	
	setup: function() {
		var thisObject = this,
			$this = $( thisObject ),
			scrolling,
			timer;
		
		function trigger( event, state ) {
			scrolling = state;
			var originalType = event.type;
			event.type = scrolling ? "scrollstart" : "scrollstop";
			$.event.handle.call( thisObject, event );
			event.type = originalType;
		}
		
		// iPhone triggers scroll after a small delay; use touchmove instead
		$this.bind( scrollEvent, function( event ) {
			if ( !$.event.special.scrollstart.enabled ) {
				return;
			}
			
			if ( !scrolling ) {
				trigger( event, true );
			}
			
			clearTimeout( timer );
			timer = setTimeout(function() {
				trigger( event, false );
			}, 50 );
		});
	}
};

// also handles taphold
$.event.special.tap = {
	setup: function() {
		var thisObject = this,
			$this = $( thisObject );
		
		$this
			.bind( "mousedown touchstart", function( event ) {
				if ( event.which && event.which !== 1 ||
					//check if event fired once already by a device that fires both mousedown and touchstart (while supporting both events)
					$this.data( "prevEvent") && $this.data( "prevEvent") !== event.type ) {
					return false;
				}
				
				//save event type so only this type is let through for a temp duration, 
				//allowing quick repetitive taps but not duplicative events 
				$this.data( "prevEvent", event.type );
				setTimeout(function(){
					$this.removeData( "prevEvent" );
				}, 800);
				
				var moved = false,
					touching = true,
					origTarget = event.target,
					origEvent = event.originalEvent,
					origPos = event.type == "touchstart" ? [origEvent.touches[0].pageX, origEvent.touches[0].pageY] : [ event.pageX, event.pageY ],
					originalType,
					timer;
					
				
				function moveHandler( event ) {
					if( event.type == "scroll" ){
						moved = true;
						return;
					}
					var newPageXY = event.type == "touchmove" ? event.originalEvent.touches[0] : event;
					if ((Math.abs(origPos[0] - newPageXY.pageX) > 10) ||
					    (Math.abs(origPos[1] - newPageXY.pageY) > 10)) {
					    moved = true;
					}
				}
				
				timer = setTimeout(function() {
					if ( touching && !moved ) {
						originalType = event.type;
						event.type = "taphold";
						$.event.handle.call( thisObject, event );
						event.type = originalType;
					}
				}, 750 );
				
				//scroll now cancels tap
				$(window).one("scroll", moveHandler);
				
				$this
					.bind( "mousemove touchmove", moveHandler )
					.one( "mouseup touchend", function( event ) {
						$this.unbind( "mousemove touchmove", moveHandler );
						$(window).unbind("scroll", moveHandler);
						clearTimeout( timer );
						touching = false;
						
						/* ONLY trigger a 'tap' event if the start target is
						 * the same as the stop target.
						 */
						if ( !moved && ( origTarget == event.target ) ) {
							originalType = event.type;
							event.type = "tap";
							$.event.handle.call( thisObject, event );
							event.type = originalType;
						}
					});
			});
	}
};

// also handles swipeleft, swiperight
$.event.special.swipe = {
	setup: function() {
		var thisObject = this,
			$this = $( thisObject );
		
		$this
			.bind( touchStartEvent, function( event ) {
				var data = event.originalEvent.touches ?
						event.originalEvent.touches[ 0 ] :
						event,
					start = {
						time: (new Date).getTime(),
						coords: [ data.pageX, data.pageY ],
						origin: $( event.target )
					},
					stop;
				
				function moveHandler( event ) {
					if ( !start ) {
						return;
					}
					
					var data = event.originalEvent.touches ?
							event.originalEvent.touches[ 0 ] :
							event;
					stop = {
							time: (new Date).getTime(),
							coords: [ data.pageX, data.pageY ]
					};
					
					// prevent scrolling
					if ( Math.abs( start.coords[0] - stop.coords[0] ) > 10 ) {
						event.preventDefault();
					}
				}
				
				$this
					.bind( touchMoveEvent, moveHandler )
					.one( touchStopEvent, function( event ) {
						$this.unbind( touchMoveEvent, moveHandler );
						if ( start && stop ) {
							if ( stop.time - start.time < 1000 && 
									Math.abs( start.coords[0] - stop.coords[0]) > 30 &&
									Math.abs( start.coords[1] - stop.coords[1]) < 75 ) {
								start.origin
								.trigger( "swipe" )
								.trigger( start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight" );
							}
						}
						start = stop = undefined;
					});
			});
	}
};

(function($){
	// "Cowboy" Ben Alman
	
	var win = $(window),
		special_event,
		get_orientation,
		last_orientation;
	
	$.event.special.orientationchange = special_event = {
		setup: function(){
			// If the event is supported natively, return false so that jQuery
			// will bind to the event using DOM methods.
			if ( $.support.orientation ) { return false; }
			
			// Get the current orientation to avoid initial double-triggering.
			last_orientation = get_orientation();
			
			// Because the orientationchange event doesn't exist, simulate the
			// event by testing window dimensions on resize.
			win.bind( "resize", handler );
		},
		teardown: function(){
			// If the event is not supported natively, return false so that
			// jQuery will unbind the event using DOM methods.
			if ( $.support.orientation ) { return false; }
			
			// Because the orientationchange event doesn't exist, unbind the
			// resize event handler.
			win.unbind( "resize", handler );
		},
		add: function( handleObj ) {
			// Save a reference to the bound event handler.
			var old_handler = handleObj.handler;
			
			handleObj.handler = function( event ) {
				// Modify event object, adding the .orientation property.
				event.orientation = get_orientation();
				
				// Call the originally-bound event handler and return its result.
				return old_handler.apply( this, arguments );
			};
		}
	};
	
	// If the event is not supported natively, this handler will be bound to
	// the window resize event to simulate the orientationchange event.
	function handler() {
		// Get the current orientation.
		var orientation = get_orientation();
		
		if ( orientation !== last_orientation ) {
			// The orientation has changed, so trigger the orientationchange event.
			last_orientation = orientation;
			win.trigger( "orientationchange" );
		}
	};
	
	// Get the current page orientation. This method is exposed publicly, should it
	// be needed, as jQuery.event.special.orientationchange.orientation()
	special_event.orientation = get_orientation = function() {
		var elem = document.documentElement;
		return elem && elem.clientWidth / elem.clientHeight < 1.1 ? "portrait" : "landscape";
	};
	
})(jQuery);

$.each({
	scrollstop: "scrollstart",
	taphold: "tap",
	swipeleft: "swipe",
	swiperight: "swipe"
}, function( event, sourceEvent ) {
	$.event.special[ event ] = {
		setup: function() {
			$( this ).bind( sourceEvent, $.noop );
		}
	};
});

})( jQuery );
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery hashchange event
//
// *Version: 1.3, Last updated: 7/21/2010*
// 
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
// 
// About: Known issues
// 
// While this jQuery hashchange event implementation is quite stable and
// robust, there are a few unfortunate browser bugs surrounding expected
// hashchange event-based behaviors, independent of any JavaScript
// window.onhashchange abstraction. See the following examples for more
// information:
// 
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
// 
// Also note that should a browser natively support the window.onhashchange 
// event, but not report that it does, the fallback polling loop will be used.
// 
// About: Release History
// 
// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more
//         "removable" for mobile-only development. Added IE6/7 document.title
//         support. Attempted to make Iframe as hidden as possible by using
//         techniques from http://www.paciellogroup.com/blog/?p=604. Added 
//         support for the "shortcut" format $(window).hashchange( fn ) and
//         $(window).hashchange() like jQuery provides for built-in events.
//         Renamed jQuery.hashchangeDelay to <jQuery.fn.hashchange.delay> and
//         lowered its default value to 50. Added <jQuery.fn.hashchange.domain>
//         and <jQuery.fn.hashchange.src> properties plus document-domain.html
//         file to address access denied issues when setting document.domain in
//         IE6/7.
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.

(function($,window,undefined){
  '$:nomunge'; // Used by YUI compressor.
  
  // Reused string.
  var str_hashchange = 'hashchange',
    
    // Method / object references.
    doc = document,
    fake_onhashchange,
    special = $.event.special,
    
    // Does the browser support window.onhashchange? Note that IE8 running in
    // IE7 compatibility mode reports true for 'onhashchange' in window, even
    // though the event isn't supported, so also test document.documentMode.
    doc_mode = doc.documentMode,
    supports_onhashchange = 'on' + str_hashchange in window && ( doc_mode === undefined || doc_mode > 7 );
  
  // Get location.hash (or what you'd expect location.hash to be) sans any
  // leading #. Thanks for making this necessary, Firefox!
  function get_fragment( url ) {
    url = url || location.href;
    return '#' + url.replace( /^[^#]*#?(.*)$/, '$1' );
  };
  
  // Method: jQuery.fn.hashchange
  // 
  // Bind a handler to the window.onhashchange event or trigger all bound
  // window.onhashchange event handlers. This behavior is consistent with
  // jQuery's built-in event handlers.
  // 
  // Usage:
  // 
  // > jQuery(window).hashchange( [ handler ] );
  // 
  // Arguments:
  // 
  //  handler - (Function) Optional handler to be bound to the hashchange
  //    event. This is a "shortcut" for the more verbose form:
  //    jQuery(window).bind( 'hashchange', handler ). If handler is omitted,
  //    all bound window.onhashchange event handlers will be triggered. This
  //    is a shortcut for the more verbose
  //    jQuery(window).trigger( 'hashchange' ). These forms are described in
  //    the <hashchange event> section.
  // 
  // Returns:
  // 
  //  (jQuery) The initial jQuery collection of elements.
  
  // Allow the "shortcut" format $(elem).hashchange( fn ) for binding and
  // $(elem).hashchange() for triggering, like jQuery does for built-in events.
  $.fn[ str_hashchange ] = function( fn ) {
    return fn ? this.bind( str_hashchange, fn ) : this.trigger( str_hashchange );
  };
  
  // Property: jQuery.fn.hashchange.delay
  // 
  // The numeric interval (in milliseconds) at which the <hashchange event>
  // polling loop executes. Defaults to 50.
  
  // Property: jQuery.fn.hashchange.domain
  // 
  // If you're setting document.domain in your JavaScript, and you want hash
  // history to work in IE6/7, not only must this property be set, but you must
  // also set document.domain BEFORE jQuery is loaded into the page. This
  // property is only applicable if you are supporting IE6/7 (or IE8 operating
  // in "IE7 compatibility" mode).
  // 
  // In addition, the <jQuery.fn.hashchange.src> property must be set to the
  // path of the included "document-domain.html" file, which can be renamed or
  // modified if necessary (note that the document.domain specified must be the
  // same in both your main JavaScript as well as in this file).
  // 
  // Usage:
  // 
  // jQuery.fn.hashchange.domain = document.domain;
  
  // Property: jQuery.fn.hashchange.src
  // 
  // If, for some reason, you need to specify an Iframe src file (for example,
  // when setting document.domain as in <jQuery.fn.hashchange.domain>), you can
  // do so using this property. Note that when using this property, history
  // won't be recorded in IE6/7 until the Iframe src file loads. This property
  // is only applicable if you are supporting IE6/7 (or IE8 operating in "IE7
  // compatibility" mode).
  // 
  // Usage:
  // 
  // jQuery.fn.hashchange.src = 'path/to/file.html';
  
  $.fn[ str_hashchange ].delay = 50;
  /*
  $.fn[ str_hashchange ].domain = null;
  $.fn[ str_hashchange ].src = null;
  */
  
  // Event: hashchange event
  // 
  // Fired when location.hash changes. In browsers that support it, the native
  // HTML5 window.onhashchange event is used, otherwise a polling loop is
  // initialized, running every <jQuery.fn.hashchange.delay> milliseconds to
  // see if the hash has changed. In IE6/7 (and IE8 operating in "IE7
  // compatibility" mode), a hidden Iframe is created to allow the back button
  // and hash-based history to work.
  // 
  // Usage as described in <jQuery.fn.hashchange>:
  // 
  // > // Bind an event handler.
  // > jQuery(window).hashchange( function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // > 
  // > // Manually trigger the event handler.
  // > jQuery(window).hashchange();
  // 
  // A more verbose usage that allows for event namespacing:
  // 
  // > // Bind an event handler.
  // > jQuery(window).bind( 'hashchange', function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // > 
  // > // Manually trigger the event handler.
  // > jQuery(window).trigger( 'hashchange' );
  // 
  // Additional Notes:
  // 
  // * The polling loop and Iframe are not created until at least one handler
  //   is actually bound to the 'hashchange' event.
  // * If you need the bound handler(s) to execute immediately, in cases where
  //   a location.hash exists on page load, via bookmark or page refresh for
  //   example, use jQuery(window).hashchange() or the more verbose 
  //   jQuery(window).trigger( 'hashchange' ).
  // * The event can be bound before DOM ready, but since it won't be usable
  //   before then in IE6/7 (due to the necessary Iframe), recommended usage is
  //   to bind it inside a DOM ready handler.
  
  // Override existing $.event.special.hashchange methods (allowing this plugin
  // to be defined after jQuery BBQ in BBQ's source code).
  special[ str_hashchange ] = $.extend( special[ str_hashchange ], {
    
    // Called only when the first 'hashchange' event is bound to window.
    setup: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }
      
      // Otherwise, we need to create our own. And we don't want to call this
      // until the user binds to the event, just in case they never do, since it
      // will create a polling loop and possibly even a hidden Iframe.
      $( fake_onhashchange.start );
    },
    
    // Called only when the last 'hashchange' event is unbound from window.
    teardown: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }
      
      // Otherwise, we need to stop ours (if possible).
      $( fake_onhashchange.stop );
    }
    
  });
  
  // fake_onhashchange does all the work of triggering the window.onhashchange
  // event for browsers that don't natively support it, including creating a
  // polling loop to watch for hash changes and in IE 6/7 creating a hidden
  // Iframe to enable back and forward.
  fake_onhashchange = (function(){
    var self = {},
      timeout_id,
      
      // Remember the initial hash so it doesn't get triggered immediately.
      last_hash = get_fragment(),
      
      fn_retval = function(val){ return val; },
      history_set = fn_retval,
      history_get = fn_retval;
    
    // Start the polling loop.
    self.start = function() {
      timeout_id || poll();
    };
    
    // Stop the polling loop.
    self.stop = function() {
      timeout_id && clearTimeout( timeout_id );
      timeout_id = undefined;
    };
    
    // This polling loop checks every $.fn.hashchange.delay milliseconds to see
    // if location.hash has changed, and triggers the 'hashchange' event on
    // window when necessary.
    function poll() {
      var hash = get_fragment(),
        history_hash = history_get( last_hash );
      
      if ( hash !== last_hash ) {
        history_set( last_hash = hash, history_hash );
        
        $(window).trigger( str_hashchange );
        
      } else if ( history_hash !== last_hash ) {
        location.href = location.href.replace( /#.*/, '' ) + history_hash;
      }
      
      timeout_id = setTimeout( poll, $.fn[ str_hashchange ].delay );
    };
    
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvv REMOVE IF NOT SUPPORTING IE6/7/8 vvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    $.browser.msie && !supports_onhashchange && (function(){
      // Not only do IE6/7 need the "magical" Iframe treatment, but so does IE8
      // when running in "IE7 compatibility" mode.
      
      var iframe,
        iframe_src;
      
      // When the event is bound and polling starts in IE 6/7, create a hidden
      // Iframe for history handling.
      self.start = function(){
        if ( !iframe ) {
          iframe_src = $.fn[ str_hashchange ].src;
          iframe_src = iframe_src && iframe_src + get_fragment();
          
          // Create hidden Iframe. Attempt to make Iframe as hidden as possible
          // by using techniques from http://www.paciellogroup.com/blog/?p=604.
          iframe = $('<iframe tabindex="-1" title="empty"/>').hide()
            
            // When Iframe has completely loaded, initialize the history and
            // start polling.
            .one( 'load', function(){
              iframe_src || history_set( get_fragment() );
              poll();
            })
            
            // Load Iframe src if specified, otherwise nothing.
            .attr( 'src', iframe_src || 'javascript:0' )
            
            // Append Iframe after the end of the body to prevent unnecessary
            // initial page scrolling (yes, this works).
            .insertAfter( 'body' )[0].contentWindow;
          
          // Whenever `document.title` changes, update the Iframe's title to
          // prettify the back/next history menu entries. Since IE sometimes
          // errors with "Unspecified error" the very first time this is set
          // (yes, very useful) wrap this with a try/catch block.
          doc.onpropertychange = function(){
            try {
              if ( event.propertyName === 'title' ) {
                iframe.document.title = doc.title;
              }
            } catch(e) {}
          };
          
        }
      };
      
      // Override the "stop" method since an IE6/7 Iframe was created. Even
      // if there are no longer any bound event handlers, the polling loop
      // is still necessary for back/next to work at all!
      self.stop = fn_retval;
      
      // Get history by looking at the hidden Iframe's location.hash.
      history_get = function() {
        return get_fragment( iframe.location.href );
      };
      
      // Set a new history item by opening and then closing the Iframe
      // document, *then* setting its location.hash. If document.domain has
      // been set, update that as well.
      history_set = function( hash, history_hash ) {
        var iframe_doc = iframe.document,
          domain = $.fn[ str_hashchange ].domain;
        
        if ( hash !== history_hash ) {
          // Update Iframe with any initial `document.title` that might be set.
          iframe_doc.title = doc.title;
          
          // Opening the Iframe's document after it has been closed is what
          // actually adds a history entry.
          iframe_doc.open();
          
          // Set document.domain for the Iframe document as well, if necessary.
          domain && iframe_doc.write( '<script>document.domain="' + domain + '"</script>' );
          
          iframe_doc.close();
          
          // Update the Iframe's hash, for great justice.
          iframe.location.hash = hash;
        }
      };
      
    })();
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^ REMOVE IF NOT SUPPORTING IE6/7/8 ^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    
    return self;
  })();
  
})(jQuery,this);
/*
* jQuery Mobile Framework : "page" plugin
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {

$.widget( "mobile.page", $.mobile.widget, {
	options: {
		backBtnText: "Back",
		addBackBtn: true,
		degradeInputs: {
			color: false,
			date: false,
			datetime: false,
			"datetime-local": false,
			email: false,
			month: false,
			number: false,
			range: "number",
			search: true,
			tel: false,
			time: false,
			url: false,
			week: false
		},
		keepNative: null
	},

	_create: function() {
		var $elem = this.element,
			o = this.options;	

		this.keepNative = "[data-role='none'], [data-role='nojs']" + (o.keepNative ? ", " + o.keepNative : "");

		if ( this._trigger( "beforeCreate" ) === false ) {
			return;
		}

		//some of the form elements currently rely on the presence of ui-page and ui-content
		// classes so we'll handle page and content roles outside of the main role processing
		// loop below.
		$elem.find( "[data-role='page'], [data-role='content']" ).andSelf().each(function() {
			$(this).addClass( "ui-" + $(this).data( "role" ) );
		});

		$elem.find( "[data-role='nojs']" ).addClass( "ui-nojs" );

		// pre-find data els
		var $dataEls = $elem.find( "[data-role]" ).andSelf().each(function() {
			var $this = $( this ),
				role = $this.data( "role" ),
				theme = $this.data( "theme" );

			//apply theming and markup modifications to page,header,content,footer
			if ( role === "header" || role === "footer" ) {
				$this.addClass( "ui-bar-" + (theme || $this.parent('[data-role=page]').data( "theme" ) || "a") );

				// add ARIA role
				$this.attr( "role", role === "header" ? "banner" : "contentinfo" );

				//right,left buttons
				var $headeranchors = $this.children( "a" ),
					leftbtn = $headeranchors.hasClass( "ui-btn-left" ),
					rightbtn = $headeranchors.hasClass( "ui-btn-right" );

				if ( !leftbtn ) {
					leftbtn = $headeranchors.eq( 0 ).not( ".ui-btn-right" ).addClass( "ui-btn-left" ).length;
				}

				if ( !rightbtn ) {
					rightbtn = $headeranchors.eq( 1 ).addClass( "ui-btn-right" ).length;
				}

				// auto-add back btn on pages beyond first view
				if ( o.addBackBtn && role === "header" &&
						$( ".ui-page" ).length > 1 &&
						$elem.data( "url" ) !== $.mobile.path.stripHash( location.hash ) &&
						!leftbtn && $this.data( "backbtn" ) !== false ) {

					$( "<a href='#' class='ui-btn-left' data-rel='back' data-icon='arrow-l'>"+ o.backBtnText +"</a>" ).prependTo( $this );
				}

				//page title
				$this.children( "h1, h2, h3, h4, h5, h6" )
					.addClass( "ui-title" )
					//regardless of h element number in src, it becomes h1 for the enhanced page
					.attr({ "tabindex": "0", "role": "heading", "aria-level": "1" });

			} else if ( role === "content" ) {
				if ( theme ) {
					$this.addClass( "ui-body-" + theme );
				}

				// add ARIA role
				$this.attr( "role", "main" );

			} else if ( role === "page" ) {
				$this.addClass( "ui-body-" + (theme || "c") );
			}

			switch(role) {
				case "header":
				case "footer":
				case "page":
				case "content":
					$this.addClass( "ui-" + role );
					break;
				case "collapsible":
				case "fieldcontain":
				case "navbar":
				case "listview":
				case "dialog":
					$this[ role ]();
					break;
			}
		});
		
		//enhance form controls
  	this._enhanceControls();

		//links in bars, or those with data-role become buttons
		$elem.find( "[data-role='button'], .ui-bar > a, .ui-header > a, .ui-footer > a" )
			.not( ".ui-btn" )
			.not(this.keepNative)
			.buttonMarkup();

		$elem
			.find("[data-role='controlgroup']")
			.controlgroup();

		//links within content areas
		$elem.find( "a:not(.ui-btn):not(.ui-link-inherit)" )
			.not(this.keepNative)
			.addClass( "ui-link" );

		//fix toolbars
		$elem.fixHeaderFooter();
	},

	_enhanceControls: function() {
		var o = this.options;

		// degrade inputs to avoid poorly implemented native functionality
		this.element.find( "input" ).not(this.keepNative).each(function() {
			var type = this.getAttribute( "type" ),
				optType = o.degradeInputs[ type ] || "text";

			if ( o.degradeInputs[ type ] ) {
				$( this ).replaceWith(
					$( "<div>" ).html( $(this).clone() ).html()
						.replace( /type="([a-zA-Z]+)"/, "type="+ optType +" data-type='$1'" ) );
			}
		});

		// We re-find form elements since the degredation code above
		// may have injected new elements. We cache the non-native control
		// query to reduce the number of times we search through the entire page.

		var allControls = this.element.find("input, textarea, select, button"),
			nonNativeControls = allControls.not(this.keepNative);

		// XXX: Temporary workaround for issue 785. Turn off autocorrect and
		//      autocomplete since the popup they use can't be dismissed by
		//      the user. Note that we test for the presence of the feature
		//      by looking for the autocorrect property on the input element.

		var textInputs = allControls.filter( "input[type=text]" );
		if (textInputs.length && typeof textInputs[0].autocorrect !== "undefined") {
			textInputs.each(function(){
				// Set the attribute instead of the property just in case there
				// is code that attempts to make modifications via HTML.
				this.setAttribute("autocorrect", "off");
				this.setAttribute("autocomplete", "off");
			});
		}

		// enchance form controls
		nonNativeControls
			.filter( "[type='radio'], [type='checkbox']" )
			.checkboxradio();

		nonNativeControls
			.filter( "button, [type='button'], [type='submit'], [type='reset'], [type='image']" )
			.button();

		nonNativeControls
			.filter( "input, textarea" )
			.not( "[type='radio'], [type='checkbox'], [type='button'], [type='submit'], [type='reset'], [type='image'], [type='hidden']" )
			.textinput();

		nonNativeControls
			.filter( "input, select" )
			.filter( "[data-role='slider'], [data-type='range']" )
			.slider();

		nonNativeControls
			.filter( "select:not([data-role='slider'])" )
			.selectmenu();
	}
});

})( jQuery );
/*!
 * jQuery Mobile v@VERSION
 * http://jquerymobile.com/
 *
 * Copyright 2010, jQuery Project
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */

(function( $, window, undefined ) {

	//jQuery.mobile configurable options
	$.extend( $.mobile, {

		//define the url parameter used for referencing widget-generated sub-pages.
		//Translates to to example.html&ui-page=subpageIdentifier
		//hash segment before &ui-page= is used to make Ajax request
		subPageUrlKey: "ui-page",

		//anchor links with a data-rel, or pages with a data-role, that match these selectors will be untrackable in history
		//(no change in URL, not bookmarkable)
		nonHistorySelectors: "dialog",

		//class assigned to page currently in view, and during transitions
		activePageClass: "ui-page-active",

		//class used for "active" button state, from CSS framework
		activeBtnClass: "ui-btn-active",

		//automatically handle clicks and form submissions through Ajax, when same-domain
		ajaxEnabled: true,

		//automatically load and show pages based on location.hash
		hashListeningEnabled: true,

		// TODO: deprecated - remove at 1.0
		//automatically handle link clicks through Ajax, when possible
		ajaxLinksEnabled: true,

		// TODO: deprecated - remove at 1.0
		//automatically handle form submissions through Ajax, when possible
		ajaxFormsEnabled: true,

		//set default transition - 'none' for no transitions
		defaultTransition: "slide",

		//show loading message during Ajax requests
		//if false, message will not appear, but loading classes will still be toggled on html el
		loadingMessage: "loading",

		//configure meta viewport tag's content attr:
		metaViewportContent: "width=device-width, minimum-scale=1, maximum-scale=1",

		//support conditions that must be met in order to proceed
		gradeA: function(){
			return $.support.mediaquery;
		},

		//automatically initialize first pages or not.
		autoInitialize: true,

		//TODO might be useful upstream in jquery itself ?
		keyCode: {
			ALT: 18,
			BACKSPACE: 8,
			CAPS_LOCK: 20,
			COMMA: 188,
			COMMAND: 91,
			COMMAND_LEFT: 91, // COMMAND
			COMMAND_RIGHT: 93,
			CONTROL: 17,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			INSERT: 45,
			LEFT: 37,
			MENU: 93, // COMMAND_RIGHT
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SHIFT: 16,
			SPACE: 32,
			TAB: 9,
			UP: 38,
			WINDOWS: 91 // COMMAND
		}
	});


	//trigger mobileinit event - useful hook for configuring $.mobile settings before they're used
	$( window.document ).trigger( "mobileinit" );


	//support conditions
	//if device support condition(s) aren't met, leave things as they are -> a basic, usable experience,
	//otherwise, proceed with the enhancements
	if ( !$.mobile.gradeA() ) {
		return;
	}


	//define vars for interal use
	var $window = $(window),
		$html = $( "html" ),
		$head = $( "head" ),

		//loading div which appears during Ajax requests
		//will not appear if $.mobile.loadingMessage is false
		$loader = $.mobile.loadingMessage ?
			$( "<div class='ui-loader ui-body-a ui-corner-all'>" +
						"<span class='ui-icon ui-icon-loading spin'></span>" +
						"<h1>" + $.mobile.loadingMessage + "</h1>" +
					"</div>" )
			: undefined;


	//add mobile, initial load "rendering" classes to docEl
	$html.addClass( "ui-mobile ui-mobile-rendering" );


	//define & prepend meta viewport tag, if content is defined
	$.mobile.metaViewportContent ? $( "<meta>", { name: "viewport", content: $.mobile.metaViewportContent}).prependTo( $head ) : undefined;


	//expose some core utilities
	$.extend($.mobile, {

		// turn on/off page loading message.
		pageLoading: function ( done ) {
			if ( done ) {
				$html.removeClass( "ui-loading" );
			} else {
				if( $.mobile.loadingMessage ){
					var activeBtn =$( "." + $.mobile.activeBtnClass ).first();

					$loader
						.appendTo( $.mobile.pageContainer )
						//position at y center (if scrollTop supported), above the activeBtn (if defined), or just 100px from top
						.css( {
							top: $.support.scrollTop && $(window).scrollTop() + $(window).height() / 2 ||
							activeBtn.length && activeBtn.offset().top || 100
						} );
				}

				$html.addClass( "ui-loading" );
			}
		},

		//scroll page vertically: scroll to 0 to hide iOS address bar, or pass a Y value
		silentScroll: function( ypos ) {
			ypos = ypos || 0;
			// prevent scrollstart and scrollstop events
			$.event.special.scrollstart.enabled = false;

			setTimeout(function() {
				window.scrollTo( 0, ypos );
				$(document).trigger( "silentscroll", { x: 0, y: ypos });
			},20);

			setTimeout(function() {
				$.event.special.scrollstart.enabled = true;
			}, 150 );
		},

		// find and enhance the pages in the dom and transition to the first page.
		initializePage: function(){
			//find present pages
			var $pages = $( "[data-role='page']" );

			//add dialogs, set data-url attrs
			$pages.add( "[data-role='dialog']" ).each(function(){
				$(this).attr( "data-url", $(this).attr( "id" ));
			});

			//define first page in dom case one backs out to the directory root (not always the first page visited, but defined as fallback)
			$.mobile.firstPage = $pages.first();

			//define page container
			$.mobile.pageContainer = $pages.first().parent().addClass( "ui-mobile-viewport" );

			//cue page loading message
			$.mobile.pageLoading();

			// if hashchange listening is disabled or there's no hash deeplink, change to the first page in the DOM
			if( !$.mobile.hashListeningEnabled || !$.mobile.path.stripHash( location.hash ) ){
				$.mobile.changePage( $.mobile.firstPage, false, true, false, true );
			}
			// otherwise, trigger a hashchange to load a deeplink
			else {
				$window.trigger( "hashchange", [ true ] );
			}
		}
	});

	//dom-ready inits
	if($.mobile.autoInitialize){
		$($.mobile.initializePage);
	}


	//window load event
	//hide iOS browser chrome on load
	$window.load( $.mobile.silentScroll );

})( jQuery, this );
/*
* jQuery Mobile Framework : core utilities for auto ajax navigation, base tag mgmt,
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {

	//define vars for interal use
	var $window = $(window),
		$html = $('html'),
		$head = $('head'),

		//url path helpers for use in relative url management
		path = {

			//get path from current hash, or from a file path
			get: function( newPath ){
				if( newPath == undefined ){
					newPath = location.hash;
				}
				return path.stripHash( newPath ).replace(/[^\/]*\.[^\/*]+$/, '');
			},

			//return the substring of a filepath before the sub-page key, for making a server request
			getFilePath: function( path ){
				var splitkey = '&' + $.mobile.subPageUrlKey;
				return path && path.split( splitkey )[0].split( dialogHashKey )[0];
			},

			//set location hash to path
			set: function( path ){
				location.hash = path;
			},

			//location pathname from intial directory request
			origin: '',

			setOrigin: function(){
				path.origin = path.get( location.protocol + '//' + location.host + location.pathname );
			},

			//prefix a relative url with the current path
			makeAbsolute: function( url ){
				return path.get() + url;
			},

			//return a url path with the window's location protocol/hostname removed
			clean: function( url ){
				return url.replace( location.protocol + "//" + location.host, "");
			},

			//just return the url without an initial #
			stripHash: function( url ){
				return url.replace( /^#/, "" );
			},

			//check whether a url is referencing the same domain, or an external domain or different protocol
			//could be mailto, etc
			isExternal: function( url ){
				return path.hasProtocol( path.clean( url ) );
			},

			hasProtocol: function( url ){
				return /^(:?\w+:)/.test( url );
			},

			//check if the url is relative
			isRelative: function( url ){
				return  /^[^\/|#]/.test( url ) && !path.hasProtocol( url );
			},

			isEmbeddedPage: function( url ){
				return /^#/.test( url );
			}
		},

		//will be defined when a link is clicked and given an active class
		$activeClickedLink = null,

		//urlHistory is purely here to make guesses at whether the back or forward button was clicked
		//and provide an appropriate transition
		urlHistory = {
			//array of pages that are visited during a single page load. each has a url and optional transition
			stack: [],

			//maintain an index number for the active page in the stack
			activeIndex: 0,

			//get active
			getActive: function(){
				return urlHistory.stack[ urlHistory.activeIndex ];
			},

			getPrev: function(){
				return urlHistory.stack[ urlHistory.activeIndex - 1 ];
			},

			getNext: function(){
				return urlHistory.stack[ urlHistory.activeIndex + 1 ];
			},

			// addNew is used whenever a new page is added
			addNew: function( url, transition ){
				//if there's forward history, wipe it
				if( urlHistory.getNext() ){
					urlHistory.clearForward();
				}

				urlHistory.stack.push( {url : url, transition: transition } );

				urlHistory.activeIndex = urlHistory.stack.length - 1;
			},

			//wipe urls ahead of active index
			clearForward: function(){
				urlHistory.stack = urlHistory.stack.slice( 0, urlHistory.activeIndex + 1 );
			},
			
			//disable hashchange event listener internally to ignore one change
			//toggled internally when location.hash is updated to match the url of a successful page load
			ignoreNextHashChange: true
		},

		//define first selector to receive focus when a page is shown
		focusable = "[tabindex],a,button:visible,select:visible,input",

		//contains role for next page, if defined on clicked link via data-rel
		nextPageRole = null,

		//queue to hold simultanious page transitions
		pageTransitionQueue = [],

		// indicates whether or not page is in process of transitioning
		isPageTransitioning = false,

		//nonsense hash change key for dialogs, so they create a history entry
		dialogHashKey = "&ui-state=dialog";

		//existing base tag?
		var $base = $head.children("base"),
			hostURL = location.protocol + '//' + location.host,
			docLocation = path.get( hostURL + location.pathname ),
			docBase = docLocation;

		if ($base.length){
			var href = $base.attr("href");
			if (href){
				if (href.search(/^[^:/]+:\/\/[^/]+\/?/) == -1){
					//the href is not absolute, we need to turn it into one
					//so that we can turn paths stored in our location hash into
					//relative paths.
					if (href.charAt(0) == '/'){
						//site relative url
						docBase = hostURL + href;
					}
					else {
						//the href is a document relative url
						docBase = docLocation + href;
						//XXX: we need some code here to calculate the final path
						// just in case the docBase contains up-level (../) references.
					}
				}
				else {
					//the href is an absolute url
					docBase = href;
				}
			}
			//make sure docBase ends with a slash
			docBase = docBase  + (docBase.charAt(docBase.length - 1) == '/' ? ' ' : '/');
		}

		//base element management, defined depending on dynamic base tag support
		base = $.support.dynamicBaseTag ? {

			//define base element, for use in routing asset urls that are referenced in Ajax-requested markup
			element: ($base.length ? $base : $("<base>", { href: docBase }).prependTo( $head )),

			//set the generated BASE element's href attribute to a new page's base path
			set: function( href ){
				base.element.attr('href', docBase + path.get( href ));
			},

			//set the generated BASE element's href attribute to a new page's base path
			reset: function(){
				base.element.attr('href', docBase );
			}

		} : undefined;



		//set location pathname from intial directory request
		path.setOrigin();

/*
	internal utility functions
--------------------------------------*/


	//direct focus to the page title, or otherwise first focusable element
	function reFocus( page ){
		var pageTitle = page.find( ".ui-title:eq(0)" );
		if( pageTitle.length ){
			pageTitle.focus();
		}
		else{
			page.find( focusable ).eq(0).focus();
		}
	};

	//remove active classes after page transition or error
	function removeActiveLinkClass( forceRemoval ){
		if( !!$activeClickedLink && (!$activeClickedLink.closest( '.ui-page-active' ).length || forceRemoval )){
			$activeClickedLink.removeClass( $.mobile.activeBtnClass );
		}
		$activeClickedLink = null;
	};

	//animation complete callback
	$.fn.animationComplete = function( callback ){
		if($.support.cssTransitions){
			return $(this).one('webkitAnimationEnd', callback);
		}
		else{
			// defer execution for consistency between webkit/non webkit
			setTimeout(callback, 0);
		}
	};



/* exposed $.mobile methods	 */

	//update location.hash, with or without triggering hashchange event
	//TODO - deprecate this one at 1.0
	$.mobile.updateHash = path.set;

	//expose path object on $.mobile
	$.mobile.path = path;

	//expose base object on $.mobile
	$.mobile.base = base;

	//url stack, useful when plugins need to be aware of previous pages viewed
	//TODO: deprecate this one at 1.0
	$.mobile.urlstack = urlHistory.stack;

	//history stack
	$.mobile.urlHistory = urlHistory;

	// changepage function
	// TODO : consider moving args to an object hash
	$.mobile.changePage = function( to, transition, reverse, changeHash, fromHashChange ){
		//from is always the currently viewed page
		var toIsArray = $.type(to) === "array",
			toIsObject = $.type(to) === "object",
			from = toIsArray ? to[0] : $.mobile.activePage,
			to = toIsArray ? to[1] : to,
			url = fileUrl = $.type(to) === "string" ? path.stripHash( to ) : "",
			data = undefined,
			type = 'get',
			isFormRequest = false,
			duplicateCachedPage = null,
			currPage = urlHistory.getActive(),
			back = false,
			forward = false;


		// If we are trying to transition to the same page that we are currently on ignore the request.
		// an illegal same page request is defined by the current page being the same as the url, as long as there's history
		// and to is not an array or object (those are allowed to be "same")
		if( currPage && urlHistory.stack.length > 1 && currPage.url === url && !toIsArray && !toIsObject ) {
			return;
		}
		else if(isPageTransitioning) {
			pageTransitionQueue.unshift(arguments);
			return;
		}
		
		isPageTransitioning = true;

		// if the changePage was sent from a hashChange event
		// guess if it came from the history menu
		if( fromHashChange ){

			// check if url is in history and if it's ahead or behind current page
			$.each( urlHistory.stack, function( i ){
				//if the url is in the stack, it's a forward or a back
				if( this.url == url ){
					urlIndex = i;
					//define back and forward by whether url is older or newer than current page
					back = i < urlHistory.activeIndex;
					//forward set to opposite of back
					forward = !back;
					//reset activeIndex to this one
					urlHistory.activeIndex = i;
				}
			});

			//if it's a back, use reverse animation
			if( back ){
				reverse = true;
				transition = transition || currPage.transition;
			}
			else if ( forward ){
				transition = transition || urlHistory.getActive().transition;
			}
		}


		if( toIsObject && to.url ){
			url = to.url,
			data = to.data,
			type = to.type,
			isFormRequest = true;
			//make get requests bookmarkable
			if( data && type == 'get' ){
				if($.type( data ) == "object" ){
					data = $.param(data);
				}

				url += "?" + data;
				data = undefined;
			}
		}

		//reset base to pathname for new request
		if(base){ base.reset(); }

		//kill the keyboard
		$( window.document.activeElement ).add( "input:focus, textarea:focus, select:focus" ).blur();

		function defaultTransition(){
			if(transition === undefined){
				transition = $.mobile.defaultTransition;
			}
		}

		//function for transitioning between two existing pages
		function transitionPages() {
		    $.mobile.silentScroll();

			//get current scroll distance
			var currScroll = $window.scrollTop(),
					perspectiveTransitions = [ "flip" ],
					pageContainerClasses = [];

			//support deep-links to generated sub-pages
			if( url.indexOf( "&" + $.mobile.subPageUrlKey ) > -1 ){
				to = $( "[data-url='" + url + "']" );
			}
			
			if( from ){
				//set as data for returning to that spot
				from.data( "lastScroll", currScroll);
				//trigger before show/hide events
				from.data( "page" )._trigger( "beforehide", { nextPage: to } );
			}	
			to.data( "page" )._trigger( "beforeshow", { prevPage: from || $("") } );

			function loadComplete(){

				if( changeHash !== false && url ){
					//disable hash listening temporarily
					urlHistory.ignoreNextHashChange = false;
					//update hash and history
					path.set( url );
				}

				//add page to history stack if it's not back or forward
				if( !back && !forward ){
					urlHistory.addNew( url, transition );
				}

				removeActiveLinkClass();

				//jump to top or prev scroll, sometimes on iOS the page has not rendered yet.  I could only get by this with a setTimeout, but would like to avoid that.
				$.mobile.silentScroll( to.data( "lastScroll" ) ); 

				reFocus( to );

				//trigger show/hide events
				if( from ){
					from.data( "page" )._trigger( "hide", null, { nextPage: to } );
				}
				//trigger pageshow, define prevPage as either from or empty jQuery obj
				to.data( "page" )._trigger( "show", null, { prevPage: from || $("") } );
				
				//set "to" as activePage
				$.mobile.activePage = to;

				//if there's a duplicateCachedPage, remove it from the DOM now that it's hidden
				if (duplicateCachedPage != null) {
				    duplicateCachedPage.remove();
				}
				
				//remove initial build class (only present on first pageshow)
				$html.removeClass( "ui-mobile-rendering" );

				isPageTransitioning = false
				if(pageTransitionQueue.length>0) {
					$.mobile.changePage.apply($.mobile, pageTransitionQueue.pop());
				}
			};

			function addContainerClass(className){
				$.mobile.pageContainer.addClass(className);
				pageContainerClasses.push(className);
			};

			function removeContainerClasses(){
				$.mobile
					.pageContainer
					.removeClass(pageContainerClasses.join(" "));

				pageContainerClasses = [];
			};



			if(transition && (transition !== 'none')){
			    $.mobile.pageLoading( true );
				if( $.inArray(transition, perspectiveTransitions) >= 0 ){
					addContainerClass('ui-mobile-viewport-perspective');
				}

				addContainerClass('ui-mobile-viewport-transitioning');

				if( from ){
					from.addClass( transition + " out " + ( reverse ? "reverse" : "" ) );
				}
				to.addClass( $.mobile.activePageClass + " " + transition +
					" in " + ( reverse ? "reverse" : "" ) );

				// callback - remove classes, etc
				to.animationComplete(function() {
					from.add( to ).removeClass("out in reverse " + transition );
					if( from ){
						from.removeClass( $.mobile.activePageClass );
					}	
					loadComplete();
					removeContainerClasses();
				});
			}
			else{
			    $.mobile.pageLoading( true );
			    if( from ){
					from.removeClass( $.mobile.activePageClass );
				}	
				to.addClass( $.mobile.activePageClass );
				loadComplete();
			}
		};

		//shared page enhancements
		function enhancePage(){

			//set next page role, if defined
			if ( nextPageRole || to.data('role') == 'dialog' ) {
				url = urlHistory.getActive().url + dialogHashKey;
				if(nextPageRole){
					to.attr( "data-role", nextPageRole );
					nextPageRole = null;
				}
			}

			//run page plugin
			to.page();
		};

		//if url is a string
		if( url ){
			to = $( "[data-url='" + url + "']" );
			fileUrl = path.getFilePath(url);
		}
		else{ //find base url of element, if avail
			var toID = to.attr('data-url'),
				toIDfileurl = path.getFilePath(toID);

			if(toID != toIDfileurl){
				fileUrl = toIDfileurl;
			}
		}

		// ensure a transition has been set where pop is undefined
		defaultTransition();

		// find the "to" page, either locally existing in the dom or by creating it through ajax
		if ( to.length && !isFormRequest ) {
			if( fileUrl && base ){
				base.set( fileUrl );
			}			
			enhancePage();
			transitionPages();
		} else {

			//if to exists in DOM, save a reference to it in duplicateCachedPage for removal after page change
			if( to.length ){
				duplicateCachedPage = to;
			}

			$.mobile.pageLoading();

			$.ajax({
				url: fileUrl,
				type: type,
				data: data,
				success: function( html ) {

					//pre-parse html to check for a data-url,
					//use it as the new fileUrl, base path, etc
					var redirectLoc = / data-url="(.*)"/.test( html ) && RegExp.$1;

					if( redirectLoc ){
						if(base){
							base.set( redirectLoc );
						}
						url = fileUrl = path.getFilePath( redirectLoc );
					}
					else {
						if(base){
							base.set(fileUrl);
						}
					}

					var all = $("<div></div>");
					//workaround to allow scripts to execute when included in page divs
					all.get(0).innerHTML = html;
					to = all.find('[data-role="page"], [data-role="dialog"]').first();

					//rewrite src and href attrs to use a base url
					if( !$.support.dynamicBaseTag ){
						var newPath = path.get( fileUrl );
						to.find('[src],link[href]').each(function(){
							var thisAttr = $(this).is('[href]') ? 'href' : 'src',
								thisUrl = $(this).attr(thisAttr);

							//if full path exists and is same, chop it - helps IE out
							thisUrl.replace( location.protocol + '//' + location.host + location.pathname, '' );

							if( !/^(\w+:|#|\/)/.test(thisUrl) ){
								$(this).attr(thisAttr, newPath + thisUrl);
							}
						});
					}

					//append to page and enhance
					to
						.attr( "data-url", fileUrl )
						.appendTo( $.mobile.pageContainer );

					enhancePage();
					setTimeout(function() { transitionPages() }, 0);
				},
				error: function() {
					$.mobile.pageLoading( true );
					removeActiveLinkClass(true);
					if(base){
						base.set(path.get());
					}
					$("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h1>Error Loading Page</h1></div>")
						.css({ "display": "block", "opacity": 0.96, "top": $(window).scrollTop() + 100 })
						.appendTo( $.mobile.pageContainer )
						.delay( 800 )
						.fadeOut( 400, function(){
							$(this).remove();
						});
				}
			});
		}

	};


/* Event Bindings - hashchange, submit, and click */

	//bind to form submit events, handle with Ajax
	$( "form[data-ajax!='false']" ).live('submit', function(event){
		if( !$.mobile.ajaxEnabled ||
			//TODO: deprecated - remove at 1.0
			!$.mobile.ajaxFormsEnabled ){ return; }

		var type = $(this).attr("method"),
			url = path.clean( $(this).attr( "action" ) );

		//external submits use regular HTTP
		if( path.isExternal( url ) ){
			return;
		}

		//if it's a relative href, prefix href with base url
		if( path.isRelative( url ) ){
			url = path.makeAbsolute( url );
		}

		$.mobile.changePage({
				url: url,
				type: type,
				data: $(this).serialize()
			},
			undefined,
			undefined,
			true
		);
		event.preventDefault();
	});


	//click routing - direct to HTTP or Ajax, accordingly
	$( "a" ).live( "click", function(event) {

		var $this = $(this),
		
			//get href, if defined, otherwise fall to null #
			href = $this.attr( "href" ) || "#",
			
			//get href, remove same-domain protocol and host
			url = path.clean( href ),

			//rel set to external
			isRelExternal = $this.is( "[rel='external']" ),

			//rel set to external
			isEmbeddedPage = path.isEmbeddedPage( url ),

			//check for protocol or rel and its not an embedded page
			//TODO overlap in logic from isExternal, rel=external check should be
			//     moved into more comprehensive isExternalLink
			isExternal = path.isExternal( url ) || isRelExternal && !isEmbeddedPage,

			//if target attr is specified we mimic _blank... for now
			hasTarget = $this.is( "[target]" ),

			//if data-ajax attr is set to false, use the default behavior of a link
			hasAjaxDisabled = $this.is( "[data-ajax='false']" );

		//if there's a data-rel=back attr, go back in history
		if( $this.is( "[data-rel='back']" ) ){
			window.history.back();
			return false;
		}

		if( url === "#" ){
			//for links created purely for interaction - ignore
			return false;
		}

		$activeClickedLink = $this.closest( ".ui-btn" ).addClass( $.mobile.activeBtnClass );

		if( isExternal || hasAjaxDisabled || hasTarget || !$.mobile.ajaxEnabled ||
			// TODO: deprecated - remove at 1.0
			!$.mobile.ajaxLinksEnabled ){
			//remove active link class if external (then it won't be there if you come back)
			removeActiveLinkClass(true);

			//deliberately redirect, in case click was triggered
			if( hasTarget ){
				window.open( url );
			}
			else if( hasAjaxDisabled ){
			  return;
			}
			else{
				location.href = url;
			}
		}
		else {
			//use ajax
			var transition = $this.data( "transition" ),
				direction = $this.data("direction"),
				reverse = direction && direction == "reverse" ||
				// deprecated - remove by 1.0
				$this.data( "back" );

			//this may need to be more specific as we use data-rel more
			nextPageRole = $this.attr( "data-rel" );

			//if it's a relative href, prefix href with base url
			if( path.isRelative( url ) ){
				url = path.makeAbsolute( url );
			}

			url = path.stripHash( url );

			$.mobile.changePage( url, transition, reverse);
		}
		event.preventDefault();
	});


	//hashchange event handler
	$window.bind( "hashchange", function( e, triggered ) {
		//find first page via hash
		var to = path.stripHash( location.hash ),
			//transition is false if it's the first page, undefined otherwise (and may be overridden by default)
			transition = $.mobile.urlHistory.stack.length === 0 ? false : undefined;
			
		//if listening is disabled (either globally or temporarily), or it's a dialog hash
		if( !$.mobile.hashListeningEnabled || !urlHistory.ignoreNextHashChange ||
				urlHistory.stack.length > 1 && to.indexOf( dialogHashKey ) > -1 && !$.mobile.activePage.is( ".ui-dialog" )
		){
			if( !urlHistory.ignoreNextHashChange ){
				urlHistory.ignoreNextHashChange = true;
			}
			return;
		}

		//if to is defined, load it
		if ( to ){
			$.mobile.changePage( to, transition, undefined, false, true );
		}
		//there's no hash, go to the first page in the dom
		else {
			$.mobile.changePage( $.mobile.firstPage, transition, true, false, true );
		}
	});
})( jQuery );
/*
* jQuery Mobile Framework : "fixHeaderFooter" plugin - on-demand positioning for headers,footers
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {
$.fn.fixHeaderFooter = function(options){
	if( !$.support.scrollTop ){ return this; }
	
	return this.each(function(){
		var $this = $(this);
		
		if( $this.data('fullscreen') ){ $this.addClass('ui-page-fullscreen'); }
		$this.find('.ui-header[data-position="fixed"]').addClass('ui-header-fixed ui-fixed-inline fade'); //should be slidedown
		$this.find('.ui-footer[data-position="fixed"]').addClass('ui-footer-fixed ui-fixed-inline fade'); //should be slideup		
	});
};

//single controller for all showing,hiding,toggling		
$.fixedToolbars = (function(){
	if( !$.support.scrollTop ){ return; }
	var currentstate = 'inline',
		autoHideMode = false,
		showDelay = 100,
		delayTimer,
		ignoreTargets = 'a,input,textarea,select,button,label,.ui-header-fixed,.ui-footer-fixed',
		toolbarSelector = '.ui-header-fixed:first, .ui-footer-fixed:not(.ui-footer-duplicate):last',
		stickyFooter, //for storing quick references to duplicate footers
		supportTouch = $.support.touch,
		touchStartEvent = supportTouch ? "touchstart" : "mousedown",
		touchStopEvent = supportTouch ? "touchend" : "mouseup",
		stateBefore = null,
		scrollTriggered = false,
        touchToggleEnabled = true;

	function showEventCallback(event)
	{
		// An event that affects the dimensions of the visual viewport has
		// been triggered. If the header and/or footer for the current page are in overlay
		// mode, we want to hide them, and then fire off a timer to show them at a later
		// point. Events like a resize can be triggered continuously during a scroll, on
		// some platforms, so the timer is used to delay the actual positioning until the
		// flood of events have subsided.
		//
		// If we are in autoHideMode, we don't do anything because we know the scroll
		// callbacks for the plugin will fire off a show when the scrolling has stopped.
		if (!autoHideMode && currentstate == 'overlay') {
			if (!delayTimer)
				$.fixedToolbars.hide(true);
			$.fixedToolbars.startShowTimer();
		}
	}

	$(function() {
		$(document)
			.bind(touchStartEvent,function(event){
				if( touchToggleEnabled ) {
					if( $(event.target).closest(ignoreTargets).length ){ return; }
					stateBefore = currentstate;
				}
			})
			.bind(touchStopEvent,function(event){
				if( touchToggleEnabled ) {
					if( $(event.target).closest(ignoreTargets).length ){ return; }
					if( !scrollTriggered ){
						$.fixedToolbars.toggle(stateBefore);
						stateBefore = null;
					}
				}
			})
			.bind('scrollstart',function(event){
				if( $(event.target).closest(ignoreTargets).length ){ return; } //because it could be a touchmove...
				scrollTriggered = true;
				if(stateBefore == null){ stateBefore = currentstate; }

				// We only enter autoHideMode if the headers/footers are in
				// an overlay state or the show timer was started. If the
				// show timer is set, clear it so the headers/footers don't
				// show up until after we're done scrolling.
				var isOverlayState = stateBefore == 'overlay';
				autoHideMode = isOverlayState || !!delayTimer;
				if (autoHideMode){
					$.fixedToolbars.clearShowTimer();
					if (isOverlayState) {
						$.fixedToolbars.hide(true);
					}
				}
			})
			.bind('scrollstop',function(event){
				if( $(event.target).closest(ignoreTargets).length ){ return; }
				scrollTriggered = false;
				if (autoHideMode) {
					autoHideMode = false;
					$.fixedToolbars.startShowTimer();
				}
				stateBefore = null;
			})
			.bind('silentscroll', showEventCallback);

			$(window).bind('resize', showEventCallback);
	});
		
	//before page is shown, check for duplicate footer
	$('.ui-page').live('pagebeforeshow', function(event, ui){
		var page = $(event.target),
			footer = page.find('[data-role="footer"]:not(.ui-sticky-footer)'),
			id = footer.data('id');
		stickyFooter = null;
		if (id)
		{
			stickyFooter = $('.ui-footer[data-id="' + id + '"].ui-sticky-footer');
			if (stickyFooter.length == 0) {
				// No sticky footer exists for this data-id. We'll use this
				// footer as the sticky footer for the group and then create
				// a placeholder footer for the page.
				stickyFooter = footer;
				footer = stickyFooter.clone(); // footer placeholder
				stickyFooter.addClass('ui-sticky-footer').before(footer);
			}
			footer.addClass('ui-footer-duplicate');
			stickyFooter.appendTo($.pageContainer).css('top',0);
			setTop(stickyFooter);
		}
	});

	//after page is shown, append footer to new page
	$('.ui-page').live('pageshow', function(event, ui){
		if( stickyFooter && stickyFooter.length ){
			stickyFooter.appendTo(event.target).css('top',0);
		}
		$.fixedToolbars.show(true, this);
	});
		
	
	// element.getBoundingClientRect() is broken in iOS 3.2.1 on the iPad. The
	// coordinates inside of the rect it returns don't have the page scroll position
	// factored out of it like the other platforms do. To get around this,
	// we'll just calculate the top offset the old fashioned way until core has
	// a chance to figure out how to handle this situation.
	//
	// TODO: We'll need to get rid of getOffsetTop() once a fix gets folded into core.

	function getOffsetTop(ele)
	{
		var top = 0;
		if (ele)
		{
			var op = ele.offsetParent, body = document.body;
			top = ele.offsetTop;
			while (ele && ele != body)
			{
				top += ele.scrollTop || 0;
				if (ele == op)
				{
					top += op.offsetTop;
					op = ele.offsetParent;
				}
				ele = ele.parentNode;
			}
		}
		return top;
	}

	function setTop(el){
		var fromTop = $(window).scrollTop(),
			thisTop = getOffsetTop(el[0]), // el.offset().top returns the wrong value on iPad iOS 3.2.1, call our workaround instead.
			thisCSStop = el.css('top') == 'auto' ? 0 : parseFloat(el.css('top')),
			screenHeight = window.innerHeight,
			thisHeight = el.outerHeight(),
			useRelative = el.parents('.ui-page:not(.ui-page-fullscreen)').length,
			relval;
		if( el.is('.ui-header-fixed') ){
			relval = fromTop - thisTop + thisCSStop;
			if( relval < thisTop){ relval = 0; }
			return el.css('top', ( useRelative ) ? relval : fromTop);
		}
		else{
			//relval = -1 * (thisTop - (fromTop + screenHeight) + thisCSStop + thisHeight);
			//if( relval > thisTop ){ relval = 0; }
			relval = fromTop + screenHeight - thisHeight - (thisTop - thisCSStop);
			return el.css('top', ( useRelative ) ? relval : fromTop + screenHeight - thisHeight );
		}
	}

	//exposed methods
	return {
		show: function(immediately, page){
			$.fixedToolbars.clearShowTimer();
			currentstate = 'overlay';
			var $ap = page ? $(page) : ($.mobile.activePage ? $.mobile.activePage : $(".ui-page-active"));
			return $ap.children( toolbarSelector ).each(function(){
				var el = $(this),
					fromTop = $(window).scrollTop(),
					thisTop = getOffsetTop(el[0]), // el.offset().top returns the wrong value on iPad iOS 3.2.1, call our workaround instead.
					screenHeight = window.innerHeight,
					thisHeight = el.outerHeight(),
					alreadyVisible = (el.is('.ui-header-fixed') && fromTop <= thisTop + thisHeight) || (el.is('.ui-footer-fixed') && thisTop <= fromTop + screenHeight);	
				
				//add state class
				el.addClass('ui-fixed-overlay').removeClass('ui-fixed-inline');	
					
				if( !alreadyVisible && !immediately ){
					el.animationComplete(function(){
						el.removeClass('in');
					}).addClass('in');
				}
				setTop(el);
			});	
		},
		hide: function(immediately){
			currentstate = 'inline';
			var $ap = $.mobile.activePage ? $.mobile.activePage : $(".ui-page-active");
			return $ap.children( toolbarSelector ).each(function(){
				var el = $(this);

				var thisCSStop = el.css('top'); thisCSStop = thisCSStop == 'auto' ? 0 : parseFloat(thisCSStop);
				
				//add state class
				el.addClass('ui-fixed-inline').removeClass('ui-fixed-overlay');
				
				if (thisCSStop < 0 || (el.is('.ui-header-fixed') && thisCSStop != 0))
				{
					if(immediately){
						el.css('top',0);
					}
					else{
						if( el.css('top') !== 'auto' && parseFloat(el.css('top')) !== 0 ){
							var classes = 'out reverse';
							el.animationComplete(function(){
								el.removeClass(classes);
								el.css('top',0);
							}).addClass(classes);	
						}
					}
				}
			});
		},
		startShowTimer: function(){
			$.fixedToolbars.clearShowTimer();
			var args = $.makeArray(arguments);
			delayTimer = setTimeout(function(){
				delayTimer = undefined;
				$.fixedToolbars.show.apply(null, args);
			}, showDelay);
		},
		clearShowTimer: function() {
			if (delayTimer) {
				clearTimeout(delayTimer);
			}
			delayTimer = undefined;
		},
		toggle: function(from){
			if(from){ currentstate = from; }
			return (currentstate == 'overlay') ? $.fixedToolbars.hide() : $.fixedToolbars.show();
		},
        setTouchToggleEnabled: function(enabled) {
            touchToggleEnabled = enabled;
        }
	};
})();

})(jQuery);/*
* jQuery Mobile Framework : "checkboxradio" plugin
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/  
(function($, undefined ) {
$.widget( "mobile.checkboxradio", $.mobile.widget, {
	options: {
		theme: null
	},
	_create: function(){
		var self = this,
			input = this.element,
			label = input.closest("form,fieldset,[data-role='page']").find("label[for='" + input.attr( "id" ) + "']"),
			inputtype = input.attr( "type" ),
			checkedicon = "ui-icon-" + inputtype + "-on",
			uncheckedicon = "ui-icon-" + inputtype + "-off";

		if ( inputtype != "checkbox" && inputtype != "radio" ) { return; }

		// If there's no selected theme...
		if( !this.options.theme ) {
			this.options.theme = this.element.data( "theme" );
		}

		label
			.buttonMarkup({
				theme: this.options.theme,
				icon: this.element.parents( "[data-type='horizontal']" ).length ? undefined : uncheckedicon,
				shadow: false
			});
		
		// wrap the input + label in a div 
		input
			.add( label )
			.wrapAll( "<div class='ui-" + inputtype +"'></div>" );
		
		label.bind({
			mouseover: function() {
				if( $(this).parent().is('.ui-disabled') ){ return false; }
			},
			
			"touchmove": function( event ){
				var oe = event.originalEvent.touches[0];
				if( label.data("movestart") ){
					if( Math.abs( label.data("movestart")[0] - oe.pageX ) > 10 ||
						Math.abs( abel.data("movestart")[1] - oe.pageY ) > 10 ){
							label.data("moved", true);
						}
				}
				else{
					label.data("movestart", [ parseFloat( oe.pageX ), parseFloat( oe.pageY ) ]);
				}
			},
			
			"touchend mouseup": function( event ){
				label.removeData("movestart");
				if( label.data("etype") && label.data("etype") !== event.type || label.data("moved") ){
					label.removeData("etype").removeData("moved");
					if( label.data("moved") ){
						label.removeData("moved");
					}
					return false;
				}
				label.data( "etype", event.type );
				self._cacheVals();
				input.attr( "checked", inputtype === "radio" && true || !input.is( ":checked" ) );
				self._updateAll();
				event.preventDefault();
			},
			
			click: false
			
		});
		
		input
			.bind({
				mousedown: function(){
					this._cacheVals();
				},
				
				click: function(){
					self._updateAll();
				},

				focus: function() { 
					label.addClass( "ui-focus" ); 
				},

				blur: function() {
					label.removeClass( "ui-focus" );
				}
			});
			
		this.refresh();
		
	},
	
	_cacheVals: function(){
		this._getInputSet().each(function(){
			$(this).data("cacheVal", $(this).is(":checked") );
		});	
	},
		
	//returns either a set of radios with the same name attribute, or a single checkbox
	_getInputSet: function(){
		return this.element.closest( "form,fieldset,[data-role='page']" )
				.find( "input[name='"+ this.element.attr( "name" ) +"'][type='"+ this.element.attr( "type" ) +"']" );
	},
	
	_updateAll: function(){
		this._getInputSet().each(function(){
			var dVal = $(this).data("cacheVal");
			if( dVal && dVal !== $(this).is(":checked") || $(this).is( "[type='checkbox']" ) ){
				$(this).trigger("change");
			}
		})
		.checkboxradio( "refresh" );
	},
	
	refresh: function( ){
		var input = this.element,
			label = input.closest("form,fieldset,[data-role='page']").find("label[for='" + input.attr( "id" ) + "']"),
			inputtype = input.attr( "type" ),
			icon = label.find( ".ui-icon" ),
			checkedicon = "ui-icon-" + inputtype + "-on",
			uncheckedicon = "ui-icon-" + inputtype + "-off";
		
		if ( input[0].checked ) {
			label.addClass( "ui-btn-active" );
			icon.addClass( checkedicon );
			icon.removeClass( uncheckedicon );

		} else {
			label.removeClass( "ui-btn-active" ); 
			icon.removeClass( checkedicon );
			icon.addClass( uncheckedicon );
		}
		
		if( input.is( ":disabled" ) ){
			this.disable();
		}
		else {
			this.enable();
		}
	},
	
	disable: function(){
		this.element.attr("disabled",true).parent().addClass("ui-disabled");
	},
	
	enable: function(){
		this.element.attr("disabled",false).parent().removeClass("ui-disabled");
	}
});
})( jQuery );
/*
* jQuery Mobile Framework : "textinput" plugin for text inputs, textareas
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {
$.widget( "mobile.textinput", $.mobile.widget, {
	options: {
		theme: null
	},
	_create: function(){
		var input = this.element,
			o = this.options,
			theme = o.theme,
			themeclass;
			
		if ( !theme ) {
			var themedParent = this.element.closest("[class*='ui-bar-'],[class*='ui-body-']"); 
				theme = themedParent.length ?
					/ui-(bar|body)-([a-z])/.exec( themedParent.attr("class") )[2] :
					"c";
		}	
		
		themeclass = " ui-body-" + theme;
		
		$('label[for='+input.attr('id')+']').addClass('ui-input-text');
		
		input.addClass('ui-input-text ui-body-'+ o.theme);
		
		var focusedEl = input;
		
		//"search" input widget
		if( input.is('[type="search"],[data-type="search"]') ){
			focusedEl = input.wrap('<div class="ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield'+ themeclass +'"></div>').parent();
			var clearbtn = $('<a href="#" class="ui-input-clear" title="clear text">clear text</a>')
				.tap(function( e ){
					input.val('').focus();
					input.trigger('change'); 
					clearbtn.addClass('ui-input-clear-hidden');
					e.preventDefault();
				})
				.appendTo(focusedEl)
				.buttonMarkup({icon: 'delete', iconpos: 'notext', corners:true, shadow:true});
			
			function toggleClear(){
				if(input.val() == ''){
					clearbtn.addClass('ui-input-clear-hidden');
				}
				else{
					clearbtn.removeClass('ui-input-clear-hidden');
				}
			}
			
			toggleClear();
			input.keyup(toggleClear);	
		}
		else{
			input.addClass('ui-corner-all ui-shadow-inset' + themeclass);
		}
				
		input
			.focus(function(){
				focusedEl.addClass('ui-focus');
			})
			.blur(function(){
				focusedEl.removeClass('ui-focus');
			});	
			
		//autogrow
		if ( input.is('textarea') ) {
			var extraLineHeight = 15,
				keyupTimeoutBuffer = 100,
				keyup = function() {
					var scrollHeight = input[0].scrollHeight,
						clientHeight = input[0].clientHeight;
					if ( clientHeight < scrollHeight ) {
						input.css({ height: (scrollHeight + extraLineHeight) });
					}
				},
				keyupTimeout;
			input.keyup(function() {
				clearTimeout( keyupTimeout );
				keyupTimeout = setTimeout( keyup, keyupTimeoutBuffer );
			});
		}
	},
	
	disable: function(){
		( this.element.attr("disabled",true).is('[type="search"],[data-type="search"]') ? this.element.parent() : this.element ).addClass("ui-disabled");
	},
	
	enable: function(){
		( this.element.attr("disabled", false).is('[type="search"],[data-type="search"]') ? this.element.parent() : this.element ).removeClass("ui-disabled");
	}
});
})( jQuery );
/*
* jQuery Mobile Framework : "selectmenu" plugin
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {
$.widget( "mobile.selectmenu", $.mobile.widget, {
	options: {
		theme: null,
		disabled: false,
		icon: 'arrow-d',
		iconpos: 'right',
		inline: null,
		corners: true,
		shadow: true,
		iconshadow: true,
		menuPageTheme: 'b',
		overlayTheme: 'a',
		hidePlaceholderMenuItems: true,
		closeText: 'Close',
		nativeMenu: false
	},
	_create: function(){

		var self = this,

			o = this.options,

			select = this.element
						.wrap( "<div class='ui-select'>" ),
			
			selectID = select.attr( "id" ),			
			
			label = $( "label[for="+ selectID +"]" ).addClass( "ui-select" ),

			button = ( self.options.nativeMenu ? $( "<div/>" ) : $( "<a>", {
					"href": "#",
					"role": "button",
					"id": buttonId,
					"aria-haspopup": "true",
					"aria-owns": menuId
				}) )
				.text( $( select[0].options.item(select[0].selectedIndex) ).text() )
				.insertBefore( select )
				.buttonMarkup({
					theme: o.theme,
					icon: o.icon,
					iconpos: o.iconpos,
					inline: o.inline,
					corners: o.corners,
					shadow: o.shadow,
					iconshadow: o.iconshadow
				}),
			
			//multi select or not
			isMultiple = self.isMultiple = select[0].multiple;
		
		//Opera does not properly support opacity on select elements
		//In Mini, it hides the element, but not its text
		//On the desktop,it seems to do the opposite
		//for these reasons, using the nativeMenu option results in a full native select in Opera
		if( o.nativeMenu && window.opera && window.opera.version ){
			select.addClass( "ui-select-nativeonly" );
		}	
			
			//vars for non-native menus
		if( !o.nativeMenu ){	
			var options = select.find("option"),
				
				buttonId = selectID + "-button",
	
				menuId = selectID + "-menu",
	
				thisPage = select.closest( ".ui-page" ),
				
				//button theme
				theme = /ui-btn-up-([a-z])/.exec( button.attr("class") )[1],
	
				menuPage = $( "<div data-role='dialog' data-theme='"+ o.menuPageTheme +"'>" +
							"<div data-role='header'>" +
								"<div class='ui-title'>" + label.text() + "</div>"+
							"</div>"+
							"<div data-role='content'></div>"+
						"</div>" )
						.appendTo( $.mobile.pageContainer )
						.page(),
	
				menuPageContent = menuPage.find( ".ui-content" ),
	
				menuPageClose = menuPage.find( ".ui-header a" ),
	
				screen = $( "<div>", {"class": "ui-selectmenu-screen ui-screen-hidden"})
							.appendTo( thisPage ),
	
				listbox = $( "<div>", { "class": "ui-selectmenu ui-selectmenu-hidden ui-overlay-shadow ui-corner-all pop ui-body-" + o.overlayTheme } )
						.insertAfter(screen),
	
				list = $( "<ul>", {
						"class": "ui-selectmenu-list",
						"id": menuId,
						"role": "listbox",
						"aria-labelledby": buttonId,
						"data-theme": theme
					})
					.appendTo( listbox ),
	
				header = $( "<div>", {
						"class": "ui-header ui-bar-" + theme
					})
					.prependTo( listbox ),
	
				headerTitle = $( "<h1>", {
						"class": "ui-title"
					})
					.appendTo( header ),
	
				headerClose = $( "<a>", {
						"data-iconpos": "notext",
						"data-icon": "delete",
						"text": o.closeText,
						"href": "#",
						"class": "ui-btn-left"
					})
					.appendTo( header )
					.buttonMarkup(),
	
				menuType;
		} //end non native vars	

		// add counter for multi selects
		if( isMultiple ){
			self.buttonCount = $('<span>')
				.addClass( 'ui-li-count ui-btn-up-c ui-btn-corner-all' )
				.hide()
				.appendTo( button );
		}

		//disable if specified
		if( o.disabled ){ this.disable(); }

		//events on native select
		select
			.change(function(){
				self.refresh();
			});
			
		//expose to other methods
		$.extend(self, {
			select: select,
			optionElems: options,
			selectID: selectID,
			label: label,
			buttonId:buttonId,
			menuId:menuId,
			thisPage:thisPage,
			button:button,
			menuPage:menuPage,
			menuPageContent:menuPageContent,
			screen:screen,
			listbox:listbox,
			list:list,
			menuType:menuType,
			header:header,
			headerClose:headerClose,
			headerTitle:headerTitle,
			placeholder: ''
		});	

		//support for using the native select menu with a custom button
		if( o.nativeMenu ){

			select
				.appendTo(button)
				.bind( "touchstart mousedown", function( e ){
					//add active class to button
					button.addClass( $.mobile.activeBtnClass );
				})
				.bind( "focus mouseover", function(){
					button.trigger( "mouseover" );
				})
				.bind( "touchmove", function(){
					//remove active class on scroll/touchmove
					button.removeClass( $.mobile.activeBtnClass );
				})
				.bind( "change blur mouseout", function(){
					button
						.trigger( "mouseout" )
						.removeClass( $.mobile.activeBtnClass );
				});

			button.attr( "tabindex", "-1" );
		} else {
		
			//create list from select, update state
			self.refresh();

			select
				.attr( "tabindex", "-1" )
				.focus(function(){
					$(this).blur();
					button.focus();
				});

			//button events
			button
				.bind( "touchstart" , function( event ){
					//set startTouches to cached copy of
					$( this ).data( "startTouches", $.extend({}, event.originalEvent.touches[ 0 ]) );
				})
				.bind( $.support.touch ? "touchend" : "mouseup" , function( event ){
					//if it's a scroll, don't open
					if( $( this ).data( "moved" ) ){
						$( this ).removeData( "moved" );
					} else {
						self.open();
					}
					event.preventDefault();
				})
				.bind( "touchmove", function( event ){
					//if touch moved enough, set data moved and don't open menu
					var thisTouches = event.originalEvent.touches[ 0 ],
					startTouches = $( this ).data( "startTouches" ),
					deltaX = Math.abs(thisTouches.pageX - startTouches.pageX),
					deltaY = Math.abs(thisTouches.pageY - startTouches.pageY);

					if( deltaX > 10 || deltaY > 10 ){
						$( this ).data( "moved", true );
					}
				});
		
	
			//events for list items
			list.delegate("li:not(.ui-disabled, .ui-li-divider)", "click", function(event){
				// clicking on the list item fires click on the link in listview.js.
				// to prevent this handler from firing twice if the link isn't clicked on,
				// short circuit unless the target is the link
				if( !$(event.target).is("a") ){ return; }
	
				// index of option tag to be selected
				var newIndex = list.find( "li:not(.ui-li-divider)" ).index( this ),
					option = self.optionElems.eq( newIndex )[0];
	
				// toggle selected status on the tag for multi selects
				option.selected = isMultiple ? !option.selected : true;
	
				// toggle checkbox class for multiple selects
				if( isMultiple ){
					$(this)
						.find('.ui-icon')
						.toggleClass('ui-icon-checkbox-on', option.selected)
						.toggleClass('ui-icon-checkbox-off', !option.selected);
				}
	
				// trigger change
				select.trigger( "change" );
	
				//hide custom select for single selects only
				if( !isMultiple ){
					self.close();
				}
	
				event.preventDefault();
			});
	
			//events on "screen" overlay + close button
			screen
				.add( headerClose )
				.add( menuPageClose )
				.bind("click", function(event){
					self.close();
					event.preventDefault();
	
					// if the dialog's close icon was clicked, prevent the dialog's close
					// handler from firing. selectmenu's should take precedence
					if( $.contains(menuPageClose[0], event.target) ){
						event.stopImmediatePropagation();
					}
				});
		}	
		
		
	},

	_buildList: function(){
		var self = this,
			o = this.options,
			placeholder = this.placeholder,
			optgroups = [],
			lis = [],
			dataIcon = self.isMultiple ? "checkbox-off" : "false";

		self.list.empty().filter('.ui-listview').listview('destroy');

		//populate menu with options from select element
		self.select.find( "option" ).each(function( i ){
			var $this = $(this),
				$parent = $this.parent(),
				text = $this.text(),
				anchor = "<a href='#'>"+ text +"</a>",
				classes = [],
				extraAttrs = [];

			// are we inside an optgroup?
			if( $parent.is("optgroup") ){
				var optLabel = $parent.attr("label");

				// has this optgroup already been built yet?
				if( $.inArray(optLabel, optgroups) === -1 ){
					lis.push( "<li data-role='list-divider'>"+ optLabel +"</li>" );
					optgroups.push( optLabel );
				}
			}
			
			//find placeholder text
			if( !this.getAttribute('value') || text.length == 0 || $this.data('placeholder') ){
				if( o.hidePlaceholderMenuItems ){
					classes.push( "ui-selectmenu-placeholder" );
				}
				placeholder = self.placeholder = text;
			}

			// support disabled option tags
			if( this.disabled ){
				classes.push( "ui-disabled" );
				extraAttrs.push( "aria-disabled='true'" );
			}

			lis.push( "<li data-icon='"+ dataIcon +"' class='"+ classes.join(" ") + "' " + extraAttrs.join(" ") +">"+ anchor +"</li>" )
		});
		
		self.list.html( lis.join(" ") );

		// hide header close link for single selects
		if( !this.isMultiple ){
			this.headerClose.hide();
		}

		// hide header if it's not a multiselect and there's no placeholder
		if( !this.isMultiple && !placeholder.length ){
			this.header.hide();
		} else {
			this.headerTitle.text( this.placeholder );
		}

		//now populated, create listview
		self.list.listview();
	},

	refresh: function( forceRebuild ){
		var self = this,
			select = this.element,
			isMultiple = this.isMultiple,
			options = this.optionElems = select.find("option"),
			selected = options.filter(":selected"),

			// return an array of all selected index's
			indicies = selected.map(function(){
				return options.index( this );
			}).get();

		if( !self.options.nativeMenu && ( forceRebuild || select[0].options.length > self.list.find('li').length )){
			self._buildList();
		}

		self.button
			.find( ".ui-btn-text" )
			.text(function(){
				if( !isMultiple ){
					return selected.text();
				}

				return selected.length ?
					selected.map(function(){ return $(this).text(); }).get().join(', ') :
					self.placeholder;
			});

		// multiple count inside button
		if( isMultiple ){
			self.buttonCount[ selected.length > 1 ? 'show' : 'hide' ]().text( selected.length );
		}
		
		if( !self.options.nativeMenu ){
			self.list
				.find( 'li:not(.ui-li-divider)' )
				.removeClass( $.mobile.activeBtnClass )
				.attr( 'aria-selected', false )
				.each(function( i ){
					if( $.inArray(i, indicies) > -1 ){
						var item = $(this).addClass( $.mobile.activeBtnClass );
	
						// aria selected attr
						item.find( 'a' ).attr( 'aria-selected', true );
	
						// multiple selects: add the "on" checkbox state to the icon
						if( isMultiple ){
							item.find('.ui-icon').removeClass('ui-icon-checkbox-off').addClass('ui-icon-checkbox-on');
						}
					}
				});
		}	
	},

	open: function(){
		if( this.options.disabled || this.options.nativeMenu ){ return; }

		var self = this,
			menuHeight = self.list.outerHeight(),
			menuWidth = self.list.outerWidth(),
			scrollTop = $(window).scrollTop(),
			btnOffset = self.button.offset().top,
			screenHeight = window.innerHeight,
			screenWidth = window.innerWidth,
			dialogUsed = self.list.parents('.ui-dialog').length;

		//add active class to button
		self.button.addClass( $.mobile.activeBtnClass );

		function focusMenuItem(){
			self.list.find( ".ui-btn-active" ).focus();
		}

		// NOTE addresses issue with firefox outerHeight when the parent dialog
		//      is display: none. Upstream?
		if( dialogUsed || menuHeight > screenHeight - 80 || !$.support.scrollTop ){

			//for webos (set lastscroll using button offset)
			if( scrollTop == 0 && btnOffset > screenHeight ){
				self.thisPage.one('pagehide',function(){
					$(this).data('lastScroll', btnOffset);
				});
			}

			self.menuPage.one('pageshow', function() {
				// silentScroll() is called whenever a page is shown to restore
				// any previous scroll position the page may have had. We need to
				// wait for the "silentscroll" event before setting focus to avoid
				// the browser's "feature" which offsets rendering to make sure
				// whatever has focus is in view.
				$(window).one("silentscroll", function(){ focusMenuItem(); });
			});

			self.menuType = "page";
			self.menuPageContent.append( self.list );
			$.mobile.changePage(self.menuPage, 'pop', false, true);
		}
		else {
			self.menuType = "overlay";

			self.screen
				.height( $(document).height() )
				.removeClass('ui-screen-hidden');

			//try and center the overlay over the button
			var roomtop = btnOffset - scrollTop,
				roombot = scrollTop + screenHeight - btnOffset,
				halfheight = menuHeight / 2,
				newtop,newleft;
				
				if( roomtop > menuHeight / 2 && roombot > menuHeight / 2 ){
					newtop = btnOffset + ( self.button.outerHeight() / 2 ) - halfheight;
				}
				else{
					//30px tolerance off the edges
					newtop = roomtop > roombot ? scrollTop + screenHeight - menuHeight - 30 : scrollTop + 30;
				}
				
				newleft = self.button.offset().left + self.button.outerWidth() / 2 - menuWidth / 2;
				

			self.listbox
				.append( self.list )
				.removeClass( "ui-selectmenu-hidden" )
				.css({
					top: newtop,
					left: newleft
				})
				.addClass("in");

			focusMenuItem();
		}

		// wait before the dialog can be closed
		setTimeout(function(){
		 	self.isOpen = true;
		}, 400);
	},

	close: function(){
		if( this.options.disabled || !this.isOpen || this.options.nativeMenu ){ return; }
		var self = this;

		function focusButton(){
			setTimeout(function(){
				self.button.focus();

				//remove active class from button
				self.button.removeClass( $.mobile.activeBtnClass );
			}, 40);

			self.listbox.removeAttr('style').append( self.list );
		}

		if(self.menuType == "page"){
			$.mobile.changePage([self.menuPage,self.thisPage], 'pop', true, false);
			self.menuPage.one("pagehide", focusButton);
		}
		else{
			self.screen.addClass( "ui-screen-hidden" );
			self.listbox.addClass( "ui-selectmenu-hidden" ).removeAttr( "style" ).removeClass("in");
			focusButton();
		}

		// allow the dialog to be closed again
		this.isOpen = false;
	},

	disable: function(){
		this.element.attr("disabled",true);
		this.button.addClass('ui-disabled').attr("aria-disabled", true);
		return this._setOption( "disabled", true );
	},

	enable: function(){
		this.element.attr("disabled",false);
		this.button.removeClass('ui-disabled').attr("aria-disabled", false);
		return this._setOption( "disabled", false );
	}
});
})( jQuery );

/*
* jQuery Mobile Framework : plugin for making button-like links
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {

$.fn.buttonMarkup = function( options ){
	return this.each( function() {
		var el = $( this ),
		    o = $.extend( {}, $.fn.buttonMarkup.defaults, el.data(), options),

			// Classes Defined
			buttonClass,
			innerClass = "ui-btn-inner",
			iconClass;

		if ( attachEvents ) {
			attachEvents();
		}

		// if not, try to find closest theme container
		if ( !o.theme ) {
			var themedParent = el.closest("[class*='ui-bar-'],[class*='ui-body-']");
			o.theme = themedParent.length ?
				/ui-(bar|body)-([a-z])/.exec( themedParent.attr("class") )[2] :
				"c";
		}

		buttonClass = "ui-btn ui-btn-up-" + o.theme;

		if ( o.inline ) {
			buttonClass += " ui-btn-inline";
		}

		if ( o.icon ) {
			o.icon = "ui-icon-" + o.icon;
			o.iconpos = o.iconpos || "left";

			iconClass = "ui-icon " + o.icon;

			if ( o.shadow ) {
				iconClass += " ui-icon-shadow";
			}
		}

		if ( o.iconpos ) {
			buttonClass += " ui-btn-icon-" + o.iconpos;

			if ( o.iconpos == "notext" && !el.attr("title") ) {
				el.attr( "title", el.text() );
			}
		}

		if ( o.corners ) {
			buttonClass += " ui-btn-corner-all";
			innerClass += " ui-btn-corner-all";
		}

		if ( o.shadow ) {
			buttonClass += " ui-shadow";
		}

		el
			.attr( "data-theme", o.theme )
			.addClass( buttonClass );

		var wrap = ("<D class='" + innerClass + "'><D class='ui-btn-text'></D>" +
			( o.icon ? "<span class='" + iconClass + "'></span>" : "" ) +
			"</D>").replace(/D/g, o.wrapperEls);

		el.wrapInner( wrap );
	});
};

$.fn.buttonMarkup.defaults = {
	corners: true,
	shadow: true,
	iconshadow: true,
	wrapperEls: "span"
};

var attachEvents = function() {
	$(".ui-btn:not(.ui-disabled)").live({
		"touchstart mousedown": function() {
			var theme = $(this).attr( "data-theme" );
			$(this).removeClass( "ui-btn-up-" + theme ).addClass( "ui-btn-down-" + theme );
		},
		"touchmove touchend mouseup": function() {
			var theme = $(this).attr( "data-theme" );
			$(this).removeClass( "ui-btn-down-" + theme ).addClass( "ui-btn-up-" + theme );
		},
		"mouseover focus": function() {
			var theme = $(this).attr( "data-theme" );
			$(this).removeClass( "ui-btn-up-" + theme ).addClass( "ui-btn-hover-" + theme );
		},
		"mouseout blur": function() {
			var theme = $(this).attr( "data-theme" );
			$(this).removeClass( "ui-btn-hover-" + theme ).addClass( "ui-btn-up-" + theme );
		}
	});

	attachEvents = null;
};

})(jQuery);
/*
* jQuery Mobile Framework : "button" plugin - links that proxy to native input/buttons
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/ 
(function($, undefined ) {
$.widget( "mobile.button", $.mobile.widget, {
	options: {
		theme: null, 
		icon: null,
		iconpos: null,
		inline: null,
		corners: true,
		shadow: true,
		iconshadow: true
	},
	_create: function(){
		var $el = this.element,
			o = this.options;
		
		//add ARIA role
		this.button = $( "<div></div>" )
			.text( $el.text() || $el.val() )
			.buttonMarkup({
				theme: o.theme, 
				icon: o.icon,
				iconpos: o.iconpos,
				inline: o.inline,
				corners: o.corners,
				shadow: o.shadow,
				iconshadow: o.iconshadow
			})
			.insertBefore( $el )
			.append( $el.addClass('ui-btn-hidden') );
		
		//add hidden input during submit
		if( $el.attr('type') !== 'reset' ){
			$el.click(function(){
				var $buttonPlaceholder = $("<input>", 
						{type: "hidden", name: $el.attr("name"), value: $el.attr("value")})
						.insertBefore($el);
						
				//bind to doc to remove after submit handling	
				$(document).submit(function(){
					 $buttonPlaceholder.remove();
				});
			});
		}
			
	},

	enable: function(){
		this.element.attr("disabled", false);
		this.button.removeClass("ui-disabled").attr("aria-disabled", false);
		return this._setOption("disabled", false);
	},

	disable: function(){
		this.element.attr("disabled", true);
		this.button.addClass("ui-disabled").attr("aria-disabled", true);
		return this._setOption("disabled", true);
	}
});
})( jQuery );/*
* jQuery Mobile Framework : "slider" plugin
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {
$.widget( "mobile.slider", $.mobile.widget, {
	options: {
		theme: null,
		trackTheme: null,
		disabled: false
	},
	_create: function(){
		var self = this,

			control = this.element,

			parentTheme = control.parents('[class*=ui-bar-],[class*=ui-body-]').eq(0),

			parentTheme = parentTheme.length ? parentTheme.attr('class').match(/ui-(bar|body)-([a-z])/)[2] : 'c',

			theme = this.options.theme ? this.options.theme : parentTheme,

			trackTheme = this.options.trackTheme ? this.options.trackTheme : parentTheme,

			cType = control[0].nodeName.toLowerCase(),
			selectClass = (cType == 'select') ? 'ui-slider-switch' : '',
			controlID = control.attr('id'),
			labelID = controlID + '-label',
			label = $('[for='+ controlID +']').attr('id',labelID),
			val = function(){
				return (cType == 'input') ? parseFloat(control.val()) : control[0].selectedIndex;
			},
			min = (cType == 'input') ? parseFloat(control.attr('min')) : 0,
			max = (cType == 'input') ? parseFloat(control.attr('max')) : control.find('option').length-1,
			step = window.parseFloat(control.attr('step') || 1),
			slider = $('<div class="ui-slider '+ selectClass +' ui-btn-down-'+ trackTheme+' ui-btn-corner-all" role="application"></div>'),
			handle = $('<a href="#" class="ui-slider-handle"></a>')
				.appendTo(slider)
				.buttonMarkup({corners: true, theme: theme, shadow: true})
				.attr({
					'role': 'slider',
					'aria-valuemin': min,
					'aria-valuemax': max,
					'aria-valuenow': val(),
					'aria-valuetext': val(),
					'title': val(),
					'aria-labelledby': labelID
				});

		$.extend(this, {
			slider: slider,
			handle: handle,
			dragging: false,
			beforeStart: null
		});

		if(cType == 'select'){
			slider.wrapInner('<div class="ui-slider-inneroffset"></div>');
			var options = control.find('option');

			control.find('option').each(function(i){
				var side = (i==0) ?'b':'a',
					corners = (i==0) ? 'right' :'left',
					theme = (i==0) ? ' ui-btn-down-' + trackTheme :' ui-btn-active';
				$('<div class="ui-slider-labelbg ui-slider-labelbg-'+ side + theme +' ui-btn-corner-'+ corners+'"></div>').prependTo(slider);
				$('<span class="ui-slider-label ui-slider-label-'+ side + theme +' ui-btn-corner-'+ corners+'" role="img">'+$(this).text()+'</span>').prependTo(handle);
			});

		}

		label.addClass('ui-slider');

		// monitor the input for updated values
		control
			.addClass((cType == 'input') ? 'ui-slider-input' : 'ui-slider-switch')
			.change(function(){
				self.refresh( val(), true );
			})
			.keyup(function(){ // necessary?
				self.refresh( val(), true, true );
			})
			.blur(function(){
				self.refresh( val(), true );
			});

		// prevent screen drag when slider activated
		$(document).bind( "touchmove mousemove", function(event){
			if ( self.dragging ) {
				self.refresh( event );
				return false;
			}
		});

		slider
			.bind( "touchstart mousedown", function(event){
				self.dragging = true;
				if ( cType === "select" ) {
					self.beforeStart = control[0].selectedIndex;
				}
				self.refresh( event );
				return false;
			});

		slider
			.add(document)
			.bind( "touchend mouseup", function(){
				if ( self.dragging ) {
					self.dragging = false;
					if ( cType === "select" ) {
						if ( self.beforeStart === control[0].selectedIndex ) {
							//tap occurred, but value didn't change. flip it!
							self.refresh( self.beforeStart === 0 ? 1 : 0 );
						}
						var curval = val();
						var snapped = Math.round( curval / (max - min) * 100 );
						handle
							.addClass("ui-slider-handle-snapping")
							.css("left", snapped + "%")
							.animationComplete(function(){
								handle.removeClass("ui-slider-handle-snapping");
							});
					}
					return false;
				}
			});

		slider.insertAfter(control);

		// NOTE force focus on handle
		this.handle
			.bind( "touchstart mousedown", function(){
				$(this).focus();
			});

		this.handle
			.bind( "keydown", function( event ) {
				var index = val();

				if ( self.options.disabled ) {
					return;
				}

				// In all cases prevent the default and mark the handle as active
				switch ( event.keyCode ) {
				 case $.mobile.keyCode.HOME:
				 case $.mobile.keyCode.END:
				 case $.mobile.keyCode.PAGE_UP:
				 case $.mobile.keyCode.PAGE_DOWN:
				 case $.mobile.keyCode.UP:
				 case $.mobile.keyCode.RIGHT:
				 case $.mobile.keyCode.DOWN:
				 case $.mobile.keyCode.LEFT:
					event.preventDefault();

					if ( !self._keySliding ) {
						self._keySliding = true;
						$( this ).addClass( "ui-state-active" );
					}
					break;
				}

				// move the slider according to the keypress
				switch ( event.keyCode ) {
				 case $.mobile.keyCode.HOME:
					self.refresh(min);
					break;
				 case $.mobile.keyCode.END:
					self.refresh(max);
					break;
				 case $.mobile.keyCode.PAGE_UP:
				 case $.mobile.keyCode.UP:
				 case $.mobile.keyCode.RIGHT:
					self.refresh(index + step);
					break;
				 case $.mobile.keyCode.PAGE_DOWN:
				 case $.mobile.keyCode.DOWN:
				 case $.mobile.keyCode.LEFT:
					self.refresh(index - step);
					break;
				}
			}) // remove active mark
			.keyup(function( event ) {
				if ( self._keySliding ) {
					self._keySliding = false;
					$( this ).removeClass( "ui-state-active" );
				}
			});

		this.refresh();
	},

	refresh: function(val, isfromControl, preventInputUpdate){
		if ( this.options.disabled ) { return; }

		var control = this.element, percent,
			cType = control[0].nodeName.toLowerCase(),
			min = (cType === "input") ? parseFloat(control.attr("min")) : 0,
			max = (cType === "input") ? parseFloat(control.attr("max")) : control.find("option").length - 1;

		if ( typeof val === "object" ) {
			var data = val.originalEvent.touches ? val.originalEvent.touches[ 0 ] : val,
				// a slight tolerance helped get to the ends of the slider
				tol = 8;
			if ( !this.dragging
					|| data.pageX < this.slider.offset().left - tol
					|| data.pageX > this.slider.offset().left + this.slider.width() + tol ) {
				return;
			}
			percent = Math.round( ((data.pageX - this.slider.offset().left) / this.slider.width() ) * 100 );
		} else {
			if ( val == null ) {
				val = (cType === "input") ? parseFloat(control.val()) : control[0].selectedIndex;
			}
			percent = (parseFloat(val) - min) / (max - min) * 100;
		}

		if ( isNaN(percent) ) { return; }
		if ( percent < 0 ) { percent = 0; }
		if ( percent > 100 ) { percent = 100; }

		var newval = Math.round( (percent / 100) * (max - min) ) + min;
		if ( newval < min ) { newval = min; }
		if ( newval > max ) { newval = max; }

		//flip the stack of the bg colors
		if ( percent > 60 && cType === "select" ) {

		}
		this.handle.css("left", percent + "%");
		this.handle.attr({
				"aria-valuenow": (cType === "input") ? newval : control.find("option").eq(newval).attr("value"),
				"aria-valuetext": (cType === "input") ? newval : control.find("option").eq(newval).text(),
				title: newval
			});

		// add/remove classes for flip toggle switch
		if ( cType === "select" ) {
			if ( newval === 0 ) {
				this.slider.addClass("ui-slider-switch-a")
					.removeClass("ui-slider-switch-b");
			} else {
				this.slider.addClass("ui-slider-switch-b")
					.removeClass("ui-slider-switch-a");
			}
		}

		if(!preventInputUpdate){
			// update control's value
			if ( cType === "input" ) {
				control.val(newval);
			} else {
				control[ 0 ].selectedIndex = newval;
			}
			if (!isfromControl) { control.trigger("change"); }
		}
	},

	enable: function(){
		this.element.attr("disabled", false);
		this.slider.removeClass("ui-disabled").attr("aria-disabled", false);
		return this._setOption("disabled", false);
	},

	disable: function(){
		this.element.attr("disabled", true);
		this.slider.addClass("ui-disabled").attr("aria-disabled", true);
		return this._setOption("disabled", true);
	}
});
})( jQuery );

/*
* jQuery Mobile Framework : "collapsible" plugin
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/ 
(function($, undefined ) {
$.widget( "mobile.collapsible", $.mobile.widget, {
	options: {
		expandCueText: ' click to expand contents',
		collapseCueText: ' click to collapse contents',
		collapsed: false,
		heading: '>:header,>legend',
		theme: null,
		iconTheme: 'd'
	},
	_create: function(){

		var $el = this.element,
			o = this.options,
			collapsibleContain = $el.addClass('ui-collapsible-contain'),
			collapsibleHeading = $el.find(o.heading).eq(0),
			collapsibleContent = collapsibleContain.wrapInner('<div class="ui-collapsible-content"></div>').find('.ui-collapsible-content'),
			collapsibleParent = $el.closest('[data-role="collapsible-set"]').addClass('ui-collapsible-set');				
		
		//replace collapsibleHeading if it's a legend	
		if(collapsibleHeading.is('legend')){
			collapsibleHeading = $('<div role="heading">'+ collapsibleHeading.html() +'</div>').insertBefore(collapsibleHeading);
			collapsibleHeading.next().remove();
		}	
		
		//drop heading in before content
		collapsibleHeading.insertBefore(collapsibleContent);
		
		//modify markup & attributes
		collapsibleHeading.addClass('ui-collapsible-heading')
			.append('<span class="ui-collapsible-heading-status"></span>')
			.wrapInner('<a href="#" class="ui-collapsible-heading-toggle"></a>')
			.find('a:eq(0)')
			.buttonMarkup({
				shadow: !!!collapsibleParent.length,
				corners:false,
				iconPos: 'left',
				icon: 'plus',
				theme: o.theme
			})
			.find('.ui-icon')
			.removeAttr('class')
			.buttonMarkup({
				shadow: true,
				corners:true,
				iconPos: 'notext',
				icon: 'plus',
				theme: o.iconTheme
			});
			
			if( !collapsibleParent.length ){
				collapsibleHeading
					.find('a:eq(0)')	
					.addClass('ui-corner-all')
						.find('.ui-btn-inner')
						.addClass('ui-corner-all');
			}
			else {
				if( collapsibleContain.data('collapsible-last') ){
					collapsibleHeading
						.find('a:eq(0), .ui-btn-inner')	
							.addClass('ui-corner-bottom');
				}					
			}
			
		
		//events
		collapsibleContain	
			.bind('collapse', function(event){
				if( !event.isDefaultPrevented() ){
					event.preventDefault();
					collapsibleHeading
						.addClass('ui-collapsible-heading-collapsed')
						.find('.ui-collapsible-heading-status').text(o.expandCueText);
					
					collapsibleHeading.find('.ui-icon').removeClass('ui-icon-minus').addClass('ui-icon-plus');	
					collapsibleContent.addClass('ui-collapsible-content-collapsed').attr('aria-hidden',true);
					
					if( collapsibleContain.data('collapsible-last') ){
						collapsibleHeading
							.find('a:eq(0), .ui-btn-inner')
							.addClass('ui-corner-bottom');
					}
				}						
				
			})
			.bind('expand', function(event){
				if( !event.isDefaultPrevented() ){
					event.preventDefault();
					collapsibleHeading
						.removeClass('ui-collapsible-heading-collapsed')
						.find('.ui-collapsible-heading-status').text(o.collapseCueText);
					
					collapsibleHeading.find('.ui-icon').removeClass('ui-icon-plus').addClass('ui-icon-minus');	
					collapsibleContent.removeClass('ui-collapsible-content-collapsed').attr('aria-hidden',false);
					
					if( collapsibleContain.data('collapsible-last') ){
						collapsibleHeading
							.find('a:eq(0), .ui-btn-inner')
							.removeClass('ui-corner-bottom');
					}
					
				}
			})
			.trigger(o.collapsed ? 'collapse' : 'expand');
			
		
		//close others in a set
		if( collapsibleParent.length && !collapsibleParent.data("collapsiblebound") ){
			collapsibleParent
				.data("collapsiblebound", true)
				.bind("expand", function( event ){
					$(this).find( ".ui-collapsible-contain" )
						.not( $(event.target).closest( ".ui-collapsible-contain" ) )
						.not( "> .ui-collapsible-contain .ui-collapsible-contain" )
						.trigger( "collapse" );
				})
			var set = collapsibleParent.find('[data-role=collapsible]')
					
			set.first()
				.find('a:eq(0)')	
				.addClass('ui-corner-top')
					.find('.ui-btn-inner')
					.addClass('ui-corner-top');
					
			set.last().data('collapsible-last', true)	
		}
					
		collapsibleHeading.bind( $.support.touch ? "touchstart" : "click", function(){ 
			if( collapsibleHeading.is('.ui-collapsible-heading-collapsed') ){
				collapsibleContain.trigger('expand'); 
			}	
			else {
				collapsibleContain.trigger('collapse'); 
			}
			return false;
		});
			
	}
});
})( jQuery );/*
* jQuery Mobile Framework: "controlgroup" plugin - corner-rounding for groups of buttons, checks, radios, etc
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {
$.fn.controlgroup = function(options){
		
	return this.each(function(){
		var o = $.extend({
			direction: $( this ).data( "type" ) || "vertical",
			shadow: false
		},options);
		var groupheading = $(this).find('>legend'),
			flCorners = o.direction == 'horizontal' ? ['ui-corner-left', 'ui-corner-right'] : ['ui-corner-top', 'ui-corner-bottom'],
			type = $(this).find('input:eq(0)').attr('type');
		
		//replace legend with more stylable replacement div	
		if( groupheading.length ){
			$(this).wrapInner('<div class="ui-controlgroup-controls"></div>');	
			$('<div role="heading" class="ui-controlgroup-label">'+ groupheading.html() +'</div>').insertBefore( $(this).children(0) );	
			groupheading.remove();	
		}

		$(this).addClass('ui-corner-all ui-controlgroup ui-controlgroup-'+o.direction);
		
		function flipClasses(els){
			els
				.removeClass('ui-btn-corner-all ui-shadow')
				.eq(0).addClass(flCorners[0])
				.end()
				.filter(':last').addClass(flCorners[1]).addClass('ui-controlgroup-last');
		}
		flipClasses($(this).find('.ui-btn'));
		flipClasses($(this).find('.ui-btn-inner'));
		if(o.shadow){
			$(this).addClass('ui-shadow');
		}
	});	
};
})(jQuery);/*
* jQuery Mobile Framework : "fieldcontain" plugin - simple class additions to make form row separators
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {
$.fn.fieldcontain = function(options){
	return this.addClass('ui-field-contain ui-body ui-br');
};
})(jQuery);/*
* jQuery Mobile Framework : "listview" plugin
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {

$.widget( "mobile.listview", $.mobile.widget, {
	options: {
		theme: "c",
		countTheme: "c",
		headerTheme: "b",
		dividerTheme: "b",
		splitIcon: "arrow-r",
		splitTheme: "b",
		inset: false
	},
	
	_create: function() {
		var $list = this.element,
			o = this.options;

		// create listview markup 
		$list
			.addClass( "ui-listview" )
			.attr( "role", "listbox" )
		
		if ( o.inset ) {
			$list.addClass( "ui-listview-inset ui-corner-all ui-shadow" );
		}	

		$list.delegate( ".ui-li", "focusin", function() {
			$( this ).attr( "tabindex", "0" );
		});

		this._itemApply( $list, $list );
		
		this.refresh( true );
	
		//keyboard events for menu items
		$list.keydown(function( e ) {
			var target = $( e.target ),
				li = target.closest( "li" );

			// switch logic based on which key was pressed
			switch ( e.keyCode ) {
				// up or left arrow keys
				case 38:
					var prev = li.prev();

					// if there's a previous option, focus it
					if ( prev.length ) {
						target
							.blur()
							.attr( "tabindex", "-1" );

						prev.find( "a" ).first().focus();
					}	

					return false;
				break;

				// down or right arrow keys
				case 40:
					var next = li.next();
				
					// if there's a next option, focus it
					if ( next.length ) {
						target
							.blur()
							.attr( "tabindex", "-1" );
						
						next.find( "a" ).first().focus();
					}	

					return false;
				break;

				case 39:
					var a = li.find( "a.ui-li-link-alt" );

					if ( a.length ) {
						target.blur();
						a.first().focus();
					}

					return false;
				break;

				case 37:
					var a = li.find( "a.ui-link-inherit" );

					if ( a.length ) {
						target.blur();
						a.first().focus();
					}

					return false;
				break;

				// if enter or space is pressed, trigger click
				case 13:
				case 32:
					 target.trigger( "click" );

					 return false;
				break;	
			}
		});	

		// tapping the whole LI triggers click on the first link
		$list.delegate( "li", "click", function(event) {
			if ( !$( event.target ).closest( "a" ).length ) {
				$( this ).find( "a" ).first().trigger( "click" );
				return false;
			}
		});
	},

	_itemApply: function( $list, item ) {
		// TODO class has to be defined in markup
		item.find( ".ui-li-count" )
			.addClass( "ui-btn-up-" + ($list.data( "counttheme" ) || this.options.countTheme) + " ui-btn-corner-all" );

		item.find( "h1, h2, h3, h4, h5, h6" ).addClass( "ui-li-heading" );

		item.find( "p, dl" ).addClass( "ui-li-desc" );

		item.find( "li" ).find( "img:eq(0)" ).addClass( "ui-li-thumb" ).each(function() {
			$( this ).closest( "li" )
				.addClass( $(this).is( ".ui-li-icon" ) ? "ui-li-has-icon" : "ui-li-has-thumb" );
		});

		var aside = item.find( ".ui-li-aside" );

		if ( aside.length ) {
            aside.each(function(i, el) {
			    $(el).prependTo( $(el).parent() ); //shift aside to front for css float
            });
		}

		if ( $.support.cssPseudoElement || !$.nodeName( item[0], "ol" ) ) {
			return;
		}
	},
	
	_removeCorners: function(li){
		li
			.add( li.find(".ui-btn-inner, .ui-li-link-alt, .ui-li-thumb") )
			.removeClass( "ui-corner-top ui-corner-bottom ui-corner-br ui-corner-bl ui-corner-tr ui-corner-tl" );
	},
	
	refresh: function( create ) {
		this._createSubPages();
		
		var o = this.options,
			$list = this.element,
			self = this,
			dividertheme = $list.data( "dividertheme" ) || o.dividerTheme,
			li = $list.children( "li" ),
			counter = $.support.cssPseudoElement || !$.nodeName( $list[0], "ol" ) ? 0 : 1;

		if ( counter ) {
			$list.find( ".ui-li-dec" ).remove();
		}

		li.attr({ "role": "option", "tabindex": "-1" });

		li.first().attr( "tabindex", "0" );

		li.each(function( pos ) {
			var item = $( this ),
				itemClass = "ui-li";

			// If we're creating the element, we update it regardless
			if ( !create && item.hasClass( "ui-li" ) ) {
				return;
			}

			var itemTheme = item.data("theme") || o.theme;

			var a = item.find( "a" );
				
			if ( a.length ) {	
				var icon = item.data("icon");
				
				item
					.buttonMarkup({
						wrapperEls: "div",
						shadow: false,
						corners: false,
						iconpos: "right",
						icon: a.length > 1 || icon === false ? false : icon || "arrow-r",
						theme: itemTheme
					});

				a.first().addClass( "ui-link-inherit" );

				if ( a.length > 1 ) {
					itemClass += " ui-li-has-alt";

					var last = a.last(),
						splittheme = $list.data( "splittheme" ) || last.data( "theme" ) || o.splitTheme;
					
					last
						.appendTo(item)
						.attr( "title", last.text() )
						.addClass( "ui-li-link-alt" )
						.empty()
						.buttonMarkup({
							shadow: false,
							corners: false,
							theme: itemTheme,
							icon: false,
							iconpos: false
						})
						.find( ".ui-btn-inner" )
							.append( $( "<span>" ).buttonMarkup({
								shadow: true,
								corners: true,
								theme: splittheme,
								iconpos: "notext",
								icon: $list.data( "spliticon" ) || last.data( "icon" ) ||  o.splitIcon
							} ) );
				}

			} else if ( item.data( "role" ) === "list-divider" ) {
				itemClass += " ui-li-divider ui-btn ui-bar-" + dividertheme;
				item.attr( "role", "heading" );

				//reset counter when a divider heading is encountered
				if ( counter ) {
					counter = 1;
				}

			} else {
				itemClass += " ui-li-static ui-btn-up-" + itemTheme;
			}
			
			
			if( o.inset ){	
				if ( pos === 0 ) {
						itemClass += " ui-corner-top";
	
						item
							.add( item.find( ".ui-btn-inner" ) )
							.find( ".ui-li-link-alt" )
								.addClass( "ui-corner-tr" )
							.end()
							.find( ".ui-li-thumb" )
								.addClass( "ui-corner-tl" );
						if(item.next().next().length){
							self._removeCorners( item.next() );		
						}
	
				}
				if ( pos === li.length - 1 ) {
						itemClass += " ui-corner-bottom";
	
						item
							.add( item.find( ".ui-btn-inner" ) )
							.find( ".ui-li-link-alt" )
								.addClass( "ui-corner-br" )
							.end()
							.find( ".ui-li-thumb" )
								.addClass( "ui-corner-bl" );
						
						if(item.prev().prev().length){
							self._removeCorners( item.prev() );		
						}	
				}
			}


			if ( counter && itemClass.indexOf( "ui-li-divider" ) < 0 ) {
				item
					.find( ".ui-link-inherit" ).first()
					.addClass( "ui-li-jsnumbering" )
					.prepend( "<span class='ui-li-dec'>" + (counter++) + ". </span>" );
			}

			item.addClass( itemClass );

			if ( !create ) {
				self._itemApply( $list, item );
			}
		});
	},
	
	//create a string for ID/subpage url creation
	_idStringEscape: function( str ){
		return str.replace(/[^a-zA-Z0-9]/g, '-');
	},
	
	_createSubPages: function() {
		var parentList = this.element,
			parentPage = parentList.closest( ".ui-page" ),
			parentId = parentPage.data( "url" ),
			o = this.options,
			self = this,
			persistentFooterID = parentPage.find( "[data-role='footer']" ).data( "id" );

		$( parentList.find( "ul, ol" ).toArray().reverse() ).each(function( i ) {
			var list = $( this ),
				parent = list.parent(),
				title = $.trim(parent.contents()[ 0 ].nodeValue) || parent.find('a:first').text(),
				id = parentId + "&" + $.mobile.subPageUrlKey + "=" + self._idStringEscape(title + " " + i),
				theme = list.data( "theme" ) || o.theme,
				countTheme = list.data( "counttheme" ) || parentList.data( "counttheme" ) || o.countTheme,
				newPage = list.wrap( "<div data-role='page'><div data-role='content'></div></div>" )
							.parent()
								.before( "<div data-role='header' data-theme='" + o.headerTheme + "'><div class='ui-title'>" + title + "</div></div>" )
								.after( persistentFooterID ? $( "<div>", { "data-role": "footer", "data-id": persistentFooterID, "class": "ui-footer-duplicate" } ) : "" )
								.parent()
									.attr({
										"data-url": id,
										"data-theme": theme,
										"data-count-theme": countTheme
									})
									.appendTo( $.mobile.pageContainer );
				
				
				
				newPage.page();		
			var anchor = parent.find('a:first');
			if (!anchor.length) {
				anchor = $("<a></a>").html(title).prependTo(parent.empty());
			}
			anchor.attr('href','#' + id);
		}).listview();
	}
});

})( jQuery );
/*
* jQuery Mobile Framework : "listview" filter extension
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {

$.mobile.listview.prototype.options.filter = false;

$( "[data-role='listview']" ).live( "listviewcreate", function() {
	var list = $( this ),
		listview = list.data( "listview" );
	if ( !listview.options.filter ) {
		return;
	}

	var wrapper = $( "<form>", { "class": "ui-listview-filter ui-bar-c", "role": "search" } ),
		
		search = $( "<input>", {
				placeholder: "Filter results...",
				"data-type": "search"
			})
			.bind( "keyup change", function() {
				var val = this.value.toLowerCase();;
				list.children().show();
				if ( val ) {
					list.children().filter(function() {
						return $( this ).text().toLowerCase().indexOf( val ) === -1;
					}).hide();
				}
				
				//listview._numberItems();
			})
			.appendTo( wrapper )
			.textinput();
	
	wrapper.insertBefore( list );
});

})( jQuery );
/*
* jQuery Mobile Framework : "dialog" plugin.
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
* Note: Code is in draft form and is subject to change
*/
(function($, undefined ) {
$.widget( "mobile.dialog", $.mobile.widget, {
	options: {},
	_create: function(){
		var self = this,
			$el = self.element;
		
		/* class the markup for dialog styling */	
		this.element			
			//add ARIA role
			.attr("role","dialog")
			.addClass('ui-page ui-dialog ui-body-a')
			.find('[data-role=header]')
			.addClass('ui-corner-top ui-overlay-shadow')
				.prepend( '<a href="#" data-icon="delete" data-rel="back" data-iconpos="notext">Close</a>' )
			.end()
			.find('.ui-content:not([class*="ui-body-"])')
				.addClass('ui-body-c')
			.end()
			.find('.ui-content,[data-role=footer]')
				.last()
				.addClass('ui-corner-bottom ui-overlay-shadow');
		
		/* bind events 
			- clicks and submits should use the closing transition that the dialog opened with
			  unless a data-transition is specified on the link/form
			- if the click was on the close button, or the link has a data-rel="back" it'll go back in history naturally
		*/
		this.element		
			.bind( "click submit", function(e){
				var $targetel;
				if( e.type == "click" ){
					$targetel = $(e.target).closest("a");
				}
				else{
					$targetel = $(e.target).closest("form");
				}
				
				if( $targetel.length && !$targetel.data("transition") ){
					$targetel
						.attr("data-transition", $.mobile.urlHistory.getActive().transition )
						.attr("data-direction", "reverse");
				}
			});

	},
	
	//close method goes back in history
	close: function(){
		window.history.back();
	}
});
})( jQuery );/*
* jQuery Mobile Framework : "navbar" plugin
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {
$.widget( "mobile.navbar", $.mobile.widget, {
	options: {
		iconpos: 'top',
		grid: null
	},
	_create: function(){
		var $navbar = this.element,
			$navbtns = $navbar.find("a"),
			iconpos = $navbtns.filter('[data-icon]').length ? this.options.iconpos : undefined;
		
		$navbar
			.addClass('ui-navbar')
			.attr("role","navigation")
			.find("ul")
				.grid({grid: this.options.grid });		
		
		if( !iconpos ){ 
			$navbar.addClass("ui-navbar-noicons");
		}
		
		$navbtns
			.buttonMarkup({
				corners:	false, 
				shadow:		false, 
				iconpos:	iconpos
			});
		
		$navbar.delegate("a", "click",function(event){
			$navbtns.removeClass( "ui-btn-active" );
			$( this ).addClass( "ui-btn-active" );
		});	
	}
});
})( jQuery );/*
* jQuery Mobile Framework : plugin for creating CSS grids
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/ 
(function($, undefined ) {
$.fn.grid = function(options){
	return this.each(function(){
		var o = $.extend({
			grid: null
		},options);
	
			
		var $kids = $(this).children(),
			gridCols = {a: 2, b:3, c:4, d:5},
			grid = o.grid,
			iterator;
			
			if( !grid ){
				if( $kids.length <= 5 ){
					for(var letter in gridCols){
						if(gridCols[letter] == $kids.length){ grid = letter; }
					}
				}
				else{
					grid = 'a';
				}
			}
			iterator = gridCols[grid];
			
		$(this).addClass('ui-grid-' + grid);
	
		$kids.filter(':nth-child(' + iterator + 'n+1)').addClass('ui-block-a');
		$kids.filter(':nth-child(' + iterator + 'n+2)').addClass('ui-block-b');
			
		if(iterator > 2){	
			$kids.filter(':nth-child(3n+3)').addClass('ui-block-c');
		}	
		if(iterator> 3){	
			$kids.filter(':nth-child(4n+4)').addClass('ui-block-d');
		}	
		if(iterator > 4){	
			$kids.filter(':nth-child(5n+5)').addClass('ui-block-e');
		}
				
	});	
};
})(jQuery);;
;
