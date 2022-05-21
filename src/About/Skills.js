import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './About.scss';

const Circular = (values) => {
    console.log(values)
    return <Row className="container circular">
        <Col xs={12}>
    <CircularProgressbar className="circle-anim" 
    value={values.percentage} text={`${values.percentage}%`}
    styles={buildStyles({ strokeLinecap: 'butt', textSize: '16px',
        pathColor: 'palevioletred',
        textColor: '#f5f5f5', trailColor: '#f5f5f5'})}/>
        <h2 className="circle-text">{values.text}</h2>
        </Col>
    </Row>
}

const Skills = () => {
    return <Row className="skills">
    <Col xs={12}>
        <div className="container main-banner">
            <h1 className="hello" style={{marginBottom:'60px'}}>{`My Finest Skills`}</h1>
        </div>
    </Col>
    <Col xs={12}>
        <div className="container">
            <h2 className="subheader"> I have broad range of applicable skills that will enable me 
            to be a valuable member of a Team. These include specific technical skills I have developed over 
            past few years along with strong soft skills developed over the course of my career.</h2>
      </div>
    </Col>
    <Col xs={12} sm={3}> <Circular percentage={99} text={"Responsive Designs"}/> </Col>
    <Col xs={12} sm={3}> <Circular percentage={100} text={"Web Development"}/> </Col>
    <Col xs={12} sm={3}> <Circular percentage={95} text={"Mobile Apps"}/> </Col>
    <Col xs={12} sm={3}> <Circular percentage={85} text={"Graphic Design"}/> </Col>
    </Row>
}

export default Skills;