// Remember if a number is prime or not.
const notPrimes = new Set()
const primes = new Set()

notPrimes.add(1)
primes.add(2)
primes.add(3)

function primeNumber (num) {
  // Avoid computing twice.
  if (primes.has(num)) return true
  if (notPrimes.has(num)) return false

  // Even numbers are not prime.
  if (num % 2 === 0) return false
  // Check also if it is divisible by 3.
  if (num % 3 === 0) return false

  for (
    let i = 5;
    // Do not excede the square root of num.
    i * i <= num;
    // All prime numbers are 1 or 5 modulo 6.
    // Since we start with 5,
    // this will do: 5 -> 7 -> 11 ... +2 -> +4 -> +2 -> +4 ...
    i = i % 6 === 1 ? i + 4 : i + 2
  ) {
    if (primeNumber(i)) { // <-- Recursion here!
      if (num % i === 0) {
        notPrimes.add(num)
        return false
      }
    }
  }

  primes.add(num)
  return true
}

module.exports = primeNumber
