import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./components/Services/Services";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Careers from "./components/Careers/Careers";
import JobOpportunities from "./components/JobOpportunities.js/JobOpportunities";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/job-opportunities",
        element: <JobOpportunities />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
