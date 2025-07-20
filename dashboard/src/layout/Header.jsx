import React, { useState } from 'react';
import { FaUserCircle, FaBell, FaSearch, FaSun, FaMoon, FaBars } from 'react-icons/fa';

const Header = ({ isDark, setIsDark, setSidebarOpen }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between bg-white dark:bg-gray-800 shadow px-4 py-[17px] md:px-6 text-gray-900 dark:text-white ">
            <div className="flex items-center gap-3">
                <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
                    <FaBars className="text-xl" />
                </button>
                <FaSearch className="text-gray-500 dark:text-gray-300" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="hidden md:block outline-none border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1 w-64 text-sm bg-white dark:bg-gray-900 dark:text-white"
                />
            </div>

            <div className="relative">
                <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2">
                    <FaUserCircle className="text-gray-500 dark:text-gray-300 text-xl" />
                    <span className="font-semibold hidden sm:block">Albert Flores</span>
                </button>
                {menuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg p-2 z-50">
                        <button onClick={() => setIsDark(prev => !prev)} className="flex items-center gap-2 w-full px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                            {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
                            <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                        </button>
                        <div className="flex items-center gap-2 px-2 py-1 text-sm">
                            <FaBell className="text-gray-500 dark:text-gray-300" /> Notifications
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1 text-sm">
                            <FaUserCircle className="text-gray-500 dark:text-gray-300" /> Profile
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;