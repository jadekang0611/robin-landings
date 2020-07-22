import React from 'react';
import './Benefits.css';
import { Container, Row, Col } from 'react-bootstrap';
import benefitIcon from '../../assets/vector.png';

const Benefits = (props) => {
  return (
    <Container className='benefitContainer'>
      <Row xs={1} md={2} className='benefitRow'>
        <Row className='benefitLeft' sm={12}>
          <Col className='benefitCol'>
            <h3>Our Benefits</h3>
            <h2>{props.content.benefits_main}</h2>
          </Col>
        </Row>
        <Row className='benefitRight' md={12}>
          <Col className='benefitCol' md={6}>
            <img className='benefitImage' src={benefitIcon} alt='benefit' />
            <h5>{props.content.benefits_1_title}</h5>
            <p>{props.content.benefits_1_desc}</p>
          </Col>
          <Col className='benefitCol' md={6}>
            <img className='benefitImage' src={benefitIcon} alt='benefit' />
            <img className='benefitImage' src={benefitIcon} alt='benefit' />
            <h5>{props.content.benefits_2_title}</h5>
            <p>{props.content.benefits_2_desc}</p>
          </Col>
          <Col className='benefitCol' md={6}>
            <img className='benefitImage' src={benefitIcon} alt='benefit' />
            <img className='benefitImage' src={benefitIcon} alt='benefit' />
            <h5>{props.content.benefits_3_title}</h5>
            <p>{props.content.benefits_3_desc}</p>
          </Col>
          <Col className='benefitCol' md={6}>
            <img className='benefitImage' src={benefitIcon} alt='benefit' />
            <img className='benefitImage' src={benefitIcon} alt='benefit' />
            <h5>{props.content.benefits_4_title}</h5>
            <p>{props.content.benefits_4_desc}</p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Benefits;
