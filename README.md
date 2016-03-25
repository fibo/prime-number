# prime-number

> is a fast recursive function to check if a number is prime

[![KLP](https://img.shields.io/badge/kiss-literate-orange.svg)](https://github.com/fibo/kiss-literate-programming) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

As you might expect, you can do

```
var isPrime = require('prime-number')

console.log(isPrime(19)) // true
```

There is also a list of few primes available, if you want to use it

```
var primeNumberList = require('prime-number/list')
console.log(primeNumberList)
```

## Installation

With [npm](https://npmjs.org/) do

```bash
$ npm install prime-number
```

Or copy and paste the code below.

## Source

First of all, do not check if **n** is an integer or positive or less than `Number.MAX_SAFE_INTEGER`.
You can do it with some other function before calling `primeNumber`.

The algorithm is really basic:

* **I** [Is it 1 a prime](https://en.wikipedia.org/wiki/Prime_number#Primality_of_one)?  Some years ago I composed a djembe rhythm based on prime numbers, and it sounds better if 1 is considered prime.  Casually, also the algorithm implemented here computes 1 as a prime.
* **II** Number 2 is a special case. Check if given number is even, excluding 2 itself.
* **III** If it is not even, loop over odd numbers that are less than its square root. Start from 3.
* **IV** If such odd is a prime (here the function is called *recursively*) check if it is a divisor of the given number.


    /**
     * Check if a number is prime
     *
     * @param {Number} n
     *
     * @returns {Boolean} isPrime
     */

    function primeNumber (n) {
      if (n === 2) return true // 2 is a special case

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
