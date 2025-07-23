// SellerPage.js
import React, { useState } from 'react';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import Pagination from '../pagination';

const dummySellers = [
  {
    id: 1,
    name: 'John Doe',
    shopName: 'Doe Electronics',
    paymentStatus: 'Paid',
    email: 'john@example.com',
    division: 'Dhaka',
    district: 'Dhanmondi',
    image: 'http://localhost:3000/images/seller.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    shopName: 'Smith Fashion',
    paymentStatus: 'Due',
    email: 'jane@example.com',
    division: 'Chattogram',
    district: 'Pahartali',
    image: 'http://localhost:3000/images/seller.png',
  },
];

const SellerPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = dummySellers.filter((s) =>
    `${s.name} ${s.shopName} ${s.email} ${s.division} ${s.district}`
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Sellers</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-4 py-2 border rounded-md text-sm focus:outline-none dark:bg-gray-800 dark:border-gray-700"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <FaSearch className="absolute left-2 top-3 text-gray-400" />
        </div>
      </div>

      <div className="overflow-x-auto rounded-md shadow-md">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Shop Name</th>
              <th className="px-4 py-3">Payment Status</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Division</th>
              <th className="px-4 py-3">District</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((seller, index) => (
              <tr key={seller.id} className="border-b dark:border-gray-700 text-center">
                <td className="px-4 py-2">{(currentPage - 1) * perPage + index + 1}</td>
                <td className="px-4 py-2">
                  <img src={seller.image} alt={seller.name} className="w-10 h-10 object-cover rounded-full" />
                </td>
                <td className="px-4 py-2">{seller.name}</td>
                <td className="px-4 py-2">{seller.shopName}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    seller.paymentStatus === 'Paid'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {seller.paymentStatus}
                  </span>
                </td>
                <td className="px-4 py-2">{seller.email}</td>
                <td className="px-4 py-2">{seller.division}</td>
                <td className="px-4 py-2">{seller.district}</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-yellow-500 hover:text-yellow-600"><FaEdit /></button>
                  <button className="text-red-500 hover:text-red-600"><FaTrash /></button>
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

export default SellerPage;
