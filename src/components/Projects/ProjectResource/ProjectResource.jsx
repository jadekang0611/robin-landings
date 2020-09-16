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
                tutorial to deploy to Firebase and other free sites.
              </p>
            </div>
          </Col>
          <Col className='resource-card' xs={12} lg={3}>
            <div className='resource-card-body'>
              <p className='resource-card-text'>
                Need some inspiration? Here are some links on how user
                authentication work.
              </p>
            </div>
          </Col>
          <Col className='resource-card' xs={12} lg={3}>
            <div className='resource-card-body'>
              <p className='resource-card-text'>
                Additional resource cards for participants
              </p>
            </div>
          </Col>
        </Row>
      </>
    );
};

export default ProjectResource;
