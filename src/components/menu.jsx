import React, { Component } from "react";
import "../styles/css/components/menu.css";

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            menuOpen: false,
        };
    }

    darkModeToggle() {
        let body = document.getElementById('root')
        body.classList.toggle('darkMode')
    }

    renderMenu() {
        if (!this.state.menuOpen) return null;
        return (
            <div className="menu">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <div className="dark-btn" onClick={this.darkModeToggle}>Dark Mode</div>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <>
                {this.renderMenu()}
                <div
                    className="menu-btn"
                    onClick={() => {
                        this.setState({menuOpen:!this.state.menuOpen});
                    }}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </>
        );
    }
}
