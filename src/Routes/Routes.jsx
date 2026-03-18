import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadLists from "../Pages/ReadLists/ReadLists";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/read-list",
        Component: ReadLists,
      },
      {
        path: "/book-details/:id",
        Component: BookDetails,
      }
    ]
  },
]);

export default router