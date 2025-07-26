// AdminDashboard.js
import React, { useState } from 'react';
import { FaDollarSign, FaBoxOpen, FaStore, FaShoppingCart } from 'react-icons/fa';
import Chart from 'react-apexcharts';

const stats = [
    { title: 'Total Sales', icon: <FaDollarSign />, value: '$12,345' },
    { title: 'Products', icon: <FaBoxOpen />, value: '248' },
    { title: 'Sales', icon: <FaStore />, value: '57' },
    { title: 'Orders', icon: <FaShoppingCart />, value: '321' },
];

const AdminDashboard = () => {
    const [chartData] = useState({
        options: {
            chart: {
                id: 'sales-chart',
                toolbar: { show: true },
            },
            xaxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            colors: ['#4F46E5'],
        },
        series: [
            {
                name: 'Sales',
                data: [30, 40, 35, 50, 49, 60, 70],
            },
        ],
    });

    const messages = [
        {
            id: 1,
            name: 'Customer One',
            shop: 'OneMart',
            message: 'Can I get support?',
            time: '2h ago',
            avatar: 'https://i.pravatar.cc/40?img=1',
        },
        {
            id: 2,
            name: 'Customer Two',
            shop: 'TwoBazaar',
            message: 'New product uploaded.',
            time: '5h ago',
            avatar: 'https://i.pravatar.cc/40?img=2',
        },
        {
            id: 3,
            name: 'Customer Three',
            shop: 'ThreeKart',
            message: 'Changed profile details.',
            time: '1d ago',
            avatar: 'https://i.pravatar.cc/40?img=3',
        },
    ];

    const orders = [
        { id: 'ORD123', customer: 'John Doe', total: '$129.99',paymentStatus:'Pending', status: 'Shipped', date: '2025-07-18' },
        { id: 'ORD124', customer: 'Jane Smith', total: '$89.50',paymentStatus:'Done', status: 'Pending', date: '2025-07-19' },
        { id: 'ORD125', customer: 'Alan Walker', total: '$199.00',paymentStatus:'Cod', status: 'Delivered', date: '2025-07-20' },
    ];

    return (
        <div>
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-4 p-6 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <div className="text-3xl text-indigo-700 dark:text-indigo-400">
                            {item.icon}
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{item.title}</h2>
                            <p className="text-xl font-bold text-gray-900 dark:text-white">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts and Messages */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                {/* Chart */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Weekly Sales Overview</h2>
                    <Chart options={chartData.options} series={chartData.series} type="line" height={250} />
                </div>

                {/* Recent Messages */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-gray-800 dark:text-white">Recent Customer Messages</h2>
                        <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">View All</a>
                    </div>
                    <ul className="space-y-4">
                        {messages.map((msg) => (
                            <li key={msg.id} className="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <div className="flex gap-3 items-start">
                                    <img src={msg.avatar} alt={msg.name} className="w-10 h-10 rounded-full object-cover" />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white">{msg.name}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{msg.shop}</p>
                                            </div>
                                            <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">{msg.time}</span>
                                        </div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{msg.message}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Recent Orders Table */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md mt-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white">Recent Orders</h2>
                    <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">View All</a>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left">
                        <thead className="text-gray-600 dark:text-gray-300 border-b dark:border-gray-700">
                            <tr>
                                <th className="py-2 px-4">Order ID</th>
                                <th className="py-2 px-4">Customer</th>
                                <th className="py-2 px-4">Total</th>
                                <th className="py-2 px-4">Payment Status</th>
                                <th className="py-2 px-4">Status</th>
                                <th className="py-2 px-4">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index} className="border-b dark:border-gray-700">
                                    <td className="py-2 px-4 font-medium text-gray-800 dark:text-white">{order.id}</td>
                                    <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{order.customer}</td>
                                    <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{order.total}</td>
                                    {/* <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{order.paymentStatus}</td> */}
                                    <td className="py-2 px-4">
                                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                                            order.paymentStatus === 'Pending'
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                                : order.paymentStatus === 'Cod'
                                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                        }`}>
                                            {order.paymentStatus}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4">
                                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                                            order.status === 'Delivered'
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                                : order.status === 'Shipped'
                                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;