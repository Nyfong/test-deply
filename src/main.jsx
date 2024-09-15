import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Servicepage from "./pages/service-page.jsx";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout.jsx";
import Homepage from "./pages/homepage.jsx";
import DetailListingPage from "./pages/DetailsListing-page.jsx";
import ServiceListing from "./pages/servicelisting-page.jsx";
import SearchPage from "./pages/search-page.jsx";
import LoginForm from "./pages/form/LoginForm.jsx";
import SignUpForm from "./pages/form/SignupForm.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/servicepage",
        element: <Servicepage />,
      },
      {
        path: "/detailsListingpage",
        element: <DetailListingPage />,
      },
      {
        path: "/productListingpage",
        element: <ServiceListing />,
      },
      {
        path: "/searchpage",
        element: <SearchPage />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/signup",
        element: <SignUpForm />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
