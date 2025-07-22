// Pagination.jsx
import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className="flex justify-end items-center mt-4 space-x-2">
    <button
      className="text-sm px-2 py-1 rounded border dark:border-gray-600"
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
    >
      Prev
    </button>
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        className={`text-sm px-2 py-1 rounded ${
          currentPage === i + 1
            ? 'bg-indigo-600 text-white'
            : 'border dark:border-gray-600'
        }`}
        onClick={() => onPageChange(i + 1)}
      >
        {i + 1}
      </button>
    ))}
    <button
      className="text-sm px-2 py-1 rounded border dark:border-gray-600"
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
    >
      Next
    </button>
  </div>
);

export default Pagination;
