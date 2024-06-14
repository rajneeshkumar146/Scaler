// fs module is used tp readwrite in files.
// const fs = require("fs")   // Library which we need to import.  `import * as fs from 'node:fs'; `

// fs.readFile('file.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log("Error: ", err);
//     } else {
//         console.log("Data in file:", data);
//     }
// });

// const content = "Hello, World!";
// fs.writeFile('example.txt', content, "utf-8", ((err)=>{
//     if(err){
//         console.log("Error: ", err);
//     }else{
//         console.log("File is created");
//     }
// }));

// fs.rename("example.txt", "example2.txt", (err)=>{
//     if(err){
//         console.log("Error: ", err);
//     }else{
//         console.log("File renamed");
//     }
// });

// fs.unlink("example2.txt", (err)=>{
//     if(err){
//         console.log("Error: ", err);
//     }else{
//         console.log("File deleted");
//     }
// });

// fs.stat("dir", (err, stats)=>{
//     if(err){
//         console.log("Error: ", err);
//     }else{
//         console.log("File size: ", stats.size);
//         console.log("Is Directory: ", stats.isDirectory());
//     }
// });

const directoryName = "my-directory";

// fs.mkdir(directoryName, (err)=>{
//     if(err){
//         console.log("Error: ", err);
//     }else{
//         console.log("Directory is created");
//     }
// });

// fs.rmdir(directoryName, (err)=>{
//     if(err){
//         console.log("Error: ", err);
//     }else{
//         console.log("Directory is deleted");
//     }
// });

// const directiryPath = "./dir2";
// if(fs.existsSync(directiryPath)){
//     console.log("Directory Exist");
// }else{
//     console.log("The directory does not exist!");
// }


// const path = require("path");

// const fullPath = path.join("folder", "subfolder", "file.txt");
// console.log("full path of file is: ", fullPath);

// const absolutePath = path.resolve("folder", "subfolder", "file.txt");
// console.log("Absolute Path: ", absolutePath);

// const fileName = path.basename('./dir/file.txt');
// console.log("BaseName is: ", fileName);

// const dirName = path.dirname('/path/to/file.txt');
// console.log("Directory name: ", dirName);

// const pathInfo = path.parse('/path/to/file.txt');
// console.log("Path Info: ", pathInfo);

// Problem: "/path/to/../file.txt"   -> "/path/file.txt"
// const normalizedPath = path.normalize("/path/to/../file.txt");
// console.log(normalizedPath);


const fs = require("fs");
const sourceFilePath = "./dir/file1.txt";
const destinationFilePath = "./file2.txt";

// Create a redable stream.
const readStream = fs.createReadStream(sourceFilePath);


// Create a writable stream.
const writeStream = fs.createWriteStream(destinationFilePath);

// pipe the stream data flow.
readStream.pipe(writeStream);

readStream.on("error", (err) => {
    console.log("Error while reading the file: ", err.message);
});

readStream.on("end", () => {
    console.log("file reading and writing is completed.");
})

writeStream.on("error", (err) => {
    console.log("Error while writing in the file: ", err.message);
});

