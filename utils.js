export const isNumber = number => number === +number


export const sumArr = arr => arr.reduce((pre, cur) => pre + cur, 0)

/**
 * 
 * @param fields 
 */
export const validate = fields => fields.every(field => field.isValidate())
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

export const toInt = obj => ~~obj


export const runCode = callback => {
  try {
    callback()
  } catch (e) {
    window.location.href =
      "http://stackoverflow.com/search?q=[js]+" + e.message;
  }
}

export const margeArr = (...arr) => Array.from(new Set([].concat(...arr)))

