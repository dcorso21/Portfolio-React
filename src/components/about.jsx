import React, { Component } from "react";
import "../styles/css/components/about.css";

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="lay">
                    <div className="title">
                        <h1>About Me</h1>
                        {/* <div className="email">david.l.corson@gmail.com</div> */}
                    </div>
                    <div className="info">
                        <p>
                            My name is David Corson and am trying to start a new
                            career in Software Engineering. Until now I
                            have followed a career in Music Production and Sound
                            Engineering and have been lucky enough to work in
                            world class studios in Chicago and Orlando, later
                            becoming a teacher for Full Sail University. In late
                            2019, after having done several pet projects with
                            Python, I took a chance and decided to change career
                            paths towards software engineering. For quite some
                            time now I have been creating a complete algorithmic
                            trading bot and backtester. Thank you for visiting
                            my site!
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
