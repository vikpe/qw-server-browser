import React from "react";
import ReactDOM from "react-dom/client";
import store from "./app/store.js";
import { Provider } from "react-redux";
import App from "./app/App.jsx";
import "../styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);