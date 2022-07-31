import React from "react";
import ItemsContainer from "../ItemsContainer";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
           md:w-2/5"
        >
          <span className="text-green-400">Let J.I.M. </span> handle it!
        </h1>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
        text-center pt-2 text-gray-400 text-sm pb-8 bg-green-900"
      >
        <span></span>
        <span>Created by DU BOOTCAMP Group 2 (BEST GROUP) </span>
      </div>
    </footer>
  );
};

export default Footer;
