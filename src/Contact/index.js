import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
//import Logo from '../Logos/devIcon.svg';
import './Contact.scss';

const ContactForm = () => {
  const [state, setState] = useState({ name: '', email: '', subject: '', message: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = event => {
    setLoading(true);
    event.preventDefault();
    axios.post('https://madireddy.herokuapp.com/send', { ...state }).then(response => {
      setResult(response.data);
      setState({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }).catch(() => {
      setResult({ success: false, message: 'Something went wrong. Try again later'});
      setLoading(false);
    });
  };

  const onInputChange = event => {
    const { name, value } = event.target;
    setState({...state,[name]: value});
  };

  return <div className="contact-info container">
    <Row className="contact-info-header">
    <Col xs={12}>
    <h1 className="hello">{'Want to connect?'}</h1>
    <h2 className="subHeader">{`Fill this form out, I will reach out to you soon!`}</h2>
    </Col></Row>
    {result && <Alert variant={`${result.success ? 'success' : 'danger'}`}>
        <Alert.Heading>{result.message}</Alert.Heading>
      </Alert>}
    {loading ? 
    <Spinner animation="border" role="status"> <span className="sr-only">Loading...</span></Spinner> : null }
    <form onSubmit={sendEmail}>
      <Form.Group controlId="name" as={Row}>
        <Form.Label className="input-name" column sm="3" xs="12">Full Name</Form.Label>
        <Col sm={9}>
        <Form.Control  type="text" name="name" value={state.name} placeholder="Enter your full name"
          onChange={onInputChange}
        /></Col>
      </Form.Group>
      <Form.Group controlId="email" as={Row}>
        <Form.Label className="input-name" column sm="3" xs="12">Email</Form.Label>
        <Col sm={9}>
        <Form.Control type="text" name="email" value={state.email} placeholder="Enter your email"
          onChange={onInputChange}
        /></Col>
      </Form.Group>
      <Form.Group controlId="subject" as={Row}>
        <Form.Label className="input-name" column sm="3" xs="12">Subject</Form.Label>
        <Col sm={9}>
        <Form.Control type="text" name="subject" value={state.subject} placeholder="Enter subject"
          onChange={onInputChange}
        /></Col>
      </Form.Group>
      <Form.Group controlId="subject" as={Row}>
        <Form.Label className="input-name" column sm="3" xs="12">Message</Form.Label>
        <Col sm={9}>
        <Form.Control as="textarea" name="message" value={state.message} rows="3" placeholder="Enter your message"
          onChange={onInputChange}
        /></Col>
      </Form.Group>
      {loading ? 
      <Button className="submit-button" variant="primary" disabled>
        <Spinner  animation="border" size="sm" role="status" aria-hidden="true"/>Submitting...
      </Button> : 
      <Button className="submit-button" type="submit">Submit</Button> }
    </form>
  </div>
};

export default ContactForm;