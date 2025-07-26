import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getNav } from "../navigation";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation();
  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    const navs = getNav("seller");
    setAllNav(navs);
  }, []);

  return (
    <aside
      className={`fixed md:static top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}
    >
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200 dark:border-gray-700">
        <span className="text-xl font-bold">DashCode</span>
        <button className="md:hidden text-gray-500" onClick={() => setIsOpen(false)}>✕</button>
      </div>
      <nav className="px-4 py-6 space-y-2">
        {allNav.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition whitespace-nowrap overflow-hidden text-ellipsis
              ${isActive || pathname === item.path
                ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-white"
                : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"}`
            }
          >
            {item.icon}
            {item.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;