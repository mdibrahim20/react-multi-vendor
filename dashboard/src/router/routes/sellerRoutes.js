import { lazy } from "react";
const Home = lazy(() => import("../../views/pages/Home"));
const SellerDashboard = lazy(() => import("../../views/seller/SellerDashboard"));
const AddProductPage = lazy(() => import("../../views/seller/AddProductPage"));
const AllProductPage = lazy(() => import("../../views/seller/AllProductPage"));
const DiscountProductPage = lazy(() => import("../../views/seller/DiscountProductPage"));
const OrderPage = lazy(() => import("../../views/seller/OrderPage"));
const PaymentPage = lazy(() => import("../../views/seller/PaymentPage"));
export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProductPage />,
     role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/all-product",
    element: <AllProductPage />,
     role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/discount-product",
    element: <DiscountProductPage />,
     role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    element: <OrderPage />,
     role: "seller",
    ability: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/payments",
    element: <PaymentPage />,
     role: "seller",
    status: "active",
  },
];
