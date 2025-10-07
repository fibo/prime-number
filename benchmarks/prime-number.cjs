const primalityCheck = require('prime-number')
const benchmark = require('./benchmark.cjs')

benchmark(primalityCheck, 10000, 100000)
