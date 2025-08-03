import React, { useState } from "react";
import { FaEdit, FaTrash,FaEye } from "react-icons/fa";

const dummyProducts = [
  {
    id: 1,
    image: "http://localhost:3000/images/admin.jpg",
    name: "Men Full Sleeve",
    category: "Tshirt",
    brand: "Veirdo",
    price: "$232",
    discount: "10%",
    stock: 20,
  },
  {
    id: 2,
    image: "http://localhost:3000/images/admin.jpg",
    name: "Men Full Sleeve",
    category: "Tshirt",
    brand: "Veirdo",
    price: "$232",
    discount: "10%",
    stock: 20,
  },
  {
    id: 3,
    image: "http://localhost:3000/images/admin.jpg",
    name: "Men Full Sleeve",
    category: "Tshirt",
    brand: "Veirdo",
    price: "$232",
    discount: "10%",
    stock: 20,
  },
  {
    id: 4,
    image: "http://localhost:3000/images/admin.jpg",
    name: "Men Full Sleeve",
    category: "Tshirt",
    brand: "Veirdo",
    price: "$232",
    discount: "10%",
    stock: 20,
  },
  {
    id: 5,
    image: "http://localhost:3000/images/admin.jpg",
    name: "Men Full Sleeve",
    category: "Tshirt",
    brand: "Veirdo",
    price: "$232",
    discount: "10%",
    stock: 20,
  },
  {
    id: 6,
    image: "http://localhost:3000/images/admin.jpg",
    name: "Men Full Sleeve",
    category: "Tshirt",
    brand: "Veirdo",
    price: "$232",
    discount: "10%",
    stock: 20,
  },
  {
    id: 7,
    image: "http://localhost:3000/images/admin.jpg",
    name: "Men Full Sleeve",
    category: "Tshirt",
    brand: "Veirdo",
    price: "$232",
    discount: "10%",
    stock: 20,
  },
  {
    id: 8,
    image: "http://localhost:3000/images/admin.jpg",
    name: "Men Full Sleeve",
    category: "Tshirt",
    brand: "Veirdo",
    price: "$232",
    discount: "10%",
    stock: 20,
  },
  {
    id: 9,
    image: "http://localhost:3000/images/admin.jpg",
    name: "Men Full Sleeve",
    category: "Tshirt",
    brand: "Veirdo",
    price: "$232",
    discount: "10%",
    stock: 20,
  },
];

const AllProductPage = () => {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = dummyProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
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
              {["NO", "IMAGE", "NAME", "CATEGORY", "BRAND", "PRICE", "DISCOUNT", "STOCK", "ACTION"].map(
                (head, i) => (
                  <th key={i} className="py-3 px-4 text-left whitespace-nowrap">
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {paginated.map((product, idx) => (
              <tr key={product.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{(currentPage - 1) * limit + idx + 1}</td>
                <td className="py-3 px-4">
                  <img
                    src={product.image}
                    alt="Product"
                    className="w-12 h-12 object-cover"
                  />
                </td>
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">{product.category}</td>
                <td className="py-3 px-4">{product.brand}</td>
                <td className="py-3 px-4">{product.price}</td>
                <td className="py-3 px-4">{product.discount}</td>
                <td className="py-3 px-4">{product.stock}</td>
                <td className="py-3 px-4">
                  <div className="flex gap-3">
                    <button className="text-yellow-600 hover:text-yellow-800">
                      <FaEdit />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <FaEye />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </div>
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

export default AllProductPage;
