// statement 1 ----------------------------------------------------
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr;
// arr2.pop();
// arr2 = 10;
// console.log(arr);
// console.log(arr2);



// statement 2 ----------------------------------------------------
function modifier(a, b) {
    console.log("13", a, b)
    a[0] = 10;
    b[1] = 20;
    console.log("16", a, b)
}
let p = [4, 7, 9]
let q = [3, 6, 8]

console.log("20", p, q);
modifier(p, q)

console.log("23", p, q);

//  what a reference is -> address -> pointer

// call by value -> call by sharing
//  primitive -> value
// no primitive -> val of the reference