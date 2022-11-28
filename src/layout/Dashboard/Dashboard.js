import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Navbar from "../../pages/shared/Navbar/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState([]);
  useEffect(() => {
    axios
      .get(`https://safe-sale-server-by-mezan.vercel.app/users/${user?.email}`)
      .then((data) => {
        setLoggedInUser(data.data);
      });
  }, [user?.email]);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {loggedInUser[0]?.role === "Seller" && (
              <>
                <li>
                  <Link to="/dashboard/addAProduct">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myProducts">My Products</Link>
                </li>
              </>
            )}
            {loggedInUser[0]?.role === "Buyer" && (
              <>
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>
              </>
            )}

            {loggedInUser[0]?.role === "Admin" && (
              <>
                <li>
                  <Link to="/dashboard/allSellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allBuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allUsers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/reportedItems">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
