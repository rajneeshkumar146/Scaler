/** 
 * Task:
    * Serial Tasks:
    * Parallel Tasks:
 *
 * Code
 *  Asynchronous
 *  Synchronous code
 *
 * Which type of tasks are done serially
 * Serial Tasks: Dependedend Work
 * video -> 3gb -> cloud
 *  : download -> compress -> upload on our server
 * Parallel Task : task that are independent
 */


const fs = require("fs");

/**
 * synchronous function given by nodejs to read a file
 * */

// console.log("Before");
// const buffer = fs.readFileSync("./f1.txt");
// console.log("" + buffer);
// console.log("After");

/****
 *
 * Asynchrouns function to read a file
 *
 * */
// console.log("Before");
// fs.readFile("./f1.txt", function (err, data) {
//     console.log("" + data);
// });
// console.log("After");

/***
 * 1. you can block the main thread 
 * 2. given 2 files -> read them  and 
 * 3. give me the concatenated result in the order for the file supplied
 * 
 * */

// Example of serial task.
// console.log("Before");

// const content1 = fs.readFileSync("./f1.txt");
// const content2 = fs.readFileSync("./f2.txt");

// console.log("concated result: " + content1 + " & " + content2);

// console.log("After");

/***
 * 1. You do not have to block the main thread
 * 2. given  2 files -> read them  and  print the output in any order.
 *
 * */

// Example of parallel task.
// console.log("Before");

// fs.readFile("./f1.txt", function (err, data) {
//     console.log("" + data);
// });

// fs.readFile("./f2.txt", function (err, data) {
//     console.log("" + data);
// });

// console.log("After");

/***
 * 1. You do not have to block the main thread 
 * 2. given  2 files -> read them  and 
 * 3. give me the concatenated result in the order for the file supplied
 * asynchrous function -> callback -> it confirms that your function has beeen executed
 * 
 * */

console.log("Before");

fs.readFile("./f1.txt", f1cb);

function f1cb(err, content_1) {
    fs.readFile("./f2.txt", f2cb);
    
    function f2cb(err, content_2) {
        console.log("concated result: " + content_1 + " & " + content_2)
    }
}

console.log("After");