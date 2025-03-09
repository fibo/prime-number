const primalityCheck = require('is-prime')
const benchmark = require('./benchmark.cjs')

benchmark(primalityCheck, 10000, 100000)

