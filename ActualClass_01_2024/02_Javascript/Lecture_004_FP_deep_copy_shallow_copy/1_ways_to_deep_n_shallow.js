// let arr = [1, 2, 3, 4, [10, 12], 5, 6];

// // assigning arr to copiedArr
// let copiedArr = arr;
// // console.log(copiedArr);
// copiedArr[2] = 100;
// console.log("arr: ", arr, "copiedArr: ", copiedArr);

/***
 * array , object -> two types of values -> primitves(values) , non primitives(reference)
 * Assignment ->
 *  values ->  are not copied, only main address copied.
 *  reference -> they are also not copied, only main address copied.
* */

/*****
 * shallow copy: shallow copy of an object/Array is a copy whose properties share the same references
 * (point to the same underlying values) as those of the source object from which copied
 * object is formed
 * shallow copy :
 *  value -> values will be copied and they have diff mem
 * references -> new references will be created but the values inside the reference will be pointing towards same location
 * */

/**----------------------- spread --------------------------------------------*/
// let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// let spreadArray = [...arr];
// spreadArray[2] = 100;
// // spreadArray[4] = 200;

// spreadArray[4][1] = 300;
// console.log("outputs ", spreadArray, arr);

/**----------------------------------- Object.assign -----------------------------------**/
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
};

// let veryShallowCopy = person;
// veryShallowCopy.firstName = "Tapaswini";
// console.log("person", person);
// console.log("copiedObject", veryShallowCopy);

// assign operator create deep copy till level 1 same like spred operator.

// // let copiedObject = Object.assign({}, person);
// copiedObject.lastName = "Odinson";
// copiedObject.address.street = "south 1st street";

// console.log("person", person);
// console.log("copiedObject", copiedObject);

// // Work in same way as assin operator.
// let copiedObject = { ...person };

/**----------------------- Stringify --------------------------------------------*/
/**
 * Deep Copy : JSON.stringify and JSON.parse
 * */

// // convert obj to string 
let stringSyntaxOfobject = JSON.stringify(person);
console.log(stringSyntaxOfobject);

// How to get to know is this a string?
console.log(typeof stringSyntaxOfobject);

// /**deep copy -> object like string*/
let deepClonedObj = JSON.parse(stringSyntaxOfobject);

deepClonedObj.lastName = "Odinson";
deepClonedObj.address.street = "south 1st street";

console.log("person", person);
console.log("copiedObject", deepClonedObj);


/**----------------------- Array --------------------------------------------*/
let arr = [1, 2, 3, 4, [10, 12], 5, 6];
let stringArr = JSON.stringify(arr);
console.log(stringArr);

const deepArray = JSON.parse(stringArr);
deepArray[2]  = 100;
deepArray[4][1] = 300;
console.log("arr: ", arr, "deepArray: ", deepArray);

// JSON.stringify -> deep copy 
// JSON.parse -> BottleNeck(It is a costly operation.)


