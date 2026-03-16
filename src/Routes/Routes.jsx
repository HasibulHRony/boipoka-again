import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/home",
        Component: Home,
      }
    ]
  },
]);

export default router