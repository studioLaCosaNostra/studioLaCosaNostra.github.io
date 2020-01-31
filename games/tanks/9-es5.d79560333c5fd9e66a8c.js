function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{rZCR:function(e,t,n){"use strict";n.r(t);var i=n("8Y7J"),o=function e(){_classCallCheck(this,e)},r=n("pMnS"),a=n("fGXz"),s=n("AytR"),l=function(){function e(t,n,i){_classCallCheck(this,e),this.elementRef=t,this.ngZone=n,this.platform=i,this.devicePixelRatio=s.a.ssr?1:window.devicePixelRatio||1,this.applicationOptions={}}return _createClass(e,[{key:"init",value:function(){var e=this;s.a.ssr||(this.ngZone.runOutsideAngular((function(){e.app=new a.Application(e.applicationOptions)})),this.elementRef.nativeElement.appendChild(this.app.view),this.resize())}},{key:"ngOnInit",value:function(){this.init()}},{key:"resize",value:function(){var e=1/this.devicePixelRatio;this.app.renderer.resize(this.elementRef.nativeElement.offsetWidth*this.devicePixelRatio,this.elementRef.nativeElement.offsetHeight*this.devicePixelRatio),this.app.view.style.transform="scale(".concat(e,")"),this.app.view.style.transformOrigin="top left"}},{key:"destroy",value:function(){this.app&&this.app.destroy()}},{key:"ngOnDestroy",value:function(){this.destroy()}}]),e}(),u=n("/HVE"),c=i.ob({encapsulation:2,styles:[],data:{}});function h(e){return i.Hb(0,[],null,null)}var p=n("l5mm"),d=function(){function e(){_classCallCheck(this,e),this.shot=new i.m,this.move=new i.m,this.pressedMoveKeys=new Set,this.pressedShot=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;s.a.ssr||(this.intervalSubscription=Object(p.a)(50).subscribe((function(){var t,n,i=(t=e.pressedMoveKeys,(n=Array.from(t))[n.length-1]);e.move.emit(i),e.pressedShot&&e.shot.emit()})))}},{key:"ngOnDestroy",value:function(){s.a.ssr||this.intervalSubscription.unsubscribe()}},{key:"pressShot",value:function(e){return e.preventDefault(),e.stopPropagation(),this.pressedShot=!0,!1}},{key:"releaseShot",value:function(e){return e.preventDefault(),e.stopPropagation(),this.pressedShot=!1,!1}},{key:"release",value:function(e){this.pressedMoveKeys.delete(e)}},{key:"press",value:function(e){this.pressedMoveKeys.add(e)}},{key:"touchmove",value:function(e){e.preventDefault(),e.stopPropagation();var t=e.touches.item(0);if(!t)return!1;var n=document.elementFromPoint(t.clientX,t.clientY);return!!n&&(this.moveControllers.nativeElement.contains(n)&&n.classList.contains("button")&&(this.pressedMoveKeys.clear(),this.press(n.classList.toString().replace("button","").trim())),!1)}},{key:"touchend",value:function(e){return e.preventDefault(),e.stopPropagation(),this.pressedMoveKeys.clear(),!1}},{key:"handleKeyDownEvent",value:function(e){switch(e.key){case"ArrowLeft":this.press("left");break;case"ArrowRight":this.press("right");break;case"ArrowUp":this.press("up");break;case"ArrowDown":this.press("down");break;case" ":this.pressedShot=!0}}},{key:"handleKeyUpEvent",value:function(e){switch(e.key){case"ArrowLeft":this.release("left");break;case"ArrowRight":this.release("right");break;case"ArrowUp":this.release("up");break;case"ArrowDown":this.release("down");break;case" ":this.pressedShot=!1}}}]),e}(),m=i.ob({encapsulation:0,styles:[[".tank-move-controllers[_ngcontent-%COMP%]{z-index:1;position:absolute;bottom:10px;left:10px}.tank-move-controllers[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-image:url(/games/tanks/arrow-controller.1d1c9cc0c5ca19e42365.png);width:64px;height:64px;position:relative;opacity:.7}.tank-move-controllers[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{left:64px;top:64px}.tank-move-controllers[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{top:64px;left:128px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tank-move-controllers[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%]{top:64px;left:64px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tank-move-controllers[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{top:-64px;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tank-shot-controller[_ngcontent-%COMP%]{z-index:1;position:absolute;bottom:62px;right:55px}.tank-shot-controller[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-image:url(/games/tanks/shot-controller.c287a59665cc4e5ef601.png);width:85px;height:85px;position:relative;opacity:.7}"]],data:{}});function f(e){return i.Hb(0,[i.Eb(402653184,1,{moveControllers:0}),(e()(),i.qb(1,0,[[1,0],["moveControllers",1]],null,4,"div",[["class","tank-move-controllers"]],null,null,null,null,null)),(e()(),i.qb(2,0,null,null,0,"div",[["class","up button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(e,t,n){var i=!0,o=e.component;return"touchstart"===t&&(i=!1!==o.touchmove(n)&&i),"touchmove"===t&&(i=!1!==o.touchmove(n)&&i),"touchend"===t&&(i=!1!==o.touchend(n)&&i),"mousedown"===t&&(i=!1!==o.press("up")&&i),"mouseup"===t&&(i=!1!==o.release("up")&&i),"mouseleave"===t&&(i=!1!==o.release("up")&&i),i}),null,null)),(e()(),i.qb(3,0,null,null,0,"div",[["class","right button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(e,t,n){var i=!0,o=e.component;return"touchstart"===t&&(i=!1!==o.touchmove(n)&&i),"touchmove"===t&&(i=!1!==o.touchmove(n)&&i),"touchend"===t&&(i=!1!==o.touchend(n)&&i),"mousedown"===t&&(i=!1!==o.press("right")&&i),"mouseup"===t&&(i=!1!==o.release("right")&&i),"mouseleave"===t&&(i=!1!==o.release("right")&&i),i}),null,null)),(e()(),i.qb(4,0,null,null,0,"div",[["class","down button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(e,t,n){var i=!0,o=e.component;return"touchstart"===t&&(i=!1!==o.touchmove(n)&&i),"touchmove"===t&&(i=!1!==o.touchmove(n)&&i),"touchend"===t&&(i=!1!==o.touchend(n)&&i),"mousedown"===t&&(i=!1!==o.press("down")&&i),"mouseup"===t&&(i=!1!==o.release("down")&&i),"mouseleave"===t&&(i=!1!==o.release("down")&&i),i}),null,null)),(e()(),i.qb(5,0,null,null,0,"div",[["class","left button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(e,t,n){var i=!0,o=e.component;return"touchstart"===t&&(i=!1!==o.touchmove(n)&&i),"touchmove"===t&&(i=!1!==o.touchmove(n)&&i),"touchend"===t&&(i=!1!==o.touchend(n)&&i),"mousedown"===t&&(i=!1!==o.press("left")&&i),"mouseup"===t&&(i=!1!==o.release("left")&&i),"mouseleave"===t&&(i=!1!==o.release("left")&&i),i}),null,null)),(e()(),i.qb(6,0,null,null,1,"div",[["class","tank-shot-controller"]],null,null,null,null,null)),(e()(),i.qb(7,0,null,null,0,"div",[["class","shot button"]],null,[[null,"touchstart"],[null,"touchend"]],(function(e,t,n){var i=!0,o=e.component;return"touchstart"===t&&(i=!1!==o.pressShot(n)&&i),"touchend"===t&&(i=!1!==o.releaseShot(n)&&i),i}),null,null))],null,null)}var v=n("iInd"),b=n("mrSG"),g=n("ePZZ"),w=n("XNiG"),k=n("xgIS"),y=n("Cfvw"),_=n("1G5W"),x=n("Kj3r"),C=n("pLZG"),O=n("vkgz"),P=n("7o/Q"),j=n("D0XW");n("l7GE"),n("ZUHj");var R={leading:!0,trailing:!1},S=function(){function e(t,n,i,o){_classCallCheck(this,e),this.duration=t,this.scheduler=n,this.leading=i,this.trailing=o}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new M(e,this.duration,this.scheduler,this.leading,this.trailing))}}]),e}(),M=function(e){function t(e,n,i,o,r){var a;return _classCallCheck(this,t),(a=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).duration=n,a.scheduler=i,a.leading=o,a.trailing=r,a._hasTrailingValue=!1,a._trailingValue=null,a}return _inherits(t,e),_createClass(t,[{key:"_next",value:function(e){this.throttled?this.trailing&&(this._trailingValue=e,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(z,this.duration,{subscriber:this})),this.leading?this.destination.next(e):this.trailing&&(this._trailingValue=e,this._hasTrailingValue=!0))}},{key:"_complete",value:function(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}},{key:"clearThrottle",value:function(){var e=this.throttled;e&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),e.unsubscribe(),this.remove(e),this.throttled=null)}}]),t}(P.a);function z(e){e.subscriber.clearThrottle()}var A=n("qdB0"),L=n("9Chx"),q=n("Lvkc"),E=n("wRQt"),V=function(e,t){var n=e.findIndex((function(e){return e===t}));return-1===n||n+1>e.length-1?e[0]:e[n+1]},T=n("+cCG"),G=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},D=function(){function e(t,n,i,o,r,a,l){_classCallCheck(this,e),this.gameService=t,this.ngZone=n,this.elRef=i,this.route=o,this.router=r,this.adsService=a,this.analytics=l,this.hideControllers=!0,this.canWatchAds=!0,this.moveEvent=new w.a,this.destroySubject=new w.a,this.devicePixelRatio=s.a.ssr?1:window.devicePixelRatio||1,this.fullscreen=!1,this.analytics.setCurrentScreen("game")}return _createClass(e,[{key:"loadLevels",value:function(){return this.gameService.getLevels().toPromise()}},{key:"ngAfterViewInit",value:function(){return b.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.a.ssr){e.next=2;break}return e.abrupt("return");case 2:return this.initContainer(),e.next=5,this.loadLevels();case 5:return t=e.sent,e.next=8,Object(E.a)();case 8:T.a.dispatch({type:g.a.SetupPIXI,container:this.container}),T.a.dispatch({type:g.a.SetupLevelLoader,nextLevel:function(e){return n.loadLevel(V(t,e))}}),T.a.dispatch({type:g.a.SetupRewardedAd,showRewardedAd:function(){return n.adsService.rewardVideo()}}),this.setupAXY(),this.route.data.pipe(Object(_.a)(this.destroySubject)).subscribe((function(e){return b.__awaiter(n,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.fullscreen&&(this.fullscreen=!0,function(e){return b.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.requestFullscreen();case 2:return t.next=4,window.screen.orientation.lock("landscape");case 4:case"end":return t.stop()}}),t)})))}(this.elRef.nativeElement).then((function(){return n.onResize()})).catch((function(e){console.warn(e)}))),e.resume&&T.a.getState().currentGame.status!==L.a.None?Object(q.a)(T.a.getState())&&T.a.dispatch(Object(A.c)()):T.a.dispatch({type:g.a.NewGame}),Object(k.a)(window,"fullscreenchange").pipe(Object(_.a)(this.destroySubject)).subscribe((function(){n.setupAXY()})),Object(p.a)(1e3).pipe(Object(x.a)(500),Object(C.a)((function(){return G()})),Object(O.a)((function(){matchMedia("(orientation: landscape)").matches||n.router.navigate([".."])})),Object(_.a)(this.destroySubject)).subscribe(),Object(p.a)(1e3).pipe(Object(_.a)(this.destroySubject)).subscribe((function(){T.a.getState().currentGame.status===L.a.Start&&document.hidden&&n.router.navigate([".."]),n.setupAXY()}));case 1:case"end":return t.stop()}}),t,this)})))})),this.storeSubscribe=this.ngZone.runOutsideAngular((function(){return T.a.subscribe((function(){return b.__awaiter(n,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=T.a.getState(),this.hideControllers=t.currentGame.status!==L.a.Start||!G();case 2:case"end":return e.stop()}}),e,this)})))}))})),this.moveEvent.pipe(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R;return function(i){return i.lift(new S(e,t,n.leading,n.trailing))}}(50),Object(_.a)(this.destroySubject)).subscribe((function(e){T.a.dispatch(function(e){return{type:g.a.Move,direction:e}}(e))}));case 15:case"end":return e.stop()}}),e,this)})))}},{key:"initContainer",value:function(){this.container=new a.Container,this.container.sortableChildren=!0,this.pixi.app.stage.addChild(this.container)}},{key:"loadLevel",value:function(e){return b.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setupAXY(),T.a.dispatch(function(e){return{type:g.a.Loading,name:e}}(e)),t.next=3,Object(y.a)(this.gameService.getLevel(e)).toPromise();case 3:n=t.sent,T.a.dispatch(function(e,t){return{type:g.a.Loaded,name:e,level:t}}(e,n));case 5:case"end":return t.stop()}}),t,this)})))}},{key:"onResize",value:function(){this.devicePixelRatio=window.devicePixelRatio||1,T.a.dispatch({type:g.a.Resize,width:this.pixi.app.renderer.width,height:this.pixi.app.renderer.height})}},{key:"setupAXY",value:function(){this.pixi.app.renderer&&T.a.dispatch({type:g.a.UpdateCenter,width:this.pixi.app.renderer.width,height:this.pixi.app.renderer.height,pixelRatio:this.devicePixelRatio})}},{key:"move",value:function(e){this.moveEvent.next(e)}},{key:"shot",value:function(){T.a.dispatch({type:g.a.Shot})}},{key:"ngOnDestroy",value:function(){this.stop(),this.storeSubscribe&&this.storeSubscribe(),this.container&&this.container.destroy(),this.destroySubject.next(!0),this.destroySubject.complete(),this.fullscreen&&function(e){return b.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.exitFullscreen();case 2:case"end":return t.stop()}}),t)})))}(document).catch((function(e){console.warn(e)}))}},{key:"stop",value:function(){T.a.dispatch(Object(A.d)())}}]),e}(),I=n("vHjY"),K=n("lJxs"),X=n("xk4V"),Z=n.n(X),H=function(e){return Object.keys(e).map((function(t){if(!Object.values(I.a).find((function(e){return e===t})))throw new Error("Wrong enemy tank type: ".concat(t," in map: ").concat(name));return new Array(Number(e[t])).fill(0).map((function(){return{id:"enemy-".concat(Z()()),type:t,direction:"down"}}))})).reduce((function(e,t){return e.concat(t)}),[])},Y=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"getLevels",value:function(){return this.http.get("assets/maps/maps.json").pipe(Object(K.a)((function(e){return e.filter((function(e){return e.includes("level")&&!e.includes("test")}))})))}},{key:"getLevel",value:function(e){return this.http.get("assets/maps/".concat(e,".json")).pipe(Object(K.a)((function(e){return Object.assign({},e,{enemiesGroups:(t=e.enemiesGroups,t.map(H))});var t})))}}]),e}(),U=n("U2x6"),B=n("efrx"),W=i.ob({encapsulation:0,styles:[['@import url(https://fonts.googleapis.com/css?family=VT323);.game[_ngcontent-%COMP%]{width:100%;height:100%}.game[_ngcontent-%COMP%]   app-pixi[_ngcontent-%COMP%]{width:100%;height:100%;display:block;overflow:hidden}.loading[_ngcontent-%COMP%]{z-index:2;background:#000;width:100vw;height:100vh;position:absolute}.loading[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:red;font-family:VT323,monospace;font-size:54px}.stats-bar[_ngcontent-%COMP%]{position:absolute;right:10px;top:0;z-index:1}.stats-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:32px;font-size:32px;font-family:VT323,monospace;font-weight:700}.stats-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::before{content:"";height:32px;display:block;width:32px;line-height:32px;background-position:center center;float:left}.stats-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:5px;float:left;line-height:32px}.stats-bar[_ngcontent-%COMP%]   .lives[_ngcontent-%COMP%]::before{background:url(/games/tanks/heart.8693ae5b957ee03faac9.png)}.stats-bar[_ngcontent-%COMP%]   .enemies[_ngcontent-%COMP%]::before{background:#afacb7;-webkit-mask-image:url(/games/tanks/tank-icon.817db94d9be6d4a0b42b.png);mask-image:url(/games/tanks/tank-icon.817db94d9be6d4a0b42b.png)}']],data:{}});function N(e){return i.Hb(0,[i.Eb(402653184,1,{pixi:0}),(e()(),i.qb(1,0,null,null,0,"div",[["class","stats-bar"]],null,null,null,null,null)),(e()(),i.qb(2,0,null,null,6,"div",[["class","game"]],null,null,null,null,null)),(e()(),i.qb(3,0,null,null,1,"app-pixi",[],null,[["window","resize"]],(function(e,t,n){var o=!0;return"window:resize"===t&&(o=!1!==i.Bb(e,4).resize()&&o),o}),h,c)),i.pb(4,245760,[[1,4],["pixi",4]],0,l,[i.k,i.x,u.a],{devicePixelRatio:[0,"devicePixelRatio"]},null),(e()(),i.qb(5,0,null,null,1,"app-game-controllers",[],[[8,"hidden",0]],[[null,"move"],[null,"shot"],["document","keydown"],["document","keyup"]],(function(e,t,n){var o=!0,r=e.component;return"document:keydown"===t&&(o=!1!==i.Bb(e,6).handleKeyDownEvent(n)&&o),"document:keyup"===t&&(o=!1!==i.Bb(e,6).handleKeyUpEvent(n)&&o),"move"===t&&(o=!1!==r.move(n)&&o),"shot"===t&&(o=!1!==r.shot()&&o),o}),f,m)),i.pb(6,245760,null,0,d,[],null,{shot:"shot",move:"move"}),(e()(),i.qb(7,0,null,null,1,"button",[["class","menu-icon menu-button"],["routerLink",""]],null,[[null,"click"]],(function(e,t,n){var o=!0;return"click"===t&&(o=!1!==i.Bb(e,8).onClick()&&o),o}),null,null)),i.pb(8,16384,null,0,v.l,[v.k,v.a,[8,null],i.C,i.k],{routerLink:[0,"routerLink"]},null)],(function(e,t){e(t,4,0,t.component.devicePixelRatio),e(t,6,0),e(t,8,0,"")}),(function(e,t){e(t,5,0,t.component.hideControllers)}))}var F=i.mb("app-game",D,(function(e){return i.Hb(0,[(e()(),i.qb(0,0,null,null,1,"app-game",[],null,[["window","resize"]],(function(e,t,n){var o=!0;return"window:resize"===t&&(o=!1!==i.Bb(e,1).onResize()&&o),o}),N,W)),i.pb(1,4374528,null,0,D,[Y,i.x,i.k,v.a,v.k,U.a,B.a],null,null)],null,null)}),{},{},[]),J=n("SVse"),Q=n("IheW"),$={fullscreen:!0},ee={resume:!0,fullscreen:!0},te=function e(){_classCallCheck(this,e)},ne=function e(){_classCallCheck(this,e)};n.d(t,"GameModuleNgFactory",(function(){return ie}));var ie=i.nb(o,[],(function(e){return i.zb([i.Ab(512,i.j,i.Z,[[8,[r.a,F]],[3,i.j],i.v]),i.Ab(4608,J.l,J.k,[i.s,[2,J.x]]),i.Ab(4608,Y,Y,[Q.c]),i.Ab(1073742336,J.b,J.b,[]),i.Ab(1073742336,v.n,v.n,[[2,v.s],[2,v.k]]),i.Ab(1073742336,te,te,[]),i.Ab(1073742336,ne,ne,[]),i.Ab(1073742336,o,o,[]),i.Ab(1024,v.i,(function(){return[[{path:"",component:D,data:$},{path:"resume",component:D,data:ee}]]}),[])])}))}}]);