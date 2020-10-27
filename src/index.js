import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/main.css";
import Landing from "./components/landing";
import Portfolio from "./components/portfolio";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <div className="layout">
            <Landing />
            <Portfolio />
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
