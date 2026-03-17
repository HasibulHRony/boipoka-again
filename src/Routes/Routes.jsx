import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";


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
        path: "/book-details/:id",
        loader: () => fetch('booksData.json'),
        Component: BookDetails,
      }
    ]
  },
]);

export default router