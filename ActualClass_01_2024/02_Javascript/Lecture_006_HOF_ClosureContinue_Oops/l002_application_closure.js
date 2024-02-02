// function counter(args) {
//     let count = 0;
//     count++;
//     if (args == 0) {
//         return count;
//     }else{
//         return function inner(args){
//             count++;
//             if(args == 0){
//                 return count;
//             }else{
//                 return inner;
//             }
//         }
//     }
// }

// console.log(counter(0));  // 1
// console.log(counter()(0)); // 2
// console.log(counter()()(0)); // 3
// console.log(counter()()()(0)); // 4

// function sum(val) {
//     if (val == undefined) {
//         return 0;
//     } else {
//         let res = val;
//         return function innerSum(val) {
//             if (val == undefined) {
//                 return res;
//             } else {
//                 res += val;
//                 return innerSum;
//             }
//         }
//     }
// }

function sum(a) {
    if (a == undefined) {
        return 0;
    }

    return function (b) {
        if (b != undefined) {
            return sum(a + b);
        }
        return a;
    }
}

console.log(sum()); // 0
console.log(sum(1)()); // 1
console.log(sum(3)(4)()); // 7
console.log(sum(3)(7)(8)(0)()); // 18

/**
 * Memoization function
 * creating private variables
 * */

/***************Private variables******/
function createEvenStack() {
    return {
        items:[],
        // push: function(val){}
        push(item) {
            if (item % 2 == 0) {
                console.log("Is pushed");
                this.items.push(item);
            }else {
                console.log("Please input even value");
            }
        },
        // pop: function(){}
        pop() {  
            return this.items.pop();
        }
    };
}

const stack = createEvenStack();
stack.push(10);
stack.push(5);
console.log("pop ele: ", stack.pop());
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.items);
stack.items = [101, 1001, 10001]; // prevent this behaviour
console.log(stack.items);



