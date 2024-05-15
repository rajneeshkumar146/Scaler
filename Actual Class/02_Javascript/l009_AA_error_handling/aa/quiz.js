// function resolveAfterNSeconds(delay, x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Value: " + x);
//             resolve(x);
//         }, delay);
//     });
// }

(function () {
    let a = resolveAfterNSeconds(1000, 1)
    a.then(async function (x) {
        // 1s 

        let y = await resolveAfterNSeconds(2000, 2) // total: 1s + 2s
        let z = await resolveAfterNSeconds(1000, 3) // total: 1s + 2s + 1s
        // 4se


        // let p = await resolveAfterNSeconds(2000, 4);  // Total : 4s + 2s
        // let q = await resolveAfterNSeconds(1000, 5);  // Total : 4s + 2s + 1s

        let p = resolveAfterNSeconds(2000, 4); // Total: 4s + max(2,1)s = 6s
        let q = resolveAfterNSeconds(1000, 5);

        console.log(x + y + z + await p + await q);


        /**
         * litreal meaning of await -> waiting for some result 
         * if result is pdening -> wait
         * if your result -> use 
         * **/
    })
})()



// Statement 2
// const a = (async function () {
//     return await Promise.resolve('ankit')
// })();
// console.log(a);
// a.then(function (data) {
//     console.log(data);
// })


// async function getData() {
//     return 10
// }
// let a = await getData();
// console.log(a)





