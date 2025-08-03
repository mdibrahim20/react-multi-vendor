import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaApple,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#ede9fe] via-[#c7d2fe] to-[#a5b4fc] flex items-center justify-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-8 text-gray-800"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-extrabold mb-2 text-center"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-sm text-center text-gray-600 mb-6"
        >
          Login to your account
        </motion.p>

        <motion.form className="space-y-4" onSubmit={handleSubmit}>
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="password" className="block mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between text-sm"
          >
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
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            variants={itemVariants}
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-sm"
          >
            Login
          </motion.button>
        </motion.form>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="flex items-center my-6"
        >
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-sm text-gray-500">or login with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 my-4"
        >
          {[FcGoogle, FaFacebook, FaTwitter, FaGithub, FaLinkedinIn, FaApple].map((Icon, i) => (
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              key={i}
              className={`p-3 rounded-full transition ${
                Icon === FcGoogle
                  ? "border border-gray-300 bg-white hover:bg-gray-100"
                  : Icon === FaFacebook
                  ? "bg-[#1877f2] hover:bg-[#155cc3] text-white"
                  : Icon === FaTwitter
                  ? "bg-[#1DA1F2] hover:bg-[#1a91da] text-white"
                  : Icon === FaGithub
                  ? "bg-[#333] hover:bg-[#24292f] text-white"
                  : Icon === FaLinkedinIn
                  ? "bg-[#0077b5] hover:bg-[#00669c] text-white"
                  : "bg-black hover:bg-gray-800 text-white"
              }`}
            >
              <Icon className="text-2xl" />
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-6 text-center text-sm text-gray-600"
        >
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="underline font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Sign Up
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
