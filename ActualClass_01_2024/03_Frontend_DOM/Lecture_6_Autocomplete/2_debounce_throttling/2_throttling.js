let productValue = 500;
function apply20Coupon() {
    console.log("New Price: ", productValue - (productValue * 0.2));
}


function throttle(cb, haltAllCallForInterval = 500) {
    shouldWait = false;
    return function (...args) {
         // validation check for your call.
         if (shouldWait === true) {
            console.log("this coupon is already applied, wait for 3hr.");
            return;
        }

        // call method and set waiting flag.
        cb(...args);
        shouldWait = true;

        


    }

}

const throttledApplyCoupon = throttle(apply20Coupon, 3000);
console.log("```````````````````");
throttledApplyCoupon();  //1
console.log("```````````````````");
throttledApplyCoupon();  //2

setTimeout(() => {
    console.log("at t=2000");
    throttledApplyCoupon(); //3
}, 2000);

setTimeout(() => {
    console.log(" at t=5000");
    throttledApplyCoupon(); //4
},5000);