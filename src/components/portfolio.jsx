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

function openInNewTab(url) {
    console.log("hello");
    var win = window.open(url, "_blank");
    win.focus();
}

function makeProjects() {
    let projects = [
        {
            title: "Sorting Visualizer",
            link: "https://dcorson-sorting-visualizer.netlify.app/",
            imagelink: "src/imgs/portfolio-thumbnails/sorting-vis.jpg",
            description:
                "An app for showing the process of different sorting algorithms",
            tags: ["Javascript", "CSS", "HTML", "Anime.js"],
        },
        {
            title: "PathFinder",
            link: "https://dcorson-pathfinder.netlify.app/",
            imagelink: "src/imgs/portfolio-thumbnails/sorting-vis.jpg",
            description: "Interactive Path Finder",
            tags: ["Javascript", "CSS", "HTML"],
        },
        {
            title: "Sudoku Solver",
            link: "https://dcorson-sudoku-solver.netlify.app",
            imagelink: "src/imgs/portfolio-thumbnails/sorting-vis.jpg",
            description: "App which can solve sudokus instantly",
            tags: ["Javascript", "CSS", "HTML"],
        },
        {
            title: "Gmail Clone",
            link: "https://dcorson-gmail-clone.netlify.app",
            imagelink: "src/imgs/portfolio-thumbnails/sorting-vis.jpg",
            description: "A remake of the Gmail front end design",
            tags: ["Javascript", "CSS", "HTML"],
        },
        {
            title: "YouTube Clone",
            link: "https://dcorson-youtube-clone.netlify.app",
            imagelink: "src/imgs/portfolio-thumbnails/sorting-vis.jpg",
            description: "A remake of the YouTube front end design",
            tags: ["Javascript", "CSS", "HTML"],
        },
        {
            title: "Twitter Clone",
            link: "https://dcorson-twitter-clone.netlify.app",
            imagelink: "src/imgs/portfolio-thumbnails/sorting-vis.jpg",
            description: "A remake of the Twitter front end design",
            tags: ["Javascript", "CSS", "HTML"],
        },
    ];

    return projects.map((p, i) => {
        console.log({ background: `url(${p.imagelink})` });

        function addTags(tags) {
            return tags.map((t) => {
                return <span className="tag">{t}</span>;
            });
        }

        return (
            <div className="project" onClick={() => openInNewTab(p.link)}>
                <div className="title">{p.title}</div>
                <div className="description">{p.description}</div>
                <div className="tags">{addTags(p.tags)}</div>
            </div>
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
                            <input type="text" placeholder="Search for Keywords" />
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <div className="tags">{makeTags()}</div>
                </div>
                <div className="projects">
                    {makeProjects()}
                </div>
            </section>
        );
    }
}
