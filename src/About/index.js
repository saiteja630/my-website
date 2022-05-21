import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Me from '../Logos/me.png';
import Skills from './Skills';
import './About.scss';

const About = () => {
    return <> <Row>
    <Col xs={12}>
    <div className="container main-banner">
        <h1 className="hello">{`Who am I?`}</h1>
    </div></Col> 
    <Col xs={12} sm={4}>
      <img className="my-image" width="60%" src={Me} alt="my logo"/>
    </Col>
    <Col xs={12} sm={8}>
      <div className="container main-banner about-text">
        <h2 className="subHeader"> Hi, I'm Sai Teja Madireddy. I live in Stamford, CT. </h2>
        <h2 className="subHeader"> I'm originally from a small city named Nellore in AP, India.</h2>
        <h2 className="subHeader">  After completing my Bachelors, I was more intrested to do a masters degree.</h2>
        <h2 className="subHeader">  In accordance to it, I came to US and did Masters from University of Michigan.</h2>
      </div>
    </Col>
    </Row>
     <Skills/></>
}
export default About;