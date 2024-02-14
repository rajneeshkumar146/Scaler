Promise.myPromiseAll = function (arrayOfPromises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(arrayOfPromises)) {
            reject("Expected a array of promise.");
            return;
        }

        let unresolvedPromises = arrayOfPromises.length;
        const resolvedPromisesArray = [];
        if (unresolvedPromises == 0) {
            resolve(resolvedPromisesArray);
            return;
        }

        // What doses a promise return: future value of the task that has already started.
        // async await -> iterate over the array, If the value is not resolved -> await

        arrayOfPromises.forEach(async (promise) => {
            try {
                const value = await promise;
                resolvedPromisesArray.push(value);
                unresolvedPromises--;
                if (unresolvedPromises == 0) {
                    resolve(resolvedPromisesArray);
                }
            } catch (err) {
                reject(err);
            }
        });

    });
}


/** --------------------------Consuption-------------------------- */
// when all the promises are resolved
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Foo");
    }, 1000);
});

// Promise.myPromiseAll([p0, p1, p2])
//     .then(console.log)
//     .catch((err) => {
//         console.log("Promise got rejected with error: " + err);
//     });


// when any of the promises got rejected
// const p0 = Promise.resolve(3);
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Foo");
//     }, 1000);
// });

// Our Method
Promise.myPromiseAll([p0, p1, p2])
    .then(console.log)
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });

// Real.
Promise.all([p0, p1, p2])
    .then(console.log)
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });

