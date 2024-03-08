import{a as hn}from"./chunk-K3YQJX6N.js";import{o as dn,p as mn,q as pn,r as zt}from"./chunk-TKK4WPGI.js";import{b as vt,e as ln,f as V,g as cn,m as Rt,n as fn,p as un}from"./chunk-5OZEMYPF.js";import{$a as R,Bb as g,Ca as rn,Cb as jt,Db as me,Fa as et,Ga as on,Ib as pe,Ja as Dt,Kb as nt,L as en,Lb as gt,Mb as he,N as nn,Pa as I,Qa as M,Sa as sn,Va as ue,X as fe,Y as Et,_a as Lt,aa as J,ba as E,ea as an,eb as Ft,fa as tt,fb as de,ga as Pt,ia as pt,j as le,ja as P,ka as At,kb as d,la as Tt,lb as h,m as ce,ma as Nt,mb as y,n as Ze,o as Qe,q as Je,u as tn,vb as ht,wb as Bt}from"./chunk-DQIB67K6.js";var gn=(()=>{let e=class e{transform(n){return(n?.start_time==n?.end_time||!n?.end_time)&&n?.start_time?zt(n.start_time):n?.start_time?`${zt(n.start_time)} To ${zt(n.end_time)}`:null}};e.\u0275fac=function(a){return new(a||e)},e.\u0275pipe=Tt({name:"tec_time",type:e,pure:!0,standalone:!0});let t=e;return t})();var vn=(()=>{let e=class e{transform(n){let a=n?.venueIds;return Array.isArray(a)&&a?.length?a.map(r=>r?.full_address).toString():null}};e.\u0275fac=function(a){return new(a||e)},e.\u0275pipe=Tt({name:"tec_venue",type:e,pure:!0,standalone:!0});let t=e;return t})();var ge;try{ge=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ge=!1}var bn=(()=>{let e=class e{constructor(n){this._platformId=n,this.isBrowser=this._platformId?cn(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||ge)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(a){return new(a||e)(tt(rn))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),yn=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=P({type:e}),e.\u0275inj=E({});let t=e;return t})();var ve=class{constructor(e,i){this._document=i;let n=this._textarea=this._document.createElement("textarea"),a=n.style;a.position="fixed",a.top=a.opacity="0",a.left="-999em",n.setAttribute("aria-hidden","true"),n.value=e,n.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(n)}copy(){let e=this._textarea,i=!1;try{if(e){let n=this._document.activeElement;e.select(),e.setSelectionRange(0,e.value.length),i=this._document.execCommand("copy"),n&&n.focus()}}catch{}return i}destroy(){let e=this._textarea;e&&(e.remove(),this._textarea=void 0)}},wn=(()=>{let e=class e{constructor(n){this._document=n}copy(n){let a=this.beginCopy(n),r=a.copy();return a.destroy(),r}beginCopy(n){return new ve(n,this._document)}};e.\u0275fac=function(a){return new(a||e)(tt(vt))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var xn=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=P({type:e}),e.\u0275inj=E({});let t=e;return t})();var st=new an("shareButtonsConfig");var Ht=function(t){return t.Anchor="anchor",t.Window="window",t}(Ht||{});function be(t){return t&&typeof t=="object"&&!Array.isArray(t)}function ye(t,...e){if(!e.length)return t;let i=e.shift();if(be(t)&&be(i))for(let n in i)be(i[n])?(t[n]||Object.assign(t,{[n]:{}}),ye(t[n],i[n])):Object.assign(t,{[n]:i[n]});return ye(t,...e)}function Mi(t,e){if(t){if(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(t))return t;console.warn(`[ShareButtons]: Sharing link '${t}' is invalid!`)}return e}function Ei(){return new le(t=>document.defaultView.print())}function Pi({params:t,data:e,clipboard:i,updater:n}){return Je(null).pipe(Et(()=>{i.copy(t.url),n.next({icon:e.successIcon,text:e.successText,disabled:!0})}),nn(e.delay),Et(()=>n.next({icon:e.icon,text:e.text,disabled:!1})),en(1))}var $t={description:t=>t.description?`${t.description}\r
${t.url}`:t.url},kn={facebook:{type:"facebook",text:"Facebook",ariaLabel:"Share on Facebook",icon:["fab","facebook-f"],color:"#4267B2",share:{desktop:"https://www.facebook.com/sharer/sharer.php?"},params:{url:"u"}},twitter:{type:"twitter",text:"Twitter",ariaLabel:"Share on Twitter",icon:["fab","twitter"],color:"#00acee",share:{desktop:"https://twitter.com/intent/tweet?"},params:{url:"url",description:"text",tags:"hashtags",via:"via"}},linkedin:{type:"linkedin",text:"LinkedIn",ariaLabel:"Share on LinkedIn",icon:["fab","linkedin-in"],color:"#006fa6",share:{desktop:"https://www.linkedin.com/shareArticle?"},params:{url:"url",title:"title",description:"summary"}},pinterest:{type:"pinterest",text:"Pinterest",ariaLabel:"Share on Pinterest",icon:["fab","pinterest-p"],color:"#BD091D",share:{desktop:"https://pinterest.com/pin/create/button/?"},params:{url:"url",description:"description",image:"media"}},reddit:{type:"reddit",text:"Reddit",ariaLabel:"Share on Reddit",icon:["fab","reddit-alien"],color:"#FF4006",share:{desktop:"https://www.reddit.com/submit?"},params:{url:"url",title:"title"}},tumblr:{type:"tumblr",text:"Tumblr",ariaLabel:"Share on Tumblr",icon:["fab","tumblr"],color:"#36465D",share:{desktop:"https://tumblr.com/widgets/share/tool?"},params:{url:"canonicalUrl",description:"caption",tags:"tags"}},mix:{type:"mix",text:"Mix",ariaLabel:"Share on Mix",icon:["fab","mix"],color:"#eb4924",share:{desktop:"https://mix.com/add?"},params:{url:"url"}},viber:{type:"viber",text:"Viber",ariaLabel:"Share on Viber",icon:["fab","viber"],color:"#665ca7",share:{android:"viber://forward?",ios:"viber://forward?"},params:{description:"text"},paramsFunc:$t},vk:{type:"vk",text:"VKontakte",ariaLabel:"Share on VKontakte",icon:["fab","vk"],color:"#4C75A3",share:{desktop:"https://vk.com/share.php?"},params:{url:"url"}},telegram:{type:"telegram",text:"Telegram",ariaLabel:"Share on Telegram",icon:["fab","telegram-plane"],color:"#0088cc",share:{desktop:"https://t.me/share/url?"},params:{url:"url",description:"text"}},messenger:{type:"messenger",text:"Messenger",ariaLabel:"Share on Messenger",icon:["fab","facebook-messenger"],color:"#0080FF",share:{desktop:"https://www.facebook.com/dialog/send?",android:"fb-messenger://share/?",ios:"fb-messenger://share/?"},params:{url:"link",appId:"app_id",redirectUrl:"redirect_uri"}},whatsapp:{type:"whatsapp",text:"WhatsApp",ariaLabel:"Share on WhatsApp",icon:["fab","whatsapp"],color:"#25D366",share:{desktop:"https://api.whatsapp.com/send?",android:"whatsapp://send?",ios:"https://api.whatsapp.com/send?"},params:{url:"link",description:"text"},paramsFunc:$t},xing:{type:"xing",text:"Xing",ariaLabel:"Share on Xing",icon:["fab","xing"],color:"#006567",share:{desktop:"https://www.xing.com/spi/shares/new?"},params:{url:"url"}},line:{type:"line",text:"Line",ariaLabel:"Share on Line",icon:["fab","line"],color:"#00b900",share:{desktop:"https://social-plugins.line.me/lineit/share?"},params:{url:"url"}},sms:{type:"sms",text:"SMS",ariaLabel:"Share link via SMS",icon:["fas","sms"],color:"#20c16c",share:{desktop:"sms:?",ios:"sms:&"},params:{description:"body"},paramsFunc:$t},email:{type:"email",text:"Email",ariaLabel:"Share link via email",icon:["fas","envelope"],color:"#FF961C",share:{desktop:"mailto:?"},params:{title:"subject",description:"body"},paramsFunc:$t},print:{type:"print",text:"Print",ariaLabel:"Print page",icon:["fas","print"],color:"#765AA2",func:Ei},copy:{type:"copy",text:"Copy link",ariaLabel:"Copy link",icon:["fas","link"],color:"#607D8B",data:{text:"Copy link",icon:["fas","link"],successText:"Copied",successIcon:["fas","check"],delay:2e3},func:Pi}},Ai=(()=>{let e=class e{constructor(n,a){this._document=a,this.config={sharerMethod:Ht.Anchor,sharerTarget:"_blank",windowObj:this._document.defaultView,windowFuncName:"open",prop:kn,theme:"default",include:[],exclude:[],autoSetMeta:!0,windowWidth:800,windowHeight:500,moreButtonIcon:"ellipsis-h",lessButtonIcon:"minus",moreButtonAriaLabel:"Show more share buttons",lessButtonAriaLabel:"Show less share buttons"},this.config$=new Ze(this.config),n&&this.setConfig(n)}get prop(){return this.config.prop}get windowSize(){return`width=${this.config.windowWidth}, height=${this.config.windowHeight}`}setConfig(n){this.config=ye(this.config,n),this.config$.next(this.config)}addButton(n,a){this.setConfig({prop:{[n]:a}})}};e.\u0275fac=function(a){return new(a||e)(tt(st,8),tt(vt))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),_n=(()=>{let e=class e{constructor(n,a,r,o,s,l,c){this._meta=a,this._platform=r,this._clipboard=o,this._share=s,this._cd=l,this._document=c,this._destroyed=new ce,this._updater=new ce,this.autoSetMeta=this._share.config.autoSetMeta,this.url=this._share.config.url,this.title=this._share.config.title,this.description=this._share.config.description,this.image=this._share.config.image,this.tags=this._share.config.tags,this.redirectUrl=this._share.config.redirectUrl,this.opened=new ue,this.closed=new ue,this._el=n.nativeElement}share(){if(this._platform.isBrowser&&this.shareButton){let n=this.autoSetMeta?this.getParamsFromMetaTags():this.getParamsFromInputs();(this.shareButton.share?this.open(n):this.shareButton.func({params:n,data:this.shareButton.data,clipboard:this._clipboard,updater:this._updater})).pipe(fe(this._destroyed)).subscribe()}else console.warn(`${this.text} button is not compatible on this Platform`)}ngOnInit(){this._updater.pipe(Et(n=>{this.icon=n.icon,this.text=n.text,this._el.style.pointerEvents=n.disabled?"none":"auto",this._cd.markForCheck()}),fe(this._destroyed)).subscribe()}ngOnChanges(n){this._platform.isBrowser&&(this._shareButtonChanged(n.shareButtonName)&&this._createShareButton(),this._urlChanged(n.url)&&(this.url=Mi(this.autoSetMeta?this.url||this._getMetaTagContent("og:url"):this.url,this._document.defaultView.location.href)))}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createShareButton(){let n=this._share.config.prop[this.shareButtonName];n?(this.shareButton=n,this._el.classList.remove(`sb-${this._buttonClass}`),this._el.classList.add(`sb-${this.shareButtonName}`),this._el.style.setProperty("--button-color",this.shareButton.color),this._buttonClass=this.shareButtonName,this.color=this.shareButton.color,this.text=this.shareButton.text,this.icon=this.shareButton.icon,this._el.setAttribute("aria-label",n.ariaLabel)):console.error(`[ShareButtons]: The share button '${this.shareButtonName}' does not exist!`)}_getMetaTagContent(n){let a=this._meta.getTag(`property="${n}"`);if(a)return a.getAttribute("content");let r=this._meta.getTag(`name="${n}"`);if(r)return r.getAttribute("content")}_shareButtonChanged(n){return n&&(n.firstChange||n.previousValue!==n.currentValue)}_urlChanged(n){return!this.url||n&&n.previousValue!==n.currentValue}getParamsFromMetaTags(){return{url:this.url,title:this.title||this._getMetaTagContent("og:title"),description:this.description||this._getMetaTagContent("og:description"),image:this.image||this._getMetaTagContent("og:image"),via:this._share.config.twitterAccount,tags:this.tags,appId:this._share.config.appId||this._getMetaTagContent("fb:app_id"),redirectUrl:this.redirectUrl||this.url}}getParamsFromInputs(){return{url:this.url,title:this.title,description:this.description,image:this.image,tags:this.tags,via:this._share.config.twitterAccount,appId:this._share.config.appId,redirectUrl:this.redirectUrl||this.url}}open(n){let a;if(this._platform.IOS&&this.shareButton.share.ios?a=this.shareButton.share.ios:this._platform.ANDROID&&this.shareButton.share.android?a=this.shareButton.share.android:a=this.shareButton.share.desktop,a){this._finalUrl=a+this._serializeParams(n),this._share.config.debug&&console.log("[DEBUG SHARE BUTTON]: ",this._finalUrl);let r=this.shareButton.method||this._share.config.sharerMethod,o=this.shareButton.target||this._share.config.sharerTarget;switch(r){case Ht.Anchor:let s=this._document.createElement("a");s.setAttribute("target",o),s.setAttribute("rel","noopener noreferrer"),s.href=this._finalUrl,s.click(),s.remove();break;case Ht.Window:let l=this._share.config.windowObj[this._share.config.windowFuncName],c=l(this._finalUrl,o,this._share.windowSize);if(this._share.config.windowObj.opener=null,c)return new le(f=>{let p=this._document.defaultView.setInterval(()=>{c.closed&&(this._document.defaultView.clearInterval(p),this.closed.emit(this.shareButtonName),f.next(),f.complete())},200)});break}this.opened.emit(this.shareButtonName)}return Qe}_serializeParams(n){return Object.entries(this.shareButton.params).map(([a,r])=>{let o=this.shareButton.paramsFunc?this.shareButton.paramsFunc[a]:null;if(n[a]||o){let s=o?o(n):n[a];return`${r}=${encodeURIComponent(s)}`}return""}).filter(a=>a!=="").join("&")}};e.\u0275fac=function(a){return new(a||e)(M(Dt),M(Rt),M(bn),M(wn),M(Ai),M(sn),M(vt))},e.\u0275dir=At({type:e,selectors:[["","shareButton",""]],hostBindings:function(a,r){a&1&&ht("click",function(){return r.share()})},inputs:{shareButtonName:["shareButton","shareButtonName"],autoSetMeta:"autoSetMeta",url:"url",title:"title",description:"description",image:"image",tags:"tags",redirectUrl:"redirectUrl"},outputs:{opened:"opened",closed:"closed"},exportAs:["shareButton"],features:[Nt]});let t=e;return t})(),lt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:st,useValue:n}]}}};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=P({type:e}),e.\u0275inj=E({imports:[yn,xn]});let t=e;return t})();function Cn(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Cn(Object(i),!0).forEach(function(n){_(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Cn(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function te(t){"@babel/helpers - typeof";return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},te(t)}function Ni(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Sn(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Di(t,e,i){return e&&Sn(t.prototype,e),i&&Sn(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function _(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Le(t,e){return Fi(t)||ji(t,e)||qn(t,e)||zi()}function Ot(t){return Li(t)||Bi(t)||qn(t)||Ri()}function Li(t){if(Array.isArray(t))return Ce(t)}function Fi(t){if(Array.isArray(t))return t}function Bi(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ji(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var n=[],a=!0,r=!1,o,s;try{for(i=i.call(t);!(a=(o=i.next()).done)&&(n.push(o.value),!(e&&n.length===e));a=!0);}catch(l){r=!0,s=l}finally{try{!a&&i.return!=null&&i.return()}finally{if(r)throw s}}return n}}function qn(t,e){if(t){if(typeof t=="string")return Ce(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ce(t,e)}}function Ce(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function Ri(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var On=function(){},Fe={},Zn={},Qn=null,Jn={mark:On,measure:On};try{typeof window<"u"&&(Fe=window),typeof document<"u"&&(Zn=document),typeof MutationObserver<"u"&&(Qn=MutationObserver),typeof performance<"u"&&(Jn=performance)}catch{}var $i=Fe.navigator||{},In=$i.userAgent,Mn=In===void 0?"":In,X=Fe,x=Zn,En=Qn,Ut=Jn,$r=!!X.document,W=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",ti=~Mn.indexOf("MSIE")||~Mn.indexOf("Trident/"),Wt,Yt,Vt,Gt,Xt,$="___FONT_AWESOME___",Se=16,ei="fa",ni="svg-inline--fa",rt="data-fa-i2svg",Oe="data-fa-pseudo-element",Hi="data-fa-pseudo-element-pending",Be="data-prefix",je="data-icon",Pn="fontawesome-i2svg",Ui="async",Wi=["HTML","HEAD","STYLE","SCRIPT"],ii=function(){try{return!0}catch{return!1}}(),w="classic",k="sharp",Re=[w,k];function It(t){return new Proxy(t,{get:function(i,n){return n in i?i[n]:i[w]}})}var xt=It((Wt={},_(Wt,w,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),_(Wt,k,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Wt)),kt=It((Yt={},_(Yt,w,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),_(Yt,k,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Yt)),_t=It((Vt={},_(Vt,w,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),_(Vt,k,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Vt)),Yi=It((Gt={},_(Gt,w,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),_(Gt,k,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Gt)),Vi=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ai="fa-layers-text",Gi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Xi=It((Xt={},_(Xt,w,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),_(Xt,k,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Xt)),ri=[1,2,3,4,5,6,7,8,9,10],Ki=ri.concat([11,12,13,14,15,16,17,18,19,20]),qi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],it={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ct=new Set;Object.keys(kt[w]).map(Ct.add.bind(Ct));Object.keys(kt[k]).map(Ct.add.bind(Ct));var Zi=[].concat(Re,Ot(Ct),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",it.GROUP,it.SWAP_OPACITY,it.PRIMARY,it.SECONDARY]).concat(ri.map(function(t){return"".concat(t,"x")})).concat(Ki.map(function(t){return"w-".concat(t)})),yt=X.FontAwesomeConfig||{};function Qi(t){var e=x.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ji(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}x&&typeof x.querySelector=="function"&&(An=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],An.forEach(function(t){var e=Le(t,2),i=e[0],n=e[1],a=Ji(Qi(i));a!=null&&(yt[n]=a)}));var An,oi={styleDefault:"solid",familyDefault:"classic",cssPrefix:ei,replacementClass:ni,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yt.familyPrefix&&(yt.cssPrefix=yt.familyPrefix);var dt=u(u({},oi),yt);dt.autoReplaceSvg||(dt.observeMutations=!1);var m={};Object.keys(oi).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(i){dt[t]=i,wt.forEach(function(n){return n(m)})},get:function(){return dt[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){dt.cssPrefix=e,wt.forEach(function(i){return i(m)})},get:function(){return dt.cssPrefix}});X.FontAwesomeConfig=m;var wt=[];function ta(t){return wt.push(t),function(){wt.splice(wt.indexOf(t),1)}}var G=Se,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ea(t){if(!(!t||!W)){var e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var i=x.head.childNodes,n=null,a=i.length-1;a>-1;a--){var r=i[a],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=r)}return x.head.insertBefore(e,n),t}}var na="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function St(){for(var t=12,e="";t-- >0;)e+=na[Math.random()*62|0];return e}function mt(t){for(var e=[],i=(t||[]).length>>>0;i--;)e[i]=t[i];return e}function ze(t){return t.classList?mt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function si(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ia(t){return Object.keys(t||{}).reduce(function(e,i){return e+"".concat(i,'="').concat(si(t[i]),'" ')},"").trim()}function ie(t){return Object.keys(t||{}).reduce(function(e,i){return e+"".concat(i,": ").concat(t[i].trim(),";")},"")}function $e(t){return t.size!==j.size||t.x!==j.x||t.y!==j.y||t.rotate!==j.rotate||t.flipX||t.flipY}function aa(t){var e=t.transform,i=t.containerWidth,n=t.iconWidth,a={transform:"translate(".concat(i/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:a,inner:l,path:c}}function ra(t){var e=t.transform,i=t.width,n=i===void 0?Se:i,a=t.height,r=a===void 0?Se:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&ti?l+="translate(".concat(e.x/G-n/2,"em, ").concat(e.y/G-r/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/G,"em), calc(-50% + ").concat(e.y/G,"em)) "):l+="translate(".concat(e.x/G,"em, ").concat(e.y/G,"em) "),l+="scale(".concat(e.size/G*(e.flipX?-1:1),", ").concat(e.size/G*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var oa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function li(){var t=ei,e=ni,i=m.cssPrefix,n=m.replacementClass,a=oa;if(i!==t||n!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(r,".".concat(i,"-")).replace(o,"--".concat(i,"-")).replace(s,".".concat(n))}return a}var Tn=!1;function we(){m.autoAddCss&&!Tn&&(ea(li()),Tn=!0)}var sa={mixout:function(){return{dom:{css:li,insertCss:we}}},hooks:function(){return{beforeDOMElementCreation:function(){we()},beforeI2svg:function(){we()}}}},H=X||{};H[$]||(H[$]={});H[$].styles||(H[$].styles={});H[$].hooks||(H[$].hooks={});H[$].shims||(H[$].shims=[]);var L=H[$],ci=[],la=function t(){x.removeEventListener("DOMContentLoaded",t),ee=1,ci.map(function(e){return e()})},ee=!1;W&&(ee=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),ee||x.addEventListener("DOMContentLoaded",la));function ca(t){W&&(ee?setTimeout(t,0):ci.push(t))}function Mt(t){var e=t.tag,i=t.attributes,n=i===void 0?{}:i,a=t.children,r=a===void 0?[]:a;return typeof t=="string"?si(t):"<".concat(e," ").concat(ia(n),">").concat(r.map(Mt).join(""),"</").concat(e,">")}function Nn(t,e,i){if(t&&t[e]&&t[e][i])return{prefix:e,iconName:i,icon:t[e][i]}}var fa=function(e,i){return function(n,a,r,o){return e.call(i,n,a,r,o)}},xe=function(e,i,n,a){var r=Object.keys(e),o=r.length,s=a!==void 0?fa(i,a):i,l,c,f;for(n===void 0?(l=1,f=e[r[0]]):(l=0,f=n);l<o;l++)c=r[l],f=s(f,e[c],c,e);return f};function ua(t){for(var e=[],i=0,n=t.length;i<n;){var a=t.charCodeAt(i++);if(a>=55296&&a<=56319&&i<n){var r=t.charCodeAt(i++);(r&64512)==56320?e.push(((a&1023)<<10)+(r&1023)+65536):(e.push(a),i--)}else e.push(a)}return e}function Ie(t){var e=ua(t);return e.length===1?e[0].toString(16):null}function da(t,e){var i=t.length,n=t.charCodeAt(e),a;return n>=55296&&n<=56319&&i>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(n-55296)*1024+a-56320+65536:n}function Dn(t){return Object.keys(t).reduce(function(e,i){var n=t[i],a=!!n.icon;return a?e[n.iconName]=n.icon:e[i]=n,e},{})}function Me(t,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=i.skipHooks,a=n===void 0?!1:n,r=Dn(e);typeof L.hooks.addPack=="function"&&!a?L.hooks.addPack(t,Dn(e)):L.styles[t]=u(u({},L.styles[t]||{}),r),t==="fas"&&Me("fa",e)}var Kt,qt,Zt,ct=L.styles,ma=L.shims,pa=(Kt={},_(Kt,w,Object.values(_t[w])),_(Kt,k,Object.values(_t[k])),Kt),He=null,fi={},ui={},di={},mi={},pi={},ha=(qt={},_(qt,w,Object.keys(xt[w])),_(qt,k,Object.keys(xt[k])),qt);function ga(t){return~Zi.indexOf(t)}function va(t,e){var i=e.split("-"),n=i[0],a=i.slice(1).join("-");return n===t&&a!==""&&!ga(a)?a:null}var hi=function(){var e=function(r){return xe(ct,function(o,s,l){return o[l]=xe(s,r,{}),o},{})};fi=e(function(a,r,o){if(r[3]&&(a[r[3]]=o),r[2]){var s=r[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ui=e(function(a,r,o){if(a[o]=o,r[2]){var s=r[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),pi=e(function(a,r,o){var s=r[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var i="far"in ct||m.autoFetchSvg,n=xe(ma,function(a,r){var o=r[0],s=r[1],l=r[2];return s==="far"&&!i&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});di=n.names,mi=n.unicodes,He=ae(m.styleDefault,{family:m.familyDefault})};ta(function(t){He=ae(t.styleDefault,{family:m.familyDefault})});hi();function Ue(t,e){return(fi[t]||{})[e]}function ba(t,e){return(ui[t]||{})[e]}function at(t,e){return(pi[t]||{})[e]}function gi(t){return di[t]||{prefix:null,iconName:null}}function ya(t){var e=mi[t],i=Ue("fas",t);return e||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function K(){return He}var We=function(){return{prefix:null,iconName:null,rest:[]}};function ae(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.family,n=i===void 0?w:i,a=xt[n][t],r=kt[n][t]||kt[n][a],o=t in L.styles?t:null;return r||o||null}var Ln=(Zt={},_(Zt,w,Object.keys(_t[w])),_(Zt,k,Object.keys(_t[k])),Zt);function re(t){var e,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.skipLookups,a=n===void 0?!1:n,r=(e={},_(e,w,"".concat(m.cssPrefix,"-").concat(w)),_(e,k,"".concat(m.cssPrefix,"-").concat(k)),e),o=null,s=w;(t.includes(r[w])||t.some(function(c){return Ln[w].includes(c)}))&&(s=w),(t.includes(r[k])||t.some(function(c){return Ln[k].includes(c)}))&&(s=k);var l=t.reduce(function(c,f){var p=va(m.cssPrefix,f);if(ct[f]?(f=pa[s].includes(f)?Yi[s][f]:f,o=f,c.prefix=f):ha[s].indexOf(f)>-1?(o=f,c.prefix=ae(f,{family:s})):p?c.iconName=p:f!==m.replacementClass&&f!==r[w]&&f!==r[k]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var v=o==="fa"?gi(c.iconName):{},b=at(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||b||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!ct.far&&ct.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},We());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===k&&(ct.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=at(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=K()||"fas"),l}var wa=function(){function t(){Ni(this,t),this.definitions={}}return Di(t,[{key:"add",value:function(){for(var i=this,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){i.definitions[s]=u(u({},i.definitions[s]||{}),o[s]),Me(s,o[s]);var l=_t[w][s];l&&Me(l,o[s]),hi()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,n){var a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(function(r){var o=a[r],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];i[s]||(i[s]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(i[s][p]=c)}),i[s][l]=c}),i}}]),t}(),Fn=[],ft={},ut={},xa=Object.keys(ut);function ka(t,e){var i=e.mixoutsTo;return Fn=t,ft={},Object.keys(ut).forEach(function(n){xa.indexOf(n)===-1&&delete ut[n]}),Fn.forEach(function(n){var a=n.mixout?n.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(i[o]=a[o]),te(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){i[o]||(i[o]={}),i[o][s]=a[o][s]})}),n.hooks){var r=n.hooks();Object.keys(r).forEach(function(o){ft[o]||(ft[o]=[]),ft[o].push(r[o])})}n.provides&&n.provides(ut)}),i}function Ee(t,e){for(var i=arguments.length,n=new Array(i>2?i-2:0),a=2;a<i;a++)n[a-2]=arguments[a];var r=ft[t]||[];return r.forEach(function(o){e=o.apply(null,[e].concat(n))}),e}function ot(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var a=ft[t]||[];a.forEach(function(r){r.apply(null,i)})}function U(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ut[t]?ut[t].apply(null,e):void 0}function Pe(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,i=t.prefix||K();if(e)return e=at(i,e)||e,Nn(vi.definitions,i,e)||Nn(L.styles,i,e)}var vi=new wa,_a=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,ot("noAuto")},Ca={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(ot("beforeI2svg",e),U("pseudoElements2svg",e),U("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ca(function(){Oa({autoReplaceSvgRoot:i}),ot("watch",e)})}},Sa={icon:function(e){if(e===null)return null;if(te(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:at(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var i=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=ae(e[0]);return{prefix:n,iconName:at(n,i)||i}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Vi))){var a=re(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||K(),iconName:at(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var r=K();return{prefix:r,iconName:at(r,e)||e}}}},T={noAuto:_a,config:m,dom:Ca,parse:Sa,library:vi,findIconDefinition:Pe,toHtml:Mt},Oa=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot,n=i===void 0?x:i;(Object.keys(L.styles).length>0||m.autoFetchSvg)&&W&&m.autoReplaceSvg&&T.dom.i2svg({node:n})};function oe(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return Mt(n)})}}),Object.defineProperty(t,"node",{get:function(){if(W){var n=x.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function Ia(t){var e=t.children,i=t.main,n=t.mask,a=t.attributes,r=t.styles,o=t.transform;if($e(o)&&i.found&&!n.found){var s=i.width,l=i.height,c={x:s/l/2,y:.5};a.style=ie(u(u({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Ma(t){var e=t.prefix,i=t.iconName,n=t.children,a=t.attributes,r=t.symbol,o=r===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(i):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},a),{},{id:o}),children:n}]}]}function Ye(t){var e=t.icons,i=e.main,n=e.mask,a=t.prefix,r=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,f=t.titleId,p=t.extra,v=t.watchable,b=v===void 0?!1:v,S=n.found?n:i,N=S.width,D=S.height,F=a==="fak",C=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(function(Y){return p.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(p.classes).join(" "),O={children:[],attributes:u(u({},p.attributes),{},{"data-prefix":a,"data-icon":r,class:C,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},B=F&&!~p.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};b&&(O.attributes[rt]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(f||St())},children:[l]}),delete O.attributes.title);var A=u(u({},O),{},{prefix:a,iconName:r,main:i,mask:n,maskId:c,transform:o,symbol:s,styles:u(u({},B),p.styles)}),Z=n.found&&i.found?U("generateAbstractMask",A)||{children:[],attributes:{}}:U("generateAbstractIcon",A)||{children:[],attributes:{}},Q=Z.children,se=Z.attributes;return A.children=Q,A.attributes=se,s?Ma(A):Ia(A)}function Bn(t){var e=t.content,i=t.width,n=t.height,a=t.transform,r=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=u(u(u({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(c[rt]="");var f=u({},o.styles);$e(a)&&(f.transform=ra({transform:a,startCentered:!0,width:i,height:n}),f["-webkit-transform"]=f.transform);var p=ie(f);p.length>0&&(c.style=p);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),r&&v.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),v}function Ea(t){var e=t.content,i=t.title,n=t.extra,a=u(u(u({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")}),r=ie(n.styles);r.length>0&&(a.style=r);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),i&&o.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),o}var ke=L.styles;function Ae(t){var e=t[0],i=t[1],n=t.slice(4),a=Le(n,1),r=a[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(it.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(it.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(it.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:i,icon:o}}var Pa={found:!1,width:512,height:512};function Aa(t,e){!ii&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Te(t,e){var i=e;return e==="fa"&&m.styleDefault!==null&&(e=K()),new Promise(function(n,a){var r={found:!1,width:512,height:512,icon:U("missingIconAbstract")||{}};if(i==="fa"){var o=gi(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&ke[e]&&ke[e][t]){var s=ke[e][t];return n(Ae(s))}Aa(t,e),n(u(u({},Pa),{},{icon:m.showMissingIcons&&t?U("missingIconAbstract")||{}:{}}))})}var jn=function(){},Ne=m.measurePerformance&&Ut&&Ut.mark&&Ut.measure?Ut:{mark:jn,measure:jn},bt='FA "6.5.1"',Ta=function(e){return Ne.mark("".concat(bt," ").concat(e," begins")),function(){return bi(e)}},bi=function(e){Ne.mark("".concat(bt," ").concat(e," ends")),Ne.measure("".concat(bt," ").concat(e),"".concat(bt," ").concat(e," begins"),"".concat(bt," ").concat(e," ends"))},Ve={begin:Ta,end:bi},Qt=function(){};function Rn(t){var e=t.getAttribute?t.getAttribute(rt):null;return typeof e=="string"}function Na(t){var e=t.getAttribute?t.getAttribute(Be):null,i=t.getAttribute?t.getAttribute(je):null;return e&&i}function Da(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function La(){if(m.autoReplaceSvg===!0)return Jt.replace;var t=Jt[m.autoReplaceSvg];return t||Jt.replace}function Fa(t){return x.createElementNS("http://www.w3.org/2000/svg",t)}function Ba(t){return x.createElement(t)}function yi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.ceFn,n=i===void 0?t.tag==="svg"?Fa:Ba:i;if(typeof t=="string")return x.createTextNode(t);var a=n(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var r=t.children||[];return r.forEach(function(o){a.appendChild(yi(o,{ceFn:n}))}),a}function ja(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Jt={replace:function(e){var i=e[0];if(i.parentNode)if(e[1].forEach(function(a){i.parentNode.insertBefore(yi(a),i)}),i.getAttribute(rt)===null&&m.keepOriginalSource){var n=x.createComment(ja(i));i.parentNode.replaceChild(n,i)}else i.remove()},nest:function(e){var i=e[0],n=e[1];if(~ze(i).indexOf(m.replacementClass))return Jt.replace(e);var a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var r=n[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",r.toNode.join(" "))}var o=n.map(function(s){return Mt(s)}).join(`
`);i.setAttribute(rt,""),i.innerHTML=o}};function zn(t){t()}function wi(t,e){var i=typeof e=="function"?e:Qt;if(t.length===0)i();else{var n=zn;m.mutateApproach===Ui&&(n=X.requestAnimationFrame||zn),n(function(){var a=La(),r=Ve.begin("mutate");t.map(a),r(),i()})}}var Ge=!1;function xi(){Ge=!0}function De(){Ge=!1}var ne=null;function $n(t){if(En&&m.observeMutations){var e=t.treeCallback,i=e===void 0?Qt:e,n=t.nodeCallback,a=n===void 0?Qt:n,r=t.pseudoElementsCallback,o=r===void 0?Qt:r,s=t.observeMutationsRoot,l=s===void 0?x:s;ne=new En(function(c){if(!Ge){var f=K();mt(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Rn(p.addedNodes[0])&&(m.searchPseudoElements&&o(p.target),i(p.target)),p.type==="attributes"&&p.target.parentNode&&m.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&Rn(p.target)&&~qi.indexOf(p.attributeName))if(p.attributeName==="class"&&Na(p.target)){var v=re(ze(p.target)),b=v.prefix,S=v.iconName;p.target.setAttribute(Be,b||f),S&&p.target.setAttribute(je,S)}else Da(p.target)&&a(p.target)})}}),W&&ne.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ra(){ne&&ne.disconnect()}function za(t){var e=t.getAttribute("style"),i=[];return e&&(i=e.split(";").reduce(function(n,a){var r=a.split(":"),o=r[0],s=r.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),i}function $a(t){var e=t.getAttribute("data-prefix"),i=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",a=re(ze(t));return a.prefix||(a.prefix=K()),e&&i&&(a.prefix=e,a.iconName=i),a.iconName&&a.prefix||(a.prefix&&n.length>0&&(a.iconName=ba(a.prefix,t.innerText)||Ue(a.prefix,Ie(t.innerText))),!a.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Ha(t){var e=mt(t.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{}),i=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return m.autoA11y&&(i?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(n||St()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ua(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=$a(t),n=i.iconName,a=i.prefix,r=i.rest,o=Ha(t),s=Ee("parseNodeAttributes",{},t),l=e.styleParser?za(t):[];return u({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},s)}var Wa=L.styles;function ki(t){var e=m.autoReplaceSvg==="nest"?Hn(t,{styleParser:!1}):Hn(t);return~e.extra.classes.indexOf(ai)?U("generateLayersText",t,e):U("generateSvgReplacementMutation",t,e)}var q=new Set;Re.map(function(t){q.add("fa-".concat(t))});Object.keys(xt[w]).map(q.add.bind(q));Object.keys(xt[k]).map(q.add.bind(q));q=Ot(q);function Un(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();var i=x.documentElement.classList,n=function(p){return i.add("".concat(Pn,"-").concat(p))},a=function(p){return i.remove("".concat(Pn,"-").concat(p))},r=m.autoFetchSvg?q:Re.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Wa));r.includes("fa")||r.push("fa");var o=[".".concat(ai,":not([").concat(rt,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=mt(t.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),a("complete");else return Promise.resolve();var l=Ve.begin("onTree"),c=s.reduce(function(f,p){try{var v=ki(p);v&&f.push(v)}catch(b){ii||b.name==="MissingIcon"&&console.error(b)}return f},[]);return new Promise(function(f,p){Promise.all(c).then(function(v){wi(v,function(){n("active"),n("complete"),a("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(v){l(),p(v)})})}function Ya(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ki(t).then(function(i){i&&wi([i],e)})}function Va(t){return function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Pe(e||{}),a=i.mask;return a&&(a=(a||{}).icon?a:Pe(a||{})),t(n,u(u({},i),{},{mask:a}))}}var Ga=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.transform,a=n===void 0?j:n,r=i.symbol,o=r===void 0?!1:r,s=i.mask,l=s===void 0?null:s,c=i.maskId,f=c===void 0?null:c,p=i.title,v=p===void 0?null:p,b=i.titleId,S=b===void 0?null:b,N=i.classes,D=N===void 0?[]:N,F=i.attributes,C=F===void 0?{}:F,O=i.styles,B=O===void 0?{}:O;if(e){var A=e.prefix,Z=e.iconName,Q=e.icon;return oe(u({type:"icon"},e),function(){return ot("beforeDOMElementCreation",{iconDefinition:e,params:i}),m.autoA11y&&(v?C["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(S||St()):(C["aria-hidden"]="true",C.focusable="false")),Ye({icons:{main:Ae(Q),mask:l?Ae(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:Z,transform:u(u({},j),a),symbol:o,title:v,maskId:f,titleId:S,extra:{attributes:C,styles:B,classes:D}})})}},Xa={mixout:function(){return{icon:Va(Ga)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=Un,i.nodeCallback=Ya,i}}},provides:function(e){e.i2svg=function(i){var n=i.node,a=n===void 0?x:n,r=i.callback,o=r===void 0?function(){}:r;return Un(a,o)},e.generateSvgReplacementMutation=function(i,n){var a=n.iconName,r=n.title,o=n.titleId,s=n.prefix,l=n.transform,c=n.symbol,f=n.mask,p=n.maskId,v=n.extra;return new Promise(function(b,S){Promise.all([Te(a,s),f.iconName?Te(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=Le(N,2),F=D[0],C=D[1];b([i,Ye({icons:{main:F,mask:C},prefix:s,iconName:a,transform:l,symbol:c,maskId:p,title:r,titleId:o,extra:v,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(i){var n=i.children,a=i.attributes,r=i.main,o=i.transform,s=i.styles,l=ie(s);l.length>0&&(a.style=l);var c;return $e(o)&&(c=U("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Ka={mixout:function(){return{layer:function(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.classes,r=a===void 0?[]:a;return oe({type:"layer"},function(){ot("beforeDOMElementCreation",{assembler:i,params:n});var o=[];return i(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(Ot(r)).join(" ")},children:o}]})}}}},qa={mixout:function(){return{counter:function(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.title,r=a===void 0?null:a,o=n.classes,s=o===void 0?[]:o,l=n.attributes,c=l===void 0?{}:l,f=n.styles,p=f===void 0?{}:f;return oe({type:"counter",content:i},function(){return ot("beforeDOMElementCreation",{content:i,params:n}),Ea({content:i.toString(),title:r,extra:{attributes:c,styles:p,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(Ot(s))}})})}}}},Za={mixout:function(){return{text:function(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?j:a,o=n.title,s=o===void 0?null:o,l=n.classes,c=l===void 0?[]:l,f=n.attributes,p=f===void 0?{}:f,v=n.styles,b=v===void 0?{}:v;return oe({type:"text",content:i},function(){return ot("beforeDOMElementCreation",{content:i,params:n}),Bn({content:i,transform:u(u({},j),r),title:s,extra:{attributes:p,styles:b,classes:["".concat(m.cssPrefix,"-layers-text")].concat(Ot(c))}})})}}},provides:function(e){e.generateLayersText=function(i,n){var a=n.title,r=n.transform,o=n.extra,s=null,l=null;if(ti){var c=parseInt(getComputedStyle(i).fontSize,10),f=i.getBoundingClientRect();s=f.width/c,l=f.height/c}return m.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([i,Bn({content:i.innerHTML,width:s,height:l,transform:r,title:a,extra:o,watchable:!0})])}}},Qa=new RegExp('"',"ug"),Wn=[1105920,1112319];function Ja(t){var e=t.replace(Qa,""),i=da(e,0),n=i>=Wn[0]&&i<=Wn[1],a=e.length===2?e[0]===e[1]:!1;return{value:Ie(a?e[0]:e),isSecondary:n||a}}function Yn(t,e){var i="".concat(Hi).concat(e.replace(":","-"));return new Promise(function(n,a){if(t.getAttribute(i)!==null)return n();var r=mt(t.children),o=r.filter(function(Q){return Q.getAttribute(Oe)===e})[0],s=X.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Gi),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),n();if(l&&f!=="none"&&f!==""){var p=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?k:w,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?kt[v][l[2].toLowerCase()]:Xi[v][c],S=Ja(p),N=S.value,D=S.isSecondary,F=l[0].startsWith("FontAwesome"),C=Ue(b,N),O=C;if(F){var B=ya(N);B.iconName&&B.prefix&&(C=B.iconName,b=B.prefix)}if(C&&!D&&(!o||o.getAttribute(Be)!==b||o.getAttribute(je)!==O)){t.setAttribute(i,O),o&&t.removeChild(o);var A=Ua(),Z=A.extra;Z.attributes[Oe]=e,Te(C,b).then(function(Q){var se=Ye(u(u({},A),{},{icons:{main:Q,mask:We()},prefix:b,iconName:O,extra:Z,watchable:!0})),Y=x.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=se.map(function(Ci){return Mt(Ci)}).join(`
`),t.removeAttribute(i),n()}).catch(a)}else n()}else n()})}function tr(t){return Promise.all([Yn(t,"::before"),Yn(t,"::after")])}function er(t){return t.parentNode!==document.head&&!~Wi.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Oe)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Vn(t){if(W)return new Promise(function(e,i){var n=mt(t.querySelectorAll("*")).filter(er).map(tr),a=Ve.begin("searchPseudoElements");xi(),Promise.all(n).then(function(){a(),De(),e()}).catch(function(){a(),De(),i()})})}var nr={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=Vn,i}}},provides:function(e){e.pseudoElements2svg=function(i){var n=i.node,a=n===void 0?x:n;m.searchPseudoElements&&Vn(a)}}},Gn=!1,ir={mixout:function(){return{dom:{unwatch:function(){xi(),Gn=!0}}}},hooks:function(){return{bootstrap:function(){$n(Ee("mutationObserverCallbacks",{}))},noAuto:function(){Ra()},watch:function(i){var n=i.observeMutationsRoot;Gn?De():$n(Ee("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Xn=function(e){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,a){var r=a.toLowerCase().split("-"),o=r[0],s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},i)},ar={mixout:function(){return{parse:{transform:function(i){return Xn(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,n){var a=n.getAttribute("data-fa-transform");return a&&(i.transform=Xn(a)),i}}},provides:function(e){e.generateAbstractTransformGrouping=function(i){var n=i.main,a=i.transform,r=i.containerWidth,o=i.iconWidth,s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(f)},v={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:p,path:v};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:u(u({},n.icon.attributes),b.path)}]}]}}}},_e={x:0,y:0,width:"100%",height:"100%"};function Kn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function rr(t){return t.tag==="g"?t.children:[t]}var or={hooks:function(){return{parseNodeAttributes:function(i,n){var a=n.getAttribute("data-fa-mask"),r=a?re(a.split(" ").map(function(o){return o.trim()})):We();return r.prefix||(r.prefix=K()),i.mask=r,i.maskId=n.getAttribute("data-fa-mask-id"),i}}},provides:function(e){e.generateAbstractMask=function(i){var n=i.children,a=i.attributes,r=i.main,o=i.mask,s=i.maskId,l=i.transform,c=r.width,f=r.icon,p=o.width,v=o.icon,b=aa({transform:l,containerWidth:p,iconWidth:c}),S={tag:"rect",attributes:u(u({},_e),{},{fill:"white"})},N=f.children?{children:f.children.map(Kn)}:{},D={tag:"g",attributes:u({},b.inner),children:[Kn(u({tag:f.tag,attributes:u(u({},f.attributes),b.path)},N))]},F={tag:"g",attributes:u({},b.outer),children:[D]},C="mask-".concat(s||St()),O="clip-".concat(s||St()),B={tag:"mask",attributes:u(u({},_e),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,F]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:rr(v)},B]};return n.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(C,")")},_e)}),{children:n,attributes:a}}}},sr={provides:function(e){var i=!1;X.matchMedia&&(i=X.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:u(u({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||s.children.push({tag:"animate",attributes:u(u({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:u(u({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),i||n.push({tag:"path",attributes:u(u({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},lr={hooks:function(){return{parseNodeAttributes:function(i,n){var a=n.getAttribute("data-fa-symbol"),r=a===null?!1:a===""?!0:a;return i.symbol=r,i}}}},cr=[sa,Xa,Ka,qa,Za,nr,ir,ar,or,sr,lr];ka(cr,{mixoutsTo:T});var Hr=T.noAuto,Ur=T.config,Wr=T.library,Yr=T.dom,fr=T.parse,Vr=T.findIconDefinition,Gr=T.toHtml,ur=T.icon,Xr=T.layer,dr=T.text,mr=T.counter;var Xe=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=P({type:e}),e.\u0275inj=E({});let t=e;return t})();var Ke=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:st,useValue:n}]}}};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=P({type:e}),e.\u0275inj=E({imports:[lt,Xe,V,lt,Xe]});let t=e;return t})();var qe=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:st,useValue:n}]}}};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=P({type:e}),e.\u0275inj=E({imports:[Ke,V,Ke]});let t=e;return t})();var _i=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=P({type:e}),e.\u0275inj=E({imports:[V,qe,lt,qe,lt]});let t=e;return t})();function hr(t,e){if(t&1&&(d(0,"h5",39),g(1,"Speakers"),h(),y(2,"p",15),d(3,"div",40)(4,"div",41)(5,"div",42)(6,"div",43)(7,"div",44)(8,"ul",27)(9,"li")(10,"a",37),y(11,"i",29),h()(),d(12,"li")(13,"a",37),y(14,"i",31),h()(),d(15,"li")(16,"a",37),y(17,"i",45),h()(),d(18,"li")(19,"a",37),y(20,"i",33),h()()()(),d(21,"div",46)(22,"a",47),y(23,"img",48),h()(),d(24,"div",49)(25,"h4",50)(26,"a",47),g(27,"Roberto Carlos"),h()()()()(),d(28,"div",42)(29,"div",43)(30,"div",44)(31,"ul",27)(32,"li")(33,"a",37),y(34,"i",29),h()(),d(35,"li")(36,"a",37),y(37,"i",31),h()(),d(38,"li")(39,"a",37),y(40,"i",45),h()(),d(41,"li")(42,"a",37),y(43,"i",33),h()()()(),d(44,"div",46)(45,"a",47),y(46,"img",51),h()(),d(47,"div",49)(48,"h4",50)(49,"a",47),g(50,"Roberto Carlos"),h()()()()(),d(51,"div",42)(52,"div",43)(53,"div",44)(54,"ul",27)(55,"li")(56,"a",37),y(57,"i",29),h()(),d(58,"li")(59,"a",37),y(60,"i",31),h()(),d(61,"li")(62,"a",37),y(63,"i",45),h()(),d(64,"li")(65,"a",37),y(66,"i",33),h()()()(),d(67,"div",46)(68,"a",47),y(69,"img",52),h()(),d(70,"div",49)(71,"h4",50)(72,"a",47),g(73,"Roberto Carlos"),h()()()()()()()),t&2){let i=Bt();R("innerHTML",i.info==null?null:i.info.speakers_title,et),I(2),R("innerHTML",i.info==null?null:i.info.speakers_dic,et)}}function gr(t,e){t&1&&(d(0,"div",53)(1,"h5",14),g(2,"Event Schedule"),h(),d(3,"p"),g(4,"Bachelor of Business Administration(BBA) If you are going use a passage of Lorem Ipsum need equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain cases more effective and knowladgeable "),h(),d(5,"div",54)(6,"table",55)(7,"thead")(8,"tr")(9,"th",56),g(10,"Time"),h(),d(11,"th",57),g(12,"Topics"),h(),d(13,"th",58),g(14,"Speakers"),h()()(),d(15,"tbody")(16,"tr")(17,"td",56),g(18,"10.00 am to 10.30 am"),h(),d(19,"td",57),g(20,"Registration and T-shirt distribution"),h(),d(21,"td",58),g(22,"-----------"),h()(),d(23,"tr")(24,"td",56),g(25,"10.35 am to 11.00 am"),h(),d(26,"td",57),g(27,"Latest version of WordPress and it's Benefit"),h(),d(28,"td",58),g(29,"Alister Camble"),h()(),d(30,"tr")(31,"td",56),g(32,"11.05 am to 11.30 am"),h(),d(33,"td",57),g(34,"Snacks & Tea Break"),h(),d(35,"td",58),g(36,"-----------"),h()(),d(37,"tr")(38,"td",56),g(39,"11.35 am to 12.35 pm"),h(),d(40,"td",57),g(41,"How to use latest version of WordPress in our website "),h(),d(42,"td",58),g(43,"Ethan Smith"),h()(),d(44,"tr")(45,"td",56),g(46,"12.40 pm to 1.45 pm"),h(),d(47,"td",57),g(48,"Future of WordPress"),h(),d(49,"td",58),g(50,"Keth Williams"),h()(),d(51,"tr")(52,"td",56),g(53,"1.50 pm to 2.15 pm"),h(),d(54,"td",57),g(55,"Thanks giving & closing "),h(),d(56,"td",58),g(57,"Organizer"),h()()()()()())}var jo=(()=>{let e=class e{constructor(n,a){this.meta=n,this.titleService=a,this.apiService=Pt(mn),this.cgs=Pt(pn),this.route=Pt(un)}ngOnInit(){let n=this.route.snapshot.paramMap.get("id");this.getData(n)}setSeo(){let n=this.getPlainText(this.info?.short_dis);this.titleService.setTitle(this.info?.title),this.meta.addTags([{name:"description",content:n},{name:"keywords",content:this.extractTags(n)?.toString()}]),this.meta.updateTag({property:"og:title",content:this.info?.title}),this.meta.updateTag({property:"og:description",content:n}),this.meta.updateTag({property:"og:image",content:this.info?.primaryImage?.src}),this.meta.updateTag({property:"og:url",content:dn.client+"/events/"+this.info?.url})}extractTags(n){let a=n.split(/\W+/),r=["and","the","is","for","this","with","from","you","your","have","that","are"],o=["nbsp","quot","amp"],s=a.filter(c=>c.length>2&&!r.includes(c.toLowerCase())&&!o.includes(c.toLowerCase()));return Array.from(new Set(s.map(c=>c.toLowerCase())))}getPlainText(n){return n.replace(/<[^>]+>/g,"")}ngAfterViewInit(){console.log(this.info)}getData(n){this.apiService.getEvent({url:n}).pipe(tn(a=>(a.status==1&&a&&a.data&&a.data.event_dic&&(a.data.event_dic=a.data.event_dic.replace(/<ol>/g,'<ol class="event-list">').replace(/<li><span>/g,'<li><i class="far fa-check-circle"></i><span>')),a))).subscribe(a=>{this.cgs.httpResponseHandler({data:a,hideMessage:!0,successCb:()=>{this.info=a.data,this.setSeo()}})},a=>{this.cgs.httpResponseHandler({data:a})})}};e.\u0275fac=function(a){return new(a||e)(M(Rt),M(fn))},e.\u0275cmp=pt({type:e,selectors:[["app-event-detail"]],standalone:!0,features:[pe],decls:73,vars:24,consts:[[1,"page-banner"],[1,"page-banner-bg","bg_cover",2,"background-image","url(assets/images/banner-bg-1.jpg)"],[1,"overlay"],[1,"container"],[1,"banner-content","text-center"],[1,"title"],[1,"event-details"],[1,"row","mb-5"],[1,"col-lg-9"],[1,"event-details-content","mt-50"],["width","845","height","533","onerror","this.src='assets/images/no-img.png'",3,"src","alt"],[1,"title",3,"innerHTML"],[1,"publish"],[1,"",3,"innerHTML"],[1,"sub-title"],[3,"innerHTML"],["class","event-schedule"],[1,"col-lg-3"],[1,"event-sidebar","pt-20"],[1,"event-features","mt-30"],[1,"sidebar-title"],[1,"event-features-items"],[1,"p-1"],[1,"sidebar-btn","pt-2"],["href","#",1,"main-btn"],[1,"footer-widget-wrapper","m-5"],[1,"footer-social"],[1,"social"],["shareButton","facebook"],[1,"fab","fa-facebook-f"],["shareButton","twitter"],[1,"fab","fa-twitter"],["shareButton","linkedin"],[1,"fab","fa-linkedin-in"],["shareButton","whatsapp"],[1,"fab","fa-whatsapp"],[1,"event-sidebar-banner","mt-30"],["href","#"],["src","assets/images/event-banner.webp","width","270","height","310","alt","Banner"],[1,"sub-title",3,"innerHTML"],[1,"event-teachers"],[1,"row"],[1,"col-md-4","col-sm-6"],[1,"single-teacher","mt-30","text-center"],[1,"teacher-social"],[1,"fab","fa-instagram"],[1,"teacher-image"],["href","teacher-details.html"],["src","assets/images/teachers/teacher-1.webp","alt","teacher"],[1,"teacher-content"],[1,"name"],["src","assets/images/teachers/teacher-2.webp","alt","teacher"],["src","assets/images/teachers/teacher-3.webp","alt","teacher"],[1,"event-schedule"],[1,"event-schedule-table","table-responsive"],[1,"table"],[1,"time"],[1,"topics"],[1,"speakers"]],template:function(a,r){a&1&&(d(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),g(6,"Event Info"),h()()()()()(),d(7,"section",6)(8,"div",3)(9,"div",7)(10,"div",8)(11,"div",9)(12,"article")(13,"header"),y(14,"img",10)(15,"h2",11),d(16,"p",12),g(17,"Published on: "),d(18,"time"),nt(19,"date"),g(20),nt(21,"date"),h()()(),d(22,"section"),y(23,"span",13),d(24,"h5",14),g(25,"Event Overview"),h(),y(26,"span",15),Ft(27,hr,74,2)(28,gr,58,0,"div",16),h()()()(),d(29,"div",17)(30,"div",18)(31,"div",19)(32,"div",20)(33,"h4",5),g(34,"Event Information"),h()(),d(35,"ul",21)(36,"li"),g(37,"Date "),d(38,"strong"),g(39),nt(40,"tec_date"),h()(),d(41,"li"),g(42,"Time "),d(43,"strong"),g(44),nt(45,"tec_time"),h()(),d(46,"li"),g(47,"Place "),d(48,"strong",22),g(49),nt(50,"tec_venue"),h()()(),d(51,"div",23)(52,"a",24),g(53,"Register Now"),h()(),d(54,"div",25)(55,"div",26)(56,"ul",27)(57,"li",28)(58,"a"),y(59,"i",29),h()(),d(60,"li",30)(61,"a"),y(62,"i",31),h()(),d(63,"li",32)(64,"a"),y(65,"i",33),h()(),d(66,"li",34)(67,"a"),y(68,"i",35),h()()()()()(),g(69," -- configuration production "),d(70,"div",36)(71,"a",37),y(72,"img",38),h()()()()()()()),a&2&&(I(14),R("src",r.info==null||r.info.primaryImage==null?null:r.info.primaryImage.src,on)("alt","image of "+(r.info==null?null:r.info.title)),I(1),R("innerHTML",r.info==null?null:r.info.title,et),I(3),Lt("datetime",he(19,12,r.info==null?null:r.info.createdAt,"medium")),I(2),jt(he(21,15,r.info==null?null:r.info.createdAt,"medium")),I(3),R("innerHTML",r.info==null?null:r.info.short_dis,et),I(3),R("innerHTML",r.info==null?null:r.info.event_dic,et),I(1),de(27,r.info!=null&&r.info.participants.length?27:-1),I(1),de(28,!(r.info==null||r.info.event_schedule==null)&&r.info.event_schedule.length?28:-1),I(11),jt(gt(40,18,r.info)),I(5),jt(gt(45,20,r.info)),I(5),me(" ",gt(50,22,r.info),""))},dependencies:[V,ln,gn,hn,vn,_i,_n],styles:[".overlay[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#07294db5}.event-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:0!important}span[_ngcontent-%COMP%]{margin-top:0!important;padding-top:0!important}.publish[_ngcontent-%COMP%]{font-size:12px!important;padding-top:0!important;margin-top:0!important}"]});let t=e;return t})();export{jo as EventDetailComponent};
