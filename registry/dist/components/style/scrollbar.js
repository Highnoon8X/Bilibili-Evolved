!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/scrollbar"]=e():t["style/scrollbar"]=e()}(globalThis,(()=>(()=>{var t,e,r={36:(t,e,r)=>{var n=r(355)((function(t){return t[1]}));n.push([t.id,"html ::-webkit-scrollbar {\n  width: 5px !important;\n  height: 5px !important;\n}\nhtml ::-webkit-scrollbar-corner,\nhtml ::-webkit-scrollbar-track {\n  background: transparent !important;\n}\nhtml ::-webkit-resizer,\nhtml ::-webkit-scrollbar-thumb {\n  background: #aaa;\n  border-radius: 3px;\n}\nhtml ::-webkit-scrollbar-thumb:hover {\n  background: #888;\n}\nhtml,\nhtml * {\n  scrollbar-color: #aaa transparent;\n  scrollbar-width: thin !important;\n}",""]),t.exports=n},355:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,r,n){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var o={};if(n)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var c=this[a][0];null!=c&&(o[c]=!0)}for(var i=0;i<t.length;i++){var l=[].concat(t[i]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),e.push(l))}},e}},614:(t,e,r)=>{var n=r(36);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()}},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,o),a.exports}e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,o.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var a=Object.create(null);o.r(a);var c={};t=t||[null,e({}),e([]),e(e)];for(var i=2&n&&r;"object"==typeof i&&!~t.indexOf(i);i=e(i))Object.getOwnPropertyNames(i).forEach((t=>c[t]=()=>r[t]));return c.default=()=>r,o.d(a,c),a},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.d(a,{component:()=>t});const t=(0,coreApis.componentApis.define.defineComponentMetadata)({name:"elegantScrollbar",entry:none,displayName:"使用细滚动条",description:"使用浏览器的滚动条风格替代系统的滚动条, 不过 macOS 系统滚动条比浏览器做得好一些, 因此不建议 macOS 使用此功能.",tags:[componentsTags.style,componentsTags.general],instantStyles:[{name:"elegant-scrollbar",style:()=>Promise.resolve().then(o.t.bind(o,614,23))}],commitHash:"156c9ce2ddedec1bac6a05913ecd2e094f6de564",coreVersion:"2.6.2"})})(),a=a.component})()));