import React from 'react';
import './FeatureMessage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeatureCard from './index';

const FeatureMessage = () => {
  return (
    <div id="screen-two">
      <section>
        <div>
          <h2 className="feature-container-title">OUR FEATURES</h2>
        </div>
        <Row className="screen-two-row1">
          <Col lg={5}>
            <div className="feature-container">
              <FeatureCard className="feature1" />
            </div>

            <div className="feature-container2">
              <FeatureCard className="feature2" />
            </div>
          </Col>
          <Col lg={7}>
            <div className="feature-container-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                vitae enim vestibulum tincidunt.
              </p>
            </div>

            <div className="feature-container3">
              <FeatureCard className="feature3" />
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default FeatureMessage;
