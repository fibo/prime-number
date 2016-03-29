/**
 * Benchmark a primality algorythm
 *
 * @param {Function} isPrime
 *
 * @returns {Function} checkPrimality (from, to)
 */
function benchmark (isPrime) {
  /**
   * Primality check on given range
   *
   * @param {Number} from
   * @param {Number} to
   */
  return function checkPrimality (from, to) {
    console.time('primality benchmark')

    var countPrimes = 0

    for (var i = from; i <= to; i++) if (isPrime(i)) countPrimes++

    console.log(`Found ${countPrimes} primes`)

    console.timeEnd('primality benchmark')
  }
}

module.exports = benchmark
