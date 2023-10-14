/*****setTimeout -> clearTimeout****/
// console.log("Before");
// function cb() {
//     console.log("Set-timouts cb has been called");
// }
// // setTimeout(cb, 1000);

// const timerID = setTimeout(cb, 4000);
// // console.log(timerID);

// function canceller() {
//     console.log("Cancelling the timeout");
//     clearTimeout(timerID);
// }
// setTimeout(canceller, 2000);
// console.log("AFter");
/*************************************/


/************setInterval, clearInterval*********/
console.log("Before");
function cb() {
    console.log("Interval called " + Date.now());
}
// setInterval(cb, 2000)

const timerId = setInterval(cb, 1000);
// console.log(timerId);

function cancelInterval() {
    console.timeEnd();
    console.log("cancelling the interval timer");
    clearInterval(timerId);
}
console.time();
setTimeout(cancelInterval, 5000);

console.log("after");


//  cb -> of setTimout -> higher precedence then cb of setInterval -> why precedence of SINt<STime


