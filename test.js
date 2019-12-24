const primeNumber = require('./prime-number.js')
const test = require('tape')

const primes = require('./list.js')

test('primeNumber', function (t) {
  t.ok(primeNumber(1))
  t.ok(primeNumber(2))
  t.ok(primeNumber(3))

  primes.forEach(function (p) {
    t.notOk(primeNumber(p - 1), p - 1)
    t.ok(primeNumber(p), p)
    t.notOk(primeNumber(p + 1), p + 1)
  })

  t.end()
})
