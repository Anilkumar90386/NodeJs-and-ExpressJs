const sayHi=require('./utils')
const {john,peter}=require('./name')
const data=require('./alternate_module')
console.log(data)
require('./3-mind')
sayHi(john)
sayHi(peter)