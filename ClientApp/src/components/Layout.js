import React, { Component } from 'react';
import { Col, Grid, Row, MenuItem, SplitButton } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import './Layout.css'

export class Layout extends Component {
    displayName = Layout.name

   

  render() {
    return (
        <div>
            <div className="pageHeader">
                <h3 className="companyLogo">
                    <span><img src="resources/logo.png" alt="Smiley face" width="62" height="62"></img></span>IDEA TECHNOLOGY SOLUTION JSC
                </h3>

                <nav className="navigationBar">
                    <ul>
                        <li><button>Register</button></li>
                        <li><button>Sign in</button></li>
                        <li><a href="#opportunities">OPPORTUNITIES</a></li>
                        <li><a href="#news">NEWS</a></li>
                        <li><a href="#education">EDUCATION</a></li>
                        <li><a href="#rd">R&D</a></li>
                        <li><a href="#cadcamcae">CAD/CAM/CAE</a></li>
                        <li><a href="#aboutus">ABOUT US</a></li>
                        <li><a href="#home">HOME</a></li>
                    </ul>
                </nav>
            </div>
            <div className="container">
                <div className="home">
                    <div className="col1">
                        <h1>WE DELIVER</h1>
                    </div>
                    <div className="col2">
                        <p>asdasdasdasdasd</p>
                    </div>
                </div>
                <div className="aboutUs">
                    asdasdasdasd
                </div>
            </div>
        </div>
    );
  }
}
