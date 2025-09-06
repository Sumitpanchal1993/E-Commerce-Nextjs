"use client";
import Image from "next/image";
import "./homepage.css";
import Card from "@/Sub Components/Card";
import { useGlobalStore } from "@/Store/GlobalStore";
import Error from "@/Components/Error";
// import category from "@/Dummy Data/Category";
import ageGroup from "@/Dummy Data/AgeGroup";

import Carousel from "@/Sub Components/Carousel";
import { use, useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80",
];

export default function Home() {
  const { error } = useGlobalStore();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.error("Error fetching category data:", err));
  }, []);
  return (
    <>
      {error && <Error onRetry />}
      <div className="foundation homeBase">
        <Carousel images={images} />
        {/* <div className="offer">
        <p>
          Welcome to Gift Gallary! Discover unique gifts for every occasion
          from handcrafted treasures to thoughtful keepsakes. Whether you are
          celebrating a birthday, anniversary, or just want to make someone
          smile, we have the perfect gift waiting for you.
        </p>
        <h4>🎁 Made with love, chosen with care.</h4>
      </div>
    <hr /> */}
        <div className="categorySection">
          <h3>Shop By Category</h3>
          <div className="category">
            {category.map((item, id) => {
              return <Card key={id} image={images} title={item} />;
            })}
          </div>
        </div>
        <hr />
        <div className="categorySection">
          <h3>Shop By Age Group</h3>
          <div className="category">
            {ageGroup.map((item, id) => {
              return <Card key={id} image={item.image} title={item.title} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
