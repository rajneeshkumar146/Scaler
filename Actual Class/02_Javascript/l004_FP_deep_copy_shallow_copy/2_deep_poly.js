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
//     console.log("key: ", k, " value: ", person.friends[k]);

// }

function superCloneEffective(input) {
    if(!Array.isArray(input) && typeof input !== "object"){
        return input;   // function or either primitive data type.
    }

    // create new container to clone values.
    let clone = Array.isArray(input) ? [] : {};

    // copy all the keys and values
    for (let key in input) {
        const value = input[key]
        clone[key] = superCloneEffective(value);
    }

    //   retrun the obj
    return clone;
}

let superDeeplyClonedObj = superCloneEffective(person);
superDeeplyClonedObj.lastName = "Odinson";
superDeeplyClonedObj.address.street = "south 1st street";

console.log("person", person);
console.log("superCopiedObject", superDeeplyClonedObj);







