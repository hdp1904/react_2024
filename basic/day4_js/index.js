const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1]; // [arr1[0], arr1[1], arr1[2], arr1[3]]

const person1 = {
  name: "Bob",
  age: 1,
  address: {
    street: "123 Main Street",
    zip: "20000",
  },
  job: null,
  // sayHi() {
  //   console.log("hello");
  // },
  abc: undefined,
};

// shallow deep
const person2 = { ...person1 };
// {name: person1.name, age: person1.age, address: person1.address}
person2.name = "Joe";
person2.address.zip = "10000";

// Deep copy

// 1. use JSON.stringify and parse
// will remove all functions and undefined values;
const person3 = JSON.parse(JSON.stringify(person1));
person3.name = "Mike";
// console.log(person3);
// console.log(person1);

// 2. use 3rd party library
// lodash cloneDeep
const person4 = _.cloneDeep(person1);
person4.name = "qwoieiqwojrqwjio";

// console.log(p1Str);

// console.log("person1", person1);
// console.log("person2", person2);

// Destructure
const address = {
  street: "123 Main Street",
  city: "Anytown",
  state: "CA",
  zip: "12345",
  country: "USA",
};
// object destructure,
// order doesn't matter, names do

// If we have a duplicate variable name
const state = "the state of our application";

const {
  street,
  state: addressState,
  zip,
  country,
  city,
  oiqwjeioqwjeiojqwoe = "default value",
} = address;

// smelly code
// const wholeAddress = `${address.street} ${address.city} ${address.state} ${address.zip} ${address.country}`;
// const briefAddress = `${address.street} ${address.city}`;

const wholeAddress = `${street} ${city} ${addressState} ${zip} ${country}`;
const briefAddress = `${street} ${city}`;
// console.log(wholeAddress);

// array destructure
// orders do matter, names don't
// const [aaaaaaaaaaa, b] = [12,];

// rest operator
// has to be at the last position
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, ...rest] = numbers;
// console.log(a, b);

const user = {
  username: "johnsmith123",
  email: "john123@gmail.com",
  password: "123456",
  activated: true,
  phone: "123-123-1234",
};

const { password, ...userInfo } = user;

// console.log(userInfo);
