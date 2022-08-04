import React from "react";

function Aboutme({ currentPage, handlePageChange }) {
  return (
    <section id="aboutme">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 border-4 border-green-500/50 rounded-3xl">
            <img
              className="object-cover object-center rounded-3xl"
              alt="LOGOOHERE"
              src="/images/jimlo.png"
            />
          </div>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            J.I.M.
            <br className="hidden lg:inline-block" />
            <p className="font-light text-xl">"Jazzy Invoice Maker"</p>
          </h1>
          <p className="mb-8 leading-relaxed text-black">
            Tired of the hassle involved when making an invoice? Let J.I.M. do
            the work for you!
          </p>
          <div className="flex justify-center ">
            <a
              href="#Register"
              onClick={() => handlePageChange("Register")}
              className={
                currentPage === "Register" ? "nav-link active" : "nav-link"
              }
            >
              <p className="mr-10 inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                SIGN ME UP!
              </p>
            </a>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 border-4 border-green-500/50 rounded-3xl">
          <img
            className="object-cover object-center rounded-3xl"
            alt="LOGOOHERE"
            src="/images/jimlo.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
