'use strict';

console.log(({}).prototype === ({}).__proto__); //false

function ItKamasutra() {

}

function ItIcubator() {

}
console.log(ItKamasutra.prototype === ItKamasutra.__proto__); //false

console.log(ItIcubator.__proto__); // function()
console.log(ItIcubator.__proto__ === ItKamasutra.__proto__); //true
console.log(ItIcubator.prototype === ItKamasutra.prototype); //false

let component = (props) => {
  return `<div>I don't know Prototype</div>`;
}

console.log(component.prototype === Object.prototype); //false

let age = 18;

console.log(age.__proto__); // Number {}
console.log(age.prototype === Number.prototype); //false
console.log(age.__proto__ === Number.prototype); //true

class Hacker {}

console.log(Hacker.__proto__ === Function.prototype); //true

//______________________________________________________________________________
const a = {
  value: 18
}

console.log(a.value); //18

const b = {
  age: a
}

console.log(b.age); //Obgect a{}
console.log(b.age.value); // 18

let c = a;

console.log(c); //Object a{}
console.log(c.value); // 18

console.log(a === b.age); //true
console.log(a === c); //true

//______________________________________________________________________________

class Samurai {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(this.name);
  }
}

const shogun = new Samurai('Djek');

console.log(shogun.__proto__.__proto__ === Object.prototype);
console.log(shogun.__proto__.constructor.__proto__ === Function.prototype);
console.log(shogun.__proto__.__proto__.__proto__ === null);
