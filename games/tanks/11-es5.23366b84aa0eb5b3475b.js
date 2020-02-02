function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,a=void 0;try{for(var l,o=e[Symbol.iterator]();!(i=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);i=!0);}catch(s){r=!0,a=s}finally{try{i||null==o.return||o.return()}finally{if(r)throw a}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{eZVf:function(e,t,n){"use strict";n.r(t);var i=n("8Y7J"),r=function e(){_classCallCheck(this,e)},a=n("pMnS"),l=n("iInd"),o=n("SVse"),s=n("XNiG"),u=n("2Vo4"),c=n("HDdC"),f=n("VRyK");n("3N8a"),n("IjjT"),n("LRne"),n("xgIS");var h,p=n("pLZG"),y=(n("lJxs"),n("Kj3r"),n("eIep"),n("1G5W")),d=(n("IzEk"),n("vkgz")),v=function e(){_classCallCheck(this,e)},b=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;_classCallCheck(this,e),this.matches=t,this.mediaQuery=n,this.mqAlias=i,this.suffix=r,this.priority=a,this.property=""}return _createClass(e,[{key:"clone",value:function(){return new e(this.matches,this.mediaQuery,this.mqAlias,this.suffix)}}]),e}(),m=((h=function(){function e(){_classCallCheck(this,e),this.stylesheet=new Map}return _createClass(e,[{key:"addStyleToElement",value:function(e,t,n){var i=this.stylesheet.get(e);i?i.set(t,n):this.stylesheet.set(e,new Map([[t,n]]))}},{key:"clearStyles",value:function(){this.stylesheet.clear()}},{key:"getStyleForElement",value:function(e,t){var n=this.stylesheet.get(e),i="";if(n){var r=n.get(t);"number"!=typeof r&&"string"!=typeof r||(i=r+"")}return i}}]),e}()).ngInjectableDef=Object(i.Lb)({factory:function(){return new h},token:h,providedIn:"root"}),h),g={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[]},k=new i.o("Flex Layout token, config options for the library",{providedIn:"root",factory:function(){return g}}),w=new i.o("FlexLayoutServerLoaded",{providedIn:"root",factory:function(){return!1}}),x=new i.o("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:function(){return null}});function _(e,t){return e=e?e.clone():new b,t&&(e.mqAlias=t.alias,e.mediaQuery=t.mediaQuery,e.suffix=t.suffix,e.priority=t.priority),e}var C=["row","column","row-reverse","column-reverse"];function A(e){if(e)switch(e.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":e="wrap-reverse";break;case"no":case"none":case"nowrap":e="nowrap";break;default:e="wrap"}return e}var E=function(){function e(t,n,i,r){_classCallCheck(this,e),this.elementRef=t,this.styleBuilder=n,this.styler=i,this.marshal=r,this.DIRECTIVE_KEY="",this.inputs=[],this.mru={},this.destroySubject=new s.a,this.styleCache=new Map}return _createClass(e,[{key:"ngOnChanges",value:function(e){var t=this;Object.keys(e).forEach((function(n){if(-1!==t.inputs.indexOf(n)){var i=n.split(".").slice(1).join(".");t.setValue(e[n].currentValue,i)}}))}},{key:"ngOnDestroy",value:function(){this.destroySubject.next(),this.destroySubject.complete(),this.marshal.releaseElement(this.nativeElement)}},{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.marshal.init(this.elementRef.nativeElement,this.DIRECTIVE_KEY,this.updateWithValue.bind(this),this.clearStyles.bind(this),e)}},{key:"addStyles",value:function(e,t){var n=this.styleBuilder,i=n.shouldCache,r=this.styleCache.get(e);r&&i||(r=n.buildStyles(e,t),i&&this.styleCache.set(e,r)),this.mru=Object.assign({},r),this.applyStyleToElement(r),n.sideEffect(e,r,t)}},{key:"clearStyles",value:function(){var e=this;Object.keys(this.mru).forEach((function(t){e.mru[t]=""})),this.applyStyleToElement(this.mru),this.mru={}}},{key:"triggerUpdate",value:function(){this.marshal.triggerUpdate(this.nativeElement,this.DIRECTIVE_KEY)}},{key:"getFlexFlowDirection",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){var n=this.styler.getFlowDirection(e),i=_slicedToArray(n,2),r=i[0],a=i[1];if(!a&&t){var l=function(e){var t=function(e){var t=_slicedToArray((e=e?e.toLowerCase():"").split(" "),3),n=t[0],i=t[1],r=t[2];return C.find((function(e){return e===n}))||(n=C[0]),"inline"===i&&(i="inline"!==r?r:"",r="inline"),[n,A(i),!!r]}(e),n=_slicedToArray(t,3);return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{display:n?"inline-flex":"flex","box-sizing":"border-box","flex-direction":e,"flex-wrap":t||null}}(n[0],n[1],n[2])}(r);this.styler.applyStyleToElements(l,[e])}return r.trim()}return"row"}},{key:"applyStyleToElement",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.nativeElement;this.styler.applyStyleToElement(n,e,t)}},{key:"setValue",value:function(e,t){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,e,t)}},{key:"updateWithValue",value:function(e){this.addStyles(e)}},{key:"parentElement",get:function(){return this.elementRef.nativeElement.parentElement}},{key:"nativeElement",get:function(){return this.elementRef.nativeElement}},{key:"activatedValue",get:function(){return this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY)},set:function(e){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,e,this.marshal.activatedAlias)}}]),e}(),O=[{alias:"xs",mediaQuery:"screen and (min-width: 0px) and (max-width: 599.9px)",priority:1e3},{alias:"sm",mediaQuery:"screen and (min-width: 600px) and (max-width: 959.9px)",priority:900},{alias:"md",mediaQuery:"screen and (min-width: 960px) and (max-width: 1279.9px)",priority:800},{alias:"lg",mediaQuery:"screen and (min-width: 1280px) and (max-width: 1919.9px)",priority:700},{alias:"xl",mediaQuery:"screen and (min-width: 1920px) and (max-width: 4999.9px)",priority:600},{alias:"lt-sm",overlapping:!0,mediaQuery:"screen and (max-width: 599.9px)",priority:950},{alias:"lt-md",overlapping:!0,mediaQuery:"screen and (max-width: 959.9px)",priority:850},{alias:"lt-lg",overlapping:!0,mediaQuery:"screen and (max-width: 1279.9px)",priority:750},{alias:"lt-xl",overlapping:!0,priority:650,mediaQuery:"screen and (max-width: 1919.9px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"screen and (min-width: 600px)",priority:-950},{alias:"gt-sm",overlapping:!0,mediaQuery:"screen and (min-width: 960px)",priority:-850},{alias:"gt-md",overlapping:!0,mediaQuery:"screen and (min-width: 1280px)",priority:-750},{alias:"gt-lg",overlapping:!0,mediaQuery:"screen and (min-width: 1920px)",priority:-650}],L="(orientation: portrait) and (min-width: 600px) and (max-width: 839.9px)",M="(orientation: landscape) and (min-width: 960px) and (max-width: 1279.9px)",j="(orientation: portrait) and (min-width: 840px)",S="(orientation: landscape) and (min-width: 1280px)",T={HANDSET:"(orientation: portrait) and (max-width: 599.9px), (orientation: landscape) and (max-width: 959.9px)",TABLET:"".concat(L," , ").concat(M),WEB:"".concat(j,", ").concat(S," "),HANDSET_PORTRAIT:"(orientation: portrait) and (max-width: 599.9px)",TABLET_PORTRAIT:"".concat(L," "),WEB_PORTRAIT:"".concat(j),HANDSET_LANDSCAPE:"(orientation: landscape) and (max-width: 959.9px)]",TABLET_LANDSCAPE:"".concat(M),WEB_LANDSCAPE:"".concat(S)},P=[{alias:"handset",priority:2e3,mediaQuery:T.HANDSET},{alias:"handset.landscape",priority:2e3,mediaQuery:T.HANDSET_LANDSCAPE},{alias:"handset.portrait",priority:2e3,mediaQuery:T.HANDSET_PORTRAIT},{alias:"tablet",priority:2100,mediaQuery:T.TABLET},{alias:"tablet.landscape",priority:2100,mediaQuery:T.TABLET},{alias:"tablet.portrait",priority:2100,mediaQuery:T.TABLET_PORTRAIT},{alias:"web",priority:2200,mediaQuery:T.WEB,overlapping:!0},{alias:"web.landscape",priority:2200,mediaQuery:T.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",priority:2200,mediaQuery:T.WEB_PORTRAIT,overlapping:!0}],I=/(\.|-|_)/g;function B(e){var t=e.length>0?e.charAt(0):"",n=e.length>1?e.slice(1):"";return t.toUpperCase()+n}var Q=new i.o("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:function(){var e=Object(i.U)(x),t=Object(i.U)(k),n=[].concat.apply([],(e||[]).map((function(e){return Array.isArray(e)?e:[e]})));return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i={};return e.forEach((function(e){i[e.alias]=e})),n.forEach((function(e){i[e.alias]?function(e){if(null==e)throw TypeError("Cannot convert undefined or null to object");for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];for(var r=0,a=n;r<a.length;r++){var l=a[r];if(null!=l)for(var o in l)l.hasOwnProperty(o)&&(e[o]=l[o])}}(i[e.alias],e):i[e.alias]=e})),(t=Object.keys(i).map((function(e){return i[e]}))).forEach((function(e){e.suffix||(e.suffix=e.alias.replace(I,"|").split("|").map(B).join(""),e.overlapping=!!e.overlapping)})),t}((t.disableDefaultBps?[]:O).concat(t.addOrientationBps?P:[]),n)}});function V(e,t){return(t&&t.priority||0)-(e&&e.priority||0)}function R(e,t){return(e.priority||0)-(t.priority||0)}var D,W,N,q=((W=function(){function e(t){_classCallCheck(this,e),this.findByMap=new Map,this.items=_toConsumableArray(t).sort(R)}return _createClass(e,[{key:"findByAlias",value:function(e){return e?this.findWithPredicate(e,(function(t){return t.alias==e})):null}},{key:"findByQuery",value:function(e){return this.findWithPredicate(e,(function(t){return t.mediaQuery==e}))}},{key:"findWithPredicate",value:function(e,t){var n=this.findByMap.get(e);return n||(n=this.items.find(t)||null,this.findByMap.set(e,n)),n||null}},{key:"overlappings",get:function(){return this.items.filter((function(e){return 1==e.overlapping}))}},{key:"aliases",get:function(){return this.items.map((function(e){return e.alias}))}},{key:"suffixes",get:function(){return this.items.map((function(e){return e.suffix?e.suffix:""}))}}]),e}()).ngInjectableDef=Object(i.Lb)({factory:function(){return new W(Object(i.Mb)(Q))},token:W,providedIn:"root"}),W),K=((D=function(){function e(t,n,i){_classCallCheck(this,e),this._zone=t,this._platformId=n,this._document=i,this.source=new u.a(new b(!0)),this.registry=new Map,this._observable$=this.source.asObservable()}return _createClass(e,[{key:"isActive",value:function(e){var t=this.registry.get(e);return!!t&&t.matches}},{key:"observe",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e&&e.length){var i=this._observable$.pipe(Object(p.a)((function(t){return!n||e.indexOf(t.mediaQuery)>-1}))),r=new c.a((function(n){var i=t.registerQuery(e);if(i.length){var r=i.pop();i.forEach((function(e){n.next(e)})),t.source.next(r)}n.complete()}));return Object(f.a)(r,i)}return this._observable$}},{key:"registerQuery",value:function(e){var t=this,n=Array.isArray(e)?e:[e],i=[];return function(e,t){var n=e.filter((function(e){return!z[e]}));if(n.length>0){var i=n.join(", ");try{var r=t.createElement("style");r.setAttribute("type","text/css"),r.styleSheet||r.appendChild(t.createTextNode("\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ".concat(i," {.fx-query-test{ }}\n"))),t.head.appendChild(r),n.forEach((function(e){return z[e]=r}))}catch(a){console.error(a)}}}(n,this._document),n.forEach((function(e){var n=t.registry.get(e);n||((n=t.buildMQL(e)).addListener((function(n){t._zone.run((function(){return t.source.next(new b(n.matches,e))}))})),t.registry.set(e,n)),n.matches&&i.push(new b(!0,e))})),i}},{key:"buildMQL",value:function(e){return function(e,t){return t&&window.matchMedia("all").addListener?window.matchMedia(e):{matches:"all"===e||""===e,media:e,addListener:function(){},removeListener:function(){}}}(e,Object(o.q)(this._platformId))}},{key:"activations",get:function(){var e=[];return this.registry.forEach((function(t,n){t.matches&&e.push(n)})),e}}]),e}()).ngInjectableDef=Object(i.Lb)({factory:function(){return new D(Object(i.Mb)(i.x),Object(i.Mb)(i.z),Object(i.Mb)(o.c))},token:D,providedIn:"root"}),D),z={},H={alias:"print",mediaQuery:"print",priority:1e3},F=((N=function(){function e(t,n){_classCallCheck(this,e),this.breakpoints=t,this.layoutConfig=n,this.isPrinting=!1,this.queue=new G,this.deactivations=[]}return _createClass(e,[{key:"withPrintQuery",value:function(e){return[].concat(_toConsumableArray(e),["print"])}},{key:"isPrintEvent",value:function(e){return e.mediaQuery.startsWith("print")}},{key:"getEventBreakpoints",value:function(e){var t=e.mediaQuery,n=this.breakpoints.findByQuery(t);return(n?[].concat(_toConsumableArray(this.printBreakPoints),[n]):this.printBreakPoints).sort(V)}},{key:"updateEvent",value:function(e){var t=this.breakpoints.findByQuery(e.mediaQuery);return this.isPrintEvent(e)&&(t=this.getEventBreakpoints(e)[0],e.mediaQuery=t?t.mediaQuery:""),_(e,t)}},{key:"interceptEvents",value:function(e){var t=this;return function(n){t.isPrintEvent(n)?n.matches&&!t.isPrinting?(t.startPrinting(e,t.getEventBreakpoints(n)),e.updateStyles()):!n.matches&&t.isPrinting&&(t.stopPrinting(e),e.updateStyles()):t.collectActivations(n)}}},{key:"blockPropagation",value:function(){var e=this;return function(t){return!(e.isPrinting||e.isPrintEvent(t))}}},{key:"startPrinting",value:function(e,t){this.isPrinting=!0,e.activatedBreakpoints=this.queue.addPrintBreakpoints(t)}},{key:"stopPrinting",value:function(e){e.activatedBreakpoints=this.deactivations,this.deactivations=[],this.queue.clear(),this.isPrinting=!1}},{key:"collectActivations",value:function(e){if(!this.isPrinting)if(e.matches)this.deactivations=[];else{var t=this.breakpoints.findByQuery(e.mediaQuery);t&&(this.deactivations.push(t),this.deactivations.sort(V))}}},{key:"printAlias",get:function(){return this.layoutConfig.printWithBreakpoints||[]}},{key:"printBreakPoints",get:function(){var e=this;return this.printAlias.map((function(t){return e.breakpoints.findByAlias(t)})).filter((function(e){return null!==e}))}}]),e}()).ngInjectableDef=Object(i.Lb)({factory:function(){return new N(Object(i.Mb)(q),Object(i.Mb)(k))},token:N,providedIn:"root"}),N),G=function(){function e(){_classCallCheck(this,e),this.printBreakpoints=[]}return _createClass(e,[{key:"addPrintBreakpoints",value:function(e){var t=this;return e.push(H),e.sort(V),e.forEach((function(e){return t.addBreakpoint(e)})),this.printBreakpoints}},{key:"addBreakpoint",value:function(e){e&&void 0===this.printBreakpoints.find((function(t){return t.mediaQuery===e.mediaQuery}))&&(this.printBreakpoints=function(e){return!!e&&e.mediaQuery.startsWith("print")}(e)?[e].concat(_toConsumableArray(this.printBreakpoints)):[].concat(_toConsumableArray(this.printBreakpoints),[e]))}},{key:"clear",value:function(){this.printBreakpoints=[]}}]),e}();function U(e){for(var t in e){var n=e[t]||"";switch(t){case"display":e.display="flex"===n?["-webkit-flex","flex"]:"inline-flex"===n?["-webkit-inline-flex","inline-flex"]:n;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":e["-webkit-"+t]=n;break;case"flex-direction":e["-webkit-flex-direction"]=n=n||"row",e["flex-direction"]=n;break;case"order":e.order=e["-webkit-"+t]=isNaN(+n)?"0":n}}return e}var Y,$,Z=((Y=function(){function e(t,n,i,r){_classCallCheck(this,e),this._serverStylesheet=t,this._serverModuleLoaded=n,this._platformId=i,this.layoutConfig=r}return _createClass(e,[{key:"applyStyleToElement",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i={};"string"==typeof t&&(i[t]=n,t=i),i=this.layoutConfig.disableVendorPrefixes?t:U(t),this._applyMultiValueStyleToElement(i,e)}},{key:"applyStyleToElements",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=this.layoutConfig.disableVendorPrefixes?e:U(e);n.forEach((function(e){t._applyMultiValueStyleToElement(i,e)}))}},{key:"getFlowDirection",value:function(e){var t=this.lookupStyle(e,"flex-direction");return[t||"row",this.lookupInlineStyle(e,"flex-direction")||Object(o.r)(this._platformId)&&this._serverModuleLoaded?t:""]}},{key:"lookupAttributeValue",value:function(e,t){return e.getAttribute(t)||""}},{key:"lookupInlineStyle",value:function(e,t){return Object(o.q)(this._platformId)?e.style.getPropertyValue(t):this._getServerStyle(e,t)}},{key:"lookupStyle",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i="";return e&&((i=this.lookupInlineStyle(e,t))||(Object(o.q)(this._platformId)?n||(i=getComputedStyle(e).getPropertyValue(t)):this._serverModuleLoaded&&(i=this._serverStylesheet.getStyleForElement(e,t)))),i?i.trim():""}},{key:"_applyMultiValueStyleToElement",value:function(e,t){var n=this;Object.keys(e).sort().forEach((function(i){var r=e[i],a=Array.isArray(r)?r:[r];a.sort();var l=!0,s=!1,u=void 0;try{for(var c,f=a[Symbol.iterator]();!(l=(c=f.next()).done);l=!0){var h=c.value;h=h?h+"":"",Object(o.q)(n._platformId)||!n._serverModuleLoaded?Object(o.q)(n._platformId)?t.style.setProperty(i,h):n._setServerStyle(t,i,h):n._serverStylesheet.addStyleToElement(t,i,h)}}catch(p){s=!0,u=p}finally{try{l||null==f.return||f.return()}finally{if(s)throw u}}}))}},{key:"_setServerStyle",value:function(e,t,n){t=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var i=this._readStyleAttribute(e);i[t]=n||"",this._writeStyleAttribute(e,i)}},{key:"_getServerStyle",value:function(e,t){return this._readStyleAttribute(e)[t]||""}},{key:"_readStyleAttribute",value:function(e){var t={},n=e.getAttribute("style");if(n)for(var i=n.split(/;+/g),r=0;r<i.length;r++){var a=i[r].trim();if(a.length>0){var l=a.indexOf(":");if(-1===l)throw new Error("Invalid CSS style: ".concat(a));t[a.substr(0,l).trim()]=a.substr(l+1).trim()}}return t}},{key:"_writeStyleAttribute",value:function(e,t){var n="";for(var i in t)t[i]&&(n+=i+":"+t[i]+";");e.setAttribute("style",n)}}]),e}()).ngInjectableDef=Object(i.Lb)({factory:function(){return new Y(Object(i.Mb)(m,8),Object(i.Mb)(w,8),Object(i.Mb)(i.z),Object(i.Mb)(k))},token:Y,providedIn:"root"}),Y),J=function(){function e(){_classCallCheck(this,e),this.shouldCache=!0}return _createClass(e,[{key:"sideEffect",value:function(e,t,n){}}]),e}(),X=(($=function(){function e(t,n,i){_classCallCheck(this,e),this.matchMedia=t,this.breakpoints=n,this.hook=i,this.activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.updateMap=new WeakMap,this.clearMap=new WeakMap,this.subject=new s.a,this.observeActivations()}return _createClass(e,[{key:"onMediaChange",value:function(e){var t=this.findByQuery(e.mediaQuery);t&&((e=_(e,t)).matches&&-1===this.activatedBreakpoints.indexOf(t)?(this.activatedBreakpoints.push(t),this.activatedBreakpoints.sort(V),this.updateStyles()):e.matches||-1===this.activatedBreakpoints.indexOf(t)||(this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(t),1),this.activatedBreakpoints.sort(V),this.updateStyles()))}},{key:"init",value:function(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];ee(this.updateMap,e,t,n),ee(this.clearMap,e,t,i),this.buildElementKeyMap(e,t),this.watchExtraTriggers(e,t,r)}},{key:"getValue",value:function(e,t,n){var i=this.elementMap.get(e);if(i){var r=void 0!==n?i.get(n):this.getActivatedValues(i,t);if(r)return r.get(t)}}},{key:"hasValue",value:function(e,t){var n=this.elementMap.get(e);if(n){var i=this.getActivatedValues(n,t);if(i)return void 0!==i.get(t)||!1}return!1}},{key:"setValue",value:function(e,t,n,i){var r=this.elementMap.get(e);if(r){var a=(r.get(i)||new Map).set(t,n);r.set(i,a),this.elementMap.set(e,r)}else r=(new Map).set(i,(new Map).set(t,n)),this.elementMap.set(e,r);var l=this.getValue(e,t);void 0!==l&&this.updateElement(e,t,l)}},{key:"trackValue",value:function(e,t){return this.subject.asObservable().pipe(Object(p.a)((function(n){return n.element===e&&n.key===t})))}},{key:"updateStyles",value:function(){var e=this;this.elementMap.forEach((function(t,n){var i=new Set(e.elementKeyMap.get(n)),r=e.getActivatedValues(t);r&&r.forEach((function(t,r){e.updateElement(n,r,t),i.delete(r)})),i.forEach((function(i){if(r=e.getActivatedValues(t,i)){var a=r.get(i);e.updateElement(n,i,a)}else e.clearElement(n,i)}))}))}},{key:"clearElement",value:function(e,t){var n=this.clearMap.get(e);if(n){var i=n.get(t);i&&(i(),this.subject.next({element:e,key:t,value:""}))}}},{key:"updateElement",value:function(e,t,n){var i=this.updateMap.get(e);if(i){var r=i.get(t);r&&(r(n),this.subject.next({element:e,key:t,value:n}))}}},{key:"releaseElement",value:function(e){var t=this.watcherMap.get(e);t&&(t.forEach((function(e){return e.unsubscribe()})),this.watcherMap.delete(e));var n=this.elementMap.get(e);n&&(n.forEach((function(e,t){return n.delete(t)})),this.elementMap.delete(e))}},{key:"triggerUpdate",value:function(e,t){var n=this,i=this.elementMap.get(e);if(i){var r=this.getActivatedValues(i,t);r&&(t?this.updateElement(e,t,r.get(t)):r.forEach((function(t,i){return n.updateElement(e,i,t)})))}}},{key:"buildElementKeyMap",value:function(e,t){var n=this.elementKeyMap.get(e);n||(n=new Set,this.elementKeyMap.set(e,n)),n.add(t)}},{key:"watchExtraTriggers",value:function(e,t,n){var i=this;if(n&&n.length){var r=this.watcherMap.get(e);if(r||(r=new Map,this.watcherMap.set(e,r)),!r.get(t)){var a=Object(f.a).apply(void 0,_toConsumableArray(n)).subscribe((function(){var n=i.getValue(e,t);i.updateElement(e,t,n)}));r.set(t,a)}}}},{key:"findByQuery",value:function(e){return this.breakpoints.findByQuery(e)}},{key:"getActivatedValues",value:function(e,t){for(var n=0;n<this.activatedBreakpoints.length;n++){var i=e.get(this.activatedBreakpoints[n].alias);if(i&&(void 0===t||i.has(t)))return i}var r=e.get("");return void 0===t||r&&r.has(t)?r:void 0}},{key:"observeActivations",value:function(){var e=this.breakpoints.items.map((function(e){return e.mediaQuery}));this.matchMedia.observe(this.hook.withPrintQuery(e)).pipe(Object(d.a)(this.hook.interceptEvents(this)),Object(p.a)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this))}},{key:"activatedAlias",get:function(){return this.activatedBreakpoints[0]?this.activatedBreakpoints[0].alias:""}}]),e}()).ngInjectableDef=Object(i.Lb)({factory:function(){return new $(Object(i.Mb)(K),Object(i.Mb)(q),Object(i.Mb)(F))},token:$,providedIn:"root"}),$);function ee(e,t,n,i){if(void 0!==i){var r=e.get(t);r||(r=new Map,e.set(t,r)),r.set(n,i)}}var te="inline",ne=["row","column","row-reverse","column-reverse"];function ie(e){var t=_slicedToArray((e=e?e.toLowerCase():"").split(" "),3),n=t[0],i=t[1],r=t[2];return ne.find((function(e){return e===n}))||(n=ne[0]),i===te&&(i=r!==te?r:"",r=te),[n,ae(i),!!r]}function re(e){return _slicedToArray(ie(e),1)[0].indexOf("row")>-1}function ae(e){if(e)switch(e.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":e="wrap-reverse";break;case"no":case"none":case"nowrap":e="nowrap";break;default:e="wrap"}return e}var le,oe,se=((le=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"buildStyles",value:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{display:n?"inline-flex":"flex","box-sizing":"border-box","flex-direction":e,"flex-wrap":t||null}}((t=_slicedToArray(ie(e),3))[0],t[1],t[2]);var t}}]),t}(J)).ngInjectableDef=Object(i.Lb)({factory:function(){return new le},token:le,providedIn:"root"}),le),ue=["fxLayout","fxLayout.xs","fxLayout.sm","fxLayout.md","fxLayout.lg","fxLayout.xl","fxLayout.lt-sm","fxLayout.lt-md","fxLayout.lt-lg","fxLayout.lt-xl","fxLayout.gt-xs","fxLayout.gt-sm","fxLayout.gt-md","fxLayout.gt-lg"],ce=function(e){function t(){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))).inputs=ue,e}return _inherits(t,e),t}(function(e){function t(e,n,i,r){var a;return _classCallCheck(this,t),(a=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,i,n,r))).elRef=e,a.styleUtils=n,a.styleBuilder=i,a.marshal=r,a.DIRECTIVE_KEY="layout",a.styleCache=fe,a.init(),a}return _inherits(t,e),t}(E)),fe=new Map,he=((oe=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"buildStyles",value:function(e,t){var n={},i=_slicedToArray(e.split(" "),2),r=i[0],a=i[1];switch(r){case"center":n["justify-content"]="center";break;case"space-around":n["justify-content"]="space-around";break;case"space-between":n["justify-content"]="space-between";break;case"space-evenly":n["justify-content"]="space-evenly";break;case"end":case"flex-end":n["justify-content"]="flex-end";break;case"start":case"flex-start":default:n["justify-content"]="flex-start"}switch(a){case"start":case"flex-start":n["align-items"]=n["align-content"]="flex-start";break;case"center":n["align-items"]=n["align-content"]="center";break;case"end":case"flex-end":n["align-items"]=n["align-content"]="flex-end";break;case"space-between":n["align-content"]="space-between",n["align-items"]="stretch";break;case"space-around":n["align-content"]="space-around",n["align-items"]="stretch";break;case"baseline":n["align-content"]="stretch",n["align-items"]="baseline";break;case"stretch":default:n["align-items"]=n["align-content"]="stretch"}return function(e){if(null==e)throw TypeError("Cannot convert undefined or null to object");for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];for(var r=0,a=n;r<a.length;r++){var l=a[r];if(null!=l)for(var o in l)l.hasOwnProperty(o)&&(e[o]=l[o])}return e}(n,{display:t.inline?"inline-flex":"flex","flex-direction":t.layout,"box-sizing":"border-box","max-width":"stretch"===a?re(t.layout)?null:"100%":null,"max-height":"stretch"===a&&re(t.layout)?"100%":null})}}]),t}(J)).ngInjectableDef=Object(i.Lb)({factory:function(){return new oe},token:oe,providedIn:"root"}),oe),pe=["fxLayoutAlign","fxLayoutAlign.xs","fxLayoutAlign.sm","fxLayoutAlign.md","fxLayoutAlign.lg","fxLayoutAlign.xl","fxLayoutAlign.lt-sm","fxLayoutAlign.lt-md","fxLayoutAlign.lt-lg","fxLayoutAlign.lt-xl","fxLayoutAlign.gt-xs","fxLayoutAlign.gt-sm","fxLayoutAlign.gt-md","fxLayoutAlign.gt-lg"],ye=function(e){function t(){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))).inputs=pe,e}return _inherits(t,e),t}(function(e){function t(e,n,i,r){var a;return _classCallCheck(this,t),(a=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,i,n,r))).elRef=e,a.styleUtils=n,a.styleBuilder=i,a.marshal=r,a.DIRECTIVE_KEY="layout-align",a.layout="row",a.inline=!1,a.init(),a.marshal.trackValue(a.nativeElement,"layout").pipe(Object(y.a)(a.destroySubject)).subscribe(a.onLayoutChange.bind(_assertThisInitialized(a))),a}return _inherits(t,e),_createClass(t,[{key:"updateWithValue",value:function(e){var t=this.layout||"row",n=this.inline;"row"===t&&n?this.styleCache=ge:"row"!==t||n?"row-reverse"===t&&n?this.styleCache=we:"row-reverse"!==t||n?"column"===t&&n?this.styleCache=ke:"column"!==t||n?"column-reverse"===t&&n?this.styleCache=xe:"column-reverse"!==t||n||(this.styleCache=me):this.styleCache=ve:this.styleCache=be:this.styleCache=de,this.addStyles(e,{layout:t,inline:n})}},{key:"onLayoutChange",value:function(e){var t=this,n=e.value.split(" ");this.layout=n[0],this.inline=e.value.includes("inline"),ne.find((function(e){return e===t.layout}))||(this.layout="row"),this.triggerUpdate()}}]),t}(E)),de=new Map,ve=new Map,be=new Map,me=new Map,ge=new Map,ke=new Map,we=new Map,xe=new Map,_e=function e(){_classCallCheck(this,e)},Ce=n("l5mm"),Ae=n("AytR"),Ee=n("+cCG"),Oe=function(){function e(t,n,i,r,a){var l=this;_classCallCheck(this,e),this.title=t,this.meta=n,this.analytics=i,this.production=Ae.a.production,this.destroy$=new s.a,a.runOutsideAngular((function(){return Object(Ce.a)(500).pipe(Object(y.a)(l.destroy$)).subscribe((function(){a.run((function(){return r.detectChanges()}))}))}))}return _createClass(e,[{key:"ngOnInit",value:function(){this.analytics.setCurrentScreen("start-menu"),this.title.setTitle("Tanks - Retro arcade shooter"),this.meta.updateTag({name:"description",content:"You are the last tank of your army, with no choice but to protect your fortress from the enemy's army that is attacking you, but you must also watch out for your life. Destroy the enemy as soon as possible, but watch out for their bullets. Break down the walls to create strategic positions. Don't let them get the base at all costs."})}},{key:"ngOnDestroy",value:function(){this.destroy$.next(!0),this.destroy$.complete()}},{key:"canResume",get:function(){return!1===(e=Ee.a.getState()).currentGame.isGameOver||!0===e.currentGame.canExtraLife;var e}}]),e}(),Le=n("cUpR"),Me=n("efrx"),je=i.ob({encapsulation:0,styles:[['.menu[_ngcontent-%COMP%]{width:100vw;height:100vh}.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:left;display:block;font-family:inherit;background:0 0;border:none;color:red;font-size:54px;cursor:pointer;outline:0}.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before{content:"- "}.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover::before{content:"> "}@media only screen and (max-width:480px){.menu[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;left:0;-webkit-transform:translate(0,-50%);transform:translate(0,-50%);padding-left:10px}}']],data:{}});function Se(e){return i.Hb(0,[(e()(),i.qb(0,0,null,null,2,"button",[["routerLink","/game/resume"]],null,[[null,"click"]],(function(e,t,n){var r=!0;return"click"===t&&(r=!1!==i.Bb(e,1).onClick()&&r),r}),null,null)),i.pb(1,16384,null,0,l.l,[l.k,l.a,[8,null],i.C,i.k],{routerLink:[0,"routerLink"]},null),(e()(),i.Gb(-1,null,["Resume game"]))],(function(e,t){e(t,1,0,"/game/resume")}),null)}function Te(e){return i.Hb(0,[(e()(),i.qb(0,0,null,null,2,"button",[["routerLink","/map-editor"]],null,[[null,"click"]],(function(e,t,n){var r=!0;return"click"===t&&(r=!1!==i.Bb(e,1).onClick()&&r),r}),null,null)),i.pb(1,16384,null,0,l.l,[l.k,l.a,[8,null],i.C,i.k],{routerLink:[0,"routerLink"]},null),(e()(),i.Gb(-1,null,["Level editor"]))],(function(e,t){e(t,1,0,"/map-editor")}),null)}function Pe(e){return i.Hb(2,[(e()(),i.qb(0,0,null,null,13,"div",[["class","menu"],["fxLayout","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),i.pb(1,671744,null,0,ce,[i.k,Z,[2,se],X],{fxLayout:[0,"fxLayout"]},null),i.pb(2,671744,null,0,ye,[i.k,Z,[2,he],X],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(e()(),i.qb(3,0,null,null,10,"div",[],null,null,null,null,null)),(e()(),i.gb(16777216,null,null,1,null,Se)),i.pb(5,16384,null,0,o.j,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(e()(),i.qb(6,0,null,null,2,"button",[["routerLink","/game"]],null,[[null,"click"]],(function(e,t,n){var r=!0;return"click"===t&&(r=!1!==i.Bb(e,7).onClick()&&r),r}),null,null)),i.pb(7,16384,null,0,l.l,[l.k,l.a,[8,null],i.C,i.k],{routerLink:[0,"routerLink"]},null),(e()(),i.Gb(-1,null,["New game"])),(e()(),i.gb(16777216,null,null,1,null,Te)),i.pb(10,16384,null,0,o.j,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(e()(),i.qb(11,0,null,null,2,"button",[["routerLink","/privacy-policy"]],null,[[null,"click"]],(function(e,t,n){var r=!0;return"click"===t&&(r=!1!==i.Bb(e,12).onClick()&&r),r}),null,null)),i.pb(12,16384,null,0,l.l,[l.k,l.a,[8,null],i.C,i.k],{routerLink:[0,"routerLink"]},null),(e()(),i.Gb(-1,null,["Privacy Policy"]))],(function(e,t){var n=t.component;e(t,1,0,"column"),e(t,2,0,"center center"),e(t,5,0,n.canResume),e(t,7,0,"/game"),e(t,10,0,!n.production),e(t,12,0,"/privacy-policy")}),null)}var Ie=i.mb("app-start-menu",Oe,(function(e){return i.Hb(0,[(e()(),i.qb(0,0,null,null,1,"app-start-menu",[],null,null,null,Pe,je)),i.pb(1,245760,null,0,Oe,[Le.i,Le.h,Me.a,i.h,i.x],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]),Be=function e(){_classCallCheck(this,e)},Qe=n("IP0z");n("KCVW");var Ve=function e(){_classCallCheck(this,e)},Re=function e(){_classCallCheck(this,e)},De=function(){function e(t,n){_classCallCheck(this,e),Object(o.r)(n)&&!t&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}return _createClass(e,null,[{key:"withConfig",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return{ngModule:e,providers:t.serverLoaded?[{provide:k,useValue:Object.assign({},g,t)},{provide:x,useValue:n,multi:!0},{provide:w,useValue:!0}]:[{provide:k,useValue:Object.assign({},g,t)},{provide:x,useValue:n,multi:!0}]}}}]),e}();n.d(t,"StartMenuModuleNgFactory",(function(){return We}));var We=i.nb(r,[],(function(e){return i.zb([i.Ab(512,i.j,i.Z,[[8,[a.a,Ie]],[3,i.j],i.v]),i.Ab(4608,o.l,o.k,[i.s,[2,o.x]]),i.Ab(5120,i.b,(function(e,t){return[(n=e,i=t,function(){if(Object(o.q)(i)){var e=Array.from(n.querySelectorAll("[class*=flex-layout-]")),t=/\bflex-layout-.+?\b/g;e.forEach((function(e){e.classList.contains("flex-layout-ssr")&&e.parentNode?e.parentNode.removeChild(e):e.className.replace(t,"")}))}})];var n,i}),[o.c,i.z]),i.Ab(1073742336,o.b,o.b,[]),i.Ab(1073742336,l.n,l.n,[[2,l.s],[2,l.k]]),i.Ab(1073742336,Be,Be,[]),i.Ab(1073742336,v,v,[]),i.Ab(1073742336,Qe.a,Qe.a,[]),i.Ab(1073742336,_e,_e,[]),i.Ab(1073742336,Ve,Ve,[]),i.Ab(1073742336,Re,Re,[]),i.Ab(1073742336,De,De,[[2,w],i.z]),i.Ab(1073742336,r,r,[]),i.Ab(1024,l.i,(function(){return[[{path:"",component:Oe}]]}),[])])}))}}]);