///////////////////////////////////////////////////////////////////////////
//NodeJS Notes:
//-> Console is in terminal(cmd) window
//-> Has Common Core modules. 
//-> Has Global object instead of Window object
//-> CommonJs modules instead of Es6 modules.
//-> Missing some JS APIs like fetch
//////////////////////////////////////////////////////////////////////////////

//Hello world as server !
console.log('Server started') 

const os = require('os'); //Common Js libary (named os)calling in Node JS
const path = require('path');
// importing modules from another file
// const math = require('./math'); 
//or directly calling all the functions in the file
const { add, subtract, multiply, divide}  = require('./math'); 

//Learning about os(common JS built in Node modules) modules
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// One way of calling those from math module
// console.log(math.add(2,3))
// console.log(math.subtract(2,3))
// console.log(math.multiply(2,3))
// console.log(math.divide(2,3))

//Another way by directly calling above const as function/ when calling exports
console.log(add(2,3))
console.log(subtract(2,3))
console.log(multiply(2,3))
console.log(divide(2,3))

//Learning about path library
// console.log(__dirname)
// console.log(__filename)
// console.log('From the __filename');
// console.log('Directory name: ',path.dirname(__filename))
// console.log('File name: ',path.basename(__filename))
// console.log('Extension name: ',path.extname(__filename))
