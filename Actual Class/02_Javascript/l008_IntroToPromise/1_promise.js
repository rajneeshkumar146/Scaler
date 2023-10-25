const fs = require("fs");

/**
 * Promise based fn -> do not take  cbs
 * -> the outcome of the promise is determined by the function that will give you the promise.
 * **/

console.log("before");

// task has started when fn is called 
const promise = fs.promises.readFile("./f1.txt");

/**
 * State of the promise-> pending
 * */
console.log(promise);
console.log("After");

setTimeout(() => {
    console.log("i after file read")
    console.log(promise);
}, 2000);
