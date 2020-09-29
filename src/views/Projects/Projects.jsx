import React, { useState } from 'react';
import './Projects.css';
import { Footer } from '../../components';
import {
  ProjectHowTo,
  ProjectResource,
  ProjectSignUp,
} from '../../components/Projects';
import { Container, Row, Col, Card } from 'react-bootstrap';
import copy from 'copy-to-clipboard';

import ShareIcon from './ShareIcon.svg';

const TABS = {
  signUp: <ProjectSignUp />,
  howTo: <ProjectHowTo />,
  resource: <ProjectResource />,
};

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState('signUp');
  const [signStyle, setSignStyle] = useState('nav-click');
  const [enterStyle, setEnterStyle] = useState('nav-item');
  const [resourceStyle, setResourceStyle] = useState('nav-item');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleSignClick = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    setSelectedTab(e.target.id);
    setSignStyle('nav-click');
    setEnterStyle('nav-item');
    setResourceStyle('nav-item');
  };

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

  const copyToClipboard = () => {
    let value = `https://myrobin.io/projects`;
    copy(value);
    setCopySuccess(true);
  };

  return (
    <div className='project-container'>
      <div className='project-card'>
        <div className='project-card-body'>
          <Row className='top-row'>
            <Col sm={5} className='project-title'>
              <h5 className='project-card-title'>
                User Authentication Project
              </h5>
              <h6 className='project-card-subtitle mb-2 text-muted'>
                What you will be building...
              </h6>
            </Col>
            <Col sm={3} className='project-dates'>
              <p>10/5/20 - 10/9/20</p>
            </Col>
            <Col sm={2} className='project-share-container'>
              <Row className='projects-share'>
                <Col xs={12} onClick={copyToClipboard}>
                  <img src={ShareIcon} alt='share' className='share' />
                  <p>Copy Link</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <p className='project-card-text'>
            User Authentication might sound intimidating, but may be easier than
            you think. It's always the first page we see when we want to sign up
            or log into our favorite sites. Our challenge this week is to
            recreate your favorite site sign up and login page with full CRUD
            operations. Don't forget to add a bit of your personality to it!
          </p>
          <hr></hr>
          <ul className='nav' id='project-nav'>
            <li className={signStyle} id='signUp' onClick={handleSignClick}>
              Sign Up
            </li>
            <li className={enterStyle} id='howTo' onClick={handleEnterClick}>
              How To Enter
            </li>
            <li
              className={resourceStyle}
              id='resource'
              onClick={handleResourceClick}
            >
              Resources
            </li>
          </ul>
          {TABS[selectedTab]}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
