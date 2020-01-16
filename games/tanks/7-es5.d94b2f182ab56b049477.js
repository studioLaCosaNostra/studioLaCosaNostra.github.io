function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{rZCR:function(e,t,n){"use strict";n.r(t);var o=n("8Y7J"),i=function e(){_classCallCheck(this,e)},r=n("pMnS"),a=n("fGXz"),s=n("AytR"),l=function(){function e(t,n,o){_classCallCheck(this,e),this.elementRef=t,this.ngZone=n,this.platform=o,this.devicePixelRatio=s.a.ssr?1:window.devicePixelRatio||1,this.applicationOptions={}}return _createClass(e,[{key:"init",value:function(){var e=this;s.a.ssr||(this.ngZone.runOutsideAngular((function(){e.app=new a.Application(e.applicationOptions)})),this.elementRef.nativeElement.appendChild(this.app.view),this.resize())}},{key:"ngOnInit",value:function(){this.init()}},{key:"resize",value:function(){var e=1/this.devicePixelRatio;this.app.renderer.resize(this.elementRef.nativeElement.offsetWidth*this.devicePixelRatio,this.elementRef.nativeElement.offsetHeight*this.devicePixelRatio),this.app.view.style.transform="scale(".concat(e,")"),this.app.view.style.transformOrigin="top left"}},{key:"destroy",value:function(){this.app&&this.app.destroy()}},{key:"ngOnDestroy",value:function(){this.destroy()}}]),e}(),u=n("/HVE"),c=o.ob({encapsulation:2,styles:[],data:{}});function h(e){return o.Hb(0,[],null,null)}var p=n("HDdC"),d=n("D0XW"),m=n("DH7j");function v(e){var t=e.subscriber,n=e.counter,o=e.period;t.next(n),this.schedule({subscriber:t,counter:n+1,period:o},o)}var f=function(){function e(){_classCallCheck(this,e),this.shot=new o.m,this.move=new o.m,this.pressedMoveKeys=new Set,this.pressedShot=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;s.a.ssr||(this.intervalSubscription=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.a;return e=t,(Object(m.a)(e)||!(e-parseFloat(e)+1>=0)||t<0)&&(t=0),n&&"function"==typeof n.schedule||(n=d.a),new p.a((function(e){return e.add(n.schedule(v,t,{subscriber:e,counter:0,period:t})),e}))}(50).subscribe((function(){var t,n,o=(t=e.pressedMoveKeys,(n=Array.from(t))[n.length-1]);e.move.emit(o),e.pressedShot&&e.shot.emit()})))}},{key:"ngOnDestroy",value:function(){s.a.ssr||this.intervalSubscription.unsubscribe()}},{key:"pressShot",value:function(e){return e.preventDefault(),e.stopPropagation(),this.pressedShot=!0,!1}},{key:"releaseShot",value:function(e){return e.preventDefault(),e.stopPropagation(),this.pressedShot=!1,!1}},{key:"release",value:function(e){this.pressedMoveKeys.delete(e)}},{key:"press",value:function(e){this.pressedMoveKeys.add(e)}},{key:"touchmove",value:function(e){e.preventDefault(),e.stopPropagation();var t=e.touches.item(0),n=document.elementFromPoint(t.clientX,t.clientY);return this.moveControllers.nativeElement.contains(n)&&n.classList.contains("button")&&(this.pressedMoveKeys.clear(),this.press(n.classList.toString().replace("button","").trim())),!1}},{key:"touchend",value:function(e){return e.preventDefault(),e.stopPropagation(),this.pressedMoveKeys.clear(),!1}},{key:"handleKeyDownEvent",value:function(e){switch(e.key){case"ArrowLeft":this.press("left");break;case"ArrowRight":this.press("right");break;case"ArrowUp":this.press("up");break;case"ArrowDown":this.press("down");break;case" ":this.pressedShot=!0}}},{key:"handleKeyUpEvent",value:function(e){switch(e.key){case"ArrowLeft":this.release("left");break;case"ArrowRight":this.release("right");break;case"ArrowUp":this.release("up");break;case"ArrowDown":this.release("down");break;case" ":this.pressedShot=!1}}}]),e}(),b=o.ob({encapsulation:0,styles:[[".tank-move-controllers[_ngcontent-%COMP%]{z-index:1;position:absolute;bottom:10px;left:10px}.tank-move-controllers[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-image:url(/games/tanks/arrow-controller.1d1c9cc0c5ca19e42365.png);width:64px;height:64px;position:relative;opacity:.7}.tank-move-controllers[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{left:64px;top:64px}.tank-move-controllers[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{top:64px;left:128px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tank-move-controllers[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%]{top:64px;left:64px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tank-move-controllers[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{top:-64px;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tank-shot-controller[_ngcontent-%COMP%]{z-index:1;position:absolute;bottom:62px;right:55px}.tank-shot-controller[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-image:url(/games/tanks/shot-controller.c287a59665cc4e5ef601.png);width:85px;height:85px;position:relative;opacity:.7}"]],data:{}});function g(e){return o.Hb(0,[o.Eb(402653184,1,{moveControllers:0}),(e()(),o.qb(1,0,[[1,0],["moveControllers",1]],null,4,"div",[["class","tank-move-controllers"]],null,null,null,null,null)),(e()(),o.qb(2,0,null,null,0,"div",[["class","up button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(e,t,n){var o=!0,i=e.component;return"touchstart"===t&&(o=!1!==i.touchmove(n)&&o),"touchmove"===t&&(o=!1!==i.touchmove(n)&&o),"touchend"===t&&(o=!1!==i.touchend(n)&&o),"mousedown"===t&&(o=!1!==i.press("up")&&o),"mouseup"===t&&(o=!1!==i.release("up")&&o),"mouseleave"===t&&(o=!1!==i.release("up")&&o),o}),null,null)),(e()(),o.qb(3,0,null,null,0,"div",[["class","right button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(e,t,n){var o=!0,i=e.component;return"touchstart"===t&&(o=!1!==i.touchmove(n)&&o),"touchmove"===t&&(o=!1!==i.touchmove(n)&&o),"touchend"===t&&(o=!1!==i.touchend(n)&&o),"mousedown"===t&&(o=!1!==i.press("right")&&o),"mouseup"===t&&(o=!1!==i.release("right")&&o),"mouseleave"===t&&(o=!1!==i.release("right")&&o),o}),null,null)),(e()(),o.qb(4,0,null,null,0,"div",[["class","down button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(e,t,n){var o=!0,i=e.component;return"touchstart"===t&&(o=!1!==i.touchmove(n)&&o),"touchmove"===t&&(o=!1!==i.touchmove(n)&&o),"touchend"===t&&(o=!1!==i.touchend(n)&&o),"mousedown"===t&&(o=!1!==i.press("down")&&o),"mouseup"===t&&(o=!1!==i.release("down")&&o),"mouseleave"===t&&(o=!1!==i.release("down")&&o),o}),null,null)),(e()(),o.qb(5,0,null,null,0,"div",[["class","left button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(e,t,n){var o=!0,i=e.component;return"touchstart"===t&&(o=!1!==i.touchmove(n)&&o),"touchmove"===t&&(o=!1!==i.touchmove(n)&&o),"touchend"===t&&(o=!1!==i.touchend(n)&&o),"mousedown"===t&&(o=!1!==i.press("left")&&o),"mouseup"===t&&(o=!1!==i.release("left")&&o),"mouseleave"===t&&(o=!1!==i.release("left")&&o),o}),null,null)),(e()(),o.qb(6,0,null,null,1,"div",[["class","tank-shot-controller"]],null,null,null,null,null)),(e()(),o.qb(7,0,null,null,0,"div",[["class","shot button"]],null,[[null,"touchstart"],[null,"touchend"]],(function(e,t,n){var o=!0,i=e.component;return"touchstart"===t&&(o=!1!==i.pressShot(n)&&o),"touchend"===t&&(o=!1!==i.releaseShot(n)&&o),o}),null,null))],null,null)}var w=n("iInd"),k=n("mrSG"),y=n("ePZZ"),_=n("XNiG"),x=n("VRyK"),C=n("xgIS"),O=n("Cfvw"),P=n("1G5W"),j=n("Kj3r"),R=n("pLZG"),M=n("vkgz"),S=n("7o/Q");n("l7GE"),n("ZUHj");var z={leading:!0,trailing:!1},A=function(){function e(t,n,o,i){_classCallCheck(this,e),this.duration=t,this.scheduler=n,this.leading=o,this.trailing=i}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new V(e,this.duration,this.scheduler,this.leading,this.trailing))}}]),e}(),V=function(e){function t(e,n,o,i,r){var a;return _classCallCheck(this,t),(a=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).duration=n,a.scheduler=o,a.leading=i,a.trailing=r,a._hasTrailingValue=!1,a._trailingValue=null,a}return _inherits(t,e),_createClass(t,[{key:"_next",value:function(e){this.throttled?this.trailing&&(this._trailingValue=e,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(q,this.duration,{subscriber:this})),this.leading?this.destination.next(e):this.trailing&&(this._trailingValue=e,this._hasTrailingValue=!0))}},{key:"_complete",value:function(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}},{key:"clearThrottle",value:function(){var e=this.throttled;e&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),e.unsubscribe(),this.remove(e),this.throttled=null)}}]),t}(S.a);function q(e){e.subscriber.clearThrottle()}var E=n("qdB0"),L=n("U2x6"),T=n("vHjY"),D=n("lJxs"),K=n("xk4V"),G=n.n(K),I=function(e){return Object.keys(e).map((function(t){if(!Object.values(T.a).find((function(e){return e===t})))throw new Error("Wrong enemy tank type: ".concat(t," in map: ").concat(name));return new Array(Number(e[t])).fill(0).map((function(){return{id:"enemy-".concat(G()()),type:t,direction:"down"}}))})).reduce((function(e,t){return e.concat(t)}),[])},H=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"loadLevel",value:function(e){return this.http.get("assets/maps/".concat(e,".json")).pipe(Object(D.a)((function(e){return Object.assign({},e,{enemiesGroups:(t=e.enemiesGroups,t.map(I))});var t})))}}]),e}(),Z=n("4g07"),X=n("jcNP"),U=n("wRQt"),Y=function(e,t){var n=e.findIndex((function(e){return e===t}));return-1===n||n+1>e.length-1?e[0]:e[n+1]},B=n("+cCG"),W=function(){function e(t,n,o,i,r,a){_classCallCheck(this,e),this.gameService=t,this.ngZone=n,this.elRef=o,this.route=i,this.router=r,this.adsService=a,this.gameOver=!1,this.hideControllers=!1,this.canWatchAds=!0,this.moveEvent=new _.a,this.destroySubject=new _.a,this.devicePixelRatio=s.a.ssr?1:window.devicePixelRatio||1,this.levels=["level-1","level-2","level-6"],this.fullscreen=!1}return _createClass(e,[{key:"ngAfterViewInit",value:function(){return k.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=s.a.ssr,e.t0){e.next=12;break}return this.initContainer(),e.next=5,Object(U.a)();case 5:B.a.dispatch({type:y.a.SetupPIXI,container:this.container}),B.a.dispatch({type:y.a.SetupLevelLoader,nextLevel:function(e){return t.loadLevel(Y(t.levels,e))}}),B.a.dispatch({type:y.a.SetupRewardedAd,showRewardedAd:function(){return t.adsService.rewardVideo()}}),this.setupAXY(),this.route.data.pipe(Object(P.a)(this.destroySubject)).subscribe((function(e){return k.__awaiter(t,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.fullscreen&&(this.fullscreen=!0,function(e){return k.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.requestFullscreen();case 2:return t.next=4,window.screen.orientation.lock("landscape");case 4:case"end":return t.stop()}}),t)})))}(this.elRef.nativeElement).then((function(){return n.onResize()})).catch((function(e){console.warn(e)}))),B.a.dispatch(e.resume?Object(E.c)():{type:y.a.NewGame}),Object(x.a)(Object(C.a)(document,"visibilitychange"),Object(C.a)(window,"orientationchange")).pipe(Object(j.a)(500),Object(R.a)((function(){return t=!1,e=navigator.userAgent||navigator.vendor,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t;var e,t})),Object(M.a)((function(){matchMedia("(orientation: landscape)").matches||(n.stop(),n.router.navigate([".."]))})),Object(P.a)(this.destroySubject)).subscribe();case 1:case"end":return t.stop()}}),t,this)})))})),this.storeSubscribe=this.ngZone.runOutsideAngular((function(){return B.a.subscribe((function(){return k.__awaiter(t,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=B.a.getState(),this.gameOver=Object(X.a)(t),this.hideControllers=Object(Z.a)(t);case 2:case"end":return e.stop()}}),e,this)})))}))})),this.moveEvent.pipe(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:z;return function(o){return o.lift(new A(e,t,n.leading,n.trailing))}}(50),Object(P.a)(this.destroySubject)).subscribe((function(e){B.a.dispatch(function(e){return{type:y.a.Move,direction:e}}(e))}));case 12:case"end":return e.stop()}}),e,this)})))}},{key:"initContainer",value:function(){this.container=new a.Container,this.container.sortableChildren=!0,this.pixi.app.stage.addChild(this.container)}},{key:"loadLevel",value:function(e){return k.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setupAXY(),B.a.dispatch(function(e){return{type:y.a.Loading,name:e}}(e)),t.next=3,Object(O.a)(this.gameService.loadLevel(e)).toPromise();case 3:n=t.sent,B.a.dispatch(function(e,t){return{type:y.a.Loaded,name:e,level:t}}(e,n));case 5:case"end":return t.stop()}}),t,this)})))}},{key:"onResize",value:function(){this.devicePixelRatio=window.devicePixelRatio||1,this.setupAXY()}},{key:"setupAXY",value:function(){this.pixi.app.renderer&&B.a.dispatch({type:y.a.UpdateCenter,width:this.pixi.app.renderer.width,height:this.pixi.app.renderer.height,pixelRatio:this.devicePixelRatio})}},{key:"move",value:function(e){this.moveEvent.next(e)}},{key:"shot",value:function(){B.a.dispatch({type:y.a.Shot})}},{key:"ngOnDestroy",value:function(){this.stop(),this.storeSubscribe&&this.storeSubscribe(),this.container&&this.container.destroy(),this.destroySubject.next(!0),this.destroySubject.complete(),this.fullscreen&&function(e){return k.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.exitFullscreen();case 2:case"end":return t.stop()}}),t)})))}(document).catch((function(e){console.warn(e)}))}},{key:"start",value:function(){B.a.dispatch(Object(E.c)())}},{key:"stop",value:function(){B.a.dispatch(Object(E.d)())}}]),e}(),F=o.ob({encapsulation:0,styles:[['@import url(https://fonts.googleapis.com/css?family=VT323);.game[_ngcontent-%COMP%]{width:100%;height:100%}.game[_ngcontent-%COMP%]   app-pixi[_ngcontent-%COMP%]{width:100%;height:100%;display:block;overflow:hidden}.loading[_ngcontent-%COMP%]{z-index:2;background:#000;width:100vw;height:100vh;position:absolute}.loading[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:red;font-family:VT323,monospace;font-size:54px}.stats-bar[_ngcontent-%COMP%]{position:absolute;right:10px;top:0;z-index:1}.stats-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:32px;font-size:32px;font-family:VT323,monospace;font-weight:700}.stats-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::before{content:"";height:32px;display:block;width:32px;line-height:32px;background-position:center center;float:left}.stats-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:5px;float:left;line-height:32px}.stats-bar[_ngcontent-%COMP%]   .lives[_ngcontent-%COMP%]::before{background:url(/games/tanks/heart.8693ae5b957ee03faac9.png)}.stats-bar[_ngcontent-%COMP%]   .enemies[_ngcontent-%COMP%]::before{background:#afacb7;-webkit-mask-image:url(/games/tanks/tank-icon.817db94d9be6d4a0b42b.png);mask-image:url(/games/tanks/tank-icon.817db94d9be6d4a0b42b.png)}']],data:{}});function N(e){return o.Hb(0,[o.Eb(402653184,1,{pixi:0}),(e()(),o.qb(1,0,null,null,0,"div",[["class","stats-bar"]],null,null,null,null,null)),(e()(),o.qb(2,0,null,null,6,"div",[["class","game"]],null,null,null,null,null)),(e()(),o.qb(3,0,null,null,1,"app-pixi",[],null,[["window","resize"]],(function(e,t,n){var i=!0;return"window:resize"===t&&(i=!1!==o.Bb(e,4).resize()&&i),i}),h,c)),o.pb(4,245760,[[1,4],["pixi",4]],0,l,[o.k,o.x,u.a],{devicePixelRatio:[0,"devicePixelRatio"]},null),(e()(),o.qb(5,0,null,null,1,"app-game-controllers",[],[[8,"hidden",0]],[[null,"move"],[null,"shot"],["document","keydown"],["document","keyup"]],(function(e,t,n){var i=!0,r=e.component;return"document:keydown"===t&&(i=!1!==o.Bb(e,6).handleKeyDownEvent(n)&&i),"document:keyup"===t&&(i=!1!==o.Bb(e,6).handleKeyUpEvent(n)&&i),"move"===t&&(i=!1!==r.move(n)&&i),"shot"===t&&(i=!1!==r.shot()&&i),i}),g,b)),o.pb(6,245760,null,0,f,[],null,{shot:"shot",move:"move"}),(e()(),o.qb(7,0,null,null,1,"button",[["class","menu-icon menu-button"],["routerLink",""]],null,[[null,"click"]],(function(e,t,n){var i=!0;return"click"===t&&(i=!1!==o.Bb(e,8).onClick()&&i),i}),null,null)),o.pb(8,16384,null,0,w.l,[w.k,w.a,[8,null],o.C,o.k],{routerLink:[0,"routerLink"]},null)],(function(e,t){e(t,4,0,t.component.devicePixelRatio),e(t,6,0),e(t,8,0,"")}),(function(e,t){e(t,5,0,t.component.hideControllers)}))}var J=o.mb("app-game",W,(function(e){return o.Hb(0,[(e()(),o.qb(0,0,null,null,1,"app-game",[],null,[["window","resize"]],(function(e,t,n){var i=!0;return"window:resize"===t&&(i=!1!==o.Bb(e,1).onResize(n)&&i),i}),N,F)),o.pb(1,4374528,null,0,W,[H,o.x,o.k,w.a,w.k,L.a],null,null)],null,null)}),{},{},[]),Q=n("SVse"),$=n("IheW"),ee={fullscreen:s.a.production},te={resume:!0,fullscreen:s.a.production},ne=function e(){_classCallCheck(this,e)},oe=function e(){_classCallCheck(this,e)};n.d(t,"GameModuleNgFactory",(function(){return ie}));var ie=o.nb(i,[],(function(e){return o.zb([o.Ab(512,o.j,o.Z,[[8,[r.a,J]],[3,o.j],o.v]),o.Ab(4608,Q.l,Q.k,[o.s,[2,Q.x]]),o.Ab(4608,H,H,[$.c]),o.Ab(1073742336,Q.b,Q.b,[]),o.Ab(1073742336,w.n,w.n,[[2,w.s],[2,w.k]]),o.Ab(1073742336,ne,ne,[]),o.Ab(1073742336,oe,oe,[]),o.Ab(1073742336,i,i,[]),o.Ab(1024,w.i,(function(){return[[{path:"",component:W,data:ee},{path:"resume",component:W,data:te}]]}),[])])}))}}]);