// function resolveAfterNSeconds(delay, x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Value: " + x);
//             resolve(x);
//         }, delay);
//     });
// }

// (function () {
//     let a = resolveAfterNSeconds(1000, "data 1")
//     a.then(async function (x) {
//         // 1 Sec

//         // It work in serial order.
//         let y = await resolveAfterNSeconds(2000, "data 2") // total: 1 + 2
//         let z = await resolveAfterNSeconds(1000, "data 3") // total: 1 + 2 + 1
//         // 4 sec


//         // let p = await resolveAfterNSeconds(2000, "data 4");  // Total : 
//         // let q = await resolveAfterNSeconds(1000, "data 5");  // Total : 

//         // They work in parallel
//         let p = resolveAfterNSeconds(2000, "data 4"); // Total: 4 + max(2,1); 6 sec
//         let q = resolveAfterNSeconds(1000, "data 5");

//         console.log(x + y + z + await p + await q);


//         /**
//          * litreal meaning of await -> waiting for some result 
//          * if result is pdening -> wait
//          * if your result -> use 
//          * **/
//     })
// })()

// Statement 2
// const a = (async function () {
//     return await Promise.resolve('ankit')
// })();
// console.log(a);
// a.then(function (data) {
//     console.log(data);
// })

// Statement 3
async function getData() {
    return 10
}

getData().then((data) => {
    console.log(data);
})

