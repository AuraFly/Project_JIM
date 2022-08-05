import React from "react";

import "./index.css";
import { gsap } from "gsap";

gsap.config({
  nullTargetWarn: false,
});

let tl = gsap.timeline();

tl.from(".card", {
  stagger: 0.2,
  opacity: 0,
  x: -20,
});

tl.from(".avatar img", {
  stagger: 0.2,
  opacity: 0,
  y: 20,
});

tl.from(".profile-name", {
  stagger: 0.2,
  opacity: 0,
  y: 20,
});
tl.from(".profile-role", {
  stagger: 0.2,
  opacity: 0,
  y: 20,
});

tl.from(".social-buttons", {
  stagger: 0.2,
  opacity: 0,
});

export default function Contact() {
  return (
    <div>
      <section className="conCard text-gray-700 body-font relative">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 justify-items-center gap-4">
            <div className="container">
              <div className="card">
                <div className="card-header">
                  <div className="avatar">
                    <img
                      src="https://avatars.githubusercontent.com/u/99043049?v=4"
                      alt="user-image"
                    />
                  </div>
                  <div className="profile-name">
                    <h1>Jordan Covarrubias</h1>
                  </div>
                  <div className="profile-role">
                    NOC Director & Full-Stack Developer
                  </div>
                </div>

                <div className="card-footer">
                  <div className="social-buttons">
                    <button>
                      <a
                        href="https://github.com/AuraFly"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </button>

                    <button>
                      <a
                        href="https://www.linkedin.com/in/jcov/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 justify-items-center gap-4">
              <div className="container">
                <div className="card">
                  <div className="card-header">
                    <div className="avatar">
                      <img
                        src="https://avatars.githubusercontent.com/u/99770212?v=4"
                        alt="user-image"
                      />
                    </div>
                    <div className="profile-name">
                      <h1>Natalya Colburn</h1>
                    </div>
                    <div className="profile-role">
                      Jazzercize Instructor & Full-Stack Developer
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="social-buttons">
                      <button>
                        <i className="fab fa-github"></i>
                        <a href="#"></a>
                      </button>

                      <button>
                        <i className="fab fa-linkedin"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 justify-items-center gap-4">
              <div className="container">
                <div className="card">
                  <div className="card-header">
                    <div className="avatar">
                      <img
                        src="https://avatars.githubusercontent.com/u/54813999?v=4"
                        alt="user-image"
                      />
                    </div>
                    <div className="profile-name">
                      <h1>Jesus Rodriguez</h1>
                    </div>
                    <div className="profile-role">
                      Data Engineer & Full-Stack Developer
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="social-buttons">
                      <button>
                        <i className="fab fa-github"></i>
                        <a href="#"></a>
                      </button>

                      <button>
                        <i className="fab fa-linkedin"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 justify-items-center gap-4">
              <div className="container">
                <div className="card">
                  <div className="card-header">
                    <div className="avatar">
                      <img
                        src="https://avatars.githubusercontent.com/u/99232675?v=4"
                        alt="user-image"
                      />
                    </div>
                    <div className="profile-name">
                      <h1>David Irving</h1>
                    </div>
                    <div className="profile-role">
                      Software Project Manager & Full-Stack Developer
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="social-buttons">
                      <button>
                        <i className="fab fa-github"></i>
                        <a href="#"></a>
                      </button>

                      <button>
                        <i className="fab fa-linkedin"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray">
              Send us a message!
            </h2>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">DUBCTeam2@gmail.com</a>
                <p className="leading-normal my-5">
                  1234 MadeUpOffice Ln.
                  <br />
                  The Internet, CO 12345
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
