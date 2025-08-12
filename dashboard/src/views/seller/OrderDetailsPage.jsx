import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPrint, FaArrowLeft } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: "easeOut" },
  }),
};

// --- Dummy order data (swap with your API/store) ---
const ORDERS = [
  {
    id: "89572935Kh",
    date: "09 December 2021",
    status: "Processing",
    vatRate: 0.035, // 3.5%
    store: {
      name: "DashCode",
      address: "House# 339, New DOHS, Mohakhali, Dhaka - 1206, Bangladesh",
      phone: "(252) 555-0126,(201) 555-0124",
      email: "Dashcode@example.com",
      logoText: "DC",
    },
    customer: {
      name: "Annette black-500",
      address: "4140 Parker Rd. Allentown, New Mexico 31134",
      phone: "(252) 555-0126,(201) 555-0124",
      email: "Dashcode@example.com",
    },
    note:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    items: [
      { id: 1, name: "Headphone", qty: 2, price: 600.25, status: "pending" },
      { id: 2, name: "Headphone", qty: 2, price: 600.25, status: "delivered" },
      { id: 3, name: "Headphone", qty: 2, price: 600.25, status: "pending" },
      { id: 4, name: "Headphone", qty: 2, price: 600.25, status: "shipped" },
    ],
  },
];

function currency(n) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export default function OrderDetailsPage() {
  const { id } = useParams(); // e.g., /orders/:id
  const order = useMemo(() => ORDERS.find((o) => o.id === id) || ORDERS[0], [id]);

  const subtotal = useMemo(
    () => order.items.reduce((s, it) => s + it.qty * it.price, 0),
    [order.items]
  );
  const vat = useMemo(() => subtotal * order.vatRate, [subtotal, order.vatRate]);
  const total = useMemo(() => subtotal + vat, [subtotal, vat]);

  const pendingItems = order.items.filter((it) => it.status === "pending");

  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-6 md:p-8"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <Link
            to="/seller/dashboard/all-orders"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FaArrowLeft /> Back to Orders
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {order.status}
          </span>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 print:hidden"
            title="Print"
          >
            <FaPrint /> Print
          </button>
        </div>
      </div>

      {/* Invoice Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Store */}
          <motion.div variants={fadeIn} custom={1}>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-9 h-9 rounded bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-bold">
                {order.store.logoText}
              </div>
              <h2 className="text-lg font-semibold">{order.store.name}</h2>
            </div>
            <p className="text-sm leading-6 flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 shrink-0" />
              {order.store.address}
            </p>
            <p className="text-sm leading-6 flex items-start gap-2">
              <FaPhoneAlt className="mt-1 shrink-0" />
              {order.store.phone}
            </p>
            <p className="text-sm leading-6 flex items-start gap-2">
              <FaEnvelope className="mt-1 shrink-0" />
              {order.store.email}
            </p>
          </motion.div>

          {/* Bill To */}
          <motion.div variants={fadeIn} custom={2}>
            <h3 className="font-semibold mb-2">Bill to:</h3>
            <p className="text-sm">{order.customer.name}</p>
            <p className="text-sm leading-6 flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 shrink-0" />
              {order.customer.address}
            </p>
            <p className="text-sm leading-6 flex items-start gap-2">
              <FaPhoneAlt className="mt-1 shrink-0" />
              {order.customer.phone}
            </p>
            <p className="text-sm leading-6 flex items-start gap-2">
              <FaEnvelope className="mt-1 shrink-0" />
              {order.customer.email}
            </p>
          </motion.div>

          {/* Invoice Meta */}
          <motion.div variants={fadeIn} custom={3} className="md:text-right">
            <h3 className="font-semibold">Invoice:</h3>
            <div className="mt-2 text-sm">
              <p className="opacity-70">INVOICE NUMBER:</p>
              <p className="font-semibold">#{order.id}</p>
            </div>
            <div className="mt-3 text-sm">
              <p className="opacity-70">DATE</p>
              <p className="font-semibold">{order.date}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pending Items */}
      <motion.div
        variants={fadeIn}
        custom={4}
        className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold">Pending Items</h4>
          <p className="text-xs opacity-70">
            Items still awaiting fulfillment in this order.
          </p>
        </div>
        {pendingItems.length === 0 ? (
          <div className="px-4 sm:px-6 py-6 text-sm opacity-70">
            Great news — nothing pending for this order.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900/40">
                <tr className="text-left">
                  <th className="px-6 py-3 font-medium">Item</th>
                  <th className="px-6 py-3 font-medium">Qty</th>
                  <th className="px-6 py-3 font-medium">Price</th>
                  <th className="px-6 py-3 font-medium">Total</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {pendingItems.map((it) => (
                  <tr key={it.id} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-3">{it.name}</td>
                    <td className="px-6 py-3">{it.qty}</td>
                    <td className="px-6 py-3">{currency(it.price)}</td>
                    <td className="px-6 py-3">{currency(it.qty * it.price)}</td>
                    <td className="px-6 py-3">
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                        {it.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* All Items + Totals */}
      <motion.div
        variants={fadeIn}
        custom={5}
        className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold">All Items</h4>
          <p className="text-xs opacity-70">
            Complete list of products in this order.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900/40">
              <tr className="text-left">
                <th className="px-6 py-3 font-medium">Item</th>
                <th className="px-6 py-3 font-medium">Qty</th>
                <th className="px-6 py-3 font-medium">Price</th>
                <th className="px-6 py-3 font-medium">Total</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((it) => (
                <tr key={it.id} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-3">{it.name}</td>
                  <td className="px-6 py-3">{it.qty}</td>
                  <td className="px-6 py-3">{currency(it.price)}</td>
                  <td className="px-6 py-3">{currency(it.qty * it.price)}</td>
                  <td className="px-6 py-3">
                    <StatusPill status={it.status} />
                  </td>
                </tr>
              ))}

              {/* Note row */}
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td colSpan={5} className="px-6 py-5 text-sm opacity-80">
                  {order.note}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex flex-col sm:items-end px-4 sm:px-6 py-6 gap-1">
          <Row label="SUBTOTAL:" value={currency(subtotal)} />
          <Row label={`VAT (${(order.vatRate * 100).toFixed(1)}%):`} value={currency(vat)} />
          <Row label="INVOICE TOTAL:" value={currency(total)} bold />
        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        variants={fadeIn}
        custom={6}
        className="text-center mt-10 text-gray-600 dark:text-gray-300"
      >
        Thank you for your purchase!
      </motion.p>
    </motion.div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className="min-w-[260px] grid grid-cols-2 gap-4">
      <div className="text-right opacity-70">{label}</div>
      <div className={`text-right ${bold ? "font-bold" : ""}`}>{value}</div>
    </div>
  );
}

function StatusPill({ status }) {
  const styles =
    status === "delivered"
      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
      : status === "shipped"
      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${styles}`}>
      {status}
    </span>
  );
}
