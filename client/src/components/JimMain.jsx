import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "../utils/GlobalState";

import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "../pages/About/About";
import Calendar from "../pages/Calendar/Calendar";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/index";
import Register from "../pages/Login/Register";
import Profile from "..//components/Profile/Profile";
import Landing from "../pages/Landing/Landing";
import Store from "../pages/Store/Store";
import Invoice from "../pages/Invoice/Invoice";
import { AuthProvider } from "../pages/Login/context/AuthProvider";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function Maincontainer() {
  const [currentPage, setCurrentPage] = useState("Aboutme");

  const renderPage = () => {
    if (currentPage === "Profile") {
      return (
        <Profile
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
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
    if (currentPage === "Store") {
      return (
        <Store currentPage={currentPage} handlePageChange={handlePageChange} />
      );
    }
    if (currentPage === "Register") {
      return (
        <Register
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      );
    }
    if (currentPage === "Invoice") {
      return (
        <Invoice
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
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
    if (currentPage === "Login") {
      return (
        <Login currentPage={currentPage} handlePageChange={handlePageChange} />
      );
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <AuthProvider>
            <main className="bg-cover text-gray-400 bg-white-800 body-font">
              <Navbar
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
              {renderPage()}
              <Footer />
            </main>
          </AuthProvider>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}
