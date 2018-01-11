const test = require('./test')
/**
 * 最长公共子序列（LCS) 是一个在一个序列集合中（通常为两个序列）用来查找所有序列中最长子序列的问题
 * 
 * @param {*} num 
 */
const lcs = (s1, s2) => {
  let martix = Array.from({length: s1.length + 1}).map(_ => Array.from({length: s2.length + 1}).fill(0))
  let squence = ''
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      s1[i-1] === s2[j-1]
        ? martix[i][j] = martix[i-1][j-1] + 1 && (squence += s1[i-1])
        : Math.max(martix[i][j-1], martix[i-1][j])
    }
  }
  return squence
}

let validateArr = [
  ['abcd', 'acd', 'acd'],
  ['cnblogs', 'belong', 'blog']
].map(arr => () => lcs(...arr) === arr[2])

const generatorStr = length => {
  let str = 'abcdefghijklmnopqrstuvwxyz'
  return Array.from({length: length}).map(_ => str.charAt(Math.round(Math.random() * str.length))).join('')
}

let performanceArr = [10, 100, 1000]
.map(leng => () => {
  console.log(`performance lcs(array1(${leng}), array2(${leng}))`)
  lcs(generatorStr(leng), generatorStr(leng))
})

test.resolve(lcs)
.validate(validateArr)
.perfermance(performanceArr)
