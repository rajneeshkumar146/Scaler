// Inheritance : High Level Intro
// 1. Inheritance is related to OOPS. All OOPS languages are Java-based.
// 2. Because we need a class to create an object just like for creating a house we need the architecture of the house.
// 3. Suppose we have architecture having 1 door and 2 rooms. Now we want to create a new house with this architecture along with it we also want a swimming pool.
// 4. So we will inherit all the properties of the old architecture and add a swimming pool to it.
// 5. Then we will create a house with that new architecture.

// statement 1 -------------------------------------------------

let arr = [1, 2, 3, 4];

console.log(typeof arr);

arr.push("hello")
console.log(arr);

// myArr ->[p] Array ->[p] Object->[p] null
// Array -> all the method required by every array

// using an inherited property
console.log(arr.toString());

// advantage of inheritance
// 1. resuse of code.
// 2. saving memory space.



// statement 2 -------------------------------------------------

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5, 6];

// bad way of giving a feature************
// arr1.sum = function() {
//     let sum = 0;
//     for(let i = 0; i < this.length; i++){
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// arr2.sum = function() {
//     let sum = 0;
//     for(let i = 0; i < this.length; i++){
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// console.log(arr1);
// arr1.sum();
// arr2.sum();

/************* parent ************/
Array.prototype.sum = function() {
    let sum = 0;
    for(let i = 0; i < this.length; i++){
        sum = sum + this[i];
    }
    console.log(sum);
} 

// usecase of this and prototype
arr1.sum();
arr2.sum();



// i am admant -> i will keep on my own -> borrow for once 
// bind , call ,apply