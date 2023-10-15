import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import "../Animation.css";
import { useInView } from "react-intersection-observer";
const Header = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <header ref={ref} className=" container mx-auto  bg-gray-900 text-white">
      <div className={`p-4 ${inView ? "animated-element" : ""}`}>
        <div className="flex justify-between items-center">
          {/* Company Logo */}
          <div className="text-3xl font-bold">
            <a href="/" className="text-white">
              V-SHOE
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6">
            <a href="#products" className="hover:text-gray-400">
              Products
            </a>
            <a href="#about" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#testimonials" className="hover:text-gray-400">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </nav>

          {/* Mobile Navigation (Hamburger Menu) */}
          <div className="md:hidden">
            <button className="text-2xl text-white">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div
        className="hero min-h-[550px] animated-background"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <Banner />
      </div>
    </header>
  );
};

export default Header;
