const fs = require("fs");
console.log("before");

/*********** chaining your then and catch **********/

// fs.promises.readFile("./f1.txt")
//     .then(function (futureValue) {
//         console.log("Data inside the file is " + futureValue);
//     })
//     .catch(function (err) {
//         console.log("err: ", err);
//     });

/**************** heart attack code ************/
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

/**************** Nested then ************/

// fs.promises.readFile("./f1.txt")
//     .then(function (data1) {
//         console.log("My Content is: " + data1);
//         fs.promises.readFile("./f2.txt")
//             .then(function (data1) {
//                 console.log("My Content is: " + data1);
//                 fs.promises.readFile("./f3.txt")
//                     .then(function (data1) {
//                         console.log("My Content is: " + data1);
//                         fs.promises.readFile("./f4.txt")
//                             .then(function (data1) {
//                                 console.log("My Content is: " + data1);

//                             })
//                             .catch(function (err) {
//                                 console.log("ohh! I hit by error: " + err);
//                             })
//                     })
//                     .catch(function (err) {
//                         console.log("ohh! I hit by error: " + err);
//                     })
//             })
//             .catch(function (err) {
//                 console.log("ohh! I hit by error: " + err);
//             })
//     })
//     .catch(function (err) {
//         console.log("ohh! I hit by error: " + err);
//     });


/******************* chaining *********************/

fs.promises.readFile("./f1.txt")
    .then(function (data) {
        console.log("My Content is: " + data);
        return fs.promises.readFile("./f2.txt");
    }).then(function (data) {
        console.log("My Content is: " + data);
        return fs.promises.readFile("./f3.txt");
    }).then(function (data) {
        console.log("My Content is: " + data);
        return fs.promises.readFile("./f4.txt");
    }).then(function (data) {
        console.log("My Content is: " + data);
    })
    .catch(function (err) {
        console.log("ohh! I hit by error: " + err);
    });