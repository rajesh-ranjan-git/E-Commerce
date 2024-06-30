import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Home.jsx";
import ShimmerUI from "./ShimmerUI.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/Store/AppStore.js";
// import Cart from "./Cart.jsx";
// import Profile from "./Profile.jsx";
// import Error from "./Error.jsx";
// import SingleProductPage from "./SingleProductPage.jsx";
// import FoodApp from "./FoodApp.jsx";
const Cart = lazy(() => import("./Cart.jsx"));
const Profile = lazy(() => import("./Profile.jsx"));
const Error = lazy(() => import("./Error.jsx"));
const SingleProductPage = lazy(() => import("./SingleProductPage.jsx"));
const FoodApp = lazy(() => import("./FoodApp.jsx"));

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
        path: "/cart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <SingleProductPage />
          </Suspense>
        ),
      },
      {
        path: "/food",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <FoodApp />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
