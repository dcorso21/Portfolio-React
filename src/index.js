import React from "react";
import ReactDOM from "react-dom";

import Main from "./pages/main";

ReactDOM.render(
    <React.StrictMode>
        <div className="layout">
            <Main />
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);
