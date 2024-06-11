import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Careers from "./components/Careers";
import Temp from "./components/Temp";

const AppLayout = () => {
  return (
    <div className="app">
      <App />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/products",
        element: <Products />,
        errorElement: <Error />,
      },
      {
        path: "/services",
        element: <Services />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
        errorElement: <Error />,
      },
      {
        path: "/careers",
        element: <Careers />,
        errorElement: <Error />,
      },
      {
        path: "/temp",
        element: <Temp />,
        errorElement: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
