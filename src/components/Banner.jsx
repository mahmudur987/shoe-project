import React from "react";
import "../Animation.css";
import { useInView } from "react-intersection-observer";
const Banner = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <div ref={ref} className="container mx-auto w-full  text-center">
      <h1
        className={`text-4xl md:text-6xl font-bold mb-4 ${
          inView ? "animate-fadeInLeft" : ""
        }`}
      >
        Discover the Perfect Shoes
      </h1>
      <p
        className={`text-lg md:text-xl mb-8   ${
          inView ? "animate-fadeInRight" : ""
        }`}
      >
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
