import{f as ae,j as le,k as ce,l as ue,o as he,q as fe,s as ve,t as pe,u as me,v as de,w as Te}from"./chunk-5OZEMYPF.js";import{$a as R,Bb as c,Ib as oe,Jb as U,Pa as M,e as oi,f as ai,ia as se,kb as o,lb as a,mb as I}from"./chunk-DQIB67K6.js";var Ie=oi((gi,dt)=>{"use strict";(function(u,P,Se,p){"use strict";var k=["","webkit","Moz","MS","ms","o"],Dt=P.createElement("div"),_e="function",W=Math.round,F=Math.abs,Tt=Date.now;function Et(t,e,i){return setTimeout(gt(t,i),e)}function q(t,e,i){return Array.isArray(t)?(N(t,i[e],i),!0):!1}function N(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==p)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function Mt(t,e,i){var n="DEPRECATED METHOD: "+e+`
`+i+` AT 
`;return function(){var r=new Error("get-stack-trace"),s=r&&r.stack?r.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",l=u.console&&(u.console.warn||u.console.log);return l&&l.call(u.console,n,s),t.apply(this,arguments)}}var _;typeof Object.assign!="function"?_=function(e){if(e===p||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(r!==p&&r!==null)for(var s in r)r.hasOwnProperty(s)&&(i[s]=r[s])}return i}:_=Object.assign;var Rt=Mt(function(e,i,n){for(var r=Object.keys(i),s=0;s<r.length;)(!n||n&&e[r[s]]===p)&&(e[r[s]]=i[r[s]]),s++;return e},"extend","Use `assign`."),Ce=Mt(function(e,i){return Rt(e,i,!0)},"merge","Use `assign`.");function E(t,e,i){var n=e.prototype,r;r=t.prototype=Object.create(n),r.constructor=t,r._super=n,i&&_(r,i)}function gt(t,e){return function(){return t.apply(e,arguments)}}function yt(t,e){return typeof t==_e?t.apply(e&&e[0]||p,e):t}function Ut(t,e){return t===p?e:t}function et(t,e,i){N(nt(e),function(n){t.addEventListener(n,i,!1)})}function it(t,e,i){N(nt(e),function(n){t.removeEventListener(n,i,!1)})}function kt(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function w(t,e){return t.indexOf(e)>-1}function nt(t){return t.trim().split(/\s+/g)}function G(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function rt(t){return Array.prototype.slice.call(t,0)}function Ft(t,e,i){for(var n=[],r=[],s=0;s<t.length;){var l=e?t[s][e]:t[s];G(r,l)<0&&n.push(t[s]),r[s]=l,s++}return i&&(e?n=n.sort(function(v,d){return v[e]>d[e]}):n=n.sort()),n}function st(t,e){for(var i,n,r=e[0].toUpperCase()+e.slice(1),s=0;s<k.length;){if(i=k[s],n=i?i+r:e,n in t)return n;s++}return p}var Ae=1;function Oe(){return Ae++}function wt(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||u}var Pe=/mobile|tablet|ip(ad|hone|od)|android/i,Ht="ontouchstart"in u,Ne=st(u,"PointerEvent")!==p,xe=Ht&&Pe.test(navigator.userAgent),j="touch",be="pen",It="mouse",Le="kinect",De=25,m=1,H=2,h=4,T=8,ot=1,Z=2,B=4,$=8,J=16,C=Z|B,Y=$|J,Yt=C|Y,Xt=["x","y"],at=["clientX","clientY"];function g(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(n){yt(t.options.enable,[t])&&i.handler(n)},this.init()}g.prototype={handler:function(){},init:function(){this.evEl&&et(this.element,this.evEl,this.domHandler),this.evTarget&&et(this.target,this.evTarget,this.domHandler),this.evWin&&et(wt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&it(this.element,this.evEl,this.domHandler),this.evTarget&&it(this.target,this.evTarget,this.domHandler),this.evWin&&it(wt(this.element),this.evWin,this.domHandler)}};function Me(t){var e,i=t.options.inputClass;return i?e=i:Ne?e=_t:xe?e=ut:Ht?e=Ct:e=ct,new e(t,Re)}function Re(t,e,i){var n=i.pointers.length,r=i.changedPointers.length,s=e&m&&n-r===0,l=e&(h|T)&&n-r===0;i.isFirst=!!s,i.isFinal=!!l,s&&(t.session={}),i.eventType=e,Ue(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function Ue(t,e){var i=t.session,n=e.pointers,r=n.length;i.firstInput||(i.firstInput=Vt(e)),r>1&&!i.firstMultiple?i.firstMultiple=Vt(e):r===1&&(i.firstMultiple=!1);var s=i.firstInput,l=i.firstMultiple,f=l?l.center:s.center,v=e.center=Wt(n);e.timeStamp=Tt(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=St(f,v),e.distance=lt(f,v),ke(i,e),e.offsetDirection=Gt(e.deltaX,e.deltaY);var d=qt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=d.x,e.overallVelocityY=d.y,e.overallVelocity=F(d.x)>F(d.y)?d.x:d.y,e.scale=l?He(l.pointers,n):1,e.rotation=l?we(l.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,Fe(i,e);var O=t.element;kt(e.srcEvent.target,O)&&(O=e.srcEvent.target),e.target=O}function ke(t,e){var i=e.center,n=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};(e.eventType===m||s.eventType===h)&&(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=r.x+(i.x-n.x),e.deltaY=r.y+(i.y-n.y)}function Fe(t,e){var i=t.lastInterval||e,n=e.timeStamp-i.timeStamp,r,s,l,f;if(e.eventType!=T&&(n>De||i.velocity===p)){var v=e.deltaX-i.deltaX,d=e.deltaY-i.deltaY,O=qt(n,v,d);s=O.x,l=O.y,r=F(O.x)>F(O.y)?O.x:O.y,f=Gt(v,d),t.lastInterval=e}else r=i.velocity,s=i.velocityX,l=i.velocityY,f=i.direction;e.velocity=r,e.velocityX=s,e.velocityY=l,e.direction=f}function Vt(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:W(t.pointers[i].clientX),clientY:W(t.pointers[i].clientY)},i++;return{timeStamp:Tt(),pointers:e,center:Wt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Wt(t){var e=t.length;if(e===1)return{x:W(t[0].clientX),y:W(t[0].clientY)};for(var i=0,n=0,r=0;r<e;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:W(i/e),y:W(n/e)}}function qt(t,e,i){return{x:e/t||0,y:i/t||0}}function Gt(t,e){return t===e?ot:F(t)>=F(e)?t<0?Z:B:e<0?$:J}function lt(t,e,i){i||(i=Xt);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function St(t,e,i){i||(i=Xt);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.atan2(r,n)*180/Math.PI}function we(t,e){return St(e[1],e[0],at)+St(t[1],t[0],at)}function He(t,e){return lt(e[0],e[1],at)/lt(t[0],t[1],at)}var Ye={mousedown:m,mousemove:H,mouseup:h},Xe="mousedown",Ve="mousemove mouseup";function ct(){this.evEl=Xe,this.evWin=Ve,this.pressed=!1,g.apply(this,arguments)}E(ct,g,{handler:function(e){var i=Ye[e.type];i&m&&e.button===0&&(this.pressed=!0),i&H&&e.which!==1&&(i=h),this.pressed&&(i&h&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:It,srcEvent:e}))}});var We={pointerdown:m,pointermove:H,pointerup:h,pointercancel:T,pointerout:T},qe={2:j,3:be,4:It,5:Le},zt="pointerdown",jt="pointermove pointerup pointercancel";u.MSPointerEvent&&!u.PointerEvent&&(zt="MSPointerDown",jt="MSPointerMove MSPointerUp MSPointerCancel");function _t(){this.evEl=zt,this.evWin=jt,g.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}E(_t,g,{handler:function(e){var i=this.store,n=!1,r=e.type.toLowerCase().replace("ms",""),s=We[r],l=qe[e.pointerType]||e.pointerType,f=l==j,v=G(i,e.pointerId,"pointerId");s&m&&(e.button===0||f)?v<0&&(i.push(e),v=i.length-1):s&(h|T)&&(n=!0),!(v<0)&&(i[v]=e,this.callback(this.manager,s,{pointers:i,changedPointers:[e],pointerType:l,srcEvent:e}),n&&i.splice(v,1))}});var Ge={touchstart:m,touchmove:H,touchend:h,touchcancel:T},ze="touchstart",je="touchstart touchmove touchend touchcancel";function Zt(){this.evTarget=ze,this.evWin=je,this.started=!1,g.apply(this,arguments)}E(Zt,g,{handler:function(e){var i=Ge[e.type];if(i===m&&(this.started=!0),!!this.started){var n=Ze.call(this,e,i);i&(h|T)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:n[0],changedPointers:n[1],pointerType:j,srcEvent:e})}}});function Ze(t,e){var i=rt(t.touches),n=rt(t.changedTouches);return e&(h|T)&&(i=Ft(i.concat(n),"identifier",!0)),[i,n]}var Be={touchstart:m,touchmove:H,touchend:h,touchcancel:T},$e="touchstart touchmove touchend touchcancel";function ut(){this.evTarget=$e,this.targetIds={},g.apply(this,arguments)}E(ut,g,{handler:function(e){var i=Be[e.type],n=Je.call(this,e,i);n&&this.callback(this.manager,i,{pointers:n[0],changedPointers:n[1],pointerType:j,srcEvent:e})}});function Je(t,e){var i=rt(t.touches),n=this.targetIds;if(e&(m|H)&&i.length===1)return n[i[0].identifier]=!0,[i,i];var r,s,l=rt(t.changedTouches),f=[],v=this.target;if(s=i.filter(function(d){return kt(d.target,v)}),e===m)for(r=0;r<s.length;)n[s[r].identifier]=!0,r++;for(r=0;r<l.length;)n[l[r].identifier]&&f.push(l[r]),e&(h|T)&&delete n[l[r].identifier],r++;if(f.length)return[Ft(s.concat(f),"identifier",!0),f]}var Qe=2500,Bt=25;function Ct(){g.apply(this,arguments);var t=gt(this.handler,this);this.touch=new ut(this.manager,t),this.mouse=new ct(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}E(Ct,g,{handler:function(e,i,n){var r=n.pointerType==j,s=n.pointerType==It;if(!(s&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(r)Ke.call(this,i,n);else if(s&&ti.call(this,n))return;this.callback(e,i,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Ke(t,e){t&m?(this.primaryTouch=e.changedPointers[0].identifier,$t.call(this,e)):t&(h|T)&&$t.call(this,e)}function $t(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches,r=function(){var s=n.indexOf(i);s>-1&&n.splice(s,1)};setTimeout(r,Qe)}}function ti(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var r=this.lastTouches[n],s=Math.abs(e-r.x),l=Math.abs(i-r.y);if(s<=Bt&&l<=Bt)return!0}return!1}var Jt=st(Dt.style,"touchAction"),Qt=Jt!==p,Kt="compute",te="auto",At="manipulation",X="none",Q="pan-x",K="pan-y",ht=ii();function Ot(t,e){this.manager=t,this.set(e)}Ot.prototype={set:function(t){t==Kt&&(t=this.compute()),Qt&&this.manager.element.style&&ht[t]&&(this.manager.element.style[Jt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return N(this.manager.recognizers,function(e){yt(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),ei(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var n=this.actions,r=w(n,X)&&!ht[X],s=w(n,K)&&!ht[K],l=w(n,Q)&&!ht[Q];if(r){var f=t.pointers.length===1,v=t.distance<2,d=t.deltaTime<250;if(f&&v&&d)return}if(!(l&&s)&&(r||s&&i&C||l&&i&Y))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function ei(t){if(w(t,X))return X;var e=w(t,Q),i=w(t,K);return e&&i?X:e||i?e?Q:K:w(t,At)?At:te}function ii(){if(!Qt)return!1;var t={},e=u.CSS&&u.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=e?u.CSS.supports("touch-action",i):!0}),t}var ft=1,y=2,z=4,D=8,x=D,tt=16,A=32;function b(t){this.options=_({},this.defaults,t||{}),this.id=Oe(),this.manager=null,this.options.enable=Ut(this.options.enable,!0),this.state=ft,this.simultaneous={},this.requireFail=[]}b.prototype={defaults:{},set:function(t){return _(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(q(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=vt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return q(t,"dropRecognizeWith",this)?this:(t=vt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(q(t,"requireFailure",this))return this;var e=this.requireFail;return t=vt(t,this),G(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(q(t,"dropRequireFailure",this))return this;t=vt(t,this);var e=G(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function n(r){e.manager.emit(r,t)}i<D&&n(e.options.event+ee(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=D&&n(e.options.event+ee(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=A},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(A|ft)))return!1;t++}return!0},recognize:function(t){var e=_({},t);if(!yt(this.options.enable,[this,e])){this.reset(),this.state=A;return}this.state&(x|tt|A)&&(this.state=ft),this.state=this.process(e),this.state&(y|z|D|tt)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function ee(t){return t&tt?"cancel":t&D?"end":t&z?"move":t&y?"start":""}function ie(t){return t==J?"down":t==$?"up":t==Z?"left":t==B?"right":""}function vt(t,e){var i=e.manager;return i?i.get(t):t}function S(){b.apply(this,arguments)}E(S,b,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(y|z),r=this.attrTest(t);return n&&(i&T||!r)?e|tt:n||r?i&h?e|D:e&y?e|z:y:A}});function pt(){S.apply(this,arguments),this.pX=null,this.pY=null}E(pt,S,{defaults:{event:"pan",threshold:10,pointers:1,direction:Yt},getTouchAction:function(){var t=this.options.direction,e=[];return t&C&&e.push(K),t&Y&&e.push(Q),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,s=t.deltaX,l=t.deltaY;return r&e.direction||(e.direction&C?(r=s===0?ot:s<0?Z:B,i=s!=this.pX,n=Math.abs(t.deltaX)):(r=l===0?ot:l<0?$:J,i=l!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return S.prototype.attrTest.call(this,t)&&(this.state&y||!(this.state&y)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=ie(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function Pt(){S.apply(this,arguments)}E(Pt,S,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[X]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&y)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function Nt(){b.apply(this,arguments),this._timer=null,this._input=null}E(Nt,b,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[te]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(h|T)&&!r)this.reset();else if(t.eventType&m)this.reset(),this._timer=Et(function(){this.state=x,this.tryEmit()},e.time,this);else if(t.eventType&h)return x;return A},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===x&&(t&&t.eventType&h?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Tt(),this.manager.emit(this.options.event,this._input)))}});function xt(){S.apply(this,arguments)}E(xt,S,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[X]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&y)}});function bt(){S.apply(this,arguments)}E(bt,S,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:C|Y,pointers:1},getTouchAction:function(){return pt.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,i;return e&(C|Y)?i=t.overallVelocity:e&C?i=t.overallVelocityX:e&Y&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&F(i)>this.options.velocity&&t.eventType&h},emit:function(t){var e=ie(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function mt(){b.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}E(mt,b,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[At]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&m&&this.count===0)return this.failTimeout();if(n&&r&&i){if(t.eventType!=h)return this.failTimeout();var s=this.pTime?t.timeStamp-this.pTime<e.interval:!0,l=!this.pCenter||lt(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!l||!s?this.count=1:this.count+=1,this._input=t;var f=this.count%e.taps;if(f===0)return this.hasRequireFailures()?(this._timer=Et(function(){this.state=x,this.tryEmit()},e.interval,this),y):x}return A},failTimeout:function(){return this._timer=Et(function(){this.state=A},this.options.interval,this),A},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==x&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function L(t,e){return e=e||{},e.recognizers=Ut(e.recognizers,L.defaults.preset),new Lt(t,e)}L.VERSION="2.0.7",L.defaults={domEvents:!1,touchAction:Kt,enable:!0,inputTarget:null,inputClass:null,preset:[[xt,{enable:!1}],[Pt,{enable:!1},["rotate"]],[bt,{direction:C}],[pt,{direction:C},["swipe"]],[mt],[mt,{event:"doubletap",taps:2},["tap"]],[Nt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ni=1,ne=2;function Lt(t,e){this.options=_({},L.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=Me(this),this.touchAction=new Ot(this,this.options.touchAction),re(this,!0),N(this.options.recognizers,function(i){var n=this.add(new i[0](i[1]));i[2]&&n.recognizeWith(i[2]),i[3]&&n.requireFailure(i[3])},this)}Lt.prototype={set:function(t){return _(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?ne:ni},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&x)&&(r=e.curRecognizer=null);for(var s=0;s<n.length;)i=n[s],e.stopped!==ne&&(!r||i==r||i.canRecognizeWith(r))?i.recognize(t):i.reset(),!r&&i.state&(y|z|D)&&(r=e.curRecognizer=i),s++}},get:function(t){if(t instanceof b)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(q(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(q(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,i=G(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==p&&e!==p){var i=this.handlers;return N(nt(t),function(n){i[n]=i[n]||[],i[n].push(e)}),this}},off:function(t,e){if(t!==p){var i=this.handlers;return N(nt(t),function(n){e?i[n]&&i[n].splice(G(i[n],e),1):delete i[n]}),this}},emit:function(t,e){this.options.domEvents&&ri(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(!(!i||!i.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&re(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function re(t,e){var i=t.element;if(i.style){var n;N(t.options.cssProps,function(r,s){n=st(i.style,s),e?(t.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=t.oldCssProps[n]||""}),e||(t.oldCssProps={})}}function ri(t,e){var i=P.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}_(L,{INPUT_START:m,INPUT_MOVE:H,INPUT_END:h,INPUT_CANCEL:T,STATE_POSSIBLE:ft,STATE_BEGAN:y,STATE_CHANGED:z,STATE_ENDED:D,STATE_RECOGNIZED:x,STATE_CANCELLED:tt,STATE_FAILED:A,DIRECTION_NONE:ot,DIRECTION_LEFT:Z,DIRECTION_RIGHT:B,DIRECTION_UP:$,DIRECTION_DOWN:J,DIRECTION_HORIZONTAL:C,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Yt,Manager:Lt,Input:g,TouchAction:Ot,TouchInput:ut,MouseInput:ct,PointerEventInput:_t,TouchMouseInput:Ct,SingleTouchInput:Zt,Recognizer:b,AttrRecognizer:S,Tap:mt,Pan:pt,Swipe:bt,Pinch:Pt,Rotate:xt,Press:Nt,on:et,off:it,each:N,merge:Ce,extend:Rt,assign:_,inherit:E,bindFn:gt,prefixed:st});var si=typeof u<"u"?u:typeof self<"u"?self:{};si.Hammer=L,typeof define=="function"&&define.amd?define(function(){return L}):typeof dt<"u"&&dt.exports?dt.exports=L:u[Se]=L})(window,document,"Hammer")});var Ee=[{path:"",pathMatch:"full",loadComponent:()=>import("./chunk-MODO4EPD.js").then(u=>u.HomeComponent)},{path:"about-us",loadComponent:()=>import("./chunk-4ORXACLB.js").then(u=>u.AboutUsComponent)},{path:"events",loadComponent:()=>import("./chunk-764D7O4V.js").then(u=>u.EventListComponent)},{path:"events/:id",loadComponent:()=>import("./chunk-HZQ353SV.js").then(u=>u.EventDetailComponent)},{path:"contact-us",loadComponent:()=>import("./chunk-F4A6R4P3.js").then(u=>u.ContactUsComponent)},{path:"services",loadComponent:()=>import("./chunk-GK2RN53E.js").then(u=>u.ServicesComponent)}];var ge={providers:[me(Ee,de({scrollPositionRestoration:"enabled"})),he(),le(ce())]};var V=()=>({exact:!0}),ye=(()=>{let P=class P{constructor(){this.title="tec-uol-frontend"}};P.\u0275fac=function(k){return new(k||P)},P.\u0275cmp=se({type:P,selectors:[["app-root"]],standalone:!0,features:[oe],decls:156,vars:14,consts:[[1,"header-area"],[1,"header-top"],[1,"container"],[1,"header-top-wrapper","d-flex","flex-wrap","justify-content-sm-between"],[1,"header-top-left","mt-10"],[1,"header-meta"],["href","mailto://infoatgmail.com"],[1,"header-top-right","mt-10"],[1,"header-link"],["href","notice.html",1,"notice"],["href","login.html",1,"login"],["href","register.html",1,"register"],["id","navigation",1,"navigation","navigation-landscape"],[1,"container-fluid","position-relative"],[1,"row","align-items-center"],[1,"col-lg-5"],[1,"header-logo"],[1,"row","w-100","d-flex","align-items-center","justify-content-center"],[1,"col-2","d-flex","align-items-center","justify-content-right"],["href","index.html"],["src","assets/images/logo.png","width","70","height","70","alt","Logo"],[1,"col-9","d-flex","align-items-center","justify-content-left","p-0"],[1,"logo-lable"],[1,"col-lg-7","position-static","d-block",2,"padding-right","2vw"],[1,"d-lg-none","nav-toggle"],[1,"nav-menus-wrapper","float-end"],[1,"nav-menus-wrapper-close-button","d-lg-none"],[1,"nav-menu","float-end"],["routerLinkActive","active","routerLink","./",3,"routerLinkActiveOptions"],["routerLinkActive","active","routerLink","/about-us",3,"routerLinkActiveOptions"],["routerLinkActive","active","routerLink","/services",3,"routerLinkActiveOptions"],["routerLinkActive","active","routerLink","/events",3,"routerLinkActiveOptions"],["routerLinkActive","active","routerLink","/contact-us",3,"routerLinkActiveOptions"],[1,"footer-area","bg_cover"],[1,"footer-widget"],[1,"row"],[1,"col-md-6"],[1,"footer-link","mt-5"],[1,"footer-title"],[1,"link-list"],["href","about-us.html"],["href","#"],["href","contact.html"],[1,"col-12"],[1,"footer-link","mt-2"],[1,"input-group","my-3"],["type","text","placeholder","Recipient's username","aria-label","Recipient's username","aria-describedby","basic-addon2",1,"form-control"],["id","basic-addon2",1,"input-group-text","btn-primary","main-btn-2"],[1,"footer-widget-wrapper"],[1,"footer-social"],[1,"social"],[1,"fab","fa-facebook-f"],[1,"fab","fa-twitter"],[1,"fab","fa-instagram"],[1,"fab","fa-linkedin-in"],[1,"footer-menu"],[1,"menu"],[1,"footer-copyright"],[1,"copyright","text-center"],["href","#",1,"back-to-top"],[1,"fa","fa-chevron-up"]],template:function(k,Dt){k&1&&(o(0,"header",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li")(7,"a",6),c(8,"'infoatgmail.com'"),a()()()(),o(9,"div",7)(10,"div",8)(11,"a",9),c(12,"Notice"),a(),o(13,"a",10),c(14,"Login"),a(),o(15,"a",11),c(16,"Register"),a()()()()()(),o(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"div",16)(22,"div",17)(23,"div",18)(24,"a",19),I(25,"img",20),a()(),o(26,"div",21)(27,"div",22)(28,"strong"),c(29," Department of Science and Technology"),I(30,"br"),c(31," Technology Enabling Centre"),I(32,"br"),c(33," University Of Ladakh, (DST-TEC-UOL) "),a()()()()()(),o(34,"div",23),I(35,"div",24),o(36,"nav",25)(37,"span",26),c(38,"\u2715"),a(),o(39,"ul",27)(40,"li")(41,"a",28),c(42,"Home"),a()(),o(43,"li")(44,"a",29),c(45,"About Us"),a()(),o(46,"li")(47,"a",30),c(48,"Services"),a()(),o(49,"li")(50,"a",28),c(51,"Projects"),a()(),o(52,"li")(53,"a",28),c(54,"Industry Problems"),a()(),o(55,"li")(56,"a",31),c(57,"Events"),a()(),o(58,"li")(59,"a",32),c(60,"Contact"),a()()()()()()()()(),I(61,"router-outlet"),o(62,"section",33)(63,"div",34)(64,"div",2)(65,"div",35)(66,"div",36)(67,"div",37)(68,"h4",38),c(69,"Our Campus"),a(),o(70,"ul",39)(71,"li")(72,"a",40),c(73,"Home - Return to the homepage."),a()(),o(74,"li")(75,"a",41),c(76,"About Us - Learn more about TEC."),a()(),o(77,"li")(78,"a",41),c(79,"Services - Explore our services."),a()(),o(80,"li")(81,"a",41),c(82,"Projects - Discover ongoing and complated Projects."),a()(),o(83,"li")(84,"a",42),c(85,"Industry Problems"),a()(),o(86,"li")(87,"a",41),c(88,"Events and News - Stay updated with the latest happenings."),a()()()()(),o(89,"div",36)(90,"div",35)(91,"div",43)(92,"div",37)(93,"h4",38),c(94,"Address"),a(),o(95,"ul",39)(96,"li")(97,"p"),c(98,"Melongthang Leh-Ladakh near FRL"),a()(),o(99,"li")(100,"p"),c(101,"Administrative office Kargil, Purig Guest House, Kurbathang Kargil, 194103 "),a()()()()(),o(102,"div",43)(103,"div",44)(104,"h4",38),c(105,"Subscribe to Our Newsletter"),a(),o(106,"ul",39)(107,"li")(108,"p"),c(109,"Stay informed about our latest news and events by subscribing to our newsletter."),a()()(),o(110,"div",45),I(111,"input",46),o(112,"span",47),c(113,"Subscribe"),a()()()()()(),o(114,"div",48)(115,"div",49)(116,"ul",50)(117,"li")(118,"a",41),I(119,"i",51),a()(),o(120,"li")(121,"a",41),I(122,"i",52),a()(),o(123,"li")(124,"a",41),I(125,"i",53),a()(),o(126,"li")(127,"a",41),I(128,"i",54),a()()()(),o(129,"div",55)(130,"ul",56)(131,"li")(132,"a",41),c(133,"Home"),a()(),o(134,"li")(135,"a",41),c(136,"About"),a()(),o(137,"li")(138,"a",41),c(139,"Courses"),a()(),o(140,"li")(141,"a",41),c(142,"Notice Board"),a()(),o(143,"li")(144,"a",41),c(145,"Offers"),a()()()()()()()(),o(146,"div",57)(147,"div",2)(148,"div",58)(149,"p"),c(150,"\xA9 2023 "),o(151,"span"),c(152," DST-TEC-UOL "),a(),c(153," created and maintained by TEC UOL Developer Team "),a()()()()(),o(154,"a",59),I(155,"i",60),a()),k&2&&(M(41),R("routerLinkActiveOptions",U(7,V)),M(3),R("routerLinkActiveOptions",U(8,V)),M(3),R("routerLinkActiveOptions",U(9,V)),M(3),R("routerLinkActiveOptions",U(10,V)),M(3),R("routerLinkActiveOptions",U(11,V)),M(3),R("routerLinkActiveOptions",U(12,V)),M(3),R("routerLinkActiveOptions",U(13,V)))},dependencies:[ae,fe,Te,ve,pe],styles:[".main-btn-2[_ngcontent-%COMP%]{background-color:#0c8b51;color:#fff}"]});let u=P;return u})();var _i=ai(Ie());ue(ye,ge).catch(u=>console.error(u));