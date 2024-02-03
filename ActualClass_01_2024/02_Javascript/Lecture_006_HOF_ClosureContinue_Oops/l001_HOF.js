// let arr = [1, 3, 4, 5, 6];

// // Not a good way to perform square and cube.
// // code to squre every element in the array.
// for(let i = 0; i < arr.length;i++){
//     arr[i] = arr[i] * arr[i];
// }
// console.log("arr: ", arr);

// // code to cube every element in the array.
// for(let i = 0; i < arr.length;i++){
//     arr[i] = arr[i] * arr[i] * arr[i];
// }
// console.log("arr: ", arr);


// const transform = function (arr, logic){
//     let res = [];
//     for(ele of arr){
//         res.push(logic(ele));
//     }
//     return res;
// }

// // logic of squre.
// const squreLogic = function (ele){
//     return ele * ele;
// }

// // logic of cube.
// const cubeLogic = function(ele){
//     return squreLogic(ele) * ele;
// }

// console.log("Transform to Square: ",transform(arr, squreLogic))
// console.log("Transform to Cube: ",transform(arr, cubeLogic))

/***
 * HOF  -> are the function that accepts a fn as a parameter or returns a function
 * Callbacks -> function that are passed as a paramtere to a nother are known as cb fns. 
 * They usually be called by HOFns 
 * */

/***
 * HOF -> majorly available on arrays
 *  these fn doesn't change the source array
    * foreach -> 
    * Map -> 
    * filter -> 
    * reduce -> 
    * sort -> 
 * */

/***traversal -> it is used to travsrese the arr*/
// let arr = [2,3,5,6,7,9];
// function printEleLogic(ele){
//     console.log(ele * ele);
// }

// let rVal = arr.forEach(printEleLogic);
// console.log(rVal);  // rVal is undefined in forEach.

// arr.forEach((ele) => console.log(ele * ele));

/***************Map-> It changes every element according to the cb fn*****/

// let arr = [2,3,4,5];
// // logic of squre.
// const squreLogic = function (ele){
//     return ele * ele;
// }

// // logic of cube.
// const cubeLogic = function(ele){
//     return squreLogic(ele) * ele;
// }

// let squareArr = arr.map(squreLogic);
// console.log("sqaure array: ", squareArr);

// let cubeArr = arr.map(cubeLogic);
// console.log("cube array: ", cubeArr);

// // Pollyfill of map.
// Array.prototype.myMap = function(callBackMethod){
//     let res = [];
//     for(let ele of this){
//         res.push(callBackMethod(ele));
//     }
//     return res;
// };

// console.log("Cube array result using myMap: ", arr.myMap(cubeLogic));

/*********************filter -> it filters the elem on the basis of testLogic**/
/*traverse through every elem -> elem to cb fn if cb fn returns true
-> it will add that elem to a new Arr at the end it returns the new Arr*/

// let arr = [1, 2, 3, 11, 4, 5, 34, 12];

// function isOdd(ele){
//     return ele % 2 == 1;
// }

// function isGtr5(ele){
//     return ele > 5;
// }

// // odd values.
// console.log("Odd Values: ", arr.filter(isOdd));

// // all numbers greater than 5.
// console.log("Odd Values: ", arr.filter(isGtr5));

// let arr2 = [{name: "Rajneesh", lastName: "kumar"}, {name: "Jasbir", lastName: "Singh"}, {name: "Rajneesh", lastName: "Singh"}, {name: "Jasbir", lastName: "Kumar"}];
// console.log(arr2.filter((obj) => {
//     return obj.name === "Jasbir";
// }))

// /**write ployfill of filter */

// Array.prototype.myFilter = function(logic){
//     let res = [];

//     for(ele of this){
//         if(logic(ele)){
//             res.push(ele);
//         }
//     }

//     return res;
// }

// console.log("Off value arr: ", arr.myFilter(isOdd));

/*********************reduce******************/

let elems = [1, 2, 3, 4, 5];

function sum(sumSoFar, ele) {
    return sumSoFar + ele;
}

function product(productSoFar, ele) {
    return productSoFar * ele;
}

console.log("Sum: ", elems.reduce(sum));
console.log("Product: ", elems.reduce(product));

// HW:
Array.prototype.myReduce = function (logic, intialValue) {
    let result = intialValue;
    for (let ele of this) {
        result = logic(result, ele);
    }

    return result;
}

console.log("Sum: ", elems.myReduce(sum, 0));
console.log("Product: ", elems.myReduce(product, 1));

// Array.prototype.myForEach = function (logic) {
//     for (ele of this) {
//         logic(ele);
//     }
// }

// elems.myForEach((ele) => {
//     console.log(ele * ele);
// });


















