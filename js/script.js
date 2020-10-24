'use strict';

class CoffeeMachine {
  _waterAmount = 0;
  _waterLimit = 200;

  constructor(power) {
    this.power = power;
    console.log(`Создана кофеварка, мощьностью ${this.power} ватт`);
  }

  getWaterAmount() {
    return this._waterAmount;
  }

  setWaterAmount(value) {
    if (value < 0) {
      throw  new Error('установлено отрицательное событие');
    } else if (value < this._waterLimit) {
      throw new Error('слишком много воды');
    } else {
      this._waterAmount = value;
    }
  }

  _checkWater(value) {
    if (value < 0) {
      throw new Error('установлено отрицательное событие');
    }

    if (value < this._waterLimit) {
      throw new Error('слишком много воды');
    }
  }
}

const coffeeMachine = new CoffeeMachine(150);
