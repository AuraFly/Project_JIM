// import React from "react";
// import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

// export default class DemoApp extends React.Component {
//   render() {
//     return (
//       <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
//     );
//   }
// }

//REMOVE CONSOLE.LOG ENTRIES BEFORE PUBLISHING. THIS INFORMATION SHOULD NOT BE VISIBLE ON THE FRONT END. THIS IS ONLY FOR DEV PURPOSES
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { useState } from "react";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

function Calendar() {
  const responseGoogle = (response) => {
    console.log(response);
    const { code } = response;
    axios
      .post("/api/create-tokens", { code })
      .then((response) => {
        console.log(response.data);
        // setSignedIn(true);
      })
      .catch((error) => console.log(error.message));
  };

  const responseError = (error) => {
    console.log(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/create-event", {
        summary,
        description,
        location,
        startDateTime,
        endDateTime,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  };

  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div id="calendar" className="relative justify-items-center">
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">We announced a new product!</span>
                <span className="hidden md:inline">
                  Big news! We're excited to announce the launch of our site!
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap"></div>
      {/* {!signedIn ? ( */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 justify-items-center gap-4">
        <div>
          <h1 className="text-[#00df9a] sm:text-4xl text-3xl mb-1 font-medium title-font">
            JIM Calendar
          </h1>
          <GoogleLogin
            clientId="944796361588-30hshik247bbc3i2cs2h9tm1i52qihvj.apps.googleusercontent.com"
            buttonText="Sign in & Authorize Calendar"
            onSuccess={responseGoogle}
            onFailure={responseError}
            cookiePolicy={"single_host_origin"}
            responseType="code"
            accessType="offline"
            scope="openid email profile https://www.googleapis.com/auth/calendar"
            plugin_name="googleapis"
          />
        </div>
        {/* ) : ( */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/2 md:w-1/2 flex flex-col w-full "
        >
          <h2 className="text-[#00df9a] sm:text-4xl text-3xl mb-1 font-medium title-font">
            Create an Event
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="summary"
              className="leading-7 text-sm text-[#00df9a]"
            >
              Summary
            </label>
            <br />
            <input
              type="text"
              id="summary"
              className="w-full bg-gray-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="description"
              className="leading-7 text-sm text-[#00df9a]"
            >
              Description
            </label>
            <br />
            <textarea
              id="description"
              className="w-full bg-gray-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="location"
              className="leading-7 text-sm text-[#00df9a]"
            >
              Location
            </label>
            <br />
            <input
              type="text"
              id="location"
              className="w-full bg-gray-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="startDateTime"
              className="leading-7 text-sm text-[#00df9a]"
            >
              Start Date
            </label>
            <br />
            <input
              type="datetime-local"
              id="startDateTime"
              className="w-full bg-gray-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={startDateTime}
              onChange={(e) => setStartDateTime(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="endDateTime"
              className="leading-7 text-sm text-[#00df9a]"
            >
              End Date
            </label>
            <br />
            <input
              type="datetime-local"
              id="endDateTime"
              className="w-full bg-gray-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={endDateTime}
              onChange={(e) => setEndDateTime(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-[#00df9a] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit Event
          </button>
        </form>
        )
      </div>
    </div>
  );
}

export default Calendar;
