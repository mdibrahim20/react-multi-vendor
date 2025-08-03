import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { admin_login, messageClear } from "../../store/Reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector((state) => state.auth);

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
    dispatch(admin_login(state));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, { position: "top-right" });
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage, { position: "top-right" });
      dispatch(messageClear());
      navigate("/");
    }
  }, [errorMessage, successMessage, dispatch, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black flex items-center justify-center px-4">
      <Toaster />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-md border border-gray-700 text-white rounded-xl shadow-2xl p-8"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center mb-2"
        >
          Admin Access
        </motion.h2>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-center text-gray-300 mb-6"
        >
          Enter your credentials to continue
        </motion.p>

        <motion.form
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {["email", "password"].map((field, i) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <label
                htmlFor={field}
                className="block mb-1 text-sm font-medium text-white/90 capitalize"
              >
                {field}
              </label>
              <input
                type={field === "password" ? "password" : "email"}
                id={field}
                name={field}
                onChange={handleChange}
                value={state[field]}
                placeholder={field === "email" ? "admin@example.com" : "••••••••"}
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </motion.div>
          ))}

          <motion.div
            className="flex items-center justify-between text-sm text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                onChange={handleChange}
                checked={state.remember}
                className="accent-indigo-500 h-4 w-4"
              />
              Remember me
            </label>
            <Link to={"/"} className="text-indigo-400 hover:underline">
              Forgot Password?
            </Link>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            onClick={handleSubmit}
            disabled={loader}
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-md font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {loader ? <PropagateLoader color="#fff" size={10} /> : "Login"}
          </motion.button>
        </motion.form>

        <motion.div
          className="mt-6 text-center text-sm text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Not an admin?{" "}
          <Link to="/" className="underline text-indigo-400 hover:text-indigo-300">
            Return to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
