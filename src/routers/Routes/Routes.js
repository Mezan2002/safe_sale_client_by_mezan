import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
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
    ],
  },
]);

export default Routes;
