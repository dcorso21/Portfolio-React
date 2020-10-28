import React, { Component } from "react";
import "../styles/css/components/about.css";

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="lay">
                    <div className="info">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Iure deleniti odit eius nihil placeat, error totam
                        eos inventore iusto doloribus?
                    </div>
                    <div className="title">
                        <h1>About</h1>
                    </div>
                </div>
            </section>
        );
    }
}
