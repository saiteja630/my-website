import React from 'react';
import {Row, Col} from 'react-bootstrap';
//import Avatar from '../Logos/my_image.png';
import Logo from '../Logos/devIcon.svg';
//import Logo from './icon';

import './Carousel.scss';

const CarouselComp = () => {
  return <Row>
    <Col xs={12} className="d-block d-sm-none container">
      <img className="hero-image" src={Logo} alt="saiMadiredd"/>
    </Col>
    <Col xs={12}>
      <div className="container main-banner">
        <h1 className="hello">{`Hi There,`}</h1>
        <h1 className="hello">{`Welcome to my page.`}</h1>
        <h2 className="subHeader">{`I design and code beautifully simple things, and I love what I do.`}</h2>
      </div>
    </Col>
    <Col xs={12} className="d-none d-sm-block">
      {/* <Logo/> */}
      <i className="hero-logo"/>
      <img className="hero-image" src={Logo} alt="saiMadiredd"/>
    </Col>
  </Row>
}
export default CarouselComp;