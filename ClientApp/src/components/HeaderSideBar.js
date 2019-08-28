import React, { Component } from 'react';
import './HeaderSideBar.css'

export class HeaderSideBar extends Component {
    displayName = HeaderSideBar.name

    render() {
        return (
            <div id="mySideBar" className="headerSideBar" style={{ display: "block" }}>
                <div className="closeButton" onClick={() => { document.getElementById("mySideBar").style.height = 0; }}>
                    <button>❌</button>
                </div>
                <a href="#about">Home</a>
                <a href="#services">About</a>
                <a href="#clients">CAD/CAM/CAE</a>
                <a href="#">R&D</a>
                <a href="#">Education</a>
                <a href="#">Opportunities</a>
                <a href="#">News</a>
                <a href="#">Sign in</a>
                <a href="#">Register</a>
                <a href="#">Language</a>
            </div>
        );
    }
}
