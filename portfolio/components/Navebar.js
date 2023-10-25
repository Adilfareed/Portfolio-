// components/NavBar.js
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl text-white font-bold">ADIL FAREED</div>
          <div className="hidden md:flex space-x-4">
            <Link href="#" passHref className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="#" passHref className="text-white hover:text-gray-300">
              contact
            </Link>
            <Link href="#" passHref className="text-white hover:text-gray-300">
              About
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 mt-4">
            <li>
              <Link
                href="#"
                passHref
                className="text-white hover:text-gray-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="#"
                passHref
                className="text-white hover:text-gray-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                passHref
                className="text-white hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
