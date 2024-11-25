const people = [
  {
    name: "John Smith",
    age: 19,
    occupation: "student",
    networth: -100000,
  },
  {
    name: "John Doe",
    age: 45,
    occupation: "CEO",
    networth: 8250000,
  },
  {
    name: "Michael Johnson",
    age: 57,
    occupation: "Investor",
    networth: 12500000,
  },
  {
    name: "David Lee",
    age: 41,
    occupation: "Entrepreneur",
    networth: 3750000,
  },
];

// can destructure
// function canDrink({ age }) {
//   // if (person.age >= 21) return true;
//   // return false;

//   return age >= 21;
// }

const canDrink = ({ age }) => age >= 21;

function sum(...numbers) {
  return numbers.reduce((accu, curr) => {
    return accu + curr;
  }, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];

// console.log(sum(...numbers));

// higher order function
function delayedCall(callbackFn, delay, ...args) {
  setTimeout(() => {
    callbackFn(...args);
  }, delay);
}

// function sayHello(name) {
//   console.log("hello", name);
// }

// function sum(...numbers) {
//   const total = numbers.reduce((accu, curr) => accu + curr, 0);
//   console.log(total);
//   return total;
// }

// delayedCall(sum, 2000, 1, 2, 3, 4, 5, 6, 7, 1);

// IIFE: immediately invoked function expression

// const message = (() => {
//   const msg = "private message";
//   return `message: ${msg}`;
// })();

// console.log(msg);

const counter = (() => {
  let count = 0;

  function increment(amount = 1) {
    count += amount;
  }

  function decrement(amount = 1) {
    count -= amount;
    this.count;
  }

  function getCount() {
    return count;
  }

  return {
    getCount,
    increment,
    decrement,
  };
})();

// closure:
// inner function can access outer function properties
// even after the outer function has returned

// console.log(counter.getCount());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.getCount());

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

const sayHi = createGreeting("Hi");
// console.log(sayHi("Alice"));

const sayHowAreYou = createGreeting("How are you?");
// console.log(sayHowAreYou("Bob"));

// document.addEventListener("mousemove",e=>{

// })

function getSuggestions(query) {
  console.log("You spent $1 for the query:", query);
}

function debounce(callback) {
  let id = null;

  return (...args) => {
    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(() => {
      callback(...args);
    }, 1000);
  };
}

const debouncedFn = debounce(getSuggestions);

document.getElementById("query").addEventListener("input", (e) => {
  debouncedFn(e.target.value, 1, 2, 3);
});
