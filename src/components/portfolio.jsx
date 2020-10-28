import React, { Component } from "react";
import "../styles/css/components/portfolio.css";

function makeTags() {
    let tags = [
            "Python",
            "Javascript",
            "Sass",
            "HTML",
            "pug",
            "Pandas",
            "React",
        ],
        colors = ["purple", "blue", "green", "yellow", "pink"];

    return tags.map((t, i) => {
        if (i !== 0) {
            colors.push(colors.shift());
        }
        return (
            <span
                className="tag"
                style={{ backgroundColor: `var(--a-${colors[0]})` }}
            >
                {t}
            </span>
        );
    });
}

// function renderProjects() {}

export default class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="row-1">
                    <div className="topbar">
                        <h1>Portfolio</h1>
                        <div className="searchBar">
                            <input type="text" placeholder="Search" />
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <div className="tags">{makeTags()}</div>
                </div>
                <div className="projects">
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                </div>
            </section>
        );
    }
}
