const test = require('./test')
/**
 * Fibonacci number
 * 
 * @param {*} num 
 */
const fib = index => {
  let cacheArr = [0,1]
  const fibSub = n => {
    cacheArr[n] = cacheArr[n] !== undefined ? cacheArr[n] : fibSub(n - 1) + fibSub(n - 2)
    return cacheArr[n]
  }
  return index > 0 ? fibSub(index) : 0
}

let validateArr = [0, 1, 1, 2, 3, 5, 8, 13, 21].map((n, i) => ({input: i, output: n}))
let performanceArr = [10, 100, 1000]

test.resolve(fib)
.validate(validateArr)
.perfermance(performanceArr)
