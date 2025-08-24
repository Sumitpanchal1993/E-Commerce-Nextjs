import React, { useState } from 'react';
import './ProductPreview.css';

const ProductPreview = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="preview-overlay">
      <div className="preview-container">
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="preview-left">
          <img src={selectedImage} alt="Main" className="main-image" />
          <div className="thumbnail-row">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="preview-right">
          <h2>{product.title}</h2>
          <p className="price">₹ {product.price}</p>
          <p className="description">{product.description}</p>

          <div className="action-buttons">
            <button className="btn primary">Add to Cart</button>
            <button className="btn secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;