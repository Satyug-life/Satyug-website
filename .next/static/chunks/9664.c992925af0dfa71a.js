(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9664,3226,992],{1482:function(t,e,n){"use strict";n.d(e,{v:function(){return w}});var r=n(15861),i=n(15671),o=n(43144),a=n(97326),c=n(60136),s=n(82963),u=n(61120),h=n(4942),l=n(64687),f=n.n(l),d=n(45624),p=n(37202),v=n.n(p),w=function(t){(0,c.Z)(y,t);var e,n,l,p,w=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e=(0,u.Z)(y);if(n){var r=(0,u.Z)(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return(0,s.Z)(this,t)});function y(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.Z)(this,y),t=w.call(this),(0,h.Z)((0,a.Z)(t),"clientId",void 0),t.clientId=e.clientId,t}return(0,o.Z)(y,[{key:"authenticateUser",value:(l=(0,r.Z)(f().mark(function t(){var e,n,r,i,o,a,c,s,u,h,l,p;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(!this.provider||!(null!==(e=this.chainConfig)&&void 0!==e&&e.chainId))){t.next=2;break}throw d.RM.notConnectedError();case 2:if(r=(n=this.chainConfig).chainNamespace,i=n.chainId,!(this.status!==d.MP.CONNECTED)){t.next=5;break}throw d.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 5:return t.next=7,this.provider.request({method:"getAccounts"});case 7:if(!((o=t.sent)&&o.length>0)){t.next=27;break}if(!(a=(0,d.Cb)(o[0],this.name))||(0,d.$E)(a)){t.next=14;break}return t.abrupt("return",{idToken:a});case 14:return s={domain:window.location.origin,uri:window.location.href,address:o[0],chainId:parseInt(i,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:new Date().toISOString()},t.next=17,(0,d.tV)(s,r);case 17:return u=t.sent,h=new TextEncoder().encode(u),t.next=21,this.provider.request({method:"signMessage",params:{message:h,display:"utf8"}});case 21:return l=t.sent,t.next=24,(0,d.rn)(r,v().encode(l),u,this.name,this.sessionTime,this.clientId);case 24:return p=t.sent,(0,d.Fr)(o[0],this.name,p),t.abrupt("return",{idToken:p});case 27:throw d.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 28:case"end":return t.stop()}},t,this)})),function(){return l.apply(this,arguments)})},{key:"disconnect",value:(p=(0,r.Z)(f().mark(function t(){var e;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.status!==d.MP.CONNECTED)){t.next=2;break}throw d.RM.disconnectionError("Not connected with wallet");case 2:return t.next=4,this.provider.request({method:"getAccounts"});case 4:(e=t.sent)&&e.length>0&&(0,d.qz)(e[0],this.name);case 6:case"end":return t.stop()}},t,this)})),function(){return p.apply(this,arguments)})}]),y}(d.J5)},55777:function(t){"use strict";t.exports=function(t){if(t.length>=255)throw TypeError("Alphabet too long");for(var e=new Uint8Array(256),n=0;n<e.length;n++)e[n]=255;for(var r=0;r<t.length;r++){var i=t.charAt(r),o=i.charCodeAt(0);if(255!==e[o])throw TypeError(i+" is ambiguous");e[o]=r}var a=t.length,c=t.charAt(0),s=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function h(t){if("string"!=typeof t)throw TypeError("Expected String");if(0===t.length)return new Uint8Array;for(var n=0,r=0,i=0;t[n]===c;)r++,n++;for(var o=(t.length-n)*s+1>>>0,u=new Uint8Array(o);t[n];){var h=e[t.charCodeAt(n)];if(255===h)return;for(var l=0,f=o-1;(0!==h||l<i)&&-1!==f;f--,l++)h+=a*u[f]>>>0,u[f]=h%256>>>0,h=h/256>>>0;if(0!==h)throw Error("Non-zero carry");i=l,n++}for(var d=o-i;d!==o&&0===u[d];)d++;for(var p=new Uint8Array(r+(o-d)),v=r;d!==o;)p[v++]=u[d++];return p}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===e.length)return"";for(var n=0,r=0,i=0,o=e.length;i!==o&&0===e[i];)i++,n++;for(var s=(o-i)*u+1>>>0,h=new Uint8Array(s);i!==o;){for(var l=e[i],f=0,d=s-1;(0!==l||f<r)&&-1!==d;d--,f++)l+=256*h[d]>>>0,h[d]=l%a>>>0,l=l/a>>>0;if(0!==l)throw Error("Non-zero carry");r=f,i++}for(var p=s-r;p!==s&&0===h[p];)p++;for(var v=c.repeat(n);p<s;++p)v+=t.charAt(h[p]);return v},decodeUnsafe:h,decode:function(t){var e=h(t);if(e)return e;throw Error("Non-base"+a+" character")}}}},37202:function(t,e,n){let r=n(55777);t.exports=r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},42848:function(t,e,n){"use strict";n.r(e),n.d(e,{PhantomAdapter:function(){return x}});var r=n(15861),i=n(15671),o=n(43144),a=n(97326),c=n(73237),s=n(60136),u=n(82963),h=n(61120),l=n(4942),f=n(64687),d=n.n(f),p=n(45624),v=n(1482),w=n(44445);function y(t,e,n){return new Promise(function(i,o){n>0?setTimeout((0,r.Z)(d().mark(function r(){var a;return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:(a=r.sent)&&i(a),a||y(t,e,n-1).then(function(t){return i(t),t}).catch(function(t){return o(t)});case 5:case"end":return r.stop()}},r)})),e):i(!1)})}var m,E=(m=(0,r.Z)(d().mark(function t(){var e,n,r,i,o=arguments;return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=o.length>0&&void 0!==o[0]?o[0]:{interval:1e3,count:3},!("undefined"!=typeof window&&null!==(e=window.solana)&&void 0!==e&&e.isPhantom)){t.next=4;break}return t.abrupt("return",window.solana);case 4:return t.next=6,y(function(){var t;return null===(t=window.solana)||void 0===t?void 0:t.isPhantom},n.interval,n.count);case 6:if(!t.sent){t.next=9;break}return t.abrupt("return",window.solana);case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}},t)})),function(){return m.apply(this,arguments)}),x=function(t){(0,s.Z)(N,t);var e,n,f,v,y,m,x,g=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e=(0,h.Z)(N);if(n){var r=(0,h.Z)(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return(0,u.Z)(this,t)});function N(t){var e;return(0,i.Z)(this,N),e=g.call(this,t),(0,l.Z)((0,a.Z)(e),"name",p.rW.PHANTOM),(0,l.Z)((0,a.Z)(e),"adapterNamespace",p.yk.SOLANA),(0,l.Z)((0,a.Z)(e),"currentChainNamespace",p.EN.SOLANA),(0,l.Z)((0,a.Z)(e),"type",p.hN.EXTERNAL),(0,l.Z)((0,a.Z)(e),"status",p.MP.NOT_READY),(0,l.Z)((0,a.Z)(e),"_wallet",null),(0,l.Z)((0,a.Z)(e),"phantomProvider",null),(0,l.Z)((0,a.Z)(e),"rehydrated",!1),(0,l.Z)((0,a.Z)(e),"_onDisconnect",function(){e._wallet&&(e._wallet.off("disconnect",e._onDisconnect),e.rehydrated=!1,e.status=e.status===p.MP.CONNECTED?p.MP.READY:p.MP.NOT_READY,e.emit(p.n2.DISCONNECTED))}),e.chainConfig=(null==t?void 0:t.chainConfig)||null,e.sessionTime=(null==t?void 0:t.sessionTime)||86400,e}return(0,o.Z)(N,[{key:"isWalletConnected",get:function(){var t;return!!(null!==(t=this._wallet)&&void 0!==t&&t.isConnected&&this.status===p.MP.CONNECTED)}},{key:"provider",get:function(){var t;return(null===(t=this.phantomProvider)||void 0===t?void 0:t.provider)||null},set:function(t){throw Error("Not implemented")}},{key:"setAdapterSettings",value:function(t){this.status!==p.MP.READY&&(null!=t&&t.sessionTime&&(this.sessionTime=t.sessionTime),null!=t&&t.clientId&&(this.clientId=t.clientId))}},{key:"init",value:(f=(0,r.Z)(d().mark(function t(e){return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(0,c.Z)((0,h.Z)(N.prototype),"checkInitializationRequirements",this).call(this),this.chainConfig||(this.chainConfig=(0,p.h2)(p.EN.SOLANA,"0x1")),t.next=4,E({interval:500,count:3});case 4:if(this._wallet=t.sent,this._wallet){t.next=7;break}throw p.Ty.notInstalled();case 7:if(this.phantomProvider=new w.PhantomInjectedProvider({config:{chainConfig:this.chainConfig}}),this.status=p.MP.READY,this.emit(p.n2.READY,p.rW.PHANTOM),t.prev=10,p.cM.debug("initializing phantom adapter"),!e.autoConnect){t.next=16;break}return this.rehydrated=!0,t.next=16,this.connect();case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(10),p.cM.error("Failed to connect with cached phantom provider",t.t0),this.emit("ERRORED",t.t0);case 22:case"end":return t.stop()}},t,this,[[10,18]])})),function(t){return f.apply(this,arguments)})},{key:"connect",value:(v=(0,r.Z)(d().mark(function t(){var e,n=this;return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,(0,c.Z)((0,h.Z)(N.prototype),"checkConnectionRequirements",this).call(this),this.status=p.MP.CONNECTING,this.emit(p.n2.CONNECTING,{adapter:p.rW.PHANTOM}),this._wallet){t.next=6;break}throw p.Ty.notInstalled();case 6:if(this._wallet.isConnected){t.next=23;break}return e=this._wallet._handleDisconnect,t.prev=8,t.next=11,new Promise(function(t,i){var o=function(){var e=(0,r.Z)(d().mark(function e(){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.connectWithProvider(n._wallet);case 2:t(n.provider);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();if(!n._wallet)return i(p.Ty.notInstalled());n._wallet.once("connect",o),n._wallet._handleDisconnect=function(){i(p.Ty.windowClosed());for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.apply(n._wallet,r)},n._wallet.connect().catch(function(t){i(t)})});case 11:t.next=18;break;case 13:if(t.prev=13,t.t0=t.catch(8),!(t.t0 instanceof p.up)){t.next=17;break}throw t.t0;case 17:throw p.RM.connectionError(null===t.t0||void 0===t.t0?void 0:t.t0.message);case 18:return t.prev=18,this._wallet._handleDisconnect=e,t.finish(18);case 21:t.next=25;break;case 23:return t.next=25,this.connectWithProvider(this._wallet);case 25:if(this._wallet.publicKey){t.next=27;break}throw p.RM.connectionError();case 27:return this._wallet.on("disconnect",this._onDisconnect),t.abrupt("return",this.provider);case 31:throw t.prev=31,t.t1=t.catch(0),this.status=p.MP.READY,this.rehydrated=!1,this.emit(p.n2.ERRORED,t.t1),t.t1;case 37:case"end":return t.stop()}},t,this,[[0,31],[8,13,18,21]])})),function(){return v.apply(this,arguments)})},{key:"disconnect",value:(y=(0,r.Z)(d().mark(function t(){var e,n,r=arguments;return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{cleanup:!1},t.next=3,(0,c.Z)((0,h.Z)(N.prototype),"disconnect",this).call(this);case 3:return t.prev=3,t.next=6,null===(n=this._wallet)||void 0===n?void 0:n.disconnect();case 6:e.cleanup&&(this.status=p.MP.NOT_READY,this.phantomProvider=null,this._wallet=null),this.emit(p.n2.DISCONNECTED),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),this.emit(p.n2.ERRORED,p.RM.disconnectionError(null===t.t0||void 0===t.t0?void 0:t.t0.message));case 13:case"end":return t.stop()}},t,this,[[3,10]])})),function(){return y.apply(this,arguments)})},{key:"getUserInfo",value:(m=(0,r.Z)(d().mark(function t(){return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isWalletConnected){t.next=2;break}throw p.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}},t,this)})),function(){return m.apply(this,arguments)})},{key:"connectWithProvider",value:(x=(0,r.Z)(d().mark(function t(e){return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.phantomProvider){t.next=2;break}throw p.RM.connectionError("No phantom provider");case 2:return t.next=4,this.phantomProvider.setupProvider(e);case 4:return this.status=p.MP.CONNECTED,this.emit(p.n2.CONNECTED,{adapter:p.rW.PHANTOM,reconnected:this.rehydrated}),t.abrupt("return",this.provider);case 7:case"end":return t.stop()}},t,this)})),function(t){return x.apply(this,arguments)})}]),N}(v.v)},7420:function(){},95856:function(){},78848:function(){},6567:function(){}}]);