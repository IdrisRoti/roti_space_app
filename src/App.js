import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from './pages/home/Home';
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import ErrorPage from "./pages/ErrorPage";


function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "destination",
          element: <Destination />
        },
        {
          path: "crew",
          element: <Crew />
        },
        {
          path: "technology",
          element: <Technology />
        },
        {
          path: "*",
          element: <ErrorPage />
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
