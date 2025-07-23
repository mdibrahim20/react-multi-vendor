// CategoryPage.js
import React, { useState, useRef } from 'react';
import { FaEdit, FaTrash, FaSearch, FaUpload } from 'react-icons/fa';
import Pagination from '../pagination';

const dummyCategories = [
  { id: 1, name: 'Tshirt', image: 'http://localhost:3000/images/category/1.jpg' },
  { id: 2, name: 'Tshirt', image: 'http://localhost:3000/images/category/2.jpg' },
  { id: 3, name: 'Tshirt', image: 'http://localhost:3000/images/category/3.jpg' },
  { id: 4, name: 'Tshirt', image: 'http://localhost:3000/images/category/4.jpg' },
  { id: 5, name: 'Tshirt', image: 'http://localhost:3000/images/category/5.jpg' },
  { id: 6, name: 'Tshirt', image: 'http://localhost:3000/images/category/4.jpg' },
];

const CategoryPage = () => {
  const [search, setSearch] = useState('');
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const filtered = dummyCategories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <select
              className="border px-2 py-1 rounded-md dark:bg-gray-800 dark:border-gray-600"
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
            >
              {[5, 10, 15].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <div className="relative">
              <input
                type="text"
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 pr-4 py-2 border rounded-md text-sm focus:outline-none dark:bg-gray-800 dark:border-gray-700"
              />
              <FaSearch className="absolute left-2 top-3 text-gray-400" />
            </div>
          </div>

          <div className="overflow-x-auto rounded-md shadow-md">
            <table className="min-w-full table-auto text-sm">
              <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                <tr>
                  <th className="px-4 py-3">NO</th>
                  <th className="px-4 py-3">IMAGE</th>
                  <th className="px-4 py-3">NAME</th>
                  <th className="px-4 py-3">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((cat, index) => (
                  <tr key={cat.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-2">{(currentPage - 1) * perPage + index + 1}</td>
                    <td className="px-4 py-2">
                      <img src={cat.image} alt={cat.name} className="w-10 h-10 object-cover rounded" />
                    </td>
                    <td className="px-4 py-2">{cat.name}</td>
                    <td className="px-4 py-2 space-x-2">
                      <button className="text-yellow-500 hover:text-yellow-600"><FaEdit /></button>
                      <button className="text-red-500 hover:text-red-600"><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4 h-[90%]">
          <h2 className="text-lg font-semibold mb-4">Add Category</h2>
          <input
            type="text"
            placeholder="Category Name"
            className="w-full mb-4 px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          />
          <div
            className="border-2 border-dashed border-gray-400 dark:border-gray-600 p-4 rounded-md text-center cursor-pointer mb-4"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => inputRef.current.click()}
          >
            {loading ? (
              <p className="text-sm text-gray-500 animate-pulse">Uploading...</p>
            ) : imagePreview ? (
              <img src={imagePreview} alt="Preview" className="w-full h-32 object-contain rounded-md mx-auto" />
            ) : (
              <div className="text-gray-500 text-sm">
                <FaUpload className="mx-auto mb-2 text-xl" />
                Drag & drop or click to upload image
              </div>
            )}
            <input
              type="file"
              ref={inputRef}
              onChange={handleImageUpload}
              hidden
              accept="image/*"
            />
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm font-medium">
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
