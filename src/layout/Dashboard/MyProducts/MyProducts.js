import React from "react";

const MyProducts = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-10">My Products</h2>
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
            <tr className="hover">
              <th>1</th>
              <td>Name</td>
              <td>Email</td>
              <td>
                <button className="btn btn-sm btn-success text-white">
                  Verify
                </button>
              </td>
              <td>
                <button className="btn btn-sm btn-error text-white">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
