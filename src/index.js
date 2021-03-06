import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/styles/variables.scss";
import "bulma/css/bulma.css";
import "./assets/styles/helpers.scss";
import "./assets/styles/global.scss";
//Components
import App from "./components/app";
//Redux
import configureStore from "./redux/configure-store";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
