import React, { Component } from 'react'
import "../styles/css/components/menu.css";

export default class Menu extends Component {
    
    render() {
        return (
            <> 
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
                </ul>
            </div>
            <div className="menu-btn">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            </>
        )
    }
}
