const reviews = [
  {
    id: "R001",
    author: "John Doe",
    rating: 5,
    comment: "These headphones are amazing! Highly recommend.",
  },
  {
    id: "R002",
    author: "Jane Smith",
    rating: 4,
    comment:
      "The sound quality is great, but the battery life could be better.",
  },
  {
    id: "R003",
    author: "Michael Johnson",
    rating: 4.5,
    comment: "Excellent headphones for the price. Great for traveling.",
  },
];

// const review = reviews[2];
// console.log(reviews.includes(review));

//sort
const arr = [1, 2, 3, 4, 3, 2, 1, 13, 14];
const newArray = [...arr].sort();

// console.log(arr === sortedArray);

//traverse an array

for (let i = 0; i < arr.length; i++) {
  // break; // stops the loop
  //   if (arr[i] === 13) {
  //     continue;
  //   }
}

for (const num of arr) {
  // console.log(num);
  // can break, continue
}

for (const i in arr) {
  // i will the index
  // console.log(i);
}

arr.forEach((num, index) => {});


