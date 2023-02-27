import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About/About";
import BlogDetails from "../pages/Blogs/BlogDetails";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
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
