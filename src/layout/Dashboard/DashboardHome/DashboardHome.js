import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="md:text-6xl text-4xl font-bold">Dashboard Sale Safe</h1>
      <h3 className="md:text-3xl text-xl font-semibold mt-10">
        Hello{" "}
        <span className="text-cyan-400 font-bold">{user.displayName}</span>,
        Welcome to Dashboard
      </h3>
    </div>
  );
};

export default DashboardHome;
