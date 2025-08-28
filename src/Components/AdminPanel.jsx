'use client';   
import React, { useState } from 'react';
import './AdminPanel.css';

function AdminPanel() {
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      const file = files[0];
      setProductData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setProductData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate backend call
    console.log('Product submitted:', productData);
    setSuccessMsg('Product added successfully!');

    // Reset form
    setProductData({
      title: '',
      description: '',
      price: '',
      stock: '',
      category: '',
      image: null,
    });
    setPreview(null);

    // Optionally clear success after a delay
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="adminPanelContainer">
      <h2>Add New Product</h2>

      {successMsg && <p className="successMsg">{successMsg}</p>}

      <form className="adminForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={productData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={productData.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          value={productData.stock}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={productData.category}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />

        {preview && (
          <div className="imagePreview">
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminPanel;
