import React, { Component } from "react";
import "../styles/css/components/menu.css";

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            menuOpen: false,
        };
    }

    listSections() {
        let sections = ["home", "about", "portfolio", "contact"];
        return sections.map((s) => {
            return (
                <li
                    onClick={() => {
                        this.setState({ menuOpen: !this.state.menuOpen });
                    }}
                >
                    <a href={`#${s}`}>{s}</a>
                </li>
            );
        });
    }

    darkModeToggle() {
        let body = document.getElementById("root");
        body.classList.toggle("darkMode");
        // body.classList.toggle("dark");
    }

    renderMenu() {
        if (!this.state.menuOpen) return null;
        return (
            <div>
                <div
                    className="back-blur"
                    onClick={() => {
                        this.setState({ menuOpen: !this.state.menuOpen });
                    }}
                ></div>
                <ul className="menu">
                    {this.listSections()}
                    <div className="dark-btn" onClick={this.darkModeToggle}>
                        Dark Mode
                    </div>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderMenu()}
                <div
                    className="menu-btn"
                    onClick={() => {
                        this.setState({ menuOpen: !this.state.menuOpen });
                    }}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        );
    }
}
