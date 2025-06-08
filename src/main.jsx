import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client
import App from "./App.jsx";

// Create a root for your app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);