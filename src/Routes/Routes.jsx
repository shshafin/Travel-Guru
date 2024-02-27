import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import News from "../Pages/News/News";
import Destination from "../Pages/Destination/Destination";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Booking from "../Components/Booking/Booking";
import Hotel from "../Components/Hotel/Hotel";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/News",
        element: <News></News>,
      },
      {
        path: "/Destination",
        element: <Destination></Destination>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Registration",
        element: <Registration></Registration>,
      },
      {
        path: "/Booking/:id",
        element: <Booking></Booking>,
        loader: () => fetch(`/Destinations.json`),
      },
      {
        path: "/Hotel/:id",
        element: (
          <PrivateRoute>
            <Hotel></Hotel>
          </PrivateRoute>
        ),
        loader: () => fetch(`/Stay.json`),
      },
    ],
  },
]);

export default Routes;
