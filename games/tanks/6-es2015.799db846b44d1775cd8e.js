(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{rZCR:function(t,e,n){"use strict";n.r(e);var l=n("8Y7J");class o{}var i=n("pMnS"),s=n("mrSG"),r=n("U2x6");class a{constructor(t){this.adsService=t,this.loading=!1,this.canWatchAds=!0,this.viewedRewardVideo=new l.m,this.clickMenu=new l.m}clickWatchAds(){return s.__awaiter(this,void 0,void 0,(function*(){if(this.canWatchAds)try{this.loading=!0,!0===(yield this.adsService.rewardVideo())&&this.viewedRewardVideo.emit()}finally{this.loading=!1}}))}}var u=l.pb({encapsulation:0,styles:[["@import url(https://fonts.googleapis.com/css?family=VT323);.game-over[_ngcontent-%COMP%]{position:absolute;z-index:3;width:100vw;height:100vh;background-color:rgba(0,0,0,.7)}.game-over[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]{position:relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:brown;width:70vw;height:70vh}.game-over[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{height:100%}.game-over[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .game-over-caption[_ngcontent-%COMP%]{height:10vh;font-size:10vh;text-align:center;font-family:VT323,monospace;line-height:10vh}.game-over[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]{display:-webkit-box;display:flex;width:100%;height:calc(100% - 10vh)}.game-over[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:50%;height:100%;position:relative}.game-over[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#000;font-family:VT323,monospace;font-size:54px}*[_ngcontent-%COMP%]{outline:0}.ads-button[_ngcontent-%COMP%]{position:absolute}.menu-btn[_ngcontent-%COMP%]{border:5px dotted brown;position:relative;height:120px;width:120px;background:#000;border-radius:5px}.menu-icon[_ngcontent-%COMP%]{position:absolute}.ads-icon[_ngcontent-%COMP%]{position:absolute;background-image:url(/games/tanks/ads-heart.951c2828e0c3d4ace247.png);width:128px;height:128px;-webkit-transform:scale(.5) translate(-50%,-50%)!important;transform:scale(.5) translate(-50%,-50%)!important;-webkit-transform-origin:0 0;transform-origin:0 0;cursor:pointer}.ads-icon.disabled[_ngcontent-%COMP%]{opacity:.5}.ads-button[_ngcontent-%COMP%], .ads-icon[_ngcontent-%COMP%], .center[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%], .menu-icon[_ngcontent-%COMP%]{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]],data:{}});function c(t){return l.Fb(0,[(t()(),l.rb(0,0,null,null,14,"div",[["class","game-over"]],null,null,null,null,null)),(t()(),l.rb(1,0,null,null,13,"div",[["class","wrapper"]],null,null,null,null,null)),(t()(),l.rb(2,0,null,null,2,"div",[["class","loading"]],[[8,"hidden",0]],null,null,null,null)),(t()(),l.rb(3,0,null,null,1,"div",[["class","wrapper"]],null,null,null,null,null)),(t()(),l.Eb(-1,null,["Loading..."])),(t()(),l.rb(5,0,null,null,9,"div",[["class","menu"]],[[8,"hidden",0]],null,null,null,null)),(t()(),l.rb(6,0,null,null,1,"div",[["class","game-over-caption"]],null,null,null,null,null)),(t()(),l.Eb(-1,null,["Game Over"])),(t()(),l.rb(8,0,null,null,6,"div",[["class","flex"]],null,null,null,null,null)),(t()(),l.rb(9,0,null,null,2,"div",[],null,null,null,null,null)),(t()(),l.rb(10,0,null,null,1,"button",[["class","menu-btn"]],null,[[null,"click"]],(function(t,e,n){var l=!0;return"click"===e&&(l=!1!==t.component.clickWatchAds()&&l),l}),null,null)),(t()(),l.rb(11,0,null,null,0,"span",[["class","ads-icon"]],[[2,"disabled",null]],null,null,null,null)),(t()(),l.rb(12,0,null,null,2,"div",[],null,null,null,null,null)),(t()(),l.rb(13,0,null,null,1,"button",[["class","menu-btn"]],null,[[null,"click"]],(function(t,e,n){var l=!0;return"click"===e&&(l=!1!==t.component.clickMenu.emit()&&l),l}),null,null)),(t()(),l.rb(14,0,null,null,0,"span",[["class","menu-icon"]],null,null,null,null,null))],null,(function(t,e){var n=e.component;t(e,2,0,!n.loading),t(e,5,0,n.loading),t(e,11,0,!n.canWatchAds)}))}var h=n("SVse"),d=n("IqKQ");class p{constructor(t,e){this.elementRef=t,this.ngZone=e,this.devicePixelRatio=window.devicePixelRatio||1,this.applicationOptions={}}init(){this.ngZone.runOutsideAngular(()=>{this.app=new d.b(this.applicationOptions)}),this.elementRef.nativeElement.appendChild(this.app.view),this.resize()}ngOnInit(){this.init()}resize(){const t=1/this.devicePixelRatio;this.app.renderer.resize(this.elementRef.nativeElement.offsetWidth*this.devicePixelRatio,this.elementRef.nativeElement.offsetHeight*this.devicePixelRatio),this.app.view.style.transform=`scale(${t})`,this.app.view.style.transformOrigin="top left"}destroy(){this.app.destroy()}ngOnDestroy(){this.destroy()}}var g=l.pb({encapsulation:2,styles:[],data:{}});function m(t){return l.Fb(0,[],null,null)}var b=n("HDdC"),v=n("D0XW"),f=n("DH7j");function w(t){const{subscriber:e,counter:n,period:l}=t;e.next(n),this.schedule({subscriber:e,counter:n+1,period:l},l)}class O{constructor(){this.shot=new l.m,this.move=new l.m,this.pressedMoveKeys=new Set,this.pressedShot=!1}ngOnInit(){this.intervalSubscription=function(t=0,e=v.a){var n;return n=t,(Object(f.a)(n)||!(n-parseFloat(n)+1>=0)||t<0)&&(t=0),e&&"function"==typeof e.schedule||(e=v.a),new b.a(n=>(n.add(e.schedule(w,t,{subscriber:n,counter:0,period:t})),n))}(50).subscribe(()=>{const t=function(t){const e=Array.from(t);return e[e.length-1]}(this.pressedMoveKeys);this.move.emit(t),this.pressedShot&&this.shot.emit()})}ngOnDestroy(){this.intervalSubscription.unsubscribe()}pressShot(t){return t.preventDefault(),t.stopPropagation(),this.pressedShot=!0,!1}releaseShot(t){return t.preventDefault(),t.stopPropagation(),this.pressedShot=!1,!1}release(t){this.pressedMoveKeys.delete(t)}press(t){this.pressedMoveKeys.add(t)}touchmove(t){t.preventDefault(),t.stopPropagation();const e=t.touches.item(0),n=document.elementFromPoint(e.clientX,e.clientY);return this.moveControllers.nativeElement.contains(n)&&n.classList.contains("button")&&(this.pressedMoveKeys.clear(),this.press(n.classList.toString().replace("button","").trim())),!1}touchend(t){return t.preventDefault(),t.stopPropagation(),this.pressedMoveKeys.clear(),!1}handleKeyDownEvent(t){switch(t.key){case"ArrowLeft":this.press("left");break;case"ArrowRight":this.press("right");break;case"ArrowUp":this.press("up");break;case"ArrowDown":this.press("down");break;case" ":this.pressedShot=!0}}handleKeyUpEvent(t){switch(t.key){case"ArrowLeft":this.release("left");break;case"ArrowRight":this.release("right");break;case"ArrowUp":this.release("up");break;case"ArrowDown":this.release("down");break;case" ":this.pressedShot=!1}}}var _=l.pb({encapsulation:0,styles:[[".tank-move-controllers[_ngcontent-%COMP%]{z-index:1;position:absolute;bottom:10px;left:10px}.tank-move-controllers[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-image:url(/games/tanks/arrow-controller.1d1c9cc0c5ca19e42365.png);width:64px;height:64px;position:relative;opacity:.7}.tank-move-controllers[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{left:64px;top:64px}.tank-move-controllers[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{top:64px;left:128px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tank-move-controllers[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%]{top:64px;left:64px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tank-move-controllers[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{top:-64px;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tank-shot-controller[_ngcontent-%COMP%]{z-index:1;position:absolute;bottom:62px;right:55px}.tank-shot-controller[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-image:url(/games/tanks/shot-controller.c287a59665cc4e5ef601.png);width:85px;height:85px;position:relative;opacity:.7}"]],data:{}});function k(t){return l.Fb(0,[l.Cb(402653184,1,{moveControllers:0}),(t()(),l.rb(1,0,[[1,0],["moveControllers",1]],null,4,"div",[["class","tank-move-controllers"]],null,null,null,null,null)),(t()(),l.rb(2,0,null,null,0,"div",[["class","up button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(t,e,n){var l=!0,o=t.component;return"touchstart"===e&&(l=!1!==o.touchmove(n)&&l),"touchmove"===e&&(l=!1!==o.touchmove(n)&&l),"touchend"===e&&(l=!1!==o.touchend(n)&&l),"mousedown"===e&&(l=!1!==o.press("up")&&l),"mouseup"===e&&(l=!1!==o.release("up")&&l),"mouseleave"===e&&(l=!1!==o.release("up")&&l),l}),null,null)),(t()(),l.rb(3,0,null,null,0,"div",[["class","right button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(t,e,n){var l=!0,o=t.component;return"touchstart"===e&&(l=!1!==o.touchmove(n)&&l),"touchmove"===e&&(l=!1!==o.touchmove(n)&&l),"touchend"===e&&(l=!1!==o.touchend(n)&&l),"mousedown"===e&&(l=!1!==o.press("right")&&l),"mouseup"===e&&(l=!1!==o.release("right")&&l),"mouseleave"===e&&(l=!1!==o.release("right")&&l),l}),null,null)),(t()(),l.rb(4,0,null,null,0,"div",[["class","down button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(t,e,n){var l=!0,o=t.component;return"touchstart"===e&&(l=!1!==o.touchmove(n)&&l),"touchmove"===e&&(l=!1!==o.touchmove(n)&&l),"touchend"===e&&(l=!1!==o.touchend(n)&&l),"mousedown"===e&&(l=!1!==o.press("down")&&l),"mouseup"===e&&(l=!1!==o.release("down")&&l),"mouseleave"===e&&(l=!1!==o.release("down")&&l),l}),null,null)),(t()(),l.rb(5,0,null,null,0,"div",[["class","left button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(t,e,n){var l=!0,o=t.component;return"touchstart"===e&&(l=!1!==o.touchmove(n)&&l),"touchmove"===e&&(l=!1!==o.touchmove(n)&&l),"touchend"===e&&(l=!1!==o.touchend(n)&&l),"mousedown"===e&&(l=!1!==o.press("left")&&l),"mouseup"===e&&(l=!1!==o.release("left")&&l),"mouseleave"===e&&(l=!1!==o.release("left")&&l),l}),null,null)),(t()(),l.rb(6,0,null,null,1,"div",[["class","tank-shot-controller"]],null,null,null,null,null)),(t()(),l.rb(7,0,null,null,0,"div",[["class","shot button"]],null,[[null,"touchstart"],[null,"touchend"]],(function(t,e,n){var l=!0,o=t.component;return"touchstart"===e&&(l=!1!==o.pressShot(n)&&l),"touchend"===e&&(l=!1!==o.releaseShot(n)&&l),l}),null,null))],null,null)}var x=n("iInd"),P=n("ePZZ"),C=n("XNiG"),M=n("xgIS"),y=n("Cfvw"),A=n("7o/Q");class S{constructor(t){this.total=t}call(t,e){return e.subscribe(new R(t,this.total))}}class R extends A.a{constructor(t,e){super(t),this.total=e,this.count=0}_next(t){++this.count>this.total&&this.destination.next(t)}}var j=n("pLZG"),V=n("lJxs"),z=n("eIep"),L=n("1G5W");n("l7GE"),n("ZUHj");const E={leading:!0,trailing:!1};class T{constructor(t,e,n,l){this.duration=t,this.scheduler=e,this.leading=n,this.trailing=l}call(t,e){return e.subscribe(new W(t,this.duration,this.scheduler,this.leading,this.trailing))}}class W extends A.a{constructor(t,e,n,l,o){super(t),this.duration=e,this.scheduler=n,this.leading=l,this.trailing=o,this._hasTrailingValue=!1,this._trailingValue=null}_next(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(D,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)}}function D(t){const{subscriber:e}=t;e.clearThrottle()}var I=n("qdB0"),G=n("vHjY"),K=n("xk4V"),F=n.n(K);const Z=t=>t.map(q),q=t=>Object.keys(t).map(e=>{if(!Object.values(G.a).find(t=>t===e))throw new Error(`Wrong enemy tank type: ${e} in map: ${name}`);return new Array(t[e]).fill(0).map(()=>({id:`enemy-${F()()}`,type:e,direction:"down"}))}).reduce((t,e)=>t.concat(e),[]);class B{constructor(t){this.http=t}loadLevel(t){return this.http.get(`/assets/maps/${t}.json`).pipe(Object(V.a)(t=>Object.assign({},t,{enemiesGroups:Z(t.enemiesGroups)})))}}var U=n("9Chx"),X=n("wRQt");const Y=(t,e)=>{const n=t.findIndex(t=>t===e);return-1===n||n+1>t.length-1?t[0]:t[n+1]};var H=n("+cCG");function $(t,e){return{type:P.a.UpdateCenter,width:t,height:e}}class J{constructor(t,e,n,l,o){this.gameService=t,this.ngZone=e,this.elRef=n,this.route=l,this.router=o,this.resume=!1,this.fullscreen=!1,this.gameOver=!1,this.canWatchAds=!0,this.moveEvent=new C.a,this.destroySubject=new C.a,this.devicePixelRatio=window.devicePixelRatio||1,this.levels=["level-1","level-2","level-6"]}ngOnInit(){var t;this.fullscreen&&function(t){return s.__awaiter(this,void 0,void 0,(function*(){yield t.requestFullscreen(),yield window.screen.orientation.lock("landscape")}))}(this.elRef.nativeElement).catch(t=>{console.warn(t)}),Object(M.a)(document,"visibilitychange").pipe((t=this.fullscreen?1:0,e=>e.lift(new S(t))),Object(j.a)(()=>document.hidden),Object(V.a)(()=>this.stop()),Object(z.a)(()=>this.router.navigate([".."])),Object(L.a)(this.destroySubject)).subscribe()}ngAfterViewInit(){return s.__awaiter(this,void 0,void 0,(function*(){this.initContainer(),yield Object(X.a)(),H.a.dispatch({type:P.a.SetupPIXI,container:this.container}),H.a.dispatch({type:P.a.SetupLevelLoader,nextLevel:t=>this.loadLevel(Y(this.levels,t))}),this.setupAXY(),this.route.data.pipe(Object(L.a)(this.destroySubject)).subscribe(t=>s.__awaiter(this,void 0,void 0,(function*(){H.a.dispatch(t.resume?Object(I.c)():{type:P.a.NewGame})}))),this.storeSubscribe=this.ngZone.runOutsideAngular(()=>H.a.subscribe(()=>s.__awaiter(this,void 0,void 0,(function*(){const t=H.a.getState();this.gameOver=function(t){return t.currentGame.status===U.a.Over}(t)})))),this.moveEvent.pipe(function(t,e=v.a,n=E){return l=>l.lift(new T(t,e,n.leading,n.trailing))}(50),Object(L.a)(this.destroySubject)).subscribe(t=>{H.a.dispatch(function(t){return{type:P.a.Move,direction:t}}(t))})}))}initContainer(){this.container=new d.c,this.container.sortableChildren=!0,this.pixi.app.stage.addChild(this.container)}loadLevel(t){return s.__awaiter(this,void 0,void 0,(function*(){this.setupAXY(),H.a.dispatch(function(t){return{type:P.a.Loading,name:t}}(t));const e=yield Object(y.a)(this.gameService.loadLevel(t)).toPromise();H.a.dispatch(function(t,e){return{type:P.a.Loaded,name:t,level:e}}(t,e))}))}onResize(){this.devicePixelRatio=window.devicePixelRatio||1,setTimeout(()=>{this.pixi.app.renderer&&H.a.dispatch($(this.pixi.app.renderer.width,this.pixi.app.renderer.height))},0)}setupAXY(){this.pixi.app.renderer&&H.a.dispatch($(this.pixi.app.renderer.width,this.pixi.app.renderer.height))}move(t){this.moveEvent.next(t)}shot(){H.a.dispatch({type:P.a.Shot})}ngOnDestroy(){this.stop(),this.storeSubscribe&&this.storeSubscribe(),this.container&&this.container.destroy(),this.destroySubject.next(!0),this.destroySubject.complete(),this.fullscreen&&function(t){return s.__awaiter(this,void 0,void 0,(function*(){yield t.exitFullscreen()}))}(document).catch(t=>{console.warn(t)})}start(){H.a.dispatch(Object(I.c)())}stop(){H.a.dispatch(Object(I.d)())}viewedRewardVideo(){this.canWatchAds=!1,H.a.dispatch({type:P.a.AddLife})}}var N=l.pb({encapsulation:0,styles:[['@import url(https://fonts.googleapis.com/css?family=VT323);.game[_ngcontent-%COMP%]{width:100%;height:100%}.game[_ngcontent-%COMP%]   app-pixi[_ngcontent-%COMP%]{width:100%;height:100%;display:block;overflow:hidden}.loading[_ngcontent-%COMP%]{z-index:2;background:#000;width:100vw;height:100vh;position:absolute}.loading[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:red;font-family:VT323,monospace;font-size:54px}.stats-bar[_ngcontent-%COMP%]{position:absolute;right:10px;top:0;z-index:1}.stats-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:32px;font-size:32px;font-family:VT323,monospace;font-weight:700}.stats-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::before{content:"";height:32px;display:block;width:32px;line-height:32px;background-position:center center;float:left}.stats-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:5px;float:left;line-height:32px}.stats-bar[_ngcontent-%COMP%]   .lives[_ngcontent-%COMP%]::before{background:url(/games/tanks/heart.8693ae5b957ee03faac9.png)}.stats-bar[_ngcontent-%COMP%]   .enemies[_ngcontent-%COMP%]::before{background:#afacb7;-webkit-mask-image:url(/games/tanks/tank-icon.817db94d9be6d4a0b42b.png);mask-image:url(/games/tanks/tank-icon.817db94d9be6d4a0b42b.png)}']],data:{}});function Q(t){return l.Fb(0,[(t()(),l.rb(0,0,null,null,1,"app-game-over",[],null,[[null,"viewedRewardVideo"],[null,"clickMenu"]],(function(t,e,n){var l=!0,o=t.component;return"viewedRewardVideo"===e&&(l=!1!==o.viewedRewardVideo()&&l),"clickMenu"===e&&(l=!1!==o.menuButtonClick()&&l),l}),c,u)),l.qb(1,49152,null,0,a,[r.a],{canWatchAds:[0,"canWatchAds"]},{viewedRewardVideo:"viewedRewardVideo",clickMenu:"clickMenu"})],(function(t,e){t(e,1,0,e.component.canWatchAds)}),null)}function tt(t){return l.Fb(0,[l.Cb(402653184,1,{pixi:0}),(t()(),l.gb(16777216,null,null,1,null,Q)),l.qb(2,16384,null,0,h.i,[l.N,l.K],{ngIf:[0,"ngIf"]},null),(t()(),l.rb(3,0,null,null,0,"div",[["class","stats-bar"]],null,null,null,null,null)),(t()(),l.rb(4,0,null,null,6,"div",[["class","game"]],null,null,null,null,null)),(t()(),l.rb(5,0,null,null,1,"app-pixi",[],null,[["window","resize"]],(function(t,e,n){var o=!0;return"window:resize"===e&&(o=!1!==l.Bb(t,6).resize()&&o),o}),m,g)),l.qb(6,245760,[[1,4],["pixi",4]],0,p,[l.k,l.x],{devicePixelRatio:[0,"devicePixelRatio"]},null),(t()(),l.rb(7,0,null,null,1,"app-game-controllers",[],null,[[null,"move"],[null,"shot"],["document","keydown"],["document","keyup"]],(function(t,e,n){var o=!0,i=t.component;return"document:keydown"===e&&(o=!1!==l.Bb(t,8).handleKeyDownEvent(n)&&o),"document:keyup"===e&&(o=!1!==l.Bb(t,8).handleKeyUpEvent(n)&&o),"move"===e&&(o=!1!==i.move(n)&&o),"shot"===e&&(o=!1!==i.shot()&&o),o}),k,_)),l.qb(8,245760,null,0,O,[],null,{shot:"shot",move:"move"}),(t()(),l.rb(9,0,null,null,1,"button",[["class","menu-icon menu-button"],["routerLink",""]],null,[[null,"click"]],(function(t,e,n){var o=!0;return"click"===e&&(o=!1!==l.Bb(t,10).onClick()&&o),o}),null,null)),l.qb(10,16384,null,0,x.l,[x.k,x.a,[8,null],l.C,l.k],{routerLink:[0,"routerLink"]},null)],(function(t,e){var n=e.component;t(e,2,0,n.gameOver),t(e,6,0,n.devicePixelRatio),t(e,8,0),t(e,10,0,"")}),null)}function et(t){return l.Fb(0,[(t()(),l.rb(0,0,null,null,1,"app-game",[],null,[["window","resize"]],(function(t,e,n){var o=!0;return"window:resize"===e&&(o=!1!==l.Bb(t,1).onResize(n)&&o),o}),tt,N)),l.qb(1,4440064,null,0,J,[B,l.x,l.k,x.a,x.k],null,null)],(function(t,e){t(e,1,0)}),null)}var nt=l.nb("app-game",J,et,{resume:"resume",fullscreen:"fullscreen"},{},[]),lt=n("IheW");const ot={resume:!0};class it{}class st{}class rt{}n.d(e,"GameModuleNgFactory",(function(){return at}));var at=l.ob(o,[],(function(t){return l.zb([l.Ab(512,l.j,l.Z,[[8,[i.a,nt]],[3,l.j],l.v]),l.Ab(4608,h.k,h.j,[l.s,[2,h.w]]),l.Ab(4608,B,B,[lt.c]),l.Ab(1073742336,h.b,h.b,[]),l.Ab(1073742336,x.n,x.n,[[2,x.s],[2,x.k]]),l.Ab(1073742336,it,it,[]),l.Ab(1073742336,st,st,[]),l.Ab(1073742336,rt,rt,[]),l.Ab(1073742336,o,o,[]),l.Ab(1024,x.i,(function(){return[[{path:"",component:J},{path:"resume",component:J,data:ot}]]}),[])])}))}}]);