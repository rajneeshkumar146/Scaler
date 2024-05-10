/**
 * Array : a collection of value
 * set: collection of unique values 
 * */

const uniqueSet = new Set();   // It works on concept of hashing.

// add any value to the set  
uniqueSet.add(1);
uniqueSet.add(2);
uniqueSet.add(3);
uniqueSet.add(1);

console.log(uniqueSet)
console.log(uniqueSet.size)
uniqueSet.delete(2);
console.log(uniqueSet.has(2));
console.log(uniqueSet); 