import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";





const router = createBrowserRouter([

  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);



  // {
  //   path: "/",
  //   element: <App></App>,
  // },
  // {
  //   path: "/about",
  //   element: <div>This is the about page</div>,
  // },
  // {
  //   path: "/contact",
  //   element: <div>Contact Us</div>,
  // },
  // {
  //   path: "/",
  //   errorElement: <Error></Error>
  // },