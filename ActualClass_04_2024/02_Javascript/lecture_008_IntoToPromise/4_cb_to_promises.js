/**
 * 
 * promisifiy  fs.readfile 
 * */

let fs = require("fs");

function promiseReadFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}

/*** -------------------- consumption --------------------------- **/

console.log("Before");

const promise = promiseReadFile("./f1.txt");

// ---------------------------------- Statement 1 ----------------------------------

// promise.then((data) => {
//     console.log("My content is: " + data);
// }).catch((err) => {
//     console.log("ohh! I hit by error: " + err);
// })

// ---------------------------------- Statement 2 ----------------------------------

promiseReadFile("./f1.txt")
    .then(function (data) {
        console.log("My Content is: " + data);
        return promiseReadFile("./f2.txt");
    }).then(function (data) {
        console.log("My Content is: " + data);
        return promiseReadFile("./f3.txt");
    }).then(function (data) {
        console.log("My Content is: " + data);
        return promiseReadFile("./f4.txt");
    }).then(function (data) {
        console.log("My Content is: " + data);
    })
    .catch(function (err) {
        console.log("ohh! I hit by error: " + err);
    });