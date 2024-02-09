let fs = require("fs");

console.log("before");

/*** they are a syntax sugar over **/
// (async function fn() {
//     try {
//         let data = await fs.promises.readFile("./f1.txt");
//         console.log("content " + data);
//         let data1 = await fs.promises.readFile("./f2.txt");
//         console.log("content " + data1);
//         let data2 = await fs.promises.readFile("./f3.txt");
//         console.log("content " + data2);
//         return "rVal from fn";
//     } catch (err) {
//         console.log("error: " + err)
//     }
// })();

// for (let i = 0; i < 10; i++) {
//     console.log("data");
// }

async function fn() {
    try {
        let data = await fs.promises.readFile("./f1.txt");
        console.log("content " + data);
        let data1 = await fs.promises.readFile("./f2.txt");
        console.log("content " + data1);
        let data2 = await fs.promises.readFile("./f3.txt");
        console.log("content " + data2);
        return "rVal from fn";
    } catch (err) {
        console.log("error: " + err)
    }
};

let rVal = fn();
console.log("rVal from 40", rVal);

rVal.then(function (data) {
    console.log("content 43" + data);
})

console.log("after");

/*****
 * async keyword fn always return a pending promise so either await for or use then 
 * 
 * 
 * **/ 