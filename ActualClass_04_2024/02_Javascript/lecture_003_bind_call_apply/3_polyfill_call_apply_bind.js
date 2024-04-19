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

// Function.prototype.myCall = function() {
//     console.log("Hi Call is invoked");

//     console.log("I want to know this: ", this);
// }

// cap.petersTeam.myCall();

// Statement 2.-------------------------------------------------
/**
 * polyfill of call method
 * **/

Function.prototype.myCall = function (requiredObject, ...args) {
    // get your function.
    const functionToBeInvoked = this;

    // copy your function.
    requiredObject.tempFunction = functionToBeInvoked;

    // call your function.
    requiredObject.tempFunction(...args);

    // delete temp method.
    delete requiredObject.tempFunction;
}

// cap.petersTeam.myCall(ironMan,"thor", "loki");

// Statement 3.-------------------------------------------------
/**
 * polyfill of apply method
 * **/

Function.prototype.myApply = function (requiredObject, arrayAsArgu) {
    // get your function.
    const functionToBeInvoked = this;

    // copy your function.
    requiredObject.tempFunction = functionToBeInvoked;

    // call your function.
    requiredObject.tempFunction(...arrayAsArgu);

    // delete temp method.
    delete requiredObject.tempFunction;
}

// cap.petersTeam.myApply(ironMan, ["thor", "loki"]);


// Statement 4.-------------------------------------------------
/**
 * polyfill of bind method
 * **/

Function.prototype.myBind = function (requiredObject) {

}

