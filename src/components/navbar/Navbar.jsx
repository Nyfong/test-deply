// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo1 from "../../assets/img/LogoCP1.png";

// let Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleToggle = () => {
//     setIsDarkMode(!isDarkMode);
//     // Additional logic for the toggle can be placed here if needed
//   };

//   return (
//     <div
//       className={`sticky top-0 z-20 min-w-80 transition-colors duration-300 ${
//         isDarkMode ? "bg-gray-900" : "bg-white"
//       }`}
//     >
//       <header className="sticky top-0 w-full">
//         <nav className="grid grid-cols-2 sm:grid-cols-4 py-3 px-10">
//           {/* Logo and mobile menu button */}
//           <div className="col-span-2 flex items-center justify-between lg:col-span-1">
//             <NavLink to="/">
//               <img src={logo1} alt="logo" className="h-[55px] w-[100%]" />
//             </NavLink>
//             <button
//               onClick={toggleMenu}
//               aria-label="Toggle Menu"
//               className="lg:hidden text-2xl text-black"
//             >
//               <i className="fa fa-bars"></i>
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="flex items-center font-bold sm:gap-5 hidden md:gap-2 lg:flex lg:col-span-2 pl-0 sm:pl-3 text-black place-content-center">
//             <li className="p-3">
//               <NavLink
//                 to="/servicepage"
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-600" : "text-amber-500"
//                 }
//               >
//                 Category
//               </NavLink>
//             </li>
//             <li className="p-3">
//               <NavLink
//                 to="/faq"
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-600" : "text-amber-500"
//                 }
//               >
//                 FAQ
//               </NavLink>
//             </li>
//             <li className="p-3">
//               <NavLink
//                 to="/aboutus"
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-600" : "text-amber-500"
//                 }
//               >
//                 About Us
//               </NavLink>
//             </li>
//           </ul>

//           {/* Mobile menu */}
//           <ul
//             className={`fixed top-0 right-0 w-4/5 bg-white text-black h-full flex flex-col items-center transition-transform duration-300 ${
//               isMenuOpen ? "translate-x-0" : "translate-x-full"
//             } lg:hidden`}
//           >
//             <li className="p-5">
//               <NavLink
//                 to="/servicepage"
//                 onClick={toggleMenu}
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-900" : "text-amber-400"
//                 }
//               >
//                 Category
//               </NavLink>
//             </li>
//             <li className="p-5">
//               <NavLink
//                 to="/faq"
//                 onClick={toggleMenu}
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-900" : "text-amber-400"
//                 }
//               >
//                 FAQ
//               </NavLink>
//             </li>
//             <li className="p-5">
//               <NavLink
//                 to="/aboutus"
//                 onClick={toggleMenu}
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-900" : "text-amber-400"
//                 }
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <button
//               onClick={toggleMenu}
//               aria-label="Close Menu"
//               className="absolute top-4 right-4 text-2xl"
//             >
//               <i className="fa fa-times"></i>
//             </button>
//           </ul>

//           {/* Theme toggle */}
//           <div className="col-span-2 flex items-center justify-end lg:col-span-1">
//             <div className="flex gap-4 items-center ">
//               <i className="fa-regular fa-heart"></i>
//               <i className="fa-regular fa-user"></i>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };
// export default Navbar;
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/img/LogoCP1.png"; // Adjust this path accordingly

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <NavLink to="/">
              <img src={logo1} alt="logo" className="h-[55px] w-[100%]" />
            </NavLink>
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="lg:hidden text-2xl text-black"
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul
            className={`flex items-center font-bold sm:gap-5 hidden md:gap-2 lg:flex lg:col-span-2 pl-0 sm:pl-3 ${
              isDarkMode ? "text-white" : "text-black"
            } place-content-center`}
          >
            <li className="p-3">
              <NavLink
                to="/servicepage"
                className={({ isActive }) =>
                  isActive ? "text-amber-600" : "text-amber-500"
                }
              >
                Category
              </NavLink>
            </li>
            <li className="p-3">
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "text-amber-600" : "text-amber-500"
                }
              >
                FAQ
              </NavLink>
            </li>
            <li className="p-3">
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive ? "text-amber-600" : "text-amber-500"
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
          {/* Mobile menu */}
          <ul
            className={`fixed top-0 right-0 w-4/5 h-full flex flex-col items-center transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            } lg:hidden`}
          >
            <li className="p-5">
              <NavLink
                to="/servicepage"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-amber-900" : "text-amber-400"
                }
              >
                Category
              </NavLink>
            </li>
            <li className="p-5">
              <NavLink
                to="/faq"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-amber-900" : "text-amber-400"
                }
              >
                FAQ
              </NavLink>
            </li>
            <li className="p-5">
              <NavLink
                to="/aboutus"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-amber-900" : "text-amber-400"
                }
              >
                About Us
              </NavLink>
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
          <div className="col-span-2 flex items-center justify-end lg:col-span-1">
            <div className="flex gap-4 items-center">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-user"></i>

              {/* Dark Mode Toggle Button */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full border-2 border-gray-500"
              >
                {isDarkMode ? (
                  <i className="fa fa-sun text-yellow-400"></i>
                ) : (
                  <i className="fa fa-moon text-gray-900"></i>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
