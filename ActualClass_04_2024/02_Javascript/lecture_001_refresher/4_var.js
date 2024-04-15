// var a = 10;
// console.log("line number 2", a);
// function fn() {
//     var a = 20;
//     console.log("line number 4", a);
//     a++;
//     console.log("line number 7", a);
//     if (a) {
//         var a = 30;
//         a++;
//         console.log("line number 11", a);
//     }
//     console.log("line number 13", a);
// }
// fn();
// console.log("line number 16", a);

// statement 2.
// var f = 5;
// function fn(){
//      f = 6;
// }
// fn()
// console.log(f)


// ****************** var ************

// reassign
// var a=10
// a=20;

// redeclared -> yes 
// var a=30;

// rajneesh = "hello"    // It become part of global object.
// console.log(rajneesh);   // output: undefined
// console.log(window)
// var b=10;
// console.log(b); // output: 10


// ********** let *************
// reassign -> yes
// redeclaration -> is not possible
// let a=10;
// a=20;
// let a;   // throw error.
 
// let Hoisting -> undefined
// before declaration let and const variables cannot be accessed ->
//  temporal dead zone

//  let -> script scope
// console.log(a);
// let a;
// console.log(a);
// a=10;
// console.log(a);


// block -> {
    
// }