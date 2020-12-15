'use strict';

const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

const foo = (callback) => {
  callback();
}

btn.addEventListener('click', () => {
  callback();
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  console.log('this инутри вызова' + ' ' + this);
  console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
});

btn1.addEventListener('click', function() {
  callback();
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  console.log('this инутри вызова' + ' ' + this);
  console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
});

btn2.addEventListener('click', callback);

function callback() {
  this.test = 'test';

  console.log('____________________________');
  console.log('функция callback вызвана');
  console.log('значение this');
  console.log(this);
  console.log('____________________________');
}
