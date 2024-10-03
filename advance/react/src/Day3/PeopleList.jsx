import React, { useState } from "react";
import NewPersonForm from "./NewPersonForm";

const initPeople = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    age: 20,
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    age: 30,
  },
];

export default function PeopleList() {
  const [people, setPeople] = useState(initPeople);

  const handleDeletePerson = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });

    setPeople(newPeople);
  };

  const handleIncrementAge = (id) => {
    const newPeople = people.map((person) => {
      return person.id === id
        ? {
            ...person,
            age: person.age + 1,
          }
        : person;

      //   if (person.id === id) {
      //     return {
      //       ...person,
      //       age: person.age + 1,
      //     };
      //   }

      //   return person;
    });

    setPeople(newPeople);
  };

  const handleAddPerson = (newPerson) => {
    setPeople((prev) => [...prev, newPerson]);
  };

  return (
    <div>
      <h2>People List</h2>
      <NewPersonForm handleAddPerson={handleAddPerson} />
      <div>
        {people.map((person) => {
          const { id, name, profession, age } = person;
          return (
            <div key={id}>
              <div>name: {name}</div>
              <div>profession: {profession}</div>
              <div>Age: {age}</div>
              <button onClick={() => handleDeletePerson(id)}>
                Delete person
              </button>
              <button onClick={() => handleIncrementAge(id)}>Add Age</button>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
