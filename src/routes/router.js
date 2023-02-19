import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Register from "../pages/SignUp/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);