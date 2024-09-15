import { useState } from "react";

import logo1 from "../../assets/img/logo1.png";

let Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="sticky top-0 bg-white">
      <header className=" sticky top-0 w-full ">
        <nav className="grid  grid-cols-2 sm:grid-cols-4 py-3 px-10">
          <div className="pl-3 col-span-1  flex items-center text-white">
            <img src={logo1} alt="" className="h-[55px]" />
          </div>
          <ul className=" flex items-center sm:gap-5 hidden md:gap-2  md:hidden lg:flex lg:col-span-2 pl-0 sm:pl-3 text-white ">
            <li className=" pl-3 ">
              <a href="/" className="text-xs text-amber-500 md:text-lg">
                Home
              </a>
            </li>
            <li className=" p-3">
              <a href="/" className="text-xs text-amber-500 md:text-lg">
                Service
              </a>
            </li>
            <li className=" p-3">
              <a href="/" className="text-xs text-amber-500 md:text-lg">
                Contact us
              </a>
            </li>
            <li className=" p-3">
              <a href="/" className="text-xs text-amber-500 md:text-lg">
                Agent
              </a>
            </li>
            <li className=" p-3">
              <a href="/" className="text-xs text-amber-500 md:text-lg">
                About us
              </a>
            </li>
          </ul>
          {/* for sreach and login */}
          <div className="  flex justify-end  sm:col-span-3 lg:col-span-1 items-center  p-5">
            {/* profile */}
            <div className="flex justify-end  gap-4   items-center    ">
              <i class="fa-regular fa-heart"></i>
              <i className="fas fa-shopping-cart "></i>
              <i class="fa-regular fa-user  "></i>
              <div className="grid place-content-center ">
                <div>
                  <input
                    type="checkbox"
                    id="theme-toggle"
                    checked={isDarkMode}
                    onChange={handleToggle}
                    className="hidden"
                  />
                  <label
                    htmlFor="theme-toggle"
                    className={`w-14 h-7 rounded-full flex items-center cursor-pointer transition-colors duration-300 ${
                      isDarkMode ? "bg-gray-800" : "bg-white border-2"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                        isDarkMode
                          ? "translate-x-7 bg-gray-300"
                          : "bg-yellow-500"
                      }`}
                    ></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
