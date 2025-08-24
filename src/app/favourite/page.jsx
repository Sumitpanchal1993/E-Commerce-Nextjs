'use client';
import React from 'react'
import { useState } from 'react';
import ProductPreview from '../../Sub Components/PrductPreview';

const productData = {
  title: 'Smart Watch',
  price: 2999,
  description: 'A feature-packed smart watch with fitness tracking, heart rate monitoring, and long battery life.',
  images: [
    'https://demo2.wpthemego.com/themes/sw_himarket/wp-content/uploads/2016/04/1.jpg',
    'https://xelltechnology.com/wp-content/uploads/2022/04/dummy6.jpg',
    'https://cdn.shopclues.com/images/thumbnails/42622/320/320/96839480mg1376manhattanred14434339101470828231.jpg',
  ],
};


function page() {
 const [showPreview, setShowPreview] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPreview(true)}>Open Product</button>

      {showPreview && (
        <ProductPreview
          product={productData}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
}

export default page