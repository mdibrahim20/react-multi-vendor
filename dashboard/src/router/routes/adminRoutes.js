import { lazy } from "react";
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const AdminOrders = lazy(() => import("../../views/admin/Orders"));
const Category = lazy(() => import("../../views/admin/Category"));
const Seller = lazy(() => import("../../views/admin/Seller"));
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const DeactiveSeller = lazy(() => import("../../views/admin/DeactiveSeller"));
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest"));
const SellerDetails = lazy(() => import("../../views/admin/SellerDetails"));
const ChatSeller = lazy(() => import("../../views/admin/ChatSeller"));

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
  },
  {
    path: "admin/dashboard/sellers",
    element: <Seller />,
    role: "admin",
  },
  {
    path: "admin/dashboard/payment-request",
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/deactive-sellers",
    element: <DeactiveSeller />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller-request",
    element: <SellerRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller-request/:id",
    element: <SellerDetails />,
    role: "admin",
  },
  {
    path: "admin/dashboard/live-chat",
    element: <ChatSeller />,
    role: "admin",
  },
];
