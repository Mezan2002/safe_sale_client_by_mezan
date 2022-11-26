import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
        console.log(data);
      });
  }, [user?.email]);
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
                  <button className="btn btn-success btn-sm text-white">
                    Pay
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
