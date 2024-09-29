import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoursesPage from "./routes/CoursesPage.jsx";
import HomePage from "./routes/HomePage.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import CourseOpenPage from "./routes/CourseOpenPage.jsx";
import ScrollToTop from "./components/ScrolltoTop/ScrollToTop.js";
import About from "./routes/About.jsx";
import PricingPage from "./routes/PricingPage.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import SignupPage from "./routes/SignupPage.jsx";
import ContactPage from "./routes/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    // errorElement: <Pricing />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Courses",
        element: <CoursesPage />,
      },
      {
        path: "/Courses/:id",
        element: <CourseOpenPage />,
      },
      {
        path: "/About-us",
        element: <About />,
      },
      {
        path: "/Pricing",
        element: <PricingPage />,
      },
      {
        path: "/Login",
        element: <LoginPage />,
      },
      {
        path: "/Signup",
        element: <SignupPage />,
      },
      {
        path: "/Contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
