import Image from "next/image";
// import styles from "./page.module.css";
import "./homepage.css";

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
];

const brand = [
  {
    title: "Nike",
    image: "/Media/nike.jpg",
  },
  {
    title: "Adidas",
    image: "/Media/Adidas_logo.png",
  },
  {
    title: "Puma",
    image: "/Media/puma.png",
  },
  {
    title: "Reebok",
    image: "/Media/Adidas_logo.png",
  },
];

export default function Home() {
  return (
    <div className="homeBase">
      <div className="trending">
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="offer">
        <p>
          Welcome to Gift Gallary! Discover unique gifts for every occasion –
          from handcrafted treasures to thoughtful keepsakes. Whether you're
          celebrating a birthday, anniversary, or just want to make someone
          smile, we have the perfect gift waiting for you.
        </p>
        <p>
          <h4>🎁 Made with love, chosen with care.</h4>
        </p>
      </div>
      <h3>Shop By Category</h3>
      <div className="category">
        {category.map((item) => {
          return (
            <div>
              <div>
                <img src={item.image} alt="" />
              </div>
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
      <h3>Shop By Brand</h3>
      <div className="brand">
        {brand.map((item) => {
          return (
            <div>
              <div>
                <img src={item.image} alt="" />
              </div>
              <h3>{item.title}</h3>
            </div>
          );
        })}  
      </div>
      <h3>Shop By Price Range</h3>
      <div className="pricerange category">
        <div>
          <h3>Upto 99</h3>
        </div>
        <div>
          <h3>Upto 199</h3>
        </div>
        <div>
          <h3>Upto 299</h3>
        </div>
        <div>
          <h3>Upto 399</h3>
        </div>
        <div>
          <h3>Upto 499</h3>
        </div>
        <div>
          <h3>Upto 599</h3>
        </div>
        <div>
          <h3>Upto 699</h3>
        </div>
        <div>
          <h3>Upto 799</h3>
        </div>
        <div>
          <h3>Upto 899</h3>
        </div>
        <div>
          <h3>Upto 999</h3>
        </div>
        <div>
          <h3>Upto 1099</h3>
        </div>
        <div>
          <h3>Upto 2099</h3>
        </div>
        <div>
          <h3>Upto 3099</h3>
        </div>
        <div>
          <h3>Upto 4099</h3>
        </div>
      </div>
    </div>
  );
}
