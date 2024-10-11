const personForm = document.getElementById("personForm");
const nameInput = document.getElementById("personName");
const ageInput = document.getElementById("personAge");
const addPersonBtn = document.getElementById("addPersonBtn");

// const people = JSON.parse(localStorage.getItem("people")) || [];
let people = JSON.parse(localStorage.getItem("people"));
if (!people) people = [];

const display = () => {
  const tempDiv = document.createElement("div");

for(let i of people){
  const temp = document.createElement("p");
  temp.append(i.name, " ", i.age);
  tempDiv.appendChild(temp);
}
personForm.after(tempDiv);
}

display();

personForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   return;
  const newPerson = {
    id: uuidv4(),
    name: nameInput.value,
    age: Number(ageInput.value),
  };

  people.push(newPerson);

  localStorage.setItem("people", JSON.stringify(people));

  personForm.nextElementSibling.remove();

  display();

});

// console.log(people);

// for(let i of people){
//   console.log(`${i.name} ${i.age}`)
// }
