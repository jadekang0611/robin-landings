import React from 'react';
import './Benefits.css';
import { Container, Row, Col } from 'react-bootstrap';
import benefitIcon from '../../assets/vector.png';

const Benefits = () => {
  return (
    <Container className="benefitContainer">
      <Row xs={1} md={2} className="benefitRow">
        <Row className="benefitLeft" sm={12}>
          <Col className="benefitCol">
            <h3>Our Benefits</h3>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              vitae enim vestibulum tincidunt.
            </h2>
          </Col>
        </Row>
        <Row className="benefitRight" md={12}>
          <Col className="benefitCol" md={6}>
            <img className="benefitImage" src={benefitIcon} alt="benefit" />
            <h5>1 - Diam placerat.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt.
            </p>
          </Col>
          <Col className="benefitCol" md={6}>
            <img className="benefitImage" src={benefitIcon} alt="benefit" />
            <h5>2 - Diam placerat.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt.
            </p>
          </Col>
          <Col className="benefitCol" md={6}>
            <img className="benefitImage" src={benefitIcon} alt="benefit" />
            <h5>3 - Diam placerat.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt.
            </p>
          </Col>
          <Col className="benefitCol" md={6}>
            <img className="benefitImage" src={benefitIcon} alt="benefit" />
            <h5>4 - Diam placerat.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt.
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Benefits;
