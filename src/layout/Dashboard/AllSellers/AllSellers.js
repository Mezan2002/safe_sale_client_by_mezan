import React, { useEffect, useState } from "react";

const AllSellers = () => {
  const [allSellers, setAllSellers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users?role=Seller")
      .then((res) => res.json())
      .then((data) => setAllSellers(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold mb-10">All Sellers</h2>
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
