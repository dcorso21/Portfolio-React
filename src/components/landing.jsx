import React, { Component } from "react";
import "../styles/css/components/landing.css";

export default class Landing extends Component {
    render() {
        return (
            <section className="landing-page">
                <div className="lay">
                    <div className="left">
                        <h1 className="my-name">David Corson</h1>
                        <div className="descriptors">
                            Software Engineering, Front End Design
                        </div>
                    </div>
                    <div className="right">
                        <ul className="options">
                            <li>
                                <i class="fas fa-project-diagram"></i>
                                <div className="label">Portfolio</div>
                            </li>
                            <li>
                                <i class="far fa-file-alt"></i>
                                <div className="label">Resume</div>
                            </li>
                            <li>
                                <i class="far fa-address-card"></i>
                                <div className="label">About</div>
                            </li>
                            <li>
                                <i class="far fa-envelope"></i>
                                <div className="label">Contact</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
