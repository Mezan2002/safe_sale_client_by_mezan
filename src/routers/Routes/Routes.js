import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Categories from "../../pages/Home/Categories/Categories/Categories";
import SingleCategory from "../../pages/Home/Categories/SingleCategory/SingleCategory";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";

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
    ],
  },
]);

export default Routes;
