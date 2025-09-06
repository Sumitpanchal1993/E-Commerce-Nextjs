"use client";
import Image from "next/image";
import "./homepage.css";
import Card from "@/Sub Components/Card";
import { useGlobalStore } from "@/Store/GlobalStore";
import Error from "@/Components/Error";

import Carousel from "@/Sub Components/Carousel";

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80",
  ]
const category = [
  {
    title: "Action Toys",
    image: "/Media/action_toy.jpg",
  },
  {
    title: "Anime T-shirts",
    image: "/Media/animetshirt.webp",
  },
  {
    title: "Light Boxes and Lamps",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsk-b7rxreXDr7YGUI8xYwRI-CBrUQJJ_o6g0cgT6XWRTnaX8kuYny0P2GcwYq9JHHlxs&usqp=CAU",
  },
  {
    title: "Bobble Heads",
    image: "https://m.media-amazon.com/images/I/51cNCmEOESL.jpg",
  },
  {
    title: "Bobble Heads",
    image: "https://m.media-amazon.com/images/I/51cNCmEOESL.jpg",
  },
];

const ageGroup = [
  {
    title: "Todlers",
    image: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvMzMyLWFrZTg4MDMtbC1qb2I2NTUucG5n.png",
  },
  {
    title: "Kids",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtShUjA02OwWqYNBi6Wuu1Qcu_iUybiDlbA&s",
  },
  {
    title: "Teenagers",
    image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2stczUxLW5hbWUtMzY0NTctam9iNC1sLWpvYjc4OC5wbmc.png",
  },
  {
    title: "Youngsters",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQmFk8fiswC_i_rz7u0clwJzBZn6MoVDOiQ&s",
  },
];

export default function Home() {
  const {error,isDeviceMobile} = useGlobalStore();
 
  return (
    <>
    {error&&<Error onRetry/>}
    <div className="foundation homeBase">
      <Carousel images= {images}/>
      <div className="trending">
        <div>
          <img src="#" alt="" />
        </div>
      </div>
      <div className="offer">
        <p>
          Welcome to Gift Gallary! Discover unique gifts for every occasion
          from handcrafted treasures to thoughtful keepsakes. Whether you are
          celebrating a birthday, anniversary, or just want to make someone
          smile, we have the perfect gift waiting for you.
        </p>
        <h4>🎁 Made with love, chosen with care.</h4>
      </div>
    <hr />
      <h3>Shop By Category</h3>
      <div className="category">
        {category.map((item, id) => {
          return (
            <Card key={id} image={item.image} title={item.title} />
          );
        })}

      </div>
      <hr />
      <h3>Shop By Age Group</h3>
      <div className="category">
         {ageGroup.map((item, id) => {
           return (
             <Card key={id} image={item.image} title={item.title} />
            );
          })}
      </div>
    </div>
          </>
  );
}
