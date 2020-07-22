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

const DemoMessage = (props) => {
  return (
    <>
      <div id='screen-four' style={bgStyle4}>
        <section>
          <Row className='screen-four-row1'>
            <Col lg={6} className='screen-four-col'>
              <div className='sneak-peek-container'>
                <h2>{props.content.app_1_title}</h2>
                <h3>{props.content.app_1_sub}</h3>
                <p>{props.content.app_1_desc}</p>
              </div>
            </Col>
            <Col lg={6} className='demo-container'>
              <img src={DEMO1} alt='robin-application-img' width='100%' />
            </Col>
          </Row>
          <div className='vertical-gap'></div>
          <Row className='screen-four-row2'>
            <Col lg={6} className='demo-container'>
              <img src={DEMO2} alt='robin-application-img' width='100%' />
            </Col>
            <Col lg={6} className='screen-four-col'>
              <div className='sneak-peek-container'>
                <h2>{props.content.app_2_title}</h2>
                <h3>{props.content.app_2_sub}</h3>
                <p>{props.content.app_2_desc}</p>
              </div>
            </Col>
          </Row>
          <div className='vertical-gap'></div>
          <Row>
            <Col lg={6} className='screen-four-col'>
              <div className='sneak-peek-container'>
                <h2>{props.content.app_3_title}</h2>
                <h3>{props.content.app_3_sub}</h3>
                <p>{props.content.app_3_desc}</p>
              </div>
            </Col>
            <Col lg={6} className='demo-container unique-img'>
              <img src={DEMO3} alt='robin-application-img' width='100%' />
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

export default DemoMessage;
