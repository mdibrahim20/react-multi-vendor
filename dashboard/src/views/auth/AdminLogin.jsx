import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { admin_login } from '../../store/Reducers/authReducer';
 

const AdminLogin = () => {
  const dispatch = useDispatch();
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
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(admin_login(state))
        // console.log("Admin Login Info:", state);
    };
    return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-gray-700 text-white rounded-xl shadow-2xl p-8">
      <h2 className="text-3xl font-bold text-center mb-2">Admin Access</h2>
      <p className="text-sm text-center text-gray-300 mb-6">Enter your credentials to continue</p>

      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-white/90">Email</label>
          <input
            type="email"
            id="email"
            name='email'
            onChange={handleChange} value={state.email}
            placeholder="admin@example.com"
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 text-sm font-medium text-white/90">Password</label>
          <input
            type="password"
            id="password"
            name='password'
            onChange={handleChange} value={state.password}
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between text-sm text-gray-300">
          <label className="flex items-center gap-2">
            <input type="checkbox" name='remember' onChange={handleChange} checked={state.remember} className="accent-indigo-500 h-4 w-4" />
            Remember me
          </label>
          <a href="#" className="text-indigo-400 hover:underline">Forgot Password?</a>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-md font-semibold"
        >
          Login
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-400">
        Not an admin?{" "}
        <Link to="/" className="underline text-indigo-400 hover:text-indigo-300">
          Return to Home
        </Link>
      </div>
    </div>
  </div>
);
};

export default AdminLogin;