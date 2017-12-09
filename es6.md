## 箭头函数
 - 不绑定this
 - 不绑定agruments
 - 不能做构造器
 - 没有Prototype
 - 不能使用yeild关键字
 - 可以使用async await
 - 使用括号返回字面量
    ```js
      let getDateObj = () => ({date: new Date()})
    ```


## async await
  - 改进回调函数，语法同步化
    ```js
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
    ```