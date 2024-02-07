const fs = require("fs");
console.log("before");

/****************** Chaining my then and catch. *****************/

const promise = fs.promises.readFile("./f1.txt");
promise
     .then(function (futureValue){
        console.log("Data inside the file is " + futureValue);
     }).catch(function (err){
        console.log("Error is: " + err)
     });


/**************** heart attack code ************/
fs.readFile(".././f1.txt", (err, data) => {
    if (err) {
        console.log("Error is: ", err);
    } else {
        console.log("Content is: " +  data);
        fs.readFile(".././f2.txt", (err, data) => {
            if (err) {
                console.log("Error is: ", err);
            } else {
                console.log("Content is: " +  data);
                fs.readFile(".././f3.txt", (err, data) => {
                    if (err) {
                        console.log("Error is: ", err);
                    } else {
                        console.log("Content is: " +  data);
                        fs.readFile(".././f4.txt", (err, data) => {
                            if (err) {
                                console.log("Error is: ", err);
                            } else {
                                console.log("Content is: " +  data);
                            }
                        })

                    }
                })

            }
        })

    }
})

/****************** Nested then *****************/



console.log("After");