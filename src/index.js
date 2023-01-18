import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./index.css";

axios.interceptors.request.use((request) => {
  console.log(request.url);
  return request;
});

axios.interceptors.response.use((response) => {
  return response.data;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
