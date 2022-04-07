import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import MyReducer from "./MyEffect";

ReactDOM.render(
  <React.StrictMode>
    <MyReducer />
  </React.StrictMode>,
  document.getElementById("root")
);
