import React from 'react';
import './HowItWorks.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LastMessage } from '../../components';

import content from '../../content.js';

const Steps = [
  {
    title: 'Create an account',
    description:
      'Robin is the place bootcamp students can build their portfolio and work with outcome team.',
    image: '/images/steps/Step1.svg',
  },
  {
    title: 'Build technical portfolio',
    description:
      'Robin saves your activities and turns them into a recruitment-ready portfolio.',
    image: '/images/steps/Step2.svg',
  },
  {
    title: 'Collaborate with outcome team',
    description:
      'Robin streamlines your job-search related activities and generates data so you can receive more personalized outcome support.',
    image: '/images/steps/Step3.svg',
  },
  {
    title: 'Get contacted by employers',
    description:
      'There are many employers out there who would like to hire qualified bootcamp graduates. Robin gives them access to your portfolio and challenge results so you can show off your real technical abilities.',
    image: '/images/steps/Step4.svg',
  },
];

const Type6 = '/images/background/SectionBackground6.svg';

const bgStyle6 = {
  backgroundImage: 'url(' + Type6 + ')',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  backgroundSize: 'cover',
  height: 'auto',
};

const HowItWorks = () => {
  return (
    <div>
      <div id='HowItWorks-Screen'>
        <h2 className='main-title'>How it works?</h2>
        <h3>Four easy steps to get started with Robin</h3>

        <section className='HowItWorks-contents'>
          {Steps.map((step, index) => {
            return (
              <Row
                style={bgStyle6}
                key={index}
                className={Steps.indexOf(step) % 2 === 0 ? 'no-flip' : 'flip'}
              >
                <Col className='step-image-col' lg={6}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className='step-image'
                  />
                </Col>
                <Col lg={6} className='step-contents-col'>
                  <div className='step-contents'>
                    <div className='step-title'>
                      <div className='step-button'>
                        <p>{Steps.indexOf(step) + 1}</p>
                      </div>
                      <div className='horizontal-gap'></div>
                      <h2 className='title'>{step.title}</h2>
                    </div>
                    <p className='description'>{step.description}</p>
                  </div>
                </Col>
              </Row>
            );
          })}
        </section>
      </div>
      <LastMessage content={content.how} />
    </div>
  );
};

export default HowItWorks;
