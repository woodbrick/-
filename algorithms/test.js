const validateEvery = func => validateArr => Array.prototype.every(validate => func(validate.input) === validate.output)
const perfermanceTime = func => arg => {
  let startTime = (new Date()).getTime()
  func(arg)
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
    perfermanceArr.forEach(input => {
      console.log(`input: ${input}, cost ${perfermanceTime(this.func)(input)}`)
    })
    return this
  }
}
module.exports = {
  resolve(func) {
    return new Test(func)
  }
}
