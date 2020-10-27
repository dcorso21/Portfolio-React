import React, { Component } from "react";
import "../styles/css/components/landing.css";

function scrollTo(id) {
    let element = document.getElementById(id);
    if (!!element) {
        element.scrollIntoView();
    }
}

export default class Landing extends Component {
    render() {
        return (
            <section className="landing-page" id="home">
                <div className="lay">
                    <div className="left">
                        <h1 className="my-name">David Corson</h1>
                        <div className="descriptors">
                            Software Engineering, Front End Design
                        </div>
                    </div>
                    <div className="right">
                        <ul className="options">
                            <li onClick={() => scrollTo("portfolio")}>
                                <i className="fas fa-project-diagram"></i>
                                <div className="label">Portfolio</div>
                            </li>
                            <li onClick={() => scrollTo("resume")}>
                                <i className="far fa-file-alt"></i>
                                <div className="label">Resume</div>
                            </li>
                            <li onClick={() => scrollTo("about")}>
                                <i className="far fa-address-card"></i>
                                <div className="label">About</div>
                            </li>
                            <li onClick={() => scrollTo("contact")}>
                                <i className="far fa-envelope"></i>
                                <div className="label">Contact</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
