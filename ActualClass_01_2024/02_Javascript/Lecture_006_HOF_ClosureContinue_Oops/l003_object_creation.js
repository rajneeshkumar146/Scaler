// console.log("Hi");

/**
 * ways to create object in js
 * 1. object literal
 * 2. Object.create 
 * **/

/******1. Object literal ****************
 * 1. properties and methods
 * 2. Object -> as your prototype (parent)
 * ***/

// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//         console.log("object this: ", this);
//         return this;
//     }
// };

// console.log("Object: ", obj)
// obj.sayHi();
// console.log("Returend Value of Object This: ", obj.sayHi());

/* Different data types and there parents. **/
// console.log([1, 3, 2, 5, 4]);
// console.log(obj);

// let str = "Hi My Name is Rajneesh";  // Behne the scene: new String("Hi My Name is Rajneesh") -> return the result of 'primitiveValue'.
// console.log(str);

// console.log(new String("Hi My Name is Rajneesh"));
// console.log(new Boolean(true));
// console.log(new Number(2));

/***************************Inbuilt object works ***************
 * 
 * 2. array -> Array -> Object -> null
 * 3. function -> Function -> Object -> null
 * 4. object -> Object ->  null
 * 
 * For Primitive : temeporary parents.
 * a. num -> Number -> Object -> null
 * b. str -> String -> Object -> null
 * c. boolean -> Boolean -> Object -> null
 * d. null and undefined have no parent
 * 
 * etc 
*     whenever you want to access any method or property
*      then that  primitive is typecased as a 
*      children of there respective parent class and 
*      then that method is applied on that non primitive 
*      you are returned the answer. -> autoboxing
*/

/**********2. Object create ******/

// This one have parent Object.
// let obj1 = new Object();  
// obj1.name = "Rajneesh";
// console.log("obj1: ", obj1);

/****1. you create an object without any parent**/
// We need to use create and specificially convey that information that 
// this object dosen't have any parent bu passing value null.
// let obj2 = Object.create(null);  
// obj2.fullName = "Rajneesh Kumar yadav";
// console.log("obj2: ", obj2);

/****2. Object with some differnet object as a parent.**/
// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//         console.log("object this: ", this);
//         return this;
//     }
// };

// let obj3 = Object.create(obj);
// obj3.name = "Rajneesh";
// obj3.lastName = "Kumar";
// console.log("Obj3: ", obj3);

/********3. creating an object from another object*/
let obj = {
    name: "Steve",
    address: {
        state: "Newyork",
        city: "Manhatten"
    },
    sayHi: function () {
        console.log(`${this.name} say's Hi`);
    }
};

let obj2 = Object.create(obj);
// console.log(obj2);

/**overriden the name prop*/
obj2.name = "symphony";
obj2.lastname = "rogers";
console.log("1. ", obj2.name, " ", obj2.lastname, " ", obj2.address);
console.log("2. ", obj.lastname);

console.log(obj.isPrototypeOf(obj2));   // true: is 'obj' parent of 'obj2'
console.log(obj2.isPrototypeOf(obj));   // true: is 'obj2' parent of 'obj'

let obj3 = Object.create(obj2);
obj3.friends = ["tony", "bruce"];
obj3.fullName = "Rajneesh Kumar yadav";
obj3.age = 26;
console.log(obj3);

//  loop -> object -> for in loop -> iterate over all the prop of the object , 
// inherited which are enumrable to for in
// for(let key in obj3){
//     console.log("Keys are: ", key)
// }

// T: O(P + Q + R), where P is no of elements in obj3, Q is no of elements in obj2, R is no of elements in obj.
// for (let key in obj3) {
//     if (obj3.hasOwnProperty(key)) {
//         console.log("My Keys: ", key)
//     } else if (obj2.hasOwnProperty(key)) {
//         console.log("My Parent Keys: ", key)
//     } else if (obj.hasOwnProperty(key)) {
//         console.log("My Grand Parent Keys: ", key)
//     }
// }

//2.
/**
 * object.keys -> normal loop
 * **/
let keys = Object.keys(obj3);
for (let i = 0; i < keys.length; i++) {
    console.log(i + " " + keys[i]);
}

// Question: Can you write a loop to print all members of my object but you need to ignore member of all parent class. And Can you optimize that operations.
// T: O(P) where P is no of elements in obj3
for (let key in obj3) {
    if (!obj3.hasOwnProperty(key)) {
        break;
    }
    console.log(key);
}