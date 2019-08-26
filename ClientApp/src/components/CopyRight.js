import React, { Component } from 'react';
import { Col, Grid, Row, MenuItem, SplitButton } from 'react-bootstrap';
import './CopyRight.css'

export class CopyRight extends Component {
    displayName = CopyRight.name


    render() {
        return (
            <div className="copyRightContainer">
                <Row>
                    <h4>Copyright @ITS Company. All rights reserved. Powered by R&D ITSC</h4>
                </Row>
            </div>
        );
    }
}
