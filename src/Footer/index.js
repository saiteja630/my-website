import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Fb from '../Logos/fbLogo.png';
import Ln from '../Logos/inLogo.png';
import Insta from '../Logos/insta.png';
import Git from '../Logos/git.png';

import './Footer.scss';

const Footer = () => {
    return <footer>
        <div className="container">
        <Row>
            <Col xs={12} sm={4} className="rights"> 
               <div>© 2020 Created by Sai Teja Madireddy.</div>
               <div>All rights reserved.</div>
            </Col>
            <Col xs={12} sm={8} className="side-bar">
                <a href="https://www.linkedin.com/in/saitejamadireddy/" rel="noopener noreferrer" target="_blank">
                    <img width="50px" style={{backgroundColor: "whitesmoke"}} src={Ln} alt={'Linkedin'}/>
                </a>
                <a href="https://www.facebook.com/saiteja630" rel="noopener noreferrer" target="_blank">
                    <img width="50px" src={Fb} alt={'Facebook'}/>
                </a>
                <a href="https://www.instagram.com/saiteja630/" rel="noopener noreferrer" target="_blank">
                    <img width="50px" src={Insta} alt={'Instagram'}/>
                </a>
                <a href="https://github.com/saiteja630" rel="noopener noreferrer" target="_blank">
                    <img width="50px" src={Git} alt={'GitHub'}/>
                </a>
            </Col>
        </Row></div>
    </footer>
}
export default Footer;