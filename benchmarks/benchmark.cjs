const primesList = require('./primesList.cjs')

module.exports = function benchmark (isPrime, from, to) {
  let countPrimes = 0
  const benchmarkLabel1 = `Count primes from ${from} to ${to}`
  console.time(benchmarkLabel1)

  for (let i = from; i <= to; i++)
    if (isPrime(i))
      countPrimes++

  console.info(`Found ${countPrimes} primes`)
  console.timeEnd(benchmarkLabel1)

  const benchmarkLabel2 = `Primality check for list of ${primesList.length} primes`
  console.time(benchmarkLabel2)
  for (let i = 0; i < primesList.length; i++) {
    if (isPrime(primesList[i] - 1))
      throw new Error(`Number ${primesList[i] - 1} is not prime`)
    if (!isPrime(primesList[i]))
      throw new Error(`Primality check failed for prime ${primesList[i]}`)
    if (isPrime(primesList[i] + 1))
      throw new Error(`Number ${primesList[i] + 1} is not prime`)
  }
  console.timeEnd(benchmarkLabel2)
}
