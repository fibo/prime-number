module.exports = function benchmark (isPrime, from, to) {
  console.time('Primality benchmark')

  let countPrimes = 0

  for (let i = from; i <= to; i++) if (isPrime(i)) countPrimes++

  if (countPrimes === 0) {
    console.log('No prime number found')
  }

  if (countPrimes === 1) {
    console.log('Found 1 prime')
  }

  if (countPrimes > 1) {
    console.log(`Found ${countPrimes} primes`)
  }

  console.timeEnd('Primality benchmark')
}
