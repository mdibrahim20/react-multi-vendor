import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FaUpload, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

/** If you already keep products in context/store/API, replace this with real fetch */
const fallbackDummy = [
  {
    id: 1,
    image: "http://localhost:3000/images/admin.jpg",
    name: "Men Full Sleeve",
    category: "Tshirt",
    brand: "Veirdo",
    price: 232,
    discount: 10,
    stock: 20,
    description: "Comfy cotton tee with full sleeves.",
  },
  // ...add others only if you want local fallback
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function EditProductPage() {
  const { id } = useParams(); // /seller/dashboard/edit-product/:id
  const productId = Number(id);
  const location = useLocation();
  const navigate = useNavigate();
  const fromState = location.state?.product;

  // Find product either from Link state or local fallback
  const initialProduct = useMemo(() => {
    if (fromState) return fromState;
    const hit = fallbackDummy.find((p) => p.id === productId);
    return (
      hit || {
        id: productId,
        image: "",
        name: "",
        category: "",
        brand: "",
        price: 0,
        discount: 0,
        stock: 0,
        description: "",
      }
    );
  }, [fromState, productId]);

  const [form, setForm] = useState({
    name: initialProduct.name || "",
    brand: initialProduct.brand || "",
    category: initialProduct.category || "",
    stock: Number(initialProduct.stock || 0),
    price: Number(initialProduct.price || 0),
    discount: Number(initialProduct.discount || 0),
    description: initialProduct.description || "",
  });

  const [imagePreviews, setImagePreviews] = useState(() => {
    // Seed with existing product image if present
    if (!initialProduct.image) return [];
    return [
      {
        id: Date.now(),
        name: initialProduct.name ? `${initialProduct.name}.jpg` : "image.jpg",
        src: initialProduct.image,
        uploading: false,
        progress: 100,
      },
    ];
  });

  const inputRef = useRef();

  useEffect(() => {
    // If route changes, sync (useful when navigating between products)
    setForm({
      name: initialProduct.name || "",
      brand: initialProduct.brand || "",
      category: initialProduct.category || "",
      stock: Number(initialProduct.stock || 0),
      price: Number(initialProduct.price || 0),
      discount: Number(initialProduct.discount || 0),
      description: initialProduct.description || "",
    });
    setImagePreviews(
      initialProduct.image
        ? [
            {
              id: Date.now(),
              name: initialProduct.name
                ? `${initialProduct.name}.jpg`
                : "image.jpg",
              src: initialProduct.image,
              uploading: false,
              progress: 100,
            },
          ]
        : []
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]:
        name === "stock" || name === "price" || name === "discount"
          ? Number(value)
          : value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
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
              img.id === newImage.id ? { ...img, progress: loaded } : img
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

    // Reset input so same file can be re-selected
    e.target.value = "";
  };

  const handleRemoveImage = (id) => {
    setImagePreviews((prev) => prev.filter((img) => img.id !== id));
  };

  const handleClearAll = () => setImagePreviews([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with real API call: PUT /products/:id
    const payload = {
      id: productId,
      ...form,
      images: imagePreviews.filter((i) => i.src).map((i) => i.src),
    };
    console.log("UPDATE PRODUCT ➜", payload);
    // Navigate back to list (or show toast)
    navigate("/seller/dashboard/all-product");
  };

  return (
    <motion.div
      className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Edit Product</h2>
        <div className="flex items-center gap-3">
          <Link
            to="/seller/dashboard/all-product"
            className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            All Products
          </Link>
          <Link
            to="/seller/dashboard/add-product"
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
          >
            + Add New
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Form */}
          <motion.div
            className="lg:col-span-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md"
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Product Name"
                className="input-style"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                name="brand"
                type="text"
                placeholder="Brand Name"
                className="input-style"
                value={form.brand}
                onChange={handleChange}
              />
              <select
                name="category"
                className="input-style"
                value={form.category}
                onChange={handleChange}
              >
                <option value="">--select category--</option>
                <option value="Tshirt">Tshirt</option>
                <option value="Shirt">Shirt</option>
                <option value="Pants">Pants</option>
              </select>
              <input
                name="stock"
                type="number"
                placeholder="Product Stock"
                className="input-style"
                value={form.stock}
                onChange={handleChange}
                min={0}
              />
              <input
                name="price"
                type="number"
                placeholder="Price"
                className="input-style"
                value={form.price}
                onChange={handleChange}
                step="0.01"
                min={0}
              />
              <input
                name="discount"
                type="number"
                placeholder="% Discount"
                className="input-style"
                value={form.discount}
                onChange={handleChange}
                min={0}
                max={100}
              />
            </div>

            <textarea
              name="description"
              placeholder="Description"
              className="w-full mt-4 px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              rows={4}
              value={form.description}
              onChange={handleChange}
            />

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                Upload / Replace Product Images
              </label>
              <div
                className="border-2 border-dashed border-gray-400 dark:border-gray-600 p-4 rounded-md text-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
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
                  type="button"
                  onClick={handleClearAll}
                  className="mt-4 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 text-sm"
                >
                  Clear All Images
                </button>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
              >
                Save Changes
              </button>
            </div>
          </motion.div>

          {/* Image Previews */}
          <motion.div
            className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-4 rounded-md overflow-y-auto max-h-[550px]"
            whileHover={{ scale: 1.01 }}
          >
            {imagePreviews.length === 0 ? (
              <p className="text-gray-400 text-sm text-center">
                No images attached yet.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {imagePreviews.map((img, i) => (
                  <motion.div
                    key={img.id}
                    className="relative border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 shadow-sm"
                    variants={fadeIn}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05 }}
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
                        type="button"
                        className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full text-xs"
                        onClick={() => handleRemoveImage(img.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-600 dark:text-gray-300 break-all">
                      {img.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
}
