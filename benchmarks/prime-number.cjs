const primalityCheck = require('prime-number')
const benchmark = require('./benchmark.cjs')

const result = primalityCheck(100000)
benchmark(primalityCheck, 10000, 100000)
