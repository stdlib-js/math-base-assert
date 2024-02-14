<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Assert

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base math assertion utilities.



<section class="usage">

## Usage

To use in Observable,

```javascript
ns = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert@v0.2.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ns = require( 'path/to/vendor/umd/math-base-assert/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert@v0.2.0-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ns;
})();
</script>
```

#### ns

Namespace containing "base" (i.e., lower-level) math assertion utilities.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`isEvenInt32( x )`][@stdlib/math/base/assert/int32-is-even]</span><span class="delimiter">: </span><span class="description">test if a 32-bit integer is even.</span>
-   <span class="signature">[`isOddInt32( x )`][@stdlib/math/base/assert/int32-is-odd]</span><span class="delimiter">: </span><span class="description">test if a 32-bit integer is odd.</span>
-   <span class="signature">[`isComposite( x )`][@stdlib/math/base/assert/is-composite]</span><span class="delimiter">: </span><span class="description">test if a number is a composite.</span>
-   <span class="signature">[`isCoprime( a, b )`][@stdlib/math/base/assert/is-coprime]</span><span class="delimiter">: </span><span class="description">test if two numbers are coprime.</span>
-   <span class="signature">[`isEven( x )`][@stdlib/math/base/assert/is-even]</span><span class="delimiter">: </span><span class="description">test if a finite numeric value is an even number.</span>
-   <span class="signature">[`isFinite( x )`][@stdlib/math/base/assert/is-finite]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is finite.</span>
-   <span class="signature">[`isFinitef( x )`][@stdlib/math/base/assert/is-finitef]</span><span class="delimiter">: </span><span class="description">test if a single-precision floating-point numeric value is finite.</span>
-   <span class="signature">[`isInfinite( x )`][@stdlib/math/base/assert/is-infinite]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is infinite.</span>
-   <span class="signature">[`isInfinitef( x )`][@stdlib/math/base/assert/is-infinitef]</span><span class="delimiter">: </span><span class="description">test if a single-precision floating-point numeric value is infinite.</span>
-   <span class="signature">[`isInteger( x )`][@stdlib/math/base/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is an integer.</span>
-   <span class="signature">[`isnan( x )`][@stdlib/math/base/assert/is-nan]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is NaN.</span>
-   <span class="signature">[`isnanf( x )`][@stdlib/math/base/assert/is-nanf]</span><span class="delimiter">: </span><span class="description">test if a single-precision floating-point numeric value is NaN.</span>
-   <span class="signature">[`isNegativeFinite( x )`][@stdlib/math/base/assert/is-negative-finite]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is a negative finite number.</span>
-   <span class="signature">[`isNegativeInteger( x )`][@stdlib/math/base/assert/is-negative-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a negative integer.</span>
-   <span class="signature">[`isNegativeZero( x )`][@stdlib/math/base/assert/is-negative-zero]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is negative zero.</span>
-   <span class="signature">[`isNegativeZerof( x )`][@stdlib/math/base/assert/is-negative-zerof]</span><span class="delimiter">: </span><span class="description">test if a single-precision floating-point numeric value is negative zero.</span>
-   <span class="signature">[`isNonNegativeFinite( x )`][@stdlib/math/base/assert/is-nonnegative-finite]</span><span class="delimiter">: </span><span class="description">test if a numeric value is a nonnegative finite number.</span>
-   <span class="signature">[`isNonNegativeInteger( x )`][@stdlib/math/base/assert/is-nonnegative-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a nonnegative integer.</span>
-   <span class="signature">[`isNonPositiveFinite( x )`][@stdlib/math/base/assert/is-nonpositive-finite]</span><span class="delimiter">: </span><span class="description">test if a numeric value is a nonpositive finite number.</span>
-   <span class="signature">[`isNonPositiveInteger( x )`][@stdlib/math/base/assert/is-nonpositive-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a nonpositive integer.</span>
-   <span class="signature">[`isOdd( x )`][@stdlib/math/base/assert/is-odd]</span><span class="delimiter">: </span><span class="description">test if a finite numeric value is an odd number.</span>
-   <span class="signature">[`isPositiveFinite( x )`][@stdlib/math/base/assert/is-positive-finite]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is a positive finite number.</span>
-   <span class="signature">[`isPositiveInteger( x )`][@stdlib/math/base/assert/is-positive-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a positive integer.</span>
-   <span class="signature">[`isPositiveZero( x )`][@stdlib/math/base/assert/is-positive-zero]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is positive zero.</span>
-   <span class="signature">[`isPositiveZerof( x )`][@stdlib/math/base/assert/is-positive-zerof]</span><span class="delimiter">: </span><span class="description">test if a single-precision floating-point numeric value is positive zero.</span>
-   <span class="signature">[`isPrime( x )`][@stdlib/math/base/assert/is-prime]</span><span class="delimiter">: </span><span class="description">test if a number is a prime.</span>
-   <span class="signature">[`isProbability( x )`][@stdlib/math/base/assert/is-probability]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point number is a probability.</span>
-   <span class="signature">[`isSafeInteger( x )`][@stdlib/math/base/assert/is-safe-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a safe integer.</span>
-   <span class="signature">[`isPow2Uint32( x )`][@stdlib/math/base/assert/uint32-is-pow2]</span><span class="delimiter">: </span><span class="description">test whether an unsigned integer is a power of 2.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert@v0.2.0-umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( ns ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-assert.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-assert

[test-image]: https://github.com/stdlib-js/math-base-assert/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/math-base-assert/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-assert/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-assert?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-assert.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-assert/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-assert/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-assert/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-assert/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-assert/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-assert/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-assert/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-assert/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-assert/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/base/assert/int32-is-even]: https://github.com/stdlib-js/math-base-assert-int32-is-even/tree/umd

[@stdlib/math/base/assert/int32-is-odd]: https://github.com/stdlib-js/math-base-assert-int32-is-odd/tree/umd

[@stdlib/math/base/assert/is-composite]: https://github.com/stdlib-js/math-base-assert-is-composite/tree/umd

[@stdlib/math/base/assert/is-coprime]: https://github.com/stdlib-js/math-base-assert-is-coprime/tree/umd

[@stdlib/math/base/assert/is-even]: https://github.com/stdlib-js/math-base-assert-is-even/tree/umd

[@stdlib/math/base/assert/is-finite]: https://github.com/stdlib-js/math-base-assert-is-finite/tree/umd

[@stdlib/math/base/assert/is-finitef]: https://github.com/stdlib-js/math-base-assert-is-finitef/tree/umd

[@stdlib/math/base/assert/is-infinite]: https://github.com/stdlib-js/math-base-assert-is-infinite/tree/umd

[@stdlib/math/base/assert/is-infinitef]: https://github.com/stdlib-js/math-base-assert-is-infinitef/tree/umd

[@stdlib/math/base/assert/is-integer]: https://github.com/stdlib-js/math-base-assert-is-integer/tree/umd

[@stdlib/math/base/assert/is-nan]: https://github.com/stdlib-js/math-base-assert-is-nan/tree/umd

[@stdlib/math/base/assert/is-nanf]: https://github.com/stdlib-js/math-base-assert-is-nanf/tree/umd

[@stdlib/math/base/assert/is-negative-finite]: https://github.com/stdlib-js/math-base-assert-is-negative-finite/tree/umd

[@stdlib/math/base/assert/is-negative-integer]: https://github.com/stdlib-js/math-base-assert-is-negative-integer/tree/umd

[@stdlib/math/base/assert/is-negative-zero]: https://github.com/stdlib-js/math-base-assert-is-negative-zero/tree/umd

[@stdlib/math/base/assert/is-negative-zerof]: https://github.com/stdlib-js/math-base-assert-is-negative-zerof/tree/umd

[@stdlib/math/base/assert/is-nonnegative-finite]: https://github.com/stdlib-js/math-base-assert-is-nonnegative-finite/tree/umd

[@stdlib/math/base/assert/is-nonnegative-integer]: https://github.com/stdlib-js/math-base-assert-is-nonnegative-integer/tree/umd

[@stdlib/math/base/assert/is-nonpositive-finite]: https://github.com/stdlib-js/math-base-assert-is-nonpositive-finite/tree/umd

[@stdlib/math/base/assert/is-nonpositive-integer]: https://github.com/stdlib-js/math-base-assert-is-nonpositive-integer/tree/umd

[@stdlib/math/base/assert/is-odd]: https://github.com/stdlib-js/math-base-assert-is-odd/tree/umd

[@stdlib/math/base/assert/is-positive-finite]: https://github.com/stdlib-js/math-base-assert-is-positive-finite/tree/umd

[@stdlib/math/base/assert/is-positive-integer]: https://github.com/stdlib-js/math-base-assert-is-positive-integer/tree/umd

[@stdlib/math/base/assert/is-positive-zero]: https://github.com/stdlib-js/math-base-assert-is-positive-zero/tree/umd

[@stdlib/math/base/assert/is-positive-zerof]: https://github.com/stdlib-js/math-base-assert-is-positive-zerof/tree/umd

[@stdlib/math/base/assert/is-prime]: https://github.com/stdlib-js/math-base-assert-is-prime/tree/umd

[@stdlib/math/base/assert/is-probability]: https://github.com/stdlib-js/math-base-assert-is-probability/tree/umd

[@stdlib/math/base/assert/is-safe-integer]: https://github.com/stdlib-js/math-base-assert-is-safe-integer/tree/umd

[@stdlib/math/base/assert/uint32-is-pow2]: https://github.com/stdlib-js/math-base-assert-uint32-is-pow2/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
