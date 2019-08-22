import React, { Component } from 'react';
import './Layout.css';
import { Home } from './Home';
import { AboutUs } from './AboutUs';
import { OutsourcingServices} from './OutsourcingServices';

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
                <Home></Home>
                <AboutUs></AboutUs>
                
            </div>
        </div>
    );
  }
}
