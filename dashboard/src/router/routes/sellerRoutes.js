import { lazy } from "react";
const Home = lazy(() => import("../../views/pages/Home"));
const SellerDashboard = lazy(() => import("../../views/seller/SellerDashboard"));
const AddProductPage = lazy(() => import("../../views/seller/AddProductPage"));
const AllProductPage = lazy(() => import("../../views/seller/AllProductPage"));
const DiscountProductPage = lazy(() => import("../../views/seller/DiscountProductPage"));
const OrderPage = lazy(() => import("../../views/seller/OrderPage"));
export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProductPage />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/all-product",
    element: <AllProductPage />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/discount-product",
    element: <DiscountProductPage />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/orders",
    element: <OrderPage />,
    ability: ["seller"],
  },
];
