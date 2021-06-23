import React, { useState, useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

export default function Main() {
    const [visitorInfo, setVisitorInfo] = useState();

    useEffect(identifyVisitor, []);

    function identifyVisitor() {
        FingerprintJS.load({ token: "3STdb5rPK7oQx6Cd2ViT" })
            .then((fp) => fp.get())
            .then((result) => {
                console.log(result);
                setVisitorInfo(result);
            });
    }

    return (
        <div className="layout">
            <h1>dcorson.com</h1>

            <div>Hello, my name is David and this is my website.</div>
            {!visitorInfo ? null : (
                <pre>{JSON.stringify(visitorInfo, null, 4)}</pre>
            )}
        </div>
    );
}
