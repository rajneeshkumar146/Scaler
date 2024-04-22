/**
 * functions are also object
 * object : key : value pair  
 * */


// fn defintion
// function fn() {
//     let a = 10;
//     console.log("Hi I am an fn");
//     console.log("Hi I am an fn2");
//     console.log("Hi I am an fn3");
//     fn.count++;
// }

// fn.count = 0;
// fn();  // count 0 -> 1
// fn(); // count 1 -> 2

// /** method to a fn */
// fn.showCount = function () {
//     console.log("count on fn  is ", this.count);
// }
// fn.showCount();

// for (let key in fn) {
//     console.log("key: ", key, " vaue: ", fn[key]);
// }

/*documentation -> function are the object that implements callable constructor
/**Layman fn is an object that can also be called. */

/***
 *  0. function are first class citizens in JS -> 
 *  1. functions also behave as variables in JS
 *  2. Assign a variable , pass a variable as a parameter, return a variable  
 * */

/******a. assignment***/
// let a = [10, 20, 30];
// let b = a;

/**fn experssion**/
// const addrFn = function () {
//     console.log(" I am a variable that's why addrfn stores my address");
// }
// addrFn();


/**** b. pass a variable as a parameter*/

// function fn(param) {
//     console.log(" I recived a param", param);
//     if (typeof param === "function") {
//         param()
//     }
// }

// function smallerfn() {
//     console.log("I am smaller");
// }

// fn({name: "Gibran"})
// fn(smallerfn);

/***HOF -> fn that accepts or returns a fn */
// function HOF(cb) {
//     console.log("Inside HOF");
//     cb();
// }

// function smallerfn() {
//     console.log("I am smaller");
// }

// HOF(smallerfn);

// A bug in function.

// real();
// this can cause a bug 
// function real() { console.log("I am real. Always run me"); }
// function real() { console.log("No I am real one "); }
// function real() { console.log("You both are wasted"); }

// Solution of this bug.
// const real = function () { console.log("I am real. Always run me"); }
// const real = function () { console.log("No I am real one "); }
// const real = function () { console.log("You both are wasted"); }