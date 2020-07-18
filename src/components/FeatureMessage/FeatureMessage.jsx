import React from 'react';
import './FeatureMessage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeatureCard from './FeatureCard';

const Type2 = '/images/background/SectionBackground2.svg';

const bgStyle2 = {
  backgroundImage: 'url(' + Type2 + ')',
  backgroundRepeat: 'no-repeat',
};

const FeatureMessage = () => {
  return (
    <div id="screen-two" style={bgStyle2}>
      <section className="screen-two-section">
        <div className="feature-message-title">
          <h2>OUR FEATURES</h2>
        </div>
        <Row className="screen-two-row">
          <Col lg={6}>
            <div className="feature-container">
              <FeatureCard className="feature1" />
            </div>

            <div className="feature-container2">
              <FeatureCard className="feature2" />
            </div>
          </Col>

          <Col lg={6}>
            <div className="feature-message">
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
