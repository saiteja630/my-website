import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';
//import Logo from '../Logos/my_logo.png';
import './Header.scss';
import { Link } from "react-router-dom";

const Header = () => {
    const [show, setShow] = useState(false);
    return <header>
        <Row>
            <Col xs={6} className="d-none d-sm-block"> 
                <div className="header-main">SAI TEJA MADIREDDY</div>
            </Col>
            <Col xs={6} className="header-main d-none d-sm-block"> 
                <Link to="/" className="header-button"> Home</Link>
                <Link to="/about" className="header-button"> About Me</Link>
                <Link to="/hello" className="header-button"> Say Hello</Link>
            </Col>
            <Col xs={10} className={`d-block d-sm-none container`} onClick={() => setShow(!show)}>
                <div className="small-logo">S T M</div>
            </Col>
            <Col xs={2} className={`d-block d-sm-none side-bar ${show ? 'change': 'nochange'}`} onClick={() => setShow(!show)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </Col>
            <div className={`d-block d-sm-none side-bar ${show ? 'change': 'nochange'}`}>
               <Col xs={12} className="wrapper" onClick={() => setShow(!show)}>
                   <Link to="/" className="header-button"> Home</Link></Col>
               <Col xs={12} className="wrapper" onClick={() => setShow(!show)}>
                   <Link to="/about" className="header-button"> About Me</Link></Col>
               <Col xs={12} className="wrapper" onClick={() => setShow(!show)}>
                   <Link to="/hello" className="header-button"> Say Hello</Link></Col>
            </div>
        </Row>
    </header>
}
export default Header;