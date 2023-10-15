import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <p>
          &copy; {new Date().getFullYear()} Your Shoe Company. All rights
          reserved.
        </p>
        <div className="mt-4">
          <a href="#" className="mr-4 hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
        </div>
        <div className="mt-4">
          <a href="#" className="mr-4 hover:text-gray-400">
            Facebook
          </a>
          <a href="#" className="mr-4 hover:text-gray-400">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
