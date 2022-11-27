import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ReviewsProvider } from "./components/context/ReviewsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReviewsProvider>
    <App />
  </ReviewsProvider>
);
