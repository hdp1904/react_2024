// setTimeout(() => {
//   console.log("time out");
// }, 0);

// for (let i = 0; i < 10000; i++) {
//   if (i === 9999) {
//     console.log(i);
//   }
// }

// async functions will always return a promise
async function foo() {
  return 5;
}

// console.log(foo());

// fetch api using promise
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    // console.log("data", data);
  });

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
}

async function getTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
}

// if i want to use await, i have to use it inside an async function
async function startApp() {
  const posts = await getPosts();
  const todos = await getTodos();
}

const getUsersInformationByIds = async (...userIds) => {
  const users = await Promise.all(
    userIds.map((userId) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
        (res) => res.json()
      )
    )
  );

  // const promises = userIds.map((userId) =>
  //   fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) =>
  //     res.json()
  //   )
  // );

  //   const users = await Promise.all(promises);
  return users;

  //   const users = [];
  //   for (const userId of userIds) {
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/users/${userId}`
  //     );
  //     const userInfo = await res.json();
  //     users.push(userInfo);
  //   }
  //   return users;
};

getUsersInformationByIds(1, 2, 3).then((users) => {
  //   console.log(users);
});


