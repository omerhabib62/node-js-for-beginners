///////////////////////////////////////////////////////////////////////////
//NodeJS Notes:
//-> For files, use fs in common JS
//-> readFile('filelocation', callback);
//-> 
//-> 
//-> 
//////////////////////////////////////////////////////////////////////////////


const fs = require('fs');
const path= require('path');

fs.readFile('./files/starter.txt', 'utf8', (err,data) => {
    if(err) throw err;
    // console.log(data); //return file in form of memory address
    console.log(data.toString()); //return file content in string
});

//exit on this exception('uncaughtException' - is to perform synchronous cleanup of allocated resources [e.g. file descriptors, handles, etc] )before shutting down the process.
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})