"use strict";

// function toBeep() {
//   console.log(`${this.model} подает сигнал!`);
// }

// const myCar = {
//   model: "BMW",
//   beep: toBeep,
// };

// myCar.beep();
// myCar.model = "Не BMW";
// myCar.beep();

// const myCar2 = {
//   model: "Девятка",
//   beep: toBeep,
// };

// myCar2.beep();
// myCar2.model = "Не Девятка";
// myCar2.beep();

// #2
// function Car(model) {
//   this.model = model;
// }
// const car1 = new Car("BMW");
// const car2 = new Car("Toyota");

// console.log(car1);
// console.log(car2);

// #3
function Car(model) {
  this.model = model;
}
Car.prototype.beep = function () {
  console.log(`${this.model} подает сигнал!`);
};

const car1 = new Car("car1");
const car2 = new Car("car2");

console.log(car1);
console.log(car2);
