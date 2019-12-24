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
   * @param {Number|BigInt} from
   * @param {Number|BigInt} to
   */
  return function checkPrimality (from, to) {
    console.time('primality benchmark')

    let countPrimes = 0

    for (let i = from; i <= to; i++) if (isPrime(i)) countPrimes++

    console.log(`Found ${countPrimes} primes`)

    console.timeEnd('primality benchmark')
  }
}

module.exports = benchmark
