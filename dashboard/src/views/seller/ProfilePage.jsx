import React, { useState } from "react";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    shopName: "",
    division: "",
    district: "",
    subDistrict: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saving data:", formData);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br bg-white dark:bg-gray-800
 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white">
      {/* Profile Card on Top */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-6 gap-6">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
          <img
            src="http://localhost:3000/images/admin.jpg"
            alt="Avatar"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-left space-y-1 text-sm">
          <p>
            <strong>Name:</strong> Md Ibrahim Khalil
          </p>
          <p>
            <strong>Email:</strong> seller@gmail.com
          </p>
          <p>
            <strong>Role:</strong> Seller
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className="text-green-500 font-semibold">Active</span>
          </p>
          <p>
            <strong>Payment Account:</strong>{" "}
            <span className="bg-yellow-400 text-black px-2 py-1 rounded font-semibold">
              Pending
            </span>
          </p>
        </div>
      </div>

      {/* Grid Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT - Shop Info */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="shopName"
              placeholder="Shop Name"
              value={formData.shopName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="division"
              placeholder="Division Name"
              value={formData.division}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="district"
              placeholder="District Name"
              value={formData.district}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="subDistrict"
              placeholder="Sub District"
              value={formData.subDistrict}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* RIGHT - Password Change */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-6 space-y-6">
          <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-400">
            Change Password
          </h2>
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              name="oldPassword"
              placeholder="Old Password"
              value={formData.oldPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleSave}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-2 rounded-md font-semibold transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
