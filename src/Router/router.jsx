import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import App from "../App";
import Rootlayout from "../Pages/Rootlayout";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import RouteProtector from "./RouteProtector";
import AddProduct from "../Pages/AddProduct";
import PrivateRouterProtector from "./PrivateRouteProtector";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/shop", element: <Shop /> },
      { path: "/app", element: <App /> },
      {
        path: "/add-product",
        element: (
          <PrivateRouterProtector>
            <AddProduct />
          </PrivateRouterProtector>
        ),
      },
      {
        path: "/cart",
        element: (
          <RouteProtector>
            <Cart />
          </RouteProtector>
        ),
      },
    ],
  },
]);
