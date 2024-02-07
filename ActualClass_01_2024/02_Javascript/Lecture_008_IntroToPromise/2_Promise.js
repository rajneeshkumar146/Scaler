const fs = require("fs");


console.log("before");

/**
 * Promise based fn -> do not take  cbs
 * -> the outcome of the promise is determined by the function that will give you the promise.
 * **/

const promise = fs.promises.readFile("./f1.txt");

/** State of promise -> pending */
console.log(promise);

setTimeout(() => {
    console.log("after few seconds.....")
    console.log(promise);
}, 2000);


console.log("after");