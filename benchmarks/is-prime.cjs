const primalityCheck = require('is-prime')
const benchmark = require('./benchmark.cjs')

benchmark(primalityCheck, 10000, 1000000)
