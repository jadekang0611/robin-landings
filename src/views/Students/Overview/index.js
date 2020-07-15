import React from 'react';
import './Overview.css';
import STUDENTOVERVIEW from '../../../assets/student-overview.png';
import POLYGON from '../../../assets/Polygon4.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Feature } from '../../../components';

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
            <h3>
              Id in et excepteur ullamco in amet eiusmod duis cupidatat. Id
            </h3>
          </div>
          <Row>
            <Col>
              <div className="feature-container">
                <Feature className="feature1" />
              </div>
            </Col>

            <Col>
              <div className="feature-container-description">
                <h3>
                  Id in et excepteur ullamco in amet eiusmod duis cupidatat. Id
                </h3>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Overview;
