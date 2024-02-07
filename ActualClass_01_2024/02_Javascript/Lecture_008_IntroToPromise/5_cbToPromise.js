/**
 * 
 * promisifiy  fs.readfile
 *  
 * */

let fs = require("fs");

function promReadFile(filePath) {
    return new Promise((resolve, reject) => {

    })
}


/*** -------------------- consumption --------------------------- **/
console.log("Before");

const promise = promReadFile("./f1.txt");

// ---------------------------------- Statement 1 ----------------------------------
promise
    .then(function (data) {
        console.log("Data inside the file is " + data);
    }).catch(function (err) {
        console.log("Error is: " + err)
    });