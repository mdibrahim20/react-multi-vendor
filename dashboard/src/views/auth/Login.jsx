import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaApple,
} from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
const title = "Welcome to Ecommerece";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    remember: false,
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
          Login to your account
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange} value={state.email}
              placeholder="you@example.com"
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
              onChange={handleChange}
              value={state.password}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={state.remember}
                onChange={handleChange}
                className="accent-indigo-600 h-4 w-4"
              />
              <label htmlFor="remember" className="text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-indigo-600 hover:underline font-medium">
              Forgot password?
            </a>
          </div>

          <button
            type="submit" onClick={handleSubmit}
            className="w-full py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-sm"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-sm text-gray-500">or login with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 my-4">
          <button className="p-3 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition">
            <FcGoogle className="text-2xl" />
          </button>
          <button className="p-3 rounded-full bg-[#1877f2] hover:bg-[#155cc3] transition">
            <FaFacebook className="text-2xl text-white" />
          </button>
          <button className="p-3 rounded-full bg-[#1DA1F2] hover:bg-[#1a91da] transition">
            <FaTwitter className="text-2xl text-white" />
          </button>
          <button className="p-3 rounded-full bg-[#333] hover:bg-[#24292f] transition">
            <FaGithub className="text-2xl text-white" />
          </button>
          <button className="p-3 rounded-full bg-[#0077b5] hover:bg-[#00669c] transition">
            <FaLinkedinIn className="text-2xl text-white" />
          </button>
          <button className="p-3 rounded-full bg-black hover:bg-gray-800 transition">
            <FaApple className="text-2xl text-white" />
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="underline font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
