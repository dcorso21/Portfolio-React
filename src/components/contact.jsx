import React, { Component } from "react";
import "../styles/css/components/contact.css";

export default class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="topbar">
                    <h1>Contact</h1>
                </div>
                <div className="main">
                    {/* <div className="info">
                        <div className="email">
                            {" "}
                            <span className="fieldname">EMAIL:&nbsp;</span>{" "}
                            david.l.corson@gmail.com
                        </div>
                        <div className="phone">
                            <span className="fieldname">PHONE:&nbsp;</span>(937)
                            414-5106
                        </div>
                        <div className="address">
                            {" "}
                            <span className="fieldname">
                                ADDRESS:&nbsp;
                            </span>{" "}
                            Ocala, FL
                        </div>
                    </div> */}
                    <form name="contact" method="POST" data-netlify="true">
                        <div className="info">
                            <p>
                            <span>(937) 414 - 5106</span>
                            <span>david.l.corson@gmail.com</span>
                            <span>Ocala, FL</span>
                            </p>
                        </div>
                        <div className="nameEntry">
                            <label>NAME</label>
                            <input type="text" name="name" />
                        </div>
                        <div className="emailEntry">
                            <label>EMAIL</label>
                            <input type="email" name="email" />
                        </div>
                        <div className="messageEntry">
                            <label>MESSAGE</label>
                            <textarea name="message" />
                        </div>
                        <button type="submit">SEND</button>
                    </form>
                </div>
            </section>
        );
    }
}
