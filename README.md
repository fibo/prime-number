# prime-number

> is a slow recursive function to check if a number is prime (and a benchmark to test how slow it is :)

[![KLP](https://img.shields.io/badge/kiss-literate-orange.svg)](https://github.com/fibo/kiss-literate-programming)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

**Table of Contents**

* [Usage](#usage): isPrime, list, benchmark.
* [Installation](#installation): with npm or copy and paste.
* [Source](#source): embedded in this file.
* [License](#license): MIT.

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

> My algorithm sucks! 🐸

```bash
# node -e "require('prime-number/benchmark')(require('is-prime'))(100000, 10000000)"
Found 654987 primes
primality benchmark: 2.333s

# node -e "require('prime-number/benchmark')(require('check-prime'))(100000, 10000000)"
Found 654987 primes
primality benchmark: 10.247s

# node -e "require('prime-number/benchmark')(require('prime-number'))(100000, 10000000)"
Found 654987 primes
primality benchmark: 22.102s
```

## Installation

With [npm](https://npmjs.org/) do

```bash
npm install prime-number
```

Or copy and paste the code below.

## Source

First of all, do not check if **n** is an integer or positive or less than `Number.MAX_SAFE_INTEGER`.
You can do it with some other function before calling `primeNumber`.

The algorithm is really basic:

* **I** First of all: [is it 1 a prime](https://en.wikipedia.org/wiki/Prime_number#Primality_of_one)?  Some years ago I composed a djembe rhythm based on prime numbers, and it sounds better if 1 is considered prime.  Casually, also the algorithm implemented here computes 1 as a prime.
* **II** Number 2 is a special case. Check if given number is even, excluding 2 itself.
* **III** If it is not even, loop over odd numbers that are less than its square root. Start from 3.
* **IV** If such odd is a prime (here the function is called *recursively*) check if it is a divisor of the given number.
* **V** use a memoize technique, avoid computing twice.

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

  if (num === 2) return true // 2 is a special case

  if (num % 2 === 0) return false // a prime number other than 2, is odd

  for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
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
