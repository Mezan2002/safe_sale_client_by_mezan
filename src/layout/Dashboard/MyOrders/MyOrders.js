import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Loading from "../../../pages/shared/Loading/Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myOrders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://safe-sale-server-by-mezan.vercel.app/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  const handleCancel = (id) => {
    const proceed = window.confirm("Are you want to delete your order?");
    if (proceed) {
      fetch(`https://safe-sale-server-by-mezan.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            refetch();
            console.log(data);
          }
        });
    }
  };

  const handlePayment = (id) => {
    console.log(id);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-4xl font-bold mb-10">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Sellers Location</th>
              <th>Meeting Location</th>
              <th>Payment</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, i) => (
              <tr key={order._id} className="hover">
                <th>{i + 1}</th>
                <td>{order.userName}</td>
                <td>{order.userEmail}</td>
                <td>{order.productName}</td>
                <td>{order.productPrice}</td>
                <td>{order.locationOfProduct}</td>
                <td>{order.meetingLocation}</td>
                <td>
                  <Link to={`/dashboard/payment/${order._id}`}>
                    <button
                      onClick={() => handlePayment(order._id)}
                      className="btn btn-success btn-sm text-white"
                    >
                      Pay
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleCancel(order._id)}
                    className="btn btn-error btn-sm text-white"
                  >
                    Cancel
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

export default MyOrders;
