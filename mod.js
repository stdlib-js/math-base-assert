// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,e=Object.prototype,i=e.toString,o=e.__defineGetter__,a=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;var s=n,c=function(r,t,n){var s,c,v,l;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((c="value"in n)&&(u.call(r,t)||f.call(r,t)?(s=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=s):r[t]=n.value),v="get"in n,l="set"in n,c&&(v||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,t,n.get),l&&a&&a.call(r,t,n.set),r},v=t()?s:c;var l=function(r,t,n){v(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})};var y=function(r){return 0==(1&r)};var p=function(r){return 1==(1&r)},b=Math.sqrt,g=Math.floor,_=b,I=g,d={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0};var m=function(r){var t,n;if(I(r)!==r)return!1;if(r<=3)return r>1;if(r>9007199254740991||r%2==0)return!1;if(r<9)return!0;if(r%3==0)return!1;if(r%5==0)return!1;if(r%7==0)return!1;if(d[r])return!0;for(t=I(_(r)),n=11;n<=t;n+=210)if(r%n==0||r%(n+2)==0||r%(n+6)==0||r%(n+8)==0||r%(n+12)==0||r%(n+18)==0||r%(n+20)==0||r%(n+26)==0||r%(n+30)==0||r%(n+32)==0||r%(n+36)==0||r%(n+42)==0||r%(n+48)==0||r%(n+50)==0||r%(n+56)==0||r%(n+60)==0||r%(n+62)==0||r%(n+68)==0||r%(n+72)==0||r%(n+78)==0||r%(n+86)==0||r%(n+90)==0||r%(n+92)==0||r%(n+96)==0||r%(n+98)==0||r%(n+102)==0||r%(n+110)==0||r%(n+116)==0||r%(n+120)==0||r%(n+126)==0||r%(n+128)==0||r%(n+132)==0||r%(n+138)==0||r%(n+140)==0||r%(n+146)==0||r%(n+152)==0||r%(n+156)==0||r%(n+158)==0||r%(n+162)==0||r%(n+168)==0||r%(n+170)==0||r%(n+176)==0||r%(n+180)==0||r%(n+182)==0||r%(n+186)==0||r%(n+188)==0||r%(n+198)==0||r%(n+200)==0)return!1;return!0},N=g;var w=function(r){return N(r)===r},P=Number.POSITIVE_INFINITY,A=m,j=w,F=P;var S=function(r){return j(r)&&r>1&&r!==F&&!1===A(r)};var h=function(r){return r!=r},E=Number.NEGATIVE_INFINITY;var O=h,U=w,T=P,Z=E,C=function(r,t){var n,e=0;if(0===r)return t;if(0===t)return r;for(;0==(1&r)&&0==(1&t);)r>>>=1,t>>>=1,e+=1;for(;0==(1&r);)r>>>=1;for(;t;){for(;0==(1&t);)t>>>=1;r>t&&(n=t,t=r,r=n),t-=r}return r<<e},V=function(r,t){var n,e=1;if(0===r)return t;if(0===t)return r;for(;r%2==0&&t%2==0;)r/=2,t/=2,e*=2;for(;r%2==0;)r/=2;for(;t;){for(;t%2==0;)t/=2;r>t&&(n=t,t=r,r=n),t-=r}return e*r};var G=function(r,t){return O(r)||O(t)||r===T||t===T||r===Z||t===Z?NaN:U(r)&&U(t)?(r<0&&(r=-r),t<0&&(t=-t),r<=2147483647&&t<=2147483647?C(r,t):V(r,t)):NaN};var k=function(r,t){var n=G(r,t);return n==n&&1===n},x=k,M=w;var Y=function(r){return M(r/2)},q=P,z=E;var B=function(r){return r==r&&r>z&&r<q};var D=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var H=function(){return D&&"symbol"==typeof Symbol.toStringTag},J=Object.prototype.toString,K=J;var L=function(r){return K.call(r)},Q=Object.prototype.hasOwnProperty;var R=function(r,t){return null!=r&&Q.call(r,t)},W="function"==typeof Symbol?Symbol.toStringTag:"",X=R,$=W,rr=J;var tr=function(r){var t,n,e;if(null==r)return rr.call(r);n=r[$],t=X(r,$);try{r[$]=void 0}catch(t){return rr.call(r)}return e=rr.call(r),t?r[$]=n:delete r[$],e},nr=L,er=tr,ir=H()?er:nr,or=ir,ar="function"==typeof Float32Array;var ur="function"==typeof Float32Array?Float32Array:null,fr=function(r){return ar&&r instanceof Float32Array||"[object Float32Array]"===or(r)},sr=P,cr=ur;var vr="function"==typeof Float32Array?Float32Array:void 0,lr=function(){throw new Error("not implemented")},yr=function(){var r,t;if("function"!=typeof cr)return!1;try{t=new cr([1,3.14,-3.14,5e40]),r=fr(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===sr}catch(t){r=!1}return r}()?vr:lr,pr=ir,br="function"==typeof Uint32Array;var gr="function"==typeof Uint32Array?Uint32Array:null,_r=function(r){return br&&r instanceof Uint32Array||"[object Uint32Array]"===pr(r)},Ir=gr;var dr="function"==typeof Uint32Array?Uint32Array:void 0,mr=function(){throw new Error("not implemented")},Nr=function(){var r,t;if("function"!=typeof Ir)return!1;try{t=new Ir(t=[1,3.14,-3.14,4294967296,4294967297]),r=_r(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?dr:mr,wr=Nr,Pr=new yr(1);new wr(Pr.buffer)[0]=2139095040;var Ar,jr=Pr[0],Fr=Nr,Sr=new yr(1);new Fr(Sr.buffer)[0]=4286578688;Ar=Sr[0];var hr=jr,Er=Ar;var Or=function(r){return r==r&&r>Er&&r<hr},Ur=P,Tr=E;var Zr=function(r){return r===Ur||r===Tr},Cr=jr,Vr=Ar;var Gr=function(r){return r===Cr||r===Vr};var kr=function(r){return r!=r},xr=g;var Mr=function(r){return xr(r)===r&&r<0},Yr=E;var qr=function(r){return 0===r&&1/r===Yr},zr=Ar;var Br=function(r){return 0===r&&1/r===zr},Dr=g;var Hr=function(r){return Dr(r)===r&&r>=0},Jr=g;var Kr=function(r){return Jr(r)===r&&r<=0},Lr=Y;var Qr=function(r){return Lr(r>0?r-1:r+1)},Rr=g;var Wr=function(r){return Rr(r)===r&&r>0},Xr=P;var $r=function(r){return 0===r&&1/r===Xr},rt=jr;var tt=function(r){return 0===r&&1/r===rt};var nt=function(r){return r>=0&&r<=1},et=w;var it=function(r){return r>=-9007199254740991&&r<=9007199254740991&&et(r)};var ot=function(r){return!(!(r>>>=0)||r&r-1)},at={};l(at,"isEvenInt32",y),l(at,"isOddInt32",p),l(at,"isComposite",S),l(at,"isCoprime",x),l(at,"isEven",Y),l(at,"isFinite",B),l(at,"isFinitef",Or),l(at,"isInfinite",Zr),l(at,"isInfinitef",Gr),l(at,"isInteger",w),l(at,"isnan",h),l(at,"isnanf",kr),l(at,"isNegativeInteger",Mr),l(at,"isNegativeZero",qr),l(at,"isNegativeZerof",Br),l(at,"isNonNegativeInteger",Hr),l(at,"isNonPositiveInteger",Kr),l(at,"isOdd",Qr),l(at,"isPositiveInteger",Wr),l(at,"isPositiveZero",$r),l(at,"isPositiveZerof",tt),l(at,"isPrime",m),l(at,"isProbability",nt),l(at,"isSafeInteger",it),l(at,"isPow2Uint32",ot);export{at as default,S as isComposite,x as isCoprime,Y as isEven,y as isEvenInt32,B as isFinite,Or as isFinitef,Zr as isInfinite,Gr as isInfinitef,w as isInteger,Mr as isNegativeInteger,qr as isNegativeZero,Br as isNegativeZerof,Hr as isNonNegativeInteger,Kr as isNonPositiveInteger,Qr as isOdd,p as isOddInt32,Wr as isPositiveInteger,$r as isPositiveZero,tt as isPositiveZerof,ot as isPow2Uint32,m as isPrime,nt as isProbability,it as isSafeInteger,h as isnan,kr as isnanf};
//# sourceMappingURL=mod.js.map
