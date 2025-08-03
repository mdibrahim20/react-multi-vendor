import { lazy } from "react";
const Home = lazy(() => import("../../views/pages/Home"));
const SellerDashboard = lazy(() => import("../../views/seller/SellerDashboard"));
const AddProductPage = lazy(() => import("../../views/seller/AddProductPage"));
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
];
