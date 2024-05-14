"use strict";

const myDeepCount = (arr) => {
  let sum = 0;

  for (let value of arr) {
    if (Array.isArray(value)) {
      sum += 1 + myDeepCount(value);
    } else {
      sum += 1;
    }
  };

  return sum;
};

const arr = [[[[[[[[[]]]]]]]]];

console.log(myDeepCount(arr));

// Вариант с циклом
function deepCount(a){
  let count = a.length;
  for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
  return count;
}

// Вариант с методом reduce
function deepCountAgain(a){
  return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCountAgain(e) : 0),a.length);
}
