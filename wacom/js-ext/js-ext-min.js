!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).jsExt={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var i=u(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return c(this,r)}}function l(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||h(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){if(t){if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=h(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw o}}}}var d=function(){function t(){r(this,t)}return i(t,null,[{key:"overrides",get:function(){return["toString"]}},{key:"extend",value:function(t){var e,r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;return"string"==typeof t?(e=t,t=globalThis[e]):e=t.name,t?(this.debug&&console.log("============================================================ extend",t.name,n.name),Object.getOwnPropertyNames(n.prototype).filter((function(t){return"constructor"!=t})).forEach((function(e){!(e in t.prototype)||n.overrides.includes(e)?(r.debug&&(n.overrides.includes(e)?console.log("%coverride ".concat(e),"color: chartreuse"):console.log("%cdefine ".concat(e),"color: green")),t.prototype[e]=n.prototype[e]):r.debug&&console.log("%cexclude ".concat(e),"color: red")})),Object.getOwnPropertyNames(n).forEach((function(e){"function"==typeof n[e]&&"extend"!=e&&(!(e in t)||n.overrides.includes(e)?(r.debug&&(n.overrides.includes(e)?console.log("%coverride static ".concat(e),"color: chartreuse"):console.log("%cdefine static ".concat(e),"color: orange")),t[e]=n[e]):r.debug&&console.log("%cexclude static ".concat(e),"color: red"))})),n.properties&&Object.keys(n.properties).forEach((function(e){e in t.prototype?r.debug&&console.log("%cexclude prop ".concat(e),"color: red"):n.properties[e]&&(r.debug&&console.log("%cdefine prop ".concat(e),"color: darkseagreen"),Object.defineProperty(t.prototype,e,n.properties[e]))})),n.classProperties&&Object.keys(n.classProperties).forEach((function(e){e in t?r.debug&&console.log("%cexclude static prop ".concat(e),"color: red"):n.classProperties[e]&&(r.debug&&console.log("%cdefine static prop ".concat(e),"color: chocolate"),Object.defineProperty(t,e,n.classProperties[e]))})),!0):(this.debug&&console.warn("============================================================ Class ".concat(e," not found")),!1)}}]),t}(),v=function(){function t(e,n,i){r(this,t),Object.defineProperty(this,"type",{value:e,enumerable:!0}),Object.defineProperty(this,"name",{value:n,enumerable:!0}),Object.defineProperty(this,"value",{value:i,enumerable:!0})}return i(t,[{key:"toString",value:function(){return this.name}}]),t}(),g=function(t){a(o,t);var n=f(o);function o(){return r(this,o),n.apply(this,arguments)}return i(o,null,[{key:"equals",value:function(t,r){if(t===r)return!0;if(!(t instanceof Object&&r instanceof Object))return!1;if(t.constructor!==r.constructor)return!1;if(t instanceof Array||ArrayBuffer.isTypedArray(t))return t.length==r.length&&t.every((function(t,e){return Object.equals(t,r[e])}));for(var n in t)if(t.hasOwnProperty(n)){if(!r.hasOwnProperty(n))return!1;if(t[n]!==r[n]){if("object"!==e(t[n]))return!1;if(!Object.equals(t[n],r[n]))return!1}}for(var i in r)if(r.hasOwnProperty(i)&&!t.hasOwnProperty(i))return!1;return!0}},{key:"clone",value:function(t,r){var n=new Array;return function t(i){if(null===i)return null;if("object"!==e(i)||i.immutable)return i;if("function"==typeof i.clone)return i.clone();for(var o=0;o<n.length;o++)if(n[o][0]===i)return n[o][1];var a=Object.create(Object.getPrototypeOf(i));for(var u in n.push([i,a]),i)r&&"function"==typeof i[u]||i.hasOwnProperty(u)&&(a[u]=t(i[u]));return a}(t)}},{key:"toSource",value:function(t,r){if("object"==e(t)){var n=[];for(var i in t)t.hasOwnProperty(i)&&n.push("".concat(i,": ").concat(Object.toSource(t[i])));return(r?"".concat(r," = "):"")+"{"+n.join(", ")+"}"}if("function"==typeof t){var o=t.toString();return t.name&&o.startsWith(t.name)&&(o="function "+o),o}return t}},{key:"defineEnum",value:function(t,e,r){if(t[e])throw new Error("Already exist property: ".concat(e));var n={values:r.map((function(t,r){return new v(e,t,r)}))};return n.values.forEach((function(t){Object.defineProperty(n,t.name,{value:t,enumerable:!0}),Object.defineProperty(n,t.value,{value:t,enumerable:!0})})),Object.defineProperty(t,e,{value:n,enumerable:!0}),n}}]),o}(d),m=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"startsWith",value:function(t){return this.length>=t.length&&this.substring(0,t.length)==t}},{key:"endsWith",value:function(t){return this.length>=t.length&&this.substring(this.length-t.length,this.length)==t}},{key:"includes",value:function(t){return-1!=this.indexOf(t)}},{key:"contains",value:function(t){return this.includes(t)}},{key:"containsIgnoreCase",value:function(t){return-1!=this.toUpperCase().indexOf(t.toUpperCase())}},{key:"pad",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return this.length<t?new Array(t-this.length+1).join(e)+this:this.toString()}},{key:"toCharArray",value:function(t){for(var e=[],r=!0,n=0;n<this.length;n++){var i=this.charCodeAt(n);i>255&&(r=!1),e[n]=i}if(t){if(!r)throw new Error("Current value is not byte string");e=new Uint8Array(e)}return e}}],[{key:"fromCharArray",value:function(t){var e="";try{e=String.fromCharCode.apply(null,t)}catch(n){for(var r=0;r<t.length;r++)e+=String.fromCharCode(t[r])}return e}}]),n}(d),b=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"format",value:function(t){return this.toString().length<t.length?t.substring(0,t.length-this.toString().length)+this:this.toString()}},{key:"pad",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";return String(this).length<t?new Array(t-String(this).length+1).join(e)+String(this):this.toString()}},{key:"toFloat32",value:function(){var t=new Float32Array(1);return t[0]=this,t[0]}}]),n}(d);o(b,"classProperties",{MAX_INT32:{value:2147483647,enumerable:!0},MAX_UINT32:{value:4294967295,enumerable:!0},MAX_INT64:"undefined"==typeof BigInt?void 0:{value:0x7FFFFFFFFFFFFFFFn,enumerable:!0},MAX_UINT64:"undefined"==typeof BigInt?void 0:{value:0xFFFFFFFFFFFFFFFFn,enumerable:!0}}),o(b,"properties",{length:{get:function(){return 1+(0|Math.log10((this^this>>31)-(this>>31)))},configurable:!0}});var x=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"format",value:function(t){var e=t;function r(t,r){var n=RegExp("".concat(t,"+")).exec(e);if(n){var i=n[0],o=i.replace(new RegExp(i.substring(0,1),"g"),"0");"Y"==t&&"YY"==i&&(r=parseInt(r.toString().substring(2))),e=e.replace(i,r.format(o))}}if(r("Y",this.getFullYear()),r("M",this.getMonth()+1),r("D",this.getDate()),r("h",this.getHours()),r("m",this.getMinutes()),r("s",this.getSeconds()),r("S",this.getMilliseconds()),e.match(/[a-zA-Z]/))throw new Error("Invalid pattern found in ".concat(t,": ").concat(e.match(/[a-zA-Z]+/)[0]));return e}}]),n}(d),M=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,null,[{key:"createClass",value:function(t,e){return new Function(e?e.name:void 0,"return class ".concat(t).concat(e?" extends ".concat(e.name):""," {\n\t\t\tconstructor() {\n\t\t\t\t").concat(e?"super(...arguments);":"","\n\t\t\t}\n\t\t}"))(e)}}]),n}(d);o(M,"properties",{body:{get:function(){var t=this.toString();return t=t.substring(t.indexOf("{")+1,t.lastIndexOf("}"))},configurable:!0}});var O=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"clear",value:function(){this.length=0}},{key:"includes",value:function(t){return this.indexOf(t)>-1}},{key:"clone",value:function(){if(!Object.clone)throw new Error("Object extension is required");return this.map((function(t){return Object.clone(t)}))}},{key:"unique",value:function(){var t=this;return this.filter((function(e,r){return t.indexOf(e)==r}))}},{key:"add",value:function(t){return!this.includes(t)&&(this.push(t),!0)}},{key:"insert",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.splice(e,0,t)}},{key:"indicesOf",value:function(t){var e=[],r=this.indexOf(t);if(-1!=r){e.push(r);for(var n=this.lastIndexOf(t);n>r;)r=this.indexOf(t,r+1),e.push(r)}return e}},{key:"remove",value:function(){for(var t=this,e=function(t){var e=[],r=-1;return t.forEach((function(t){r-t!=1&&e.push([]),e.last.push(t),r=t})),e},r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.map((function(e){return t.indicesOf(e)})).flat().sort((function(t,e){return e-t}));return e(o).forEach((function(e){return t.removeAt(e.last,e.length)})),this}},{key:"removeAt",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t>-1&&this.splice(t,e),this}},{key:"replace",value:function(t,e,r){var n=this.indexOf(t);return n>-1&&(!r&&e instanceof Array?this.splice.apply(this,[n,1].concat(l(e))):this.splice(n,1,e)),this}}],[{key:"from",value:function(t){return Array.prototype.slice.call(t)}}]),n}(d);o(O,"properties",{first:{get:function(){return this[0]},configurable:!0},last:{get:function(){return this[this.length-1]},configurable:!0}});var w=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"toBase64",value:function(){if(!String.fromCharArray)throw new Error("String extension is required");var t=new Uint8Array(this);return btoa(String.fromCharArray(t))}}],[{key:"fromBase64",value:function(t){if(!String.prototype.toCharArray)throw new Error("String extension is required");return atob(t).toCharArray(!0).buffer}},{key:"isTypedArray",value:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}}]),n}(d),S=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,null,[{key:"fromArrayBuffer",value:function(t){if(!(t instanceof ArrayBuffer))throw new Error("ArrayBuffer is expected");var e=new Uint8Array(t),r=new SharedArrayBuffer(t.byteLength);return new Uint8Array(r).set(e),r}}]),n}(d),k=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"],E=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"clone",value:function(){if("undefined"!=typeof SharedArrayBuffer&&this.buffer instanceof SharedArrayBuffer){var t=new SharedArrayBuffer(this.byteLength),e=new this.constructor(t);return e.set(this,this.byteOffset),e}return new this.constructor(this,this.byteOffset,this.length)}},{key:"concat",value:function(){for(var t,e=this,r=this.length,n=this.length,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return o.forEach((function(t){if(e.constructor!=t.constructor)throw new Error("Concat array from wrong type detected - expected ".concat(e.constructor.name,", found ").concat(t.constructor.name));r+=t.length})),(t="undefined"!=typeof SharedArrayBuffer&&this.buffer instanceof SharedArrayBuffer?this.constructor.createSharedInstance(r):new this.constructor(r)).set(this),o.forEach((function(e){t.set(e,n),n+=e.length})),t}},{key:"toArray",value:function(){return Array.from(this)}}],[{key:"createSharedInstance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(t instanceof this)return"undefined"==typeof SharedArrayBuffer||t.buffer instanceof SharedArrayBuffer?t:new this(S.fromArrayBuffer(t.buffer));if("number"!=typeof t&&!Array.isArray(t))throw new Error("Expected data type is Array");var e="number"==typeof t?t:t.length;if("undefined"==typeof SharedArrayBuffer)return new this("number"==typeof t?e:t);var r=new SharedArrayBuffer(e*this.BYTES_PER_ELEMENT);if("number"==typeof t)return new this(r);var n=new this(r);return n.set(t),n}},{key:"from",value:function(t){return new this(t)}},{key:"extend",value:function(){var t=this;k.forEach((function(e){if(d.extend(e+"Array",t)){var r=globalThis[e+"Array"];Array.prototype["to"+e+"Array"]=function(){return r.from(this)}}}))}}]),n}(d),A=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"map",value:function(t){var e,r=new Set,n=p(this);try{for(n.s();!(e=n.n()).done;){var i=e.value;(i=t(i))&&r.add(i)}}catch(t){n.e(t)}finally{n.f()}return r}},{key:"filter",value:function(t){var e,r=new Set,n=p(this);try{for(n.s();!(e=n.n()).done;){var i=e.value;t(i)&&r.add(i)}}catch(t){n.e(t)}finally{n.f()}return r}}]),n}(d),P=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(d);o(P,"properties",{size:{get:function(){return{width:Math.floor(screen.width),height:Math.floor(screen.height)}},configurable:!0},resolution:{get:function(){return{width:Math.floor(screen.width*devicePixelRatio),height:Math.floor(screen.height*devicePixelRatio)}},configurable:!0}});var D=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,null,[{key:"properties",get:function(){return{query:{get:function(){if(!this._query){var t=Object.assign.apply(Object,[{}].concat(l(this.search.substring(1).split("&").filter((function(t){return t})).map((function(t){return t.split("=")})).map((function(t){return o({},t[0],decodeURIComponent(t[1]))})))));Object.defineProperty(this,"_query",{value:t})}return this._query},configurable:!0}}}}]),n}(d),T=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"getInlineStyle",value:function(t){return this.style[t]||this.style["-webkit-"+t]||this.style["-khtml-"+t]||this.style["-moz-"+t]||this.style["-ms-"+t]||this.style["-o-"+t]||""}},{key:"setStyle",value:function(t,e){var r=this;["-webkit","-khtml","-moz","-ms","-o"].forEach((function(n){return r.style[n+"-"+t]=e})),this.style[t]=e}},{key:"getStyle",value:function(t){var e=t,r=t.startsWith("-");r&&(e=t.substring(1));for(var n=e.split("-"),i=n.length-1;i>0;i--)n[i]=n[i].substring(0,1).toUpperCase()+n[i].substring(1);e=n.join("");var o=this.style.display,a=this.style.visibility;"none"==o&&(this.style.visibility="hidden",this.style.display="");var u=window.getComputedStyle(this)[e];if(!r&&void 0===u)for(var s=["-webkit","-khtml","-moz","-ms","-o"],c=0;c<s.length&&"undefined"==(u=this.getStyle(s[c]+"-"+t));c++);return"none"==o&&(this.style.visibility=a,this.style.display="none"),u}},{key:"getMathStyle",value:function(t,e){var r=e?this.getInlineStyle(t):this.getStyle(t);return"auto"==r&&(r=0),parseFloat(r)}},{key:"getTransformStyle",value:function(){var t={translate:{x:0,y:0},scale:{x:1,y:1},rotate:{angle:0},skew:{angleX:0,angleY:0},matrix:{a:1,b:0,c:0,d:1,tx:0,ty:0}},e=this.getStyle("transform");if("none"!=e){var r=e.substring(e.indexOf("(")+1,e.indexOf(")")).split(/,\s*/g),n=parseFloat(r[0]),i=parseFloat(r[1]),o=parseFloat(r[2]),a=parseFloat(r[3]),u=parseFloat(r[4]),s=parseFloat(r[5]);t.scale={x:Math.sqrt(n*n+o*o),y:Math.sqrt(a*a+i*i)},t.skew={angleX:Math.tan(o),angleY:Math.tan(i)},t.rotate={angle:Math.atan2(i,n)},t.translate={x:u,y:s},t.matrix={a:n,b:i,c:o,d:a,tx:u,ty:s}}return t}},{key:"toRect",value:function(){var t=this.style.display,e=this.style.visibility;"none"==t&&(this.style.visibility="hidden",this.style.display="");var r=this.offsetWidth+this.getMathStyle("margin-left")+this.getMathStyle("margin-right"),n=this.offsetHeight+this.getMathStyle("margin-top")+this.getMathStyle("margin-bottom"),i=new DOMRect(this.offsetLeft,this.offsetTop,this.offsetWidth,this.offsetHeight);return i.outerSize=new DOMSize(r,n),"none"==t&&(this.style.visibility=e,this.style.display="none"),i}}]),n}(d),j=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"toDataURL",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"png",e=document.createElement("canvas");return e.width=this.width,e.height=this.height,e.getContext("2d").drawImage(this,0,0),e.toDataURL("image/".concat(t))}},{key:"toBlob",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"png";return new Blob([this.toArrayBuffer(t)],{type:"image/".concat(t)})}},{key:"toArrayBuffer",value:function(t){if(!ArrayBuffer.fromBase64)throw new Error("ArrayBuffer extension is required");var e=this.toDataURL(t).split(",")[1];return ArrayBuffer.fromBase64(e)}}]),n}(d),F=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,null,[{key:"fromBytes",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"png",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Image;return new Promise((function(n,i){r.onload=function(){URL.revokeObjectURL(r.src),n(r)},r.onerror=i,r.src=URL.createObjectURL(new Blob([t.buffer||t],{type:"image/".concat(e)}))}))}}]),n}(d),B=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"transform",value:function(t){return t instanceof DOMMatrix||(t=DOMMatrix.fromMatrix(t)),this.matrixTransform(t)}},{key:"toString",value:function(){return"point(".concat(this.x,", ").concat(this.y,", ").concat(this.z,")")}}]),n}(d),I=function(){function t(e,n){r(this,t),this.width=e,this.height=n}return i(t,[{key:"toJSON",value:function(){return{width:this.width,height:this.height}}},{key:"toString",value:function(){return"size(".concat(this.width,", ").concat(this.height,")")}}],[{key:"fromSize",value:function(e){if(e instanceof t)return e;if("string"==typeof e){if(!e.startsWith("size("))throw new Error("Invalid value found. Expected template - size(width, height).");var r=e.substring(e.indexOf("(")+1,e.indexOf(")")).split(/,\s*/g);e={width:parseFloat(r[0]),height:parseFloat(r[1])}}if(isNaN(e.width))throw new Error("Invalid width found, expected number");if(isNaN(e.height))throw new Error("Invalid height found, expected number");return new t(e.width,e.height)}}]),t}(),R=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"union",value:function(t){return t?DOMRect.ofEdges(Math.min(this.left,t.left),Math.min(this.top,t.top),Math.max(this.right,t.right),Math.max(this.bottom,t.bottom)):this}},{key:"intersect",value:function(t){if(t){var e=DOMRect.ofEdges(Math.max(this.left,t.left),Math.max(this.top,t.top),Math.min(this.right,t.right),Math.min(this.bottom,t.bottom));return e.width>0&&e.height>0?e:void 0}}},{key:"ceil",value:function(t){var e=Math.floor(this.left),r=Math.floor(this.top),n=Math.ceil(this.right),i=Math.ceil(this.bottom);if(t){var o=this.width,a=this.height;n=e+(o+=o%2),i=r+(a+=a%2)}return DOMRect.ofEdges(e,r,n,i)}},{key:"floor",value:function(t){var e=Math.ceil(this.left),r=Math.ceil(this.top),n=Math.floor(this.right),i=Math.floor(this.bottom);if(t){var o=this.width,a=this.height;n=e+(o-=o%2),i=r+(a-=a%2)}return DOMRect.ofEdges(e,r,n,i)}},{key:"contains",value:function(t){return this.left<=t.x&&this.right>=t.x&&this.top<=t.y&&this.bottom>=t.y}},{key:"transform",value:function(t){t instanceof DOMMatrix||(t=DOMMatrix.fromMatrix(t));var e=DOMPoint.fromPoint({x:this.left,y:this.top}).transform(t),r=DOMPoint.fromPoint({x:this.right,y:this.top}).transform(t),n=DOMPoint.fromPoint({x:this.left,y:this.bottom}).transform(t),i=DOMPoint.fromPoint({x:this.right,y:this.bottom}).transform(t),o=Math.min(e.x,r.x,n.x,i.x),a=Math.min(e.y,r.y,n.y,i.y),u=Math.max(e.x,r.x,n.x,i.x),s=Math.max(e.y,r.y,n.y,i.y);return DOMRect.ofEdges(o,a,u,s)}},{key:"matrixTransform",value:function(t){return this.transform(t)}},{key:"toPath",value:function(){var t=[];return t.push(this.left,this.top),t.push(this.right,this.top),t.push(this.right,this.bottom),t.push(this.left,this.bottom),t.push(this.left,this.top),t.toFloat32Array()}},{key:"toString",value:function(){return"rect(".concat(this.x,", ").concat(this.y,", ").concat(this.width,", ").concat(this.height,")")}}],[{key:"ofEdges",value:function(t,e,r,n){return new DOMRect(t,e,r-t,n-e)}},{key:"extend",value:function(){d.extend("DOMRect",this)&&(globalThis.DOMSize=I)}}]),n}(d);o(R,"properties",{size:{get:function(){return new I(this.width,this.height)},configurable:!0},center:{get:function(){return new DOMPoint((this.left+this.right)/2,(this.top+this.bottom)/2)},configurable:!0}});var _=function(t){a(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"preMultiply",value:function(t){var e=t.postMultiply(this);return e.multiplicationType=this.multiplicationType,e}},{key:"multiply",value:function(t){if(t instanceof DOMMatrix||(t=DOMMatrix.fromMatrix(t)),this.multiplicationType==DOMMatrix.MultiplicationType.POST)return this.postMultiply(t);var e=this.preMultiply(t);return e.multiplicationType=DOMMatrix.MultiplicationType.PRE,e}},{key:"multiplySelf",value:function(t){t instanceof DOMMatrix||(t=DOMMatrix.fromMatrix(t)),this.multiplicationType==DOMMatrix.MultiplicationType.POST?this.postMultiplySelf(t):this.preMultiplySelf(t)}},{key:"transformPoint",value:function(t){return DOMPoint.fromPoint(t).matrixTransform(this)}},{key:"invert",value:function(){return this.inverse()}},{key:"decompose",value:function(){return{translate:{x:this.tx,y:this.ty},rotate:{angle:Math.atan2(this.b,this.a)},skew:{angleX:Math.tan(this.c),angleY:Math.tan(this.b)},scale:{x:Math.sqrt(this.a*this.a+this.c*this.c),y:Math.sqrt(this.d*this.d+this.b*this.b)},matrix:this}}},{key:"disassemble",value:function(){return console.warn("disassemble is deprecated, use decompose instead"),this.decompose()}},{key:"toString",value:function(t){if(!t)return this.nativeToString();var e=function(t){return((t<0?"":" ")+t.toPrecision(6)).substring(0,8)};return" Matrix 4x4\n"+"-".repeat(39)+"\n".concat(e(this.m11),", ").concat(e(this.m21),", ").concat(e(this.m31),", ").concat(e(this.m41))+"\n".concat(e(this.m12),", ").concat(e(this.m22),", ").concat(e(this.m32),", ").concat(e(this.m42))+"\n".concat(e(this.m13),", ").concat(e(this.m23),", ").concat(e(this.m33),", ").concat(e(this.m43))+"\n".concat(e(this.m14),", ").concat(e(this.m24),", ").concat(e(this.m34),", ").concat(e(this.m44))}}],[{key:"fromMatrix",value:function(t,e){var r;return"string"==typeof t?r=new DOMMatrix(t):("e"in t||(t.e=t.tx||t.dx),"f"in t||(t.f=t.ty||t.dy),r=DOMMatrix.nativeFromMatrix(t)),r.multiplicationType=e||t.multiplicationType||DOMMatrix.MultiplicationType.POST,r}},{key:"fromTranslate",value:function(t){var e=isFinite(t)?{tx:t,ty:t}:{tx:t.x,ty:t.y};return DOMMatrix.fromMatrix(e)}},{key:"fromRotate",value:function(t,e){var r=Math.sin(t),n=Math.cos(t),i={a:n,b:r,c:-r,d:n};return e&&(i.tx=e.x-e.x*n+e.y*r,i.ty=e.y-e.x*r-e.y*n),DOMMatrix.fromMatrix(i)}},{key:"fromScale",value:function(t,e){isFinite(t)&&(t={x:t,y:t});var r={a:t.x,d:t.y};return e&&(r.tx=e.x-e.x*t.x,r.ty=e.y-e.y*t.y),DOMMatrix.fromMatrix(r)}},{key:"fromPoints",value:function(t,e){var r=DOMMatrix.fromMatrix({m11:t[0].x,m21:t[1].x,m31:t[2].x,m12:t[0].y,m22:t[1].y,m32:t[2].y,m13:1,m23:1,m33:1}),n=DOMMatrix.fromMatrix({m11:e[0].x,m21:e[1].x,m31:e[2].x,m12:e[0].y,m22:e[1].y,m32:e[2].y,m13:1,m23:1,m33:1}),i=r.invert().preMultiply(n);return DOMMatrix.fromMatrix({a:i.m11,b:i.m12,c:i.m21,d:i.m22,tx:i.m31,ty:i.m32})}},{key:"extend",value:function(){if("undefined"==typeof DOMMatrix||DOMMatrix.nativeFromMatrix)return!1;DOMMatrix.nativeFromMatrix=DOMMatrix.fromMatrix,DOMMatrix.prototype.nativeToString=DOMMatrix.prototype.toString,DOMMatrix.prototype.postMultiply=DOMMatrix.prototype.multiply,DOMMatrix.prototype.postMultiplySelf=DOMMatrix.prototype.multiplySelf,d.extend("DOMMatrix",this)}}]),n}(d);o(_,"overrides",d.overrides.concat(["fromMatrix","multiply","multiplySelf","transformPoint"])),o(_,"properties",{tx:{get:function(){return this.e},set:function(t){this.e=t},enumerable:!0},ty:{get:function(){return this.f},set:function(t){this.f=t},enumerable:!0},dx:{get:function(){return this.e},set:function(t){this.e=t},enumerable:!0},dy:{get:function(){return this.f},set:function(t){this.f=t},enumerable:!0},multiplicationType:{value:"POST",enumerable:!0,writable:!0}}),o(_,"classProperties",{MultiplicationType:{value:{PRE:"PRE",POST:"POST"},enumerable:!0}});var C=Object.freeze({__proto__:null,ObjectExt:g,StringExt:m,NumberExt:b,DateExt:x,FunctionExt:M,ArrayExt:O,ArrayBufferExt:w,SharedArrayBufferExt:S,TypedArrayExt:E,SetExt:A,ScreenExt:P,LocationExt:D,HTMLElementExt:T,HTMLImageElementExt:j,ImageExt:F,DOMPointExt:B,DOMRectExt:R,DOMMatrixExt:_});"undefined"==typeof globalThis&&("undefined"!=typeof window?window.globalThis=window:"undefined"!=typeof self?self.globalThis=self:"undefined"!=typeof global&&(global.globalThis=global)),globalThis.JS_EXT_SCOPE||Object.defineProperty(globalThis,"JS_EXT_SCOPE",{value:["Object","String","Number","Date","Function","Set","Array","ArrayBuffer","SharedArrayBuffer","TypedArray","Screen","Location","HTMLElement","HTMLImageElement","Image","DOMPoint","DOMRect","DOMMatrix"],enumerable:!0,configurable:!0}),globalThis.JS_EXT_SCOPE.forEach((function(t){var e=C["".concat(t,"Ext")];if(!e)throw new Error("Extension ".concat(t," not found"));e.extend(t)})),Math.toDegrees=function(t){return t*(180/this.PI)},Math.toRadians=function(t){return t*(this.PI/180)},Math.randomInt=function(t,e){return Math.floor(this.random()*(e-t+1))+t},"function"==typeof Worker&&(Worker.prototype.on=function(t,e){this["on".concat(t)]=function(r){var n="message"==t?r.data:r;e(n)}}),"function"==typeof DedicatedWorkerGlobalScope&&(DedicatedWorkerGlobalScope.prototype.on=function(t,e){this["on".concat(t)]=function(r){var n="message"==t?r.data:r;e(n)}}),t.Extension=d,t.version="1.0.3",Object.defineProperty(t,"__esModule",{value:!0})}));
