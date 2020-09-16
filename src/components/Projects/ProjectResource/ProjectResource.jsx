import React from 'react';
import '../Projects.css';
import {
    Container,
    Row,
    Col,
    Button,
} from 'react-bootstrap';


const ProjectResource = () => {

    return (
      <>
        <Row>
          <div class='card'>
            <div class='card-body'>
              <p class='card-text'>
                Not sure how to deploy your project to a hosting site? Here is a
                tutorial to deploy to Firebase and other free sites.
              </p>
            </div>
          </div>
          <div class='card'>
            <div class='card-body'>
              <p class='card-text'>
                Need some inspiration? Here are some links on how user
                authentication work.
              </p>
            </div>
          </div>
        </Row>
      </>
    );
};

export default ProjectResource;
