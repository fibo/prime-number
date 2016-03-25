var primeNumber = require('./index')
var test = require('tape')

var primes = require('./list')

test('primeNumber', function (t) {
  primes.forEach(function (p) {
    t.notOk(primeNumber(p - 1), p - 1)
    t.ok(primeNumber(p), p)
    t.notOk(primeNumber(p + 1), p + 1)
  })

  t.end()
})
