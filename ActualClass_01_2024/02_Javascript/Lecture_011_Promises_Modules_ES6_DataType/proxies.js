// Object
let obj = { eng: "English", math: "Mathematics" };

// custom handler
let handler = {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            throw new Error("Property does not exist");
        }
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value;
            return true;
        } else {
            throw new Error("Cannot add new property");
        }
    }
};


// Create Proxy
let proxy = new Proxy(obj, handler);

console.log(proxy.eng);
console.log(proxy.science);


// A Proxy is created with the object and the handler defines how operations on the Proxy are intercepted and handled.
// The get handler intercepts property access. If the property exists in the target object (obj), it returns the property value. If not, it throws an error.
// The set handler intercepts property assignment. If the property exists in the target object, it sets the property value and returns true. If not, it throws an error.

