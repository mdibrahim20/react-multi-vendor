import React, { useState, useEffect } from 'react';
import {
  FaSearchengin,
  FaVideo,
  FaPhone,
  FaEllipsis,
  FaPaperPlane,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaX
} from 'react-icons/fa6';

const ChatSeller = () => {
  const [message, setMessage] = useState('');
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleSendMessage = () => {
    setMessage('');
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowLeftSidebar(false);
        setShowRightSidebar(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white overflow-hidden">

      {/* LEFT SIDEBAR */}
      <div
        className={`
          h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 p-4 overflow-y-auto
          ${isMobile ? 'absolute top-0 left-0 z-30 transition-transform duration-300 ease-in-out' : ''}
          ${isMobile && !showLeftSidebar ? '-translate-x-full' : 'translate-x-0'}
        `}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <img src="/images/admin.png" alt="Admin" className="w-8 h-8 rounded-full object-cover" />
            {isMobile && <FaX className="cursor-pointer" onClick={() => setShowLeftSidebar(false)} />}
          </div>
          <h2 className="text-lg font-semibold">Sellers</h2>
        </div>
        <div className="relative mb-4">
          <FaSearchengin className="absolute top-2.5 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-sm"
          />
        </div>
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            onClick={() => {
              setShowRightSidebar(true);
              setShowLeftSidebar(false);
            }}
            className="flex items-center justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer mb-2"
          >
            <div className="flex items-center gap-3">
              <img
                src="/images/seller.png"
                alt="Seller"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-sm">Kathryn Murphy</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Hey! there I'm...</p>
              </div>
            </div>
            <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">8</span>
          </div>
        ))}
      </div>

      {/* MIDDLE CHAT PANEL */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 p-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/seller.png"
              alt="User"
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
              onClick={() => isMobile && setShowLeftSidebar(true)}
            />
            <div>
              <p className="font-semibold">Kathryn Murphy</p>
              <p className="text-xs text-gray-500">Active now</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
            <FaPhone className="cursor-pointer" />
            <FaVideo className="cursor-pointer" />
            {isMobile && (
              <FaEllipsis
                className="cursor-pointer"
                onClick={() => setShowRightSidebar(true)}
              />
            )}
          </div>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          <div className="flex flex-col gap-2">
            <div className="self-start bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg w-max text-sm">
              Hey! How are you?
            </div>
            <div className="self-start bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg w-max text-sm">
              Good, I will book the meeting room for you.
            </div>
            <div className="self-end bg-indigo-600 text-white px-4 py-2 rounded-lg w-max text-sm">
              Hi, I am good, what about you?
            </div>
            <div className="self-end bg-indigo-600 text-white px-4 py-2 rounded-lg w-max text-sm">
              Thanks, It will be great.
            </div>
          </div>
        </div>

        <div className="flex items-center border-t border-gray-300 dark:border-gray-700 p-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none bg-white dark:bg-gray-800"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div
        className={`
          h-full w-64 md:w-1/4 bg-white dark:bg-gray-800 border-l border-gray-300 dark:border-gray-700 p-4 overflow-y-auto
          ${isMobile ? 'absolute top-0 right-0 z-30 transition-transform duration-300 ease-in-out' : ''}
          ${isMobile && !showRightSidebar ? 'translate-x-full' : 'translate-x-0'}
        `}
      >
        <div className="flex items-center justify-end">
          {isMobile && <FaX className="cursor-pointer" onClick={() => setShowRightSidebar(false)} />}
        </div>
        <div className="text-center">
          <img src="/images/seller.png" alt="Seller" className="w-24 h-24 rounded-full mx-auto mb-2" />
          <p className="font-semibold">Kathryn Murphy</p>
          <p className="text-sm text-gray-500">Frontend Developer</p>
        </div>
        <div className="mt-6 space-y-3 text-sm">
          <div><strong>Location:</strong> Bangladesh</div>
          <div><strong>Members since:</strong> Oct 2021</div>
          <div><strong>Language:</strong> English</div>
        </div>
        <div className="mt-6 flex gap-4 justify-center">
          <a href="#" className="text-blue-600 text-lg"><FaFacebook /></a>
          <a href="#" className="text-sky-400 text-lg"><FaTwitter /></a>
          <a href="#" className="text-pink-600 text-lg"><FaInstagram /></a>
        </div>
        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-2">Shared Documents</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="relative group">
                <img
                  src={`/images/demo${(idx % 3) + 1}.jpg`}
                  alt="doc"
                  className="w-full h-16 object-cover rounded-md group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-xs text-white">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isMobile && (
          <button
            className="mt-4 w-full text-sm text-indigo-600"
            onClick={() => setShowRightSidebar(false)}
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatSeller;
