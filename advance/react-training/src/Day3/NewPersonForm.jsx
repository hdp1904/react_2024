import React, { useState } from "react";
import { uuidv4 } from "../util/uuid";

const AVAILABLE_PROFESSIONS = [
  "mathematician",
  "chemist",
  "developer",
  "physicist",
];

export default function NewPersonForm({ handleAddPerson }) {
  const [newPerson, setNewPerson] = useState({
    name: "",
    age: "",
    profession: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddPerson({
      id: uuidv4(),
      ...newPerson,
    });
  };

  const handleSelectProf = (e) => {
    // console.log(e.target.value);
    setNewPerson({
      ...newPerson,
      profession: e.target.value,
    });
  };

  const handleNameChange = (e) => {
    setNewPerson({
      ...newPerson,
      name: e.target.value,
    });
  };

  const handleAgeChange = (e) => {
    const newAge = e.target.value;
    if (/^[0-9]*$/.test(newAge)) {
      setNewPerson({
        ...newPerson,
        age: newAge,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input required value={newPerson.name} onChange={handleNameChange} />
      </label>
      <label>
        <span>Age</span>
        <input required value={newPerson.age} onChange={handleAgeChange} />
      </label>
      <label>
        <span>Profession</span>
        <select
          value={newPerson.profession}
          onChange={handleSelectProf}
          required
        >
          <option value="">--Please choose an option--</option>
          {AVAILABLE_PROFESSIONS.map((prof) => {
            return (
              <option key={prof} value={prof}>
                {prof}
              </option>
            );
          })}
        </select>
      </label>
      <button type="submit">Add Person</button>
    </form>
  );
}

// export default function NewPersonForm({ handleAddPerson }) {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [profession, setProfession] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const person = {
//       id: uuidv4(),
//       profession,
//       name,
//       age,
//     };

//     handleAddPerson(person);
//   };

//   const handleSelectProf = (e) => {
//     // console.log(e.target.value);
//     setProfession(e.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         <span>Name</span>
//         <input
//           required
//           value={name}
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />
//       </label>
//       <label>
//         <span>Age</span>
//         <input
//           required
//           value={age}
//           onChange={(e) => {
//             const newAge = e.target.value;
//             if (/^[0-9]*$/.test(newAge)) {
//               setAge(newAge);
//             }
//           }}
//         />
//       </label>
//       <label>
//         <span>Profession</span>
//         <select value={profession} onChange={handleSelectProf} required>
//           <option value="">--Please choose an option--</option>
//           {AVAILABLE_PROFESSIONS.map((prof) => {
//             return (
//               <option key={prof} value={prof}>
//                 {prof}
//               </option>
//             );
//           })}
//         </select>
//       </label>
//       <button type="submit">Add Person</button>
//     </form>
//   );
// }
