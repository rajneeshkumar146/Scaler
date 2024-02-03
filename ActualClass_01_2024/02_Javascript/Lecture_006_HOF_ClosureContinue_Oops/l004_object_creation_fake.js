/****1 function constructor before es6*******************/
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

// Person("Rajneesh", 26);
// console.log(Person("Rajneesh", 26));   // Because it is a function 'this' always point to undefine.

// const sushil = new Person("Sushil", 25);
// console.log(sushil);
// sushil.sayHi();

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

    sayBye() {
        console.log(`I am ${this.name} and ${this.age} years old, Have a nice day!`);
    }
}

class SuperHuman extends Person {
    constructor(name, age) {
        super(name, age);   // super will call parent class constructor.
    }

    sayHi() {
        console.log(`I am ${this.name} and ${this.age} years old, I want to say Hi!`);
    }
}

const rajneesh = new Person("Rajneesh", 26);
rajneesh.sayHi();

const natasha = new SuperHuman("Natasha", 25);
natasha.sayHi();
natasha.sayBye();

/***
 * inheritance :  code sharing , saving memory 
 * Prototype is : 
 * In JS we create object from an object ->  that object is your parent or prototype ->that chain goes on 
 * Prototypal Inheritance : you inherit the properties from a parent object/ prototype and that inheritance -> 
 * Prototypal Inheritance.
 * Prottype chain
 * 
 * */


/*
Class over Function/Object
1. readability and easy to understand.
2. Class remove the conflict, That a function can behave like a object.
3.  class is suppose to construct only not called by someone.
*/
