/****3 function constructor before es6*******************/
// function Person(name, age) {
//     // console.log(this);
//     this.name = name;
//     this.age = age;
//     this.sayHi = function () {
//         console.log(`I am ${this.name} and ${this.age} years old`);
//         return this;
//     }

//     this.sayHi();
// }

// Person("Jasbir",27);
// console.log(Person);

// const rajneesh = new Person("Rajneesh", 25);
// console.log(rajneesh);
// rajneesh.sayHi();

// let cap = new Person("Cap", 38);
// cap.sayHi();


/******4 class  after es6*********/
//  class -> strict mode 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`I am ${this.name} and ${this.age} years old`);
    }

    sayBye(){
        console.log(`I am ${this.name} and ${this.age} years old, Have a nice day!`);
    }
}

class SuperHuman extends Person {
    constructor(name, age) {
        super(name, age)
    }
    sayHi() {
        console.log(`I am ${this.name} and ${this.age} years old, I want to say Hi!`);
    }
}

// const rajneesh = new Person("Rajneesh", 26);
// console.log(rajneesh);
// rajneesh.sayHi();

const sudheer = SuperHuman("sudheer", 21);  // Its a function call.
// console.log(sudheer);
sudheer.sayHi();
sudheer.sayBye();

/***
 * inheritance :  code sharing , saving memory 
 * Prototype is : 
 * In JS we create object from an object ->  that object is your parent or prototype ->that chain goes on 
 * Prototypal Inheritance : you inherit the properties from a parent object/ prototype and that inheritance -> 
 * Prototypal Inheritance.
 * Prottype chain
 * 
 * */
