class t{static get overrides(){return["toString"]}static extend(t,e=this){let r;return"string"==typeof t?(r=t,t=globalThis[r]):r=t.name,t?(this.debug&&console.log("============================================================ extend",t.name,e.name),Object.getOwnPropertyNames(e.prototype).filter((t=>"constructor"!=t)).forEach((r=>{!(r in t.prototype)||e.overrides.includes(r)?(this.debug&&(e.overrides.includes(r)?console.log(`%coverride ${r}`,"color: chartreuse"):console.log(`%cdefine ${r}`,"color: green")),t.prototype[r]=e.prototype[r]):this.debug&&console.log(`%cexclude ${r}`,"color: red")})),Object.getOwnPropertyNames(e).forEach((r=>{"function"==typeof e[r]&&"extend"!=r&&(!(r in t)||e.overrides.includes(r)?(this.debug&&(e.overrides.includes(r)?console.log(`%coverride static ${r}`,"color: chartreuse"):console.log(`%cdefine static ${r}`,"color: orange")),t[r]=e[r]):this.debug&&console.log(`%cexclude static ${r}`,"color: red"))})),e.properties&&Object.keys(e.properties).forEach((r=>{r in t.prototype?this.debug&&console.log(`%cexclude prop ${r}`,"color: red"):e.properties[r]&&(this.debug&&console.log(`%cdefine prop ${r}`,"color: darkseagreen"),Object.defineProperty(t.prototype,r,e.properties[r]))})),e.classProperties&&Object.keys(e.classProperties).forEach((r=>{r in t?this.debug&&console.log(`%cexclude static prop ${r}`,"color: red"):e.classProperties[r]&&(this.debug&&console.log(`%cdefine static prop ${r}`,"color: chocolate"),Object.defineProperty(t,r,e.classProperties[r]))})),!0):(this.debug&&console.warn(`============================================================ Class ${r} not found`),!1)}}class e{constructor(t,e,r){Object.defineProperty(this,"type",{value:t,enumerable:!0}),Object.defineProperty(this,"name",{value:e,enumerable:!0}),Object.defineProperty(this,"value",{value:r,enumerable:!0})}toString(){return this.name}}class r extends t{static classProperties={MAX_INT32:{value:2147483647,enumerable:!0},MAX_UINT32:{value:4294967295,enumerable:!0},MAX_INT64:"undefined"==typeof BigInt?void 0:{value:0x7FFFFFFFFFFFFFFFn,enumerable:!0},MAX_UINT64:"undefined"==typeof BigInt?void 0:{value:0xFFFFFFFFFFFFFFFFn,enumerable:!0}};static properties={length:{get:function(){return 1+(0|Math.log10((this^this>>31)-(this>>31)))},configurable:!0}};format(t){return this.toString().length<t.length?t.substring(0,t.length-this.toString().length)+this:this.toString()}pad(t,e="0"){return String(this).length<t?new Array(t-String(this).length+1).join(e)+String(this):this.toString()}toFloat32(){let t=new Float32Array(1);return t[0]=this,t[0]}}class i extends t{static fromArrayBuffer(t){if(!(t instanceof ArrayBuffer))throw new Error("ArrayBuffer is expected");let e=new Uint8Array(t),r=new SharedArrayBuffer(t.byteLength);return new Uint8Array(r).set(e),r}}const n=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"];class s{constructor(t,e){this.width=t,this.height=e}toJSON(){return{width:this.width,height:this.height}}toString(){return`size(${this.width}, ${this.height})`}static fromSize(t){if(t instanceof s)return t;if("string"==typeof t){if(!t.startsWith("size("))throw new Error("Invalid value found. Expected template - size(width, height).");{let e=t.substring(t.indexOf("(")+1,t.indexOf(")")).split(/,\s*/g);t={width:parseFloat(e[0]),height:parseFloat(e[1])}}}if(isNaN(t.width))throw new Error("Invalid width found, expected number");if(isNaN(t.height))throw new Error("Invalid height found, expected number");return new s(t.width,t.height)}}class o extends t{static overrides=t.overrides.concat(["fromMatrix","multiply","multiplySelf","transformPoint"]);static properties={tx:{get:function(){return this.e},set:function(t){this.e=t},enumerable:!0},ty:{get:function(){return this.f},set:function(t){this.f=t},enumerable:!0},dx:{get:function(){return this.e},set:function(t){this.e=t},enumerable:!0},dy:{get:function(){return this.f},set:function(t){this.f=t},enumerable:!0},multiplicationType:{value:"POST",enumerable:!0,writable:!0}};static classProperties={MultiplicationType:{value:{PRE:"PRE",POST:"POST"},enumerable:!0}};preMultiply(t){let e=t.postMultiply(this);return e.multiplicationType=this.multiplicationType,e}multiply(t){if(t instanceof DOMMatrix||(t=DOMMatrix.fromMatrix(t)),this.multiplicationType==DOMMatrix.MultiplicationType.POST)return this.postMultiply(t);{let e=this.preMultiply(t);return e.multiplicationType=DOMMatrix.MultiplicationType.PRE,e}}multiplySelf(t){t instanceof DOMMatrix||(t=DOMMatrix.fromMatrix(t)),this.multiplicationType==DOMMatrix.MultiplicationType.POST?this.postMultiplySelf(t):this.preMultiplySelf(t)}transformPoint(t){return DOMPoint.fromPoint(t).matrixTransform(this)}invert(){return this.inverse()}decompose(){return{translate:{x:this.tx,y:this.ty},rotate:{angle:Math.atan2(this.b,this.a)},skew:{angleX:Math.tan(this.c),angleY:Math.tan(this.b)},scale:{x:Math.sqrt(this.a*this.a+this.c*this.c),y:Math.sqrt(this.d*this.d+this.b*this.b)},matrix:this}}disassemble(){return console.warn("disassemble is deprecated, use decompose instead"),this.decompose()}toString(t){if(!t)return this.nativeToString();let e=t=>((t<0?"":" ")+t.toPrecision(6)).substring(0,8);return" Matrix 4x4\n"+"-".repeat(39)+`\n${e(this.m11)}, ${e(this.m21)}, ${e(this.m31)}, ${e(this.m41)}`+`\n${e(this.m12)}, ${e(this.m22)}, ${e(this.m32)}, ${e(this.m42)}`+`\n${e(this.m13)}, ${e(this.m23)}, ${e(this.m33)}, ${e(this.m43)}`+`\n${e(this.m14)}, ${e(this.m24)}, ${e(this.m34)}, ${e(this.m44)}`}static fromMatrix(t,e){let r;return"string"==typeof t?r=new DOMMatrix(t):("e"in t||(t.e=t.tx||t.dx),"f"in t||(t.f=t.ty||t.dy),r=DOMMatrix.nativeFromMatrix(t)),r.multiplicationType=e||t.multiplicationType||DOMMatrix.MultiplicationType.POST,r}static fromTranslate(t){let e=isFinite(t)?{tx:t,ty:t}:{tx:t.x,ty:t.y};return DOMMatrix.fromMatrix(e)}static fromRotate(t,e){let r=Math.sin(t),i=Math.cos(t),n={a:i,b:r,c:-r,d:i};return e&&(n.tx=e.x-e.x*i+e.y*r,n.ty=e.y-e.x*r-e.y*i),DOMMatrix.fromMatrix(n)}static fromScale(t,e){isFinite(t)&&(t={x:t,y:t});let r={a:t.x,d:t.y};return e&&(r.tx=e.x-e.x*t.x,r.ty=e.y-e.y*t.y),DOMMatrix.fromMatrix(r)}static fromPoints(t,e){let r=DOMMatrix.fromMatrix({m11:t[0].x,m21:t[1].x,m31:t[2].x,m12:t[0].y,m22:t[1].y,m32:t[2].y,m13:1,m23:1,m33:1}),i=DOMMatrix.fromMatrix({m11:e[0].x,m21:e[1].x,m31:e[2].x,m12:e[0].y,m22:e[1].y,m32:e[2].y,m13:1,m23:1,m33:1}),n=r.invert().preMultiply(i);return DOMMatrix.fromMatrix({a:n.m11,b:n.m12,c:n.m21,d:n.m22,tx:n.m31,ty:n.m32})}static extend(){if("undefined"==typeof DOMMatrix||DOMMatrix.nativeFromMatrix)return!1;DOMMatrix.nativeFromMatrix=DOMMatrix.fromMatrix,DOMMatrix.prototype.nativeToString=DOMMatrix.prototype.toString,DOMMatrix.prototype.postMultiply=DOMMatrix.prototype.multiply,DOMMatrix.prototype.postMultiplySelf=DOMMatrix.prototype.multiplySelf,t.extend("DOMMatrix",this)}}var a=Object.freeze({__proto__:null,ObjectExt:class extends t{static equals(t,e){if(t===e)return!0;if(!(t instanceof Object&&e instanceof Object))return!1;if(t.constructor!==e.constructor)return!1;if(t instanceof Array||ArrayBuffer.isTypedArray(t))return t.length==e.length&&t.every(((t,r)=>Object.equals(t,e[r])));for(let r in t)if(t.hasOwnProperty(r)){if(!e.hasOwnProperty(r))return!1;if(t[r]!==e[r]){if("object"!=typeof t[r])return!1;if(!Object.equals(t[r],e[r]))return!1}}for(let r in e)if(e.hasOwnProperty(r)&&!t.hasOwnProperty(r))return!1;return!0}static clone(t,e){let r=new Array;return function t(i){if(null===i)return null;if("object"!=typeof i||i.immutable)return i;if("function"==typeof i.clone)return i.clone();for(let t=0;t<r.length;t++)if(r[t][0]===i)return r[t][1];let n=Object.create(Object.getPrototypeOf(i));r.push([i,n]);for(let r in i)e&&"function"==typeof i[r]||i.hasOwnProperty(r)&&(n[r]=t(i[r]));return n}(t)}static toSource(t,e){if("object"==typeof t){let r=[];for(let e in t)t.hasOwnProperty(e)&&r.push(`${e}: ${Object.toSource(t[e])}`);return(e?`${e} = `:"")+"{"+r.join(", ")+"}"}if("function"==typeof t){let e=t.toString();return t.name&&e.startsWith(t.name)&&(e="function "+e),e}return t}static defineEnum(t,r,i){if(t[r])throw new Error(`Already exist property: ${r}`);let n={values:i.map(((t,i)=>new e(r,t,i)))};return n.values.forEach((t=>{Object.defineProperty(n,t.name,{value:t,enumerable:!0}),Object.defineProperty(n,t.value,{value:t,enumerable:!0})})),Object.defineProperty(t,r,{value:n,enumerable:!0}),n}},StringExt:class extends t{startsWith(t){return this.length>=t.length&&this.substring(0,t.length)==t}endsWith(t){return this.length>=t.length&&this.substring(this.length-t.length,this.length)==t}includes(t){return-1!=this.indexOf(t)}contains(t){return this.includes(t)}containsIgnoreCase(t){return-1!=this.toUpperCase().indexOf(t.toUpperCase())}pad(t,e="-"){return this.length<t?new Array(t-this.length+1).join(e)+this:this.toString()}toCharArray(t){let e=[],r=!0;for(let t=0;t<this.length;t++){let i=this.charCodeAt(t);i>255&&(r=!1),e[t]=i}if(t){if(!r)throw new Error("Current value is not byte string");e=new Uint8Array(e)}return e}static fromCharArray(t){let e="";try{e=String.fromCharCode.apply(null,t)}catch(r){for(let r=0;r<t.length;r++)e+=String.fromCharCode(t[r])}return e}},NumberExt:r,DateExt:class extends t{format(t){let e=t;function r(t,r){let i=RegExp(`${t}+`).exec(e);if(i){let n=i[0],s=n.replace(new RegExp(n.substring(0,1),"g"),"0");"Y"==t&&"YY"==n&&(r=parseInt(r.toString().substring(2))),e=e.replace(n,r.format(s))}}if(r("Y",this.getFullYear()),r("M",this.getMonth()+1),r("D",this.getDate()),r("h",this.getHours()),r("m",this.getMinutes()),r("s",this.getSeconds()),r("S",this.getMilliseconds()),e.match(/[a-zA-Z]/))throw new Error(`Invalid pattern found in ${t}: ${e.match(/[a-zA-Z]+/)[0]}`);return e}},FunctionExt:class extends t{static properties={body:{get:function(){let t=this.toString();return t=t.substring(t.indexOf("{")+1,t.lastIndexOf("}")),t},configurable:!0}};static createClass(t,e){return new Function(e?e.name:void 0,`return class ${t}${e?` extends ${e.name}`:""} {\n\t\t\tconstructor() {\n\t\t\t\t${e?"super(...arguments);":""}\n\t\t\t}\n\t\t}`)(e)}},ArrayExt:class extends t{static properties={first:{get:function(){return this[0]},configurable:!0},last:{get:function(){return this[this.length-1]},configurable:!0}};clear(){this.length=0}includes(t){return this.indexOf(t)>-1}clone(){if(!Object.clone)throw new Error("Object extension is required");return this.map((t=>Object.clone(t)))}unique(){return this.filter(((t,e)=>this.indexOf(t)==e))}add(t){return!this.includes(t)&&(this.push(t),!0)}insert(t,e=0){this.splice(e,0,t)}indicesOf(t){let e=[],r=this.indexOf(t);if(-1!=r){e.push(r);let i=this.lastIndexOf(t);for(;i>r;)r=this.indexOf(t,r+1),e.push(r)}return e}remove(...t){return(t=>{let e=[],r=-1;return t.forEach((t=>{r-t!=1&&e.push([]),e.last.push(t),r=t})),e})(t.map((t=>this.indicesOf(t))).flat().sort(((t,e)=>e-t))).forEach((t=>this.removeAt(t.last,t.length))),this}removeAt(t,e=1){return t>-1&&this.splice(t,e),this}replace(t,e,r){let i=this.indexOf(t);return i>-1&&(!r&&e instanceof Array?this.splice(i,1,...e):this.splice(i,1,e)),this}static from(t){return Array.prototype.slice.call(t)}},ArrayBufferExt:class extends t{toBase64(){if(!String.fromCharArray)throw new Error("String extension is required");let t=new Uint8Array(this);return btoa(String.fromCharArray(t))}static fromBase64(t){if(!String.prototype.toCharArray)throw new Error("String extension is required");return atob(t).toCharArray(!0).buffer}static isTypedArray(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}},SharedArrayBufferExt:i,TypedArrayExt:class extends t{clone(){if("undefined"!=typeof SharedArrayBuffer&&this.buffer instanceof SharedArrayBuffer){let t=new SharedArrayBuffer(this.byteLength),e=new this.constructor(t);return e.set(this,this.byteOffset),e}return new this.constructor(this,this.byteOffset,this.length)}concat(...t){let e,r=this.length,i=this.length;return t.forEach((t=>{if(this.constructor!=t.constructor)throw new Error(`Concat array from wrong type detected - expected ${this.constructor.name}, found ${t.constructor.name}`);r+=t.length})),e="undefined"!=typeof SharedArrayBuffer&&this.buffer instanceof SharedArrayBuffer?this.constructor.createSharedInstance(r):new this.constructor(r),e.set(this),t.forEach((t=>{e.set(t,i),i+=t.length})),e}toArray(){return Array.from(this)}static createSharedInstance(t=0){if(t instanceof this)return"undefined"==typeof SharedArrayBuffer||t.buffer instanceof SharedArrayBuffer?t:new this(i.fromArrayBuffer(t.buffer));if("number"!=typeof t&&!Array.isArray(t))throw new Error("Expected data type is Array");let e="number"==typeof t?t:t.length;if("undefined"==typeof SharedArrayBuffer)return new this("number"==typeof t?e:t);{let r=new SharedArrayBuffer(e*this.BYTES_PER_ELEMENT);if("number"==typeof t)return new this(r);{let e=new this(r);return e.set(t),e}}}static from(t){return new this(t)}static extend(){n.forEach((e=>{if(t.extend(e+"Array",this)){let t=globalThis[e+"Array"];Array.prototype["to"+e+"Array"]=function(){return t.from(this)}}}))}},SetExt:class extends t{map(t){let e=new Set;for(let r of this)r=t(r),r&&e.add(r);return e}filter(t){let e=new Set;for(let r of this)t(r)&&e.add(r);return e}},ScreenExt:class extends t{static properties={size:{get:()=>({width:Math.floor(screen.width),height:Math.floor(screen.height)}),configurable:!0},resolution:{get:()=>({width:Math.floor(screen.width*devicePixelRatio),height:Math.floor(screen.height*devicePixelRatio)}),configurable:!0}}},LocationExt:class extends t{static get properties(){return{query:{get:function(){if(!this._query){let t=Object.assign({},...this.search.substring(1).split("&").filter((t=>t)).map((t=>t.split("="))).map((t=>({[t[0]]:decodeURIComponent(t[1])}))));Object.defineProperty(this,"_query",{value:t})}return this._query},configurable:!0}}}},HTMLElementExt:class extends t{getInlineStyle(t){return this.style[t]||this.style["-webkit-"+t]||this.style["-khtml-"+t]||this.style["-moz-"+t]||this.style["-ms-"+t]||this.style["-o-"+t]||""}setStyle(t,e){["-webkit","-khtml","-moz","-ms","-o"].forEach((r=>this.style[r+"-"+t]=e)),this.style[t]=e}getStyle(t){let e=t,r=t.startsWith("-");r&&(e=t.substring(1));let i=e.split("-");for(let t=i.length-1;t>0;t--)i[t]=i[t].substring(0,1).toUpperCase()+i[t].substring(1);e=i.join("");let n=this.style.display,s=this.style.visibility;"none"==n&&(this.style.visibility="hidden",this.style.display="");let o=window.getComputedStyle(this)[e];if(!r&&void 0===o){let e=["-webkit","-khtml","-moz","-ms","-o"];for(let r=0;r<e.length&&(o=this.getStyle(e[r]+"-"+t),"undefined"==o);r++);}return"none"==n&&(this.style.visibility=s,this.style.display="none"),o}getMathStyle(t,e){let r=e?this.getInlineStyle(t):this.getStyle(t);return"auto"==r&&(r=0),parseFloat(r)}getTransformStyle(){let t={translate:{x:0,y:0},scale:{x:1,y:1},rotate:{angle:0},skew:{angleX:0,angleY:0},matrix:{a:1,b:0,c:0,d:1,tx:0,ty:0}},e=this.getStyle("transform");if("none"!=e){let r=e.substring(e.indexOf("(")+1,e.indexOf(")")).split(/,\s*/g),i=parseFloat(r[0]),n=parseFloat(r[1]),s=parseFloat(r[2]),o=parseFloat(r[3]),a=parseFloat(r[4]),h=parseFloat(r[5]);t.scale={x:Math.sqrt(i*i+s*s),y:Math.sqrt(o*o+n*n)},t.skew={angleX:Math.tan(s),angleY:Math.tan(n)},t.rotate={angle:Math.atan2(n,i)},t.translate={x:a,y:h},t.matrix={a:i,b:n,c:s,d:o,tx:a,ty:h}}return t}toRect(){let t=this.style.display,e=this.style.visibility;"none"==t&&(this.style.visibility="hidden",this.style.display="");let r=this.offsetWidth+this.getMathStyle("margin-left")+this.getMathStyle("margin-right"),i=this.offsetHeight+this.getMathStyle("margin-top")+this.getMathStyle("margin-bottom"),n=new DOMRect(this.offsetLeft,this.offsetTop,this.offsetWidth,this.offsetHeight);return n.outerSize=new DOMSize(r,i),"none"==t&&(this.style.visibility=e,this.style.display="none"),n}},HTMLImageElementExt:class extends t{toDataURL(t="png"){let e=document.createElement("canvas");return e.width=this.width,e.height=this.height,e.getContext("2d").drawImage(this,0,0),e.toDataURL(`image/${t}`)}toBlob(t="png"){return new Blob([this.toArrayBuffer(t)],{type:`image/${t}`})}toArrayBuffer(t){if(!ArrayBuffer.fromBase64)throw new Error("ArrayBuffer extension is required");let e=this.toDataURL(t).split(",")[1];return ArrayBuffer.fromBase64(e)}},ImageExt:class extends t{static fromBytes(t,e="png",r=new Image){return new Promise(((i,n)=>{r.onload=()=>{URL.revokeObjectURL(r.src),i(r)},r.onerror=n,r.src=URL.createObjectURL(new Blob([t.buffer||t],{type:`image/${e}`}))}))}},DOMPointExt:class extends t{transform(t){return t instanceof DOMMatrix||(t=DOMMatrix.fromMatrix(t)),this.matrixTransform(t)}toString(){return`point(${this.x}, ${this.y}, ${this.z})`}},DOMRectExt:class extends t{static properties={size:{get:function(){return new s(this.width,this.height)},configurable:!0},center:{get:function(){return new DOMPoint((this.left+this.right)/2,(this.top+this.bottom)/2)},configurable:!0}};union(t){return t?DOMRect.ofEdges(Math.min(this.left,t.left),Math.min(this.top,t.top),Math.max(this.right,t.right),Math.max(this.bottom,t.bottom)):this}intersect(t){if(!t)return;let e=DOMRect.ofEdges(Math.max(this.left,t.left),Math.max(this.top,t.top),Math.min(this.right,t.right),Math.min(this.bottom,t.bottom));return e.width>0&&e.height>0?e:void 0}ceil(t){let e=Math.floor(this.left),r=Math.floor(this.top),i=Math.ceil(this.right),n=Math.ceil(this.bottom);if(t){let t=this.width,s=this.height;t+=t%2,s+=s%2,i=e+t,n=r+s}return DOMRect.ofEdges(e,r,i,n)}floor(t){let e=Math.ceil(this.left),r=Math.ceil(this.top),i=Math.floor(this.right),n=Math.floor(this.bottom);if(t){let t=this.width,s=this.height;t-=t%2,s-=s%2,i=e+t,n=r+s}return DOMRect.ofEdges(e,r,i,n)}contains(t){return this.left<=t.x&&this.right>=t.x&&this.top<=t.y&&this.bottom>=t.y}transform(t){t instanceof DOMMatrix||(t=DOMMatrix.fromMatrix(t));let e=DOMPoint.fromPoint({x:this.left,y:this.top}).transform(t),r=DOMPoint.fromPoint({x:this.right,y:this.top}).transform(t),i=DOMPoint.fromPoint({x:this.left,y:this.bottom}).transform(t),n=DOMPoint.fromPoint({x:this.right,y:this.bottom}).transform(t),s=Math.min(e.x,r.x,i.x,n.x),o=Math.min(e.y,r.y,i.y,n.y),a=Math.max(e.x,r.x,i.x,n.x),h=Math.max(e.y,r.y,i.y,n.y);return DOMRect.ofEdges(s,o,a,h)}matrixTransform(t){return this.transform(t)}toPath(){let t=[];return t.push(this.left,this.top),t.push(this.right,this.top),t.push(this.right,this.bottom),t.push(this.left,this.bottom),t.push(this.left,this.top),t.toFloat32Array()}toString(){return`rect(${this.x}, ${this.y}, ${this.width}, ${this.height})`}static ofEdges(t,e,r,i){return new DOMRect(t,e,r-t,i-e)}static extend(){t.extend("DOMRect",this)&&(globalThis.DOMSize=s)}},DOMMatrixExt:o}),h="1.0.3";"undefined"==typeof globalThis&&("undefined"!=typeof window?window.globalThis=window:"undefined"!=typeof self?self.globalThis=self:"undefined"!=typeof global&&(global.globalThis=global)),globalThis.JS_EXT_SCOPE||Object.defineProperty(globalThis,"JS_EXT_SCOPE",{value:["Object","String","Number","Date","Function","Set","Array","ArrayBuffer","SharedArrayBuffer","TypedArray","Screen","Location","HTMLElement","HTMLImageElement","Image","DOMPoint","DOMRect","DOMMatrix"],enumerable:!0,configurable:!0}),globalThis.JS_EXT_SCOPE.forEach((t=>{let e=a[`${t}Ext`];if(!e)throw new Error(`Extension ${t} not found`);e.extend(t)})),Math.toDegrees=function(t){return t*(180/this.PI)},Math.toRadians=function(t){return t*(this.PI/180)},Math.randomInt=function(t,e){return Math.floor(this.random()*(e-t+1))+t},"function"==typeof Worker&&(Worker.prototype.on=function(t,e){this[`on${t}`]=r=>{let i="message"==t?r.data:r;e(i)}}),"function"==typeof DedicatedWorkerGlobalScope&&(DedicatedWorkerGlobalScope.prototype.on=function(t,e){this[`on${t}`]=r=>{let i="message"==t?r.data:r;e(i)}});export{t as Extension,h as version};
