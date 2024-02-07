const { runMlAlgo } = require("./lib");

console.log("Before");

let amount = 100;
let priceofOne = 20;

/**
 * takes the amount and callbacks as paramas
 * and it calls the cb for us
 * */

runMlAlgo(cb);
function cb() {
    amount = amount - priceofOne;
    console.log("Amount: ", amount);
}


console.log("After");
