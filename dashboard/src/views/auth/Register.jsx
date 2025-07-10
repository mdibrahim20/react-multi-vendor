import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaApple,
} from "react-icons/fa";
const title = "Welcome to Ecommerece";
const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setState((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", state);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#ede9fe] via-[#c7d2fe] to-[#a5b4fc] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-8 text-gray-800">
        <h2 className="text-3xl font-extrabold mb-2 text-center">{title}</h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Create your account and start shopping smarter
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              onChange={handleChange}
              value={state.name}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              onChange={handleChange}
              value={state.email}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              onChange={handleChange}
              value={state.password}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
            />
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              name="termsAccepted"
              id="terms"
              checked={state.termsAccepted}
              onChange={handleChange}
              className="accent-indigo-600 h-4 w-4"
            />

            <label htmlFor="terms" className="text-gray-600">
              I agree to the{" "}
              <a href="#" className="underline text-indigo-600">
                Terms & Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-sm"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-sm text-gray-500">or login with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4 my-4">
          {/* Google */}
          <button className="p-3 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition">
            <FcGoogle className="text-2xl" />
          </button>

          {/* Facebook */}
          <button className="p-3 rounded-full bg-[#1877f2] hover:bg-[#155cc3] transition">
            <FaFacebook className="text-2xl text-white" />
          </button>

          {/* Twitter */}
          <button className="p-3 rounded-full bg-[#1DA1F2] hover:bg-[#1a91da] transition">
            <FaTwitter className="text-2xl text-white" />
          </button>

          {/* GitHub */}
          <button className="p-3 rounded-full bg-[#333] hover:bg-[#24292f] transition">
            <FaGithub className="text-2xl text-white" />
          </button>

          {/* LinkedIn */}
          <button className="p-3 rounded-full bg-[#0077b5] hover:bg-[#00669c] transition">
            <FaLinkedinIn className="text-2xl text-white" />
          </button>

          {/* Apple */}
          <button className="p-3 rounded-full bg-black hover:bg-gray-800 transition">
            <FaApple className="text-2xl text-white" />
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
