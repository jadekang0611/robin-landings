import React from 'react';
import './Help.css';
import helpImage from '../../assets/help-center.png';
import { Container, Row, Col, InputGroup } from 'react-bootstrap';
import { Footer } from '../../components';

const Help = () => {
  return (
    <div className='helpContainer'>
      <Container>
        <Row>
          <Col>
          <h5>Help Center</h5>
          <h1>How can we help you?</h1>
          <InputGroup>Describe your issue</InputGroup>
          </Col>
          <Col>
            <img
              className='helpImage'
              src={helpImage}
              alt='Help Center'
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Help;

