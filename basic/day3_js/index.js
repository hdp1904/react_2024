//ES5
var something = "qoiwdoqpwk";

//ES6
let count = 1;
// console.log(count);
// count++;
// console.log(count);

// const foo = "foo";
// foo = "bar";

// var behaviors
// 1. var can be re-declared
// 2. var will be hoisted
//      Hoisting is like moving a 2 to the top before declaring it
// 3. function scoped
//      can be accessed anywhere inside a function

function foo() {
  if (false) {
    var a = "a";
  }
  //   console.log("var", a);
}

foo();

// let and const
// 1. block scoped
// 2. will also be hoisted
//      However, will throw error, because of "Temporal Deadzone"

if (true) {
  const a = "a";
  //   console.log("let", a);
}

// Data Types
// Primitive data types
const num = 5;
const str = "a string";
const bool = true;
const null1 = null;
const undefined1 = undefined;

// Type coercion: automatic conversion of one data type to another
// coercion between string and number
const value = 1 + "1";
// console.log(value, typeof value);

// coercion of truthy and falsy values
// most values in javascript are truthy
// falsy ones will be:

// const variable = [];
// if (variable) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// == is loose comparison, unsafe, because type coercion will happen

// === is strict comparison, safe, it will compare the type as well
// it won't do type coercion. If types are different, then false
// always use it

// const bool3 = 1 == 1;
// const bool3 = 1 == 2;
// const bool3 = 1 == "1";
// const bool3 = true == true;
// const bool3 = 1 == [1]; //true
// const bool3 = 1 == 1 === 1; //false
// const bool3 = (1 === 1) == 1; //true

// if (bool3) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// console.log(!!1); //true
// console.log(!!0); //false
// console.log(!!null); //false
// console.log(!!undefined); //false
// console.log(!!""); //false
// console.log(!!{}); //true
// console.log(!![]); //true

// Type Conversion / Type Casting: manual conversion
// convert a string to number
const numStr = "22";
const normalNum = 11;
const sum = Number(numStr) + normalNum;
// const sum = +numStr + normalNum;
// const sum = parseInt(numStr) + normalNum;
// console.log(sum);

//convert a number to string
// console.log(1 + "");
// console.log((1).toString());
// console.log(`${1}`);

// Reference types: literally everything else
// const arr = [1, 2, 3, 4, 5];
// arr.push(6);

// 123 Main Street
// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = arr1;

// for (let i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i]);
// }

// console.log("arr1", arr1);
// console.log("arr2", arr2);
// console.log(arr1 == arr2);

// console.log("arr2", arr2);
// arr2.length = 0;
// console.log("arr2", arr2);
// console.log("arr1", arr1);

const person1 = {
  name: "Bob",
  age: 1,
  address: {
    street: "123 Main Street",
    zipcode: "12345-0000",
  },
  job: null,
  favNumbers: [1, 2, 3, 4, 5, 6],
  sayHi() {
    console.log("My name is Bob");
  },
};

const person2 = {
  name: "Joe",
  age: 2,
  job: null,
};

const people = [person1, person2];

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  console.log(`${person.name}'s zipcode is: ${person.address?.zipcode}`);

  //   if (person.address) {
  //     console.log(`${person.name}'s zipcode is: ${person.address.zipcode}`);
  //   } else {
  //     console.log(`${person.name} doesn't have an address`);
  //   }
}
// let propertyName = "name";
// console.log(person[propertyName]);
// propertyName = "age";
// console.log(person[propertyName]);
// propertyName = "job";
// console.log(person[propertyName]);
