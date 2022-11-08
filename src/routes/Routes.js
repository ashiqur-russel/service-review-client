import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";

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
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
