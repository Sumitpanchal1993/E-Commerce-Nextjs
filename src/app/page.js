import Image from "next/image";
// import styles from "./page.module.css";
import "./homepage.css"


export default function Home() {
  return (
  <div className="homeBase">
        <div className="trending">
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div className="offer">Existing offers</div>
        <h3>Shop By Category</h3>
        <div className="category">
          <div>
            <div>
              <img src="/Media/Mens.png" alt="" />
            </div>
            <h3>Mens Wear</h3>
          </div>
          <div>
            <div>
              <img src="/Media/women.jpeg" alt="" />
            </div>
            <h3>Womens Wear</h3>
          </div>
          <div>
            <div>
              <img src="/Media/kids.png"alt="" />
            </div>
            <h3>Kids Wear</h3>
          </div>
          <div>
            <div>
              <img src="/Media/Todler.png" alt="" />
            </div>
            <h3>Toddler Wear</h3>
          </div>
        </div>
        <h3>Shop By Brand</h3>
        <div className="brand">
          <div>
            <img src="/Media/nike.jpg" alt="" />
            <h4>Nike</h4>
          </div>
          <div>
            <img src="/Media/nike.jpg" alt="" />
            <h4>Nike</h4>
          </div>
          <div>
            <img src="/Media/nike.jpg" alt="" />
            <h4>Nike</h4>
          </div>
          <div>
            <img src="/Media/nike.jpg" alt="" />
            <h4>Nike</h4>
          </div>
          <div>
            <img src="/Media/nike.jpg" alt="" />
            <h4>Nike</h4>
          </div>
          <div>
            <img src="/Media/nike.jpg" alt="" />
            <h4>Nike</h4>
          </div>
          <div>
            <img src="/Media/nike.jpg" alt="" />
            <h4>Nike</h4>
          </div>
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
