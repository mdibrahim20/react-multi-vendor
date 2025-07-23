// SellerDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const dummySeller = {
  id: 1,
  name: 'Test',
  email: 'test@gmail.com',
  image: 'http://localhost:3000/images/seller.png',
  role: 'Seller',
  status: 'Active',
  paymentStatus: 'Active',
  shopName: 'Test Shop',
  division: 'Test',
  district: 'Test',
  state: 'Test',
};

const SellerDetails = () => {
  const { id } = useParams();
  const seller = dummySeller; // Replace with fetch logic using `id`

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Seller Details</h1>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md grid md:grid-cols-3 gap-6 items-start">
        <div className="flex justify-center md:justify-start">
          <img src={seller.image} alt={seller.name} className="w-32 h-32 object-cover rounded-full shadow" />
        </div>

        <div className="md:col-span-1 space-y-2">
          <h2 className="font-semibold text-lg mb-2">Basic Info</h2>
          <p><span className="font-semibold">Name:</span> {seller.name}</p>
          <p><span className="font-semibold">Email:</span> {seller.email}</p>
          <p><span className="font-semibold">Role:</span> {seller.role}</p>
          <p><span className="font-semibold">Status:</span> {seller.status}</p>
          <p><span className="font-semibold">Payment Status:</span> {seller.paymentStatus}</p>
        </div>

        <div className="md:col-span-1 space-y-2">
          <h2 className="font-semibold text-lg mb-2">Address</h2>
          <p><span className="font-semibold">Shop Name:</span> {seller.shopName}</p>
          <p><span className="font-semibold">Division:</span> {seller.division}</p>
          <p><span className="font-semibold">District:</span> {seller.district}</p>
          <p><span className="font-semibold">State:</span> {seller.state}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-4 items-center">
        <select className="border px-4 py-2 rounded-md dark:bg-gray-800 dark:border-gray-700">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-semibold text-sm">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SellerDetails;
