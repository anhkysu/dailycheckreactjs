import React, { Component } from 'react';
import { Col, Grid, Row, MenuItem, SplitButton } from 'react-bootstrap';
import './ResearchAndDevelopment.css';

export class ResearchAndDevelopment extends Component {
    displayName = ResearchAndDevelopment.name

    render() {
        return (
            <div className="researchAndDevelopmentContainer" >
                <Grid fluid>
                    <Row className="headerRD">
                        <h1>RESEARCH && DEVELOPMENT</h1>
                    </Row>
                    <Row className="overviewRD">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Row>
                    <Row className="RDDescription">
                        <Col sm={6} md={4} >
                            <div className="box">
                                
                                <img src="resources/mechanical.jpg" width="100%" height="Calc(width*497/738)"></img>
                                <h1>IoT Devices</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                </p>
                            </div>
                        </Col>

                        < Col sm={6} md={4} >
                            <div className="box">
                                
                                <img src="resources/mechanical.jpg" width="100%" height="Calc(width*497/738)"></img>
                                <h1>Smart Factories</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                </p>
                            </div>
                        </Col>

                        < Col sm={6} md={4} >
                            <div className="box">
                                
                                <img src="resources/mechanical.jpg" width="100%" height="Calc(width*497/738)"></img>
                                <h1>Smart Business</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
