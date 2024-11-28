import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar"; // Static Sidebar Component

const Nav = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust for mobile view
    };

    checkIfMobile(); // Initial check
    window.addEventListener("resize", checkIfMobile); // Event listener for resizing

    return () => {
      window.removeEventListener("resize", checkIfMobile); // Cleanup listener
    };
  }, []);

  // Close Sidebar when clicked outside
  useEffect(() => {
    if (sidebarVisible) {
      const handleClickOutside = (e) => {
        if (!e.target.closest(".sidebar") && !e.target.closest(".hamburger")) {
          setSidebarVisible(false);
        }
      };
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [sidebarVisible]);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white py-4 px-6 border-b border-gray-200">
        {/* Hamburger Icon (Only on mobile) */}
        {isMobile && (
          <div className="md:hidden">
            <button onClick={toggleSidebar} className="text-2xl hamburger">
              <FaBars />
            </button>
          </div>
        )}

        {/* My Profile Link in Navbar */}
        <div className="text-2xl font-bold text-blue-800">
          <Link to="/">StarFashion</Link>
        </div>

        {/* Navbar Links (Visible in PC view) */}
        {!isMobile && (
          <div className="flex space-x-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/products" className="hover:underline">Products</Link>
            <Link to="/contact-us" className="hover:underline">Contact Us</Link>
          </div>
        )}

        {/* Right Section: Search Bar, Cart, Sign Up Button */}
        <div className="flex items-center space-x-6">
          {/* Search Bar (Visible in PC view) */}
          {!isMobile && (
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search products..."
                className="w-96 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute top-2 right-2 text-gray-500" />
            </div>
          )}

          {/* Cart Icon */}
          <Link to="/cart">
            <FaShoppingCart className="text-2xl text-gray-800" />
          </Link>

          {/* Sign Up Button (Visible in PC and Mobile) */}
          <Link
            to="/account"
            className="px-4 py-1 rounded-full bg-blue-800 text-white font-semibold hover:bg-blue-900"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Sidebar (Visible only on mobile) */}
      {sidebarVisible && <Sidebar closeSidebar={toggleSidebar} />}

      {/* Mobile View Search Bar */}
      {isMobile && searchVisible && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white w-80 py-2 border border-gray-300 rounded-md shadow-lg">
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full p-2"
          />
        </div>
      )}
    </>
  );
};

export default Nav;
