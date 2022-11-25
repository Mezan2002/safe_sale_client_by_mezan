import { createBrowserRouter } from "react-router-dom";
import AllSellers from "../../layout/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../layout/Dashboard/Dashboard";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Categories from "../../pages/Home/Categories/Categories/Categories";
import SingleCategory from "../../pages/Home/Categories/SingleCategory/SingleCategory";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Page404 from "../../pages/Page404/Page404";
import SignUp from "../../pages/SignUp/SIgnUp";

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
        element: <SingleCategory></SingleCategory>,
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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <AllSellers></AllSellers>,
      },
    ],
  },
  {
    path: "*",
    element: <Page404></Page404>,
  },
]);

export default Routes;
