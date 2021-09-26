export default class Counter {
  constructor(number = 0) {
    this.number = number;
  }

  addOne() {
    this.number += 1;
  }

  addTwo() {
    this.number += 2;
  }

  minusOne() {
    this.number -= 1;
  }

  minusTwo() {
    this.number -= 2;
  }
}