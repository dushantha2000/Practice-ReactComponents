import React, { useEffect, useState } from "react";

function HeaderThree() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 w-full ${isScrolled ? "bg-gray-900" : "bg-transparent"}`}>
      <div className="bg-green-800 ">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="text-white text-lg font-bold">Myapp</div>
          <div className="hidden md:flex space-x-4 items-center">
            {/* hidden on small screens */}
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Blogs
            </a>

            <button className="bg-green-500 py-2 px-4 text-lg rounded-lg" aria-label="Login">
              Login
            </button>
            <button className="bg-green-500 py-2 px-4 text-lg rounded-lg" aria-label="Register">
              Register
            </button>
          </div>

          {/* This is visible on small screens */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu that is visible when clicked on icon */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="space-y-4 text-center py-4 bg-green-800">
            <a href="#" className="text-white hover:text-gray-300 block">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300 block">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300 block">
              Contact
            </a>
            <a href="#" className="text-white hover:text-gray-300 block">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-300 block">
              Blogs
            </a>

            <button className="bg-green-500 shadow-2xl text-black px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-black block mx-auto">
              Login
            </button>
            <button className="bg-green-500 shadow-2xl text-black px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-black block mx-auto">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderThree;
