import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import Provider from "./context/Provider";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
