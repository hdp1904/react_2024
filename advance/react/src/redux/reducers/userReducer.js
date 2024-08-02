import { getUser, updateUser } from "../../Day9Redux/api/user";

const userReducer = (
  state = {
    loading: false,
    error: false,
    user: {},
  },
  action
) => {
  switch (action.type) {
    case "FETCH_USER_START":
      return { ...state, loading: true };
    case "FETCH_USER_SUCCESS":
      return { ...state, loading: false };
    case "FETCH_USER_REJECT":
      return { ...state, loading: false, error: true };
    case "SET_USER":
      return { loading: false, user: action.payload };
    default:
      return state;
  }
};

export function startUserFetch() {
  return { type: "FETCH_USER_START" };
}

export function userFetchSuccess() {
  return { type: "FETCH_USER_SUCCESS" };
}

export function userFetchReject() {
  return { type: "FETCH_USER_REJECT" };
}

export function setUser(user) {
  return { type: "SET_USER", payload: user };
}

export async function fetchUserAsync(dispatch, getState) {
  dispatch(startUserFetch());
  try {
    const user = await getUser();
    dispatch(userFetchSuccess());
    dispatch(setUser(user));
  } catch (err) {
    dispatch(userFetchReject());
  }
}

export function updateUserNameAsync(name) {
  return async function updateUserThunk(dispatch, getState) {
    const {
      user: { user },
    } = getState();
    dispatch(startUserFetch());
    try {
      const newUser = await updateUser({
        ...user,
        name,
      });
      dispatch(userFetchSuccess());
      dispatch(setUser(newUser));
    } catch (err) {
      dispatch(userFetchReject());
    }
  };
}

export default userReducer;
