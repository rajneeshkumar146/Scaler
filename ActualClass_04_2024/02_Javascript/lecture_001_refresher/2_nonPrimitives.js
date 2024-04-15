// 1st statement: Function

// defintion
function fn(param1) {
    console.log("Hello world!!", param1);
    return     // js will add a semcolon here. to avoid this use linter[eg., eslint]
    "hello";
}

let rVal = fn();
console.log("return Value: ", rVal);

// 2nd statement: object
let cap = {
    name: "steve",
    'last name': "Rogers",
    isAvenger: true,
    address: {
        city: "manhatten",
        state: "Newyork"
    },
    sayHi: function () {
        console.log("Cap say's Hi");
    },
    Movies: ["Avendgers", "civile war"],
    2: "random thing",
    key: "have fun"
}

console.log("one way to print: " + cap['name'], " anorther way to print: ", cap.name);

for(let key in cap){
    console.log("My key is: " + key + ", value against it using cap[key]: " + cap[key] + " and using cap.key: " + cap.key);
}
