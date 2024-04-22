/** array is an object */

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//-------------------------- Slice ans Spliced --------------------------

// //  it gives you the copy
// // params -> starting index , ending index
// // it copies the elem from  [si to ei + 1) == [si, lastIndex), lastIndex = ei - 1, T: O(N), S: O(N)
// let slicedArr  = arr.slice(2, 5);
// console.log("slicedArr: ", slicedArr);


// // modifies the original array
// // params -> starting index , delete count, T: O(N), S: O(N)
// let splicedArr = arr.splice(2, 5);
// console.log("splicedArr: ", arr,splicedArr);

/**-------------------------- concat --------------------------*/
// It concat a two array without chainging the original array
// First parent array get copied followed by concat array so Time: O(N + M), , S: O(N + M)
// let concatArr = arr.concat([100, 200, 300]);
// console.log("concatArr: ", concatArr);
// console.log("arr",arr)

// -------------------------- split and join --------------------------
// split splits a string into an array of string with the use of a delimiter , T:O(N), S:O(N)
let str = "      Hi i am google     ".trim();  // trim remove whitespaces.
let arrStr = str.split(" ");
console.log("splitted Array: ",arrStr);

// joins the array of string into  string on the basis of delimiter, , T:O(N), S:O(N)
let joinedStr = arrStr.join("+");
console.log("joinedStr",joinedStr);

// Example where to use: search for "hi How are you" and see URL.