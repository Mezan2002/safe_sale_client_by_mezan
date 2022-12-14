import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../../pages/shared/Loading/Loading";

const ReportedItems = () => {
  const {
    data: reportedItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://safe-sale-server-by-mezan.vercel.app/products/reported");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are you want to delete the product?");
    if (proceed) {
      fetch(`https://safe-sale-server-by-mezan.vercel.app/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            refetch();
            toast.success("Product Deleted Successfully");
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
      <h2 className="text-4xl font-bold mb-10">Reported Items</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Product Status</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {reportedItems.map((item, i) => (
              <tr key={item._id} className="hover">
                <th>{i + 1}</th>
                <th>{item.name}</th>
                <td>{item.sellerName}</td>
                <td>{item.sellerEmail}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item._id)}
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

export default ReportedItems;
