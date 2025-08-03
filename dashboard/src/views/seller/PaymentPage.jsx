import React, { useState } from "react";

const dummyPayments = {
  stats: [
    { title: "Total Sales", value: "$3434", icon: "💰" },
    { title: "Available Amount", value: "$620", icon: "💳" },
    { title: "Withdrawal Amount", value: "$0", icon: "🏦" },
    { title: "Pending Amount", value: "$0", icon: "🕒" },
  ],
  pending: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    amount: "#3434",
    status: "pending",
    date: "12 Jun 2023",
  })),
  success: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    amount: "#3434",
    status: "pending",
    date: "12 Jun 2023",
  })),
};

const PaymentPage = () => {
  const [requestAmount, setRequestAmount] = useState("");

  return (
    <div className="p-6 min-h-screen bg-white dark:bg-gray-900 text-black w-full">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dummyPayments.stats.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-6 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="text-3xl text-indigo-700 dark:text-indigo-400">
              {item.icon}
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {item.title}
              </h2>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pending Request */}
        <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
          <h3 className="text-lg font-semibold mb-4 dark:text-gray-300">Send Request</h3>
          <div className="flex gap-2 mb-6">
            <input
              type="number"
              value={requestAmount}
              onChange={(e) => setRequestAmount(e.target.value)}
              placeholder="0"
              className="border px-4 py-2 rounded w-full"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-300">Pending Request</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                <tr>
                  <th className="py-2 px-4 text-left">NO</th>
                  <th className="py-2 px-4 text-left">AMOUNT</th>
                  <th className="py-2 px-4 text-left">STATUS</th>
                  <th className="py-2 px-4 text-left">DATE</th>
                </tr>
              </thead>
              <tbody>
                {dummyPayments.pending.map((row) => (
                  <tr key={row.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-2 px-4 dark:text-gray-300">{row.id}</td>
                    <td className="py-2 px-4 dark:text-gray-300">{row.amount}</td>
                    <td className="py-2 px-4 dark:text-gray-300">
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">
                        {row.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 dark:text-gray-300">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Withdraw */}
        <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
          <h3 className="text-lg font-semibold mb-4 dark:text-gray-300">Success Withdraw</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                <tr>
                  <th className="py-2 px-4 text-left">NO</th>
                  <th className="py-2 px-4 text-left">AMOUNT</th>
                  <th className="py-2 px-4 text-left">STATUS</th>
                  <th className="py-2 px-4 text-left">DATE</th>
                </tr>
              </thead>
              <tbody>
                {dummyPayments.success.map((row) => (
                  <tr key={row.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-2 px-4 dark:text-gray-300">{row.id}</td>
                    <td className="py-2 px-4 dark:text-gray-300">{row.amount}</td>
                    <td className="py-2 px-4 dark:text-gray-300">
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">
                        {row.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 dark:text-gray-300">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
