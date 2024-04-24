// function outerFunction() {
//     console.log("first line of outerfunction: ", count);
//     var count = 0;
//     function innerFunction() {
//         count++;
//         return count
//     }
//     console.log("second line of outerfunction: ", count);
//     return innerFunction
// }
// const innerFunc = outerFunction();  // Log -> Undefined, 0
// console.log(innerFunc())  // 1
// console.log(innerFunc())  // 2
// const innerFunc2 = outerFunction();  // Log -> Undefined, 0


// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init;
//     }
//     return count;
// }
// let c1 = createCounter(10, 5); 
// let c2 = createCounter(5, 2);

// console.log(c1())  
// console.log(c2())

// console.log(c1()) 
// console.log(c2())

/***
 * Nested closure : you will get access to outer variable even if the 
 * outer fn is not your direct parent
 * */
// let iamINGEC = 200;
// function getFirstName(firstName) {
//     console.log("I have got your first Name");
//     return function getLastName(lastName) {
//         console.log("I have got Your last Name");
//         return function greeter() {
//             console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
//             console.log("Hi GEC", iamINGEC) // Lexical scope
//             iamINGEC++;
//         }
//     }
// }

// const firstNameRtrn = getFirstName("Rajneesh");
// const lastNameRtrn = firstNameRtrn("Kumar");
// lastNameRtrn();  // iamINGEC=201

// lastNameRtrn();  // iamINGEC=202
// lastNameRtrn();  // iamINGEC=203
// lastNameRtrn();  // iamINGEC=204
// lastNameRtrn();  // iamINGEC=205
// lastNameRtrn();  // iamINGEC=206
// lastNameRtrn();  // iamINGEC=207
// lastNameRtrn();  // iamINGEC=208
// console.log("Final Value: ", iamINGEC);

/***
 * Application of closures 
 * 1. currying : taking one input at a time and you use the input later 
 * 2. asynchrounous code cannnot run without closure 
 * **/

/*--------------------------------- Currying ---------------------------------**/
// Builder pattern: https://www.dofactory.com/javascript/design-patterns/builder

/*get all the inputs at once -> we can execute the code */
// function greeter(firstName, lastName) {
//     console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
// }
// greeter("Rajneesh", "kumar")

function getFirstName(firstName) {
    console.log("I have got your first Name");
    return function getLastName(lastName) {
        console.log("I have got Your last Name");
        return function greeter(deduction) {
            console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
            console.log("here is your deduction: ", deduction)
        }
    }
}

// const getLastName = getFirstName("Jasbir");   // persoanl Information.

// console.log("Task in between");
// console.log("Task in between");
// console.log("Task in between");

// const greeter = getLastName("Singh");   // parent related personal information.

// console.log("Task in between");
// console.log("Task in between");
// console.log("Task in between");

// greeter(100);    // ask for all kind of deductions and display the entire result.
// console.log("Task in between");
// console.log("Task in between");
// console.log("Task in between");

// Shorthand

// getFirstName("Gibran")("Castillo")(100);


/*--------------------------------- asynchrounous code  ---------------------------------**/
let a = 100;
console.log("Before");

function cb() {
    console.log("I will explode", a);
}

setTimeout(cb, 2000);
for (let i = 0; i < 1000; i++) {
    a++;
}
console.log("After");   // Async + closures are responsible for such kind of behaviour.


