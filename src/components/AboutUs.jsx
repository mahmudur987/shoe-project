import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <section ref={ref} id="about" className="bg-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-sm mx-auto w-9/12 p-1 rounded-lg animated-bg ">
              About Us
            </h2>
            <p className="text-lg mb-4">
              We are Your Shoe Company, dedicated to providing the finest
              footwear for all occasions. With a passion for style and
              craftsmanship, we bring you a wide range of shoe designs that
              combine comfort, quality, and elegance.
            </p>
            <p className="text-lg">
              Our team of experts works tirelessly to ensure that each pair of
              shoes we offer meets the highest standards of quality and fashion.
              From casual sandals to formal dress shoes, we have something for
              everyone.
            </p>
          </div>
          <div className={`${inView ? "animated-image" : ""}`}>
            <img
              src="https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1618&q=80"
              alt="About Us"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
