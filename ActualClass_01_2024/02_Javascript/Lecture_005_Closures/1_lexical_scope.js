/*
A lexical scope allows a function scope to access variables in the outer scope. 
The outer scope is deteremined wrt to function definition only were we have defined the function code in js file . 
*/

// let x = 10;
// function fn() {
//     /** you are taking the value from the current/local scope */
//     // let x = 20;
//     console.log("c Value of x is ", x);
// }
// fn();

// var varName = 10;
// /**fn def*/
// function b() {
//     console.log("in b", varName);
// }

// function fn() {
//     var varName = 20;
//     /**fn call*/
//     b();
//     console.log(varName);  
// }
// fn();


var varName = "I'm here";
function fn() {
    // var varName = 10;
    function inner() {
        function inner2() {
            console.log(varName);
        }
        inner2();
        console.log(varName);
    }

    inner();
    console.log(varName);
}

fn();