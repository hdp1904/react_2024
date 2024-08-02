const themeReducer = (state = "dark", action) => {
  switch (action.type) {
    case "THEME_TOGGLE":
      return state === "dark" ? "light" : "dark";

    default:
      return state;
  }
};

export function toggleTheme() {
  return { type: "THEME_TOGGLE" };
}

export default themeReducer;
