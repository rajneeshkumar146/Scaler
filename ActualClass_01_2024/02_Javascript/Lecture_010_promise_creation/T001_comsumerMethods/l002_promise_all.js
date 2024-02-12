const fs = require("fs");


// const promise = fs.promises.readFile("f1.txt");
// const promise2 = fs.promises.readFile("f2.txt");

// const combinedpromise1 = Promise.all([promise, promise2]);
// const combinedpromise2 = Promise.any([promise, promise2]);

// combinedpromise1.then(function (resultArr) {
//     console.log("" + resultArr)
// })

// combinedpromise2.then(function (resultArr) {
//     console.log("" + resultArr)
// })

/** statement 2 */
// const promise1 = Promise.resolve(100);
// const promise2 = Promise.resolve(200);
// const promise3 = Promise.resolve(300);
// const promise4 = Promise.reject(400);

// resolve an reject 
// const promiseAll = async () => {
//     console.log("1: ");
//     const group1 = await Promise.any([promise1, promise2]);
//     console.log("2: ",group1);
//     const group2 = await Promise.any([promise3, promise4])

//     console.log("3: ", group2);
//     return [group1, group2]
// }

const promise1 = Promise.resolve(100);
const promise2 = Promise.resolve(200);
const promise3 = Promise.resolve(300);
const promise4 = Promise.reject(400);

const promiseAll = async () => {
    console.log("1: ");
    const group1 = await Promise.all([promise1, promise2]);
    console.log("2: ", group1);
    const group2 = await Promise.all([promise3, promise4])

    console.log("3: ", group2);
    return [group1, group2];
}


promiseAll().then(console.log).catch(console.log);