const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 2000, 'one');
});
const secondPromise = new Promise((res, rej) => {
    // setTimeout(res, 1000, 'two'); 
    setTimeout((arg) => {
        res(arg)
    }, 1000, "two")
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));