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
// console.log(counter(0));
// console.log(counter()()(0));
// console.log(counter()()()(0));


function sum(val){
    if(val == undefined){
        return 0;
    }else{
        let res = val;
        return function smallerSumhelperMethod(val){
            if(val == undefined){
                return res;
            }else{
                res += val;
                return smallerSumhelperMethod;
            }

        }
    }
}

// ---> HM
// let sum = function (arg1) {
//     if (arg1 == undefined) {
//         return 0;
//     }
//     return function (arg2) {
//         if (arg2) {
//             return sum(arg1 + arg2);
//         }
//         return arg1;
//     }
// }



console.log(sum()); // 0
console.log(sum(1)()); // 1
console.log(sum(3)(4)()); // 7
console.log(sum(3)(7)(8)()); // 18


