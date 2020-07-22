import React from 'react';
import './MainMessage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const StudentMessage = '/images/StudentMessage.svg';
const Type1 = '/images/background/SectionBackground1.svg';

const bgStyle = {
  backgroundImage: 'url(' + Type1 + ')',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  backgroundSize: 'cover',
  height: 'auto',
};

const MainMessage = (props) => {
  return (
    <>
      <div id='screen-one' style={bgStyle}>
        <section className='screen-one-section'>
          <Row>
            <Col md={6} className='screen-one-message'>
              <div>
                <h4>Proident sunt mollit Lorem</h4>
                <h2>{props.content.main}</h2>
                <p>{props.content.sub}</p>
                <Button className='action-button'>Get started</Button>
              </div>
            </Col>
            <Col md={6}>
              {' '}
              <div className='img-container'>
                <img
                  role='presentation'
                  src={StudentMessage}
                  alt='student-main-bg'
                  className='overview-message-img'
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
