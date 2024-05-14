"use strict";

console.log(Number.MAX_SAFE_INTEGER);

// const bigInt = 546511161515151516515131215456421115615615621n;

// const sameBigInt = BigInt(546511161515151516515131215456421115615615621);

console.log(2n == 2);

let bigInt = 1n;
let number = 2;

console.log(bigInt + BigInt(number));
console.log(Number(bigInt) + number);
