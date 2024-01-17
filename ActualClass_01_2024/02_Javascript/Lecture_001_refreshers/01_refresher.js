// Ist statement
console.log("value of a ", a);  // I'm able to access var a without declaring it, later on I will tell the reason.

var a; // Always undefined.
console.log("value of a ", a);
a = 10;
console.log("value of a ", a);
a = "abc";
console.log("value of a ", a);
a = 'abcdef';   // Both single quote and double quote work in a same way.
console.log("value of a ", a);
a = 10.234;
console.log("value of a ", a);
a = true;
console.log("value of a ", a);

// 2nd statement: There is no difference between single and double quote string.
var age = 25;
var name = 'Rajneesh'
var c = "Hi my name is " + name + ' and age is ' + age;
console.log("value of c: ", c);

var d = `hi ${age}` +
    ` hello`;
console.log("value of d: ", d);   // It will create a single line statement. It will concate both string and create a single line.

// 3rd statement: for template string using `` to store multiple lines of string and '${}' to refer any value. 
var s3 = `Hi my name is ${name}
     and my age is ${age}, How are you doing today?`
console.log("Value of s3: ", s3);

// 4th statement
var e;
console.log("typeof a where content is: " + e + " => " + typeof e);
e = 10;
console.log("typeof a where content is: " + e + " => " + typeof e);
e = "abc";
console.log("typeof a where content is: " + e + " => " + typeof e);
e = 'abc';
console.log("typeof a where content is: " + e + " => " + typeof e);
e = 'a';
console.log("typeof a where content is: " + e + " => " + typeof e);
e = 10.333
console.log("typeof a where content is: " + e + " => " + typeof e);
e = null;
console.log("typeof a where content is: " + e + " => " + typeof e);


// 5th statement: In js number is treated as 64bit floting number.
var f = 5 / 3;
console.log("value of f: ", f);

// 6th statemnet.
var g = [10, 20.5, "abc", 'def', true];
console.log("value of g: ", g);
console.log("typeof of g: ", typeof g);
console.log("type of g: ", Array.isArray(g));

// 7th statement: [Important: why typeof null is object?]
// It is a bug in js which they can't change now, reason is binary code of null is zero and 
// zero treated as a object. read: https://2ality.com/2013/10/typeof-null.html
console.log("typeof of null: ", typeof null);



