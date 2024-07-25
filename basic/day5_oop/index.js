// prototype:
// an object will have all of its prototype's properties

const obj0 = {
  foo: "foo",
};

const obj1 = {
  a: "a1",
  //obj1 will have all obj0's properties
  __proto__: obj0,
};

const obj2 = {
  a: "a2",
  b: "b2",
  //obj2 will have all obj1's properties
  __proto__: obj1,
};

// console.log(obj2.oiqwjfioqwhfoijqoiwfoqwj);

// #############################################################################

// const bookPrototype = {
//   getSummary() {
//     return `The book ${this.name} is published in year ${this.year}`;
//   },
//   getYear() {
//     return this.year;
//   },
// };

// const book1 = {
//   name: "Intro to Javascript",
//   author: "John Smith",
//   year: 2015,
//   __proto__: bookPrototype,
// };

// const book2 = {
//   name: "Intro to Python",
//   author: "John Smith",
//   year: 2016,
//   __proto__: bookPrototype,
// };

// const year = book1.getYear();
// console.log(year);

// ################## Constructor Function ######################################
// ES5

// function Book(name, year) {
//   this.name = name;
//   this.year = year;
// }

// Book.prototype.getSummary = function () {
//   return `${this.name} is published in ${this.year}`;
// };

// ES6 Class Syntax Sugar
class Book {
  #name;
  #year;

  // static methods belong to the class
  static foo() {
    console.log("foo");
  }

  constructor(name, year) {
    this.#name = name;
    this.#year = year;
  }

  // prototype methods are used by instances
  getSummary() {
    return `${this.#name} is published in ${this.#year}`;
  }
}

const book1 = new Book("Intro to C", 2000);
const book2 = new Book("Intro to Java", 2001);
// Book.foo()

// console.log(book2);
// console.log(book1.getSummary());
// book1.name = "oiqwjroqiwjroiqw";
// console.log(book1.getSummary());

// console.log(book1.getSummary === book2.getSummary);

// console.log([].forEach === [].forEach);

// ################## Array prototype method ######################################

// const numbers = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
// numbers.forEach((num) => {});

// const oddNumbers = numbers.filter((num) => {
//   return num % 2 === 1;
// });

// const newNumbers = numbers.map((num) => {
//   return num + 1;
// });

// ################## Prototype Methods you should know ######################################
// must know Array
// forEach, filter, map, find, includes, join, pop, push, reduce, sort
// slice, reverse

// other useful ones
// some, every, findIndex,

// static:
// isInteger, isNaN, parseInt, parseFloat

// must know Strings
// split, toUpperCase, toLowerCase
// useful ones:
// includes, charAt, slice, replace, substring, trim

// must know Object
// static
// entries, keys, values

// ################## This keyword ######################################

// this refers to the object that is invoking the method

const person = {
  firstName: "Jack",
  sayHiDelay() {
    // console.log("this", this);

    // setTimeout(
    //   function () {
    //     // console.log("this", this);
    //     console.log(`Hi, my name is ${this.firstName}`);
    //   }.bind(this),
    //   1000
    // );

    setTimeout(() => {
      console.log(`Hi, my name is ${this.firstName}`);
    }, 1000);
  },
};

// person.sayHiDelay();
