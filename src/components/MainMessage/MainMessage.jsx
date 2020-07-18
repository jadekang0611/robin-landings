import React from 'react';
import './MainMessage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const StudentMessage = '/images/StudentMessage.svg';
const Type1 = '/images/background/SectionBackground1.svg';

const bgStyle = {
  backgroundImage: 'url(' + Type1 + ')',
};

const MainMessage = () => {
  return (
    <>
      <div id="screen-one" style={bgStyle}>
        <section className="screen-one-section">
          <Row>
            <Col md={6} className="screen-one-message">
              <div>
                <h4>Proident sunt mollit Lorem</h4>
                <h2>
                  The main message should be like this in three lines 65 symbol
                </h2>
                <p>
                  Culpa incididunt magna et tempor sit minim laborum voluptate.
                  Aliquip aliquip occaecat esse amet consectetur.
                </p>
                <Button className="action-button">Get started</Button>
              </div>
            </Col>
            <Col md={6}>
              {' '}
              <div className="img-container">
                <img
                  role="presentation"
                  src={StudentMessage}
                  alt="student-main-bg"
                  className="overview-message-img"
                />
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

export default MainMessage;
