import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Auth from "../utils/auth";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = ({ currentPage, handlePageChange }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  if (Auth.loggedIn()) {
    return (
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          <a
            href="#About"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            J.I.M.
          </a>
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">
            <a
              href="#Calendar"
              onClick={() => handlePageChange("Calendar")}
              className={
                currentPage === "Calendar" ? "nav-link active" : "nav-link"
              }
            >
              Calendar
            </a>
          </li>
          <li className="p-4">
            <a
              href="#Profile"
              onClick={() => handlePageChange("Profile")}
              className={
                currentPage === "Profile" ? "nav-link active" : "nav-link"
              }
            >
              Profile
            </a>
          </li>
          <li className="p-4">
            <a
              href="#Landing"
              onClick={() => handlePageChange("Landing")}
              className={
                currentPage === "Landing" ? "nav-link active" : "nav-link"
              }
            >
              Reminders
            </a>
          </li>
          <li className="p-4">
            <a
              href="#Invoices"
              onClick={() => handlePageChange("Invoice")}
              className={
                currentPage === "Invoice" ? "nav-link active" : "nav-link"
              }
            >
              Invoices
            </a>
          </li>
          <li className="p-4">
            <a
              href="#Store"
              onClick={() => handlePageChange("Store")}
              className={
                currentPage === "Store" ? "nav-link active" : "nav-link"
              }
            >
              Store
            </a>
          </li>
          <li className="p-4">
            <a
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="p-4">
            <a
              href="/"
              onClick={() => Auth.logout()}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              Logout
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            J.I.M
          </h1>
          <li className="p-4 border-b border-gray-600">
            <a
              href="#Calendar"
              onClick={() => handlePageChange("Calendar")}
              className={
                currentPage === "Calendar" ? "nav-link active" : "nav-link"
              }
            >
              Calendar
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a
              href="#Profile"
              onClick={() => handlePageChange("Profile")}
              className={
                currentPage === "Profile" ? "nav-link active" : "nav-link"
              }
            >
              Profile
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a
              href="#Landing"
              onClick={() => handlePageChange("Landing")}
              className={
                currentPage === "Landing" ? "nav-link active" : "nav-link"
              }
            >
              Reminders
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a
              href="#Invoice"
              onClick={() => handlePageChange("Invoice")}
              className={
                currentPage === "Invoice" ? "nav-link active" : "nav-link"
              }
            >
              Invoices
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a
              href="#Store"
              onClick={() => handlePageChange("Store")}
              className={
                currentPage === "Store" ? "nav-link active" : "nav-link"
              }
            >
              Storer
            </a>
          </li>
          <li className="p-4">
            <a
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="p-4">
            <a
              href="#Logout"
              onClick={() => Auth.logout()}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          <a
            href="#About"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            J.I.M.
          </a>
        </h1>
      </div>
    );
  }
};

export default Navbar;
