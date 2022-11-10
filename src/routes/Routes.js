import { createBrowserRouter } from "react-router-dom";
import Error from "../componnets/Error";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import EditReview from "../pages/MyReviews/EditReview";
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
          return fetch(
            `https://service-review-ashiqur-russel.vercel.app/services/${params.id}`
          );
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
        path: "/reviews/edit/:id",
        element: <EditReview></EditReview>,
        loader: ({ params }) => {
          return fetch(
            `https://service-review-ashiqur-russel.vercel.app/reviewss-all/${params.id}`
          );
        },
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
        path: "/blog",
        element: <Blog></Blog>,
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
