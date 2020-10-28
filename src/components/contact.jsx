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
                    <div className="info">
                        <div className="email">david.l.corson@gmail.com</div>
                        <div className="address">Ocala, FL</div>
                        <div className="phone">(937) 414-5106</div>
                    </div>
                    <form action="submit">
                        <label >Name</label>
                        <input type="text"/> <br/>
                        <label >Email</label>
                        <input type="text"/> <br/>
                        <label >Message</label>
                        <input type="text"/>
                    </form>
                </div>
            </section>
        );
    }
}
