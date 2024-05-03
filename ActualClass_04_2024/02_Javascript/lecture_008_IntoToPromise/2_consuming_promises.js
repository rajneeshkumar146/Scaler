const fs = require("fs");

/**
 * Promise based fn -> do not take  cbs
 * -> the outcome of the promise is determined by the function that will give you the promise.
 * **/

console.log("before");

// task has started when fn is called 
const promise = fs.promises.readFile("./f1.txt");

/**
 * then is  an event listener over promise  -> fn when promise is resolved (task is done)
 *    -> Promise gives us a method named then which is an event listener over promise and it triggers when the promise is resolved(the task is done).
 * **/

promise.then((data) => {
    console.log("My content is: " + data);
});

/***
 * catch -> is also an event listener on promises -> fn when promise is rejected(You get an error
 *    -> catch is also an event listener over promise and it triggers when the promise is rejected(you get an error).
 * */

promise.catch((err) => {
    console.log("We hit by error: " + err);
});
