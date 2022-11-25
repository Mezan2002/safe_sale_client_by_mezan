import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";

const Dashboard = () => {
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
            <li>
              <Link to="/dashboard">All Sellers</Link>
            </li>
            <li>
              <Link to="/dashboard/allBuyers">All Buyers</Link>
            </li>
            <li>
              <Link to="/dashboard/reportedItems">Reported Items</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
