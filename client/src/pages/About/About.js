import React from 'react';
// import Typed from 'react-typed';

const Aboutme = ({ currentPage, handlePageChange }) => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Jazzersize Invoice Maker
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Tired of the hassle involved when making an invoice?
          </p>
        </div>
        {/* <Typed
          className='md:text-2xl text-xl font-bold text-gray-500'
            strings={['Let J.I.M. do the work for you!']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'><a href="#Login" onClick={() => handlePageChange("Login")}
          className={
            currentPage === "#Login" ? "nav-link active" : "nav-link"
          }>Log in or Sign up</a></button>
      </div>
    </div>
  );
};

export default Aboutme;