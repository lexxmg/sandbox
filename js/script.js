
'use strict';

const users = [
  {id: 1, name: 'вася', age: 16},
  {id: 2, name: 'петя', age: 22},
  {id: 3, name: 'саша', age: 17},
  {id: 4, name: 'даша', age: 19}
];

console.log(users);

console.log( reInndexArr(users, 'id') );

console.log( reInndexArr(users, 'id')[4] );

console.log( reInndexArr(users, 'name').саша );


function reInndexArr(arr, key) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    result[arr[i][key]] = arr[i];
  }

  return result;
}
