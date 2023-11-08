function debounce(fn, delay = 500) {
    let timeoutId = null;
    return function (...args) {
        if (timeoutId) {
            // rseting the timer.
            console.log("Resetting the timer.");
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn(...args);
            timeoutId = null;   // have you know why? behind this line? => If work is done clear you past ids.
        }, delay);
    }
}

function printHello() {
    console.log("Hi all!, Hello from my side.");
}

const debouncePrintHello = debounce(printHello, 2000);
debouncePrintHello();

setTimeout(() => {
    debouncePrintHello();
    setTimeout(() => {
        debouncePrintHello();
    }, 3000);
}, 1000);
