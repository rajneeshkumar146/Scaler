// 1s statement.
var a; // always undefined.
console.log("value of a: ", a);
a = 10;
console.log("value of a: ", a);
a = "abc";
console.log("value of a: ", a);
a = 'abcdefghi';
console.log("value of a: ", a);


// 2nd statement: There is no difference between single and double quote string.
var age = 15;
var name = 'Rajneesh';
var c = "Hi my name is " + name + ' and age is ' + age;
console.log("value of c: ", c);

var d = "hi" +
    "hello";
console.log("value of d: ", d); // it will create a sinle line statement.

// 3rd statement: for template string using `` to store multiple lines of string and '${}' to refer any value.
var s3 = `hi my name is ${name}
and my age is ${age}, How are you doing today?`;
console.log("value of s23: ", s3);


// 4th statement.
var e;
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = 10;
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = "abc123";
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = 'a'
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = 'aabsj'
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = `abcdef + ${name}`
console.log("typeof a where constent is: " + e + " -> ", typeof e);

// 5th ststement: In Js number is treated as 64 bit floating number.
var f = 5 / 2;
console.log("value of f: ", f);
console.log("typeof a where constent is: " + f + " -> ", typeof f);


// Toggle characters
function toggleCharacter(str, upperCaseStarting, upperCaseEnd, lowerCaseStarting, lowerCaseEnd){
    let ans = "";
    for(let i = 0; i < str.length;i++){
        let charcode = str.charCodeAt(i);
        if(charcode >= upperCaseStarting.charCodeAt(0) && charcode <= upperCaseEnd.charCodeAt(0)){
            var code = charcode - upperCaseStarting.charCodeAt(0) + lowerCaseStarting.charCodeAt(0);
            ans += String.fromCharCode(code);
        }else if(charcode >= lowerCaseStarting.charCodeAt(0) && charcode <= lowerCaseEnd.charCodeAt(0)){
            var code = charcode - lowerCaseStarting.charCodeAt(0) + upperCaseStarting.charCodeAt(0);
            ans += String.fromCharCode(code);
        }else{
            ans += str.charAt(i);
        }
    }
    return ans;
}

console.log(toggleCharacter("abcDefGHIjkl123", "A", "Z", "a", "z"));



// 6th statement.
var g = [10, 20.5, "abc", 'def', true, [1,23,45]];
console.log("value of g: ", g);
console.log("value of g: ", typeof g);
console.log("value of g: ", Array.isArray(g));

// 7th statement: [Important: why typeof null is object?]
// It is a bug in js which they can't change now, reason is binary code of null is zero and 
// zero treated as a object.
console.log("typeof of null: ", typeof null);





