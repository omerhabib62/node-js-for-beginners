/*
    Sometimes when reading/writing large files its better to stream file rather than read them in one go.
    Piping in NodeJS is the process by which byte data from one stream is sent to another stream. What are streams? Streams in NodeJS are a sequence of bytes. When a program processes some data it needs to read all the data into memory and then process it and write out the data back into some location.
*/

const file_system = require('fs');

const read_stream =  file_system.createReadStream('./files/lorem.txt', {encoding: 'utf-8' });

const write_stream =  file_system.createWriteStream('./files/new-lorem.txt');

/*
read_stream.on('data', (datachunk) => {
    write_stream.write(datachunk);
});
*/

read_stream.pipe(write_stream);