import { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/img/logo1.png";

let Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Additional logic for the toggle can be placed here if needed
  };

  return (
    <div
      className={`sticky top-0 z-20 min-w-80 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <header className="sticky top-0 w-full">
        <nav className="grid grid-cols-2 sm:grid-cols-4 py-3 px-10">
          {/* Logo and mobile menu button */}
          <div className="col-span-2 flex items-center justify-between lg:col-span-1">
            <Link to="/">
              <img src={logo1} alt="logo" className="h-[55px]" />
            </Link>
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="lg:hidden text-2xl text-black"
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="flex items-center sm:gap-5 hidden md:gap-2 lg:flex lg:col-span-2 pl-0 sm:pl-3 text-black place-content-center">
            <li className="p-3">
              <Link
                to="/servicepage"
                className="text-body text-amber-500 md:text-header-6"
              >
                Category
              </Link>
            </li>
            <li className="p-3">
              <Link
                to="/faq"
                className="text-body text-amber-500 md:text-header-6"
              >
                FAQ
              </Link>
            </li>
            <li className="p-3">
              <Link
                to="/aboutus"
                className="text-body text-amber-500 md:text-header-6"
              >
                About Us
              </Link>
            </li>
          </ul>

          {/* Mobile menu */}
          <ul
            className={`fixed top-0 right-0 w-4/5 bg-white text-black h-full flex flex-col items-center transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden`}
          >
            <li className="p-5">
              <Link
                to="/servicepage"
                onClick={toggleMenu}
                className="text-body text-amber-500"
              >
                Category
              </Link>
            </li>
            <li className="p-5">
              <Link
                to="/faq"
                onClick={toggleMenu}
                className="text-body text-amber-500"
              >
                FAQ
              </Link>
            </li>
            <li className="p-5">
              <Link
                to="/aboutus"
                onClick={toggleMenu}
                className="text-body text-amber-500"
              >
                About Us
              </Link>
            </li>
            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="absolute top-4 right-4 text-2xl"
            >
              <i className="fa fa-times"></i>
            </button>
          </ul>

          {/* Theme toggle */}
          <div className="col-span-2 flex  items-center justify-end lg:col-span-1">
            <div className="flex gap-4 items-center ">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-user"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
