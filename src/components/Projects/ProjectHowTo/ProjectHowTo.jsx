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
      <div>
        <Row>
          <img src={StepOne} alt='step-one'></img>
          <p>
            Sign up by submitting your name and email before Project Challenge
            start date!
          </p>
        </Row>
        <Row>
          <img src={StepTwo} alt='step-two'></img>
          <p>
            Submit your final Project Challenge before deadline from your Robin
            account. Don't have a Robin account? Don't worry, you can create one
            for free here! <br></br>*Project eligible submissions can be either
            Github, CodePen or deployed URL.
          </p>
        </Row>
        <Row>
          <img src={StepThree} alt='step-three'></img>
          <p>Robin will announce winners on Robin and LinkedIn!</p>
        </Row>
      </div>
    );
};

export default ProjectHowTo;
