import React from 'react';
import '../OutcomesOverview.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Feature } from '../../../../../components';
import featureImage from '../../../../../assets/feature_dot.png';


const Features = () => {

    return (
      <div>
        <Container className='featuresContainer'>
          <section>
            <div>
              <h2>OUR FEATURES</h2>
            </div>
            <Row className='row1'>
              <Col lg={5}>
                <div className='feature-container'>
                  <Feature className='feature1' />
                </div>

                <div className='feature-container2'>
                  <Feature className='feature2' />
                </div>
              </Col>
              <Col lg={7}>
                <div className='feature-container-description'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius vitae enim vestibulum tincidunt.
                  </p>
                </div>

                <div className='feature-container3'>
                  <Feature className='feature3' />
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    );
};

export default Features;