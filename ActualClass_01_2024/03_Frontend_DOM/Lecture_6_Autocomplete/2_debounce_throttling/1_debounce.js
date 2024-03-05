function debounce(cb,delay = 500){
    let timeoutId = null;
    return function(...args){
        if(timeoutId){
            console.log("Restting the timer");
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            cb(...args);
            timeoutId = null;  // have you know why? behind this line? => If work is done clear you past ids.
        },delay);
    }
}
function printHello(){
    console.log("Hi all!, Hellow from my side.");
}

const debouncePrintHello = debounce(printHello, 2000);
debouncePrintHello();

setTimeout(() => {
    debouncePrintHello();
    setTimeout(() => {
        debouncePrintHello();
    }, 3000);
}, 1000);