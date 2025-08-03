import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const dummyOrders = [
  {
    id: 1,
    orderId: "#343434",
    price: "$562",
    paymentStatus: "Pending",
    orderStatus: "Pending",
  },
  {
    id: 2,
    orderId: "#343434",
    price: "$562",
    paymentStatus: "Pending",
    orderStatus: "Pending",
  },
  {
    id: 3,
    orderId: "#343434",
    price: "$562",
    paymentStatus: "Pending",
    orderStatus: "Pending",
  },
  {
    id: 4,
    orderId: "#343434",
    price: "$562",
    paymentStatus: "Pending",
    orderStatus: "Pending",
  },
  {
    id: 5,
    orderId: "#343434",
    price: "$562",
    paymentStatus: "Pending",
    orderStatus: "Pending",
  },
];

const OrderPage = () => {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = dummyOrders.filter((order) =>
    order.orderId.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const totalPages = Math.ceil(filtered.length / limit);

  return (
    <div className="p-6 text-black min-h-screen bg-white dark:bg-gray-900 w-full overflow-x-auto">
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
          placeholder="search"
          className="px-4 py-2 rounded border"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm shadow rounded overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              {["ORDER ID", "PRICE", "PAYMENT STATUS", "ORDER STATUS", "ACTION"].map(
                (head, i) => (
                  <th key={i} className="py-3 px-4 text-left whitespace-nowrap">
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {paginated.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{order.orderId}</td>
                <td className="py-3 px-4">{order.price}</td>
                <td className="py-3 px-4">{order.paymentStatus}</td>
                <td className="py-3 px-4">{order.orderStatus}</td>
                <td className="py-3 px-4">
                  <button className="text-green-600 hover:text-green-800">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap justify-end items-center gap-2 mt-4">
        <button
          className="border px-3 py-1 rounded"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
          <button
            key={pg}
            onClick={() => setCurrentPage(pg)}
            className={`px-3 py-1 rounded ${
              currentPage === pg ? "bg-blue-600 text-white" : "border"
            }`}
          >
            {pg}
          </button>
        ))}
        <button
          className="border px-3 py-1 rounded"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
