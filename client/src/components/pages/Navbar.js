import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <header className="bg-green-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
          <a
            href="#About"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            J.I.M. App
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
            href="#Calendar"
            onClick={() => handlePageChange("Calendar")}
            className={
              currentPage === "Calendar" ? "nav-link active" : "nav-link"
            }
          >
            <p className="mr-5 hover:text-white">Calendar</p>
          </a>
          <a
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            <p className="mr-5 hover:text-white">Contact Us</p>
          </a>
          <a
            href="#Login"
            onClick={() => handlePageChange("Login")}
            className={currentPage === "Login" ? "nav-link active" : "nav-link"}
          >
            <p className="mr-5 hover:text-white">Login</p>
          </a>
        </nav>

        <div class="w-full block flex-grow  lg:flex justify-end lg:items-center lg:w-auto">
          <div class="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-white hover:border-indigo-300 hover:bg-black-500 mt-4 lg:mt-0">
            <a href="https://www.linkedin.com/in/jcov/">
              <img
                src="./IMGGOESHERE.webp"
                alt="ICONHERE"
                className="h-10"
                title="ICONHERE"
              />
            </a>
          </div>
          <div class="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-white hover:border-indigo-300 hover:bg-black-500 mt-4 lg:mt-0">
            <a href="https://github.com/AuraFly">
              <img
                src="./IMG2GOESHERE.webp"
                alt="ICON2HERE"
                className="h-10"
                title="ICON2"
              />
            </a>
          </div>
          <div class="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-white hover:border-indigo-300 hover:bg-black-500 mt-4 lg:mt-0">
            <a href="mailto:AuraFlyDev@gmail.com">
              <img
                src="./IMG3GOESHERE.webp"
                alt="ICON3HERE"
                className="h-10"
                title="ICON3"
              />
            </a>
          </div>
          <div class="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-white hover:border-indigo-300 hover:bg-black-500 mt-4 lg:mt-0">
            <a href="https://drive.google.com/file/d/1Q1wwNwJCbJkle2L6GyKnZGr8cA6P3R-t/view?usp=sharing">
              <img
                src="./IMG4GOESHERE.webp"
                alt="ICON4HERE"
                className="h-10"
                title="ICON4"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;