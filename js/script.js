'use strict';

class User {
  static staticMathod() {
    alert(this === User);
    console.log(User);
  }

  foo() {
    console.log('вызов статической функции');
    User.staticMathod();
  }
}

//User.staticMathod();

const user = new User();
