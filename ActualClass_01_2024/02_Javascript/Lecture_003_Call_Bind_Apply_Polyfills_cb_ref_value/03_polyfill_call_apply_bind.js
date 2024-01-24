let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function (mem1, mem2) {
        console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and i belong to ${this.team}'s team with members  ${mem1} ${mem2}`);
    }
}

let ironMan = {
    name: "Tony",
    team: "Iron Man",
}

// Statement 1.-------------------------------------------------

// Function.prototype.myCall = function () {
//     console.log("Hi call is invoked");

//     console.log("I want to know this: ", this)
// }

// cap.petersTeam.myCall();

// Statement 2.-------------------------------------------------
/**
 * polyfill of call method
 * **/

// Function.prototype.myCall = function (requiredObj, ...args) {
//     // get your Function.
//     const functionToBeInvoked = this;
//     // console.log(functionToBeInvoked);

//     // copy your function.
//     requiredObj.tempfunction = functionToBeInvoked;

//     // Call Your targeted function.
//     requiredObj.tempfunction(...args);

//     // delete temp method;
//     delete requiredObj.tempfunction;

// }

// cap.petersTeam.myCall(ironMan, "thor", "loki", "Natasha", "pabusingh", "sushil", "vishal", "dharani", "surya");
// console.log(ironMan);

// Statement 2.-------------------------------------------------
/**
 * polyfill of Apply method
 * **/

// Function.prototype.myApply = function(requiredObject, argsInFormArray){
//     // Get your targeted function.
//     const functionToBeInvoked = this;

//     // Copy your functon.
//     requiredObject.tempFunction = functionToBeInvoked;

//     // Call your function.
//     requiredObject.tempFunction(...argsInFormArray);

//     // Delete temp fnction.
//     delete requiredObject.tempFunction;
// }

// cap.petersTeam.myApply(ironMan, ["thor", "loki", "Rajneesh"]);
// console.log(ironMan);


// Statement 2.-------------------------------------------------
/**
 * polyfill of Bind method
 * **/

Function.prototype.myBind = function (requiredObject) {
    // Get your targeted function.
    const functionToBeInvoked = this;

    return function (...args) {
        functionToBeInvoked.call(requiredObject, ...args);
    }
}

const boundFunction = cap.petersTeam.myBind(ironMan);
var name = "rajneesh";
var team = "Wolf of wall street";
boundFunction("thor", "loki");
console.log(ironMan);










