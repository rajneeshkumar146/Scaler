/**
 * 
 * promisifiy  fs.readfile
 *  
 * */

let fs = require("fs");

function promReadFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err)
                // reject(err)
            } else {
                resolve(data);
            }
        })
    })
}


/*** -------------------- consumption --------------------------- **/
console.log("Before");

const promise = promReadFile("./f11.txt");

// ---------------------------------- Statement 1 ----------------------------------
promise
    .then(function (data) {
        console.log("Data inside the file is " + data);
    }).catch(function (err) {
        console.log("Error is: " + err)
    });

// ---------------------------------- Statement 1 ----------------------------------
// promise
//     .then((data) => {
//         console.log("My Content is: " + data);
//         return promReadFile("./f2.txt");
//     }).then((data) => {
//         console.log("My Content is: " + data);
//         return promReadFile("./f3.txt");
//     }).then((data) => {
//         console.log("My Content is: " + data);
//         return promReadFile("./f4.txt");
//     }).then((data) => {
//         console.log("My Content is: " + data);
//     }).catch((err) => {
//         console.log("Ohh! I hit by error: " + err);
//     });


console.log("After");