import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../../pages/shared/Loading/Loading";

const AllSellers = () => {
  const {
    data: allSellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users/seller");
      const data = await res.json();
      return data;
    },
  });

  const handleVerify = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          refetch();
          toast.success("User Verified Successfully");
        }
        console.log(data);
      });
  };

  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you want to delete the user?");
    if (proceed) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            refetch();
            toast.success("User Deleted Successfully");
          }
          console.log(data);
        });
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

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
            {allSellers.map((seller, idx) => (
              <tr key={seller._id} className="hover">
                <th>{idx + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {seller.isVerified === true ? (
                    <button
                      onClick={() => handleVerify(seller._id)}
                      className="btn btn-sm btn-disabled text-white"
                    >
                      Verified
                    </button>
                  ) : (
                    <button
                      onClick={() => handleVerify(seller._id)}
                      className="btn btn-sm btn-success text-white"
                    >
                      Verify
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(seller._id)}
                    className="btn btn-sm btn-error text-white"
                  >
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

export default AllSellers;
