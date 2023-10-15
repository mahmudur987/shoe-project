import React from "react";

const products = [
  {
    name: "Classic Sneakers",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=998&q=80",
    description: "Timeless style for everyday wear.",
    price: "$59.99",
  },
  {
    name: "Running Shoes",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    description: "Built for performance and comfort.",
    price: "$79.99",
  },
  {
    name: "Casual keds",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    description: "Perfect for a day at the beach.",
    price: "$39.99",
  },
  {
    name: "Casual Akram",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    description: "Perfect for a day at the beach.",
    price: "$39.99",
  },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="bg-gray-100 py-16 ">
      <div className="container mx-auto  animate-fadeInLeft">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-8 animated-text1">
          Our Products
        </h2>
        <div className=" flex justify-around flex-wrap gap-6 md:gap-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-40 w-40 object-cover rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-500 mt-2">{product.description}</p>
              <p className="text-primary font-bold text-lg mt-2 animated-text2">
                {product.price}
              </p>
              <button className="bg-primary text-white py-2 px-4 mt-4 rounded-full hover:bg-primary-dark transition duration-300">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
