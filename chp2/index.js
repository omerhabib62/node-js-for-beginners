///////////////////////////////////////////////////////////////////////////
//NodeJS Notes:
//-> For files, use fs in common JS
//-> readFile('filelocation', callback);
//-> Functions in node will be async , i.e  readfile will read file but it will cover the next step and wait till those steps are done and then output is printed in readFile callback()
//-> Better way to provide path for readFile is given in (2) than (1) because sometimes / can be problem if urls are dynamic
//-> __dirname : available in node to get project path
//////////////////////////////////////////////////////////////////////////////


// const fs = require('fs');
const fsPromises = require('fs').promises;
const path= require('path');

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt') , 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt') , data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt') , '\n\nNice to meet you.');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt') , path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt') , 'utf8');
        console.log(newData);
    }
    catch(err){
        console.error(err);
    }
}


fileOps();

//(1)
// fs.readFile('./files/starter.txt', 'utf8', (err,data) => {
//     if(err) throw err;
//     // console.log(data); //return file in form of memory address
//     console.log(data); //return file content in string
// });

//(2)
// fs.readFile(path.join(__dirname, 'files','starter.txt' ), 'utf8', (err,data) => {
//     if(err) throw err;
//     // console.log(data); //return file in form of memory address
//     console.log(data); //return file content in string
// });

// console.log("hello....");


// fs.writeFile(path.join(__dirname, 'files','reply.txt' ), 'Nice to meet you!',(err,data) => {
//     if(err) throw err;
//     // console.log(data); //return file in form of memory address
//     console.log('Write Completed'); //return file content in string
// });

// fs.appendFile(path.join(__dirname, 'files','test.txt' ), 'Testing code!',(err,data) => {
//     if(err) throw err;
//     // console.log(data); //return file in form of memory address
//     console.log('Append Completed'); //return file content in string
// });


// fs.writeFile(path.join(__dirname, 'files','reply.txt' ), 'Nice to meet you!',(err,data) => {
//     if(err) throw err;
//     // console.log(data); //return file in form of memory address
//     console.log('Write Completed'); //return file content in string

//     fs.appendFile(path.join(__dirname, 'files','reply.txt' ), '\n\nOk yes yes!',(err,data) => {
//         if(err) throw err;
//         // console.log(data); //return file in form of memory address
//         console.log('Append Completed'); //return file content in string

//         fs.rename(path.join(__dirname, 'files','reply.txt'), path.join(__dirname, 'files','newReply.txt'), (err) =>{
//             if(err) throw err;
//             console.log('Rename Completed!');
//         });
//     });
// });

//exit on this exception('uncaughtException' - is to perform synchronous cleanup of allocated resources [e.g. file descriptors, handles, etc] )before shutting down the process.
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});