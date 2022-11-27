import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-6xl font-bold">Dashboard Sale Safe</h1>
      <h3 className="text-3xl font-semibold mt-10">
        Hello{" "}
        <span className="text-cyan-400 font-bold">{user.displayName}</span>,
        Welcome to Dashboard
      </h3>
    </div>
  );
};

export default DashboardHome;
