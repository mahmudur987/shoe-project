import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      quote: "I love their shoes! Great quality and stylish.",
    },
    {
      name: "Jane Smith",
      quote: "Comfortable and affordable. My go-to shoe brand.",
    },
    {
      name: "David Johnson",
      quote: "Your Shoe Company is the best in the business!",
    },
    {
      name: "David Johnson",
      quote: "Your Shoe Company is the best in the business!",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="testimonials" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Testimonials</h2>
      </div>
      <div>
        <Slider {...settings}>
          {testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg text-center animated-text2"
            >
              <p className="text-lg mb-4">{testimonial.quote}</p>
              <p className="text-info font-bold">{testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
