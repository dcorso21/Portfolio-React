import React, { useEffect } from "react";
import "../styles/css/components/landing.css";
import resumePDF from "../assets/resume.pdf";
import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

function scrollTo(id) {
    let element = document.getElementById(id);
    if (!!element) {
        element.scrollIntoView();
    }
}

function openPDF() {
    window.open(resumePDF);
}

export default function Landing() {
    useEffect(() => {
        FingerprintJS.load({
            token: "P7vQXeD8G1VlmDAwwFir",
            endpoint: "/metrics",
        })
            .then((fp) => fp.get())
            .then((result) => console.log(result.visitorId));
    }, []);

    return (
        <section className="landing-page" id="home">
            <div className="lay">
                <div
                    className="left"
                    style={{ backgroundColor: "var(--a-purple)" }}
                >
                    <h1 className="my-name">David Corson</h1>
                    <div className="descriptors">
                        Software Engineering, Front End Design
                    </div>
                </div>
                <div className="right">
                    <ul className="options">
                        <li onClick={() => scrollTo("about")} id="about-btn">
                            <i className="far fa-address-card"></i>
                            <div className="label">About</div>
                        </li>
                        <li onClick={openPDF} id="resume-btn">
                            <i className="far fa-file-alt"></i>
                            <div className="label">Resume</div>
                        </li>
                        <li onClick={() => scrollTo("portfolio")} id="port-btn">
                            <i className="fas fa-project-diagram"></i>
                            <div className="label">Portfolio</div>
                        </li>
                        <li
                            onClick={() => scrollTo("contact")}
                            id="contact-btn"
                        >
                            <i className="far fa-envelope"></i>
                            <div className="label">Contact</div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
