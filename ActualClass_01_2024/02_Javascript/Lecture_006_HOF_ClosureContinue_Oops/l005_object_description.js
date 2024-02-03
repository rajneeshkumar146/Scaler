// Metadata -> object descriptors
// DATA  -> prop                 
// value   -> value of that prop         
// writable  -> can you change 

let obj = {
    age: 26
}

Object.defineProperty(obj, 'name', {
    value: "Rajneesh",
    enumerable: true
});

Object.defineProperty(obj, 'age', {
    value: "25",
    enumerable: false
});

Object.defineProperty(obj, 'test', {
    value: "fail",
    enumerable: false
});

Object.defineProperty(obj, 'test2', {
    value: "fail2",
    enumerable: true
});


Object.defineProperty(obj, 'test3', {
    value: "fail3",
    enumerable: false
});

console.log(obj);
for (let key in obj) {
    console.log("in loops: ", key);
}


/*
If we create any member using defineProperty(objName, <key>, {
    vale: <input>
    enumerable: true/false
})

if value of enumerable is false you are not allowed to iterate over it.
if value of enumerable is true ypu are allowed to interate over it.

but in both cases you can't not override the value.
*/


/*
 Use case of enumerable = false.
 1. to declare private key which is not overridden and iterable.

 Example: 
 a. you build a credit card class which have a key amount and it is obly changed by function call when payment is done.
 b. It is used in network call when you are preperaing you response before network call and reponse have metadata information which is not suppose to be iterable and changable.
 

*/



