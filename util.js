const isNumber = number => number === +number


const sumArr = arr => arr.reduce((pre, cur) => pre + cur, 0)

/**
 * 
 * @param fields 
 */
const validate = fields => fields.every(field => field.isValidate())
/*
let fields = [
  {isValidate: () => true},
  {isValidate: () => false},
  {isValidate: () => true},
]

validate(fields) // false

fields[1].isValidate = () => true
validate(fields) // true
*/

const toInt = obj => ~~obj


cons runCode = callback => {
  try {
    callback()
  } catch (e) {
    window.location.href =
      "http://stackoverflow.com/search?q=[js]+" + e.message;
  }

}
