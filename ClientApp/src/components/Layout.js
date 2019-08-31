import React, { Component } from 'react';
import './Layout.css';
import { Home } from './Home';
import { AboutUs } from './AboutUs';
import { OutsourcingServices} from './OutsourcingServices';
import { ResearchAndDevelopment } from './ResearchAndDevelopment';
import { EducationAndTraining } from './EducationAndTraining';
import { Opportunities } from './Opportunities';
import { Footer } from './Footer';
import { CopyRight } from './CopyRight';
import { Header } from './Header';
import { HeaderSideBar } from './HeaderSideBar';

import { Col, Grid, Row } from 'react-bootstrap';

export class Layout extends Component {
    displayName = Layout.name

  render() {
      return (
          <Grid fluid>
              
              <Row style={{ height: "80px", position: "fixed", zIndex: 1, top: 0}}>
                  <Header></Header>
              </Row>
              <HeaderSideBar></HeaderSideBar>
              <Row className="rowForHome">   
                  <Home></Home>
              </Row>
              
              
              
              
              {/*
              <div className="container">
                  <TestComponent></TestComponent> 
                      <Home></Home>
                  <AboutUs></AboutUs>
                  <OutsourcingServices></OutsourcingServices>
                  <ResearchAndDevelopment></ResearchAndDevelopment>
                  <EducationAndTraining></EducationAndTraining>
                  <Opportunities></Opportunities>
                  <Footer></Footer>
                  <CopyRight></CopyRight>
                   
              </div>
              */} 
          </Grid>
    );
  }
}



