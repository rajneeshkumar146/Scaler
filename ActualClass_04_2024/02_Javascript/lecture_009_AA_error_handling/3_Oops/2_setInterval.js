/***
 * create polyfill of setInterval with the help setTimeout
 * 1. setInterval -> settimout that is called at a given interval again and again
 *  Learning : whenever you want to have single source of truth -> non-primitive
 * 2. clearInterval  : 
 * */


function mySetInterval(cb, delay) {
    let obj = {
        flag: true
    }

    function helperMethod() {
        if (obj.flag) {
            cb();
            setTimeout(helperMethod, delay);
        }
    }

    setTimeout(helperMethod, delay);
    return obj;
}

function clearMyInterval() {
    obj.flag = false;
}

/*******usage****/
function clearCb() {
    console.log("cancelled th cb");
    clearMyInterval(obj);
}

function cb() {
    console.log("I will be called on every interval")
}

let obj = mySetInterval(cb, 1000);
setTimeout(clearCb, 5000);