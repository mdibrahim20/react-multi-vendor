import React, { useState, useRef } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddProductPage = () => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const inputRef = useRef();

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const validImages = files.filter((file) => file.type.startsWith("image/"));

    validImages.forEach((file, idx) => {
      const newImage = {
        id: Date.now() + idx,
        name: file.name,
        src: null,
        uploading: true,
        progress: 0,
      };

      setImagePreviews((prev) => [...prev, newImage]);

      const reader = new FileReader();
      reader.onload = () => {
        let loaded = 0;
        const fakeUpload = setInterval(() => {
          loaded += 10;
          setImagePreviews((prev) =>
            prev.map((img) =>
              img.id === newImage.id
                ? { ...img, progress: loaded }
                : img
            )
          );
          if (loaded >= 100) {
            clearInterval(fakeUpload);
            setImagePreviews((prev) =>
              prev.map((img) =>
                img.id === newImage.id
                  ? {
                      ...img,
                      src: reader.result,
                      uploading: false,
                      progress: 100,
                    }
                  : img
              )
            );
          }
        }, 100);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (id) => {
    setImagePreviews((prev) => prev.filter((img) => img.id !== id));
  };

  const handleClearAll = () => {
    setImagePreviews([]);
  };

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Add Product</h2>
        <Link
          to="/seller/dashboard/all-product"
          className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          All Products
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Form */}
        <div className="lg:col-span-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Product Name" className="input" />
            <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Brand Name" className="input" />
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">--select category--</option>
              <option value="tshirt">Tshirt</option>
              <option value="shirt">Shirt</option>
              <option value="pants">Pants</option>
            </select>
            <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" placeholder="Product Stock" className="input" />
            <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" placeholder="Price" className="input" />
            <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" placeholder="% Discount" className="input" />
          </div>

          <textarea
            placeholder="Description"
            className="w-full mt-4 px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            rows={4}
          ></textarea>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
              Upload Product Images
            </label>
            <div
              className="border-2 border-dashed border-gray-400 dark:border-gray-600 p-4 rounded-md text-center cursor-pointer"
              onClick={() => inputRef.current.click()}
            >
              <div className="text-gray-500 text-sm">
                <FaUpload className="mx-auto mb-2 text-xl" />
                Click to upload image(s)
              </div>
              <input
                type="file"
                ref={inputRef}
                onChange={handleImageUpload}
                hidden
                accept="image/*"
                multiple
              />
            </div>
            {imagePreviews.length > 0 && (
              <button
                onClick={handleClearAll}
                className="mt-4 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 text-sm"
              >
                Clear All Images
              </button>
            )}
          </div>
        </div>

        {/* Image Previews */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-4 rounded-md overflow-y-auto max-h-[550px]">
          {imagePreviews.length === 0 ? (
            <p className="text-gray-400 text-sm text-center">No images uploaded yet.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {imagePreviews.map((img) => (
                <div
                  key={img.id}
                  className="relative border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 shadow-sm"
                >
                  <div className="relative">
                    {img.uploading ? (
                      <div className="w-full h-32 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse">
                        <p className="text-xs text-gray-500 dark:text-gray-300">
                          Uploading... {img.progress}%
                        </p>
                      </div>
                    ) : (
                      <img
                        src={img.src}
                        alt={img.name}
                        className="w-full h-32 object-cover rounded-md"
                      />
                    )}

                    <button
                      className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full text-xs"
                      onClick={() => handleRemoveImage(img.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-600 dark:text-gray-300 break-all">
                    {img.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
