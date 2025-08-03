import React, { useState, useEffect } from "react";

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

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setAnimate(true), 50);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saving data:", formData);
  };

  return (
    <div className={`p-6 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-700 ease-in-out ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      {/* Profile Card on Top */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-6 gap-6 transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md hover:scale-105 transition-transform duration-300">
          <img
            src="http://localhost:3000/images/admin.jpg"
            alt="Avatar"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-left space-y-1 text-sm">
          <p><strong>Name:</strong> Md Ibrahim Khalil</p>
          <p><strong>Email:</strong> seller@gmail.com</p>
          <p><strong>Role:</strong> Seller</p>
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
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-6 space-y-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["shopName", "division", "district", "subDistrict"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.replace(/([A-Z])/g, " $1")}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 hover:shadow"
              />
            ))}
          </div>
        </div>

        {/* RIGHT - Password Change */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-6 space-y-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
          <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-400">
            Change Password
          </h2>
          <div className="space-y-4">
            {["email", "oldPassword", "newPassword", "confirmPassword"].map((field, i) => (
              <input
                key={i}
                type={field.includes("Password") ? "password" : "email"}
                name={field}
                placeholder={field.replace(/([A-Z])/g, " $1")}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 hover:shadow"
              />
            ))}
            <button
              onClick={handleSave}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-2 rounded-md font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
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
