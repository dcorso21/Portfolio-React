import React, { useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

export default function Main() {

    useEffect(identifyVisitor, []);

    function identifyVisitor() {


        FingerprintJS.load({ token: 'NOmBTwzxJRv8aJHdlhVZ', endpoint: 'https://metrics.dcorson.com' })
            .then((fp) => fp.get())
            .then((result) => console.log(result));

    }

    return (
        <div className="layout">
            <h1>Production Website FPJS Example</h1>
            <div>An example site for using FPJS with a subdomain</div>
        </div>
    );
}