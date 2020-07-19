import React from 'react';
import { useHistory } from 'react-router';
import '../OutcomesOverview.css';
import outcomeImage from '../../../../../assets/outcome-overview.png';
import { Container, Row, Col, Form } from 'react-bootstrap';

const MainMessage = () => {
    let history = useHistory()

    function handleClick() {
        history.push('/request-demo')
    }

    return (
      <div className='messageContainer'>
        <Container>
          <Row>
            <Col xs={12} md={6} className='message'>
              <h5>Lorem Ipsum Dolor Site Amet</h5>
              <h1>The main message will go here with three lines 65 symbol</h1>
              <h4>
                Lorem ipsum dolor site amet, consectetur adipiscing elit. Sed
                duis mi est id non ornare vestibulum orci.
              </h4>
              <button
                type='button'
                onClick={handleClick}
                className='demo-button'>
                Request for Demo
              </button>
            </Col>
            <Col xs={12} md={5} className='requestRight'>
              <img
                className='messageImage'
                src={outcomeImage}
                alt='Outcome Overview'
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default MainMessage;