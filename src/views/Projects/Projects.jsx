import React, { useState } from 'react';
import './Projects.css';
import { Footer } from '../../components';
import { ProjectHowTo, ProjectResource, ProjectSignUp } from '../../components/Projects';
import { Container, Row, Col, Card } from 'react-bootstrap';

import ShareIcon from './ShareIcon.svg';

const TABS = {
    'signUp': <ProjectSignUp />,
    'howTo': <ProjectHowTo />,
    'resource': <ProjectResource />,
}


const Projects = () => {
    const [ selectedTab, setSelectedTab ] = useState('signUp');
    const [ signStyle, setSignStyle ] = useState('nav-click');
    const [ enterStyle, setEnterStyle ] = useState ('nav-item');
    const [ resourceStyle, setResourceStyle ] = useState('nav-item');

    const handleSignClick = (e) => {
        e.preventDefault();
        console.log(e.target.id)
        setSelectedTab(e.target.id);
        setSignStyle('nav-click');
        setEnterStyle('nav-item');
        setResourceStyle('nav-item');
    }

    const handleEnterClick = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        setSelectedTab(e.target.id);
        setEnterStyle('nav-click');
        setSignStyle('nav-item');
        setResourceStyle('nav-item');
    };

    const handleResourceClick = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        setSelectedTab(e.target.id);
        setResourceStyle('nav-click');
        setSignStyle('nav-item');
        setEnterStyle('nav-item');

    };

    return (
      <>
        <div class='project-card'>
          <div class='project-card-body'>
            <Row>
              <Col sm={5} className='project-title'>
                <h5 class='project-card-title'>User Authentication Project</h5>
                <h6 class='project-card-subtitle mb-2 text-muted'>
                  What you will be building...
                </h6>
              </Col>
              <Col sm={3} className='project-dates'>
                <p>10/5/20 - 10/9/20</p>
              </Col>
              <Col sm={3} className='project-share-container'>
                <Row className='projects-share'>
                  <img src={ShareIcon} alt='share' className='share' />
                  <p>Share Profile</p>
                </Row>
                <Row className='projects-share'>
                  <i class='fas fa-envelope'></i>
                  <i class='fab fa-linkedin'></i>
                </Row>
              </Col>
            </Row>
            <p class='project-card-text'>
              User Authentication might sound intimidating, but may be easier
              than you think. It's always the first page we see when we want to
              log into our favorite sites. Our challenge this week is to
              recreate your favorite site sign up and login page with full CRUD operations.
              Don't forget to add a bit of your personality to it!
            </p>
            <hr></hr>
            <ul class='nav' id='project-nav'>
              <li class={signStyle} id='signUp' onClick={handleSignClick}>
                Sign Up
              </li>
              <li class={enterStyle} id='howTo' onClick={handleEnterClick}>
                How To Enter
              </li>
              <li
                class={resourceStyle}
                id='resource'
                onClick={handleResourceClick}>
                Resources
              </li>
            </ul>
            {TABS[selectedTab]}
          </div>
        </div>
        <Footer />
      </>
    );
};

export default Projects;
