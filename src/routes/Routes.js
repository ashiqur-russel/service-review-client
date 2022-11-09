import { createBrowserRouter } from "react-router-dom";
import Error from "../componnets/Error";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import MyReviews from "../pages/MyReviews/MyReviews";
import AddService from "../pages/Service/AddService/AddService";
import Service from "../pages/Service/Service";
import ServiceDetails from "../pages/Service/ServiceDetails/ServiceDetails";
import SignleService from "../pages/Service/ServiceDetails/SingleService/SignleService";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Service></Service>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
        },
        element: <SignleService></SignleService>,
      },
      {
        path: "/add-services",
        element: (
          <PrivateRoutes>
            <AddService></AddService>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoutes>
            <MyReviews></MyReviews>
          </PrivateRoutes>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
