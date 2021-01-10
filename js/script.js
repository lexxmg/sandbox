
'use strict';

const arr = [2, 4, 5, 6, 9];

const foo = (num) => {
  return (el) => {
    return el !== num;
  }
}

console.log(arr);
console.log( arr.filter(foo(4)) );
//console.log( arr.some(foo(44)) );
//console.log( arr.find(foo(4)) );
