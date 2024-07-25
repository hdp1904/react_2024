import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserAsync,
  updateUserNameAsync,
} from "../redux/reducers/userReducer";

export default function UserProfile() {
  const { loading, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAsync);
  }, []);

  const handleChangeName = () => {
    const newName = "John Smith";
    dispatch(updateUserNameAsync(newName));
  };

  return (
    <div>
      <h1>User Profile</h1>

      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div>{user.name}</div>
          <button onClick={handleChangeName}>Change Name</button>
        </div>
      )}
    </div>
  );
}
