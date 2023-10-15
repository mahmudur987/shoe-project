import { useState } from "react";
import Header from "./components/Header";
import ProductShowcase from "./components/ProductShowcase";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="container mx-auto text-center flex flex-col w-full gap-10 md:gap-20 lg:gap-32 mb-10">
        <Header />
        <ProductShowcase />
        <AboutUs />
        <Testimonials />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}

export default App;
