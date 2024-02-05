/****
 * Synchronous code-> the code that excutes line by line
 * **/

// console.log("Before");
// function fn(){
//     console.log("I'm in function.");
// }
// fn();
// console.log("After");

/***
 * Asynchronous code -> piece of code is executed at current point of time
 *  and other piece of code is executed on later part
 * 
 * */

// console.log("Before");

// function fn(){
//     console.log("I'm in function.");
// }
// setTimeout(fn, 2000);

// console.log("After");

// let a = true;
// console.log("Before");

// setTimeout(() => {
//     a = false;
//     console.log("I will broke the while loop.");
// }, 1000);

// console.log("After");

// while (a) { }

/****
 * Enviornment : Browser
    Web API :
     * console -> is not a part of js
     * window -> is not a part of js
     * document -> is not a part of js
     * fetch -> is not a part of js
     * eventListner -> is not a part of js
     * 
 * Enviornment : Nodejs
     * fs -> is not a part of js
     * Http -> nodejs
     * child_process -> nodejs
     * 
 * thumbrule:
 *     -> Environment provide you the features.
 *     -> Js provide you the logic.
 *     -> Programmers:
 *                   [C++ -> Java] : Pointers were take care of.
 *                   [Java -> JS]  : There are no threds to take care of.
 *    Inference : You cannot create an asynchronous fns as a programmer -> Enviornment               
 * 
 * 
 * */


// let a = true;
// console.log("Before");

// setTimeout(() => {
//     a = false;
//     console.log("I will broke the while loop.");
// }, 1000);

// console.log("After");

// let timeFuture = Date.now() + 5000;
// while (Date.now() < timeFuture) { }


console.log("Before");
const cb2 = () => {
    console.log("set timeout 1");
    let timeInfuture = Date.now() + 5000;

    let before = Date.now();
    console.log("Before while loop: ", before);
    while (Date.now() < timeInfuture) {
    }
    let after = Date.now();
    console.log("After while loop: ", after);
    console.log("Time spent: ", after - before);

}
const cb1 = () => console.log("hello");
setTimeout(cb2, 1000)

setTimeout(cb1, 2000)

console.log("After");

