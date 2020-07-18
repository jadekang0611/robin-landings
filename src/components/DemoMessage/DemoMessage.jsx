import React from 'react';
import './DemoMessage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DEMO1 = '/images/application/StudentApp1.png';
const DEMO2 = '/images/application/StudentApp2.png';
const DEMO3 = '/images/application/StudentApp3.png';

const Type4 = '/images/background/SectionBackground4.svg';

const bgStyle4 = {
  backgroundImage: 'url(' + Type4 + ')',
  backgroundRepeat: 'no-repeat',
};

const DemoMessage = () => {
  return (
    <>
      <div id="screen-four" style={bgStyle4}>
        <section>
          <Row className="screen-four-row1">
            <Col lg={6} className="screen-four-col">
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
          <div className="vertical-gap"></div>
          <Row className="screen-four-row2">
            <Col lg={6} className="demo-container">
              <img src={DEMO2} alt="robin-application-img" width="100%" />
            </Col>
            <Col lg={6} className="screen-four-col">
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
          <div className="vertical-gap"></div>
          <Row>
            <Col lg={6} className="screen-four-col">
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
      </div>
    </>
  );
};

export default DemoMessage;
