"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../Sub Components/ProductCard";
import "./AllProducts.css";
import { useGlobalStore } from "@/Store/GlobalStore";
import Loader from "@/Components/Loader";

export default function AllProducts() {
  const { loading, setLoading, error, setError } = useGlobalStore();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const limit = 10;

  useEffect(() => {
    fetchProducts(page);
    ``;
  }, [page]);

  const fetchProducts = async (pageNum) => {
    setLoading(true);
    setError(null); // reset previous error

    try {
      const skip = pageNum * limit;
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();
      setProducts(data.products);
      setTotal(data.total);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleProductDetail = (item) => {
    console.log("This product is clicked:", item);
  };

  return (
    <>
      <div className="foundation allProductsBase">
        {loading ? (
          <Loader />
        ) : (
          products.map((item) => (
            <ProductCard
              item={item}
              key={item.id}
              handleProductDetail={handleProductDetail}
            />
          ))
        )}
      </div>

      <div className="paginationControls">
        <button
          className="spbtn-primary"
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
        >
          ⬅ Previous
        </button>
        <span> Page {page + 1} </span>
        <button
          className="spbtn-primary"
          onClick={() => {
            if ((page + 1) * limit < total) setPage((prev) => prev + 1);
          }}
          disabled={(page + 1) * limit >= total}
        >
          Next ➡
        </button>
      </div>
    </>
  );
}
