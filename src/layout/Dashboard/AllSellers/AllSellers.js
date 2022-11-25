import React from "react";

const AllSellers = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify Seller</th>
              <th>Delete Seller</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>1</th>
              <td>Mezanur Rahman</td>
              <td>meza@nur.com</td>
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

export default AllSellers;
