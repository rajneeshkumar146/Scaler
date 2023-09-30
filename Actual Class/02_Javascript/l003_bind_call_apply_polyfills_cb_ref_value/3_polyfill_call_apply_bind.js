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

//Call -> It is on Function -> 

// Statement 1.-------------------------------------------------

// Function.prototype.myCall = function(){
//     console.log("Hi call is invoked");

//     console.log("I want to know this: ", this)
// }

// cap.petersTeam.myCall();

// Statement 2.-------------------------------------------------
/**
 * polyfill of call method
 * **/
Function.prototype.myCall = function (requiredObject, ...args) {
    // get your function.
    const functionTobeInvoke = this;

    // copy your function.
    requiredObject.tempFunction = functionTobeInvoke;

    // call you function.
    requiredObject.tempFunction(...args);

    // delete temp method.
    delete requiredObject.tempFunction;
}

// cap.petersTeam.myCall(ironMan, "thor", "loki");

// Statement 3.-------------------------------------------------
/**
 * polyfill of apply method
 * **/

Function.prototype.myApply = function (requiredObject, args) {
    // console.log(args);

    // get your function.
    const functionTobeInvoke = this;

    // copy your function.
    requiredObject.tempFunction = functionTobeInvoke;

    // call you function.
    requiredObject.tempFunction(...args);

    // delete temp method.
    delete requiredObject.tempFunction;
}

// cap.petersTeam.myApply(ironMan, ["thor", "loki"]);

// let peterTeamFN = cap.petersTeam;
// peterTeamFN.myApply(ironMan, ["loki", "thor"]);
// peterTeamFN.apply(ironMan,["loki","thor"]);


// Statement 4.-------------------------------------------------
/**
 * polyfill of bind method
 * **/

Function.prototype.myBind = function (requiredObject) {
    // get your function.
    const functionTobeInvoke = this;

    return function (...args) {
        functionTobeInvoke.call(requiredObject, ...args);
    }
}

const boundFn = cap.petersTeam.bind(ironMan);
boundFn(["cap", "war machine", "Rajneesh", "Sudheer", "Tapaswini"]);


















// Function.prototype.myBind = function (reqObj) {
//     const requiredFn = this
//     return function (...args) {
//         requiredFn.call(reqObj,...args);
//     }
// }
// //  bind a fn 
// const boundFn = cap.petersTeam.bind(ironMan);
// // call it later
// boundFn("loki", "thor");

// const myBounFn = cap.petersTeam.myBind(ironMan);
// myBounFn("loki", "thor");



/***
 * 1. bind , call and apply -> are available on function
 * 2. use bind,call,apply in those fn -> this ->fn
 * 3. object passed to bind,call and apply -> on which you fn is called
 * 
 * **/

