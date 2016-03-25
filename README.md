# prime-number

> is a fast recursive function to check if a number is prime

[![KLP](https://img.shields.io/badge/kiss-literate-orange.svg)](https://github.com/fibo/kiss-literate-programming) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Installation

With [npm](https://npmjs.org/) do

```bash
$ npm install prime-number
```

Or copy and paste the code below.

## Annotated source

First of all, do not check if **n** is an integer or positive or less than `Number.MAX_SAFE_INTEGER`.
You can do it with some other function before calling `primeNumber`.

The algorithm is really basic, just check if given number is even.
If not, loop over odd numbers that are less than its square root.
If such odd number is prime (here it is called recursively) check if it is
a divisor of the given number.

    /**
     * Check if a number is prime
     *
     * @param {Number} n
     *
     * @returns {Boolean} isPrime
     */

    function primeNumber (n) {
      if (n % 2 === 0) return false

      for (var i = 3; i < Math.sqrt(n); i = i + 2) {
        if (!primeNumber(i)) continue // <-- recursion here

        if (n % i === 0) return false
      }

      return true
    }

Export `primeNumber` function

    module.exports = primeNumber

## License

[MIT](http://g14n.info/mit-license/)
