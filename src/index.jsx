import React from "react";
import ReactDOM from "react-dom";
import "./app/assets/css/index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
// import HttpsRedirect from "react-https-redirect";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
