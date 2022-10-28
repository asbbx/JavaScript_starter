"use strict";

// function Person(name, gender) {
//   this.name = name;
//   this.gender = gender;
// }

// Person.prototype.sayName = function () {
//   console.log(`Меня зовут: ${this.name}.`);
// };

// const person1 = new Person("Александр", "m");
// console.log(person1);

// // ---------------------------------
// function Employee(name, gender, position) {
//   Person.call(this, name, gender);
//   this.position = position;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constuctor = Employee;

// Employee.prototype.sayPosition = function () {
//   console.log(`Моя работа: ${this.position}`);
// };

// const employee1 = new Employee("Петр", "m", "Дворник");
// console.log(employee1);
// ----------------------------------

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  sayName() {
    console.log(`Мое имя - ${this.name}.`);
  }
}

const person1 = new Person("Галя", "f");
const person2 = new Person("Андрей", "m");

class Employee extends Person {
  constructor(name, gender, position) {
    // Person.call(this, name, gender);
    super.gender(name, gender);
    this.position = position;
  }
}
