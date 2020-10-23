'use strict';

class User {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  static staticMathod() {
    console.log(this === User);
    console.log(User);
  }

  static compare(a, b) {
    return a - b;
  }

  foo() {
    console.log('вызов статической функции');
    User.staticMathod();
  }
}

User.staticMathod();

const user = new User(50, 90);


class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

const rabbit = new Rabbit('Кроль');

console.log(rabbit);
