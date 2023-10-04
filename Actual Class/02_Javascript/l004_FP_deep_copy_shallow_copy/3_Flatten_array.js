// input  -> nested array
let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 110]]];
// output -> single level of array with num 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// [4, 5] -> [4,5]
// [6, 7, 8, [9, 10, 11]] -> [6, 7, 8, 9, 10, 11]

function flatten(srcArr) {
    let newArr = [];

    for (element of srcArr) {

        if (Array.isArray(element)) {
            let flatterdArrayUsingRecursion = flatten(element);
            newArr.push(...flatterdArrayUsingRecursion);
        } else {
            newArr.push(element);
        }
    }

    return newArr;
}

function flatten2(srcArr) {
    let newArr = [];

    for (element of srcArr) {

        if (Array.isArray(element)) {
            let flatterdArrayUsingRecursion = flatten(element);

            for (ele of flatterdArrayUsingRecursion) {   // this is how spread works. T: O(N)
                newArr.push(ele);
            }

        } else {
            newArr.push(element);
        }
    }

    return newArr;
}

let flattenedArr = flatten(input);
console.log("flattenedArr: ", flattenedArr);



/**
 * Question  -> Array.protype.flat()  -> flatten fn -> option of levels also
 * */

let flattenOutput = input.flat(Infinity);
console.log(flattenOutput);



/**
 * simple deep clone/copy
 * deep copy /clone with nested objects and array HW
 * flatten an array 
 * Array.prototype.flat() HW
 * flatten an object 
 * */


let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA',
        postCodes: {
            firstBlock: 10,
            secondBlock: 12
        }
    }
}


person = {
    firstName: 'John',
    lastName: 'Doe',
    "address.street": 'North 1st street',
    "address.city": 'San Jose',
    "address.state": 'CA',
    "address.country": 'USA',
    "address.postCodes.firstBlock": 10,
    "address.postCodes.secondBlock": 12
}
