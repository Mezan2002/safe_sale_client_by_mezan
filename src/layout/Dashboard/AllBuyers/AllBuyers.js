import React, { useEffect, useState } from "react";

const AllBuyers = () => {
  const [allBuyers, setAllBuyers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users/buyer")
      .then((res) => res.json())
      .then((data) => setAllBuyers(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold mb-10">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete Buyer</th>
            </tr>
          </thead>
          <tbody>
            {allBuyers.map((buyer, idx) => (
              <tr key={buyer._id} className="hover">
                <th>{idx + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <button className="btn btn-sm btn-error text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
