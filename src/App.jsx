import "./layout.scss";
// import Navbar from "./components/Navbar/Navbar";
import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profile/profilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/about",
          element: <ProfilePage />,
        },
        {
          path: "/contact",
          element: <aboutPage />,
        },
        {
          path: "/agents",
          element: <SinglePage/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
