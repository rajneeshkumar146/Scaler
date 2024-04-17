// statement 1 -------------------------------------------------

// let arr = [1, 2, 3, 4];

// console.log(typeof arr);

// arr.push("hello")
// console.log(arr);

// arr ->[p] Array ->[p] Object->[p] null
// Array -> all the method required by every array

// using an inherited property
// console.log(arr.toString());

// advantage  of  inheritance -> 
// 1. Reuse of code
// 2. Multiple child objects can access the single method of parent.
// 3. Save memory space


//  classes in JS -> abstraction so that java dev can also 


// statement 2 -------------------------------------------------

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5, 6];


// bad way of giving a feature************
// arr1.sum = function () {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// arr2.sum = function () {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// console.log(arr1);
// arr1.sum();
// arr2.sum();




/************* parent ************/
 Array.prototype.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum = sum + this[i];
    }
    console.log(sum);
}

// usecase of this and prototype
arr1.sum();
arr2.sum();
console.log(arr1);



// i am admant -> i will keep on my own -> borrow for once 
// bind , call ,apply