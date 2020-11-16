import React, { Component } from "react";
import "../styles/css/components/portfolio.css";

function openInNewTab(url) {
    console.log("hello");
    var win = window.open(url, "_blank");
    win.focus();
}

function makeProjects() {
    let projects = [
        {
            title: "Algorithmic Trading Backtester",
            link: "https://dcorso21.github.io/Algo-Trading-Backtester/",
            imagelink: require("../imgs/portfolio-thumbnails/algo.png").default,
            description:
                "Strategy Tester for algorithmic trading with second by second trades",
            tags: ["Python", "Pandas", "Plotly"],
        },
        {
            title: "Sorting Visualizer",
            link: "https://dcorson-sorting-visualizer.netlify.app/",
            imagelink: require("../imgs/portfolio-thumbnails/sorting-vis.jpg").default,
            description:
                "An app for showing the process of different sorting algorithms",
            tags: ["Javascript", "CSS", "HTML", "Anime.js"],
        },
        {
            title: "PathFinder",
            link: "https://dcorso21.github.io/Versatile-Pathfinder/index.html",
            imagelink: require("../imgs/portfolio-thumbnails/pathfinder.png").default,
            description: "Interactive Path Finder",
            tags: ["Javascript", "CSS", "HTML"],
        },
        {
            title: "React Movie Viewer",
            link: "https://dcorson-movie-viewer.netlify.app/",
            imagelink: require("../imgs/portfolio-thumbnails/movies.png").default,
            description:
                "A simple app that takes advantage of the rapidMovieAPI to find info on popular movies.",
            tags: ["REST API", "React"],
        },
        {
            title: "Sudoku Solver",
            link: "https://dcorso21.github.io/Sudoku-Solver/",
            imagelink: require("../imgs/portfolio-thumbnails/sudoku.png").default,
            description: "App which can solve sudokus instantly",
            tags: ["Javascript", "CSS", "HTML"],
        },
        {
            title: "Gmail Clone",
            link: "https://dcorson-gmail-clone.netlify.app",
            imagelink: require("../imgs/portfolio-thumbnails/gmail.png").default,
            description: "A remake of the Gmail front end design",
            tags: ["Javascript", "CSS", "HTML"],
        },
        {
            title: "YouTube Clone",
            link: "https://dcorso21.github.io/youtube-clone/",
            imagelink: require("../imgs/portfolio-thumbnails/youtube.png").default,
            description: "A remake of the YouTube front end design",
            tags: ["Javascript", "CSS", "HTML"],
        },
        {
            title: "Twitter Clone",
            link: "https://dcorso21.github.io/Twitter-Clone/",
            imagelink: require("../imgs/portfolio-thumbnails/twitter.png").default,
            description: "A remake of the Twitter front end design",
            tags: ["Javascript", "CSS", "HTML"],
        },
        {
            title: "MySQL Dual Database Library Management",
            link: "https://github.com/dcorso21/SQLite3_Library",
            imagelink: require("../imgs/portfolio-thumbnails/library.jpg").default,
            description:
                "Framework for crossreferencing two sql databases in python",
            tags: ["Python", "SQL"],
        },
        {
            title: "Simple Accounting in C++",
            link: "https://github.com/dcorso21/Accounting-in-CPP",
            imagelink: require("../imgs/portfolio-thumbnails/account.jpg").default,
            description:
                "For a first project, I make a console application for adding and deleting entries of a csv database in C++",
            tags: ["C++"],
        },
    ];

    return projects.map((p, i) => {
        // console.log({ background: `url(${p.imagelink})` });
        console.log(typeof p.imagelink);
        let style = !!p.imagelink
            ? {
                //   background: `url(${require("../imgs/portfolio-thumbnails/algo.png").default}`,
                  background: `url(${p.imagelink})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
              }
            : {};

        function addTags(tags) {
            return tags.map((t) => {
                return <span className="tag">{t}</span>;
            });
        }

        return (
            <div
            style={style}
            className="project"
            onClick={() => openInNewTab(p.link)}
            >
                <div className="blurCard"></div>
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
                        {/* <div className="searchBar">
                            <input
                                type="text"
                                placeholder="Search for Keywords"
                            />
                            <i className="fas fa-search"></i>
                        </div> */}
                    </div>
                    {/* <div className="tags">{makeTags()}</div> */}
                </div>
                <div className="projects">{makeProjects()}</div>
            </section>
        );
    }
}
