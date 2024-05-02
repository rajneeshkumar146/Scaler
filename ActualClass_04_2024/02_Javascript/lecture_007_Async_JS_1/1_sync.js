/****
 * Synchronous code-> the code that excutes line by line
 * **/


// console.log("Before");
// function fn(){
//     console.log("I'm in function.")
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

/****
 * Environemt: Browser
 *     Web API Stack:
 *         console.log -> it is not the part of JS
 *         Window -> it is not the part of JS         
 *         document -> it is not the part of JS 
 *         fetch -> it is not the part of JS 
 *         eventListner -> it is not the part of JS....
 * Enviorment: Node js
 *         console.log -> it is not the part of JS
 *         fs -> it is not the part of JS
 *         http -> it is not the part of JS 
 *         child_process -> it is not the part of JS...
 * 
 * Thumbrule:
 *      -> Environment provide you the features.
 *      -> JS provide you the logic.
 *      -> Programming lang.
 *                 [C++ -> Java] : Pointers were take care of.
 *                 [Java -> JS]  : There are no threads tp take care of.
 *  Inference : You cannot create an asynchronous fns as a programmer -> Enviornment 
 */

// let a = true;
// console.log("Before");

// setTimeout(() => {
//     a = false;
//     console.log("I will broke the while loop.");
// }, 1000);

// console.log("After");

// // while (a) { }

// let timeFuture = Date.now() + 5000;
// while(Date.now() < timeFuture){}

console.log("Before");
const cb2 = () => {
    console.log("set timeout 1");
    let timeInfuture = Date.now() + 5000;

    console.log("Before while loop: ", Date.now());
    while (Date.now() < timeInfuture) {
    }
    console.log("After while loop: ", Date.now());

}

const cb1 = () => {
    console.log("hello");
    console.log("After cb2: ", Date.now());
}
setTimeout(cb2, 1000)

setTimeout(cb1, 2000)

console.log("After");
