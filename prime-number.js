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
module.exports = primeNumber
