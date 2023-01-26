import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long sleeve grafic shirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: false,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4937449/pexels-photo-4937449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/12872209/pexels-photo-12872209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/41527/beautiful-brown-country-cute-41527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hat",
      isNew: false,
      oldPrice: 19,
      newPrice: 12,
    },
  ];
  return (
    <div className="featuredproducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit
          officiis dolores. Et, ratione illum iure quas cupiditate soluta nam
          atque ad ex voluptatem consectetur doloribus error at deserunt
          corrupti accusantium praesentium fugit assumenda provident pariatur
          nulla quam. Earum, error.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
