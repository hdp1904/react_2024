//async kitchen

// function getBeef(cb) {
//   setTimeout(() => {
//     const beef = "beef";
//     cb(beef);
//   }, 500);
// }

// function cookBeef(beef, cb) {
//   setTimeout(() => {
//     if (beef === "beef") {
//       const patty = "patty";
//       cb(patty);
//     }
//   }, 500);
// }

// function getBun(cb) {
//   setTimeout(() => {
//     const bun = "bun";
//     cb(bun);
//   }, 500);
// }

// function getLettuce(cb) {
//   setTimeout(() => {
//     const lettuce = "lettuce";
//     cb(lettuce);
//   }, 500);
// }

// function makeBurger(patty, bun, lettuce, cb) {
//   setTimeout(() => {
//     if (patty === "patty" && bun === "bun" && lettuce === "lettuce") {
//       const burger = "burger";
//       cb(burger);
//     }
//   }, 500);
// }

// getBeef((beef) => {
//   console.log(beef);
//   cookBeef(beef, (patty) => {
//     console.log(patty);
//     getBun((bun) => {
//       console.log(bun);
//       getLettuce((lettuce) => {
//         console.log(lettuce);
//         makeBurger(patty, bun, lettuce, (burger) => {
//           console.log(burger, "ready to serve");
//         });
//       });
//     });
//   });
// });

// ################################################################# Promise #################################################################

function getBeef() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const beef = "beef";
      //   reject("beef is out of stock")
      resolve(beef);
    }, 500);
  });
}

function cookBeef(beef) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (beef === "beef") {
        const patty = "patty";
        resolve(patty);
      } else {
        reject("no beef available");
      }
    }, 500);
  });
}

function getBun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bun = "bun";
      resolve(bun);
    }, 500);
  });
}

function getLettuce() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const lettuce = "lettuce";
      resolve(lettuce);
    }, 500);
  });
}

function makeBurger(patty, bun, lettuce) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (patty === "patty" && bun === "bun" && lettuce === "lettuce") {
        const burger = "burger";
        resolve(burger);
      }
    }, 500);
  });
}

function makeBurgerWithPromise() {
  let patty = null;
  let bun = null;

  getBeef()
    .then((beef) => {
      console.log(beef);
      return cookBeef(beef);
    })
    .then((_patty) => {
      console.log(_patty);
      patty = _patty;
      return getBun();
    })
    .then((_bun) => {
      bun = _bun;
      console.log(_bun);
      return getLettuce();
    })
    .then((lettuce) => {
      console.log(lettuce);
      return makeBurger(patty, bun, lettuce);
    })
    .then((burger) => {
      console.log(burger, "ready to serve");
    })
    .catch((err) => {
      console.log("err", err);
    });
}

async function makeBurgerWithAsyncFunc() {
  try {
    const beef = await getBeef();
    console.log(beef);
    const patty = await cookBeef(beef);
    console.log(patty);
    const bun = await getBun();
    console.log(bun);
    const lettuce = await getLettuce();
    console.log(lettuce);
    const burger = await makeBurger(patty, bun, lettuce);
    console.log(burger);
  } catch (err) {
    console.log("err", err);
  }
}

// makeBurgerWithAsyncFunc();



