import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MyReducer from "./myReducer";

ReactDOM.render(
  <React.StrictMode>
    <MyReducer />
  </React.StrictMode>,
  document.getElementById("root")
);
