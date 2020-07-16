import React from 'react';
import './Overview.css';
import STUDENTOVERVIEW from '../../../assets/student-overview.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Feature, Testimonials } from '../../../components';

const Overview = () => {
  return (
    <div id="student-body">
      <Container id="screen-one">
        <section>
          <Row>
            <Col md={6}>
              <div>
                <p>Proident sunt mollit Lorem</p>
                <h2>
                  The main message should be like this in three lines 65 symbol
                </h2>
                <p>
                  Culpa incididunt magna et tempor sit minim laborum voluptate.
                  Aliquip aliquip occaecat esse amet consectetur.
                </p>
              </div>
              <Button>Get started</Button>
            </Col>
            <Col md={6}>
              {' '}
              <div className="img-container">
                <img
                  role="presentation"
                  src={STUDENTOVERVIEW}
                  alt="student-main-bg"
                  className="img-bottom"
                  width="100%"
                />
              </div>
            </Col>
          </Row>
        </section>
      </Container>

      <Container id="screen-two">
        <section>
          <div>
            <h2 className="feature-container-title">OUR FEATURES</h2>
          </div>
          <Row className="screen-two-row1">
            <Col lg={5}>
              <div className="feature-container">
                <Feature className="feature1" />
              </div>

              <div className="feature-container2">
                <Feature className="feature2" />
              </div>
            </Col>
            <Col lg={7}>
              <div className="feature-container-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius vitae enim vestibulum tincidunt.
                </p>
              </div>

              <div className="feature-container3">
                <Feature className="feature3" />
              </div>
            </Col>
          </Row>
        </section>
      </Container>

      <div id="screen-three">
        <section>
          <Testimonials />
        </section>
      </div>
    </div>
  );
};

export default Overview;
