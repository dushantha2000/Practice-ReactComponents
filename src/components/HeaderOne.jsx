import React from "react";

function HeaderOne() {
  return (
    <div className="bg-blue-500 p-4">{/* first div is the add the background color and padding to the header */}
      <div className="container mx-auto  flex justify-between items-center">{/* second div is to make the content of the header flex */}
        <div className="text-white text-xl font-bold">MyApp</div>
        <div className="space-x-4">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/" className="text-white hover:text-gray-300">About</a>
          <a href="/" className="text-white hover:text-gray-300">Contact</a>
          <a href="/" className="text-white hover:text-gray-300">Services</a>
          <a href="/" className="text-white hover:text-gray-300">Blogs</a>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100">Login</button>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100">register</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderOne;
