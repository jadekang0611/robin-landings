import React from 'react';
import '../Projects.css';
import {
    Container,
    Row,
    Col,
    Button,
} from 'react-bootstrap';

const StepOne = '/images/step1.png';
const StepTwo = '/images/step2.png';
const StepThree = '/images/step3.png';

const ProjectHowTo = () => {

    return (
      <div className='steps-container'>
        <Row className='steps' id='step-one'>
          <Col className='number-container' xs={1}>
            <img src={StepOne} alt='step-one'></img>
          </Col>
          <Col className='step-info-container' xs={9}>
            <p>
              Sign up by submitting your name and email before Project Challenge
              start date!
            </p>
          </Col>
        </Row>
        <Row className='steps' id='step-two'>
          <Col className='number-container' xs={1}>
            <img src={StepTwo} alt='step-two'></img>
          </Col>
          <Col className='step-info-container' xs={9}>
            <p>
              Submit your final Project Challenge before deadline from your
              Robin account. Don't have a Robin account? Don't worry, you can
              create one for free here! <br></br>*Project eligible submissions
              can be either Github, CodePen or deployed URL.
            </p>
          </Col>
        </Row>
        <Row className='steps' id='step-three'>
          <Col className='number-container' xs={1}>
            <img src={StepThree} alt='step-three'></img>
          </Col>
          <Col className='step-info-container' xs={9}>
            <p>Robin will announce winners on Robin and LinkedIn!</p>
          </Col>
        </Row>
      </div>
    );
};

export default ProjectHowTo;
