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

export class Layout extends Component {
    displayName = Layout.name

  render() {
      return (
          <div>
              <Header></Header>
              {/*
            <div className="container">
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
        </div>
    );
  }
}
