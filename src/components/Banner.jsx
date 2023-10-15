import React from "react";
import "../Animation.css";
const Banner = () => {
  return (
    <div className="container mx-auto w-full  text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInLeft ">
        Discover the Perfect Shoes
      </h1>
      <p className="text-lg md:text-xl mb-8 animate-fadeInRight">
        Quality shoes for every occasion.
      </p>
      <a
        href="#products"
        className="bg-primary text-white py-3 px-6 rounded-full hover:bg-primary-dark hover:shadow-lg transition duration-300 fade-in"
      >
        Shop Now
      </a>
    </div>
  );
};

export default Banner;
