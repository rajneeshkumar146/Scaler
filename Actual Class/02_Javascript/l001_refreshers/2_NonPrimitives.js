// 1st statement: Function

// defintion
function fn(param1) {
    console.log("Hello world!", param1);
    return                  // js will add a semicolon here. to avoid this use linter[eg., eslint]
    "my name is khan";
}
// fn call
let rVal = fn();
console.log("value of rVal " + rVal);


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
    key: "have fun"
}

console.log("one way to print: " + cap['name'], " another wayto print:  " + cap.name);

for (let key in cap) {
    console.log("My key is: " + key + ", value against it using cap[key]: " + cap[key] + " and using cap.key: " + cap.key);
}

