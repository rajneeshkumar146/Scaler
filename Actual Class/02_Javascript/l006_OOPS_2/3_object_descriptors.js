// Metadata -> object descriptors
// DATA  -> prop                 
// value   -> value of that prop         
// writable  -> can you change 

//   it is iteratble using for in loop
// enumerable ->  can iterate over it 


let obj = {
    name: "Rajneesh",
    age: 25,
    state: "Delhi"
}

Object.defineProperty(obj, 'age', {
    value: "25",
    enumerable: false
});

Object.defineProperty(obj, 'name', {
    value: "Rajneesh",
    enumerable: false
});

Object.defineProperty(obj, 'test', {
    value: "fail",
    enumerable: false
});

Object.defineProperty(obj, 'test2', {
    value: "fail2",
    enumerable: false
});


Object.defineProperty(obj, 'test3', {
    value: "fail3",
    enumerable: false
});

console.log(obj);
for (let key in obj) {
    console.log("in loop: ", key);
}

