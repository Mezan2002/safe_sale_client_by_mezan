import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Categories from "../../pages/Home/Categories/Categories";
import Home from "../../pages/Home/Home/Home";

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
    ],
  },
]);

export default Routes;
