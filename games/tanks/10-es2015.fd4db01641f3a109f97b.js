(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{eZVf:function(e,t,i){"use strict";i.r(t);var n=i("8Y7J");class r{}var s=i("pMnS"),a=i("iInd"),l=i("SVse"),o=i("XNiG"),u=i("2Vo4"),c=i("HDdC"),h=i("VRyK");i("3N8a"),i("IjjT"),i("LRne"),i("xgIS");var p=i("pLZG"),d=(i("lJxs"),i("Kj3r"),i("eIep"),i("1G5W")),y=(i("IzEk"),i("vkgz"));class f{}class m{constructor(e=!1,t="all",i="",n="",r=0){this.matches=e,this.mediaQuery=t,this.mqAlias=i,this.suffix=n,this.priority=r,this.property=""}clone(){return new m(this.matches,this.mediaQuery,this.mqAlias,this.suffix)}}let b=(()=>{class e{constructor(){this.stylesheet=new Map}addStyleToElement(e,t,i){const n=this.stylesheet.get(e);n?n.set(t,i):this.stylesheet.set(e,new Map([[t,i]]))}clearStyles(){this.stylesheet.clear()}getStyleForElement(e,t){const i=this.stylesheet.get(e);let n="";if(i){const e=i.get(t);"number"!=typeof e&&"string"!=typeof e||(n=e+"")}return n}}return e.ngInjectableDef=Object(n.Lb)({factory:function(){return new e},token:e,providedIn:"root"}),e})();const g={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[]},x=new n.o("Flex Layout token, config options for the library",{providedIn:"root",factory:()=>g}),v=new n.o("FlexLayoutServerLoaded",{providedIn:"root",factory:()=>!1}),w=new n.o("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:()=>null});function k(e,t){return e=e?e.clone():new m,t&&(e.mqAlias=t.alias,e.mediaQuery=t.mediaQuery,e.suffix=t.suffix,e.priority=t.priority),e}const E="inline",A=["row","column","row-reverse","column-reverse"];function M(e){if(e)switch(e.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":e="wrap-reverse";break;case"no":case"none":case"nowrap":e="nowrap";break;default:e="wrap"}return e}class L{constructor(e,t,i,n){this.elementRef=e,this.styleBuilder=t,this.styler=i,this.marshal=n,this.DIRECTIVE_KEY="",this.inputs=[],this.mru={},this.destroySubject=new o.a,this.styleCache=new Map}get parentElement(){return this.elementRef.nativeElement.parentElement}get nativeElement(){return this.elementRef.nativeElement}get activatedValue(){return this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY)}set activatedValue(e){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,e,this.marshal.activatedAlias)}ngOnChanges(e){Object.keys(e).forEach(t=>{if(-1!==this.inputs.indexOf(t)){const i=t.split(".").slice(1).join(".");this.setValue(e[t].currentValue,i)}})}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete(),this.marshal.releaseElement(this.nativeElement)}init(e=[]){this.marshal.init(this.elementRef.nativeElement,this.DIRECTIVE_KEY,this.updateWithValue.bind(this),this.clearStyles.bind(this),e)}addStyles(e,t){const i=this.styleBuilder,n=i.shouldCache;let r=this.styleCache.get(e);r&&n||(r=i.buildStyles(e,t),n&&this.styleCache.set(e,r)),this.mru=Object.assign({},r),this.applyStyleToElement(r),i.sideEffect(e,r,t)}clearStyles(){Object.keys(this.mru).forEach(e=>{this.mru[e]=""}),this.applyStyleToElement(this.mru),this.mru={}}triggerUpdate(){this.marshal.triggerUpdate(this.nativeElement,this.DIRECTIVE_KEY)}getFlexFlowDirection(e,t=!1){if(e){const[i,n]=this.styler.getFlowDirection(e);if(!n&&t){const t=function(e){let[t,i,n]=function(e){e=e?e.toLowerCase():"";let[t,i,n]=e.split(" ");return A.find(e=>e===t)||(t=A[0]),i===E&&(i=n!==E?n:"",n=E),[t,M(i),!!n]}(e);return function(e,t=null,i=!1){return{display:i?"inline-flex":"flex","box-sizing":"border-box","flex-direction":e,"flex-wrap":t||null}}(t,i,n)}(i);this.styler.applyStyleToElements(t,[e])}return i.trim()}return"row"}applyStyleToElement(e,t,i=this.nativeElement){this.styler.applyStyleToElement(i,e,t)}setValue(e,t){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,e,t)}updateWithValue(e){this.addStyles(e)}}const j=[{alias:"xs",mediaQuery:"screen and (min-width: 0px) and (max-width: 599.9px)",priority:1e3},{alias:"sm",mediaQuery:"screen and (min-width: 600px) and (max-width: 959.9px)",priority:900},{alias:"md",mediaQuery:"screen and (min-width: 960px) and (max-width: 1279.9px)",priority:800},{alias:"lg",mediaQuery:"screen and (min-width: 1280px) and (max-width: 1919.9px)",priority:700},{alias:"xl",mediaQuery:"screen and (min-width: 1920px) and (max-width: 4999.9px)",priority:600},{alias:"lt-sm",overlapping:!0,mediaQuery:"screen and (max-width: 599.9px)",priority:950},{alias:"lt-md",overlapping:!0,mediaQuery:"screen and (max-width: 959.9px)",priority:850},{alias:"lt-lg",overlapping:!0,mediaQuery:"screen and (max-width: 1279.9px)",priority:750},{alias:"lt-xl",overlapping:!0,priority:650,mediaQuery:"screen and (max-width: 1919.9px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"screen and (min-width: 600px)",priority:-950},{alias:"gt-sm",overlapping:!0,mediaQuery:"screen and (min-width: 960px)",priority:-850},{alias:"gt-md",overlapping:!0,mediaQuery:"screen and (min-width: 1280px)",priority:-750},{alias:"gt-lg",overlapping:!0,mediaQuery:"screen and (min-width: 1920px)",priority:-650}],S="(orientation: portrait) and (min-width: 600px) and (max-width: 839.9px)",O="(orientation: landscape) and (min-width: 960px) and (max-width: 1279.9px)",C="(orientation: portrait) and (min-width: 840px)",B="(orientation: landscape) and (min-width: 1280px)",I={HANDSET:"(orientation: portrait) and (max-width: 599.9px), (orientation: landscape) and (max-width: 959.9px)",TABLET:`${S} , ${O}`,WEB:`${C}, ${B} `,HANDSET_PORTRAIT:"(orientation: portrait) and (max-width: 599.9px)",TABLET_PORTRAIT:`${S} `,WEB_PORTRAIT:`${C}`,HANDSET_LANDSCAPE:"(orientation: landscape) and (max-width: 959.9px)]",TABLET_LANDSCAPE:`${O}`,WEB_LANDSCAPE:`${B}`},_=[{alias:"handset",priority:2e3,mediaQuery:I.HANDSET},{alias:"handset.landscape",priority:2e3,mediaQuery:I.HANDSET_LANDSCAPE},{alias:"handset.portrait",priority:2e3,mediaQuery:I.HANDSET_PORTRAIT},{alias:"tablet",priority:2100,mediaQuery:I.TABLET},{alias:"tablet.landscape",priority:2100,mediaQuery:I.TABLET},{alias:"tablet.portrait",priority:2100,mediaQuery:I.TABLET_PORTRAIT},{alias:"web",priority:2200,mediaQuery:I.WEB,overlapping:!0},{alias:"web.landscape",priority:2200,mediaQuery:I.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",priority:2200,mediaQuery:I.WEB_PORTRAIT,overlapping:!0}],P=/(\.|-|_)/g;function T(e){let t=e.length>0?e.charAt(0):"",i=e.length>1?e.slice(1):"";return t.toUpperCase()+i}const Q=new n.o("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:()=>{const e=Object(n.U)(w),t=Object(n.U)(x),i=[].concat.apply([],(e||[]).map(e=>Array.isArray(e)?e:[e]));return function(e,t=[]){const i={};return e.forEach(e=>{i[e.alias]=e}),t.forEach(e=>{i[e.alias]?function(e,...t){if(null==e)throw TypeError("Cannot convert undefined or null to object");for(let i of t)if(null!=i)for(let t in i)i.hasOwnProperty(t)&&(e[t]=i[t])}(i[e.alias],e):i[e.alias]=e}),(n=Object.keys(i).map(e=>i[e])).forEach(e=>{e.suffix||(e.suffix=function(e){return e.replace(P,"|").split("|").map(T).join("")}(e.alias),e.overlapping=!!e.overlapping)}),n;var n}((t.disableDefaultBps?[]:j).concat(t.addOrientationBps?_:[]),i)}});function V(e,t){return(t&&t.priority||0)-(e&&e.priority||0)}function D(e,t){return(e.priority||0)-(t.priority||0)}let R=(()=>{class e{constructor(e){this.findByMap=new Map,this.items=[...e].sort(D)}findByAlias(e){return e?this.findWithPredicate(e,t=>t.alias==e):null}findByQuery(e){return this.findWithPredicate(e,t=>t.mediaQuery==e)}get overlappings(){return this.items.filter(e=>1==e.overlapping)}get aliases(){return this.items.map(e=>e.alias)}get suffixes(){return this.items.map(e=>e.suffix?e.suffix:"")}findWithPredicate(e,t){let i=this.findByMap.get(e);return i||(i=this.items.find(t)||null,this.findByMap.set(e,i)),i||null}}return e.ngInjectableDef=Object(n.Lb)({factory:function(){return new e(Object(n.Mb)(Q))},token:e,providedIn:"root"}),e})(),N=(()=>{class e{constructor(e,t,i){this._zone=e,this._platformId=t,this._document=i,this.source=new u.a(new m(!0)),this.registry=new Map,this._observable$=this.source.asObservable()}get activations(){const e=[];return this.registry.forEach((t,i)=>{t.matches&&e.push(i)}),e}isActive(e){const t=this.registry.get(e);return!!t&&t.matches}observe(e,t=!1){if(e&&e.length){const i=this._observable$.pipe(Object(p.a)(i=>!t||e.indexOf(i.mediaQuery)>-1)),n=new c.a(t=>{const i=this.registerQuery(e);if(i.length){const e=i.pop();i.forEach(e=>{t.next(e)}),this.source.next(e)}t.complete()});return Object(h.a)(n,i)}return this._observable$}registerQuery(e){const t=Array.isArray(e)?e:[e],i=[];return function(e,t){const i=e.filter(e=>!W[e]);if(i.length>0){const e=i.join(", ");try{const n=t.createElement("style");n.setAttribute("type","text/css"),n.styleSheet||n.appendChild(t.createTextNode(`\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${e} {.fx-query-test{ }}\n`)),t.head.appendChild(n),i.forEach(e=>W[e]=n)}catch(n){console.error(n)}}}(t,this._document),t.forEach(e=>{let t=this.registry.get(e);t||((t=this.buildMQL(e)).addListener(t=>{this._zone.run(()=>this.source.next(new m(t.matches,e)))}),this.registry.set(e,t)),t.matches&&i.push(new m(!0,e))}),i}buildMQL(e){return function(e,t){return t&&window.matchMedia("all").addListener?window.matchMedia(e):{matches:"all"===e||""===e,media:e,addListener:()=>{},removeListener:()=>{}}}(e,Object(l.q)(this._platformId))}}return e.ngInjectableDef=Object(n.Lb)({factory:function(){return new e(Object(n.Mb)(n.x),Object(n.Mb)(n.z),Object(n.Mb)(l.c))},token:e,providedIn:"root"}),e})();const W={},q="print",K={alias:q,mediaQuery:q,priority:1e3};let z=(()=>{class e{constructor(e,t){this.breakpoints=e,this.layoutConfig=t,this.isPrinting=!1,this.queue=new $,this.deactivations=[]}withPrintQuery(e){return[...e,q]}isPrintEvent(e){return e.mediaQuery.startsWith(q)}get printAlias(){return this.layoutConfig.printWithBreakpoints||[]}get printBreakPoints(){return this.printAlias.map(e=>this.breakpoints.findByAlias(e)).filter(e=>null!==e)}getEventBreakpoints({mediaQuery:e}){const t=this.breakpoints.findByQuery(e);return(t?[...this.printBreakPoints,t]:this.printBreakPoints).sort(V)}updateEvent(e){let t=this.breakpoints.findByQuery(e.mediaQuery);return this.isPrintEvent(e)&&(t=this.getEventBreakpoints(e)[0],e.mediaQuery=t?t.mediaQuery:""),k(e,t)}interceptEvents(e){return t=>{this.isPrintEvent(t)?t.matches&&!this.isPrinting?(this.startPrinting(e,this.getEventBreakpoints(t)),e.updateStyles()):!t.matches&&this.isPrinting&&(this.stopPrinting(e),e.updateStyles()):this.collectActivations(t)}}blockPropagation(){return e=>!(this.isPrinting||this.isPrintEvent(e))}startPrinting(e,t){this.isPrinting=!0,e.activatedBreakpoints=this.queue.addPrintBreakpoints(t)}stopPrinting(e){e.activatedBreakpoints=this.deactivations,this.deactivations=[],this.queue.clear(),this.isPrinting=!1}collectActivations(e){if(!this.isPrinting)if(e.matches)this.deactivations=[];else{const t=this.breakpoints.findByQuery(e.mediaQuery);t&&(this.deactivations.push(t),this.deactivations.sort(V))}}}return e.ngInjectableDef=Object(n.Lb)({factory:function(){return new e(Object(n.Mb)(R),Object(n.Mb)(x))},token:e,providedIn:"root"}),e})();class ${constructor(){this.printBreakpoints=[]}addPrintBreakpoints(e){return e.push(K),e.sort(V),e.forEach(e=>this.addBreakpoint(e)),this.printBreakpoints}addBreakpoint(e){e&&void 0===this.printBreakpoints.find(t=>t.mediaQuery===e.mediaQuery)&&(this.printBreakpoints=function(e){return!!e&&e.mediaQuery.startsWith(q)}(e)?[e,...this.printBreakpoints]:[...this.printBreakpoints,e])}clear(){this.printBreakpoints=[]}}function F(e){for(let t in e){let i=e[t]||"";switch(t){case"display":e.display="flex"===i?["-webkit-flex","flex"]:"inline-flex"===i?["-webkit-inline-flex","inline-flex"]:i;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":e["-webkit-"+t]=i;break;case"flex-direction":e["-webkit-flex-direction"]=i=i||"row",e["flex-direction"]=i;break;case"order":e.order=e["-webkit-"+t]=isNaN(+i)?"0":i}}return e}let H=(()=>{class e{constructor(e,t,i,n){this._serverStylesheet=e,this._serverModuleLoaded=t,this._platformId=i,this.layoutConfig=n}applyStyleToElement(e,t,i=null){let n={};"string"==typeof t&&(n[t]=i,t=n),n=this.layoutConfig.disableVendorPrefixes?t:F(t),this._applyMultiValueStyleToElement(n,e)}applyStyleToElements(e,t=[]){const i=this.layoutConfig.disableVendorPrefixes?e:F(e);t.forEach(e=>{this._applyMultiValueStyleToElement(i,e)})}getFlowDirection(e){let t=this.lookupStyle(e,"flex-direction");return[t||"row",this.lookupInlineStyle(e,"flex-direction")||Object(l.r)(this._platformId)&&this._serverModuleLoaded?t:""]}lookupAttributeValue(e,t){return e.getAttribute(t)||""}lookupInlineStyle(e,t){return Object(l.q)(this._platformId)?e.style.getPropertyValue(t):this._getServerStyle(e,t)}lookupStyle(e,t,i=!1){let n="";return e&&((n=this.lookupInlineStyle(e,t))||(Object(l.q)(this._platformId)?i||(n=getComputedStyle(e).getPropertyValue(t)):this._serverModuleLoaded&&(n=this._serverStylesheet.getStyleForElement(e,t)))),n?n.trim():""}_applyMultiValueStyleToElement(e,t){Object.keys(e).sort().forEach(i=>{const n=e[i],r=Array.isArray(n)?n:[n];r.sort();for(let e of r)e=e?e+"":"",Object(l.q)(this._platformId)||!this._serverModuleLoaded?Object(l.q)(this._platformId)?t.style.setProperty(i,e):this._setServerStyle(t,i,e):this._serverStylesheet.addStyleToElement(t,i,e)})}_setServerStyle(e,t,i){t=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();const n=this._readStyleAttribute(e);n[t]=i||"",this._writeStyleAttribute(e,n)}_getServerStyle(e,t){return this._readStyleAttribute(e)[t]||""}_readStyleAttribute(e){const t={},i=e.getAttribute("style");if(i){const e=i.split(/;+/g);for(let i=0;i<e.length;i++){const n=e[i].trim();if(n.length>0){const e=n.indexOf(":");if(-1===e)throw new Error(`Invalid CSS style: ${n}`);t[n.substr(0,e).trim()]=n.substr(e+1).trim()}}}return t}_writeStyleAttribute(e,t){let i="";for(const n in t)t[n]&&(i+=n+":"+t[n]+";");e.setAttribute("style",i)}}return e.ngInjectableDef=Object(n.Lb)({factory:function(){return new e(Object(n.Mb)(b,8),Object(n.Mb)(v,8),Object(n.Mb)(n.z),Object(n.Mb)(x))},token:e,providedIn:"root"}),e})();class G{constructor(){this.shouldCache=!0}sideEffect(e,t,i){}}let U=(()=>{class e{constructor(e,t,i){this.matchMedia=e,this.breakpoints=t,this.hook=i,this.activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.updateMap=new WeakMap,this.clearMap=new WeakMap,this.subject=new o.a,this.observeActivations()}get activatedAlias(){return this.activatedBreakpoints[0]?this.activatedBreakpoints[0].alias:""}onMediaChange(e){const t=this.findByQuery(e.mediaQuery);t&&((e=k(e,t)).matches&&-1===this.activatedBreakpoints.indexOf(t)?(this.activatedBreakpoints.push(t),this.activatedBreakpoints.sort(V),this.updateStyles()):e.matches||-1===this.activatedBreakpoints.indexOf(t)||(this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(t),1),this.activatedBreakpoints.sort(V),this.updateStyles()))}init(e,t,i,n,r=[]){Y(this.updateMap,e,t,i),Y(this.clearMap,e,t,n),this.buildElementKeyMap(e,t),this.watchExtraTriggers(e,t,r)}getValue(e,t,i){const n=this.elementMap.get(e);if(n){const e=void 0!==i?n.get(i):this.getActivatedValues(n,t);if(e)return e.get(t)}}hasValue(e,t){const i=this.elementMap.get(e);if(i){const e=this.getActivatedValues(i,t);if(e)return void 0!==e.get(t)||!1}return!1}setValue(e,t,i,n){let r=this.elementMap.get(e);if(r){const s=(r.get(n)||new Map).set(t,i);r.set(n,s),this.elementMap.set(e,r)}else r=(new Map).set(n,(new Map).set(t,i)),this.elementMap.set(e,r);const s=this.getValue(e,t);void 0!==s&&this.updateElement(e,t,s)}trackValue(e,t){return this.subject.asObservable().pipe(Object(p.a)(i=>i.element===e&&i.key===t))}updateStyles(){this.elementMap.forEach((e,t)=>{const i=new Set(this.elementKeyMap.get(t));let n=this.getActivatedValues(e);n&&n.forEach((e,n)=>{this.updateElement(t,n,e),i.delete(n)}),i.forEach(i=>{if(n=this.getActivatedValues(e,i)){const e=n.get(i);this.updateElement(t,i,e)}else this.clearElement(t,i)})})}clearElement(e,t){const i=this.clearMap.get(e);if(i){const n=i.get(t);n&&(n(),this.subject.next({element:e,key:t,value:""}))}}updateElement(e,t,i){const n=this.updateMap.get(e);if(n){const r=n.get(t);r&&(r(i),this.subject.next({element:e,key:t,value:i}))}}releaseElement(e){const t=this.watcherMap.get(e);t&&(t.forEach(e=>e.unsubscribe()),this.watcherMap.delete(e));const i=this.elementMap.get(e);i&&(i.forEach((e,t)=>i.delete(t)),this.elementMap.delete(e))}triggerUpdate(e,t){const i=this.elementMap.get(e);if(i){const n=this.getActivatedValues(i,t);n&&(t?this.updateElement(e,t,n.get(t)):n.forEach((t,i)=>this.updateElement(e,i,t)))}}buildElementKeyMap(e,t){let i=this.elementKeyMap.get(e);i||(i=new Set,this.elementKeyMap.set(e,i)),i.add(t)}watchExtraTriggers(e,t,i){if(i&&i.length){let n=this.watcherMap.get(e);if(n||(n=new Map,this.watcherMap.set(e,n)),!n.get(t)){const r=Object(h.a)(...i).subscribe(()=>{const i=this.getValue(e,t);this.updateElement(e,t,i)});n.set(t,r)}}}findByQuery(e){return this.breakpoints.findByQuery(e)}getActivatedValues(e,t){for(let n=0;n<this.activatedBreakpoints.length;n++){const i=e.get(this.activatedBreakpoints[n].alias);if(i&&(void 0===t||i.has(t)))return i}const i=e.get("");return void 0===t||i&&i.has(t)?i:void 0}observeActivations(){const e=this.breakpoints.items.map(e=>e.mediaQuery);this.matchMedia.observe(this.hook.withPrintQuery(e)).pipe(Object(y.a)(this.hook.interceptEvents(this)),Object(p.a)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this))}}return e.ngInjectableDef=Object(n.Lb)({factory:function(){return new e(Object(n.Mb)(N),Object(n.Mb)(R),Object(n.Mb)(z))},token:e,providedIn:"root"}),e})();function Y(e,t,i,n){if(void 0!==n){let r=e.get(t);r||(r=new Map,e.set(t,r)),r.set(i,n)}}const Z="inline",J=["row","column","row-reverse","column-reverse"];function X(e){e=e?e.toLowerCase():"";let[t,i,n]=e.split(" ");return J.find(e=>e===t)||(t=J[0]),i===Z&&(i=n!==Z?n:"",n=Z),[t,te(i),!!n]}function ee(e){let[t]=X(e);return t.indexOf("row")>-1}function te(e){if(e)switch(e.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":e="wrap-reverse";break;case"no":case"none":case"nowrap":e="nowrap";break;default:e="wrap"}return e}let ie=(()=>{class e extends G{buildStyles(e){return function(e){let[t,i,n]=X(e);return function(e,t=null,i=!1){return{display:i?"inline-flex":"flex","box-sizing":"border-box","flex-direction":e,"flex-wrap":t||null}}(t,i,n)}(e)}}return e.ngInjectableDef=Object(n.Lb)({factory:function(){return new e},token:e,providedIn:"root"}),e})();const ne=["fxLayout","fxLayout.xs","fxLayout.sm","fxLayout.md","fxLayout.lg","fxLayout.xl","fxLayout.lt-sm","fxLayout.lt-md","fxLayout.lt-lg","fxLayout.lt-xl","fxLayout.gt-xs","fxLayout.gt-sm","fxLayout.gt-md","fxLayout.gt-lg"];class re extends L{constructor(e,t,i,n){super(e,i,t,n),this.elRef=e,this.styleUtils=t,this.styleBuilder=i,this.marshal=n,this.DIRECTIVE_KEY="layout",this.styleCache=ae,this.init()}}class se extends re{constructor(){super(...arguments),this.inputs=ne}}const ae=new Map;let le=(()=>{class e extends G{buildStyles(e,t){const i={},[n,r]=e.split(" ");switch(n){case"center":i["justify-content"]="center";break;case"space-around":i["justify-content"]="space-around";break;case"space-between":i["justify-content"]="space-between";break;case"space-evenly":i["justify-content"]="space-evenly";break;case"end":case"flex-end":i["justify-content"]="flex-end";break;case"start":case"flex-start":default:i["justify-content"]="flex-start"}switch(r){case"start":case"flex-start":i["align-items"]=i["align-content"]="flex-start";break;case"center":i["align-items"]=i["align-content"]="center";break;case"end":case"flex-end":i["align-items"]=i["align-content"]="flex-end";break;case"space-between":i["align-content"]="space-between",i["align-items"]="stretch";break;case"space-around":i["align-content"]="space-around",i["align-items"]="stretch";break;case"baseline":i["align-content"]="stretch",i["align-items"]="baseline";break;case"stretch":default:i["align-items"]=i["align-content"]="stretch"}return function(e,...t){if(null==e)throw TypeError("Cannot convert undefined or null to object");for(let i of t)if(null!=i)for(let t in i)i.hasOwnProperty(t)&&(e[t]=i[t]);return e}(i,{display:t.inline?"inline-flex":"flex","flex-direction":t.layout,"box-sizing":"border-box","max-width":"stretch"===r?ee(t.layout)?null:"100%":null,"max-height":"stretch"===r&&ee(t.layout)?"100%":null})}}return e.ngInjectableDef=Object(n.Lb)({factory:function(){return new e},token:e,providedIn:"root"}),e})();const oe=["fxLayoutAlign","fxLayoutAlign.xs","fxLayoutAlign.sm","fxLayoutAlign.md","fxLayoutAlign.lg","fxLayoutAlign.xl","fxLayoutAlign.lt-sm","fxLayoutAlign.lt-md","fxLayoutAlign.lt-lg","fxLayoutAlign.lt-xl","fxLayoutAlign.gt-xs","fxLayoutAlign.gt-sm","fxLayoutAlign.gt-md","fxLayoutAlign.gt-lg"];class ue extends L{constructor(e,t,i,n){super(e,i,t,n),this.elRef=e,this.styleUtils=t,this.styleBuilder=i,this.marshal=n,this.DIRECTIVE_KEY="layout-align",this.layout="row",this.inline=!1,this.init(),this.marshal.trackValue(this.nativeElement,"layout").pipe(Object(d.a)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this))}updateWithValue(e){const t=this.layout||"row",i=this.inline;"row"===t&&i?this.styleCache=fe:"row"!==t||i?"row-reverse"===t&&i?this.styleCache=be:"row-reverse"!==t||i?"column"===t&&i?this.styleCache=me:"column"!==t||i?"column-reverse"===t&&i?this.styleCache=ge:"column-reverse"!==t||i||(this.styleCache=ye):this.styleCache=pe:this.styleCache=de:this.styleCache=he,this.addStyles(e,{layout:t,inline:i})}onLayoutChange(e){const t=e.value.split(" ");this.layout=t[0],this.inline=e.value.includes("inline"),J.find(e=>e===this.layout)||(this.layout="row"),this.triggerUpdate()}}class ce extends ue{constructor(){super(...arguments),this.inputs=oe}}const he=new Map,pe=new Map,de=new Map,ye=new Map,fe=new Map,me=new Map,be=new Map,ge=new Map;class xe{}var ve=i("9Chx"),we=i("AytR"),ke=i("+cCG");class Ee{constructor(){this.production=we.a.production,this.canResume=ke.a.getState().currentGame.status!==ve.a.None}}var Ae=n.ob({encapsulation:0,styles:[['.menu[_ngcontent-%COMP%]{width:100vw;height:100vh}.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:left;display:block;font-family:inherit;background:0 0;border:none;color:red;font-size:54px;cursor:pointer;outline:0}.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before{content:"- "}.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover::before{content:"> "}@media only screen and (max-width:480px){.menu[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;left:0;-webkit-transform:translate(0,-50%);transform:translate(0,-50%);padding-left:10px}}']],data:{}});function Me(e){return n.Hb(0,[(e()(),n.qb(0,0,null,null,2,"button",[["routerLink","/game/resume"]],null,[[null,"click"]],(function(e,t,i){var r=!0;return"click"===t&&(r=!1!==n.Bb(e,1).onClick()&&r),r}),null,null)),n.pb(1,16384,null,0,a.l,[a.k,a.a,[8,null],n.C,n.k],{routerLink:[0,"routerLink"]},null),(e()(),n.Gb(-1,null,["Resume game"]))],(function(e,t){e(t,1,0,"/game/resume")}),null)}function Le(e){return n.Hb(0,[(e()(),n.qb(0,0,null,null,2,"button",[["routerLink","/map-editor"]],null,[[null,"click"]],(function(e,t,i){var r=!0;return"click"===t&&(r=!1!==n.Bb(e,1).onClick()&&r),r}),null,null)),n.pb(1,16384,null,0,a.l,[a.k,a.a,[8,null],n.C,n.k],{routerLink:[0,"routerLink"]},null),(e()(),n.Gb(-1,null,["Level editor"]))],(function(e,t){e(t,1,0,"/map-editor")}),null)}function je(e){return n.Hb(2,[(e()(),n.qb(0,0,null,null,13,"div",[["class","menu"],["fxLayout","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),n.pb(1,671744,null,0,se,[n.k,H,[2,ie],U],{fxLayout:[0,"fxLayout"]},null),n.pb(2,671744,null,0,ce,[n.k,H,[2,le],U],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(e()(),n.qb(3,0,null,null,10,"div",[],null,null,null,null,null)),(e()(),n.gb(16777216,null,null,1,null,Me)),n.pb(5,16384,null,0,l.j,[n.N,n.K],{ngIf:[0,"ngIf"]},null),(e()(),n.qb(6,0,null,null,2,"button",[["routerLink","/game"]],null,[[null,"click"]],(function(e,t,i){var r=!0;return"click"===t&&(r=!1!==n.Bb(e,7).onClick()&&r),r}),null,null)),n.pb(7,16384,null,0,a.l,[a.k,a.a,[8,null],n.C,n.k],{routerLink:[0,"routerLink"]},null),(e()(),n.Gb(-1,null,["New game"])),(e()(),n.gb(16777216,null,null,1,null,Le)),n.pb(10,16384,null,0,l.j,[n.N,n.K],{ngIf:[0,"ngIf"]},null),(e()(),n.qb(11,0,null,null,2,"button",[["routerLink","/privacy-policy"]],null,[[null,"click"]],(function(e,t,i){var r=!0;return"click"===t&&(r=!1!==n.Bb(e,12).onClick()&&r),r}),null,null)),n.pb(12,16384,null,0,a.l,[a.k,a.a,[8,null],n.C,n.k],{routerLink:[0,"routerLink"]},null),(e()(),n.Gb(-1,null,["Privacy Policy"]))],(function(e,t){var i=t.component;e(t,1,0,"column"),e(t,2,0,"center center"),e(t,5,0,i.canResume),e(t,7,0,"/game"),e(t,10,0,!i.production),e(t,12,0,"/privacy-policy")}),null)}function Se(e){return n.Hb(0,[(e()(),n.qb(0,0,null,null,1,"app-start-menu",[],null,null,null,je,Ae)),n.pb(1,49152,null,0,Ee,[],null,null)],null,null)}var Oe=n.mb("app-start-menu",Ee,Se,{},{},[]);class Ce{}var Be=i("IP0z");i("KCVW");class Ie{}class _e{}class Pe{constructor(e,t){Object(l.r)(t)&&!e&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}static withConfig(e,t=[]){return{ngModule:Pe,providers:e.serverLoaded?[{provide:x,useValue:Object.assign({},g,e)},{provide:w,useValue:t,multi:!0},{provide:v,useValue:!0}]:[{provide:x,useValue:Object.assign({},g,e)},{provide:w,useValue:t,multi:!0}]}}}i.d(t,"StartMenuModuleNgFactory",(function(){return Te}));var Te=n.nb(r,[],(function(e){return n.zb([n.Ab(512,n.j,n.Z,[[8,[s.a,Oe]],[3,n.j],n.v]),n.Ab(4608,l.l,l.k,[n.s,[2,l.x]]),n.Ab(5120,n.b,(function(e,t){return[(i=e,n=t,()=>{if(Object(l.q)(n)){const e=Array.from(i.querySelectorAll("[class*=flex-layout-]")),t=/\bflex-layout-.+?\b/g;e.forEach(e=>{e.classList.contains("flex-layout-ssr")&&e.parentNode?e.parentNode.removeChild(e):e.className.replace(t,"")})}})];var i,n}),[l.c,n.z]),n.Ab(1073742336,l.b,l.b,[]),n.Ab(1073742336,a.n,a.n,[[2,a.s],[2,a.k]]),n.Ab(1073742336,Ce,Ce,[]),n.Ab(1073742336,f,f,[]),n.Ab(1073742336,Be.a,Be.a,[]),n.Ab(1073742336,xe,xe,[]),n.Ab(1073742336,Ie,Ie,[]),n.Ab(1073742336,_e,_e,[]),n.Ab(1073742336,Pe,Pe,[[2,v],n.z]),n.Ab(1073742336,r,r,[]),n.Ab(1024,a.i,(function(){return[[{path:"",component:Ee}]]}),[])])}))}}]);