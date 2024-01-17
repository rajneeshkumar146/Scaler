// 1st statement: Function
// defination

function fn(param1) {
    console.log("hello world! ", param1);
    return    // Js will add a semicolon here, to avoid this use linter[eg., eslint]
    "my name is khan"
}

var rVal = fn();
console.log("Value of rVal: " + rVal);
console.log("typeof of fn: " + typeof fn);

// 2nd statement: Object
let cap = {
    name: "Steve",
    'last Name': "Rogers",
    isAvenger: true,
    address: {
        city: "manhatten",
        state: "Newyork"
    },
    sayHi: function () {
        console.log("Cap say's HI");
    },
    movies: ["Avenger", "civile War"],
    2: "random thing",
    key: "Surprise"
}

// console.log(cap);
console.log("one way to print: " + cap['name'], " another way to print:  " + cap.name);

for (let key in cap) {
    console.log("My key is: " + key + ", value against it using cap[key]: " + cap[key] + " and using cap.key: " + cap.key);
}


// Example:
function fun(objectParam1, keyParam) {
    // want to print the value.
    console.log(objectParam1[keyParam]);
}


