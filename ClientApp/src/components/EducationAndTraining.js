import React, { Component } from 'react';
import { Col, Grid, Row, MenuItem, SplitButton } from 'react-bootstrap';
import './EducationAndTraining.css';

export class EducationAndTraining extends Component {
    displayName = EducationAndTraining.name

    render() {
        return (
            <div className="educationTrainingContainer">
                <Grid fluid>

                    <Row className="headerEducationAndTraining">
                        <h1>EDUCATION AND TRAINING PROGRAMS</h1>
                    </Row>

                    <Row className="overviewEducationAndTraining">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Row>

                    <Row className="descriptionEducationAndTraining">
                        < Col sm={6} md={6} >
                            <div>
                                <img src="resources/mechanical.jpg" width="90%" height="Calc(width*704/1056)"></img>
                            </div>
                        </Col>

                        <Col sm={6} md={6} >
                            <div className="descriptionEducationAndTrainingText">
                                <h1>OUTSTANDING RESEARCH</h1>
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
        );
    }
}
