// This object  -> copy of it 
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }],
    sayHi: function(){
        console.log("Hi Class!");
    }
};

// for(let k in person.friends){
//     console.log("Key: ", k, " value: ", person.friends[k]);
// }

// It will work but not a correct way to code it.
// function superClone(obj) {
//     //    create new object
//     let newobj = {};
//     // copy all the keys and values
//     for (let key in obj) {
//         let isKeyObj = typeof obj[key];

//         if (isKeyObj == "object") {
//             let newSmallCopiedObj = superClone(obj[key]);
//             newobj[key] = newSmallCopiedObj
//         } else {
//             newobj[key] = obj[key];
//         }
//     }
//     //   retrun the obj
//     return newobj;
// }

function superCloneEffective(input) {
    if(!Array.isArray(input) & typeof input !== 'object'){
        return input; // function or either primitive data types.
    }

    // Create a new container to clone values.
    let clone = Array.isArray(input) ? [] : {};

    // Copy all the keys and values.
    for(let key in input){
        const value = input[key];
        clone[key] = superCloneEffective(value);
    }

    // return the obj.
    return clone;
}

let superDeeplyClonedObj = superCloneEffective(person);
superDeeplyClonedObj.lastName = "Odinson";
superDeeplyClonedObj.address.street = "south 1st street";

console.log("person", person);
console.log("superCopiedObject", superDeeplyClonedObj);

// why does shallow copy exist not deep copy ?
// Answer : We can have array and object that can have 'n' level of nesting an there 
// size is only limited by js heap so for performance point of view it good to have 
// shallow copy




