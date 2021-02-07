import React, { useEffect } from "react";
import { fetchUsers } from "../redux";
import { useDispatch, useSelector } from "react-redux";

function HookUsersComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const usersData = useSelector((state) => state.user);

  console.log(usersData);
  return usersData.loading ? (
    <div>
      <h2>Loading</h2>
    </div>
  ) : usersData.error ? (
    <div>Error Occured</div>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {usersData.users.map((user) => (
          <p>{user.username}</p>
        ))}
      </div>
    </div>
  );
}

export default HookUsersComponent;
