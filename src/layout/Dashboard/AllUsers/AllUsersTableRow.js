import React from "react";

const AllUsersTableRow = ({ user, idx }) => {
  const { name, email, role } = user;
  return (
    <tr className="hover">
      <th>{idx + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <button className="btn btn-sm btn-error text-white">Delete</button>
      </td>
    </tr>
  );
};

export default AllUsersTableRow;
