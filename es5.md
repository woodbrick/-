## getter setter
  - 绑定函数到对象属性上，赋值或获取时触发
    ```js
    let obj = {
      member: ['first','second'],
      get count() {
        return this.member.length
      },
      set newNember(str) {
        this.member.push(str)
      }
    }
    console.log(obj.count) // 2
    obj.newNember = 'third'
    console.log(obj.count) // 3
    ```
  - 可通过 delete 操作符删除 getter
    ```js
    delete obj.count
    ```
  - 可以通过defineProperty来定义
    ```js
    var o = { number: 3, index: 2 }

    Object.defineProperty(o, "pow", { 
      get: function() {
        return Math.pow(this.number, this.index)
      } ,
      set: function(index) {
        this.index = index
      }
    });

    console.log(o.pow) // 9
    o.pow = 3
    console.log(o.pow) // 27
    ```
  - Vue框架在编译阶段，会遍历组件属性，并且转化为 getter/setters， 监听数据变化。
  而数组对象每个元素本身并非属性，所以vue需要通过push()，slice()，splice()，sort() 等方法监听数组变化
  ```js
    /**
     * Walk through each property and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
    Observer.prototype.walk = function walk (obj) {
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length; i++) {
        defineReactive(obj, keys[i], obj[keys[i]]);
      }
    };
  ```