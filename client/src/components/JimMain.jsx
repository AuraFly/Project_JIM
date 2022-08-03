import React, { useState } from "react";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Contact from "./pages/Contact";
// import Login from "./pages/Login/index"; //commented out the js files referenced could be deleted, they are empty
// import Register from "./pages/Login/Register"; commented out 8/2 by N
import Landing from "./pages/Landing";
import { AuthProvider } from "./pages/Login/context/AuthProvider";
import Profile from "./Form";

import LandingPage from ".pages/LandingPage/LandingPage";
import LoginPage from ".pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

export default function Maincontainer() {
  const [currentPage, setCurrentPage] = useState("Aboutme");

  // This method is checking to see what the value of `currentPage` is.
  // Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Profile") {
      return (
        <Profile currentPage={currentPage} handlePageChange={handlePageChange} />
      );
    }

    if (currentPage === "About") {
      return (
        <About currentPage={currentPage} handlePageChange={handlePageChange} />
      );
    }
    if (currentPage === "Calendar") {
      return (
        <Calendar
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      );
    }
    if (currentPage === "Landing") {
      return (
        <Landing
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      );

    }
      if (currentPage === "LandingPage") {
        return (
          <LandingPage
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        );  
    }
    if (currentPage === "RegisterPage") {
      return (
        <AuthProvider>
          <RegisterPage
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </AuthProvider>
      );
    }
    if (currentPage === "Contact") {
      return (
        <Contact
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      );
    }
    if (currentPage === "LoginPage") {
      return (
        <AuthProvider>
          <LoginPage
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </AuthProvider>
      );
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main className="bg-cover text-gray-400 bg-white-800 body-font">
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </main>
  );
}


