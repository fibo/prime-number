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
module.exports = primeNumber
