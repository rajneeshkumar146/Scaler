// you can choose which data you want to make accessible
// and what to hide
// -------------------------Statement 1-------------------------
// let abc = "Hello";
// export function fn() {
//     console.log("Hi I am Fn");
// }
// export var a = 10;


// -------------------------Statement 2-------------------------
let abc = "Hello";
function fn() {
    console.log("Hi I am Fn");
}
var a = 10;

export { a, fn };

