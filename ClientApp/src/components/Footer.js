import React, { Component } from 'react';
import { Col, Grid, Row, MenuItem, SplitButton } from 'react-bootstrap';
import './Footer.css';

export class Footer extends Component {
    displayName = Footer.name


    render() {
        return (
            <div className="footerContainer">
                <Row>
                    <Col sm={6} md={4} >
                        <h3>CONTACT</h3>
                        <br></br>
                        <h4>IDEA TECHNOLOGY SOLUTION JOINT STOCK COMPANY</h4>
                        <br></br>
                        <h4>Address: 4th floor, Quang Trung Street</h4>
                        <h4>Hotline: 19001877</h4>
                        <h4>Email: hritsc@itsc-tech.vn</h4>
                    </Col>
                    <Col sm={6} md={4} >
                        <h3>SOCIAL NETWORKS</h3>
                        <br></br>
                        <h4>
                            <span>
                                <img src="resources/facebookIcon.png" width="50px" height="50px"></img>
                            </span>
                            ITSC Danang
                        </h4>
                        
                        <h4>
                            <span>
                                <img src="resources/youtubeIcon.png" width="60px" height="40px"></img>
                            </span>
                            ITSC Tech
                        </h4>
                    </Col>
                    <Col sm={6} md={4} >
                        <h3>WHAT MEDIA TELLS ABOUT US?</h3>
                        <br></br>

                    </Col>
                </Row>
            </div>
        );
    }
}
