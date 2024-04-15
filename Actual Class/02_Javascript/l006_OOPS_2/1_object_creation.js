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
// console.log("Object", obj);
// obj.sayHi();
// console.log("Object This: ", obj.sayHi());


/* Different data types and there parents. **/
// console.log([1,2,3,4]);
// console.log(obj);

// let str = "Hi My name is Rajneesh";   // behind the scene: new String("Hi My name is Rajneesh") -> return the result of `PrimitiveValue`.
// console.log(str);
// console.log(str.charAt(3));

// console.log(new String("Hi My name is Rajneesh Kumar"));
// console.log(new Boolean());
// console.log(new Number());

/*
* **************************Inbuilt object works ***************
* 1. array -> Array(Object/class) -> Object
* 2. function -> Function
* 3. object -> Object 

*    For primitive : temporary parent
* *  num -> Number  -> Object
* *  str -> String -> Object
* *  boolean -> Boolean -> Object
* *  null and undefined -> no parent
* *  etc 
*     whenever you want to access any method or property
*      then that  primitive is typecased as a 
*      children of there respective parent class and 
*      then that method is applied on that non primitive 
*      you are returned the answer. -> autoboxing
* */

/****
 * hirerachy : Inbuilt object 
 *    null-> Object
 *              Array->arr
 *              Function -> function
 *              String
 *              Number
 *              Boolean
 *              Symbol
 * */


/**********2. Object create ******/

/****1. you create an object without any parent**/
// let obj1 = new Object();
// obj1.name = "Rajneesh";
// console.log("obj1: ", obj1);

// let obj2 = Object.create(null);
// obj2.name = "Rajneesh";
// console.log("obj2: ", obj2);


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
// console.log("obj3: ", obj3);


/********2. creating an object from another object*/
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
// console.log("1.", obj2.name, " ", obj2.lastname, obj2.address);
// console.log("2. ", obj.lastname);

// console.log(obj.isPrototypeOf(obj2));  // true: is `obj` parent of `obj2`.
// console.log(obj2.isPrototypeOf(obj));  // false: is `obj2` parent of `obj`.

let obj3 = Object.create(obj2);
obj3.friends = ["tony", "bruce"]
obj3.fullName = obj2.name + " " + obj2.lastname;
obj3.age = 25;
console.log(obj3);

//  loop -> object -> for in loop -> iterate over all the prop of the object , 
// inherited which are enumrable to for in
// for (let key in obj3) {
//     console.log("Keys are ", key);
// }

/********for in loop for your own poperties******/
// 1.
// O(N)
// for(let key in obj3){
//     let isMyKey = obj3.hasOwnProperty(key);
//     if(isMyKey){
//         console.log("updated Keys are ", key)
//     }
// }

// for(let key in obj3){
//     if(obj3.hasOwnProperty(key)){
//         console.log("My Keys are ", key);
//     }else if(obj2.hasOwnProperty(key)){
//         console.log("Parent Keys are ", key);
//     }else{
//         console.log("grandParent Keys are ", key);
//     }
// }


//2.
/**
 * object.keys -> normal loop
 * **/
// let keys = Object.keys(obj3);
// for (let i = 0; i < keys.length; i++) {
//     console.log(i + " " + keys[i]);
// }


// Question: Can you write a loop to print all members of my object but you need to ignore member of all parent class. And Can you optimize that operations.
// for(let key in obj3){
//     let isMyKey = obj3.hasOwnProperty(key);
//     if(isMyKey){
//         console.log("updated Keys are ", key)
//     }else{
//         break;
//     }
// }