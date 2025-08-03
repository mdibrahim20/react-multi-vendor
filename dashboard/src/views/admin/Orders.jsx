import React from "react";

const order = {
  id: "#454545",
  date: "3 Dec 2023",
  customer: "Raju Khan",
  address: "2504 Ivins Avenue, Egg Harbor Township, NJ 08234, USA",
  paymentStatus: "paid",
  price: 5343,
  items: [
    {
      seller: "Seller 1",
      status: "pending",
      product: "Long Tshirt",
      brand: "Easy",
      quantity: 2,
      image: "http://localhost:3000/images/seller.png",
    },
    {
      seller: "Seller 2",
      status: "pending",
      product: "Long Tshirt",
      brand: "Easy",
      quantity: 2,
      image: "http://localhost:3000/images/seller.png",
    },
  ],
};

const OrderDetails = () => {
  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-all duration-500 ease-in-out">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>

      <div className="mb-6 space-y-1 text-sm">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Deliver to:</strong> {order.customer}</p>
        <p><strong>Address:</strong> {order.address}</p>
        <p><strong>Payment Status:</strong> <span className="text-green-600">{order.paymentStatus}</span></p>
        <p><strong>Total Price:</strong> ${order.price}</p>
      </div>

      <div className="overflow-x-auto rounded-md shadow-md">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3">Seller</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Brand</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr
                key={index}
                className="border-b dark:border-gray-700 text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500 ease-in-out group hover:scale-[1.01]"
              >
                <td className="px-4 py-2">{item.seller}</td>
                <td className="px-4 py-2 flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.product}
                    className="w-10 h-10 object-cover rounded-full transform group-hover:scale-110 transition duration-500 ease-in-out"
                  />
                </td>
                <td className="px-4 py-2">{item.product}</td>
                <td className="px-4 py-2">{item.brand}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-700 transition-all duration-500 ease-in-out">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;