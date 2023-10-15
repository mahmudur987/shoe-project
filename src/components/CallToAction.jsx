import React from "react";

const CallToAction = () => {
  return (
    <section id="contact" className="bg-primary text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to step into style?
        </h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter for the latest updates and offers.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="rounded-l-full py-3 px-6 text-gray-800 focus:outline-none focus:ring focus:ring-primary"
          />
          <button className="bg-white text-primary font-bold rounded-r-full py-3 px-6 hover:bg-primary hover:text-white transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
