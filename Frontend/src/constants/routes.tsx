import About from "@/pages/About";
import AddProduct from "@/pages/adminDashboard/AddProduct";
import AdminHome from "@/pages/adminDashboard/AdminHome";
import Cart from "@/pages/Cart";
import Collection from "@/pages/Collection";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Login from "@/pages/Login";

import PlaceOrder from "@/pages/PlaceOrder";
import Product from "@/pages/Product";
import { TRoutes } from "@/types/routes";

export const mainLayoutRoutes: TRoutes[] = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Collection",
    path: "/collection",
    element: <Collection />,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    name: "Product",
    path: "/product/:productId",
    element: <Product />,
  },
  {
    name: "Cart",
    path: "/cart",
    element: <Cart />,
  },
  {
    name: "Dashboard",
    path: "/admin-dashboard/admin-home",
    element: <AdminHome />,
  },

  {
    name: "PlaceOrder",
    path: "/place-order",
    element: <PlaceOrder />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
];
export const adminLayoutRoutes: TRoutes[] = [
  {
    name: "Admin Home",
    path: "/admin-dashboard/admin-home",
    element: <AdminHome />,
  },
  {
    name: "Add Product",
    path: "/admin-dashboard/add-product",
    element: <AddProduct />,
  },
];
export const mainLayoutRoutesWithoutLogin = mainLayoutRoutes.filter(
  (item) => item.path !== "/login"
);
