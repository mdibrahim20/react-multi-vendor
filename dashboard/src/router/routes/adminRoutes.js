import { lazy } from "react";
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const AdminOrders = lazy(() => import("../../views/admin/Orders"));
const Category = lazy(() => import("../../views/admin/Category"));

export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: <AdminOrders />,
    role: "admin",
  },
  {
    path: "admin/dashboard/categories",
    element: <Category />,
    role: "admin",
  }
];
