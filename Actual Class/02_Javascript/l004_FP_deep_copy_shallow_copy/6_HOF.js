// let arr = [2, 3, 4, 5, 6, 7];
//  following DRY code to square every element in the array
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i]
// }
// console.log("arr",arr);

// // code to cube every elemnt in the array
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i] * arr[i];
// }
// console.log("arr",arr);

// Assuming that each and every element is integer/decimal.
// function transformer(arr, logic) {
//     let newArr = [];
//     for (ele of arr) {
//         newArr.push(logic(ele));
//     }

//     return newArr;
// }

// // smaller 
// function squarer(elem) {
//     return elem * elem;
// }

// function cuber(elem) {
//     return elem * elem * elem;
// }

// const squaredArr = transformer(arr, squarer);
// const cubedArr = transformer(arr, cuber);

// console.log("squaredArr", squaredArr);
// console.log("cubedArr", cubedArr);


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
// let arr = [2, 3, 4, 5];
// function printELem(elem) {
//     console.log(elem * elem);
//     return elem * elem;
// }

// let rVal = arr.forEach(printELem)
// console.log(rVal);   // In forEach returned value get ignored.

// arr.forEach((ele)=>{
//    console.log(ele * ele);
// });

/***************Map-> It changes every element according to the cb fn*****/

// let arr = [2, 3, 4, 5];
// function squarer(elem) {
//     return elem * elem;
// }
// function cuber(elem) {
//     return elem * elem * elem;
// }
// let squaredArr = arr.map(squarer);
// console.log("squaredArr", squaredArr);

// let cubedArr = arr.map(cuber);
// let cubedArr = arr.map((ele) => {
//     return ele * ele * ele;
// });
// console.log("cubedArr", cubedArr);

/**Polyfill of map*/
Array.prototype.myMap = function (logic) {
    let newArray = [];

    for (ele of this) {
        newArray.push(logic(ele));
    }

    return newArray;
}

// let squaredArr = arr.myMap(squarer);
// console.log("squaredArr", squaredArr);

// let cubedArr = arr.myMap(cuber);
// console.log("cubedArr", cubedArr);


/*********************filter -> it filters the elem on the basis of testLogic**/
/*traverse through every elem -> elem to cb fn if cb fn returns true
-> it will add that elem to a new Arr at the end it returns the new Arr*/

// let elems = [1, 2, 3, 11, 4, 5, 34, 12];

// function isOdd(elem) {
//     return elem % 2 == 1;
// }

// function isgtr5(elem) {
//     return elem > 5;
// }

// odd values
// let oddvaluesArr = elems.filter(isOdd);
// console.log("oddvaluesArr", oddvaluesArr);
// console.log("elem", elems);

// let arr = [{ "name": "Rajneeesh", "lastName": "kumar" }, { "name": "Rajneeesh", "lastName": "Sign" }, { "name": "Jasbir", "lastName": "Bano" }, { "name": "Rajneeesh", "lastName": "Swain" }, { "name": "Jasbir", "lastName": "Sign" }];
// console.log(arr.filter((obj) => {
//     return obj.name === "Jasbir";
// }));

/**write ployfill of filter */

Array.prototype.myFilter = function (logic) {
    let newArray = [];

    for (ele of this) {
        if (logic(ele)) {
            newArray.push(ele);
        }
    }

    return newArray;
}

// let oddvaluesArr = elems.myFilter(isOdd);
// console.log("oddvaluesArr", oddvaluesArr);
// console.log("elem", elems);

/*********************reduce******************/

let elems = [1, 2, 3, 4, 5];

// two parameters: acc, nextElement
function sum(sumSoFar, elem) {
    return sumSoFar + elem;
}
function product(ProductSoFar, elem) {
    return ProductSoFar * elem;
}


// console.log("sum: ", elems.reduce(sum));
// console.log("Prod: ", elems.reduce(product));

/**final version-> polyfill of reduce => HW **/
Array.prototype.myReduce = function (cb, defVal) {

}

/**final version-> polyfill of sort => HW **/

