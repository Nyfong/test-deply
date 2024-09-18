import React, { useState } from "react";
import { HiOutlineMapPin } from "react-icons/hi2";

export function SearchLocation() {
  return (
    <div className=" w-[280px] md:w-[300px]">
      <form class="mx-auto grid justify-center p-10 max-w-2xl">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-black border border-amber-300 rounded-lg bg-amber-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-amber-700 dark:border-amber-600 dark:placeholder-amber-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
            placeholder="Your Location"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-8 pointer-events-none">
            <HiOutlineMapPin className="text-amber-500 dark:text-amber-400 w-5 h-5" />
          </div>
        </div>
      </form>
    </div>
  );
}

export function SearchBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center items-center py-8 w-[300px] md:w-[500px] ">
      <form className="max-w-lg w-full">
        <div className="flex relative">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <button
            id="dropdown-button"
            onClick={toggleDropdown}
            className="flex-shrink-0 z-10 inline-flex items-center p-1 md:p-4 text-sm font-medium text-center text-white bg-amber-400 border border-gray-300 rounded-l-lg hover:bg-amber-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            All Categories{" "}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div
              id="dropdown"
              className="absolute top-full left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow  w-[140px] dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Restaurants
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Night Bars
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Beauty Salons
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Cafe Shops
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Auto Repairs
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dry Cleanings
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Car Cleaning
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Shoppings
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Gyms
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Hotels
                  </button>
                </li>
              </ul>
            </div>
          )}
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-4 w-full z-20 text-sm text-black bg-amber-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-amber-500"
              placeholder="Search Categories, Places, Services..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-black bg-amber-400 rounded-r-lg hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export function TagComponent() {
  return (
    <div className="flex justify-center mx-auto">
      <span
        id="badge-dismiss-yellow"
        class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300"
      >
        Hair Salon
        <button
          type="button"
          class="inline-flex items-center p-1 ms-2 text-sm text-yellow-400 bg-transparent rounded-sm hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300"
          data-dismiss-target="#badge-dismiss-yellow"
          aria-label="Remove"
        >
          <svg
            class="w-2 h-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Remove badge</span>
        </button>
      </span>
    </div>
  );
}
