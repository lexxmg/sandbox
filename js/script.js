'use strict';

let fruit = ['арбузы', 'бананы', 'Вишня'];
let number = [1, 2, 10, 21, 80, 30, 5];
let items = [
              { name: 'Edward', value: 21 },
              { name: 'Sharpe', value: 37 },
              { name: 'And', value: 45 },
              { name: 'The', value: -12 },
              { name: 'Magnetic' },
              { name: 'Zeros', value: 37 }
            ];


console.log( fruit.sort() );
console.log(fruit);

console.log(number);
console.log( number.sort() );
console.log( number.sort(compareFunction) );
console.log( number.sort(compareUp) );
console.log( number.sort(compareDown) );

console.log( items.sort(compareObj) );


function compareFunction(a, b) {
  return a - b;
}

function compareUp(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

function compareDown(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}

function sortObj(a, b) {
  console.log(a.name);
  console.log(b.name);
}

sortObj(items[0], items[1]);

function compareObj(a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
}
