# prime-number

> is a recursive function to check if a number is prime (and a benchmark to test slow it is :)

[![KLP](https://img.shields.io/badge/kiss-literate-orange.svg)](https://github.com/fibo/kiss-literate-programming)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

**Table of Contents**

* [Usage](#usage): isPrime, list, benchmark.
* [Installation](#installation): with npm or copy and paste.
* [Source](#source): embedded in this file.
* [License](#license): MIT.

[Is it 1 a prime](https://en.wikipedia.org/wiki/Prime_number#Primality_of_one)?  Some years ago I composed a djembe rhythm based on prime numbers, and it sounds better if 1 is considered prime. Casually, also the algorithm implemented here computes 1 as a prime.

## Usage

As you might expect, you can do

```js
const isPrime = require('prime-number')

console.log(isPrime(19)) // true
```

There is a list of few primes available, if you want to use it

```js
const primeNumberList = require('prime-number/list')
console.log(primeNumberList)
```

You can benchmark other primality check algorithms.

```js
const isPrime = require('yet-another-primality-check')
const benchmark = require('prime-number/benchmark')
const from = 1000
const to = Number.MAX_SAFE_INTEGER

benchmark(isPrime)(from, to)
```

Here there are the results, using a oneliner, of few primality check packages found on npm, so I can state that

> My algorithm run fast! 🐸

```bash
# node -e "require('prime-number/benchmark')(require('prime-number'))(100000, 10000000)"
Found 654987 primes
primality benchmark: 969.386ms

# node -e "require('prime-number/benchmark')(require('is-prime'))(100000, 10000000)"
Found 654987 primes
primality benchmark: 2.333s

# node -e "require('prime-number/benchmark')(require('check-prime'))(100000, 10000000)"
Found 654987 primes
primality benchmark: 10.247s
```

## Installation

With [npm](https://npmjs.org/) do

```bash
npm install prime-number
```

Or copy and paste the code below.

## Source

First of all, do not check if **num** is an integer or positive or less than `Number.MAX_SAFE_INTEGER`.
You can do it with some other function before calling `primeNumber`.

```javascript
// Remember if a number is prime.
const memoize = {}

/**
 * Check if a number is prime.
 *
 * @param {Number}
 *
 * @returns {Boolean}
 */

function primeNumber (num) {
  // Avoid computing twice.
  if (typeof memoize[num] === 'boolean') return memoize[num]

  if (num === 2) return true
  if (num === 3) return true
  if (num === 5) return true
  if (num === 7) return true

  if (num % 2 === 0) return false
  if (num % 3 === 0) return false
  if (num % 5 === 0) return false
  if (num % 7 === 0) return false

  for (let i = 7; i * i <= num; i = i + 2 * 3 * 5 * 7) {
    if (!primeNumber(i)) continue // <-- recursion here

    if (num % i === 0) {
      memoize[num] = false
      return false
    }
  }

  memoize[num] = true
  return true
}
```

Export `primeNumber` function

```javascript
module.exports = primeNumber
```

## License

[MIT](http://g14n.info/mit-license/)
