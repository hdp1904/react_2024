import React from "react";

// passing props to child component
export default function Parent() {
  return (
    <div style={{
      border: "1px solid red",
      padding: "10px",
    }}>
      <h2>Parent Component</h2>
      <Child a="a" b="b" c="c" d="d" >
        children prop
      </Child>
    </div>
  );
}

function Child({ a, b, c, d, children }) {
  // const { a, b, c, children } = props;
  // console.log(a, b, c, d, children);

  const p = { name: "John", age: 30 };

  const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    age: 20
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    age: 30
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    age: 40
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    age: 20
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    age: 20
  }];

  return <div style={{
    border: "1px solid red",
  }}>
    <h2>Child component</h2>
    <div>a: {1 + 1 + 1 + 1 + 1 + 1}</div>
    <div>Cannot render objects: {p.age}</div>
    <div>Can render boolean, undefined, null, but nothing will show up: {null}</div>
    <ul>
      {people.map((person) => {
        const { id, name, profession, age } = person;

        return <li key={id}>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>Can drink: {age >= 21 ? 'yes' : "no"}</div>
          <div>Profession: {profession}</div>
        </li>
      })}
    </ul>

  </div>;
}
