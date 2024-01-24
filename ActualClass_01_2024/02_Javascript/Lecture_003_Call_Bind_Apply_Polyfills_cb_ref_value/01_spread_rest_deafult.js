// Statement 1 ---------------------------------------------------------------
/* 
Default Parameter.
*/

function fn(param1, param2, param3 = "default Value") {
    console.log("Hi param are ", param1, param2, param3)
}


fn("Hi", "Hello", "Hola");
fn("Hi", "Hello")

// Statement 2 ---------------------------------------------------------------
/**
 * spread operator : copies value and ref's from one array to another for only first level
 * 
 * */

// // Example 1: Shallow Copy ---------------
// let arr = [1, 2, 3, 4, 5];

// // arr2 and arr has the same refrence.
// let arr2 = arr;
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;
// // arr2 = 300;
// console.log("actual Array: ", arr);
// console.log("modified Array: ", arr2);

// Example 2: Deep copy ----------------------

// let arr = [1, 2, [3, 4], 5, 6];
// // Spread copies value from one array to another array for the first level only.

// let arr2 = [...arr];
// arr2.pop();
// arr2.push(100);
// // arr2[2] = 300;
// arr2[2][0] = 500;

// console.log("actual Array: ", arr);
// console.log("modified Array: ", arr2);


// let arr = [1, 2, [3, 4], 5, 6];
// [value, value, ref, value, value]

// Statement 3 ---------------------------------------------------------------

let a = 10;
// copied value -> primitive types 
let b = a;
console.log("value of a : ", a, " value of b ", b);
b = 20;
console.log("value of a : ", a, " value of b ", b);

// let arr=[1,2,3,4];
// // you get the ref.
// let arr2=arr;

// let arr = [1, 2, [3, 4], 5, 6];
// [value, value, ref, value, value]

// let arr2 = [...arr];   // deep copy or I say actual copy of array.

// Statement 4 ---------------------------------------------------------------

/****
 * rest -> It is used as paremeter of fn .
 *  use you to collect remianing parameters numbers of params . 
 * ***/


function fn(param1, ...param2) {
    console.log("params are: ", param1);
    console.log("Rest paramateres: ",param2);
}

fn("Hi", "Hello");
fn("Hi", "Hello", "Natasha", "pabusingh", "sushil","vishal", "dharani", "surya");




