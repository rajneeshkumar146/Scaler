const fs = require("fs");
console.log("before");

/*********** chaining your then and catch **********/

// const promise = fs.promises.readFile("./f1.txt");

// promise
//     .then(function (futureValue) {
//         console.log("Data inside the file is " + futureValue);
//     })
//     .catch(function (err) {
//         console.log("err", err);
//     })

// console.log("After");



/**************** heart attack code ************/
// fs.readFile(".././f1.txt", (err, data) => {
//     if (err) {
//         console.log("error is: ", err);
//     } else {
//         console.log("Content is: " + data);
//         fs.readFile(".././f2.txt", (err, data) => {
//             if (err) {
//                 console.log("error is: ", err);
//             } else {
//                 console.log("Content is: " + data);
//                 fs.readFile(".././f3.txt", (err,data) => {
//                     if(err){
//                         console.log("error is: ", err);
//                     }else{
//                         console.log("Content is: " + data);
//                         fs.readFile(".././f4.txt", (err,data) => {
//                             if(err){
//                                 console.log("error is: ", err);
//                             }else{
//                                 console.log("Content is: " + data);
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });


/******************* Nested then *************/

// let p1 = fs.promises.readFile("./f1.txt");
// p1.then((data1) => {
//     console.log("My Content is: " + data1);
//     let p2 = fs.promises.readFile("./f2.txt");
//     p2.then((data2) => {
//         console.log("My Content is: " + data2);
//         let p3 = fs.promises.readFile("./f3.txt");
//         p3.then((data3) => {
//             console.log("My Content is: " + data3);
//             let p4 = fs.promises.readFile("./f4.txt");
//             p4.then((data4) => {
//                 console.log("My Content is: " + data4);
//             }).catch((err) => {
//                 console.log("ohh! I hit by error: " + err);
//             });
//         }).catch((err) => {
//             console.log("ohh! I hit by error: " + err);
//         });
//     }).catch((err) => {
//         console.log("ohh! I hit by error: " + err);
//     });

// }).catch((err) => {
//     console.log("ohh! I hit by error: " + err);
// });


/******************* chaining *********************/

let promise = fs.promises.readFile("./f1.txt");

promise.then((data) => {
    console.log("My Content is: " + data);
    return fs.promises.readFile("./f1.txt");
}).then((data) => {
    console.log("My Content is: " + data);
    return fs.promises.readFile("./f3.txt");
}).then((data) => {
    console.log("My Content is: " + data);
    return fs.promises.readFile("./f4.txt");
}).then((data) => {
    console.log("My Content is: " + data);
}).catch((err) => {
    console.log("ohh! I hit by error: " + err);
});


console.log("After");
