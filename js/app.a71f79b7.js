(function(e){function t(t){for(var r,a,u=t[0],l=t[1],c=t[2],s=0,p=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/haolovesarah/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0154":function(e,t,n){"use strict";var r=n("b548"),o=n.n(r);o.a},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("input",{attrs:{type:"file",id:"file",accept:".txt"},on:{change:e.uploadfile}}),n("div",{attrs:{id:"result"}}),e._l(e.hanzi,(function(t,r){return[n("ruby",{key:r},[e._v(e._s(t)),n("rt",[e._v(e._s(e.pinyin[r]))])])]}))],2)},u=[],l=(n("a630"),n("a15b"),n("a434"),n("3ca3"),n("5319"),n("d958")),c=/^[\u4e00-\u9fa5]+$/;function f(e){if(c.test(e))return!0}var s={name:"HelloWorld",data:function(){return{hanzi:[],pinyin:[],str:""}},props:{msg:String},mounted:function(){},methods:{uploadfile:function(){var e=new FileReader,t=document.getElementById("file").files[0];e.readAsText(t,"utf-8"),console.log(e);var n=this;e.onload=function(e){n.str=e.target.result,n.fn()}},fn:function(){var e=this.str;e=e.replace(/\s*/g,"");for(var t=[],n=[],r=0;r<e.length;r++){var o=e[r];f(o)?t.push(o):n.push({index:r,item:o})}t=t.join(""),this.hanzi=Array.from(t),this.pinyin=l(t);for(var i=0;i<n.length;i++){var a=n[i];this.hanzi.splice(a.index,0,a.item),this.pinyin.splice(a.index,0,a.item)}}}},p=s,d=(n("0154"),n("2877")),h=Object(d["a"])(p,a,u,!1,null,"4eb5fd9c",null),v=h.exports,b={name:"app",components:{HelloWorld:v}},y=b,m=(n("034f"),Object(d["a"])(y,o,i,!1,null,null,null)),g=m.exports,_=n("5c96"),j=n.n(_);n("0fae");r["default"].use(j.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,n){},b548:function(e,t,n){}});
//# sourceMappingURL=app.a71f79b7.js.map