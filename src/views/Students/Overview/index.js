import React from 'react';
import './Overview.css';
import STUDENTOVERVIEW from '../../../assets/student-overview.png';
import DEMO1 from '../../../assets/StudentApp1.png';
import DEMO2 from '../../../assets/StudentApp2.png';
import DEMO3 from '../../../assets/StudentApp3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Feature, Testimonials } from '../../../components';
import image2 from './image2.png';

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

      <Container id="screen-four">
        <section>
          <Row className="screen-four-row1">
            <Col lg={6}>
              <div className="sneak-peek-container">
                <h2>Nostrud proident</h2>
                <h3>
                  Detailed analytics allows to track your progress by tasks, and
                  submitted applications.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper leo volutpat eu sit tellus integer cursus enim
                  condimentum. Mi venenatis eget et tellus, condimentum. Id
                  pulvinar sed ultricies eget.
                </p>
              </div>
            </Col>
            <Col lg={6} className="demo-container">
              <img src={DEMO1} alt="robin-application-img" width="100%" />
            </Col>
          </Row>
          <Row className="screen-four-row2">
            <Col lg={6} className="demo-container">
              <img src={DEMO2} alt="robin-application-img" width="100%" />
            </Col>
            <Col lg={6}>
              <div className="sneak-peek-container">
                <h2>Nostrud proident</h2>
                <h3>
                  Detailed analytics allows to track your progress by tasks, and
                  submitted applications.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper leo volutpat eu sit tellus integer cursus enim
                  condimentum. Mi venenatis eget et tellus, condimentum. Id
                  pulvinar sed ultricies eget.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="sneak-peek-container">
                <h2>Nostrud proident</h2>
                <h3>
                  Detailed analytics allows to track your progress by tasks, and
                  submitted applications.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper leo volutpat eu sit tellus integer cursus enim
                  condimentum. Mi venenatis eget et tellus, condimentum. Id
                  pulvinar sed ultricies eget.
                </p>
              </div>
            </Col>
            <Col lg={6} className="demo-container unique-img">
              <img src={DEMO3} alt="robin-application-img" width="100%" />
            </Col>
          </Row>
        </section>
      </Container>

      <Container id="screen-five">
        <section>
          <Row className="screen-five-row1">
            <Col lg={6}>
              <div className="company-work-with">
                <h2>Companies we are working with</h2>
                <h3>
                  Our students receive the best vacancies in the best companies.
                </h3>
              </div>
            </Col>

            <Col lg={6} className="company-logo-container">
              <div className="companies-work-with">
                <Row>
                  <Col lg={4}>
                    <img src={image2} alt="logo" />
                  </Col>
                  <Col lg={4}>
                    <img src={image2} alt="logo" />
                  </Col>
                  <Col lg={4}>
                    <img src={image2} alt="logo" />
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}>
                    <img src={image2} alt="logo" />
                  </Col>
                  <Col lg={4}>
                    <img src={image2} alt="logo" />
                  </Col>
                  <Col lg={4}>
                    <img src={image2} alt="logo" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Overview;
