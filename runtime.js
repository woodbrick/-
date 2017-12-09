var o = [1,2,3]

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