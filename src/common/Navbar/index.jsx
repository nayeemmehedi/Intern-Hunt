import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [role, setRole] = useState("company");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black ">
      <div className="h-20  flex items-center   justify-between w-[95%] mx-auto text-white ">
        <div className=" text-xl lg:text-2xl flex justify-center sm:justify-start  lg:font-extrabold">
          <Link to="/" className="no-underline">
            {" "}
            <span className="text-blue-700">
              <FontAwesomeIcon icon={faFeatherAlt} />
              INTERN{" "}
            </span>{" "}
            <span className="text-white font-medium"> HUNT</span>
          </Link>
        </div>

        {role === "intern" ? (
          <div className="hidden lg:block mt-3">
            <ul className="flex space-x-12 font-mono">
              <Link to="/intern-find" className="no-underline text-white">
                <li className="hidden md:block ">Intern</li>
              </Link>
              <Link to="/applied-company" className="no-underline text-white">
                {" "}
                <li>Card</li>{" "}
              </Link>
              <Link to="/review" className="no-underline text-white">
                {" "}
                <li>Review</li>{" "}
              </Link>
              <Link to="/hire" className="no-underline text-white">
                {" "}
                <li>Hire You</li>{" "}
              </Link>
            </ul>
          </div>
        ) : (
          ""
        )}

        {role === "company" ? (
          <div className="hidden lg:block">
            <Link className="text-white no-underline" to="/company">
              {" "}
              <ul className="flex space-x-4">
                <li className="px-3 py-2 rounded bg-blue-600 text-sm font-semibold">
                  Company Dashboard
                </li>
              </ul>
            </Link>
          </div>
        ) : (
          ""
        )}

        {role == "intern" ? (
          <div className="hidden lg:block">
            <ul className="flex space-x-4">
              <li className="px-3 py-2 rounded bg-blue-600 text-sm font-semibold">
                Login
              </li>
              <li className="px-3 py-2 rounded bg-blue-600 text-sm font-semibold">
                Admin Login
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {role === "admin" ? (
          <div className="hidden lg:block">
            <ul className="flex space-x-4">
              <li className="px-3 py-2 rounded bg-blue-600 text-sm font-semibold">
                Admin Dashboard
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {/* Mobile menu toggle button */}
        <div className="lg:hidden flex justify-center sm:justify-end  ">
          <button
            type="button"
            className="inline-flex items-center  p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none "
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="intern"
            href="#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Intern
          </Link>
          <Link
            to="/applied-company"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Card
          </Link>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Review
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Hire
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Admin Login
          </a>
          {/* Add more menu items as needed */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
