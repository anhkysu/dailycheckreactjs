import React, { Component } from 'react';
import { Col, Grid, Row, MenuItem, SplitButton } from 'react-bootstrap';
import './Opportunites.css';

export class Opportunities extends Component {
    displayName = Opportunities.name
    render() {
        return (
            <div className="opportunitiesContainer">
                <Grid fluid>
                    <Row className="headerOpportunities">
                        <h1>YOUR OPPORTUNITIES, OUR OPPORTUNITIES</h1>
                    </Row>

                    <Row className="overviewOpportunities">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        </p>
                    </Row>

                    <Row className="descriptionOpportunities">
        
                        <Col sm={6} md={6} >
                            <div className="descriptionOpportunitiesText">
                                <p>
                                    · Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                </p>
                                <br></br>
                                <p>
                                    · Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                </p>
                                <br></br>
                                <p>
                                    · Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                </p>
                                <br></br>
                                <p>
                                    · Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                </p>
                            </div>
                        </Col>

                        < Col sm={6} md={6} >
                            <div className="seeInformationOpportunities">
                                <div className="whatKindOfOpportunities">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="formGroupExampleInput"
                                        placeholder="What are you looking for?"
                                    />
                                    <button ><img src="resources/searchIcon.png" width="40px" height="40px"></img></button>
                                </div>

                                <div>
                                    <button className="seeInformation"><span>SEE INFORMATION</span></button>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}
