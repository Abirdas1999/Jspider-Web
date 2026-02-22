import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-500">
          MyWebsite
        </h1>

        {/* Nav Links */}
        <ul className="flex space-x-8 text-amber-500 font-medium">
          <li className="hover:text-white cursor-pointer transition duration-300">
            Home
          </li>
          <li className="hover:text-white cursor-pointer transition duration-300">
            Product
          </li>
          <li className="hover:text-white cursor-pointer transition duration-300">
            Service
          </li>
          <li className="hover:text-white cursor-pointer transition duration-300">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;