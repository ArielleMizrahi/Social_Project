import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ContextProvider from "./store/ContextProvider";

ReactDOM.render(
<ContextProvider>
    <App />
</ContextProvider>
, document.getElementById("root"));
