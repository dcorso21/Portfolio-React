import React, { Component } from "react";
import "../styles/css/components/resume.css";

export default class Resume extends Component {
    render() {
        return (
            <section id="resume">
                <h1>Resume</h1>
                <div className="Engineering">
                    <div className="languages">
                        Python, JavaScript, TypeScript, C++, HTML, PUG, CSS,
                        Sass, SQL.
                    </div>
                    <div className="modules-packages">
                        React, Django, Plotly, Pandas, Matplotlib, Seaborn,
                        Numpy, Node.js, Postgres, VIM, Docker, AWS, Azure, Git/Github, gh-pages, Netlify, Jeykll.
                    </div>
                </div>
                <div className="Social"></div>
                <div className="Office"></div>
            </section>
        );
    }
}
