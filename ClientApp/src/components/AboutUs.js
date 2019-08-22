import React, { Component } from 'react';
import { Col, Grid, Row, MenuItem, SplitButton } from 'react-bootstrap';
import './AboutUs.css';

export class AboutUs extends Component {
    displayName = AboutUs.name

    render() {
        return (
            <div>
                <div className="aboutUs1">
                    <Grid fluid>
                        <Row className="header">
                            <h1>About Us</h1>
                        </Row>
                        <Row className="overview">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        </Row>
                        <Row className="yearsOfDevelopment">
                            < Col sm={6} md={3} >
                                <div className="developmentYear">
                                    <h1> 08/1926 </h1>
                                    <hr></hr>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                                </div>
                            </Col>

                            < Col sm={6} md={3} >
                                <div className="developmentYear">
                                    <h1> 08/1926 </h1>
                                    <hr></hr>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                                </div>
                            </Col>

                            < Col sm={6} md={3} >
                                <div className="developmentYear">
                                    <h1> 08/1926 </h1>
                                    <hr></hr>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                                </div>
                            </Col>

                            < Col sm={6} md={3} >
                                <div className="developmentYear">
                                    <h1> 08/1926 </h1>
                                    <hr></hr>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div className="aboutUs2">
                    <Grid fluid>
                        <Row>
                            <Col sm={6} md={6}>
                                <img src="resources/companyBranches.png" width="600px" height="800px"></img>
                            </Col>
                            <Col className="companyBranches" sm={6} md={6}>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                                <br></br>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                                
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}
