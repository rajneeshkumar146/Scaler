// infinite curry

// function counter(args) {
//     let count = 0;
//     count++;
//     if(args === 0){
//         return count;
//     }else{
//         return function inner(args){
//             count++;
//             if(args === 0){
//                 return count;
//             }else{
//                 return inner;
//             }
//         }
//     }
// }

// console.log(counter(0)); // print -> 1
// console.log(counter()(0)); // print ->2
// console.log(counter()()()()(0)); // print -> 5

// console.log(counter()())



// function sum(val) {
//     // homework
//     if(val === undefined){
//         return 0;
//     }else{
//         let res = val;
//         return function smallerSumHelperMethod(val){
//             if(val === undefined){
//                 return res;
//             }else{
//                 res += val;
//                 return smallerSumHelperMethod;
//             }
//         }
//     }
// }

// console.log(sum())  // 0
// console.log(sum(1)());  // 1
// console.log(sum(3)(4)());  // 7
// console.log(sum(3)(7)(8)());  //18

// cool way to do same task.

// let sum = function (a) {
//     if (a == undefined) {
//         return 0;
//     }
//     return function (b) {
//         if (b) {
//             return sum(a + b);
//         }
//         return a;
//     };
// };

// console.log(sum(1)(3)(9)());
// console.log(sum(1)());
// console.log(sum(1)(2)());
// console.log(sum());


/**
 * Memoization function
 * creating private variables
 * */


/***************Private variables******/
// function createEvenStack() {
//     return {
//         items:[],
//         // push: function(val){}
//         push(item) {
//             if (item % 2 == 0) {
//                 console.log("Is pushed");
//                 this.items.push(item);
//             }else {
//                 console.log("Please input even value");
//             }
//         },
//         // pop: function(){}
//         pop() {  
//             return this.items.pop();
//         }
//     };
// }

// const stack = createEvenStack();
// stack.push(10);
// stack.push(5);
// console.log("pop ele: ", stack.pop());
// console.log(stack.items);
// stack.items = [10, 100, 1000]; // prevent this behaviour
// console.log(stack.items);

// function createEvenStack() {
//     let items = [];
//     return {
//         // push: function(val){}
//         push(item) {
//             if (item % 2 == 0) {
//                 console.log(item, " Is pushed");
//                 items.push(item);
//             }else {
//                 console.log("Please input even value");
//             }
//         },
//         // pop: function(){}
//         pop() {  
//             return items.pop();
//         }
//     };
// }

// const stack = createEvenStack();
// stack.push(10);
// stack.push(5);
// stack.push(20);
// console.log("pop ele: ", stack.pop());
// console.log(stack.items);
// stack.items = [10, 100, 1000]; // prevent this behaviour
// console.log(stack.items);
// stack.push(30);
// console.log("pop ele: ", stack.pop());


/**
 * Memoization : sum calculation take a lot of time  with
 * memoization we can store  result of costly calculations -> useMemo
 * */

function calc(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += n;
    }
    return sum;
}

// console.time();
// let res = calc(1000);
// console.log("res", res);
// console.timeEnd();

function memoize(fn) {
    let cache = {};
    return function (val) {
        if (cache[val] !== undefined) {
            return cache[val];
        }

        const res = fn(val);
        cache[val] = res;
        return res;
    }
}


// let efficentCalcFN = memoize(calc);
// console.time();
// console.log(efficentCalcFN(1000000));
// console.timeEnd();

// console.time();
// console.log(efficentCalcFN(1000000));
// console.timeEnd();