


const fs = require("fs");
console.log("Before");

// fs.readFile(".././f1.txt", (err, data) => {
//     if (err) {
//         console.log("Error is: " + err);
//     } else {
//         console.log("Content is: " + data);
//     }
// });


/**************** heart attack code / callback hell / Pyramid of doom ************/
// fs.readFile(".././f1.txt", (err, data) => {
//     if (err) {
//         console.log("Error is: " + err);
//     } else {
//         console.log("Content is: " + data);
//         fs.readFile(".././f2.txt", (err, data) => {
//             if (err) {
//                 console.log("Error is: " + err);
//             } else {
//                 console.log("Content is: " + data);
//                 fs.readFile(".././f3.txt", (err, data) => {
//                     if (err) {
//                         console.log("Error is: " + err);
//                     } else {
//                         console.log("Content is: " + data);
//                         fs.readFile(".././f4.txt", (err, data) => {
//                             if (err) {
//                                 console.log("Error is: " + err);
//                             } else {
//                                 console.log("Content is: " + data);
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// });

// fs.readFile(".././f1.txt", f1cb);
// function f1cb(err, data) {
//     if (err) {
//         console.log("Error is: " + err);
//     } else {
//         console.log("Content is: " + data);
//         fs.readFile(".././f2.txt", f2cb);
//     }
// }

// function f2cb(err, data) {
//     if (err) {
//         console.log("Error is: " + err);
//     } else {
//         console.log("Content is: " + data);
//         fs.readFile(".././f3.txt", f3cb);
//     }
// }

// function f3cb(err, data) {
//     if (err) {
//         console.log("Error is: " + err);
//     } else {
//         console.log("Content is: " + data);
//         fs.readFile(".././f4.txt", f4cb);
//     }
// }

// function f4cb(err, data) {
//     if (err) {
//         console.log("Error is: " + err);
//     } else {
//         console.log("Content is: " + data);
//     }
// }

const list = [".././f4.txt",".././f3.txt",".././f2.txt",".././f1.txt"];

function recursiveWay(list){
    if(list.length === 0){
        return;
    }

    fs.readFile(list.pop(), smallCbFunction);
    function smallCbFunction(err, data){
        if (err) {
            console.log("Error is: " + err);
        } else {
            console.log("Content is: " + data);
            recursiveWay(list);
        }
    }
}

recursiveWay(list);
console.log("After");