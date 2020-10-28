import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./styles/css/main.css";
import Landing from "./components/landing";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Resume from "./components/resume";
import Contact from "./components/contact";

ReactDOM.render(
    <React.StrictMode>
        <div className="layout">
            <Landing />
            <About />
            <Resume />
            <Portfolio />
            <Contact />
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
