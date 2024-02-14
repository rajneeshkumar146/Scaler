// The Symbol data type in JavaScript is a unique and immutable value that is guaranteed to be a unique identifier 
// and can be used as a property key in objects. They are often used to prevent property key collisions when working with objects.

// const str1 = "hello";
// const str2 = "hello";

// console.log(str1 === str2);


// const arr1 = [1,2,3];
// const arr2 = [1,2,3];

// console.log(arr1 === arr2);


let sym = Symbol("hi");
// let sym2 = Symbol("hi");
// console.log("symbol", sym);
// console.log("symbol", sym2);
// console.log(sym==sym2);

let obj = {
    "key1": "Hello",
    key2: "hi",
    [sym]: "hello2"   // It is not iterable so I can treat this as a symbol.
}

for(let key in obj){
    console.log(key ," : ", obj[key]);
}

console.log("32: ", obj[sym]);



// We have created two symbols (symbol1 and symbol2) with the same description.
// However, symbols are always unique, so symbol1 and symbol2 are not equal.
// We then use a symbol as a property key in an object (person), demonstrating how symbols can be used to avoid property key collisions.
// Additionally, we show how to access the description of a symbol.
