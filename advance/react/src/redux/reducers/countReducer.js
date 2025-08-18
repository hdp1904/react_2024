const COUNT_ADD = "COUNT_ADD";

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case COUNT_ADD:
      return state + 1;
    case "COUNT_MINUS":
      return state - 1;
    case "COUNT_ADD_BY_AMOUNT":
      return state + action.payload;
    default:
      return state;
  }
};

export function addCount() {
  return { type: COUNT_ADD };
}

export function minusCount() {
  return { type: "COUNT_MINUS" };
}

export function addByAmount(amount) {
  return { type: "COUNT_ADD_BY_AMOUNT", payload: amount };
}

export default countReducer;
