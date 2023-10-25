/**
 * 
 * promisifiy  fs.readfile 
 * */

let fs = require("fs");

function promReadFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}


/*** -------------------- consumption --------------------------- **/

console.log("Before");

const promise = promReadFile("./f1.txt");

// ---------------------------------- Statement 1 ----------------------------------
// promise.then((data) => {
//     console.log("My content is: " + data);
// }).catch((err) => {
//     console.log("ohh! I hit by error: " + err);
// });

// ---------------------------------- Statement 2 ----------------------------------
promise.then((data) => {
    console.log("My Content is: " + data);
    return fs.promises.readFile("./f2.txt");
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

