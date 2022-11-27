import { createBrowserRouter } from "react-router-dom";
import AddAProduct from "../../layout/Dashboard/AddAProduct/AddAProduct";
import AllBuyers from "../../layout/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../layout/Dashboard/AllSellers/AllSellers";
import AllUsers from "../../layout/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../layout/Dashboard/Dashboard";
import DashboardHome from "../../layout/Dashboard/DashboardHome/DashboardHome";
import MyOrders from "../../layout/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../layout/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../layout/Dashboard/ReportedItems/ReportedItems";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Categories from "../../pages/Home/Categories/Categories/Categories";
import SingleCategory from "../../pages/Home/Categories/SingleCategory/SingleCategory";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Page404 from "../../pages/Page404/Page404";
import SignUp from "../../pages/SignUp/SIgnUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/categories/:name",
        element: (
          <PrivateRoute>
            <SingleCategory></SingleCategory>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.name}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/addAProduct",
        element: <AddAProduct></AddAProduct>,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/allSellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/allBuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers></AllUsers>,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/dashboard/reportedItems",
        element: <ReportedItems></ReportedItems>,
      },
    ],
  },
  {
    path: "*",
    element: <Page404></Page404>,
  },
]);

export default Routes;
