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

# Assert

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base math assertion utilities.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-assert
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math-base-assert' );
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
-   <span class="signature">[`isNegativeInteger( x )`][@stdlib/math/base/assert/is-negative-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a negative integer.</span>
-   <span class="signature">[`isNegativeZero( x )`][@stdlib/math/base/assert/is-negative-zero]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is negative zero.</span>
-   <span class="signature">[`isNegativeZerof( x )`][@stdlib/math/base/assert/is-negative-zerof]</span><span class="delimiter">: </span><span class="description">test if a single-precision floating-point numeric value is negative zero.</span>
-   <span class="signature">[`isNonNegativeInteger( x )`][@stdlib/math/base/assert/is-nonnegative-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a nonnegative integer.</span>
-   <span class="signature">[`isNonPositiveInteger( x )`][@stdlib/math/base/assert/is-nonpositive-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a nonpositive integer.</span>
-   <span class="signature">[`isOdd( x )`][@stdlib/math/base/assert/is-odd]</span><span class="delimiter">: </span><span class="description">test if a finite numeric value is an odd number.</span>
-   <span class="signature">[`isPositiveInteger( x )`][@stdlib/math/base/assert/is-positive-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a positive integer.</span>
-   <span class="signature">[`isPositiveZero( x )`][@stdlib/math/base/assert/is-positive-zero]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is positive zero.</span>
-   <span class="signature">[`isPositiveZerof( x )`][@stdlib/math/base/assert/is-positive-zerof]</span><span class="delimiter">: </span><span class="description">test if a single-precision floating-point numeric value is positive zero.</span>
-   <span class="signature">[`isPrime( x )`][@stdlib/math/base/assert/is-prime]</span><span class="delimiter">: </span><span class="description">test if a number is a prime.</span>
-   <span class="signature">[`isProbability( x )`][@stdlib/math/base/assert/is-probability]</span><span class="delimiter">: </span><span class="description">test if a numeric value is a probability.</span>
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

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/math-base-assert' );

console.log( objectKeys( ns ) );
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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-assert.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-assert

[test-image]: https://github.com/stdlib-js/math-base-assert/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-assert/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-assert/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-assert?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-assert.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-assert/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-assert/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-assert/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-assert/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-assert/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-assert/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/base/assert/int32-is-even]: https://github.com/stdlib-js/math-base-assert-int32-is-even

[@stdlib/math/base/assert/int32-is-odd]: https://github.com/stdlib-js/math-base-assert-int32-is-odd

[@stdlib/math/base/assert/is-composite]: https://github.com/stdlib-js/math-base-assert-is-composite

[@stdlib/math/base/assert/is-coprime]: https://github.com/stdlib-js/math-base-assert-is-coprime

[@stdlib/math/base/assert/is-even]: https://github.com/stdlib-js/math-base-assert-is-even

[@stdlib/math/base/assert/is-finite]: https://github.com/stdlib-js/math-base-assert-is-finite

[@stdlib/math/base/assert/is-finitef]: https://github.com/stdlib-js/math-base-assert-is-finitef

[@stdlib/math/base/assert/is-infinite]: https://github.com/stdlib-js/math-base-assert-is-infinite

[@stdlib/math/base/assert/is-infinitef]: https://github.com/stdlib-js/math-base-assert-is-infinitef

[@stdlib/math/base/assert/is-integer]: https://github.com/stdlib-js/math-base-assert-is-integer

[@stdlib/math/base/assert/is-nan]: https://github.com/stdlib-js/math-base-assert-is-nan

[@stdlib/math/base/assert/is-nanf]: https://github.com/stdlib-js/math-base-assert-is-nanf

[@stdlib/math/base/assert/is-negative-integer]: https://github.com/stdlib-js/math-base-assert-is-negative-integer

[@stdlib/math/base/assert/is-negative-zero]: https://github.com/stdlib-js/math-base-assert-is-negative-zero

[@stdlib/math/base/assert/is-negative-zerof]: https://github.com/stdlib-js/math-base-assert-is-negative-zerof

[@stdlib/math/base/assert/is-nonnegative-integer]: https://github.com/stdlib-js/math-base-assert-is-nonnegative-integer

[@stdlib/math/base/assert/is-nonpositive-integer]: https://github.com/stdlib-js/math-base-assert-is-nonpositive-integer

[@stdlib/math/base/assert/is-odd]: https://github.com/stdlib-js/math-base-assert-is-odd

[@stdlib/math/base/assert/is-positive-integer]: https://github.com/stdlib-js/math-base-assert-is-positive-integer

[@stdlib/math/base/assert/is-positive-zero]: https://github.com/stdlib-js/math-base-assert-is-positive-zero

[@stdlib/math/base/assert/is-positive-zerof]: https://github.com/stdlib-js/math-base-assert-is-positive-zerof

[@stdlib/math/base/assert/is-prime]: https://github.com/stdlib-js/math-base-assert-is-prime

[@stdlib/math/base/assert/is-probability]: https://github.com/stdlib-js/math-base-assert-is-probability

[@stdlib/math/base/assert/is-safe-integer]: https://github.com/stdlib-js/math-base-assert-is-safe-integer

[@stdlib/math/base/assert/uint32-is-pow2]: https://github.com/stdlib-js/math-base-assert-uint32-is-pow2

<!-- </toc-links> -->

</section>

<!-- /.links -->
