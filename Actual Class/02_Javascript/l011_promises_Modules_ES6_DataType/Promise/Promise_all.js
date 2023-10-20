Promise.myPromiseAll = function (arrayOfPromises) {
    return new Promise(function (resolve, reject) {
        // Help me to write a check of arrayOfPromises is a type of array.
        if (!Array.isArray(arrayOfPromises)) {
            reject("Expected a array of promise.")
            return;
        }

        let unresolvedPromises = arrayOfPromises.length;
        const resolvedPromisesArray = [];
        if (unresolvedPromises === 0) {
            resolve(resolvedPromisesArray);
            return;
        }

        //  what does a promise represent  : future value of the task that has already started
        // async await -> iterate over the array -> if the value is not resolved -> await

        arrayOfPromises.forEach(async (promise) => {
            try {
                const value = await promise;
                resolvedPromisesArray.push(value);

                unresolvedPromises--;
                if (unresolvedPromises === 0) {
                    resolve(resolvedPromisesArray);
                    return;
                }
            } catch (err) {
                reject(err);
            }
        });
    });
}


//  when all the promises are resolved
// const p0 = Promise.resolve(3);
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 1000);
// });
// Promise.myPromiseAll([p0, p1, p2]).then(console.log, (err) => { console.log("promise got rejected with error: " + err) })

//  when all the promises are rejected
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('foo');
    }, 1000);
});

// Our Method.
// Promise.myPromiseAll([p0, p1, p2]).then(console.log, (err) => { console.log("promise got rejected with error: " + err) })

// Real.
Promise.all([p0, p1, p2]).then(console.log, (err) => { console.log("promise got rejected with error: " + err) })

