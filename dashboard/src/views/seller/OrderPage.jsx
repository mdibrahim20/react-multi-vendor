import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const dummyOrders = [
  { id: 1, orderId: "#343434", price: "$562", paymentStatus: "Pending", orderStatus: "Pending" },
  { id: 2, orderId: "#343435", price: "$670", paymentStatus: "Completed", orderStatus: "Shipped" },
  { id: 3, orderId: "#343436", price: "$132", paymentStatus: "Pending", orderStatus: "Processing" },
  { id: 4, orderId: "#343437", price: "$842", paymentStatus: "Failed", orderStatus: "Cancelled" },
  { id: 5, orderId: "#343438", price: "$442", paymentStatus: "Completed", orderStatus: "Delivered" },
];

const OrderPage = () => {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = dummyOrders.filter(order =>
    order.orderId.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const totalPages = Math.ceil(filtered.length / limit);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-6 text-black min-h-screen bg-white dark:bg-gray-900 w-full overflow-x-auto"
    >
      {/* Top Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <select
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          className="border px-3 py-2 rounded"
        >
          {[5, 10, 25].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search Order ID"
          className="px-4 py-2 rounded border"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm shadow rounded overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              {["ORDER ID", "PRICE", "PAYMENT STATUS", "ORDER STATUS", "ACTION"].map((head, i) => (
                <th key={i} className="py-3 px-4 text-left whitespace-nowrap">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.map((order, i) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.01 }}
                className="border-b hover:bg-gray-100 transition-all duration-300"
              >
                <td className="py-3 px-4 font-medium">{order.orderId}</td>
                <td className="py-3 px-4">{order.price}</td>
                <td className="py-3 px-4">{order.paymentStatus}</td>
                <td className="py-3 px-4">{order.orderStatus}</td>
                <td className="py-3 px-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-green-600 hover:text-green-800"
                  >
                    <FaEye />
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-end items-center gap-2 mt-4">
        <button
          className="border px-3 py-1 rounded hover:bg-gray-200 transition"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
          <button
            key={pg}
            onClick={() => setCurrentPage(pg)}
            className={`px-3 py-1 rounded transition ${
              currentPage === pg ? "bg-blue-600 text-white" : "border hover:bg-gray-100"
            }`}
          >
            {pg}
          </button>
        ))}
        <button
          className="border px-3 py-1 rounded hover:bg-gray-200 transition"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default OrderPage;
