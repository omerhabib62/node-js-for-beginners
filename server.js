//NodeJS
//-> Console is in terminal(cmd) window
console.log('Server started')
//-> Has Common Core modules. 
//-> Has Global object instead of Window object
//-> CommonJs modules instead of Es6 modules.

const os = require('os'); //Common Js libary (named os)calling in Node JS
const path = require('path');
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)
console.log('From the __filename');
console.log('Directory name: ',path.dirname(__filename))
console.log('File name: ',path.basename(__filename))
console.log('Extension name: ',path.extname(__filename))
