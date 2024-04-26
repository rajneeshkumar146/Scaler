// infinite curry
// function counter(args){
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



function sum(val) {
    if (val === undefined) {
        return 0;
    } else {
        let res = val;
        return function smallerSunHelperMethod(val) {
            if (val === undefined) {
                return res;
            } else {
                res += val;
                return smallerSunHelperMethod;
            }
        }
    }
}

console.log(sum())  // 0
console.log(sum(1)());  // 1
console.log(sum(3)(4)());  // 7
console.log(sum(3)(7)(8)());  //18


/***************Private variables******/
// function createEvenStack() {
//     return {
//         items:[],
//         push(item) {
//             if (item % 2 == 0) {
//                 console.log("Is pushed");
//                 this.items.push(item);
//             }else {
//                 console.log("Please input even value");
//             }
//         },
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
//         push(item) {
//             if (item % 2 == 0) {
//                 console.log("Is pushed");
//                 items.push(item);
//             } else {
//                 console.log("Please input even value");
//             }
//         },
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
// console.log(stack.items);    // Undefined
// stack.items = [10, 100, 1000]; // prevent this behaviour
// console.log(stack.items);   // because of line no 83
// stack.push(30);
// console.log("pop ele: ", stack.pop());
// console.log("pop ele: ", stack.pop());

