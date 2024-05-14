"use strict";

const myAmountOfPages = (summary) => {
  let str = '',
      i = 1;

  do {
    str += i;
    i++;
  }
  while (str.length < summary);

  return i - 1;
};

console.log(amountOfPages(5));

function amountOfPages(summary){
  let result = '';
  let n = 0;

  for (let i = 1; i <= summary; i++) {
    result += i;
    if (result.length === summary) {
      n = i;
      break;
    }
  }

  return n;
}
