import React, { Component } from "react";
import "./styles.css";
import LoginSignup from "../Buttons/LoginBtn/LoginSignup";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = {
            active: false,
        };
    }
    addActiveClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">

                <a className="navbar-brand" href="#top"> <b>910 a global emergency</b> </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a id="home" className={this.state.active ? 'active': null} onClick={this.addActiveClass} href="#top">home</a>
                        <a id="learn" className={this.state.active ? 'active': null} onClick={this.addActiveClass} href="#learn-container">learn more</a>
                        <a id="events" className={this.state.active ? 'active': null} onClick={this.addActiveClass} href="#map">find events/centers</a>
                        <a id="test" className={this.state.active ? 'active': null} onClick={this.addActiveClass} href="#game-container">knowledge check</a>
                        <LoginSignup />
                    </div>
                </div>
            
            </nav>
        )
    }
}

export default Nav;