(function(e){function t(t){for(var o,i,s=t[0],u=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);c&&c(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e930");var o=n("8f80"),a=(n("66b9"),n("b650")),r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},s=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("van-uploader",{attrs:{"file-list":e.fileList,"after-read":e.afterRead}}),e._l(e.wordsObj,(function(t,o){return n("p",{key:"asdasd"+o},[e._l(t.hanzi,(function(o,a){return[n("ruby",{key:a,on:{click:function(t){return e.read(o)}}},[e._v(e._s(o)),e.isChinese(o)?n("rt",[e._v(e._s(t.pinyin[a]))]):e._e()])]}))],2)}))],2)},l=[],c=n("bc3a"),d=n.n(c);function p(e,t){var n="http://tsn.baidu.com/text2audio",o=t||{},a=document.createElement("audio");o.autoplay&&a.setAttribute("autoplay","autoplay"),o.hidden?a.style.display="none":a.setAttribute("controls","controls"),"undefined"!==typeof o.volume&&(a.volume=o.volume),h(o.onInit)&&o.onInit(a);var r=6e4,i=o.timeout||r,s=new XMLHttpRequest;s.open("POST",n);var u={};for(let f in e)u[f]=e[f];u.cuid=u.cuid||u.tok,u.ctp=1,u.lan=u.lan||"zh",u.aue=u.aue||3;var l=[];for(var c in u)l.push(c+"="+encodeURIComponent(u[c]));var d=new FileReader;s.responseType="blob",s.send(l.join("&"));var p=setTimeout((function(){s.abort(),h(o.onTimeout)&&o.onTimeout()}),i);function h(e){return"[object Function]"===Object.prototype.toString.call(e)}s.onreadystatechange=function(){4==s.readyState&&(clearTimeout(p),200==s.status&&("audio/mp3"===s.response.type&&(document.body.appendChild(a),a.setAttribute("src",URL.createObjectURL(s.response)),o.autoDestory&&(a.onended=function(){document.body.removeChild(a)}),h(o.onSuccess)&&o.onSuccess(a)),"application/json"===s.response.type&&(d.onload=function(){var e=d.result;h(o.onError)&&o.onError(e)},d.readAsText(s.response))))}}function h(e,t){var n="https://aip.baidubce.com/rpc/2.0/nlp/v1/lexer",o=new XMLHttpRequest;o.open("POST",n);var a={};for(let s in e)a[s]=e[s];a.cuid=a.cuid||a.tok,a.ctp=1,a.lan=a.lan||"zh",a.aue=a.aue||3;var r=[];for(var i in a)r.push(i+"="+encodeURIComponent(a[i]));o.responseType="json",o.send(r.join("&")),o.onreadystatechange=function(){4==o.readyState&&(o.status,"application/json"===o.response.type&&console.log(o.response.type))}}function f(e,t,n){v(e,t,n)}function v(e,t,n){var o=new Image;o.src=e,o.onload=function(){var e=this;let o=e.width,a=e.height,r=o/a;o>a?(o=t.width?o<t.width?o:t.width:o,a=o/r):(a=t.height?a<t.height?a:t.height:a,o=a*r);var i=.6,s=document.createElement("canvas"),u=s.getContext("2d"),l=document.createAttribute("width");l.nodeValue=o;var c=document.createAttribute("height");c.nodeValue=a,s.setAttributeNode(l),s.setAttributeNode(c),u.drawImage(e,0,0,o,a),t.quality&&t.quality<=1&&t.quality>0&&(i=t.quality);var d=s.toDataURL("image/jpeg",i);n(d)}}var b=n("d958"),m=/^[\u4e00-\u9fa5]+$/;function y(e){if(m.test(e))return!0}var g={name:"HelloWorld",data(){return{fileList:[],hanzi:[],pinyin:[],str:"宝贝是个小流氓",tab:!1,text:"我",per:[106,110,111,103,5,1,0,3,4],index:0,voice:0,postText:"",wordsObj:""}},props:{msg:String},mounted(){let e=this.fn("我的老家");console.log(e),this.wordsObj=e},methods:{isChinese(e){if(m.test(e))return!0},afterRead(e){f(e.content,{height:1e3,width:1e3},e=>{var t=e.replace(/^data:image\/\w+;base64,/,"");this.uploadImage(t)})},uploadImage(e){d.a.post("https://nodeserver.hanabi90.usw1.kubesail.org/zidian",e).then(e=>{let t=[],n=e.data.words_result;n.forEach(e=>{let n=this.fn(e.words);t.push(n)}),this.wordsObj=t})},sendData(){let e={text:this.str};d.a.post("https://usw1.kubesail.com/",e).then(e=>{console.log(e)})},tabvoice(){this.index++,this.index=this.index%this.per.length,this.voice=this.per[this.index]},palyall(){this.text=this.str,this.tts()},read(e){this.text=e,this.tts()},ready(e){var t=document;t.addEventListener?t.addEventListener("DOMContentLoaded",(function(){e()}),!1):t.attachEvent&&t.attachEvent("onreadystatechange",(function(){"complete"===t.readyState&&e()}))},bttts(){h({charset:"UTF-8",access_token:"24.23bfab29758df833b59e95c9aab202b4.2592000.1603988305.282335-15670276",text:"百度是一家高科技公司"})},tts(){var e=this;this.audio=p({tex:this.text,tok:"24.23bfab29758df833b59e95c9aab202b4.2592000.1603988305.282335-15670276",spd:3,pit:5,vol:15,per:this.voice},{volume:.3,autoDestory:!0,timeout:1e4,hidden:!0,onSuccess:t=>{e.audio=t,this.audio.play()},onTimeout:()=>{}})},pause(){null===this.audio?console.log("请先点击合成"):this.audio.pause()},cancel(){null===this.audio?alert("请先点击合成"):(this.audio.pause(),document.body.removeChild(this.audio),this.audio=null,this.playBtn.innerText="准备中")},check(){console.log(this.$refs.iframe.document.getElementById("content"))},uploadfile(){let e=new FileReader;var t=document.getElementById("file").files[0];e.readAsText(t,"utf-8");var n=this;e.onload=function(e){n.str=e.target.result,n.fn()}},fn(e){e=e.replace(/\s*/g,"");var t=[],n=[];for(let r=0;r<e.length;r++){const o=e[r];y(o)?t.push(o):n.push({index:r,item:o})}t=t.join("");var o=Array.from(t),a=b(t);for(let r=0;r<n.length;r++){const e=n[r];o.splice(e.index,0,e.item),a.splice(e.index,0,e.item)}return{hanzi:o,pinyin:a}}}},w=g,x=(n("92b0"),n("2877")),j=Object(x["a"])(w,u,l,!1,null,"7da575ce",null),O=j.exports,_={name:"app",components:{HelloWorld:O}},T=_,S=(n("034f"),Object(x["a"])(T,i,s,!1,null,null,null)),k=S.exports,E=n("5c96"),R=n.n(E);n("0fae");r["default"].use(a["a"]),r["default"].use(R.a),r["default"].use(o["a"]),r["default"].config.productionTip=!1,new r["default"]({render:e=>e(k)}).$mount("#app")},"5ee7":function(e,t,n){},"85ec":function(e,t,n){},"92b0":function(e,t,n){"use strict";var o=n("5ee7"),a=n.n(o);a.a}});
//# sourceMappingURL=app.84b81002.js.map