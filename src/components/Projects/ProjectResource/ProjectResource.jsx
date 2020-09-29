import React from 'react';
import '../Projects.css';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';


const ProjectResource = () => {

    return (
      <>
        <Row className='resource-row'>
          <Col className='resource-card' xs={12} lg={3}>
            <div className='resource-card-body'>
              <p className='resource-card-text'>
                Not sure how to deploy your project to a hosting site? Here is a
                tutorial to deploy to{' '}
                <a
                  href='https://www.canva.com/design/DAEJCI40V9w/5YRzPe_aPY9ggRIkZWpCtw/view?website#1:hosting-option-1'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Heroku
                </a>{' '}
                and{' '}
                <a
                  href='https://www.canva.com/design/DAEJCI40V9w/5YRzPe_aPY9ggRIkZWpCtw/view?website#1:hosting-option-2'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Firebase
                </a>
                .
              </p>
            </div>
          </Col>
          <Col className='resource-card' xs={12} lg={3}>
            <div className='resource-card-body'>
              <p className='resource-card-text'>
                Need some inspiration?{' '}
                <a
                  href='https://www.canva.com/design/DAEJCI40V9w/5YRzPe_aPY9ggRIkZWpCtw/view?website#1:authentication-options'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Here
                </a>{' '}
                are some links on how user authentication work and the different
                types of authentications.
              </p>
            </div>
          </Col>
          <Col className='resource-card' xs={12} lg={3}>
            <div className='resource-card-body'>
              <p className='resource-card-text'>
                Learn more on how to get started with{' '}
                <a
                  href='https://www.canva.com/design/DAEJCI40V9w/5YRzPe_aPY9ggRIkZWpCtw/view?website#1:firebase-authentication'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Firebase Authentication
                </a>
                .
              </p>
            </div>
          </Col>
        </Row>
      </>
    );
};

export default ProjectResource;
