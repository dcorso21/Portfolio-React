import React, { Component } from "react";
import "../styles/css/components/portfolio.css";

export default class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <h1>Portfolio</h1>
                <div className="searchBar">
                    <input type="text" placeholder="Search" />
                    <i className="fas fa-search"></i>
                </div>
                <div className="tags">
                    <span className="tag">Python</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">CSS</span>
                    <span className="tag">Sass</span>
                    <span className="tag">Pug</span>
                    <span className="tag">React</span>
                </div>
            </section>
        );
    }
}
