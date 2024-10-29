// GET

fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  .then((posts) => {
    // console.log(posts);
  });

document.querySelector("#newTodo").addEventListener("click", () => {
  fetch("http://localhost:3000/todos", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task: "play",
    }), // body data type must match "Content-Type" header
  });
});
