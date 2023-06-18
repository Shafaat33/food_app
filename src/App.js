import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
// import AboutUs from "./components/AboutUs";
import ErrorComponent from "./components/ErrorComponent";
import Footer from "./components/Footer";
import RestuarantMenu from "./components/RestaurantMenu";
import ShimmerEffect from "./components/ShimmerEffect";

const AboutUs = lazy(() => import("./components/AboutUs"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<ShimmerEffect />}>
          <AboutUs />
        </Suspense>,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:id",
        element: <RestuarantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
