import React from 'react';
import '../Projects.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const StepOne = '/images/step1.png';
const StepTwo = '/images/step2.png';
const StepThree = '/images/step3.png';

const ProjectHowTo = () => {
  return (
    <Container className='steps-container'>
      <Row className='steps' id='step-one'>
        <Col className='number-container' xs={1}>
          <img src={StepOne} alt='step-one'></img>
        </Col>
        <Col className='step-info-container' xs={9}>
          <p>
            Sign up by submitting your name and email before Project Challenge
            start date.
          </p>
        </Col>
      </Row>
      <Row className='steps' id='step-two'>
        <Col className='number-container' xs={1}>
          <img src={StepTwo} alt='step-two'></img>
        </Col>
        <Col className='step-info-container' xs={9}>
          <p>
            Submit your final Project Challenge before the deadline from your
            Robin account. Project eligible submissions can be either Github,
            CodePen or deployed URL.
            <br></br>
            <br></br>
            <span id='free-account'>
              Don't have a Robin account? Don't worry, you can create your free
              one{' '}
              <a
                href='https://app.myrobin.io/sign-up'
                target='_blank'
                rel='noopener noreferrer'
              >
                here
              </a>
              !
            </span>
          </p>
        </Col>
      </Row>
      <Row className='steps' id='step-three'>
        <Col className='number-container' xs={1}>
          <img src={StepThree} alt='step-three'></img>
        </Col>
        <Col className='step-info-container' xs={9}>
          <p>
            Robin will announce winners on{' '}
            <a
              href='https://myrobin.io/about-us'
              target='_blank'
              rel='noopener noreferrer'
            >
              Robin
            </a>{' '}
            and{' '}
            <a
              href='https://www.linkedin.com/company/joinrobin'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
            !
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectHowTo;
