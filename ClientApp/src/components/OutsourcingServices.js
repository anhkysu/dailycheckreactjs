import React, { Component } from 'react';
import { Col, Grid, Row, MenuItem, SplitButton } from 'react-bootstrap';
import './OutsourcingServices.css'

export class OutsourcingServices extends Component {
    displayName = OutsourcingServices.name

    render() {
        return (
            <div>
                <div className="outsourcingServiceDetail1">
                    <Grid fluid>
                        <Row className="headerOutsourcing">
                            <h1>CAD/CAM/CAE OUTSOURCING SERVICES</h1>
                        </Row>
                        <Row className="overviewOutsourcingServices">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </Row>
                        <Row className="ourStaffDescription">
                            <Col sm={6} md={6} >
                                <div className="ourStaffDescriptionText">
                                    <h1>OUR STAFFS</h1>
                                    <hr></hr>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                                </div>
                            </Col>

                            < Col sm={6} md={6} >
                                <div className="ourStaffDescriptionImages">
                                    <img src="resources/teamworking.jpg" width="90%" height="Calc(width*497/738)"></img>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div className="outsourcingServiceDetail2">
                    <Grid fluid>
                        <Row className="whatCanWeDoForYou">

                            < Col sm={6} md={6} >
                                <div>
                                    <img src="resources/mechanical.jpg" width="90%" height="Calc(width*704/1056)"></img>
                                </div>
                            </Col>

                            <Col sm={6} md={6} >
                                <div className="whatCanWeDoForYouText">
                                    <h1>WHAT CAN WE DO FOR YOU?</h1>
                                    <hr></hr>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </p>
                                    <br></br>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </p>
                                </div>
                            </Col>

                        </Row>
                    </Grid>
                </div>

                <div className="outsourcingServiceDetail3">
                    <Grid fluid>
                        <Row className="cadCamCae">
                            < Col sm={6} md={4} >
                                <h1>CAD</h1>
                                <hr></hr>
                                <div>
                                    <img src="resources/mechanical.jpg" width="90%" height="Calc(width*704/1056)"></img>
                                </div>
                            </Col>

                            <Col sm={6} md={4} >
                                <h1>CAM</h1>
                                <hr></hr>
                                <div>
                                    <img src="resources/mechanical.jpg" width="90%" height="Calc(width*704/1056)"></img>
                                </div>
                            </Col>

                            <Col sm={6} md={4} >
                                <h1>CAE</h1>
                                <hr></hr>
                                <div>
                                    <img src="resources/mechanical.jpg" width="90%" height="Calc(width*704/1056)"></img>
                                </div>
                            </Col>
                        </Row>
                        <Row className="overviewOutsourcingServices">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </Row>
                    </Grid>
                </div>

                <div className="outsourcingServiceDetail4">
                    <Row>
                        <h1>OUR CUSTOMERS</h1>
                    </Row>
                    <Row>
                        <img src="resources/ourcustomers.png" width="90%" height="Calc(width*704/1056)"></img>
                    </Row>
                </div>
            </div>
        );
    }
}
