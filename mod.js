// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var s=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,v=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function I(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var E=String.fromCharCode,F=isNaN,A=Array.isArray;function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,s,f,l,p;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",f=1,l=0;l<r.length;l++)if(u(n=r[l]))s+=n;else{if(e=void 0!==n.precision,!(n=N(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,F(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,F(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!F(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=F(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=I(n.arg,n.width,n.padRight)),s+=n.arg||"",f+=1}return s}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function j(r){return"string"==typeof r}function T(r){var e,t,n;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var V=Object.prototype,O=V.toString,U=V.__defineGetter__,$=V.__defineSetter__,C=V.__lookupGetter__,Z=V.__lookupSetter__;var R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||Z.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&U&&U.call(r,e,t.get),o&&$&&$.call(r,e,t.set),r};function G(r,e,t){R(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function W(r){return 0==(1&r)}function L(r){return 1==(1&r)}var M=Math.sqrt,X=Math.floor,Y={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0};function q(r){var e,t;if(X(r)!==r)return!1;if(r<=3)return r>1;if(r>9007199254740991||r%2==0)return!1;if(r<9)return!0;if(r%3==0)return!1;if(r%5==0)return!1;if(r%7==0)return!1;if(Y[r])return!0;for(e=X(M(r)),t=11;t<=e;t+=210)if(r%t==0||r%(t+2)==0||r%(t+6)==0||r%(t+8)==0||r%(t+12)==0||r%(t+18)==0||r%(t+20)==0||r%(t+26)==0||r%(t+30)==0||r%(t+32)==0||r%(t+36)==0||r%(t+42)==0||r%(t+48)==0||r%(t+50)==0||r%(t+56)==0||r%(t+60)==0||r%(t+62)==0||r%(t+68)==0||r%(t+72)==0||r%(t+78)==0||r%(t+86)==0||r%(t+90)==0||r%(t+92)==0||r%(t+96)==0||r%(t+98)==0||r%(t+102)==0||r%(t+110)==0||r%(t+116)==0||r%(t+120)==0||r%(t+126)==0||r%(t+128)==0||r%(t+132)==0||r%(t+138)==0||r%(t+140)==0||r%(t+146)==0||r%(t+152)==0||r%(t+156)==0||r%(t+158)==0||r%(t+162)==0||r%(t+168)==0||r%(t+170)==0||r%(t+176)==0||r%(t+180)==0||r%(t+182)==0||r%(t+186)==0||r%(t+188)==0||r%(t+198)==0||r%(t+200)==0)return!1;return!0}function z(r){return X(r)===r}var B=Number.POSITIVE_INFINITY;function D(r){return z(r)&&r>1&&r!==B&&!1===q(r)}function H(r){return r!=r}var J=Number.NEGATIVE_INFINITY;function K(r,e){var t=function(r,e){return H(r)||H(e)||r===B||e===B||r===J||e===J?NaN:z(r)&&z(e)?(r<0&&(r=-r),e<0&&(e=-e),r<=2147483647&&e<=2147483647?function(r,e){var t,n=0;if(0===r)return e;if(0===e)return r;for(;0==(1&r)&&0==(1&e);)r>>>=1,e>>>=1,n+=1;for(;0==(1&r);)r>>>=1;for(;e;){for(;0==(1&e);)e>>>=1;r>e&&(t=e,e=r,r=t),e-=r}return r<<n}(r,e):function(r,e){var t,n=1;if(0===r)return e;if(0===e)return r;for(;r%2==0&&e%2==0;)r/=2,e/=2,n*=2;for(;r%2==0;)r/=2;for(;e;){for(;e%2==0;)e/=2;r>e&&(t=e,e=r,r=t),e-=r}return n*r}(r,e)):NaN}(r,e);return t==t&&1===t}function Q(r){return z(r/2)}function rr(r){return r==r&&r>J&&r<B}var er="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var tr=Object.prototype.toString;var nr=Object.prototype.hasOwnProperty;var ir,ar="function"==typeof Symbol?Symbol:void 0,or="function"==typeof ar?ar.toStringTag:"";ir=er&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return tr.call(r);t=r[or],a=or,e=null!=(i=r)&&nr.call(i,a);try{r[or]=void 0}catch(e){return tr.call(r)}return n=tr.call(r),e?r[or]=t:delete r[or],n}:function(r){return tr.call(r)};var cr=ir,ur="function"==typeof Float32Array;var sr="function"==typeof Float32Array?Float32Array:null;var fr="function"==typeof Float32Array?Float32Array:void 0;var lr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,5e40]),t=e,r=(ur&&t instanceof Float32Array||"[object Float32Array]"===cr(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===B}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")},pr="function"==typeof Uint32Array;var gr="function"==typeof Uint32Array?Uint32Array:null;var dr="function"==typeof Uint32Array?Uint32Array:void 0;var vr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(pr&&t instanceof Uint32Array||"[object Uint32Array]"===cr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")},yr=new lr(1);new vr(yr.buffer)[0]=2139095040;var hr=yr[0],wr=new lr(1);new vr(wr.buffer)[0]=4286578688;var br=wr[0];function mr(r){return r==r&&r>br&&r<hr}function _r(r){return r===B||r===J}function Ir(r){return r===hr||r===br}function Er(r){return r!=r}function Fr(r){return r<0&&r>J}function Ar(r){return X(r)===r&&r<0}function Nr(r){return 0===r&&1/r===J}function Sr(r){return 0===r&&1/r===br}function kr(r){return r>=0&&r<B}function xr(r){return X(r)===r&&r>=0}function Pr(r){return r<=0&&r>J}function jr(r){return X(r)===r&&r<=0}function Tr(r){return Q(r>0?r-1:r+1)}function Vr(r){return r>0&&r<B}function Or(r){return X(r)===r&&r>0}function Ur(r){return 0===r&&1/r===B}function $r(r){return 0===r&&1/r===hr}function Cr(r){return r>=0&&r<=1}function Zr(r){return r>=-9007199254740991&&r<=9007199254740991&&z(r)}function Rr(r){return!(!(r>>>=0)||r&r-1)}var Gr={};G(Gr,"isEvenInt32",W),G(Gr,"isOddInt32",L),G(Gr,"isComposite",D),G(Gr,"isCoprime",K),G(Gr,"isEven",Q),G(Gr,"isFinite",rr),G(Gr,"isFinitef",mr),G(Gr,"isInfinite",_r),G(Gr,"isInfinitef",Ir),G(Gr,"isInteger",z),G(Gr,"isnan",H),G(Gr,"isnanf",Er),G(Gr,"isNegativeFinite",Fr),G(Gr,"isNegativeInteger",Ar),G(Gr,"isNegativeZero",Nr),G(Gr,"isNegativeZerof",Sr),G(Gr,"isNonNegativeFinite",kr),G(Gr,"isNonNegativeInteger",xr),G(Gr,"isNonPositiveFinite",Pr),G(Gr,"isNonPositiveInteger",jr),G(Gr,"isOdd",Tr),G(Gr,"isPositiveFinite",Vr),G(Gr,"isPositiveInteger",Or),G(Gr,"isPositiveZero",Ur),G(Gr,"isPositiveZerof",$r),G(Gr,"isPrime",q),G(Gr,"isProbability",Cr),G(Gr,"isSafeInteger",Zr),G(Gr,"isPow2Uint32",Rr);export{Gr as default,D as isComposite,K as isCoprime,Q as isEven,W as isEvenInt32,rr as isFinite,mr as isFinitef,_r as isInfinite,Ir as isInfinitef,z as isInteger,Fr as isNegativeFinite,Ar as isNegativeInteger,Nr as isNegativeZero,Sr as isNegativeZerof,kr as isNonNegativeFinite,xr as isNonNegativeInteger,Pr as isNonPositiveFinite,jr as isNonPositiveInteger,Tr as isOdd,L as isOddInt32,Vr as isPositiveFinite,Or as isPositiveInteger,Ur as isPositiveZero,$r as isPositiveZerof,Rr as isPow2Uint32,q as isPrime,Cr as isProbability,Zr as isSafeInteger,H as isnan,Er as isnanf};
//# sourceMappingURL=mod.js.map
