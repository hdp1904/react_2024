import { combineReducers } from "redux";
import countReducer from "./countReducer";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  count: countReducer,

  user: userReducer,
});

export default rootReducer;
