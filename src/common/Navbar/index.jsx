import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { logOut } from "../../api/intern";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [role, setRole] = useState(null);

  const roleValue = localStorage.getItem("role");
  const userName = localStorage.getItem("name") ?? "User";

  useEffect(() => {
    setRole(roleValue);
  }, [roleValue]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  // const userName = "John Doe"; // Replace with your actual user name

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const handleLogout = () => {
  //   // Implement your logout logic here
  // };

  const handleLogout = () => {
    logOut()
      .then((response) => {
        console.log("logged out resposnse", response);

        // Clear localStorage
        localStorage.clear(); // Clear everything from localStorage
        // Redirect or do any necessary action
        window.location = "/login"; // Redirect to login page
      })
      .catch((error) => {
        // Clear localStorage
        localStorage.clear(); // Clear everything from localStorage
        // Redirect or do any necessary action
        window.location = "/login"; // Redirect to login page
      });
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

        {role === "intern" || role === "null" || role === null ? (
          <div className="hidden lg:block mt-3 ">
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
              <Link to="/about-us" className="no-underline text-white">
                {" "}
                <li>About Us</li>{" "}
              </Link>

              {/* <Link to="/hire" className="no-underline text-white">
                {" "}
                <li>Hire You</li>{" "}
              </Link> */}
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

        {role === "null" ||
          (role === null && (
            <div className="hidden lg:block">
              <Link to="/login" className="no-underline text-white ">
                <ul className="flex space-x-4">
                  <li className="px-3 py-2 rounded  text-sm font-semibold bg-blue-600">
                    Login
                  </li>
                </ul>
              </Link>
            </div>
          ))}

        {role === "admin" ? (
          <div className="hidden lg:block">
            <Link className="text-white no-underline" to="/admin">
              <ul className="flex space-x-4">
                <li className="px-3 py-2 rounded bg-blue-600 text-sm font-semibold">
                  Admin Dashboard
                </li>
              </ul>
            </Link>
          </div>
        ) : (
          ""
        )}

        {/* //drop down  */}

        {roleValue === "intern" && userName !== "undefined" && (
          <div className="relative">
            <button
              className="flex items-center text-white rounded bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none py-1 font-thin  px-4  text-center  "
              type="button"
              onClick={toggleDropdown}
            >
              <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
              <span className="hidden lg:block">{userName}</span>
              <svg
                className="ml-2 w-4 h-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 z-10 mt-2 w-36 rounded-md shadow-lg bg-gray-700">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <button
                    className="block px-4 py-2 text-sm text-white "
                    onClick={() => handleLogout()}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 " />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
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
            to="/intern-find"
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
          <Link
            to="/review"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Review
          </Link>
          <Link
            to="/hire"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Hire
          </Link>

          <Link
            to="/login"
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </Link>

          {/* Add more menu items as needed */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
