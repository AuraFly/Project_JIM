import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import JimMain from "./components/JimMain";
import reportWebVitals from "./reportWebVitals";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JimMain />
  </React.StrictMode>
);

reportWebVitals();
