import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <form>
                    <input type="text" placeholder="subject"/>
                    <input type="text" placeholder="email"/>
                    <input type="text-box" placeholder="body"/>
                </form>
            </section>
        )
    }
}
