let sleep = milliSecond => new Promise(resolve => {
  setTimeout(resolve, milliSecond)
})
let delay = async milliSecond => {
  let start = new Date().getTime()
  console.log('Task started')
  await sleep(milliSecond)
  let end = new Date().getTime()
  console.log('Task ended, cost %s', end - start)
}
delay(1000) // 1002
