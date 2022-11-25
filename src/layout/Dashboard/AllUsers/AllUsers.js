import React from "react";
import { useLoaderData } from "react-router-dom";
import AllUsersTableRow from "./AllUsersTableRow";

const AllUsers = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2 className="text-4xl font-bold mb-10">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>User Role</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <AllUsersTableRow
                key={user._id}
                user={user}
                idx={idx}
              ></AllUsersTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
