(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{rZCR:function(e,t,n){"use strict";n.r(t);var i=n("8Y7J");class s{}var o=n("pMnS"),l=n("mrSG"),r=n("U2x6");class a{constructor(e){this.adsService=e,this.loading=!1,this.canWatchAds=!0,this.viewedRewardVideo=new i.m,this.clickMenu=new i.m}clickWatchAds(){return l.__awaiter(this,void 0,void 0,(function*(){if(this.canWatchAds)try{this.loading=!0,!0===(yield this.adsService.rewardVideo())&&this.viewedRewardVideo.emit()}finally{this.loading=!1}}))}}var u=i.pb({encapsulation:0,styles:[["@import url(https://fonts.googleapis.com/css?family=VT323);.game-over[_ngcontent-%COMP%]{position:absolute;z-index:3;width:100vw;height:100vh;background-color:rgba(0,0,0,.7)}.game-over[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]{position:relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:brown;width:70vw;height:70vh}.game-over[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{height:100%}.game-over[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .game-over-caption[_ngcontent-%COMP%]{height:10vh;font-size:10vh;text-align:center;font-family:VT323,monospace;line-height:10vh}.game-over[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]{display:-webkit-box;display:flex;width:100%;height:calc(100% - 10vh)}.game-over[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:50%;height:100%;position:relative}.game-over[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#000;font-family:VT323,monospace;font-size:54px}*[_ngcontent-%COMP%]{outline:0}.ads-button[_ngcontent-%COMP%]{position:absolute}.menu-btn[_ngcontent-%COMP%]{border:5px dotted brown;position:relative;height:120px;width:120px;background:#000;border-radius:5px}.menu-icon[_ngcontent-%COMP%]{position:absolute}.ads-icon[_ngcontent-%COMP%]{position:absolute;background-image:url(/games/tanks/ads-heart.951c2828e0c3d4ace247.png);width:128px;height:128px;-webkit-transform:scale(.5) translate(-50%,-50%)!important;transform:scale(.5) translate(-50%,-50%)!important;-webkit-transform-origin:0 0;transform-origin:0 0;cursor:pointer}.ads-icon.disabled[_ngcontent-%COMP%]{opacity:.5}.ads-button[_ngcontent-%COMP%], .ads-icon[_ngcontent-%COMP%], .center[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%], .menu-icon[_ngcontent-%COMP%]{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]],data:{}});function c(e){return i.Fb(0,[(e()(),i.rb(0,0,null,null,14,"div",[["class","game-over"]],null,null,null,null,null)),(e()(),i.rb(1,0,null,null,13,"div",[["class","wrapper"]],null,null,null,null,null)),(e()(),i.rb(2,0,null,null,2,"div",[["class","loading"]],[[8,"hidden",0]],null,null,null,null)),(e()(),i.rb(3,0,null,null,1,"div",[["class","wrapper"]],null,null,null,null,null)),(e()(),i.Eb(-1,null,["Loading..."])),(e()(),i.rb(5,0,null,null,9,"div",[["class","menu"]],[[8,"hidden",0]],null,null,null,null)),(e()(),i.rb(6,0,null,null,1,"div",[["class","game-over-caption"]],null,null,null,null,null)),(e()(),i.Eb(-1,null,["Game Over"])),(e()(),i.rb(8,0,null,null,6,"div",[["class","flex"]],null,null,null,null,null)),(e()(),i.rb(9,0,null,null,2,"div",[],null,null,null,null,null)),(e()(),i.rb(10,0,null,null,1,"button",[["class","menu-btn"]],null,[[null,"click"]],(function(e,t,n){var i=!0;return"click"===t&&(i=!1!==e.component.clickWatchAds()&&i),i}),null,null)),(e()(),i.rb(11,0,null,null,0,"span",[["class","ads-icon"]],[[2,"disabled",null]],null,null,null,null)),(e()(),i.rb(12,0,null,null,2,"div",[],null,null,null,null,null)),(e()(),i.rb(13,0,null,null,1,"button",[["class","menu-btn"]],null,[[null,"click"]],(function(e,t,n){var i=!0;return"click"===t&&(i=!1!==e.component.clickMenu.emit()&&i),i}),null,null)),(e()(),i.rb(14,0,null,null,0,"span",[["class","menu-icon"]],null,null,null,null,null))],null,(function(e,t){var n=t.component;e(t,2,0,!n.loading),e(t,5,0,n.loading),e(t,11,0,!n.canWatchAds)}))}var d=n("SVse"),h=n("IqKQ");class p{constructor(e,t){this.elementRef=e,this.ngZone=t,this.devicePixelRatio=window.devicePixelRatio||1,this.applicationOptions={}}init(){this.ngZone.runOutsideAngular(()=>{this.app=new h.b(this.applicationOptions)}),this.elementRef.nativeElement.appendChild(this.app.view),this.resize()}ngOnInit(){this.init()}resize(){const e=1/this.devicePixelRatio;this.app.renderer.resize(this.elementRef.nativeElement.offsetWidth*this.devicePixelRatio,this.elementRef.nativeElement.offsetHeight*this.devicePixelRatio),this.app.view.style.transform=`scale(${e})`,this.app.view.style.transformOrigin="top left"}destroy(){this.app.destroy()}ngOnDestroy(){this.destroy()}}var m=i.pb({encapsulation:2,styles:[],data:{}});function b(e){return i.Fb(0,[],null,null)}var v=n("HDdC"),g=n("D0XW"),f=n("DH7j");function w(e){const{subscriber:t,counter:n,period:i}=e;t.next(n),this.schedule({subscriber:t,counter:n+1,period:i},i)}class _{constructor(){this.shot=new i.m,this.move=new i.m,this.pressedMoveKeys=new Set,this.pressedShot=!1}ngOnInit(){this.intervalSubscription=function(e=0,t=g.a){var n;return n=e,(Object(f.a)(n)||!(n-parseFloat(n)+1>=0)||e<0)&&(e=0),t&&"function"==typeof t.schedule||(t=g.a),new v.a(n=>(n.add(t.schedule(w,e,{subscriber:n,counter:0,period:e})),n))}(50).subscribe(()=>{const e=function(e){const t=Array.from(e);return t[t.length-1]}(this.pressedMoveKeys);this.move.emit(e),this.pressedShot&&this.shot.emit()})}ngOnDestroy(){this.intervalSubscription.unsubscribe()}pressShot(e){return e.preventDefault(),e.stopPropagation(),this.pressedShot=!0,!1}releaseShot(e){return e.preventDefault(),e.stopPropagation(),this.pressedShot=!1,!1}release(e){this.pressedMoveKeys.delete(e)}press(e){this.pressedMoveKeys.add(e)}touchmove(e){e.preventDefault(),e.stopPropagation();const t=e.touches.item(0),n=document.elementFromPoint(t.clientX,t.clientY);return this.moveControllers.nativeElement.contains(n)&&n.classList.contains("button")&&(this.pressedMoveKeys.clear(),this.press(n.classList.toString().replace("button","").trim())),!1}touchend(e){return e.preventDefault(),e.stopPropagation(),this.pressedMoveKeys.clear(),!1}handleKeyDownEvent(e){switch(e.key){case"ArrowLeft":this.press("left");break;case"ArrowRight":this.press("right");break;case"ArrowUp":this.press("up");break;case"ArrowDown":this.press("down");break;case" ":this.pressedShot=!0}}handleKeyUpEvent(e){switch(e.key){case"ArrowLeft":this.release("left");break;case"ArrowRight":this.release("right");break;case"ArrowUp":this.release("up");break;case"ArrowDown":this.release("down");break;case" ":this.pressedShot=!1}}}var y=i.pb({encapsulation:0,styles:[[".tank-move-controllers[_ngcontent-%COMP%]{z-index:1;position:absolute;bottom:10px;left:10px}.tank-move-controllers[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-image:url(/games/tanks/arrow-controller.1d1c9cc0c5ca19e42365.png);width:64px;height:64px;position:relative;opacity:.7}.tank-move-controllers[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{left:64px;top:64px}.tank-move-controllers[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{top:64px;left:128px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tank-move-controllers[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%]{top:64px;left:64px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tank-move-controllers[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{top:-64px;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tank-shot-controller[_ngcontent-%COMP%]{z-index:1;position:absolute;bottom:62px;right:55px}.tank-shot-controller[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-image:url(/games/tanks/shot-controller.c287a59665cc4e5ef601.png);width:85px;height:85px;position:relative;opacity:.7}"]],data:{}});function O(e){return i.Fb(0,[i.Cb(402653184,1,{moveControllers:0}),(e()(),i.rb(1,0,[[1,0],["moveControllers",1]],null,4,"div",[["class","tank-move-controllers"]],null,null,null,null,null)),(e()(),i.rb(2,0,null,null,0,"div",[["class","up button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(e,t,n){var i=!0,s=e.component;return"touchstart"===t&&(i=!1!==s.touchmove(n)&&i),"touchmove"===t&&(i=!1!==s.touchmove(n)&&i),"touchend"===t&&(i=!1!==s.touchend(n)&&i),"mousedown"===t&&(i=!1!==s.press("up")&&i),"mouseup"===t&&(i=!1!==s.release("up")&&i),"mouseleave"===t&&(i=!1!==s.release("up")&&i),i}),null,null)),(e()(),i.rb(3,0,null,null,0,"div",[["class","right button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(e,t,n){var i=!0,s=e.component;return"touchstart"===t&&(i=!1!==s.touchmove(n)&&i),"touchmove"===t&&(i=!1!==s.touchmove(n)&&i),"touchend"===t&&(i=!1!==s.touchend(n)&&i),"mousedown"===t&&(i=!1!==s.press("right")&&i),"mouseup"===t&&(i=!1!==s.release("right")&&i),"mouseleave"===t&&(i=!1!==s.release("right")&&i),i}),null,null)),(e()(),i.rb(4,0,null,null,0,"div",[["class","down button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(e,t,n){var i=!0,s=e.component;return"touchstart"===t&&(i=!1!==s.touchmove(n)&&i),"touchmove"===t&&(i=!1!==s.touchmove(n)&&i),"touchend"===t&&(i=!1!==s.touchend(n)&&i),"mousedown"===t&&(i=!1!==s.press("down")&&i),"mouseup"===t&&(i=!1!==s.release("down")&&i),"mouseleave"===t&&(i=!1!==s.release("down")&&i),i}),null,null)),(e()(),i.rb(5,0,null,null,0,"div",[["class","left button"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"],[null,"mouseleave"]],(function(e,t,n){var i=!0,s=e.component;return"touchstart"===t&&(i=!1!==s.touchmove(n)&&i),"touchmove"===t&&(i=!1!==s.touchmove(n)&&i),"touchend"===t&&(i=!1!==s.touchend(n)&&i),"mousedown"===t&&(i=!1!==s.press("left")&&i),"mouseup"===t&&(i=!1!==s.release("left")&&i),"mouseleave"===t&&(i=!1!==s.release("left")&&i),i}),null,null)),(e()(),i.rb(6,0,null,null,1,"div",[["class","tank-shot-controller"]],null,null,null,null,null)),(e()(),i.rb(7,0,null,null,0,"div",[["class","shot button"]],null,[[null,"touchstart"],[null,"touchend"]],(function(e,t,n){var i=!0,s=e.component;return"touchstart"===t&&(i=!1!==s.pressShot(n)&&i),"touchend"===t&&(i=!1!==s.releaseShot(n)&&i),i}),null,null))],null,null)}var x=n("iInd"),P=n("ePZZ"),k=n("XNiG"),C=n("xgIS"),M=n("Cfvw"),S=n("7o/Q");class A{constructor(e){this.total=e}call(e,t){return t.subscribe(new j(e,this.total))}}class j extends S.a{constructor(e,t){super(e),this.total=t,this.count=0}_next(e){++this.count>this.total&&this.destination.next(e)}}var I=n("pLZG"),R=n("lJxs"),V=n("eIep"),T=n("1G5W"),E=n("l7GE"),z=n("ZUHj");const F={leading:!0,trailing:!1};class L{constructor(e,t,n,i){this.duration=e,this.scheduler=t,this.leading=n,this.trailing=i}call(e,t){return t.subscribe(new D(e,this.duration,this.scheduler,this.leading,this.trailing))}}class D extends S.a{constructor(e,t,n,i,s){super(e),this.duration=t,this.scheduler=n,this.leading=i,this.trailing=s,this._hasTrailingValue=!1,this._trailingValue=null}_next(e){this.throttled?this.trailing&&(this._trailingValue=e,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(q,this.duration,{subscriber:this})),this.leading?this.destination.next(e):this.trailing&&(this._trailingValue=e,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const e=this.throttled;e&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),e.unsubscribe(),this.remove(e),this.throttled=null)}}function q(e){const{subscriber:t}=e;t.clearThrottle()}class W{constructor(e,t){this.notifier=e,this.source=t}call(e,t){return t.subscribe(new K(e,this.notifier,this.source))}}class K extends E.a{constructor(e,t,n){super(e),this.notifier=t,this.source=n}error(e){if(!this.isStopped){let n=this.errors,i=this.retries,s=this.retriesSubscription;if(i)this.errors=null,this.retriesSubscription=null;else{n=new k.a;try{const{notifier:e}=this;i=e(n)}catch(t){return super.error(t)}s=Object(z.a)(this,i)}this._unsubscribeAndRecycle(),this.errors=n,this.retries=i,this.retriesSubscription=s,n.next(e)}}_unsubscribe(){const{errors:e,retriesSubscription:t}=this;e&&(e.unsubscribe(),this.errors=null),t&&(t.unsubscribe(),this.retriesSubscription=null),this.retries=null}notifyNext(e,t,n,i,s){const{_unsubscribe:o}=this;this._unsubscribe=null,this._unsubscribeAndRecycle(),this._unsubscribe=o,this.source.subscribe(this)}}var G=n("3E0/"),U=n("IzEk"),Z=n("qdB0"),N=n("dM4a"),B=n("vHjY"),X=n("haPc");class Y extends N.a{constructor(){super("GameServiceDatabase"),this.version(1).stores({levels:"&name"}),this.version(2).stores({levels:"&name",ais:"&name"})}}let H=(()=>{class e{constructor(e){this.firestoreService=e,this.db=new Y,this.dbExpireTimeSeconds=21600,this.aiExpireTimeSeconds=21600}loadLevel(e){return l.__awaiter(this,void 0,void 0,(function*(){yield this.db.levels.where("name").equals(e).first();const t=yield this.firestoreService.level(e);this.db.levels.put({name:e,mapInfo:t,timestamp:Number(new Date)});const n=Array(2).fill(0).map((e,t)=>({id:`enemy-${t}`,type:B.a.BasicTank,direction:"down"}));return Object.assign({},t,{enemies:n})}))}isExpired(e){return l.__awaiter(this,void 0,void 0,(function*(){const t=yield this.db.ais.where("name").equals(e).first(),n=t?(Number(new Date)-t.timestamp)/1e3:0,i=!t||n>this.aiExpireTimeSeconds;return i?console.log(`${e} expired.`):console.log(`${e} expire in ${this.aiExpireTimeSeconds-n} seconds.`),i}))}loadAI(e){return l.__awaiter(this,void 0,void 0,(function*(){try{const t=yield this.loadAIFromServer(e);return{name:t.name,ai:t.ai}}catch(t){if("storage/object-not-found"===t.code||"storage/quota-exceeded"===t.code)throw t;return this.loadAI(e)}}))}loadAIFromServer(e){return l.__awaiter(this,void 0,void 0,(function*(){const t=yield this.firestoreService.loadAI(e);return yield this.db.ais.put({name:t.name,timestamp:t.timestamp}),t}))}updateAI(e,t){return l.__awaiter(this,void 0,void 0,(function*(){const n=yield this.db.ais.where("name").equals(e).first();n&&n.timestamp?(Number(new Date)-n.timestamp)/1e3>this.aiExpireTimeSeconds&&(yield this.loadFromServerOrUploadToServer(e,n,t)):yield this.loadFromServerOrUploadToServer(e,n,t)}))}loadFromServerOrUploadToServer(e,t,n){return l.__awaiter(this,void 0,void 0,(function*(){try{(yield this.firestoreService.loadAIInfo(e)).timestamp>t.timestamp?yield this.loadAIFromServer(e):yield this.uploadToServer(e,t,n)}catch(i){if("storage/object-not-found"!==i.code)throw i;yield this.uploadToServer(e,t,n)}}))}uploadToServer(e,t,n){return l.__awaiter(this,void 0,void 0,(function*(){const i=Object.assign({},t,{timestamp:Number(new Date)});yield this.firestoreService.updateAI(e,n),yield this.updateAIInfo(e,{timestamp:i.timestamp,trainingInfo:n.ai.trainingInfo}),yield this.db.ais.put(i)}))}updateAIInfo(e,t){return l.__awaiter(this,void 0,void 0,(function*(){return this.firestoreService.updateAIInfo(e,t)}))}}return l.__decorate([Object(X.a)(),l.__metadata("design:type",Function),l.__metadata("design:paramtypes",[String]),l.__metadata("design:returntype",Promise)],e.prototype,"isExpired",null),l.__decorate([Object(X.a)(),l.__metadata("design:type",Function),l.__metadata("design:paramtypes",[String]),l.__metadata("design:returntype",Promise)],e.prototype,"loadAI",null),l.__decorate([Object(X.a)(),l.__metadata("design:type",Function),l.__metadata("design:paramtypes",[String,Object]),l.__metadata("design:returntype",Promise)],e.prototype,"updateAI",null),e})();var $=n("9Chx"),J=n("wRQt");const Q=(e,t)=>{const n=e.findIndex(e=>e===t);return-1===n||n+1>e.length-1?e[0]:e[n]};var ee=n("+cCG");function te(e,t){return{type:P.a.UpdateCenter,width:e,height:t}}class ne{constructor(e,t,n,i,s){this.gameService=e,this.ngZone=t,this.elRef=n,this.route=i,this.router=s,this.resume=!1,this.fullscreen=!1,this.gameOver=!1,this.canWatchAds=!0,this.moveEvent=new k.a,this.destroySubject=new k.a,this.devicePixelRatio=window.devicePixelRatio||1,this.levels=["level-1","level-2","level-6"],this.currentLevelIndex=0}ngOnInit(){var e;this.fullscreen&&function(e){return l.__awaiter(this,void 0,void 0,(function*(){yield e.requestFullscreen(),yield window.screen.orientation.lock("landscape")}))}(this.elRef.nativeElement).catch(e=>{console.warn(e)}),Object(C.a)(document,"visibilitychange").pipe((e=this.fullscreen?1:0,t=>t.lift(new A(e))),Object(I.a)(()=>document.hidden),Object(R.a)(()=>this.stop()),Object(V.a)(()=>this.router.navigate([".."])),Object(T.a)(this.destroySubject)).subscribe()}ngAfterViewInit(){return l.__awaiter(this,void 0,void 0,(function*(){this.initContainer(),yield Object(J.a)(),ee.a.dispatch({type:P.a.SetupPIXI,container:this.container}),ee.a.dispatch({type:P.a.SetupLevelLoader,nextLevel:e=>this.loadLevel(Q(this.levels,e))}),this.setupAXY(),this.route.data.pipe(Object(T.a)(this.destroySubject)).subscribe(e=>l.__awaiter(this,void 0,void 0,(function*(){ee.a.dispatch(e.resume?Object(Z.c)():{type:P.a.NewGame})}))),this.storeSubscribe=this.ngZone.runOutsideAngular(()=>ee.a.subscribe(()=>l.__awaiter(this,void 0,void 0,(function*(){const e=ee.a.getState();this.gameOver=function(e){return e.currentGame.status===$.a.Over}(e)})))),this.moveEvent.pipe(function(e,t=g.a,n=F){return i=>i.lift(new L(e,t,n.leading,n.trailing))}(50),Object(T.a)(this.destroySubject)).subscribe(e=>{ee.a.dispatch(function(e){return{type:P.a.Move,direction:e}}(e))})}))}initContainer(){this.container=new h.c,this.container.sortableChildren=!0,this.pixi.app.stage.addChild(this.container)}loadLevel(e){return l.__awaiter(this,void 0,void 0,(function*(){this.setupAXY(),ee.a.dispatch(function(e){return{type:P.a.Loading,name:e}}(e));const t=yield Object(M.a)(this.gameService.loadLevel(e)).pipe((n=e=>e.pipe(Object(G.a)(1e3),Object(U.a)(1/0)),e=>e.lift(new W(n,e)))).toPromise();var n;ee.a.dispatch(function(e,t){return{type:P.a.Loaded,name:e,level:t}}(e,t))}))}onResize(){this.devicePixelRatio=window.devicePixelRatio||1,setTimeout(()=>{this.pixi.app.renderer&&ee.a.dispatch(te(this.pixi.app.renderer.width,this.pixi.app.renderer.height))},0)}setupAXY(){this.pixi.app.renderer&&ee.a.dispatch(te(this.pixi.app.renderer.width,this.pixi.app.renderer.height))}move(e){this.moveEvent.next(e)}shot(){ee.a.dispatch({type:P.a.Shot})}ngOnDestroy(){this.stop(),this.storeSubscribe&&this.storeSubscribe(),this.container&&this.container.destroy(),this.destroySubject.next(!0),this.destroySubject.complete(),this.fullscreen&&function(e){return l.__awaiter(this,void 0,void 0,(function*(){yield e.exitFullscreen()}))}(document).catch(e=>{console.warn(e)})}start(){ee.a.dispatch(Object(Z.c)())}stop(){ee.a.dispatch(Object(Z.d)())}viewedRewardVideo(){this.canWatchAds=!1,ee.a.dispatch({type:P.a.AddLife})}}var ie=i.pb({encapsulation:0,styles:[['@import url(https://fonts.googleapis.com/css?family=VT323);.game[_ngcontent-%COMP%]{width:100%;height:100%}.game[_ngcontent-%COMP%]   app-pixi[_ngcontent-%COMP%]{width:100%;height:100%;display:block;overflow:hidden}.loading[_ngcontent-%COMP%]{z-index:2;background:#000;width:100vw;height:100vh;position:absolute}.loading[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:red;font-family:VT323,monospace;font-size:54px}.stats-bar[_ngcontent-%COMP%]{position:absolute;right:10px;top:0;z-index:1}.stats-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:32px;font-size:32px;font-family:VT323,monospace;font-weight:700}.stats-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::before{content:"";height:32px;display:block;width:32px;line-height:32px;background-position:center center;float:left}.stats-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:5px;float:left;line-height:32px}.stats-bar[_ngcontent-%COMP%]   .lives[_ngcontent-%COMP%]::before{background:url(/games/tanks/heart.8693ae5b957ee03faac9.png)}.stats-bar[_ngcontent-%COMP%]   .enemies[_ngcontent-%COMP%]::before{background:#afacb7;-webkit-mask-image:url(/games/tanks/tank-icon.817db94d9be6d4a0b42b.png);mask-image:url(/games/tanks/tank-icon.817db94d9be6d4a0b42b.png)}']],data:{}});function se(e){return i.Fb(0,[(e()(),i.rb(0,0,null,null,1,"app-game-over",[],null,[[null,"viewedRewardVideo"],[null,"clickMenu"]],(function(e,t,n){var i=!0,s=e.component;return"viewedRewardVideo"===t&&(i=!1!==s.viewedRewardVideo()&&i),"clickMenu"===t&&(i=!1!==s.menuButtonClick()&&i),i}),c,u)),i.qb(1,49152,null,0,a,[r.a],{canWatchAds:[0,"canWatchAds"]},{viewedRewardVideo:"viewedRewardVideo",clickMenu:"clickMenu"})],(function(e,t){e(t,1,0,t.component.canWatchAds)}),null)}function oe(e){return i.Fb(0,[i.Cb(402653184,1,{pixi:0}),(e()(),i.gb(16777216,null,null,1,null,se)),i.qb(2,16384,null,0,d.i,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(e()(),i.rb(3,0,null,null,0,"div",[["class","stats-bar"]],null,null,null,null,null)),(e()(),i.rb(4,0,null,null,6,"div",[["class","game"]],null,null,null,null,null)),(e()(),i.rb(5,0,null,null,1,"app-pixi",[],null,[["window","resize"]],(function(e,t,n){var s=!0;return"window:resize"===t&&(s=!1!==i.Bb(e,6).resize()&&s),s}),b,m)),i.qb(6,245760,[[1,4],["pixi",4]],0,p,[i.k,i.x],{devicePixelRatio:[0,"devicePixelRatio"]},null),(e()(),i.rb(7,0,null,null,1,"app-game-controllers",[],null,[[null,"move"],[null,"shot"],["document","keydown"],["document","keyup"]],(function(e,t,n){var s=!0,o=e.component;return"document:keydown"===t&&(s=!1!==i.Bb(e,8).handleKeyDownEvent(n)&&s),"document:keyup"===t&&(s=!1!==i.Bb(e,8).handleKeyUpEvent(n)&&s),"move"===t&&(s=!1!==o.move(n)&&s),"shot"===t&&(s=!1!==o.shot()&&s),s}),O,y)),i.qb(8,245760,null,0,_,[],null,{shot:"shot",move:"move"}),(e()(),i.rb(9,0,null,null,1,"button",[["class","menu-icon menu-button"],["routerLink",""]],null,[[null,"click"]],(function(e,t,n){var s=!0;return"click"===t&&(s=!1!==i.Bb(e,10).onClick()&&s),s}),null,null)),i.qb(10,16384,null,0,x.l,[x.k,x.a,[8,null],i.C,i.k],{routerLink:[0,"routerLink"]},null)],(function(e,t){var n=t.component;e(t,2,0,n.gameOver),e(t,6,0,n.devicePixelRatio),e(t,8,0),e(t,10,0,"")}),null)}function le(e){return i.Fb(0,[(e()(),i.rb(0,0,null,null,1,"app-game",[],null,[["window","resize"]],(function(e,t,n){var s=!0;return"window:resize"===t&&(s=!1!==i.Bb(e,1).onResize(n)&&s),s}),oe,ie)),i.qb(1,4440064,null,0,ne,[H,i.x,i.k,x.a,x.k],null,null)],(function(e,t){e(t,1,0)}),null)}var re=i.nb("app-game",ne,le,{resume:"resume",fullscreen:"fullscreen"},{},[]),ae=n("ghyd");const ue={resume:!0};class ce{}class de{}class he{}n.d(t,"GameModuleNgFactory",(function(){return pe}));var pe=i.ob(s,[],(function(e){return i.zb([i.Ab(512,i.j,i.Z,[[8,[o.a,re]],[3,i.j],i.v]),i.Ab(4608,d.k,d.j,[i.s,[2,d.w]]),i.Ab(4608,H,H,[ae.a]),i.Ab(1073742336,d.b,d.b,[]),i.Ab(1073742336,x.n,x.n,[[2,x.s],[2,x.k]]),i.Ab(1073742336,ce,ce,[]),i.Ab(1073742336,de,de,[]),i.Ab(1073742336,he,he,[]),i.Ab(1073742336,s,s,[]),i.Ab(1024,x.i,(function(){return[[{path:"",component:ne},{path:"resume",component:ne,data:ue}]]}),[])])}))}}]);