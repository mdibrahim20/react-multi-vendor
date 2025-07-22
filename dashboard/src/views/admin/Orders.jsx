// OrdersPage.js
import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Pagination from '../pagination';
const dummyOrders = [
  {
    id: 1,
    orderId: '#951',
    price: '$1779.53',
    paymentStatus: 'Paid',
    orderStatus: 'Delivered',
    otherOrders: [
      { id: '#951-1', item: 'Item A', qty: 2 },
      { id: '#951-2', item: 'Item B', qty: 1 },
    ],
  },
  {
    id: 2,
    orderId: '#238',
    price: '$2215.78',
    paymentStatus: 'Due',
    orderStatus: 'Processing',
    otherOrders: [
      { id: '#238-1', item: 'Item C', qty: 3 },
    ],
  },
  {
    id: 3,
    orderId: '#872',
    price: '$3120.99',
    paymentStatus: 'Paid',
    orderStatus: 'Shipped',
    otherOrders: [
      { id: '#872-1', item: 'Item D', qty: 4 },
      { id: '#872-2', item: 'Item E', qty: 2 },
    ],
  },
  {
    id: 4,
    orderId: '#111',
    price: '$1234.56',
    paymentStatus: 'Paid',
    orderStatus: 'Delivered',
    otherOrders: [
      { id: '#111-1', item: 'Item F', qty: 1 },
    ],
  },
];


const OrdersPage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleDropdown = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredOrders = dummyOrders.filter(order => {
    const orderString = `${order.orderId} ${order.price} ${order.paymentStatus} ${order.orderStatus}`.toLowerCase();
    return orderString.includes(searchValue.toLowerCase());
  });

  const totalPages = Math.ceil(filteredOrders.length / perPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Orders</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..."
            className="pl-8 pr-4 py-2 border rounded-md text-sm focus:outline-none dark:bg-gray-800 dark:border-gray-700"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <FaSearch className="absolute left-2 top-3 text-gray-400" />
        </div>
      </div>

      <div className="mb-4">
        <label className="mr-2">Show:</label>
        <select
          className="border px-2 py-1 rounded-md dark:bg-gray-800 dark:border-gray-600"
          value={perPage}
          onChange={(e) => setPerPage(parseInt(e.target.value))}
        >
          {[5, 10, 15].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3 text-left">Order ID</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Payment Status</th>
              <th className="px-4 py-3 text-left">Order Status</th>
              <th className="px-4 py-3 text-left">Other Orders</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order) => (
              <React.Fragment key={order.id}>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3 font-medium text-indigo-600">{order.orderId}</td>
                  <td className="px-4 py-3">{order.price}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      order.paymentStatus === 'Paid'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3">{order.orderStatus}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleDropdown(order.id)}
                      className="text-sm text-blue-600 hover:underline flex items-center space-x-1"
                    >
                      {expandedId === order.id ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </td>
                  <td className="px-4 py-3 space-x-2 text-gray-500 dark:text-gray-300">
                    <button className="hover:text-blue-500"><FaEye /></button>
                    <button className="hover:text-green-500"><FaEdit /></button>
                    <button className="hover:text-red-500"><FaTrash /></button>
                  </td>
                </tr>
                {expandedId === order.id && order.otherOrders.map((item) => (
                  <tr key={item.id} className="border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                    <td className="px-4 py-2 text-indigo-500">{item.id}</td>
                    <td className="px-4 py-2">{order.price}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        order.paymentStatus === 'Paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="px-4 py-2">{order.orderStatus}</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default OrdersPage;
