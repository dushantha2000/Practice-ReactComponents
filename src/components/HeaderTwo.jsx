import React, { useState } from "react";

function HeaderTwo() {
  // State to toggle the menu on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <>
   {/* This navbar is add move function like all adjustments on all devices */}


    <div className="bg-red-500 p-4">
      <div className="container mx-auto flex justify-around items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">MyApp</div>
        {/* Links */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300">Blogs</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>

          {/* Login and register button */}
          <button className="bg-black text-white py-2 rounded-xl px-4 hover:bg-white hover:text-black">Login</button>
          <button className="bg-black text-white py-2 rounded-xl px-4 hover:bg-white hover:text-black">Register</button>
        </div>

        {/* This button is visible on small screens */}
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
        <div className="space-y-4 text-center   py-4 bg-red-500">
          <a href="#" className="text-white hover:text-gray-300 block">Home</a>
          <a href="#" className="text-white hover:text-gray-300 block">About</a>
          <a href="#" className="text-white hover:text-gray-300 block">Contact</a>
          <a href="#" className="text-white hover:text-gray-300 block">Services</a>
          <a href="#" className="text-white hover:text-gray-300 block">Blogs</a>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-100 block mx-auto">Login</button>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-100 block mx-auto">Register</button>
        </div>
      </div>
      </div>
   </>
    
  );
}

export default HeaderTwo;
