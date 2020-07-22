import React from 'react';
import './FeatureMessage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeatureCard from './FeatureCard';

const Type2 = '/images/background/SectionBackground2.svg';

const bgStyle2 = {
  backgroundImage: 'url(' + Type2 + ')',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  backgroundSize: 'cover',
  height: 'auto',
};

const FeatureMessage = (props) => {
  return (
    <div id='screen-two' style={bgStyle2}>
      <section className='screen-two-section'>
        <div className='feature-message-title'>
          <h2>OUR FEATURES</h2>
        </div>
        <Row className='screen-two-row'>
          <Col lg={6}>
            <div className='feature-container'>
              <FeatureCard
                icon={props.content.feature_1_icon}
                title={props.content.feature_1_title}
                sub={props.content.feature_1_sub}
                className='feature1'
              />
            </div>

            <div className='feature-container2'>
              <FeatureCard
                icon={props.content.feature_2_icon}
                title={props.content.feature_2_title}
                sub={props.content.feature_2_sub}
                className='feature2'
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className='feature-message'>
              <p>{props.content.our_features}</p>
            </div>

            <div className='feature-container3'>
              <FeatureCard
                icon={props.content.feature_3_icon}
                title={props.content.feature_3_title}
                sub={props.content.feature_3_sub}
                className='feature3'
              />
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default FeatureMessage;
