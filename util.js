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

