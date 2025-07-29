// Exercise 1: Basic Closures
// Create a function createGreeting(greeting) that takes a string greeting and returns a function.
// The returned function should take a name as an argument and return a string that
// combines the greeting and the name.

// const sayHello = createGreeting("Hello");
// console.log(sayHello("Alice"));  // Outputs: "Hello Alice"
// const sayHi = createGreeting("Hi");
// console.log(sayHi("Bob"));  // Outputs: "Hi Bob"
function createGreeting(greeting) {
  return (name) => {
    return `${greeting} ${name}`;
  };
}

const sayHello = createGreeting("Hello");
console.log(sayHello("Alice")); // "Hello Alice"
const sayHi = createGreeting("Hi");
console.log(sayHi("Bob")); // "Hi Bob"

// Exercise 2: Counter
// Write a function createCounter() that initializes a counter to 0 and returns an object with two methods:
// increment() which increments the counter and returns the new value,
// and getValue() which returns the current value of the counter.

// let counter = createCounter();
// console.log(counter.getValue());  // Outputs: 0
// console.log(counter.increment());  // Outputs: 1
// console.log(counter.increment());  // Outputs: 2
// console.log(counter.getValue());  // Outputs: 2
function createCounter() {
  let count = 0;
  function increment() {
    return ++count;
  }
  function getValue() {
    return count;
  }
  return {
    increment,
    getValue,
  };
}

let counter = createCounter();
console.log(counter.getValue()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getValue()); // 2

// Exercise 3: Function Store
// Create a function functionStore() that allows you to store and retrieve functions by a key.
// It should return an object with two methods: store(key, fn) which stores the function fn
// under the string key, and run(key, ...args) that runs the function stored under key with
// the provided arguments.

// Example;
// let store = functionStore();
// store.store("add", (a, b) => a + b);
// console.log(store.run("add", 5, 7)); // Outputs: 12
function functionStore() {
  const obj = {};
  function store(key, fn) {
    obj[key] = fn;
    return obj;
  }
  function run(key, ...args) {
    return obj[key](...args);
  }
  return {
    store,
    run,
  };
}

let store = functionStore();
store.store("add", (a, b) => a + b);
console.log(store.run("add", 5, 7)); // 12

// Exercise 4: Private Variables
// Write a function createPerson(name) that creates private variables and provides methods
// to access and modify them. This function should return an object with methods getName()
// to return the current name, and setName(newName) to set a new name.

// let person = createPerson("Alice");
// console.log(person.getName());  // Outputs: "Alice"
// person.setName("Bob");
// console.log(person.getName());  // Outputs: "Bob"
function createPerson(name) {
  let person = name;
  function getName() {
    return person;
  }
  function setName(newName) {
    person = newName;
    return person;
  }
  return {
    getName,
    setName,
  };
}

let person = createPerson("Alice");
console.log(person.getName()); // "Alice"
person.setName("Bob");
console.log(person.getName()); // "Bob"

// Exercise 5: Limited Call Function
// Description: Write a function createLimitedCallFunction(fn, limit) that
// takes a function fn and a number limit as arguments. This returned function can only be
// called up to limit times. After the limit is reached, every subsequent call to this function
// should be ignored.

// function sayHello() {
//   console.log("Hello!");
// }

// let limitedHello = createLimitedCallFunction(sayHello, 3);
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // No output, subsequent calls are ignored

function createLimitedCallFunction(fn, limit) {
  let count = 0;
  return () => {
    count++;
    if (count <= limit) {
      return fn();
    }
  };
}

function sayHello() {
  console.log("Hello!");
}
let limitedHello = createLimitedCallFunction(sayHello, 3);
limitedHello(); //  "Hello!"
limitedHello(); //  "Hello!"
limitedHello(); //  "Hello!"
limitedHello(); // No output, subsequent calls are ignored

// Exercise 6: Rate Limiter
// Implement a function createRateLimiter(limit, interval) that limits how often a
// given function can be called. The function should return a new function that, when called,
// will invoke the original function only if a certain amount of time (interval in milliseconds)
// has passed since the last invocation. The limit parameter should specify how many times the function
// can be triggered within the given interval.

// function logMessage(message) {
//   console.log(message);
// }

// let limitedLog = createRateLimiter(logMessage, 2, 10000); // Allow 2 calls every 10 seconds
// limitedLog("Hello"); // "Hello" is logged
// limitedLog("World"); // "World" is logged
// limitedLog("Again"); // This call is ignored

function createRateLimiter(fn, limit, interval) {
  let isExceeded = false;
  let count = 0;
  setInterval(() => {
    count = 0;
  }, interval);
  return (name) => {
    count++;
    count > limit ? (isExceeded = true) : (isExceeded = false);
    if (!isExceeded) {
      return fn(name);
    }
  };
}

function logMessage(message) {
  console.log(message);
}

let limitedLog = createRateLimiter(logMessage, 2, 2000); // Allow 2 calls every 10 seconds
limitedLog("Hello"); // "Hello" is logged
limitedLog("World"); // "World" is logged
limitedLog("Again"); // This call is ignored
