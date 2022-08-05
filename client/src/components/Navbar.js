import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Auth from "../utils/auth";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>J.I.M.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'><a href="#Calendar">Calendar</a></li>
        <li className='p-4'><a href="#Profile">Profile</a></li>
        <li className='p-4'><a href="#Landing">Landing</a></li>
        <li className='p-4'><a href="#Store">Store</a></li>
        <li className='p-4'><a href="#Contact">Contact</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>J.I.M</h1>
          <li className='p-4 border-b border-gray-600'>Calendar</li>
          <li className='p-4 border-b border-gray-600'>Profile</li>
          <li className='p-4 border-b border-gray-600'>Landing</li>
          <li className='p-4 border-b border-gray-600'>Store</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;