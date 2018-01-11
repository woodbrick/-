const validateEvery = func => validateArr => validateArr.every(validate => validate)
const perfermanceTime = func => {
  let startTime = (new Date()).getTime()
  func()
  return (new Date()).getTime() - startTime
}
class Test {
  constructor(func) {
    this.func = func
  }
  validate(validateArr) {
    console.log(`${validateEvery(this.func)(validateArr) ? 'Accpected' : 'Rejected'}`)
    return this
  }
  perfermance(perfermanceArr) {
    perfermanceArr.forEach(func => {
      console.log(`cost ${perfermanceTime(func)}`)
    })
    return this
  }
}
module.exports = {
  resolve(func) {
    return new Test(func)
  }
}
