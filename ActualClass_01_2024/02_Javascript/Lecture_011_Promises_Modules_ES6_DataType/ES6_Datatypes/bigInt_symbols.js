// in js num datatype -> 64 bit 
// let num = 1000000 ^ 10000000000000000000000000;
// console.log(num);

/***if you want to store a value that is greater then 2^63-1
BigInt -> Stored in heap 
It is a primitive 
You can only do operations among bigINt

***/
// 1
// let bigNum = BigInt(1000000) + BigInt(10000000);
// console.log("big num", bigNum);

//2
// let bigNUm1 = 10000000000000000n;
// let bigNUm2 = 12345768n;
// let res = bigNUm1 * bigNUm2;
// console.log("product", res);

// let div = BigInt(res / 10000n);
// console.log("div", div);
