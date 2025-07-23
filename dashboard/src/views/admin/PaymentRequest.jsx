// PaymentRequest.js
import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';
import Pagination from '../pagination';

const dummyWithdrawals = [
  { id: 1, amount: '$500.00', status: 'Pending', date: '2025-07-15' },
  { id: 2, amount: '$1200.00', status: 'Approved', date: '2025-07-12' },
  { id: 3, amount: '$750.50', status: 'Rejected', date: '2025-07-08' },
  { id: 4, amount: '$300.00', status: 'Pending', date: '2025-07-04' },
];

const PaymentRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const totalPages = Math.ceil(dummyWithdrawals.length / perPage);
  const paginated = dummyWithdrawals.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const statusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return <span className="text-green-600 inline-flex items-center"><FaCheckCircle className="mr-1" /> {status}</span>;
      case 'Rejected':
        return <span className="text-red-600 inline-flex items-center"><FaTimesCircle className="mr-1" /> {status}</span>;
      case 'Pending':
      default:
        return <span className="text-yellow-600 inline-flex items-center"><FaClock className="mr-1" /> {status}</span>;
    }
  };

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Payment Withdrawals</h1>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3 text-left">No</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((entry, index) => (
              <tr key={entry.id} className="border-b dark:border-gray-700">
                <td className="px-4 py-2">{(currentPage - 1) * perPage + index + 1}</td>
                <td className="px-4 py-2 font-medium">{entry.amount}</td>
                <td className="px-4 py-2">{statusBadge(entry.status)}</td>
                <td className="px-4 py-2">{entry.date}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:underline text-sm">View</button>
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

export default PaymentRequest;
