import React, { useState } from "react";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import Pagination from "../pagination";
import { Link } from "react-router-dom";

const dummyDeactiveSellers = [
  {
    id: 1,
    name: "Shahriar Ahmed",
    image: "http://localhost:3000/images/seller.png",
    email: "shahriar@gmail.com",
    paymentStatus: "Pending",
    status: "Inactive",
  },
  {
    id: 2,
    name: "Tamim Iqbal",
    image: "http://localhost:3000/images/seller.png",
    email: "tamim@example.com",
    paymentStatus: "Active",
    status: "Inactive",
  },
];

const DeactiveSeller = () => {
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = dummyDeactiveSellers.filter(
    (seller) =>
      seller.name.toLowerCase().includes(search.toLowerCase()) ||
      seller.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Deactive Sellers</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 pr-4 py-2 border rounded-md text-sm focus:outline-none dark:bg-gray-800 dark:border-gray-700 transition duration-300"
          />
          <FaSearch className="absolute left-2 top-3 text-gray-400" />
        </div>
      </div>

      <div className="overflow-x-auto rounded-md shadow-md">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3">NO</th>
              <th className="px-4 py-3">IMAGE</th>
              <th className="px-4 py-3">NAME</th>
              <th className="px-4 py-3">EMAIL</th>
              <th className="px-4 py-3">PAYMENT STATUS</th>
              <th className="px-4 py-3">STATUS</th>
              <th className="px-4 py-3">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((seller, index) => (
              <tr
                key={seller.id}
                className="border-b dark:border-gray-700 text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out group"
              >
                <td className="px-4 py-2">
                  {(currentPage - 1) * perPage + index + 1}
                </td>
                <td className="px-4 py-2 flex justify-center items-center">
                  <img
                    src={seller.image}
                    alt={seller.name}
                    className="w-10 h-10 object-cover rounded-full transform group-hover:scale-105 transition duration-300"
                  />
                </td>
                <td className="px-4 py-2">{seller.name}</td>
                <td className="px-4 py-2">{seller.email}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full transition duration-300 ease-in-out
                      ${seller.paymentStatus === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"}`}
                  >
                    {seller.paymentStatus}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full transition duration-300 ease-in-out
                      ${seller.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"}`}
                  >
                    {seller.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <Link
                    to={`${seller.id}`}
                    className="inline-block text-yellow-500 hover:text-yellow-600 transform hover:scale-110 transition duration-300"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="text-red-500 hover:text-red-600 transform hover:scale-110 transition duration-300"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default DeactiveSeller;
